// Cache version — bump this to invalidate all old caches
const CACHE = 'anest-v122-20261026-1109-0279fd4b';

/* O que o app precisa para abrir E IMPRIMIR sem internet. Os gabaritos PDF
   entram aqui de propósito: antes só './' era guardado na instalação, o PDF da
   ficha só ia para o cache na primeira impressão com rede — e cada atualização
   apaga o cache anterior. Resultado: logo depois de atualizar, no centro
   cirúrgico sem Wi-Fi, "Imprimir" falhava. */
const PRECACHE = [
  './',
  './index.html',
  './ficha-template.pdf',
  './hemoba-template.pdf',
  './manifest.json',
  './icon.svg',
];

/** .js / .css: arquivos de código do app. */
function ehCodigo(url) {
  const caminho = new URL(url, self.location.href).pathname;
  return caminho.endsWith('.js') || caminho.endsWith('.css');
}

/**
 * A resposta pode ir para o cache? Só 200 e — para .js/.css — nunca HTML. O
 * hosting reescreve qualquer caminho desconhecido para o index.html (SPA):
 * um chunk da versão anterior, que não existe mais no servidor, volta como
 * 200 text/html. Guardado no cache com o nome do .js, ele envenenava aquele
 * endereço: daí em diante o app recebia HTML no lugar do código, até a
 * próxima troca de cache.
 */
function podeGuardar(url, response) {
  if (!response || response.status !== 200) return false;
  if (!ehCodigo(url)) return true;
  const tipo = (response.headers.get('content-type') || '').toLowerCase();
  return !tipo.includes('text/html');
}

/** `cache.add` sem guardar o que `podeGuardar` recusa (cache.add guarda qualquer 200). */
async function guardarSeValido(cache, url) {
  try {
    const res = await fetch(url);
    if (podeGuardar(url, res)) await cache.put(url, res);
  } catch {
    // sem rede: fica para a próxima
  }
}

/** Arquivos de código referenciados pelo index.html (nomes com hash mudam a cada versão). */
async function assetsDoIndex(cache) {
  try {
    const res = await fetch('./index.html', { cache: 'no-store' });
    if (!res.ok) return;
    const html = await res.clone().text();
    await cache.put('./index.html', res);
    const refs = [...html.matchAll(/(?:src|href)="(\.\/assets\/[^"]+)"/g)].map(m => m[1]);
    await Promise.all(refs.map(u => guardarSeValido(cache, u)));
  } catch {
    // sem rede na instalação: fica com o que der
  }
  // Os carregados sob demanda (farmácia, TCLE, páginas) — lista gerada no build.
  try {
    const res = await fetch('./precache.json', { cache: 'no-store' });
    if (!res.ok) return;
    const lista = await res.json();
    if (Array.isArray(lista)) {
      await Promise.all(lista.map(n => guardarSeValido(cache, './' + n)));
    }
  } catch {
    // sem rede na instalação: fica com o que der
  }
}

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(async cache => {
      // Um arquivo que falhe não pode derrubar os outros (addAll é tudo-ou-nada).
      await Promise.all(PRECACHE.map(u => cache.add(u).catch(() => {})));
      await assetsDoIndex(cache);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Delete ALL caches that don't match current version
          if (cacheName !== CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Listen for skipWaiting messages from the client
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/** Rede primeiro, mas sem esperar para sempre: Wi-Fi de hospital "conectado"
    e sem resposta deixava o app minutos em tela branca. Passado o prazo, se
    houver cópia no cache ela é servida e a rede continua atualizando por trás. */
const PRAZO_REDE_MS = 3500;

function redePrimeiroComPrazo(request) {
  const daRede = fetch(request).then(async response => {
    if (podeGuardar(request.url, response)) {
      const copia = response.clone();
      caches.open(CACHE).then(cache => cache.put(request, copia));
      return response;
    }
    // Código pedido e HTML devolvido (chunk de versão que saiu do ar): se
    // ainda houver a cópia certa no cache, ela vale mais que o index.html.
    // Sem cópia, o HTML segue e o import() falha — o app recarrega sozinho
    // para a versão nova (src/utils/atualizacaoDoApp.ts).
    if (response && response.status === 200 && ehCodigo(request.url)) {
      const cached = await caches.match(request);
      if (cached) return cached;
    }
    return response;
  });

  const doCacheDepoisDoPrazo = new Promise(resolve => {
    setTimeout(async () => {
      const cached = await caches.match(request);
      if (cached) resolve(cached);
    }, PRAZO_REDE_MS);
  });

  return Promise.race([
    daRede.catch(async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      // Sem rede e sem cópia: index.html só para PÁGINA. Para um .js/.css o
      // HTML viraria "tipo MIME errado"; o erro de rede é o honesto.
      if (ehCodigo(request.url)) return Response.error();
      return (await caches.match('./index.html')) || (await caches.match('./')) || Response.error();
    }),
    doCacheDepoisDoPrazo,
  ]);
}

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') {
    return;
  }

  const url = new URL(event.request.url);

  // Never cache cross-origin requests
  if (url.origin !== self.location.origin) {
    return;
  }

  // NETWORK-FIRST (com prazo) para HTML, JS, CSS — código novo quando há rede
  const isAppShell = event.request.mode === 'navigate' ||
                     url.pathname.endsWith('.html') ||
                     url.pathname.endsWith('.js') ||
                     url.pathname.endsWith('.css') ||
                     url.pathname === '/' ||
                     url.pathname.endsWith('/');

  if (isAppShell) {
    event.respondWith(redePrimeiroComPrazo(event.request));
    return;
  }

  // CACHE-FIRST for static assets (fonts, images, PDFs) — they rarely change
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request).then(response => {
        if (podeGuardar(event.request.url, response)) {
          const responseToCache = response.clone();
          caches.open(CACHE).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      }).catch(() => caches.match(event.request));
    })
  );
});
