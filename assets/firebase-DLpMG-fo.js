var AD=Object.defineProperty;var RD=(r,e,t)=>e in r?AD(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var J=(r,e,t)=>RD(r,typeof e!="symbol"?e+"":e,t);const vD=()=>{};var Sf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},PD=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],a=r[t++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},rg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,a=o?r[s+1]:0,u=s+2<r.length,l=u?r[s+2]:0,B=i>>2,d=(i&3)<<4|a>>4;let C=(a&15)<<2|l>>6,g=l&63;u||(g=64,o||(C=64)),n.push(t[B],t[d],t[C],t[g])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(ng(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):PD(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],a=s<r.length?t[r.charAt(s)]:0;++s;const l=s<r.length?t[r.charAt(s)]:64;++s;const d=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||a==null||l==null||d==null)throw new bD;const C=i<<2|a>>4;if(n.push(C),l!==64){const g=a<<4&240|l>>2;if(n.push(g),d!==64){const D=l<<6&192|d;n.push(D)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class bD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SD=function(r){const e=ng(r);return rg.encodeByteArray(e,!0)},Su=function(r){return SD(r).replace(/\./g,"")},bB=function(r){try{return rg.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND=()=>sg().__FIREBASE_DEFAULTS__,OD=()=>{if(typeof process>"u"||typeof Sf>"u")return;const r=Sf.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},FD=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&bB(r[1]);return e&&JSON.parse(e)},ic=()=>{try{return vD()||ND()||OD()||FD()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},ig=r=>{var e,t;return(t=(e=ic())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},LD=r=>{const e=ig(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},SB=()=>{var r;return(r=ic())==null?void 0:r.config},og=r=>{var e;return(e=ic())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VD(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,i=r.sub||r.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Su(JSON.stringify(t)),Su(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function ug(){var e;const r=(e=ic())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xD(){return typeof window<"u"||cg()}function cg(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function MD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function GD(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function UD(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HD(){const r=tt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function lg(){return!ug()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bg(){return!ug()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function hg(){try{return typeof indexedDB=="object"}catch{return!1}}function qD(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jD="FirebaseError";class In extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=jD,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ca.prototype.create)}}class Ca{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?JD(i,n):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new In(s,a,n)}}function JD(r,e){try{let t=0,n="";for(;t<r.length;){const s=r.indexOf("{$",t);if(s===-1){n+=r.substring(t);break}const i=r.indexOf("}",s+2);if(i===-1){n+=r.substring(t);break}const o=r.substring(s+2,i),a=e[o];n+=r.substring(t,s)+(a!=null?String(a):`<${o}?>`),t=i+1}return n}catch{return r}}function KD(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Zt(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(Nf(i)&&Nf(o)){if(!Zt(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Nf(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function yo(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function wo(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function zD(r,e){const t=new QD(r,e);return t.subscribe.bind(t)}class QD{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");WD(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=ml),s.error===void 0&&(s.error=ml),s.complete===void 0&&(s.complete=ml);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WD(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function ml(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(r){return r&&r._delegate?r._delegate:r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function NB(r){return(await fetch(r,{credentials:"include"})).ok}class ds{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new ag;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XD(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);n===a&&o.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:YD(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YD(r){return r===zr?void 0:r}function XD(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $D(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OB=[];var he;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(he||(he={}));const fg={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},ZD=he.INFO,ey={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},ty=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=ey[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class FB{constructor(e){this.name=e,this._logLevel=ZD,this._logHandler=ty,this._userLogHandler=null,OB.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}function ny(r){OB.forEach(e=>{e.setLogLevel(r)})}function ry(r,e){for(const t of OB){let n=null;e&&e.level&&(n=fg[e.level]),r===null?t.userLogHandler=null:t.userLogHandler=(s,i,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");i>=(n??s.logLevel)&&r({level:he[i].toLowerCase(),message:a,args:o,type:s.name})}}}const sy=(r,e)=>e.some(t=>r instanceof t);let Of,Ff;function iy(){return Of||(Of=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oy(){return Ff||(Ff=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cg=new WeakMap,jl=new WeakMap,pg=new WeakMap,_l=new WeakMap,LB=new WeakMap;function ay(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Cr(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Cg.set(t,r)}).catch(()=>{}),LB.set(e,r),e}function uy(r){if(jl.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});jl.set(r,e)}let Jl={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return jl.get(r);if(e==="objectStoreNames")return r.objectStoreNames||pg.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Cr(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function cy(r){Jl=r(Jl)}function ly(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(El(this),e,...t);return pg.set(n,e.sort?e.sort():[e]),Cr(n)}:oy().includes(r)?function(...e){return r.apply(El(this),e),Cr(Cg.get(this))}:function(...e){return Cr(r.apply(El(this),e))}}function By(r){return typeof r=="function"?ly(r):(r instanceof IDBTransaction&&uy(r),sy(r,iy())?new Proxy(r,Jl):r)}function Cr(r){if(r instanceof IDBRequest)return ay(r);if(_l.has(r))return _l.get(r);const e=By(r);return e!==r&&(_l.set(r,e),LB.set(e,r)),e}const El=r=>LB.get(r);function hy(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),a=Cr(o);return n&&o.addEventListener("upgradeneeded",u=>{n(Cr(o.result),u.oldVersion,u.newVersion,Cr(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const dy=["get","getKey","getAll","getAllKeys","count"],fy=["put","add","delete","clear"],Il=new Map;function Lf(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Il.get(e))return Il.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=fy.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||dy.includes(t)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let l=u.store;return n&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&u.done]))[0]};return Il.set(e,i),i}cy(r=>({...r,get:(e,t,n)=>Lf(e,t)||r.get(e,t,n),has:(e,t)=>!!Lf(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(py(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function py(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nu="@firebase/app",Kl="0.16.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new FB("@firebase/app"),gy="@firebase/app-compat",my="@firebase/analytics-compat",_y="@firebase/analytics",Ey="@firebase/app-check-compat",Iy="@firebase/app-check",Dy="@firebase/auth",yy="@firebase/auth-compat",wy="@firebase/database",Ty="@firebase/data-connect",Ay="@firebase/database-compat",Ry="@firebase/functions",vy="@firebase/functions-compat",Py="@firebase/installations",by="@firebase/installations-compat",Sy="@firebase/messaging",Ny="@firebase/messaging-compat",Oy="@firebase/performance",Fy="@firebase/performance-compat",Ly="@firebase/remote-config",Vy="@firebase/remote-config-compat",ky="@firebase/storage",xy="@firebase/storage-compat",My="@firebase/firestore",Gy="@firebase/ai",Uy="@firebase/firestore-compat",Hy="firebase",qy="12.19.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="[DEFAULT]",jy={[Nu]:"fire-core",[gy]:"fire-core-compat",[_y]:"fire-analytics",[my]:"fire-analytics-compat",[Iy]:"fire-app-check",[Ey]:"fire-app-check-compat",[Dy]:"fire-auth",[yy]:"fire-auth-compat",[wy]:"fire-rtdb",[Ty]:"fire-data-connect",[Ay]:"fire-rtdb-compat",[Ry]:"fire-fn",[vy]:"fire-fn-compat",[Py]:"fire-iid",[by]:"fire-iid-compat",[Sy]:"fire-fcm",[Ny]:"fire-fcm-compat",[Oy]:"fire-perf",[Fy]:"fire-perf-compat",[Ly]:"fire-rc",[Vy]:"fire-rc-compat",[ky]:"fire-gcs",[xy]:"fire-gcs-compat",[My]:"fire-fst",[Uy]:"fire-fst-compat",[Gy]:"fire-vertex","fire-js":"fire-js",[Hy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Map,si=new Map,ii=new Map;function zl(r,e){try{r.container.addComponent(e)}catch(t){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Jy(r,e){r.container.addOrOverwriteComponent(e)}function fs(r){const e=r.name;if(ii.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;ii.set(e,r);for(const t of Dr.values())zl(t,r);for(const t of si.values())zl(t,r);return!0}function Ni(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function gg(r,e,t=Qo){Ni(r,e).clearInstance(t)}function VB(r){return r.options!==void 0}function mg(r){return VB(r)?!1:"authIdToken"in r||"appCheckToken"in r||"releaseOnDeref"in r||"automaticDataCollectionEnabled"in r}function xe(r){return r==null?!1:r.settings!==void 0}function Ky(){ii.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bt=new Ca("app","Firebase",zy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ds("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(r,e){const t=bB(r.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const s=JSON.parse(t).exp*1e3,i=new Date().getTime();s-i<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class Qy extends _g{constructor(e,t,n,s){const i=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!0,o={name:n,automaticDataCollectionEnabled:i};if(e.apiKey!==void 0)super(e,o,s);else{const a=e;super(a.options,o,s)}this._serverConfig={automaticDataCollectionEnabled:i,...t},this._serverConfig.authIdToken&&Vf(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&Vf(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,dn(Nu,Kl,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Ig(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw bt.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts=qy;function Eg(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:Qo,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw bt.create("bad-app-name",{appName:String(s)});if(t||(t=SB()),!t)throw bt.create("no-options");const i=Dr.get(s);if(i)if(Zt(t,i.options)){if(Zt(n,i.config))return i;throw bt.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(n)})}else throw bt.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new dg(s);for(const u of ii.values())o.addComponent(u);const a=new _g(t,n,o);return Dr.set(s,a),a}function Wy(r,e={}){if(xD()&&!cg())throw bt.create("invalid-server-app-environment");let t,n=e||{};if(r&&(VB(r)?t=r.options:mg(r)?n=r:t=r),n.automaticDataCollectionEnabled===void 0&&(n.automaticDataCollectionEnabled=!0),t||(t=SB()),!t)throw bt.create("no-options");const s={...n,...t};s.releaseOnDeref!==void 0&&delete s.releaseOnDeref;const i=B=>[...B].reduce((d,C)=>Math.imul(31,d)+C.charCodeAt(0)|0,0);if(n.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw bt.create("finalization-registry-not-supported",{});const o=""+i(JSON.stringify(s)),a=si.get(o);if(a)return a.incRefCount(n.releaseOnDeref),a;const u=new dg(o);for(const B of ii.values())u.addComponent(B);const l=new Qy(t,n,o,u);return si.set(o,l),l}function kB(r=Qo){const e=Dr.get(r);if(!e&&r===Qo&&SB())return Eg();if(!e)throw bt.create("no-app",{appName:r});return e}function $y(){return Array.from(Dr.values())}async function Ig(r){let e=!1;const t=r.name;Dr.has(t)?(e=!0,Dr.delete(t)):si.has(t)&&r.decRefCount()<=0&&(si.delete(t),e=!0),e&&(await Promise.all(r.container.getProviders().map(n=>n.delete())),r.isDeleted=!0)}function dn(r,e,t){let n=jy[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(o.join(" "));return}fs(new ds(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}function Yy(r,e){if(r!==null&&typeof r!="function")throw bt.create("invalid-log-argument");ry(r,e)}function Xy(r){ny(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy="firebase-heartbeat-database",ew=1,Wo="firebase-heartbeat-store";let Dl=null;function Dg(){return Dl||(Dl=hy(Zy,ew,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Wo)}catch(t){console.warn(t)}}}}).catch(r=>{throw bt.create("idb-open",{originalErrorMessage:r.message})})),Dl}async function tw(r){try{const t=(await Dg()).transaction(Wo),n=await t.objectStore(Wo).get(yg(r));return await t.done,n}catch(e){if(e instanceof In)kn.warn(e.message);else{const t=bt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(t.message)}}}async function kf(r,e){try{const n=(await Dg()).transaction(Wo,"readwrite");await n.objectStore(Wo).put(e,yg(r)),await n.done}catch(t){if(t instanceof In)kn.warn(t.message);else{const n=bt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});kn.warn(n.message)}}}function yg(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=1024,rw=30;class sw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ow(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>rw){const o=aw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){kn.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xf(),{heartbeatsToSend:n,unsentEntries:s}=iw(this._heartbeatsCache.heartbeats),i=Su(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return kn.warn(t),""}}}function xf(){return new Date().toISOString().substring(0,10)}function iw(r,e=nw){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Mf(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Mf(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class ow{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hg()?qD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await tw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return kf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return kf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Mf(r){return Su(JSON.stringify({version:2,heartbeats:r})).length}function aw(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(r){fs(new ds("platform-logger",e=>new Cy(e),"PRIVATE")),fs(new ds("heartbeat",e=>new sw(e),"PRIVATE")),dn(Nu,Kl,r),dn(Nu,Kl,"esm2020"),dn("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */uw("");var cw="firebase",lw="12.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn(cw,lw,"app");const Q0=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:In,SDK_VERSION:Ts,_DEFAULT_ENTRY_NAME:Qo,_addComponent:zl,_addOrOverwriteComponent:Jy,_apps:Dr,_clearComponents:Ky,_components:ii,_getProvider:Ni,_isFirebaseApp:VB,_isFirebaseServerApp:xe,_isFirebaseServerAppSettings:mg,_registerComponent:fs,_removeServiceInstance:gg,_serverApps:si,deleteApp:Ig,getApp:kB,getApps:$y,initializeApp:Eg,initializeServerApp:Wy,onLog:Yy,registerVersion:dn,setLogLevel:Xy},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw={PHONE:"phone",TOTP:"totp"},hw={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},dw={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},fw={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},Cw={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function wg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gw=pw,Tg=wg,Ag=new Ca("auth","Firebase",wg()),mw={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_PASSWORD:"auth/missing-password",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=new FB("@firebase/auth");function pu(r,...e){Ou.logLevel<=he.WARN&&Ou.warn(`Auth (${Ts}): ${r}`,...e)}function gu(r,...e){Ou.logLevel<=he.ERROR&&Ou.error(`Auth (${Ts}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(r,...e){throw xB(r,...e)}function wt(r,...e){return xB(r,...e)}function oc(r,e,t){const n={...Tg(),[e]:t};return new Ca("auth","Firebase",n).create(e,{appName:r.name})}function ct(r){return oc(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Oi(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&Lt(r,"argument-error"),oc(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xB(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Ag.create(r,...e)}function j(r,e,...t){if(!r)throw xB(e,...t)}function on(r){const e="INTERNAL ASSERTION FAILED: "+r;throw gu(e),new Error(e)}function xn(r,e){r||on(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function MB(){return Gf()==="http:"||Gf()==="https:"}function Gf(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MB()||GD()||"connection"in navigator)?navigator.onLine:!0}function Ew(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t){this.shortDelay=e,this.longDelay=t,xn(t>e,"Short delay should be less than long delay!"),this.isMobile=kD()||UD()}get(){return _w()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GB(r,e){xn(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yw=new pa(3e4,6e4);function Ve(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function ke(r,e,t,n,s={}){return vg(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const a=bi({...o,key:r.config.apiKey}).slice(1),u=await r._getAdditionalHeaders();u["Content-Type"]="application/json",r.languageCode&&(u["X-Firebase-Locale"]=r.languageCode);const l={method:e,headers:u,...i};return MD()||(l.referrerPolicy="strict-origin-when-cross-origin"),r.emulatorConfig&&Si(r.emulatorConfig.host)&&(l.credentials="include"),Rg.fetch()(await Pg(r,r.config.apiHost,t,a),l)})}async function vg(r,e,t){r._canInitEmulator=!1;const n={...Iw,...e};try{const s=new Tw(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw To(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw To(r,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw To(r,"email-already-in-use",o);if(u==="USER_DISABLED")throw To(r,"user-disabled",o);const B=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw oc(r,B,l);Lt(r,B)}}catch(s){if(s instanceof In)throw s;Lt(r,"network-request-failed",{message:String(s)})}}async function jn(r,e,t,n,s={}){const i=await ke(r,e,t,n,s);return"mfaPendingCredential"in i&&Lt(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function Pg(r,e,t,n){const s=`${e}${t}?${n}`,i=r,o=i.config.emulator?GB(r.config,s):`${r.config.apiScheme}://${s}`;return Dw.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function ww(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Tw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(wt(this.auth,"network-request-failed")),yw.get())})}}function To(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=wt(r,e,n);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(r){return r!==void 0&&r.getResponse!==void 0}function Hf(r){return r!==void 0&&r.enterprise!==void 0}class bg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ww(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aw(r){return(await ke(r,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Sg(r,e){return ke(r,"GET","/v2/recaptchaConfig",Ve(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(r,e){return ke(r,"POST","/v1/accounts:delete",e)}async function vw(r,e){return ke(r,"POST","/v1/accounts:update",e)}async function Fu(r,e){return ke(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(r,e=!1){return ne(r).getIdToken(e)}async function Ng(r,e=!1){const t=ne(r),n=await t.getIdToken(e),s=ac(n);j(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:bo(yl(s.auth_time)),issuedAtTime:bo(yl(s.iat)),expirationTime:bo(yl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function yl(r){return Number(r)*1e3}function ac(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return gu("JWT malformed, contained fewer than 3 sections"),null;try{const s=bB(t);return s?JSON.parse(s):(gu("Failed to decode base64 JWT payload"),null)}catch(s){return gu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function qf(r){const e=ac(r);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof In&&bw(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function bw({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=bo(this.lastLoginAt),this.creationTime=bo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yo(r){var d;const e=r.auth,t=await r.getIdToken(),n=await Mn(r,Fu(e,{idToken:t}));j(n==null?void 0:n.users.length,e,"internal-error");const s=n.users[0];r._notifyReloadListener(s);const i=(d=s.providerUserInfo)!=null&&d.length?Fg(s.providerUserInfo):[],o=Nw(r.providerData,i),a=r.isAnonymous,u=!(r.email&&s.passwordHash)&&!(o!=null&&o.length),l=a?u:!1,B={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ql(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(r,B)}async function Og(r){const e=ne(r);await Yo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Nw(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function Fg(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ow(r,e){const t=await vg(r,{},async()=>{const n=bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=await Pg(r,s,"/v1/token",`key=${i}`),a=await r._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:a,body:n};return r.emulatorConfig&&Si(r.emulatorConfig.host)&&(u.credentials="include"),Rg.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Fw(r,e){return ke(r,"POST","/v2/accounts:revokeToken",Ve(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){j(e.length!==0,"internal-error");const t=qf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await Ow(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new Zs;return n&&(j(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(j(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zs,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(r,e){j(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class $t{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new Sw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ql(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Mn(this,this.stsTokenManager.getToken(this.auth,e));return j(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ng(this,e)}reload(){return Og(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Yo(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xe(this.auth.app))return Promise.reject(ct(this.auth));const e=await this.getIdToken();return await Mn(this,Rw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,u=t._redirectEventId??void 0,l=t.createdAt??void 0,B=t.lastLoginAt??void 0,{uid:d,emailVerified:C,isAnonymous:g,providerData:D,stsTokenManager:N}=t;j(d&&N,e,"internal-error");const V=Zs.fromJSON(this.name,N);j(typeof d=="string",e,"internal-error"),nr(n,e.name),nr(s,e.name),j(typeof C=="boolean",e,"internal-error"),j(typeof g=="boolean",e,"internal-error"),nr(i,e.name),nr(o,e.name),nr(a,e.name),nr(u,e.name),nr(l,e.name),nr(B,e.name);const H=new $t({uid:d,auth:e,email:s,emailVerified:C,displayName:n,isAnonymous:g,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:V,createdAt:l,lastLoginAt:B});return D&&Array.isArray(D)&&(H.providerData=D.map(Z=>({...Z}))),u&&(H._redirectEventId=u),H}static async _fromIdTokenResponse(e,t,n=!1){const s=new Zs;s.updateFromServerResponse(t);const i=new $t({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Yo(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];j(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Fg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Zs;a.updateFromIdToken(n);const u=new $t({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ql(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,l),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=new Map;function Sn(r){xn(r instanceof Function,"Expected a class definition");let e=jf.get(r);return e?(xn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,jf.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Lg.type="NONE";const Wl=Lg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(r,e,t){return`firebase:${r}:${e}:${t}`}class as{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=mu(this.userKey,s.apiKey,i),this.fullPersistenceKey=mu("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Fu(this.auth,{idToken:e}).catch(()=>{});return t?$t._fromGetAccountInfoResponse(this.auth,t,e):null}return $t._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,n="authUser"){if(!t.length)return new as(Sn(Wl),e,n);const s=(await Promise.all(t.map(async l=>{try{if(await l._isAvailable())return l}catch{return}}))).filter(l=>l);let i=s[0]||Sn(Wl);const o=mu(n,e.config.apiKey,e.name);let a=null;for(const l of t)try{const B=await l._get(o);if(B){let d;if(typeof B=="string"){const C=await Fu(e,{idToken:B}).catch(()=>{});if(!C)break;d=await $t._fromGetAccountInfoResponse(e,C,B)}else d=$t._fromJSON(e,B);l!==i&&(a=d),i=l;break}}catch{}const u=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new as(i,e,n):(i=u[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new as(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ug(e))return"Blackberry";if(Hg(e))return"Webos";if(kg(e))return"Safari";if((e.includes("chrome/")||xg(e))&&!e.includes("edge/"))return"Chrome";if(Gg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Vg(r=tt()){return/firefox\//i.test(r)}function kg(r=tt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xg(r=tt()){return/crios\//i.test(r)}function Mg(r=tt()){return/iemobile/i.test(r)}function Gg(r=tt()){return/android/i.test(r)}function Ug(r=tt()){return/blackberry/i.test(r)}function Hg(r=tt()){return/webos/i.test(r)}function UB(r=tt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Lw(r=tt()){var e;return UB(r)&&!!((e=window.navigator)!=null&&e.standalone)}function Vw(){return HD()&&document.documentMode===10}function qg(r=tt()){return UB(r)||Gg(r)||Hg(r)||Ug(r)||/windows phone/i.test(r)||Mg(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(r,e=[]){let t;switch(r){case"Browser":t=Jf(tt());break;case"Worker":t=`${Jf(tt())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ts}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,a)=>{try{const u=e(i);o(u)}catch(u){a(u)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xw(r,e={}){return ke(r,"GET","/v2/passwordPolicy",Ve(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=6;class Gw{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Mw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kf(this),this.idTokenSubscription=new Kf(this),this.beforeStateQueue=new kw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ag,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Sn(t)),this._initializationPromise=this.queue(async()=>{var n,s,i;if(!this._deleted){try{this.persistenceManager=await as.create(this,e)}catch(o){pu(`Failed to initialize persistence: ${o}`),this.persistenceManager=await as.create(this,[])}finally{(n=this._resolvePersistenceManagerAvailable)==null||n.call(this)}if(!this._deleted){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(o){pu(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Fu(this,{idToken:e}),n=await $t._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(xe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=n==null?void 0:n._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(n=u.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ew()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xe(this.app))return Promise.reject(ct(this));const t=e?ne(e):null;return t&&j(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xe(this.app)?Promise.reject(ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xe(this.app)?Promise.reject(ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xw(this),t=new Gw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ca("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await Fw(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Sn(e)||this._popupRedirectResolver;j(t,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[Sn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}).catch(u=>{if(!o)if(typeof t!="function"&&t.error)t.error(u);else if(n)n(u);else throw u}),typeof t=="function"){const u=e.addObserver(t,n,s);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const n=(t==null?void 0:t.message)||String(t),s=oc(this,"internal-error",`An internal AuthError has occurred: ${n}`);throw s.customData={originalError:t},s}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&pu(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function qe(r){return ne(r)}class Kf{constructor(e){this.auth=e,this.observer=null,this.addObserver=zD(t=>this.observer=t)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Hw(r){ga=r}function HB(r){return ga.loadJS(r)}function qw(){return ga.recaptchaV2Script}function jw(){return ga.recaptchaEnterpriseScript}function Jw(){return ga.gapiScript}function Jg(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=500,zw=6e4,Za=1e12;class Qw{constructor(e){this.auth=e,this.counter=Za,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new Yw(e,this.auth.name,t||{})),this.counter++,n}reset(e){var n;const t=e||Za;(n=this._widgets.get(t))==null||n.delete(),this._widgets.delete(t)}getResponse(e){var n;const t=e||Za;return((n=this._widgets.get(t))==null?void 0:n.getResponse())||""}async execute(e){var n;const t=e||Za;return(n=this._widgets.get(t))==null||n.execute(),""}}class Ww{constructor(){this.enterprise=new $w}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class $w{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Yw{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;j(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Xw(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},zw)},Kw))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Xw(r){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<r;n++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw="recaptcha-enterprise",So="NO_RECAPTCHA",zf="onFirebaseAuthREInstanceReady";class wn{constructor(e){this.type=Zw,this.auth=qe(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Sg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new bg(u);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(u=>{a(u)})})}function s(i,o,a){const u=window.grecaptcha;Hf(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(So)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ww().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{n(this.auth).then(async a=>{if(!t&&Hf(window.grecaptcha)&&wn.scriptInjectionDeferred)await wn.scriptInjectionDeferred.promise,s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=jw();u.length!==0&&(u+=a+`&onload=${zf}`),wn.scriptInjectionDeferred=new ag,window[zf]=()=>{var l;(l=wn.scriptInjectionDeferred)==null||l.resolve()},HB(u).then(()=>{var l;return(l=wn.scriptInjectionDeferred)==null?void 0:l.promise}).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}wn.scriptInjectionDeferred=null;async function po(r,e,t,n=!1,s=!1){const i=new wn(r);let o;if(s)o=So;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const u=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const u=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return n?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function pr(r,e,t,n,s){var i,o;if(s==="EMAIL_PASSWORD_PROVIDER")if((i=r._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await po(r,e,t,t==="getOobCode");return n(r,a)}else return n(r,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){`${t}`;const u=await po(r,e,t,t==="getOobCode");return n(r,u)}else return Promise.reject(a)});else if(s==="PHONE_PROVIDER")if((o=r._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const a=await po(r,e,t);return n(r,a).catch(async u=>{var l;if(((l=r._getRecaptchaConfig())==null?void 0:l.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){`${t}`;const B=await po(r,e,t,!1,!0);return n(r,B)}return Promise.reject(u)})}else{const a=await po(r,e,t,!1,!0);return n(r,a)}else return Promise.reject(s+" provider is not supported.")}async function Kg(r){const e=qe(r),t=await Sg(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new bg(t);e.tenantId==null?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,n.isAnyProviderEnabled()&&new wn(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(r,e){const t=Ni(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Zt(i,e??{}))return s;Lt(s,"already-initialized")}return t.initialize({options:e})}function eT(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Sn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Qg(r,e,t){const n=qe(r);j(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=Wg(e),{host:o,port:a}=tT(e),u=a===null?"":`:${a}`,l={url:`${i}//${o}${u}/`},B=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){j(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),j(Zt(l,n.config.emulator)&&Zt(B,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=l,n.emulatorConfig=B,n.settings.appVerificationDisabledForTesting=!0,Si(o)?NB(`${i}//${o}${u}`):s||nT()}function Wg(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function tT(r){const e=Wg(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:Qf(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:Qf(o)}}}function Qf(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function nT(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,t){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $g(r,e){return ke(r,"POST","/v1/accounts:resetPassword",Ve(r,e))}async function rT(r,e){return ke(r,"POST","/v1/accounts:update",e)}async function sT(r,e){return ke(r,"POST","/v1/accounts:signUp",e)}async function iT(r,e){return ke(r,"POST","/v1/accounts:update",Ve(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oT(r,e){return jn(r,"POST","/v1/accounts:signInWithPassword",Ve(r,e))}async function uc(r,e){return ke(r,"POST","/v1/accounts:sendOobCode",Ve(r,e))}async function aT(r,e){return uc(r,e)}async function uT(r,e){return uc(r,e)}async function cT(r,e){return uc(r,e)}async function lT(r,e){return uc(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BT(r,e){return jn(r,"POST","/v1/accounts:signInWithEmailLink",Ve(r,e))}async function hT(r,e){return jn(r,"POST","/v1/accounts:signInWithEmailLink",Ve(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Fi{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new oi(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new oi(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pr(e,t,"signInWithPassword",oT,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return BT(e,{email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pr(e,n,"signUpPassword",sT,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return hT(e,{idToken:t,email:this._email,oobCode:this._password});default:Lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(r,e){return jn(r,"POST","/v1/accounts:signInWithIdp",Ve(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT="http://localhost";class gn extends Fi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Lt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...i}=t;if(!n||!s)return null;const o=new gn(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Fn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Fn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fn(e,t)}buildRequest(){const e={requestUri:dT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=bi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wf(r,e){return ke(r,"POST","/v1/accounts:sendVerificationCode",Ve(r,e))}async function fT(r,e){return jn(r,"POST","/v1/accounts:signInWithPhoneNumber",Ve(r,e))}async function CT(r,e){const t=await jn(r,"POST","/v1/accounts:signInWithPhoneNumber",Ve(r,e));if(t.temporaryProof)throw To(r,"account-exists-with-different-credential",t);return t}const pT={USER_NOT_FOUND:"user-not-found"};async function gT(r,e){const t={...e,operation:"REAUTH"};return jn(r,"POST","/v1/accounts:signInWithPhoneNumber",Ve(r,t),pT)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Fi{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new gr({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new gr({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return fT(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return CT(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return gT(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:s,temporaryProof:i}=e;return!n&&!t&&!s&&!i?null:new gr({verificationId:t,verificationCode:n,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _T(r){const e=yo(wo(r)).link,t=e?yo(wo(e)).deep_link_id:null,n=yo(wo(r)).deep_link_id;return(n?yo(wo(n)).link:null)||n||t||e||r}class Li{constructor(e){const t=yo(wo(e)),n=t.apiKey??null,s=t.oobCode??null,i=mT(t.mode??null);j(n&&s&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=_T(e);try{return new Li(t)}catch{return null}}}function ET(r){return Li.parseLink(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this.providerId=Fr.PROVIDER_ID}static credential(e,t){return oi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Li.parseLink(t);return j(n,"argument-error"),oi._fromEmailAndCode(e,n.code,n.tenantId)}}Fr.PROVIDER_ID="password";Fr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends Jn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class No extends Vi{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return j("providerId"in t&&"signInMethod"in t,"argument-error"),gn._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return j(e.idToken||e.accessToken,"argument-error"),gn._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return No.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return No.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:a}=e;if(!n&&!s&&!t&&!i||!a)return null;try{return new No(a)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:i})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Vi{constructor(){super("facebook.com")}static credential(e){return gn._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Vi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return gn._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return An.credential(t,n)}catch{return null}}}An.GOOGLE_SIGN_IN_METHOD="google.com";An.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Vi{constructor(){super("github.com")}static credential(e){return gn._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.GITHUB_SIGN_IN_METHOD="github.com";Rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT="http://localhost";class Xo extends Fi{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Fn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Fn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fn(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,pendingToken:i}=t;return!n||!s||!i||n!==s?null:new Xo(n,i)}static _create(e,t){return new Xo(e,t)}buildRequest(){return{requestUri:IT,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="saml.";class Lu extends Jn{constructor(e){j(e.startsWith(DT),"argument-error"),super(e)}static credentialFromResult(e){return Lu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Lu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Xo.fromJSON(e);return j(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Xo._create(n,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Vi{constructor(){super("twitter.com")}static credential(e,t){return gn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return vn.credential(t,n)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yg(r,e){return jn(r,"POST","/v1/accounts:signUp",Ve(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await $t._fromIdTokenResponse(e,n,s),o=$f(n);return new zt({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=$f(n);return new zt({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function $f(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yT(r){var s;if(xe(r.app))return Promise.reject(ct(r));const e=qe(r);if(await e._initializationPromise,(s=e.currentUser)!=null&&s.isAnonymous)return new zt({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await Yg(e,{returnSecureToken:!0}),n=await zt._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(n.user),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu extends In{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Vu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new Vu(e,t,n,s)}}function Xg(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Vu._fromErrorAndOperation(r,i,e,n):i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(r){return new Set(r.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wT(r,e){const t=ne(r);await cc(!0,t,e);const{providerUserInfo:n}=await vw(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),s=Zg(n||[]);return t.providerData=t.providerData.filter(i=>s.has(i.providerId)),s.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function qB(r,e,t=!1){const n=await Mn(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return zt._forOperation(r,"link",n)}async function cc(r,e,t){await Yo(e);const n=Zg(e.providerData),s=r===!1?"provider-already-linked":"no-such-provider";j(n.has(t)===r,e.auth,s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(r,e,t=!1){const{auth:n}=r;if(xe(n.app))return Promise.reject(ct(n));const s="reauthenticate";try{const i=await Mn(r,Xg(n,s,e,r),t);j(i.idToken,n,"internal-error");const o=ac(i.idToken);j(o,n,"internal-error");const{sub:a}=o;return j(r.uid===a,n,"user-mismatch"),zt._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Lt(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(r,e,t=!1){if(xe(r.app))return Promise.reject(ct(r));const n="signIn",s=await Xg(r,n,e),i=await zt._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}async function lc(r,e){return tm(qe(r),e)}async function nm(r,e){const t=ne(r);return await cc(!1,t,e.providerId),qB(t,e)}async function rm(r,e){return em(ne(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TT(r,e){return jn(r,"POST","/v1/accounts:signInWithCustomToken",Ve(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AT(r,e){if(xe(r.app))return Promise.reject(ct(r));const t=qe(r),n=await TT(t,{token:e,returnSecureToken:!0}),s=await zt._fromIdTokenResponse(t,"signIn",n);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?jB._fromServerResponse(e,t):"totpInfo"in t?JB._fromServerResponse(e,t):Lt(e,"internal-error")}}class jB extends ma{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new jB(t)}}class JB extends ma{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new JB(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(r,e,t){var n;j(((n=t.url)==null?void 0:n.length)>0,r,"invalid-continue-uri"),j(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),j(typeof t.linkDomain>"u"||t.linkDomain.length>0,r,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(j(t.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(j(t.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KB(r){const e=qe(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function RT(r,e,t){const n=qe(r),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Bc(n,s,t),await pr(n,s,"getOobCode",uT,"EMAIL_PASSWORD_PROVIDER")}async function vT(r,e,t){await $g(ne(r),{oobCode:e,newPassword:t}).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&KB(r),n})}async function PT(r,e){await iT(ne(r),{oobCode:e})}async function sm(r,e){const t=ne(r),n=await $g(t,{oobCode:e}),s=n.requestType;switch(j(s,t,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":j(n.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":j(n.mfaInfo,t,"internal-error");default:j(n.email,t,"internal-error")}let i=null;return n.mfaInfo&&(i=ma._fromServerResponse(qe(t),n.mfaInfo)),{data:{email:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.newEmail:n.email)||null,previousEmail:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.email:n.newEmail)||null,multiFactorInfo:i},operation:s}}async function bT(r,e){const{data:t}=await sm(ne(r),e);return t.email}async function ST(r,e,t){if(xe(r.app))return Promise.reject(ct(r));const n=qe(r),o=await pr(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Yg,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&KB(r),u}),a=await zt._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(a.user),a}function NT(r,e,t){return xe(r.app)?Promise.reject(ct(r)):lc(ne(r),Fr.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&KB(r),n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OT(r,e,t){const n=qe(r),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function i(o,a){j(a.handleCodeInApp,n,"argument-error"),a&&Bc(n,o,a)}i(s,t),await pr(n,s,"getOobCode",cT,"EMAIL_PASSWORD_PROVIDER")}function FT(r,e){const t=Li.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function LT(r,e,t){if(xe(r.app))return Promise.reject(ct(r));const n=ne(r),s=Fr.credentialWithLink(e,t||$o());return j(s._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),lc(n,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VT(r,e){return ke(r,"POST","/v1/accounts:createAuthUri",Ve(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kT(r,e){const t=MB()?$o():"http://localhost",n={identifier:e,continueUri:t},{signinMethods:s}=await VT(ne(r),n);return s||[]}async function xT(r,e){const t=ne(r),s={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()};e&&Bc(t.auth,s,e);const{email:i}=await aT(t.auth,s);i!==r.email&&await r.reload()}async function MT(r,e,t){const n=ne(r),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await r.getIdToken(),newEmail:e};t&&Bc(n.auth,i,t);const{email:o}=await lT(n.auth,i);o!==r.email&&await r.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GT(r,e){return ke(r,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UT(r,e){const{displayName:t,photoURL:n}=e;if(t===void 0&&n===void 0)return;const s=ne(r),o={idToken:await s.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},a=await Mn(s,GT(s.auth,o));s.displayName=a.displayName||null,s.photoURL=a.photoUrl||null;const u=s.providerData.find(({providerId:l})=>l==="password");u&&(u.displayName=s.displayName,u.photoURL=s.photoURL),await s._updateTokensIfNecessary(a)}function HT(r,e){const t=ne(r);return xe(t.auth.app)?Promise.reject(ct(t.auth)):im(t,e,null)}function qT(r,e){return im(ne(r),null,e)}async function im(r,e,t){const{auth:n}=r,i={idToken:await r.getIdToken(),returnSecureToken:!0};e&&(i.email=e),t&&(i.password=t);const o=await Mn(r,rT(n,i));await r._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(r){var s,i;if(!r)return null;const{providerId:e}=r,t=r.rawUserInfo?JSON.parse(r.rawUserInfo):{},n=r.isNewUser||r.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(r!=null&&r.idToken)){const o=(i=(s=ac(r.idToken))==null?void 0:s.firebase)==null?void 0:i.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ei(n,a)}}if(!e)return null;switch(e){case"facebook.com":return new JT(n,t);case"github.com":return new KT(n,t);case"google.com":return new zT(n,t);case"twitter.com":return new QT(n,t,r.screenName||null);case"custom":case"anonymous":return new ei(n,null);default:return new ei(n,e,t)}}class ei{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class om extends ei{constructor(e,t,n,s){super(e,t,n),this.username=s}}class JT extends ei{constructor(e,t){super(e,"facebook.com",t)}}class KT extends om{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class zT extends ei{constructor(e,t){super(e,"google.com",t)}}class QT extends om{constructor(e,t,n){super(e,"twitter.com",t,n)}}function WT(r){const{user:e,_tokenResponse:t}=r;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:jT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(r,e){return ne(r).setPersistence(e)}function YT(r){return Kg(r)}async function XT(r,e){return qe(r).validatePassword(e)}function am(r,e,t,n){return ne(r).onIdTokenChanged(e,t,n)}function um(r,e,t){return ne(r).beforeAuthStateChanged(e,t)}function ZT(r,e,t,n){return ne(r).onAuthStateChanged(e,t,n)}function eA(r){ne(r).useDeviceLanguage()}function tA(r,e){return ne(r).updateCurrentUser(e)}function nA(r){return ne(r).signOut()}function rA(r,e){return qe(r).revokeAccessToken(e)}async function sA(r){return ne(r).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new ns("enroll",e,t)}static _fromMfaPendingCredential(e){return new ns("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(e!=null&&e.multiFactorSession){if((t=e.multiFactorSession)!=null&&t.pendingCredential)return ns._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((n=e.multiFactorSession)!=null&&n.idToken)return ns._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zB{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=qe(e),s=t.customData._serverResponse,i=(s.mfaInfo||[]).map(a=>ma._fromServerResponse(n,a));j(s.mfaPendingCredential,n,"internal-error");const o=ns._fromMfaPendingCredential(s.mfaPendingCredential);return new zB(o,i,async a=>{const u=await a._process(n,o);delete s.mfaInfo,delete s.mfaPendingCredential;const l={...s,idToken:u.idToken,refreshToken:u.refreshToken};switch(t.operationType){case"signIn":const B=await zt._fromIdTokenResponse(n,t.operationType,l);return await n._updateCurrentUser(B.user),B;case"reauthenticate":return j(t.user,n,"internal-error"),zt._forOperation(t.user,t.operationType,l);default:Lt(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function iA(r,e){var s;const t=ne(r),n=e;return j(e.customData.operationType,t,"argument-error"),j((s=n.customData._serverResponse)==null?void 0:s.mfaPendingCredential,t,"argument-error"),zB._fromError(t,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(r,e){return ke(r,"POST","/v2/accounts/mfaEnrollment:start",Ve(r,e))}function oA(r,e){return ke(r,"POST","/v2/accounts/mfaEnrollment:finalize",Ve(r,e))}function aA(r,e){return ke(r,"POST","/v2/accounts/mfaEnrollment:start",Ve(r,e))}function uA(r,e){return ke(r,"POST","/v2/accounts/mfaEnrollment:finalize",Ve(r,e))}function cA(r,e){return ke(r,"POST","/v2/accounts/mfaEnrollment:withdraw",Ve(r,e))}class QB{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(n=>ma._fromServerResponse(e.auth,n)))})}static _fromUser(e){return new QB(e)}async getSession(){return ns._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,s=await this.getSession(),i=await Mn(this.user,n._process(this.user.auth,s,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,n=await this.user.getIdToken();try{const s=await Mn(this.user,cA(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:i})=>i!==t),await this.user._updateTokensIfNecessary(s),await this.user.reload()}catch(s){throw s}}}const wl=new WeakMap;function lA(r){const e=ne(r);return wl.has(e)||wl.set(e,QB._fromUser(e)),wl.get(e)}const ku="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ku,"1"),this.storage.removeItem(ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=1e3,hA=10;class lm extends cm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);Vw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,hA):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},BA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}lm.type="LOCAL";const Bm=lm;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA=1e3;function Tl(r){var n;const e=r.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),t=RegExp(`${e}=([^;]+)`);return((n=document.cookie.match(t))==null?void 0:n[1])??null}function Al(r){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${r.split(":")[3]}`}class hm{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;const t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;const t=Al(e);if(window.cookieStore){const n=await window.cookieStore.get(t);return n==null?void 0:n.value}return Tl(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;const n=Al(e);document.cookie=`${n}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;const n=Al(e);if(window.cookieStore){const a=(l=>{const B=l.changed.find(C=>C.name===n);B&&t(B.value),l.deleted.find(C=>C.name===n)&&t(null)}),u=()=>window.cookieStore.removeEventListener("change",a);return this.listenerUnsubscribes.set(t,u),window.cookieStore.addEventListener("change",a)}let s=Tl(n);const i=setInterval(()=>{const a=Tl(n);a!==s&&(t(a),s=a)},dA),o=()=>clearInterval(i);this.listenerUnsubscribes.set(t,o)}_removeListener(e,t){const n=this.listenerUnsubscribes.get(t);n&&(n(),this.listenerUnsubscribes.delete(t))}}hm.type="COOKIE";const fA=hm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm extends cm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}dm.type="SESSION";const WB=dm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new hc(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const a=Array.from(o).map(async l=>l(t.origin,i)),u=await CA(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,u)=>{const l=dc("",20);s.port1.start();const B=setTimeout(()=>{u(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(d){const C=d;if(C.data.eventId===l)switch(C.data.status){case"ack":clearTimeout(B),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(C.data.response);break;default:clearTimeout(B),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function gA(r){Qe().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $B(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function mA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _A(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function EA(){return $B()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="firebaseLocalStorageDb",IA=1,xu="firebaseLocalStorage",Cm="fbase_key";class _a{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fc(r,e){return r.transaction([xu],e?"readwrite":"readonly").objectStore(xu)}function DA(){const r=indexedDB.deleteDatabase(fm);return new _a(r).toPromise()}function pm(){const r=indexedDB.open(fm,IA);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(xu,{keyPath:Cm})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(xu)?e(n):(n.close(),await DA(),e(await pm()))})})}async function Xf(r,e,t){const n=fc(r,!0).put({[Cm]:e,value:t});return new _a(n).toPromise()}async function yA(r,e){const t=fc(r,!1).get(e),n=await new _a(t).toPromise();return n===void 0?null:n.value}function Zf(r,e){const t=fc(r,!0).delete(e);return new _a(t).toPromise()}const wA=800,TA=3;class gm{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=pm(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>TA)throw n;if(this.dbPromise){const s=this.dbPromise;this.dbPromise=null;try{(await s).close()}catch{}}}}async initializeServiceWorkerMessaging(){return $B()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hc._getInstance(EA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await mA(),!this.activeServiceWorker)return;this.sender=new pA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_A()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Xf(e,ku,"1"),await Zf(e,ku)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xf(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>yA(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zf(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(s=>{const i=fc(s,!1).getAll();return new _a(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}catch(e){return this.isClosing||pu(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}gm.type="LOCAL";const mm=gm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(r,e){return ke(r,"POST","/v2/accounts/mfaSignIn:start",Ve(r,e))}function AA(r,e){return ke(r,"POST","/v2/accounts/mfaSignIn:finalize",Ve(r,e))}function RA(r,e){return ke(r,"POST","/v2/accounts/mfaSignIn:finalize",Ve(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=Jg("rcb"),vA=new pa(3e4,6e4);class PA{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=Qe().grecaptcha)!=null&&e.render)}load(e,t=""){return j(bA(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Uf(Qe().grecaptcha)?Promise.resolve(Qe().grecaptcha):new Promise((n,s)=>{const i=Qe().setTimeout(()=>{s(wt(e,"network-request-failed"))},vA.get());Qe()[Rl]=()=>{Qe().clearTimeout(i),delete Qe()[Rl];const a=Qe().grecaptcha;if(!a||!Uf(a)){s(wt(e,"internal-error"));return}const u=a.render;a.render=(l,B)=>{const d=u(l,B);return this.counter++,d},this.hostLanguage=t,n(a)};const o=`${qw()}?${bi({onload:Rl,render:"explicit",hl:t})}`;HB(o).catch(()=>{clearTimeout(i),s(wt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!((t=Qe().grecaptcha)!=null&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function bA(r){return r.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(r)}class SA{async load(e){return new Qw(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="recaptcha",NA={theme:"light",type:"image"};class OA{constructor(e,t,n={...NA}){this.parameters=n,this.type=Oo,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=qe(e),this.isInvisible=this.parameters.size==="invisible",j(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof t=="string"?document.getElementById(t):t;j(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new SA:new PA,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){j(!this.parameters.sitekey,this.auth,"argument-error"),j(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),j(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(n=>n(t)),typeof e=="function")e(t);else if(typeof e=="string"){const n=Qe()[e];typeof n=="function"&&n(t)}}}assertNotDestroyed(){j(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){j(MB()&&!$B(),this.auth,"internal-error"),await FA(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Aw(this.auth);j(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return j(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function FA(){let r=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}r=()=>e(),window.addEventListener("load",r)}).catch(e=>{throw r&&window.removeEventListener("load",r),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YB{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=gr._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function LA(r,e,t){if(xe(r.app))return Promise.reject(ct(r));const n=qe(r),s=await Cc(n,e,ne(t));return new YB(s,i=>lc(n,i))}async function VA(r,e,t){const n=ne(r);await cc(!1,n,"phone");const s=await Cc(n.auth,e,ne(t));return new YB(s,i=>nm(n,i))}async function kA(r,e,t){const n=ne(r);if(xe(n.auth.app))return Promise.reject(ct(n.auth));const s=await Cc(n.auth,e,ne(t));return new YB(s,i=>rm(n,i))}async function Cc(r,e,t){var n;if(!r._getRecaptchaConfig())try{await Kg(r)}catch{}try{let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const i=s.session;if("phoneNumber"in s){j(i.type==="enroll",r,"internal-error");const o={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await pr(r,o,"mfaSmsEnrollment",async(B,d)=>{if(d.phoneEnrollmentInfo.captchaResponse===So){j((t==null?void 0:t.type)===Oo,B,"argument-error");const C=await vl(B,d,t);return Yf(B,C)}return Yf(B,d)},"PHONE_PROVIDER").catch(B=>Promise.reject(B))).phoneSessionInfo.sessionInfo}else{j(i.type==="signin",r,"internal-error");const o=((n=s.multiFactorHint)==null?void 0:n.uid)||s.multiFactorUid;j(o,r,"missing-multi-factor-info");const a={mfaPendingCredential:i.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await pr(r,a,"mfaSmsSignIn",async(d,C)=>{if(C.phoneSignInInfo.captchaResponse===So){j((t==null?void 0:t.type)===Oo,d,"argument-error");const g=await vl(d,C,t);return eC(d,g)}return eC(d,C)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await pr(r,i,"sendVerificationCode",async(l,B)=>{if(B.captchaResponse===So){j((t==null?void 0:t.type)===Oo,l,"argument-error");const d=await vl(l,B,t);return Wf(l,d)}return Wf(l,B)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{t==null||t._reset()}}async function xA(r,e){const t=ne(r);if(xe(t.auth.app))return Promise.reject(ct(t.auth));await qB(t,e)}async function vl(r,e,t){j(t.type===Oo,r,"argument-error");const n=await t.verify();j(typeof n=="string",r,"argument-error");const s={...e};if("phoneEnrollmentInfo"in s){const i=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,a=s.phoneEnrollmentInfo.clientType,u=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:n,captchaResponse:o,clientType:a,recaptchaVersion:u}}),s}else if("phoneSignInInfo"in s){const i=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,a=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:n,captchaResponse:i,clientType:o,recaptchaVersion:a}}),s}else return Object.assign(s,{recaptchaToken:n}),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.providerId=us.PROVIDER_ID,this.auth=qe(e)}verifyPhoneNumber(e,t){return Cc(this.auth,e,ne(t))}static credential(e,t){return gr._fromVerification(e,t)}static credentialFromResult(e){const t=e;return us.credentialFromTaggedObject(t)}static credentialFromError(e){return us.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?gr._fromTokenResponse(t,n):null}}us.PROVIDER_ID="phone";us.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(r,e){return e?Sn(e):(j(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XB extends Fi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function MA(r){return tm(r.auth,new XB(r),r.bypassAuthState)}function GA(r){const{auth:e,user:t}=r;return j(t,e,"internal-error"),em(t,new XB(r),r.bypassAuthState)}async function UA(r){const{auth:e,user:t}=r;return j(t,e,"internal-error"),qB(t,new XB(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MA;case"linkViaPopup":case"linkViaRedirect":return UA;case"reauthViaPopup":case"reauthViaRedirect":return GA;default:Lt(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA=new pa(2e3,1e4);async function qA(r,e,t){if(xe(r.app))return Promise.reject(wt(r,"operation-not-supported-in-this-environment"));const n=qe(r);Oi(r,e,Jn);const s=As(n,t);return new Nn(n,"signInViaPopup",e,s).executeNotNull()}async function jA(r,e,t){const n=ne(r);if(xe(n.auth.app))return Promise.reject(wt(n.auth,"operation-not-supported-in-this-environment"));Oi(n.auth,e,Jn);const s=As(n.auth,t);return new Nn(n.auth,"reauthViaPopup",e,s,n).executeNotNull()}async function JA(r,e,t){const n=ne(r);Oi(n.auth,e,Jn);const s=As(n.auth,t);return new Nn(n.auth,"linkViaPopup",e,s,n).executeNotNull()}class Nn extends _m{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Nn.currentPopupAction&&Nn.currentPopupAction.cancel(),Nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=dc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,HA.get())};e()}}Nn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="pendingRedirect",_u=new Map;class zA extends _m{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=_u.get(this.auth._key());if(!e){try{const n=await QA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}_u.set(this.auth._key(),e)}return this.bypassAuthState||_u.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QA(r,e){const t=Im(e),n=Em(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}async function ZB(r,e){return Em(r)._set(Im(e),"true")}function WA(r,e){_u.set(r._key(),e)}function Em(r){return Sn(r._redirectPersistence)}function Im(r){return mu(KA,r.config.apiKey,r.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(r,e,t){return YA(r,e,t)}async function YA(r,e,t){if(xe(r.app))return Promise.reject(ct(r));const n=qe(r);Oi(r,e,Jn),await n._initializationPromise;const s=As(n,t);return await ZB(s,n),s._openRedirect(n,e,"signInViaRedirect")}function XA(r,e,t){return ZA(r,e,t)}async function ZA(r,e,t){const n=ne(r);if(Oi(n.auth,e,Jn),xe(n.auth.app))return Promise.reject(ct(n.auth));await n.auth._initializationPromise;const s=As(n.auth,t);await ZB(s,n.auth);const i=await ym(n);return s._openRedirect(n.auth,e,"reauthViaRedirect",i)}function eR(r,e,t){return tR(r,e,t)}async function tR(r,e,t){const n=ne(r);Oi(n.auth,e,Jn),await n.auth._initializationPromise;const s=As(n.auth,t);await cc(!1,n,e.providerId),await ZB(s,n.auth);const i=await ym(n);return s._openRedirect(n.auth,e,"linkViaRedirect",i)}async function nR(r,e){return await qe(r)._initializationPromise,Dm(r,e,!1)}async function Dm(r,e,t=!1){if(xe(r.app))return Promise.reject(ct(r));const n=qe(r),s=As(n,e),o=await new zA(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}async function ym(r){const e=dc(`${r.uid}:::`);return r._redirectEventId=e,await r.auth._setRedirectUser(r),await r.auth._persistUserIfCurrent(r),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=600*1e3;class sR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!wm(e)){const s=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(wt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rR&&this.cachedEventUids.clear(),this.cachedEventUids.has(tC(e))}saveEventToCache(e){this.cachedEventUids.add(tC(e)),this.lastProcessedEventTime=Date.now()}}function tC(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function wm({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wm(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oR(r,e={}){return ke(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uR=/^https?/;async function cR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await oR(r);for(const t of e)try{if(lR(t))return}catch{}Lt(r,"unauthorized-domain")}function lR(r){const e=$o(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!uR.test(t))return!1;if(aR.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=new pa(3e4,6e4);function nC(){const r=Qe().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function hR(r){return new Promise((e,t)=>{var s,i,o;function n(){nC(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nC(),t(wt(r,"network-request-failed"))},timeout:BR.get()})}if((i=(s=Qe().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Qe().gapi)!=null&&o.load)n();else{const a=Jg("iframefcb");return Qe()[a]=()=>{gapi.load?n():t(wt(r,"network-request-failed"))},HB(`${Jw()}?onload=${a}`).catch(u=>t(u))}}).catch(e=>{throw Eu=null,e})}let Eu=null;function dR(r){return Eu=Eu||hR(r),Eu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=new pa(5e3,15e3),CR="__/auth/iframe",pR="emulator/auth/iframe",gR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _R(r){const e=r.config;j(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?GB(e,pR):`https://${r.config.authDomain}/${CR}`,n={apiKey:e.apiKey,appName:r.name,v:Ts},s=mR.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${bi(n).slice(1)}`}async function ER(r){const e=await dR(r),t=Qe().gapi;return j(t,r,"internal-error"),e.open({where:document.body,url:_R(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gR,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=wt(r,"network-request-failed"),a=Qe().setTimeout(()=>{i(o)},fR.get());function u(){Qe().clearTimeout(a),s(n)}n.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DR=500,yR=600,wR="_blank",TR="http://localhost";class rC{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AR(r,e,t,n=DR,s=yR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const u={...IR,width:n.toString(),height:s.toString(),top:i,left:o},l=tt().toLowerCase();t&&(a=xg(l)?wR:t),Vg(l)&&(e=e||TR,u.scrollbars="yes");const B=Object.entries(u).reduce((C,[g,D])=>`${C}${g}=${D},`,"");if(Lw(l)&&a!=="_self")return RR(e||"",a),new rC(null);const d=window.open(e||"",a,B);j(d,r,"popup-blocked");try{d.focus()}catch{}return new rC(d)}function RR(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR="__/auth/handler",PR="emulator/auth/handler",bR=encodeURIComponent("fac");async function sC(r,e,t,n,s,i){j(r.config.authDomain,r,"auth-domain-config-required"),j(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:Ts,eventId:s};if(e instanceof Jn){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",KD(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[B,d]of Object.entries({}))o[B]=d}if(e instanceof Vi){const B=e.getScopes().filter(d=>d!=="");B.length>0&&(o.scopes=B.join(","))}r.tenantId&&(o.tid=r.tenantId);const a=o;for(const B of Object.keys(a))a[B]===void 0&&delete a[B];const u=await r._getAppCheckToken(),l=u?`#${bR}=${encodeURIComponent(u)}`:"";return`${SR(r)}?${bi(a).slice(1)}${l}`}function SR({config:r}){return r.emulator?GB(r,PR):`https://${r.authDomain}/${vR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="webStorageSupport";class NR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=WB,this._completeRedirectFn=Dm,this._overrideRedirectResult=WA}async _openPopup(e,t,n,s){var o;xn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await sC(e,t,n,$o(),s);return AR(e,i,dc())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await sC(e,t,n,$o(),s);return gA(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(xn(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await ER(e),n=new sR(e);return t.register("authEvent",s=>(j(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Pl,{type:Pl},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Pl];i!==void 0&&t(!!i),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return qg()||kg()||UB()}}const Tm=NR;class Am{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return on("unexpected MultiFactorSessionType")}}}class eh extends Am{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new eh(e)}_finalizeEnroll(e,t,n){return oA(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return AA(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Rm{constructor(){}static assertion(e){return eh._fromCredential(e)}}Rm.FACTOR_ID="phone";class vm{static assertionForEnrollment(e,t){return Zo._fromSecret(e,t)}static assertionForSignIn(e,t){return Zo._fromEnrollmentId(e,t)}static async generateSecret(e){var s;const t=e;j(typeof((s=t.user)==null?void 0:s.auth)<"u","internal-error");const n=await aA(t.user.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return pc._fromStartTotpMfaEnrollmentResponse(n,t.user.auth)}}vm.FACTOR_ID="totp";class Zo extends Am{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Zo(t,void 0,e)}static _fromEnrollmentId(e,t){return new Zo(t,e)}async _finalizeEnroll(e,t,n){return j(typeof this.secret<"u",e,"argument-error"),uA(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){j(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const n={verificationCode:this.otp};return RA(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class pc{constructor(e,t,n,s,i,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=s,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new pc(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var s;let n=!1;return(eu(e)||eu(t))&&(n=!0),n&&(eu(e)&&(e=((s=this.auth.currentUser)==null?void 0:s.email)||"unknownuser"),eu(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function eu(r){return typeof r>"u"||(r==null?void 0:r.length)===0}var iC="@firebase/auth",oC="1.13.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FR(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LR(r){fs(new ds("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const u={apiKey:o,authDomain:a,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jg(r)},l=new Uw(n,s,i,u);return eT(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),fs(new ds("auth-internal",e=>{const t=qe(e.getProvider("auth").getImmediate());return(n=>new OR(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(iC,oC,FR(r)),dn(iC,oC,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=300,kR=og("authIdTokenMaxAge")||VR;let aC=null;const xR=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>kR)return;const s=t==null?void 0:t.token;aC!==s&&(aC=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function MR(r=kB()){const e=Ni(r,"auth");if(e.isInitialized())return e.getImmediate();const t=zg(r,{popupRedirectResolver:Tm,persistence:[mm,Bm,WB]}),n=og("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=xR(i.toString());um(t,o,()=>o(t.currentUser)),am(t,a=>o(a))}}const s=ig("auth");return s&&Qg(t,`http://${s}`),t}function GR(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}Hw({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=wt("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",GR().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LR("Browser");const W0=Object.freeze(Object.defineProperty({__proto__:null,ActionCodeOperation:Cw,ActionCodeURL:Li,AuthCredential:Fi,AuthErrorCodes:mw,EmailAuthCredential:oi,EmailAuthProvider:Fr,FacebookAuthProvider:Tn,FactorId:Bw,GithubAuthProvider:Rn,GoogleAuthProvider:An,OAuthCredential:gn,OAuthProvider:No,OperationType:fw,PhoneAuthCredential:gr,PhoneAuthProvider:us,PhoneMultiFactorGenerator:Rm,ProviderId:hw,RecaptchaVerifier:OA,SAMLAuthProvider:Lu,SignInMethod:dw,TotpMultiFactorGenerator:vm,TotpSecret:pc,TwitterAuthProvider:vn,applyActionCode:PT,beforeAuthStateChanged:um,browserCookiePersistence:fA,browserLocalPersistence:Bm,browserPopupRedirectResolver:Tm,browserSessionPersistence:WB,checkActionCode:sm,confirmPasswordReset:vT,connectAuthEmulator:Qg,createUserWithEmailAndPassword:ST,debugErrorMap:gw,deleteUser:sA,fetchSignInMethodsForEmail:kT,getAdditionalUserInfo:WT,getAuth:MR,getIdToken:Pw,getIdTokenResult:Ng,getMultiFactorResolver:iA,getRedirectResult:nR,inMemoryPersistence:Wl,indexedDBLocalPersistence:mm,initializeAuth:zg,initializeRecaptchaConfig:YT,isSignInWithEmailLink:FT,linkWithCredential:nm,linkWithPhoneNumber:VA,linkWithPopup:JA,linkWithRedirect:eR,multiFactor:lA,onAuthStateChanged:ZT,onIdTokenChanged:am,parseActionCodeURL:ET,prodErrorMap:Tg,reauthenticateWithCredential:rm,reauthenticateWithPhoneNumber:kA,reauthenticateWithPopup:jA,reauthenticateWithRedirect:XA,reload:Og,revokeAccessToken:rA,sendEmailVerification:xT,sendPasswordResetEmail:RT,sendSignInLinkToEmail:OT,setPersistence:$T,signInAnonymously:yT,signInWithCredential:lc,signInWithCustomToken:AT,signInWithEmailAndPassword:NT,signInWithEmailLink:LT,signInWithPhoneNumber:LA,signInWithPopup:qA,signInWithRedirect:$A,signOut:nA,unlink:wT,updateCurrentUser:tA,updateEmail:HT,updatePassword:qT,updatePhoneNumber:xA,updateProfile:UT,useDeviceLanguage:eA,validatePassword:XT,verifyBeforeUpdateEmail:MT,verifyPasswordResetCode:bT},Symbol.toStringTag,{value:"Module"}));var uC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mr,Pm;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,E){function y(){}y.prototype=E.prototype,T.F=E.prototype,T.prototype=new y,T.prototype.constructor=T,T.D=function(v,R,O){for(var I=Array(arguments.length-2),At=2;At<arguments.length;At++)I[At-2]=arguments[At];return E.prototype[R].apply(v,I)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,E,y){y||(y=0);const v=Array(16);if(typeof E=="string")for(var R=0;R<16;++R)v[R]=E.charCodeAt(y++)|E.charCodeAt(y++)<<8|E.charCodeAt(y++)<<16|E.charCodeAt(y++)<<24;else for(R=0;R<16;++R)v[R]=E[y++]|E[y++]<<8|E[y++]<<16|E[y++]<<24;E=T.g[0],y=T.g[1],R=T.g[2];let O=T.g[3],I;I=E+(O^y&(R^O))+v[0]+3614090360&4294967295,E=y+(I<<7&4294967295|I>>>25),I=O+(R^E&(y^R))+v[1]+3905402710&4294967295,O=E+(I<<12&4294967295|I>>>20),I=R+(y^O&(E^y))+v[2]+606105819&4294967295,R=O+(I<<17&4294967295|I>>>15),I=y+(E^R&(O^E))+v[3]+3250441966&4294967295,y=R+(I<<22&4294967295|I>>>10),I=E+(O^y&(R^O))+v[4]+4118548399&4294967295,E=y+(I<<7&4294967295|I>>>25),I=O+(R^E&(y^R))+v[5]+1200080426&4294967295,O=E+(I<<12&4294967295|I>>>20),I=R+(y^O&(E^y))+v[6]+2821735955&4294967295,R=O+(I<<17&4294967295|I>>>15),I=y+(E^R&(O^E))+v[7]+4249261313&4294967295,y=R+(I<<22&4294967295|I>>>10),I=E+(O^y&(R^O))+v[8]+1770035416&4294967295,E=y+(I<<7&4294967295|I>>>25),I=O+(R^E&(y^R))+v[9]+2336552879&4294967295,O=E+(I<<12&4294967295|I>>>20),I=R+(y^O&(E^y))+v[10]+4294925233&4294967295,R=O+(I<<17&4294967295|I>>>15),I=y+(E^R&(O^E))+v[11]+2304563134&4294967295,y=R+(I<<22&4294967295|I>>>10),I=E+(O^y&(R^O))+v[12]+1804603682&4294967295,E=y+(I<<7&4294967295|I>>>25),I=O+(R^E&(y^R))+v[13]+4254626195&4294967295,O=E+(I<<12&4294967295|I>>>20),I=R+(y^O&(E^y))+v[14]+2792965006&4294967295,R=O+(I<<17&4294967295|I>>>15),I=y+(E^R&(O^E))+v[15]+1236535329&4294967295,y=R+(I<<22&4294967295|I>>>10),I=E+(R^O&(y^R))+v[1]+4129170786&4294967295,E=y+(I<<5&4294967295|I>>>27),I=O+(y^R&(E^y))+v[6]+3225465664&4294967295,O=E+(I<<9&4294967295|I>>>23),I=R+(E^y&(O^E))+v[11]+643717713&4294967295,R=O+(I<<14&4294967295|I>>>18),I=y+(O^E&(R^O))+v[0]+3921069994&4294967295,y=R+(I<<20&4294967295|I>>>12),I=E+(R^O&(y^R))+v[5]+3593408605&4294967295,E=y+(I<<5&4294967295|I>>>27),I=O+(y^R&(E^y))+v[10]+38016083&4294967295,O=E+(I<<9&4294967295|I>>>23),I=R+(E^y&(O^E))+v[15]+3634488961&4294967295,R=O+(I<<14&4294967295|I>>>18),I=y+(O^E&(R^O))+v[4]+3889429448&4294967295,y=R+(I<<20&4294967295|I>>>12),I=E+(R^O&(y^R))+v[9]+568446438&4294967295,E=y+(I<<5&4294967295|I>>>27),I=O+(y^R&(E^y))+v[14]+3275163606&4294967295,O=E+(I<<9&4294967295|I>>>23),I=R+(E^y&(O^E))+v[3]+4107603335&4294967295,R=O+(I<<14&4294967295|I>>>18),I=y+(O^E&(R^O))+v[8]+1163531501&4294967295,y=R+(I<<20&4294967295|I>>>12),I=E+(R^O&(y^R))+v[13]+2850285829&4294967295,E=y+(I<<5&4294967295|I>>>27),I=O+(y^R&(E^y))+v[2]+4243563512&4294967295,O=E+(I<<9&4294967295|I>>>23),I=R+(E^y&(O^E))+v[7]+1735328473&4294967295,R=O+(I<<14&4294967295|I>>>18),I=y+(O^E&(R^O))+v[12]+2368359562&4294967295,y=R+(I<<20&4294967295|I>>>12),I=E+(y^R^O)+v[5]+4294588738&4294967295,E=y+(I<<4&4294967295|I>>>28),I=O+(E^y^R)+v[8]+2272392833&4294967295,O=E+(I<<11&4294967295|I>>>21),I=R+(O^E^y)+v[11]+1839030562&4294967295,R=O+(I<<16&4294967295|I>>>16),I=y+(R^O^E)+v[14]+4259657740&4294967295,y=R+(I<<23&4294967295|I>>>9),I=E+(y^R^O)+v[1]+2763975236&4294967295,E=y+(I<<4&4294967295|I>>>28),I=O+(E^y^R)+v[4]+1272893353&4294967295,O=E+(I<<11&4294967295|I>>>21),I=R+(O^E^y)+v[7]+4139469664&4294967295,R=O+(I<<16&4294967295|I>>>16),I=y+(R^O^E)+v[10]+3200236656&4294967295,y=R+(I<<23&4294967295|I>>>9),I=E+(y^R^O)+v[13]+681279174&4294967295,E=y+(I<<4&4294967295|I>>>28),I=O+(E^y^R)+v[0]+3936430074&4294967295,O=E+(I<<11&4294967295|I>>>21),I=R+(O^E^y)+v[3]+3572445317&4294967295,R=O+(I<<16&4294967295|I>>>16),I=y+(R^O^E)+v[6]+76029189&4294967295,y=R+(I<<23&4294967295|I>>>9),I=E+(y^R^O)+v[9]+3654602809&4294967295,E=y+(I<<4&4294967295|I>>>28),I=O+(E^y^R)+v[12]+3873151461&4294967295,O=E+(I<<11&4294967295|I>>>21),I=R+(O^E^y)+v[15]+530742520&4294967295,R=O+(I<<16&4294967295|I>>>16),I=y+(R^O^E)+v[2]+3299628645&4294967295,y=R+(I<<23&4294967295|I>>>9),I=E+(R^(y|~O))+v[0]+4096336452&4294967295,E=y+(I<<6&4294967295|I>>>26),I=O+(y^(E|~R))+v[7]+1126891415&4294967295,O=E+(I<<10&4294967295|I>>>22),I=R+(E^(O|~y))+v[14]+2878612391&4294967295,R=O+(I<<15&4294967295|I>>>17),I=y+(O^(R|~E))+v[5]+4237533241&4294967295,y=R+(I<<21&4294967295|I>>>11),I=E+(R^(y|~O))+v[12]+1700485571&4294967295,E=y+(I<<6&4294967295|I>>>26),I=O+(y^(E|~R))+v[3]+2399980690&4294967295,O=E+(I<<10&4294967295|I>>>22),I=R+(E^(O|~y))+v[10]+4293915773&4294967295,R=O+(I<<15&4294967295|I>>>17),I=y+(O^(R|~E))+v[1]+2240044497&4294967295,y=R+(I<<21&4294967295|I>>>11),I=E+(R^(y|~O))+v[8]+1873313359&4294967295,E=y+(I<<6&4294967295|I>>>26),I=O+(y^(E|~R))+v[15]+4264355552&4294967295,O=E+(I<<10&4294967295|I>>>22),I=R+(E^(O|~y))+v[6]+2734768916&4294967295,R=O+(I<<15&4294967295|I>>>17),I=y+(O^(R|~E))+v[13]+1309151649&4294967295,y=R+(I<<21&4294967295|I>>>11),I=E+(R^(y|~O))+v[4]+4149444226&4294967295,E=y+(I<<6&4294967295|I>>>26),I=O+(y^(E|~R))+v[11]+3174756917&4294967295,O=E+(I<<10&4294967295|I>>>22),I=R+(E^(O|~y))+v[2]+718787259&4294967295,R=O+(I<<15&4294967295|I>>>17),I=y+(O^(R|~E))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+E&4294967295,T.g[1]=T.g[1]+(R+(I<<21&4294967295|I>>>11))&4294967295,T.g[2]=T.g[2]+R&4294967295,T.g[3]=T.g[3]+O&4294967295}n.prototype.v=function(T,E){E===void 0&&(E=T.length);const y=E-this.blockSize,v=this.C;let R=this.h,O=0;for(;O<E;){if(R==0)for(;O<=y;)s(this,T,O),O+=this.blockSize;if(typeof T=="string"){for(;O<E;)if(v[R++]=T.charCodeAt(O++),R==this.blockSize){s(this,v),R=0;break}}else for(;O<E;)if(v[R++]=T[O++],R==this.blockSize){s(this,v),R=0;break}}this.h=R,this.o+=E},n.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var E=1;E<T.length-8;++E)T[E]=0;E=this.o*8;for(var y=T.length-8;y<T.length;++y)T[y]=E&255,E/=256;for(this.v(T),T=Array(16),E=0,y=0;y<4;++y)for(let v=0;v<32;v+=8)T[E++]=this.g[y]>>>v&255;return T};function i(T,E){var y=a;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=E(T)}function o(T,E){this.h=E;const y=[];let v=!0;for(let R=T.length-1;R>=0;R--){const O=T[R]|0;v&&O==E||(y[R]=O,v=!1)}this.g=y}var a={};function u(T){return-128<=T&&T<128?i(T,function(E){return new o([E|0],E<0?-1:0)}):new o([T|0],T<0?-1:0)}function l(T){if(isNaN(T)||!isFinite(T))return d;if(T<0)return V(l(-T));const E=[];let y=1;for(let v=0;T>=y;v++)E[v]=T/y|0,y*=4294967296;return new o(E,0)}function B(T,E){if(T.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(T.charAt(0)=="-")return V(B(T.substring(1),E));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=l(Math.pow(E,8));let v=d;for(let O=0;O<T.length;O+=8){var R=Math.min(8,T.length-O);const I=parseInt(T.substring(O,O+R),E);R<8?(R=l(Math.pow(E,R)),v=v.j(R).add(l(I))):(v=v.j(y),v=v.add(l(I)))}return v}var d=u(0),C=u(1),g=u(16777216);r=o.prototype,r.m=function(){if(N(this))return-V(this).m();let T=0,E=1;for(let y=0;y<this.g.length;y++){const v=this.i(y);T+=(v>=0?v:4294967296+v)*E,E*=4294967296}return T},r.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(D(this))return"0";if(N(this))return"-"+V(this).toString(T);const E=l(Math.pow(T,6));var y=this;let v="";for(;;){const R=de(y,E).g;y=H(y,R.j(E));let O=((y.g.length>0?y.g[0]:y.h)>>>0).toString(T);if(y=R,D(y))return O+v;for(;O.length<6;)O="0"+O;v=O+v}},r.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function D(T){if(T.h!=0)return!1;for(let E=0;E<T.g.length;E++)if(T.g[E]!=0)return!1;return!0}function N(T){return T.h==-1}r.l=function(T){return T=H(this,T),N(T)?-1:D(T)?0:1};function V(T){const E=T.g.length,y=[];for(let v=0;v<E;v++)y[v]=~T.g[v];return new o(y,~T.h).add(C)}r.abs=function(){return N(this)?V(this):this},r.add=function(T){const E=Math.max(this.g.length,T.g.length),y=[];let v=0;for(let R=0;R<=E;R++){let O=v+(this.i(R)&65535)+(T.i(R)&65535),I=(O>>>16)+(this.i(R)>>>16)+(T.i(R)>>>16);v=I>>>16,O&=65535,I&=65535,y[R]=I<<16|O}return new o(y,y[y.length-1]&-2147483648?-1:0)};function H(T,E){return T.add(V(E))}r.j=function(T){if(D(this)||D(T))return d;if(N(this))return N(T)?V(this).j(V(T)):V(V(this).j(T));if(N(T))return V(this.j(V(T)));if(this.l(g)<0&&T.l(g)<0)return l(this.m()*T.m());const E=this.g.length+T.g.length,y=[];for(var v=0;v<2*E;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(let R=0;R<T.g.length;R++){const O=this.i(v)>>>16,I=this.i(v)&65535,At=T.i(R)>>>16,Ur=T.i(R)&65535;y[2*v+2*R]+=I*Ur,Z(y,2*v+2*R),y[2*v+2*R+1]+=O*Ur,Z(y,2*v+2*R+1),y[2*v+2*R+1]+=I*At,Z(y,2*v+2*R+1),y[2*v+2*R+2]+=O*At,Z(y,2*v+2*R+2)}for(T=0;T<E;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=E;T<2*E;T++)y[T]=0;return new o(y,0)};function Z(T,E){for(;(T[E]&65535)!=T[E];)T[E+1]+=T[E]>>>16,T[E]&=65535,E++}function re(T,E){this.g=T,this.h=E}function de(T,E){if(D(E))throw Error("division by zero");if(D(T))return new re(d,d);if(N(T))return E=de(V(T),E),new re(V(E.g),V(E.h));if(N(E))return E=de(T,V(E)),new re(V(E.g),E.h);if(T.g.length>30){if(N(T)||N(E))throw Error("slowDivide_ only works with positive integers.");for(var y=C,v=E;v.l(T)<=0;)y=Ce(y),v=Ce(v);var R=le(y,1),O=le(v,1);for(v=le(v,2),y=le(y,2);!D(v);){var I=O.add(v);I.l(T)<=0&&(R=R.add(y),O=I),v=le(v,1),y=le(y,1)}return E=H(T,R.j(E)),new re(R,E)}for(R=d;T.l(E)>=0;){for(y=Math.max(1,Math.floor(T.m()/E.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),O=l(y),I=O.j(E);N(I)||I.l(T)>0;)y-=v,O=l(y),I=O.j(E);D(O)&&(O=C),R=R.add(O),T=H(T,I)}return new re(R,T)}r.B=function(T){return de(this,T).h},r.and=function(T){const E=Math.max(this.g.length,T.g.length),y=[];for(let v=0;v<E;v++)y[v]=this.i(v)&T.i(v);return new o(y,this.h&T.h)},r.or=function(T){const E=Math.max(this.g.length,T.g.length),y=[];for(let v=0;v<E;v++)y[v]=this.i(v)|T.i(v);return new o(y,this.h|T.h)},r.xor=function(T){const E=Math.max(this.g.length,T.g.length),y=[];for(let v=0;v<E;v++)y[v]=this.i(v)^T.i(v);return new o(y,this.h^T.h)};function Ce(T){const E=T.g.length+1,y=[];for(let v=0;v<E;v++)y[v]=T.i(v)<<1|T.i(v-1)>>>31;return new o(y,T.h)}function le(T,E){const y=E>>5;E%=32;const v=T.g.length-y,R=[];for(let O=0;O<v;O++)R[O]=E>0?T.i(O+y)>>>E|T.i(O+y+1)<<32-E:T.i(O+y);return new o(R,T.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,Pm=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=B,mr=o}).apply(typeof uC<"u"?uC:typeof self<"u"?self:typeof window<"u"?window:{});var tu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bm,Ao,Sm,Iu,$l,Nm,Om,Fm;(function(){var r,e=Object.defineProperty;function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof tu=="object"&&tu];for(var h=0;h<c.length;++h){var f=c[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function s(c,h){if(h)e:{var f=n;c=c.split(".");for(var p=0;p<c.length-1;p++){var S=c[p];if(!(S in f))break e;f=f[S]}c=c[c.length-1],p=f[c],h=h(p),h!=p&&h!=null&&e(f,c,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(h){var f=[],p;for(p in h)Object.prototype.hasOwnProperty.call(h,p)&&f.push([p,h[p]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(c){var h=typeof c;return h=="object"&&c!=null||h=="function"}function u(c,h,f){return c.call.apply(c.bind,arguments)}function l(c,h,f){return l=u,l.apply(null,arguments)}function B(c,h){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),c.apply(this,p)}}function d(c,h){function f(){}f.prototype=h.prototype,c.Z=h.prototype,c.prototype=new f,c.prototype.constructor=c,c.Ob=function(p,S,F){for(var $=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)$[ce-2]=arguments[ce];return h.prototype[S].apply(p,$)}}var C=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function g(c){const h=c.length;if(h>0){const f=Array(h);for(let p=0;p<h;p++)f[p]=c[p];return f}return[]}function D(c,h){for(let p=1;p<arguments.length;p++){const S=arguments[p];var f=typeof S;if(f=f!="object"?f:S?Array.isArray(S)?"array":f:"null",f=="array"||f=="object"&&typeof S.length=="number"){f=c.length||0;const F=S.length||0;c.length=f+F;for(let $=0;$<F;$++)c[f+$]=S[$]}else c.push(S)}}class N{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(c){o.setTimeout(()=>{throw c},0)}function H(){var c=T;let h=null;return c.g&&(h=c.g,c.g=c.g.next,c.g||(c.h=null),h.next=null),h}class Z{constructor(){this.h=this.g=null}add(h,f){const p=re.get();p.set(h,f),this.h?this.h.next=p:this.g=p,this.h=p}}var re=new N(()=>new de,c=>c.reset());class de{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,le=!1,T=new Z,E=()=>{const c=Promise.resolve(void 0);Ce=()=>{c.then(y)}};function y(){for(var c;c=H();){try{c.h.call(c.g)}catch(f){V(f)}var h=re;h.j(c),h.h<100&&(h.h++,c.next=h.g,h.g=c)}le=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function R(c,h){this.type=c,this.g=this.target=h,this.defaultPrevented=!1}R.prototype.h=function(){this.defaultPrevented=!0};var O=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,h=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return c})();function I(c){return/^[\s\xa0]*$/.test(c)}function At(c,h){R.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,h)}d(At,R),At.prototype.init=function(c,h){const f=this.type=c.type,p=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=h,h=c.relatedTarget,h||(f=="mouseover"?h=c.fromElement:f=="mouseout"&&(h=c.toElement)),this.relatedTarget=h,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&At.Z.h.call(this)},At.prototype.h=function(){At.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ur="closure_listenable_"+(Math.random()*1e6|0),QI=0;function WI(c,h,f,p,S){this.listener=c,this.proxy=null,this.src=h,this.type=f,this.capture=!!p,this.ha=S,this.key=++QI,this.da=this.fa=!1}function xa(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Ma(c,h,f){for(const p in c)h.call(f,c[p],p,c)}function $I(c,h){for(const f in c)h.call(void 0,c[f],f,c)}function Pd(c){const h={};for(const f in c)h[f]=c[f];return h}const bd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Sd(c,h){let f,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(f in p)c[f]=p[f];for(let F=0;F<bd.length;F++)f=bd[F],Object.prototype.hasOwnProperty.call(p,f)&&(c[f]=p[f])}}function Ga(c){this.src=c,this.g={},this.h=0}Ga.prototype.add=function(c,h,f,p,S){const F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);const $=Wc(c,h,p,S);return $>-1?(h=c[$],f||(h.fa=!1)):(h=new WI(h,this.src,F,!!p,S),h.fa=f,c.push(h)),h};function Qc(c,h){const f=h.type;if(f in c.g){var p=c.g[f],S=Array.prototype.indexOf.call(p,h,void 0),F;(F=S>=0)&&Array.prototype.splice.call(p,S,1),F&&(xa(h),c.g[f].length==0&&(delete c.g[f],c.h--))}}function Wc(c,h,f,p){for(let S=0;S<c.length;++S){const F=c[S];if(!F.da&&F.listener==h&&F.capture==!!f&&F.ha==p)return S}return-1}var $c="closure_lm_"+(Math.random()*1e6|0),Yc={};function Nd(c,h,f,p,S){if(Array.isArray(h)){for(let F=0;F<h.length;F++)Nd(c,h[F],f,p,S);return null}return f=Ld(f),c&&c[Ur]?c.J(h,f,a(p)?!!p.capture:!1,S):YI(c,h,f,!1,p,S)}function YI(c,h,f,p,S,F){if(!h)throw Error("Invalid event type");const $=a(S)?!!S.capture:!!S;let ce=Zc(c);if(ce||(c[$c]=ce=new Ga(c)),f=ce.add(h,f,p,$,F),f.proxy)return f;if(p=XI(),f.proxy=p,p.src=c,p.listener=f,c.addEventListener)O||(S=$),S===void 0&&(S=!1),c.addEventListener(h.toString(),p,S);else if(c.attachEvent)c.attachEvent(Fd(h.toString()),p);else if(c.addListener&&c.removeListener)c.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function XI(){function c(f){return h.call(c.src,c.listener,f)}const h=ZI;return c}function Od(c,h,f,p,S){if(Array.isArray(h))for(var F=0;F<h.length;F++)Od(c,h[F],f,p,S);else p=a(p)?!!p.capture:!!p,f=Ld(f),c&&c[Ur]?(c=c.i,F=String(h).toString(),F in c.g&&(h=c.g[F],f=Wc(h,f,p,S),f>-1&&(xa(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete c.g[F],c.h--)))):c&&(c=Zc(c))&&(h=c.g[h.toString()],c=-1,h&&(c=Wc(h,f,p,S)),(f=c>-1?h[c]:null)&&Xc(f))}function Xc(c){if(typeof c!="number"&&c&&!c.da){var h=c.src;if(h&&h[Ur])Qc(h.i,c);else{var f=c.type,p=c.proxy;h.removeEventListener?h.removeEventListener(f,p,c.capture):h.detachEvent?h.detachEvent(Fd(f),p):h.addListener&&h.removeListener&&h.removeListener(p),(f=Zc(h))?(Qc(f,c),f.h==0&&(f.src=null,h[$c]=null)):xa(c)}}}function Fd(c){return c in Yc?Yc[c]:Yc[c]="on"+c}function ZI(c,h){if(c.da)c=!0;else{h=new At(h,this);const f=c.listener,p=c.ha||c.src;c.fa&&Xc(c),c=f.call(p,h)}return c}function Zc(c){return c=c[$c],c instanceof Ga?c:null}var el="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ld(c){return typeof c=="function"?c:(c[el]||(c[el]=function(h){return c.handleEvent(h)}),c[el])}function dt(){v.call(this),this.i=new Ga(this),this.M=this,this.G=null}d(dt,v),dt.prototype[Ur]=!0,dt.prototype.removeEventListener=function(c,h,f,p){Od(this,c,h,f,p)};function It(c,h){var f,p=c.G;if(p)for(f=[];p;p=p.G)f.push(p);if(c=c.M,p=h.type||h,typeof h=="string")h=new R(h,c);else if(h instanceof R)h.target=h.target||c;else{var S=h;h=new R(p,c),Sd(h,S)}S=!0;let F,$;if(f)for($=f.length-1;$>=0;$--)F=h.g=f[$],S=Ua(F,p,!0,h)&&S;if(F=h.g=c,S=Ua(F,p,!0,h)&&S,S=Ua(F,p,!1,h)&&S,f)for($=0;$<f.length;$++)F=h.g=f[$],S=Ua(F,p,!1,h)&&S}dt.prototype.N=function(){if(dt.Z.N.call(this),this.i){var c=this.i;for(const h in c.g){const f=c.g[h];for(let p=0;p<f.length;p++)xa(f[p]);delete c.g[h],c.h--}}this.G=null},dt.prototype.J=function(c,h,f,p){return this.i.add(String(c),h,!1,f,p)},dt.prototype.K=function(c,h,f,p){return this.i.add(String(c),h,!0,f,p)};function Ua(c,h,f,p){if(h=c.i.g[String(h)],!h)return!0;h=h.concat();let S=!0;for(let F=0;F<h.length;++F){const $=h[F];if($&&!$.da&&$.capture==f){const ce=$.listener,Ze=$.ha||$.src;$.fa&&Qc(c.i,$),S=ce.call(Ze,p)!==!1&&S}}return S&&!p.defaultPrevented}function eD(c,h){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=l(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(c,h||0)}function Vd(c){c.g=eD(()=>{c.g=null,c.i&&(c.i=!1,Vd(c))},c.l);const h=c.h;c.h=null,c.m.apply(null,h)}class tD extends v{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Vd(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zi(c){v.call(this),this.h=c,this.g={}}d(Zi,v);var kd=[];function xd(c){Ma(c.g,function(h,f){this.g.hasOwnProperty(f)&&Xc(h)},c),c.g={}}Zi.prototype.N=function(){Zi.Z.N.call(this),xd(this)},Zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tl=o.JSON.stringify,nD=o.JSON.parse,rD=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function Md(){}function Gd(){}var eo={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function nl(){R.call(this,"d")}d(nl,R);function rl(){R.call(this,"c")}d(rl,R);var Hr={},Ud=null;function Ha(){return Ud=Ud||new dt}Hr.Ia="serverreachability";function Hd(c){R.call(this,Hr.Ia,c)}d(Hd,R);function to(c){const h=Ha();It(h,new Hd(h))}Hr.STAT_EVENT="statevent";function qd(c,h){R.call(this,Hr.STAT_EVENT,c),this.stat=h}d(qd,R);function Dt(c){const h=Ha();It(h,new qd(h,c))}Hr.Ja="timingevent";function jd(c,h){R.call(this,Hr.Ja,c),this.size=h}d(jd,R);function no(c,h){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},h)}function ro(){this.g=!0}ro.prototype.ua=function(){this.g=!1};function sD(c,h,f,p,S,F){c.info(function(){if(c.g)if(F){var $="",ce=F.split("&");for(let Te=0;Te<ce.length;Te++){var Ze=ce[Te].split("=");if(Ze.length>1){const it=Ze[0];Ze=Ze[1];const nn=it.split("_");$=nn.length>=2&&nn[1]=="type"?$+(it+"="+Ze+"&"):$+(it+"=redacted&")}}}else $=null;else $=F;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+h+`
`+f+`
`+$})}function iD(c,h,f,p,S,F,$){c.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+h+`
`+f+`
`+F+" "+$})}function Vs(c,h,f,p){c.info(function(){return"XMLHTTP TEXT ("+h+"): "+aD(c,f)+(p?" "+p:"")})}function oD(c,h){c.info(function(){return"TIMEOUT: "+h})}ro.prototype.info=function(){};function aD(c,h){if(!c.g)return h;if(!h)return null;try{const F=JSON.parse(h);if(F){for(c=0;c<F.length;c++)if(Array.isArray(F[c])){var f=F[c];if(!(f.length<2)){var p=f[1];if(Array.isArray(p)&&!(p.length<1)){var S=p[0];if(S!="noop"&&S!="stop"&&S!="close")for(let $=1;$<p.length;$++)p[$]=""}}}}return tl(F)}catch{return h}}var qa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Jd={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Kd;function sl(){}d(sl,Md),sl.prototype.g=function(){return new XMLHttpRequest},Kd=new sl;function so(c){return encodeURIComponent(String(c))}function uD(c){var h=1;c=c.split(":");const f=[];for(;h>0&&c.length;)f.push(c.shift()),h--;return c.length&&f.push(c.join(":")),f}function $n(c,h,f,p){this.j=c,this.i=h,this.l=f,this.S=p||1,this.V=new Zi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new zd}function zd(){this.i=null,this.g="",this.h=!1}var Qd={},il={};function ol(c,h,f){c.M=1,c.A=Ja(tn(h)),c.u=f,c.R=!0,Wd(c,null)}function Wd(c,h){c.F=Date.now(),ja(c),c.B=tn(c.A);var f=c.B,p=c.S;Array.isArray(p)||(p=[String(p)]),cf(f.i,"t",p),c.C=0,f=c.j.L,c.h=new zd,c.g=Rf(c.j,f?h:null,!c.u),c.P>0&&(c.O=new tD(l(c.Y,c,c.g),c.P)),h=c.V,f=c.g,p=c.ba;var S="readystatechange";Array.isArray(S)||(S&&(kd[0]=S.toString()),S=kd);for(let F=0;F<S.length;F++){const $=Nd(f,S[F],p||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=c.J?Pd(c.J):{},c.u?(c.v||(c.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,h)):(c.v="GET",c.g.ea(c.B,c.v,null,h)),to(),sD(c.i,c.v,c.B,c.l,c.S,c.u)}$n.prototype.ba=function(c){c=c.target;const h=this.O;h&&Zn(c)==3?h.j():this.Y(c)},$n.prototype.Y=function(c){try{if(c==this.g)e:{const ce=Zn(this.g),Ze=this.g.ya(),Te=this.g.ca();if(!(ce<3)&&(ce!=3||this.g&&(this.h.h||this.g.la()||pf(this.g)))){this.K||ce!=4||Ze==7||(Ze==8||Te<=0?to(3):to(2)),al(this);var h=this.g.ca();this.X=h;var f=cD(this);if(this.o=h==200,iD(this.i,this.v,this.B,this.l,this.S,ce,h),this.o){if(this.U&&!this.L){t:{if(this.g){var p,S=this.g;if((p=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(p)){var F=p;break t}}F=null}if(c=F)Vs(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ul(this,c);else{this.o=!1,this.m=3,Dt(12),qr(this),io(this);break e}}if(this.R){c=!0;let it;for(;!this.K&&this.C<f.length;)if(it=lD(this,f),it==il){ce==4&&(this.m=4,Dt(14),c=!1),Vs(this.i,this.l,null,"[Incomplete Response]");break}else if(it==Qd){this.m=4,Dt(15),Vs(this.i,this.l,f,"[Invalid Chunk]"),c=!1;break}else Vs(this.i,this.l,it,null),ul(this,it);if($d(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ce!=4||f.length!=0||this.h.h||(this.m=1,Dt(16),c=!1),this.o=this.o&&c,!c)Vs(this.i,this.l,f,"[Invalid Chunked Response]"),qr(this),io(this);else if(f.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),pl($),$.P=!0,Dt(11))}}else Vs(this.i,this.l,f,null),ul(this,f);ce==4&&qr(this),this.o&&!this.K&&(ce==4?yf(this.j,this):(this.o=!1,ja(this)))}else wD(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,Dt(12)):(this.m=0,Dt(13)),qr(this),io(this)}}}catch{}finally{}};function cD(c){if(!$d(c))return c.g.la();const h=pf(c.g);if(h==="")return"";let f="";const p=h.length,S=Zn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return qr(c),io(c),"";c.h.i=new o.TextDecoder}for(let F=0;F<p;F++)c.h.h=!0,f+=c.h.i.decode(h[F],{stream:!(S&&F==p-1)});return h.length=0,c.h.g+=f,c.C=0,c.h.g}function $d(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function lD(c,h){var f=c.C,p=h.indexOf(`
`,f);return p==-1?il:(f=Number(h.substring(f,p)),isNaN(f)?Qd:(p+=1,p+f>h.length?il:(h=h.slice(p,p+f),c.C=p+f,h)))}$n.prototype.cancel=function(){this.K=!0,qr(this)};function ja(c){c.T=Date.now()+c.H,Yd(c,c.H)}function Yd(c,h){if(c.D!=null)throw Error("WatchDog timer not null");c.D=no(l(c.aa,c),h)}function al(c){c.D&&(o.clearTimeout(c.D),c.D=null)}$n.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(oD(this.i,this.B),this.M!=2&&(to(),Dt(17)),qr(this),this.m=2,io(this)):Yd(this,this.T-c)};function io(c){c.j.I==0||c.K||yf(c.j,c)}function qr(c){al(c);var h=c.O;h&&typeof h.dispose=="function"&&h.dispose(),c.O=null,xd(c.V),c.g&&(h=c.g,c.g=null,h.abort(),h.dispose())}function ul(c,h){try{var f=c.j;if(f.I!=0&&(f.g==c||cl(f.h,c))){if(!c.L&&cl(f.h,c)&&f.I==3){try{var p=f.Ba.g.parse(h)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<c.F)$a(f),Qa(f);else break e;Cl(f),Dt(18)}}else f.xa=S[1],0<f.xa-f.K&&S[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=no(l(f.Va,f),6e3));ef(f.h)<=1&&f.ta&&(f.ta=void 0)}else Jr(f,11)}else if((c.L||f.g==c)&&$a(f),!I(h))for(S=f.Ba.g.parse(h),h=0;h<S.length;h++){let Te=S[h];const it=Te[0];if(!(it<=f.K))if(f.K=it,Te=Te[1],f.I==2)if(Te[0]=="c"){f.M=Te[1],f.ba=Te[2];const nn=Te[3];nn!=null&&(f.ka=nn,f.j.info("VER="+f.ka));const Kr=Te[4];Kr!=null&&(f.za=Kr,f.j.info("SVER="+f.za));const er=Te[5];er!=null&&typeof er=="number"&&er>0&&(p=1.5*er,f.O=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const tr=c.g;if(tr){const Xa=tr.g?tr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xa){var F=p.h;F.g||Xa.indexOf("spdy")==-1&&Xa.indexOf("quic")==-1&&Xa.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(ll(F,F.h),F.h=null))}if(p.G){const gl=tr.g?tr.g.getResponseHeader("X-HTTP-Session-Id"):null;gl&&(p.wa=gl,Ne(p.J,p.G,gl))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-c.F,f.j.info("Handshake RTT: "+f.T+"ms")),p=f;var $=c;if(p.na=Af(p,p.L?p.ba:null,p.W),$.L){tf(p.h,$);var ce=$,Ze=p.O;Ze&&(ce.H=Ze),ce.D&&(al(ce),ja(ce)),p.g=$}else If(p);f.i.length>0&&Wa(f)}else Te[0]!="stop"&&Te[0]!="close"||Jr(f,7);else f.I==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?Jr(f,7):fl(f):Te[0]!="noop"&&f.l&&f.l.qa(Te),f.A=0)}}to(4)}catch{}}var BD=class{constructor(c,h){this.g=c,this.map=h}};function Xd(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Zd(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ef(c){return c.h?1:c.g?c.g.size:0}function cl(c,h){return c.h?c.h==h:c.g?c.g.has(h):!1}function ll(c,h){c.g?c.g.add(h):c.h=h}function tf(c,h){c.h&&c.h==h?c.h=null:c.g&&c.g.has(h)&&c.g.delete(h)}Xd.prototype.cancel=function(){if(this.i=nf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function nf(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let h=c.i;for(const f of c.g.values())h=h.concat(f.G);return h}return g(c.i)}var rf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hD(c,h){if(c){c=c.split("&");for(let f=0;f<c.length;f++){const p=c[f].indexOf("=");let S,F=null;p>=0?(S=c[f].substring(0,p),F=c[f].substring(p+1)):S=c[f],h(S,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Yn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;c instanceof Yn?(this.l=c.l,oo(this,c.j),this.o=c.o,this.g=c.g,ao(this,c.u),this.h=c.h,Bl(this,lf(c.i)),this.m=c.m):c&&(h=String(c).match(rf))?(this.l=!1,oo(this,h[1]||"",!0),this.o=uo(h[2]||""),this.g=uo(h[3]||"",!0),ao(this,h[4]),this.h=uo(h[5]||"",!0),Bl(this,h[6]||"",!0),this.m=uo(h[7]||"")):(this.l=!1,this.i=new lo(null,this.l))}Yn.prototype.toString=function(){const c=[];var h=this.j;h&&c.push(co(h,sf,!0),":");var f=this.g;return(f||h=="file")&&(c.push("//"),(h=this.o)&&c.push(co(h,sf,!0),"@"),c.push(so(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&c.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&c.push("/"),c.push(co(f,f.charAt(0)=="/"?CD:fD,!0))),(f=this.i.toString())&&c.push("?",f),(f=this.m)&&c.push("#",co(f,gD)),c.join("")},Yn.prototype.resolve=function(c){const h=tn(this);let f=!!c.j;f?oo(h,c.j):f=!!c.o,f?h.o=c.o:f=!!c.g,f?h.g=c.g:f=c.u!=null;var p=c.h;if(f)ao(h,c.u);else if(f=!!c.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var S=h.h.lastIndexOf("/");S!=-1&&(p=h.h.slice(0,S+1)+p)}if(S=p,S==".."||S==".")p="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){p=S.lastIndexOf("/",0)==0,S=S.split("/");const F=[];for(let $=0;$<S.length;){const ce=S[$++];ce=="."?p&&$==S.length&&F.push(""):ce==".."?((F.length>1||F.length==1&&F[0]!="")&&F.pop(),p&&$==S.length&&F.push("")):(F.push(ce),p=!0)}p=F.join("/")}else p=S}return f?h.h=p:f=c.i.toString()!=="",f?Bl(h,lf(c.i)):f=!!c.m,f&&(h.m=c.m),h};function tn(c){return new Yn(c)}function oo(c,h,f){c.j=f?uo(h,!0):h,c.j&&(c.j=c.j.replace(/:$/,""))}function ao(c,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);c.u=h}else c.u=null}function Bl(c,h,f){h instanceof lo?(c.i=h,mD(c.i,c.l)):(f||(h=co(h,pD)),c.i=new lo(h,c.l))}function Ne(c,h,f){c.i.set(h,f)}function Ja(c){return Ne(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function uo(c,h){return c?h?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function co(c,h,f){return typeof c=="string"?(c=encodeURI(c).replace(h,dD),f&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function dD(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var sf=/[#\/\?@]/g,fD=/[#\?:]/g,CD=/[#\?]/g,pD=/[#\?@]/g,gD=/#/g;function lo(c,h){this.h=this.g=null,this.i=c||null,this.j=!!h}function jr(c){c.g||(c.g=new Map,c.h=0,c.i&&hD(c.i,function(h,f){c.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}r=lo.prototype,r.add=function(c,h){jr(this),this.i=null,c=ks(this,c);let f=this.g.get(c);return f||this.g.set(c,f=[]),f.push(h),this.h+=1,this};function of(c,h){jr(c),h=ks(c,h),c.g.has(h)&&(c.i=null,c.h-=c.g.get(h).length,c.g.delete(h))}function af(c,h){return jr(c),h=ks(c,h),c.g.has(h)}r.forEach=function(c,h){jr(this),this.g.forEach(function(f,p){f.forEach(function(S){c.call(h,S,p,this)},this)},this)};function uf(c,h){jr(c);let f=[];if(typeof h=="string")af(c,h)&&(f=f.concat(c.g.get(ks(c,h))));else for(c=Array.from(c.g.values()),h=0;h<c.length;h++)f=f.concat(c[h]);return f}r.set=function(c,h){return jr(this),this.i=null,c=ks(this,c),af(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[h]),this.h+=1,this},r.get=function(c,h){return c?(c=uf(this,c),c.length>0?String(c[0]):h):h};function cf(c,h,f){of(c,h),f.length>0&&(c.i=null,c.g.set(ks(c,h),g(f)),c.h+=f.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],h=Array.from(this.g.keys());for(let p=0;p<h.length;p++){var f=h[p];const S=so(f);f=uf(this,f);for(let F=0;F<f.length;F++){let $=S;f[F]!==""&&($+="="+so(f[F])),c.push($)}}return this.i=c.join("&")};function lf(c){const h=new lo;return h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),h}function ks(c,h){return h=String(h),c.j&&(h=h.toLowerCase()),h}function mD(c,h){h&&!c.j&&(jr(c),c.i=null,c.g.forEach(function(f,p){const S=p.toLowerCase();p!=S&&(of(this,p),cf(this,S,f))},c)),c.j=h}function _D(c,h){const f=new ro;if(o.Image){const p=new Image;p.onload=B(Xn,f,"TestLoadImage: loaded",!0,h,p),p.onerror=B(Xn,f,"TestLoadImage: error",!1,h,p),p.onabort=B(Xn,f,"TestLoadImage: abort",!1,h,p),p.ontimeout=B(Xn,f,"TestLoadImage: timeout",!1,h,p),o.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=c}else h(!1)}function ED(c,h){const f=new ro,p=new AbortController,S=setTimeout(()=>{p.abort(),Xn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(c,{signal:p.signal}).then(F=>{clearTimeout(S),F.ok?Xn(f,"TestPingServer: ok",!0,h):Xn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(S),Xn(f,"TestPingServer: error",!1,h)})}function Xn(c,h,f,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(f)}catch{}}function ID(){this.g=new rD}function hl(c){this.i=c.Sb||null,this.h=c.ab||!1}d(hl,Md),hl.prototype.g=function(){return new Ka(this.i,this.h)};function Ka(c,h){dt.call(this),this.H=c,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}d(Ka,dt),r=Ka.prototype,r.open=function(c,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=h,this.readyState=1,ho(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(h.body=c),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Bo(this)),this.readyState=0},r.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ho(this)),this.g&&(this.readyState=3,ho(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Bf(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Bf(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}r.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var h=c.value?c.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!c.done}))&&(this.response=this.responseText+=h)}c.done?Bo(this):ho(this),this.readyState==3&&Bf(this)}},r.Oa=function(c){this.g&&(this.response=this.responseText=c,Bo(this))},r.Na=function(c){this.g&&(this.response=c,Bo(this))},r.ga=function(){this.g&&Bo(this)};function Bo(c){c.readyState=4,c.l=null,c.j=null,c.B=null,ho(c)}r.setRequestHeader=function(c,h){this.A.append(c,h)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,c.push(f[0]+": "+f[1]),f=h.next();return c.join(`\r
`)};function ho(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ka.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function hf(c){let h="";return Ma(c,function(f,p){h+=p,h+=":",h+=f,h+=`\r
`}),h}function dl(c,h,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=hf(f),typeof c=="string"?f!=null&&so(f):Ne(c,h,f))}function He(c){dt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}d(He,dt);var DD=/^https?$/i,yD=["POST","PUT"];r=He.prototype,r.Fa=function(c){this.H=c},r.ea=function(c,h,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);h=h?h.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Kd.g(),this.g.onreadystatechange=C(l(this.Ca,this));try{this.B=!0,this.g.open(h,String(c),!0),this.B=!1}catch(F){df(this,F);return}if(c=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)f.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const F of p.keys())f.set(F,p.get(F));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(F=>F.toLowerCase()=="content-type"),S=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(yD,h,void 0)>=0)||p||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,$]of f)this.g.setRequestHeader(F,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(F){df(this,F)}};function df(c,h){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=h,c.o=5,ff(c),za(c)}function ff(c){c.A||(c.A=!0,It(c,"complete"),It(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,It(this,"complete"),It(this,"abort"),za(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),za(this,!0)),He.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Cf(this):this.Xa())},r.Xa=function(){Cf(this)};function Cf(c){if(c.h&&typeof i<"u"){if(c.v&&Zn(c)==4)setTimeout(c.Ca.bind(c),0);else if(It(c,"readystatechange"),Zn(c)==4){c.h=!1;try{const F=c.ca();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var p;if(p=F===0){let $=String(c.D).match(rf)[1]||null;!$&&o.self&&o.self.location&&($=o.self.location.protocol.slice(0,-1)),p=!DD.test($?$.toLowerCase():"")}f=p}if(f)It(c,"complete"),It(c,"success");else{c.o=6;try{var S=Zn(c)>2?c.g.statusText:""}catch{S=""}c.l=S+" ["+c.ca()+"]",ff(c)}}finally{za(c)}}}}function za(c,h){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const f=c.g;c.g=null,h||It(c,"ready");try{f.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Zn(c){return c.g?c.g.readyState:0}r.ca=function(){try{return Zn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(c){if(this.g){var h=this.g.responseText;return c&&h.indexOf(c)==0&&(h=h.substring(c.length)),nD(h)}};function pf(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function wD(c){const h={};c=(c.g&&Zn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<c.length;p++){if(I(c[p]))continue;var f=uD(c[p]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const F=h[S]||[];h[S]=F,F.push(f)}$I(h,function(p){return p.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function fo(c,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[c]||h}function gf(c){this.za=0,this.i=[],this.j=new ro,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=fo("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=fo("baseRetryDelayMs",5e3,c),this.Za=fo("retryDelaySeedMs",1e4,c),this.Ta=fo("forwardChannelMaxRetries",2,c),this.va=fo("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Xd(c&&c.concurrentRequestLimit),this.Ba=new ID,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=gf.prototype,r.ka=8,r.I=1,r.connect=function(c,h,f,p){Dt(0),this.W=c,this.H=h||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.J=Af(this,null,this.W),Wa(this)};function fl(c){if(mf(c),c.I==3){var h=c.V++,f=tn(c.J);if(Ne(f,"SID",c.M),Ne(f,"RID",h),Ne(f,"TYPE","terminate"),Co(c,f),h=new $n(c,c.j,h),h.M=2,h.A=Ja(tn(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Rf(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ja(h)}Tf(c)}function Qa(c){c.g&&(pl(c),c.g.cancel(),c.g=null)}function mf(c){Qa(c),c.v&&(o.clearTimeout(c.v),c.v=null),$a(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function Wa(c){if(!Zd(c.h)&&!c.m){c.m=!0;var h=c.Ea;Ce||E(),le||(Ce(),le=!0),T.add(h,c),c.D=0}}function TD(c,h){return ef(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=h.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=no(l(c.Ea,c,h),wf(c,c.D)),c.D++,!0)}r.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const S=new $n(this,this.j,c);let F=this.o;if(this.U&&(F?(F=Pd(F),Sd(F,this.U)):F=this.U),this.u!==null||this.R||(S.J=F,F=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(h+=p,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Ef(this,S,h),f=tn(this.J),Ne(f,"RID",c),Ne(f,"CVER",22),this.G&&Ne(f,"X-HTTP-Session-Id",this.G),Co(this,f),F&&(this.R?h="headers="+so(hf(F))+"&"+h:this.u&&dl(f,this.u,F)),ll(this.h,S),this.Ra&&Ne(f,"TYPE","init"),this.S?(Ne(f,"$req",h),Ne(f,"SID","null"),S.U=!0,ol(S,f,null)):ol(S,f,h),this.I=2}}else this.I==3&&(c?_f(this,c):this.i.length==0||Zd(this.h)||_f(this))};function _f(c,h){var f;h?f=h.l:f=c.V++;const p=tn(c.J);Ne(p,"SID",c.M),Ne(p,"RID",f),Ne(p,"AID",c.K),Co(c,p),c.u&&c.o&&dl(p,c.u,c.o),f=new $n(c,c.j,f,c.D+1),c.u===null&&(f.J=c.o),h&&(c.i=h.G.concat(c.i)),h=Ef(c,f,1e3),f.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),ll(c.h,f),ol(f,p,h)}function Co(c,h){c.H&&Ma(c.H,function(f,p){Ne(h,p,f)}),c.l&&Ma({},function(f,p){Ne(h,p,f)})}function Ef(c,h,f){f=Math.min(c.i.length,f);const p=c.l?l(c.l.Ka,c.l,c):null;e:{var S=c.i;let ce=-1;for(;;){const Ze=["count="+f];ce==-1?f>0?(ce=S[0].g,Ze.push("ofs="+ce)):ce=0:Ze.push("ofs="+ce);let Te=!0;for(let it=0;it<f;it++){var F=S[it].g;const nn=S[it].map;if(F-=ce,F<0)ce=Math.max(0,S[it].g-100),Te=!1;else try{F="req"+F+"_"||"";try{var $=nn instanceof Map?nn:Object.entries(nn);for(const[Kr,er]of $){let tr=er;a(er)&&(tr=tl(er)),Ze.push(F+Kr+"="+encodeURIComponent(tr))}}catch(Kr){throw Ze.push(F+"type="+encodeURIComponent("_badmap")),Kr}}catch{p&&p(nn)}}if(Te){$=Ze.join("&");break e}}$=void 0}return c=c.i.splice(0,f),h.G=c,$}function If(c){if(!c.g&&!c.v){c.Y=1;var h=c.Da;Ce||E(),le||(Ce(),le=!0),T.add(h,c),c.A=0}}function Cl(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=no(l(c.Da,c),wf(c,c.A)),c.A++,!0)}r.Da=function(){if(this.v=null,Df(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=no(l(this.Wa,this),c)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Dt(10),Qa(this),Df(this))};function pl(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function Df(c){c.g=new $n(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var h=tn(c.na);Ne(h,"RID","rpc"),Ne(h,"SID",c.M),Ne(h,"AID",c.K),Ne(h,"CI",c.F?"0":"1"),!c.F&&c.ia&&Ne(h,"TO",c.ia),Ne(h,"TYPE","xmlhttp"),Co(c,h),c.u&&c.o&&dl(h,c.u,c.o),c.O&&(c.g.H=c.O);var f=c.g;c=c.ba,f.M=1,f.A=Ja(tn(h)),f.u=null,f.R=!0,Wd(f,c)}r.Va=function(){this.C!=null&&(this.C=null,Qa(this),Cl(this),Dt(19))};function $a(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function yf(c,h){var f=null;if(c.g==h){$a(c),pl(c),c.g=null;var p=2}else if(cl(c.h,h))f=h.G,tf(c.h,h),p=1;else return;if(c.I!=0){if(h.o)if(p==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var S=c.D;p=Ha(),It(p,new jd(p,f)),Wa(c)}else If(c);else if(S=h.m,S==3||S==0&&h.X>0||!(p==1&&TD(c,h)||p==2&&Cl(c)))switch(f&&f.length>0&&(h=c.h,h.i=h.i.concat(f)),S){case 1:Jr(c,5);break;case 4:Jr(c,10);break;case 3:Jr(c,6);break;default:Jr(c,2)}}}function wf(c,h){let f=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(f*=2),f*h}function Jr(c,h){if(c.j.info("Error code "+h),h==2){var f=l(c.bb,c),p=c.Ua;const S=!p;p=new Yn(p||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||oo(p,"https"),Ja(p),S?_D(p.toString(),f):ED(p.toString(),f)}else Dt(2);c.I=0,c.l&&c.l.pa(h),Tf(c),mf(c)}r.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function Tf(c){if(c.I=0,c.ja=[],c.l){const h=nf(c.h);(h.length!=0||c.i.length!=0)&&(D(c.ja,h),D(c.ja,c.i),c.h.i.length=0,g(c.i),c.i.length=0),c.l.oa()}}function Af(c,h,f){var p=f instanceof Yn?tn(f):new Yn(f);if(p.g!="")h&&(p.g=h+"."+p.g),ao(p,p.u);else{var S=o.location;p=S.protocol,h=h?h+"."+S.hostname:S.hostname,S=+S.port;const F=new Yn(null);p&&oo(F,p),h&&(F.g=h),S&&ao(F,S),f&&(F.h=f),p=F}return f=c.G,h=c.wa,f&&h&&Ne(p,f,h),Ne(p,"VER",c.ka),Co(c,p),p}function Rf(c,h,f){if(h&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=c.Aa&&!c.ma?new He(new hl({ab:f})):new He(c.ma),h.Fa(c.L),h}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function vf(){}r=vf.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Ya(){}Ya.prototype.g=function(c,h){return new xt(c,h)};function xt(c,h){dt.call(this),this.g=new gf(h),this.l=c,this.h=h&&h.messageUrlParams||null,c=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(c?c["X-WebChannel-Content-Type"]=h.messageContentType:c={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(c?c["X-WebChannel-Client-Profile"]=h.sa:c={"X-WebChannel-Client-Profile":h.sa}),this.g.U=c,(c=h&&h.Qb)&&!I(c)&&(this.g.u=c),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!I(h)&&(this.g.G=h,c=this.h,c!==null&&h in c&&(c=this.h,h in c&&delete c[h])),this.j=new xs(this)}d(xt,dt),xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){fl(this.g)},xt.prototype.o=function(c){var h=this.g;if(typeof c=="string"){var f={};f.__data__=c,c=f}else this.v&&(f={},f.__data__=tl(c),c=f);h.i.push(new BD(h.Ya++,c)),h.I==3&&Wa(h)},xt.prototype.N=function(){this.g.l=null,delete this.j,fl(this.g),delete this.g,xt.Z.N.call(this)};function Pf(c){nl.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var h=c.__sm__;if(h){e:{for(const f in h){c=f;break e}c=void 0}(this.i=c)&&(c=this.i,h=h!==null&&c in h?h[c]:void 0),this.data=h}else this.data=c}d(Pf,nl);function bf(){rl.call(this),this.status=1}d(bf,rl);function xs(c){this.g=c}d(xs,vf),xs.prototype.ra=function(){It(this.g,"a")},xs.prototype.qa=function(c){It(this.g,new Pf(c))},xs.prototype.pa=function(c){It(this.g,new bf)},xs.prototype.oa=function(){It(this.g,"b")},Ya.prototype.createWebChannel=Ya.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Fm=function(){return new Ya},Om=function(){return Ha()},Nm=Hr,$l={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},qa.NO_ERROR=0,qa.TIMEOUT=8,qa.HTTP_ERROR=6,Iu=qa,Jd.COMPLETE="complete",Sm=Jd,Gd.EventType=eo,eo.OPEN="a",eo.CLOSE="b",eo.ERROR="c",eo.MESSAGE="d",dt.prototype.listen=dt.prototype.J,Ao=Gd,He.prototype.listenOnce=He.prototype.K,He.prototype.getLastError=He.prototype.Ha,He.prototype.getLastErrorCode=He.prototype.ya,He.prototype.getStatus=He.prototype.ca,He.prototype.getResponseJson=He.prototype.La,He.prototype.getResponseText=He.prototype.la,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Fa,bm=He}).apply(typeof tu<"u"?tu:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.8.6
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository github:le0pard/re2js
* @license MIT
*/var Ae,G=(Ae=class{},J(Ae,"FOLD_CASE",1),J(Ae,"LITERAL",2),J(Ae,"CLASS_NL",4),J(Ae,"DOT_NL",8),J(Ae,"ONE_LINE",16),J(Ae,"NON_GREEDY",32),J(Ae,"PERL_X",64),J(Ae,"UNICODE_GROUPS",128),J(Ae,"WAS_DOLLAR",256),J(Ae,"LOOKBEHIND",512),J(Ae,"MATCH_NL",Ae.CLASS_NL|Ae.DOT_NL),J(Ae,"PERL",Ae.CLASS_NL|Ae.ONE_LINE|Ae.PERL_X|Ae.UNICODE_GROUPS),J(Ae,"POSIX",0),J(Ae,"UNANCHORED",0),J(Ae,"ANCHOR_START",1),J(Ae,"ANCHOR_BOTH",2),Ae);const Ms={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},ea=128,Yl=new Int32Array(ea),Xl=new Int32Array(ea),nu=65535;for(let r=0;r<ea;r++)r>=97&&r<=122?Yl[r]=r-32:Yl[r]=r,r>=65&&r<=90?Xl[r]=r+32:Xl[r]=r;var ql,L=(ql=class{static toUpperCase(r){if(r<ea)return Yl[r];const e=String.fromCodePoint(r).toUpperCase(),t=e.codePointAt(0)>nu?2:1;if(e.length>t)return r;const n=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),s=n.codePointAt(0)>nu?2:1;return n.length>s||n.codePointAt(0)!==r?r:e.codePointAt(0)}static toLowerCase(r){if(r<ea)return Xl[r];const e=String.fromCodePoint(r).toLowerCase(),t=e.codePointAt(0)>nu?2:1;if(e.length>t)return r;const n=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),s=n.codePointAt(0)>nu?2:1;return n.length>s||n.codePointAt(0)!==r?r:e.codePointAt(0)}},J(ql,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["'",39],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["`",96],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]])),ql),m=class{constructor(r,e=!1){this.data=r,this.isStride1=e,this.SIZE=e?2:3}getLo(r){return this.data[r*this.SIZE]}getHi(r){return this.data[r*this.SIZE+1]}getStride(r){return this.isStride1?1:this.data[r*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const Lm=new Uint8Array(256);for(let r=0,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-";r<64;r++)Lm[e.charCodeAt(r)]=r;const Vm=r=>{const e=[];let t=0,n=0;for(let s=0;s<r.length;s++){let i=Lm[r.charCodeAt(s)];t|=(i&31)<<n,(i&32)===0?(e.push(t),t=0,n=0):n+=5}return e},_=(r,e)=>{const t=Vm(r),n=e?t.length/2:t.length/3,s=new Uint32Array(n*3);let i=0,o=0;for(let a=0;a<n;a++)i+=t[o++],s[a*3]=i,i+=t[o++],s[a*3+1]=i,s[a*3+2]=e?1:t[o++];return s},UR=r=>{const e=Vm(r),t=new Map;let n=0;for(let s=0;s<e.length;s+=2){n+=e[s];const i=e[s+1],o=i>>>1^-(i&1);t.set(n,n+o)}return t};var ru=class{constructor(r){this.initializer=r,this.cache=new Map}has(r){return r in this.initializer}get(r){if(this.cache.has(r))return this.cache.get(r);const e=this.initializer[r],t=e?e():null;return this.cache.set(r,t),t}},ur,vt=(ur=class{static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=UR("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static get Print(){return this._Print||(this._Print=new m(_("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}static get Upper(){return this.CATEGORIES.get("Lu")}},J(ur,"_CASE_ORBIT",null),J(ur,"_Print",null),J(ur,"CATEGORIES",new ru({C:()=>new m(_("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new m(_("AfgDgB",!0)),Cf:()=>new m(_("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new m(_("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new m(_("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new m(_("gg2B--B",!0)),L:()=>new m(_("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new m(_("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new m(_("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new m(_("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new m(_("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new m(_("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new m(_("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new m(_("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new m(_("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new m(_("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new m(_("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new m(_("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new m(_("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new m(_("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new m(_("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new m(_("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new m(_("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new m(_("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new m(_("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new m(_("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new m(_("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new m(_("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new m(_("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new m(_("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new m(_("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new m(_("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new m(_("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new m(_("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new m(_("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new m(_("ohIA",!0)),Zp:()=>new m(_("phIA",!0)),Zs:()=>new m(_("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new m(_("wBJIFbF",!0)),Alphabetic:()=>new m(_("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new m(_("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new m(_("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new m(_("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new m(_("7-8DE",!0)),Emoji_Modifier_Base:()=>new m(_("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new m(_("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new m(_("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new m(_("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new m(_("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new m(_("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new m(_("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new m(_("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new m(_("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new m(_("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))})),J(ur,"SCRIPTS",new ru({Adlam:()=>new m(_("go6DrCFJFB",!0)),Ahom:()=>new m(_("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new m(_("ggxCmS",!0)),Arabic:()=>new m(_("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new m(_("xpBlBDxBDCks9BE",!0)),Avestan:()=>new m(_("g4iC1BEG",!0)),Balinese:()=>new m(_("g4GsCCxB",!0)),Bamum:()=>new m(_("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new m(_("w26CdDF",!0)),Batak:()=>new m(_("g+GzBJD",!0)),Bengali:()=>new m(_("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new m(_("g17CYDY",!0)),Bhaiksuki:()=>new m(_("ggnCICsBCNLc",!0)),Bopomofo:()=>new m(_("qXB6wLqBxDf",!0)),Brahmi:()=>new m(_("ggkCtCFjBKA",!0)),Braille:()=>new m(_("ggK-H",!0)),Buginese:()=>new m(_("gwGbDB",!0)),Buhid:()=>new m(_("g6FT",!0)),Canadian_Aboriginal:()=>new m(_("ggF-TxRlC7tgCP",!0)),Carian:()=>new m(_("g1gCwB",!0)),Caucasian_Albanian:()=>new m(_("wphCzBMA",!0)),Chakma:()=>new m(_("gokC0BCR",!0)),Cham:()=>new m(_("gwqB2BKNDJDD",!0)),Cherokee:()=>new m(_("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new m(_("w9jCb",!0)),Common:()=>new m(_("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new m(_("ifNxkKzDGG",!0)),Cuneiform:()=>new m(_("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new m(_("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new m(_("w8rCiD",!0)),Cyrillic:()=>new m(_("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new m(_("gghCvC",!0)),Devanagari:()=>new m(_("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new m(_("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new m(_("ggmC7B",!0)),Duployan:()=>new m(_("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new m(_("ggsC1iBL68D",!0)),Elbasan:()=>new m(_("gohCnB",!0)),Elymaic:()=>new m(_("g-jCW",!0)),Ethiopic:()=>new m(_("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new m(_("gqjClBEcJB",!0)),Georgian:()=>new m(_("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new m(_("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new m(_("w5gCa",!0)),Grantha:()=>new m(_("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new m(_("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new m(_("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new m(_("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new m(_("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new m(_("go4C5B",!0)),Han:()=>new m(_("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new m(_("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new m(_("gojCnBJJ",!0)),Hanunoo:()=>new m(_("g5FU",!0)),Hatran:()=>new m(_("gniCSCBGE",!0)),Hebrew:()=>new m(_("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new m(_("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new m(_("giiCVCI",!0)),Inherited:()=>new m(_("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new m(_("g7iCSGH",!0)),Inscriptional_Parthian:()=>new m(_("g6iCVDH",!0)),Javanese:()=>new m(_("gsqBtCDJFB",!0)),Kaithi:()=>new m(_("gkkCiCLA",!0)),Kannada:()=>new m(_("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new m(_("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new m(_("g4nCQCoBEc",!0)),Kayah_Li:()=>new m(_("goqBtBCA",!0)),Kharoshthi:()=>new m(_("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new m(_("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new m(_("g8F9CDJHJnPf",!0)),Khojki:()=>new m(_("gwkCRCuB",!0)),Khudawadi:()=>new m(_("w1kC6BGJ",!0)),Kirat_Rai:()=>new m(_("gq7C5B",!0)),Lao:()=>new m(_("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new m(_("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new m(_("ggH3BEOEC",!0)),Limbu:()=>new m(_("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new m(_("gwhC2JKVLH",!0)),Linear_B:()=>new m(_("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new m(_("wmpBvBx1eA",!0)),Lycian:()=>new m(_("g0gCc",!0)),Lydian:()=>new m(_("gpiCZGA",!0)),Mahajani:()=>new m(_("wqkCmB",!0)),Makasar:()=>new m(_("g3nCY",!0)),Malayalam:()=>new m(_("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new m(_("giCbDA",!0)),Manichaean:()=>new m(_("g2iCmBFL",!0)),Marchen:()=>new m(_("wjnCfDVCN",!0)),Masaram_Gondi:()=>new m(_("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new m(_("gy7C6C",!0)),Meetei_Mayek:()=>new m(_("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new m(_("gg6DkGDP",!0)),Meroitic_Cursive:()=>new m(_("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new m(_("gsiCf",!0)),Miao:()=>new m(_("g47CqCF4BIQ",!0)),Modi:()=>new m(_("gwlCkCMJ",!0)),Mongolian:()=>new m(_("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new m(_("gy6CeCJFB",!0)),Multani:()=>new m(_("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new m(_("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new m(_("gkiCeJI",!0)),Nag_Mundari:()=>new m(_("wm5DpB",!0)),Nandinagari:()=>new m(_("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new m(_("gsGrBFZHKEB",!0)),Newa:()=>new m(_("gglC7CCE",!0)),Nko:()=>new m(_("g+B6BDC",!0)),Nushu:()=>new m(_("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new m(_("go4DsBENDJFB",!0)),Ogham:()=>new m(_("g0Fc",!0)),Ol_Chiki:()=>new m(_("wiHvB",!0)),Ol_Onal:()=>new m(_("wu5DqBFA",!0)),Old_Hungarian:()=>new m(_("gkjCyBOyBIF",!0)),Old_Italic:()=>new m(_("g4gCjBKC",!0)),Old_North_Arabian:()=>new m(_("g0iCf",!0)),Old_Permic:()=>new m(_("w6gCqB",!0)),Old_Persian:()=>new m(_("g9gCjBFN",!0)),Old_Sogdian:()=>new m(_("g4jCnB",!0)),Old_South_Arabian:()=>new m(_("gziCf",!0)),Old_Turkic:()=>new m(_("ggjCoC",!0)),Old_Uyghur:()=>new m(_("w7jCZ",!0)),Oriya:()=>new m(_("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new m(_("wlhCjBFjB",!0)),Osmanya:()=>new m(_("gkhCdDJ",!0)),Pahawh_Hmong:()=>new m(_("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new m(_("gjiCf",!0)),Pau_Cin_Hau:()=>new m(_("g2mC4B",!0)),Phags_Pa:()=>new m(_("giqB3B",!0)),Phoenician:()=>new m(_("goiCbEA",!0)),Psalter_Pahlavi:()=>new m(_("g8iCRIDNG",!0)),Rejang:()=>new m(_("wpqBjBMA",!0)),Runic:()=>new m(_("g1FqCEK",!0)),Samaritan:()=>new m(_("ggCtBDO",!0)),Saurashtra:()=>new m(_("gkqBlCJL",!0)),Sharada:()=>new m(_("gskC-ChsCH",!0)),Shavian:()=>new m(_("wihCvB",!0)),Siddham:()=>new m(_("gslC1BDlB",!0)),Sidetic:()=>new m(_("gqiCZ",!0)),SignWriting:()=>new m(_("gg2DrUQECO",!0)),Sinhala:()=>new m(_("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new m(_("w5jCpB",!0)),Sora_Sompeng:()=>new m(_("wmkCYIJ",!0)),Soyombo:()=>new m(_("wymCyC",!0)),Sundanese:()=>new m(_("g8G-BhIH",!0)),Sunuwar:()=>new m(_("g+mChBPJ",!0)),Syloti_Nagri:()=>new m(_("ggqBsB",!0)),Syriac:()=>new m(_("g4BNC7BDCxIK",!0)),Tagalog:()=>new m(_("g4FVKA",!0)),Tagbanwa:()=>new m(_("g7FMCCCB",!0)),Tai_Le:()=>new m(_("wqGdDE",!0)),Tai_Tham:()=>new m(_("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new m(_("g0qBiCZE",!0)),Tai_Yo:()=>new m(_("g25DeCVJB",!0)),Takri:()=>new m(_("g0lC5BHJ",!0)),Tamil:()=>new m(_("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new m(_("wz6CuCCJ",!0)),Tangut:()=>new m(_("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new m(_("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new m(_("g8BxB",!0)),Thai:()=>new m(_("hwD5BGb",!0)),Tibetan:()=>new m(_("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new m(_("wpL3BIBPA",!0)),Tirhuta:()=>new m(_("gklCnCJJ",!0)),Todhri:()=>new m(_("guhCzB",!0)),Tolong_Siki:()=>new m(_("wtnCrBFJ",!0)),Toto:()=>new m(_("w04De",!0)),Tulu_Tigalari:()=>new m(_("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new m(_("g8gCdCA",!0)),Unknown:()=>new m(_("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new m(_("gopBrJ",!0)),Vithkuqi:()=>new m(_("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new m(_("g24D5BGA",!0)),Warang_Citi:()=>new m(_("glmCyCNA",!0)),Yezidi:()=>new m(_("g0jCpBCCDB",!0)),Yi:()=>new m(_("ggoBskBE2B",!0)),Zanabazar_Square:()=>new m(_("gwmCnC",!0))})),J(ur,"FOLD_CATEGORIES",new ru({L:()=>new m(_("laA",!0)),LC:()=>new m(_("laA",!0)),Ll:()=>new m(_("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new m(_("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new m(_("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new m(_("5cgBgBlgHAB",!1)),Mn:()=>new m(_("5cgBgBlgHAB",!1)),Emoji:()=>new m(_("8mJA",!0)),Extended_Pictographic:()=>new m(_("8mJA",!0)),Lowercase:()=>new m(_("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new m(_("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new m(_("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))})),J(ur,"FOLD_SCRIPT",new ru({Common:()=>new m(_("8cgBgB",!1)),Greek:()=>new m(_("1FwUwU",!1)),Inherited:()=>new m(_("5cgBgBlgHAB",!1))})),ur),Re,X=(Re=class{static is32(e,t){let n=0,s=e.length;for(;n<s;){const i=n+Math.floor((s-n)/2),o=e.getLo(i),a=e.getHi(i);if(o<=t&&t<=a){const u=e.getStride(i);return(t-o)%u===0}t<o?s=i:n=i+1}return!1}static is(e,t){if(t<=Re.MAX_LATIN1){for(let n=0;n<e.length;n++){if(t>e.getHi(n))continue;const s=e.getLo(n);if(t<s)return!1;const i=e.getStride(n);return(t-s)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&Re.is32(e,t)}static isUpper(e){if(e<=Re.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return Re.is(vt.Upper,e)}static isPrint(e){return e<=Re.MAX_LATIN1?e>=32&&e<Re.MAX_ASCII||e>=161&&e!==173:Re.is(vt.Print,e)}static simpleFold(e){if(vt.CASE_ORBIT.has(e))return vt.CASE_ORBIT.get(e);const t=L.toLowerCase(e);return t!==e?t:L.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=Re.MAX_ASCII&&t<=Re.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let n=Re.simpleFold(e);n!==e;n=Re.simpleFold(n))if(n===t)return!0;return!1}},J(Re,"MAX_RUNE",1114111),J(Re,"MAX_ASCII",127),J(Re,"MAX_LATIN1",255),J(Re,"MAX_BMP",65535),J(Re,"MIN_FOLD",65),J(Re,"MAX_FOLD",125251),J(Re,"MIN_HIGH_SURROGATE",55296),J(Re,"MAX_HIGH_SURROGATE",56319),J(Re,"MIN_LOW_SURROGATE",56320),J(Re,"MAX_LOW_SURROGATE",57343),J(Re,"MIN_SUPPLEMENTARY_CODE_POINT",65536),Re);const th=256,km=new Uint8Array(th);for(let r=0;r<th;r++)km[r]=97<=r&&r<=122||65<=r&&r<=90||48<=r&&r<=57||r===95?1:0;let bl=null,Sl=null;var Fe,te=(Fe=class{static emptyInts(){return[]}static isByteArray(e){return Array.isArray(e)||e instanceof Uint8Array}static isalnum(e){return L.CODES.get("0")<=e&&e<=L.CODES.get("9")||L.CODES.get("a")<=e&&e<=L.CODES.get("z")||L.CODES.get("A")<=e&&e<=L.CODES.get("Z")}static unhex(e){return L.CODES.get("0")<=e&&e<=L.CODES.get("9")?e-L.CODES.get("0"):L.CODES.get("a")<=e&&e<=L.CODES.get("f")?e-L.CODES.get("a")+10:L.CODES.get("A")<=e&&e<=L.CODES.get("F")?e-L.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(X.isPrint(e))Fe.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case L.CODES.get('"'):t+='\\"';break;case L.CODES.get("\\"):t+="\\\\";break;case L.CODES.get("	"):t+="\\t";break;case L.CODES.get(`
`):t+="\\n";break;case L.CODES.get("\r"):t+="\\r";break;case L.CODES.get("\b"):t+="\\b";break;case L.CODES.get("\f"):t+="\\f";break;default:{let n=e.toString(16);e<256?(t+="\\x",n.length===1&&(t+="0"),t+=n):t+=`\\x{${n}}`;break}}return t}static stringToRunes(e){const t=String(e),n=[];let s=0;for(;s<t.length;){const i=t.codePointAt(s);n.push(i),s+=i>X.MAX_BMP?2:1}return n}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<th?km[e]===1:!1}static emptyOpContext(e,t){let n=0;return e<0&&(n|=Fe.EMPTY_BEGIN_TEXT|Fe.EMPTY_BEGIN_LINE),e===10&&(n|=Fe.EMPTY_BEGIN_LINE),t<0&&(n|=Fe.EMPTY_END_TEXT|Fe.EMPTY_END_LINE),t===10&&(n|=Fe.EMPTY_END_LINE),Fe.isWordRune(e)!==Fe.isWordRune(t)?n|=Fe.EMPTY_WORD_BOUNDARY:n|=Fe.EMPTY_NO_WORD_BOUNDARY,n}static quoteMeta(e){return e.split("").map(t=>Fe.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>X.MAX_BMP?2:1}static toArray(e){const t=e.length,n=new Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return bl||(bl=new TextEncoder),bl.encode(e);{let t=[],n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===X.MIN_HIGH_SURROGATE&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===X.MIN_LOW_SURROGATE?(i=X.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){Sl||(Sl=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return Sl.decode(t)}else{let t=[],n=0,s=0;for(;n<e.length;){let i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[n++];t[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[n++],a=e[n++],u=e[n++],l=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-X.MIN_SUPPLEMENTARY_CODE_POINT;t[s++]=String.fromCharCode(X.MIN_HIGH_SURROGATE+(l>>10)),t[s++]=String.fromCharCode(X.MIN_LOW_SURROGATE+(l&1023))}else{let o=e[n++],a=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")}}},J(Fe,"METACHARACTERS","\\.+*?()|[]{}^$"),J(Fe,"EMPTY_BEGIN_LINE",1),J(Fe,"EMPTY_END_LINE",2),J(Fe,"EMPTY_BEGIN_TEXT",4),J(Fe,"EMPTY_END_TEXT",8),J(Fe,"EMPTY_WORD_BOUNDARY",16),J(Fe,"EMPTY_NO_WORD_BOUNDARY",32),J(Fe,"EMPTY_ALL",-1),Fe);const xm=(r=[],e=0)=>{const t=Object.create(null);for(let n=0;n<r.length;n++){const s=r[n],i=e+n;t[s]=i,t[i]=s}return Object.freeze(t)};var fr,Cs=(fr=class{getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===fr.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===fr.Encoding.UTF_16}},J(fr,"Encoding",xm(["UTF_16","UTF_8"])),fr),cC=class extends Cs{constructor(r=null){super(),this.bytes=r}getEncoding(){return Cs.Encoding.UTF_8}asCharSequence(){return te.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},HR=class extends Cs{constructor(r=null){super(),this.charSequence=r}getEncoding(){return Cs.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return te.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},rs=class{static utf16(r){return new HR(r)}static utf8(r){return te.isByteArray(r)?new cC(r):new cC(te.stringToUtf8ByteArray(r))}},yt=class{static EOF(){return-8}constructor(){this.end=0}canCheckPrefix(){return!0}endPos(){return this.end}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},qR=class extends yt{constructor(r,e=0,t=r.length){super(),this.bytes=r,this.start=e,this.end=t}hasString(r,e){const t=r.bytes;if(t.length===0)return!0;const n=this.indexOf(this.bytes,t,this.start+e);return n!==-1&&n<=this.end-t.length}hasAnyString(r,e){return r.ac8?r.ac8.searchUTF8(this.bytes,this.start+e,this.end):!1}step(r){if(r+=this.start,r>=this.end)return yt.EOF();const e=this.bytes[r]&255;if(e<128)return e<<3|1;if(e>=194&&e<=223&&r+1<this.end){const t=this.bytes[r+1]&255;return(t&192)!==128?e<<3|1:((e&31)<<6|t&63)<<3|2}else if(e>=224&&e<=239&&r+2<this.end){const t=this.bytes[r+1]&255;if((t&192)!==128)return e<<3|1;const n=this.bytes[r+2]&255;return(n&192)!==128?e<<3|1:((e&15)<<12|(t&63)<<6|n&63)<<3|3}else if(e>=240&&e<=244&&r+3<this.end){const t=this.bytes[r+1]&255;if((t&192)!==128)return e<<3|1;const n=this.bytes[r+2]&255;if((n&192)!==128)return e<<3|1;const s=this.bytes[r+3]&255;return(s&192)!==128?e<<3|1:((e&7)<<18|(t&63)<<12|(n&63)<<6|s&63)<<3|4}else return e<<3|1}index(r,e){e+=this.start;const t=this.indexOf(this.bytes,r.prefixUTF8,e);return t<0?t:t-e}context(r){r+=this.start;let e=-1;if(r>this.start&&r<=this.end){let n=r-1;if(e=this.bytes[n--],e>=128){let s=r-4;for(s<this.start&&(s=this.start);n>=s&&(this.bytes[n]&192)===128;)n--;n<this.start&&(n=this.start),e=this.step(n-this.start)>>3}}const t=r<this.end?this.step(r-this.start)>>3:-1;return te.emptyOpContext(e,t)}indexOf(r,e,t=0){let n=e.length;if(n===0)return t<=this.end?t:-1;const s=e[0];let i=this.end-n;const o=typeof r.indexOf=="function";let a=t;for(;a<=i;){if(o){if(a=r.indexOf(s,a),a===-1||a>i)return-1}else{for(;a<=i&&r[a]!==s;)a++;if(a>i)return-1}let u=!0;for(let l=1;l<n;l++)if(r[a+l]!==e[l]){u=!1;break}if(u)return a;a++}return-1}prefixLength(r){return r.prefixUTF8.length}},jR=class extends yt{constructor(r,e=0,t=r.length){super(),this.charSequence=r,this.start=e,this.end=t}hasString(r,e){const t=this.charSequence.indexOf(r.str,this.start+e);return t!==-1&&t<=this.end-r.str.length}hasAnyString(r,e){return r.ac16?r.ac16.searchUTF16(this.charSequence,this.start+e,this.end):!1}step(r){if(r+=this.start,r>=this.end)return yt.EOF();const e=this.charSequence.charCodeAt(r);if(e<X.MIN_HIGH_SURROGATE||e>X.MAX_HIGH_SURROGATE||r+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(r+1);return t>=X.MIN_LOW_SURROGATE&&t<=X.MAX_LOW_SURROGATE?(e-X.MIN_HIGH_SURROGATE)*1024+(t-X.MIN_LOW_SURROGATE)+X.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(r,e){e+=this.start;const t=this.charSequence.indexOf(r.prefix,e);return t<0||t>this.end-r.prefix.length?-1:t-e}context(r){r+=this.start;const e=r>this.start&&r<=this.end?this.charSequence.charCodeAt(r-1):-1,t=r<this.end?this.charSequence.charCodeAt(r):-1;return te.emptyOpContext(e,t)}prefixLength(r){return r.prefix.length}},Oe=class{static fromUTF8(r,e=0,t=r.length){return new qR(r,e,t)}static fromUTF16(r,e=0,t=r.length){return new jR(r,e,t)}},Ea=class extends Error{constructor(r){super(r),this.name="RE2JSException"}},Pe=class extends Ea{constructor(r,e=null){let t=`error parsing regexp: ${r}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=r,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},JR=class extends Ea{constructor(r){super(r),this.name="RE2JSCompileException"}},Rt=class extends Ea{constructor(r){super(r),this.name="RE2JSGroupException"}},KR=class extends Ea{constructor(r){super(r),this.name="RE2JSFlagsException"}},Fo=class extends Ea{constructor(r){super(r),this.name="RE2JSInternalException"}},os,lC=(os=class{static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(n=>{const s=n.codePointAt(0);return s===L.CODES.get("\\")||s===L.CODES.get("$")?`\\${n}`:n}).join(""):e.indexOf("$")<0?e:e.split("").map(n=>n.codePointAt(0)===L.CODES.get("$")?"$$":n).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const n=this.patternInput.re2();this.patternGroupCount=n.numberOfCapturingGroups(),this.groups=[],this.namedGroups=n.namedGroups,this.numberOfInstructions=n.numberOfInstructions(),t instanceof Cs?this.resetMatcherInput(t):te.isByteArray(t)?this.resetMatcherInput(rs.utf8(t)):this.resetMatcherInput(rs.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof Cs||(te.isByteArray(e)?e=rs.utf8(e):e=rs.utf16(e)),this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Rt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new Rt(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const s=this.namedGroups[e];if(!Number.isFinite(s))throw new Rt(`group '${e}' not found`);e=s}const t=this.start(e),n=this.end(e);return t<0&&n<0?null:this.substring(t,n)}getNamedGroups(){if(!this.hasMatch)throw new Rt("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new Rt(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new Rt("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,n=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!n[0])throw new Rt("inconsistency in matching group data");this.groups=n[1],this.hasGroups=!0}matches(){return this.genMatch(0,G.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,G.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new Rt(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?Oe.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):Oe.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,G.UNANCHORED)}genMatch(e,t){const n=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return n[0]?(this.groups=n[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?te.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let n="";const s=this.start(),i=this.end();return this.appendPos<s&&(n+=this.substring(this.appendPos,s)),this.appendPos=i,n+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),n}appendReplacementInternalJava(e){let t="",n=0;const s=e.length;let i=0;for(;i<s;){const o=e.codePointAt(i);if(o===L.CODES.get("\\")){if(n<i&&(t+=e.substring(n,i)),i++,i>=s)throw new Rt("character to be escaped is missing");n=i,i++;continue}if(o===L.CODES.get("$")){if(n<i&&(t+=e.substring(n,i)),i+1>=s)throw new Rt("Illegal group reference: group index is missing");const a=e.codePointAt(i+1);if(L.CODES.get("0")<=a&&a<=L.CODES.get("9")){let u=a-L.CODES.get("0"),l=i+2;for(;l<s;l++){const d=e.codePointAt(l);if(d<L.CODES.get("0")||d>L.CODES.get("9")||u*10+d-L.CODES.get("0")>this.patternGroupCount)break;u=u*10+d-L.CODES.get("0")}if(u>this.patternGroupCount)throw new Rt(`n > number of groups: ${u}`);const B=this.group(u);B!==null&&(t+=B),i=l,n=i}else if(a===L.CODES.get("{")){let u=i+2;for(;u<s&&e.codePointAt(u)!==L.CODES.get("}");)u++;if(u>=s)throw new Rt("named capture group is missing trailing '}'");const l=e.substring(i+2,u),B=this.group(l);B!==null&&(t+=B),i=u+1,n=i}else throw new Rt("Illegal group reference");continue}i++}return n<s&&(t+=e.substring(n,s)),t}appendReplacementInternalJs(e){let t="",n=0;const s=e.length;for(let i=0;i<s-1;i++)if(e.codePointAt(i)===L.CODES.get("$")){let o=e.codePointAt(i+1);if(L.CODES.get("$")===o){n<i&&(t+=e.substring(n,i)),t+="$",i++,n=i+1;continue}else if(L.CODES.get("&")===o){n<i&&(t+=e.substring(n,i));const a=this.group(0);a!==null?t+=a:t+="$&",i++,n=i+1;continue}else if(L.CODES.get("`")===o){n<i&&(t+=e.substring(n,i)),t+=this.substring(0,this.start(0)),i++,n=i+1;continue}else if(L.CODES.get("'")===o){n<i&&(t+=e.substring(n,i)),t+=this.substring(this.end(0),this.matcherInputLength),i++,n=i+1;continue}else if(L.CODES.get("1")<=o&&o<=L.CODES.get("9")){let a=o-L.CODES.get("0");for(n<i&&(t+=e.substring(n,i)),i+=2;i<s&&(o=e.codePointAt(i),!(o<L.CODES.get("0")||o>L.CODES.get("9")||a*10+o-L.CODES.get("0")>this.patternGroupCount));i++)a=a*10+o-L.CODES.get("0");if(a>this.patternGroupCount){t+=`$${a}`,n=i,i--;continue}const u=this.group(a);u!==null&&(t+=u),n=i,i--;continue}else if(o===L.CODES.get("<")){n<i&&(t+=e.substring(n,i)),i++;let a=i+1;for(;a<e.length&&e.codePointAt(a)!==L.CODES.get(">")&&e.codePointAt(a)!==L.CODES.get(" ");)a++;if(a===e.length||e.codePointAt(a)!==L.CODES.get(">")){t+=e.substring(i-1,a+1),n=a+1,i=a;continue}const u=e.substring(i+1,a);if(Object.prototype.hasOwnProperty.call(this.namedGroups,u)){const l=this.group(u);l!==null&&(t+=l)}else t+=`$<${u}>`;n=a+1,i=a;continue}}return n<s&&(t+=e.substring(n,s)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,n=!1){let s="";this.reset();const i=typeof e=="function",o=Object.keys(this.namedGroups).length>0;let a=null;if(i){if(this.groupCount()>=os.MAX_REPLACER_ARGS)throw new Rt("Too many capture groups to safely invoke replacer function");a=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(s+=i?this.appendReplacementFunc(e,o,a):this.appendReplacement(e,n),!!t););return s+=this.appendTail(),s}appendReplacementFunc(e,t,n){let s="";const i=this.start(),o=this.end();this.appendPos<i&&(s+=this.substring(this.appendPos,i)),this.appendPos=o;const a=this.buildReplacerArgs(i,t,n);return s+=String(e(...a)),s}buildReplacerArgs(e,t,n){const s=[this.group(0)],i=this.groupCount();for(let o=1;o<=i;o++){const a=this.start(o);a<0?s.push(void 0):s.push(this.substring(a,this.end(o)))}if(s.push(e),s.push(n),t){const o=this.getNamedGroups();for(const a in o)o[a]===null&&(o[a]=void 0);s.push(o)}return s}},J(os,"MAX_REPLACER_ARGS",65535),os),pe,k=(pe=class{static isRuneOp(e){return pe.RUNE<=e&&e<=pe.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let n of e)t+=te.escapeRune(n);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=[],this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&G.FOLD_CASE)!==0?X.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let n=0,s=t>>1;for(;s>1;){const o=s>>1;n+=this.runes[n+o<<1]<=e?o:0,s-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&G.FOLD_CASE)!==0?X.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let n=0,s=t>>1;for(;s>1;){const o=s>>1;n+=this.runes[n+o<<1]<=e?o:0,s-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case pe.ALT:return`alt -> ${this.out}, ${this.arg}`;case pe.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case pe.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case pe.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case pe.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case pe.FAIL:return"fail";case pe.NOP:return`nop -> ${this.out}`;case pe.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case pe.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case pe.RUNE:return this.runes===null?"rune <null>":["rune ",pe.escapeRunes(this.runes),(this.arg&G.FOLD_CASE)!==0?"/i":""," -> ",this.out].join("");case pe.RUNE1:return`rune1 ${pe.escapeRunes(this.runes)} -> ${this.out}`;case pe.RUNE_ANY:return`any -> ${this.out}`;case pe.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},J(pe,"ALT",1),J(pe,"ALT_MATCH",2),J(pe,"CAPTURE",3),J(pe,"EMPTY_WIDTH",4),J(pe,"FAIL",5),J(pe,"MATCH",6),J(pe,"NOP",7),J(pe,"RUNE",8),J(pe,"RUNE1",9),J(pe,"RUNE_ANY",10),J(pe,"RUNE_ANY_NOT_NL",11),J(pe,"LB_WRITE",12),J(pe,"LB_CHECK",13),pe),BC=class{constructor(r){this.sparse=new Int32Array(r),this.densePcs=new Int32Array(r),this.denseCaps=null,this.size=0,this.ncap=0}init(r){this.ncap=r;const e=this.densePcs.length*r;(!this.denseCaps||this.denseCaps.length<e)&&(this.denseCaps=new Int32Array(e))}contains(r){const e=this.sparse[r];return e<this.size&&this.densePcs[e]===r}isEmpty(){return this.size===0}add(r){const e=this.size++;return this.sparse[r]=e,this.densePcs[e]=r,e}clear(){this.size=0}toString(){let r="{";for(let e=0;e<this.size;e++)e!==0&&(r+=", "),r+=this.densePcs[e];return r+="}",r}},zR=class Zl{static fromRE2(e){const t=new Zl;return t.prog=e.prog,t.re2=e,t.q0=new BC(t.prog.numInst()),t.q1=new BC(t.prog.numInst()),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}static fromMachine(e){return Zl.fromRE2(e.re2)}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?te.emptyInts():te.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,n){const s=this.re2.cond;if(s===te.EMPTY_ALL||(n===G.ANCHOR_START||n===G.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);let i=this.prog.numLb>0?0:t,o=t,a=this.q0,u=this.q1,l=e.step(i),B=l>>3,d=l&7,C=-1,g=0;l!==yt.EOF()&&(l=e.step(i+d),C=l>>3,g=l&7);let D;for(i===0?D=te.emptyOpContext(-1,B):D=e.context(i);;){if(a.isEmpty()){if((s&te.EMPTY_BEGIN_TEXT)!==0&&i!==0||(n===G.ANCHOR_START||n===G.ANCHOR_BOTH)&&i!==0||this.matched)break;if(this.prog.numLb===0&&this.re2.prefix.length!==0&&C!==this.re2.prefixRune&&e.canCheckPrefix()){const H=e.index(this.re2,i);if(H<0)break;i+=H,l=e.step(i),B=l>>3,d=l&7,l=e.step(i+d),C=l>>3,g=l&7,D=e.context(i)}}if(i===0&&this.prog.numLb>0)for(let H=0;H<this.prog.lbStarts.length;H++)this.add(a,this.prog.lbStarts[H],i,this.matchcap,0,D);!this.matched&&(i===0||n===G.UNANCHORED)&&i>=o&&(this.ncap>0&&(this.matchcap[0]=i),this.add(a,this.prog.start,i,this.matchcap,0,D));const N=i+d;if(D=e.context(N),this.step(a,u,i,N,B,D,n,i===e.endPos()),d===0||this.ncap===0&&this.matched)break;i+=d,B=C,d=g,B!==-1&&(l=e.step(i+d),C=l>>3,g=l&7);const V=a;a=u,u=V}return u.clear(),this.matched}matchSet(e,t,n){const s=this.re2.cond;if(s===te.EMPTY_ALL)return[];if((n===G.ANCHOR_START||n===G.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,a=this.q0,u=this.q1,l=e.step(i),B=l>>3,d=l&7,C=-1,g=0;l!==yt.EOF()&&(l=e.step(i+d),C=l>>3,g=l&7);let D=i===0?te.emptyOpContext(-1,B):e.context(i);const N=new Set;for(;!(a.isEmpty()&&((s&te.EMPTY_BEGIN_TEXT)!==0&&i!==0||(n===G.ANCHOR_START||n===G.ANCHOR_BOTH)&&i!==0));){if(i===0&&this.prog.numLb>0)for(let Z=0;Z<this.prog.lbStarts.length;Z++)this.add(a,this.prog.lbStarts[Z],i,this.matchcap,0,D);(i===0||n===G.UNANCHORED)&&i>=o&&this.add(a,this.prog.start,i,this.matchcap,0,D);const V=i+d;D=e.context(V);for(let Z=0;Z<a.size;Z++){const re=a.densePcs[Z],de=this.prog.inst[re],Ce=Z*this.ncap;let le=!1;switch(de.op){case k.MATCH:if(n===G.ANCHOR_BOTH&&i!==e.endPos())break;N.add(de.arg);break;case k.RUNE:le=de.matchRune(B);break;case k.RUNE1:le=B===de.runes[0];break;case k.RUNE_ANY:le=!0;break;case k.RUNE_ANY_NOT_NL:le=B!==10;break;default:continue}le&&this.add(u,de.out,V,a.denseCaps,Ce,D)}if(a.clear(),d===0)break;i+=d,B=C,d=g,B!==-1&&(l=e.step(i+d),C=l>>3,g=l&7);const H=a;a=u,u=H}return u.clear(),Array.from(N).sort((V,H)=>V-H)}step(e,t,n,s,i,o,a,u){const l=this.re2.longest;for(let B=0;B<e.size;B++){const d=e.densePcs[B],C=B*this.ncap;if(l&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[C])continue;const g=this.prog.inst[d];let D=!1;switch(g.op){case k.MATCH:if(a===G.ANCHOR_BOTH&&!u)break;if(this.ncap>0&&(!l||!this.matched||this.matchcap[1]<n)){e.denseCaps[C+1]=n;for(let N=0;N<this.ncap;N++)this.matchcap[N]=e.denseCaps[C+N]}l||(e.size=0),this.matched=!0;break;case k.RUNE:D=g.matchRune(i);break;case k.RUNE1:D=i===g.runes[0];break;case k.RUNE_ANY:D=!0;break;case k.RUNE_ANY_NOT_NL:D=i!==10;break;default:continue}D&&this.add(t,g.out,s,e.denseCaps,C,o)}e.clear()}add(e,t,n,s,i,o){for(;;){if(t===0||e.contains(t))return;const a=e.add(t),u=this.prog.inst[t];switch(u.op){case k.FAIL:return;case k.ALT:case k.ALT_MATCH:this.add(e,u.out,n,s,i,o),t=u.arg;continue;case k.EMPTY_WIDTH:if((u.arg&~o)===0){t=u.out;continue}return;case k.NOP:t=u.out;continue;case k.CAPTURE:if(u.arg<this.ncap){const l=s[i+u.arg];s[i+u.arg]=n,this.add(e,u.out,n,s,i,o),s[i+u.arg]=l;return}else{t=u.out;continue}case k.LB_WRITE:this.lbTable[Math.abs(u.arg)]=n,t=u.out;continue;case k.LB_CHECK:if(u.arg>0){if(this.lbTable[u.arg]===n){t=u.out;continue}}else if(this.lbTable[-u.arg]!==n){t=u.out;continue}return;case k.MATCH:case k.RUNE:case k.RUNE1:case k.RUNE_ANY:case k.RUNE_ANY_NOT_NL:if(this.ncap>0){const l=a*this.ncap;for(let B=0;B<this.ncap;B++)e.denseCaps[l+B]=s[i+B]}return;default:throw new Fo("unhandled")}}}};const hC=r=>{let e=-2128831035;for(let t=0;t<r.length;t++)e^=r[t],e=Math.imul(e,16777619);return e},QR=(r,e)=>{if(r.length!==e.length)return!1;for(let t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0};var WR=class{constructor(r,e,t=[]){this.nfaStates=r,this.isMatch=e,this.matchIDs=t,this.nextLatin1=new Array(X.MAX_LATIN1+1).fill(null),this.nextLatin1Anchored=new Array(X.MAX_LATIN1+1).fill(null),this.transKeys=[],this.transVals=[],this.lastSeen=0}},bn,$R=(bn=class{constructor(e,t=8388608){this.prog=e,this.stateCache=new Map,this.stateCount=0,this.startState=null,this.stateLimit=Math.max(1,Math.floor(t/bn.STATE_MEMORY_ESTIMATE)),this.cacheClears=0,this.failed=!1,this.clock=0}computeClosure(e){const t=new Set,n=[...e];let s=!1;const i=[];for(;n.length>0;){const a=n.pop();if(t.has(a))continue;t.add(a);const u=this.prog.getInst(a);switch(u.op){case k.MATCH:s=!0,i.includes(u.arg)||i.push(u.arg);break;case k.ALT:case k.ALT_MATCH:n.push(u.out),n.push(u.arg);break;case k.NOP:case k.CAPTURE:n.push(u.out);break;case k.EMPTY_WIDTH:case k.LB_WRITE:case k.LB_CHECK:return null}}const o=Int32Array.from(t).sort();return i.sort((a,u)=>a-u),{pcs:o,isMatch:s,matchIDs:i}}getState(e){const t=this.computeClosure(e);if(!t)return null;const n=t.pcs,s=hC(n);let i=this.stateCache.get(s);if(i)for(let a=0;a<i.length;a++){const u=i[a];if(QR(u.nfaStates,n))return u.lastSeen=++this.clock,u}else i=[],this.stateCache.set(s,i);if(this.failed)return null;if(this.stateCount>=this.stateLimit){if(this.cacheClears++,this.cacheClears>=bn.MAX_CACHE_CLEARS)return this.failed=!0,this.stateCache.clear(),this.stateCount=0,this.startState=null,null;this.evictCache(),i=this.stateCache.get(s),i||(i=[],this.stateCache.set(s,i))}const o=new WR(n,t.isMatch,t.matchIDs);return o.lastSeen=++this.clock,i.push(o),this.stateCount++,o}evictCache(){const e=[];for(const o of this.stateCache.values())for(let a=0;a<o.length;a++)e.push(o[a]);e.sort((o,a)=>o.lastSeen-a.lastSeen);const t=Math.max(1,Math.floor(this.stateLimit/2)),n=e.length-t,s=e.slice(n),i=new Set(s);this.stateCache.clear(),this.stateCount=0;for(let o=0;o<s.length;o++){const a=s[o];a.nextLatin1.fill(null),a.nextLatin1Anchored.fill(null),a.transKeys.length=0,a.transVals.length=0;const u=hC(a.nfaStates);let l=this.stateCache.get(u);l||(l=[],this.stateCache.set(u,l)),l.push(a),this.stateCount++}this.startState&&!i.has(this.startState)&&(this.startState=null)}step(e,t,n){if(t<=X.MAX_LATIN1)if(n===G.UNANCHORED){const o=e.nextLatin1[t];if(o!==null)return o}else{const o=e.nextLatin1Anchored[t];if(o!==null)return o}else{const o=t+(n===G.UNANCHORED?0:X.MAX_RUNE+1),a=e.transKeys,u=a.length;for(let l=0;l<u;l++)if(a[l]===o)return e.transVals[l]}const s=[];for(let o=0;o<e.nfaStates.length;o++){const a=e.nfaStates[o],u=this.prog.getInst(a);k.isRuneOp(u.op)&&u.matchRune(t)&&s.push(u.out)}n===G.UNANCHORED&&s.push(this.prog.start);const i=this.getState(s);if(t<=X.MAX_LATIN1)n===G.UNANCHORED?e.nextLatin1[t]=i:e.nextLatin1Anchored[t]=i;else{const o=t+(n===G.UNANCHORED?0:X.MAX_RUNE+1);e.transKeys.push(o),e.transVals.push(i)}return i}match(e,t,n){if((n===G.ANCHOR_START||n===G.ANCHOR_BOTH)&&t!==0)return!1;if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;if(i.isMatch)if(n===G.ANCHOR_BOTH){if(t===s)return!0}else return!0;let o=t;for(;o<s;){const a=e.step(o),u=a>>3,l=a&7;if(l===0)break;if(i=n===G.UNANCHORED&&u<=X.MAX_LATIN1&&i.nextLatin1[u]||this.step(i,u,n),i===null)return null;if(i.lastSeen=++this.clock,i.isMatch)if(n===G.ANCHOR_BOTH){if(o+l===s)return!0}else return!0;if(i.nfaStates.length===0&&n!==G.UNANCHORED)return!1;o+=l}return!1}matchSet(e,t,n){if((n===G.ANCHOR_START||n===G.ANCHOR_BOTH)&&t!==0)return[];if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;const o=new Set,a=(l,B)=>{l.isMatch&&(n===G.ANCHOR_BOTH?B===s&&l.matchIDs.forEach(d=>o.add(d)):l.matchIDs.forEach(d=>o.add(d)))};a(i,t);let u=t;for(;u<s;){const l=e.step(u),B=l>>3,d=l&7;if(d===0)break;if(i=n===G.UNANCHORED&&B<=X.MAX_LATIN1&&i.nextLatin1[B]||this.step(i,B,n),i===null)return null;if(i.lastSeen=++this.clock,u+=d,a(i,u),i.nfaStates.length===0&&n!==G.UNANCHORED)break}return Array.from(o).sort((l,B)=>l-B)}},J(bn,"MAX_CACHE_CLEARS",5),J(bn,"STATE_MEMORY_ESTIMATE",838),bn);const YR=32,XR=500,Nl=256,ZR=256*1024;var ev=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(Nl),this.jobArg=new Uint8Array(Nl),this.jobPos=new Int32Array(Nl),this.jobLen=0,this.visited=new Uint32Array(0)}reset(r,e,t){this.end=e,this.jobLen=0,this.ncap=t;const n=r.numInst()*(e+1)+YR-1>>>5;this.visited.length<n?this.visited=new Uint32Array(n):this.visited.fill(0,0,n),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(r,e){const t=r*(this.end+1)+e,n=t>>>5,s=1<<(t&31);return(this.visited[n]&s)!==0?!1:(this.visited[n]|=s,!0)}push(r,e,t,n){if(r.prog.getInst(e).op!==k.FAIL&&(n||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const s=this.jobPc.length*2,i=new Int32Array(s);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(s);o.set(this.jobArg),this.jobArg=o;const a=new Int32Array(s);a.set(this.jobPos),this.jobPos=a}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=n?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(r,e,t,n,s){const i=r.longest;for(this.push(r,t,n,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],a=this.jobArg[this.jobLen]===1,u=this.jobPos[this.jobLen],l=!0;for(;!(!l&&!this.shouldVisit(o,u));){l=!1;const B=r.prog.getInst(o);switch(B.op){case k.FAIL:throw new Fo("unexpected InstFail");case k.ALT:if(a){a=!1,o=B.arg;continue}else{this.push(r,o,u,!0),o=B.out;continue}case k.ALT_MATCH:{const d=r.prog.getInst(B.out);if(k.isRuneOp(d.op)){this.push(r,B.arg,u,!1),o=B.arg,u=this.end;continue}this.push(r,B.out,this.end,!1),o=B.out;continue}case k.RUNE:{const d=e.step(u);if(d===yt.EOF()||!B.matchRune(d>>3))break;u+=d&7,o=B.out;continue}case k.RUNE1:{const d=e.step(u);if(d===yt.EOF()||d>>3!==B.runes[0])break;u+=d&7,o=B.out;continue}case k.RUNE_ANY_NOT_NL:{const d=e.step(u);if(d===yt.EOF()||d>>3===10)break;u+=d&7,o=B.out;continue}case k.RUNE_ANY:{const d=e.step(u);if(d===yt.EOF())break;u+=d&7,o=B.out;continue}case k.CAPTURE:if(a){this.cap[B.arg]=u;break}else{B.arg<this.ncap&&(this.push(r,o,this.cap[B.arg],!0),this.cap[B.arg]=u),o=B.out;continue}case k.EMPTY_WIDTH:{const d=e.context(u);if((B.arg&~d)!==0)break;o=B.out;continue}case k.NOP:o=B.out;continue;case k.MATCH:{if(s===G.ANCHOR_BOTH&&u!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=u);const d=this.matchcap[1];if((d===-1||i&&u>0&&u>d)&&this.matchcap.set(this.cap),!i||u===this.end)return!0;break}case k.LB_WRITE:case k.LB_CHECK:throw new Fo("Backtracker cannot evaluate Lookbehind instructions");default:throw new Fo("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const su=[];var iu=class Mm{static shouldBacktrack(e){return e.numInst()<=XR}static maxBitStateLen(e){return Mm.shouldBacktrack(e)?Math.floor(ZR/e.numInst()):0}static execute(e,t,n,s,i){const o=e.cond;if(o===te.EMPTY_ALL||(s===G.ANCHOR_START||s===G.ANCHOR_BOTH)&&n!==0||(o&te.EMPTY_BEGIN_TEXT)!==0&&n!==0)return null;const a=su.length>0?su.pop():new ev,u=t.endPos();a.reset(e.prog,u,i);let l=!1;if((o&te.EMPTY_BEGIN_TEXT)!==0||s===G.ANCHOR_START||s===G.ANCHOR_BOTH)a.ncap>0&&(a.cap[0]=n),a.tryBacktrack(e,t,e.prog.start,n,s)&&(l=!0);else{let d=-1;for(;n<=u&&d!==0;n+=d){if(e.prefix.length>0){const g=t.index(e,n);if(g<0)break;n+=g}if(a.ncap>0&&(a.cap[0]=n),a.tryBacktrack(e,t,e.prog.start,n,s)){l=!0;break}const C=t.step(n);d=C===yt.EOF()?0:C&7}}if(!l)return su.push(a),null;const B=i===0?[]:te.toArray(a.matchcap.subarray(0,i));return su.push(a),B}},dC=class{constructor(r){this.sparse=new Uint32Array(r),this.dense=new Uint32Array(r),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(r){return r<this.sparse.length&&this.sparse[r]<this.size&&this.dense[this.sparse[r]]===r}insert(r){this.contains(r)||this.insertNew(r)}insertNew(r){r>=this.sparse.length||(this.sparse[r]=this.size,this.dense[this.size]=r,this.size++)}};const tv=(r,e,t,n)=>{const s=r.length,i=e.length;let o=0,a=0;const u=[],l=[];let B=!0,d=-1;const C=g=>{const D=g?r:e,N=g?o:a,V=g?t:n;return d>0&&D[N]<=u[d]?!1:(u.push(D[N],D[N+1]),g?o+=2:a+=2,d+=2,l.push(V),!0)};for(;o<s||a<i;)if(a>=i?B=C(!0):o>=s||e[a]<r[o]?B=C(!1):B=C(!0),!B)return null;return{merged:u,next:l}};var nv=class{constructor(r){this.start=r.start,this.numCap=r.numCap,this.inst=new Array(r.inst.length);for(let e=0;e<r.inst.length;e++){const t=r.inst[e],n=new k(t.op);n.out=t.out,n.arg=t.arg,n.runes=t.runes?t.runes.slice():[],n.next=null,this.inst[e]=n}}};const rv=r=>{const e=new nv(r);for(let t=0;t<e.inst.length;t++){const n=e.inst[t];if(n.op!==k.ALT&&n.op!==k.ALT_MATCH)continue;let s="out",i="arg",o=e.inst[n[i]];if(o.op!==k.ALT&&o.op!==k.ALT_MATCH&&(s="arg",i="out",o=e.inst[n[i]],o.op!==k.ALT&&o.op!==k.ALT_MATCH))continue;const a=e.inst[n[s]];if(a.op===k.ALT||a.op===k.ALT_MATCH)continue;let u="out",l="arg",B=!1;o.out===t?B=!0:o.arg===t&&(B=!0,u="arg",l="out"),B&&(o[u]=n[s]),n[s]===o[u]&&(n[i]=o[l])}return e},sv=r=>{if(r.inst.length>=1e3)return null;const e=new dC(r.inst.length),t=new dC(r.inst.length),n=new Array(r.inst.length),s=new Array(r.inst.length).fill(!1),i=o=>{let a=!0;const u=r.inst[o];if(t.contains(o))return!0;switch(t.insert(o),u.op){case k.ALT:case k.ALT_MATCH:{a=i(u.out)&&i(u.arg);let l=s[u.out],B=s[u.arg];if(l&&B)return!1;if(B){const D=u.out;u.out=u.arg,u.arg=D;const N=l;l=B,B=N}l&&(s[o]=!0,u.op=k.ALT_MATCH);const d=n[u.out]||[],C=n[u.arg]||[],g=tv(d,C,u.out,u.arg);if(!g)return!1;n[o]=g.merged,u.next=new Uint32Array(g.next);break}case k.CAPTURE:case k.EMPTY_WIDTH:case k.NOP:a=i(u.out),s[o]=s[u.out],n[o]=n[u.out]?n[u.out].slice():[],u.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(u.out);break;case k.MATCH:case k.FAIL:s[o]=u.op===k.MATCH;break;case k.RUNE:{if(s[o]=!1,u.next&&u.next.length>0)break;if(e.insert(u.out),!u.runes||u.runes.length===0){n[o]=[],u.next=new Uint32Array([u.out]);break}let l=[];if(u.runes.length===1&&(u.arg&G.FOLD_CASE)!==0){const B=u.runes[0];l.push(B,B);for(let d=X.simpleFold(B);d!==B;d=X.simpleFold(d))l.push(d,d);l.sort((d,C)=>d-C)}else for(let B=0;B<u.runes.length;B++)l.push(u.runes[B]);n[o]=l,u.next=new Uint32Array(Math.floor(l.length/2)+1).fill(u.out),u.op=k.RUNE;break}case k.RUNE1:{if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out);let l=[];if((u.arg&G.FOLD_CASE)!==0){const B=u.runes[0];l.push(B,B);for(let d=X.simpleFold(B);d!==B;d=X.simpleFold(d))l.push(d,d);l.sort((d,C)=>d-C)}else l.push(u.runes[0],u.runes[0]);n[o]=l,u.next=new Uint32Array(Math.floor(l.length/2)+1).fill(u.out),u.op=k.RUNE;break}case k.RUNE_ANY:if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out),n[o]=[0,X.MAX_RUNE],u.next=new Uint32Array([u.out]);break;case k.RUNE_ANY_NOT_NL:if(s[o]=!1,u.next&&u.next.length>0)break;e.insert(u.out),n[o]=[0,9,11,X.MAX_RUNE],u.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(u.out);break}return a};for(e.clear(),e.insert(r.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<r.inst.length;o++)n[o]&&(r.inst[o].runes=n[o]);return r},iv=(r,e)=>{for(let t=0;t<e.inst.length;t++){const n=e.inst[t];switch(n.op){case k.ALT:case k.ALT_MATCH:case k.RUNE:break;case k.CAPTURE:case k.EMPTY_WIDTH:case k.NOP:case k.MATCH:case k.FAIL:r.inst[t].next=null;break;case k.RUNE1:case k.RUNE_ANY:case k.RUNE_ANY_NOT_NL:r.inst[t].next=null,r.inst[t].op=n.op,r.inst[t].runes=n.runes?n.runes.slice():[];break}}};var fC=class Gm{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==k.EMPTY_WIDTH||(t.arg&te.EMPTY_BEGIN_TEXT)===0)return null;let n=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===k.ALT||e.inst[i].op===k.ALT_MATCH){n=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],a=e.inst[o.out].op;switch(o.op){case k.ALT:case k.ALT_MATCH:if(a===k.MATCH||e.inst[o.arg].op===k.MATCH)return null;break;case k.EMPTY_WIDTH:if(a===k.MATCH){if((o.arg&te.EMPTY_END_TEXT)===te.EMPTY_END_TEXT)continue;return null}break;default:if(a===k.MATCH&&n)return null;break}}let s=rv(e);return s=sv(s),s!==null&&iv(s,e),s}static next(e,t){const n=e.matchRunePos(t);return n>=0?e.next[n]:e.op===k.ALT_MATCH?e.out:0}static execute(e,t,n,s,i){const o=e.onepass;if(!o)return null;const a=new Int32Array(i).fill(-1);let u=!1,l=t.step(n),B=l>>3,d=l&7,C=yt.EOF(),g=-1,D=0;l!==yt.EOF()&&(C=t.step(n+d),C!==yt.EOF()&&(g=C>>3,D=C&7));let N=n===0?te.emptyOpContext(-1,B):t.context(n),V=o.start,H;for(;;){switch(H=o.inst[V],V=H.out,H.op){case k.MATCH:return s===G.ANCHOR_BOTH&&n!==t.endPos()?null:(u=!0,a.length>0&&(a[0]=0,a[1]=n),i===0?[]:te.toArray(a));case k.RUNE:if(!H.matchRune(B))return null;break;case k.RUNE1:if(B!==H.runes[0])return null;break;case k.RUNE_ANY:break;case k.RUNE_ANY_NOT_NL:if(B===10)return null;break;case k.ALT:case k.ALT_MATCH:V=Gm.next(H,B);continue;case k.FAIL:return null;case k.NOP:continue;case k.EMPTY_WIDTH:if((H.arg&~N)!==0)return null;continue;case k.CAPTURE:H.arg<a.length&&(a[H.arg]=n);continue;default:throw new Fo("bad inst")}if(d===0)break;N=te.emptyOpContext(B,g),n+=d,B=g,d=D,B!==-1&&(C=t.step(n+d),C!==yt.EOF()?(g=C>>3,D=C&7):(g=-1,D=0))}return u?i===0?[]:te.toArray(a):null}},se,A=(se=class{static isPseudoOp(e){return e>=se.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===L.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new se(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=se.emptySubs(),this.runes=[],this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=se.emptySubs(),this.runes=[],this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case se.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case se.Op.EMPTY_MATCH:e+="(?:)";break;case se.Op.STAR:case se.Op.PLUS:case se.Op.QUEST:case se.Op.REPEAT:{const t=this.subs[0];switch(t.op>se.Op.CAPTURE||t.op===se.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case se.Op.STAR:e+="*";break;case se.Op.PLUS:e+="+";break;case se.Op.QUEST:e+="?";break;case se.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}(this.flags&G.NON_GREEDY)!==0&&(e+="?");break}case se.Op.CONCAT:for(let t of this.subs)t.op===se.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case se.Op.ALTERNATE:{let t="";for(let n of this.subs)e+=t,t="|",e+=n.appendTo();break}case se.Op.LITERAL:(this.flags&G.FOLD_CASE)!==0&&(e+="(?i:");for(let t of this.runes)e+=te.escapeRune(t);(this.flags&G.FOLD_CASE)!==0&&(e+=")");break;case se.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case se.Op.ANY_CHAR:e+="(?s:.)";break;case se.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case se.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case se.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==se.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case se.Op.BEGIN_TEXT:e+="\\A";break;case se.Op.END_TEXT:(this.flags&G.WAS_DOLLAR)!==0?e+="(?-m:$)":e+="\\z";break;case se.Op.BEGIN_LINE:e+="^";break;case se.Op.END_LINE:e+="$";break;case se.Op.WORD_BOUNDARY:e+="\\b";break;case se.Op.NO_WORD_BOUNDARY:e+="\\B";break;case se.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===X.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const n=this.runes[t]+1,s=this.runes[t+1]-1;e+=se.quoteIfHyphen(n),e+=te.escapeRune(n),n!==s&&(e+="-",e+=se.quoteIfHyphen(s),e+=te.escapeRune(s))}}else for(let t=0;t<this.runes.length;t+=2){const n=this.runes[t],s=this.runes[t+1];e+=se.quoteIfHyphen(n),e+=te.escapeRune(n),n!==s&&(e+="-",e+=se.quoteIfHyphen(s),e+=te.escapeRune(s))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===se.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const n=t.maxCap();e<n&&(e=n)}return e}equals(e){if(!(e!==null&&e instanceof se)||this.op!==e.op)return!1;switch(this.op){case se.Op.END_TEXT:if((this.flags&G.WAS_DOLLAR)!==(e.flags&G.WAS_DOLLAR))return!1;break;case se.Op.LITERAL:case se.Op.CHAR_CLASS:if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case se.Op.ALTERNATE:case se.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case se.Op.STAR:case se.Op.PLUS:case se.Op.QUEST:if((this.flags&G.NON_GREEDY)!==(e.flags&G.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case se.Op.REPEAT:if((this.flags&G.NON_GREEDY)!==(e.flags&G.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case se.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case se.Op.PLB:case se.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1;break}return!0}},J(se,"Op",xm(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"])),se),CC=class{constructor(r){this.next=[Object.create(null)],this.fail=[0],this.match=[!1];for(const t of r){let n=0;for(let s=0;s<t.length;s++){const i=t[s];i in this.next[n]||(this.next.push(Object.create(null)),this.fail.push(0),this.match.push(!1),this.next[n][i]=this.next.length-1),n=this.next[n][i]}this.match[n]=!0}const e=[];for(const t in this.next[0])if(Object.prototype.hasOwnProperty.call(this.next[0],t)){const n=this.next[0][t];this.fail[n]=0,e.push(n)}for(;e.length>0;){const t=e.shift();for(const n in this.next[t])if(Object.prototype.hasOwnProperty.call(this.next[t],n)){const s=this.next[t][n];let i=this.fail[t];for(;i!==0&&!(n in this.next[i]);)i=this.fail[i];n in this.next[i]?this.fail[s]=this.next[i][n]:this.fail[s]=0,this.match[s]=this.match[s]||this.match[this.fail[s]],e.push(s)}}}searchUTF16(r,e,t){let n=0;for(let s=e;s<t;s++){const i=r.charCodeAt(s);for(;n!==0&&!(i in this.next[n]);)n=this.fail[n];if(i in this.next[n]&&(n=this.next[n][i]),this.match[n])return!0}return!1}searchUTF8(r,e,t){let n=0;for(let s=e;s<t;s++){const i=r[s];for(;n!==0&&!(i in this.next[n]);)n=this.fail[n];if(i in this.next[n]&&(n=this.next[n][i]),this.match[n])return!0}return!1}},hn,Ee=(hn=class{constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.ac16=null,this.ac8=null}eval(e,t){switch(this.type){case hn.Type.NONE:return!0;case hn.Type.EXACT:return e.hasString(this,t);case hn.Type.AND:for(let n=0;n<this.subs.length;n++)if(!this.subs[n].eval(e,t))return!1;return!0;case hn.Type.OR:if(this.ac16&&this.ac8)return e.hasAnyString(this,t);for(let n=0;n<this.subs.length;n++)if(this.subs[n].eval(e,t))return!0;return!1;default:return!0}}},J(hn,"Type",{NONE:0,EXACT:1,AND:2,OR:3}),hn),ov=class yn{static build(e){const t=yn.fromRegexp(e);return yn.simplify(t)}static fromRegexp(e){if(!e)return new Ee(Ee.Type.NONE);switch(e.op){case A.Op.PLB:case A.Op.NLB:case A.Op.NO_MATCH:case A.Op.EMPTY_MATCH:case A.Op.BEGIN_LINE:case A.Op.END_LINE:case A.Op.BEGIN_TEXT:case A.Op.END_TEXT:case A.Op.WORD_BOUNDARY:case A.Op.NO_WORD_BOUNDARY:case A.Op.CHAR_CLASS:case A.Op.ANY_CHAR_NOT_NL:case A.Op.ANY_CHAR:return new Ee(Ee.Type.NONE);case A.Op.LITERAL:{if(e.runes.length===0||(e.flags&G.FOLD_CASE)!==0)return new Ee(Ee.Type.NONE);const t=new Ee(Ee.Type.EXACT);let n="";for(let s=0;s<e.runes.length;s++)n+=String.fromCodePoint(e.runes[s]);return t.str=n,t.bytes=te.stringToUtf8ByteArray(t.str),t}case A.Op.CAPTURE:case A.Op.PLUS:return yn.fromRegexp(e.subs[0]);case A.Op.REPEAT:return e.min>=1?yn.fromRegexp(e.subs[0]):new Ee(Ee.Type.NONE);case A.Op.CONCAT:{const t=new Ee(Ee.Type.AND);for(const n of e.subs)t.subs.push(yn.fromRegexp(n));return t}case A.Op.ALTERNATE:{const t=new Ee(Ee.Type.OR);for(const n of e.subs)t.subs.push(yn.fromRegexp(n));return t}default:return new Ee(Ee.Type.NONE)}}static simplify(e){if(e.type===Ee.Type.EXACT||e.type===Ee.Type.NONE)return e;if(e.type===Ee.Type.AND){const t=[];for(const n of e.subs){const s=yn.simplify(n);if(s.type!==Ee.Type.NONE)if(s.type===Ee.Type.AND)for(let i=0;i<s.subs.length;i++)t.push(s.subs[i]);else t.push(s)}return t.length===0?new Ee(Ee.Type.NONE):t.length===1?t[0]:(e.subs=t,e)}if(e.type===Ee.Type.OR){const t=[];for(const o of e.subs){const a=yn.simplify(o);if(a.type===Ee.Type.NONE)return new Ee(Ee.Type.NONE);if(a.type===Ee.Type.OR)for(let u=0;u<a.subs.length;u++)t.push(a.subs[u]);else t.push(a)}if(t.length===0)return new Ee(Ee.Type.NONE);if(t.length===1)return t[0];const n=new Set,s=[];for(const o of t)o.type===Ee.Type.EXACT?n.has(o.str)||(n.add(o.str),s.push(o)):s.push(o);e.subs=s;let i=!0;for(const o of s)if(o.type!==Ee.Type.EXACT){i=!1;break}return i&&s.length>1&&(e.ac16=new CC(s.map(o=>{const a=[];for(let u=0;u<o.str.length;u++)a.push(o.str.charCodeAt(u));return a})),e.ac8=new CC(s.map(o=>o.bytes))),e}return e}},Jt=class{constructor(r=0,e=0){this.head=r,this.tail=e}},av=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0}getInst(r){return this.inst[r]}numInst(){return this.inst.length}addInst(r){this.inst.push(new k(r))}skipNop(r){let e=this.inst[r];for(;e.op===k.NOP||e.op===k.CAPTURE;)e=this.inst[r],r=e.out;return e}prefix(){let r="",e=this.skipNop(this.start);if(!k.isRuneOp(e.op)||e.runes.length!==1)return[e.op===k.MATCH,r];for(;k.isRuneOp(e.op)&&e.runes.length===1&&(e.arg&G.FOLD_CASE)===0;)r+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===k.MATCH,r]}startCond(){let r=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case k.EMPTY_WIDTH:r|=t.arg;break;case k.FAIL:return-1;case k.CAPTURE:case k.NOP:break;default:break e}e=t.out}return r}patch(r,e){let t=r.head;for(;t!==0;){const n=this.inst[t>>1];(t&1)===0?(t=n.out,n.out=e):(t=n.arg,n.arg=e)}}append(r,e){if(r.head===0)return e;if(e.head===0)return r;const t=this.inst[r.tail>>1];return(r.tail&1)===0?t.out=e.head:t.arg=e.head,new Jt(r.head,e.tail)}toString(){let r="";for(let e=0;e<this.inst.length;e++){const t=r.length;r+=e,e===this.start&&(r+="*"),r+="        ".substring(r.length-t),r+=this.inst[e],r+=`
`}return r}},ou=class{constructor(r=0,e=new Jt,t=!1){this.i=r,this.out=e,this.nullable=t}},uv=class zs{static ANY_RUNE_NOT_NL(){return[0,L.CODES.get(`
`)-1,L.CODES.get(`
`)+1,X.MAX_RUNE]}static ANY_RUNE(){return[0,X.MAX_RUNE]}static compileRegexp(e){const t=new zs,n=t.compile(e);return t.prog.patch(n.out,t.newInst(k.MATCH).i),t.prog.start=n.i,t.prog}static compileSet(e){const t=new zs;if(e.length===0)return t.prog.start=t.newInst(k.FAIL).i,t.prog;let n=[];for(let i=0;i<e.length;i++){const o=t.compile(e[i]),a=t.newInst(k.MATCH);t.prog.getInst(a.i).arg=i,t.prog.patch(o.out,a.i),n.push(o.i)}let s=n[0];for(let i=1;i<n.length;i++){const o=t.newInst(k.ALT),a=t.prog.getInst(o.i);a.out=s,a.arg=n[i],s=o.i}return t.prog.start=s,t.prog}constructor(){this.prog=new av,this.newInst(k.FAIL)}newInst(e){return this.prog.addInst(e),new ou(this.prog.numInst()-1,new Jt,!0)}nop(){const e=this.newInst(k.NOP);return e.out=new Jt(e.i<<1,e.i<<1),e}fail(){return new ou}cap(e){const t=this.newInst(k.CAPTURE);return t.out=new Jt(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new ou(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const n=this.newInst(k.ALT),s=this.prog.getInst(n.i);return s.out=e.i,s.arg=t.i,n.out=this.prog.append(e.out,t.out),n.nullable=e.nullable||t.nullable,n}loop(e,t){const n=this.newInst(k.ALT),s=this.prog.getInst(n.i);return t?(s.arg=e.i,n.out=new Jt(n.i<<1,n.i<<1)):(s.out=e.i,n.out=new Jt(n.i<<1|1,n.i<<1|1)),this.prog.patch(e.out,n.i),n}quest(e,t){const n=this.newInst(k.ALT),s=this.prog.getInst(n.i);return t?(s.arg=e.i,n.out=new Jt(n.i<<1,n.i<<1)):(s.out=e.i,n.out=new Jt(n.i<<1|1,n.i<<1|1)),n.out=this.prog.append(n.out,e.out),n}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new ou(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(k.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new Jt(t.i<<1,t.i<<1),t}rune(e,t){const n=this.newInst(k.RUNE);n.nullable=!1;const s=this.prog.getInst(n.i);return s.runes=e,t&=G.FOLD_CASE,(e.length!==1||X.simpleFold(e[0])===e[0])&&(t&=-2),s.arg=t,n.out=new Jt(n.i<<1,n.i<<1),(t&G.FOLD_CASE)===0&&e.length===1||e.length===2&&e[0]===e[1]?s.op=k.RUNE1:e.length===2&&e[0]===0&&e[1]===X.MAX_RUNE?s.op=k.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===L.CODES.get(`
`)-1&&e[2]===L.CODES.get(`
`)+1&&e[3]===X.MAX_RUNE&&(s.op=k.RUNE_ANY_NOT_NL),n}lookBehind(e,t){const n=this.newInst(k.LB_WRITE);this.prog.getInst(n.i).arg=t;const s=this.rune(zs.ANY_RUNE(),0),i=this.star(s,!0),o=this.cat(i,e);this.prog.patch(o.out,n.i);const a=this.newInst(k.LB_CHECK);return this.prog.getInst(a.i).arg=t,this.prog.lbStarts.push(o.i),Math.abs(t)>this.prog.numLb&&(this.prog.numLb=Math.abs(t)),a.out=new Jt(a.i<<1,a.i<<1),a}compile(e){switch(e.op){case A.Op.NO_MATCH:return this.fail();case A.Op.EMPTY_MATCH:return this.nop();case A.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let n of e.runes){const s=this.rune([n],e.flags);t=t===null?s:this.cat(t,s)}return t}case A.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case A.Op.ANY_CHAR_NOT_NL:return this.rune(zs.ANY_RUNE_NOT_NL(),0);case A.Op.ANY_CHAR:return this.rune(zs.ANY_RUNE(),0);case A.Op.BEGIN_LINE:return this.empty(te.EMPTY_BEGIN_LINE);case A.Op.END_LINE:return this.empty(te.EMPTY_END_LINE);case A.Op.BEGIN_TEXT:return this.empty(te.EMPTY_BEGIN_TEXT);case A.Op.END_TEXT:return this.empty(te.EMPTY_END_TEXT);case A.Op.WORD_BOUNDARY:return this.empty(te.EMPTY_WORD_BOUNDARY);case A.Op.NO_WORD_BOUNDARY:return this.empty(te.EMPTY_NO_WORD_BOUNDARY);case A.Op.PLB:case A.Op.NLB:return this.lookBehind(this.compile(e.subs[0]),e.lb);case A.Op.CAPTURE:{const t=this.cap(e.cap<<1),n=this.compile(e.subs[0]),s=this.cap(e.cap<<1|1);return this.cat(this.cat(t,n),s)}case A.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&G.NON_GREEDY)!==0);case A.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&G.NON_GREEDY)!==0);case A.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&G.NON_GREEDY)!==0);case A.Op.CONCAT:if(e.subs.length===0)return this.nop();{let t=null;for(let n of e.subs){const s=this.compile(n);t=t===null?s:this.cat(t,s)}return t}case A.Op.ALTERNATE:if(e.subs.length===0)return this.nop();{let t=null;for(let n of e.subs){const s=this.compile(n);t=t===null?s:this.alt(t,s)}return t}default:throw new JR("regexp: unhandled case in compile")}}},cv=class Mt{static simplify(e){if(e===null)return null;switch(e.op){case A.Op.PLB:case A.Op.NLB:case A.Op.CAPTURE:{const t=Mt.simplify(e.subs[0]);if(t!==e.subs[0]){const n=A.fromRegexp(e);return n.runes=[],n.subs=[t],n}return e}case A.Op.CONCAT:case A.Op.ALTERNATE:{const t=[];let n=!1;for(let s=0;s<e.subs.length;s++){const i=e.subs[s],o=Mt.simplify(i);if(o!==i&&(n=!0),e.op===A.Op.CONCAT){if(o.op===A.Op.NO_MATCH)return new A(A.Op.NO_MATCH);if(o.op===A.Op.EMPTY_MATCH){n=!0;continue}if(o.op===A.Op.CONCAT){n=!0;for(let a=0;a<o.subs.length;a++)t.push(o.subs[a]);continue}}else if(e.op===A.Op.ALTERNATE){if(o.op===A.Op.NO_MATCH){n=!0;continue}if(o.op===A.Op.ALTERNATE){n=!0;for(let a=0;a<o.subs.length;a++)t.push(o.subs[a]);continue}}t.push(o)}if(n){if(t.length===0)return new A(e.op===A.Op.CONCAT?A.Op.EMPTY_MATCH:A.Op.NO_MATCH);if(t.length===1)return t[0];const s=A.fromRegexp(e);return s.runes=[],s.subs=t,s}return e}case A.Op.CHAR_CLASS:return e.runes===null?e:e.runes.length===0?new A(A.Op.NO_MATCH):e.runes.length===2&&e.runes[0]===0&&e.runes[1]===X.MAX_RUNE?new A(A.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===L.CODES.get(`
`)-1&&e.runes[2]===L.CODES.get(`
`)+1&&e.runes[3]===X.MAX_RUNE?new A(A.Op.ANY_CHAR_NOT_NL):e;case A.Op.STAR:case A.Op.PLUS:case A.Op.QUEST:{const t=Mt.simplify(e.subs[0]);return Mt.simplify1(e.op,e.flags,t,e)}case A.Op.REPEAT:{if(e.min===0&&e.max===0)return new A(A.Op.EMPTY_MATCH);const t=Mt.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return Mt.simplify1(A.Op.STAR,e.flags,t,null);if(e.min===1)return Mt.simplify1(A.Op.PLUS,e.flags,t,null);const s=new A(A.Op.CONCAT),i=[];for(let o=0;o<e.min-1;o++)i.push(t);return i.push(Mt.simplify1(A.Op.PLUS,e.flags,t,null)),s.subs=i.slice(0),Mt.simplify(s)}if(e.min===1&&e.max===1)return t;let n=null;if(e.min>0){n=[];for(let s=0;s<e.min;s++)n.push(t)}if(e.max>e.min){let s=Mt.simplify1(A.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const o=new A(A.Op.CONCAT);o.subs=[t,s],s=Mt.simplify1(A.Op.QUEST,e.flags,o,null)}if(n===null)return s;n.push(s)}if(n!==null){const s=new A(A.Op.CONCAT);return s.subs=n.slice(0),Mt.simplify(s)}return new A(A.Op.NO_MATCH)}}return e}static simplify1(e,t,n,s){if(n.op===A.Op.EMPTY_MATCH)return n;if(n.op===A.Op.NO_MATCH)return e===A.Op.PLUS?n:new A(A.Op.EMPTY_MATCH);if(e===n.op&&(t&G.NON_GREEDY)===(n.flags&G.NON_GREEDY))return n;if(s!==null&&s.op===e&&(s.flags&G.NON_GREEDY)===(t&G.NON_GREEDY)&&n===s.subs[0])return s;const i=new A(e);return i.flags=t,i.subs=[n],i}},me=class{constructor(r,e){this.sign=r,this.cls=e}};const pC=[48,57],gC=[9,10,12,13,32,32],mC=[48,57,65,90,95,95,97,122],_C=new Map([["\\d",new me(1,pC)],["\\D",new me(-1,pC)],["\\s",new me(1,gC)],["\\S",new me(-1,gC)],["\\w",new me(1,mC)],["\\W",new me(-1,mC)]]),EC=[48,57,65,90,97,122],IC=[65,90,97,122],DC=[0,127],yC=[9,9,32,32],wC=[0,31,127,127],TC=[48,57],AC=[33,126],RC=[97,122],vC=[32,126],PC=[33,47,58,64,91,96,123,126],bC=[9,13,32,32],SC=[65,90],NC=[48,57,65,90,95,95,97,122],OC=[48,57,65,70,97,102],FC=new Map([["[:alnum:]",new me(1,EC)],["[:^alnum:]",new me(-1,EC)],["[:alpha:]",new me(1,IC)],["[:^alpha:]",new me(-1,IC)],["[:ascii:]",new me(1,DC)],["[:^ascii:]",new me(-1,DC)],["[:blank:]",new me(1,yC)],["[:^blank:]",new me(-1,yC)],["[:cntrl:]",new me(1,wC)],["[:^cntrl:]",new me(-1,wC)],["[:digit:]",new me(1,TC)],["[:^digit:]",new me(-1,TC)],["[:graph:]",new me(1,AC)],["[:^graph:]",new me(-1,AC)],["[:lower:]",new me(1,RC)],["[:^lower:]",new me(-1,RC)],["[:print:]",new me(1,vC)],["[:^print:]",new me(-1,vC)],["[:punct:]",new me(1,PC)],["[:^punct:]",new me(-1,PC)],["[:space:]",new me(1,bC)],["[:^space:]",new me(-1,bC)],["[:upper:]",new me(1,SC)],["[:^upper:]",new me(-1,SC)],["[:word:]",new me(1,NC)],["[:^word:]",new me(-1,NC)],["[:xdigit:]",new me(1,OC)],["[:^xdigit:]",new me(-1,OC)]]);var rr=class cr{static charClassToString(e,t){let n="[";for(let s=0;s<t;s+=2){s>0&&(n+=" ");const i=e[s],o=e[s+1];i===o?n+=`0x${i.toString(16)}`:n+=`0x${i.toString(16)}-0x${o.toString(16)}`}return n+="]",n}static cmp(e,t,n,s){const i=e[t]-n;return i!==0?i:s-e[t+1]}static qsortIntPair(e,t,n){const s=((t+n)/2|0)&-2,i=e[s],o=e[s+1];let a=t,u=n;for(;a<=u;){for(;a<n&&cr.cmp(e,a,i,o)<0;)a+=2;for(;u>t&&cr.cmp(e,u,i,o)>0;)u-=2;if(a<=u){if(a!==u){let l=e[a];e[a]=e[u],e[u]=l,l=e[a+1],e[a+1]=e[u+1],e[u+1]=l}a+=2,u-=2}}t<u&&cr.qsortIntPair(e,t,u),a<n&&cr.qsortIntPair(e,a,n)}constructor(e=te.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;cr.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const n=this.r[t],s=this.r[t+1];if(n<=this.r[e-1]+1){s>this.r[e-1]&&(this.r[e-1]=s);continue}this.r[e]=n,this.r[e+1]=s,e+=2}return this.len=e,this}appendLiteral(e,t){return(t&G.FOLD_CASE)!==0?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let n=2;n<=4;n+=2)if(this.len>=n){const s=this.r[this.len-n],i=this.r[this.len-n+1];if(e<=i+1&&s<=t+1)return e<s&&(this.r[this.len-n]=e),t>i&&(this.r[this.len-n+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=X.MIN_FOLD&&t>=X.MAX_FOLD)return this.appendRange(e,t);if(t<X.MIN_FOLD||e>X.MAX_FOLD)return this.appendRange(e,t);e<X.MIN_FOLD&&(this.appendRange(e,X.MIN_FOLD-1),e=X.MIN_FOLD),t>X.MAX_FOLD&&(this.appendRange(X.MAX_FOLD+1,t),t=X.MAX_FOLD);for(let n=e;n<=t;n++){this.appendRange(n,n);for(let s=X.simpleFold(n);s!==n;s=X.simpleFold(s))this.appendRange(s,s)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let n=0;n<e.length;n+=2){const s=e[n],i=e[n+1];t<=s-1&&this.appendRange(t,s-1),t=i+1}return t<=X.MAX_RUNE&&this.appendRange(t,X.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const n=e.getLo(t),s=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(n,s);continue}for(let o=n;o<=s;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let n=0;n<e.length;++n){const s=e.getLo(n),i=e.getHi(n),o=e.getStride(n);if(o===1){t<=s-1&&this.appendRange(t,s-1),t=i+1;continue}for(let a=s;a<=i;a+=o)t<=a-1&&this.appendRange(t,a-1),t=a+1}return t<=X.MAX_RUNE&&this.appendRange(t,X.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let n=0;n<this.len;n+=2){const s=this.r[n],i=this.r[n+1];e<=s-1&&(this.r[t]=e,this.r[t+1]=s-1,t+=2),e=i+1}return this.len=t,e<=X.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=X.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let n=e.cls;return t&&(n=new cr().appendFoldedClass(n).cleanClass().toArray()),this.appendClassWithSign(n,e.sign)}toString(){return cr.charClassToString(this.r,this.len)}},lv=class{constructor(r){this.str=r,this.position=0}pos(){return this.position}rewindTo(r){this.position=r}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(r){this.position+=r}skipString(r){this.position+=r.length}pop(){const r=this.str.codePointAt(this.position);return this.position+=te.charCount(r),r}lookingAt(r){return this.str.startsWith(r,this.position)}rest(){return this.str.substring(this.position)}from(r){return this.str.substring(r,this.position)}toString(){return this.rest()}},z,Bv=(z=class{static unicodeTable(e){return e==="Any"?{tab:z.ANY_TABLE,fold:z.ANY_TABLE,sign:1}:e==="Ascii"?{tab:z.ASCII_TABLE,fold:z.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:vt.CATEGORIES.get("Cn"),fold:vt.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:vt.CATEGORIES.get("LC"),fold:vt.FOLD_CATEGORIES.get("LC"),sign:1}:vt.CATEGORIES.has(e)?{tab:vt.CATEGORIES.get(e),fold:vt.FOLD_CATEGORIES.get(e),sign:1}:vt.SCRIPTS.has(e)?{tab:vt.SCRIPTS.get(e),fold:vt.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<X.MIN_FOLD||e>X.MAX_FOLD)return e;let t=e;const n=e;for(e=X.simpleFold(e);e!==n;e=X.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===A.Op.EMPTY_MATCH)return null;if(e.op===A.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===A.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const n=new A(A.Op.LITERAL);return n.flags=t,n.runes=te.stringToRunes(e),n}static parse(e,t){return new z(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const n=z.parseInt(e);if(n===-1||!e.more())return-1;let s;if(!e.lookingAt(","))s=n;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))s=-1;else if((s=z.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),n<0||n>1e3||s===-2||s>1e3||s>=0&&n>s)throw new Pe(z.ERR_INVALID_REPEAT_SIZE,e.from(t));return n<<16|s&X.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const n=e.codePointAt(t);if(n!==L.CODES.get("_")&&!te.isalnum(n))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=L.CODES.get("0")&&e.peek()<=L.CODES.get("9");)e.skip(1);const n=e.from(t);return n.length===0||n.length>1&&n.codePointAt(0)===L.CODES.get("0")?-1:n.length>8?-2:parseInt(n,10)}static isCharClass(e){return e.op===A.Op.LITERAL&&e.runes.length===1||e.op===A.Op.CHAR_CLASS||e.op===A.Op.ANY_CHAR_NOT_NL||e.op===A.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case A.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case A.Op.CHAR_CLASS:for(let n=0;n<e.runes.length;n+=2)if(e.runes[n]<=t&&t<=e.runes[n+1])return!0;return!1;case A.Op.ANY_CHAR_NOT_NL:return t!==L.CODES.get(`
`);case A.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case A.Op.ANY_CHAR:break;case A.Op.ANY_CHAR_NOT_NL:z.matchRune(t,L.CODES.get(`
`))&&(e.op=A.Op.ANY_CHAR);break;case A.Op.CHAR_CLASS:t.op===A.Op.LITERAL?e.runes=new rr(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new rr(e.runes).appendClass(t.runes).toArray();break;case A.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=A.Op.CHAR_CLASS,e.runes=new rr().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new Pe(z.ERR_TRAILING_BACKSLASH);let n=e.pop();e:switch(n){case L.CODES.get("1"):case L.CODES.get("2"):case L.CODES.get("3"):case L.CODES.get("4"):case L.CODES.get("5"):case L.CODES.get("6"):case L.CODES.get("7"):if(!e.more()||e.peek()<L.CODES.get("0")||e.peek()>L.CODES.get("7"))break;case L.CODES.get("0"):{let s=n-L.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<L.CODES.get("0")||e.peek()>L.CODES.get("7"));i++)s=s*8+e.peek()-L.CODES.get("0"),e.skip(1);return s}case L.CODES.get("x"):{if(!e.more())break;if(n=e.pop(),n===L.CODES.get("{")){let o=0,a=0;for(;;){if(!e.more())break e;if(n=e.pop(),n===L.CODES.get("}"))break;const u=te.unhex(n);if(u<0||(a=a*16+u,a>X.MAX_RUNE))break e;o++}if(o===0)break e;return a}const s=te.unhex(n);if(!e.more())break;n=e.pop();const i=te.unhex(n);if(s<0||i<0)break;return s*16+i}case L.CODES.get("a"):return L.CODES.get("\x07");case L.CODES.get("f"):return L.CODES.get("\f");case L.CODES.get("n"):return L.CODES.get(`
`);case L.CODES.get("r"):return L.CODES.get("\r");case L.CODES.get("t"):return L.CODES.get("	");case L.CODES.get("v"):return L.CODES.get("\v");default:if(n<=X.MAX_ASCII&&!te.isalnum(n))return n;break}throw new Pe(z.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new Pe(z.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?z.parseEscape(e):e.pop()}static concatRunes(e,t){for(let n=0;n<t.length;n++)e.push(t[n]);return e}static hasCapture(e){if(e===null)return!1;if(e.op===A.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(z.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new A(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>z.MAX_RUNES)throw new Pe(z.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===A.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(z.MAX_SIZE/this.repeats)?this.repeats=z.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(z.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>z.MAX_SIZE)throw new Pe(z.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let n=0;switch(e.op){case A.Op.LITERAL:n=e.runes.length;break;case A.Op.PLB:case A.Op.NLB:case A.Op.CAPTURE:case A.Op.STAR:n=2+this.calcSize(e.subs[0]);break;case A.Op.PLUS:case A.Op.QUEST:n=1+this.calcSize(e.subs[0]);break;case A.Op.CONCAT:for(let s of e.subs)n=n+this.calcSize(s);break;case A.Op.ALTERNATE:for(let s of e.subs)n=n+this.calcSize(s);e.subs.length>1&&(n=n+e.subs.length-1);break;case A.Op.REPEAT:{let s=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?n=2+s:n=1+e.min*s;break}n=e.max*s+(e.max-e.min);break}}return n=Math.max(1,n),this.size===null&&(this.size=new Map),this.size.set(e,n),n}checkHeight(e){if(!(this.numRegexp<z.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>z.MAX_HEIGHT)throw new Pe(z.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let n=1;for(let s of e.subs){const i=this.calcHeight(s);n<1+i&&(n=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,n),n}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!A.isPseudoOp(this.stack[t-1].op);)t--;const n=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),n}push(e){if(this.numRunes+=e.runes.length,e.op===A.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=A.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===A.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&X.simpleFold(e.runes[0])===e.runes[2]&&X.simpleFold(e.runes[2])===e.runes[0]||e.op===A.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&X.simpleFold(e.runes[0])===e.runes[1]&&X.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|G.FOLD_CASE))return null;e.op=A.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|G.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const n=this.stack.length;if(n<2)return!1;const s=this.stack[n-1],i=this.stack[n-2];return s.op!==A.Op.LITERAL||i.op!==A.Op.LITERAL||(s.flags&G.FOLD_CASE)!==(i.flags&G.FOLD_CASE)?!1:(i.runes=z.concatRunes(i.runes,s.runes),e>=0?(s.runes=[e],s.flags=t,!0):(this.pop(),this.reuse(s),!1))}newLiteral(e,t){const n=this.newRegexp(A.Op.LITERAL);return n.flags=t,(t&G.FOLD_CASE)!==0&&(e=z.minFoldRune(e)),n.runes=[e],n}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,n,s,i,o){let a=this.flags;if((a&G.PERL_X)!==0&&(i.more()&&i.lookingAt("?")&&(i.skip(1),a^=G.NON_GREEDY),o!==-1))throw new Pe(z.ERR_INVALID_REPEAT_OP,i.from(o));const u=this.stack.length;if(u===0)throw new Pe(z.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const l=this.stack[u-1];if(A.isPseudoOp(l.op))throw new Pe(z.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const B=this.newRegexp(e);if(B.min=t,B.max=n,B.flags=a,B.subs=[l],this.stack[u-1]=B,this.checkLimits(B),e===A.Op.REPEAT&&(t>=2||n>=2)&&!this.repeatIsValid(B,1e3))throw new Pe(z.ERR_INVALID_REPEAT_SIZE,i.from(s))}repeatIsValid(e,t){if(e.op===A.Op.REPEAT){let n=e.max;if(n===0)return!0;if(n<0&&(n=e.min),n>t)return!1;n>0&&(t=Math.trunc(t/n))}for(let n of e.subs)if(!this.repeatIsValid(n,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(A.Op.EMPTY_MATCH)):this.push(this.collapse(e,A.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(A.Op.NO_MATCH)):this.push(this.collapse(e,A.Op.ALTERNATE))}cleanAlt(e){e.op===A.Op.CHAR_CLASS&&(e.runes=new rr(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===X.MAX_RUNE?(e.runes=[],e.op=A.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===L.CODES.get(`
`)-1&&e.runes[2]===L.CODES.get(`
`)+1&&e.runes[3]===X.MAX_RUNE&&(e.runes=[],e.op=A.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let n=0;for(let a of e)n+=a.op===t?a.subs.length:1;let s=new Array(n).fill(null),i=0;for(let a of e)if(a.op===t){for(let u=0;u<a.subs.length;u++)s[i++]=a.subs[u];this.reuse(a)}else s[i++]=a;let o=this.newRegexp(t);if(o.subs=s,t===A.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const a=o;o=o.subs[0],this.reuse(a)}return o}factor(e){if(e.length<2)return e;let t=0,n=e.length,s=0,i=null,o=0,a=0,u=0;for(let B=0;B<=n;B++){let d=null,C=0,g=0;if(B<n){let D=e[t+B];if(D.op===A.Op.CONCAT&&D.subs.length>0&&(D=D.subs[0]),D.op===A.Op.LITERAL&&(d=D.runes,C=D.runes.length,g=D.flags&G.FOLD_CASE),g===a){let N=0;for(;N<o&&N<C&&i[N]===d[N];)N++;if(N>0){o=N;continue}}}if(B!==u)if(B===u+1)e[s++]=e[t+u];else{const D=this.newRegexp(A.Op.LITERAL);D.flags=a,D.runes=i.slice(0,o);for(let H=u;H<B;H++)e[t+H]=this.removeLeadingString(e[t+H],o),this.checkLimits(e[t+H]);const N=this.collapse(e.slice(t+u,t+B),A.Op.ALTERNATE),V=this.newRegexp(A.Op.CONCAT);V.subs=[D,N],e[s++]=V}u=B,i=d,o=C,a=g}n=s,t=0,u=0,s=0;let l=null;for(let B=0;B<=n;B++){let d=null;if(!(B<n&&(d=z.leadingRegexp(e[t+B]),l!==null&&l.equals(d)&&(z.isCharClass(l)||l.op===A.Op.REPEAT&&l.min===l.max&&z.isCharClass(l.subs[0]))))){if(B!==u)if(B===u+1)e[s++]=e[t+u];else{const C=l;for(let N=u;N<B;N++){const V=N!==u;e[t+N]=this.removeLeadingRegexp(e[t+N],V),this.checkLimits(e[t+N])}const g=this.collapse(e.slice(t+u,t+B),A.Op.ALTERNATE),D=this.newRegexp(A.Op.CONCAT);D.subs=[C,g],e[s++]=D}u=B,l=d}}n=s,t=0,u=0,s=0;for(let B=0;B<=n;B++)if(!(B<n&&z.isCharClass(e[t+B]))){if(B!==u)if(B===u+1)e[s++]=e[t+u];else{let d=u;for(let g=u+1;g<B;g++){const D=e[t+d],N=e[t+g];(D.op<N.op||D.op===N.op&&(D.runes!==null?D.runes.length:0)<(N.runes!==null?N.runes.length:0))&&(d=g)}const C=e[t+u];e[t+u]=e[t+d],e[t+d]=C;for(let g=u+1;g<B;g++)z.mergeCharClass(e[t+u],e[t+g]),this.reuse(e[t+g]);this.cleanAlt(e[t+u]),e[s++]=e[t+u]}B<n&&(e[s++]=e[t+B]),u=B+1}n=s,t=0,u=0,s=0;for(let B=0;B<n;++B)B+1<n&&e[t+B].op===A.Op.EMPTY_MATCH&&e[t+B+1].op===A.Op.EMPTY_MATCH||(e[s++]=e[t+B]);return n=s,t=0,e.slice(t,n)}removeLeadingString(e,t){if(e.op===A.Op.CONCAT&&e.subs.length>0){const n=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=n,n.op===A.Op.EMPTY_MATCH)switch(this.reuse(n),e.subs.length){case 0:case 1:e.op=A.Op.EMPTY_MATCH,e.subs=A.emptySubs();break;case 2:{const s=e;e=e.subs[1],this.reuse(s);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===A.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=A.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===A.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=A.Op.EMPTY_MATCH,e.subs=A.emptySubs();break;case 1:{const n=e;e=e.subs[0],this.reuse(n);break}}return e}return t&&this.reuse(e),this.newRegexp(A.Op.EMPTY_MATCH)}parseInternal(){if((this.flags&G.LITERAL)!==0)return z.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,n=-1;const s=new lv(this.wholeRegexp);for(;s.more();){let i=-1;e:switch(s.peek()){case L.CODES.get("("):if((this.flags&G.LOOKBEHIND)!==0){if(s.lookingAt("(?<=")){this.parsePosLookBehind(),s.skip(4);break}if(s.lookingAt("(?<!")){this.parseNegLookBehind(),s.skip(4);break}}if((this.flags&G.PERL_X)!==0&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(A.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case L.CODES.get("|"):this.parseVerticalBar(),s.skip(1);break;case L.CODES.get(")"):this.parseRightParen(),s.skip(1);break;case L.CODES.get("^"):(this.flags&G.ONE_LINE)!==0?this.op(A.Op.BEGIN_TEXT):this.op(A.Op.BEGIN_LINE),s.skip(1);break;case L.CODES.get("$"):(this.flags&G.ONE_LINE)!==0?this.op(A.Op.END_TEXT).flags|=G.WAS_DOLLAR:this.op(A.Op.END_LINE),s.skip(1);break;case L.CODES.get("."):(this.flags&G.DOT_NL)!==0?this.op(A.Op.ANY_CHAR):this.op(A.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case L.CODES.get("["):this.parseClass(s);break;case L.CODES.get("*"):case L.CODES.get("+"):case L.CODES.get("?"):{i=s.pos();let o=null;switch(s.pop()){case L.CODES.get("*"):o=A.Op.STAR;break;case L.CODES.get("+"):o=A.Op.PLUS;break;case L.CODES.get("?"):o=A.Op.QUEST;break}this.repeat(o,t,n,i,s,e);break}case L.CODES.get("{"):{i=s.pos();const o=z.parseRepeat(s);if(o<0){s.rewindTo(i),this.literal(s.pop());break}t=o>>16,n=(o&X.MAX_BMP)<<16>>16,this.repeat(A.Op.REPEAT,t,n,i,s,e);break}case L.CODES.get("\\"):{const o=s.pos();if(s.skip(1),(this.flags&G.PERL_X)!==0&&s.more())switch(s.pop()){case L.CODES.get("A"):this.op(A.Op.BEGIN_TEXT);break e;case L.CODES.get("b"):this.op(A.Op.WORD_BOUNDARY);break e;case L.CODES.get("B"):this.op(A.Op.NO_WORD_BOUNDARY);break e;case L.CODES.get("C"):throw new Pe(z.ERR_INVALID_ESCAPE,"\\C");case L.CODES.get("Q"):{let l=s.rest();const B=l.indexOf("\\E");B>=0?(l=l.substring(0,B),s.skipString(l),s.skipString("\\E")):s.skipString(l);let d=0;for(;d<l.length;){const C=l.codePointAt(d);this.literal(C),d+=te.charCount(C)}break e}case L.CODES.get("z"):this.op(A.Op.END_TEXT);break e;default:s.rewindTo(o);break}else s.rewindTo(o);const a=this.newRegexp(A.Op.CHAR_CLASS);if(a.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const l=new rr;if(this.parseUnicodeClass(s,l)){a.runes=l.toArray(),this.push(a);break e}}const u=new rr;if(this.parsePerlClassEscape(s,u)){a.runes=u.toArray(),this.push(a);break e}s.rewindTo(o),this.reuse(a),this.literal(z.parseEscape(s));break}default:this.literal(s.pop());break}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new Pe(z.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),n=e.rest();if(n.startsWith("(?P<")||n.startsWith("(?<")){const a=n.charAt(2)==="P"?4:3,u=n.indexOf(">");if(u<0)throw new Pe(z.ERR_INVALID_NAMED_CAPTURE,n);const l=n.substring(a,u);if(e.skipString(l),e.skip(a+1),!z.isValidCaptureName(l))throw new Pe(z.ERR_INVALID_NAMED_CAPTURE,n.substring(0,u+1));const B=this.op(A.Op.LEFT_PAREN);if(B.cap=++this.numCap,this.namedGroups[l])throw new Pe(z.ERR_DUPLICATE_NAMED_CAPTURE,l);this.namedGroups[l]=this.numCap,B.name=l;return}e.skip(2);let s=this.flags,i=1,o=!1;e:for(;e.more();){const a=e.pop();switch(a){case L.CODES.get("i"):s|=G.FOLD_CASE,o=!0;break;case L.CODES.get("m"):s&=-17,o=!0;break;case L.CODES.get("s"):s|=G.DOT_NL,o=!0;break;case L.CODES.get("U"):s|=G.NON_GREEDY,o=!0;break;case L.CODES.get("-"):if(i<0)break e;i=-1,s=~s,o=!1;break;case L.CODES.get(":"):case L.CODES.get(")"):if(i<0){if(!o)break e;s=~s}a===L.CODES.get(":")&&this.op(A.Op.LEFT_PAREN),this.flags=s;return;default:break e}}throw new Pe(z.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(A.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(A.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(A.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===A.Op.VERTICAL_BAR&&z.isCharClass(this.stack[e-1])&&z.isCharClass(this.stack[e-3])){let t=this.stack[e-1],n=this.stack[e-3];if(t.op>n.op){const s=n;n=t,t=s,this.stack[e-3]=n}return z.mergeCharClass(n,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],n=this.stack[e-2];if(n.op===A.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=n,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new Pe(z.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==A.Op.LEFT_PAREN)throw new Pe(z.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(z.hasCapture(e))throw new Pe(z.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=A.Op.PLB:t.op=A.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=A.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const n=e.pos();if((this.flags&G.PERL_X)===0||!e.more()||e.pop()!==L.CODES.get("\\")||!e.more())return!1;e.pop();const s=e.from(n),i=_C.has(s)?_C.get(s):null;return i===null?!1:(t.appendGroup(i,(this.flags&G.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const n=e.rest(),s=n.indexOf(":]");if(s<0)return!1;const i=n.substring(0,s+2);e.skipString(i);const o=FC.has(i)?FC.get(i):null;if(o===null)throw new Pe(z.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&G.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const n=e.pos();if((this.flags&G.UNICODE_GROUPS)===0||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let s=1,i=e.pop();if(i===L.CODES.get("P")&&(s=-1),!e.more())throw e.rewindTo(n),new Pe(z.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==L.CODES.get("{"))o=te.runeToString(i);else{const B=e.rest(),d=B.indexOf("}");if(d<0)throw e.rewindTo(n),new Pe(z.ERR_INVALID_CHAR_RANGE,e.rest());o=B.substring(0,d),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===L.CODES.get("^")&&(s=0-s,o=o.substring(1));const a=z.unicodeTable(o);if(a===null)throw new Pe(z.ERR_INVALID_CHAR_RANGE,e.from(n));a.sign<0&&(s=0-s);const u=a.tab,l=a.fold;if((this.flags&G.FOLD_CASE)===0||l===null)t.appendTableWithSign(u,s);else{const B=new rr().appendTable(u).appendTable(l).cleanClass().toArray();t.appendClassWithSign(B,s)}return!0}parseClass(e){const t=e.pos();e.skip(1);const n=this.newRegexp(A.Op.CHAR_CLASS);n.flags=this.flags;const s=new rr;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),(this.flags&G.CLASS_NL)===0&&s.appendRange(L.CODES.get(`
`),L.CODES.get(`
`)));let o=!0;for(;!e.more()||e.peek()!==L.CODES.get("]")||o;){if(e.more()&&e.lookingAt("-")&&(this.flags&G.PERL_X)===0&&!o){const B=e.rest();if(B==="-"||!B.startsWith("-]"))throw e.rewindTo(t),new Pe(z.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const a=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,s))continue;e.rewindTo(a)}if(this.parseUnicodeClass(e,s)||this.parsePerlClassEscape(e,s))continue;e.rewindTo(a);const u=z.parseClassChar(e,t);let l=u;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(l=z.parseClassChar(e,t),l<u)throw new Pe(z.ERR_INVALID_CHAR_RANGE,e.from(a))}(this.flags&G.FOLD_CASE)===0?s.appendRange(u,l):s.appendFoldedRange(u,l)}e.skip(1),s.cleanClass(),i<0&&s.negateClass(),n.runes=s.toArray(),this.push(n)}},J(z,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),J(z,"ERR_INVALID_CHAR_RANGE","invalid character class range"),J(z,"ERR_INVALID_ESCAPE","invalid escape sequence"),J(z,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),J(z,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),J(z,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),J(z,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),J(z,"ERR_MISSING_BRACKET","missing closing ]"),J(z,"ERR_MISSING_PAREN","missing closing )"),J(z,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),J(z,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),J(z,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name"),J(z,"ERR_UNEXPECTED_PAREN","unexpected )"),J(z,"ERR_NESTING_DEPTH","expression nests too deeply"),J(z,"ERR_LARGE","expression too large"),J(z,"ERR_INVALID_CAPTURE_IN_LOOKBEHIND","invalid capture in lookbehind"),J(z,"MAX_HEIGHT",1e3),J(z,"MAX_SIZE",3355443),J(z,"MAX_RUNES",33554432),J(z,"ANY_TABLE",new m(new Uint32Array([0,X.MAX_RUNE,1]))),J(z,"ASCII_TABLE",new m(new Uint32Array([0,127,1]))),J(z,"ASCII_FOLD_TABLE",new m(new Uint32Array([0,127,1,383,383,1,8490,8490,1]))),z),hv=class Qr{static initTest(e){const t=Qr.compile(e),n=new Qr(t.expr,t.prog,t.numSubexp,t.longest);return n.cond=t.cond,n.prefix=t.prefix,n.prefixUTF8=t.prefixUTF8,n.prefixComplete=t.prefixComplete,n.prefixRune=t.prefixRune,n.prefilter=t.prefilter,n}static compile(e){return Qr.compileImpl(e,G.PERL,!1)}static compilePOSIX(e){return Qr.compileImpl(e,G.POSIX,!0)}static compileImpl(e,t,n){let s=Bv.parse(e,t);const i=s.maxCap();s=cv.simplify(s);const o=ov.build(s),a=uv.compileRegexp(s),u=new Qr(e,a,i,n);u.prefilter=o.type===Ee.Type.NONE?null:o;const[l,B]=a.prefix();return u.prefixComplete=l,u.prefix=B,u.prefixUTF8=te.stringToUtf8ByteArray(u.prefix),u.prefix.length>0&&(u.prefixRune=u.prefix.codePointAt(0)),u.namedGroups=s.namedGroups,u}static match(e,t){return Qr.compile(e).match(t)}constructor(e,t,n=0,s=0){this.expr=e,this.prog=t,this.numSubexp=n,this.longest=s,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.machinePool=[],this.dfa=new $R(this.prog),this.onepass=fC.compile(this.prog),this.prefilter=null}matchPrefixComplete(e,t,n,s){if((n===G.ANCHOR_START||n===G.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const a=e.prefixLength(this);if(n===G.UNANCHORED){const u=e.index(this,t);if(u<0)return null;i=t+u,o=i+a}else if(n===G.ANCHOR_BOTH){if(e.endPos()!==a||e.index(this,0)!==0)return null;i=0,o=a}else if(n===G.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=a}if(i<0)return null;if(s>0){const u=new Int32Array(s).fill(-1);return u[0]=i,u[1]=o,Array.from(u)}return[]}executeEngine(e,t,n,s){if(this.prefixComplete&&(s===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,n,s);if(this.prefilter!==null&&n===G.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return fC.execute(this,e,t,n,s);if(s>0)return this.prog.numLb===0&&e.endPos()<=iu.maxBitStateLen(this.prog)?iu.execute(this,e,t,n,s):this.doExecuteNFA(e,t,n,s);if(this.prog.numLb===0){const i=this.dfa.match(e,t,n);if(i!==null)return i?[]:null;if(e.endPos()<=iu.maxBitStateLen(this.prog))return iu.execute(this,e,t,n,s)}return this.doExecuteNFA(e,t,n,s)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,n,s){let i=this.get();i||(i=zR.fromRE2(this)),i.init(s);const o=i.match(e,t,n)?i.submatches():null;return this.put(i),o}match(e){return this.executeEngine(Oe.fromUTF16(e),0,G.UNANCHORED,0)!==null}matchWithGroup(e,t,n,s,i){return e instanceof Cs||(te.isByteArray(e)?e=rs.utf8(e):e=rs.utf16(e)),this.matchMachineInput(e,t,n,s,i)}matchMachineInput(e,t,n,s,i){if(t>n)return[!1,null];const o=e.isUTF16Encoding()?Oe.fromUTF16(e.asCharSequence(),0,n):Oe.fromUTF8(e.asBytes(),0,n),a=this.executeEngine(o,t,s,2*i);return a===null?[!1,null]:[!0,a]}matchUTF8(e){return this.executeEngine(Oe.fromUTF8(e),0,G.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,n){let s=0,i=0,o="";const a=Oe.fromUTF16(e);let u=0;for(;i<=e.length;){const l=this.executeEngine(a,i,G.UNANCHORED,2);if(l===null||l.length===0)break;o+=e.substring(s,l[0]),(l[1]>s||l[0]===0)&&(o+=t(e.substring(l[0],l[1])),u++),s=l[1];const B=a.step(i)&7;if(i+B>l[1]?i+=B:i+1>l[1]?i++:i=l[1],u>=n)break}return o+=e.substring(s),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let n=new Array(t).fill(-1);for(let s=0;s<e.length;s++)n[s]=e[s];e=n}return e}allMatches(e,t,n=s=>s){let s=[];const i=e.endPos();t<0&&(t=i+1);let o=0,a=0,u=-1;for(;a<t&&o<=i;){const l=this.executeEngine(e,o,G.UNANCHORED,this.prog.numCap);if(l===null||l.length===0)break;let B=!0;if(l[1]===o){l[0]===u&&(B=!1);const d=e.step(o);d<0?o=i+1:o+=d&7}else o=l[1];u=l[1],B&&(s.push(n(this.pad(l))),a++)}return s}findUTF8(e){const t=this.executeEngine(Oe.fromUTF8(e),0,G.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(Oe.fromUTF8(e),0,G.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(Oe.fromUTF16(e),0,G.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(Oe.fromUTF16(e),0,G.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(Oe.fromUTF8(e),0,G.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let s=0;s<n.length;s++)2*s<t.length&&t[2*s]>=0&&(n[s]=e.slice(t[2*s],t[2*s+1]));return n}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(Oe.fromUTF8(e),0,G.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(Oe.fromUTF16(e),0,G.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let s=0;s<n.length;s++)2*s<t.length&&t[2*s]>=0&&(n[s]=e.substring(t[2*s],t[2*s+1]));return n}findSubmatchIndex(e){return this.pad(this.executeEngine(Oe.fromUTF16(e),0,G.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const n=this.allMatches(Oe.fromUTF8(e),t,s=>e.slice(s[0],s[1]));return n.length===0?null:n}findAllUTF8Index(e,t){const n=this.allMatches(Oe.fromUTF8(e),t,s=>s.slice(0,2));return n.length===0?null:n}findAll(e,t){const n=this.allMatches(Oe.fromUTF16(e),t,s=>e.substring(s[0],s[1]));return n.length===0?null:n}findAllIndex(e,t){const n=this.allMatches(Oe.fromUTF16(e),t,s=>s.slice(0,2));return n.length===0?null:n}findAllUTF8Submatch(e,t){const n=this.allMatches(Oe.fromUTF8(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.slice(s[2*o],s[2*o+1]));return i});return n.length===0?null:n}findAllUTF8SubmatchIndex(e,t){const n=this.allMatches(Oe.fromUTF8(e),t);return n.length===0?null:n}findAllSubmatch(e,t){const n=this.allMatches(Oe.fromUTF16(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.substring(s[2*o],s[2*o+1]));return i});return n.length===0?null:n}findAllSubmatchIndex(e,t){const n=this.allMatches(Oe.fromUTF16(e),t);return n.length===0?null:n}},dv=class Qs{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(e instanceof RegExp&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let n="",s=!1,i=e.length;i===0&&(n="(?:)",s=!0);let o=!1,a=0;for(;a<i;){let l=e[a];if(l==="\\"){if(a+1<i)switch(l=e[a+1],l){case"\\":n+="\\\\",a+=2;continue;case"c":if(a+2<i){let C=e[a+2].charCodeAt(0);if(C>=65&&C<=90||C>=97&&C<=122){let g=C%32;n+="\\x",n+=(g>>4).toString(16).toUpperCase(),n+=(g&15).toString(16).toUpperCase(),a+=3,s=!0;continue}}n+="c",a+=2,s=!0;continue;case"u":if(a+2<i){if(e[a+2]==="{"){let C=a+3,g=!1,D=!1;for(;C<i;){const N=e[C];if(N==="}"){D=!0;break}if(!Qs.isHexadecimal(N))break;g=!0,C++}if(D&&g){n+="\\x",a+=2,s=!0;continue}}else if(a+5<i){let C=!0;for(let g=0;g<4;g++)if(!Qs.isHexadecimal(e[a+2+g])){C=!1;break}if(C){n+="\\x{"+e.substring(a+2,a+6)+"}",a+=6,s=!0;continue}}}n+="u",a+=2,s=!0;continue;case"x":{let C=!1;if(a+2<i&&e[a+2]==="{"){let g=a+3,D=!1,N=!1;for(;g<i;){const V=e[g];if(V==="}"){N=!0;break}if(!Qs.isHexadecimal(V))break;D=!0,g++}N&&D&&(C=!0)}else a+3<i&&Qs.isHexadecimal(e[a+2])&&Qs.isHexadecimal(e[a+3])&&(C=!0);C?(n+="\\x",a+=2):(n+="x",a+=2,s=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":n+="\\"+l,a+=2;continue;default:{let C=e.codePointAt(a+1);if(C>=48&&C<=57||C>=65&&C<=90||C>=97&&C<=122){let g=te.charCount(C);n+=e.substring(a+1,a+1+g),a+=g+1,s=!0}else{n+="\\";let g=te.charCount(C);n+=e.substring(a+1,a+1+g),a+=g+1}continue}}}else if(l==="/"){n+="\\/",a+=1,s=!0;continue}else if(l==="[")o=!0;else if(l==="]")o=!1;else if(!o&&l==="("&&a+2<i&&e[a+1]==="?"&&e[a+2]==="<"&&a+3<i&&!"=!>)".includes(e[a+3])){n+="(?P<",a+=3,s=!0;continue}let B=e.codePointAt(a),d=te.charCount(B);n+=e.substring(a,a+d),a+=d}const u=s?n:e;return t.length>0?`(?${t})${u}`:u}},We,nh=(We=class{static quote(e){return te.quoteMeta(e)}static quoteReplacement(e,t=!1){return lC.quoteReplacement(e,t)}static translateRegExp(e){return dv.translate(e)}static compile(e,t=0){let n=e;if((t&We.CASE_INSENSITIVE)!==0&&(n=`(?i)${n}`),(t&We.DOTALL)!==0&&(n=`(?s)${n}`),(t&We.MULTILINE)!==0&&(n=`(?m)${n}`),(t&-544)!==0)throw new KR("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");let s=G.PERL;(t&We.DISABLE_UNICODE_GROUPS)!==0&&(s&=-129),(t&We.LOOKBEHINDS)!==0&&(s|=G.LOOKBEHIND);const i=new We(e,t);return i.re2Input=hv.compileImpl(n,s,(t&We.LONGEST_MATCH)!==0),i}static matches(e,t){return We.compile(e).testExact(t)}static initTest(e,t,n){if(e==null)throw new Error("pattern is null");if(n==null)throw new Error("re2 is null");const s=new We(e,t);return s.re2Input=n,s}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return te.isByteArray(e)&&(e=rs.utf8(e)),new lC(this,e)}test(e){return te.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=te.isByteArray(e)?Oe.fromUTF8(e):Oe.fromUTF16(e);return this.re2Input.executeEngine(t,0,G.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);if(!t.find())return null;const n=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);n.push(o===null?void 0:o)}n.index=t.start(0),n.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);n.groups=i}else n.groups=void 0;return n}split(e,t=0){const n=this.matcher(e),s=[];let i=0,o=0;for(;n.find();){if(o===0&&n.end()===0){o=n.end();continue}if(t>0&&s.length===t-1)break;if(o===n.start()){if(t===0){i+=1,o=n.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(n.substring(o,n.start())),o=n.end()}if(t===0&&o!==n.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(n.substring(o,n.inputLength()))}return(t!==0||s.length===0&&!(o===n.inputLength()&&o>0))&&s.push(n.substring(o,n.inputLength())),s}*matchAll(e){const t=this.matcher(e);for(;t.find();){const n=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);n.push(o===null?void 0:o)}n.index=t.start(0),n.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);n.groups=i}else n.groups=void 0;yield n}}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}},J(We,"CASE_INSENSITIVE",Ms.CASE_INSENSITIVE),J(We,"DOTALL",Ms.DOTALL),J(We,"MULTILINE",Ms.MULTILINE),J(We,"DISABLE_UNICODE_GROUPS",Ms.DISABLE_UNICODE_GROUPS),J(We,"LONGEST_MATCH",Ms.LONGEST_MATCH),J(We,"LOOKBEHINDS",Ms.LOOKBEHINDS),We);/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,t,n){this.alias=e,this.aggregateType=t,this.fieldPath=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ki="12.19.0";function fv(r){ki=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new FB("@firebase/firestore");function Ws(){return yr.logLevel}function Cv(r){yr.setLogLevel(r)}function U(r,...e){if(yr.logLevel<=he.DEBUG){const t=e.map(rh);yr.debug(`Firestore (${ki}): ${r}`,...t)}}function je(r,...e){if(yr.logLevel<=he.ERROR){const t=e.map(rh);yr.error(`Firestore (${ki}): ${r}`,...t)}}function nt(r,...e){if(yr.logLevel<=he.WARN){const t=e.map(rh);yr.warn(`Firestore (${ki}): ${r}`,...t)}}function rh(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,Hm(r,n,t)}function Hm(r,e,t){let n=`FIRESTORE (${ki}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw je(n),new Error(n)}function q(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||Hm(e,s,n)}function pv(r,e){r||Y(57014,e)}function W(r,e){return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=gv(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function oe(r,e){return r<e?-1:r>e?1:0}function eB(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),i=e.charAt(n);if(s!==i)return Ol(s)===Ol(i)?oe(s,i):Ol(s)?1:-1}return oe(r.length,e.length)}const mv=55296,_v=57343;function Ol(r){const e=r.charCodeAt(0);return e>=mv&&e<=_v}function ai(r,e,t){return r.length===e.length&&r.every(((n,s)=>t(n,e[s])))}function qm(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t){this.comparator=e,this.root=t||Bt.EMPTY}insert(e,t){return new ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new au(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new au(this.root,e,this.comparator,!1)}getReverseIterator(){return new au(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new au(this.root,e,this.comparator,!0)}}class au{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Bt{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Bt.RED,this.left=s??Bt.EMPTY,this.right=i??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Bt(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Bt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new Bt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new LC(this.data.getIterator())}getIteratorFrom(e){return new LC(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new De(this.comparator);return t.data=e,t}}class LC{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Gs(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends In{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="__name__";class rn{constructor(e,t,n){t===void 0?t=0:t>e.length&&Y(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&Y(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return rn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof rn?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=rn.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return oe(e.length,t.length)}static compareSegments(e,t){const n=rn.isNumericId(e),s=rn.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?rn.extractNumericId(e).compare(rn.extractNumericId(t)):eB(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mr.fromString(e.substring(4,e.length-2))}}class ue extends rn{construct(e,t,n){return new ue(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new M(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((s=>s.length>0)))}return new ue(t)}static emptyPath(){return new ue([])}}const Ev=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let Je=class $s extends rn{construct(e,t,n){return new $s(e,t,n)}static isValidIdentifier(e){return Ev.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$s.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===an}static keyField(){return new $s([an])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new M(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new M(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new M(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(n+=a,s++):(i(),s++)}if(i(),o)throw new M(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $s(t)}static emptyPath(){return new $s([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new St([])}unionWith(e){let t=new De(Je.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new St(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ai(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Lr(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function sh(r,e){const t=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.push(e(r[n],n,r));return t}function jm(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ue.fromString(e))}static fromName(e){return new K(ue.fromString(e).popFirst(5))}static empty(){return new K(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ue.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ue(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(r,e,t){if(!t)throw new M(b.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Jm(r,e,t,n){if(e===!0&&n===!0)throw new M(b.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function VC(r){if(!K.isDocumentKey(r))throw new M(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function kC(r){if(K.isDocumentKey(r))throw new M(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Ia(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function mc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Y(12329,{type:typeof r})}function Be(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new M(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=mc(r);throw new M(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function Km(r,e){if(e<=0)throw new M(b.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(r,e){const t={typeString:r};return e&&(t.value=e),t}function Rs(r,e){if(!Ia(r))throw new M(b.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new M(b.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=-62135596800,MC=1e6;class _e{static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*MC);return new _e(t,n)}static fromInstant(e){if(!e||typeof e.t!="bigint")throw new M(b.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return _e._fromEpochNanoseconds(e.t)}static _fromEpochNanoseconds(e){let t,n;if(e>=0n)t=Number(e/1000000000n),n=Number(e%1000000000n);else{const s=e%1000000000n;s===0n?(t=Number(e/1000000000n),n=0):(t=Number(e/1000000000n-1n),n=Number(s+1000000000n))}return new _e(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<xC)throw new M(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/MC}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new M(b.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Rs(e,_e._jsonSchema))return new _e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-xC;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_e._jsonSchemaVersion="firestore/timestamp/1.0",_e._jsonSchema={type:Ye("string",_e._jsonSchemaVersion),seconds:Ye("number"),nanoseconds:Ye("number")};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new zm("Invalid base64 string: "+i):i}})(e);return new Se(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new Se(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Se.EMPTY_BYTE_STRING=new Se("");const Dv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gn(r){if(q(!!r,39018),typeof r=="string"){let e=0;const t=Dv.exec(r);if(q(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:be(r.seconds),nanos:be(r.nanos)}}function be(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Un(r){return typeof r=="string"?Se.fromBase64String(r):Se.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="server_timestamp",Wm="__type__",$m="__previous_value__",Ym="__local_write_time__";function Da(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Wm])==null?void 0:n.stringValue)===Qm}function ya(r){const e=r.mapValue.fields[$m];return Da(e)?ya(e):e}function ui(r){const e=Gn(r.mapValue.fields[Ym].timestampValue);return new _e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e,t,n,s,i,o,a,u,l,B,d,C,g){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l,this.isUsingEmulator=B,this.apiKey=d,this._customHeaders=C,this.grpcFlowControlWindow=g}}const ta="(default)";class wr{constructor(e,t){this.projectId=e,this.database=t||ta}static empty(){return new wr("","")}get isDefaultDatabase(){return this.database===ta}isEqual(e){return e instanceof wr&&e.projectId===this.projectId&&e.database===this.database}}function wv(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new M(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wr(r.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=-1;function wa(r){return r==null}function ci(r){return r===0&&1/r==-1/0}function Xm(r){return typeof r=="number"&&Number.isInteger(r)&&!ci(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}function Tv(r){return typeof r=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="__type__",Zm="__max__",hr={mapValue:{fields:{__type__:{stringValue:Zm}}}},ah="__vector__",ps="value",fn={nullValue:"NULL_VALUE"},Vt={booleanValue:!0},ut={booleanValue:!1};function Xe(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Da(r)?4:e_(r)?9007199254740991:ms(r)?10:11:Y(28295,{value:r})}function Qt(r,e,t){if(r===e)return!0;const n=Xe(r);if(n!==Xe(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ui(r).isEqual(ui(e));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Gn(i.timestampValue),u=Gn(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(i,o){return Un(i.bytesValue).isEqual(Un(o.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(i,o){return be(i.geoPointValue.latitude)===be(o.geoPointValue.latitude)&&be(i.geoPointValue.longitude)===be(o.geoPointValue.longitude)})(r,e);case 2:return(function(i,o,a){if("integerValue"in i&&"integerValue"in o)return be(i.integerValue)===be(o.integerValue);let u,l;if("doubleValue"in i&&"doubleValue"in o)u=be(i.doubleValue),l=be(o.doubleValue);else{if(!(a!=null&&a.i))return!1;u=be(i.integerValue??i.doubleValue),l=be(o.integerValue??o.doubleValue)}return u===l?!!(a!=null&&a.o)||ci(u)===ci(l):!!(a===void 0||a.u)&&isNaN(u)&&isNaN(l)})(r,e,t);case 9:return ai(r.arrayValue.values||[],e.arrayValue.values||[],((s,i)=>Qt(s,i,t)));case 10:case 11:return(function(i,o,a){const u=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Mu(u)!==Mu(l))return!1;for(const B in u)if(u.hasOwnProperty(B)&&(l[B]===void 0||!Qt(u[B],l[B],a)))return!1;return!0})(r,e,t);default:return Y(52216,{left:r})}}function na(r,e){return(r.values||[]).find((t=>Qt(t,e)))!==void 0}function _t(r,e){if(r===e)return 0;const t=Xe(r),n=Xe(e);if(t!==n)return oe(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return oe(r.booleanValue,e.booleanValue);case 2:return(function(i,o){const a=be(i.integerValue||i.doubleValue),u=be(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1})(r,e);case 3:return GC(r.timestampValue,e.timestampValue);case 4:return GC(ui(r),ui(e));case 5:return eB(r.stringValue,e.stringValue);case 6:return(function(i,o){const a=Un(i),u=Un(o);return a.compareTo(u)})(r.bytesValue,e.bytesValue);case 7:return(function(i,o){const a=i.split("/"),u=o.split("/");for(let l=0;l<a.length&&l<u.length;l++){const B=oe(a[l],u[l]);if(B!==0)return B}return oe(a.length,u.length)})(r.referenceValue,e.referenceValue);case 8:return(function(i,o){const a=oe(be(i.latitude),be(o.latitude));return a!==0?a:oe(be(i.longitude),be(o.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return UC(r.arrayValue,e.arrayValue);case 10:return(function(i,o){var C,g,D,N;const a=i.fields||{},u=o.fields||{},l=(C=a[ps])==null?void 0:C.arrayValue,B=(g=u[ps])==null?void 0:g.arrayValue,d=oe(((D=l==null?void 0:l.values)==null?void 0:D.length)||0,((N=B==null?void 0:B.values)==null?void 0:N.length)||0);return d!==0?d:UC(l,B)})(r.mapValue,e.mapValue);case 11:return(function(i,o){if(i===hr.mapValue&&o===hr.mapValue)return 0;if(i===hr.mapValue)return 1;if(o===hr.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),l=o.fields||{},B=Object.keys(l);u.sort(),B.sort();for(let d=0;d<u.length&&d<B.length;++d){const C=eB(u[d],B[d]);if(C!==0)return C;const g=_t(a[u[d]],l[B[d]]);if(g!==0)return g}return oe(u.length,B.length)})(r.mapValue,e.mapValue);default:throw Y(23264,{l:t})}}function GC(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return oe(r,e);const t=Gn(r),n=Gn(e),s=oe(t.seconds,n.seconds);return s!==0?s:oe(t.nanos,n.nanos)}function UC(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=_t(t[s],n[s]);if(i!==void 0&&i!==0)return i}return oe(t.length,n.length)}function li(r){return tB(r)}function tB(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const n=Gn(t);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Un(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return K.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=tB(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${tB(t.fields[o])}`;return s+"}"})(r.mapValue):Y(61005,{value:r})}function Du(r){switch(Xe(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ya(r);return e?16+Du(e):16;case 5:return 2*r.stringValue.length;case 6:return Un(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,i)=>s+Du(i)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return Lr(n.fields,((i,o)=>{s+=i.length+Du(o)})),s})(r.mapValue);default:throw Y(13486,{value:r})}}function gs(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function un(r){return!!r&&"integerValue"in r}function ss(r){return!!r&&"doubleValue"in r}function Tr(r){return un(r)||ss(r)}function Ar(r){return!!r&&"arrayValue"in r}function Ht(r){return!!r&&"nullValue"in r}function kt(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function cs(r){return!!r&&"mapValue"in r}function ms(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[oh])==null?void 0:n.stringValue)===ah}function nB(r){var e,t;return(t=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[ps])==null?void 0:t.arrayValue}function Lo(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Lr(r.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Lo(n))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Lo(r.arrayValue.values[t]);return e}return{...r}}function e_(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Zm}const t_={mapValue:{fields:{[oh]:{stringValue:ah},[ps]:{arrayValue:{}}}}};function Av(r){return"nullValue"in r?fn:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?gs(wr.empty(),K.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?ms(r)?t_:{mapValue:{}}:Y(35942,{value:r})}function Rv(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?gs(wr.empty(),K.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?t_:"mapValue"in r?ms(r)?{mapValue:{}}:hr:Y(61959,{value:r})}function HC(r,e){const t=_t(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function qC(r,e){const t=_t(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.value=e}static empty(){return new et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!cs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Lo(t)}setAll(e){let t=Je.emptyPath(),n={},s=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,n,s),n={},s=[],t=a.popLast()}o?n[a.lastSegment()]=Lo(o):s.push(a.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());cs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Qt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];cs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Lr(t,((s,i)=>e[s]=i));for(const s of n)delete e[s]}clone(){return new et(Lo(this.value))}}function n_(r){const e=[];return Lr(r.fields,((t,n)=>{const s=new Je([t]);if(cs(n)){const i=n_(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new St(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ci(e)?"-0":e}}function uh(r){return{integerValue:""+r}}function xi(r,e,t){return Xm(e)?uh(e):_c(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(){this._=void 0}}function vv(r,e,t){return r instanceof Bi?(function(s,i){const o={fields:{[Wm]:{stringValue:Qm},[Ym]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Da(i)&&(i=ya(i)),i&&(o.fields[$m]=i),{mapValue:o}})(t,e):r instanceof _s?s_(r,e):r instanceof Es?i_(r,e):r instanceof Is?(function(s,i){const o=r_(s,i),a=Gu(o)+Gu(s.h);return un(o)&&un(s.h)?uh(a):_c(s.serializer,a)})(r,e):r instanceof hi?(function(s,i){return jC(s,i,Math.min)})(r,e):r instanceof di?(function(s,i){return jC(s,i,Math.max)})(r,e):void 0}function Pv(r,e,t){return r instanceof _s?s_(r,e):r instanceof Es?i_(r,e):t}function r_(r,e){return r instanceof Is?Tr(e)?e:{integerValue:0}:null}class Bi extends Ec{}class _s extends Ec{constructor(e){super(),this.elements=e}}function s_(r,e){const t=o_(e);for(const n of r.elements)t.some((s=>Qt(s,n)))||t.push(n);return{arrayValue:{values:t}}}class Es extends Ec{constructor(e){super(),this.elements=e}}function i_(r,e){let t=o_(e);for(const n of r.elements)t=t.filter((s=>!Qt(s,n)));return{arrayValue:{values:t}}}class ch extends Ec{constructor(e,t){super(),this.serializer=e,this.h=t}}class Is extends ch{}class hi extends ch{}class di extends ch{}function jC(r,e,t){if(!Tr(e))return r.h;const n=t(Gu(e),Gu(r.h));return un(e)&&un(r.h)?uh(n):_c(r.serializer,n)}function Gu(r){return be(r.integerValue||r.doubleValue)}function o_(r){return Ar(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t){this.field=e,this.transform=t}}function bv(r,e){return r.field.isEqual(e.field)&&(function(n,s){return n instanceof _s&&s instanceof _s||n instanceof Es&&s instanceof Es?ai(n.elements,s.elements,Qt):n instanceof Is&&s instanceof Is||n instanceof hi&&s instanceof hi||n instanceof di&&s instanceof di?Qt(n.h,s.h):n instanceof Bi&&s instanceof Bi})(r.transform,e.transform)}class Sv{constructor(e,t){this.version=e,this.transformResults=t}}class Me{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Me}static exists(e){return new Me(void 0,e)}static updateTime(e){return new Me(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Ic{}function a_(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Gi(r.key,Me.none()):new Mi(r.key,r.data,Me.none());{const t=r.data,n=et.empty();let s=new De(Je.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new Kn(r.key,n,new St(s.toArray()),Me.none())}}function Nv(r,e,t){r instanceof Mi?(function(s,i,o){const a=s.value.clone(),u=KC(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(r,e,t):r instanceof Kn?(function(s,i,o){if(!yu(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=KC(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(u_(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(r,e,t):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Vo(r,e,t,n){return r instanceof Mi?(function(i,o,a,u){if(!yu(i.precondition,o))return a;const l=i.value.clone(),B=zC(i.fieldTransforms,u,o);return l.setAll(B),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null})(r,e,t,n):r instanceof Kn?(function(i,o,a,u){if(!yu(i.precondition,o))return a;const l=zC(i.fieldTransforms,u,o),B=o.data;return B.setAll(u_(i)),B.setAll(l),o.convertToFoundDocument(o.version,B).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((d=>d.field)))})(r,e,t,n):(function(i,o,a){return yu(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(r,e,t)}function Ov(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=r_(n.transform,s||null);i!=null&&(t===null&&(t=et.empty()),t.set(n.field,i))}return t||null}function JC(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ai(n,s,((i,o)=>bv(i,o)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Mi extends Ic{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Kn extends Ic{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function u_(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}})),e}function KC(r,e,t){const n=new Map;q(r.length===t.length,32656,{T:t.length,P:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,a=e.data.field(i.field);n.set(i.field,Pv(o,a,t[s]))}return n}function zC(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,vv(i,o,e))}return n}class Gi extends Ic{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lh extends Ic{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t){this.position=e,this.inclusive=t}}function QC(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=K.comparator(K.fromName(o.referenceValue),t.key):n=_t(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function WC(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Qt(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{}class fe extends c_{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Fv(e,t,n):t==="array-contains"?new kv(e,n):t==="in"?new C_(e,n):t==="not-in"?new xv(e,n):t==="array-contains-any"?new Mv(e,n):new fe(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Lv(e,n):new Vv(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(_t(t,this.value)):t!==null&&Xe(this.value)===Xe(t)&&this.matchesComparison(_t(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ye extends c_{constructor(e,t){super(),this.filters=e,this.op=t,this.I=null}static create(e,t){return new ye(e,t)}matches(e){return fi(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.I!==null||(this.I=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.I}getFilters(){return Object.assign([],this.filters)}}function fi(r){return r.op==="and"}function rB(r){return r.op==="or"}function Bh(r){return l_(r)&&fi(r)}function l_(r){for(const e of r.filters)if(e instanceof ye)return!1;return!0}function sB(r){if(r instanceof fe)return r.field.canonicalString()+r.op.toString()+li(r.value);if(Bh(r))return r.filters.map((e=>sB(e))).join(",");{const e=r.filters.map((t=>sB(t))).join(",");return`${r.op}(${e})`}}function B_(r,e){return r instanceof fe?(function(n,s){return s instanceof fe&&n.op===s.op&&n.field.isEqual(s.field)&&Qt(n.value,s.value)})(r,e):r instanceof ye?(function(n,s){return s instanceof ye&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,o,a)=>i&&B_(o,s.filters[a])),!0):!1})(r,e):void Y(19439)}function h_(r,e){const t=r.filters.concat(e);return ye.create(t,r.op)}function d_(r){return r instanceof fe?(function(t){return`${t.field.canonicalString()} ${t.op} ${li(t.value)}`})(r):r instanceof ye?(function(t){return t.op.toString()+" {"+t.getFilters().map(d_).join(" ,")+"}"})(r):"Filter"}class Fv extends fe{constructor(e,t,n){super(e,t,n),this.key=K.fromName(n.referenceValue)}matches(e){const t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class Lv extends fe{constructor(e,t){super(e,"in",t),this.keys=f_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Vv extends fe{constructor(e,t){super(e,"not-in",t),this.keys=f_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function f_(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((n=>K.fromName(n.referenceValue)))}class kv extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ar(t)&&na(t.arrayValue,this.value)}}class C_ extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&na(this.value.arrayValue,t)}}class xv extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(na(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!na(this.value.arrayValue,t)}}class Mv extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ar(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>na(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t="asc"){this.field=e,this.dir=t}}function Gv(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new _e(0,0))}static max(){return new ee(new _e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t,n,s,i,o,a){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Le(e,0,ee.min(),ee.min(),ee.min(),et.empty(),0)}static newFoundDocument(e,t,n,s){return new Le(e,1,t,ee.min(),n,s,0)}static newNoDocument(e,t){return new Le(e,2,t,ee.min(),ee.min(),et.empty(),0)}static newUnknownDocument(e,t){return new Le(e,3,t,ee.min(),ee.min(),et.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=-1;class pi{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function iB(r){return r.fields.find((e=>e.kind===2))}function Wr(r){return r.fields.filter((e=>e.kind!==2))}function Uv(r,e){let t=oe(r.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let n=0;n<Math.min(r.fields.length,e.fields.length);++n)if(t=Hv(r.fields[n],e.fields[n]),t!==0)return t;return oe(r.fields.length,e.fields.length)}pi.UNKNOWN_ID=-1;class ls{constructor(e,t){this.fieldPath=e,this.kind=t}}function Hv(r,e){const t=Je.comparator(r.fieldPath,e.fieldPath);return t!==0?t:oe(r.kind,e.kind)}class gi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new gi(0,qt.min())}}function p_(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(n===1e9?new _e(t+1,0):new _e(t,n));return new qt(s,K.empty(),e)}function g_(r){return new qt(r.readTime,r.key,Ci)}class qt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new qt(ee.min(),K.empty(),Ci)}static max(){return new qt(ee.max(),K.empty(),Ci)}}function hh(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=K.comparator(r.documentKey,e.documentKey),t!==0?t:oe(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,t=null,n=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.R=null}}function oB(r,e=null,t=[],n=[],s=null,i=null,o=null){return new qv(r,e,t,n,s,i,o)}function Uu(r){const e=W(r);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>sB(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),wa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>li(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>li(n))).join(",")),e.R=t}return e.R}function dh(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!Gv(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!B_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!WC(r.startAt,e.startAt)&&WC(r.endAt,e.endAt)}function Pn(r){return!!r.isCorePipeline}function fh(r){return!!r.path&&K.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Hu(r,e){return r.filters.filter((t=>t instanceof fe&&t.field.isEqual(e)))}function $C(r,e,t){let n=fn,s=!0;for(const i of Hu(r,e)){let o=fn,a=!0;switch(i.op){case"<":case"<=":o=Av(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=fn}HC({value:n,inclusive:s},{value:o,inclusive:a})<0&&(n=o,s=a)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];HC({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function YC(r,e,t){let n=hr,s=!0;for(const i of Hu(r,e)){let o=hr,a=!0;switch(i.op){case">=":case">":o=Rv(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=hr}qC({value:n,inclusive:s},{value:o,inclusive:a})>0&&(n=o,s=a)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];qC({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t=null,n=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.A=null,this.V=null,this.m=null,this.startAt,this.endAt}}function m_(r,e,t,n,s,i,o,a){return new zn(r,e,t,n,s,i,o,a)}function Ui(r){return new zn(r)}function XC(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function jv(r){return K.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ch(r){return r.collectionGroup!==null}function ti(r){const e=W(r);if(e.A===null){e.A=[];const t=new Set;for(const i of e.explicitOrderBy)e.A.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new De(Je.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((l=>{l.isInequality()&&(a=a.add(l.field))}))})),a})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.A.push(new ra(i,n))})),t.has(Je.keyField().canonicalString())||e.A.push(new ra(Je.keyField(),n))}return e.A}function gt(r){const e=W(r);return e.V||(e.V=E_(e,ti(r))),e.V}function __(r){const e=W(r);return e.m||(e.m=E_(e,r.explicitOrderBy)),e.m}function E_(r,e){if(r.limitType==="F")return oB(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ra(s.field,i)}));const t=r.endAt?new Rr(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Rr(r.startAt.position,r.startAt.inclusive):null;return oB(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function aB(r,e){const t=r.filters.concat([e]);return new zn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Jv(r,e){const t=r.explicitOrderBy.concat([e]);return new zn(r.path,r.collectionGroup,t,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}function qu(r,e,t){return new zn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Kv(r,e){return new zn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,e,r.endAt)}function zv(r,e){return new zn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,e)}function I_(r,e){return dh(gt(r),gt(e))&&r.limitType===e.limitType}function ko(r){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((s=>d_(s))).join(", ")}]`),wa(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>li(s))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>li(s))).join(",")),`Target(${n})`})(gt(r))}; limitType=${r.limitType})`}function Dc(r,e){return e.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):K.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,e)&&(function(n,s){for(const i of ti(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,e)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,e)&&(function(n,s){return!(n.startAt&&!(function(o,a,u){const l=QC(o,a,u);return o.inclusive?l<=0:l<0})(n.startAt,ti(n),s)||n.endAt&&!(function(o,a,u){const l=QC(o,a,u);return o.inclusive?l>=0:l>0})(n.endAt,ti(n),s))})(r,e)}function yc(r){return(e,t)=>{let n=!1;for(const s of ti(r)){const i=Qv(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function Qv(r,e,t){const n=r.field.isKeyField()?K.comparator(e.key,t.key):(function(i,o,a){const u=o.data.field(i),l=a.data.field(i);return u!==null&&l!==null?_t(u,l):Y(42886)})(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return Y(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,ge;function D_(r){switch(r){case b.OK:return Y(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return Y(15467,{code:r})}}function y_(r){if(r===void 0)return je("GRPC error has no .code"),b.UNKNOWN;switch(r){case ze.OK:return b.OK;case ze.CANCELLED:return b.CANCELLED;case ze.UNKNOWN:return b.UNKNOWN;case ze.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case ze.INTERNAL:return b.INTERNAL;case ze.UNAVAILABLE:return b.UNAVAILABLE;case ze.UNAUTHENTICATED:return b.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case ze.NOT_FOUND:return b.NOT_FOUND;case ze.ALREADY_EXISTS:return b.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return b.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case ze.ABORTED:return b.ABORTED;case ze.OUT_OF_RANGE:return b.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return b.UNIMPLEMENTED;case ze.DATA_LOSS:return b.DATA_LOSS;default:return Y(39323,{code:r})}}(ge=ze||(ze={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Lr(this.inner,((t,n)=>{for(const[s,i]of n)e(s,i)}))}isEmpty(){return jm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=new ve(K.comparator);function $e(){return $v}const w_=new ve(K.comparator);function Yr(...r){let e=w_;for(const t of r)e=e.insert(t.key,t);return e}function T_(r){let e=w_;return r.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Kt(){return xo()}function A_(){return xo()}function xo(){return new Qn((r=>r.toString()),((r,e)=>r.isEqual(e)))}const Yv=new ve(K.comparator),Xv=new De(K.comparator);function ae(...r){let e=Xv;for(const t of r)e=e.add(t);return e}const Zv=new De(oe);function ph(){return Zv}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo=null;function eP(r){if(Mo)throw new Error("a TestingHooksSpi instance is already set");Mo=r}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=new mr([4294967295,4294967295],0);function ZC(r){const e=R_().encode(r),t=new Pm;return t.update(e),new Uint8Array(t.digest())}function ep(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new mr([t,n],0),new mr([s,i],0)]}class gh{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Ro(`Invalid padding: ${t}`);if(n<0)throw new Ro(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Ro(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Ro(`Invalid padding when bitmap length is 0: ${t}`);this.p=8*e.length-t,this.S=mr.fromNumber(this.p)}v(e,t,n){let s=e.add(t.multiply(mr.fromNumber(n)));return s.compare(tP)===1&&(s=new mr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.S).toNumber()}D(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.p===0)return!1;const t=ZC(e),[n,s]=ep(t);for(let i=0;i<this.hashCount;i++){const o=this.v(n,s,i);if(!this.D(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new gh(i,s,t);return n.forEach((a=>o.insert(a))),o}insert(e){if(this.p===0)return;const t=ZC(e),[n,s]=ep(t);for(let i=0;i<this.hashCount;i++){const o=this.v(n,s,i);this.C(o)}}C(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Ro extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t,n,s,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Ta.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Hi(ee.min(),s,new ve(oe),$e(),$e(),ae())}}class Ta{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ta(n,t,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t,n,s){this.F=e,this.removedTargetIds=t,this.key=n,this.O=s}}class v_{constructor(e,t){this.targetId=e,this.M=t}}class P_{constructor(e,t,n=Se.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class tp{constructor(e){this.targetId=e,this.N=0,this.L=np(),this.B=Se.EMPTY_BYTE_STRING,this.U=!1,this.k=!0}get current(){return this.U}get resumeToken(){return this.B}get q(){return this.N!==0}get $(){return this.k}K(e){e.approximateByteSize()>0&&(this.k=!0,this.B=e)}W(){let e=ae(),t=ae(),n=ae();return this.L.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:Y(38017,{changeType:i})}})),new Ta(this.B,this.U,e,t,n)}G(){this.k=!1,this.L=np()}j(e,t){this.k=!0,this.L=this.L.insert(e,t)}H(e){this.k=!0,this.L=this.L.remove(e)}J(){this.N+=1}Y(){this.N-=1,q(this.N>=0,3241,{N:this.N,targetId:this.targetId})}Z(){this.k=!0,this.U=!0}}const go="WatchChangeAggregator";class nP{constructor(e){this.X=e,this.ee=new Map,this.te=$e(),this.ne=uu(),this.re=$e(),this.ie=uu(),this.se=new ve(oe)}_e(e){for(const t of e.F)e.O&&e.O.isFoundDocument()?this.oe(t,e.O):this.ae(t,e.key,e.O);for(const t of e.removedTargetIds)this.ae(t,e.key,e.O)}ue(e){this.forEachTarget(e,(t=>{const n=this.ee.get(t);if(n)switch(e.state){case 0:this.ce(t)&&n.K(e.resumeToken);break;case 1:n.Y(),n.q||n.G(),n.K(e.resumeToken);break;case 2:n.Y(),n.q||this.removeTarget(t);break;case 3:this.ce(t)&&(n.Z(),n.K(e.resumeToken));break;case 4:this.ce(t)&&(this.le(t),n.K(e.resumeToken));break;default:Y(56790,{state:e.state})}else U(go,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ee.forEach(((n,s)=>{this.ce(s)&&t(s)}))}Ee(e){var t;return Pn(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:fh(e)}he(e){const t=e.targetId,n=e.M.count,s=this.Te(t);if(s){const i=s.target;if(this.Ee(i))if(n===0){const o=new K(Pn(i)?ue.fromString(i.getPipelineDocuments()[0]):i.path);this.ae(t,o,Le.newNoDocument(o,ee.min()))}else q(n===1,20013,"Single document existence filter with count: "+n);else{const o=this.Pe(t);if(o!==n){const a=this.Ie(e),u=a?this.Re(a,e,o):1;if(u!==0){this.le(t);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.se=this.se.insert(t,l)}Mo==null||Mo.Ae((function(B,d,C,g,D){var H,Z,re;const N={localCacheCount:B,existenceFilterCount:d.count,databaseId:C.database,projectId:C.projectId},V=d.unchangedNames;return V&&(N.bloomFilter={applied:D===0,hashCount:(V==null?void 0:V.hashCount)??0,bitmapLength:((Z=(H=V==null?void 0:V.bits)==null?void 0:H.bitmap)==null?void 0:Z.length)??0,padding:((re=V==null?void 0:V.bits)==null?void 0:re.padding)??0,mightContain:de=>(g==null?void 0:g.mightContain(de))??!1}),N})(o,e.M,this.X.Ve(),a,u))}}}}Ie(e){const t=e.M.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=Un(n).toUint8Array()}catch(u){if(u instanceof zm)return nt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new gh(o,s,i)}catch(u){return nt(u instanceof Ro?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.p===0?null:a}Re(e,t,n){return t.M.count===n-this.de(e,t.targetId)?0:2}de(e,t){const n=this.X.getRemoteKeysForTarget(t);let s=0;return n.forEach((i=>{const o=this.X.Ve(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.ae(t,i,null),s++)})),s}fe(e){const t=new Map;this.ee.forEach(((i,o)=>{const a=this.Te(o);if(a){if(i.current&&this.Ee(a.target)){const u=Pn(a.target)?ue.fromString(a.target.getPipelineDocuments()[0]):a.target.path,l=new K(u);this.me(l).has(o)||this.pe(o,l)||this.ae(o,l,Le.newNoDocument(l,e))}i.$&&(t.set(o,i.W()),i.G())}}));let n=ae();this.ie.forEach(((i,o)=>{let a=!0;o.forEachWhile((u=>{const l=this.Te(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(n=n.add(i))})),this.te.forEach(((i,o)=>o.setReadTime(e))),this.re.forEach(((i,o)=>o.setReadTime(e)));const s=new Hi(e,t,this.se,this.te,this.re,n);return this.te=$e(),this.ne=uu(),this.re=$e(),this.ie=uu(),this.se=new ve(oe),s}oe(e,t){const n=this.ee.get(e);if(!n||!this.ce(e))return void U(go,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.pe(e,t.key)?2:0;n.j(t.key,s),Pn(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t.key,t):this.te=this.te.insert(t.key,t),this.ne=this.ne.insert(t.key,this.me(t.key).add(e)),this.ie=this.ie.insert(t.key,this.ge(t.key).add(e))}ae(e,t,n){const s=this.ee.get(e);s&&this.ce(e)?(this.pe(e,t)?s.j(t,1):s.H(t),this.ie=this.ie.insert(t,this.ge(t).delete(e)),this.ie=this.ie.insert(t,this.ge(t).add(e)),n&&(Pn(this.Te(e).target)&&this.Te(e).target.getPipelineFlavor()!=="exact"?this.re=this.re.insert(t,n):this.te=this.te.insert(t,n))):U(go,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.ee.delete(e)}Pe(e){const t=this.ee.get(e);if(!t)return 0;const n=t.W();return this.X.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}J(e){let t=this.ee.get(e);t||(U(go,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new tp(e),this.ee.set(e,t)),t.J()}ge(e){let t=this.ie.get(e);return t||(t=new De(oe),this.ie=this.ie.insert(e,t)),t}me(e){let t=this.ne.get(e);return t||(t=new De(oe),this.ne=this.ne.insert(e,t)),t}ce(e){const t=this.Te(e)!==null;return t||U(go,"Detected inactive target",e),t}Te(e){const t=this.ee.get(e);return t===void 0||t.q?null:this.X.ye(e)}le(e){this.ee.set(e,new tp(e)),this.X.getRemoteKeysForTarget(e).forEach((t=>{this.ae(e,t,null)}))}pe(e,t){return this.X.getRemoteKeysForTarget(e).has(t)}}function uu(){return new ve(K.comparator)}function np(){return new ve(K.comparator)}const rP={asc:"ASCENDING",desc:"DESCENDING"},sP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iP={and:"AND",or:"OR"};class oP{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function uB(r,e){return r.useProto3Json||wa(e)?e:{value:e}}function Bs(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mh(r){const e=Gn(r);return new _e(e.seconds,e.nanos)}function b_(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Tu(r,e){return Bs(r,e.toTimestamp())}function Ke(r){return q(!!r,49232),ee.fromTimestamp(mh(r))}function _h(r,e){return cB(r,e).canonicalString()}function cB(r,e){const t=(function(s){return new ue(["projects",s.projectId,"databases",s.database])})(r).child("documents");return e===void 0?t:t.child(e)}function S_(r){const e=ue.fromString(r);return q(U_(e),10190,{key:e.toString()}),e}function mi(r,e){return _h(r.databaseId,e.path)}function Cn(r,e){const t=S_(e);if(t.get(1)!==r.databaseId.projectId)throw new M(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new M(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new K(F_(t))}function N_(r,e){return _h(r.databaseId,e)}function O_(r){const e=S_(r);return e.length===4?ue.emptyPath():F_(e)}function lB(r){return new ue(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function F_(r){return q(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function rp(r,e,t){return{name:mi(r,e),fields:t.value.mapValue.fields}}function wc(r,e,t){const n=Cn(r,e.name),s=Ke(e.updateTime),i=e.createTime?Ke(e.createTime):ee.min(),o=new et({mapValue:{fields:e.fields}}),a=Le.newFoundDocument(n,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function aP(r,e){return"found"in e?(function(n,s){q(!!s.found,43571),s.found.name,s.found.updateTime;const i=Cn(n,s.found.name),o=Ke(s.found.updateTime),a=s.found.createTime?Ke(s.found.createTime):ee.min(),u=new et({mapValue:{fields:s.found.fields}});return Le.newFoundDocument(i,o,a,u)})(r,e):"missing"in e?(function(n,s){q(!!s.missing,3894),q(!!s.readTime,22933);const i=Cn(n,s.missing),o=Ke(s.readTime);return Le.newNoDocument(i,o)})(r,e):Y(7234,{result:e})}function uP(r,e){let t;if("targetChange"in e){e.targetChange;const n=(function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y(39313,{state:l})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(l,B){return l.useProto3Json?(q(B===void 0||typeof B=="string",58123),Se.fromBase64String(B||"")):(q(B===void 0||B instanceof Buffer||B instanceof Uint8Array,16193),Se.fromUint8Array(B||new Uint8Array))})(r,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(l){const B=l.code===void 0?b.UNKNOWN:y_(l.code);return new M(B,l.message||"")})(o);t=new P_(n,s,i,a||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=Cn(r,n.document.name),i=Ke(n.document.updateTime),o=n.document.createTime?Ke(n.document.createTime):ee.min(),a=new et({mapValue:{fields:n.document.fields}}),u=Le.newFoundDocument(s,i,o,a),l=n.targetIds||[],B=n.removedTargetIds||[];t=new wu(l,B,u.key,u)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=Cn(r,n.document),i=n.readTime?Ke(n.readTime):ee.min(),o=Le.newNoDocument(s,i),a=n.removedTargetIds||[];t=new wu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=Cn(r,n.document),i=n.removedTargetIds||[];t=new wu([],i,s,null)}else{if(!("filter"in e))return Y(11601,{we:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new Wv(s,i),a=n.targetId;t=new v_(a,o)}}return t}function sa(r,e){let t;if(e instanceof Mi)t={update:rp(r,e.key,e.value)};else if(e instanceof Gi)t={delete:mi(r,e.key)};else if(e instanceof Kn)t={update:rp(r,e.key,e.data),updateMask:fP(e.fieldMask)};else{if(!(e instanceof lh))return Y(16599,{be:e.type});t={verify:mi(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(i,o){const a=o.transform;if(a instanceof Bi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof _s)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Es)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Is)return{fieldPath:o.field.canonicalString(),increment:a.h};if(a instanceof hi)return{fieldPath:o.field.canonicalString(),minimum:a.h};if(a instanceof di)return{fieldPath:o.field.canonicalString(),maximum:a.h};throw Y(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:Tu(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y(27497)})(r,e.precondition)),t}function BB(r,e){const t=e.currentDocument?(function(i){return i.updateTime!==void 0?Me.updateTime(Ke(i.updateTime)):i.exists!==void 0?Me.exists(i.exists):Me.none()})(e.currentDocument):Me.none(),n=e.updateTransforms?e.updateTransforms.map((s=>(function(o,a){let u=null;if("setToServerValue"in a)q(a.setToServerValue==="REQUEST_TIME",16630,{proto:a}),u=new Bi;else if("appendMissingElements"in a){const B=a.appendMissingElements.values||[];u=new _s(B)}else if("removeAllFromArray"in a){const B=a.removeAllFromArray.values||[];u=new Es(B)}else"increment"in a?u=new Is(o,a.increment):"minimum"in a?u=new hi(o,a.minimum):"maximum"in a?u=new di(o,a.maximum):Y(16584,{proto:a});const l=Je.fromServerFormat(a.fieldPath);return new vs(l,u)})(r,s))):[];if(e.update){e.update.name;const s=Cn(r,e.update.name),i=new et({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(u){const l=u.fieldPaths||[];return new St(l.map((B=>Je.fromServerFormat(B))))})(e.updateMask);return new Kn(s,i,o,t,n)}return new Mi(s,i,t,n)}if(e.delete){const s=Cn(r,e.delete);return new Gi(s,t)}if(e.verify){const s=Cn(r,e.verify);return new lh(s,t)}return Y(1463,{proto:e})}function cP(r,e){return r&&r.length>0?(q(e!==void 0,14353),r.map((t=>(function(s,i){let o=s.updateTime?Ke(s.updateTime):Ke(i);return o.isEqual(ee.min())&&(o=Ke(i)),new Sv(o,s.transformResults||[])})(t,e)))):[]}function L_(r,e){return{documents:[N_(r,e.path)]}}function Tc(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=N_(r,s);const i=(function(l){if(l.length!==0)return G_(ye.create(l,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(l){if(l.length!==0)return l.map((B=>(function(C){return{field:lr(C.field),direction:BP(C.dir)}})(B)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=uB(r,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=(function(l){return{before:l.inclusive,values:l.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(l){return{before:!l.inclusive,values:l.position}})(e.endAt)),{Se:t,parent:s}}function V_(r,e,t,n){const{Se:s,parent:i}=Tc(r,e),o={},a=[];let u=0;return t.forEach((l=>{const B=n?l.alias:"aggregate_"+u++;o[B]=l.alias,l.aggregateType==="count"?a.push({alias:B,count:{}}):l.aggregateType==="avg"?a.push({alias:B,avg:{field:lr(l.fieldPath)}}):l.aggregateType==="sum"&&a.push({alias:B,sum:{field:lr(l.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:s.structuredQuery},parent:s.parent},ve:o,parent:i}}function k_(r){let e=O_(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){q(n===1,65062);const B=t.from[0];B.allDescendants?s=B.collectionId:e=e.child(B.collectionId)}let i=[];t.where&&(i=(function(d){const C=M_(d);return C instanceof ye&&Bh(C)?C.getFilters():[C]})(t.where));let o=[];t.orderBy&&(o=(function(d){return d.map((C=>(function(D){return new ra(Ys(D.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(C)))})(t.orderBy));let a=null;t.limit&&(a=(function(d){let C;return C=typeof d=="object"?d.value:d,wa(C)?null:C})(t.limit));let u=null;t.startAt&&(u=(function(d){const C=!!d.before,g=d.values||[];return new Rr(g,C)})(t.startAt));let l=null;return t.endAt&&(l=(function(d){const C=!d.before,g=d.values||[];return new Rr(g,C)})(t.endAt)),m_(e,s,o,i,a,"F",u,l)}function lP(r,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function x_(r,e){return{structuredPipeline:{pipeline:{stages:e.stages.map((t=>t._toProto(r)))}}}}function M_(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Ys(t.unaryFilter.field);return fe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ys(t.unaryFilter.field);return fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ys(t.unaryFilter.field);return fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ys(t.unaryFilter.field);return fe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}})(r):r.fieldFilter!==void 0?(function(t){return fe.create(Ys(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return ye.create(t.compositeFilter.filters.map((n=>M_(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y(1026)}})(t.compositeFilter.op))})(r):Y(30097,{filter:r})}function BP(r){return rP[r]}function hP(r){return sP[r]}function dP(r){return iP[r]}function lr(r){return{fieldPath:r.canonicalString()}}function Ys(r){return Je.fromServerFormat(r.fieldPath)}function G_(r){return r instanceof fe?(function(t){if(t.op==="=="){if(kt(t.value))return{unaryFilter:{field:lr(t.field),op:"IS_NAN"}};if(Ht(t.value))return{unaryFilter:{field:lr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(kt(t.value))return{unaryFilter:{field:lr(t.field),op:"IS_NOT_NAN"}};if(Ht(t.value))return{unaryFilter:{field:lr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:lr(t.field),op:hP(t.op),value:t.value}}})(r):r instanceof ye?(function(t){const n=t.getFilters().map((s=>G_(s)));return n.length===1?n[0]:{compositeFilter:{op:dP(t.op),filters:n}}})(r):Y(54877,{filter:r})}function fP(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function U_(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function H_(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}function ia(r,e){const t={fields:{}};return e.forEach(((n,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=n._toProto(r)})),{mapValue:t}}function q_(r){return{stringValue:r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(r){return new oP(r,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pt(Se.fromBase64String(e))}catch(t){throw new M(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Pt(Se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Rs(e,Pt._jsonSchema))return Pt.fromBase64String(e.bytes)}}Pt._jsonSchemaVersion="firestore/bytes/1.0",Pt._jsonSchema={type:Ye("string",Pt._jsonSchemaVersion),bytes:Ye("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function j_(){return new bs(an)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Yt._jsonSchemaVersion}}static fromJSON(e){if(Rs(e,Yt._jsonSchema))return new Yt(e.latitude,e.longitude)}}Yt._jsonSchemaVersion="firestore/geoPoint/1.0",Yt._jsonSchema={type:Ye("string",Yt._jsonSchemaVersion),latitude:Ye("number"),longitude:Ye("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class K_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(at.UNAUTHENTICATED)))}shutdown(){}}class CP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class pP{constructor(e){this.De=e,this.currentUser=at.UNAUTHENTICATED,this.xe=0,this.forceRefresh=!1,this.auth=null}start(e,t){q(this.Ce===void 0,42304);let n=this.xe;const s=u=>this.xe!==n?(n=this.xe,t(u)):Promise.resolve();let i=new lt;this.Ce=()=>{this.xe++,this.currentUser=this.Fe(),i.resolve(),i=new lt,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},a=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.Ce&&(this.auth.addAuthTokenListener(this.Ce),o())};this.De.onInit((u=>a(u))),setTimeout((()=>{if(!this.auth){const u=this.De.getImmediate({optional:!0});u?a(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new lt)}}),0),o()}getToken(){const e=this.xe,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.xe!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(q(typeof n.accessToken=="string",31837,{Oe:n}),new J_(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.Ce&&this.auth.removeAuthTokenListener(this.Ce),this.Ce=void 0}Fe(){const e=this.auth&&this.auth.getUid();return q(e===null||typeof e=="string",2055,{Me:e}),new at(e)}}class gP{constructor(e,t,n){this.Ne=e,this.Le=t,this.Be=n,this.type="FirstParty",this.user=at.FIRST_PARTY,this.Ue=new Map}ke(){return this.Be?this.Be():null}get headers(){this.Ue.set("X-Goog-AuthUser",this.Ne);const e=this.ke();return e&&this.Ue.set("Authorization",e),this.Le&&this.Ue.set("X-Goog-Iam-Authorization-Token",this.Le),this.Ue}}class mP{constructor(e,t,n){this.Ne=e,this.Le=t,this.Be=n}getToken(){return Promise.resolve(new gP(this.Ne,this.Le,this.Be))}start(e,t){e.enqueueRetryable((()=>t(at.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class hB{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _P{constructor(e,t){this.qe=t,this.forceRefresh=!1,this.appCheck=null,this.$e=null,this.Ke=null,xe(e)&&e.settings.appCheckToken&&(this.Ke=e.settings.appCheckToken)}start(e,t){q(this.Ce===void 0,3512);const n=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.$e;return this.$e=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.Ce=i=>{e.enqueueRetryable((()=>n(i)))};const s=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.Ce&&this.appCheck.addTokenListener(this.Ce)};this.qe.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.qe.getImmediate({optional:!0});i?s(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.Ke)return Promise.resolve(new hB(this.Ke));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(q(typeof t.token=="string",44558,{tokenResult:t}),this.$e=t.token,new hB(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.Ce&&this.appCheck.removeTokenListener(this.Ce),this.Ce=void 0}}class EP{getToken(){return Promise.resolve(new hB(""))}invalidateToken(){}start(e,t){}shutdown(){}}function z_(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{Qe(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="ConnectivityMonitor";class ip{constructor(){this.We=()=>this.Ge(),this.ze=()=>this.je(),this.He=[],this.Je()}Qe(e){this.He.push(e)}shutdown(){window.removeEventListener("online",this.We),window.removeEventListener("offline",this.ze)}Je(){window.addEventListener("online",this.We),window.addEventListener("offline",this.ze)}Ge(){U(sp,"Network connectivity changed: AVAILABLE");for(const e of this.He)e(0)}je(){U(sp,"Network connectivity changed: UNAVAILABLE");for(const e of this.He)e(1)}static Ye(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cu=null;function dB(){return cu===null?cu=(function(){return 268435456+Math.round(2147483648*Math.random())})():cu++,"0x"+cu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="RestConnection",DP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class yP{get Ze(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Xe=t+"://"+e.host,this.et=`projects/${n}/databases/${s}`,this.tt=this.databaseId.database===ta?`project_id=${n}`:`project_id=${n}&database_id=${s}`}nt(e,t,n,s,i){const o=dB(),a=this.rt(e,t.toUriEncodedString());U(Fl,`Sending RPC '${e}' ${o}:`,a,n);const u={"google-cloud-resource-prefix":this.et,"x-goog-request-params":this.tt};this.it(u,s,i);const{host:l}=new URL(a),B=Si(l);return this.st(e,a,u,n,B).then((d=>(U(Fl,`Received RPC '${e}' ${o}: `,d),d)),(d=>{throw nt(Fl,`RPC '${e}' ${o} failed with error: `,d,"url: ",a,"request:",n),d}))}_t(e,t,n,s,i,o){return this.nt(e,t,n,s,i)}it(e,t,n){if(e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ki})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),n&&n.headers.forEach(((s,i)=>e[i]=s)),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}rt(e,t){const n=DP[e];let s=`${this.Xe}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e){this.ot=e.ot,this.ut=e.ut}ct(e){this.lt=e}Et(e){this.ht=e}Tt(e){this.Pt=e}onMessage(e){this.It=e}close(){this.ut()}send(e){this.ot(e)}Rt(){this.lt()}At(){this.ht()}Vt(e){this.Pt(e)}dt(e){this.It(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection",mo=(r,e,t)=>{r.listen(e,(n=>{try{t(n)}catch(s){setTimeout((()=>{throw s}),0)}}))};class ni extends yP{constructor(e){super(e),this.ft=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static gt(){if(!ni.yt){const e=Om();mo(e,Nm.STAT_EVENT,(t=>{t.stat===$l.PROXY?U(ft,"STAT_EVENT: detected buffering proxy"):t.stat===$l.NOPROXY&&U(ft,"STAT_EVENT: detected no buffering proxy")})),ni.yt=!0}}st(e,t,n,s,i){const o=dB();return new Promise(((a,u)=>{const l=new bm;l.setWithCredentials(!0),l.listenOnce(Sm.COMPLETE,(()=>{try{switch(l.getLastErrorCode()){case Iu.NO_ERROR:const d=l.getResponseJson();U(ft,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),a(d);break;case Iu.TIMEOUT:U(ft,`RPC '${e}' ${o} timed out`),u(new M(b.DEADLINE_EXCEEDED,"Request time out"));break;case Iu.HTTP_ERROR:const C=l.getStatus();if(U(ft,`RPC '${e}' ${o} failed with status:`,C,"response text:",l.getResponseText()),C>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const D=g==null?void 0:g.error;if(D&&D.status&&D.message){const N=(function(H){const Z=H.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(Z)>=0?Z:b.UNKNOWN})(D.status);u(new M(N,D.message))}else u(new M(b.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new M(b.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{wt:e,streamId:o,bt:l.getLastErrorCode(),St:l.getLastError()})}}finally{U(ft,`RPC '${e}' ${o} completed.`)}}));const B=JSON.stringify(s);U(ft,`RPC '${e}' ${o} sending request:`,s),l.send(t,"POST",B,n,15)}))}vt(e,t,n){const s=dB(),i=[this.Xe,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.useFetchStreams=!0),this.it(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const l=i.join("");U(ft,`Creating RPC '${e}' stream ${s}: ${l}`,a);const B=o.createWebChannel(l,a);this.Dt(B);let d=!1,C=!1;const g=new wP({ot:D=>{C?U(ft,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(d||(U(ft,`Opening RPC '${e}' stream ${s} transport.`),B.open(),d=!0),U(ft,`RPC '${e}' stream ${s} sending:`,D),B.send(D))},ut:()=>B.close()});return mo(B,Ao.EventType.OPEN,(()=>{C||(U(ft,`RPC '${e}' stream ${s} transport opened.`),g.Rt())})),mo(B,Ao.EventType.CLOSE,(()=>{C||(C=!0,U(ft,`RPC '${e}' stream ${s} transport closed`),g.Vt(),this.xt(B))})),mo(B,Ao.EventType.ERROR,(D=>{C||(C=!0,nt(ft,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),g.Vt(new M(b.UNAVAILABLE,"The operation could not be completed")))})),mo(B,Ao.EventType.MESSAGE,(D=>{var N;if(!C){const V=D.data[0];q(!!V,16349);const H=V,Z=(H==null?void 0:H.error)||((N=H[0])==null?void 0:N.error);if(Z){U(ft,`RPC '${e}' stream ${s} received error:`,Z);const re=Z.status;let de=(function(T){const E=ze[T];if(E!==void 0)return y_(E)})(re),Ce=Z.message;re==="NOT_FOUND"&&Ce.includes("database")&&Ce.includes("does not exist")&&Ce.includes(this.databaseId.database)&&nt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),de===void 0&&(de=b.INTERNAL,Ce="Unknown error status: "+re+" with message "+Z.message),C=!0,g.Vt(new M(de,Ce)),B.close()}else U(ft,`RPC '${e}' stream ${s} received:`,V),g.dt(V)}})),ni.gt(),setTimeout((()=>{g.At()}),0),g}terminate(){this.ft.forEach((e=>e.close())),this.ft=[]}Dt(e){this.ft.push(e)}xt(e){this.ft=this.ft.filter((t=>t===e))}it(e,t,n){super.it(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Fm()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(r){return new ni(r)}ni.yt=!1;class Eh{constructor(e,t,n=1e3,s=1.5,i=6e4){this.Ct=e,this.timerId=t,this.Ft=n,this.Ot=s,this.Mt=i,this.Nt=0,this.Lt=null,this.Bt=Date.now(),this.reset()}reset(){this.Nt=0}Ut(){this.Nt=this.Mt}kt(e){this.cancel();const t=Math.floor(this.Nt+this.qt()),n=Math.max(0,Date.now()-this.Bt),s=Math.max(0,t-n);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Nt} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Lt=this.Ct.enqueueAfterDelay(this.timerId,s,(()=>(this.Bt=Date.now(),e()))),this.Nt*=this.Ot,this.Nt<this.Ft&&(this.Nt=this.Ft),this.Nt>this.Mt&&(this.Nt=this.Mt)}$t(){this.Lt!==null&&(this.Lt.skipDelay(),this.Lt=null)}cancel(){this.Lt!==null&&(this.Lt.cancel(),this.Lt=null)}qt(){return(Math.random()-.5)*this.Nt}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="PersistentStream";class Q_{constructor(e,t,n,s,i,o,a,u){this.Ct=e,this.Kt=n,this.Qt=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Wt=0,this.Gt=null,this.zt=null,this.stream=null,this.jt=0,this.Ht=new Eh(e,t)}Jt(){return this.state===1||this.state===5||this.Yt()}Yt(){return this.state===2||this.state===3}start(){this.jt=0,this.state!==4?this.auth():this.Zt()}async stop(){this.Jt()&&await this.close(0)}Xt(){this.state=0,this.Ht.reset()}en(){this.Yt()&&this.Gt===null&&(this.Gt=this.Ct.enqueueAfterDelay(this.Kt,6e4,(()=>this.tn())))}nn(e){this.rn(),this.stream.send(e)}async tn(){if(this.Yt())return this.close(0)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}sn(){this.zt&&(this.zt.cancel(),this.zt=null)}async close(e,t){this.rn(),this.sn(),this.Ht.cancel(),this.Wt++,e!==4?this.Ht.reset():t&&t.code===b.RESOURCE_EXHAUSTED?(je(t.toString()),je("Using maximum backoff delay to prevent overloading the backend."),this.Ht.Ut()):t&&t.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this._n(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Tt(t)}_n(){}auth(){this.state=1;const e=this.an(this.Wt),t=this.Wt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.Wt===t&&this.un(n,s)}),(n=>{e((()=>{const s=new M(b.UNKNOWN,"Fetching auth token failed: "+n.message);return this.cn(s)}))}))}un(e,t){const n=this.an(this.Wt);this.stream=this.En(e,t),this.stream.ct((()=>{n((()=>this.listener.ct()))})),this.stream.Et((()=>{n((()=>(this.state=2,this.zt=this.Ct.enqueueAfterDelay(this.Qt,1e4,(()=>(this.Yt()&&(this.state=3),Promise.resolve()))),this.listener.Et())))})),this.stream.Tt((s=>{n((()=>this.cn(s)))})),this.stream.onMessage((s=>{n((()=>++this.jt==1?this.hn(s):this.onNext(s)))}))}Zt(){this.state=5,this.Ht.kt((async()=>{this.state=0,this.start()}))}cn(e){return U(op,`close with error: ${e}`),this.stream=null,this.close(4,e)}an(e){return t=>{this.Ct.enqueueAndForget((()=>this.Wt===e?t():(U(op,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class AP extends Q_{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}En(e,t){return this.connection.vt("Listen",e,t)}hn(e){return this.onNext(e)}onNext(e){this.Ht.reset();const t=uP(this.serializer,e),n=(function(i){if(!("targetChange"in i))return ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Ke(o.readTime):ee.min()})(e);return this.listener.Tn(t,n)}Pn(e){const t={};t.database=lB(this.serializer),t.addTarget=(function(i,o){let a;const u=o.target;if(a=Pn(u)?{pipelineQuery:x_(i,u)}:fh(u)?{documents:L_(i,u)}:{query:Tc(i,u).Se},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=b_(i,o.resumeToken);const l=uB(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=Bs(i,o.snapshotVersion.toTimestamp());const l=uB(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a})(this.serializer,e);const n=lP(this.serializer,e);n&&(t.labels=n),this.nn(t)}In(e){const t={};t.database=lB(this.serializer),t.removeTarget=e,this.nn(t)}}class RP extends Q_{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get Rn(){return this.jt>0}start(){this.lastStreamToken=void 0,super.start()}_n(){this.Rn&&this.An([])}En(e,t){return this.connection.vt("Write",e,t)}hn(e){return q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,q(!e.writeResults||e.writeResults.length===0,55816),this.listener.Vn()}onNext(e){q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.Ht.reset();const t=cP(e.writeResults,e.commitTime),n=Ke(e.commitTime);return this.listener.dn(n,t)}fn(){const e={};e.database=lB(this.serializer),this.nn(e)}An(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>sa(this.serializer,n)))};this.nn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{}class PP extends vP{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.mn=!1}pn(){if(this.mn)throw new M(b.FAILED_PRECONDITION,"The client has already been terminated.")}nt(e,t,n,s){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.nt(e,cB(t,n),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(b.UNKNOWN,i.toString())}))}_t(e,t,n,s,i){return this.pn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection._t(e,cB(t,n),s,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(b.UNKNOWN,o.toString())}))}terminate(){this.mn=!0,this.connection.terminate()}}function bP(r,e,t,n){return new PP(r,e,t,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP="ComponentProvider",ap=new Map;function NP(r,e,t,n,s){return new yv(r,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,z_(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n,s._customHeaders,s.grpcFlowControlWindow)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},W_=41943040;class Ct{static withCacheSize(e){return new Ct(e,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}Ct.DEFAULT_COLLECTION_PERCENTILE=10,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ct.DEFAULT=new Ct(W_,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ct.DISABLED=new Ct(-1,0,0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.gn(n),this.yn=n=>t.writeSequenceNumber(n))}gn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.yn&&this.yn(e),e}}Nt.wn=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Y_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(r){if(r.code!==b.FAILED_PRECONDITION||r.message!==$_)throw r;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P(((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):P.reject(t)}static resolve(e){return new P(((t,n)=>{t(e)}))}static reject(e){return new P(((t,n)=>{n(e)}))}static waitFor(e){return new P(((t,n)=>{let s=0,i=0,o=!1;e.forEach((a=>{++s,a.next((()=>{++i,o&&i===s&&t()}),(u=>n(u)))})),o=!0,i===s&&t()}))}static or(e){let t=P.resolve(!1);for(const n of e)t=t.next((s=>s?P.resolve(s):n()));return t}static forEach(e,t){const n=[];return e.forEach(((s,i)=>{n.push(t.call(this,s,i))})),this.waitFor(n)}static mapArray(e,t){return new P(((n,s)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const l=u;t(e[l]).next((B=>{o[l]=B,++a,a===i&&n(o)}),(B=>s(B)))}}))}static doWhile(e,t){return new P(((n,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):n()};i()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="SimpleDb";class Ac{static open(e,t,n,s){try{return new Ac(t,e.transaction(s,n))}catch(i){throw new Go(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.bn=new lt,this.transaction.oncomplete=()=>{this.bn.resolve()},this.transaction.onabort=()=>{t.error?this.bn.reject(new Go(e,t.error)):this.bn.resolve()},this.transaction.onerror=n=>{const s=Ih(n.target.error);this.bn.reject(new Go(e,s))}}get Sn(){return this.bn.promise}abort(e){e&&this.bn.reject(e),this.aborted||(U(Ut,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}vn(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new FP(t)}}class pn{static delete(e){return U(Ut,"Removing database:",e),Xr(sg().indexedDB.deleteDatabase(e)).toPromise()}static Ye(){if(!hg())return!1;if(pn.Dn())return!0;const e=tt(),t=pn.xn(e),n=0<t&&t<10,s=X_(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static Dn(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static Cn(e,t){return e.store(t)}static xn(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.Fn=n,this.On=null,pn.xn(tt())===12.2&&je("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async Mn(e){return this.db||(U(Ut,"Opening database:",this.name),this.db=await new Promise(((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new Go(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new M(b.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new M(b.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new Go(e,o))},s.onupgradeneeded=i=>{U(Ut,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.Fn.Nn(o,s.transaction,i.oldVersion,this.version).next((()=>{U(Ut,"Database upgrade to version "+this.version+" complete")}))}}))),this.Ln&&(this.db.onversionchange=t=>this.Ln(t)),this.db}Bn(e){this.Ln=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.Mn(e);const a=Ac.open(this.db,e,i?"readonly":"readwrite",n),u=s(a).next((l=>(a.vn(),l))).catch((l=>(a.abort(l),P.reject(l)))).toPromise();return u.catch((()=>{})),await a.Sn,u}catch(a){const u=a,l=u.name!=="FirebaseError"&&o<3;if(U(Ut,"Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function X_(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class OP{constructor(e){this.Un=e,this.kn=!1,this.qn=null}get isDone(){return this.kn}get $n(){return this.qn}set cursor(e){this.Un=e}done(){this.kn=!0}Kn(e){this.qn=e}delete(){return Xr(this.Un.delete())}}class Go extends M{constructor(e,t){super(b.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function kr(r){return r.name==="IndexedDbTransactionError"}class FP{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(U(Ut,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(U(Ut,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Xr(n)}add(e){return U(Ut,"ADD",this.store.name,e,e),Xr(this.store.add(e))}get(e){return Xr(this.store.get(e)).next((t=>(t===void 0&&(t=null),U(Ut,"GET",this.store.name,e,t),t)))}delete(e){return U(Ut,"DELETE",this.store.name,e),Xr(this.store.delete(e))}count(){return U(Ut,"COUNT",this.store.name),Xr(this.store.count())}Qn(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new P(((o,a)=>{i.onerror=u=>{a(u.target.error)},i.onsuccess=u=>{o(u.target.result)}}))}{const i=this.cursor(n),o=[];return this.Wn(i,((a,u)=>{o.push(u)})).next((()=>o))}}Gn(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new P(((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}}))}zn(e,t){U(Ut,"DELETE ALL",this.store.name);const n=this.options(e,t);n.jn=!1;const s=this.cursor(n);return this.Wn(s,((i,o,a)=>a.delete()))}Hn(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.Wn(s,t)}Jn(e){const t=this.cursor({});return new P(((n,s)=>{t.onerror=i=>{const o=Ih(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next((a=>{a?o.continue():n()})):n()}}))}Wn(e,t){const n=[];return new P(((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const u=new OP(a),l=t(a.primaryKey,a.value,u);if(l instanceof P){const B=l.catch((d=>(u.done(),P.reject(d))));n.push(B)}u.isDone?s():u.$n===null?a.continue():a.continue(u.$n)}})).next((()=>P.waitFor(n)))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.jn?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Xr(r){return new P(((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=Ih(n.target.error);t(s)}}))}let cp=!1;function Ih(r){const e=pn.xn(tt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new M("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return cp||(cp=!0,setTimeout((()=>{throw n}),0)),n}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="LruGarbageCollector",Z_=1048576;function Bp([r,e],[t,n]){const s=oe(r,t);return s===0?oe(e,n):s}class LP{constructor(e){this.Yn=e,this.buffer=new De(Bp),this.Zn=0}Xn(){return++this.Zn}er(e){const t=[e,this.Xn()];if(this.buffer.size<this.Yn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Bp(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class eE{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.nr(6e4)}stop(){this.tr&&(this.tr.cancel(),this.tr=null)}get started(){return this.tr!==null}nr(e){U(lp,`Garbage collection scheduled in ${e}ms`),this.tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){kr(t)?U(lp,"Ignoring IndexedDB error during garbage collection: ",t):await Vr(t)}await this.nr(3e5)}))}}class VP{constructor(e,t){this.rr=e,this.params=t}calculateTargetCount(e,t){return this.rr.ir(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Nt.wn);const n=new LP(t);return this.rr.forEachTarget(e,(s=>n.er(s.sequenceNumber))).next((()=>this.rr.sr(e,(s=>n.er(s))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.rr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.rr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(up)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),up):this._r(e,t)))}getCacheSize(e){return this.rr.getCacheSize(e)}_r(e,t){let n,s,i,o,a,u,l;const B=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((d=>(d>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s)))).next((d=>(n=d,a=Date.now(),this.removeTargets(e,n,t)))).next((d=>(i=d,u=Date.now(),this.removeOrphanedDocuments(e,n)))).next((d=>(l=Date.now(),Ws()<=he.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-B}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(u-a)+`ms
	Removed ${d} documents in `+(l-u)+`ms
Total Duration: ${l-B}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d}))))}}function tE(r,e){return new VP(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="firestore.googleapis.com",hp=!0;class dp{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new M(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nE,this.ssl=hp}else this.host=e.host,this.ssl=e.ssl??hp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=W_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Z_)throw new M(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(Jm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=z_(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new M(b.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new M(b.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new M(b.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new M(b.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&(function(n,s){if(n===s)return!0;if(!n||!s)return!1;const i=Object.keys(n),o=Object.keys(s);if(i.length!==o.length)return!1;for(const a of i)if(n[a]!==s[a])return!1;return!0})(this._customHeaders,e._customHeaders)}}let Aa=class{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new K_;switch(n.type){case"firstParty":return new mP(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=ap.get(t);n&&(U(SP,"Removing Datastore"),ap.delete(t),n.terminate())})(this),Promise.resolve()}};function rE(r,e,t,n={}){var l;r=Be(r,Aa);const s=Si(e),i=r._getSettings(),o={...i,emulatorOptions:r._getEmulatorOptions()},a=`${e}:${t}`;s&&NB(`https://${a}`),i.host!==nE&&i.host!==a&&nt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:a,ssl:s,emulatorOptions:n};if(!Zt(u,o)&&(r._setSettings(u),n.mockUserToken)){let B,d;if(typeof n.mockUserToken=="string")B=n.mockUserToken,d=at.MOCK_USER;else{B=VD(n.mockUserToken,(l=r._app)==null?void 0:l.options.projectId);const C=n.mockUserToken.sub||n.mockUserToken.user_id;if(!C)throw new M(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new at(C)}r._authCredentials=new CP(new J_(B,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new rt(this.firestore,e,this._query)}}class Ie{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ie(this.firestore,e,this._key)}toJSON(){return{type:Ie._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Rs(t,Ie._jsonSchema))return new Ie(e,n||null,new K(ue.fromString(t.referencePath)))}}Ie._jsonSchemaVersion="firestore/documentReference/1.0",Ie._jsonSchema={type:Ye("string",Ie._jsonSchemaVersion),referencePath:Ye("string")};class Xt extends rt{constructor(e,t,n){super(e,t,Ui(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ie(this.firestore,null,new K(e))}withConverter(e){return new Xt(this.firestore,e,this._path)}}function kP(r,e,...t){if(r=ne(r),ih("collection","path",e),r instanceof Aa){const n=ue.fromString(e,...t);return kC(n),new Xt(r,null,n)}{if(!(r instanceof Ie||r instanceof Xt))throw new M(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ue.fromString(e,...t));return kC(n),new Xt(r.firestore,null,n)}}function xP(r,e){if(r=Be(r,Aa),ih("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new M(b.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new rt(r,null,(function(n){return new zn(ue.emptyPath(),n)})(e))}function sE(r,e,...t){if(r=ne(r),arguments.length===1&&(e=gc.newId()),ih("doc","path",e),r instanceof Aa){const n=ue.fromString(e,...t);return VC(n),new Ie(r,null,new K(n))}{if(!(r instanceof Ie||r instanceof Xt))throw new M(b.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ue.fromString(e,...t));return VC(n),new Ie(r.firestore,r instanceof Xt?r.converter:null,new K(n))}}function MP(r,e){return r=ne(r),e=ne(e),(r instanceof Ie||r instanceof Xt)&&(e instanceof Ie||e instanceof Xt)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function Dh(r,e){return r=ne(r),e=ne(e),r instanceof rt&&e instanceof rt&&r.firestore===e.firestore&&I_(r._query,e._query)&&r.converter===e.converter}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Tt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Rs(e,Tt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Tt(e.vectorValues);throw new M(b.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Tt._jsonSchemaVersion="firestore/vectorValue/1.0",Tt._jsonSchema={type:Ye("string",Tt._jsonSchemaVersion),vectorValues:Ye("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=/^__.*__$/;class UP{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Kn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Mi(e,this.data,t,this.fieldTransforms)}}class iE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Kn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function oE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{dataSource:r})}}class Rc{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Rc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePathSegment(e),n}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePath(),n}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return ju(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(oE(this.dataSource)&&GP.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class HP{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ps(e)}createContext(e,t,n,s=!1){return new Rc({dataSource:e,methodName:t,targetDoc:n,path:Je.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ss(r){const e=r._freezeSettings(),t=Ps(r._databaseId);return new HP(r._databaseId,!!e.ignoreUndefinedProperties,t)}function vc(r,e,t,n,s,i={}){const o=r.createContext(i.merge||i.mergeFields?2:0,e,t,s);Sh("Data must be an object, but it was:",o,n);const a=cE(n,o);let u,l;if(i.merge)u=new St(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const B=[];for(const d of i.mergeFields){const C=en(e,d,t);if(!o.contains(C))throw new M(b.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);hE(B,C)||B.push(C)}u=new St(B),l=o.fieldTransforms.filter((d=>u.covers(d.field)))}else u=null,l=o.fieldTransforms;return new UP(new et(a),u,l)}class Ra extends Dn{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ra}}function aE(r,e,t){return new Rc({dataSource:3,targetDoc:e.settings.targetDoc,methodName:r._methodName,arrayElement:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class yh extends Dn{_toFieldTransform(e){return new vs(e.path,new Bi)}isEqual(e){return e instanceof yh}}class wh extends Dn{constructor(e,t){super(e),this.ar=t}_toFieldTransform(e){const t=aE(this,e,!0),n=this.ar.map((i=>mn(i,t))),s=new _s(n);return new vs(e.path,s)}isEqual(e){return e instanceof wh&&Zt(this.ar,e.ar)}}class Th extends Dn{constructor(e,t){super(e),this.ar=t}_toFieldTransform(e){const t=aE(this,e,!0),n=this.ar.map((i=>mn(i,t))),s=new Es(n);return new vs(e.path,s)}isEqual(e){return e instanceof Th&&Zt(this.ar,e.ar)}}class Ah extends Dn{constructor(e,t){super(e),this.ur=t}_toFieldTransform(e){const t=new Is(e.serializer,xi(e.serializer,this.ur));return new vs(e.path,t)}isEqual(e){return e instanceof Ah&&(this.ur===e.ur||Number.isNaN(this.ur)&&Number.isNaN(e.ur))}}class Rh extends Dn{constructor(e,t){super(e),this.ur=t}_toFieldTransform(e){const t=new hi(e.serializer,xi(e.serializer,this.ur));return new vs(e.path,t)}isEqual(e){return e instanceof Rh&&(this.ur===e.ur||Number.isNaN(this.ur)&&Number.isNaN(e.ur))}}class vh extends Dn{constructor(e,t){super(e),this.ur=t}_toFieldTransform(e){const t=new di(e.serializer,xi(e.serializer,this.ur));return new vs(e.path,t)}isEqual(e){return e instanceof vh&&(this.ur===e.ur||Number.isNaN(this.ur)&&Number.isNaN(e.ur))}}function Ph(r,e,t,n){const s=r.createContext(1,e,t);Sh("Data must be an object, but it was:",s,n);const i=[],o=et.empty();Lr(n,((u,l)=>{const B=Nh(e,u,t);l=ne(l);const d=s.childContextForFieldPath(B);if(l instanceof Ra)i.push(B);else{const C=mn(l,d);C!=null&&(i.push(B),o.set(B,C))}}));const a=new St(i);return new iE(o,a,s.fieldTransforms)}function bh(r,e,t,n,s,i){const o=r.createContext(1,e,t),a=[en(e,n,t)],u=[s];if(i.length%2!=0)throw new M(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<i.length;C+=2)a.push(en(e,i[C])),u.push(i[C+1]);const l=[],B=et.empty();for(let C=a.length-1;C>=0;--C)if(!hE(l,a[C])){const g=a[C];let D=u[C];D=ne(D);const N=o.childContextForFieldPath(g);if(D instanceof Ra)l.push(g);else{const V=mn(D,N);V!=null&&(l.push(g),B.set(g,V))}}const d=new St(l);return new iE(B,d,o.fieldTransforms)}function uE(r,e,t,n=!1){return mn(t,r.createContext(n?4:3,e))}function mn(r,e,t){if(BE(r=ne(r)))return Sh("Unsupported field value:",e,r),cE(r,e);if(r instanceof Dn)return(function(s,i){if(!oE(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,i){const o=[];let a=0;for(const u of s){let l=mn(u,i.childContextForArray(a));l==null&&(l={nullValue:"NULL_VALUE"}),o.push(l),a++}return{arrayValue:{values:o}}})(r,e)}return(function(s,i,o){if((s=ne(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return xi(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const a=_e.fromDate(s);return{timestampValue:Bs(i.serializer,a)}}if(s instanceof _e){const a=new _e(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Bs(i.serializer,a)}}if(lE(s)){const a=_e.fromInstant(s),u=new _e(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Bs(i.serializer,u)}}if(s instanceof Yt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Pt)return{bytesValue:b_(i.serializer,s._byteString)};if(s instanceof Ie){const a=i.databaseId,u=s.firestore._databaseId;if(!u.isEqual(a))throw i.createError(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:_h(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof Tt)return(function(u,l){const B=u instanceof Tt?u.toArray():u;return{mapValue:{fields:{[oh]:{stringValue:ah},[ps]:{arrayValue:{values:B.map((C=>{if(typeof C!="number")throw l.createError("VectorValues must only contain numeric values.");return _c(l.serializer,C)}))}}}}}})(s,i);if(H_(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${mc(s)}`)})(r,e)}function cE(r,e){const t={};return jm(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lr(r,((n,s)=>{const i=mn(s,e.childContextForField(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function lE(r){if(typeof r!="object"||r===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&r instanceof Temporal.Instant)return!0;const e=r;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.t=="bigint"}function BE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof _e||r instanceof Yt||r instanceof Pt||r instanceof Ie||r instanceof Dn||r instanceof Tt||lE(r)||H_(r))}function Sh(r,e,t){if(!BE(t)||!Ia(t)){const n=mc(t);throw n==="an object"?e.createError(r+" a custom object"):e.createError(r+" "+n)}}function en(r,e,t){if((e=ne(e))instanceof bs)return e._internalPath;if(typeof e=="string")return Nh(r,e);throw ju("Field path arguments must be of type string or ",r,!1,void 0,t)}const qP=new RegExp("[~\\*/\\[\\]]");function Nh(r,e,t){if(e.search(qP)>=0)throw ju(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new bs(...e.split("."))._internalPath}catch{throw ju(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function ju(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${n}`),o&&(u+=` in document ${s}`),u+=")"),new M(b.INVALID_ARGUMENT,a+r+u)}function hE(r,e){return r.some((t=>t.isEqual(e)))}function dE(r){return typeof r._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const n=et.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const o=e[s];let a;i.nestedOptions&&Ia(o)?a={mapValue:{fields:new Et(i.nestedOptions).getOptionsProto(t,o)}}:o&&(a=mn(o,t)??void 0),a&&n.set(Je.fromServerFormat(i.serverName),a)}}return n}getOptionsProto(e,t,n){const s=this._getKnownOptions(t,e);if(n){const i=new Map(sh(n,((o,a)=>[Je.fromServerFormat(a),o!==void 0?mn(o,e):null])));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(r){return typeof r=="object"&&r!==null&&!!("nullValue"in r&&(r.nullValue===null||r.nullValue==="NULL_VALUE")||"booleanValue"in r&&(r.booleanValue===null||typeof r.booleanValue=="boolean")||"integerValue"in r&&(r.integerValue===null||typeof r.integerValue=="number"||typeof r.integerValue=="string")||"doubleValue"in r&&(r.doubleValue===null||typeof r.doubleValue=="number")||"timestampValue"in r&&(r.timestampValue===null||(function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")})(r.timestampValue))||"stringValue"in r&&(r.stringValue===null||typeof r.stringValue=="string")||"bytesValue"in r&&(r.bytesValue===null||r.bytesValue instanceof Uint8Array)||"referenceValue"in r&&(r.referenceValue===null||typeof r.referenceValue=="string")||"geoPointValue"in r&&(r.geoPointValue===null||(function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")})(r.geoPointValue))||"arrayValue"in r&&(r.arrayValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))})(r.arrayValue))||"mapValue"in r&&(r.mapValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!Ia(t.fields))})(r.mapValue))||"fieldReferenceValue"in r&&(r.fieldReferenceValue===null||typeof r.fieldReferenceValue=="string")||"functionValue"in r&&(r.functionValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))})(r.functionValue))||"pipelineValue"in r&&(r.pipelineValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))})(r.pipelineValue)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(){return new Ra("deleteField")}function KP(){return new yh("serverTimestamp")}function zP(...r){return new wh("arrayUnion",r)}function QP(...r){return new Th("arrayRemove",r)}function WP(r){return new Ah("increment",r)}function $P(r){return new Rh("minimum",r)}function YP(r){return new vh("maximum",r)}function fE(r){return new Tt(r)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(r){let e;return r instanceof Ns?r:(e=Ia(r)?nb(r):r instanceof Array?rb(r):CE(r,void 0),e)}function Ll(r){if(r instanceof Ns)return r;if(r instanceof Tt)return oa(r);if(Array.isArray(r))return oa(fE(r));throw new Error("Unsupported value: "+typeof r)}function Oh(r){return Tv(r)?Au(r):Q(r)}class Ns{constructor(){this._protoValueType="ProtoValue"}add(e){return new x("add",[this,Q(e)],"add")}asBoolean(){if(this instanceof vr)return this;if(this instanceof Fs)return new gE(this);if(this instanceof Os)return new tb(this);if(this instanceof x)return new pE(this);throw new M("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new x("subtract",[this,Q(e)],"subtract")}multiply(e){return new x("multiply",[this,Q(e)],"multiply")}divide(e){return new x("divide",[this,Q(e)],"divide")}mod(e){return new x("mod",[this,Q(e)],"mod")}equal(e){return new x("equal",[this,Q(e)],"equal").asBoolean()}notEqual(e){return new x("not_equal",[this,Q(e)],"notEqual").asBoolean()}lessThan(e){return new x("less_than",[this,Q(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new x("less_than_or_equal",[this,Q(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new x("greater_than",[this,Q(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new x("greater_than_or_equal",[this,Q(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const n=[e,...t].map((s=>Q(s)));return new x("array_concat",[this,...n],"arrayConcat")}arrayContains(e){return new x("array_contains",[this,Q(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new vo(e.map(Q),"arrayContainsAll"):e;return new x("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new vo(e.map(Q),"arrayContainsAny"):e;return new x("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new x("array_reverse",[this])}arrayLength(){return new x("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new vo(e.map(Q),"equalAny"):e;return new x("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new vo(e.map(Q),"notEqualAny"):e;return new x("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new x("exists",[this],"exists").asBoolean()}charLength(){return new x("char_length",[this],"charLength")}like(e){return new x("like",[this,Q(e)],"like").asBoolean()}regexContains(e){return new x("regex_contains",[this,Q(e)],"regexContains").asBoolean()}regexFind(e){return new x("regex_find",[this,Q(e)],"regexFind")}regexFindAll(e){return new x("regex_find_all",[this,Q(e)],"regexFindAll")}regexMatch(e){return new x("regex_match",[this,Q(e)],"regexMatch").asBoolean()}stringContains(e){return new x("string_contains",[this,Q(e)],"stringContains").asBoolean()}startsWith(e){return new x("starts_with",[this,Q(e)],"startsWith").asBoolean()}endsWith(e){return new x("ends_with",[this,Q(e)],"endsWith").asBoolean()}toLower(){return new x("to_lower",[this],"toLower")}toUpper(){return new x("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(Q(e)),new x("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(Q(e)),new x("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(Q(e)),new x("rtrim",t,"rtrim")}type(){return new x("type",[this])}isType(e){return new x("is_type",[this,oa(e)],"isType").asBoolean()}stringConcat(e,...t){const n=[e,...t].map(Q);return new x("string_concat",[this,...n],"stringConcat")}stringIndexOf(e){return new x("string_index_of",[this,Q(e)],"stringIndexOf")}stringRepeat(e){return new x("string_repeat",[this,Q(e)],"stringRepeat")}stringReplaceAll(e,t){return new x("string_replace_all",[this,Q(e),Q(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new x("string_replace_one",[this,Q(e),Q(t)],"stringReplaceOne")}concat(e,...t){const n=[e,...t].map(Q);return new x("concat",[this,...n],"concat")}reverse(){return new x("reverse",[this],"reverse")}arrayFilter(e,t){return new x("array_filter",[this,Q(e),t],"arrayFilter")}arrayTransform(e,t){return new x("array_transform",[this,Q(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,n){return new x("array_transform",[this,Q(e),Q(t),n],"arrayTransformWithIndex")}arraySlice(e,t){const n=[this,Q(e)];return t!==void 0&&n.push(Q(t)),new x("array_slice",n,"arraySlice")}arrayFirst(){return new x("array_first",[this],"arrayFirst")}arrayFirstN(e){return new x("array_first_n",[this,Q(e)],"arrayFirstN")}arrayLast(){return new x("array_last",[this],"arrayLast")}arrayLastN(e){return new x("array_last_n",[this,Q(e)],"arrayLastN")}arrayMaximum(){return new x("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new x("maximum_n",[this,Q(e)],"arrayMaximumN")}arrayMinimum(){return new x("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new x("minimum_n",[this,Q(e)],"arrayMinimumN")}arrayIndexOf(e){return new x("array_index_of",[this,Q(e),Q("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new x("array_index_of",[this,Q(e),Q("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new x("array_index_of_all",[this,Q(e)],"arrayIndexOfAll")}byteLength(){return new x("byte_length",[this],"byteLength")}ceil(){return new x("ceil",[this])}floor(){return new x("floor",[this])}abs(){return new x("abs",[this])}exp(){return new x("exp",[this])}mapGet(e){return new x("map_get",[this,oa(e)],"mapGet")}mapSet(e,t,...n){const s=[this,Q(e),Q(t),...n.map(Q)];return new x("map_set",s,"mapSet")}mapKeys(){return new x("map_keys",[this],"mapKeys")}mapValues(){return new x("map_values",[this],"mapValues")}mapEntries(){return new x("map_entries",[this],"mapEntries")}getField(e){return new x("get_field",[this,Q(e)],"get_field")}count(){return Gt._create("count",[this],"count")}sum(){return Gt._create("sum",[this],"sum")}average(){return Gt._create("average",[this],"average")}minimum(){return Gt._create("minimum",[this],"minimum")}maximum(){return Gt._create("maximum",[this],"maximum")}first(){return Gt._create("first",[this],"first")}last(){return Gt._create("last",[this],"last")}arrayAgg(){return Gt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return Gt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return Gt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const n=[e,...t];return new x("maximum",[this,...n.map(Q)],"logicalMaximum")}logicalMinimum(e,...t){const n=[e,...t];return new x("minimum",[this,...n.map(Q)],"minimum")}vectorLength(){return new x("vector_length",[this],"vectorLength")}cosineDistance(e){return new x("cosine_distance",[this,Ll(e)],"cosineDistance")}dotProduct(e){return new x("dot_product",[this,Ll(e)],"dotProduct")}euclideanDistance(e){return new x("euclidean_distance",[this,Ll(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new x("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new x("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new x("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new x("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new x("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new x("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new x("timestamp_add",[this,Q(e),Q(t)],"timestampAdd")}timestampSubtract(e,t){return new x("timestamp_subtract",[this,Q(e),Q(t)],"timestampSubtract")}timestampDiff(e,t){return new x("timestamp_diff",[this,Oh(e),Q(t)],"timestampDiff")}timestampExtract(e,t){const n=[this,Q(e)];return t&&n.push(Q(t)),new x("timestamp_extract",n,"timestampExtract")}documentId(){return new x("document_id",[this],"documentId")}parent(){return new x("parent",[this],"parent")}substring(e,t){const n=Q(e);return new x("substring",t===void 0?[this,n]:[this,n,Q(t)],"substring")}arrayGet(e){return new x("array_get",[this,Q(e)],"arrayGet")}isError(){return new x("is_error",[this],"isError").asBoolean()}ifError(e){const t=new x("if_error",[this,Q(e)],"ifError");return e instanceof vr?t.asBoolean():t}isAbsent(){return new x("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new x("map_remove",[this,Q(e)],"mapRemove")}mapMerge(e,...t){const n=Q(e),s=t.map(Q);return new x("map_merge",[this,n,...s],"mapMerge")}pow(e){return new x("pow",[this,Q(e)])}trunc(e){return e===void 0?new x("trunc",[this]):new x("trunc",[this,Q(e)],"trunc")}round(e){return e===void 0?new x("round",[this]):new x("round",[this,Q(e)],"round")}collectionId(){return new x("collection_id",[this])}length(){return new x("length",[this])}ln(){return new x("ln",[this])}sqrt(){return new x("sqrt",[this])}stringReverse(){return new x("string_reverse",[this])}ifAbsent(e){return new x("if_absent",[this,Q(e)],"ifAbsent")}ifNull(e){return new x("if_null",[this,Q(e)],"ifNull")}coalesce(e,...t){return new x("coalesce",[this,Q(e),...t.map(Q)],"coalesce")}join(e){return new x("join",[this,Q(e)],"join")}log10(){return new x("log10",[this])}arraySum(){return new x("sum",[this])}split(e){return new x("split",[this,Q(e)])}timestampTruncate(e,t){const n=[this,Q(e)];return t&&n.push(Q(t)),new x("timestamp_trunc",n)}ascending(){return sb(this)}descending(){return ib(this)}as(e){return new ZP(this,e,"as")}}class Gt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,n){const s=new Gt(e,t);return s._methodName=n,s}as(e){return new XP(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map((t=>t._toProto(e)))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e)))}}class XP{constructor(e,t,n){this.aggregate=e,this.alias=t,this._methodName=n}_readUserData(e){this.aggregate._readUserData(e)}}class ZP{constructor(e,t,n){this.expr=e,this.alias=t,this._methodName=n,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class vo extends Ns{constructor(e,t){super(),this.cr=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.cr.map((t=>t._toProto(e)))}}}_readUserData(e){this.cr.forEach((t=>t._readUserData(e)))}}class Os extends Ns{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new x("geo_distance",[this,Q(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Au(r){return eb(r,"field")}function eb(r,e){return new Os(typeof r=="string"?an===r?j_()._internalPath:en("field",r):r._internalPath,e)}class Fs extends Ns{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Fs(e,void 0);return t._protoValue=e,t}_toProto(e){return q(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,jP(this._protoValue)||(this._protoValue=mn(this.value,e))}}function oa(r,e){return CE(r,"constant")}function CE(r,e){const t=new Fs(r,e);return typeof r=="boolean"?new gE(t):t}class x extends Ns{constructor(e,t,n,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,n!==void 0&&(this._methodName=n),s!==void 0&&(this._options=s)}get _optionsUtil(){return new Et({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((n=>n._toProto(e)))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class vr extends Ns{get _methodName(){return this._expr._methodName}countIf(){return Gt._create("count_if",[this],"countIf")}not(){return new x("not",[this],"not").asBoolean()}conditional(e,t){return new x("conditional",[this,e,t],"conditional")}ifError(e){const t=Q(e),n=new x("if_error",[this,t],"ifError");return t instanceof vr?n.asBoolean():n}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class pE extends vr{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class gE extends vr{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class tb extends vr{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function nb(r,e){const t=[];for(const n in r)if(Object.prototype.hasOwnProperty.call(r,n)){const s=r[n];t.push(oa(n)),t.push(Q(s))}return new x("map",t,"map")}function rb(r){return(function(t,n){return new x("array",t.map((s=>Q(s))),n)})(r,"array")}function sb(r){return new Fh(Oh(r),"ascending","ascending")}function ib(r){return new Fh(Oh(r),"descending","descending")}class Fh{constructor(e,t,n){this.expr=e,this.direction=t,this._methodName=n,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:q_(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class mE extends jt{get _name(){return"add_fields"}get _optionsUtil(){return new Et({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[ia(e,this.fields)]}}_readUserData(e){super._readUserData(e),br(this.fields,e)}}class _E extends jt{get _name(){return"aggregate"}get _optionsUtil(){return new Et({})}constructor(e,t,n){super(n),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[ia(e,this.accumulators),ia(e,this.groups)]}}_readUserData(e){super._readUserData(e),br(this.groups,e),br(this.accumulators,e)}}class EE extends jt{get _name(){return"distinct"}get _optionsUtil(){return new Et({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[ia(e,this.groups)]}}_readUserData(e){super._readUserData(e),br(this.groups,e)}}class va extends jt{get _name(){return"collection"}get _optionsUtil(){return new Et({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.hr=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.hr}]}}_readUserData(e){super._readUserData(e)}}class Pa extends jt{get _name(){return"collection_group"}get _optionsUtil(){return new Et({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class Pc extends jt{get _name(){return"database"}get _optionsUtil(){return new Et({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class bc extends jt{get _name(){return"documents"}get _optionsUtil(){return new Et({})}constructor(e,t){if(super(t),!e||e.length===0)throw new M(b.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const n=e.map((i=>i.startsWith("/")?i:"/"+i)),s=new Set(n);if(s.size!==n.length)throw new M(b.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.Tr=n,this.Pr=s}_toProto(e){return{...super._toProto(e),args:this.Tr.map((t=>({referenceValue:t})))}}_readUserData(e){super._readUserData(e)}}class ba extends jt{get _name(){return"where"}get _optionsUtil(){return new Et({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),br(this.condition,e)}}class Pr extends jt{get _name(){return"limit"}get _optionsUtil(){return new Et({})}constructor(e,t){q(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[xi(e,this.limit)]}}}class fp extends jt{get _name(){return"offset"}get _optionsUtil(){return new Et({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[xi(e,this.offset)]}}}class ob extends jt{get _name(){return"select"}get _optionsUtil(){return new Et({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[ia(e,this.selections)]}}_readUserData(e){super._readUserData(e),br(this.selections,e)}}class cn extends jt{get _name(){return"sort"}get _optionsUtil(){return new Et({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map((t=>t._toProto(e)))}}_readUserData(e){super._readUserData(e),br(this.orderings,e)}}class Lh extends jt{get _name(){return"replace_with"}get _optionsUtil(){return new Et({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),q_(Lh.Ir)]}}_readUserData(e){super._readUserData(e),br(this.map,e)}}Lh.Ir="full_replace";function br(r,e){return dE(r)?r._readUserData(e):Array.isArray(r)?r.forEach((t=>t._readUserData(e))):r instanceof Map?r.forEach((t=>t._readUserData(e))):Object.values(r).forEach((t=>t._readUserData(e))),r}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,t,n,s){this._db=e,this.userDataReader=t,this._userDataWriter=n,this.stages=s}Vr(e,t){const n=this.userDataReader.createContext(3,e);return dE(t)?t._readUserData(n):Array.isArray(t)?t.forEach((s=>s._readUserData(n))):t.forEach((s=>s._readUserData(n))),t}where(e){const t=this.stages.map((n=>n));return this.Vr("where",e),t.push(new ba(e,{})),new Uo(this._db,this.userDataReader,this._userDataWriter,t)}limit(e){const t=this.stages.map((n=>n));return t.push(new Pr(e,{})),new Uo(this._db,this.userDataReader,this._userDataWriter,t)}sort(e,...t){const n=this.stages.map((s=>s));return"orderings"in e?n.push(new cn(this.Vr("sort",e.orderings),{})):n.push(new cn(this.Vr("sort",[e,...t]),{})),new Uo(this._db,this.userDataReader,this._userDataWriter,n)}dr(e){return{pipeline:{stages:this.stages.map((t=>t._toProto(e)))}}}}// Copyright 2024 Google LLC* @license
class pt{constructor(e,t,n){this.serializer=e,this.stages=t,this.listenOptions=n,this.isCorePipeline=!0}getPipelineCollection(){return Sa(this)}getPipelineCollectionGroup(){return Vh(this)}getPipelineCollectionId(){return IE(this)}getPipelineDocuments(){return Ju(this)}getPipelineFlavor(){return(function(t){let n="exact";return t.stages.forEach(((s,i)=>{s._name!==EE.name&&s._name!==_E.name||(n="keyless"),s._name===ob.name&&n==="exact"&&(n="augmented"),s._name===mE.name&&i<t.stages.length-1&&n==="exact"&&(n="augmented")})),n})(this)}getPipelineSourceType(){return Ln(this)}}function Ln(r){const e=r.stages[0];return e instanceof va||e instanceof Pa||e instanceof Pc||e instanceof bc?e._name:"unknown"}function Sa(r){if(Ln(r)==="collection")return r.stages[0].hr}function Vh(r){if(Ln(r)==="collection_group")return r.stages[0].collectionId}function IE(r){switch(Ln(r)){case"collection":return ue.fromString(Sa(r)).lastSegment();case"collection_group":return Vh(r);default:return}}function Ju(r){if(Ln(r)==="documents")return r.stages[0].Tr}class w{constructor(e,t){this.type=e,this.value=t}static mr(){return new w("ERROR",void 0)}static pr(){return new w("UNSET",void 0)}static gr(){return new w("NULL",fn)}static newValue(e){return Ht(e)?new w("NULL",fn):(function(n){return!!n&&"booleanValue"in n})(e)?new w("BOOLEAN",e):un(e)?new w("INT",e):ss(e)?new w("DOUBLE",e):(function(n){return!!n&&"timestampValue"in n&&!!n.timestampValue})(e)?new w("TIMESTAMP",e):(function(n){return!!n&&"stringValue"in n})(e)?new w("STRING",e):(function(n){return!!n&&"bytesValue"in n})(e)?new w("BYTES",e):e.referenceValue?new w("REFERENCE",e):e.geoPointValue?new w("GEO_POINT",e):Ar(e)?new w("ARRAY",e):ms(e)?new w("VECTOR",e):cs(e)?new w("MAP",e):new w("ERROR",void 0)}yr(){return this.type==="ERROR"||this.type==="UNSET"}wr(){return this.type==="NULL"}}function Ho(r){if(!r.yr())return r.value}function DE(r){return r instanceof vr?r._expr:r}function ie(r){if((r=DE(r))instanceof Os)return new ab(r);if(r instanceof Fs)return new ub(r);if(r instanceof vo)return new cb(r);if(r instanceof x){if(r.name==="add")return new hb(r);if(r.name==="subtract")return new db(r);if(r.name==="multiply")return new fb(r);if(r.name==="divide")return new Cb(r);if(r.name==="mod")return new pb(r);if(r.name==="and")return new gb(r);if(r.name==="equal")return new Pb(r);if(r.name==="not_equal")return new bb(r);if(r.name==="less_than")return new Sb(r);if(r.name==="less_than_or_equal")return new Nb(r);if(r.name==="greater_than")return new Ob(r);if(r.name==="greater_than_or_equal")return new Fb(r);if(r.name==="array_concat")return new Lb(r);if(r.name==="array_reverse")return new Vb(r);if(r.name==="array_contains")return new kb(r);if(r.name==="array_contains_all")return new xb(r);if(r.name==="array_contains_any")return new Mb(r);if(r.name==="array_length")return new Gb(r);if(r.name==="array_element")return new Ub(r);if(r.name==="equal_any")return new yE(r);if(r.name==="not_equal_any")return new _b(r);if(r.name==="is_nan")return new Eb(r);if(r.name==="is_not_nan")return new Ib(r);if(r.name==="is_null")return new Db(r);if(r.name==="is_not_null")return new yb(r);if(r.name==="is_error")return new wb(r);if(r.name==="exists")return new Tb(r);if(r.name==="not")return new Sc(r);if(r.name==="or")return new mb(r);if(r.name==="xor")return new kh(r);if(r.name==="conditional")return new Ab(r);if(r.name==="maximum")return new Rb(r);if(r.name==="minimum")return new vb(r);if(r.name==="reverse")return new Hb(r);if(r.name==="replace_first")return new qb(r);if(r.name==="replace_all")return new jb(r);if(r.name==="char_length")return new Jb(r);if(r.name==="byte_length")return new Kb(r);if(r.name==="like")return new zb(r);if(r.name==="regex_contains")return new Qb(r);if(r.name==="regex_match")return new Wb(r);if(r.name==="string_contains")return new $b(r);if(r.name==="starts_with")return new Yb(r);if(r.name==="ends_with")return new Xb(r);if(r.name==="to_lower")return new Zb(r);if(r.name==="to_upper")return new eS(r);if(r.name==="trim")return new tS(r);if(r.name==="string_concat")return new nS(r);if(r.name==="map_get")return new rS(r);if(r.name==="cosine_distance")return new sS(r);if(r.name==="dot_product")return new iS(r);if(r.name==="euclidean_distance")return new oS(r);if(r.name==="vector_length")return new aS(r);if(r.name==="unix_micros_to_timestamp")return new hS(r);if(r.name==="timestamp_to_unix_micros")return new CS(r);if(r.name==="unix_millis_to_timestamp")return new dS(r);if(r.name==="timestamp_to_unix_millis")return new pS(r);if(r.name==="unix_seconds_to_timestamp")return new fS(r);if(r.name==="timestamp_to_unix_seconds")return new gS(r);if(r.name==="timestamp_add")return new mS(r);if(r.name==="timestamp_subtract")return new _S(r)}throw new Error(`Unknown Expr : ${r}`)}class ab{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===an)return w.newValue({referenceValue:mi(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return w.newValue({timestampValue:Tu(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return w.newValue({timestampValue:Tu(e.serializer,t.createTime)});const n=t.data.field(this.expr._fieldPath);return n?Da(n)?w.newValue((function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:Tu(i.serializer,ee.fromTimestamp(ui(o)))};if(i.serverTimestampBehavior==="previous"){const a=ya(o);if(a)return a}return{nullValue:"NULL_VALUE"}})(e,n)):w.newValue(n):w.pr()}}class ub{constructor(e){this.expr=e}evaluate(e,t){return w.newValue(this.expr._getValue())}}class cb{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.cr.map((s=>ie(s).evaluate(e,t)));return n.some((s=>s.yr()))?w.mr():w.newValue({arrayValue:{values:n.map((s=>s.value))}})}}function ht(r){return ss(r)?Number(r.doubleValue):Number(r.integerValue)}function _n(r){return BigInt(r.integerValue)}const lb=BigInt("0x7fffffffffffffff"),Bb=-BigInt("0x8000000000000000");class Na{constructor(e){this.expr=e}evaluate(e,t){q(this.expr.params.length>=2,24778);const n=ie(this.expr.params[0]).evaluate(e,t),s=ie(this.expr.params[1]).evaluate(e,t);let i=this.br(n,s);for(const o of this.expr.params.slice(2)){const a=ie(o).evaluate(e,t);i=this.br(i,a)}return i}br(e,t){if(e.yr()||t.yr())return w.mr();if(e.wr()||t.wr())return w.gr();const n=e.value,s=t.value;if(!ss(n)&&!un(n)||!ss(s)&&!un(s))return w.mr();if(ss(n)||ss(s)){const i=this.Sr(n,s);return i?w.newValue(i):w.mr()}if(un(n)&&un(s)){const i=this.vr(n,s);return i===void 0?w.mr():typeof i=="number"?w.newValue({doubleValue:i}):i<Bb||i>lb?w.mr():w.newValue({integerValue:`${i}`})}return w.mr()}}function Hn(r,e){return Xe(r)!==Xe(e)?"TYPE_MISMATCH":kt(r)||kt(e)?"NOT_EQ":Ht(r)&&Ht(e)?"EQ":Ht(r)||Ht(e)?"NULL":Ar(r)&&Ar(e)?(function(n,s){var o,a,u;if(((o=n.values)==null?void 0:o.length)!==((a=s.values)==null?void 0:a.length))return"NOT_EQ";let i=!1;for(let l=0;l<(((u=n.values)==null?void 0:u.length)??0);l++){const B=n.values[l],d=s.values[l];switch(Hn(B,d)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:Y(44609,{Dr:B,Cr:d})}}return i?"NULL":"EQ"})(r.arrayValue,e.arrayValue):ms(r)&&ms(e)||cs(r)&&cs(e)?(function(n,s){const i=n.fields||{},o=s.fields||{};if(Mu(i)!==Mu(o))return"NOT_EQ";let a=!1;for(const u in i)if(i.hasOwnProperty(u)){if(o[u]===void 0)return"NOT_EQ";switch(Hn(i[u],o[u])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":a=!0}}return a?"NULL":"EQ"})(r.mapValue,e.mapValue):(function(n,s){return Qt(n,s,{u:!1,i:!0,o:!0})})(r,e)?"EQ":"NOT_EQ"}class hb extends Na{vr(e,t){return _n(e)+_n(t)}Sr(e,t){return{doubleValue:ht(e)+ht(t)}}}class db extends Na{constructor(e){super(e),this.expr=e}vr(e,t){return _n(e)-_n(t)}Sr(e,t){return{doubleValue:ht(e)-ht(t)}}}class fb extends Na{constructor(e){super(e),this.expr=e}vr(e,t){return _n(e)*_n(t)}Sr(e,t){return{doubleValue:ht(e)*ht(t)}}}class Cb extends Na{constructor(e){super(e),this.expr=e}vr(e,t){const n=_n(t);if(n!==BigInt(0))return _n(e)/n}Sr(e,t){const n=ht(t);return n===0?{doubleValue:ci(n)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:ht(e)/n}}}class pb extends Na{constructor(e){super(e),this.expr=e}vr(e,t){const n=_n(t);if(n!==BigInt(0))return _n(e)%n}Sr(e,t){const n=ht(t);if(n!==0)return{doubleValue:ht(e)%n}}}class gb{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,s=!1;for(const o of this.expr.params){const a=ie(o).evaluate(e,t);switch(a.type){case"BOOLEAN":if(!((i=a.value)!=null&&i.booleanValue))return w.newValue(ut);break;case"NULL":s=!0;break;default:n=!0}}return n?w.mr():s?w.gr():w.newValue(Vt)}}class Sc{constructor(e){this.expr=e}evaluate(e,t){var s;q(this.expr.params.length===1,9634);const n=ie(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return w.newValue({booleanValue:!((s=n.value)!=null&&s.booleanValue)});case"NULL":return w.gr();default:return w.mr()}}}class mb{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,s=!1;for(const o of this.expr.params){const a=ie(o).evaluate(e,t);switch(a.type){case"BOOLEAN":if((i=a.value)!=null&&i.booleanValue)return w.newValue(Vt);break;case"NULL":s=!0;break;default:n=!0}}return n?w.mr():s?w.gr():w.newValue(ut)}}class kh{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,s=!1;for(const o of this.expr.params){const a=ie(o).evaluate(e,t);switch(a.type){case"BOOLEAN":n=kh.xor(n,!!((i=a.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return w.mr()}}return s?w.gr():w.newValue({booleanValue:n})}static xor(e,t){return(e||t)&&!(e&&t)}}class yE{constructor(e){this.expr=e}evaluate(e,t){var o,a;q(this.expr.params.length===2,55094);let n=!1;const s=ie(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":n=!0;break;case"ERROR":case"UNSET":return w.mr()}const i=ie(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.mr()}if(n)return w.gr();for(const u of((a=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:a.values)??[])switch(Ht(s.value)&&Ht(u)?"EQ":Hn(s.value,u)){case"EQ":return w.newValue(Vt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Y(44608,{value:s.value,candidate:u})}return n?w.gr():w.newValue(ut)}}class _b{constructor(e){this.expr=e}evaluate(e,t){return new Sc(new x("not",[new x("equal_any",this.expr.params)])).evaluate(e,t)}}class Eb{constructor(e){this.expr=e}evaluate(e,t){q(this.expr.params.length===1,23322);const n=ie(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return w.newValue(ut);case"DOUBLE":return w.newValue({booleanValue:isNaN(ht(n.value))});case"NULL":return w.gr();default:return w.mr()}}}class Ib{constructor(e){this.expr=e}evaluate(e,t){return q(this.expr.params.length===1,50406),new Sc(new x("not",[new x("is_nan",this.expr.params)])).evaluate(e,t)}}class Db{constructor(e){this.expr=e}evaluate(e,t){switch(q(this.expr.params.length===1,23123),ie(this.expr.params[0]).evaluate(e,t).type){case"NULL":return w.newValue(Vt);case"UNSET":case"ERROR":return w.mr();default:return w.newValue(ut)}}}class yb{constructor(e){this.expr=e}evaluate(e,t){return q(this.expr.params.length===1,23167),new Sc(new x("not",[new x("is_null",this.expr.params)])).evaluate(e,t)}}class wb{constructor(e){this.expr=e}evaluate(e,t){return q(this.expr.params.length===1,5228),ie(this.expr.params[0]).evaluate(e,t).type==="ERROR"?w.newValue(Vt):w.newValue(ut)}}class Tb{constructor(e){this.expr=e}evaluate(e,t){switch(q(this.expr.params.length===1,6877),ie(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return w.mr();case"UNSET":return w.newValue(ut);default:return w.newValue(Vt)}}}class Ab{constructor(e){this.expr=e}evaluate(e,t){var s;q(this.expr.params.length===3,11706);const n=ie(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return(s=n.value)!=null&&s.booleanValue?ie(this.expr.params[1]).evaluate(e,t):ie(this.expr.params[2]).evaluate(e,t);case"NULL":return ie(this.expr.params[2]).evaluate(e,t);default:return w.mr()}}}class Rb{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((i=>ie(i).evaluate(e,t)));let s;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||_t(i.value,s.value)>0?i:s}return s===void 0?w.gr():s}}class vb{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((i=>ie(i).evaluate(e,t)));let s;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||_t(i.value,s.value)<0?i:s}return s===void 0?w.gr():s}}class qi{constructor(e){this.expr=e}evaluate(e,t){q(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const n=ie(this.expr.params[0]).evaluate(e,t);switch(n.type){case"ERROR":case"UNSET":return w.mr()}const s=ie(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return w.mr()}return this.Fr(n,s)}}class Pb extends qi{constructor(e){super(e),this.expr=e}Fr(e,t){if(e.wr()&&t.wr())return w.newValue(Vt);if(e.wr()||t.wr()||kt(e.value)||kt(t.value)||Xe(e.value)!==Xe(t.value))return w.newValue(ut);switch(Hn(e.value,t.value)){case"EQ":return w.newValue(Vt);case"NOT_EQ":return w.newValue(ut);case"NULL":return w.gr();default:Y(44615,{left:e,right:t})}}}class bb extends qi{constructor(e){super(e),this.expr=e}Fr(e,t){switch(Hn(e.value,t.value)){case"EQ":return w.newValue(ut);case"NOT_EQ":case"TYPE_MISMATCH":return w.newValue(Vt);case"NULL":return w.gr();default:Y(44614,{left:e,right:t})}}}class Sb extends qi{constructor(e){super(e),this.expr=e}Fr(e,t){return Xe(e.value)!==Xe(t.value)||kt(e.value)||kt(t.value)?w.newValue(ut):w.newValue({booleanValue:_t(e.value,t.value)<0})}}class Nb extends qi{constructor(e){super(e),this.expr=e}Fr(e,t){return Xe(e.value)!==Xe(t.value)||kt(e.value)||kt(t.value)?w.newValue(ut):Hn(e.value,t.value)==="EQ"?w.newValue(Vt):w.newValue({booleanValue:_t(e.value,t.value)<0})}}class Ob extends qi{constructor(e){super(e),this.expr=e}Fr(e,t){return Xe(e.value)!==Xe(t.value)||kt(e.value)||kt(t.value)?w.newValue(ut):w.newValue({booleanValue:_t(e.value,t.value)>0})}}class Fb extends qi{constructor(e){super(e),this.expr=e}Fr(e,t){return Xe(e.value)!==Xe(t.value)||kt(e.value)||kt(t.value)?w.newValue(ut):Hn(e.value,t.value)==="EQ"?w.newValue(Vt):w.newValue({booleanValue:_t(e.value,t.value)>0})}}class Lb{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Vb{constructor(e){this.expr=e}evaluate(e,t){var s;q(this.expr.params.length===1,216);const n=ie(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.gr();case"ARRAY":{const i=((s=n.value.arrayValue)==null?void 0:s.values)??[];return w.newValue({arrayValue:{values:[...i].reverse()}})}default:return w.mr()}}}class kb{constructor(e){this.expr=e}evaluate(e,t){return q(this.expr.params.length===2,52884),new yE(new x("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class xb{constructor(e){this.expr=e}evaluate(e,t){var u,l,B,d;q(this.expr.params.length===2,1392);let n=!1;const s=ie(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.mr()}const i=ie(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.mr()}if(n)return w.gr();const o=((l=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:l.values)??[],a=((d=(B=s.value)==null?void 0:B.arrayValue)==null?void 0:d.values)??[];for(const C of o){let g=!1;n=!1;for(const D of a){switch(Ht(C)&&Ht(D)?"EQ":Hn(C,D)){case"EQ":g=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Y(44613,{value:D,search:C})}if(g)break}if(!g)return w.newValue(ut)}return w.newValue(Vt)}}class Mb{constructor(e){this.expr=e}evaluate(e,t){var u,l,B,d;q(this.expr.params.length===2,2680);let n=!1;const s=ie(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.mr()}const i=ie(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.mr()}if(n)return w.gr();const o=((l=(u=i.value)==null?void 0:u.arrayValue)==null?void 0:l.values)??[],a=((d=(B=s.value)==null?void 0:B.arrayValue)==null?void 0:d.values)??[];for(const C of a)for(const g of o)switch(Ht(C)&&Ht(g)?"EQ":Hn(C,g)){case"EQ":return w.newValue(Vt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Y(60403,{value:C,search:g})}return n?w.gr():w.newValue(ut)}}class Gb{constructor(e){this.expr=e}evaluate(e,t){var s,i,o;q(this.expr.params.length===1,38605);const n=ie(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.gr();case"ARRAY":return w.newValue({integerValue:`${((o=(i=(s=n.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return w.mr()}}}class Ub{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Hb{constructor(e){this.expr=e}evaluate(e,t){var s,i;q(this.expr.params.length===1,1508);const n=ie(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.gr();case"BYTES":{const o=(s=n.value)==null?void 0:s.bytesValue;if(typeof o=="string"){const a=Se.fromBase64String(o).toUint8Array();return a.reverse(),w.newValue({bytesValue:Se.fromUint8Array(a).toBase64()})}return w.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=n.value)==null?void 0:i.stringValue,a=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),u=Array.from(a,(l=>l.segment)).reverse();return w.newValue({stringValue:u.join("")})}default:return w.mr()}}}class qb{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class jb{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class Jb{constructor(e){this.expr=e}evaluate(e,t){q(this.expr.params.length===1,19400);const n=ie(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.gr();case"STRING":{const s=(function(o){let a=0;for(let u=0;u<o.length;u++){const l=o.codePointAt(u);if(l===void 0)return;if(l<=65535)if(l>=55296&&l<=57343)if(l<=56319){const B=o.codePointAt(u+1);B!==void 0&&B>=56320&&B<=57343?(a+=1,u++):a+=1}else a+=1;else a+=1;else{if(!(l<=1114111))return;a+=1,u++}}return a})(n.value.stringValue);return s===void 0?w.mr():w.newValue({integerValue:s})}default:return w.mr()}}}class Kb{constructor(e){this.expr=e}evaluate(e,t){var s,i;q(this.expr.params.length===1,8486);const n=ie(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BYTES":{const o=(s=n.value)==null?void 0:s.bytesValue;return typeof o=="string"?w.newValue({integerValue:Se.fromBase64String(o).toUint8Array().length}):w.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=(function(u){let l=0;for(let B=0;B<u.length;B++){const d=u.codePointAt(B);if(d===void 0)return;if(d>=55296&&d<=57343){if(!(d<=56319))return;{const C=u.codePointAt(B+1);if(C===void 0||!(C>=56320&&C<=57343))return;l+=4,B++}}else if(d<=127)l+=1;else if(d<=2047)l+=2;else if(d<=65535)l+=3;else{if(!(d<=1114111))return;l+=4,B++}}return l})((i=n.value)==null?void 0:i.stringValue);return o===void 0?w.mr():w.newValue({integerValue:o})}case"NULL":return w.gr();default:return w.mr()}}}class ji{constructor(e){this.expr=e}evaluate(e,t){var o,a;q(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let n=!1;const s=ie(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":n=!0;break;default:return w.mr()}const i=ie(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":n=!0;break;default:return w.mr()}return n?w.gr():this.Or((o=s.value)==null?void 0:o.stringValue,(a=i.value)==null?void 0:a.stringValue)}}class zb extends ji{Or(e,t){try{const n=(function(o){let a="";for(let u=0;u<o.length;u++){const l=o.charAt(u);switch(l){case"_":a+=".";break;case"%":a+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":a+="\\"+l;break;default:a+=l}}return"^"+a+"$"})(t),s=nh.compile(n);return w.newValue({booleanValue:s.matches(e)})}catch(n){return nt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${n}`),w.mr()}}}class Qb extends ji{Or(e,t){try{const n=nh.compile(t);return w.newValue({booleanValue:n.test(e)})}catch{return nt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),w.mr()}}}class Wb extends ji{Or(e,t){try{return w.newValue({booleanValue:nh.compile(t).matches(e)})}catch{return nt(`Invalid regex pattern found in regex_match: ${t}, returning error`),w.mr()}}}class $b extends ji{Or(e,t){return w.newValue({booleanValue:e.includes(t)})}}class Yb extends ji{Or(e,t){return w.newValue({booleanValue:e.startsWith(t)})}}class Xb extends ji{Or(e,t){return w.newValue({booleanValue:e.endsWith(t)})}}class Zb{constructor(e){this.expr=e}evaluate(e,t){var s,i;q(this.expr.params.length===1,29079);const n=ie(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return w.newValue({stringValue:(i=(s=n.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return w.gr();default:return w.mr()}}}class eS{constructor(e){this.expr=e}evaluate(e,t){var s,i;q(this.expr.params.length===1,60487);const n=ie(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return w.newValue({stringValue:(i=(s=n.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return w.gr();default:return w.mr()}}}class tS{constructor(e){this.expr=e}evaluate(e,t){var s,i;q(this.expr.params.length===1,28544);const n=ie(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return w.newValue({stringValue:(i=(s=n.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return w.gr();default:return w.mr()}}}class nS{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((o=>ie(o).evaluate(e,t)));let s="",i=!1;for(const o of n)switch(o.type){case"STRING":s+=o.value.stringValue;break;case"NULL":i=!0;break;default:return w.mr()}return i?w.gr():w.newValue({stringValue:s})}}class rS{constructor(e){this.expr=e}evaluate(e,t){var o,a,u,l;q(this.expr.params.length===2,4483);const n=ie(this.expr.params[0]).evaluate(e,t);switch(n.type){case"UNSET":return w.pr();case"MAP":break;default:return w.mr()}const s=ie(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return w.mr();const i=(l=(a=(o=n.value)==null?void 0:o.mapValue)==null?void 0:a.fields)==null?void 0:l[(u=s.value)==null?void 0:u.stringValue];return i===void 0?w.pr():w.newValue(i)}}class xh{constructor(e){this.expr=e}evaluate(e,t){var l,B;q(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let n=!1;const s=ie(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":n=!0;break;default:return w.mr()}const i=ie(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":n=!0;break;default:return w.mr()}if(n)return w.gr();const o=nB(s.value),a=nB(i.value);if(o===void 0||a===void 0||((l=o.values)==null?void 0:l.length)!==((B=a.values)==null?void 0:B.length))return w.mr();const u=this.Mr(o,a);return u===void 0||isNaN(u)?w.mr():w.newValue({doubleValue:u})}}class sS extends xh{Mr(e,t){const n=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(n.length===0)return;let i=0,o=0,a=0;for(let l=0;l<n.length;l++){if(!Tr(n[l])||!Tr(s[l]))return;const B=ht(n[l]),d=ht(s[l]);i+=B*d,o+=B*B,a+=d*d}const u=Math.sqrt(o)*Math.sqrt(a);if(u!==0)return 1-Math.max(-1,Math.min(1,i/u))}}class iS extends xh{Mr(e,t){const n=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Tr(n[o])||!Tr(s[o]))return;i+=ht(n[o])*ht(s[o])}return i}}class oS extends xh{Mr(e,t){const n=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Tr(n[o])||!Tr(s[o]))return;const a=ht(n[o]),u=ht(s[o]);i+=Math.pow(a-u,2)}return Math.sqrt(i)}}class aS{constructor(e){this.expr=e}evaluate(e,t){var s;q(this.expr.params.length===1,39044);const n=ie(this.expr.params[0]).evaluate(e,t);switch(n.type){case"VECTOR":{const i=nB(n.value);return w.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return w.gr();default:return w.mr()}}}const aa=BigInt(-62135596800),ua=BigInt(253402300799),Ku=BigInt(1e3),Er=BigInt(1e6),uS=aa*Ku,cS=ua*Ku+BigInt(999),lS=aa*Er,BS=ua*Er+BigInt(999999);function Mh(r){return r>=lS&&r<=BS}function wE(r){return r>=aa&&r<=ua}function ca(r,e){const t=BigInt(r);return!(t<aa||t>ua)&&!(e<0||e>=1e9)&&(t!==aa||e===0)&&!(t===ua&&e>999999999)}function TE(r,e){return e<0?{seconds:r-1,nanos:e+1e9}:{seconds:r,nanos:e}}function Gh(r){return BigInt(r.seconds)*Er+BigInt(Math.trunc(r.nanoseconds/1e3))}class Uh{constructor(e){this.expr=e}evaluate(e,t){q(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const n=ie(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return this.toTimestamp(BigInt(n.value.integerValue));case"NULL":return w.gr();default:return w.mr()}}}class hS extends Uh{toTimestamp(e){if(!Mh(e))return w.mr();let t=Number(e/Er),n=Number(e%Er*BigInt(1e3));const s=TE(t,n);return t=s.seconds,n=s.nanos,ca(t,n)?w.newValue({timestampValue:{seconds:t,nanos:n}}):w.mr()}}class dS extends Uh{toTimestamp(e){if(!(function(o){return o>=uS&&o<=cS})(e))return w.mr();let t=Number(e/Ku),n=Number(e%Ku*BigInt(1e6));const s=TE(t,n);return t=s.seconds,n=s.nanos,ca(t,n)?w.newValue({timestampValue:{seconds:t,nanos:n}}):w.mr()}}class fS extends Uh{toTimestamp(e){if(!wE(e))return w.mr();const t=Number(e);return w.newValue({timestampValue:{seconds:t,nanos:0}})}}class Hh{constructor(e){this.expr=e}evaluate(e,t){q(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const n=ie(this.expr.params[0]).evaluate(e,t);switch(n.type){case"TIMESTAMP":break;case"NULL":return w.gr();default:return w.mr()}const s=mh(n.value.timestampValue);return ca(s.seconds,s.nanoseconds)?this.Nr(s):w.mr()}}class CS extends Hh{Nr(e){const t=Gh(e);return Mh(t)?w.newValue({integerValue:`${t.toString()}`}):w.mr()}}class pS extends Hh{Nr(e){const t=Gh(e),n=t/BigInt(1e3),s=t%BigInt(1e3);return n>BigInt(0)||s===BigInt(0)?w.newValue({integerValue:n.toString()}):w.newValue({integerValue:(n-BigInt(1)).toString()})}}class gS extends Hh{Nr(e){const t=BigInt(e.seconds);return wE(t)?w.newValue({integerValue:t.toString()}):w.mr()}}class AE{constructor(e){this.expr=e}evaluate(e,t){q(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let n=!1;const s=ie(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":n=!0;break;default:return w.mr()}const i=ie(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=(function(Z){switch(Z){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(i.value.stringValue),o===void 0)return w.mr();break;case"NULL":n=!0;break;default:return w.mr()}const a=ie(this.expr.params[2]).evaluate(e,t);switch(a.type){case"INT":break;case"NULL":n=!0;break;default:return w.mr()}if(n)return w.gr();const u=BigInt(a.value.integerValue);let l;try{switch(o){case"microsecond":l=u;break;case"millisecond":l=u*BigInt(1e3);break;case"second":l=u*BigInt(1e6);break;case"minute":l=u*BigInt(6e7);break;case"hour":l=u*BigInt(36e8);break;case"day":l=u*BigInt(864e8);break;default:return w.mr()}if(o!=="microsecond"&&u!==BigInt(0)&&l/u!==BigInt(this.Lr(o)))return w.mr()}catch(H){return nt(`Error during timestamp arithmetic: ${H}`),w.mr()}const B=mh(s.value.timestampValue);if(!ca(B.seconds,B.nanoseconds))return w.mr();const d=Gh(B),C=this.Br(d,l);if(!Mh(C))return w.mr();const g=Number(C/Er),D=C%Er,N=Number((D<0?D+Er:D)*BigInt(1e3)),V=D<0?g-1:g;return ca(V,N)?w.newValue({timestampValue:{seconds:V,nanos:N}}):w.mr()}Lr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class mS extends AE{Br(e,t){return e+t}}class _S extends AE{Br(e,t){return e-t}}function la(r){if((r=DE(r))instanceof Os)return`fld(${r.fieldName})`;if(r instanceof Fs)return`cst(${(function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Ie?`ref(${t.path})`:t instanceof Tt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)})(r.value)})`;if(r instanceof x)return`fn(${r.name},[${r.params.map(la).join(",")}])`;if(r.expressionType==="ListOfExpressions")return`list([${r.cr.map(la).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(r,null,2)}`)}function ES(r){if(r instanceof mE)return`${r._name}(${lu(r.fields)})`;if(r instanceof _E){let e=`${r._name}(${lu(r.accumulators)})`;return r.groups.size>0&&(e+=`grouping(${lu(r.groups)})`),e}if(r instanceof EE)return`${r._name}(${lu(r.groups)})`;if(r instanceof va)return`${r._name}(${r.hr})`;if(r instanceof Pa)return`${r._name}(${r.collectionId})`;if(r instanceof Pc)return`${r._name}()`;if(r instanceof bc)return`${r._name}(${r.Tr.sort()})`;if(r instanceof ba)return`${r._name}(${la(r.condition)})`;if(r instanceof Pr)return`${r._name}(${r.limit})`;if(r instanceof cn)return`${r._name}(${(function(t){return t.map((n=>`${la(n.expr)}${n.direction}`)).join(",")})(r.orderings)})`;throw new Error(`Unrecognized stage ${r._name}`)}function lu(r){return`${Array.from(r.entries()).sort().map((([e,t])=>`${e}=${la(t)}`)).join(",")}`}function Vn(r){return r.stages.map((e=>ES(e))).join("|")}function RE(r,e){return Vn(r)===Vn(e)}function Ue(r){return r instanceof pt}function Cp(r){return Ue(r)?Vn(r):ko(r)}function vE(r){return Ue(r)?Vn(r):(function(t){return`${Uu(gt(t))}|lt:${t.limitType}`})(r)}function Nc(r,e){return r instanceof pt&&e instanceof pt?RE(r,e):!(r instanceof pt&&!(e instanceof pt)||!(r instanceof pt)&&e instanceof pt)&&I_(r,e)}function Oc(r){return Pn(r)?Vn(r):Uu(r)}function qh(r,e){return r instanceof pt&&e instanceof pt?RE(r,e):!(r instanceof pt&&!(e instanceof pt)||!(r instanceof pt)&&e instanceof pt)&&dh(r,e)}function IS(r,e){const t=(function(s){let i=!1;const o=[];for(const a of s)if(a instanceof cn)if(i=!0,a.orderings.some((u=>u.expr instanceof Os&&u.expr.fieldName===an)))o.push(a);else{const u=a.orderings.map((l=>l));u.push(Au(an).ascending()),o.push(new cn(u,{}))}else a instanceof Pr&&(i||(o.push(new cn([Au(an).ascending()],{})),i=!0)),o.push(a);return i||o.push(new cn([Au(an).ascending()],{})),o})(r.stages);if(r.userDataReader){const n=r.userDataReader.createContext(3,"toCorePipeline");t.forEach((s=>s._readUserData(n)))}return new pt(r.userDataReader.serializer,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Nv(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Vo(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Vo(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=A_();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const u=a_(o,a);u!==null&&n.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ae())}isEqual(e){return this.batchId===e.batchId&&ai(this.mutations,e.mutations,((t,n)=>JC(t,n)))&&ai(this.baseMutations,e.baseMutations,((t,n)=>JC(t,n)))}}class Jh{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){q(e.mutations.length===n.length,58842,{Ur:e.mutations.length,kr:n.length});let s=(function(){return Yv})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new Jh(e,t,n,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="";function mt(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=pp(e)),e=DS(r.get(t),e);return pp(e)}function DS(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case zu:t+="";break;default:t+=i}}return t}function pp(r){return r+zu+""}function ln(r){const e=r.length;if(q(e>=2,64408,{path:r}),e===2)return q(r.charAt(0)===zu&&r.charAt(1)==="",56145,{path:r}),ue.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf(zu,i);switch((o<0||o>t)&&Y(50515,{path:r}),r.charAt(o+1)){case"":const a=r.substring(i,o);let u;s.length===0?u=a:(s+=a,u=s,s=""),n.push(u);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:Y(61167,{path:r})}i=o+2}return new ue(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="remoteDocuments",Oa="owner",Us="owner",Ba="mutationQueues",yS="userId",Wt="mutations",gp="batchId",is="userMutationsIndex",mp=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(r,e){return[r,mt(e)]}function PE(r,e,t){return[r,mt(e),t]}const wS={},_i="documentMutations",Qu="remoteDocumentsV14",TS=["prefixPath","collectionGroup","readTime","documentId"],vu="documentKeyIndex",AS=["prefixPath","collectionGroup","documentId"],bE="collectionGroupIndex",RS=["collectionGroup","readTime","prefixPath","documentId"],ha="remoteDocumentGlobal",fB="remoteDocumentGlobalKey",Ei="targets",SE="queryTargetsIndex",vS=["canonicalId","targetId"],Ii="targetDocuments",PS=["targetId","path"],Kh="documentTargetsIndex",bS=["path","targetId"],Wu="targetGlobalKey",hs="targetGlobal",da="collectionParents",SS=["collectionId","parent"],Di="clientMetadata",NS="clientId",Fc="bundles",OS="bundleId",Lc="namedQueries",FS="name",zh="indexConfiguration",LS="indexId",CB="collectionGroupIndex",VS="collectionGroup",qo="indexState",kS=["indexId","uid"],NE="sequenceNumberIndex",xS=["uid","sequenceNumber"],jo="indexEntries",MS=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],OE="documentKeyIndex",GS=["indexId","uid","orderedDocumentKey"],Vc="documentOverlays",US=["userId","collectionPath","documentId"],pB="collectionPathOverlayIndex",HS=["userId","collectionPath","largestBatchId"],FE="collectionGroupOverlayIndex",qS=["userId","collectionGroup","largestBatchId"],Qh="globals",jS="name",LE=[Ba,Wt,_i,$r,Ei,Oa,hs,Ii,Di,ha,da,Fc,Lc],JS=[...LE,Vc],VE=[Ba,Wt,_i,Qu,Ei,Oa,hs,Ii,Di,ha,da,Fc,Lc,Vc],kE=VE,Wh=[...kE,zh,qo,jo],KS=Wh,xE=[...Wh,Qh],zS=xE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(r,e,t){const n=r.store(Wt),s=r.store(_i),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const u=n.Hn({range:o},((B,d,C)=>(a++,C.delete())));i.push(u.next((()=>{q(a===1,47070,{batchId:t.batchId})})));const l=[];for(const B of t.mutations){const d=PE(e,B.key.path,t.batchId);i.push(s.delete(d)),l.push(B.key)}return P.waitFor(i).next((()=>l))}function $u(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw Y(14731);e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gB extends Y_{constructor(e,t){super(),this.qr=e,this.currentSequenceNumber=t}}function st(r,e){const t=W(r);return pn.Cn(t.qr,e)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t,n,s,i=ee.min(),o=ee.min(),a=Se.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e){this.$r=e}}function QS(r,e){let t;if(e.document)t=wc(r.$r,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=K.fromSegments(e.noDocument.path),s=ys(e.noDocument.readTime);t=Le.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return Y(56709);{const n=K.fromSegments(e.unknownDocument.path),s=ys(e.unknownDocument.version);t=Le.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime((function(s){const i=new _e(s[0],s[1]);return ee.fromTimestamp(i)})(e.readTime)),t}function _p(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Yu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=(function(i,o){return{name:mi(i,o.key),fields:o.data.value.mapValue.fields,updateTime:Bs(i,o.version.toTimestamp()),createTime:Bs(i,o.createTime.toTimestamp())}})(r.$r,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:Ds(e.version)};else{if(!e.isUnknownDocument())return Y(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:Ds(e.version)}}return n}function Yu(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function Ds(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ys(r){const e=new _e(r.seconds,r.nanoseconds);return ee.fromTimestamp(e)}function Zr(r,e){const t=(e.baseMutations||[]).map((i=>BB(r.$r,i)));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map((i=>BB(r.$r,i))),s=_e.fromMillis(e.localWriteTimeMs);return new jh(e.batchId,s,t,n)}function Po(r,e){const t=ys(e.readTime),n=e.lastLimboFreeSnapshotVersion!==void 0?ys(e.lastLimboFreeSnapshotVersion):ee.min();let s;return s=(function(o){return o.structuredPipeline!==void 0})(e.query)?(function(o,a){var B,d;const u=o.structuredPipeline;q((((B=u==null?void 0:u.pipeline)==null?void 0:B.stages)??[]).length>0,1845);const l=(d=u==null?void 0:u.pipeline)==null?void 0:d.stages.map(WS);return new pt(a,l)})(e.query,r.$r):(function(o){return o.documents!==void 0})(e.query)?(function(o){const a=o.documents.length;return q(a===1,1966,{count:a}),gt(Ui(O_(o.documents[0])))})(e.query):(function(o){return gt(k_(o))})(e.query),new Bn(s,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,Se.fromBase64String(e.resumeToken))}function UE(r,e){const t=Ds(e.snapshotVersion),n=Ds(e.lastLimboFreeSnapshotVersion);let s;s=Pn(e.target)?x_(r.$r,e.target):fh(e.target)?L_(r.$r,e.target):Tc(r.$r,e.target).Se;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Oc(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function kc(r){const e=k_({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?qu(e,e.limit,"L"):e}function Bu(r,e){return new $h(e.largestBatchId,BB(r.$r,e.overlayMutation))}function Ep(r,e){const t=e.path.lastSegment();return[r,mt(e.path.popLast()),t]}function Ip(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:Ds(n.readTime),documentKey:mt(n.documentKey.path),largestBatchId:n.largestBatchId}}function WS(r){switch(r.name){case"collection":return new va(r.args[0].referenceValue,{});case"collection_group":return new Pa(r.args[1].stringValue,{});case"database":return new Pc({});case"documents":return new bc(r.args.map((e=>e.referenceValue)),{});case"where":return new ba(mB(r.args[0]),{});case"limit":{const e=r.args[0].integerValue??r.args[0].doubleValue;return new Pr(typeof e=="number"?e:Number(e),{})}case"sort":return new cn(r.args.map((e=>(function(n){var i,o;const s=(i=n.mapValue)==null?void 0:i.fields;return new Fh(mB(s.expression),(o=s.direction)==null?void 0:o.stringValue,"orderingFromProto")})(e))),{});default:throw new Error(`Stage type: ${r.name} not supported.`)}}function mB(r){return r.fieldReferenceValue?new Os(en("_exprFromProto",r.fieldReferenceValue),"_exprFromProto"):r.functionValue?(function(t){var n;return new x(t.functionValue.name,((n=t.functionValue.args)==null?void 0:n.map(mB))||[])})(r):Fs._fromProto(r)}class xc{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.Kr={}}static Qr(e,t,n,s){q(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new xc(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return sr(e).Hn({index:is,range:n},((s,i,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,n,s){const i=Xs(e),o=sr(e);return o.add({}).next((a=>{q(typeof a=="number",49019);const u=new jh(a,t,n,s),l=(function(g,D,N){const V=N.baseMutations.map((Z=>sa(g.$r,Z))),H=N.mutations.map((Z=>sa(g.$r,Z)));return{userId:D,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:V,mutations:H}})(this.serializer,this.userId,u),B=[];let d=new De(((C,g)=>oe(C.canonicalString(),g.canonicalString())));for(const C of s){const g=PE(this.userId,C.key.path,a);d=d.add(C.key.path.popLast()),B.push(o.put(l)),B.push(i.put(g,wS))}return d.forEach((C=>{B.push(this.indexManager.addToCollectionParentIndex(e,C))})),e.addOnCommittedListener((()=>{this.Kr[a]=u.keys()})),P.waitFor(B).next((()=>u))}))}lookupMutationBatch(e,t){return sr(e).get(t).next((n=>n?(q(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),Zr(this.serializer,n)):null))}Wr(e,t){return this.Kr[t]?P.resolve(this.Kr[t]):this.lookupMutationBatch(e,t).next((n=>{if(n){const s=n.keys();return this.Kr[t]=s,s}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return sr(e).Hn({index:is,range:s},((o,a,u)=>{a.userId===this.userId&&(q(a.batchId>=n,47524,{Gr:n}),i=Zr(this.serializer,a)),u.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=_r;return sr(e).Hn({index:is,range:t,reverse:!0},((s,i,o)=>{n=i.batchId,o.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,_r],[this.userId,Number.POSITIVE_INFINITY]);return sr(e).Qn(is,t).next((n=>n.map((s=>Zr(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Ru(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return Xs(e).Hn({range:s},((o,a,u)=>{const[l,B,d]=o,C=ln(B);if(l===this.userId&&t.path.isEqual(C))return sr(e).get(d).next((g=>{if(!g)throw Y(61480,{zr:o,batchId:d});q(g.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:g.userId,batchId:d}),i.push(Zr(this.serializer,g))}));u.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new De(oe);const s=[];return t.forEach((i=>{const o=Ru(this.userId,i.path),a=IDBKeyRange.lowerBound(o),u=Xs(e).Hn({range:a},((l,B,d)=>{const[C,g,D]=l,N=ln(g);C===this.userId&&i.path.isEqual(N)?n=n.add(D):d.done()}));s.push(u)})),P.waitFor(s).next((()=>this.jr(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=Ru(this.userId,n),o=IDBKeyRange.lowerBound(i);let a=new De(oe);return Xs(e).Hn({range:o},((u,l,B)=>{const[d,C,g]=u,D=ln(C);d===this.userId&&n.isPrefixOf(D)?D.length===s&&(a=a.add(g)):B.done()})).next((()=>this.jr(e,a)))}jr(e,t){const n=[],s=[];return t.forEach((i=>{s.push(sr(e).get(i).next((o=>{if(o===null)throw Y(35274,{batchId:i});q(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),n.push(Zr(this.serializer,o))})))})),P.waitFor(s).next((()=>n))}removeMutationBatch(e,t){return ME(e.qr,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.Hr(t.batchId)})),P.forEach(n,(s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))))}Hr(e){delete this.Kr[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return P.resolve();const n=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),s=[];return Xs(e).Hn({range:n},((i,o,a)=>{if(i[0]===this.userId){const u=ln(i[1]);s.push(u)}else a.done()})).next((()=>{q(s.length===0,56720,{Jr:s.map((i=>i.canonicalString()))})}))}))}containsKey(e,t){return HE(e,this.userId,t)}Yr(e){return qE(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:_r,lastStreamToken:""}))}}function HE(r,e,t){const n=Ru(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return Xs(r).Hn({range:i,jn:!0},((a,u,l)=>{const[B,d,C]=a;B===e&&d===s&&(o=!0),l.done()})).next((()=>o))}function sr(r){return st(r,Wt)}function Xs(r){return st(r,_i)}function qE(r){return st(r,Ba)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{getBundleMetadata(e,t){return Dp(e).get(t).next((n=>{if(n)return(function(i){return{id:i.bundleId,createTime:ys(i.createTime),version:i.version}})(n)}))}saveBundleMetadata(e,t){return Dp(e).put((function(s){return{bundleId:s.id,createTime:Ds(Ke(s.createTime)),version:s.version}})(t))}getNamedQuery(e,t){return yp(e).get(t).next((n=>{if(n)return(function(i){return{name:i.name,query:kc(i.bundledQuery),readTime:ys(i.readTime)}})(n)}))}saveNamedQuery(e,t){return yp(e).put((function(s){return{name:s.name,readTime:Ds(Ke(s.readTime)),bundledQuery:s.bundledQuery}})(t))}}function Dp(r){return st(r,Fc)}function yp(r){return st(r,Lc)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t){this.serializer=e,this.userId=t}static Qr(e,t){const n=t.uid||"";return new Mc(e,n)}getOverlay(e,t){return Hs(e).get(Ep(this.userId,t)).next((n=>n?Bu(this.serializer,n):null))}getOverlays(e,t){const n=Kt();return P.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}getAllOverlays(e,t){const n=Kt();return Hs(e).Hn(((s,i)=>{const o=Bu(this.serializer,i);o.largestBatchId>t&&n.set(o.getKey(),o)})).next((()=>n))}saveOverlays(e,t,n){const s=[];return n.forEach(((i,o)=>{const a=new $h(t,o);s.push(this.Zr(e,a))})),P.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach((o=>s.add(mt(o.getCollectionPath()))));const i=[];return s.forEach((o=>{const a=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(Hs(e).zn(pB,a))})),P.waitFor(i)}getOverlaysForCollection(e,t,n){const s=Kt(),i=mt(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Hs(e).Qn(pB,o).next((a=>{for(const u of a){const l=Bu(this.serializer,u);s.set(l.getKey(),l)}return s}))}getOverlaysForCollectionGroup(e,t,n,s){const i=Kt();let o;const a=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Hs(e).Hn({index:FE,range:a},((u,l,B)=>{const d=Bu(this.serializer,l);i.size()<s||d.largestBatchId===o?(i.set(d.getKey(),d),o=d.largestBatchId):B.done()})).next((()=>i))}Zr(e,t){return Hs(e).put((function(s,i,o){const[a,u,l]=Ep(i,o.mutation.key);return{userId:i,collectionPath:u,documentId:l,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:sa(s.$r,o.mutation)}})(this.serializer,this.userId,t))}}function Hs(r){return st(r,Vc)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{Xr(e){return st(e,Qh)}getSessionToken(e){return this.Xr(e).get("sessionToken").next((t=>{const n=t==null?void 0:t.value;return n?Se.fromUint8Array(n):Se.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.Xr(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){}ei(e,t){this.ti(e,t),t.ni()}ti(e,t){if("nullValue"in e)this.ri(t,5);else if("booleanValue"in e)this.ri(t,10),t.ii(e.booleanValue?1:0);else if("integerValue"in e)this.ri(t,15),t.ii(be(e.integerValue));else if("doubleValue"in e){const n=be(e.doubleValue);isNaN(n)?this.ri(t,13):(this.ri(t,15),ci(n)?t.ii(0):t.ii(n))}else if("timestampValue"in e){let n=e.timestampValue;this.ri(t,20),typeof n=="string"&&(n=Gn(n)),t.si(`${n.seconds||""}`),t.ii(n.nanos||0)}else if("stringValue"in e)this._i(e.stringValue,t),this.oi(t);else if("bytesValue"in e)this.ri(t,30),t.ai(Un(e.bytesValue)),this.oi(t);else if("referenceValue"in e)this.ui(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ri(t,45),t.ii(n.latitude||0),t.ii(n.longitude||0)}else"mapValue"in e?e_(e)?this.ri(t,Number.MAX_SAFE_INTEGER):ms(e)?this.ci(e.mapValue,t):(this.li(e.mapValue,t),this.oi(t)):"arrayValue"in e?(this.Ei(e.arrayValue,t),this.oi(t)):Y(19022,{hi:e})}_i(e,t){this.ri(t,25),this.Ti(e,t)}Ti(e,t){t.si(e)}li(e,t){const n=e.fields||{};this.ri(t,55);for(const s of Object.keys(n))this._i(s,t),this.ti(n[s],t)}ci(e,t){var o,a;const n=e.fields||{};this.ri(t,53);const s=ps,i=((a=(o=n[s].arrayValue)==null?void 0:o.values)==null?void 0:a.length)||0;this.ri(t,15),t.ii(be(i)),this._i(s,t),this.ti(n[s],t)}Ei(e,t){const n=e.values||[];this.ri(t,50);for(const s of n)this.ti(s,t)}ui(e,t){this.ri(t,37),K.fromName(e).path.forEach((n=>{this.ri(t,60),this.Ti(n,t)}))}ri(e,t){e.ii(t)}oi(e){e.ii(2)}}es.Pi=new es;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=255;function XS(r){if(r===0)return 8;let e=0;return r>>4||(e+=4,r<<=4),r>>6||(e+=2,r<<=2),r>>7||(e+=1),e}function wp(r){const e=64-(function(n){let s=0;for(let i=0;i<8;++i){const o=XS(255&n[i]);if(s+=o,o!==8)break}return s})(r);return Math.ceil(e/8)}class ZS{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ii(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ri(n.value),n=t.next();this.Ai()}Vi(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.di(n.value),n=t.next();this.fi()}mi(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ri(n);else if(n<2048)this.Ri(960|n>>>6),this.Ri(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ri(480|n>>>12),this.Ri(128|63&n>>>6),this.Ri(128|63&n);else{const s=t.codePointAt(0);this.Ri(240|s>>>18),this.Ri(128|63&s>>>12),this.Ri(128|63&s>>>6),this.Ri(128|63&s)}}this.Ai()}pi(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.di(n);else if(n<2048)this.di(960|n>>>6),this.di(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.di(480|n>>>12),this.di(128|63&n>>>6),this.di(128|63&n);else{const s=t.codePointAt(0);this.di(240|s>>>18),this.di(128|63&s>>>12),this.di(128|63&s>>>6),this.di(128|63&s)}}this.fi()}gi(e){const t=this.yi(e),n=wp(t);this.wi(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}bi(e){const t=this.yi(e),n=wp(t);this.wi(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}Si(){this.Di(qs),this.Di(255)}xi(){this.Ci(qs),this.Ci(255)}reset(){this.position=0}seed(e){this.wi(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fi(){return this.buffer.slice(0,this.position)}yi(e){const t=(function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)})(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}Ri(e){const t=255&e;t===0?(this.Di(0),this.Di(255)):t===qs?(this.Di(qs),this.Di(0)):this.Di(t)}di(e){const t=255&e;t===0?(this.Ci(0),this.Ci(255)):t===qs?(this.Ci(qs),this.Ci(0)):this.Ci(e)}Ai(){this.Di(0),this.Di(1)}fi(){this.Ci(0),this.Ci(1)}Di(e){this.wi(1),this.buffer[this.position++]=e}Ci(e){this.wi(1),this.buffer[this.position++]=~e}wi(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class eN{constructor(e){this.Oi=e}ai(e){this.Oi.Ii(e)}si(e){this.Oi.mi(e)}ii(e){this.Oi.gi(e)}ni(){this.Oi.Si()}}class tN{constructor(e){this.Oi=e}ai(e){this.Oi.Vi(e)}si(e){this.Oi.pi(e)}ii(e){this.Oi.bi(e)}ni(){this.Oi.xi()}}class _o{constructor(){this.Oi=new ZS,this.ascending=new eN(this.Oi),this.descending=new tN(this.Oi)}seed(e){this.Oi.seed(e)}Mi(e){return e===0?this.ascending:this.descending}Fi(){return this.Oi.Fi()}reset(){this.Oi.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t,n,s){this.Ni=e,this.Li=t,this.Bi=n,this.Ui=s}ki(){const e=this.Ui.length,t=e===0||this.Ui[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.Ui,0),t!==e?n.set([0],this.Ui.length):++n[n.length-1],new ts(this.Ni,this.Li,this.Bi,n)}qi(e,t,n){return{indexId:this.Ni,uid:e,arrayValue:Pu(this.Bi),directionalValue:Pu(this.Ui),orderedDocumentKey:Pu(t),documentKey:n.path.toArray()}}$i(e,t,n){const s=this.qi(e,t,n);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function ir(r,e){let t=r.Ni-e.Ni;return t!==0?t:(t=Tp(r.Bi,e.Bi),t!==0?t:(t=Tp(r.Ui,e.Ui),t!==0?t:K.comparator(r.Li,e.Li)))}function Tp(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}function Pu(r){return Bg()?(function(t){let n="";for(let s=0;s<t.length;s++)n+=String.fromCharCode(t[s]);return n})(r):r}function Ap(r){return typeof r!="string"?r:(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(r)}class Rp{constructor(e){this.Ki=new De(((t,n)=>Je.comparator(t.field,n.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Qi=e.orderBy,this.Wi=[];for(const t of e.filters){const n=t;n.isInequality()?this.Ki=this.Ki.add(n):this.Wi.push(n)}}get Gi(){return this.Ki.size>1}zi(e){if(q(e.collectionGroup===this.collectionId,49279),this.Gi)return!1;const t=iB(e);if(t!==void 0&&!this.ji(t))return!1;const n=Wr(e);let s=new Set,i=0,o=0;for(;i<n.length&&this.ji(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Ki.size>0){const a=this.Ki.getIterator().getNext();if(!s.has(a.field.canonicalString())){const u=n[i];if(!this.Hi(a,u)||!this.Ji(this.Qi[o++],u))return!1}++i}for(;i<n.length;++i){const a=n[i];if(o>=this.Qi.length||!this.Ji(this.Qi[o++],a))return!1}return!0}Yi(){if(this.Gi)return null;let e=new De(Je.comparator);const t=[];for(const n of this.Wi)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new ls(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new ls(n.field,0))}for(const n of this.Qi)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new ls(n.field,n.dir==="asc"?0:1)));return new pi(pi.UNKNOWN_ID,this.collectionId,t,gi.empty())}ji(e){for(const t of this.Wi)if(this.Hi(t,e))return!0;return!1}Hi(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}Ji(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(r){var t,n;if(q(r instanceof fe||r instanceof ye,20012),r instanceof fe){if(r instanceof C_){const s=((n=(t=r.value.arrayValue)==null?void 0:t.values)==null?void 0:n.map((i=>fe.create(r.field,"==",i))))||[];return ye.create(s,"or")}return r}const e=r.filters.map((s=>jE(s)));return ye.create(e,r.op)}function nN(r){if(r.getFilters().length===0)return[];const e=IB(jE(r));return q(JE(e),7391),_B(e)||EB(e)?[e]:e.getFilters()}function _B(r){return r instanceof fe}function EB(r){return r instanceof ye&&Bh(r)}function JE(r){return _B(r)||EB(r)||(function(t){if(t instanceof ye&&rB(t)){for(const n of t.getFilters())if(!_B(n)&&!EB(n))return!1;return!0}return!1})(r)}function IB(r){if(q(r instanceof fe||r instanceof ye,34018),r instanceof fe)return r;if(r.filters.length===1)return IB(r.filters[0]);const e=r.filters.map((n=>IB(n)));let t=ye.create(e,r.op);return t=Xu(t),JE(t)?t:(q(t instanceof ye,64498),q(fi(t),40251),q(t.filters.length>1,57927),t.filters.reduce(((n,s)=>Yh(n,s))))}function Yh(r,e){let t;return q(r instanceof fe||r instanceof ye,38388),q(e instanceof fe||e instanceof ye,25473),t=r instanceof fe?e instanceof fe?(function(s,i){return ye.create([s,i],"and")})(r,e):vp(r,e):e instanceof fe?vp(e,r):(function(s,i){if(q(s.filters.length>0&&i.filters.length>0,48005),fi(s)&&fi(i))return h_(s,i.getFilters());const o=rB(s)?s:i,a=rB(s)?i:s,u=o.filters.map((l=>Yh(l,a)));return ye.create(u,"or")})(r,e),Xu(t)}function vp(r,e){if(fi(e))return h_(e,r.getFilters());{const t=e.filters.map((n=>Yh(r,n)));return ye.create(t,"or")}}function Xu(r){if(q(r instanceof fe||r instanceof ye,11850),r instanceof fe)return r;const e=r.getFilters();if(e.length===1)return Xu(e[0]);if(l_(r))return r;const t=e.map((s=>Xu(s))),n=[];return t.forEach((s=>{s instanceof fe?n.push(s):s instanceof ye&&(s.op===r.op?n.push(...s.filters):n.push(s))})),n.length===1?n[0]:ye.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(){this.Zi=new Xh}addToCollectionParentIndex(e,t){return this.Zi.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Zi.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(qt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(qt.min())}updateCollectionGroup(e,t,n){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class Xh{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new De(ue.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new De(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="IndexedDbIndexManager",hu=new Uint8Array(0);class sN{constructor(e,t){this.databaseId=t,this.Xi=new Xh,this.es=new Qn((n=>Uu(n)),((n,s)=>dh(n,s))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Xi.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener((()=>{this.Xi.add(t)}));const i={collectionId:n,parent:mt(s)};return bp(e).put(i)}return P.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[qm(t),""],!1,!0);return bp(e).Qn(s).next((i=>{for(const o of i){if(o.collectionId!==t)break;n.push(ln(o.parent))}return n}))}addFieldIndex(e,t){const n=Eo(e),s=(function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map((u=>[u.fieldPath.canonicalString(),u.kind]))}})(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=Js(e);return i.next((a=>{o.put(Ip(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=Eo(e),s=Js(e),i=js(e);return n.delete(t.indexId).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=Eo(e),n=js(e),s=Js(e);return t.zn().next((()=>n.zn())).next((()=>s.zn()))}createTargetIndexes(e,t){return P.forEach(this.ts(t),(n=>this.getIndexType(e,n).next((s=>{if(s===0||s===1){const i=new Rp(n).Yi();if(i!=null)return this.addFieldIndex(e,i)}}))))}getDocumentsMatchingTarget(e,t){const n=js(e);let s=!0;const i=new Map;return P.forEach(this.ts(t),(o=>this.ns(e,o).next((a=>{s&&(s=!!a),i.set(o,a)})))).next((()=>{if(s){let o=ae();const a=[];return P.forEach(i,((u,l)=>{U(Pp,`Using index ${(function(re){return`id=${re.indexId}|cg=${re.collectionGroup}|f=${re.fields.map((de=>`${de.fieldPath}:${de.kind}`)).join(",")}`})(u)} to execute ${Uu(t)}`);const B=(function(re,de){const Ce=iB(de);if(Ce===void 0)return null;for(const le of Hu(re,Ce.fieldPath))switch(le.op){case"array-contains-any":return le.value.arrayValue.values||[];case"array-contains":return[le.value]}return null})(l,u),d=(function(re,de){const Ce=new Map;for(const le of Wr(de))for(const T of Hu(re,le.fieldPath))switch(T.op){case"==":case"in":Ce.set(le.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return Ce.set(le.fieldPath.canonicalString(),T.value),Array.from(Ce.values())}return null})(l,u),C=(function(re,de){const Ce=[];let le=!0;for(const T of Wr(de)){const E=T.kind===0?$C(re,T.fieldPath,re.startAt):YC(re,T.fieldPath,re.startAt);Ce.push(E.value),le&&(le=E.inclusive)}return new Rr(Ce,le)})(l,u),g=(function(re,de){const Ce=[];let le=!0;for(const T of Wr(de)){const E=T.kind===0?YC(re,T.fieldPath,re.endAt):$C(re,T.fieldPath,re.endAt);Ce.push(E.value),le&&(le=E.inclusive)}return new Rr(Ce,le)})(l,u),D=this.rs(u,l,C),N=this.rs(u,l,g),V=this.ss(u,l,d),H=this._s(u.indexId,B,D,C.inclusive,N,g.inclusive,V);return P.forEach(H,(Z=>n.Gn(Z,t.limit).next((re=>{re.forEach((de=>{const Ce=K.fromSegments(de.documentKey);o.has(Ce)||(o=o.add(Ce),a.push(Ce))}))}))))})).next((()=>a))}return P.resolve(null)}))}ts(e){let t=this.es.get(e);return t||(e.filters.length===0?t=[e]:t=nN(ye.create(e.filters,"and")).map((n=>oB(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt))),this.es.set(e,t),t)}_s(e,t,n,s,i,o,a){const u=(t!=null?t.length:1)*Math.max(n.length,i.length),l=u/(t!=null?t.length:1),B=[];for(let d=0;d<u;++d){const C=t?this.us(t[d/l]):hu,g=this.cs(e,C,n[d%l],s),D=this.ls(e,C,i[d%l],o),N=a.map((V=>this.cs(e,C,V,!0)));B.push(...this.createRange(g,D,N))}return B}cs(e,t,n,s){const i=new ts(e,K.empty(),t,n);return s?i:i.ki()}ls(e,t,n,s){const i=new ts(e,K.empty(),t,n);return s?i.ki():i}ns(e,t){const n=new Rp(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next((i=>{let o=null;for(const a of i)n.zi(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o}))}getIndexType(e,t){let n=2;const s=this.ts(t);return P.forEach(s,(i=>this.ns(e,i).next((o=>{o?n!==0&&o.fields.length<(function(u){let l=new De(Je.comparator),B=!1;for(const d of u.filters)for(const C of d.getFlattenedFilters())C.field.isKeyField()||(C.op==="array-contains"||C.op==="array-contains-any"?B=!0:l=l.add(C.field));for(const d of u.orderBy)d.field.isKeyField()||(l=l.add(d.field));return l.size+(B?1:0)})(i)&&(n=1):n=0})))).next((()=>(function(o){return o.limit!==null})(t)&&s.length>1&&n===2?1:n))}Es(e,t){const n=new _o;for(const s of Wr(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.Mi(s.kind);es.Pi.ei(i,o)}return n.Fi()}us(e){const t=new _o;return es.Pi.ei(e,t.Mi(0)),t.Fi()}hs(e,t){const n=new _o;return es.Pi.ei(gs(this.databaseId,t),n.Mi((function(i){const o=Wr(i);return o.length===0?0:o[o.length-1].kind})(e))),n.Fi()}ss(e,t,n){if(n===null)return[];let s=[];s.push(new _o);let i=0;for(const o of Wr(e)){const a=n[i++];for(const u of s)if(this.Ts(t,o.fieldPath)&&Ar(a))s=this.Ps(s,o,a);else{const l=u.Mi(o.kind);es.Pi.ei(a,l)}}return this.Is(s)}rs(e,t,n){return this.ss(e,t,n.position)}Is(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Fi();return t}Ps(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const a of s){const u=new _o;u.seed(a.Fi()),es.Pi.ei(o,u.Mi(t.kind)),i.push(u)}return i}Ts(e,t){return!!e.filters.find((n=>n instanceof fe&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(e,t){const n=Eo(e),s=Js(e);return(t?n.Qn(CB,IDBKeyRange.bound(t,t)):n.Qn()).next((i=>{const o=[];return P.forEach(i,(a=>s.get([a.indexId,this.uid]).next((u=>{o.push((function(B,d){const C=d?new gi(d.sequenceNumber,new qt(ys(d.readTime),new K(ln(d.documentKey)),d.largestBatchId)):gi.empty(),g=B.fields.map((([D,N])=>new ls(Je.fromServerFormat(D),N)));return new pi(B.indexId,B.collectionGroup,g,C)})(a,u))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:oe(n.collectionGroup,s.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,n){const s=Eo(e),i=Js(e);return this.Rs(e).next((o=>s.Qn(CB,IDBKeyRange.bound(t,t)).next((a=>P.forEach(a,(u=>i.put(Ip(u.indexId,this.uid,o,n))))))))}updateIndexEntries(e,t){const n=new Map;return P.forEach(t,((s,i)=>{const o=n.get(s.collectionGroup);return(o?P.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next((a=>(n.set(s.collectionGroup,a),P.forEach(a,(u=>this.As(e,s,u).next((l=>{const B=this.Vs(i,u);return l.isEqual(B)?P.resolve():this.ds(e,i,u,l,B)})))))))}))}fs(e,t,n,s){return js(e).put(s.qi(this.uid,this.hs(n,t.key),t.key))}ps(e,t,n,s){return js(e).delete(s.$i(this.uid,this.hs(n,t.key),t.key))}As(e,t,n){const s=js(e);let i=new De(ir);return s.Hn({index:OE,range:IDBKeyRange.only([n.indexId,this.uid,Pu(this.hs(n,t))])},((o,a)=>{i=i.add(new ts(n.indexId,t,Ap(a.arrayValue),Ap(a.directionalValue)))})).next((()=>i))}Vs(e,t){let n=new De(ir);const s=this.Es(t,e);if(s==null)return n;const i=iB(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Ar(o))for(const a of o.arrayValue.values||[])n=n.add(new ts(t.indexId,e.key,this.us(a),s))}else n=n.add(new ts(t.indexId,e.key,hu,s));return n}ds(e,t,n,s,i){U(Pp,"Updating index entries for document '%s'",t.key);const o=[];return(function(u,l,B,d,C){const g=u.getIterator(),D=l.getIterator();let N=Gs(g),V=Gs(D);for(;N||V;){let H=!1,Z=!1;if(N&&V){const re=B(N,V);re<0?Z=!0:re>0&&(H=!0)}else N!=null?Z=!0:H=!0;H?(d(V),V=Gs(D)):Z?(C(N),N=Gs(g)):(N=Gs(g),V=Gs(D))}})(s,i,ir,(a=>{o.push(this.fs(e,t,n,a))}),(a=>{o.push(this.ps(e,t,n,a))})),P.waitFor(o)}Rs(e){let t=1;return Js(e).Hn({index:NE,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,s,i)=>{i.done(),t=s.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((o,a)=>ir(o,a))).filter(((o,a,u)=>!a||ir(o,u[a-1])!==0));const s=[];s.push(e);for(const o of n){const a=ir(o,e),u=ir(o,t);if(a===0)s[0]=e.ki();else if(a>0&&u<0)s.push(o),s.push(o.ki());else if(u>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.gs(s[o],s[o+1]))return[];const a=s[o].$i(this.uid,hu,K.empty()),u=s[o+1].$i(this.uid,hu,K.empty());i.push(IDBKeyRange.bound(a,u))}return i}gs(e,t){return ir(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Sp)}getMinOffset(e,t){return P.mapArray(this.ts(t),(n=>this.ns(e,n).next((s=>s||Y(44426))))).next(Sp)}}function bp(r){return st(r,da)}function js(r){return st(r,jo)}function Eo(r){return st(r,zh)}function Js(r){return st(r,qo)}function Sp(r){q(r.length!==0,28825);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;hh(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new qt(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.ys=e}next(){return this.ys+=2,this.ys}static ws(){return new qn(0)}static bs(){return new qn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Ss(e).next((t=>{const n=new qn(t.highestTargetId);return t.highestTargetId=n.next(),this.vs(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.Ss(e).next((t=>ee.fromTimestamp(new _e(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.Ss(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.Ss(e).next((s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.vs(e,s))))}addTargetData(e,t){return this.Ds(e,t).next((()=>this.Ss(e).next((n=>(n.targetCount+=1,this.xs(t,n),this.vs(e,n))))))}updateTargetData(e,t){return this.Ds(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Ks(e).delete(t.targetId))).next((()=>this.Ss(e))).next((n=>(q(n.targetCount>0,8065),n.targetCount-=1,this.vs(e,n))))}removeTargets(e,t,n){let s=0;const i=[];return Ks(e).Hn(((o,a)=>{const u=Po(this.serializer,a);u.sequenceNumber<=t&&n.get(u.targetId)===null&&(s++,i.push(this.removeTargetData(e,u)))})).next((()=>P.waitFor(i))).next((()=>s))}forEachTarget(e,t){return Ks(e).Hn(((n,s)=>{const i=Po(this.serializer,s);t(i)}))}Ss(e){return Np(e).get(Wu).next((t=>(q(t!==null,2888),t)))}vs(e,t){return Np(e).put(Wu,t)}Ds(e,t){return Ks(e).put(UE(this.serializer,t))}xs(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Ss(e).next((t=>t.targetCount))}getTargetData(e,t){const n=Oc(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Ks(e).Hn({range:s,index:SE},((o,a,u)=>{const l=Po(this.serializer,a);qh(t,l.target)&&(i=l,u.done())})).next((()=>i))}addMatchingKeys(e,t,n){const s=[],i=Br(e);return t.forEach((o=>{const a=mt(o.path);s.push(i.put({targetId:n,path:a})),s.push(this.referenceDelegate.addReference(e,n,o))})),P.waitFor(s)}removeMatchingKeys(e,t,n){const s=Br(e);return P.forEach(t,(i=>{const o=mt(i.path);return P.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])}))}removeMatchingKeysForTargetId(e,t){const n=Br(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=Br(e);let i=ae();return s.Hn({range:n,jn:!0},((o,a,u)=>{const l=ln(o[1]),B=new K(l);i=i.add(B)})).next((()=>i))}containsKey(e,t){const n=mt(t.path),s=IDBKeyRange.bound([n],[qm(n)],!1,!0);let i=0;return Br(e).Hn({index:Kh,jn:!0,range:s},(([o,a],u,l)=>{o!==0&&(i++,l.done())})).next((()=>i>0))}ye(e,t){return Ks(e).get(t).next((n=>n?Po(this.serializer,n):null))}}function Ks(r){return st(r,Ei)}function Np(r){return st(r,hs)}function Br(r){return st(r,Ii)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e,t){this.db=e,this.garbageCollector=tE(this,t)}ir(e){const t=this.Cs(e);return this.db.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}Cs(e){let t=0;return this.sr(e,(n=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}sr(e,t){return this.Fs(e,((n,s)=>t(s)))}addReference(e,t,n){return du(e,n)}removeReference(e,t,n){return du(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return du(e,t)}Os(e,t){return(function(s,i){let o=!1;return qE(s).Jn((a=>HE(s,a,i).next((u=>(u&&(o=!0),P.resolve(!u)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Fs(e,((o,a)=>{if(a<=t){const u=this.Os(e,o).next((l=>{if(!l)return i++,n.getEntry(e,o).next((()=>(n.removeEntry(o,ee.min()),Br(e).delete((function(d){return[0,mt(d.path)]})(o)))))}));s.push(u)}})).next((()=>P.waitFor(s))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return du(e,t)}Fs(e,t){const n=Br(e);let s,i=Nt.wn;return n.Hn({index:Kh},(([o,a],{path:u,sequenceNumber:l})=>{o===0?(i!==Nt.wn&&t(new K(ln(s)),i),i=l,s=u):i=Nt.wn})).next((()=>{i!==Nt.wn&&t(new K(ln(s)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function du(r,e){return Br(r).put((function(n,s){return{targetId:0,path:mt(n.path),sequenceNumber:s}})(e,r.currentSequenceNumber))}// Copyright 2024 Google LLC* @license
function KE(r,e){var n;let t=e;for(const s of r.stages)t=aN({serializer:r.serializer,serverTimestampBehavior:(n=r.listenOptions)==null?void 0:n.serverTimestampBehavior},s,t);return t}function Gc(r,e){return KE(r,[e]).length>0}function zE(r,e){return Ue(r)?Gc(r,e):Dc(r,e)}function aN(r,e,t){if(e instanceof va)return(function(s,i,o){return o.filter((a=>a.isFoundDocument()&&`/${a.key.getCollectionPath().canonicalString()}`===i.hr))})(0,e,t);if(e instanceof ba)return(function(s,i,o){return o.filter((a=>{const u=Ho(ie(i.condition).evaluate(s,a));return u!==void 0&&Qt(u,Vt)}))})(r,e,t);if(e instanceof Pa)return(function(s,i,o){return o.filter((a=>a.isFoundDocument()&&a.key.getCollectionPath().lastSegment()===i.collectionId))})(0,e,t);if(e instanceof Pc)return(function(s,i,o){return o.filter((a=>a.isFoundDocument()))})(0,0,t);if(e instanceof bc)return(function(s,i,o){return o.filter((a=>a.isFoundDocument()&&i.Pr.has(a.key.path.toStringWithLeadingSlash())))})(0,e,t);if(e instanceof Pr)return(function(s,i,o){return o.slice(0,i.limit)})(0,e,t);if(e instanceof cn)return(function(s,i,o){const a=i.orderings.map((u=>({Ms:ie(u.expr),direction:u.direction})));return[...o].sort(((u,l)=>{for(const{Ms:B,direction:d}of a){const C=Ho(B.evaluate(s,u)),g=Ho(B.evaluate(s,l)),D=_t(C??fn,g??fn);if(D!==0)return d==="ascending"?D:-D}return 0}))})(r,e,t);throw new Error(`Unknown stage: ${e._name}`)}function Zu(r){const e=(function(n){for(let s=n.stages.length-1;s>=0;s--){const i=n.stages[s];if(i instanceof cn)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(r);return(t,n)=>{for(const s of e){const i=Ho(ie(s.expr).evaluate({serializer:r.serializer},t)),o=Ho(ie(s.expr).evaluate({serializer:r.serializer},n)),a=_t(i||fn,o||fn);if(a!==0)return s.direction==="ascending"?a:-a}return 0}}function Vl(r){for(let e=r.stages.length-1;e>=0;e--){const t=r.stages[e];if(t instanceof Pr)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(){this.changes=new Qn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?P.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return or(e).put(n)}removeEntry(e,t,n){return or(e).delete((function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Yu(o),a[a.length-1]]})(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Ns(e,n))))}getEntry(e,t){let n=Le.newInvalidDocument(t);return or(e).Hn({index:vu,range:IDBKeyRange.only(Io(t))},((s,i)=>{n=this.Ls(t,i)})).next((()=>n))}Bs(e,t){let n={size:0,document:Le.newInvalidDocument(t)};return or(e).Hn({index:vu,range:IDBKeyRange.only(Io(t))},((s,i)=>{n={document:this.Ls(t,i),size:$u(i)}})).next((()=>n))}getEntries(e,t){let n=$e();return this.Us(e,t,((s,i)=>{const o=this.Ls(s,i);n=n.insert(s,o)})).next((()=>n))}getAllEntries(e){let t=$e();return or(e).Hn(((n,s)=>{const i=this.Ls(K.fromSegments(s.prefixPath.concat(s.collectionGroup,s.documentId)),s);t=t.insert(i.key,i)})).next((()=>t))}ks(e,t){let n=$e(),s=new ve(K.comparator);return this.Us(e,t,((i,o)=>{const a=this.Ls(i,o);n=n.insert(i,a),s=s.insert(i,$u(o))})).next((()=>({documents:n,qs:s})))}Us(e,t,n){if(t.isEmpty())return P.resolve();let s=new De(Lp);t.forEach((u=>s=s.add(u)));const i=IDBKeyRange.bound(Io(s.first()),Io(s.last())),o=s.getIterator();let a=o.getNext();return or(e).Hn({index:vu,range:i},((u,l,B)=>{const d=K.fromSegments([...l.prefixPath,l.collectionGroup,l.documentId]);for(;a&&Lp(a,d)<0;)n(a,null),a=o.getNext();a&&a.isEqual(d)&&(n(a,l),a=o.hasNext()?o.getNext():null),a?B.Kn(Io(a)):B.done()})).next((()=>{for(;a;)n(a,null),a=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,n,s,i){const o=Ue(t)?ue.fromString(Sa(t)):t.path,a=[o.popLast().toArray(),o.lastSegment(),Yu(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return or(e).Qn(IDBKeyRange.bound(a,u,!0)).next((l=>{i==null||i.incrementDocumentReadCount(l.length);let B=$e();for(const d of l){const C=this.Ls(K.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);C.isFoundDocument()&&(zE(t,C)||s.has(C.key))&&(B=B.insert(C.key,C))}return B}))}getAllFromCollectionGroup(e,t,n,s){let i=$e();const o=Fp(t,n),a=Fp(t,qt.max());return or(e).Hn({index:bE,range:IDBKeyRange.bound(o,a,!0)},((u,l,B)=>{const d=this.Ls(K.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);i=i.insert(d.key,d),i.size===s&&B.done()})).next((()=>i))}newChangeBuffer(e){return new cN(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return Op(e).get(fB).next((t=>(q(!!t,20021),t)))}Ns(e,t){return Op(e).put(fB,t)}Ls(e,t){if(t){const n=QS(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(ee.min())))return n}return Le.newInvalidDocument(e)}}function WE(r){return new uN(r)}class cN extends QE{constructor(e,t){super(),this.$s=e,this.trackRemovals=t,this.Ks=new Qn((n=>n.toString()),((n,s)=>n.isEqual(s)))}applyChanges(e){const t=[];let n=0,s=new De(((i,o)=>oe(i.canonicalString(),o.canonicalString())));return this.changes.forEach(((i,o)=>{const a=this.Ks.get(i);if(t.push(this.$s.removeEntry(e,i,a.readTime)),o.isValidDocument()){const u=_p(this.$s.serializer,o);s=s.add(i.path.popLast());const l=$u(u);n+=l-a.size,t.push(this.$s.addEntry(e,i,u))}else if(n-=a.size,this.trackRemovals){const u=_p(this.$s.serializer,o.convertToNoDocument(ee.min()));t.push(this.$s.addEntry(e,i,u))}})),s.forEach((i=>{t.push(this.$s.indexManager.addToCollectionParentIndex(e,i))})),t.push(this.$s.updateMetadata(e,n)),P.waitFor(t)}getFromCache(e,t){return this.$s.Bs(e,t).next((n=>(this.Ks.set(t,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(e,t){return this.$s.ks(e,t).next((({documents:n,qs:s})=>(s.forEach(((i,o)=>{this.Ks.set(i,{size:o,readTime:n.get(i).readTime})})),n)))}}function Op(r){return st(r,ha)}function or(r){return st(r,Qu)}function Io(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Fp(r,e){const t=e.documentKey.path.toArray();return[r,Yu(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Lp(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=oe(t[i],n[i]),s)return s;return s=oe(t.length,n.length),s||(s=oe(t[t.length-2],n[n.length-2]),s||oe(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(n=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(n!==null&&Vo(n.mutation,s,St.empty(),_e.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,ae()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=ae()){const s=Kt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,n).next((i=>{let o=Yr();return i.forEach(((a,u)=>{o=o.insert(a,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=Kt();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,ae())))}populateOverlays(e,t,n){const s=[];return n.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,n,s){let i=$e();const o=xo(),a=(function(){return xo()})();return t.forEach(((u,l)=>{const B=n.get(l.key);s.has(l.key)&&(B===void 0||B.mutation instanceof Kn)?i=i.insert(l.key,l):B!==void 0?(o.set(l.key,B.mutation.getFieldMask()),Vo(B.mutation,l,B.mutation.getFieldMask(),_e.now())):o.set(l.key,St.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((l,B)=>o.set(l,B))),t.forEach(((l,B)=>a.set(l,new lN(B,o.get(l)??null)))),a)))}recalculateAndSaveOverlays(e,t){const n=xo();let s=new ve(((o,a)=>o-a)),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((u=>{const l=t.get(u);if(l===null)return;let B=n.get(u)||St.empty();B=a.applyToLocalView(l,B),n.set(u,B);const d=(s.get(a.batchId)||ae()).add(u);s=s.insert(a.batchId,d)}))})).next((()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,B=u.value,d=A_();B.forEach((C=>{if(!i.has(C)){const g=a_(t.get(C),n.get(C));g!==null&&d.set(C,g),i=i.add(C)}})),o.push(this.documentOverlayCache.saveOverlays(e,l,d))}return P.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,s){return Ue(t)?this.getDocumentsMatchingPipeline(e,t,n,s):jv(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ch(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):P.resolve(Kt());let a=Ci,u=i;return o.next((l=>P.forEach(l,((B,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(B)?P.resolve():this.remoteDocumentCache.getEntry(e,B).next((C=>{u=u.insert(B,C)}))))).next((()=>this.populateOverlays(e,l,i))).next((()=>this.computeViews(e,u,l,ae()))).next((B=>({batchId:a,changes:T_(B)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next((n=>{let s=Yr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Yr();return this.indexManager.getCollectionParents(e,i).next((a=>P.forEach(a,(u=>{const l=(function(d,C){return new zn(C,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,n,s).next((B=>{B.forEach(((d,C)=>{o=o.insert(d,C)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s)))).next((o=>this.retrieveMatchingLocalDocuments(i,o,(a=>Dc(t,a)))))}getDocumentsMatchingPipeline(e,t,n,s){if(Ln(t)==="collection_group"){const i=Vh(t);let o=Yr();return this.indexManager.getCollectionParents(e,i).next((a=>P.forEach(a,(u=>{const l=(function(d,C){const g=d.stages.map((D=>D instanceof Pa?new va(C.canonicalString(),{}):D));return new pt(d.serializer,g)})(t,u.child(i));return this.getDocumentsMatchingPipeline(e,l,n,s).next((B=>{B.forEach(((d,C)=>{o=o.insert(d,C)}))}))})).next((()=>o))))}{let i;return this.getOverlaysForPipeline(e,t,n.largestBatchId).next((o=>{switch(i=o,Ln(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s);case"documents":let a=ae();for(const u of Ju(t))a=a.add(K.fromPath(u));return this.remoteDocumentCache.getEntries(e,a);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new M("invalid-argument",`Invalid pipeline source to execute offline: ${Vn(t)}`)}})).next((o=>this.retrieveMatchingLocalDocuments(i,o,(a=>Gc(t,a)))))}}retrieveMatchingLocalDocuments(e,t,n){e.forEach(((i,o)=>{const a=o.getKey();t.get(a)===null&&(t=t.insert(a,Le.newInvalidDocument(a)))}));let s=Yr();return t.forEach(((i,o)=>{const a=e.get(i);a!==void 0&&Vo(a.mutation,o,St.empty(),_e.now()),n(o)&&(s=s.insert(i,o))})),s}getOverlaysForPipeline(e,t,n){switch(Ln(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,ue.fromString(Sa(t)),n);case"collection_group":throw new M("invalid-argument",`Unexpected collection group pipeline: ${Vn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,Ju(t).map((s=>K.fromPath(s))));case"database":return this.documentOverlayCache.getAllOverlays(e,n);default:throw new M("invalid-argument",`Failed to get overlays for pipeline: ${Vn(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e){this.serializer=e,this.Qs=new Map,this.Ws=new Map}getBundleMetadata(e,t){return P.resolve(this.Qs.get(t))}saveBundleMetadata(e,t){return this.Qs.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Ke(s.createTime)}})(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Ws.get(t))}saveNamedQuery(e,t){return this.Ws.set(t.name,(function(s){return{name:s.name,query:kc(s.bundledQuery),readTime:Ke(s.readTime)}})(t)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(){this.overlays=new ve(K.comparator),this.Gs=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Kt();return P.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}getAllOverlays(e,t){const n=Kt();return this.overlays.forEach(((s,i)=>{i.largestBatchId>t&&n.set(s,i)})),P.resolve(n)}saveOverlays(e,t,n){return n.forEach(((s,i)=>{this.Zr(e,t,i)})),P.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Gs.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Gs.delete(n)),P.resolve()}getOverlaysForCollection(e,t,n){const s=Kt(),i=t.length+1,o=new K(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===i&&u.largestBatchId>n&&s.set(u.getKey(),u)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new ve(((l,B)=>l-B));const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>n){let B=i.get(l.largestBatchId);B===null&&(B=Kt(),i=i.insert(l.largestBatchId,B)),B.set(l.getKey(),l)}}const a=Kt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((l,B)=>a.set(l,B))),!(a.size()>=s)););return P.resolve(a)}Zr(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Gs.get(s.largestBatchId).delete(n.key);this.Gs.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new $h(t,n));let i=this.Gs.get(t);i===void 0&&(i=ae(),this.Gs.set(t,i)),this.Gs.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(){this.sessionToken=Se.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(){this.zs=new De(ot.js),this.Hs=new De(ot.Js)}isEmpty(){return this.zs.isEmpty()}addReference(e,t){const n=new ot(e,t);this.zs=this.zs.add(n),this.Hs=this.Hs.add(n)}Ys(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Zs(new ot(e,t))}Xs(e,t){e.forEach((n=>this.removeReference(n,t)))}e_(e){const t=new K(new ue([])),n=new ot(t,e),s=new ot(t,e+1),i=[];return this.Hs.forEachInRange([n,s],(o=>{this.Zs(o),i.push(o.key)})),i}t_(){this.zs.forEach((e=>this.Zs(e)))}Zs(e){this.zs=this.zs.delete(e),this.Hs=this.Hs.delete(e)}n_(e){const t=new K(new ue([])),n=new ot(t,e),s=new ot(t,e+1);let i=ae();return this.Hs.forEachInRange([n,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new ot(e,0),n=this.zs.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class ot{constructor(e,t){this.key=e,this.r_=t}static js(e,t){return K.comparator(e.key,t.key)||oe(e.r_,t.r_)}static Js(e,t){return oe(e.r_,t.r_)||K.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Gr=1,this.i_=new De(ot.js)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Gr;this.Gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jh(i,t,n,s);this.mutationQueue.push(o);for(const a of s)this.i_=this.i_.add(new ot(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.s_(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.__(n),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?_r:this.Gr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ot(t,0),s=new ot(t,Number.POSITIVE_INFINITY),i=[];return this.i_.forEachInRange([n,s],(o=>{const a=this.s_(o.r_);i.push(a)})),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new De(oe);return t.forEach((s=>{const i=new ot(s,0),o=new ot(s,Number.POSITIVE_INFINITY);this.i_.forEachInRange([i,o],(a=>{n=n.add(a.r_)}))})),P.resolve(this.o_(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;K.isDocumentKey(i)||(i=i.child(""));const o=new ot(new K(i),0);let a=new De(oe);return this.i_.forEachWhile((u=>{const l=u.key.path;return!!n.isPrefixOf(l)&&(l.length===s&&(a=a.add(u.r_)),!0)}),o),P.resolve(this.o_(a))}o_(e){const t=[];return e.forEach((n=>{const s=this.s_(n);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){q(this.a_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.i_;return P.forEach(t.mutations,(s=>{const i=new ot(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.i_=n}))}Hr(e){}containsKey(e,t){const n=new ot(t,0),s=this.i_.firstAfterOrEqual(n);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}a_(e,t){return this.__(e)}__(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}s_(e){const t=this.__(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e){this.u_=e,this.docs=(function(){return new ve(K.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.u_(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return P.resolve(n?n.document.mutableCopy():Le.newInvalidDocument(t))}getEntries(e,t){let n=$e();return t.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():Le.newInvalidDocument(s))})),P.resolve(n)}getAllEntries(e){let t=$e();return this.docs.forEach(((n,s)=>{t=t.insert(n,s.document)})),P.resolve(t)}getDocumentsMatchingQuery(e,t,n,s){let i,o;Ue(t)?(i=ue.fromString(Sa(t)),o=B=>Gc(t,B)):(i=t.path,o=B=>Dc(t,B));let a=$e();const u=new K(i.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:B,value:{document:d}}=l.getNext();if(!i.isPrefixOf(B.path))break;B.path.length>i.length+1||hh(g_(d),n)<=0||(s.has(d.key)||o(d))&&(a=a.insert(d.key,d.mutableCopy()))}return P.resolve(a)}getAllFromCollectionGroup(e,t,n,s){Y(9500)}c_(e,t){return P.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new pN(this)}getSize(e){return P.resolve(this.size)}}class pN extends QE{constructor(e){super(),this.$s=e}applyChanges(e){const t=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?t.push(this.$s.addEntry(e,s)):this.$s.removeEntry(n)})),P.waitFor(t)}getFromCache(e,t){return this.$s.getEntry(e,t)}getAllFromCache(e,t){return this.$s.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e){this.persistence=e,this.l_=new Qn((t=>Oc(t)),qh),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.E_=0,this.h_=new Zh,this.targetCount=0,this.T_=qn.ws()}forEachTarget(e,t){return this.l_.forEach(((n,s)=>t(s))),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.E_)}allocateTargetId(e){return this.highestTargetId=this.T_.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.E_&&(this.E_=t),P.resolve()}Ds(e){this.l_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.T_=new qn(t),this.highestTargetId=t),e.sequenceNumber>this.E_&&(this.E_=e.sequenceNumber)}addTargetData(e,t){return this.Ds(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Ds(t),P.resolve()}removeTargetData(e,t){return this.l_.delete(t.target),this.h_.e_(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.l_.forEach(((o,a)=>{a.sequenceNumber<=t&&n.get(a.targetId)===null&&(this.l_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)})),P.waitFor(i).next((()=>s))}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const n=this.l_.get(t)||null;return P.resolve(n)}addMatchingKeys(e,t,n){return this.h_.Ys(t,n),P.resolve()}removeMatchingKeys(e,t,n){this.h_.Xs(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.h_.e_(t),P.resolve()}getMatchingKeysForTargetId(e,t){const n=this.h_.n_(t);return P.resolve(n)}containsKey(e,t){return P.resolve(this.h_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t){this.P_={},this.overlays={},this.I_=new Nt(0),this.R_=!1,this.R_=!0,this.A_=new dN,this.referenceDelegate=e(this),this.V_=new gN(this),this.indexManager=new rN,this.remoteDocumentCache=(function(s){return new CN(s)})((n=>this.referenceDelegate.d_(n))),this.serializer=new GE(t),this.f_=new BN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hN,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.P_[e.toKey()];return n||(n=new fN(t,this.referenceDelegate),this.P_[e.toKey()]=n),n}getGlobalsCache(){return this.A_}getTargetCache(){return this.V_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.f_}runTransaction(e,t,n){U("MemoryPersistence","Starting transaction:",e);const s=new mN(this.I_.next());return this.referenceDelegate.m_(),n(s).next((i=>this.referenceDelegate.p_(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}g_(e,t){return P.or(Object.values(this.P_).map((n=>()=>n.containsKey(e,t))))}}class mN extends Y_{constructor(e){super(),this.currentSequenceNumber=e}}class Uc{constructor(e){this.persistence=e,this.y_=new Zh,this.w_=null}static b_(e){return new Uc(e)}get S_(){if(this.w_)return this.w_;throw Y(60996)}addReference(e,t,n){return this.y_.addReference(n,t),this.S_.delete(n.toString()),P.resolve()}removeReference(e,t,n){return this.y_.removeReference(n,t),this.S_.add(n.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.S_.add(t.toString()),P.resolve()}removeTarget(e,t){this.y_.e_(t.targetId).forEach((s=>this.S_.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.S_.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}m_(){this.w_=new Set}p_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.S_,(n=>{const s=K.fromPath(n);return this.v_(e,s).next((i=>{i||t.removeEntry(s,ee.min())}))})).next((()=>(this.w_=null,t.apply(e))))}updateLimboDocument(e,t){return this.v_(e,t).next((n=>{n?this.S_.delete(t.toString()):this.S_.add(t.toString())}))}d_(e){return 0}v_(e,t){return P.or([()=>P.resolve(this.y_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.g_(e,t)])}}class ec{constructor(e,t){this.persistence=e,this.D_=new Qn((n=>mt(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=tE(this,t)}static b_(e,t){return new ec(e,t)}m_(){}p_(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}ir(e){const t=this.Cs(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}Cs(e){let t=0;return this.sr(e,(n=>{t++})).next((()=>t))}sr(e,t){return P.forEach(this.D_,((n,s)=>this.Os(e,n,s).next((i=>i?P.resolve():t(s)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.c_(e,(o=>this.Os(e,o,t).next((a=>{a||(n++,i.removeEntry(o,ee.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.D_.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.D_.set(n,e.currentSequenceNumber),P.resolve()}removeReference(e,t,n){return this.D_.set(n,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.D_.set(t,e.currentSequenceNumber),P.resolve()}d_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Du(e.data.value)),t}Os(e,t,n){return P.or([()=>this.persistence.g_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.D_.get(t);return P.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e){this.serializer=e}Nn(e,t,n,s){const i=new Ac("createOrUpgrade",t);n<1&&s>=1&&((function(u){u.createObjectStore(Oa)})(e),(function(u){u.createObjectStore(Ba,{keyPath:yS}),u.createObjectStore(Wt,{keyPath:gp,autoIncrement:!0}).createIndex(is,mp,{unique:!0}),u.createObjectStore(_i)})(e),Vp(e),(function(u){u.createObjectStore($r)})(e));let o=P.resolve();return n<3&&s>=3&&(n!==0&&((function(u){u.deleteObjectStore(Ii),u.deleteObjectStore(Ei),u.deleteObjectStore(hs)})(e),Vp(e)),o=o.next((()=>(function(u){const l=u.store(hs),B={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ee.min().toTimestamp(),targetCount:0};return l.put(Wu,B)})(i)))),n<4&&s>=4&&(n!==0&&(o=o.next((()=>(function(u,l){return l.store(Wt).Qn().next((d=>{u.deleteObjectStore(Wt),u.createObjectStore(Wt,{keyPath:gp,autoIncrement:!0}).createIndex(is,mp,{unique:!0});const C=l.store(Wt),g=d.map((D=>C.put(D)));return P.waitFor(g)}))})(e,i)))),o=o.next((()=>{(function(u){u.createObjectStore(Di,{keyPath:NS})})(e)}))),n<5&&s>=5&&(o=o.next((()=>this.x_(i)))),n<6&&s>=6&&(o=o.next((()=>((function(u){u.createObjectStore(ha)})(e),this.C_(i))))),n<7&&s>=7&&(o=o.next((()=>this.F_(i)))),n<8&&s>=8&&(o=o.next((()=>this.O_(e,i)))),n<9&&s>=9&&(o=o.next((()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)}))),n<10&&s>=10&&(o=o.next((()=>this.M_(i)))),n<11&&s>=11&&(o=o.next((()=>{(function(u){u.createObjectStore(Fc,{keyPath:OS})})(e),(function(u){u.createObjectStore(Lc,{keyPath:FS})})(e)}))),n<12&&s>=12&&(o=o.next((()=>{(function(u){const l=u.createObjectStore(Vc,{keyPath:US});l.createIndex(pB,HS,{unique:!1}),l.createIndex(FE,qS,{unique:!1})})(e)}))),n<13&&s>=13&&(o=o.next((()=>(function(u){const l=u.createObjectStore(Qu,{keyPath:TS});l.createIndex(vu,AS),l.createIndex(bE,RS)})(e))).next((()=>this.N_(e,i))).next((()=>e.deleteObjectStore($r)))),n<14&&s>=14&&(o=o.next((()=>this.L_(e,i)))),n<15&&s>=15&&(o=o.next((()=>(function(u){u.createObjectStore(zh,{keyPath:LS,autoIncrement:!0}).createIndex(CB,VS,{unique:!1}),u.createObjectStore(qo,{keyPath:kS}).createIndex(NE,xS,{unique:!1}),u.createObjectStore(jo,{keyPath:MS}).createIndex(OE,GS,{unique:!1})})(e)))),n<16&&s>=16&&(o=o.next((()=>{t.objectStore(qo).clear()})).next((()=>{t.objectStore(jo).clear()}))),n<17&&s>=17&&(o=o.next((()=>{(function(u){u.createObjectStore(Qh,{keyPath:jS})})(e)}))),n<18&&s>=18&&Bg()&&(o=o.next((()=>{t.objectStore(qo).clear()})).next((()=>{t.objectStore(jo).clear()}))),o}C_(e){let t=0;return e.store($r).Hn(((n,s)=>{t+=$u(s)})).next((()=>{const n={byteSize:t};return e.store(ha).put(fB,n)}))}x_(e){const t=e.store(Ba),n=e.store(Wt);return t.Qn().next((s=>P.forEach(s,(i=>{const o=IDBKeyRange.bound([i.userId,_r],[i.userId,i.lastAcknowledgedBatchId]);return n.Qn(is,o).next((a=>P.forEach(a,(u=>{q(u.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:u.batchId});const l=Zr(this.serializer,u);return ME(e,i.userId,l).next((()=>{}))}))))}))))}F_(e){const t=e.store(Ii),n=e.store($r);return e.store(hs).get(Wu).next((s=>{const i=[];return n.Hn(((o,a)=>{const u=new ue(o),l=(function(d){return[0,mt(d)]})(u);i.push(t.get(l).next((B=>B?P.resolve():(d=>t.put({targetId:0,path:mt(d),sequenceNumber:s.highestListenSequenceNumber}))(u))))})).next((()=>P.waitFor(i)))}))}O_(e,t){e.createObjectStore(da,{keyPath:SS});const n=t.store(da),s=new Xh,i=o=>{if(s.add(o)){const a=o.lastSegment(),u=o.popLast();return n.put({collectionId:a,parent:mt(u)})}};return t.store($r).Hn({jn:!0},((o,a)=>{const u=new ue(o);return i(u.popLast())})).next((()=>t.store(_i).Hn({jn:!0},(([o,a,u],l)=>{const B=ln(a);return i(B.popLast())}))))}M_(e){const t=e.store(Ei);return t.Hn(((n,s)=>{const i=Po(this.serializer,s),o=UE(this.serializer,i);return t.put(o)}))}N_(e,t){const n=t.store($r),s=[];return n.Hn(((i,o)=>{const a=t.store(Qu),u=(function(d){return d.document?new K(ue.fromString(d.document.name).popFirst(5)):d.noDocument?K.fromSegments(d.noDocument.path):d.unknownDocument?K.fromSegments(d.unknownDocument.path):Y(36783)})(o).path.toArray(),l={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(l))})).next((()=>P.waitFor(s)))}L_(e,t){const n=t.store(Wt),s=WE(this.serializer),i=new ed(Uc.b_,this.serializer.$r);return n.Qn().next((o=>{const a=new Map;return o.forEach((u=>{let l=a.get(u.userId)??ae();Zr(this.serializer,u).keys().forEach((B=>l=l.add(B))),a.set(u.userId,l)})),P.forEach(a,((u,l)=>{const B=new at(l),d=Mc.Qr(this.serializer,B),C=i.getIndexManager(B),g=xc.Qr(B,this.serializer,C,i.referenceDelegate);return new $E(s,g,d,C).recalculateAndSaveOverlaysForDocumentKeys(new gB(t,Nt.wn),u).next()}))}))}}function Vp(r){r.createObjectStore(Ii,{keyPath:PS}).createIndex(Kh,bS,{unique:!0}),r.createObjectStore(Ei,{keyPath:"targetId"}).createIndex(SE,vS,{unique:!0}),r.createObjectStore(hs)}const ar="IndexedDbPersistence",kl=18e5,xl=5e3,Ml="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",YE="main";class td{constructor(e,t,n,s,i,o,a,u,l,B,d=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Ct=i,this.window=o,this.document=a,this.B_=l,this.U_=B,this.k_=d,this.I_=null,this.R_=!1,this.isPrimary=!1,this.networkEnabled=!0,this.q_=null,this.inForeground=!1,this.K_=null,this.Q_=null,this.W_=Number.NEGATIVE_INFINITY,this.G_=C=>Promise.resolve(),!td.Ye())throw new M(b.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new oN(this,s),this.z_=t+YE,this.serializer=new GE(u),this.j_=new pn(this.z_,this.k_,new _N(this.serializer)),this.A_=new YS,this.V_=new iN(this.referenceDelegate,this.serializer),this.remoteDocumentCache=WE(this.serializer),this.f_=new $S,this.window&&this.window.localStorage?this.H_=this.window.localStorage:(this.H_=null,B===!1&&je(ar,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.J_().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new M(b.FAILED_PRECONDITION,Ml);return this.Y_(),this.Z_(),this.X_(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.V_.getHighestSequenceNumber(e)))})).then((e=>{this.I_=new Nt(e,this.B_)})).then((()=>{this.R_=!0})).catch((e=>(this.j_&&this.j_.close(),Promise.reject(e))))}eo(e){return this.G_=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.j_.Bn((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ct.enqueueAndForget((async()=>{this.started&&await this.J_()})))}J_(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>fu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.no(e).next((t=>{t||(this.isPrimary=!1,this.Ct.enqueueRetryable((()=>this.G_(!1))))}))})).next((()=>this.ro(e))).next((t=>this.isPrimary&&!t?this.io(e).next((()=>!1)):!!t&&this.so(e).next((()=>!0)))))).catch((e=>{if(kr(e))return U(ar,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U(ar,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Ct.enqueueRetryable((()=>this.G_(e))),this.isPrimary=e}))}no(e){return Do(e).get(Us).next((t=>P.resolve(this._o(t))))}oo(e){return fu(e).delete(this.clientId)}async ao(){if(this.isPrimary&&!this.uo(this.W_,kl)){this.W_=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const n=st(t,Di);return n.Qn().next((s=>{const i=this.co(s,kl),o=s.filter((a=>i.indexOf(a)===-1));return P.forEach(o,(a=>n.delete(a.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.H_)for(const t of e)this.H_.removeItem(this.lo(t.clientId))}}X_(){this.Q_=this.Ct.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.J_().then((()=>this.ao())).then((()=>this.X_()))))}_o(e){return!!e&&e.ownerId===this.clientId}ro(e){return this.U_?P.resolve(!0):Do(e).get(Us).next((t=>{if(t!==null&&this.uo(t.leaseTimestampMs,xl)&&!this.Eo(t.ownerId)){if(this._o(t)&&this.networkEnabled)return!0;if(!this._o(t)){if(!t.allowTabSynchronization)throw new M(b.FAILED_PRECONDITION,Ml);return!1}}return!(!this.networkEnabled||!this.inForeground)||fu(e).Qn().next((n=>this.co(n,xl).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&U(ar,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.R_=!1,this.ho(),this.Q_&&(this.Q_.cancel(),this.Q_=null),this.To(),this.Po(),await this.j_.runTransaction("shutdown","readwrite",[Oa,Di],(e=>{const t=new gB(e,Nt.wn);return this.io(t).next((()=>this.oo(t)))})),this.j_.close(),this.Io()}co(e,t){return e.filter((n=>this.uo(n.updateTimeMs,t)&&!this.Eo(n.clientId)))}Ro(){return this.runTransaction("getActiveClients","readonly",(e=>fu(e).Qn().next((t=>this.co(t,kl).map((n=>n.clientId))))))}get started(){return this.R_}getGlobalsCache(){return this.A_}getMutationQueue(e,t){return xc.Qr(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.V_}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new sN(e,this.serializer.$r.databaseId)}getDocumentOverlayCache(e){return Mc.Qr(this.serializer,e)}getBundleCache(){return this.f_}runTransaction(e,t,n){U(ar,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(function(u){return u===18?zS:u===17?xE:u===16?KS:u===15?Wh:u===14?kE:u===13?VE:u===12?JS:u===11?LE:void Y(60245)})(this.k_);let o;return this.j_.runTransaction(e,s,i,(a=>(o=new gB(a,this.I_?this.I_.next():Nt.wn),t==="readwrite-primary"?this.no(o).next((u=>!!u||this.ro(o))).next((u=>{if(!u)throw je(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ct.enqueueRetryable((()=>this.G_(!1))),new M(b.FAILED_PRECONDITION,$_);return n(o)})).next((u=>this.so(o).next((()=>u)))):this.Ao(o).next((()=>n(o)))))).then((a=>(o.raiseOnCommittedEvent(),a)))}Ao(e){return Do(e).get(Us).next((t=>{if(t!==null&&this.uo(t.leaseTimestampMs,xl)&&!this.Eo(t.ownerId)&&!this._o(t)&&!(this.U_||this.allowTabSynchronization&&t.allowTabSynchronization))throw new M(b.FAILED_PRECONDITION,Ml)}))}so(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Do(e).put(Us,t)}static Ye(){return pn.Ye()}io(e){const t=Do(e);return t.get(Us).next((n=>this._o(n)?(U(ar,"Releasing primary lease."),t.delete(Us)):P.resolve()))}uo(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(je(`Detected an update time that is in the future: ${e} > ${n}`),!1))}Y_(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.K_=()=>{this.Ct.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.J_())))},this.document.addEventListener("visibilitychange",this.K_),this.inForeground=this.document.visibilityState==="visible")}To(){this.K_&&(this.document.removeEventListener("visibilitychange",this.K_),this.K_=null)}Z_(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.q_=()=>{this.ho();const t=/(?:Version|Mobile)\/1[456]/;lg()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ct.enterRestrictedMode(!0),this.Ct.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.q_))}Po(){this.q_&&(this.window.removeEventListener("pagehide",this.q_),this.q_=null)}Eo(e){var t;try{const n=((t=this.H_)==null?void 0:t.getItem(this.lo(e)))!==null;return U(ar,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return je(ar,"Failed to get zombied client id.",n),!1}}ho(){if(this.H_)try{this.H_.setItem(this.lo(this.clientId),String(Date.now()))}catch(e){je("Failed to set zombie client id.",e)}}Io(){if(this.H_)try{this.H_.removeItem(this.lo(this.clientId))}catch{}}lo(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Do(r){return st(r,Oa)}function fu(r){return st(r,Di)}function nd(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Vo=n,this.fo=s}static mo(e,t){let n=ae(),s=ae();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new rd(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(r,e){return K.comparator(r.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(){this.po=!1,this.yo=!1,this.wo=100,this.bo=(function(){return lg()?8:X_(tt())>0?6:4})()}initialize(e,t){this.So=e,this.indexManager=t,this.po=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.vo(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.Do(e,t,s,n).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new IN;return this.xo(e,t,o).next((a=>{if(i.result=a,this.yo)return this.Co(e,t,o,a.size)}))})).next((()=>i.result))}Co(e,t,n,s){return Ue(t)?P.resolve():n.documentReadCount<this.wo?(Ws()<=he.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",ko(t),"since it only creates cache indexes for collection contains","more than or equal to",this.wo,"documents"),P.resolve()):(Ws()<=he.DEBUG&&U("QueryEngine","Query:",ko(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.bo*s?(Ws()<=he.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",ko(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,gt(t))):P.resolve())}vo(e,t){if(Ue(t))return P.resolve(null);let n=t;if(XC(n))return P.resolve(null);let s=gt(n);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(n.limit!==null&&i===1&&(n=qu(n,null,"F"),s=gt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((o=>{const a=ae(...o);return this.So.getDocuments(e,a).next((u=>this.indexManager.getMinOffset(e,s).next((l=>{const B=this.Fo(n,u);return this.Oo(n,B,a,l.readTime)?this.vo(e,qu(n,null,"F")):this.Mo(e,B,n,l)}))))})))))}Do(e,t,n,s){return(Ue(t)?(function(o){for(const a of o.stages){if(a instanceof Pr||a instanceof fp)return!1;if(a instanceof ba){if(a.condition instanceof pE&&a.condition._expr.name==="exists"&&a.condition._expr.params[0]instanceof Os&&a.condition._expr.params[0].fieldName===an)continue;return!1}}return!0})(t):XC(t))||s.isEqual(ee.min())?P.resolve(null):this.So.getDocuments(e,n).next((i=>{const o=this.Fo(t,i);return this.Oo(t,o,n,s)?P.resolve(null):(Ws()<=he.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cp(t)),this.Mo(e,o,t,p_(s,Ci)).next((a=>a)))}))}Fo(e,t){let n,s;return Ue(e)?(n=new De(EN),s=i=>Gc(e,i)):(n=new De(yc(e)),s=i=>Dc(e,i)),t.forEach(((i,o)=>{s(o)&&(n=n.add(o))})),n}Oo(e,t,n,s){if(Ue(e))return(function(a){return a.stages.some((u=>u instanceof Pr||u instanceof fp))})(e);if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}xo(e,t,n){return Ws()<=he.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Cp(t)),this.So.getDocumentsMatchingQuery(e,t,qt.min(),n)}Mo(e,t,n,s){return this.So.getDocumentsMatchingQuery(e,n,s).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="LocalStore",DN=3e8;class yN{constructor(e,t,n,s){this.persistence=e,this.No=t,this.serializer=s,this.Lo=new ve(oe),this.Bo=new Qn((i=>Oc(i)),qh),this.Uo=new Map,this.ko=e.getRemoteDocumentCache(),this.V_=e.getTargetCache(),this.f_=e.getBundleCache(),this.qo(n)}qo(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $E(this.ko,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ko.setIndexManager(this.indexManager),this.No.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Lo)))}}function ZE(r,e,t,n){return new yN(r,e,t,n)}async function eI(r,e){const t=W(r);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,t.qo(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],a=[];let u=ae();for(const l of s){o.push(l.batchId);for(const B of l.mutations)u=u.add(B.key)}for(const l of i){a.push(l.batchId);for(const B of l.mutations)u=u.add(B.key)}return t.localDocuments.getDocuments(n,u).next((l=>({$o:l,removedBatchIds:o,addedBatchIds:a})))}))}))}function wN(r,e){const t=W(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=e.batch.keys(),i=t.ko.newChangeBuffer({trackRemovals:!0});return(function(a,u,l,B){const d=l.batch,C=d.keys();let g=P.resolve();return C.forEach((D=>{g=g.next((()=>B.getEntry(u,D))).next((N=>{const V=l.docVersions.get(D);q(V!==null,48541),N.version.compareTo(V)<0&&(d.applyToRemoteDocument(N,l),N.isValidDocument()&&(N.setReadTime(l.commitVersion),B.addEntry(N)))}))})),g.next((()=>a.mutationQueue.removeMutationBatch(u,d)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(a){let u=ae();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(u=u.add(a.batch.mutations[l].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(n,s)))}))}function tI(r){const e=W(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.V_.getLastRemoteSnapshotVersion(t)))}function TN(r,e){const t=W(r),n=e.snapshotVersion;let s=t.Lo;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.ko.newChangeBuffer({trackRemovals:!0});s=t.Lo;const a=[];e.targetChanges.forEach(((B,d)=>{const C=s.get(d);if(!C)return;a.push(t.V_.removeMatchingKeys(i,B.removedDocuments,d).next((()=>t.V_.addMatchingKeys(i,B.addedDocuments,d))));let g=C.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(Se.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):B.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(B.resumeToken,n)),s=s.insert(d,g),(function(N,V,H){return N.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=DN?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0})(C,g,B)&&a.push(t.V_.updateTargetData(i,g))}));let u=$e(),l=ae();if(e.documentUpdates.forEach((B=>{e.resolvedLimboDocuments.has(B)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,B))})),a.push(nI(i,o,e.documentUpdates).next((B=>{u=B.Ko,l=B.Qo}))),!n.isEqual(ee.min())){const B=t.V_.getLastRemoteSnapshotVersion(i).next((d=>t.V_.setTargetsMetadata(i,i.currentSequenceNumber,n)));a.push(B)}return P.waitFor(a).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,l))).next((()=>u))})).then((i=>(t.Lo=s,i)))}function nI(r,e,t){let n=ae(),s=ae();return t.forEach((i=>n=n.add(i))),e.getEntries(r,n).next((i=>{let o=$e();return t.forEach(((a,u)=>{const l=i.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):U(sd,"Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)})),{Ko:o,Qo:s}}))}function AN(r,e){const t=W(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=_r),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function yi(r,e){const t=W(r);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return t.V_.getTargetData(n,e).next((i=>i?(s=i,P.resolve(s)):t.V_.allocateTargetId(n).next((o=>(s=new Bn(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.V_.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=t.Lo.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Lo=t.Lo.insert(n.targetId,n),t.Bo.set(e,n.targetId)),n}))}async function wi(r,e,t){const n=W(r),s=n.Lo.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(o=>n.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!kr(o))throw o;U(sd,`Failed to update sequence numbers for target ${e}: ${o}`)}n.Lo=n.Lo.remove(e),n.Bo.delete(s.target)}function tc(r,e,t){const n=W(r);let s=ee.min(),i=ae();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,l,B){const d=W(u),C=d.Bo.get(B);return C!==void 0?P.resolve(d.Lo.get(C)):d.V_.getTargetData(l,B)})(n,o,Ue(e)?e:gt(e)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,n.V_.getMatchingKeysForTargetId(o,a.targetId).next((u=>{i=u}))})).next((()=>n.No.getDocumentsMatchingQuery(o,e,t?s:ee.min(),t?i:ae()))).next((a=>(sI(n,a),{documents:a,Wo:i})))))}function rI(r,e){const t=W(r),n=W(t.V_),s=t.Lo.get(e);return s?Promise.resolve(s.target??null):t.persistence.runTransaction("Get target data","readonly",(i=>n.ye(i,e).next((o=>(o==null?void 0:o.target)??null))))}function DB(r,e){const t=W(r),n=t.Uo.get(e)||ee.min();return t.persistence.runTransaction("Get new document changes","readonly",(s=>t.ko.getAllFromCollectionGroup(s,e,p_(n,Ci),Number.MAX_SAFE_INTEGER))).then((s=>(sI(t,s),s)))}function sI(r,e){e.forEach(((t,n)=>{const s=n.key.getCollectionGroup(),i=r.Uo.get(s)||ee.min();n.readTime.compareTo(i)>0&&r.Uo.set(s,n.readTime)}))}async function RN(r,e,t,n){const s=W(r);let i=ae(),o=$e();for(const l of t){const B=e.Go(l.metadata.name);l.document&&(i=i.add(B));const d=e.zo(l);d.setReadTime(e.jo(l.metadata.readTime)),o=o.insert(B,d)}const a=s.ko.newChangeBuffer({trackRemovals:!0}),u=await yi(s,(function(B){return gt(Ui(ue.fromString(`__bundle__/docs/${B}`)))})(n));return s.persistence.runTransaction("Apply bundle documents","readwrite",(l=>nI(l,a,o).next((B=>(a.apply(l),B))).next((B=>s.V_.removeMatchingKeysForTargetId(l,u.targetId).next((()=>s.V_.addMatchingKeys(l,i,u.targetId))).next((()=>s.localDocuments.getLocalViewOfDocuments(l,B.Ko,B.Qo))).next((()=>B.Ko))))))}async function vN(r,e,t=ae()){const n=await yi(r,gt(kc(e.bundledQuery))),s=W(r);return s.persistence.runTransaction("Save named query","readwrite",(i=>{const o=Ke(e.readTime);if(n.snapshotVersion.compareTo(o)>=0)return s.f_.saveNamedQuery(i,e);const a=n.withResumeToken(Se.EMPTY_BYTE_STRING,o);return s.Lo=s.Lo.insert(a.targetId,a),s.V_.updateTargetData(i,a).next((()=>s.V_.removeMatchingKeysForTargetId(i,n.targetId))).next((()=>s.V_.addMatchingKeys(i,t,n.targetId))).next((()=>s.f_.saveNamedQuery(i,e)))}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,t){this.Ho=e,this.byteLength=t}Jo(){return"metadata"in this.Ho}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const n={value:r.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Yo=0,this.Zo=null,this.Xo=!0}ea(){this.Yo===0&&(this.ta("Unknown"),this.Zo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Zo=null,this.na("Backend didn't respond within 10 seconds."),this.ta("Offline"),Promise.resolve()))))}ra(e){this.state==="Online"?this.ta("Unknown"):(this.Yo++,this.Yo>=1&&(this.ia(),this.na(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ta("Offline")))}set(e){this.ia(),this.Yo=0,e==="Online"&&(this.Xo=!1),this.ta(e)}ta(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}na(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Xo?(je(t),this.Xo=!1):U("OnlineStateTracker",t)}ia(){this.Zo!==null&&(this.Zo.cancel(),this.Zo=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En="RemoteStore";class bN{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.sa=[],this._a=new Map,this.oa=new Map,this.aa=new Map,this.ua=new qn(1e3),this.ca=new qn(1001),this.la=new Set,this.Ea=[],this.ha=i,this.ha.Qe((o=>{n.enqueueAndForget((async()=>{xr(this)&&(U(En,"Restarting streams for network reachability change."),await(async function(u){const l=W(u);l.la.add(4),await Ji(l),l.Ta.set("Unknown"),l.la.delete(4),await Fa(l)})(this))}))})),this.Ta=new PN(n,s)}}async function Fa(r){if(xr(r))for(const e of r.Ea)await e(!0)}async function Ji(r){for(const e of r.Ea)await e(!1)}function yB(r,e){return r.oa.get(e)||void 0}function Hc(r,e){const t=W(r),n=yB(t,e.targetId);if(n!==void 0&&t._a.has(n))return;const s=(function(a,u){const l=yB(a,u);l!==void 0&&a.aa.delete(l);const B=(function(C,g){return g%2!=0?C.ca.next():C.ua.next()})(a,u);return a.oa.set(u,B),a.aa.set(B,u),B})(t,e.targetId);U(En,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Bn(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t._a.set(s,i),ad(t)?od(t):zi(t).Yt()&&id(t,i)}function Ti(r,e){const t=W(r),n=zi(t),s=yB(t,e);U(En,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t._a.delete(s),t.oa.delete(e),t.aa.delete(s),n.Yt()&&oI(t,s),t._a.size===0&&(n.Yt()?n.en():xr(t)&&t.Ta.set("Unknown"))}function id(r,e){if(r.Pa.J(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const t=r.aa.get(e.targetId);if(t===void 0)return void U(En,"SDK target ID not found for remote ID: "+e.targetId);const n=r.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(n)}zi(r).Pn(e)}function oI(r,e){r.Pa.J(e),zi(r).In(e)}function od(r){r.Pa=new nP({getRemoteKeysForTarget:e=>{const t=r.aa.get(e);return t!==void 0?r.remoteSyncer.getRemoteKeysForTarget(t):ae()},ye:e=>r._a.get(e)||null,Ve:()=>r.datastore.serializer.databaseId}),zi(r).start(),r.Ta.ea()}function ad(r){return xr(r)&&!zi(r).Jt()&&r._a.size>0}function xr(r){return W(r).la.size===0}function aI(r){r.Pa=void 0}async function SN(r){r.Ta.set("Online")}async function NN(r){r._a.forEach(((e,t)=>{id(r,e)}))}async function ON(r,e){aI(r),ad(r)?(r.Ta.ra(e),od(r)):r.Ta.set("Unknown")}async function FN(r,e,t){if(r.Ta.set("Online"),e instanceof P_&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const a of i.targetIds){if(s._a.has(a)){const u=s.aa.get(a);u!==void 0&&(await s.remoteSyncer.rejectListen(u,o),s.oa.delete(u),s.aa.delete(a)),s._a.delete(a)}s.Pa.removeTarget(a)}})(r,e)}catch(n){U(En,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await nc(r,n)}else if(e instanceof wu?r.Pa._e(e):e instanceof v_?r.Pa.he(e):r.Pa.ue(e),!t.isEqual(ee.min()))try{const n=await tI(r.localStore);t.compareTo(n)>=0&&await(function(i,o){const a=i.Pa.fe(o);a.targetChanges.forEach(((l,B)=>{if(l.resumeToken.approximateByteSize()>0){const d=i._a.get(B);d&&i._a.set(B,d.withResumeToken(l.resumeToken,o))}})),a.targetMismatches.forEach(((l,B)=>{const d=i._a.get(l);if(!d)return;i._a.set(l,d.withResumeToken(Se.EMPTY_BYTE_STRING,d.snapshotVersion)),oI(i,l);const C=new Bn(d.target,l,B,d.sequenceNumber);id(i,C)}));const u=(function(B,d){const C=new Map;d.targetChanges.forEach(((D,N)=>{const V=B.aa.get(N);V!==void 0&&C.set(V,D)}));let g=new ve(oe);return d.targetMismatches.forEach(((D,N)=>{const V=B.aa.get(D);V!==void 0&&(g=g.insert(V,N))})),new Hi(d.snapshotVersion,C,g,d.documentUpdates,d.augmentedDocumentUpdates,d.resolvedLimboDocuments)})(i,a);return i.remoteSyncer.applyRemoteEvent(u)})(r,t)}catch(n){U(En,"Failed to raise snapshot:",n),await nc(r,n)}}async function nc(r,e,t){if(!kr(e))throw e;r.la.add(1),await Ji(r),r.Ta.set("Offline"),t||(t=()=>tI(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{U(En,"Retrying IndexedDB access"),await t(),r.la.delete(1),await Fa(r)}))}function uI(r,e){return e().catch((t=>nc(r,t,e)))}async function Ki(r){const e=W(r),t=Sr(e);let n=e.sa.length>0?e.sa[e.sa.length-1].batchId:_r;for(;LN(e);)try{const s=await AN(e.localStore,n);if(s===null){e.sa.length===0&&t.en();break}n=s.batchId,VN(e,s)}catch(s){await nc(e,s)}cI(e)&&lI(e)}function LN(r){return xr(r)&&r.sa.length<10}function VN(r,e){r.sa.push(e);const t=Sr(r);t.Yt()&&t.Rn&&t.An(e.mutations)}function cI(r){return xr(r)&&!Sr(r).Jt()&&r.sa.length>0}function lI(r){Sr(r).start()}async function kN(r){Sr(r).fn()}async function xN(r){const e=Sr(r);for(const t of r.sa)e.An(t.mutations)}async function MN(r,e,t){const n=r.sa.shift(),s=Jh.from(n,e,t);await uI(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await Ki(r)}async function GN(r,e){e&&Sr(r).Rn&&await(async function(n,s){if((function(o){return D_(o)&&o!==b.ABORTED})(s.code)){const i=n.sa.shift();Sr(n).Xt(),await uI(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ki(n)}})(r,e),cI(r)&&lI(r)}async function xp(r,e){const t=W(r);t.asyncQueue.verifyOperationInProgress(),U(En,"RemoteStore received new credentials");const n=xr(t);t.la.add(3),await Ji(t),n&&t.Ta.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.la.delete(3),await Fa(t)}async function wB(r,e){const t=W(r);e?(t.la.delete(2),await Fa(t)):e||(t.la.add(2),await Ji(t),t.Ta.set("Unknown"))}function zi(r){return r.Ia||(r.Ia=(function(t,n,s){const i=W(t);return i.pn(),new AP(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{ct:SN.bind(null,r),Et:NN.bind(null,r),Tt:ON.bind(null,r),Tn:FN.bind(null,r)}),r.Ea.push((async e=>{e?(r.Ia.Xt(),ad(r)?od(r):r.Ta.set("Unknown")):(await r.Ia.stop(),aI(r))}))),r.Ia}function Sr(r){return r.Ra||(r.Ra=(function(t,n,s){const i=W(t);return i.pn(),new RP(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{ct:()=>Promise.resolve(),Et:kN.bind(null,r),Tt:GN.bind(null,r),Vn:xN.bind(null,r),dn:MN.bind(null,r)}),r.Ea.push((async e=>{e?(r.Ra.Xt(),await Ki(r)):(await r.Ra.stop(),r.sa.length>0&&(U(En,`Stopping write stream with ${r.sa.length} pending writes`),r.sa=[]))}))),r.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Aa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Aa(this.observer.error,e):je("Uncaught Error in snapshot listener:",e.toString()))}Va(){this.muted=!0}Aa(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,a=new ud(e,t,o,s,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qi(r,e){if(je("AsyncQueue",`${e}: ${r}`),kr(r))return new M(b.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,t){this.da=e,this.serializer=t,this.metadata=new lt,this.buffer=new Uint8Array,this.fa=(function(){return new TextDecoder("utf-8")})(),this.ma().then((n=>{n&&n.Jo()?this.metadata.resolve(n.Ho.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.Ho)}`))}),(n=>this.metadata.reject(n)))}close(){return this.da.cancel()}async getMetadata(){return this.metadata.promise}async pa(){return await this.getMetadata(),this.ma()}async ma(){const e=await this.ga();if(e===null)return null;const t=this.fa.decode(e),n=Number(t);isNaN(n)&&this.ya(`length string (${t}) is not valid number`);const s=await this.wa(n);return new iI(JSON.parse(s),e.length+n)}ba(){return this.buffer.findIndex((e=>e===123))}async ga(){for(;this.ba()<0&&!await this.Sa(););if(this.buffer.length===0)return null;const e=this.ba();e<0&&this.ya("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async wa(e){for(;this.buffer.length<e;)await this.Sa()&&this.ya("Reached the end of bundle when more is expected.");const t=this.fa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ya(e){throw this.da.cancel(),new Error(`Invalid bundle format: ${e}`)}async Sa(){const e=await this.da.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[];let n=this.pa();if(!n||!n.Jo())throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(n==null?void 0:n.Ho)}`);this.metadata=n;do n=this.pa(),n!==null&&this.elements.push(n);while(n!==null)}getMetadata(){return this.metadata}va(){return this.elements}pa(){if(this.cursor===this.bundleData.length)return null;const e=this.ga(),t=this.wa(e);return new iI(JSON.parse(t),e)}wa(e){if(this.cursor+e>this.bundleData.length)throw new M(b.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}ga(){const e=this.cursor;let t=this.cursor;for(;t<this.bundleData.length;){if(this.bundleData[t]==="{"){if(t===e)throw new Error("First character is a bracket and not a number");return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw new Error("Reached the end of bundle when more is expected.")}}const Jo="IndexBackfiller";class qN{constructor(e,t){this.asyncQueue=e,this.Da=t,this.task=null}start(){this.xa(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}xa(e){U(Jo,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{const t=await this.Da.Ca();U(Jo,`Documents written: ${t}`)}catch(t){kr(t)?U(Jo,"Ignoring IndexedDB error during index backfill: ",t):await Vr(t)}await this.xa(6e4)}))}}class jN{constructor(e,t){this.localStore=e,this.persistence=t}async Ca(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.Fa(t,e)))}Fa(e,t){const n=new Set;let s=t,i=!0;return P.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!n.has(o))return U(Jo,`Processing collection: ${o}`),this.Oa(e,o,s).next((a=>{s-=a,n.add(o)}));i=!1})))).next((()=>t-s))}Oa(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next((i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this.Ma(s,i))).next((a=>(U(Jo,`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a)))).next((()=>o.size))}))))}Ma(e,t){let n=e;return t.changes.forEach(((s,i)=>{const o=g_(i);hh(o,n)>0&&(n=o)})),new qt(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI="firestore_clients";function Mp(r,e){return`${BI}_${r}_${e}`}const hI="firestore_mutations";function Gp(r,e,t){let n=`${hI}_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const dI="firestore_targets";function Gl(r,e){return`${dI}_${r}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="SharedClientState";class rc{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static Na(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new M(s.error.code,s.error.message))),o?new rc(e,t,s.state,i):(je(sn,`Failed to parse mutation state for ID '${t}': ${n}`),null)}La(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ko{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Na(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new M(n.error.code,n.error.message))),i?new Ko(e,n.state,s):(je(sn,`Failed to parse target state for ID '${e}': ${t}`),null)}La(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class sc{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Na(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=ph();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=Xm(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new sc(e,i):(je(sn,`Failed to parse client data for instance '${e}': ${t}`),null)}}class cd{constructor(e,t){this.clientId=e,this.onlineState=t}static Na(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new cd(t.clientId,t.onlineState):(je(sn,`Failed to parse online state: ${e}`),null)}}class TB{constructor(){this.activeTargetIds=ph()}Ba(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ua(e){this.activeTargetIds=this.activeTargetIds.delete(e)}La(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ul{constructor(e,t,n,s,i){this.window=e,this.Ct=t,this.persistenceKey=n,this.ka=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.qa=this.$a.bind(this),this.Ka=new ve(oe),this.started=!1,this.Qa=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Wa=Mp(this.persistenceKey,this.ka),this.Ga=(function(u){return`firestore_sequence_number_${u}`})(this.persistenceKey),this.Ka=this.Ka.insert(this.ka,new TB),this.za=new RegExp(`^${BI}_${o}_([^_]*)$`),this.ja=new RegExp(`^${hI}_${o}_(\\d+)(?:_(.*))?$`),this.Ha=new RegExp(`^${dI}_${o}_(\\d+)$`),this.Ja=(function(u){return`firestore_online_state_${u}`})(this.persistenceKey),this.Ya=(function(u){return`firestore_bundle_loaded_v2_${u}`})(this.persistenceKey),this.window.addEventListener("storage",this.qa)}static Ye(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ro();for(const n of e){if(n===this.ka)continue;const s=this.getItem(Mp(this.persistenceKey,n));if(s){const i=sc.Na(n,s);i&&(this.Ka=this.Ka.insert(i.clientId,i))}}this.Za();const t=this.storage.getItem(this.Ja);if(t){const n=this.Xa(t);n&&this.eu(n)}for(const n of this.Qa)this.$a(n);this.Qa=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ga,JSON.stringify(e))}getAllActiveQueryTargets(){return this.tu(this.Ka)}isActiveQueryTarget(e){let t=!1;return this.Ka.forEach(((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.nu(e,"pending")}updateMutationState(e,t,n){this.nu(e,t,n),this.ru(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Gl(this.persistenceKey,e));if(s){const i=Ko.Na(e,s);i&&(n=i.state)}}return t&&this.iu.Ba(e),this.Za(),n}removeLocalQueryTarget(e){this.iu.Ua(e),this.Za()}isLocalQueryTarget(e){return this.iu.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Gl(this.persistenceKey,e))}updateQueryState(e,t,n){this.su(e,t,n)}handleUserChange(e,t,n){t.forEach((s=>{this.ru(s)})),this.currentUser=e,n.forEach((s=>{this.addPendingMutation(s)}))}setOnlineState(e){this._u(e)}notifyBundleLoaded(e){this.ou(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.qa),this.removeItem(this.Wa),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return U(sn,"READ",e,t),t}setItem(e,t){U(sn,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){U(sn,"REMOVE",e),this.storage.removeItem(e)}$a(e){const t=e;if(t.storageArea===this.storage){if(U(sn,"EVENT",t.key,t.newValue),t.key===this.Wa)return void je("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ct.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.za.test(t.key)){if(t.newValue==null){const n=this.au(t.key);return this.uu(n,null)}{const n=this.cu(t.key,t.newValue);if(n)return this.uu(n.clientId,n)}}else if(this.ja.test(t.key)){if(t.newValue!==null){const n=this.lu(t.key,t.newValue);if(n)return this.Eu(n)}}else if(this.Ha.test(t.key)){if(t.newValue!==null){const n=this.hu(t.key,t.newValue);if(n)return this.Tu(n)}}else if(t.key===this.Ja){if(t.newValue!==null){const n=this.Xa(t.newValue);if(n)return this.eu(n)}}else if(t.key===this.Ga){const n=(function(i){let o=Nt.wn;if(i!=null)try{const a=JSON.parse(i);q(typeof a=="number",30636,{Pu:i}),o=a}catch(a){je(sn,"Failed to read sequence number from WebStorage",a)}return o})(t.newValue);n!==Nt.wn&&this.sequenceNumberHandler(n)}else if(t.key===this.Ya){const n=this.Iu(t.newValue);await Promise.all(n.map((s=>this.syncEngine.Ru(s))))}}}else this.Qa.push(t)}))}}get iu(){return this.Ka.get(this.ka)}Za(){this.setItem(this.Wa,this.iu.La())}nu(e,t,n){const s=new rc(this.currentUser,e,t,n),i=Gp(this.persistenceKey,this.currentUser,e);this.setItem(i,s.La())}ru(e){const t=Gp(this.persistenceKey,this.currentUser,e);this.removeItem(t)}_u(e){const t={clientId:this.ka,onlineState:e};this.storage.setItem(this.Ja,JSON.stringify(t))}su(e,t,n){const s=Gl(this.persistenceKey,e),i=new Ko(e,t,n);this.setItem(s,i.La())}ou(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Ya,t)}au(e){const t=this.za.exec(e);return t?t[1]:null}cu(e,t){const n=this.au(e);return sc.Na(n,t)}lu(e,t){const n=this.ja.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return rc.Na(new at(i),s,t)}hu(e,t){const n=this.Ha.exec(e),s=Number(n[1]);return Ko.Na(s,t)}Xa(e){return cd.Na(e)}Iu(e){return JSON.parse(e)}async Eu(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Au(e.batchId,e.state,e.error);U(sn,`Ignoring mutation for non-active user ${e.user.uid}`)}Tu(e){return this.syncEngine.Vu(e.targetId,e.state,e.error)}uu(e,t){const n=t?this.Ka.insert(e,t):this.Ka.remove(e),s=this.tu(this.Ka),i=this.tu(n),o=[],a=[];return i.forEach((u=>{s.has(u)||o.push(u)})),s.forEach((u=>{i.has(u)||a.push(u)})),this.syncEngine.du(o,a).then((()=>{this.Ka=n}))}eu(e){this.Ka.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}tu(e){let t=ph();return e.forEach(((n,s)=>{t=t.unionWith(s.activeTargetIds)})),t}}class fI{constructor(){this.fu=new TB,this.mu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.fu.Ba(e),this.mu[e]||"not-current"}updateQueryState(e,t,n){this.mu[e]=t}removeLocalQueryTarget(e){this.fu.Ua(e)}isLocalQueryTarget(e){return this.fu.activeTargetIds.has(e)}clearQueryState(e){delete this.mu[e]}getAllActiveQueryTargets(){return this.fu.activeTargetIds}isActiveQueryTarget(e){return this.fu.activeTargetIds.has(e)}start(){return this.fu=new TB,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(){return typeof window<"u"?window:null}function bu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{static emptySet(e){return new Ir(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||K.comparator(t.key,n.key):(t,n)=>K.comparator(t.key,n.key),this.keyedMap=Yr(),this.sortedSet=new ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ir)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Ir;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(){this.pu=new ve(K.comparator)}track(e){const t=e.doc.key,n=this.pu.get(t);n?e.type!==0&&n.type===3?this.pu=this.pu.insert(t,e):e.type===3&&n.type!==1?this.pu=this.pu.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.pu=this.pu.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.pu=this.pu.remove(t):e.type===1&&n.type===2?this.pu=this.pu.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.pu=this.pu.insert(t,{type:2,doc:e.doc}):Y(63341,{we:e,gu:n}):this.pu=this.pu.insert(t,e)}yu(){const e=[];return this.pu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class ws{constructor(e,t,n,s,i,o,a,u,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new ws(e,t,Ir.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(){this.wu=void 0,this.bu=[]}Su(){return this.bu.some((e=>e.vu()))}}class KN{constructor(){this.queries=Hp(),this.onlineState="Unknown",this.Du=new Set}terminate(){(function(t,n){const s=W(t),i=s.queries;s.queries=Hp(),i.forEach(((o,a)=>{for(const u of a.bu)u.onError(n)}))})(this,new M(b.ABORTED,"Firestore shutting down"))}}function Hp(){return new Qn((r=>vE(r)),Nc)}async function ld(r,e){const t=W(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.Su()&&e.vu()&&(n=2):(i=new JN,n=e.vu()?0:1);try{switch(n){case 0:i.wu=await t.onListen(s,!0);break;case 1:i.wu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=Qi(o,`Initialization of query '${Ue(e.query)?Vn(e.query):ko(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.bu.push(e),e.xu(t.onlineState),i.wu&&e.Cu(i.wu)&&hd(t)}async function Bd(r,e){const t=W(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.bu.indexOf(e);o>=0&&(i.bu.splice(o,1),i.bu.length===0?s=e.vu()?0:1:!i.Su()&&e.vu()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function zN(r,e){const t=W(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.bu)a.Cu(s)&&(n=!0);o.wu=s}}n&&hd(t)}function QN(r,e,t){const n=W(r),s=n.queries.get(e);if(s)for(const i of s.bu)i.onError(t);n.queries.delete(e)}function hd(r){r.Du.forEach((e=>{e.next()}))}var AB;(function(r){r.Default="default",r.Cache="cache"})(AB||(AB={}));class dd{constructor(e,t,n){this.query=e,this.Fu=t,this.Ou=!1,this.Mu=null,this.onlineState="Unknown",this.options=n||{}}Cu(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new ws(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ou?this.Nu(e)&&(this.Fu.next(e),t=!0):this.Lu(e,this.onlineState)&&(this.Bu(e),t=!0),this.Mu=e,t}onError(e){this.Fu.error(e)}xu(e){this.onlineState=e;let t=!1;return this.Mu&&!this.Ou&&this.Lu(this.Mu,e)&&(this.Bu(this.Mu),t=!0),t}Lu(e,t){if(!e.fromCache||!this.vu())return!0;const n=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Nu(e){if(e.docChanges.length>0)return!0;const t=this.Mu&&this.Mu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Bu(e){e=ws.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ou=!0,this.Fu.next(e)}vu(){return this.options.source!==AB.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this.serializer=e}Go(e){return Cn(this.serializer,e)}zo(e){return e.metadata.exists?wc(this.serializer,e.document,!1):Le.newNoDocument(this.Go(e.metadata.name),this.jo(e.metadata.readTime))}jo(e){return Ke(e)}}class fd{constructor(e,t){this.Uu=e,this.serializer=t,this.ku=[],this.qu=[],this.collectionGroups=new Set,this.progress=pI(e)}get queries(){return this.ku}get documents(){return this.qu}$u(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ho.namedQuery)this.ku.push(e.Ho.namedQuery);else if(e.Ho.documentMetadata){this.qu.push({metadata:e.Ho.documentMetadata}),e.Ho.documentMetadata.exists||++t;const n=ue.fromString(e.Ho.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Ho.document&&(this.qu[this.qu.length-1].document=e.Ho.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,{...this.progress}):null}Ku(e){const t=new Map,n=new qp(this.serializer);for(const s of e)if(s.metadata.queries){const i=n.Go(s.metadata.name);for(const o of s.metadata.queries){const a=(t.get(o)||ae()).add(i);t.set(o,a)}}return t}async Qu(e){const t=await RN(e,new qp(this.serializer),this.qu,this.Uu.id),n=this.Ku(this.documents);for(const s of this.ku)await vN(e,s,n.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Wu:this.collectionGroups,Gu:t}}}function pI(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.key=e}}class mI{constructor(e){this.key=e}}class _I{constructor(e,t){this.query=e,this.zu=t,this.ju=null,this.hasCachedResults=!1,this.current=!1,this.Hu=ae(),this.mutatedKeys=ae(),this.Ju=Ue(e)?Zu(e):yc(e),this.Yu=new Ir(this.Ju)}get Zu(){return this.zu}Xu(e,t){const n=t?t.ec:new Up,s=t?t.Yu:this.Yu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const[u,l]=this.tc(this.query,s);e.inorderTraversal(((d,C)=>{const g=s.get(d),D=zE(this.query,C)?C:null,N=!!g&&this.mutatedKeys.has(g.key),V=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let H=!1;g&&D?g.data.isEqual(D.data)?N!==V&&(n.track({type:3,doc:D}),H=!0):this.nc(g,D)||(n.track({type:2,doc:D}),H=!0,(u&&this.Ju(D,u)>0||l&&this.Ju(D,l)<0)&&(a=!0)):!g&&D?(n.track({type:0,doc:D}),H=!0):g&&!D&&(n.track({type:1,doc:g}),H=!0,(u||l)&&(a=!0)),H&&(D?(o=o.add(D),i=V?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}));const B=this.rc(this.query);if(B)if(Ue(this.query)){const d=[];o.forEach((D=>d.push(D)));const C=KE(this.query,d);let g=new Ir(Zu(this.query));for(const D of C)g=g.add(D);o.forEach((D=>{g.has(D.key)||(i=i.delete(D.key),n.track({type:1,doc:D}))})),o=g}else{const d=this.sc(this.query);for(;o.size>B;){const C=d==="F"?o.last():o.first();o=o.delete(C.key),i=i.delete(C.key),n.track({type:1,doc:C})}}return{Yu:o,ec:n,Oo:a,mutatedKeys:i}}rc(e){var t;return Ue(e)?(t=Vl(e))==null?void 0:t.limit:e.limit||void 0}sc(e){if(Ue(e)){const t=Vl(e);return t&&t.limit<0?"L":"F"}return e.limitType}tc(e,t){var n;if(Ue(e)){const s=(n=Vl(e))==null?void 0:n.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.rc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.rc(this.query)?t.first():null]}nc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Yu;this.Yu=e.Yu,this.mutatedKeys=e.mutatedKeys;const o=e.ec.yu();o.sort(((B,d)=>(function(g,D){const N=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{we:V})}};return N(g)-N(D)})(B.type,d.type)||this.Ju(B.doc,d.doc))),this._c(n),s=s??!1;const a=t&&!s?this.oc():[],u=this.Hu.size===0&&this.current&&!s?1:0,l=u!==this.ju;return this.ju=u,o.length!==0||l?{snapshot:new ws(this.query,e.Yu,i,o,e.mutatedKeys,u===0,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),ac:a}:{ac:a}}xu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Yu:this.Yu,ec:new Up,mutatedKeys:this.mutatedKeys,Oo:!1},!1)):{ac:[]}}uc(e){return!this.zu.has(e)&&!!this.Yu.has(e)&&!this.Yu.get(e).hasLocalMutations}_c(e){e&&(e.addedDocuments.forEach((t=>this.zu=this.zu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.zu=this.zu.delete(t))),this.current=e.current)}oc(){if(!this.current)return[];const e=this.Hu;this.Hu=ae(),this.Yu.forEach((n=>{this.uc(n.key)&&(this.Hu=this.Hu.add(n.key))}));const t=[];return e.forEach((n=>{this.Hu.has(n)||t.push(new mI(n))})),this.Hu.forEach((n=>{e.has(n)||t.push(new gI(n))})),t}cc(e){this.zu=e.Wo,this.Hu=ae();const t=this.Xu(e.documents);return this.applyChanges(t,!0)}lc(){return ws.fromInitialDocuments(this.query,this.Yu,this.mutatedKeys,this.ju===0,this.hasCachedResults)}}const Mr="SyncEngine";class WN{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class $N{constructor(e){this.key=e,this.Ec=!1}}class YN{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hc={},this.Tc=new Qn((a=>vE(a)),Nc),this.Pc=new Map,this.Ic=new Set,this.Rc=new ve(K.comparator),this.Ac=new Map,this.Vc=new Zh,this.dc={},this.fc=new Map,this.mc=qn.bs(),this.onlineState="Unknown",this.gc=void 0}get isPrimaryClient(){return this.gc===!0}}async function XN(r,e,t=!0){const n=jc(r);let s;const i=n.Tc.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lc()):s=await EI(n,e,t,!0),s}async function ZN(r,e){const t=jc(r);await EI(t,e,!0,!1)}async function EI(r,e,t,n){const s=await yi(r.localStore,Ue(e)?e:gt(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let a;return n&&(a=await Cd(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&Hc(r.remoteStore,s),a}async function Cd(r,e,t,n,s){r.yc=(d,C,g)=>(async function(N,V,H,Z){let re=V.view.Xu(H);re.Oo&&(re=await tc(N.localStore,V.query,!1).then((({documents:T})=>V.view.Xu(T,re))));const de=Z&&Z.targetChanges.get(V.targetId),Ce=Z&&Z.targetMismatches.get(V.targetId)!=null,le=V.view.applyChanges(re,N.isPrimaryClient,de,Ce);return RB(N,V.targetId,le.ac),le.snapshot})(r,d,C,g);const i=await tc(r.localStore,e,!0),o=new _I(e,i.Wo),a=o.Xu(i.documents),u=Ta.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),l=o.applyChanges(a,r.isPrimaryClient,u);RB(r,t,l.ac);const B=new WN(e,t,o);return r.Tc.set(e,B),r.Pc.has(t)?r.Pc.get(t).push(e):r.Pc.set(t,[e]),l.snapshot}async function eO(r,e,t){const n=W(r),s=n.Tc.get(e),i=n.Pc.get(s.targetId);if(i.length>1)return n.Pc.set(s.targetId,i.filter((o=>!Nc(o,e)))),void n.Tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await wi(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),t&&Ti(n.remoteStore,s.targetId),Ai(n,s.targetId)})).catch(Vr)):(Ai(n,s.targetId),await wi(n.localStore,s.targetId,!0))}async function tO(r,e){const t=W(r),n=t.Tc.get(e),s=t.Pc.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Ti(t.remoteStore,n.targetId))}async function nO(r,e,t){const n=_d(r);try{const s=await(function(o,a){const u=W(o),l=_e.now(),B=a.reduce(((g,D)=>g.add(D.key)),ae());let d,C;return u.persistence.runTransaction("Locally write mutations","readwrite",(g=>{let D=$e(),N=ae();return u.ko.getEntries(g,B).next((V=>{D=V,D.forEach(((H,Z)=>{Z.isValidDocument()||(N=N.add(H))}))})).next((()=>u.localDocuments.getOverlayedDocuments(g,D))).next((V=>{d=V;const H=[];for(const Z of a){const re=Ov(Z,d.get(Z.key).overlayedDocument);re!=null&&H.push(new Kn(Z.key,re,n_(re.value.mapValue),Me.exists(!0)))}return u.mutationQueue.addMutationBatch(g,l,H,a)})).next((V=>{C=V;const H=V.applyToLocalDocumentSet(d,N);return u.documentOverlayCache.saveOverlays(g,V.batchId,H)}))})).then((()=>({batchId:C.batchId,changes:T_(d)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),(function(o,a,u){let l=o.dc[o.currentUser.toKey()];l||(l=new ve(oe)),l=l.insert(a,u),o.dc[o.currentUser.toKey()]=l})(n,s.batchId,t),await Wn(n,s.changes),await Ki(n.remoteStore)}catch(s){const i=Qi(s,"Failed to persist write");t.reject(i)}}async function II(r,e){const t=W(r);try{const n=await TN(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=t.Ac.get(i);o&&(q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.Ec=!0:s.modifiedDocuments.size>0?q(o.Ec,14607):s.removedDocuments.size>0&&(q(o.Ec,42227),o.Ec=!1))})),await Wn(t,n,e)}catch(n){await Vr(n)}}function jp(r,e,t){const n=W(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Tc.forEach(((i,o)=>{const a=o.view.xu(e);a.snapshot&&s.push(a.snapshot)})),(function(o,a){const u=W(o);u.onlineState=a;let l=!1;u.queries.forEach(((B,d)=>{for(const C of d.bu)C.xu(a)&&(l=!0)})),l&&hd(u)})(n.eventManager,e),s.length&&n.hc.Tn(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function rO(r,e,t){const n=W(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Ac.get(e),i=s&&s.key;if(i){let o=new ve(K.comparator);o=o.insert(i,Le.newNoDocument(i,ee.min()));const a=ae().add(i),u=new Hi(ee.min(),new Map,new ve(oe),o,$e(),a);await II(n,u),n.Rc=n.Rc.remove(i),n.Ac.delete(e),md(n)}else await wi(n.localStore,e,!1).then((()=>Ai(n,e,t))).catch(Vr)}async function sO(r,e){const t=W(r),n=e.batch.batchId;try{const s=await wN(t.localStore,e);gd(t,n,null),pd(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Wn(t,s)}catch(s){await Vr(s)}}async function iO(r,e,t){const n=W(r);try{const s=await(function(o,a){const u=W(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",(l=>{let B;return u.mutationQueue.lookupMutationBatch(l,a).next((d=>(q(d!==null,37113),B=d.keys(),u.mutationQueue.removeMutationBatch(l,d)))).next((()=>u.mutationQueue.performConsistencyCheck(l))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(l,B,a))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,B))).next((()=>u.localDocuments.getDocuments(l,B)))}))})(n.localStore,e);gd(n,e,t),pd(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Wn(n,s)}catch(s){await Vr(s)}}async function oO(r,e){const t=W(r);xr(t.remoteStore)||U(Mr,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await(function(o){const a=W(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u)))})(t.localStore);if(n===_r)return void e.resolve();const s=t.fc.get(n)||[];s.push(e),t.fc.set(n,s)}catch(n){const s=Qi(n,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function pd(r,e){(r.fc.get(e)||[]).forEach((t=>{t.resolve()})),r.fc.delete(e)}function gd(r,e,t){const n=W(r);let s=n.dc[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.dc[n.currentUser.toKey()]=s}}function Ai(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Pc.get(e))r.Tc.delete(n),t&&r.hc.wc(n,t);r.Pc.delete(e),r.isPrimaryClient&&r.Vc.e_(e).forEach((n=>{r.Vc.containsKey(n)||DI(r,n)}))}function DI(r,e){r.Ic.delete(e.path.canonicalString());const t=r.Rc.get(e);t!==null&&(Ti(r.remoteStore,t),r.Rc=r.Rc.remove(e),r.Ac.delete(t),md(r))}function RB(r,e,t){for(const n of t)n instanceof gI?(r.Vc.addReference(n.key,e),aO(r,n)):n instanceof mI?(U(Mr,"Document no longer in limbo: "+n.key),r.Vc.removeReference(n.key,e),r.Vc.containsKey(n.key)||DI(r,n.key)):Y(19791,{bc:n})}function aO(r,e){const t=e.key,n=t.path.canonicalString();r.Rc.get(t)||r.Ic.has(n)||(U(Mr,"New document in limbo: "+t),r.Ic.add(n),md(r))}function md(r){for(;r.Ic.size>0&&r.Rc.size<r.maxConcurrentLimboResolutions;){const e=r.Ic.values().next().value;r.Ic.delete(e);const t=new K(ue.fromString(e)),n=r.mc.next();r.Ac.set(n,new $N(t)),r.Rc=r.Rc.insert(t,n),Hc(r.remoteStore,new Bn(gt(Ui(t.path)),n,"TargetPurposeLimboResolution",Nt.wn))}}async function Wn(r,e,t){const n=W(r),s=[],i=[],o=[];n.Tc.isEmpty()||(n.Tc.forEach(((a,u)=>{o.push(n.yc(u,e,t).then((l=>{var B;if((l||t)&&n.isPrimaryClient){const d=l?!l.fromCache:(B=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:B.current;n.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(l){s.push(l);const d=rd.mo(u.targetId,l);i.push(d)}})))})),await Promise.all(o),n.hc.Tn(s),await(async function(u,l){const B=W(u);try{await B.persistence.runTransaction("notifyLocalViewChanges","readwrite",(d=>P.forEach(l,(C=>P.forEach(C.Vo,(g=>B.persistence.referenceDelegate.addReference(d,C.targetId,g))).next((()=>P.forEach(C.fo,(g=>B.persistence.referenceDelegate.removeReference(d,C.targetId,g)))))))))}catch(d){if(!kr(d))throw d;U(sd,"Failed to update sequence numbers: "+d)}for(const d of l){const C=d.targetId;if(!d.fromCache){const g=B.Lo.get(C),D=g.snapshotVersion,N=g.withLastLimboFreeSnapshotVersion(D);B.Lo=B.Lo.insert(C,N)}}})(n.localStore,i))}async function uO(r,e){const t=W(r);if(!t.currentUser.isEqual(e)){U(Mr,"User change. New user:",e.toKey());const n=await eI(t.localStore,e);t.currentUser=e,(function(i,o){i.fc.forEach((a=>{a.forEach((u=>{u.reject(new M(b.CANCELLED,o))}))})),i.fc.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Wn(t,n.$o)}}function cO(r,e){const t=W(r),n=t.Ac.get(e);if(n&&n.Ec)return ae().add(n.key);{let s=ae();const i=t.Pc.get(e);if(!i)return s;for(const o of i??[]){const a=t.Tc.get(o);s=s.unionWith(a.view.Zu)}return s}}async function lO(r,e){const t=W(r),n=await tc(t.localStore,e.query,!0),s=e.view.cc(n);return t.isPrimaryClient&&RB(t,e.targetId,s.ac),s}async function BO(r,e){const t=W(r);return DB(t.localStore,e).then((n=>Wn(t,n)))}async function hO(r,e,t,n){const s=W(r),i=await(function(a,u){const l=W(a),B=W(l.mutationQueue);return l.persistence.runTransaction("Lookup mutation documents","readonly",(d=>B.Wr(d,u).next((C=>C?l.localDocuments.getDocuments(d,C):P.resolve(null)))))})(s.localStore,e);i!==null?(t==="pending"?await Ki(s.remoteStore):t==="acknowledged"||t==="rejected"?(gd(s,e,n||null),pd(s,e),(function(a,u){W(W(a).mutationQueue).Hr(u)})(s.localStore,e)):Y(6720,"Unknown batchState",{Sc:t}),await Wn(s,i)):U(Mr,"Cannot apply mutation batch with id: "+e)}async function dO(r,e){const t=W(r);if(jc(t),_d(t),e===!0&&t.gc!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await Jp(t,n.toArray());t.gc=!0,await wB(t.remoteStore,!0);for(const i of s)Hc(t.remoteStore,i)}else if(e===!1&&t.gc!==!1){const n=[];let s=Promise.resolve();t.Pc.forEach(((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then((()=>(Ai(t,o),wi(t.localStore,o,!0)))),Ti(t.remoteStore,o)})),await s,await Jp(t,n),(function(o){const a=W(o);a.Ac.forEach(((u,l)=>{Ti(a.remoteStore,l)})),a.Vc.t_(),a.Ac=new Map,a.Rc=new ve(K.comparator)})(t),t.gc=!1,await wB(t.remoteStore,!1)}}async function Jp(r,e,t){const n=W(r),s=[],i=[];for(const o of e){let a;const u=n.Pc.get(o);if(u&&u.length!==0){a=await yi(n.localStore,Ue(u[0])?u[0]:gt(u[0]));for(const l of u){const B=n.Tc.get(l),d=await lO(n,B);d.snapshot&&i.push(d.snapshot)}}else{const l=await rI(n.localStore,o);a=await yi(n.localStore,l),await Cd(n,yI(l),o,!1,a.resumeToken)}s.push(a)}return n.hc.Tn(i),s}function yI(r){return Pn(r)?r:m_(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function fO(r){return(function(t){return W(W(t).persistence).Ro()})(W(r).localStore)}async function CO(r,e,t,n){const s=W(r);if(s.gc)return void U(Mr,"Ignoring unexpected query state notification.");const i=s.Pc.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{let o;if(Ue(i[0]))switch(Ln(i[0])){case"collection_group":case"collection":o=await DB(s.localStore,IE(i[0]));break;case"documents":o=await(function(l,B){const d=W(l),C=ae(...Ju(B).map((g=>K.fromPath(g))));return d.persistence.runTransaction("Get documents for pipeline","readonly",(g=>d.ko.getEntries(g,C))).then((g=>g))})(s.localStore,i[0]);break;default:nt(""),o=Yr()}else o=await DB(s.localStore,(function(l){return l.collectionGroup||(l.path.length%2==1?l.path.lastSegment():l.path.get(l.path.length-2))})(i[0]));const a=Hi.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Se.EMPTY_BYTE_STRING);await Wn(s,o,a);break}case"rejected":await wi(s.localStore,e,!0),Ai(s,e,n);break;default:Y(64155,t)}}async function pO(r,e,t){const n=jc(r);if(n.gc){for(const s of e){if(n.Pc.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){U(Mr,"Adding an already active target "+s);continue}const i=await rI(n.localStore,s),o=await yi(n.localStore,i);await Cd(n,yI(i),o.targetId,!1,o.resumeToken),Hc(n.remoteStore,o)}for(const s of t)n.Pc.has(s)&&await wi(n.localStore,s,!1).then((()=>{Ti(n.remoteStore,s),Ai(n,s)})).catch(Vr)}}function jc(r){const e=W(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=II.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rO.bind(null,e),e.hc.Tn=zN.bind(null,e.eventManager),e.hc.wc=QN.bind(null,e.eventManager),e}function _d(r){const e=W(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iO.bind(null,e),e}function gO(r,e,t){const n=W(r);(async function(i,o,a){try{const u=await o.getMetadata();if(await(function(g,D){const N=W(g),V=Ke(D.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",(H=>N.f_.getBundleMetadata(H,D.id))).then((H=>!!H&&H.createTime.compareTo(V)>=0))})(i.localStore,u))return await o.close(),a._completeWith((function(g){return{taskState:"Success",documentsLoaded:g.totalDocuments,bytesLoaded:g.totalBytes,totalDocuments:g.totalDocuments,totalBytes:g.totalBytes}})(u)),Promise.resolve(new Set);a._updateProgress(pI(u));const l=new fd(u,o.serializer);let B=await o.pa();for(;B;){const C=await l.$u(B);C&&a._updateProgress(C),B=await o.pa()}const d=await l.Qu(i.localStore);return await Wn(i,d.Gu,void 0),await(function(g,D){const N=W(g);return N.persistence.runTransaction("Save bundle","readwrite",(V=>N.f_.saveBundleMetadata(V,D)))})(i.localStore,u),a._completeWith(d.progress),Promise.resolve(d.Wu)}catch(u){return nt(Mr,`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(n,e,t).then((s=>{n.sharedClientState.notifyBundleLoaded(s)}))}class Ri{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ps(e.databaseInfo.databaseId),this.sharedClientState=this.vc(e),this.persistence=this.Dc(e),await this.persistence.start(),this.localStore=this.xc(e),this.gcScheduler=this.Cc(e,this.localStore),this.indexBackfillerScheduler=this.Fc(e,this.localStore)}Cc(e,t){return null}Fc(e,t){return null}xc(e){return ZE(this.persistence,new XE,e.initialUser,this.serializer)}Dc(e){return new ed(Uc.b_,this.serializer)}vc(e){return new fI}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ri.provider={build:()=>new Ri};class Ed extends Ri{constructor(e){super(),this.cacheSizeBytes=e}Cc(e,t){q(this.persistence.referenceDelegate instanceof ec,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new eE(n,e.asyncQueue,t)}Dc(e){const t=this.cacheSizeBytes!==void 0?Ct.withCacheSize(this.cacheSizeBytes):Ct.DEFAULT;return new ed((n=>ec.b_(n,t)),this.serializer)}}class Id extends Ri{constructor(e,t,n){super(),this.Oc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Oc.initialize(this,e),await _d(this.Oc.syncEngine),await Ki(this.Oc.remoteStore),await this.persistence.eo((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}xc(e){return ZE(this.persistence,new XE,e.initialUser,this.serializer)}Cc(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new eE(n,e.asyncQueue,t)}Fc(e,t){const n=new jN(t,this.persistence);return new qN(e.asyncQueue,n)}Dc(e){const t=nd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?Ct.withCacheSize(this.cacheSizeBytes):Ct.DEFAULT;return new td(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,CI(),bu(),this.serializer,this.sharedClientState,!!this.forceOwnership)}vc(e){return new fI}}class wI extends Id{constructor(e,t){super(e,t,!1),this.Oc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Oc.syncEngine;this.sharedClientState instanceof Ul&&(this.sharedClientState.syncEngine={Au:hO.bind(null,t),Vu:CO.bind(null,t),du:pO.bind(null,t),Ro:fO.bind(null,t),Ru:BO.bind(null,t)},await this.sharedClientState.start()),await this.persistence.eo((async n=>{await dO(this.Oc.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())}))}vc(e){const t=CI();if(!Ul.Ye(t))throw new M(b.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=nd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ul(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Nr{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>jp(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=uO.bind(null,this.syncEngine),await wB(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new KN})()}createDatastore(e){const t=Ps(e.databaseInfo.databaseId),n=TP(e.databaseInfo);return bP(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,s,i,o,a){return new bN(n,s,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(t=>jp(this.syncEngine,t,0)),(function(){return ip.Ye()?new ip:new IP})())}createSyncEngine(e,t){return(function(s,i,o,a,u,l,B){const d=new YN(s,i,o,a,u,l);return B&&(d.gc=!0),d})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=W(s);U(En,"RemoteStore shutting down."),i.la.add(5),await Ji(i),i.ha.shutdown(),i.Ta.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Nr.provider={build:()=>new Nr};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mO=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new M(b.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(s,i){const o=W(s),a={documents:i.map((d=>mi(o.serializer,d)))},u=await o._t("BatchGetDocuments",o.serializer.databaseId,ue.emptyPath(),a,i.length),l=new Map;u.forEach((d=>{const C=aP(o.serializer,d);l.set(C.key.toString(),C)}));const B=[];return i.forEach((d=>{const C=l.get(d.toString());q(!!C,55234,{key:d}),B.push(C)})),B})(this.datastore,e);return t.forEach((n=>this.recordVersion(n))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new Gi(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,n)=>{const s=K.fromPath(n);this.mutations.push(new lh(s,this.precondition(s)))})),await(async function(n,s){const i=W(n),o={writes:s.map((a=>sa(i.serializer,a)))};await i.nt("Commit",i.serializer.databaseId,ue.emptyPath(),o)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Y(50498,{Mc:e.constructor.name});t=ee.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new M(b.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ee.min())?Me.exists(!1):Me.updateTime(t):Me.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ee.min()))throw new M(b.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Me.updateTime(t)}return Me.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e,t,n,s,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=s,this.deferred=i,this.Nc=n.maxAttempts,this.Ht=new Eh(this.asyncQueue,"transaction_retry")}Lc(){this.Nc-=1,this.Bc()}Bc(){this.Ht.kt((async()=>{const e=new mO(this.datastore),t=this.Uc(e);t&&t.then((n=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(n)})).catch((s=>{this.kc(s)}))))})).catch((n=>{this.kc(n)}))}))}Uc(e){try{const t=this.updateFunction(e);return!wa(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}kc(e){this.Nc>0&&this.qc(e)?(this.Nc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Bc(),Promise.resolve())))):this.deferred.reject(e)}qc(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!D_(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="FirestoreClient";class EO{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=s,this.user=at.UNAUTHENTICATED,this.clientId=gc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async o=>{U(Or,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(U(Or,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Qi(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Hl(r,e){r.asyncQueue.verifyOperationInProgress(),U(Or,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await eI(e.localStore,s),n=s)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function Kp(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Dd(r);U(Or,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((n=>xp(e.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>xp(e.remoteStore,s))),r._onlineComponents=e}async function Dd(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){U(Or,"Using user provided OfflineComponentProvider");try{await Hl(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===b.FAILED_PRECONDITION||s.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;nt("Error using user provided cache. Falling back to memory cache: "+t),await Hl(r,new Ri)}}else U(Or,"Using default OfflineComponentProvider"),await Hl(r,new Ed(void 0));return r._offlineComponents}async function Jc(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(U(Or,"Using user provided OnlineComponentProvider"),await Kp(r,r._uninitializedComponentsProvider._online)):(U(Or,"Using default OnlineComponentProvider"),await Kp(r,new Nr))),r._onlineComponents}function TI(r){return Dd(r).then((e=>e.persistence))}function Wi(r){return Dd(r).then((e=>e.localStore))}function AI(r){return Jc(r).then((e=>e.remoteStore))}function yd(r){return Jc(r).then((e=>e.syncEngine))}function RI(r){return Jc(r).then((e=>e.datastore))}async function vi(r){const e=await Jc(r),t=e.eventManager;return t.onListen=XN.bind(null,e.syncEngine),t.onUnlisten=eO.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ZN.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=tO.bind(null,e.syncEngine),t}function IO(r){return r.asyncQueue.enqueue((async()=>{const e=await TI(r),t=await AI(r);return e.setNetworkEnabled(!0),(function(s){const i=W(s);return i.la.delete(0),Fa(i)})(t)}))}function DO(r){return r.asyncQueue.enqueue((async()=>{const e=await TI(r),t=await AI(r);return e.setNetworkEnabled(!1),(async function(s){const i=W(s);i.la.add(0),await Ji(i),i.Ta.set("Offline")})(t)}))}function yO(r,e,t,n){const s=new qc(n),i=new dd(e,s,t);return r.asyncQueue.enqueueAndForget((async()=>ld(await vi(r),i))),()=>{s.Va(),r.asyncQueue.enqueueAndForget((async()=>Bd(await vi(r),i)))}}function wO(r,e){const t=new lt;return r.asyncQueue.enqueueAndForget((async()=>(async function(s,i,o){try{const a=await(function(l,B){const d=W(l);return d.persistence.runTransaction("read document","readonly",(C=>d.localDocuments.getDocument(C,B)))})(s,i);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new M(b.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=Qi(a,`Failed to get document '${i} from cache`);o.reject(u)}})(await Wi(r),e,t))),t.promise}function vI(r,e,t={}){const n=new lt;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,u,l){const B=new qc({next:C=>{B.Va(),o.enqueueAndForget((()=>Bd(i,d)));const g=C.docs.has(a);!g&&C.fromCache?l.reject(new M(b.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&C.fromCache&&u&&u.source==="server"?l.reject(new M(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(C)},error:C=>l.reject(C)}),d=new dd(Ui(a.path),B,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return ld(i,d)})(await vi(r),r.asyncQueue,e,t,n))),n.promise}function TO(r,e){const t=new lt;return r.asyncQueue.enqueueAndForget((async()=>(async function(s,i,o){try{const a=await tc(s,i,!0),u=new _I(i,a.Wo),l=u.Xu(a.documents),B=u.applyChanges(l,!1);o.resolve(B.snapshot)}catch(a){const u=Qi(a,`Failed to execute query '${i} against cache`);o.reject(u)}})(await Wi(r),e,t))),t.promise}function PI(r,e,t={}){const n=new lt;return r.asyncQueue.enqueueAndForget((async()=>(function(i,o,a,u,l){const B=new qc({next:C=>{B.Va(),o.enqueueAndForget((()=>Bd(i,d))),C.fromCache&&u.source==="server"?l.reject(new M(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(C)},error:C=>l.reject(C)}),d=new dd(a instanceof Uo?IS(a):a,B,{includeMetadataChanges:!0,waitForSyncWhenOnline:!0});return ld(i,d)})(await vi(r),r.asyncQueue,e,t,n))),n.promise}function AO(r,e,t){const n=new lt;return r.asyncQueue.enqueueAndForget((async()=>{try{const s=await RI(r);n.resolve((async function(o,a,u){var N;const l=W(o),{request:B,ve:d,parent:C}=V_(l.serializer,__(a),u);l.connection.Ze||delete B.parent;const g=(await l._t("RunAggregationQuery",l.serializer.databaseId,C,B,1)).filter((V=>!!V.result));q(g.length===1,64727);const D=(N=g[0].result)==null?void 0:N.aggregateFields;return Object.keys(D).reduce(((V,H)=>(V[d[H]]=D[H],V)),{})})(s,e,t))}catch(s){n.reject(s)}})),n.promise}function RO(r,e){const t=new lt;return r.asyncQueue.enqueueAndForget((async()=>nO(await yd(r),e,t))),t.promise}function vO(r,e){const t=new qc(e);return r.asyncQueue.enqueueAndForget((async()=>(function(s,i){W(s).Du.add(i),i.next()})(await vi(r),t))),()=>{t.Va(),r.asyncQueue.enqueueAndForget((async()=>(function(s,i){W(s).Du.delete(i)})(await vi(r),t)))}}function PO(r,e,t){const n=new lt;return r.asyncQueue.enqueueAndForget((async()=>{const s=await RI(r);new _O(r.asyncQueue,s,t,e,n).Lc()})),n.promise}function bO(r,e,t,n){const s=(function(o,a){let u;return u=typeof o=="string"?R_().encode(o):o,(function(B,d){return new UN(B,d)})((function(B,d){if(B instanceof Uint8Array)return kp(B,d);if(B instanceof ArrayBuffer)return kp(new Uint8Array(B),d);if(B instanceof ReadableStream)return B.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(u),a)})(t,Ps(e));r.asyncQueue.enqueueAndForget((async()=>{gO(await yd(r),s,n)}))}function SO(r,e){return r.asyncQueue.enqueue((async()=>(function(n,s){const i=W(n);return i.persistence.runTransaction("Get named query","readonly",(o=>i.f_.getNamedQuery(o,s)))})(await Wi(r),e)))}function bI(r,e){return(function(n,s){return new HN(n,s)})(r,e)}function NO(r,e){return r.asyncQueue.enqueue((async()=>(async function(n,s){const i=W(n),o=i.indexManager,a=[];return i.persistence.runTransaction("Configure indexes","readwrite",(u=>o.getFieldIndexes(u).next((l=>(function(d,C,g,D,N){d=[...d],C=[...C],d.sort(g),C.sort(g);const V=d.length,H=C.length;let Z=0,re=0;for(;Z<H&&re<V;){const de=g(d[re],C[Z]);de<0?N(d[re++]):de>0?D(C[Z++]):(Z++,re++)}for(;Z<H;)D(C[Z++]);for(;re<V;)N(d[re++])})(l,s,Uv,(B=>{a.push(o.addFieldIndex(u,B))}),(B=>{a.push(o.deleteFieldIndex(u,B))})))).next((()=>P.waitFor(a)))))})(await Wi(r),e)))}function OO(r,e){return r.asyncQueue.enqueue((async()=>(function(n,s){W(n).No.yo=s})(await Wi(r),e)))}function FO(r){return r.asyncQueue.enqueue((async()=>(function(t){const n=W(t),s=n.indexManager;return n.persistence.runTransaction("Delete All Indexes","readwrite",(i=>s.deleteAllFieldIndexes(i)))})(await Wi(r))))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fa=class{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ie(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(en("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},LO=class extends fa{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{convertValue(e,t="none"){switch(Xe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Un(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Lr(e,((s,i)=>{n[s]=this.convertValue(i,t)})),n}convertVectorValue(e){var n,s,i;const t=(i=(s=(n=e.fields)==null?void 0:n[ps].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>be(o.doubleValue)));return new Tt(t)}convertGeoPoint(e){return new Yt(be(e.latitude),be(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ya(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ui(e));default:return null}}convertTimestamp(e){const t=Gn(e);return new _e(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ue.fromString(e);q(U_(n),9688,{name:e});const s=new wr(n.get(1),n.get(3)),i=new K(n.popFirst(5));return s.isEqual(t)||je(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class Td extends wd{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ie(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="AsyncQueue";class Qp{constructor(e=Promise.resolve()){this.$c=[],this.Kc=!1,this.Qc=[],this.Wc=null,this.Gc=!1,this.zc=!1,this.jc=[],this.Ht=new Eh(this,"async_queue_retry"),this.Hc=()=>{const n=bu();n&&U(zp,"Visibility state changed to "+n.visibilityState),this.Ht.$t()},this.Jc=e;const t=bu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Yc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=bu();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Yc(),this.Kc)return new Promise((()=>{}));const t=new lt;return this.Zc((()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.$c.push(e),this.Xc())))}async Xc(){if(this.$c.length!==0){try{await this.$c[0](),this.$c.shift(),this.Ht.reset()}catch(e){if(!kr(e))throw e;U(zp,"Operation failed with retryable error: "+e)}this.$c.length>0&&this.Ht.kt((()=>this.Xc()))}}Zc(e){const t=this.Jc.then((()=>(this.Gc=!0,e().catch((n=>{throw this.Wc=n,this.Gc=!1,je("INTERNAL UNHANDLED ERROR: ",Wp(n)),n})).then((n=>(this.Gc=!1,n))))));return this.Jc=t,t}enqueueAfterDelay(e,t,n){this.Yc(),this.jc.indexOf(e)>-1&&(t=0);const s=ud.createAndSchedule(this,e,t,n,(i=>this.el(i)));return this.Qc.push(s),s}Yc(){this.Wc&&Y(47125,{tl:Wp(this.Wc)})}verifyOperationInProgress(){}async nl(){let e;do e=this.Jc,await e;while(e!==this.Jc)}rl(e){for(const t of this.Qc)if(t.timerId===e)return!0;return!1}il(e){return this.nl().then((()=>{this.Qc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.Qc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.nl()}))}sl(e){this.jc.push(e)}el(e){const t=this.Qc.indexOf(e);this.Qc.splice(t,1)}}function Wp(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(){this._progressObserver={},this._taskCompletionResolver=new lt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=-1;class we extends Aa{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Qp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qp(e),this._firestoreClient=void 0,await e}}}function kO(r,e,t){t||(t=ta);const n=Ni(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(Zt(i,e))return s;throw new M(b.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new M(b.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Z_)throw new M(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Si(e.host)&&NB(e.host),n.initialize({options:e,instanceIdentifier:t})}function xO(r,e){const t=typeof r=="object"?r:kB(),n=typeof r=="string"?r:e||ta,s=Ni(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=LD("firestore");i&&rE(s,...i)}return s}function Ge(r){if(r._terminated)throw new M(b.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||NI(r),r._firestoreClient}function NI(r){var n,s,i,o;const e=r._freezeSettings(),t=NP(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,(s=r._app)==null?void 0:s.options.apiKey,e);r._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new EO(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}})(r._componentsProvider))}function MO(r,e){nt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return OI(r,Nr.provider,{build:n=>new Id(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function GO(r){nt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();OI(r,Nr.provider,{build:t=>new wI(t,e.cacheSizeBytes)})}function OI(r,e,t){if((r=Be(r,we))._firestoreClient||r._terminated)throw new M(b.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new M(b.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},NI(r)}function UO(r){if(r._initialized&&!r._terminated)throw new M(b.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new lt;return r._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(n){if(!pn.Ye())return Promise.resolve();const s=n+YE;await pn.delete(s)})(nd(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function HO(r){return(function(t){const n=new lt;return t.asyncQueue.enqueueAndForget((async()=>oO(await yd(t),n))),n.promise})(Ge(r=Be(r,we)))}function qO(r){return IO(Ge(r=Be(r,we)))}function jO(r){return DO(Ge(r=Be(r,we)))}function JO(r){return gg(r.app,"firestore",r._databaseId.database),r._delete()}function vB(r,e){const t=Ge(r=Be(r,we)),n=new SI;return bO(t,r._databaseId,e,n),n}function FI(r,e){return SO(Ge(r=Be(r,we)),e).then((t=>t?new rt(r,null,t.query):null))}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends wd{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ie(this.firestore,null,t)}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI="NOT SUPPORTED";class On{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ot extends fa{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(en("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(b.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ot._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}function KO(r,e,t){if(Rs(e,Ot._jsonSchema)){if(e.bundle===LI)throw new M(b.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=Ps(r._databaseId),s=bI(e.bundle,n),i=s.va(),o=new fd(s.getMetadata(),n);for(const B of i)o.$u(B);const a=o.documents;if(a.length!==1)throw new M(b.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${a.length} documents.`);const u=wc(n,a[0].document),l=new K(ue.fromString(e.bundleName));return new Ot(r,new Td(r),l,u,new On(!1,!1),t||null)}}Ot._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ot._jsonSchema={type:Ye("string",Ot._jsonSchemaVersion),bundleSource:Ye("string","DocumentSnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class zo extends Ot{data(e={}){return super.data(e)}}class Ft{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new On(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new zo(this._firestore,this._userDataWriter,n.key,n,new On(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((a=>{Ue(s._snapshot.query)?Zu(s._snapshot.query):yc(s.query._query);const u=new zo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new On(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const u=new zo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new On(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,B=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),B=o.indexOf(a.doc.key)),{type:QO(a.type),doc:u,oldIndex:l,newIndex:B}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(b.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ft._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=gc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zO(r,e,t){if(Rs(e,Ft._jsonSchema)){if(e.bundle===LI)throw new M(b.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const n=Ps(r._databaseId),s=bI(e.bundle,n),i=s.va(),o=new fd(s.getMetadata(),n);for(const g of i)o.$u(g);if(o.queries.length!==1)throw new M(b.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const a=kc(o.queries[0].bundledQuery),u=Ue(a)?Zu(a):yc(a),l=o.documents;let B=new Ir(u);l.map((g=>{const D=wc(n,g.document);B=B.add(D)}));const d=ws.fromInitialDocuments(a,B,ae(),!1,!1),C=new rt(r,t||null,a);return new Ft(r,new Td(r),C,d)}}function QO(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:r})}}function WO(r,e){return r instanceof Ot&&e instanceof Ot?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof Ft&&e instanceof Ft&&r._firestore===e._firestore&&Dh(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft._jsonSchemaVersion="firestore/querySnapshot/1.0",Ft._jsonSchema={type:Ye("string",Ft._jsonSchemaVersion),bundleSource:Ye("string","QuerySnapshot"),bundleName:Ye("string"),bundle:Ye("string")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(r){var n;const e=Ge(Be(r.firestore,we)),t=(n=e._onlineComponents)==null?void 0:n.datastore.serializer;return t===void 0?null:Tc(t,gt(r._query)).Se}function YO(r,e){var i;const t=sh(e,((o,a)=>new Um(a,o.aggregateType,o._internalFieldPath))),n=Ge(Be(r.firestore,we)),s=(i=n._onlineComponents)==null?void 0:i.datastore.serializer;return s===void 0?null:V_(s,__(r._query),t,!0).request}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class VI{constructor(e,t,n){this._userDataWriter=t,this._data=n,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}_fieldsProto(){return new et({mapValue:{fields:this._data}}).clone().value.mapValue.fields}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new M(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ad{}class $i extends Ad{}function XO(r,e,...t){let n=[];e instanceof Ad&&n.push(e),n=n.concat(t),(function(i){const o=i.filter((u=>u instanceof Ls)).length,a=i.filter((u=>u instanceof Yi)).length;if(o>1||o>0&&a>0)throw new M(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const s of n)r=s._apply(r);return r}class Yi extends $i{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Yi(e,t,n)}_apply(e){const t=this._parse(e);return MI(e._query,t),new rt(e.firestore,e.converter,aB(e._query,t))}_parse(e){const t=Ss(e.firestore);return(function(i,o,a,u,l,B,d){let C;if(l.isKeyField()){if(B==="array-contains"||B==="array-contains-any")throw new M(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${B}' queries on documentId().`);if(B==="in"||B==="not-in"){Yp(d,B);const D=[];for(const N of d)D.push($p(u,i,N));C={arrayValue:{values:D}}}else C=$p(u,i,d)}else B!=="in"&&B!=="not-in"&&B!=="array-contains-any"||Yp(d,B),C=uE(a,o,d,B==="in"||B==="not-in");return fe.create(l,B,C)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ZO(r,e,t){const n=e,s=en("where",r);return Yi._create(s,n,t)}class Ls extends Ad{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ls(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:ye.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let o=s;const a=i.getFlattenedFilters();for(const u of a)MI(o,u),o=aB(o,u)})(e._query,t),new rt(e.firestore,e.converter,aB(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function e0(...r){return r.forEach((e=>GI("or",e))),Ls._create("or",r)}function t0(...r){return r.forEach((e=>GI("and",e))),Ls._create("and",r)}class zc extends $i{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new zc(e,t)}_apply(e){const t=(function(s,i,o){if(s.startAt!==null)throw new M(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new M(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ra(i,o)})(e._query,this._field,this._direction);return new rt(e.firestore,e.converter,Jv(e._query,t))}}function n0(r,e="asc"){const t=e,n=en("orderBy",r);return zc._create(n,t)}class La extends $i{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new La(e,t,n)}_apply(e){return new rt(e.firestore,e.converter,qu(e._query,this._limit,this._limitType))}}function r0(r){return Km("limit",r),La._create("limit",r,"F")}function s0(r){return Km("limitToLast",r),La._create("limitToLast",r,"L")}class Va extends $i{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Va(e,t,n)}_apply(e){const t=xI(e,this.type,this._docOrFields,this._inclusive);return new rt(e.firestore,e.converter,Kv(e._query,t))}}function i0(...r){return Va._create("startAt",r,!0)}function o0(...r){return Va._create("startAfter",r,!1)}class ka extends $i{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new ka(e,t,n)}_apply(e){const t=xI(e,this.type,this._docOrFields,this._inclusive);return new rt(e.firestore,e.converter,zv(e._query,t))}}function a0(...r){return ka._create("endBefore",r,!1)}function u0(...r){return ka._create("endAt",r,!0)}function xI(r,e,t,n){if(t[0]=ne(t[0]),t[0]instanceof fa)return(function(i,o,a,u,l){if(!u)throw new M(b.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const B=[];for(const d of ti(i))if(d.field.isKeyField())B.push(gs(o,u.key));else{const C=u.data.field(d.field);if(Da(C))throw new M(b.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+d.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(C===null){const g=d.field.canonicalString();throw new M(b.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}B.push(C)}return new Rr(B,l)})(r._query,r.firestore._databaseId,e,t[0]._document,n);{const s=Ss(r.firestore);return(function(o,a,u,l,B,d){const C=o.explicitOrderBy;if(B.length>C.length)throw new M(b.INVALID_ARGUMENT,`Too many arguments provided to ${l}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let D=0;D<B.length;D++){const N=B[D];if(C[D].field.isKeyField()){if(typeof N!="string")throw new M(b.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${l}(), but got a ${typeof N}`);if(!Ch(o)&&N.indexOf("/")!==-1)throw new M(b.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${l}() must be a plain document ID, but '${N}' contains a slash.`);const V=o.path.child(ue.fromString(N));if(!K.isDocumentKey(V))throw new M(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${l}() must result in a valid document path, but '${V}' is not because it contains an odd number of segments.`);const H=new K(V);g.push(gs(a,H))}else{const V=uE(u,l,N);g.push(V)}}return new Rr(g,d)})(r._query,r.firestore._databaseId,s,e,t,n)}}function $p(r,e,t){if(typeof(t=ne(t))=="string"){if(t==="")throw new M(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ch(e)&&t.indexOf("/")!==-1)throw new M(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(ue.fromString(t));if(!K.isDocumentKey(n))throw new M(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return gs(r,new K(n))}if(t instanceof Ie)return gs(r,t._key);throw new M(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mc(t)}.`)}function Yp(r,e){if(!Array.isArray(r)||r.length===0)throw new M(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function MI(r,e){const t=(function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null})(r.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new M(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function GI(r,e){if(!(e instanceof Yi||e instanceof Ls))throw new M(b.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}function c0(r){return new Pi("sum",en("sum",r))}function l0(r){return new Pi("avg",en("average",r))}function UI(){return new Pi("count")}function B0(r,e){var t,n;return r instanceof Pi&&e instanceof Pi&&r.aggregateType===e.aggregateType&&((t=r._internalFieldPath)==null?void 0:t.canonicalString())===((n=e._internalFieldPath)==null?void 0:n.canonicalString())}function h0(r,e){return Dh(r.query,e.query)&&Zt(r.data(),e.data())}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(r){return(function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1})(r,["next","error","complete"])}function d0(r){return HI(r,{count:UI()})}function HI(r,e){const t=Be(r.firestore,we),n=Ge(t),s=sh(e,((i,o)=>new Um(o,i.aggregateType,i._internalFieldPath)));return AO(n,r._query,s).then((i=>(function(a,u,l){const B=new Gr(a);return new VI(u,B,l)})(t,r,i)))}class f0{constructor(e){this.kind="memory",this._onlineComponentProvider=Nr.provider,this._offlineComponentProvider=e!=null&&e.garbageCollector?e.garbageCollector._offlineComponentProvider:{build:()=>new Ed(void 0)}}toJSON(){return{kind:this.kind}}}class C0{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=qI(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class p0{constructor(){this.kind="memoryEager",this._offlineComponentProvider=Ri.provider}toJSON(){return{kind:this.kind}}}class g0{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new Ed(e)}}toJSON(){return{kind:this.kind}}}function m0(){return new p0}function _0(r){return new g0(r==null?void 0:r.cacheSizeBytes)}function E0(r){return new f0(r)}function I0(r){return new C0(r)}class D0{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Nr.provider,this._offlineComponentProvider={build:t=>new Id(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class y0{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Nr.provider,this._offlineComponentProvider={build:t=>new wI(t,e==null?void 0:e.cacheSizeBytes)}}}function qI(r){return new D0(r==null?void 0:r.forceOwnership)}function w0(){return new y0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ss(e)}set(e,t,n){this._verifyNotCommitted();const s=dr(e,this._firestore),i=Kc(s.converter,t,n),o=vc(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(o.toMutation(s._key,Me.none())),this}update(e,t,n,...s){this._verifyNotCommitted();const i=dr(e,this._firestore);let o;return o=typeof(t=ne(t))=="string"||t instanceof bs?bh(this._dataReader,"WriteBatch.update",i._key,t,n,s):Ph(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,Me.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=dr(e,this._firestore);return this._mutations=this._mutations.concat(new Gi(t._key,Me.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new M(b.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function dr(r,e){if((r=ne(r)).firestore!==e)throw new M(b.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let A0=class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Ss(e)}get(e){const t=dr(e,this._firestore),n=new Td(this._firestore);return this._transaction.lookup([t._key]).then((s=>{if(!s||s.length!==1)return Y(24041);const i=s[0];if(i.isFoundDocument())return new fa(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new fa(this._firestore,n,t._key,null,t.converter);throw Y(18433,{doc:i})}))}set(e,t,n){const s=dr(e,this._firestore),i=Kc(s.converter,t,n),o=vc(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,n);return this._transaction.set(s._key,o),this}update(e,t,n,...s){const i=dr(e,this._firestore);let o;return o=typeof(t=ne(t))=="string"||t instanceof bs?bh(this._dataReader,"Transaction.update",i._key,t,n,s):Ph(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=dr(e,this._firestore);return this._transaction.delete(t._key),this}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI extends A0{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=dr(e,this._firestore),n=new Gr(this._firestore);return super.get(e).then((s=>new Ot(this._firestore,n,t._key,s._document,new On(!1,!1),t.converter)))}}function R0(r,e,t){r=Be(r,we);const n={...T0,...t};(function(o){if(o.maxAttempts<1)throw new M(b.INVALID_ARGUMENT,"Max attempts must be at least 1")})(n);const s=Ge(r);return PO(s,(i=>e(new JI(r,i))),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(r){r=Be(r,Ie);const e=Be(r.firestore,we),t=Ge(e);return vI(t,r._key).then((n=>Rd(e,r,n)))}function P0(r){r=Be(r,Ie);const e=Be(r.firestore,we),t=Ge(e),n=new Gr(e);return wO(t,r._key).then((s=>new Ot(e,n,r._key,s,new On(s!==null&&s.hasLocalMutations,!0),r.converter)))}function b0(r){r=Be(r,Ie);const e=Be(r.firestore,we),t=Ge(e);return vI(t,r._key,{source:"server"}).then((n=>Rd(e,r,n)))}function S0(r){r=Be(r,rt);const e=Be(r.firestore,we),t=Ge(e),n=new Gr(e);return kI(r._query),PI(t,r._query).then((s=>new Ft(e,n,r,s)))}function N0(r){r=Be(r,rt);const e=Be(r.firestore,we),t=Ge(e),n=new Gr(e);return TO(t,r._query).then((s=>new Ft(e,n,r,s)))}function O0(r){r=Be(r,rt);const e=Be(r.firestore,we),t=Ge(e),n=new Gr(e);return PI(t,r._query,{source:"server"}).then((s=>new Ft(e,n,r,s)))}function F0(r,e,t){r=Be(r,Ie);const n=Be(r.firestore,we),s=Kc(r.converter,e,t),i=Ss(n);return Xi(n,[vc(i,"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Me.none())])}function L0(r,e,t,...n){r=Be(r,Ie);const s=Be(r.firestore,we),i=Ss(s);let o;return o=typeof(e=ne(e))=="string"||e instanceof bs?bh(i,"updateDoc",r._key,e,t,n):Ph(i,"updateDoc",r._key,e),Xi(s,[o.toMutation(r._key,Me.exists(!0))])}function V0(r){return Xi(Be(r.firestore,we),[new Gi(r._key,Me.none())])}function k0(r,e){const t=Be(r.firestore,we),n=sE(r),s=Kc(r.converter,e),i=Ss(r.firestore);return Xi(t,[vc(i,"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Me.exists(!1))]).then((()=>n))}function PB(r,...e){var l,B,d;r=ne(r);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||ri(e[n])||(t=e[n++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(ri(e[n])){const C=e[n];e[n]=(l=C.next)==null?void 0:l.bind(C),e[n+1]=(B=C.error)==null?void 0:B.bind(C),e[n+2]=(d=C.complete)==null?void 0:d.bind(C)}let i,o,a;if(r instanceof Ie)o=Be(r.firestore,we),a=Ui(r._key.path),i={next:C=>{e[n]&&e[n](Rd(o,r,C))},error:e[n+1],complete:e[n+2]};else{const C=Be(r,rt);o=Be(C.firestore,we),a=C._query;const g=new Gr(o);i={next:D=>{e[n]&&e[n](new Ft(o,g,C,D))},error:e[n+1],complete:e[n+2]},kI(r._query)}const u=Ge(o);return yO(u,a,s,i)}function x0(r,e,...t){const n=ne(r),s=(function(u){const l={bundle:"",bundleName:"",bundleSource:""},B=["bundle","bundleName","bundleSource"];for(const d of B){if(!(d in u)){l.error=`snapshotJson missing required field: ${d}`;break}const C=u[d];if(typeof C!="string"){l.error=`snapshotJson field '${d}' must be a string.`;break}if(C.length===0){l.error=`snapshotJson field '${d}' cannot be an empty string.`;break}d==="bundle"?l.bundle=C:d==="bundleName"?l.bundleName=C:d==="bundleSource"&&(l.bundleSource=C)}return l})(e);if(s.error)throw new M(b.INVALID_ARGUMENT,s.error);let i,o=0;if(typeof t[o]!="object"||ri(t[o])||(i=t[o++]),s.bundleSource==="QuerySnapshot"){let a=null;if(typeof t[o]=="object"&&ri(t[o])){const u=t[o++];a={next:u.next,error:u.error,complete:u.complete}}else a={next:t[o++],error:t[o++],complete:t[o++]};return(function(l,B,d,C,g){let D,N=!1;return vB(l,B.bundle).then((()=>FI(l,B.bundleName))).then((H=>{H&&!N&&(g&&H.withConverter(g),D=PB(H,d||{},C))})).catch((H=>(C.error&&C.error(H),()=>{}))),()=>{N||(N=!0,D&&D())}})(n,s,i,a,t[o])}if(s.bundleSource==="DocumentSnapshot"){let a=null;if(typeof t[o]=="object"&&ri(t[o])){const u=t[o++];a={next:u.next,error:u.error,complete:u.complete}}else a={next:t[o++],error:t[o++],complete:t[o++]};return(function(l,B,d,C,g){let D,N=!1;return vB(l,B.bundle).then((()=>{if(!N){const H=new Ie(l,g||null,K.fromPath(B.bundleName));D=PB(H,d||{},C)}})).catch((H=>(C.error&&C.error(H),()=>{}))),()=>{N||(N=!0,D&&D())}})(n,s,i,a,t[o])}throw new M(b.INVALID_ARGUMENT,`unsupported bundle source: ${s.bundleSource}`)}function M0(r,e){r=Be(r,we);const t=Ge(r),n=ri(e)?e:{next:e};return vO(t,n)}function Xi(r,e){const t=Ge(r);return RO(t,e)}function Rd(r,e,t){const n=t.docs.get(e._key),s=new Gr(r);return new Ot(r,s,e._key,n,new On(t.hasPendingWrites,t.fromCache),e.converter)}function G0(r){return r=Be(r,we),Ge(r),new jI(r,(e=>Xi(r,e)))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U0(r,e){r=Be(r,we);const t=Ge(r);if(!t._uninitializedComponentsProvider||t._uninitializedComponentsProvider._offline.kind==="memory")return nt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const n=(function(i){const o=typeof i=="string"?(function(l){try{return JSON.parse(l)}catch(B){throw new M(b.INVALID_ARGUMENT,"Failed to parse JSON: "+(B==null?void 0:B.message))}})(i):i,a=[];if(Array.isArray(o.indexes))for(const u of o.indexes){const l=Xp(u,"collectionGroup"),B=[];if(Array.isArray(u.fields))for(const d of u.fields){const C=Xp(d,"fieldPath"),g=Nh("setIndexConfiguration",C);d.arrayConfig==="CONTAINS"?B.push(new ls(g,2)):d.order==="ASCENDING"?B.push(new ls(g,0)):d.order==="DESCENDING"&&B.push(new ls(g,1))}a.push(new pi(pi.UNKNOWN_ID,l,B,gi.empty()))}return a})(e);return NO(t,n)}function Xp(r,e){if(typeof r[e]!="string")throw new M(b.INVALID_ARGUMENT,"Missing string value for: "+e);return r[e]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function H0(r){var s;r=Be(r,we);const e=Zp.get(r);if(e)return e;if(((s=Ge(r)._uninitializedComponentsProvider)==null?void 0:s._offline.kind)!=="persistent")return null;const n=new KI(r);return Zp.set(r,n),n}function q0(r){zI(r,!0)}function j0(r){zI(r,!1)}function J0(r){const e=Ge(r._firestore);FO(e).then((t=>U("deleting all persistent cache indexes succeeded"))).catch((t=>nt("deleting all persistent cache indexes failed",t)))}function zI(r,e){const t=Ge(r._firestore);OO(t,e).then((n=>U(`setting persistent cache index auto creation isEnabled=${e} succeeded`))).catch((n=>nt(`setting persistent cache index auto creation isEnabled=${e} failed`,n)))}const Zp=new WeakMap;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return vd.instance.onExistenceFilterMismatch(e)}}class vd{constructor(){this.t=new Map}static get instance(){return Cu||(Cu=new vd,eP(Cu)),Cu}Ae(e){this.t.forEach((t=>t(e)))}onExistenceFilterMismatch(e){const t=Symbol(),n=this.t;return n.set(t,e),()=>n.delete(t)}}let Cu=null;const eg="@firebase/firestore",tg="4.17.2";(function(e,t=!0){fv(Ts),fs(new ds("firestore",((n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),a=new we(new pP(n.getProvider("auth-internal")),new _P(o,n.getProvider("app-check-internal")),wv(o,s),o);return i={useFetchStreams:t,...i},a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),dn(eg,tg,e),dn(eg,tg,"esm2020")})();const nF=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:wd,AggregateField:Pi,AggregateQuerySnapshot:VI,Bytes:Pt,CACHE_SIZE_UNLIMITED:VO,CollectionReference:Xt,DocumentReference:Ie,DocumentSnapshot:Ot,FieldPath:bs,FieldValue:Dn,Firestore:we,FirestoreError:M,GeoPoint:Yt,LoadBundleTask:SI,PersistentCacheIndexManager:KI,Query:rt,QueryCompositeFilterConstraint:Ls,QueryConstraint:$i,QueryDocumentSnapshot:zo,QueryEndAtConstraint:ka,QueryFieldFilterConstraint:Yi,QueryLimitConstraint:La,QueryOrderByConstraint:zc,QuerySnapshot:Ft,QueryStartAtConstraint:Va,SnapshotMetadata:On,Timestamp:_e,Transaction:JI,VectorValue:Tt,WriteBatch:jI,_AutoId:gc,_ByteString:Se,_DatabaseId:wr,_DocumentKey:K,_EmptyAppCheckTokenProvider:EP,_EmptyAuthCredentialsProvider:K_,_FieldPath:Je,_TestingHooks:K0,_cast:Be,_debugAssert:pv,_internalAggregationQueryToProtoRunAggregationQueryRequest:YO,_internalQueryToProtoQueryTarget:$O,_isBase64Available:Iv,_logWarn:nt,_validateIsNotUsedTogether:Jm,addDoc:k0,aggregateFieldEqual:B0,aggregateQuerySnapshotEqual:h0,and:t0,arrayRemove:QP,arrayUnion:zP,average:l0,clearIndexedDbPersistence:UO,collection:kP,collectionGroup:xP,connectFirestoreEmulator:rE,count:UI,deleteAllPersistentCacheIndexes:J0,deleteDoc:V0,deleteField:JP,disableNetwork:jO,disablePersistentCacheIndexAutoCreation:j0,doc:sE,documentId:j_,documentSnapshotFromJSON:KO,enableIndexedDbPersistence:MO,enableMultiTabIndexedDbPersistence:GO,enableNetwork:qO,enablePersistentCacheIndexAutoCreation:q0,endAt:u0,endBefore:a0,ensureFirestoreConfigured:Ge,executeWrite:Xi,getAggregateFromServer:HI,getCountFromServer:d0,getDoc:v0,getDocFromCache:P0,getDocFromServer:b0,getDocs:S0,getDocsFromCache:N0,getDocsFromServer:O0,getFirestore:xO,getPersistentCacheIndexManager:H0,increment:WP,initializeFirestore:kO,limit:r0,limitToLast:s0,loadBundle:vB,maximum:YP,memoryEagerGarbageCollector:m0,memoryLocalCache:E0,memoryLruGarbageCollector:_0,minimum:$P,namedQuery:FI,onSnapshot:PB,onSnapshotResume:x0,onSnapshotsInSync:M0,or:e0,orderBy:n0,persistentLocalCache:I0,persistentMultipleTabManager:w0,persistentSingleTabManager:qI,query:XO,queryEqual:Dh,querySnapshotFromJSON:zO,refEqual:MP,runTransaction:R0,serverTimestamp:KP,setDoc:F0,setIndexConfiguration:U0,setLogLevel:Cv,snapshotEqual:WO,startAfter:o0,startAt:i0,sum:c0,terminate:JO,updateDoc:L0,vector:fE,waitForPendingWrites:HO,where:ZO,writeBatch:G0},Symbol.toStringTag,{value:"Module"}));export{W0 as a,nF as b,Q0 as i};
