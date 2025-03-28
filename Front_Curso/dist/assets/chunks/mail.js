(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const Gu=()=>{};var jo={};/**
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
 */const Ja=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},Wu=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],l=n[e++],u=n[e++],d=((i&7)<<18|(o&63)<<12|(l&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],l=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|l&63)}}return t.join("")},Za={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],l=i+1<n.length,u=l?n[i+1]:0,d=i+2<n.length,p=d?n[i+2]:0,b=o>>2,I=(o&3)<<4|u>>4;let R=(u&15)<<2|p>>6,V=p&63;d||(V=64,l||(R=64)),r.push(e[b],e[I],e[R],e[V])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ja(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Wu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],u=i<n.length?e[n.charAt(i)]:0;++i;const p=i<n.length?e[n.charAt(i)]:64;++i;const I=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||u==null||p==null||I==null)throw new Ku;const R=o<<2|u>>4;if(r.push(R),p!==64){const V=u<<4&240|p>>2;if(r.push(V),I!==64){const D=p<<6&192|I;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ku extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qu=function(n){const t=Ja(n);return Za.encodeByteArray(t,!0)},vr=function(n){return Qu(n).replace(/\./g,"")},Xu=function(n){try{return Za.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Yu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ju=()=>Yu().__FIREBASE_DEFAULTS__,Zu=()=>{if(typeof process>"u"||typeof jo>"u")return;const n=jo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},th=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Xu(n[1]);return t&&JSON.parse(t)},ri=()=>{try{return Gu()||Ju()||Zu()||th()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},eh=n=>{var t,e;return(e=(t=ri())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},nh=n=>{const t=eh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},tl=()=>{var n;return(n=ri())===null||n===void 0?void 0:n.config};/**
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
 */class rh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function sh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[vr(JSON.stringify(e)),vr(JSON.stringify(l)),""].join(".")}/**
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
 */function ih(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oh(){var n;const t=(n=ri())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ah(){return!oh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lh(){try{return typeof indexedDB=="object"}catch{return!1}}function ch(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const uh="FirebaseError";class Qe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=uh,Object.setPrototypeOf(this,Qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,el.prototype.create)}}class el{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],l=o?hh(o,r):"Error",u=`${this.serviceName}: ${l} (${i}).`;return new Qe(i,u,r)}}function hh(n,t){return n.replace(dh,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const dh=/\{\$([^}]+)}/g;function Er(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],l=t[i];if(Ho(o)&&Ho(l)){if(!Er(o,l))return!1}else if(o!==l)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Ho(n){return n!==null&&typeof n=="object"}/**
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
 */function Cn(n){return n&&n._delegate?n._delegate:n}class Pn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const we="[DEFAULT]";/**
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
 */class fh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new rh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(mh(t))try{this.getOrInitializeService({instanceIdentifier:we})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=we){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=we){return this.instances.has(t)}getOptions(t=we){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&l.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&t(l,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ph(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=we){return this.component?this.component.multipleInstances?t:we:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ph(n){return n===we?void 0:n}function mh(n){return n.instantiationMode==="EAGER"}/**
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
 */class gh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new fh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const wh={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},yh=U.INFO,_h={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},vh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=_h[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class nl{constructor(t){this.name=t,this._logLevel=yh,this._logHandler=vh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?wh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const Eh=(n,t)=>t.some(e=>n instanceof e);let zo,qo;function bh(){return zo||(zo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Th(){return qo||(qo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rl=new WeakMap,Bs=new WeakMap,sl=new WeakMap,Ss=new WeakMap,si=new WeakMap;function Ah(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",l)},o=()=>{e(se(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&rl.set(e,n)}).catch(()=>{}),si.set(t,n),t}function Ih(n){if(Bs.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",l),n.removeEventListener("abort",l)},o=()=>{e(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",l),n.addEventListener("abort",l)});Bs.set(n,t)}let Fs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Bs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||sl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return se(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Ch(n){Fs=n(Fs)}function Ph(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ks(this),t,...e);return sl.set(r,t.sort?t.sort():[t]),se(r)}:Th().includes(n)?function(...t){return n.apply(ks(this),t),se(rl.get(this))}:function(...t){return se(n.apply(ks(this),t))}}function Rh(n){return typeof n=="function"?Ph(n):(n instanceof IDBTransaction&&Ih(n),Eh(n,bh())?new Proxy(n,Fs):n)}function se(n){if(n instanceof IDBRequest)return Ah(n);if(Ss.has(n))return Ss.get(n);const t=Rh(n);return t!==n&&(Ss.set(n,t),si.set(t,n)),t}const ks=n=>si.get(n);function Sh(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const l=indexedDB.open(n,t),u=se(l);return r&&l.addEventListener("upgradeneeded",d=>{r(se(l.result),d.oldVersion,d.newVersion,se(l.transaction),d)}),e&&l.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),u.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",p=>i(p.oldVersion,p.newVersion,p))}).catch(()=>{}),u}const kh=["get","getKey","getAll","getAllKeys","count"],Vh=["put","add","delete","clear"],Vs=new Map;function Go(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Vs.get(t))return Vs.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Vh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kh.includes(e)))return;const o=async function(l,...u){const d=this.transaction(l,i?"readwrite":"readonly");let p=d.store;return r&&(p=p.index(u.shift())),(await Promise.all([p[e](...u),i&&d.done]))[0]};return Vs.set(t,o),o}Ch(n=>({...n,get:(t,e,r)=>Go(t,e)||n.get(t,e,r),has:(t,e)=>!!Go(t,e)||n.has(t,e)}));/**
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
 */class Dh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(xh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function xh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Us="@firebase/app",Wo="0.11.3";/**
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
 */const Yt=new nl("@firebase/app"),Oh="@firebase/app-compat",Nh="@firebase/analytics-compat",Lh="@firebase/analytics",Mh="@firebase/app-check-compat",Bh="@firebase/app-check",Fh="@firebase/auth",Uh="@firebase/auth-compat",$h="@firebase/database",jh="@firebase/data-connect",Hh="@firebase/database-compat",zh="@firebase/functions",qh="@firebase/functions-compat",Gh="@firebase/installations",Wh="@firebase/installations-compat",Kh="@firebase/messaging",Qh="@firebase/messaging-compat",Xh="@firebase/performance",Yh="@firebase/performance-compat",Jh="@firebase/remote-config",Zh="@firebase/remote-config-compat",td="@firebase/storage",ed="@firebase/storage-compat",nd="@firebase/firestore",rd="@firebase/vertexai",sd="@firebase/firestore-compat",id="firebase",od="11.5.0";/**
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
 */const $s="[DEFAULT]",ad={[Us]:"fire-core",[Oh]:"fire-core-compat",[Lh]:"fire-analytics",[Nh]:"fire-analytics-compat",[Bh]:"fire-app-check",[Mh]:"fire-app-check-compat",[Fh]:"fire-auth",[Uh]:"fire-auth-compat",[$h]:"fire-rtdb",[jh]:"fire-data-connect",[Hh]:"fire-rtdb-compat",[zh]:"fire-fn",[qh]:"fire-fn-compat",[Gh]:"fire-iid",[Wh]:"fire-iid-compat",[Kh]:"fire-fcm",[Qh]:"fire-fcm-compat",[Xh]:"fire-perf",[Yh]:"fire-perf-compat",[Jh]:"fire-rc",[Zh]:"fire-rc-compat",[td]:"fire-gcs",[ed]:"fire-gcs-compat",[nd]:"fire-fst",[sd]:"fire-fst-compat",[rd]:"fire-vertex","fire-js":"fire-js",[id]:"fire-js-all"};/**
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
 */const br=new Map,ld=new Map,js=new Map;function Ko(n,t){try{n.container.addComponent(t)}catch(e){Yt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Tr(n){const t=n.name;if(js.has(t))return Yt.debug(`There were multiple attempts to register component ${t}.`),!1;js.set(t,n);for(const e of br.values())Ko(e,n);for(const e of ld.values())Ko(e,n);return!0}function cd(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function ud(n){return n==null?!1:n.settings!==void 0}/**
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
 */const hd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ie=new el("app","Firebase",hd);/**
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
 */class dd{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ie.create("app-deleted",{appName:this._name})}}/**
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
 */const fd=od;function il(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:$s,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw ie.create("bad-app-name",{appName:String(i)});if(e||(e=tl()),!e)throw ie.create("no-options");const o=br.get(i);if(o){if(Er(e,o.options)&&Er(r,o.config))return o;throw ie.create("duplicate-app",{appName:i})}const l=new gh(i);for(const d of js.values())l.addComponent(d);const u=new dd(e,r,l);return br.set(i,u),u}function pd(n=$s){const t=br.get(n);if(!t&&n===$s&&tl())return il();if(!t)throw ie.create("no-app",{appName:n});return t}function Be(n,t,e){var r;let i=(r=ad[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),l=t.match(/\s|\//);if(o||l){const u=[`Unable to register library "${i}" with version "${t}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Yt.warn(u.join(" "));return}Tr(new Pn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const md="firebase-heartbeat-database",gd=1,Rn="firebase-heartbeat-store";let Ds=null;function ol(){return Ds||(Ds=Sh(md,gd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Rn)}catch(e){console.warn(e)}}}}).catch(n=>{throw ie.create("idb-open",{originalErrorMessage:n.message})})),Ds}async function wd(n){try{const e=(await ol()).transaction(Rn),r=await e.objectStore(Rn).get(al(n));return await e.done,r}catch(t){if(t instanceof Qe)Yt.warn(t.message);else{const e=ie.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Yt.warn(e.message)}}}async function Qo(n,t){try{const r=(await ol()).transaction(Rn,"readwrite");await r.objectStore(Rn).put(t,al(n)),await r.done}catch(e){if(e instanceof Qe)Yt.warn(e.message);else{const r=ie.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Yt.warn(r.message)}}}function al(n){return`${n.name}!${n.options.appId}`}/**
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
 */const yd=1024,_d=30;class vd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new bd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Xo();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(l=>l.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>_d){const l=Td(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Yt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xo(),{heartbeatsToSend:r,unsentEntries:i}=Ed(this._heartbeatsCache.heartbeats),o=vr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Yt.warn(e),""}}}function Xo(){return new Date().toISOString().substring(0,10)}function Ed(n,t=yd){const e=[];let r=n.slice();for(const i of n){const o=e.find(l=>l.agent===i.agent);if(o){if(o.dates.push(i.date),Yo(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Yo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class bd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lh()?ch().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await wd(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Yo(n){return vr(JSON.stringify({version:2,heartbeats:n})).length}function Td(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Ad(n){Tr(new Pn("platform-logger",t=>new Dh(t),"PRIVATE")),Tr(new Pn("heartbeat",t=>new vd(t),"PRIVATE")),Be(Us,Wo,n),Be(Us,Wo,"esm2017"),Be("fire-js","")}Ad("");var Id="firebase",Cd="11.5.0";/**
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
 */Be(Id,Cd,"app");var Jo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ii;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(_,f){function g(){}g.prototype=f.prototype,_.D=f.prototype,_.prototype=new g,_.prototype.constructor=_,_.C=function(w,y,E){for(var m=Array(arguments.length-2),qt=2;qt<arguments.length;qt++)m[qt-2]=arguments[qt];return f.prototype[y].apply(w,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,f,g){g||(g=0);var w=Array(16);if(typeof f=="string")for(var y=0;16>y;++y)w[y]=f.charCodeAt(g++)|f.charCodeAt(g++)<<8|f.charCodeAt(g++)<<16|f.charCodeAt(g++)<<24;else for(y=0;16>y;++y)w[y]=f[g++]|f[g++]<<8|f[g++]<<16|f[g++]<<24;f=_.g[0],g=_.g[1],y=_.g[2];var E=_.g[3],m=f+(E^g&(y^E))+w[0]+3614090360&4294967295;f=g+(m<<7&4294967295|m>>>25),m=E+(y^f&(g^y))+w[1]+3905402710&4294967295,E=f+(m<<12&4294967295|m>>>20),m=y+(g^E&(f^g))+w[2]+606105819&4294967295,y=E+(m<<17&4294967295|m>>>15),m=g+(f^y&(E^f))+w[3]+3250441966&4294967295,g=y+(m<<22&4294967295|m>>>10),m=f+(E^g&(y^E))+w[4]+4118548399&4294967295,f=g+(m<<7&4294967295|m>>>25),m=E+(y^f&(g^y))+w[5]+1200080426&4294967295,E=f+(m<<12&4294967295|m>>>20),m=y+(g^E&(f^g))+w[6]+2821735955&4294967295,y=E+(m<<17&4294967295|m>>>15),m=g+(f^y&(E^f))+w[7]+4249261313&4294967295,g=y+(m<<22&4294967295|m>>>10),m=f+(E^g&(y^E))+w[8]+1770035416&4294967295,f=g+(m<<7&4294967295|m>>>25),m=E+(y^f&(g^y))+w[9]+2336552879&4294967295,E=f+(m<<12&4294967295|m>>>20),m=y+(g^E&(f^g))+w[10]+4294925233&4294967295,y=E+(m<<17&4294967295|m>>>15),m=g+(f^y&(E^f))+w[11]+2304563134&4294967295,g=y+(m<<22&4294967295|m>>>10),m=f+(E^g&(y^E))+w[12]+1804603682&4294967295,f=g+(m<<7&4294967295|m>>>25),m=E+(y^f&(g^y))+w[13]+4254626195&4294967295,E=f+(m<<12&4294967295|m>>>20),m=y+(g^E&(f^g))+w[14]+2792965006&4294967295,y=E+(m<<17&4294967295|m>>>15),m=g+(f^y&(E^f))+w[15]+1236535329&4294967295,g=y+(m<<22&4294967295|m>>>10),m=f+(y^E&(g^y))+w[1]+4129170786&4294967295,f=g+(m<<5&4294967295|m>>>27),m=E+(g^y&(f^g))+w[6]+3225465664&4294967295,E=f+(m<<9&4294967295|m>>>23),m=y+(f^g&(E^f))+w[11]+643717713&4294967295,y=E+(m<<14&4294967295|m>>>18),m=g+(E^f&(y^E))+w[0]+3921069994&4294967295,g=y+(m<<20&4294967295|m>>>12),m=f+(y^E&(g^y))+w[5]+3593408605&4294967295,f=g+(m<<5&4294967295|m>>>27),m=E+(g^y&(f^g))+w[10]+38016083&4294967295,E=f+(m<<9&4294967295|m>>>23),m=y+(f^g&(E^f))+w[15]+3634488961&4294967295,y=E+(m<<14&4294967295|m>>>18),m=g+(E^f&(y^E))+w[4]+3889429448&4294967295,g=y+(m<<20&4294967295|m>>>12),m=f+(y^E&(g^y))+w[9]+568446438&4294967295,f=g+(m<<5&4294967295|m>>>27),m=E+(g^y&(f^g))+w[14]+3275163606&4294967295,E=f+(m<<9&4294967295|m>>>23),m=y+(f^g&(E^f))+w[3]+4107603335&4294967295,y=E+(m<<14&4294967295|m>>>18),m=g+(E^f&(y^E))+w[8]+1163531501&4294967295,g=y+(m<<20&4294967295|m>>>12),m=f+(y^E&(g^y))+w[13]+2850285829&4294967295,f=g+(m<<5&4294967295|m>>>27),m=E+(g^y&(f^g))+w[2]+4243563512&4294967295,E=f+(m<<9&4294967295|m>>>23),m=y+(f^g&(E^f))+w[7]+1735328473&4294967295,y=E+(m<<14&4294967295|m>>>18),m=g+(E^f&(y^E))+w[12]+2368359562&4294967295,g=y+(m<<20&4294967295|m>>>12),m=f+(g^y^E)+w[5]+4294588738&4294967295,f=g+(m<<4&4294967295|m>>>28),m=E+(f^g^y)+w[8]+2272392833&4294967295,E=f+(m<<11&4294967295|m>>>21),m=y+(E^f^g)+w[11]+1839030562&4294967295,y=E+(m<<16&4294967295|m>>>16),m=g+(y^E^f)+w[14]+4259657740&4294967295,g=y+(m<<23&4294967295|m>>>9),m=f+(g^y^E)+w[1]+2763975236&4294967295,f=g+(m<<4&4294967295|m>>>28),m=E+(f^g^y)+w[4]+1272893353&4294967295,E=f+(m<<11&4294967295|m>>>21),m=y+(E^f^g)+w[7]+4139469664&4294967295,y=E+(m<<16&4294967295|m>>>16),m=g+(y^E^f)+w[10]+3200236656&4294967295,g=y+(m<<23&4294967295|m>>>9),m=f+(g^y^E)+w[13]+681279174&4294967295,f=g+(m<<4&4294967295|m>>>28),m=E+(f^g^y)+w[0]+3936430074&4294967295,E=f+(m<<11&4294967295|m>>>21),m=y+(E^f^g)+w[3]+3572445317&4294967295,y=E+(m<<16&4294967295|m>>>16),m=g+(y^E^f)+w[6]+76029189&4294967295,g=y+(m<<23&4294967295|m>>>9),m=f+(g^y^E)+w[9]+3654602809&4294967295,f=g+(m<<4&4294967295|m>>>28),m=E+(f^g^y)+w[12]+3873151461&4294967295,E=f+(m<<11&4294967295|m>>>21),m=y+(E^f^g)+w[15]+530742520&4294967295,y=E+(m<<16&4294967295|m>>>16),m=g+(y^E^f)+w[2]+3299628645&4294967295,g=y+(m<<23&4294967295|m>>>9),m=f+(y^(g|~E))+w[0]+4096336452&4294967295,f=g+(m<<6&4294967295|m>>>26),m=E+(g^(f|~y))+w[7]+1126891415&4294967295,E=f+(m<<10&4294967295|m>>>22),m=y+(f^(E|~g))+w[14]+2878612391&4294967295,y=E+(m<<15&4294967295|m>>>17),m=g+(E^(y|~f))+w[5]+4237533241&4294967295,g=y+(m<<21&4294967295|m>>>11),m=f+(y^(g|~E))+w[12]+1700485571&4294967295,f=g+(m<<6&4294967295|m>>>26),m=E+(g^(f|~y))+w[3]+2399980690&4294967295,E=f+(m<<10&4294967295|m>>>22),m=y+(f^(E|~g))+w[10]+4293915773&4294967295,y=E+(m<<15&4294967295|m>>>17),m=g+(E^(y|~f))+w[1]+2240044497&4294967295,g=y+(m<<21&4294967295|m>>>11),m=f+(y^(g|~E))+w[8]+1873313359&4294967295,f=g+(m<<6&4294967295|m>>>26),m=E+(g^(f|~y))+w[15]+4264355552&4294967295,E=f+(m<<10&4294967295|m>>>22),m=y+(f^(E|~g))+w[6]+2734768916&4294967295,y=E+(m<<15&4294967295|m>>>17),m=g+(E^(y|~f))+w[13]+1309151649&4294967295,g=y+(m<<21&4294967295|m>>>11),m=f+(y^(g|~E))+w[4]+4149444226&4294967295,f=g+(m<<6&4294967295|m>>>26),m=E+(g^(f|~y))+w[11]+3174756917&4294967295,E=f+(m<<10&4294967295|m>>>22),m=y+(f^(E|~g))+w[2]+718787259&4294967295,y=E+(m<<15&4294967295|m>>>17),m=g+(E^(y|~f))+w[9]+3951481745&4294967295,_.g[0]=_.g[0]+f&4294967295,_.g[1]=_.g[1]+(y+(m<<21&4294967295|m>>>11))&4294967295,_.g[2]=_.g[2]+y&4294967295,_.g[3]=_.g[3]+E&4294967295}r.prototype.u=function(_,f){f===void 0&&(f=_.length);for(var g=f-this.blockSize,w=this.B,y=this.h,E=0;E<f;){if(y==0)for(;E<=g;)i(this,_,E),E+=this.blockSize;if(typeof _=="string"){for(;E<f;)if(w[y++]=_.charCodeAt(E++),y==this.blockSize){i(this,w),y=0;break}}else for(;E<f;)if(w[y++]=_[E++],y==this.blockSize){i(this,w),y=0;break}}this.h=y,this.o+=f},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var f=1;f<_.length-8;++f)_[f]=0;var g=8*this.o;for(f=_.length-8;f<_.length;++f)_[f]=g&255,g/=256;for(this.u(_),_=Array(16),f=g=0;4>f;++f)for(var w=0;32>w;w+=8)_[g++]=this.g[f]>>>w&255;return _};function o(_,f){var g=u;return Object.prototype.hasOwnProperty.call(g,_)?g[_]:g[_]=f(_)}function l(_,f){this.h=f;for(var g=[],w=!0,y=_.length-1;0<=y;y--){var E=_[y]|0;w&&E==f||(g[y]=E,w=!1)}this.g=g}var u={};function d(_){return-128<=_&&128>_?o(_,function(f){return new l([f|0],0>f?-1:0)}):new l([_|0],0>_?-1:0)}function p(_){if(isNaN(_)||!isFinite(_))return I;if(0>_)return O(p(-_));for(var f=[],g=1,w=0;_>=g;w++)f[w]=_/g|0,g*=4294967296;return new l(f,0)}function b(_,f){if(_.length==0)throw Error("number format error: empty string");if(f=f||10,2>f||36<f)throw Error("radix out of range: "+f);if(_.charAt(0)=="-")return O(b(_.substring(1),f));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=p(Math.pow(f,8)),w=I,y=0;y<_.length;y+=8){var E=Math.min(8,_.length-y),m=parseInt(_.substring(y,y+E),f);8>E?(E=p(Math.pow(f,E)),w=w.j(E).add(p(m))):(w=w.j(g),w=w.add(p(m)))}return w}var I=d(0),R=d(1),V=d(16777216);n=l.prototype,n.m=function(){if(M(this))return-O(this).m();for(var _=0,f=1,g=0;g<this.g.length;g++){var w=this.i(g);_+=(0<=w?w:4294967296+w)*f,f*=4294967296}return _},n.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(D(this))return"0";if(M(this))return"-"+O(this).toString(_);for(var f=p(Math.pow(_,6)),g=this,w="";;){var y=pt(g,f).g;g=Y(g,y.j(f));var E=((0<g.g.length?g.g[0]:g.h)>>>0).toString(_);if(g=y,D(g))return E+w;for(;6>E.length;)E="0"+E;w=E+w}},n.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function D(_){if(_.h!=0)return!1;for(var f=0;f<_.g.length;f++)if(_.g[f]!=0)return!1;return!0}function M(_){return _.h==-1}n.l=function(_){return _=Y(this,_),M(_)?-1:D(_)?0:1};function O(_){for(var f=_.g.length,g=[],w=0;w<f;w++)g[w]=~_.g[w];return new l(g,~_.h).add(R)}n.abs=function(){return M(this)?O(this):this},n.add=function(_){for(var f=Math.max(this.g.length,_.g.length),g=[],w=0,y=0;y<=f;y++){var E=w+(this.i(y)&65535)+(_.i(y)&65535),m=(E>>>16)+(this.i(y)>>>16)+(_.i(y)>>>16);w=m>>>16,E&=65535,m&=65535,g[y]=m<<16|E}return new l(g,g[g.length-1]&-2147483648?-1:0)};function Y(_,f){return _.add(O(f))}n.j=function(_){if(D(this)||D(_))return I;if(M(this))return M(_)?O(this).j(O(_)):O(O(this).j(_));if(M(_))return O(this.j(O(_)));if(0>this.l(V)&&0>_.l(V))return p(this.m()*_.m());for(var f=this.g.length+_.g.length,g=[],w=0;w<2*f;w++)g[w]=0;for(w=0;w<this.g.length;w++)for(var y=0;y<_.g.length;y++){var E=this.i(w)>>>16,m=this.i(w)&65535,qt=_.i(y)>>>16,nn=_.i(y)&65535;g[2*w+2*y]+=m*nn,X(g,2*w+2*y),g[2*w+2*y+1]+=E*nn,X(g,2*w+2*y+1),g[2*w+2*y+1]+=m*qt,X(g,2*w+2*y+1),g[2*w+2*y+2]+=E*qt,X(g,2*w+2*y+2)}for(w=0;w<f;w++)g[w]=g[2*w+1]<<16|g[2*w];for(w=f;w<2*f;w++)g[w]=0;return new l(g,0)};function X(_,f){for(;(_[f]&65535)!=_[f];)_[f+1]+=_[f]>>>16,_[f]&=65535,f++}function J(_,f){this.g=_,this.h=f}function pt(_,f){if(D(f))throw Error("division by zero");if(D(_))return new J(I,I);if(M(_))return f=pt(O(_),f),new J(O(f.g),O(f.h));if(M(f))return f=pt(_,O(f)),new J(O(f.g),f.h);if(30<_.g.length){if(M(_)||M(f))throw Error("slowDivide_ only works with positive integers.");for(var g=R,w=f;0>=w.l(_);)g=he(g),w=he(w);var y=Pt(g,1),E=Pt(w,1);for(w=Pt(w,2),g=Pt(g,2);!D(w);){var m=E.add(w);0>=m.l(_)&&(y=y.add(g),E=m),w=Pt(w,1),g=Pt(g,1)}return f=Y(_,y.j(f)),new J(y,f)}for(y=I;0<=_.l(f);){for(g=Math.max(1,Math.floor(_.m()/f.m())),w=Math.ceil(Math.log(g)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),E=p(g),m=E.j(f);M(m)||0<m.l(_);)g-=w,E=p(g),m=E.j(f);D(E)&&(E=R),y=y.add(E),_=Y(_,m)}return new J(y,_)}n.A=function(_){return pt(this,_).h},n.and=function(_){for(var f=Math.max(this.g.length,_.g.length),g=[],w=0;w<f;w++)g[w]=this.i(w)&_.i(w);return new l(g,this.h&_.h)},n.or=function(_){for(var f=Math.max(this.g.length,_.g.length),g=[],w=0;w<f;w++)g[w]=this.i(w)|_.i(w);return new l(g,this.h|_.h)},n.xor=function(_){for(var f=Math.max(this.g.length,_.g.length),g=[],w=0;w<f;w++)g[w]=this.i(w)^_.i(w);return new l(g,this.h^_.h)};function he(_){for(var f=_.g.length+1,g=[],w=0;w<f;w++)g[w]=_.i(w)<<1|_.i(w-1)>>>31;return new l(g,_.h)}function Pt(_,f){var g=f>>5;f%=32;for(var w=_.g.length-g,y=[],E=0;E<w;E++)y[E]=0<f?_.i(E+g)>>>f|_.i(E+g+1)<<32-f:_.i(E+g);return new l(y,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=b,ii=l}).apply(typeof Jo<"u"?Jo:typeof self<"u"?self:typeof window<"u"?window:{});var ur=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ll,En,cl,gr,Hs,ul,hl,dl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,c){return s==Array.prototype||s==Object.prototype||(s[a]=c.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof ur=="object"&&ur];for(var a=0;a<s.length;++a){var c=s[a];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var c=r;s=s.split(".");for(var h=0;h<s.length-1;h++){var v=s[h];if(!(v in c))break t;c=c[v]}s=s[s.length-1],h=c[s],a=a(h),a!=h&&a!=null&&t(c,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var c=0,h=!1,v={next:function(){if(!h&&c<s.length){var T=c++;return{value:a(T,s[T]),done:!1}}return h=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,c){return c})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function d(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function p(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function b(s,a,c){return s.call.apply(s.bind,arguments)}function I(s,a,c){if(!s)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,h),s.apply(a,v)}}return function(){return s.apply(a,arguments)}}function R(s,a,c){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:I,R.apply(null,arguments)}function V(s,a){var c=Array.prototype.slice.call(arguments,1);return function(){var h=c.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function D(s,a){function c(){}c.prototype=a.prototype,s.aa=a.prototype,s.prototype=new c,s.prototype.constructor=s,s.Qb=function(h,v,T){for(var S=Array(arguments.length-2),q=2;q<arguments.length;q++)S[q-2]=arguments[q];return a.prototype[v].apply(h,S)}}function M(s){const a=s.length;if(0<a){const c=Array(a);for(let h=0;h<a;h++)c[h]=s[h];return c}return[]}function O(s,a){for(let c=1;c<arguments.length;c++){const h=arguments[c];if(d(h)){const v=s.length||0,T=h.length||0;s.length=v+T;for(let S=0;S<T;S++)s[v+S]=h[S]}else s.push(h)}}class Y{constructor(a,c){this.i=a,this.j=c,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function X(s){return/^[\s\xa0]*$/.test(s)}function J(){var s=u.navigator;return s&&(s=s.userAgent)?s:""}function pt(s){return pt[" "](s),s}pt[" "]=function(){};var he=J().indexOf("Gecko")!=-1&&!(J().toLowerCase().indexOf("webkit")!=-1&&J().indexOf("Edge")==-1)&&!(J().indexOf("Trident")!=-1||J().indexOf("MSIE")!=-1)&&J().indexOf("Edge")==-1;function Pt(s,a,c){for(const h in s)a.call(c,s[h],h,s)}function _(s,a){for(const c in s)a.call(void 0,s[c],c,s)}function f(s){const a={};for(const c in s)a[c]=s[c];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(s,a){let c,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(c in h)s[c]=h[c];for(let T=0;T<g.length;T++)c=g[T],Object.prototype.hasOwnProperty.call(h,c)&&(s[c]=h[c])}}function y(s){var a=1;s=s.split(":");const c=[];for(;0<a&&s.length;)c.push(s.shift()),a--;return s.length&&c.push(s.join(":")),c}function E(s){u.setTimeout(()=>{throw s},0)}function m(){var s=is;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class qt{constructor(){this.h=this.g=null}add(a,c){const h=nn.get();h.set(a,c),this.h?this.h.next=h:this.g=h,this.h=h}}var nn=new Y(()=>new hu,s=>s.reset());class hu{constructor(){this.next=this.g=this.h=null}set(a,c){this.h=a,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let rn,sn=!1,is=new qt,$i=()=>{const s=u.Promise.resolve(void 0);rn=()=>{s.then(du)}};var du=()=>{for(var s;s=m();){try{s.h.call(s.g)}catch(c){E(c)}var a=nn;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}sn=!1};function Jt(){this.s=this.s,this.C=this.C}Jt.prototype.s=!1,Jt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Jt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function mt(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var fu=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const c=()=>{};u.addEventListener("test",c,a),u.removeEventListener("test",c,a)}catch{}return s}();function on(s,a){if(mt.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var c=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(he){t:{try{pt(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else c=="mouseover"?a=s.fromElement:c=="mouseout"&&(a=s.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:pu[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&on.aa.h.call(this)}}D(on,mt);var pu={2:"touch",3:"pen",4:"mouse"};on.prototype.h=function(){on.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var qn="closure_listenable_"+(1e6*Math.random()|0),mu=0;function gu(s,a,c,h,v){this.listener=s,this.proxy=null,this.src=a,this.type=c,this.capture=!!h,this.ha=v,this.key=++mu,this.da=this.fa=!1}function Gn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function Wn(s){this.src=s,this.g={},this.h=0}Wn.prototype.add=function(s,a,c,h,v){var T=s.toString();s=this.g[T],s||(s=this.g[T]=[],this.h++);var S=as(s,a,h,v);return-1<S?(a=s[S],c||(a.fa=!1)):(a=new gu(a,this.src,T,!!h,v),a.fa=c,s.push(a)),a};function os(s,a){var c=a.type;if(c in s.g){var h=s.g[c],v=Array.prototype.indexOf.call(h,a,void 0),T;(T=0<=v)&&Array.prototype.splice.call(h,v,1),T&&(Gn(a),s.g[c].length==0&&(delete s.g[c],s.h--))}}function as(s,a,c,h){for(var v=0;v<s.length;++v){var T=s[v];if(!T.da&&T.listener==a&&T.capture==!!c&&T.ha==h)return v}return-1}var ls="closure_lm_"+(1e6*Math.random()|0),cs={};function ji(s,a,c,h,v){if(Array.isArray(a)){for(var T=0;T<a.length;T++)ji(s,a[T],c,h,v);return null}return c=qi(c),s&&s[qn]?s.K(a,c,p(h)?!!h.capture:!1,v):wu(s,a,c,!1,h,v)}function wu(s,a,c,h,v,T){if(!a)throw Error("Invalid event type");var S=p(v)?!!v.capture:!!v,q=hs(s);if(q||(s[ls]=q=new Wn(s)),c=q.add(a,c,h,S,T),c.proxy)return c;if(h=yu(),c.proxy=h,h.src=s,h.listener=c,s.addEventListener)fu||(v=S),v===void 0&&(v=!1),s.addEventListener(a.toString(),h,v);else if(s.attachEvent)s.attachEvent(zi(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return c}function yu(){function s(c){return a.call(s.src,s.listener,c)}const a=_u;return s}function Hi(s,a,c,h,v){if(Array.isArray(a))for(var T=0;T<a.length;T++)Hi(s,a[T],c,h,v);else h=p(h)?!!h.capture:!!h,c=qi(c),s&&s[qn]?(s=s.i,a=String(a).toString(),a in s.g&&(T=s.g[a],c=as(T,c,h,v),-1<c&&(Gn(T[c]),Array.prototype.splice.call(T,c,1),T.length==0&&(delete s.g[a],s.h--)))):s&&(s=hs(s))&&(a=s.g[a.toString()],s=-1,a&&(s=as(a,c,h,v)),(c=-1<s?a[s]:null)&&us(c))}function us(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[qn])os(a.i,s);else{var c=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(c,h,s.capture):a.detachEvent?a.detachEvent(zi(c),h):a.addListener&&a.removeListener&&a.removeListener(h),(c=hs(a))?(os(c,s),c.h==0&&(c.src=null,a[ls]=null)):Gn(s)}}}function zi(s){return s in cs?cs[s]:cs[s]="on"+s}function _u(s,a){if(s.da)s=!0;else{a=new on(a,this);var c=s.listener,h=s.ha||s.src;s.fa&&us(s),s=c.call(h,a)}return s}function hs(s){return s=s[ls],s instanceof Wn?s:null}var ds="__closure_events_fn_"+(1e9*Math.random()>>>0);function qi(s){return typeof s=="function"?s:(s[ds]||(s[ds]=function(a){return s.handleEvent(a)}),s[ds])}function gt(){Jt.call(this),this.i=new Wn(this),this.M=this,this.F=null}D(gt,Jt),gt.prototype[qn]=!0,gt.prototype.removeEventListener=function(s,a,c,h){Hi(this,s,a,c,h)};function Tt(s,a){var c,h=s.F;if(h)for(c=[];h;h=h.F)c.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new mt(a,s);else if(a instanceof mt)a.target=a.target||s;else{var v=a;a=new mt(h,s),w(a,v)}if(v=!0,c)for(var T=c.length-1;0<=T;T--){var S=a.g=c[T];v=Kn(S,h,!0,a)&&v}if(S=a.g=s,v=Kn(S,h,!0,a)&&v,v=Kn(S,h,!1,a)&&v,c)for(T=0;T<c.length;T++)S=a.g=c[T],v=Kn(S,h,!1,a)&&v}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var c=s.g[a],h=0;h<c.length;h++)Gn(c[h]);delete s.g[a],s.h--}}this.F=null},gt.prototype.K=function(s,a,c,h){return this.i.add(String(s),a,!1,c,h)},gt.prototype.L=function(s,a,c,h){return this.i.add(String(s),a,!0,c,h)};function Kn(s,a,c,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,T=0;T<a.length;++T){var S=a[T];if(S&&!S.da&&S.capture==c){var q=S.listener,ct=S.ha||S.src;S.fa&&os(s.i,S),v=q.call(ct,h)!==!1&&v}}return v&&!h.defaultPrevented}function Gi(s,a,c){if(typeof s=="function")c&&(s=R(s,c));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(s,a||0)}function Wi(s){s.g=Gi(()=>{s.g=null,s.i&&(s.i=!1,Wi(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class vu extends Jt{constructor(a,c){super(),this.m=a,this.l=c,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Wi(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function an(s){Jt.call(this),this.h=s,this.g={}}D(an,Jt);var Ki=[];function Qi(s){Pt(s.g,function(a,c){this.g.hasOwnProperty(c)&&us(a)},s),s.g={}}an.prototype.N=function(){an.aa.N.call(this),Qi(this)},an.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fs=u.JSON.stringify,Eu=u.JSON.parse,bu=class{stringify(s){return u.JSON.stringify(s,void 0)}parse(s){return u.JSON.parse(s,void 0)}};function ps(){}ps.prototype.h=null;function Xi(s){return s.h||(s.h=s.i())}function Yi(){}var ln={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ms(){mt.call(this,"d")}D(ms,mt);function gs(){mt.call(this,"c")}D(gs,mt);var de={},Ji=null;function Qn(){return Ji=Ji||new gt}de.La="serverreachability";function Zi(s){mt.call(this,de.La,s)}D(Zi,mt);function cn(s){const a=Qn();Tt(a,new Zi(a))}de.STAT_EVENT="statevent";function to(s,a){mt.call(this,de.STAT_EVENT,s),this.stat=a}D(to,mt);function At(s){const a=Qn();Tt(a,new to(a,s))}de.Ma="timingevent";function eo(s,a){mt.call(this,de.Ma,s),this.size=a}D(eo,mt);function un(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){s()},a)}function hn(){this.g=!0}hn.prototype.xa=function(){this.g=!1};function Tu(s,a,c,h,v,T){s.info(function(){if(s.g)if(T)for(var S="",q=T.split("&"),ct=0;ct<q.length;ct++){var H=q[ct].split("=");if(1<H.length){var wt=H[0];H=H[1];var yt=wt.split("_");S=2<=yt.length&&yt[1]=="type"?S+(wt+"="+H+"&"):S+(wt+"=redacted&")}}else S=null;else S=T;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+a+`
`+c+`
`+S})}function Au(s,a,c,h,v,T,S){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+a+`
`+c+`
`+T+" "+S})}function De(s,a,c,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Cu(s,c)+(h?" "+h:"")})}function Iu(s,a){s.info(function(){return"TIMEOUT: "+a})}hn.prototype.info=function(){};function Cu(s,a){if(!s.g)return a;if(!a)return null;try{var c=JSON.parse(a);if(c){for(s=0;s<c.length;s++)if(Array.isArray(c[s])){var h=c[s];if(!(2>h.length)){var v=h[1];if(Array.isArray(v)&&!(1>v.length)){var T=v[0];if(T!="noop"&&T!="stop"&&T!="close")for(var S=1;S<v.length;S++)v[S]=""}}}}return fs(c)}catch{return a}}var Xn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},no={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ws;function Yn(){}D(Yn,ps),Yn.prototype.g=function(){return new XMLHttpRequest},Yn.prototype.i=function(){return{}},ws=new Yn;function Zt(s,a,c,h){this.j=s,this.i=a,this.l=c,this.R=h||1,this.U=new an(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ro}function ro(){this.i=null,this.g="",this.h=!1}var so={},ys={};function _s(s,a,c){s.L=1,s.v=er(Gt(a)),s.m=c,s.P=!0,io(s,null)}function io(s,a){s.F=Date.now(),Jn(s),s.A=Gt(s.v);var c=s.A,h=s.R;Array.isArray(h)||(h=[String(h)]),vo(c.i,"t",h),s.C=0,c=s.j.J,s.h=new ro,s.g=Bo(s.j,c?a:null,!s.m),0<s.O&&(s.M=new vu(R(s.Y,s,s.g),s.O)),a=s.U,c=s.g,h=s.ca;var v="readystatechange";Array.isArray(v)||(v&&(Ki[0]=v.toString()),v=Ki);for(var T=0;T<v.length;T++){var S=ji(c,v[T],h||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=s.H?f(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),cn(),Tu(s.i,s.u,s.A,s.l,s.R,s.m)}Zt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Wt(s)==3?a.j():this.Y(s)},Zt.prototype.Y=function(s){try{if(s==this.g)t:{const yt=Wt(this.g);var a=this.g.Ba();const Ne=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||Po(this.g)))){this.J||yt!=4||a==7||(a==8||0>=Ne?cn(3):cn(2)),vs(this);var c=this.g.Z();this.X=c;e:if(oo(this)){var h=Po(this.g);s="";var v=h.length,T=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fe(this),dn(this);var S="";break e}this.h.i=new u.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,s+=this.h.i.decode(h[a],{stream:!(T&&a==v-1)});h.length=0,this.h.g+=s,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=c==200,Au(this.i,this.u,this.A,this.l,this.R,yt,c),this.o){if(this.T&&!this.K){e:{if(this.g){var q,ct=this.g;if((q=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(q)){var H=q;break e}}H=null}if(c=H)De(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Es(this,c);else{this.o=!1,this.s=3,At(12),fe(this),dn(this);break t}}if(this.P){c=!0;let Lt;for(;!this.J&&this.C<S.length;)if(Lt=Pu(this,S),Lt==ys){yt==4&&(this.s=4,At(14),c=!1),De(this.i,this.l,null,"[Incomplete Response]");break}else if(Lt==so){this.s=4,At(15),De(this.i,this.l,S,"[Invalid Chunk]"),c=!1;break}else De(this.i,this.l,Lt,null),Es(this,Lt);if(oo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||S.length!=0||this.h.h||(this.s=1,At(16),c=!1),this.o=this.o&&c,!c)De(this.i,this.l,S,"[Invalid Chunked Response]"),fe(this),dn(this);else if(0<S.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Ps(wt),wt.M=!0,At(11))}}else De(this.i,this.l,S,null),Es(this,S);yt==4&&fe(this),this.o&&!this.J&&(yt==4?Oo(this.j,this):(this.o=!1,Jn(this)))}else zu(this.g),c==400&&0<S.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),fe(this),dn(this)}}}catch{}finally{}};function oo(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Pu(s,a){var c=s.C,h=a.indexOf(`
`,c);return h==-1?ys:(c=Number(a.substring(c,h)),isNaN(c)?so:(h+=1,h+c>a.length?ys:(a=a.slice(h,h+c),s.C=h+c,a)))}Zt.prototype.cancel=function(){this.J=!0,fe(this)};function Jn(s){s.S=Date.now()+s.I,ao(s,s.I)}function ao(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=un(R(s.ba,s),a)}function vs(s){s.B&&(u.clearTimeout(s.B),s.B=null)}Zt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Iu(this.i,this.A),this.L!=2&&(cn(),At(17)),fe(this),this.s=2,dn(this)):ao(this,this.S-s)};function dn(s){s.j.G==0||s.J||Oo(s.j,s)}function fe(s){vs(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Qi(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Es(s,a){try{var c=s.j;if(c.G!=0&&(c.g==s||bs(c.h,s))){if(!s.K&&bs(c.h,s)&&c.G==3){try{var h=c.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){t:if(!c.u){if(c.g)if(c.g.F+3e3<s.F)ar(c),ir(c);else break t;Cs(c),At(18)}}else c.za=v[1],0<c.za-c.T&&37500>v[2]&&c.F&&c.v==0&&!c.C&&(c.C=un(R(c.Za,c),6e3));if(1>=uo(c.h)&&c.ca){try{c.ca()}catch{}c.ca=void 0}}else me(c,11)}else if((s.K||c.g==s)&&ar(c),!X(a))for(v=c.Da.g.parse(a),a=0;a<v.length;a++){let H=v[a];if(c.T=H[0],H=H[1],c.G==2)if(H[0]=="c"){c.K=H[1],c.ia=H[2];const wt=H[3];wt!=null&&(c.la=wt,c.j.info("VER="+c.la));const yt=H[4];yt!=null&&(c.Aa=yt,c.j.info("SVER="+c.Aa));const Ne=H[5];Ne!=null&&typeof Ne=="number"&&0<Ne&&(h=1.5*Ne,c.L=h,c.j.info("backChannelRequestTimeoutMs_="+h)),h=c;const Lt=s.g;if(Lt){const cr=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(cr){var T=h.h;T.g||cr.indexOf("spdy")==-1&&cr.indexOf("quic")==-1&&cr.indexOf("h2")==-1||(T.j=T.l,T.g=new Set,T.h&&(Ts(T,T.h),T.h=null))}if(h.D){const Rs=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;Rs&&(h.ya=Rs,K(h.I,h.D,Rs))}}c.G=3,c.l&&c.l.ua(),c.ba&&(c.R=Date.now()-s.F,c.j.info("Handshake RTT: "+c.R+"ms")),h=c;var S=s;if(h.qa=Mo(h,h.J?h.ia:null,h.W),S.K){ho(h.h,S);var q=S,ct=h.L;ct&&(q.I=ct),q.B&&(vs(q),Jn(q)),h.g=S}else Do(h);0<c.i.length&&or(c)}else H[0]!="stop"&&H[0]!="close"||me(c,7);else c.G==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?me(c,7):Is(c):H[0]!="noop"&&c.l&&c.l.ta(H),c.v=0)}}cn(4)}catch{}}var Ru=class{constructor(s,a){this.g=s,this.map=a}};function lo(s){this.l=s||10,u.PerformanceNavigationTiming?(s=u.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function co(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function uo(s){return s.h?1:s.g?s.g.size:0}function bs(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Ts(s,a){s.g?s.g.add(a):s.h=a}function ho(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}lo.prototype.cancel=function(){if(this.i=fo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function fo(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const c of s.g.values())a=a.concat(c.D);return a}return M(s.i)}function Su(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var a=[],c=s.length,h=0;h<c;h++)a.push(s[h]);return a}a=[],c=0;for(h in s)a[c++]=s[h];return a}function ku(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var a=[];s=s.length;for(var c=0;c<s;c++)a.push(c);return a}a=[],c=0;for(const h in s)a[c++]=h;return a}}}function po(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var c=ku(s),h=Su(s),v=h.length,T=0;T<v;T++)a.call(void 0,h[T],c&&c[T],s)}var mo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vu(s,a){if(s){s=s.split("&");for(var c=0;c<s.length;c++){var h=s[c].indexOf("="),v=null;if(0<=h){var T=s[c].substring(0,h);v=s[c].substring(h+1)}else T=s[c];a(T,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function pe(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof pe){this.h=s.h,Zn(this,s.j),this.o=s.o,this.g=s.g,tr(this,s.s),this.l=s.l;var a=s.i,c=new mn;c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),go(this,c),this.m=s.m}else s&&(a=String(s).match(mo))?(this.h=!1,Zn(this,a[1]||"",!0),this.o=fn(a[2]||""),this.g=fn(a[3]||"",!0),tr(this,a[4]),this.l=fn(a[5]||"",!0),go(this,a[6]||"",!0),this.m=fn(a[7]||"")):(this.h=!1,this.i=new mn(null,this.h))}pe.prototype.toString=function(){var s=[],a=this.j;a&&s.push(pn(a,wo,!0),":");var c=this.g;return(c||a=="file")&&(s.push("//"),(a=this.o)&&s.push(pn(a,wo,!0),"@"),s.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.s,c!=null&&s.push(":",String(c))),(c=this.l)&&(this.g&&c.charAt(0)!="/"&&s.push("/"),s.push(pn(c,c.charAt(0)=="/"?Ou:xu,!0))),(c=this.i.toString())&&s.push("?",c),(c=this.m)&&s.push("#",pn(c,Lu)),s.join("")};function Gt(s){return new pe(s)}function Zn(s,a,c){s.j=c?fn(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function tr(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function go(s,a,c){a instanceof mn?(s.i=a,Mu(s.i,s.h)):(c||(a=pn(a,Nu)),s.i=new mn(a,s.h))}function K(s,a,c){s.i.set(a,c)}function er(s){return K(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function fn(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function pn(s,a,c){return typeof s=="string"?(s=encodeURI(s).replace(a,Du),c&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Du(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var wo=/[#\/\?@]/g,xu=/[#\?:]/g,Ou=/[#\?]/g,Nu=/[#\?@]/g,Lu=/#/g;function mn(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function te(s){s.g||(s.g=new Map,s.h=0,s.i&&Vu(s.i,function(a,c){s.add(decodeURIComponent(a.replace(/\+/g," ")),c)}))}n=mn.prototype,n.add=function(s,a){te(this),this.i=null,s=xe(this,s);var c=this.g.get(s);return c||this.g.set(s,c=[]),c.push(a),this.h+=1,this};function yo(s,a){te(s),a=xe(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function _o(s,a){return te(s),a=xe(s,a),s.g.has(a)}n.forEach=function(s,a){te(this),this.g.forEach(function(c,h){c.forEach(function(v){s.call(a,v,h,this)},this)},this)},n.na=function(){te(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),c=[];for(let h=0;h<a.length;h++){const v=s[h];for(let T=0;T<v.length;T++)c.push(a[h])}return c},n.V=function(s){te(this);let a=[];if(typeof s=="string")_o(this,s)&&(a=a.concat(this.g.get(xe(this,s))));else{s=Array.from(this.g.values());for(let c=0;c<s.length;c++)a=a.concat(s[c])}return a},n.set=function(s,a){return te(this),this.i=null,s=xe(this,s),_o(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function vo(s,a,c){yo(s,a),0<c.length&&(s.i=null,s.g.set(xe(s,a),M(c)),s.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var c=0;c<a.length;c++){var h=a[c];const T=encodeURIComponent(String(h)),S=this.V(h);for(h=0;h<S.length;h++){var v=T;S[h]!==""&&(v+="="+encodeURIComponent(String(S[h]))),s.push(v)}}return this.i=s.join("&")};function xe(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Mu(s,a){a&&!s.j&&(te(s),s.i=null,s.g.forEach(function(c,h){var v=h.toLowerCase();h!=v&&(yo(this,h),vo(this,v,c))},s)),s.j=a}function Bu(s,a){const c=new hn;if(u.Image){const h=new Image;h.onload=V(ee,c,"TestLoadImage: loaded",!0,a,h),h.onerror=V(ee,c,"TestLoadImage: error",!1,a,h),h.onabort=V(ee,c,"TestLoadImage: abort",!1,a,h),h.ontimeout=V(ee,c,"TestLoadImage: timeout",!1,a,h),u.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function Fu(s,a){const c=new hn,h=new AbortController,v=setTimeout(()=>{h.abort(),ee(c,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(T=>{clearTimeout(v),T.ok?ee(c,"TestPingServer: ok",!0,a):ee(c,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),ee(c,"TestPingServer: error",!1,a)})}function ee(s,a,c,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(c)}catch{}}function Uu(){this.g=new bu}function $u(s,a,c){const h=c||"";try{po(s,function(v,T){let S=v;p(v)&&(S=fs(v)),a.push(h+T+"="+encodeURIComponent(S))})}catch(v){throw a.push(h+"type="+encodeURIComponent("_badmap")),v}}function nr(s){this.l=s.Ub||null,this.j=s.eb||!1}D(nr,ps),nr.prototype.g=function(){return new rr(this.l,this.j)},nr.prototype.i=function(s){return function(){return s}}({});function rr(s,a){gt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(rr,gt),n=rr.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,wn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gn(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,wn(this)),this.g&&(this.readyState=3,wn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Eo(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Eo(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?gn(this):wn(this),this.readyState==3&&Eo(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,gn(this))},n.Qa=function(s){this.g&&(this.response=s,gn(this))},n.ga=function(){this.g&&gn(this)};function gn(s){s.readyState=4,s.l=null,s.j=null,s.v=null,wn(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var c=a.next();!c.done;)c=c.value,s.push(c[0]+": "+c[1]),c=a.next();return s.join(`\r
`)};function wn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(rr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function bo(s){let a="";return Pt(s,function(c,h){a+=h,a+=":",a+=c,a+=`\r
`}),a}function As(s,a,c){t:{for(h in c){var h=!1;break t}h=!0}h||(c=bo(c),typeof s=="string"?c!=null&&encodeURIComponent(String(c)):K(s,a,c))}function Z(s){gt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Z,gt);var ju=/^https?$/i,Hu=["POST","PUT"];n=Z.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,c,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ws.g(),this.v=this.o?Xi(this.o):Xi(ws),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(T){To(this,T);return}if(s=c||"",c=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)c.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const T of h.keys())c.set(T,h.get(T));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(c.keys()).find(T=>T.toLowerCase()=="content-type"),v=u.FormData&&s instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Hu,a,void 0))||h||v||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[T,S]of c)this.g.setRequestHeader(T,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Co(this),this.u=!0,this.g.send(s),this.u=!1}catch(T){To(this,T)}};function To(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Ao(s),sr(s)}function Ao(s){s.A||(s.A=!0,Tt(s,"complete"),Tt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Tt(this,"complete"),Tt(this,"abort"),sr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sr(this,!0)),Z.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Io(this):this.bb())},n.bb=function(){Io(this)};function Io(s){if(s.h&&typeof l<"u"&&(!s.v[1]||Wt(s)!=4||s.Z()!=2)){if(s.u&&Wt(s)==4)Gi(s.Ea,0,s);else if(Tt(s,"readystatechange"),Wt(s)==4){s.h=!1;try{const S=s.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var c;if(!(c=a)){var h;if(h=S===0){var v=String(s.D).match(mo)[1]||null;!v&&u.self&&u.self.location&&(v=u.self.location.protocol.slice(0,-1)),h=!ju.test(v?v.toLowerCase():"")}c=h}if(c)Tt(s,"complete"),Tt(s,"success");else{s.m=6;try{var T=2<Wt(s)?s.g.statusText:""}catch{T=""}s.l=T+" ["+s.Z()+"]",Ao(s)}}finally{sr(s)}}}}function sr(s,a){if(s.g){Co(s);const c=s.g,h=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||Tt(s,"ready");try{c.onreadystatechange=h}catch{}}}function Co(s){s.I&&(u.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Wt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Eu(a)}};function Po(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function zu(s){const a={};s=(s.g&&2<=Wt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(X(s[h]))continue;var c=y(s[h]);const v=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const T=a[v]||[];a[v]=T,T.push(c)}_(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yn(s,a,c){return c&&c.internalChannelParams&&c.internalChannelParams[s]||a}function Ro(s){this.Aa=0,this.i=[],this.j=new hn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yn("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yn("baseRetryDelayMs",5e3,s),this.cb=yn("retryDelaySeedMs",1e4,s),this.Wa=yn("forwardChannelMaxRetries",2,s),this.wa=yn("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new lo(s&&s.concurrentRequestLimit),this.Da=new Uu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ro.prototype,n.la=8,n.G=1,n.connect=function(s,a,c,h){At(0),this.W=s,this.H=a||{},c&&h!==void 0&&(this.H.OSID=c,this.H.OAID=h),this.F=this.X,this.I=Mo(this,null,this.W),or(this)};function Is(s){if(So(s),s.G==3){var a=s.U++,c=Gt(s.I);if(K(c,"SID",s.K),K(c,"RID",a),K(c,"TYPE","terminate"),_n(s,c),a=new Zt(s,s.j,a),a.L=2,a.v=er(Gt(c)),c=!1,u.navigator&&u.navigator.sendBeacon)try{c=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!c&&u.Image&&(new Image().src=a.v,c=!0),c||(a.g=Bo(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Jn(a)}Lo(s)}function ir(s){s.g&&(Ps(s),s.g.cancel(),s.g=null)}function So(s){ir(s),s.u&&(u.clearTimeout(s.u),s.u=null),ar(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&u.clearTimeout(s.s),s.s=null)}function or(s){if(!co(s.h)&&!s.s){s.s=!0;var a=s.Ga;rn||$i(),sn||(rn(),sn=!0),is.add(a,s),s.B=0}}function qu(s,a){return uo(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=un(R(s.Ga,s,a),No(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const v=new Zt(this,this.j,s);let T=this.o;if(this.S&&(T?(T=f(T),w(T,this.S)):T=this.S),this.m!==null||this.O||(v.H=T,T=null),this.P)t:{for(var a=0,c=0;c<this.i.length;c++){e:{var h=this.i[c];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=c;break t}if(a===4096||c===this.i.length-1){a=c+1;break t}}a=1e3}else a=1e3;a=Vo(this,v,a),c=Gt(this.I),K(c,"RID",s),K(c,"CVER",22),this.D&&K(c,"X-HTTP-Session-Id",this.D),_n(this,c),T&&(this.O?a="headers="+encodeURIComponent(String(bo(T)))+"&"+a:this.m&&As(c,this.m,T)),Ts(this.h,v),this.Ua&&K(c,"TYPE","init"),this.P?(K(c,"$req",a),K(c,"SID","null"),v.T=!0,_s(v,c,null)):_s(v,c,a),this.G=2}}else this.G==3&&(s?ko(this,s):this.i.length==0||co(this.h)||ko(this))};function ko(s,a){var c;a?c=a.l:c=s.U++;const h=Gt(s.I);K(h,"SID",s.K),K(h,"RID",c),K(h,"AID",s.T),_n(s,h),s.m&&s.o&&As(h,s.m,s.o),c=new Zt(s,s.j,c,s.B+1),s.m===null&&(c.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Vo(s,c,1e3),c.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Ts(s.h,c),_s(c,h,a)}function _n(s,a){s.H&&Pt(s.H,function(c,h){K(a,h,c)}),s.l&&po({},function(c,h){K(a,h,c)})}function Vo(s,a,c){c=Math.min(s.i.length,c);var h=s.l?R(s.l.Na,s.l,s):null;t:{var v=s.i;let T=-1;for(;;){const S=["count="+c];T==-1?0<c?(T=v[0].g,S.push("ofs="+T)):T=0:S.push("ofs="+T);let q=!0;for(let ct=0;ct<c;ct++){let H=v[ct].g;const wt=v[ct].map;if(H-=T,0>H)T=Math.max(0,v[ct].g-100),q=!1;else try{$u(wt,S,"req"+H+"_")}catch{h&&h(wt)}}if(q){h=S.join("&");break t}}}return s=s.i.splice(0,c),a.D=s,h}function Do(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;rn||$i(),sn||(rn(),sn=!0),is.add(a,s),s.v=0}}function Cs(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=un(R(s.Fa,s),No(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,xo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=un(R(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),ir(this),xo(this))};function Ps(s){s.A!=null&&(u.clearTimeout(s.A),s.A=null)}function xo(s){s.g=new Zt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Gt(s.qa);K(a,"RID","rpc"),K(a,"SID",s.K),K(a,"AID",s.T),K(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&K(a,"TO",s.ja),K(a,"TYPE","xmlhttp"),_n(s,a),s.m&&s.o&&As(a,s.m,s.o),s.L&&(s.g.I=s.L);var c=s.g;s=s.ia,c.L=1,c.v=er(Gt(a)),c.m=null,c.P=!0,io(c,s)}n.Za=function(){this.C!=null&&(this.C=null,ir(this),Cs(this),At(19))};function ar(s){s.C!=null&&(u.clearTimeout(s.C),s.C=null)}function Oo(s,a){var c=null;if(s.g==a){ar(s),Ps(s),s.g=null;var h=2}else if(bs(s.h,a))c=a.D,ho(s.h,a),h=1;else return;if(s.G!=0){if(a.o)if(h==1){c=a.m?a.m.length:0,a=Date.now()-a.F;var v=s.B;h=Qn(),Tt(h,new eo(h,c)),or(s)}else Do(s);else if(v=a.s,v==3||v==0&&0<a.X||!(h==1&&qu(s,a)||h==2&&Cs(s)))switch(c&&0<c.length&&(a=s.h,a.i=a.i.concat(c)),v){case 1:me(s,5);break;case 4:me(s,10);break;case 3:me(s,6);break;default:me(s,2)}}}function No(s,a){let c=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(c*=2),c*a}function me(s,a){if(s.j.info("Error code "+a),a==2){var c=R(s.fb,s),h=s.Xa;const v=!h;h=new pe(h||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Zn(h,"https"),er(h),v?Bu(h.toString(),c):Fu(h.toString(),c)}else At(2);s.G=0,s.l&&s.l.sa(a),Lo(s),So(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function Lo(s){if(s.G=0,s.ka=[],s.l){const a=fo(s.h);(a.length!=0||s.i.length!=0)&&(O(s.ka,a),O(s.ka,s.i),s.h.i.length=0,M(s.i),s.i.length=0),s.l.ra()}}function Mo(s,a,c){var h=c instanceof pe?Gt(c):new pe(c);if(h.g!="")a&&(h.g=a+"."+h.g),tr(h,h.s);else{var v=u.location;h=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var T=new pe(null);h&&Zn(T,h),a&&(T.g=a),v&&tr(T,v),c&&(T.l=c),h=T}return c=s.D,a=s.ya,c&&a&&K(h,c,a),K(h,"VER",s.la),_n(s,h),h}function Bo(s,a,c){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Z(new nr({eb:c})):new Z(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fo(){}n=Fo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function lr(){}lr.prototype.g=function(s,a){return new Vt(s,a)};function Vt(s,a){gt.call(this),this.g=new Ro(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!X(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!X(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new Oe(this)}D(Vt,gt),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){Is(this.g)},Vt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var c={};c.__data__=s,s=c}else this.u&&(c={},c.__data__=fs(s),s=c);a.i.push(new Ru(a.Ya++,s)),a.G==3&&or(a)},Vt.prototype.N=function(){this.g.l=null,delete this.j,Is(this.g),delete this.g,Vt.aa.N.call(this)};function Uo(s){ms.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const c in a){s=c;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}D(Uo,ms);function $o(){gs.call(this),this.status=1}D($o,gs);function Oe(s){this.g=s}D(Oe,Fo),Oe.prototype.ua=function(){Tt(this.g,"a")},Oe.prototype.ta=function(s){Tt(this.g,new Uo(s))},Oe.prototype.sa=function(s){Tt(this.g,new $o)},Oe.prototype.ra=function(){Tt(this.g,"b")},lr.prototype.createWebChannel=lr.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,dl=function(){return new lr},hl=function(){return Qn()},ul=de,Hs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xn.NO_ERROR=0,Xn.TIMEOUT=8,Xn.HTTP_ERROR=6,gr=Xn,no.COMPLETE="complete",cl=no,Yi.EventType=ln,ln.OPEN="a",ln.CLOSE="b",ln.ERROR="c",ln.MESSAGE="d",gt.prototype.listen=gt.prototype.K,En=Yi,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,ll=Z}).apply(typeof ur<"u"?ur:typeof self<"u"?self:typeof window<"u"?window:{});const Zo="@firebase/firestore",ta="4.7.10";/**
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
 */class vt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
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
 */let Xe="11.5.0";/**
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
 */const Te=new nl("@firebase/firestore");function Le(){return Te.logLevel}function k(n,...t){if(Te.logLevel<=U.DEBUG){const e=t.map(oi);Te.debug(`Firestore (${Xe}): ${n}`,...e)}}function Ae(n,...t){if(Te.logLevel<=U.ERROR){const e=t.map(oi);Te.error(`Firestore (${Xe}): ${n}`,...e)}}function qr(n,...t){if(Te.logLevel<=U.WARN){const e=t.map(oi);Te.warn(`Firestore (${Xe}): ${n}`,...e)}}function oi(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function B(n="Unexpected state"){const t=`FIRESTORE (${Xe}) INTERNAL ASSERTION FAILED: `+n;throw Ae(t),new Error(t)}function et(n,t){n||B()}function G(n,t){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Qe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ve{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class fl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Pd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(vt.UNAUTHENTICATED))}shutdown(){}}class Rd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Sd{constructor(t){this.t=t,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){et(this.o===void 0);let r=this.i;const i=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new ve;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ve,t.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},u=d=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(d=>u(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?u(d):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ve)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(et(typeof r.accessToken=="string"),new fl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return et(t===null||typeof t=="string"),new vt(t)}}class kd{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Vd{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new kd(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ea{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Dd{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ud(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){et(this.o===void 0);const r=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const l=o.token!==this.R;return this.R=o.token,k("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new ea(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(et(typeof e.token=="string"),this.R=e.token,new ea(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function xd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */function Od(){return new TextEncoder}/**
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
 */class pl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=xd(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%62))}return r}}function j(n,t){return n<t?-1:n>t?1:0}function zs(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),i=t.codePointAt(e);if(r!==i){if(r<128&&i<128)return j(r,i);{const o=Od(),l=Nd(o.encode(na(n,e)),o.encode(na(t,e)));return l!==0?l:j(r,i)}}e+=r>65535?2:1}return j(n.length,t.length)}function na(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function Nd(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return j(n[e],t[e]);return j(n.length,t.length)}function je(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */const ra=-62135596800,sa=1e6;class at{static now(){return at.fromMillis(Date.now())}static fromDate(t){return at.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*sa);return new at(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ra)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sa}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-ra;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Q{static fromTimestamp(t){return new Q(t)}static min(){return new Q(new at(0,0))}static max(){return new Q(new at(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ia="__name__";class Ut{constructor(t,e,r){e===void 0?e=0:e>t.length&&B(),r===void 0?r=t.length-e:r>t.length-e&&B(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ut.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ut?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Ut.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return j(t.length,e.length)}static compareSegments(t,e){const r=Ut.isNumericId(t),i=Ut.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Ut.extractNumericId(t).compare(Ut.extractNumericId(e)):zs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ii.fromString(t.substring(4,t.length-2))}}class tt extends Ut{construct(t,e,r){return new tt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new tt(e)}static emptyPath(){return new tt([])}}const Ld=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends Ut{construct(t,e,r){return new dt(t,e,r)}static isValidIdentifier(t){return Ld.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ia}static keyField(){return new dt([ia])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let l=!1;for(;i<t.length;){const u=t[i];if(u==="\\"){if(i+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,i+=2}else u==="`"?(l=!l,i++):u!=="."||l?(r+=u,i++):(o(),i++)}if(o(),l)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new dt(e)}static emptyPath(){return new dt([])}}/**
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
 */class L{constructor(t){this.path=t}static fromPath(t){return new L(tt.fromString(t))}static fromName(t){return new L(tt.fromString(t).popFirst(5))}static empty(){return new L(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new L(new tt(t.slice()))}}/**
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
 */const Sn=-1;function Md(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new at(e+1,0):new at(e,r));return new ae(i,L.empty(),t)}function Bd(n){return new ae(n.readTime,n.key,Sn)}class ae{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ae(Q.min(),L.empty(),Sn)}static max(){return new ae(Q.max(),L.empty(),Sn)}}function Fd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=L.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
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
 */const Ud="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $d{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function ai(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Ud)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let i=0,o=0,l=!1;t.forEach(u=>{++i,u.next(()=>{++o,l&&o===i&&e()},d=>r(d))}),l=!0,o===i&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(i=>i?C.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,i)=>{const o=t.length,l=new Array(o);let u=0;for(let d=0;d<o;d++){const p=d;e(t[p]).next(b=>{l[p]=b,++u,u===o&&r(l)},b=>i(b))}})}static doWhile(t,e){return new C((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function jd(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function On(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class li{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}li.ae=-1;/**
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
 */const ci=-1;function ui(n){return n==null}function Ar(n){return n===0&&1/n==-1/0}function Hd(n){return typeof n=="number"&&Number.isInteger(n)&&!Ar(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const ml="";function zd(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=oa(t)),t=qd(n.get(e),t);return oa(t)}function qd(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case ml:e+="";break;default:e+=o}}return e}function oa(n){return n+ml+""}/**
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
 */function aa(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ye(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function gl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class kt{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new kt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new kt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new hr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new hr(this.root,t,this.comparator,!1)}getReverseIterator(){return new hr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new hr(this.root,t,this.comparator,!0)}}class hr{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??ut.RED,this.left=i??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new ut(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const t=this.left.check();if(t!==this.right.check())throw B();return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,r,i,o){return this}insert(t,e,r){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(t){this.comparator=t,this.data=new kt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new la(this.data.getIterator())}getIteratorFrom(t){return new la(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ft)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ft(this.comparator);return e.data=t,e}}class la{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ft{constructor(t){this.fields=t,t.sort(dt.comparator)}static empty(){return new Ft([])}unionWith(t){let e=new ft(dt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Ft(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return je(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Gd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class jt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Gd("Invalid base64 string: "+o):o}}(t);return new jt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let l=0;l<i.length;++l)o+=String.fromCharCode(i[l]);return o}(t);return new jt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const Wd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ie(n){if(et(!!n),typeof n=="string"){let t=0;const e=Wd.exec(n);if(et(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ht(n.seconds),nanos:ht(n.nanos)}}function ht(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function He(n){return typeof n=="string"?jt.fromBase64String(n):jt.fromUint8Array(n)}/**
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
 */const wl="server_timestamp",yl="__type__",_l="__previous_value__",vl="__local_write_time__";function hi(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[yl])===null||e===void 0?void 0:e.stringValue)===wl}function di(n){const t=n.mapValue.fields[_l];return hi(t)?di(t):t}function Ir(n){const t=Ie(n.mapValue.fields[vl].timestampValue);return new at(t.seconds,t.nanos)}/**
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
 */class Kd{constructor(t,e,r,i,o,l,u,d,p){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=l,this.autoDetectLongPolling=u,this.longPollingOptions=d,this.useFetchStreams=p}}const Cr="(default)";class Pr{constructor(t,e){this.projectId=t,this.database=e||Cr}static empty(){return new Pr("","")}get isDefaultDatabase(){return this.database===Cr}isEqual(t){return t instanceof Pr&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const El="__type__",Qd="__max__",dr={mapValue:{}},bl="__vector__",qs="value";function Ce(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?hi(n)?4:Yd(n)?9007199254740991:Xd(n)?10:11:B()}function Ht(n,t){if(n===t)return!0;const e=Ce(n);if(e!==Ce(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Ir(n).isEqual(Ir(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const l=Ie(i.timestampValue),u=Ie(o.timestampValue);return l.seconds===u.seconds&&l.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return He(i.bytesValue).isEqual(He(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return ht(i.geoPointValue.latitude)===ht(o.geoPointValue.latitude)&&ht(i.geoPointValue.longitude)===ht(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return ht(i.integerValue)===ht(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const l=ht(i.doubleValue),u=ht(o.doubleValue);return l===u?Ar(l)===Ar(u):isNaN(l)&&isNaN(u)}return!1}(n,t);case 9:return je(n.arrayValue.values||[],t.arrayValue.values||[],Ht);case 10:case 11:return function(i,o){const l=i.mapValue.fields||{},u=o.mapValue.fields||{};if(aa(l)!==aa(u))return!1;for(const d in l)if(l.hasOwnProperty(d)&&(u[d]===void 0||!Ht(l[d],u[d])))return!1;return!0}(n,t);default:return B()}}function kn(n,t){return(n.values||[]).find(e=>Ht(e,t))!==void 0}function ze(n,t){if(n===t)return 0;const e=Ce(n),r=Ce(t);if(e!==r)return j(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return function(o,l){const u=ht(o.integerValue||o.doubleValue),d=ht(l.integerValue||l.doubleValue);return u<d?-1:u>d?1:u===d?0:isNaN(u)?isNaN(d)?0:-1:1}(n,t);case 3:return ca(n.timestampValue,t.timestampValue);case 4:return ca(Ir(n),Ir(t));case 5:return zs(n.stringValue,t.stringValue);case 6:return function(o,l){const u=He(o),d=He(l);return u.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(o,l){const u=o.split("/"),d=l.split("/");for(let p=0;p<u.length&&p<d.length;p++){const b=j(u[p],d[p]);if(b!==0)return b}return j(u.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,l){const u=j(ht(o.latitude),ht(l.latitude));return u!==0?u:j(ht(o.longitude),ht(l.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return ua(n.arrayValue,t.arrayValue);case 10:return function(o,l){var u,d,p,b;const I=o.fields||{},R=l.fields||{},V=(u=I[qs])===null||u===void 0?void 0:u.arrayValue,D=(d=R[qs])===null||d===void 0?void 0:d.arrayValue,M=j(((p=V==null?void 0:V.values)===null||p===void 0?void 0:p.length)||0,((b=D==null?void 0:D.values)===null||b===void 0?void 0:b.length)||0);return M!==0?M:ua(V,D)}(n.mapValue,t.mapValue);case 11:return function(o,l){if(o===dr.mapValue&&l===dr.mapValue)return 0;if(o===dr.mapValue)return 1;if(l===dr.mapValue)return-1;const u=o.fields||{},d=Object.keys(u),p=l.fields||{},b=Object.keys(p);d.sort(),b.sort();for(let I=0;I<d.length&&I<b.length;++I){const R=zs(d[I],b[I]);if(R!==0)return R;const V=ze(u[d[I]],p[b[I]]);if(V!==0)return V}return j(d.length,b.length)}(n.mapValue,t.mapValue);default:throw B()}}function ca(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=Ie(n),r=Ie(t),i=j(e.seconds,r.seconds);return i!==0?i:j(e.nanos,r.nanos)}function ua(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=ze(e[i],r[i]);if(o)return o}return j(e.length,r.length)}function qe(n){return Gs(n)}function Gs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Ie(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return He(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return L.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Gs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const l of r)o?o=!1:i+=",",i+=`${l}:${Gs(e.fields[l])}`;return i+"}"}(n.mapValue):B()}function wr(n){switch(Ce(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=di(n);return t?16+wr(t):16;case 5:return 2*n.stringValue.length;case 6:return He(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+wr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Ye(r.fields,(o,l)=>{i+=o.length+wr(l)}),i}(n.mapValue);default:throw B()}}function Ws(n){return!!n&&"integerValue"in n}function fi(n){return!!n&&"arrayValue"in n}function yr(n){return!!n&&"mapValue"in n}function Xd(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[El])===null||e===void 0?void 0:e.stringValue)===bl}function bn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ye(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=bn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=bn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Yd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Qd}/**
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
 */class Bt{constructor(t){this.value=t}static empty(){return new Bt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!yr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=bn(e)}setAll(t){let e=dt.emptyPath(),r={},i=[];t.forEach((l,u)=>{if(!e.isImmediateParentOf(u)){const d=this.getFieldsMap(e);this.applyChanges(d,r,i),r={},i=[],e=u.popLast()}l?r[u.lastSegment()]=bn(l):i.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());yr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ht(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];yr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Ye(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Bt(bn(this.value))}}function Tl(n){const t=[];return Ye(n.fields,(e,r)=>{const i=new dt([e]);if(yr(r)){const o=Tl(r.mapValue).fields;if(o.length===0)t.push(i);else for(const l of o)t.push(i.child(l))}else t.push(i)}),new Ft(t)}/**
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
 */class Mt{constructor(t,e,r,i,o,l,u){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=l,this.documentState=u}static newInvalidDocument(t){return new Mt(t,0,Q.min(),Q.min(),Q.min(),Bt.empty(),0)}static newFoundDocument(t,e,r,i){return new Mt(t,1,e,Q.min(),r,i,0)}static newNoDocument(t,e){return new Mt(t,2,e,Q.min(),Q.min(),Bt.empty(),0)}static newUnknownDocument(t,e){return new Mt(t,3,e,Q.min(),Q.min(),Bt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Mt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Rr{constructor(t,e){this.position=t,this.inclusive=e}}function ha(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],l=n.position[i];if(o.field.isKeyField()?r=L.comparator(L.fromName(l.referenceValue),e.key):r=ze(l,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function da(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ht(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Sr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Jd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Al{}class ot extends Al{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new tf(t,e,r):e==="array-contains"?new rf(t,r):e==="in"?new sf(t,r):e==="not-in"?new of(t,r):e==="array-contains-any"?new af(t,r):new ot(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new ef(t,r):new nf(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ze(e,this.value)):e!==null&&Ce(this.value)===Ce(e)&&this.matchesComparison(ze(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return B()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class le extends Al{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new le(t,e)}matches(t){return Il(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Il(n){return n.op==="and"}function Cl(n){return Zd(n)&&Il(n)}function Zd(n){for(const t of n.filters)if(t instanceof le)return!1;return!0}function Ks(n){if(n instanceof ot)return n.field.canonicalString()+n.op.toString()+qe(n.value);if(Cl(n))return n.filters.map(t=>Ks(t)).join(",");{const t=n.filters.map(e=>Ks(e)).join(",");return`${n.op}(${t})`}}function Pl(n,t){return n instanceof ot?function(r,i){return i instanceof ot&&r.op===i.op&&r.field.isEqual(i.field)&&Ht(r.value,i.value)}(n,t):n instanceof le?function(r,i){return i instanceof le&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,l,u)=>o&&Pl(l,i.filters[u]),!0):!1}(n,t):void B()}function Rl(n){return n instanceof ot?function(e){return`${e.field.canonicalString()} ${e.op} ${qe(e.value)}`}(n):n instanceof le?function(e){return e.op.toString()+" {"+e.getFilters().map(Rl).join(" ,")+"}"}(n):"Filter"}class tf extends ot{constructor(t,e,r){super(t,e,r),this.key=L.fromName(r.referenceValue)}matches(t){const e=L.comparator(t.key,this.key);return this.matchesComparison(e)}}class ef extends ot{constructor(t,e){super(t,"in",e),this.keys=Sl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class nf extends ot{constructor(t,e){super(t,"not-in",e),this.keys=Sl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Sl(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>L.fromName(r.referenceValue))}class rf extends ot{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return fi(e)&&kn(e.arrayValue,this.value)}}class sf extends ot{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&kn(this.value.arrayValue,e)}}class of extends ot{constructor(t,e){super(t,"not-in",e)}matches(t){if(kn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!kn(this.value.arrayValue,e)}}class af extends ot{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!fi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>kn(this.value.arrayValue,r))}}/**
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
 */class lf{constructor(t,e=null,r=[],i=[],o=null,l=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=l,this.endAt=u,this.le=null}}function fa(n,t=null,e=[],r=[],i=null,o=null,l=null){return new lf(n,t,e,r,i,o,l)}function pi(n){const t=G(n);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ks(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),ui(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>qe(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>qe(r)).join(",")),t.le=e}return t.le}function mi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Jd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Pl(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!da(n.startAt,t.startAt)&&da(n.endAt,t.endAt)}/**
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
 */class Gr{constructor(t,e=null,r=[],i=[],o=null,l="F",u=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=l,this.startAt=u,this.endAt=d,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function cf(n,t,e,r,i,o,l,u){return new Gr(n,t,e,r,i,o,l,u)}function uf(n){return new Gr(n)}function pa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function hf(n){return n.collectionGroup!==null}function Tn(n){const t=G(n);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let u=new ft(dt.comparator);return l.filters.forEach(d=>{d.getFlattenedFilters().forEach(p=>{p.isInequality()&&(u=u.add(p.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new Sr(o,r))}),e.has(dt.keyField().canonicalString())||t.he.push(new Sr(dt.keyField(),r))}return t.he}function Ee(n){const t=G(n);return t.Pe||(t.Pe=df(t,Tn(n))),t.Pe}function df(n,t){if(n.limitType==="F")return fa(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Sr(i.field,o)});const e=n.endAt?new Rr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Rr(n.startAt.position,n.startAt.inclusive):null;return fa(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Qs(n,t,e){return new Gr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function kl(n,t){return mi(Ee(n),Ee(t))&&n.limitType===t.limitType}function Vl(n){return`${pi(Ee(n))}|lt:${n.limitType}`}function vn(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Rl(i)).join(", ")}]`),ui(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>qe(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>qe(i)).join(",")),`Target(${r})`}(Ee(n))}; limitType=${n.limitType})`}function gi(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of Tn(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(l,u,d){const p=ha(l,u,d);return l.inclusive?p<=0:p<0}(r.startAt,Tn(r),i)||r.endAt&&!function(l,u,d){const p=ha(l,u,d);return l.inclusive?p>=0:p>0}(r.endAt,Tn(r),i))}(n,t)}function ff(n){return(t,e)=>{let r=!1;for(const i of Tn(n)){const o=pf(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function pf(n,t,e){const r=n.field.isKeyField()?L.comparator(t.key,e.key):function(o,l,u){const d=l.data.field(o),p=u.data.field(o);return d!==null&&p!==null?ze(d,p):B()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
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
 */class Re{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ye(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return gl(this.inner)}size(){return this.innerSize}}/**
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
 */const mf=new kt(L.comparator);function kr(){return mf}const Dl=new kt(L.comparator);function fr(...n){let t=Dl;for(const e of n)t=t.insert(e.key,e);return t}function xl(n){let t=Dl;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ye(){return An()}function Ol(){return An()}function An(){return new Re(n=>n.toString(),(n,t)=>n.isEqual(t))}const gf=new kt(L.comparator),wf=new ft(L.comparator);function Et(...n){let t=wf;for(const e of n)t=t.add(e);return t}const yf=new ft(j);function _f(){return yf}/**
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
 */function wi(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ar(t)?"-0":t}}function Nl(n){return{integerValue:""+n}}function vf(n,t){return Hd(t)?Nl(t):wi(n,t)}/**
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
 */class Wr{constructor(){this._=void 0}}function Ef(n,t,e){return n instanceof Vr?function(i,o){const l={fields:{[yl]:{stringValue:wl},[vl]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&hi(o)&&(o=di(o)),o&&(l.fields[_l]=o),{mapValue:l}}(e,t):n instanceof Vn?Ml(n,t):n instanceof Dn?Bl(n,t):function(i,o){const l=Ll(i,o),u=ma(l)+ma(i.Ie);return Ws(l)&&Ws(i.Ie)?Nl(u):wi(i.serializer,u)}(n,t)}function bf(n,t,e){return n instanceof Vn?Ml(n,t):n instanceof Dn?Bl(n,t):e}function Ll(n,t){return n instanceof Dr?function(r){return Ws(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Vr extends Wr{}class Vn extends Wr{constructor(t){super(),this.elements=t}}function Ml(n,t){const e=Fl(t);for(const r of n.elements)e.some(i=>Ht(i,r))||e.push(r);return{arrayValue:{values:e}}}class Dn extends Wr{constructor(t){super(),this.elements=t}}function Bl(n,t){let e=Fl(t);for(const r of n.elements)e=e.filter(i=>!Ht(i,r));return{arrayValue:{values:e}}}class Dr extends Wr{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function ma(n){return ht(n.integerValue||n.doubleValue)}function Fl(n){return fi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Tf(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Vn&&i instanceof Vn||r instanceof Dn&&i instanceof Dn?je(r.elements,i.elements,Ht):r instanceof Dr&&i instanceof Dr?Ht(r.Ie,i.Ie):r instanceof Vr&&i instanceof Vr}(n.transform,t.transform)}class Af{constructor(t,e){this.version=t,this.transformResults=e}}class Kt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Kt}static exists(t){return new Kt(void 0,t)}static updateTime(t){return new Kt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _r(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Kr{}function Ul(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new jl(n.key,Kt.none()):new Nn(n.key,n.data,Kt.none());{const e=n.data,r=Bt.empty();let i=new ft(dt.comparator);for(let o of t.fields)if(!i.has(o)){let l=e.field(o);l===null&&o.length>1&&(o=o.popLast(),l=e.field(o)),l===null?r.delete(o):r.set(o,l),i=i.add(o)}return new Se(n.key,r,new Ft(i.toArray()),Kt.none())}}function If(n,t,e){n instanceof Nn?function(i,o,l){const u=i.value.clone(),d=wa(i.fieldTransforms,o,l.transformResults);u.setAll(d),o.convertToFoundDocument(l.version,u).setHasCommittedMutations()}(n,t,e):n instanceof Se?function(i,o,l){if(!_r(i.precondition,o))return void o.convertToUnknownDocument(l.version);const u=wa(i.fieldTransforms,o,l.transformResults),d=o.data;d.setAll($l(i)),d.setAll(u),o.convertToFoundDocument(l.version,d).setHasCommittedMutations()}(n,t,e):function(i,o,l){o.convertToNoDocument(l.version).setHasCommittedMutations()}(0,t,e)}function In(n,t,e,r){return n instanceof Nn?function(o,l,u,d){if(!_r(o.precondition,l))return u;const p=o.value.clone(),b=ya(o.fieldTransforms,d,l);return p.setAll(b),l.convertToFoundDocument(l.version,p).setHasLocalMutations(),null}(n,t,e,r):n instanceof Se?function(o,l,u,d){if(!_r(o.precondition,l))return u;const p=ya(o.fieldTransforms,d,l),b=l.data;return b.setAll($l(o)),b.setAll(p),l.convertToFoundDocument(l.version,b).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,t,e,r):function(o,l,u){return _r(o.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):u}(n,t,e)}function Cf(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=Ll(r.transform,i||null);o!=null&&(e===null&&(e=Bt.empty()),e.set(r.field,o))}return e||null}function ga(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&je(r,i,(o,l)=>Tf(o,l))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Nn extends Kr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Se extends Kr{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function $l(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function wa(n,t,e){const r=new Map;et(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],l=o.transform,u=t.data.field(o.field);r.set(o.field,bf(l,u,e[i]))}return r}function ya(n,t,e){const r=new Map;for(const i of n){const o=i.transform,l=e.data.field(i.field);r.set(i.field,Ef(o,l,t))}return r}class jl extends Kr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Pf extends Kr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Rf{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&If(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=In(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=In(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ol();return this.mutations.forEach(i=>{const o=t.get(i.key),l=o.overlayedDocument;let u=this.applyToLocalView(l,o.mutatedFields);u=e.has(i.key)?null:u;const d=Ul(l,u);d!==null&&r.set(i.key,d),l.isValidDocument()||l.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Et())}isEqual(t){return this.batchId===t.batchId&&je(this.mutations,t.mutations,(e,r)=>ga(e,r))&&je(this.baseMutations,t.baseMutations,(e,r)=>ga(e,r))}}class yi{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){et(t.mutations.length===r.length);let i=function(){return gf}();const o=t.mutations;for(let l=0;l<o.length;l++)i=i.insert(o[l].key,r[l].version);return new yi(t,e,r,i)}}/**
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
 */class Sf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var st,F;function kf(n){switch(n){case P.OK:return B();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return B()}}function Vf(n){if(n===void 0)return Ae("GRPC error has no .code"),P.UNKNOWN;switch(n){case st.OK:return P.OK;case st.CANCELLED:return P.CANCELLED;case st.UNKNOWN:return P.UNKNOWN;case st.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case st.INTERNAL:return P.INTERNAL;case st.UNAVAILABLE:return P.UNAVAILABLE;case st.UNAUTHENTICATED:return P.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case st.NOT_FOUND:return P.NOT_FOUND;case st.ALREADY_EXISTS:return P.ALREADY_EXISTS;case st.PERMISSION_DENIED:return P.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case st.ABORTED:return P.ABORTED;case st.OUT_OF_RANGE:return P.OUT_OF_RANGE;case st.UNIMPLEMENTED:return P.UNIMPLEMENTED;case st.DATA_LOSS:return P.DATA_LOSS;default:return B()}}(F=st||(st={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new ii([4294967295,4294967295],0);class Df{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Xs(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function xf(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Of(n,t){return Xs(n,t.toTimestamp())}function Fe(n){return et(!!n),Q.fromTimestamp(function(e){const r=Ie(e);return new at(r.seconds,r.nanos)}(n))}function Hl(n,t){return Ys(n,t).canonicalString()}function Ys(n,t){const e=function(i){return new tt(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Nf(n){const t=tt.fromString(n);return et(Hf(t)),t}function Js(n,t){return Hl(n.databaseId,t.path)}function Lf(n){const t=Nf(n);return t.length===4?tt.emptyPath():Bf(t)}function Mf(n){return new tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Bf(n){return et(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function _a(n,t,e){return{name:Js(n,t),fields:e.value.mapValue.fields}}function Ff(n,t){let e;if(t instanceof Nn)e={update:_a(n,t.key,t.value)};else if(t instanceof jl)e={delete:Js(n,t.key)};else if(t instanceof Se)e={update:_a(n,t.key,t.data),updateMask:jf(t.fieldMask)};else{if(!(t instanceof Pf))return B();e={verify:Js(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,l){const u=l.transform;if(u instanceof Vr)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Vn)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Dn)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Dr)return{fieldPath:l.field.canonicalString(),increment:u.Ie};throw B()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:Of(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:B()}(n,t.precondition)),e}function Uf(n,t){return n&&n.length>0?(et(t!==void 0),n.map(e=>function(i,o){let l=i.updateTime?Fe(i.updateTime):Fe(o);return l.isEqual(Q.min())&&(l=Fe(o)),new Af(l,i.transformResults||[])}(e,t))):[]}function $f(n){let t=Lf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){et(r===1);const b=e.from[0];b.allDescendants?i=b.collectionId:t=t.child(b.collectionId)}let o=[];e.where&&(o=function(I){const R=zl(I);return R instanceof le&&Cl(R)?R.getFilters():[R]}(e.where));let l=[];e.orderBy&&(l=function(I){return I.map(R=>function(D){return new Sr(Me(D.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(R))}(e.orderBy));let u=null;e.limit&&(u=function(I){let R;return R=typeof I=="object"?I.value:I,ui(R)?null:R}(e.limit));let d=null;e.startAt&&(d=function(I){const R=!!I.before,V=I.values||[];return new Rr(V,R)}(e.startAt));let p=null;return e.endAt&&(p=function(I){const R=!I.before,V=I.values||[];return new Rr(V,R)}(e.endAt)),cf(t,i,l,o,u,"F",d,p)}function zl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Me(e.unaryFilter.field);return ot.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Me(e.unaryFilter.field);return ot.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Me(e.unaryFilter.field);return ot.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=Me(e.unaryFilter.field);return ot.create(l,"!=",{nullValue:"NULL_VALUE"});default:return B()}}(n):n.fieldFilter!==void 0?function(e){return ot.create(Me(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return le.create(e.compositeFilter.filters.map(r=>zl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return B()}}(e.compositeFilter.op))}(n):B()}function Me(n){return dt.fromServerFormat(n.fieldPath)}function jf(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Hf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class zf{constructor(t){this.Tt=t}}function qf(n){const t=$f({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qs(t,t.limit,"L"):t}/**
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
 */class Gf{constructor(){this.Tn=new Wf}addToCollectionParentIndex(t,e){return this.Tn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(ae.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(ae.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class Wf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ft(tt.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ft(tt.comparator)).toArray()}}/**
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
 */const va={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ql=41943040;class Rt{static withCacheSize(t){return new Rt(t,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Rt.DEFAULT_COLLECTION_PERCENTILE=10,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rt.DEFAULT=new Rt(ql,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rt.DISABLED=new Rt(-1,0,0);/**
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
 */class Ge{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new Ge(0)}static Kn(){return new Ge(-1)}}/**
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
 */const Ea="LruGarbageCollector",Kf=1048576;function ba([n,t],[e,r]){const i=j(n,e);return i===0?j(t,r):i}class Qf{constructor(t){this.Hn=t,this.buffer=new ft(ba),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ba(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Xf{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){k(Ea,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){On(e)?k(Ea,"Ignoring IndexedDB error during garbage collection: ",e):await ai(e)}await this.er(3e5)})}}class Yf{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return C.resolve(li.ae);const r=new Qf(e);return this.tr.forEachTarget(t,i=>r.Zn(i.sequenceNumber)).next(()=>this.tr.rr(t,i=>r.Zn(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.tr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(va)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),va):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let r,i,o,l,u,d,p;const b=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),i=this.params.maximumSequenceNumbersToCollect):i=I,l=Date.now(),this.nthSequenceNumber(t,i))).next(I=>(r=I,u=Date.now(),this.removeTargets(t,r,e))).next(I=>(o=I,d=Date.now(),this.removeOrphanedDocuments(t,r))).next(I=>(p=Date.now(),Le()<=U.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-b}ms
	Determined least recently used ${i} in `+(u-l)+`ms
	Removed ${o} targets in `+(d-u)+`ms
	Removed ${I} documents in `+(p-d)+`ms
Total Duration: ${p-b}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:I})))}}function Jf(n,t){return new Yf(n,t)}/**
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
 */class Zf{constructor(){this.changes=new Re(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Mt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class tp{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class ep{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&In(r.mutation,i,Ft.empty(),at.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Et()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Et()){const i=ye();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let l=fr();return o.forEach((u,d)=>{l=l.insert(u,d.overlayedDocument)}),l}))}getOverlayedDocuments(t,e){const r=ye();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Et()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((l,u)=>{e.set(l,u)})})}computeViews(t,e,r,i){let o=kr();const l=An(),u=function(){return An()}();return e.forEach((d,p)=>{const b=r.get(p.key);i.has(p.key)&&(b===void 0||b.mutation instanceof Se)?o=o.insert(p.key,p):b!==void 0?(l.set(p.key,b.mutation.getFieldMask()),In(b.mutation,p,b.mutation.getFieldMask(),at.now())):l.set(p.key,Ft.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((p,b)=>l.set(p,b)),e.forEach((p,b)=>{var I;return u.set(p,new tp(b,(I=l.get(p))!==null&&I!==void 0?I:null))}),u))}recalculateAndSaveOverlays(t,e){const r=An();let i=new kt((l,u)=>l-u),o=Et();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(l=>{for(const u of l)u.keys().forEach(d=>{const p=e.get(d);if(p===null)return;let b=r.get(d)||Ft.empty();b=u.applyToLocalView(p,b),r.set(d,b);const I=(i.get(u.batchId)||Et()).add(d);i=i.insert(u.batchId,I)})}).next(()=>{const l=[],u=i.getReverseIterator();for(;u.hasNext();){const d=u.getNext(),p=d.key,b=d.value,I=Ol();b.forEach(R=>{if(!o.has(R)){const V=Ul(e.get(R),r.get(R));V!==null&&I.set(R,V),o=o.add(R)}}),l.push(this.documentOverlayCache.saveOverlays(t,p,I))}return C.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(l){return L.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):hf(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const l=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):C.resolve(ye());let u=Sn,d=o;return l.next(p=>C.forEach(p,(b,I)=>(u<I.largestBatchId&&(u=I.largestBatchId),o.get(b)?C.resolve():this.remoteDocumentCache.getEntry(t,b).next(R=>{d=d.insert(b,R)}))).next(()=>this.populateOverlays(t,p,o)).next(()=>this.computeViews(t,d,p,Et())).next(b=>({batchId:u,changes:xl(b)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new L(e)).next(r=>{let i=fr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let l=fr();return this.indexManager.getCollectionParents(t,o).next(u=>C.forEach(u,d=>{const p=function(I,R){return new Gr(R,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,p,r,i).next(b=>{b.forEach((I,R)=>{l=l.insert(I,R)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(l=>(o=l,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(l=>{o.forEach((d,p)=>{const b=p.getKey();l.get(b)===null&&(l=l.insert(b,Mt.newInvalidDocument(b)))});let u=fr();return l.forEach((d,p)=>{const b=o.get(d);b!==void 0&&In(b.mutation,p,Ft.empty(),at.now()),gi(e,p)&&(u=u.insert(d,p))}),u})}}/**
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
 */class np{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return C.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Fe(i.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(i){return{name:i.name,query:qf(i.bundledQuery),readTime:Fe(i.readTime)}}(e)),C.resolve()}}/**
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
 */class rp{constructor(){this.overlays=new kt(L.comparator),this.Rr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ye();return C.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.Et(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Rr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const i=ye(),o=e.length+1,l=new L(e.child("")),u=this.overlays.getIteratorFrom(l);for(;u.hasNext();){const d=u.getNext().value,p=d.getKey();if(!e.isPrefixOf(p.path))break;p.path.length===o&&d.largestBatchId>r&&i.set(d.getKey(),d)}return C.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new kt((p,b)=>p-b);const l=this.overlays.getIterator();for(;l.hasNext();){const p=l.getNext().value;if(p.getKey().getCollectionGroup()===e&&p.largestBatchId>r){let b=o.get(p.largestBatchId);b===null&&(b=ye(),o=o.insert(p.largestBatchId,b)),b.set(p.getKey(),p)}}const u=ye(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((p,b)=>u.set(p,b)),!(u.size()>=i)););return C.resolve(u)}Et(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.Rr.get(i.largestBatchId).delete(r.key);this.Rr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new Sf(e,r));let o=this.Rr.get(e);o===void 0&&(o=Et(),this.Rr.set(e,o)),this.Rr.set(e,o.add(r.key))}}/**
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
 */class sp{constructor(){this.sessionToken=jt.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
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
 */class _i{constructor(){this.Vr=new ft(it.mr),this.gr=new ft(it.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const r=new it(t,e);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.wr(new it(t,e))}Sr(t,e){t.forEach(r=>this.removeReference(r,e))}br(t){const e=new L(new tt([])),r=new it(e,t),i=new it(e,t+1),o=[];return this.gr.forEachInRange([r,i],l=>{this.wr(l),o.push(l.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new L(new tt([])),r=new it(e,t),i=new it(e,t+1);let o=Et();return this.gr.forEachInRange([r,i],l=>{o=o.add(l.key)}),o}containsKey(t){const e=new it(t,0),r=this.Vr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class it{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return L.comparator(t.key,e.key)||j(t.Cr,e.Cr)}static pr(t,e){return j(t.Cr,e.Cr)||L.comparator(t.key,e.key)}}/**
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
 */class ip{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new ft(it.mr)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new Rf(o,e,r,i);this.mutationQueue.push(l);for(const u of i)this.Mr=this.Mr.add(new it(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return C.resolve(l)}lookupMutationBatch(t,e){return C.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Nr(r),o=i<0?0:i;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?ci:this.Fr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new it(e,0),i=new it(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,i],l=>{const u=this.Or(l.Cr);o.push(u)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ft(j);return e.forEach(i=>{const o=new it(i,0),l=new it(i,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,l],u=>{r=r.add(u.Cr)})}),C.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;L.isDocumentKey(o)||(o=o.child(""));const l=new it(new L(o),0);let u=new ft(j);return this.Mr.forEachWhile(d=>{const p=d.key.path;return!!r.isPrefixOf(p)&&(p.length===i&&(u=u.add(d.Cr)),!0)},l),C.resolve(this.Br(u))}Br(t){const e=[];return t.forEach(r=>{const i=this.Or(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){et(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return C.forEach(e.mutations,i=>{const o=new it(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,e){const r=new it(e,0),i=this.Mr.firstAfterOrEqual(r);return C.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class op{constructor(t){this.kr=t,this.docs=function(){return new kt(L.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,l=this.kr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:l}),this.size+=l-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():Mt.newInvalidDocument(e))}getEntries(t,e){let r=kr();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Mt.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=kr();const l=e.path,u=new L(l.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(u);for(;d.hasNext();){const{key:p,value:{document:b}}=d.getNext();if(!l.isPrefixOf(p.path))break;p.path.length>l.length+1||Fd(Bd(b),r)<=0||(i.has(b.key)||gi(e,b))&&(o=o.insert(b.key,b.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,i){B()}qr(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new ap(this)}getSize(t){return C.resolve(this.size)}}class ap extends Zf{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.Ir.addEntry(t,i)):this.Ir.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
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
 */class lp{constructor(t){this.persistence=t,this.Qr=new Re(e=>pi(e),mi),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.$r=0,this.Ur=new _i,this.targetCount=0,this.Kr=Ge.Un()}forEachTarget(t,e){return this.Qr.forEach((r,i)=>e(i)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.$r&&(this.$r=e),C.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new Ge(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.zn(e),C.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Qr.forEach((l,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Qr.delete(l),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),i++)}),C.waitFor(o).next(()=>i)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Qr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Ur.yr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Ur.Sr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(l=>{o.push(i.markPotentiallyOrphaned(t,l))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Ur.vr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Ur.containsKey(e))}}/**
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
 */class Gl{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new li(0),this.zr=!1,this.zr=!0,this.jr=new sp,this.referenceDelegate=t(this),this.Hr=new lp(this),this.indexManager=new Gf,this.remoteDocumentCache=function(i){return new op(i)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new zf(e),this.Yr=new np(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new rp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Wr[t.toKey()];return r||(r=new ip(e,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,r){k("MemoryPersistence","Starting transaction:",t);const i=new cp(this.Gr.next());return this.referenceDelegate.Zr(),r(i).next(o=>this.referenceDelegate.Xr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}ei(t,e){return C.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,e)))}}class cp extends $d{constructor(t){super(),this.currentSequenceNumber=t}}class vi{constructor(t){this.persistence=t,this.ti=new _i,this.ni=null}static ri(t){return new vi(t)}get ii(){if(this.ni)return this.ni;throw B()}addReference(t,e,r){return this.ti.addReference(r,e),this.ii.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.ti.removeReference(r,e),this.ii.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),C.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(i=>this.ii.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.ii,r=>{const i=L.fromPath(r);return this.si(t,i).next(o=>{o||e.removeEntry(i,Q.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(r=>{r?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return C.or([()=>C.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class xr{constructor(t,e){this.persistence=t,this.oi=new Re(r=>zd(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Jf(this,e)}static ri(t,e){return new xr(t,e)}Zr(){}Xr(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}sr(t){let e=0;return this.rr(t,r=>{e++}).next(()=>e)}rr(t,e){return C.forEach(this.oi,(r,i)=>this.ar(t,r,i).next(o=>o?C.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.qr(t,l=>this.ar(t,l,e).next(u=>{u||(r++,o.removeEntry(l,Q.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),C.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=wr(t.data.value)),e}ar(t,e,r){return C.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.oi.get(e);return C.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Ei{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Hi=r,this.Ji=i}static Yi(t,e){let r=Et(),i=Et();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Ei(t,e.fromCache,r,i)}}/**
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
 */class up{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class hp{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return ah()?8:jd(ih())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.rs(t,e).next(l=>{o.result=l}).next(()=>{if(!o.result)return this.ss(t,e,i,r).next(l=>{o.result=l})}).next(()=>{if(o.result)return;const l=new up;return this._s(t,e,l).next(u=>{if(o.result=u,this.Xi)return this.us(t,e,l,u.size)})}).next(()=>o.result)}us(t,e,r,i){return r.documentReadCount<this.es?(Le()<=U.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",vn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),C.resolve()):(Le()<=U.DEBUG&&k("QueryEngine","Query:",vn(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ts*i?(Le()<=U.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",vn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ee(e))):C.resolve())}rs(t,e){if(pa(e))return C.resolve(null);let r=Ee(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Qs(e,null,"F"),r=Ee(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const l=Et(...o);return this.ns.getDocuments(t,l).next(u=>this.indexManager.getMinOffset(t,r).next(d=>{const p=this.cs(e,u);return this.ls(e,p,l,d.readTime)?this.rs(t,Qs(e,null,"F")):this.hs(t,p,e,d)}))})))}ss(t,e,r,i){return pa(e)||i.isEqual(Q.min())?C.resolve(null):this.ns.getDocuments(t,r).next(o=>{const l=this.cs(e,o);return this.ls(e,l,r,i)?C.resolve(null):(Le()<=U.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vn(e)),this.hs(t,l,e,Md(i,Sn)).next(u=>u))})}cs(t,e){let r=new ft(ff(t));return e.forEach((i,o)=>{gi(t,o)&&(r=r.add(o))}),r}ls(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}_s(t,e,r){return Le()<=U.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",vn(e)),this.ns.getDocumentsMatchingQuery(t,e,ae.min(),r)}hs(t,e,r,i){return this.ns.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(l=>{o=o.insert(l.key,l)}),o))}}/**
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
 */const dp="LocalStore";class fp{constructor(t,e,r,i){this.persistence=t,this.Ps=e,this.serializer=i,this.Ts=new kt(j),this.Is=new Re(o=>pi(o),mi),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ep(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function pp(n,t,e,r){return new fp(n,t,e,r)}async function Wl(n,t){const e=G(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const l=[],u=[];let d=Et();for(const p of i){l.push(p.batchId);for(const b of p.mutations)d=d.add(b.key)}for(const p of o){u.push(p.batchId);for(const b of p.mutations)d=d.add(b.key)}return e.localDocuments.getDocuments(r,d).next(p=>({Rs:p,removedBatchIds:l,addedBatchIds:u}))})})}function mp(n,t){const e=G(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(u,d,p,b){const I=p.batch,R=I.keys();let V=C.resolve();return R.forEach(D=>{V=V.next(()=>b.getEntry(d,D)).next(M=>{const O=p.docVersions.get(D);et(O!==null),M.version.compareTo(O)<0&&(I.applyToRemoteDocument(M,p),M.isValidDocument()&&(M.setReadTime(p.commitVersion),b.addEntry(M)))})}),V.next(()=>u.mutationQueue.removeMutationBatch(d,I))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let d=Et();for(let p=0;p<u.mutationResults.length;++p)u.mutationResults[p].transformResults.length>0&&(d=d.add(u.batch.mutations[p].key));return d}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function gp(n){const t=G(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function wp(n,t){const e=G(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=ci),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class Ta{constructor(){this.activeTargetIds=_f()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class yp{constructor(){this.ho=new Ta,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,r){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new Ta,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class _p{To(t){}shutdown(){}}/**
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
 */const Aa="ConnectivityMonitor";class Ia{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){k(Aa,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){k(Aa,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pr=null;function Zs(){return pr===null?pr=function(){return 268435456+Math.round(2147483648*Math.random())}():pr++,"0x"+pr.toString(16)}/**
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
 */const xs="RestConnection",vp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ep{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${r}/databases/${i}`,this.wo=this.databaseId.database===Cr?`project_id=${r}`:`project_id=${r}&database_id=${i}`}So(t,e,r,i,o){const l=Zs(),u=this.bo(t,e.toUriEncodedString());k(xs,`Sending RPC '${t}' ${l}:`,u,r);const d={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(d,i,o),this.vo(t,u,d,r).then(p=>(k(xs,`Received RPC '${t}' ${l}: `,p),p),p=>{throw qr(xs,`RPC '${t}' ${l} failed with error: `,p,"url: ",u,"request:",r),p})}Co(t,e,r,i,o,l){return this.So(t,e,r,i,o)}Do(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xe}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((i,o)=>t[o]=i),r&&r.headers.forEach((i,o)=>t[o]=i)}bo(t,e){const r=vp[t];return`${this.po}/v1/${e}:${r}`}terminate(){}}/**
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
 */class bp{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
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
 */const _t="WebChannelConnection";class Tp extends Ep{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,r,i){const o=Zs();return new Promise((l,u)=>{const d=new ll;d.setWithCredentials(!0),d.listenOnce(cl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case gr.NO_ERROR:const b=d.getResponseJson();k(_t,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(b)),l(b);break;case gr.TIMEOUT:k(_t,`RPC '${t}' ${o} timed out`),u(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case gr.HTTP_ERROR:const I=d.getStatus();if(k(_t,`RPC '${t}' ${o} failed with status:`,I,"response text:",d.getResponseText()),I>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const V=R==null?void 0:R.error;if(V&&V.status&&V.message){const D=function(O){const Y=O.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(Y)>=0?Y:P.UNKNOWN}(V.status);u(new N(D,V.message))}else u(new N(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new N(P.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{k(_t,`RPC '${t}' ${o} completed.`)}});const p=JSON.stringify(i);k(_t,`RPC '${t}' ${o} sending request:`,i),d.send(e,"POST",p,r,15)})}Wo(t,e,r){const i=Zs(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],l=dl(),u=hl(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(d.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Do(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const b=o.join("");k(_t,`Creating RPC '${t}' stream ${i}: ${b}`,d);const I=l.createWebChannel(b,d);let R=!1,V=!1;const D=new bp({Fo:O=>{V?k(_t,`Not sending because RPC '${t}' stream ${i} is closed:`,O):(R||(k(_t,`Opening RPC '${t}' stream ${i} transport.`),I.open(),R=!0),k(_t,`RPC '${t}' stream ${i} sending:`,O),I.send(O))},Mo:()=>I.close()}),M=(O,Y,X)=>{O.listen(Y,J=>{try{X(J)}catch(pt){setTimeout(()=>{throw pt},0)}})};return M(I,En.EventType.OPEN,()=>{V||(k(_t,`RPC '${t}' stream ${i} transport opened.`),D.Qo())}),M(I,En.EventType.CLOSE,()=>{V||(V=!0,k(_t,`RPC '${t}' stream ${i} transport closed`),D.Uo())}),M(I,En.EventType.ERROR,O=>{V||(V=!0,qr(_t,`RPC '${t}' stream ${i} transport errored:`,O),D.Uo(new N(P.UNAVAILABLE,"The operation could not be completed")))}),M(I,En.EventType.MESSAGE,O=>{var Y;if(!V){const X=O.data[0];et(!!X);const J=X,pt=(J==null?void 0:J.error)||((Y=J[0])===null||Y===void 0?void 0:Y.error);if(pt){k(_t,`RPC '${t}' stream ${i} received error:`,pt);const he=pt.status;let Pt=function(g){const w=st[g];if(w!==void 0)return Vf(w)}(he),_=pt.message;Pt===void 0&&(Pt=P.INTERNAL,_="Unknown error status: "+he+" with message "+pt.message),V=!0,D.Uo(new N(Pt,_)),I.close()}else k(_t,`RPC '${t}' stream ${i} received:`,X),D.Ko(X)}}),M(u,ul.STAT_EVENT,O=>{O.stat===Hs.PROXY?k(_t,`RPC '${t}' stream ${i} detected buffering proxy`):O.stat===Hs.NOPROXY&&k(_t,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.$o()},0),D}}function Os(){return typeof document<"u"?document:null}/**
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
 */function Qr(n){return new Df(n,!0)}/**
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
 */class Kl{constructor(t,e,r=1e3,i=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=r,this.zo=i,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),i=Math.max(0,e-r);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Ca="PersistentStream";class Ap{constructor(t,e,r,i,o,l,u,d){this.Ti=t,this.n_=r,this.r_=i,this.connection=o,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=u,this.listener=d,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Kl(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Ae(e.toString()),Ae("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.i_===e&&this.V_(r,i)},r=>{t(()=>{const i=new N(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(i)})})}V_(t,e){const r=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(i=>{r(()=>this.m_(i))}),this.stream.onMessage(i=>{r(()=>++this.__==1?this.g_(i):this.onNext(i))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return k(Ca,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(k(Ca,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ip extends Ap{constructor(t,e,r,i,o,l){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,l),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return et(!!t.streamToken),this.lastStreamToken=t.streamToken,et(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){et(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=Uf(t.writeResults,t.commitTime),r=Fe(t.commitTime);return this.listener.v_(r,e)}C_(){const t={};t.database=Mf(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Ff(this.serializer,r))};this.I_(e)}}/**
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
 */class Cp{}class Pp extends Cp{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.So(t,Ys(e,r),i,o,l)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())})}Co(t,e,r,i,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,u])=>this.connection.Co(t,Ys(e,r),i,l,u,o)).catch(l=>{throw l.name==="FirebaseError"?(l.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new N(P.UNKNOWN,l.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class Rp{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ae(e),this.N_=!1):k("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const Ln="RemoteStore";class Sp{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(l=>{r.enqueueAndForget(async()=>{Bn(this)&&(k(Ln,"Restarting streams for network reachability change."),await async function(d){const p=G(d);p.W_.add(4),await Mn(p),p.j_.set("Unknown"),p.W_.delete(4),await Xr(p)}(this))})}),this.j_=new Rp(r,i)}}async function Xr(n){if(Bn(n))for(const t of n.G_)await t(!0)}async function Mn(n){for(const t of n.G_)await t(!1)}function Bn(n){return G(n).W_.size===0}async function Ql(n,t,e){if(!On(t))throw t;n.W_.add(1),await Mn(n),n.j_.set("Offline"),e||(e=()=>gp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{k(Ln,"Retrying IndexedDB access"),await e(),n.W_.delete(1),await Xr(n)})}function Xl(n,t){return t().catch(e=>Ql(n,e,t))}async function Yr(n){const t=G(n),e=ce(t);let r=t.U_.length>0?t.U_[t.U_.length-1].batchId:ci;for(;kp(t);)try{const i=await wp(t.localStore,r);if(i===null){t.U_.length===0&&e.P_();break}r=i.batchId,Vp(t,i)}catch(i){await Ql(t,i)}Yl(t)&&Jl(t)}function kp(n){return Bn(n)&&n.U_.length<10}function Vp(n,t){n.U_.push(t);const e=ce(n);e.c_()&&e.S_&&e.b_(t.mutations)}function Yl(n){return Bn(n)&&!ce(n).u_()&&n.U_.length>0}function Jl(n){ce(n).start()}async function Dp(n){ce(n).C_()}async function xp(n){const t=ce(n);for(const e of n.U_)t.b_(e.mutations)}async function Op(n,t,e){const r=n.U_.shift(),i=yi.from(r,t,e);await Xl(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Yr(n)}async function Np(n,t){t&&ce(n).S_&&await async function(r,i){if(function(l){return kf(l)&&l!==P.ABORTED}(i.code)){const o=r.U_.shift();ce(r).h_(),await Xl(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await Yr(r)}}(n,t),Yl(n)&&Jl(n)}async function Pa(n,t){const e=G(n);e.asyncQueue.verifyOperationInProgress(),k(Ln,"RemoteStore received new credentials");const r=Bn(e);e.W_.add(3),await Mn(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await Xr(e)}async function Lp(n,t){const e=G(n);t?(e.W_.delete(2),await Xr(e)):t||(e.W_.add(2),await Mn(e),e.j_.set("Unknown"))}function ce(n){return n.Y_||(n.Y_=function(e,r,i){const o=G(e);return o.M_(),new Ip(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:Dp.bind(null,n),Lo:Np.bind(null,n),D_:xp.bind(null,n),v_:Op.bind(null,n)}),n.G_.push(async t=>{t?(n.Y_.h_(),await Yr(n)):(await n.Y_.stop(),n.U_.length>0&&(k(Ln,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
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
 */class bi{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new ve,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const l=Date.now()+r,u=new bi(t,e,l,i,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zl(n,t){if(Ae("AsyncQueue",`${t}: ${n}`),On(n))return new N(P.UNAVAILABLE,`${t}: ${n}`);throw n}class Mp{constructor(){this.queries=Ra(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,r){const i=G(e),o=i.queries;i.queries=Ra(),o.forEach((l,u)=>{for(const d of u.ta)d.onError(r)})})(this,new N(P.ABORTED,"Firestore shutting down"))}}function Ra(){return new Re(n=>Vl(n),kl)}function Bp(n){n.ia.forEach(t=>{t.next()})}var Sa,ka;(ka=Sa||(Sa={}))._a="default",ka.Cache="cache";const Fp="SyncEngine";class Up{constructor(t,e,r,i,o,l){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=l,this.La={},this.ka=new Re(u=>Vl(u),kl),this.qa=new Map,this.Qa=new Set,this.$a=new kt(L.comparator),this.Ua=new Map,this.Ka=new _i,this.Wa={},this.Ga=new Map,this.za=Ge.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function $p(n,t,e){const r=qp(n);try{const i=await function(l,u){const d=G(l),p=at.now(),b=u.reduce((V,D)=>V.add(D.key),Et());let I,R;return d.persistence.runTransaction("Locally write mutations","readwrite",V=>{let D=kr(),M=Et();return d.ds.getEntries(V,b).next(O=>{D=O,D.forEach((Y,X)=>{X.isValidDocument()||(M=M.add(Y))})}).next(()=>d.localDocuments.getOverlayedDocuments(V,D)).next(O=>{I=O;const Y=[];for(const X of u){const J=Cf(X,I.get(X.key).overlayedDocument);J!=null&&Y.push(new Se(X.key,J,Tl(J.value.mapValue),Kt.exists(!0)))}return d.mutationQueue.addMutationBatch(V,p,Y,u)}).next(O=>{R=O;const Y=O.applyToLocalDocumentSet(I,M);return d.documentOverlayCache.saveOverlays(V,O.batchId,Y)})}).then(()=>({batchId:R.batchId,changes:xl(I)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(l,u,d){let p=l.Wa[l.currentUser.toKey()];p||(p=new kt(j)),p=p.insert(u,d),l.Wa[l.currentUser.toKey()]=p}(r,i.batchId,e),await Jr(r,i.changes),await Yr(r.remoteStore)}catch(i){const o=Zl(i,"Failed to persist write");e.reject(o)}}function Va(n,t,e){const r=G(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ka.forEach((o,l)=>{const u=l.view.sa(t);u.snapshot&&i.push(u.snapshot)}),function(l,u){const d=G(l);d.onlineState=u;let p=!1;d.queries.forEach((b,I)=>{for(const R of I.ta)R.sa(u)&&(p=!0)}),p&&Bp(d)}(r.eventManager,t),i.length&&r.La.p_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function jp(n,t){const e=G(n),r=t.batch.batchId;try{const i=await mp(e.localStore,t);ec(e,r,null),tc(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Jr(e,i)}catch(i){await ai(i)}}async function Hp(n,t,e){const r=G(n);try{const i=await function(l,u){const d=G(l);return d.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let b;return d.mutationQueue.lookupMutationBatch(p,u).next(I=>(et(I!==null),b=I.keys(),d.mutationQueue.removeMutationBatch(p,I))).next(()=>d.mutationQueue.performConsistencyCheck(p)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(p,b,u)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,b)).next(()=>d.localDocuments.getDocuments(p,b))})}(r.localStore,t);ec(r,t,e),tc(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Jr(r,i)}catch(i){await ai(i)}}function tc(n,t){(n.Ga.get(t)||[]).forEach(e=>{e.resolve()}),n.Ga.delete(t)}function ec(n,t,e){const r=G(n);let i=r.Wa[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.Wa[r.currentUser.toKey()]=i}}async function Jr(n,t,e){const r=G(n),i=[],o=[],l=[];r.ka.isEmpty()||(r.ka.forEach((u,d)=>{l.push(r.Ha(d,t,e).then(p=>{var b;if((p||e)&&r.isPrimaryClient){const I=p?!p.fromCache:(b=void 0)===null||b===void 0?void 0:b.current;r.sharedClientState.updateQueryState(d.targetId,I?"current":"not-current")}if(p){i.push(p);const I=Ei.Yi(d.targetId,p);o.push(I)}}))}),await Promise.all(l),r.La.p_(i),await async function(d,p){const b=G(d);try{await b.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>C.forEach(p,R=>C.forEach(R.Hi,V=>b.persistence.referenceDelegate.addReference(I,R.targetId,V)).next(()=>C.forEach(R.Ji,V=>b.persistence.referenceDelegate.removeReference(I,R.targetId,V)))))}catch(I){if(!On(I))throw I;k(dp,"Failed to update sequence numbers: "+I)}for(const I of p){const R=I.targetId;if(!I.fromCache){const V=b.Ts.get(R),D=V.snapshotVersion,M=V.withLastLimboFreeSnapshotVersion(D);b.Ts=b.Ts.insert(R,M)}}}(r.localStore,o))}async function zp(n,t){const e=G(n);if(!e.currentUser.isEqual(t)){k(Fp,"User change. New user:",t.toKey());const r=await Wl(e.localStore,t);e.currentUser=t,function(o,l){o.Ga.forEach(u=>{u.forEach(d=>{d.reject(new N(P.CANCELLED,l))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Jr(e,r.Rs)}}function qp(n){const t=G(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=jp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Hp.bind(null,t),t}class Or{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Qr(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return pp(this.persistence,new hp,t.initialUser,this.serializer)}Xa(t){return new Gl(vi.ri,this.serializer)}Za(t){return new yp}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Or.provider={build:()=>new Or};class Gp extends Or{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){et(this.persistence.referenceDelegate instanceof xr);const r=this.persistence.referenceDelegate.garbageCollector;return new Xf(r,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?Rt.withCacheSize(this.cacheSizeBytes):Rt.DEFAULT;return new Gl(r=>xr.ri(r,e),this.serializer)}}class ti{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Va(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zp.bind(null,this.syncEngine),await Lp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Mp}()}createDatastore(t){const e=Qr(t.databaseInfo.databaseId),r=function(o){return new Tp(o)}(t.databaseInfo);return function(o,l,u,d){return new Pp(o,l,u,d)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,l,u){return new Sp(r,i,o,l,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Va(this.syncEngine,e,0),function(){return Ia.D()?new Ia:new _p}())}createSyncEngine(t,e){return function(i,o,l,u,d,p,b){const I=new Up(i,o,l,u,d,p);return b&&(I.ja=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=G(i);k(Ln,"RemoteStore shutting down."),o.W_.add(5),await Mn(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}ti.provider={build:()=>new ti};/**
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
 */const ue="FirestoreClient";class Wp{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=vt.UNAUTHENTICATED,this.clientId=pl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async l=>{k(ue,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(k(ue,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ve;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Zl(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ns(n,t){n.asyncQueue.verifyOperationInProgress(),k(ue,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Wl(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Da(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Kp(n);k(ue,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Pa(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Pa(t.remoteStore,i)),n._onlineComponents=t}async function Kp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k(ue,"Using user provided OfflineComponentProvider");try{await Ns(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;qr("Error using user provided cache. Falling back to memory cache: "+e),await Ns(n,new Or)}}else k(ue,"Using default OfflineComponentProvider"),await Ns(n,new Gp(void 0));return n._offlineComponents}async function Qp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k(ue,"Using user provided OnlineComponentProvider"),await Da(n,n._uninitializedComponentsProvider._online)):(k(ue,"Using default OnlineComponentProvider"),await Da(n,new ti))),n._onlineComponents}function Xp(n){return Qp(n).then(t=>t.syncEngine)}/**
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
 */function nc(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const xa=new Map;/**
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
 */function rc(n,t,e){if(!e)throw new N(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Yp(n,t,e,r){if(t===!0&&r===!0)throw new N(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Oa(n){if(!L.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Na(n){if(L.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ti(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":B()}function sc(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ti(n);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */const ic="firestore.googleapis.com",La=!0;class Ma{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ic,this.ssl=La}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:La;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ql;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Kf)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Yp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Zr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ma({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ma(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Pd;switch(r.type){case"firstParty":return new Vd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=xa.get(e);r&&(k("ComponentProvider","Removing Datastore"),xa.delete(e),r.terminate())}(this),Promise.resolve()}}function Jp(n,t,e,r={}){var i;const o=(n=sc(n,Zr))._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),u=`${t}:${e}`;o.host!==ic&&o.host!==u&&qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},o),{host:u,ssl:!1,emulatorOptions:r});if(!Er(d,l)&&(n._setSettings(d),r.mockUserToken)){let p,b;if(typeof r.mockUserToken=="string")p=r.mockUserToken,b=vt.MOCK_USER;else{p=sh(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new vt(I)}n._authCredentials=new Rd(new fl(p,b))}}/**
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
 */class Ai{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ai(this.firestore,t,this._query)}}class Qt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Qt(this.firestore,t,this._key)}}class oe extends Ai{constructor(t,e,r){super(t,e,uf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Qt(this.firestore,null,new L(t))}withConverter(t){return new oe(this.firestore,t,this._path)}}function Zp(n,t,...e){if(n=Cn(n),rc("collection","path",t),n instanceof Zr){const r=tt.fromString(t,...e);return Na(r),new oe(n,null,r)}{if(!(n instanceof Qt||n instanceof oe))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(t,...e));return Na(r),new oe(n.firestore,null,r)}}function tm(n,t,...e){if(n=Cn(n),arguments.length===1&&(t=pl.newId()),rc("doc","path",t),n instanceof Zr){const r=tt.fromString(t,...e);return Oa(r),new Qt(n,null,new L(r))}{if(!(n instanceof Qt||n instanceof oe))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(tt.fromString(t,...e));return Oa(r),new Qt(n.firestore,n instanceof oe?n.converter:null,new L(r))}}/**
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
 */const Ba="AsyncQueue";class Fa{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Kl(this,"async_queue_retry"),this.Su=()=>{const r=Os();r&&k(Ba,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=t;const e=Os();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=Os();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new ve;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!On(t))throw t;k(Ba,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const i=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(r);throw Ae("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.pu=!1,r))));return this.bu=e,e}enqueueAfterDelay(t,e,r){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const i=bi.createAndSchedule(this,t,e,r,o=>this.Fu(o));return this.fu.push(i),i}Du(){this.gu&&B()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class oc extends Zr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new Fa,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Fa(t),this._firestoreClient=void 0,await t}}}function em(n,t){const e=typeof n=="object"?n:pd(),r=typeof n=="string"?n:Cr,i=cd(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=nh("firestore");o&&Jp(i,...o)}return i}function nm(n){if(n._terminated)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||rm(n),n._firestoreClient}function rm(n){var t,e,r;const i=n._freezeSettings(),o=function(u,d,p,b){return new Kd(u,d,p,b.host,b.ssl,b.experimentalForceLongPolling,b.experimentalAutoDetectLongPolling,nc(b.experimentalLongPollingOptions),b.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Wp(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}}(n._componentsProvider))}/**
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
 */class xn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new xn(jt.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new xn(jt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ac{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class lc{constructor(t){this._methodName=t}}/**
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
 */class cc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
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
 */class uc{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
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
 */const sm=/^__.*__$/;class im{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Se(t,this.data,this.fieldMask,e,this.fieldTransforms):new Nn(t,this.data,e,this.fieldTransforms)}}function hc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class Ii{constructor(t,e,r,i,o,l){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new Ii(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ku({path:r,Qu:!1});return i.$u(t),i}Uu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.ku({path:r,Qu:!1});return i.Bu(),i}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Nr(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(hc(this.Lu)&&sm.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class om{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Qr(t)}ju(t,e,r,i=!1){return new Ii({Lu:t,methodName:e,zu:r,path:dt.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function am(n){const t=n._freezeSettings(),e=Qr(n._databaseId);return new om(n._databaseId,!!t.ignoreUndefinedProperties,e)}function lm(n,t,e,r,i,o={}){const l=n.ju(o.merge||o.mergeFields?2:0,t,e,i);mc("Data must be an object, but it was:",l,r);const u=fc(r,l);let d,p;if(o.merge)d=new Ft(l.fieldMask),p=l.fieldTransforms;else if(o.mergeFields){const b=[];for(const I of o.mergeFields){const R=cm(t,I,e);if(!l.contains(R))throw new N(P.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);dm(b,R)||b.push(R)}d=new Ft(b),p=l.fieldTransforms.filter(I=>d.covers(I.field))}else d=null,p=l.fieldTransforms;return new im(new Bt(u),d,p)}function dc(n,t){if(pc(n=Cn(n)))return mc("Unsupported field value:",t,n),fc(n,t);if(n instanceof lc)return function(r,i){if(!hc(i.Lu))throw i.Wu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(r,i){const o=[];let l=0;for(const u of r){let d=dc(u,i.Ku(l));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),l++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=Cn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vf(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=at.fromDate(r);return{timestampValue:Xs(i.serializer,o)}}if(r instanceof at){const o=new at(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Xs(i.serializer,o)}}if(r instanceof cc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof xn)return{bytesValue:xf(i.serializer,r._byteString)};if(r instanceof Qt){const o=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(o))throw i.Wu(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Hl(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof uc)return function(l,u){return{mapValue:{fields:{[El]:{stringValue:bl},[qs]:{arrayValue:{values:l.toArray().map(p=>{if(typeof p!="number")throw u.Wu("VectorValues must only contain numeric values.");return wi(u.serializer,p)})}}}}}}(r,i);throw i.Wu(`Unsupported field value: ${Ti(r)}`)}(n,t)}function fc(n,t){const e={};return gl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ye(n,(r,i)=>{const o=dc(i,t.qu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function pc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof at||n instanceof cc||n instanceof xn||n instanceof Qt||n instanceof lc||n instanceof uc)}function mc(n,t,e){if(!pc(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Ti(e);throw r==="an object"?t.Wu(n+" a custom object"):t.Wu(n+" "+r)}}function cm(n,t,e){if((t=Cn(t))instanceof ac)return t._internalPath;if(typeof t=="string")return hm(n,t);throw Nr("Field path arguments must be of type string or ",n,!1,void 0,e)}const um=new RegExp("[~\\*/\\[\\]]");function hm(n,t,e){if(t.search(um)>=0)throw Nr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ac(...t.split("."))._internalPath}catch{throw Nr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Nr(n,t,e,r,i){const o=r&&!r.isEmpty(),l=i!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let d="";return(o||l)&&(d+=" (found",o&&(d+=` in field ${r}`),l&&(d+=` in document ${i}`),d+=")"),new N(P.INVALID_ARGUMENT,u+n+d)}function dm(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */function fm(n,t,e){let r;return r=n?n.toFirestore(t):t,r}function pm(n,t){const e=sc(n.firestore,oc),r=tm(n),i=fm(n.converter,t);return mm(e,[lm(am(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Kt.exists(!1))]).then(()=>r)}function mm(n,t){return function(r,i){const o=new ve;return r.asyncQueue.enqueueAndForget(async()=>$p(await Xp(r),i,o)),o.promise}(nm(n),t)}(function(t,e=!0){(function(i){Xe=i})(fd),Tr(new Pn("firestore",(r,{instanceIdentifier:i,options:o})=>{const l=r.getProvider("app").getImmediate(),u=new oc(new Sd(r.getProvider("auth-internal")),new Dd(l,r.getProvider("app-check-internal")),function(p,b){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pr(p.options.projectId,b)}(l,i),l);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Be(Zo,ta,t),Be(Zo,ta,"esm2017")})();/*!
* sweetalert2 v11.17.2
* Released under the MIT License.
*/function gc(n,t,e){if(typeof n=="function"?n===t:n.has(t))return arguments.length<3?t:e;throw new TypeError("Private element is not present on this object")}function gm(n,t){if(t.has(n))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Ua(n,t){return n.get(gc(n,t))}function wm(n,t,e){gm(n,t),t.set(n,e)}function ym(n,t,e){return n.set(gc(n,t),e),e}const _m=100,x={},vm=()=>{x.previousActiveElement instanceof HTMLElement?(x.previousActiveElement.focus(),x.previousActiveElement=null):document.body&&document.body.focus()},Em=n=>new Promise(t=>{if(!n)return t();const e=window.scrollX,r=window.scrollY;x.restoreFocusTimeout=setTimeout(()=>{vm(),t()},_m),window.scrollTo(e,r)}),wc="swal2-",bm=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],A=bm.reduce((n,t)=>(n[t]=wc+t,n),{}),Tm=["success","warning","info","question","error"],Lr=Tm.reduce((n,t)=>(n[t]=wc+t,n),{}),yc="SweetAlert2:",Ci=n=>n.charAt(0).toUpperCase()+n.slice(1),It=n=>{console.warn(`${yc} ${typeof n=="object"?n.join(" "):n}`)},ke=n=>{console.error(`${yc} ${n}`)},$a=[],Am=n=>{$a.includes(n)||($a.push(n),It(n))},_c=function(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Am(`"${n}" is deprecated and will be removed in the next major release.${t?` Use "${t}" instead.`:""}`)},ts=n=>typeof n=="function"?n():n,Pi=n=>n&&typeof n.toPromise=="function",Fn=n=>Pi(n)?n.toPromise():Promise.resolve(n),Ri=n=>n&&Promise.resolve(n)===n,Ct=()=>document.body.querySelector(`.${A.container}`),Un=n=>{const t=Ct();return t?t.querySelector(n):null},xt=n=>Un(`.${n}`),z=()=>xt(A.popup),Je=()=>xt(A.icon),Im=()=>xt(A["icon-content"]),vc=()=>xt(A.title),Si=()=>xt(A["html-container"]),Ec=()=>xt(A.image),ki=()=>xt(A["progress-steps"]),es=()=>xt(A["validation-message"]),zt=()=>Un(`.${A.actions} .${A.confirm}`),Ze=()=>Un(`.${A.actions} .${A.cancel}`),Ve=()=>Un(`.${A.actions} .${A.deny}`),Cm=()=>xt(A["input-label"]),tn=()=>Un(`.${A.loader}`),$n=()=>xt(A.actions),bc=()=>xt(A.footer),ns=()=>xt(A["timer-progress-bar"]),Vi=()=>xt(A.close),Pm=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Di=()=>{const n=z();if(!n)return[];const t=n.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),e=Array.from(t).sort((o,l)=>{const u=parseInt(o.getAttribute("tabindex")||"0"),d=parseInt(l.getAttribute("tabindex")||"0");return u>d?1:u<d?-1:0}),r=n.querySelectorAll(Pm),i=Array.from(r).filter(o=>o.getAttribute("tabindex")!=="-1");return[...new Set(e.concat(i))].filter(o=>St(o))},xi=()=>Xt(document.body,A.shown)&&!Xt(document.body,A["toast-shown"])&&!Xt(document.body,A["no-backdrop"]),rs=()=>{const n=z();return n?Xt(n,A.toast):!1},Rm=()=>{const n=z();return n?n.hasAttribute("data-loading"):!1},Ot=(n,t)=>{if(n.textContent="",t){const r=new DOMParser().parseFromString(t,"text/html"),i=r.querySelector("head");i&&Array.from(i.childNodes).forEach(l=>{n.appendChild(l)});const o=r.querySelector("body");o&&Array.from(o.childNodes).forEach(l=>{l instanceof HTMLVideoElement||l instanceof HTMLAudioElement?n.appendChild(l.cloneNode(!0)):n.appendChild(l)})}},Xt=(n,t)=>{if(!t)return!1;const e=t.split(/\s+/);for(let r=0;r<e.length;r++)if(!n.classList.contains(e[r]))return!1;return!0},Sm=(n,t)=>{Array.from(n.classList).forEach(e=>{!Object.values(A).includes(e)&&!Object.values(Lr).includes(e)&&!Object.values(t.showClass||{}).includes(e)&&n.classList.remove(e)})},Dt=(n,t,e)=>{if(Sm(n,t),!t.customClass)return;const r=t.customClass[e];if(r){if(typeof r!="string"&&!r.forEach){It(`Invalid type of customClass.${e}! Expected string or iterable object, got "${typeof r}"`);return}$(n,r)}},ss=(n,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return n.querySelector(`.${A.popup} > .${A[t]}`);case"checkbox":return n.querySelector(`.${A.popup} > .${A.checkbox} input`);case"radio":return n.querySelector(`.${A.popup} > .${A.radio} input:checked`)||n.querySelector(`.${A.popup} > .${A.radio} input:first-child`);case"range":return n.querySelector(`.${A.popup} > .${A.range} input`);default:return n.querySelector(`.${A.popup} > .${A.input}`)}},Tc=n=>{if(n.focus(),n.type!=="file"){const t=n.value;n.value="",n.value=t}},Ac=(n,t,e)=>{!n||!t||(typeof t=="string"&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(r=>{Array.isArray(n)?n.forEach(i=>{e?i.classList.add(r):i.classList.remove(r)}):e?n.classList.add(r):n.classList.remove(r)}))},$=(n,t)=>{Ac(n,t,!0)},Nt=(n,t)=>{Ac(n,t,!1)},ne=(n,t)=>{const e=Array.from(n.children);for(let r=0;r<e.length;r++){const i=e[r];if(i instanceof HTMLElement&&Xt(i,t))return i}},be=(n,t,e)=>{e===`${parseInt(e)}`&&(e=parseInt(e)),e||parseInt(e)===0?n.style.setProperty(t,typeof e=="number"?`${e}px`:e):n.style.removeProperty(t)},lt=function(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";n&&(n.style.display=t)},bt=n=>{n&&(n.style.display="none")},Oi=function(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";n&&new MutationObserver(()=>{jn(n,n.innerHTML,t)}).observe(n,{childList:!0,subtree:!0})},ja=(n,t,e,r)=>{const i=n.querySelector(t);i&&i.style.setProperty(e,r)},jn=function(n,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";t?lt(n,e):bt(n)},St=n=>!!(n&&(n.offsetWidth||n.offsetHeight||n.getClientRects().length)),km=()=>!St(zt())&&!St(Ve())&&!St(Ze()),Ha=n=>n.scrollHeight>n.clientHeight,Ic=n=>{const t=window.getComputedStyle(n),e=parseFloat(t.getPropertyValue("animation-duration")||"0"),r=parseFloat(t.getPropertyValue("transition-duration")||"0");return e>0||r>0},Ni=function(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const e=ns();e&&St(e)&&(t&&(e.style.transition="none",e.style.width="100%"),setTimeout(()=>{e.style.transition=`width ${n/1e3}s linear`,e.style.width="0%"},10))},Vm=()=>{const n=ns();if(!n)return;const t=parseInt(window.getComputedStyle(n).width);n.style.removeProperty("transition"),n.style.width="100%";const e=parseInt(window.getComputedStyle(n).width),r=t/e*100;n.style.width=`${r}%`},Dm=()=>typeof window>"u"||typeof document>"u",xm=`
 <div aria-labelledby="${A.title}" aria-describedby="${A["html-container"]}" class="${A.popup}" tabindex="-1">
   <button type="button" class="${A.close}"></button>
   <ul class="${A["progress-steps"]}"></ul>
   <div class="${A.icon}"></div>
   <img class="${A.image}" />
   <h2 class="${A.title}" id="${A.title}"></h2>
   <div class="${A["html-container"]}" id="${A["html-container"]}"></div>
   <input class="${A.input}" id="${A.input}" />
   <input type="file" class="${A.file}" />
   <div class="${A.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${A.select}" id="${A.select}"></select>
   <div class="${A.radio}"></div>
   <label class="${A.checkbox}">
     <input type="checkbox" id="${A.checkbox}" />
     <span class="${A.label}"></span>
   </label>
   <textarea class="${A.textarea}" id="${A.textarea}"></textarea>
   <div class="${A["validation-message"]}" id="${A["validation-message"]}"></div>
   <div class="${A.actions}">
     <div class="${A.loader}"></div>
     <button type="button" class="${A.confirm}"></button>
     <button type="button" class="${A.deny}"></button>
     <button type="button" class="${A.cancel}"></button>
   </div>
   <div class="${A.footer}"></div>
   <div class="${A["timer-progress-bar-container"]}">
     <div class="${A["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),Om=()=>{const n=Ct();return n?(n.remove(),Nt([document.documentElement,document.body],[A["no-backdrop"],A["toast-shown"],A["has-column"]]),!0):!1},ge=()=>{x.currentInstance.resetValidationMessage()},Nm=()=>{const n=z(),t=ne(n,A.input),e=ne(n,A.file),r=n.querySelector(`.${A.range} input`),i=n.querySelector(`.${A.range} output`),o=ne(n,A.select),l=n.querySelector(`.${A.checkbox} input`),u=ne(n,A.textarea);t.oninput=ge,e.onchange=ge,o.onchange=ge,l.onchange=ge,u.oninput=ge,r.oninput=()=>{ge(),i.value=r.value},r.onchange=()=>{ge(),i.value=r.value}},Lm=n=>typeof n=="string"?document.querySelector(n):n,Mm=n=>{const t=z();t.setAttribute("role",n.toast?"alert":"dialog"),t.setAttribute("aria-live",n.toast?"polite":"assertive"),n.toast||t.setAttribute("aria-modal","true")},Bm=n=>{window.getComputedStyle(n).direction==="rtl"&&$(Ct(),A.rtl)},Fm=n=>{const t=Om();if(Dm()){ke("SweetAlert2 requires document to initialize");return}const e=document.createElement("div");e.className=A.container,t&&$(e,A["no-transition"]),Ot(e,xm),e.dataset.swal2Theme=n.theme;const r=Lm(n.target);r.appendChild(e),Mm(n),Bm(r),Nm()},Li=(n,t)=>{n instanceof HTMLElement?t.appendChild(n):typeof n=="object"?Um(n,t):n&&Ot(t,n)},Um=(n,t)=>{n.jquery?$m(t,n):Ot(t,n.toString())},$m=(n,t)=>{if(n.textContent="",0 in t)for(let e=0;e in t;e++)n.appendChild(t[e].cloneNode(!0));else n.appendChild(t.cloneNode(!0))},jm=(n,t)=>{const e=$n(),r=tn();!e||!r||(!t.showConfirmButton&&!t.showDenyButton&&!t.showCancelButton?bt(e):lt(e),Dt(e,t,"actions"),Hm(e,r,t),Ot(r,t.loaderHtml||""),Dt(r,t,"loader"))};function Hm(n,t,e){const r=zt(),i=Ve(),o=Ze();!r||!i||!o||(Ls(r,"confirm",e),Ls(i,"deny",e),Ls(o,"cancel",e),zm(r,i,o,e),e.reverseButtons&&(e.toast?(n.insertBefore(o,r),n.insertBefore(i,r)):(n.insertBefore(o,t),n.insertBefore(i,t),n.insertBefore(r,t))))}function zm(n,t,e,r){if(!r.buttonsStyling){Nt([n,t,e],A.styled);return}$([n,t,e],A.styled),r.confirmButtonColor&&(n.style.backgroundColor=r.confirmButtonColor,$(n,A["default-outline"])),r.denyButtonColor&&(t.style.backgroundColor=r.denyButtonColor,$(t,A["default-outline"])),r.cancelButtonColor&&(e.style.backgroundColor=r.cancelButtonColor,$(e,A["default-outline"]))}function Ls(n,t,e){const r=Ci(t);jn(n,e[`show${r}Button`],"inline-block"),Ot(n,e[`${t}ButtonText`]||""),n.setAttribute("aria-label",e[`${t}ButtonAriaLabel`]||""),n.className=A[t],Dt(n,e,`${t}Button`)}const qm=(n,t)=>{const e=Vi();e&&(Ot(e,t.closeButtonHtml||""),Dt(e,t,"closeButton"),jn(e,t.showCloseButton),e.setAttribute("aria-label",t.closeButtonAriaLabel||""))},Gm=(n,t)=>{const e=Ct();e&&(Wm(e,t.backdrop),Km(e,t.position),Qm(e,t.grow),Dt(e,t,"container"))};function Wm(n,t){typeof t=="string"?n.style.background=t:t||$([document.documentElement,document.body],A["no-backdrop"])}function Km(n,t){t&&(t in A?$(n,A[t]):(It('The "position" parameter is not valid, defaulting to "center"'),$(n,A.center)))}function Qm(n,t){t&&$(n,A[`grow-${t}`])}var W={innerParams:new WeakMap,domCache:new WeakMap};const Xm=["input","file","range","select","radio","checkbox","textarea"],Ym=(n,t)=>{const e=z();if(!e)return;const r=W.innerParams.get(n),i=!r||t.input!==r.input;Xm.forEach(o=>{const l=ne(e,A[o]);l&&(tg(o,t.inputAttributes),l.className=A[o],i&&bt(l))}),t.input&&(i&&Jm(t),eg(t))},Jm=n=>{if(!n.input)return;if(!nt[n.input]){ke(`Unexpected type of input! Expected ${Object.keys(nt).join(" | ")}, got "${n.input}"`);return}const t=Cc(n.input);if(!t)return;const e=nt[n.input](t,n);lt(t),n.inputAutoFocus&&setTimeout(()=>{Tc(e)})},Zm=n=>{for(let t=0;t<n.attributes.length;t++){const e=n.attributes[t].name;["id","type","value","style"].includes(e)||n.removeAttribute(e)}},tg=(n,t)=>{const e=z();if(!e)return;const r=ss(e,n);if(r){Zm(r);for(const i in t)r.setAttribute(i,t[i])}},eg=n=>{if(!n.input)return;const t=Cc(n.input);t&&Dt(t,n,"input")},Mi=(n,t)=>{!n.placeholder&&t.inputPlaceholder&&(n.placeholder=t.inputPlaceholder)},Hn=(n,t,e)=>{if(e.inputLabel){const r=document.createElement("label"),i=A["input-label"];r.setAttribute("for",n.id),r.className=i,typeof e.customClass=="object"&&$(r,e.customClass.inputLabel),r.innerText=e.inputLabel,t.insertAdjacentElement("beforebegin",r)}},Cc=n=>{const t=z();if(t)return ne(t,A[n]||A.input)},Mr=(n,t)=>{["string","number"].includes(typeof t)?n.value=`${t}`:Ri(t)||It(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`)},nt={};nt.text=nt.email=nt.password=nt.number=nt.tel=nt.url=nt.search=nt.date=nt["datetime-local"]=nt.time=nt.week=nt.month=(n,t)=>(Mr(n,t.inputValue),Hn(n,n,t),Mi(n,t),n.type=t.input,n);nt.file=(n,t)=>(Hn(n,n,t),Mi(n,t),n);nt.range=(n,t)=>{const e=n.querySelector("input"),r=n.querySelector("output");return Mr(e,t.inputValue),e.type=t.input,Mr(r,t.inputValue),Hn(e,n,t),n};nt.select=(n,t)=>{if(n.textContent="",t.inputPlaceholder){const e=document.createElement("option");Ot(e,t.inputPlaceholder),e.value="",e.disabled=!0,e.selected=!0,n.appendChild(e)}return Hn(n,n,t),n};nt.radio=n=>(n.textContent="",n);nt.checkbox=(n,t)=>{const e=ss(z(),"checkbox");e.value="1",e.checked=!!t.inputValue;const r=n.querySelector("span");return Ot(r,t.inputPlaceholder||t.inputLabel),e};nt.textarea=(n,t)=>{Mr(n,t.inputValue),Mi(n,t),Hn(n,n,t);const e=r=>parseInt(window.getComputedStyle(r).marginLeft)+parseInt(window.getComputedStyle(r).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const r=parseInt(window.getComputedStyle(z()).width),i=()=>{if(!document.body.contains(n))return;const o=n.offsetWidth+e(n);o>r?z().style.width=`${o}px`:be(z(),"width",t.width)};new MutationObserver(i).observe(n,{attributes:!0,attributeFilter:["style"]})}}),n};const ng=(n,t)=>{const e=Si();e&&(Oi(e),Dt(e,t,"htmlContainer"),t.html?(Li(t.html,e),lt(e,"block")):t.text?(e.textContent=t.text,lt(e,"block")):bt(e),Ym(n,t))},rg=(n,t)=>{const e=bc();e&&(Oi(e),jn(e,t.footer,"block"),t.footer&&Li(t.footer,e),Dt(e,t,"footer"))},sg=(n,t)=>{const e=W.innerParams.get(n),r=Je();if(!r)return;if(e&&t.icon===e.icon){qa(r,t),za(r,t);return}if(!t.icon&&!t.iconHtml){bt(r);return}if(t.icon&&Object.keys(Lr).indexOf(t.icon)===-1){ke(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`),bt(r);return}lt(r),qa(r,t),za(r,t),$(r,t.showClass&&t.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",Pc)},za=(n,t)=>{for(const[e,r]of Object.entries(Lr))t.icon!==e&&Nt(n,r);$(n,t.icon&&Lr[t.icon]),ag(n,t),Pc(),Dt(n,t,"icon")},Pc=()=>{const n=z();if(!n)return;const t=window.getComputedStyle(n).getPropertyValue("background-color"),e=n.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let r=0;r<e.length;r++)e[r].style.backgroundColor=t},ig=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,og=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,qa=(n,t)=>{if(!t.icon&&!t.iconHtml)return;let e=n.innerHTML,r="";t.iconHtml?r=Ga(t.iconHtml):t.icon==="success"?(r=ig,e=e.replace(/ style=".*?"/g,"")):t.icon==="error"?r=og:t.icon&&(r=Ga({question:"?",warning:"!",info:"i"}[t.icon])),e.trim()!==r.trim()&&Ot(n,r)},ag=(n,t)=>{if(t.iconColor){n.style.color=t.iconColor,n.style.borderColor=t.iconColor;for(const e of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])ja(n,e,"background-color",t.iconColor);ja(n,".swal2-success-ring","border-color",t.iconColor)}},Ga=n=>`<div class="${A["icon-content"]}">${n}</div>`,lg=(n,t)=>{const e=Ec();if(e){if(!t.imageUrl){bt(e);return}lt(e,""),e.setAttribute("src",t.imageUrl),e.setAttribute("alt",t.imageAlt||""),be(e,"width",t.imageWidth),be(e,"height",t.imageHeight),e.className=A.image,Dt(e,t,"image")}};let Bi=!1,Rc=0,Sc=0,kc=0,Vc=0;const cg=n=>{n.addEventListener("mousedown",Br),document.body.addEventListener("mousemove",Fr),n.addEventListener("mouseup",Ur),n.addEventListener("touchstart",Br),document.body.addEventListener("touchmove",Fr),n.addEventListener("touchend",Ur)},ug=n=>{n.removeEventListener("mousedown",Br),document.body.removeEventListener("mousemove",Fr),n.removeEventListener("mouseup",Ur),n.removeEventListener("touchstart",Br),document.body.removeEventListener("touchmove",Fr),n.removeEventListener("touchend",Ur)},Br=n=>{const t=z();if(n.target===t||Je().contains(n.target)){Bi=!0;const e=Dc(n);Rc=e.clientX,Sc=e.clientY,kc=parseInt(t.style.insetInlineStart)||0,Vc=parseInt(t.style.insetBlockStart)||0,$(t,"swal2-dragging")}},Fr=n=>{const t=z();if(Bi){let{clientX:e,clientY:r}=Dc(n);t.style.insetInlineStart=`${kc+(e-Rc)}px`,t.style.insetBlockStart=`${Vc+(r-Sc)}px`}},Ur=()=>{const n=z();Bi=!1,Nt(n,"swal2-dragging")},Dc=n=>{let t=0,e=0;return n.type.startsWith("mouse")?(t=n.clientX,e=n.clientY):n.type.startsWith("touch")&&(t=n.touches[0].clientX,e=n.touches[0].clientY),{clientX:t,clientY:e}},hg=(n,t)=>{const e=Ct(),r=z();if(!(!e||!r)){if(t.toast){be(e,"width",t.width),r.style.width="100%";const i=tn();i&&r.insertBefore(i,Je())}else be(r,"width",t.width);be(r,"padding",t.padding),t.color&&(r.style.color=t.color),t.background&&(r.style.background=t.background),bt(es()),dg(r,t),t.draggable&&!t.toast?($(r,A.draggable),cg(r)):(Nt(r,A.draggable),ug(r))}},dg=(n,t)=>{const e=t.showClass||{};n.className=`${A.popup} ${St(n)?e.popup:""}`,t.toast?($([document.documentElement,document.body],A["toast-shown"]),$(n,A.toast)):$(n,A.modal),Dt(n,t,"popup"),typeof t.customClass=="string"&&$(n,t.customClass),t.icon&&$(n,A[`icon-${t.icon}`])},fg=(n,t)=>{const e=ki();if(!e)return;const{progressSteps:r,currentProgressStep:i}=t;if(!r||r.length===0||i===void 0){bt(e);return}lt(e),e.textContent="",i>=r.length&&It("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),r.forEach((o,l)=>{const u=pg(o);if(e.appendChild(u),l===i&&$(u,A["active-progress-step"]),l!==r.length-1){const d=mg(t);e.appendChild(d)}})},pg=n=>{const t=document.createElement("li");return $(t,A["progress-step"]),Ot(t,n),t},mg=n=>{const t=document.createElement("li");return $(t,A["progress-step-line"]),n.progressStepsDistance&&be(t,"width",n.progressStepsDistance),t},gg=(n,t)=>{const e=vc();e&&(Oi(e),jn(e,t.title||t.titleText,"block"),t.title&&Li(t.title,e),t.titleText&&(e.innerText=t.titleText),Dt(e,t,"title"))},xc=(n,t)=>{hg(n,t),Gm(n,t),fg(n,t),sg(n,t),lg(n,t),gg(n,t),qm(n,t),ng(n,t),jm(n,t),rg(n,t);const e=z();typeof t.didRender=="function"&&e&&t.didRender(e),x.eventEmitter.emit("didRender",e)},wg=()=>St(z()),Oc=()=>{var n;return(n=zt())===null||n===void 0?void 0:n.click()},yg=()=>{var n;return(n=Ve())===null||n===void 0?void 0:n.click()},_g=()=>{var n;return(n=Ze())===null||n===void 0?void 0:n.click()},en=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Nc=n=>{n.keydownTarget&&n.keydownHandlerAdded&&(n.keydownTarget.removeEventListener("keydown",n.keydownHandler,{capture:n.keydownListenerCapture}),n.keydownHandlerAdded=!1)},vg=(n,t,e)=>{Nc(n),t.toast||(n.keydownHandler=r=>bg(t,r,e),n.keydownTarget=t.keydownListenerCapture?window:z(),n.keydownListenerCapture=t.keydownListenerCapture,n.keydownTarget.addEventListener("keydown",n.keydownHandler,{capture:n.keydownListenerCapture}),n.keydownHandlerAdded=!0)},ei=(n,t)=>{var e;const r=Di();if(r.length){n=n+t,n===r.length?n=0:n===-1&&(n=r.length-1),r[n].focus();return}(e=z())===null||e===void 0||e.focus()},Lc=["ArrowRight","ArrowDown"],Eg=["ArrowLeft","ArrowUp"],bg=(n,t,e)=>{n&&(t.isComposing||t.keyCode===229||(n.stopKeydownPropagation&&t.stopPropagation(),t.key==="Enter"?Tg(t,n):t.key==="Tab"?Ag(t):[...Lc,...Eg].includes(t.key)?Ig(t.key):t.key==="Escape"&&Cg(t,n,e)))},Tg=(n,t)=>{if(!ts(t.allowEnterKey))return;const e=ss(z(),t.input);if(n.target&&e&&n.target instanceof HTMLElement&&n.target.outerHTML===e.outerHTML){if(["textarea","file"].includes(t.input))return;Oc(),n.preventDefault()}},Ag=n=>{const t=n.target,e=Di();let r=-1;for(let i=0;i<e.length;i++)if(t===e[i]){r=i;break}n.shiftKey?ei(r,-1):ei(r,1),n.stopPropagation(),n.preventDefault()},Ig=n=>{const t=$n(),e=zt(),r=Ve(),i=Ze();if(!t||!e||!r||!i)return;const o=[e,r,i];if(document.activeElement instanceof HTMLElement&&!o.includes(document.activeElement))return;const l=Lc.includes(n)?"nextElementSibling":"previousElementSibling";let u=document.activeElement;if(u){for(let d=0;d<t.children.length;d++){if(u=u[l],!u)return;if(u instanceof HTMLButtonElement&&St(u))break}u instanceof HTMLButtonElement&&u.focus()}},Cg=(n,t,e)=>{ts(t.allowEscapeKey)&&(n.preventDefault(),e(en.esc))};var We={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Pg=()=>{const n=Ct();Array.from(document.body.children).forEach(e=>{e.contains(n)||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")||""),e.setAttribute("aria-hidden","true"))})},Mc=()=>{Array.from(document.body.children).forEach(t=>{t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")||""),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})},Bc=typeof window<"u"&&!!window.GestureEvent,Rg=()=>{if(Bc&&!Xt(document.body,A.iosfix)){const n=document.body.scrollTop;document.body.style.top=`${n*-1}px`,$(document.body,A.iosfix),Sg()}},Sg=()=>{const n=Ct();if(!n)return;let t;n.ontouchstart=e=>{t=kg(e)},n.ontouchmove=e=>{t&&(e.preventDefault(),e.stopPropagation())}},kg=n=>{const t=n.target,e=Ct(),r=Si();return!e||!r||Vg(n)||Dg(n)?!1:t===e||!Ha(e)&&t instanceof HTMLElement&&t.tagName!=="INPUT"&&t.tagName!=="TEXTAREA"&&!(Ha(r)&&r.contains(t))},Vg=n=>n.touches&&n.touches.length&&n.touches[0].touchType==="stylus",Dg=n=>n.touches&&n.touches.length>1,xg=()=>{if(Xt(document.body,A.iosfix)){const n=parseInt(document.body.style.top,10);Nt(document.body,A.iosfix),document.body.style.top="",document.body.scrollTop=n*-1}},Og=()=>{const n=document.createElement("div");n.className=A["scrollbar-measure"],document.body.appendChild(n);const t=n.getBoundingClientRect().width-n.clientWidth;return document.body.removeChild(n),t};let Ue=null;const Ng=n=>{Ue===null&&(document.body.scrollHeight>window.innerHeight||n==="scroll")&&(Ue=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Ue+Og()}px`)},Lg=()=>{Ue!==null&&(document.body.style.paddingRight=`${Ue}px`,Ue=null)};function Fc(n,t,e,r){rs()?Wa(n,r):(Em(e).then(()=>Wa(n,r)),Nc(x)),Bc?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),xi()&&(Lg(),xg(),Mc()),Mg()}function Mg(){Nt([document.documentElement,document.body],[A.shown,A["height-auto"],A["no-backdrop"],A["toast-shown"]])}function re(n){n=Fg(n);const t=We.swalPromiseResolve.get(this),e=Bg(this);this.isAwaitingPromise?n.isDismissed||(zn(this),t(n)):e&&t(n)}const Bg=n=>{const t=z();if(!t)return!1;const e=W.innerParams.get(n);if(!e||Xt(t,e.hideClass.popup))return!1;Nt(t,e.showClass.popup),$(t,e.hideClass.popup);const r=Ct();return Nt(r,e.showClass.backdrop),$(r,e.hideClass.backdrop),Ug(n,t,e),!0};function Uc(n){const t=We.swalPromiseReject.get(this);zn(this),t&&t(n)}const zn=n=>{n.isAwaitingPromise&&(delete n.isAwaitingPromise,W.innerParams.get(n)||n._destroy())},Fg=n=>typeof n>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},n),Ug=(n,t,e)=>{var r;const i=Ct(),o=Ic(t);typeof e.willClose=="function"&&e.willClose(t),(r=x.eventEmitter)===null||r===void 0||r.emit("willClose",t),o?$g(n,t,i,e.returnFocus,e.didClose):Fc(n,i,e.returnFocus,e.didClose)},$g=(n,t,e,r,i)=>{x.swalCloseEventFinishedCallback=Fc.bind(null,n,e,r,i);const o=function(l){if(l.target===t){var u;(u=x.swalCloseEventFinishedCallback)===null||u===void 0||u.call(x),delete x.swalCloseEventFinishedCallback,t.removeEventListener("animationend",o),t.removeEventListener("transitionend",o)}};t.addEventListener("animationend",o),t.addEventListener("transitionend",o)},Wa=(n,t)=>{setTimeout(()=>{var e;typeof t=="function"&&t.bind(n.params)(),(e=x.eventEmitter)===null||e===void 0||e.emit("didClose"),n._destroy&&n._destroy()})},Ke=n=>{let t=z();if(t||new _e,t=z(),!t)return;const e=tn();rs()?bt(Je()):jg(t,n),lt(e),t.setAttribute("data-loading","true"),t.setAttribute("aria-busy","true"),t.focus()},jg=(n,t)=>{const e=$n(),r=tn();!e||!r||(!t&&St(zt())&&(t=zt()),lt(e),t&&(bt(t),r.setAttribute("data-button-to-replace",t.className),e.insertBefore(r,t)),$([n,e],A.loading))},Hg=(n,t)=>{t.input==="select"||t.input==="radio"?Kg(n,t):["text","email","number","tel","textarea"].some(e=>e===t.input)&&(Pi(t.inputValue)||Ri(t.inputValue))&&(Ke(zt()),Qg(n,t))},zg=(n,t)=>{const e=n.getInput();if(!e)return null;switch(t.input){case"checkbox":return qg(e);case"radio":return Gg(e);case"file":return Wg(e);default:return t.inputAutoTrim?e.value.trim():e.value}},qg=n=>n.checked?1:0,Gg=n=>n.checked?n.value:null,Wg=n=>n.files&&n.files.length?n.getAttribute("multiple")!==null?n.files:n.files[0]:null,Kg=(n,t)=>{const e=z();if(!e)return;const r=i=>{t.input==="select"?Xg(e,$r(i),t):t.input==="radio"&&Yg(e,$r(i),t)};Pi(t.inputOptions)||Ri(t.inputOptions)?(Ke(zt()),Fn(t.inputOptions).then(i=>{n.hideLoading(),r(i)})):typeof t.inputOptions=="object"?r(t.inputOptions):ke(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof t.inputOptions}`)},Qg=(n,t)=>{const e=n.getInput();e&&(bt(e),Fn(t.inputValue).then(r=>{e.value=t.input==="number"?`${parseFloat(r)||0}`:`${r}`,lt(e),e.focus(),n.hideLoading()}).catch(r=>{ke(`Error in inputValue promise: ${r}`),e.value="",lt(e),e.focus(),n.hideLoading()}))};function Xg(n,t,e){const r=ne(n,A.select);if(!r)return;const i=(o,l,u)=>{const d=document.createElement("option");d.value=u,Ot(d,l),d.selected=$c(u,e.inputValue),o.appendChild(d)};t.forEach(o=>{const l=o[0],u=o[1];if(Array.isArray(u)){const d=document.createElement("optgroup");d.label=l,d.disabled=!1,r.appendChild(d),u.forEach(p=>i(d,p[1],p[0]))}else i(r,u,l)}),r.focus()}function Yg(n,t,e){const r=ne(n,A.radio);if(!r)return;t.forEach(o=>{const l=o[0],u=o[1],d=document.createElement("input"),p=document.createElement("label");d.type="radio",d.name=A.radio,d.value=l,$c(l,e.inputValue)&&(d.checked=!0);const b=document.createElement("span");Ot(b,u),b.className=A.label,p.appendChild(d),p.appendChild(b),r.appendChild(p)});const i=r.querySelectorAll("input");i.length&&i[0].focus()}const $r=n=>{const t=[];return n instanceof Map?n.forEach((e,r)=>{let i=e;typeof i=="object"&&(i=$r(i)),t.push([r,i])}):Object.keys(n).forEach(e=>{let r=n[e];typeof r=="object"&&(r=$r(r)),t.push([e,r])}),t},$c=(n,t)=>!!t&&t.toString()===n.toString(),Jg=n=>{const t=W.innerParams.get(n);n.disableButtons(),t.input?jc(n,"confirm"):Ui(n,!0)},Zg=n=>{const t=W.innerParams.get(n);n.disableButtons(),t.returnInputValueOnDeny?jc(n,"deny"):Fi(n,!1)},tw=(n,t)=>{n.disableButtons(),t(en.cancel)},jc=(n,t)=>{const e=W.innerParams.get(n);if(!e.input){ke(`The "input" parameter is needed to be set when using returnInputValueOn${Ci(t)}`);return}const r=n.getInput(),i=zg(n,e);e.inputValidator?ew(n,i,t):r&&!r.checkValidity()?(n.enableButtons(),n.showValidationMessage(e.validationMessage||r.validationMessage)):t==="deny"?Fi(n,i):Ui(n,i)},ew=(n,t,e)=>{const r=W.innerParams.get(n);n.disableInput(),Promise.resolve().then(()=>Fn(r.inputValidator(t,r.validationMessage))).then(o=>{n.enableButtons(),n.enableInput(),o?n.showValidationMessage(o):e==="deny"?Fi(n,t):Ui(n,t)})},Fi=(n,t)=>{const e=W.innerParams.get(n||void 0);e.showLoaderOnDeny&&Ke(Ve()),e.preDeny?(n.isAwaitingPromise=!0,Promise.resolve().then(()=>Fn(e.preDeny(t,e.validationMessage))).then(i=>{i===!1?(n.hideLoading(),zn(n)):n.close({isDenied:!0,value:typeof i>"u"?t:i})}).catch(i=>Hc(n||void 0,i))):n.close({isDenied:!0,value:t})},Ka=(n,t)=>{n.close({isConfirmed:!0,value:t})},Hc=(n,t)=>{n.rejectPromise(t)},Ui=(n,t)=>{const e=W.innerParams.get(n||void 0);e.showLoaderOnConfirm&&Ke(),e.preConfirm?(n.resetValidationMessage(),n.isAwaitingPromise=!0,Promise.resolve().then(()=>Fn(e.preConfirm(t,e.validationMessage))).then(i=>{St(es())||i===!1?(n.hideLoading(),zn(n)):Ka(n,typeof i>"u"?t:i)}).catch(i=>Hc(n||void 0,i))):Ka(n,t)};function jr(){const n=W.innerParams.get(this);if(!n)return;const t=W.domCache.get(this);bt(t.loader),rs()?n.icon&&lt(Je()):nw(t),Nt([t.popup,t.actions],A.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.denyButton.disabled=!1,t.cancelButton.disabled=!1}const nw=n=>{const t=n.popup.getElementsByClassName(n.loader.getAttribute("data-button-to-replace"));t.length?lt(t[0],"inline-block"):km()&&bt(n.actions)};function zc(){const n=W.innerParams.get(this),t=W.domCache.get(this);return t?ss(t.popup,n.input):null}function qc(n,t,e){const r=W.domCache.get(n);t.forEach(i=>{r[i].disabled=e})}function Gc(n,t){const e=z();if(!(!e||!n))if(n.type==="radio"){const r=e.querySelectorAll(`[name="${A.radio}"]`);for(let i=0;i<r.length;i++)r[i].disabled=t}else n.disabled=t}function Wc(){qc(this,["confirmButton","denyButton","cancelButton"],!1)}function Kc(){qc(this,["confirmButton","denyButton","cancelButton"],!0)}function Qc(){Gc(this.getInput(),!1)}function Xc(){Gc(this.getInput(),!0)}function Yc(n){const t=W.domCache.get(this),e=W.innerParams.get(this);Ot(t.validationMessage,n),t.validationMessage.className=A["validation-message"],e.customClass&&e.customClass.validationMessage&&$(t.validationMessage,e.customClass.validationMessage),lt(t.validationMessage);const r=this.getInput();r&&(r.setAttribute("aria-invalid","true"),r.setAttribute("aria-describedby",A["validation-message"]),Tc(r),$(r,A.inputerror))}function Jc(){const n=W.domCache.get(this);n.validationMessage&&bt(n.validationMessage);const t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedby"),Nt(t,A.inputerror))}const $e={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},rw=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],sw={allowEnterKey:void 0},iw=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Zc=n=>Object.prototype.hasOwnProperty.call($e,n),tu=n=>rw.indexOf(n)!==-1,eu=n=>sw[n],ow=n=>{Zc(n)||It(`Unknown parameter "${n}"`)},aw=n=>{iw.includes(n)&&It(`The parameter "${n}" is incompatible with toasts`)},lw=n=>{const t=eu(n);t&&_c(n,t)},nu=n=>{n.backdrop===!1&&n.allowOutsideClick&&It('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),n.theme&&!["light","dark","auto","borderless"].includes(n.theme)&&It(`Invalid theme "${n.theme}". Expected "light", "dark", "auto", or "borderless"`);for(const t in n)ow(t),n.toast&&aw(t),lw(t)};function ru(n){const t=Ct(),e=z(),r=W.innerParams.get(this);if(!e||Xt(e,r.hideClass.popup)){It("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const i=cw(n),o=Object.assign({},r,i);nu(o),t.dataset.swal2Theme=o.theme,xc(this,o),W.innerParams.set(this,o),Object.defineProperties(this,{params:{value:Object.assign({},this.params,n),writable:!1,enumerable:!0}})}const cw=n=>{const t={};return Object.keys(n).forEach(e=>{tu(e)?t[e]=n[e]:It(`Invalid parameter to update: ${e}`)}),t};function su(){const n=W.domCache.get(this),t=W.innerParams.get(this);if(!t){iu(this);return}n.popup&&x.swalCloseEventFinishedCallback&&(x.swalCloseEventFinishedCallback(),delete x.swalCloseEventFinishedCallback),typeof t.didDestroy=="function"&&t.didDestroy(),x.eventEmitter.emit("didDestroy"),uw(this)}const uw=n=>{iu(n),delete n.params,delete x.keydownHandler,delete x.keydownTarget,delete x.currentInstance},iu=n=>{n.isAwaitingPromise?(Ms(W,n),n.isAwaitingPromise=!0):(Ms(We,n),Ms(W,n),delete n.isAwaitingPromise,delete n.disableButtons,delete n.enableButtons,delete n.getInput,delete n.disableInput,delete n.enableInput,delete n.hideLoading,delete n.disableLoading,delete n.showValidationMessage,delete n.resetValidationMessage,delete n.close,delete n.closePopup,delete n.closeModal,delete n.closeToast,delete n.rejectPromise,delete n.update,delete n._destroy)},Ms=(n,t)=>{for(const e in n)n[e].delete(t)};var hw=Object.freeze({__proto__:null,_destroy:su,close:re,closeModal:re,closePopup:re,closeToast:re,disableButtons:Kc,disableInput:Xc,disableLoading:jr,enableButtons:Wc,enableInput:Qc,getInput:zc,handleAwaitingPromise:zn,hideLoading:jr,rejectPromise:Uc,resetValidationMessage:Jc,showValidationMessage:Yc,update:ru});const dw=(n,t,e)=>{n.toast?fw(n,t,e):(mw(t),gw(t),ww(n,t,e))},fw=(n,t,e)=>{t.popup.onclick=()=>{n&&(pw(n)||n.timer||n.input)||e(en.close)}},pw=n=>!!(n.showConfirmButton||n.showDenyButton||n.showCancelButton||n.showCloseButton);let Hr=!1;const mw=n=>{n.popup.onmousedown=()=>{n.container.onmouseup=function(t){n.container.onmouseup=()=>{},t.target===n.container&&(Hr=!0)}}},gw=n=>{n.container.onmousedown=t=>{t.target===n.container&&t.preventDefault(),n.popup.onmouseup=function(e){n.popup.onmouseup=()=>{},(e.target===n.popup||e.target instanceof HTMLElement&&n.popup.contains(e.target))&&(Hr=!0)}}},ww=(n,t,e)=>{t.container.onclick=r=>{if(Hr){Hr=!1;return}r.target===t.container&&ts(n.allowOutsideClick)&&e(en.backdrop)}},yw=n=>typeof n=="object"&&n.jquery,Qa=n=>n instanceof Element||yw(n),_w=n=>{const t={};return typeof n[0]=="object"&&!Qa(n[0])?Object.assign(t,n[0]):["title","html","icon"].forEach((e,r)=>{const i=n[r];typeof i=="string"||Qa(i)?t[e]=i:i!==void 0&&ke(`Unexpected type of ${e}! Expected "string" or "Element", got ${typeof i}`)}),t};function vw(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return new this(...t)}function Ew(n){class t extends this{_main(r,i){return super._main(r,Object.assign({},n,i))}}return t}const bw=()=>x.timeout&&x.timeout.getTimerLeft(),ou=()=>{if(x.timeout)return Vm(),x.timeout.stop()},au=()=>{if(x.timeout){const n=x.timeout.start();return Ni(n),n}},Tw=()=>{const n=x.timeout;return n&&(n.running?ou():au())},Aw=n=>{if(x.timeout){const t=x.timeout.increase(n);return Ni(t,!0),t}},Iw=()=>!!(x.timeout&&x.timeout.isRunning());let Xa=!1;const ni={};function Cw(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";ni[n]=this,Xa||(document.body.addEventListener("click",Pw),Xa=!0)}const Pw=n=>{for(let t=n.target;t&&t!==document;t=t.parentNode)for(const e in ni){const r=t.getAttribute(e);if(r){ni[e].fire({template:r});return}}};class Rw{constructor(){this.events={}}_getHandlersByEventName(t){return typeof this.events[t]>"u"&&(this.events[t]=[]),this.events[t]}on(t,e){const r=this._getHandlersByEventName(t);r.includes(e)||r.push(e)}once(t,e){var r=this;const i=function(){r.removeListener(t,i);for(var o=arguments.length,l=new Array(o),u=0;u<o;u++)l[u]=arguments[u];e.apply(r,l)};this.on(t,i)}emit(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];this._getHandlersByEventName(t).forEach(o=>{try{o.apply(this,r)}catch(l){console.error(l)}})}removeListener(t,e){const r=this._getHandlersByEventName(t),i=r.indexOf(e);i>-1&&r.splice(i,1)}removeAllListeners(t){this.events[t]!==void 0&&(this.events[t].length=0)}reset(){this.events={}}}x.eventEmitter=new Rw;const Sw=(n,t)=>{x.eventEmitter.on(n,t)},kw=(n,t)=>{x.eventEmitter.once(n,t)},Vw=(n,t)=>{if(!n){x.eventEmitter.reset();return}t?x.eventEmitter.removeListener(n,t):x.eventEmitter.removeAllListeners(n)};var Dw=Object.freeze({__proto__:null,argsToParams:_w,bindClickHandler:Cw,clickCancel:_g,clickConfirm:Oc,clickDeny:yg,enableLoading:Ke,fire:vw,getActions:$n,getCancelButton:Ze,getCloseButton:Vi,getConfirmButton:zt,getContainer:Ct,getDenyButton:Ve,getFocusableElements:Di,getFooter:bc,getHtmlContainer:Si,getIcon:Je,getIconContent:Im,getImage:Ec,getInputLabel:Cm,getLoader:tn,getPopup:z,getProgressSteps:ki,getTimerLeft:bw,getTimerProgressBar:ns,getTitle:vc,getValidationMessage:es,increaseTimer:Aw,isDeprecatedParameter:eu,isLoading:Rm,isTimerRunning:Iw,isUpdatableParameter:tu,isValidParameter:Zc,isVisible:wg,mixin:Ew,off:Vw,on:Sw,once:kw,resumeTimer:au,showLoading:Ke,stopTimer:ou,toggleTimer:Tw});class xw{constructor(t,e){this.callback=t,this.remaining=e,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(t){const e=this.running;return e&&this.stop(),this.remaining+=t,e&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const lu=["swal-title","swal-html","swal-footer"],Ow=n=>{const t=typeof n.template=="string"?document.querySelector(n.template):n.template;if(!t)return{};const e=t.content;return jw(e),Object.assign(Nw(e),Lw(e),Mw(e),Bw(e),Fw(e),Uw(e),$w(e,lu))},Nw=n=>{const t={};return Array.from(n.querySelectorAll("swal-param")).forEach(r=>{Pe(r,["name","value"]);const i=r.getAttribute("name"),o=r.getAttribute("value");!i||!o||(typeof $e[i]=="boolean"?t[i]=o!=="false":typeof $e[i]=="object"?t[i]=JSON.parse(o):t[i]=o)}),t},Lw=n=>{const t={};return Array.from(n.querySelectorAll("swal-function-param")).forEach(r=>{const i=r.getAttribute("name"),o=r.getAttribute("value");!i||!o||(t[i]=new Function(`return ${o}`)())}),t},Mw=n=>{const t={};return Array.from(n.querySelectorAll("swal-button")).forEach(r=>{Pe(r,["type","color","aria-label"]);const i=r.getAttribute("type");!i||!["confirm","cancel","deny"].includes(i)||(t[`${i}ButtonText`]=r.innerHTML,t[`show${Ci(i)}Button`]=!0,r.hasAttribute("color")&&(t[`${i}ButtonColor`]=r.getAttribute("color")),r.hasAttribute("aria-label")&&(t[`${i}ButtonAriaLabel`]=r.getAttribute("aria-label")))}),t},Bw=n=>{const t={},e=n.querySelector("swal-image");return e&&(Pe(e,["src","width","height","alt"]),e.hasAttribute("src")&&(t.imageUrl=e.getAttribute("src")||void 0),e.hasAttribute("width")&&(t.imageWidth=e.getAttribute("width")||void 0),e.hasAttribute("height")&&(t.imageHeight=e.getAttribute("height")||void 0),e.hasAttribute("alt")&&(t.imageAlt=e.getAttribute("alt")||void 0)),t},Fw=n=>{const t={},e=n.querySelector("swal-icon");return e&&(Pe(e,["type","color"]),e.hasAttribute("type")&&(t.icon=e.getAttribute("type")),e.hasAttribute("color")&&(t.iconColor=e.getAttribute("color")),t.iconHtml=e.innerHTML),t},Uw=n=>{const t={},e=n.querySelector("swal-input");e&&(Pe(e,["type","label","placeholder","value"]),t.input=e.getAttribute("type")||"text",e.hasAttribute("label")&&(t.inputLabel=e.getAttribute("label")),e.hasAttribute("placeholder")&&(t.inputPlaceholder=e.getAttribute("placeholder")),e.hasAttribute("value")&&(t.inputValue=e.getAttribute("value")));const r=Array.from(n.querySelectorAll("swal-input-option"));return r.length&&(t.inputOptions={},r.forEach(i=>{Pe(i,["value"]);const o=i.getAttribute("value");if(!o)return;const l=i.innerHTML;t.inputOptions[o]=l})),t},$w=(n,t)=>{const e={};for(const r in t){const i=t[r],o=n.querySelector(i);o&&(Pe(o,[]),e[i.replace(/^swal-/,"")]=o.innerHTML.trim())}return e},jw=n=>{const t=lu.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(n.children).forEach(e=>{const r=e.tagName.toLowerCase();t.includes(r)||It(`Unrecognized element <${r}>`)})},Pe=(n,t)=>{Array.from(n.attributes).forEach(e=>{t.indexOf(e.name)===-1&&It([`Unrecognized attribute "${e.name}" on <${n.tagName.toLowerCase()}>.`,`${t.length?`Allowed attributes are: ${t.join(", ")}`:"To set the value, use HTML within the element."}`])})},cu=10,Hw=n=>{const t=Ct(),e=z();typeof n.willOpen=="function"&&n.willOpen(e),x.eventEmitter.emit("willOpen",e);const i=window.getComputedStyle(document.body).overflowY;Gw(t,e,n),setTimeout(()=>{zw(t,e)},cu),xi()&&(qw(t,n.scrollbarPadding,i),Pg()),!rs()&&!x.previousActiveElement&&(x.previousActiveElement=document.activeElement),typeof n.didOpen=="function"&&setTimeout(()=>n.didOpen(e)),x.eventEmitter.emit("didOpen",e),Nt(t,A["no-transition"])},zr=n=>{const t=z();if(n.target!==t)return;const e=Ct();t.removeEventListener("animationend",zr),t.removeEventListener("transitionend",zr),e.style.overflowY="auto"},zw=(n,t)=>{Ic(t)?(n.style.overflowY="hidden",t.addEventListener("animationend",zr),t.addEventListener("transitionend",zr)):n.style.overflowY="auto"},qw=(n,t,e)=>{Rg(),t&&e!=="hidden"&&Ng(e),setTimeout(()=>{n.scrollTop=0})},Gw=(n,t,e)=>{$(n,e.showClass.backdrop),e.animation?(t.style.setProperty("opacity","0","important"),lt(t,"grid"),setTimeout(()=>{$(t,e.showClass.popup),t.style.removeProperty("opacity")},cu)):lt(t,"grid"),$([document.documentElement,document.body],A.shown),e.heightAuto&&e.backdrop&&!e.toast&&$([document.documentElement,document.body],A["height-auto"])};var Ya={email:(n,t)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(n)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(n,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(n)?Promise.resolve():Promise.resolve(t||"Invalid URL")};function Ww(n){n.inputValidator||(n.input==="email"&&(n.inputValidator=Ya.email),n.input==="url"&&(n.inputValidator=Ya.url))}function Kw(n){(!n.target||typeof n.target=="string"&&!document.querySelector(n.target)||typeof n.target!="string"&&!n.target.appendChild)&&(It('Target parameter is not valid, defaulting to "body"'),n.target="body")}function Qw(n){Ww(n),n.showLoaderOnConfirm&&!n.preConfirm&&It(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Kw(n),typeof n.title=="string"&&(n.title=n.title.split(`
`).join("<br />")),Fm(n)}let $t;var mr=new WeakMap;class rt{constructor(){if(wm(this,mr,void 0),typeof window>"u")return;$t=this;for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];const i=Object.freeze(this.constructor.argsToParams(e));this.params=i,this.isAwaitingPromise=!1,ym(mr,this,this._main($t.params))}_main(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(nu(Object.assign({},e,t)),x.currentInstance){const o=We.swalPromiseResolve.get(x.currentInstance),{isAwaitingPromise:l}=x.currentInstance;x.currentInstance._destroy(),l||o({isDismissed:!0}),xi()&&Mc()}x.currentInstance=$t;const r=Yw(t,e);Qw(r),Object.freeze(r),x.timeout&&(x.timeout.stop(),delete x.timeout),clearTimeout(x.restoreFocusTimeout);const i=Jw($t);return xc($t,r),W.innerParams.set($t,r),Xw($t,i,r)}then(t){return Ua(mr,this).then(t)}finally(t){return Ua(mr,this).finally(t)}}const Xw=(n,t,e)=>new Promise((r,i)=>{const o=l=>{n.close({isDismissed:!0,dismiss:l})};We.swalPromiseResolve.set(n,r),We.swalPromiseReject.set(n,i),t.confirmButton.onclick=()=>{Jg(n)},t.denyButton.onclick=()=>{Zg(n)},t.cancelButton.onclick=()=>{tw(n,o)},t.closeButton.onclick=()=>{o(en.close)},dw(e,t,o),vg(x,e,o),Hg(n,e),Hw(e),Zw(x,e,o),ty(t,e),setTimeout(()=>{t.container.scrollTop=0})}),Yw=(n,t)=>{const e=Ow(n),r=Object.assign({},$e,t,e,n);return r.showClass=Object.assign({},$e.showClass,r.showClass),r.hideClass=Object.assign({},$e.hideClass,r.hideClass),r.animation===!1&&(r.showClass={backdrop:"swal2-noanimation"},r.hideClass={}),r},Jw=n=>{const t={popup:z(),container:Ct(),actions:$n(),confirmButton:zt(),denyButton:Ve(),cancelButton:Ze(),loader:tn(),closeButton:Vi(),validationMessage:es(),progressSteps:ki()};return W.domCache.set(n,t),t},Zw=(n,t,e)=>{const r=ns();bt(r),t.timer&&(n.timeout=new xw(()=>{e("timer"),delete n.timeout},t.timer),t.timerProgressBar&&(lt(r),Dt(r,t,"timerProgressBar"),setTimeout(()=>{n.timeout&&n.timeout.running&&Ni(t.timer)})))},ty=(n,t)=>{if(!t.toast){if(!ts(t.allowEnterKey)){_c("allowEnterKey"),ry();return}ey(n)||ny(n,t)||ei(-1,1)}},ey=n=>{const t=Array.from(n.popup.querySelectorAll("[autofocus]"));for(const e of t)if(e instanceof HTMLElement&&St(e))return e.focus(),!0;return!1},ny=(n,t)=>t.focusDeny&&St(n.denyButton)?(n.denyButton.focus(),!0):t.focusCancel&&St(n.cancelButton)?(n.cancelButton.focus(),!0):t.focusConfirm&&St(n.confirmButton)?(n.confirmButton.focus(),!0):!1,ry=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const n=new Date,t=localStorage.getItem("swal-initiation");t?(n.getTime()-Date.parse(t))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const e=document.createElement("audio");e.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",e.loop=!0,document.body.appendChild(e),setTimeout(()=>{e.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${n}`)}rt.prototype.disableButtons=Kc;rt.prototype.enableButtons=Wc;rt.prototype.getInput=zc;rt.prototype.disableInput=Xc;rt.prototype.enableInput=Qc;rt.prototype.hideLoading=jr;rt.prototype.disableLoading=jr;rt.prototype.showValidationMessage=Yc;rt.prototype.resetValidationMessage=Jc;rt.prototype.close=re;rt.prototype.closePopup=re;rt.prototype.closeModal=re;rt.prototype.closeToast=re;rt.prototype.rejectPromise=Uc;rt.prototype.update=ru;rt.prototype._destroy=su;Object.assign(rt,Dw);Object.keys(hw).forEach(n=>{rt[n]=function(){return $t&&$t[n]?$t[n](...arguments):null}});rt.DismissReason=en;rt.version="11.17.2";const _e=rt;_e.default=_e;typeof document<"u"&&function(n,t){var e=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(e),e.styleSheet)e.styleSheet.disabled||(e.styleSheet.cssText=t);else try{e.innerHTML=t}catch{e.innerText=t}}(document,':root{--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-footer-border-color: #eee;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-input-background: transparent;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:var(--swal2-border-radius);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:var(--swal2-input-background);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:var(--swal2-background);box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const uu={apiKey:"AIzaSyBO-DC8LlWNHRCEqQbqDK9Cb_zXwkec75I",authDomain:"sonidos-del-odio.firebaseapp.com",projectId:"sonidos-del-odio",storageBucket:"sonidos-del-odio.firebasestorage.app",messagingSenderId:"542182226661",appId:"1:542182226661:web:0fac3aef867aafe67cf20c",measurementId:"G-D8NZX0FFZ7"};console.log("Firebase Config:",uu);const sy=il(uu),iy=em(sy);document.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("suscribete-btn");n?n.addEventListener("click",async()=>{const{value:t}=await _e.fire({title:"Suscríbete a nuestro newsletter",imageUrl:"/img/logoFooter.png",imageWidth:100,imageHeight:100,imageAlt:"Custom image",input:"email",inputPlaceholder:"Escribe tu correo electrónico...",customClass:{confirmButton:"btn-confirm",input:"input-custom",popup:"popup-custom",title:"title-custom"},validationMessage:"Por favor, ingresa un correo electrónico válido",preConfirm:e=>((!e||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))&&_e.showValidationMessage("Por favor, ingresa un correo electrónico válido"),e)});if(t)try{await pm(Zp(iy,"suscriptores"),{email:t,fecha:new Date().toISOString()}),console.log("Email guardado en Firestore:",t),_e.fire({title:`Gracias: ${t}`,text:"Tu suscripción ha sido registrada con éxito.",icon:"success",customClass:{confirmButton:"btn-confirm",popup:"popup-custom",title:"title-custom"}})}catch(e){_e.fire({title:"Error",text:"No se pudo procesar tu suscripción",icon:"error",customClass:{confirmButton:"btn-confirm",popup:"popup-custom",title:"title-custom"}}),console.error("Error detallado:",e)}else console.log("No se proporcionó un email válido")}):console.error("No se encontró el botón con id 'suscribete-btn'")});
