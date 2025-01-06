!function(){try{var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=(new t.Error).stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="a6831173-2713-4df4-9685-b557c4e2d7ab",t._sentryDebugIdIdentifier="sentry-dbid-a6831173-2713-4df4-9685-b557c4e2d7ab")}catch(t){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"bcbc61da9a6bd07b70ee01b7a8b1f2a78cd83e56"},(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();
/**
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
 */
const e=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},n={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(t):this.encodeByteArray(e(t),n)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const s=n[t.charAt(e++)],o=e<t.length?n[t.charAt(e)]:0;++e;const a=e<t.length?n[t.charAt(e)]:64;++e;const c=e<t.length?n[t.charAt(e)]:64;if(++e,null==s||null==o||null==a||null==c)throw new r;const u=s<<2|o>>4;if(i.push(u),64!==a){const t=o<<4&240|a>>2;if(i.push(t),64!==c){const t=a<<6&192|c;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
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
 */class r extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const i=function(t){return function(t){const r=e(t);return n.encodeByteArray(r,!0)}(t).replace(/\./g,"")},s=function(t){try{return n.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
const o=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t.g)return t.g;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,a=()=>{try{return o()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const t=process.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&s(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},c=t=>{var e,n;return null===(n=null===(e=a())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},u=t=>{const e=c(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},l=()=>{var t;return null===(t=a())||void 0===t?void 0:t.config};
/**
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
 */
class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
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
 */function d(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[i(JSON.stringify({alg:"none",type:"JWT"})),i(JSON.stringify(o)),""].join(".")}
/**
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
 */function f(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function p(){return!function(){var e;const n=null===(e=a())||void 0===e?void 0:e.forceEnvironment;if("node"===n)return!0;if("browser"===n)return!1;try{return"[object process]"===Object.prototype.toString.call(t.g.process)}catch(t){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class g extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,g.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,m.prototype.create)}}class m{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(y,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new g(r,o,n)}}const y=/\{\$([^}]+)}/g;
/**
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
 */function v(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(_(n)&&_(s)){if(!v(n,s))return!1}else if(n!==s)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function _(t){return null!==t&&"object"==typeof t}
/**
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
 */
/**
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
 */
function E(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function w(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function b(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
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
 */class T{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=I),void 0===r.error&&(r.error=I),void 0===r.complete&&(r.complete=I);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function I(){}
/**
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
 */
/**
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
 */
function S(t){return t&&t._delegate?t._delegate:t}class A{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
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
 */const k="[DEFAULT]";
/**
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
 */class C{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new h;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:k})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=k){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=k){return this.instances.has(t)}getOptions(t=k){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===k?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t=k){return this.component?this.component.multipleInstances?t:k:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class O{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new C(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */
const R=[];var N;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(N||(N={}));const D={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},P=N.INFO,x={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},L=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=x[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class M{constructor(t){this.name=t,this._logLevel=P,this._logHandler=L,this._userLogHandler=null,R.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in N))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?D[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...t),this._logHandler(this,N.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...t),this._logHandler(this,N.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,N.INFO,...t),this._logHandler(this,N.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,N.WARN,...t),this._logHandler(this,N.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...t),this._logHandler(this,N.ERROR,...t)}}let U,F;const V=new WeakMap,j=new WeakMap,$=new WeakMap,B=new WeakMap,H=new WeakMap;let z={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return j.get(t);if("objectStoreNames"===e)return t.objectStoreNames||$.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return q(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function G(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(F||(F=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(W(this),e),q(V.get(this))}:function(...e){return q(t.apply(W(this),e))}:function(e,...n){const r=t.call(W(this),e,...n);return $.set(r,e.sort?e.sort():[e]),q(r)}}function K(t){return"function"==typeof t?G(t):(t instanceof IDBTransaction&&function(t){if(j.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));j.set(t,e)}(t),e=t,(U||(U=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,z):t);var e}function q(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(q(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&V.set(e,t)})).catch((()=>{})),H.set(e,t),e}(t);if(B.has(t))return B.get(t);const e=K(t);return e!==t&&(B.set(t,e),H.set(e,t)),e}const W=t=>H.get(t);const X=["get","getKey","getAll","getAllKeys","count"],Y=["put","add","delete","clear"],J=new Map;function Q(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(J.get(e))return J.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Y.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!X.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return J.set(e,s),s}z=(t=>({...t,get:(e,n,r)=>Q(e,n)||t.get(e,n,r),has:(e,n)=>!!Q(e,n)||t.has(e,n)}))(z);
/**
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
 */
class Z{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const tt="@firebase/app",et="0.10.16",nt=new M("@firebase/app"),rt="[DEFAULT]",it={[tt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},st=new Map,ot=new Map,at=new Map;function ct(t,e){try{t.container.addComponent(e)}catch(n){nt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ut(t){const e=t.name;if(at.has(e))return nt.debug(`There were multiple attempts to register component ${e}.`),!1;at.set(e,t);for(const e of st.values())ct(e,t);for(const e of ot.values())ct(e,t);return!0}function lt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ht(t){return void 0!==t.settings}
/**
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
 */
const dt=new m("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
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
 */
class ft{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new A("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
/**
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
 */
/**
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
 */
const pt="11.0.2";function gt(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const r=Object.assign({name:rt,automaticDataCollectionEnabled:!1},e),i=r.name;if("string"!=typeof i||!i)throw dt.create("bad-app-name",{appName:String(i)});if(n||(n=l()),!n)throw dt.create("no-options");const s=st.get(i);if(s){if(v(n,s.options)&&v(r,s.config))return s;throw dt.create("duplicate-app",{appName:i})}const o=new O(i);for(const t of at.values())o.addComponent(t);const a=new ft(n,r,o);return st.set(i,a),a}function mt(t=rt){const e=st.get(t);if(!e&&t===rt&&l())return gt();if(!e)throw dt.create("no-app",{appName:t});return e}function yt(t,e,n){var r;let i=null!==(r=it[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void nt.warn(t.join(" "))}ut(new A(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
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
 */
const vt="firebase-heartbeat-store";let _t=null;function Et(){return _t||(_t=function(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=q(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(q(o.result),t.oldVersion,t.newVersion,q(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)try{t.createObjectStore(vt)}catch(t){console.warn(t)}}}).catch((t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})}))),_t}async function wt(t,e){try{const n=(await Et()).transaction(vt,"readwrite"),r=n.objectStore(vt);await r.put(e,bt(t)),await n.done}catch(t){if(t instanceof g)nt.warn(t.message);else{const e=dt.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});nt.warn(e.message)}}}function bt(t){return`${t.name}!${t.options.appId}`}
/**
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
 */class Tt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new St(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=It();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((t=>t.date===r)))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}catch(t){nt.warn(t)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=It(),{heartbeatsToSend:n,unsentEntries:r}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),At(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),At(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),s=i(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return nt.warn(t),""}}}function It(){return(new Date).toISOString().substring(0,10)}class St{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=(await Et()).transaction(vt),n=await e.objectStore(vt).get(bt(t));return await e.done,n}catch(t){if(t instanceof g)nt.warn(t.message);else{const e=dt.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});nt.warn(e.message)}}}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return wt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return wt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function At(t){return i(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */var kt;kt="",ut(new A("platform-logger",(t=>new Z(t)),"PRIVATE")),ut(new A("heartbeat",(t=>new Tt(t)),"PRIVATE")),yt(tt,et,kt),yt(tt,et,"esm2017"),yt("fire-js","");function Ct(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;function Ot(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rt=Ot,Nt=new m("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Dt=new M("@firebase/auth");function Pt(t,...e){Dt.logLevel<=N.ERROR&&Dt.error(`Auth (${pt}): ${t}`,...e)}
/**
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
 */function xt(t,...e){throw Ft(t,...e)}function Lt(t,...e){return Ft(t,...e)}function Mt(t,e,n){const r=Object.assign(Object.assign({},Rt()),{[e]:n});return new m("auth","Firebase",r).create(e,{appName:t.name})}function Ut(t){return Mt(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ft(t,...e){if("string"!=typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Nt.create(t,...e)}function Vt(t,e,...n){if(!t)throw Ft(e,...n)}function jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pt(e),new Error(e)}function $t(t,e){t||jt(e)}
/**
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
 */function Bt(){return"http:"===Ht()||"https:"===Ht()}function Ht(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
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
 */function zt(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Bt()||function(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}()||"connection"in navigator))||navigator.onLine}
/**
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
 */
class Gt{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const Kt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},qt=new
/**
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
 */
class{constructor(t,e){this.shortDelay=t,this.longDelay=e,$t(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return zt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */(3e4,6e4);
/**
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
 */function Wt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xt(t,e,n,r,i={}){return Yt(t,i,(async()=>{let i={},s={};r&&("GET"===e?s=r:i={body:JSON.stringify(r)});const o=E(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:a},i);return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(c.referrerPolicy="no-referrer"),Gt.fetch()(Qt(t,t.config.apiHost,n,o),c)}))}async function Yt(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Kt),e);try{const e=new te(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw ee(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ee(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw ee(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw ee(t,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Mt(t,a,o);xt(t,a)}}catch(e){if(e instanceof g)throw e;xt(t,"network-request-failed",{message:String(e)})}}async function Jt(t,e,n,r,i={}){const s=await Xt(t,e,n,r,i);return"mfaPendingCredential"in s&&xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Qt(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?function(t,e){$t(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}(t.config,i):`${t.config.apiScheme}://${i}`}function Zt(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class te{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(Lt(this.auth,"network-request-failed"))),qt.get())}))}}function ee(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Lt(t,e,r);return i.customData._tokenResponse=n,i}
/**
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
 */function ne(t){return void 0!==t&&void 0!==t.enterprise}class re{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return Zt(e.enforcementState);return null}isProviderEnabled(t){return"ENFORCE"===this.getProviderEnforcementState(t)||"AUDIT"===this.getProviderEnforcementState(t)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}
/**
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
 */async function ie(t,e){return Xt(t,"GET","/v2/recaptchaConfig",Wt(t,e))}
/**
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
 */async function se(t,e){return Xt(t,"POST","/v1/accounts:lookup",e)}
/**
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
 */function oe(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
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
 */function ae(t){return 1e3*Number(t)}function ce(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return Pt("JWT malformed, contained fewer than 3 sections"),null;try{const t=s(n);return t?JSON.parse(t):(Pt("Failed to decode base64 JWT payload"),null)}catch(t){return Pt("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}function ue(t){const e=ce(t);return Vt(e,"internal-error"),Vt(void 0!==e.exp,"internal-error"),Vt(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
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
 */async function le(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof g&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
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
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class he{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class de{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=oe(this.lastLoginAt),this.creationTime=oe(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function fe(t){var e;const n=t.auth,r=await t.getIdToken(),i=await le(t,se(n,{idToken:r}));Vt(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?pe(s.providerUserInfo):[],a=(c=t.providerData,u=o,[...c.filter((t=>!u.some((e=>e.providerId===t.providerId)))),...u]);var c,u;const l=t.isAnonymous,h=!(t.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new de(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}function pe(t){return t.map((t=>{var{providerId:e}=t,n=Ct(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
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
 */
/**
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
 */
class ge{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Vt(t.idToken,"internal-error"),Vt(void 0!==t.idToken,"internal-error"),Vt(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):ue(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){Vt(0!==t.length,"internal-error");const e=ue(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return e||!this.accessToken||this.isExpired?(Vt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(t,e){const n=await Yt(t,{},(async()=>{const n=E({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,s=Qt(t,r,"/v1/token",`key=${i}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Gt.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new ge;return n&&(Vt("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(Vt("string"==typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(Vt("number"==typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ge,this.toJSON())}_performRefresh(){return jt("not implemented")}}
/**
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
 */function me(t,e){Vt("string"==typeof t||void 0===t,"internal-error",{appName:e})}class ye{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=Ct(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new he(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new de(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await le(this,this.stsTokenManager.getToken(this.auth,t));return Vt(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=S(t),r=await n.getIdToken(e),i=ce(r);Vt(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:oe(ae(i.auth_time)),issuedAtTime:oe(ae(i.iat)),expirationTime:oe(ae(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=S(t);await fe(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(Vt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new ye(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){Vt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await fe(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ht(this.auth.app))return Promise.reject(Ut(this.auth));const t=await this.getIdToken();return await le(this,async function(t,e){return Xt(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:_,isAnonymous:E,providerData:w,stsTokenManager:b}=e;Vt(v&&b,t,"internal-error");const T=ge.fromJSON(this.name,b);Vt("string"==typeof v,t,"internal-error"),me(l,t.name),me(h,t.name),Vt("boolean"==typeof _,t,"internal-error"),Vt("boolean"==typeof E,t,"internal-error"),me(d,t.name),me(f,t.name),me(p,t.name),me(g,t.name),me(m,t.name),me(y,t.name);const I=new ye({uid:v,auth:t,email:h,emailVerified:_,displayName:l,isAnonymous:E,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return w&&Array.isArray(w)&&(I.providerData=w.map((t=>Object.assign({},t)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(t,e,n=!1){const r=new ge;r.updateFromServerResponse(e);const i=new ye({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await fe(i),i}static async _fromGetAccountInfoResponse(t,e,n){const r=e.users[0];Vt(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?pe(r.providerUserInfo):[],s=!(r.email&&r.passwordHash||(null==i?void 0:i.length)),o=new ge;o.updateFromIdToken(n);const a=new ye({uid:r.localId,auth:t,stsTokenManager:o,isAnonymous:s}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new de(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==i?void 0:i.length))};return Object.assign(a,c),a}}
/**
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
 */const ve=new Map;function _e(t){$t(t instanceof Function,"Expected a class definition");let e=ve.get(t);return e?($t(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ve.set(t,e),e)}
/**
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
 */class Ee{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Ee.type="NONE";const we=Ee;
/**
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
 */function be(t,e,n){return`firebase:${t}:${e}:${n}`}class Te{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=be(this.userKey,r.apiKey,i),this.fullPersistenceKey=be("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ye._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new Te(_e(we),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||_e(we);const s=be(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const r=ye._fromJSON(t,e);n!==i&&(o=r),i=n;break}}catch(t){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(t){}}))),new Te(i,t,n)):new Te(i,t,n)}}
/**
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
 */function Ie(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Se(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(function(t=f()){return/firefox\//i.test(t)}(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ke(e))return"Blackberry";if(Ce(e))return"Webos";if(function(t=f()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}(e))return"Safari";if((e.includes("chrome/")||function(t=f()){return/crios\//i.test(t)}(e))&&!e.includes("edge/"))return"Chrome";if(Ae(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Se(t=f()){return/iemobile/i.test(t)}function Ae(t=f()){return/android/i.test(t)}function ke(t=f()){return/blackberry/i.test(t)}function Ce(t=f()){return/webos/i.test(t)}
/**
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
 */
function Oe(t,e=[]){let n;switch(t){case"Browser":n=Ie(f());break;case"Worker":n=`${Ie(f())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${pt}/${r}`}
/**
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
 */class Re{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{n(t(e))}catch(t){r(t)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}}
/**
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
 */class Ne{constructor(t){var e,n,r,i;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(e=s.minPasswordLength)&&void 0!==e?e:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=t.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=t.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=null===(e=a.meetsMinPasswordLength)||void 0===e||e),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){let n;this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);for(let r=0;r<t.length;r++)n=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}
/**
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
 */class De{constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xe(this),this.idTokenSubscription=new xe(this),this.beforeStateQueue=new Re(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=_e(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Te.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUserFromIdToken(t){try{const e=await se(this,{idToken:t}),n=await ye._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var e;if(ht(this.app)){const t=this.app.settings.authIdToken;return t?new Promise((e=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(t).then(e,e)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(t){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Vt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await fe(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(ht(this.app))return Promise.reject(Ut(this));const e=t?S(t):null;return e&&Vt(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&Vt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return ht(this.app)?Promise.reject(Ut(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return ht(this.app)?Promise.reject(Ut(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(_e(t))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await async function(t,e={}){return Xt(t,"GET","/v2/passwordPolicy",Wt(t,e))}
/**
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
 */(this),e=new Ne(t);null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new m("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}async revokeAccessToken(t){if(this.currentUser){const e={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(e.tenantId=this.tenantId),await async function(t,e){return Xt(t,"POST","/v2/accounts:revokeToken",Wt(t,e))}(this,e)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&_e(t)||this._popupRedirectResolver;Vt(e,this,"argument-error"),this.redirectPersistenceManager=await Te.create(this,[_e(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"==typeof e?e:e.next.bind(e);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(Vt(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"==typeof e){const i=t.addObserver(e,n,r);return()=>{s=!0,i()}}{const n=t.addObserver(e);return()=>{s=!0,n()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Vt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Oe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null==e?void 0:e.error)&&function(t,...e){Dt.logLevel<=N.WARN&&Dt.warn(`Auth (${pt}): ${t}`,...e)}(`Error while retrieving App Check token: ${e.error}`),null==e?void 0:e.token}}function Pe(t){return S(t)}class xe{constructor(t){this.auth=t,this.observer=null,this.addObserver=function(t,e){const n=new T(t,e);return n.subscribe.bind(n)}((t=>this.observer=t))}get next(){return Vt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */let Le={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};class Me{constructor(){this.enterprise=new Ue}ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}class Ue{ready(t){t()}execute(t,e){return Promise.resolve("token")}render(t,e){return""}}const Fe="NO_RECAPTCHA";class Ve{constructor(t){this.type="recaptcha-enterprise",this.auth=Pe(t)}async verify(t="verify",e=!1){function n(e,n,r){const i=window.grecaptcha;ne(i)?i.enterprise.ready((()=>{i.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n(Fe)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){return(new Me).execute("siteKey",{action:"verify"})}return new Promise(((t,r)=>{(async function(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{ie(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new re(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))})(this.auth).then((i=>{if(!e&&ne(window.grecaptcha))n(i,t,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let e=Le.recaptchaEnterpriseScript;0!==e.length&&(e+=i),function(t){return Le.loadJS(t)}(e).then((()=>{n(i,t,r)})).catch((t=>{r(t)}))}})).catch((t=>{r(t)}))}))}}async function je(t,e,n,r=!1,i=!1){const s=new Ve(t);let o;if(i)o=Fe;else try{o=await s.verify(n)}catch(t){o=await s.verify(n,!0)}const a=Object.assign({},e);if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const t=a.phoneEnrollmentInfo.phoneNumber,e=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:t,recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const t=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function $e(t,e,n,r,i){var s,o;if("EMAIL_PASSWORD_PROVIDER"===i){if(null===(s=t._getRecaptchaConfig())||void 0===s?void 0:s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await je(t,e,n,"getOobCode"===n);return r(t,i)}return r(t,e).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await je(t,e,n,"getOobCode"===n);return r(t,i)}return Promise.reject(i)}))}if("PHONE_PROVIDER"===i){if(null===(o=t._getRecaptchaConfig())||void 0===o?void 0:o.isProviderEnabled("PHONE_PROVIDER")){const i=await je(t,e,n);return r(t,i).catch((async i=>{var s;if("AUDIT"===(null===(s=t._getRecaptchaConfig())||void 0===s?void 0:s.getProviderEnforcementState("PHONE_PROVIDER"))&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const i=await je(t,e,n,!1,!0);return r(t,i)}return Promise.reject(i)}))}{const i=await je(t,e,n,!1,!0);return r(t,i)}}return Promise.reject(i+" provider is not supported.")}function Be(t,e,n){const r=Pe(t);Vt(r._canInitEmulator,r,"emulator-config-failed"),Vt(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=He(e),{host:o,port:a}=function(t){const e=He(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:ze(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:ze(e)}}}(e),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
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
 */()}function He(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ze(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class Ge{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return jt("not implemented")}_getIdTokenResponse(t){return jt("not implemented")}_linkToIdToken(t,e){return jt("not implemented")}_getReauthenticationResolver(t){return jt("not implemented")}}
/**
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
 */async function Ke(t,e){return Xt(t,"POST","/v1/accounts:signUp",e)}
/**
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
 */
async function qe(t,e){return Jt(t,"POST","/v1/accounts:signInWithPassword",Wt(t,e))}
/**
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
 */
class We extends Ge{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new We(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new We(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return $e(t,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",qe,"EMAIL_PASSWORD_PROVIDER");case"emailLink":
/**
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
 */
return async function(t,e){return Jt(t,"POST","/v1/accounts:signInWithEmailLink",Wt(t,e))}(t,{email:this._email,oobCode:this._password});default:xt(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return $e(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ke,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return async function(t,e){return Jt(t,"POST","/v1/accounts:signInWithEmailLink",Wt(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:xt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
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
 */async function Xe(t,e){return Jt(t,"POST","/v1/accounts:signInWithIdp",Wt(t,e))}
/**
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
 */class Ye extends Ge{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Ye(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):xt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=Ct(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Ye(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){return Xe(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Xe(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Xe(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=E(e)}return t}}
/**
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
 */class Je{constructor(t){var e,n,r,i,s,o;const a=w(b(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,l=
/**
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
 */
function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);Vt(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(t){const e=function(t){const e=w(b(t)).link,n=e?w(b(e)).deep_link_id:null,r=w(b(t)).deep_link_id;return(r?w(b(r)).link:null)||r||n||e||t}(t);try{return new Je(e)}catch(t){return null}}}
/**
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
 */
class Qe{constructor(){this.providerId=Qe.PROVIDER_ID}static credential(t,e){return We._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=Je.parseLink(e);return Vt(n,"argument-error"),We._fromEmailAndCode(t,n.code,n.tenantId)}}Qe.PROVIDER_ID="password",Qe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Qe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class Ze{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class tn extends Ze{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class en extends tn{constructor(){super("facebook.com")}static credential(t){return Ye._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return en.credentialFromTaggedObject(t)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return en.credential(t.oauthAccessToken)}catch(t){return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com",en.PROVIDER_ID="facebook.com";
/**
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
 */
class nn extends tn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Ye._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return nn.credentialFromTaggedObject(t)}static credentialFromError(t){return nn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return nn.credential(e,n)}catch(t){return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com",nn.PROVIDER_ID="google.com";
/**
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
 */
class rn extends tn{constructor(){super("github.com")}static credential(t){return Ye._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return rn.credentialFromTaggedObject(t)}static credentialFromError(t){return rn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return rn.credential(t.oauthAccessToken)}catch(t){return null}}}rn.GITHUB_SIGN_IN_METHOD="github.com",rn.PROVIDER_ID="github.com";
/**
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
 */
class sn extends tn{constructor(){super("twitter.com")}static credential(t,e){return Ye._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return sn.credentialFromTaggedObject(t)}static credentialFromError(t){return sn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return sn.credential(e,n)}catch(t){return null}}}
/**
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
 */
async function on(t,e){return Jt(t,"POST","/v1/accounts:signUp",Wt(t,e))}
/**
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
 */sn.TWITTER_SIGN_IN_METHOD="twitter.com",sn.PROVIDER_ID="twitter.com";class an{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await ye._fromIdTokenResponse(t,n,r),s=cn(n);return new an({user:i,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=cn(n);return new an({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function cn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
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
 */async function un(t){var e;if(ht(t.app))return Promise.reject(Ut(t));const n=Pe(t);if(await n._initializationPromise,null===(e=n.currentUser)||void 0===e?void 0:e.isAnonymous)return new an({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await on(n,{returnSecureToken:!0}),i=await an._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
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
 */new WeakMap;const ln="__sak";
/**
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
 */
/**
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
 */
class hn{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new hn(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hn.receivers=[];
/**
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
 */
class dn{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=
/**
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
 */
function(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
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
 */function fn(){return window}
/**
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
 */
function pn(){return void 0!==fn().WorkerGlobalScope&&"function"==typeof fn().importScripts}
/**
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
 */
const gn="firebaseLocalStorageDb",mn="firebaseLocalStorage",yn="fbase_key";class vn{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function _n(t,e){return t.transaction([mn],e?"readwrite":"readonly").objectStore(mn)}function En(){const t=indexedDB.open(gn,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(mn,{keyPath:yn})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(mn)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(gn);return new vn(t).toPromise()}(),e(await En()))}))}))}async function wn(t,e,n){const r=_n(t,!0).put({[yn]:e,value:n});return new vn(r).toPromise()}function bn(t,e){const n=_n(t,!0).delete(e);return new vn(n).toPromise()}class Tn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await En()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hn._getInstance(pn()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new dn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await En();return await wn(t,ln,"1"),await bn(t,ln),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>wn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=_n(t,!1).get(e),r=await new vn(n).toPromise();return void 0===r?null:r.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>bn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=_n(t,!1).getAll();return new vn(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;if(0!==t.length)for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Tn.type="LOCAL";const In=Tn;
/**
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
 */var Sn,An="@firebase/auth",kn="1.8.1";
/**
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
 */
class Cn{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){Vt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */Sn="WebExtension",ut(new A("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;Vt(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:Sn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oe(Sn)},c=new De(n,r,i,a);return function(t,e){const n=(null==e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_e);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null==e?void 0:e.popupRedirectResolver)}(c,e),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),ut(new A("auth-internal",(t=>(t=>new Cn(t))(Pe(t.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),yt(An,kn,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Sn)),yt(An,kn,"esm2017");
/**
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
 */
yt("firebase","11.0.2","app");var On,Rn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Nn={};(function(){var t;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(t,e,n){n||(n=0);var r=Array(16);if("string"==typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(e^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function r(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}!function(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}(e,(function(){this.blockSize=-1})),e.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var r=e-this.blockSize,i=this.B,s=this.h,o=0;o<e;){if(0==s)for(;o<=r;)n(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(i[s++]=t.charCodeAt(o++),s==this.blockSize){n(this,i),s=0;break}}else for(;o<e;)if(i[s++]=t[o++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=e},e.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var i={};function s(t){return-128<=t&&128>t?function(t,e){var n=i;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new r([0|t],0>t?-1:0)})):new r([0|t],0>t?-1:0)}function o(t){if(isNaN(t)||!isFinite(t))return a;if(0>t)return d(o(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=4294967296;return new r(e,0)}var a=s(0),c=s(1),u=s(16777216);function l(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function h(t){return-1==t.h}function d(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new r(n,~t.h).add(c)}function f(t,e){return t.add(d(e))}function p(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function g(t,e){this.g=t,this.h=e}function m(t,e){if(l(e))throw Error("division by zero");if(l(t))return new g(a,a);if(h(t))return e=m(d(t),e),new g(d(e.g),d(e.h));if(h(e))return e=m(t,d(e)),new g(d(e.g),e.h);if(30<t.g.length){if(h(t)||h(e))throw Error("slowDivide_ only works with positive integers.");for(var n=c,r=e;0>=r.l(t);)n=y(n),r=y(r);var i=v(n,1),s=v(r,1);for(r=v(r,2),n=v(n,2);!l(r);){var u=s.add(r);0>=u.l(t)&&(i=i.add(n),s=u),r=v(r,1),n=v(n,1)}return e=f(t,i.j(e)),new g(i,e)}for(i=a;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),u=(s=o(n)).j(e);h(u)||0<u.l(t);)u=(s=o(n-=r)).j(e);l(s)&&(s=c),i=i.add(s),t=f(t,u)}return new g(i,t)}function y(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.i(i)<<1|t.i(i-1)>>>31;return new r(n,t.h)}function v(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],o=0;o<i;o++)s[o]=0<e?t.i(o+n)>>>e|t.i(o+n+1)<<32-e:t.i(o+n);return new r(s,t.h)}(t=r.prototype).m=function(){if(h(this))return-d(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.i(n);t+=(0<=r?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(l(this))return"0";if(h(this))return"-"+d(this).toString(t);for(var e=o(Math.pow(t,6)),n=this,r="";;){var i=m(n,e).g,s=((0<(n=f(n,i.j(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(l(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return h(t=f(this,t))?-1:l(t)?0:1},t.abs=function(){return h(this)?d(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var o=i+(65535&this.i(s))+(65535&t.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(t.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new r(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(l(this)||l(t))return a;if(h(this))return h(t)?d(this).j(d(t)):d(d(this).j(t));if(h(t))return d(this.j(d(t)));if(0>this.l(u)&&0>t.l(u))return o(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var c=this.i(i)>>>16,f=65535&this.i(i),g=t.i(s)>>>16,m=65535&t.i(s);n[2*i+2*s]+=f*m,p(n,2*i+2*s),n[2*i+2*s+1]+=c*m,p(n,2*i+2*s+1),n[2*i+2*s+1]+=f*g,p(n,2*i+2*s+1),n[2*i+2*s+2]+=c*g,p(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new r(n,0)},t.A=function(t){return m(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)&t.i(i);return new r(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)|t.i(i);return new r(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)^t.i(i);return new r(n,this.h^t.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,Nn.Md5=e,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return d(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=o(Math.pow(n,8)),i=a,s=0;s<e.length;s+=8){var c=Math.min(8,e.length-s),u=parseInt(e.substring(s,s+c),n);8>c?(c=o(Math.pow(n,c)),i=i.j(c).add(o(u))):i=(i=i.j(r)).add(o(u))}return i},On=Nn.Integer=r}).apply(void 0!==Rn?Rn:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Dn,Pn,xn,Ln,Mn,Un,Fn,Vn,jn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},$n={};(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};var n=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof jn&&jn];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(t,r){if(r)t:{var i=n;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in i))break t;i=i[o]}(r=r(s=i[t=t[t.length-1]]))!=s&&null!=r&&e(i,t,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",(function(t){return t||function(){return function(t,e){t instanceof String&&(t+="");var n=0,r=!1,i={next:function(){if(!r&&n<t.length){var i=n++;return{value:e(i,t[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,(function(t,e){return e}))}}));
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var r=r||{},i=this||self;function s(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function o(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function a(t,e,n){return t.call.apply(t.bind,arguments)}function c(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function u(t,e,n){return(u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:c).apply(null,arguments)}function l(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function h(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function d(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function f(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(s(n)){const e=t.length||0,r=n.length||0;t.length=e+r;for(let i=0;i<r;i++)t[e+i]=n[i]}else t.push(n)}}function p(t){return/^[\s\xa0]*$/.test(t)}function g(){var t=i.navigator;return t&&(t=t.userAgent)?t:""}function m(t){return m[" "](t),t}m[" "]=function(){};var y=!(-1==g().indexOf("Gecko")||-1!=g().toLowerCase().indexOf("webkit")&&-1==g().indexOf("Edge")||-1!=g().indexOf("Trident")||-1!=g().indexOf("MSIE")||-1!=g().indexOf("Edge"));function v(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function _(t){const e={};for(const n in t)e[n]=t[n];return e}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e],r)t[n]=r[n];for(let e=0;e<E.length;e++)n=E[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function b(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function T(t){i.setTimeout((()=>{throw t}),0)}function I(){var t=O;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var S=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new A),(t=>t.reset()));class A{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let k,C=!1,O=new class{constructor(){this.h=this.g=null}add(t,e){const n=S.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},R=()=>{const t=i.Promise.resolve(void 0);k=()=>{t.then(N)}};var N=()=>{for(var t;t=I();){try{t.h.call(t.g)}catch(t){T(t)}var e=S;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}C=!1};function D(){this.s=this.s,this.C=this.C}function P(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}D.prototype.s=!1,D.prototype.ma=function(){this.s||(this.s=!0,this.N())},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},P.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};i.addEventListener("test",t,e),i.removeEventListener("test",t,e)}catch(t){}return t}();function L(t,e){if(P.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(y){t:{try{m(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:M[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&L.aa.h.call(this)}}h(L,P);var M={2:"touch",3:"pen",4:"mouse"};L.prototype.h=function(){L.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),F=0;function V(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++F,this.da=this.fa=!1}function j(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function $(t){this.src=t,this.g={},this.h=0}function B(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=Array.prototype.indexOf.call(i,e,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(j(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function H(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.da&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}$.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=H(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new V(e,this.src,s,!!r,i)).fa=n,t.push(e)),e};var z="closure_lm_"+(1e6*Math.random()|0),G={};function K(t,e,n,r,i){if(r&&r.once)return W(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)K(t,e[s],n,r,i);return null}return n=et(n),t&&t[U]?t.K(e,n,o(r)?!!r.capture:!!r,i):q(t,e,n,!1,r,i)}function q(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var a=o(i)?!!i.capture:!!i,c=Z(t);if(c||(t[z]=c=new $(t)),(n=c.add(e,n,r,a,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=Q;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)x||(i=a),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(J(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function W(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)W(t,e[s],n,r,i);return null}return n=et(n),t&&t[U]?t.L(e,n,o(r)?!!r.capture:!!r,i):q(t,e,n,!0,r,i)}function X(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)X(t,e[s],n,r,i);else r=o(r)?!!r.capture:!!r,n=et(n),t&&t[U]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=H(s=t.g[e],n,r,i))&&(j(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Z(t))&&(e=t.g[e.toString()],t=-1,e&&(t=H(e,n,r,i)),(n=-1<t?e[t]:null)&&Y(n))}function Y(t){if("number"!=typeof t&&t&&!t.da){var e=t.src;if(e&&e[U])B(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(J(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Z(e))?(B(n,t),0==n.h&&(n.src=null,e[z]=null)):j(t)}}}function J(t){return t in G?G[t]:G[t]="on"+t}function Q(t,e){if(t.da)t=!0;else{e=new L(e,this);var n=t.listener,r=t.ha||t.src;t.fa&&Y(t),t=n.call(r,e)}return t}function Z(t){return(t=t[z])instanceof $?t:null}var tt="__closure_events_fn_"+(1e9*Math.random()>>>0);function et(t){return"function"==typeof t?t:(t[tt]||(t[tt]=function(e){return t.handleEvent(e)}),t[tt])}function nt(){D.call(this),this.i=new $(this),this.M=this,this.F=null}function rt(t,e){var n,r=t.F;if(r)for(n=[];r;r=r.F)n.push(r);if(t=t.M,r=e.type||e,"string"==typeof e)e=new P(e,t);else if(e instanceof P)e.target=e.target||t;else{var i=e;w(e=new P(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=it(o,r,!0,e)&&i}if(i=it(o=e.g=t,r,!0,e)&&i,i=it(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=it(o=e.g=n[s],r,!1,e)&&i}function it(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&B(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}function st(t,e,n){if("function"==typeof t)n&&(t=u(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=u(t.handleEvent,t)}return 2147483647<Number(e)?-1:i.setTimeout(t,e||0)}function ot(t){t.g=st((()=>{t.g=null,t.i&&(t.i=!1,ot(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}h(nt,D),nt.prototype[U]=!0,nt.prototype.removeEventListener=function(t,e,n,r){X(this,t,e,n,r)},nt.prototype.N=function(){if(nt.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)j(n[r]);delete e.g[t],e.h--}}this.F=null},nt.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},nt.prototype.L=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class at extends D{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:ot(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ct(t){D.call(this),this.h=t,this.g={}}h(ct,D);var ut=[];function lt(t){v(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Y(t)}),t),t.g={}}ct.prototype.N=function(){ct.aa.N.call(this),lt(this)},ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ht=i.JSON.stringify,dt=i.JSON.parse;function ft(){}function pt(t){return t.h||(t.h=t.i())}function gt(){}ft.prototype.h=null;var mt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function yt(){P.call(this,"d")}function vt(){P.call(this,"c")}h(yt,P),h(vt,P);var _t={},Et=null;function wt(){return Et=Et||new nt}function bt(t){P.call(this,_t.La,t)}function Tt(t){const e=wt();rt(e,new bt(e))}function It(t,e){P.call(this,_t.STAT_EVENT,t),this.stat=e}function St(t){const e=wt();rt(e,new It(e,t))}function At(t,e){P.call(this,_t.Ma,t),this.size=e}function kt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return i.setTimeout((function(){t()}),e)}function Ct(){this.g=!0}function Ot(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return ht(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}_t.La="serverreachability",h(bt,P),_t.STAT_EVENT="statevent",h(It,P),_t.Ma="timingevent",h(At,P),Ct.prototype.xa=function(){this.g=!1},Ct.prototype.info=function(){};var Rt,Nt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Dt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Pt(){}function xt(t,e,n,r){this.j=t,this.i=e,this.l=n,this.R=r||1,this.U=new ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Lt}function Lt(){this.i=null,this.g="",this.h=!1}h(Pt,ft),Pt.prototype.g=function(){return new XMLHttpRequest},Pt.prototype.i=function(){return{}},Rt=new Pt;var Mt={},Ut={};function Ft(t,e,n){t.L=1,t.v=ue(ie(e)),t.m=n,t.P=!0,Vt(t,null)}function Vt(t,e){t.F=Date.now(),Bt(t),t.A=ie(t.v);var n=t.A,r=t.R;Array.isArray(r)||(r=[String(r)]),Te(n.i,"t",r),t.C=0,n=t.j.J,t.h=new Lt,t.g=hn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new at(u(t.Y,t,t.g),t.O)),e=t.U,n=t.g,r=t.ca;var i="readystatechange";Array.isArray(i)||(i&&(ut[0]=i.toString()),i=ut);for(var s=0;s<i.length;s++){var o=K(n,i[s],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?_(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Tt(),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.i,t.u,t.A,t.l,t.R,t.m)}function jt(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function $t(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Ut:(n=Number(e.substring(n,r)),isNaN(n)?Mt:(r+=1)+n>e.length?Ut:(e=e.slice(r,r+n),t.C=r+n,e))}function Bt(t){t.S=Date.now()+t.I,Ht(t,t.I)}function Ht(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=kt(u(t.ba,t),e)}function zt(t){t.B&&(i.clearTimeout(t.B),t.B=null)}function Gt(t){0==t.j.G||t.J||on(t.j,t)}function Kt(t){zt(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,lt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function qt(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||Jt(n.h,t)))if(!t.K&&Jt(n.h,t)&&3==n.G){try{var r=n.Da.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;sn(n),We(n)}en(n),St(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=kt(u(n.Za,n),6e3));if(1>=Yt(n.h)&&n.ca){try{n.ca()}catch(t){}n.ca=void 0}}else cn(n,11)}else if((t.K||n.g==t)&&sn(n),!p(e))for(i=n.Da.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const e=u[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Qt(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.ya=t,ce(r.I,r.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=t;if((r=n).qa=ln(r,r.J?r.ia:null,r.W),o.K){Zt(r.h,o);var a=o,c=r.L;c&&(a.I=c),a.B&&(zt(a),Bt(a)),r.g=o}else tn(r);0<n.i.length&&Ye(n)}else"stop"!=u[0]&&"close"!=u[0]||cn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?cn(n,7):qe(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Tt()}catch(t){}}xt.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==He(t)?e.j():this.Y(t)},xt.prototype.Y=function(t){try{if(t==this.g)t:{const d=He(this.g);var e=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||ze(this.g)))){this.J||4!=d||7==e||Tt(),zt(this);var n=this.g.Z();this.X=n;e:if(jt(this)){var r=ze(this.g);t="";var s=r.length,o=4==He(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Kt(this),Gt(this);var a="";break e}this.h.i=new i.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:!(o&&e==s-1)});r.length=0,this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(c)){var l=c;break e}}l=null}if(!(n=l)){this.o=!1,this.s=3,St(12),Kt(this),Gt(this);break t}Ot(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qt(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<a.length;){if(t=$t(this,a),t==Ut){4==d&&(this.s=4,St(14),n=!1),Ot(this.i,this.l,null,"[Incomplete Response]");break}if(t==Mt){this.s=4,St(15),Ot(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}Ot(this.i,this.l,t,null),qt(this,t)}if(jt(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=a.length||this.h.h||(this.s=1,St(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),nn(h),h.M=!0,St(11))}}else Ot(this.i,this.l,a,"[Invalid Chunked Response]"),Kt(this),Gt(this)}else Ot(this.i,this.l,a,null),qt(this,a);4==d&&Kt(this),this.o&&!this.J&&(4==d?on(this.j,this):(this.o=!1,Bt(this)))}else(function(t){const e={};t=(t.g&&2<=He(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(p(t[r]))continue;var n=b(t[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Kt(this),Gt(this)}}}catch(t){}},xt.prototype.cancel=function(){this.J=!0,Kt(this)},xt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.i,this.A),2!=this.L&&(Tt(),St(17)),Kt(this),this.s=2,Gt(this)):Ht(this,this.S-t)};function Wt(t){this.l=t||10,i.PerformanceNavigationTiming?t=0<(t=i.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xt(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Yt(t){return t.h?1:t.g?t.g.size:0}function Jt(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Qt(t,e){t.g?t.g.add(e):t.h=e}function Zt(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function te(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return d(t.i)}function ee(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(s(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(s(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(s(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}Wt.prototype.cancel=function(){if(this.i=te(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var ne=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function re(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof re){this.h=t.h,se(this,t.j),this.o=t.o,this.g=t.g,oe(this,t.s),this.l=t.l;var e=t.i,n=new _e;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ae(this,n),this.m=t.m}else t&&(e=String(t).match(ne))?(this.h=!1,se(this,e[1]||"",!0),this.o=le(e[2]||""),this.g=le(e[3]||"",!0),oe(this,e[4]),this.l=le(e[5]||"",!0),ae(this,e[6]||"",!0),this.m=le(e[7]||"")):(this.h=!1,this.i=new _e(null,this.h))}function ie(t){return new re(t)}function se(t,e,n){t.j=n?le(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function oe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function ae(t,e,n){e instanceof _e?(t.i=e,function(t,e){e&&!t.j&&(Ee(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(we(this,e),Te(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=he(e,ye)),t.i=new _e(e,t.h))}function ce(t,e,n){t.i.set(e,n)}function ue(t){return ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function le(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function he(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,de),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function de(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}re.prototype.toString=function(){var t=[],e=this.j;e&&t.push(he(e,pe,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(he(e,pe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(he(n,"/"==n.charAt(0)?me:ge,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",he(n,ve)),t.join("")};var fe,pe=/[#\/\?@]/g,ge=/[#\?:]/g,me=/[#\?]/g,ye=/[#\?@]/g,ve=/#/g;function _e(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ee(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function we(t,e){Ee(t),e=Ie(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function be(t,e){return Ee(t),e=Ie(t,e),t.g.has(e)}function Te(t,e,n){we(t,e),0<n.length&&(t.i=null,t.g.set(Ie(t,e),d(n)),t.h+=n.length)}function Ie(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Se(t,e,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(t){}}function Ae(){this.g=new class{stringify(t){return i.JSON.stringify(t,void 0)}parse(t){return i.JSON.parse(t,void 0)}}}function ke(t,e,n){const r=n||"";try{ee(t,(function(t,n){let i=t;o(t)&&(i=ht(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function Ce(t){this.l=t.Ub||null,this.j=t.eb||!1}function Oe(t,e){nt.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Re(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function Ne(t){t.readyState=4,t.l=null,t.j=null,t.v=null,De(t)}function De(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function Pe(t){let e="";return v(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function xe(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Pe(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):ce(t,e,n))}function Le(t){nt.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(t=_e.prototype).add=function(t,e){Ee(this),this.i=null,t=Ie(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){Ee(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},t.na=function(){Ee(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},t.V=function(t){Ee(this);let e=[];if("string"==typeof t)be(this,t)&&(e=e.concat(this.g.get(Ie(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return Ee(this),this.i=null,be(this,t=Ie(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t&&0<(t=this.V(t)).length?String(t[0]):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")},h(Ce,ft),Ce.prototype.g=function(){return new Oe(this.l,this.j)},Ce.prototype.i=(fe={},function(){return fe}),h(Oe,nt),(t=Oe.prototype).open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,De(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||i).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ne(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,De(this)),this.g&&(this.readyState=3,De(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Re(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ne(this):De(this),3==this.readyState&&Re(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,Ne(this))},t.Qa=function(t){this.g&&(this.response=t,Ne(this))},t.ga=function(){this.g&&Ne(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Oe.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),h(Le,nt);var Me=/^https?$/i,Ue=["POST","PUT"];function Fe(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,Ve(t),$e(t)}function Ve(t){t.A||(t.A=!0,rt(t,"complete"),rt(t,"error"))}function je(t){if(t.h&&void 0!==r&&(!t.v[1]||4!=He(t)||2!=t.Z()))if(t.u&&4==He(t))st(t.Ea,0,t);else if(rt(t,"readystatechange"),4==He(t)){t.h=!1;try{const r=t.Z();t:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===r){var o=String(t.D).match(ne)[1]||null;!o&&i.self&&i.self.location&&(o=i.self.location.protocol.slice(0,-1)),s=!Me.test(o?o.toLowerCase():"")}n=s}if(n)rt(t,"complete"),rt(t,"success");else{t.m=6;try{var a=2<He(t)?t.g.statusText:""}catch(t){a=""}t.l=a+" ["+t.Z()+"]",Ve(t)}}finally{$e(t)}}}function $e(t,e){if(t.g){Be(t);const n=t.g,r=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||rt(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function Be(t){t.I&&(i.clearTimeout(t.I),t.I=null)}function He(t){return t.g?t.g.readyState:0}function ze(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ge(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ke(t){this.Aa=0,this.i=[],this.j=new Ct,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ge("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ge("baseRetryDelayMs",5e3,t),this.cb=Ge("retryDelaySeedMs",1e4,t),this.Wa=Ge("forwardChannelMaxRetries",2,t),this.wa=Ge("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Wt(t&&t.concurrentRequestLimit),this.Da=new Ae,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function qe(t){if(Xe(t),3==t.G){var e=t.U++,n=ie(t.I);if(ce(n,"SID",t.K),ce(n,"RID",e),ce(n,"TYPE","terminate"),Qe(t,n),(e=new xt(t,t.j,e)).L=2,e.v=ue(ie(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&i.Image&&((new Image).src=e.v,n=!0),n||(e.g=hn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),Bt(e)}un(t)}function We(t){t.g&&(nn(t),t.g.cancel(),t.g=null)}function Xe(t){We(t),t.u&&(i.clearTimeout(t.u),t.u=null),sn(t),t.h.cancel(),t.s&&("number"==typeof t.s&&i.clearTimeout(t.s),t.s=null)}function Ye(t){if(!Xt(t.h)&&!t.s){t.s=!0;var e=t.Ga;k||R(),C||(k(),C=!0),O.add(e,t),t.B=0}}function Je(t,e){var n;n=e?e.l:t.U++;const r=ie(t.I);ce(r,"SID",t.K),ce(r,"RID",n),ce(r,"AID",t.T),Qe(t,r),t.m&&t.o&&xe(r,t.m,t.o),n=new xt(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=Ze(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Qt(t.h,n),Ft(n,r,e)}function Qe(t,e){t.H&&v(t.H,(function(t,n){ce(e,n,t)})),t.l&&ee({},(function(t,n){ce(e,n,t)}))}function Ze(t,e,n){n=Math.min(t.i.length,n);var r=t.l?u(t.l.Na,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=e,0>n)e=Math.max(0,i[o].g-100),s=!1;else try{ke(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function tn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;k||R(),C||(k(),C=!0),O.add(e,t),t.v=0}}function en(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=kt(u(t.Fa,t),an(t,t.v)),t.v++,!0)}function nn(t){null!=t.A&&(i.clearTimeout(t.A),t.A=null)}function rn(t){t.g=new xt(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=ie(t.qa);ce(e,"RID","rpc"),ce(e,"SID",t.K),ce(e,"AID",t.T),ce(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&ce(e,"TO",t.ja),ce(e,"TYPE","xmlhttp"),Qe(t,e),t.m&&t.o&&xe(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=ue(ie(e)),n.m=null,n.P=!0,Vt(n,t)}function sn(t){null!=t.C&&(i.clearTimeout(t.C),t.C=null)}function on(t,e){var n=null;if(t.g==e){sn(t),nn(t),t.g=null;var r=2}else{if(!Jt(t.h,e))return;n=e.D,Zt(t.h,e),r=1}if(0!=t.G)if(e.o)if(1==r){n=e.m?e.m.length:0,e=Date.now()-e.F;var i=t.B;rt(r=wt(),new At(r,n)),Ye(t)}else tn(t);else if(3==(i=e.s)||0==i&&0<e.X||!(1==r&&function(t,e){return!(Yt(t.h)>=t.h.j-(t.s?1:0)||(t.s?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa)||(t.s=kt(u(t.Ga,t,e),an(t,t.B)),t.B++,0)))}(t,e)||2==r&&en(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:cn(t,5);break;case 4:cn(t,10);break;case 3:cn(t,6);break;default:cn(t,2)}}function an(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function cn(t,e){if(t.j.info("Error code "+e),2==e){var n=u(t.fb,t),r=t.Xa;const e=!r;r=new re(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||se(r,"https"),ue(r),e?function(t,e){const n=new Ct;if(i.Image){const r=new Image;r.onload=l(Se,n,"TestLoadImage: loaded",!0,e,r),r.onerror=l(Se,n,"TestLoadImage: error",!1,e,r),r.onabort=l(Se,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=l(Se,n,"TestLoadImage: timeout",!1,e,r),i.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(r.toString(),n):function(t,e){new Ct;const n=new AbortController,r=setTimeout((()=>{n.abort(),Se(0,0,!1,e)}),1e4);fetch(t,{signal:n.signal}).then((t=>{clearTimeout(r),t.ok?Se(0,0,!0,e):Se(0,0,!1,e)})).catch((()=>{clearTimeout(r),Se(0,0,!1,e)}))}(r.toString(),n)}else St(2);t.G=0,t.l&&t.l.sa(e),un(t),Xe(t)}function un(t){if(t.G=0,t.ka=[],t.l){const e=te(t.h);0==e.length&&0==t.i.length||(f(t.ka,e),f(t.ka,t.i),t.h.i.length=0,d(t.i),t.i.length=0),t.l.ra()}}function ln(t,e,n){var r=n instanceof re?ie(n):new re(n);if(""!=r.g)e&&(r.g=e+"."+r.g),oe(r,r.s);else{var s=i.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var o=new re(null);r&&se(o,r),e&&(o.g=e),s&&oe(o,s),n&&(o.l=n),r=o}return n=t.D,e=t.ya,n&&e&&ce(r,n,e),ce(r,"VER",t.la),Qe(t,r),r}function hn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Ca&&!t.pa?new Le(new Ce({eb:n})):new Le(t.pa)).Ha(t.J),e}function dn(){}function fn(){}function pn(t,e){nt.call(this),this.g=new Ke(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!p(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!p(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new yn(this)}function gn(t){yt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function mn(){vt.call(this),this.status=1}function yn(t){this.g=t}(t=Le.prototype).Ha=function(t){this.J=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Rt.g(),this.v=this.o?pt(this.o):pt(Rt),this.g.onreadystatechange=u(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(t){return void Fe(this,t)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=i.FormData&&t instanceof i.FormData,!(0<=Array.prototype.indexOf.call(Ue,e,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Be(this),this.u=!0,this.g.send(t),this.u=!1}catch(t){Fe(this,t)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,rt(this,"complete"),rt(this,"abort"),$e(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$e(this,!0)),Le.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?je(this):this.bb())},t.bb=function(){je(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<He(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),dt(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=Ke.prototype).la=8,t.G=1,t.connect=function(t,e,n,r){St(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=ln(this,null,this.W),Ye(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new xt(this,this.j,t);let s=this.o;if(this.S&&(s?(s=_(s),w(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Ze(this,i,e),ce(n=ie(this.I),"RID",t),ce(n,"CVER",22),this.D&&ce(n,"X-HTTP-Session-Id",this.D),Qe(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Pe(s)))+"&"+e:this.m&&xe(n,this.m,s)),Qt(this.h,i),this.Ua&&ce(n,"TYPE","init"),this.P?(ce(n,"$req",e),ce(n,"SID","null"),i.T=!0,Ft(i,n,null)):Ft(i,n,e),this.G=2}}else 3==this.G&&(t?Je(this,t):0==this.i.length||Xt(this.h)||Je(this))},t.Fa=function(){if(this.u=null,rn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=kt(u(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),We(this),rn(this))},t.Za=function(){null!=this.C&&(this.C=null,We(this),en(this),St(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=dn.prototype).ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},fn.prototype.g=function(t,e){return new pn(t,e)},h(pn,nt),pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pn.prototype.close=function(){qe(this.g)},pn.prototype.o=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.u&&((n={}).__data__=ht(t),t=n);e.i.push(new class{constructor(t,e){this.g=t,this.map=e}}(e.Ya++,t)),3==e.G&&Ye(e)},pn.prototype.N=function(){this.g.l=null,delete this.j,qe(this.g),delete this.g,pn.aa.N.call(this)},h(gn,yt),h(mn,vt),h(yn,dn),yn.prototype.ua=function(){rt(this.g,"a")},yn.prototype.ta=function(t){rt(this.g,new gn(t))},yn.prototype.sa=function(t){rt(this.g,new mn)},yn.prototype.ra=function(){rt(this.g,"b")},fn.prototype.createWebChannel=fn.prototype.g,pn.prototype.send=pn.prototype.o,pn.prototype.open=pn.prototype.m,pn.prototype.close=pn.prototype.close,Vn=$n.createWebChannelTransport=function(){return new fn},Fn=$n.getStatEventTarget=function(){return wt()},Un=$n.Event=_t,Mn=$n.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Nt.NO_ERROR=0,Nt.TIMEOUT=8,Nt.HTTP_ERROR=6,Ln=$n.ErrorCode=Nt,Dt.COMPLETE="complete",xn=$n.EventType=Dt,gt.EventType=mt,mt.OPEN="a",mt.CLOSE="b",mt.ERROR="c",mt.MESSAGE="d",nt.prototype.listen=nt.prototype.K,Pn=$n.WebChannel=gt,$n.FetchXmlHttpFactory=Ce,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,Dn=$n.XhrIo=Le}).apply(void 0!==jn?jn:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const Bn="@firebase/firestore";
/**
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
 */class Hn{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Hn.UNAUTHENTICATED=new Hn(null),Hn.GOOGLE_CREDENTIALS=new Hn("google-credentials-uid"),Hn.FIRST_PARTY=new Hn("first-party-uid"),Hn.MOCK_USER=new Hn("mock-user");
/**
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
 */
let zn="11.0.2";
/**
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
 */const Gn=new M("@firebase/firestore");function Kn(){return Gn.logLevel}function qn(t,...e){if(Gn.logLevel<=N.DEBUG){const n=e.map(Yn);Gn.debug(`Firestore (${zn}): ${t}`,...n)}}function Wn(t,...e){if(Gn.logLevel<=N.ERROR){const n=e.map(Yn);Gn.error(`Firestore (${zn}): ${t}`,...n)}}function Xn(t,...e){if(Gn.logLevel<=N.WARN){const n=e.map(Yn);Gn.warn(`Firestore (${zn}): ${t}`,...n)}}function Yn(t){if("string"==typeof t)return t;try{
/**
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
 */
return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
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
 */function Jn(t="Unexpected state"){const e=`FIRESTORE (${zn}) INTERNAL ASSERTION FAILED: `+t;throw Wn(e),new Error(e)}function Qn(t,e){t||Jn()}function Zn(t,e){return t}
/**
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
 */const tr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class er extends g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class nr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class rr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ir{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Hn.UNAUTHENTICATED)))}shutdown(){}}class sr{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class or{constructor(t){this.t=t,this.currentUser=Hn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Qn(void 0===this.o);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new nr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nr,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{qn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(qn("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nr)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(qn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Qn("string"==typeof e.accessToken),new rr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Qn(null===t||"string"==typeof t),new Hn(t)}}class ar{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Hn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class cr{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new ar(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Hn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ur{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lr{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){Qn(void 0===this.o);const n=t=>{null!=t.error&&qn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,qn("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{qn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):qn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Qn("string"==typeof t.token),this.R=t.token,new ur(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function hr(t,e){return t<e?-1:t>e?1:0}function dr(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
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
 */
class fr{static now(){return fr.fromMillis(Date.now())}static fromDate(t){return fr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new fr(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new er(tr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new er(tr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new er(tr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new er(tr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?hr(this.nanoseconds,t.nanoseconds):hr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class pr{static fromTimestamp(t){return new pr(t)}static min(){return new pr(new fr(0,0))}static max(){return new pr(new fr(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class gr{constructor(t,e,n){void 0===e?e=0:e>t.length&&Jn(),void 0===n?n=t.length-e:n>t.length-e&&Jn(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===gr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof gr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class mr extends gr{construct(t,e,n){return new mr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new er(tr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new mr(e)}static emptyPath(){return new mr([])}}const yr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vr extends gr{construct(t,e,n){return new vr(t,e,n)}static isValidIdentifier(t){return yr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new vr(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new er(tr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new er(tr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new er(tr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new er(tr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new vr(e)}static emptyPath(){return new vr([])}}
/**
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
 */class _r{constructor(t){this.path=t}static fromPath(t){return new _r(mr.fromString(t))}static fromName(t){return new _r(mr.fromString(t).popFirst(5))}static empty(){return new _r(mr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===mr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return mr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new _r(new mr(t.slice()))}}
/**
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
 */class Er{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}Er.UNKNOWN_ID=-1;function wr(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=pr.fromTimestamp(1e9===r?new fr(n+1,0):new fr(n,r));return new Tr(i,_r.empty(),e)}function br(t){return new Tr(t.readTime,t.key,-1)}class Tr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Tr(pr.min(),_r.empty(),-1)}static max(){return new Tr(pr.max(),_r.empty(),-1)}}function Ir(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=_r.comparator(t.documentKey,e.documentKey),0!==n?n:hr(t.largestBatchId,e.largestBatchId))}
/**
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
 */class Sr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
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
 */
/**
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
 */
class Ar{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Jn(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ar(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ar?e:Ar.resolve(e)}catch(t){return Ar.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ar.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ar.reject(e)}static resolve(t){return new Ar(((e,n)=>{e(t)}))}static reject(t){return new Ar(((e,n)=>{n(t)}))}static waitFor(t){return new Ar(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Ar.resolve(!1);for(const n of t)e=e.next((t=>t?Ar.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Ar(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new Ar(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
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
 */function kr(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Cr(t){return"IndexedDbTransactionError"===t.name}
/**
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
 */
class Or{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ie(t),this.se=t=>e.writeSequenceNumber(t))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}function Rr(t){return null==t}function Nr(t){return 0===t&&1/t==-1/0}Or.oe=-1;const Dr=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Pr=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],xr=Pr,Lr=[...xr,"indexConfiguration","indexState","indexEntries"];
/**
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
 */
/**
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
 */
function Mr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ur(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Fr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
 */class Vr{constructor(t,e){this.comparator=t,this.root=e||$r.EMPTY}insert(t,e){return new Vr(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,$r.BLACK,null,null))}remove(t){return new Vr(this.comparator,this.root.remove(t,this.comparator).copy(null,null,$r.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new jr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new jr(this.root,t,this.comparator,!1)}getReverseIterator(){return new jr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new jr(this.root,t,this.comparator,!0)}}class jr{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class $r{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:$r.RED,this.left=null!=r?r:$r.EMPTY,this.right=null!=i?i:$r.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new $r(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return $r.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return $r.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,$r.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,$r.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Jn();if(this.right.isRed())throw Jn();const t=this.left.check();if(t!==this.right.check())throw Jn();return t+(this.isRed()?0:1)}}$r.EMPTY=null,$r.RED=!0,$r.BLACK=!1,$r.EMPTY=new class{constructor(){this.size=0}get key(){throw Jn()}get value(){throw Jn()}get color(){throw Jn()}get left(){throw Jn()}get right(){throw Jn()}copy(t,e,n,r,i){return this}insert(t,e,n){return new $r(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class Br{constructor(t){this.comparator=t,this.data=new Vr(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Hr(this.data.getIterator())}getIteratorFrom(t){return new Hr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Br))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Br(this.comparator);return e.data=t,e}}class Hr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class zr{constructor(t){this.fields=t,t.sort(vr.comparator)}static empty(){return new zr([])}unionWith(t){let e=new Br(vr.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new zr(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return dr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
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
 */class Gr extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */
/**
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
 */
class Kr{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Gr("Invalid base64 string: "+t):t}}(t);return new Kr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Kr(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return hr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Kr.EMPTY_BYTE_STRING=new Kr("");const qr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wr(t){if(Qn(!!t),"string"==typeof t){let e=0;const n=qr.exec(t);if(Qn(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xr(t.seconds),nanos:Xr(t.nanos)}}function Xr(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Yr(t){return"string"==typeof t?Kr.fromBase64String(t):Kr.fromUint8Array(t)}
/**
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
 */function Jr(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Qr(t){const e=t.mapValue.fields.__previous_value__;return Jr(e)?Qr(e):e}function Zr(t){const e=Wr(t.mapValue.fields.__local_write_time__.timestampValue);return new fr(e.seconds,e.nanos)}
/**
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
 */class ti{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ti("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof ti&&t.projectId===this.projectId&&t.database===this.database}}
/**
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
 */const ei={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ni(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jr(t)?4:gi(t)?9007199254740991:fi(t)?10:11:Jn()}function ri(t,e){if(t===e)return!0;const n=ni(t);if(n!==ni(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zr(t).isEqual(Zr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Wr(t.timestampValue),r=Wr(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Yr(t.bytesValue).isEqual(Yr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Xr(t.geoPointValue.latitude)===Xr(e.geoPointValue.latitude)&&Xr(t.geoPointValue.longitude)===Xr(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Xr(t.integerValue)===Xr(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Xr(t.doubleValue),r=Xr(e.doubleValue);return n===r?Nr(n)===Nr(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return dr(t.arrayValue.values||[],e.arrayValue.values||[],ri);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Mr(n)!==Mr(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!ri(n[t],r[t])))return!1;return!0}(t,e);default:return Jn()}}function ii(t,e){return void 0!==(t.values||[]).find((t=>ri(t,e)))}function si(t,e){if(t===e)return 0;const n=ni(t),r=ni(e);if(n!==r)return hr(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return hr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Xr(t.integerValue||t.doubleValue),r=Xr(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return oi(t.timestampValue,e.timestampValue);case 4:return oi(Zr(t),Zr(e));case 5:return hr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Yr(t),r=Yr(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=hr(n[t],r[t]);if(0!==e)return e}return hr(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=hr(Xr(t.latitude),Xr(e.latitude));return 0!==n?n:hr(Xr(t.longitude),Xr(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ai(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,r,i,s;const o=t.fields||{},a=e.fields||{},c=null===(n=o.value)||void 0===n?void 0:n.arrayValue,u=null===(r=a.value)||void 0===r?void 0:r.arrayValue,l=hr((null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==l?l:ai(c,u)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===ei.mapValue&&e===ei.mapValue)return 0;if(t===ei.mapValue)return 1;if(e===ei.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=hr(r[t],s[t]);if(0!==e)return e;const o=si(n[r[t]],i[s[t]]);if(0!==o)return o}return hr(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Jn()}}function oi(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return hr(t,e);const n=Wr(t),r=Wr(e),i=hr(n.seconds,r.seconds);return 0!==i?i:hr(n.nanos,r.nanos)}function ai(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=si(n[t],r[t]);if(e)return e}return hr(n.length,r.length)}function ci(t){return ui(t)}function ui(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Wr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Yr(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return _r.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=ui(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${ui(t.fields[i])}`;return n+"}"}(t.mapValue):Jn()}function li(t){return!!t&&"integerValue"in t}function hi(t){return!!t&&"arrayValue"in t}function di(t){return!!t&&"mapValue"in t}function fi(t){var e,n;return"__vector__"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function pi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ur(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=pi(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function gi(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
class mi{constructor(t){this.value=t}static empty(){return new mi({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!di(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=pi(e)}setAll(t){let e=vr.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=pi(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());di(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ri(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];di(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Ur(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new mi(pi(this.value))}}
/**
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
 */
class yi{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new yi(t,0,pr.min(),pr.min(),pr.min(),mi.empty(),0)}static newFoundDocument(t,e,n,r){return new yi(t,1,e,pr.min(),n,r,0)}static newNoDocument(t,e){return new yi(t,2,e,pr.min(),pr.min(),mi.empty(),0)}static newUnknownDocument(t,e){return new yi(t,3,e,pr.min(),pr.min(),mi.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(pr.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=mi.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=mi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pr.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof yi&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new yi(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class vi{constructor(t,e){this.position=t,this.inclusive=e}}function _i(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?_r.comparator(_r.fromName(o.referenceValue),n.key):si(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ei(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ri(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class wi{constructor(t,e="asc"){this.field=t,this.dir=e}}function bi(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
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
 */class Ti{}class Ii extends Ti{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Di(t,e,n):"array-contains"===e?new Mi(t,n):"in"===e?new Ui(t,n):"not-in"===e?new Fi(t,n):"array-contains-any"===e?new Vi(t,n):new Ii(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Pi(t,n):new xi(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(si(e,this.value)):null!==e&&ni(this.value)===ni(e)&&this.matchesComparison(si(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Jn()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Si extends Ti{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Si(t,e)}matches(t){return Ai(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ai(t){return"and"===t.op}function ki(t){return Ci(t)&&Ai(t)}function Ci(t){for(const e of t.filters)if(e instanceof Si)return!1;return!0}function Oi(t){if(t instanceof Ii)return t.field.canonicalString()+t.op.toString()+ci(t.value);if(ki(t))return t.filters.map((t=>Oi(t))).join(",");{const e=t.filters.map((t=>Oi(t))).join(",");return`${t.op}(${e})`}}function Ri(t,e){return t instanceof Ii?function(t,e){return e instanceof Ii&&t.op===e.op&&t.field.isEqual(e.field)&&ri(t.value,e.value)}(t,e):t instanceof Si?function(t,e){return e instanceof Si&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&Ri(n,e.filters[r])),!0)}(t,e):void Jn()}function Ni(t){return t instanceof Ii?function(t){return`${t.field.canonicalString()} ${t.op} ${ci(t.value)}`}(t):t instanceof Si?function(t){return t.op.toString()+" {"+t.getFilters().map(Ni).join(" ,")+"}"}(t):"Filter"}class Di extends Ii{constructor(t,e,n){super(t,e,n),this.key=_r.fromName(n.referenceValue)}matches(t){const e=_r.comparator(t.key,this.key);return this.matchesComparison(e)}}class Pi extends Ii{constructor(t,e){super(t,"in",e),this.keys=Li("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class xi extends Ii{constructor(t,e){super(t,"not-in",e),this.keys=Li("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Li(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>_r.fromName(t.referenceValue)))}class Mi extends Ii{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return hi(e)&&ii(e.arrayValue,this.value)}}class Ui extends Ii{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ii(this.value.arrayValue,e)}}class Fi extends Ii{constructor(t,e){super(t,"not-in",e)}matches(t){if(ii(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ii(this.value.arrayValue,e)}}class Vi extends Ii{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!hi(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>ii(this.value.arrayValue,t)))}}
/**
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
 */class ji{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ue=null}}function $i(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ji(t,e,n,r,i,s,o)}function Bi(t){const e=Zn(t);if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Oi(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Rr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ci(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ci(t))).join(",")),e.ue=t}return e.ue}function Hi(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bi(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ri(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ei(t.startAt,e.startAt)&&Ei(t.endAt,e.endAt)}
/**
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
 */
class zi{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Gi(t,e,n,r,i,s,o,a){return new zi(t,e,n,r,i,s,o,a)}function Ki(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function qi(t){return null!==t.collectionGroup}function Wi(t){const e=Zn(t);if(null===e.ce){e.ce=[];const t=new Set;for(const n of e.explicitOrderBy)e.ce.push(n),t.add(n.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new Br(vr.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new wi(r,n))})),t.has(vr.keyField().canonicalString())||e.ce.push(new wi(vr.keyField(),n))}return e.ce}function Xi(t){const e=Zn(t);return e.le||(e.le=Yi(e,Wi(t))),e.le}function Yi(t,e){if("F"===t.limitType)return $i(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new wi(t.field,e)}));const n=t.endAt?new vi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vi(t.startAt.position,t.startAt.inclusive):null;return $i(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ji(t,e,n){return new zi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qi(t,e){return Hi(Xi(t),Xi(e))&&t.limitType===e.limitType}function Zi(t){return`${Bi(Xi(t))}|lt:${t.limitType}`}function ts(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Ni(t))).join(", ")}]`),Rr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ci(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ci(t))).join(",")),`Target(${e})`}(Xi(t))}; limitType=${t.limitType})`}function es(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):_r.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Wi(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=_i(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Wi(t),e))&&!(t.endAt&&!function(t,e,n){const r=_i(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Wi(t),e))}(t,e)}function ns(t){return(e,n)=>{let r=!1;for(const i of Wi(t)){const t=rs(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function rs(t,e,n){const r=t.field.isKeyField()?_r.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?si(r,i):Jn()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Jn()}}
/**
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
 */class is{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Ur(this.inner,((e,n)=>{for(const[e,r]of n)t(e,r)}))}isEmpty(){return Fr(this.inner)}size(){return this.innerSize}}
/**
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
 */const ss=new Vr(_r.comparator);function os(){return ss}const as=new Vr(_r.comparator);function cs(...t){let e=as;for(const n of t)e=e.insert(n.key,n);return e}function us(t){let e=as;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ls(){return ds()}function hs(){return ds()}function ds(){return new is((t=>t.toString()),((t,e)=>t.isEqual(e)))}new Vr(_r.comparator);const fs=new Br(_r.comparator);function ps(...t){let e=fs;for(const n of t)e=e.add(n);return e}const gs=new Br(hr);function ms(){return gs}
/**
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
 */function ys(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nr(e)?"-0":e}}function vs(t){return{integerValue:""+t}}
/**
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
 */class _s{constructor(){this._=void 0}}function Es(t,e,n){return t instanceof Ts?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Jr(e)&&(e=Qr(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Is?Ss(t,e):t instanceof As?ks(t,e):function(t,e){const n=bs(t,e),r=Os(n)+Os(t.Pe);return li(n)&&li(t.Pe)?vs(r):ys(t.serializer,r)}(t,e)}function ws(t,e,n){return t instanceof Is?Ss(t,e):t instanceof As?ks(t,e):n}function bs(t,e){return t instanceof Cs?function(t){return li(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class Ts extends _s{}class Is extends _s{constructor(t){super(),this.elements=t}}function Ss(t,e){const n=Rs(e);for(const e of t.elements)n.some((t=>ri(t,e)))||n.push(e);return{arrayValue:{values:n}}}class As extends _s{constructor(t){super(),this.elements=t}}function ks(t,e){let n=Rs(e);for(const e of t.elements)n=n.filter((t=>!ri(t,e)));return{arrayValue:{values:n}}}class Cs extends _s{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Os(t){return Xr(t.integerValue||t.doubleValue)}function Rs(t){return hi(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
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
 */class Ns{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ns}static exists(t){return new Ns(void 0,t)}static updateTime(t){return new Ns(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ds(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ps{}function xs(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Hs(t.key,Ns.none()):new Fs(t.key,t.data,Ns.none());{const n=t.data,r=mi.empty();let i=new Br(vr.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Vs(t.key,r,new zr(i.toArray()),Ns.none())}}function Ls(t,e,n){t instanceof Fs?function(t,e,n){const r=t.value.clone(),i=$s(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Vs?function(t,e,n){if(!Ds(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=$s(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(js(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Ms(t,e,n,r){return t instanceof Fs?function(t,e,n,r){if(!Ds(t.precondition,e))return n;const i=t.value.clone(),s=Bs(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vs?function(t,e,n,r){if(!Ds(t.precondition,e))return n;const i=Bs(t.fieldTransforms,r,e),s=e.data;return s.setAll(js(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return Ds(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Us(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&dr(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Is&&e instanceof Is||t instanceof As&&e instanceof As?dr(t.elements,e.elements,ri):t instanceof Cs&&e instanceof Cs?ri(t.Pe,e.Pe):t instanceof Ts&&e instanceof Ts}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fs extends Ps{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Vs extends Ps{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function js(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function $s(t,e,n){const r=new Map;Qn(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,ws(o,a,n[i]))}return r}function Bs(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Es(t,s,e))}return r}class Hs extends Ps{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */
class zs{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&Ls(r,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ms(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ms(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=hs();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=xs(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(pr.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),ps())}isEqual(t){return this.batchId===t.batchId&&dr(this.mutations,t.mutations,((t,e)=>Us(t,e)))&&dr(this.baseMutations,t.baseMutations,((t,e)=>Us(t,e)))}}
/**
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
 */
class Gs{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */
/**
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
 */
var Ks,qs;function Ws(t){if(void 0===t)return Wn("GRPC error has no .code"),tr.UNKNOWN;switch(t){case Ks.OK:return tr.OK;case Ks.CANCELLED:return tr.CANCELLED;case Ks.UNKNOWN:return tr.UNKNOWN;case Ks.DEADLINE_EXCEEDED:return tr.DEADLINE_EXCEEDED;case Ks.RESOURCE_EXHAUSTED:return tr.RESOURCE_EXHAUSTED;case Ks.INTERNAL:return tr.INTERNAL;case Ks.UNAVAILABLE:return tr.UNAVAILABLE;case Ks.UNAUTHENTICATED:return tr.UNAUTHENTICATED;case Ks.INVALID_ARGUMENT:return tr.INVALID_ARGUMENT;case Ks.NOT_FOUND:return tr.NOT_FOUND;case Ks.ALREADY_EXISTS:return tr.ALREADY_EXISTS;case Ks.PERMISSION_DENIED:return tr.PERMISSION_DENIED;case Ks.FAILED_PRECONDITION:return tr.FAILED_PRECONDITION;case Ks.ABORTED:return tr.ABORTED;case Ks.OUT_OF_RANGE:return tr.OUT_OF_RANGE;case Ks.UNIMPLEMENTED:return tr.UNIMPLEMENTED;case Ks.DATA_LOSS:return tr.DATA_LOSS;default:return Jn()}}(qs=Ks||(Ks={}))[qs.OK=0]="OK",qs[qs.CANCELLED=1]="CANCELLED",qs[qs.UNKNOWN=2]="UNKNOWN",qs[qs.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qs[qs.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qs[qs.NOT_FOUND=5]="NOT_FOUND",qs[qs.ALREADY_EXISTS=6]="ALREADY_EXISTS",qs[qs.PERMISSION_DENIED=7]="PERMISSION_DENIED",qs[qs.UNAUTHENTICATED=16]="UNAUTHENTICATED",qs[qs.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qs[qs.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qs[qs.ABORTED=10]="ABORTED",qs[qs.OUT_OF_RANGE=11]="OUT_OF_RANGE",qs[qs.UNIMPLEMENTED=12]="UNIMPLEMENTED",qs[qs.INTERNAL=13]="INTERNAL",qs[qs.UNAVAILABLE=14]="UNAVAILABLE",qs[qs.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
new On([4294967295,4294967295],0);class Xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
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
 */class Ys{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Js(t){return Qn(!!t),pr.fromTimestamp(function(t){const e=Wr(t);return new fr(e.seconds,e.nanos)}(t))}function Qs(t,e){const n=function(t){return new mr(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function Zs(t){const e=mr.fromString(t);return Qn(so(e)),e}function to(t){const e=Zs(t);return 4===e.length?mr.emptyPath():eo(e)}function eo(t){return Qn(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function no(t){let e=to(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Qn(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=ro(t);return e instanceof Si&&ki(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new wi(io(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Rr(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new vi(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new vi(n,e)}(n.endAt)),Gi(e,i,o,s,a,"F",c,u)}function ro(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=io(t.unaryFilter.field);return Ii.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=io(t.unaryFilter.field);return Ii.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=io(t.unaryFilter.field);return Ii.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=io(t.unaryFilter.field);return Ii.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Jn()}}(t):void 0!==t.fieldFilter?function(t){return Ii.create(io(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Jn()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Si.create(t.compositeFilter.filters.map((t=>ro(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Jn()}}(t.compositeFilter.op))}(t):Jn()}function io(t){return vr.fromServerFormat(t.fieldPath)}function so(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
 */
/**
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
 */class oo{constructor(t){this.ht=t}}function ao(t){const e=no({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ji(e,e.limit,"L"):e}
/**
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
 */
class co{constructor(){}Et(t,e){this.dt(t,e),e.At()}dt(t,e){if("nullValue"in t)this.Rt(e,5);else if("booleanValue"in t)this.Rt(e,10),e.Vt(t.booleanValue?1:0);else if("integerValue"in t)this.Rt(e,15),e.Vt(Xr(t.integerValue));else if("doubleValue"in t){const n=Xr(t.doubleValue);isNaN(n)?this.Rt(e,13):(this.Rt(e,15),Nr(n)?e.Vt(0):e.Vt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Rt(e,20),"string"==typeof n&&(n=Wr(n)),e.ft(`${n.seconds||""}`),e.Vt(n.nanos||0)}else if("stringValue"in t)this.gt(t.stringValue,e),this.yt(e);else if("bytesValue"in t)this.Rt(e,30),e.wt(Yr(t.bytesValue)),this.yt(e);else if("referenceValue"in t)this.St(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Rt(e,45),e.Vt(n.latitude||0),e.Vt(n.longitude||0)}else"mapValue"in t?gi(t)?this.Rt(e,Number.MAX_SAFE_INTEGER):fi(t)?this.bt(t.mapValue,e):(this.Dt(t.mapValue,e),this.yt(e)):"arrayValue"in t?(this.vt(t.arrayValue,e),this.yt(e)):Jn()}gt(t,e){this.Rt(e,25),this.Ct(t,e)}Ct(t,e){e.ft(t)}Dt(t,e){const n=t.fields||{};this.Rt(e,55);for(const t of Object.keys(n))this.gt(t,e),this.dt(n[t],e)}bt(t,e){var n,r;const i=t.fields||{};this.Rt(e,53);const s="value",o=(null===(r=null===(n=i[s].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.Rt(e,15),e.Vt(Xr(o)),this.gt(s,e),this.dt(i[s],e)}vt(t,e){const n=t.values||[];this.Rt(e,50);for(const t of n)this.dt(t,e)}St(t,e){this.Rt(e,37),_r.fromName(t).path.forEach((t=>{this.Rt(e,60),this.Ct(t,e)}))}Rt(t,e){t.Vt(e)}yt(t){t.Vt(2)}}co.Ft=new co;
/**
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
 */
class uo{constructor(){this.ln=new lo}addToCollectionParentIndex(t,e){return this.ln.add(e),Ar.resolve()}getCollectionParents(t,e){return Ar.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return Ar.resolve()}deleteFieldIndex(t,e){return Ar.resolve()}deleteAllFieldIndexes(t){return Ar.resolve()}createTargetIndexes(t,e){return Ar.resolve()}getDocumentsMatchingTarget(t,e){return Ar.resolve(null)}getIndexType(t,e){return Ar.resolve(0)}getFieldIndexes(t,e){return Ar.resolve([])}getNextCollectionGroupToUpdate(t){return Ar.resolve(null)}getMinOffset(t,e){return Ar.resolve(Tr.min())}getMinOffsetFromCollectionGroup(t,e){return Ar.resolve(Tr.min())}updateCollectionGroup(t,e,n){return Ar.resolve()}updateIndexEntries(t,e){return Ar.resolve()}}class lo{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Br(mr.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Br(mr.comparator)).toArray()}}
/**
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
 */new Uint8Array(0);class ho{static withCacheSize(t){return new ho(t,ho.DEFAULT_COLLECTION_PERCENTILE,ho.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
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
 */
/**
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
 */ho.DEFAULT_COLLECTION_PERCENTILE=10,ho.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ho.DEFAULT=new ho(41943040,ho.DEFAULT_COLLECTION_PERCENTILE,ho.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ho.DISABLED=new ho(-1,0,0);
/**
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
 */
class fo{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new fo(0)}static Qn(){return new fo(-1)}}
/**
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
 */
/**
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
 */
class po{constructor(){this.changes=new is((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,yi.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ar.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
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
 */
/**
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
 */
/**
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
 */
class go{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
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
 */class mo{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Ms(n.mutation,t,zr.empty(),fr.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,ps()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=ps()){const r=ls();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=cs();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=ls();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,ps())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=os();const s=ds(),o=ds();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Vs)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Ms(o.mutation,e,o.mutation.getFieldMask(),fr.now())):s.set(e.key,zr.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new go(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=ds();let r=new Vr(((t,e)=>t-e)),i=ps();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||zr.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||ps()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=hs();c.forEach((t=>{if(!i.has(t)){const r=xs(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Ar.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return _r.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):qi(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Ar.resolve(ls());let o=-1,a=i;return s.next((e=>Ar.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Ar.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,ps()))).next((t=>({batchId:o,changes:us(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new _r(e)).next((t=>{let e=cs();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let s=cs();return this.indexManager.getCollectionParents(t,i).next((o=>Ar.forEach(o,(o=>{const a=function(t,e){return new zi(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r)))).next((t=>{i.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,yi.newInvalidDocument(r)))}));let n=cs();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&Ms(s.mutation,r,zr.empty(),fr.now()),es(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
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
 */class yo{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return Ar.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Js(t.createTime)}}(e)),Ar.resolve()}getNamedQuery(t,e){return Ar.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(t){return{name:t.name,query:ao(t.bundledQuery),readTime:Js(t.readTime)}}(e)),Ar.resolve()}}
/**
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
 */class vo{constructor(){this.overlays=new Vr(_r.comparator),this.Er=new Map}getOverlay(t,e){return Ar.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ls();return Ar.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.Tt(t,e,r)})),Ar.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Er.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Er.delete(n)),Ar.resolve()}getOverlaysForCollection(t,e,n){const r=ls(),i=e.length+1,s=new _r(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Ar.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Vr(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=ls(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ls(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=r)););return Ar.resolve(o)}Tt(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Er.get(r.largestBatchId).delete(n.key);this.Er.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Gs(e,n));let i=this.Er.get(e);void 0===i&&(i=ps(),this.Er.set(e,i)),this.Er.set(e,i.add(n.key))}}
/**
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
 */class _o{constructor(){this.sessionToken=Kr.EMPTY_BYTE_STRING}getSessionToken(t){return Ar.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,Ar.resolve()}}
/**
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
 */class Eo{constructor(){this.dr=new Br(wo.Ar),this.Rr=new Br(wo.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(t,e){const n=new wo(t,e);this.dr=this.dr.add(n),this.Rr=this.Rr.add(n)}mr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.gr(new wo(t,e))}pr(t,e){t.forEach((t=>this.removeReference(t,e)))}yr(t){const e=new _r(new mr([])),n=new wo(e,t),r=new wo(e,t+1),i=[];return this.Rr.forEachInRange([n,r],(t=>{this.gr(t),i.push(t.key)})),i}wr(){this.dr.forEach((t=>this.gr(t)))}gr(t){this.dr=this.dr.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new _r(new mr([])),n=new wo(e,t),r=new wo(e,t+1);let i=ps();return this.Rr.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new wo(t,0),n=this.dr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class wo{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return _r.comparator(t.key,e.key)||hr(t.br,e.br)}static Vr(t,e){return hr(t.br,e.br)||_r.comparator(t.key,e.key)}}
/**
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
 */class bo{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new Br(wo.Ar)}checkEmpty(t){return Ar.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new zs(i,e,n,r);this.mutationQueue.push(s);for(const e of r)this.vr=this.vr.add(new wo(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Ar.resolve(s)}lookupMutationBatch(t,e){return Ar.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Fr(n),i=r<0?0:r;return Ar.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ar.resolve(0===this.mutationQueue.length?-1:this.Dr-1)}getAllMutationBatches(t){return Ar.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new wo(e,0),r=new wo(e,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([n,r],(t=>{const e=this.Cr(t.br);i.push(e)})),Ar.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Br(hr);return e.forEach((t=>{const e=new wo(t,0),r=new wo(t,Number.POSITIVE_INFINITY);this.vr.forEachInRange([e,r],(t=>{n=n.add(t.br)}))})),Ar.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;_r.isDocumentKey(i)||(i=i.child(""));const s=new wo(new _r(i),0);let o=new Br(hr);return this.vr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.br)),!0)}),s),Ar.resolve(this.Mr(o))}Mr(t){const e=[];return t.forEach((t=>{const n=this.Cr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Qn(0===this.Or(e.batchId,"removed")),this.mutationQueue.shift();let n=this.vr;return Ar.forEach(e.mutations,(r=>{const i=new wo(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.vr=n}))}Ln(t){}containsKey(t,e){const n=new wo(e,0),r=this.vr.firstAfterOrEqual(n);return Ar.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Ar.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
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
 */class To{constructor(t){this.Nr=t,this.docs=new Vr(_r.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Nr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ar.resolve(n?n.document.mutableCopy():yi.newInvalidDocument(e))}getEntries(t,e){let n=os();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():yi.newInvalidDocument(t))})),Ar.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=os();const s=e.path,o=new _r(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Ir(br(o),n)<=0||(r.has(o.key)||es(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Ar.resolve(i)}getAllFromCollectionGroup(t,e,n,r){Jn()}Lr(t,e){return Ar.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Io(this)}getSize(t){return Ar.resolve(this.size)}}class Io extends po{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.hr.addEntry(t,r)):this.hr.removeEntry(n)})),Ar.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}
/**
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
 */class So{constructor(t){this.persistence=t,this.Br=new is((t=>Bi(t)),Hi),this.lastRemoteSnapshotVersion=pr.min(),this.highestTargetId=0,this.kr=0,this.qr=new Eo,this.targetCount=0,this.Qr=fo.qn()}forEachTarget(t,e){return this.Br.forEach(((t,n)=>e(n))),Ar.resolve()}getLastRemoteSnapshotVersion(t){return Ar.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ar.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),Ar.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.kr&&(this.kr=e),Ar.resolve()}Un(t){this.Br.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new fo(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,Ar.resolve()}updateTargetData(t,e){return this.Un(e),Ar.resolve()}removeTargetData(t,e){return this.Br.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,Ar.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Br.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Br.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Ar.waitFor(i).next((()=>r))}getTargetCount(t){return Ar.resolve(this.targetCount)}getTargetData(t,e){const n=this.Br.get(e)||null;return Ar.resolve(n)}addMatchingKeys(t,e,n){return this.qr.mr(e,n),Ar.resolve()}removeMatchingKeys(t,e,n){this.qr.pr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Ar.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),Ar.resolve()}getMatchingKeysForTargetId(t,e){const n=this.qr.Sr(e);return Ar.resolve(n)}containsKey(t,e){return Ar.resolve(this.qr.containsKey(e))}}
/**
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
 */class Ao{constructor(t,e){this.Kr={},this.overlays={},this.$r=new Or(0),this.Ur=!1,this.Ur=!0,this.Wr=new _o,this.referenceDelegate=t(this),this.Gr=new So(this),this.indexManager=new uo,this.remoteDocumentCache=function(t){return new To(t)}((t=>this.referenceDelegate.zr(t))),this.serializer=new oo(e),this.jr=new yo(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new vo,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Kr[t.toKey()];return n||(n=new bo(e,this.referenceDelegate),this.Kr[t.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,n){qn("MemoryPersistence","Starting transaction:",t);const r=new ko(this.$r.next());return this.referenceDelegate.Hr(),n(r).next((t=>this.referenceDelegate.Jr(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Yr(t,e){return Ar.or(Object.values(this.Kr).map((n=>()=>n.containsKey(t,e))))}}class ko extends Sr{constructor(t){super(),this.currentSequenceNumber=t}}class Co{constructor(t){this.persistence=t,this.Zr=new Eo,this.Xr=null}static ei(t){return new Co(t)}get ti(){if(this.Xr)return this.Xr;throw Jn()}addReference(t,e,n){return this.Zr.addReference(n,e),this.ti.delete(n.toString()),Ar.resolve()}removeReference(t,e,n){return this.Zr.removeReference(n,e),this.ti.add(n.toString()),Ar.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),Ar.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach((t=>this.ti.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.ti.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ar.forEach(this.ti,(n=>{const r=_r.fromPath(n);return this.ni(t,r).next((t=>{t||e.removeEntry(r,pr.min())}))})).next((()=>(this.Xr=null,e.apply(t))))}updateLimboDocument(t,e){return this.ni(t,e).next((t=>{t?this.ti.delete(e.toString()):this.ti.add(e.toString())}))}zr(t){return 0}ni(t,e){return Ar.or([()=>Ar.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}
/**
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
 */
class Oo{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Wi=n,this.Gi=r}static zi(t,e){let n=ps(),r=ps();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new Oo(t,e.fromCache,n,r)}}
/**
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
 */class Ro{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
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
 */class No{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=p()?8:kr(f())>0?6:4}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.Xi(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.es(t,e,r,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new Ro;return this.ts(t,e,n).next((r=>{if(i.result=r,this.Hi)return this.ns(t,e,n,r.size)}))})).next((()=>i.result))}ns(t,e,n,r){return n.documentReadCount<this.Ji?(Kn()<=N.DEBUG&&qn("QueryEngine","SDK will not create cache indexes for query:",ts(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),Ar.resolve()):(Kn()<=N.DEBUG&&qn("QueryEngine","Query:",ts(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Yi*r?(Kn()<=N.DEBUG&&qn("QueryEngine","The SDK decides to create cache indexes for query:",ts(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Xi(e))):Ar.resolve())}Xi(t,e){if(Ki(e))return Ar.resolve(null);let n=Xi(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=Ji(e,null,"F"),n=Xi(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=ps(...r);return this.Zi.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.rs(e,r);return this.ss(e,s,i,n.readTime)?this.Xi(t,Ji(e,null,"F")):this.os(t,s,e,n)}))))})))))}es(t,e,n,r){return Ki(e)||r.isEqual(pr.min())?Ar.resolve(null):this.Zi.getDocuments(t,n).next((i=>{const s=this.rs(e,i);return this.ss(e,s,n,r)?Ar.resolve(null):(Kn()<=N.DEBUG&&qn("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ts(e)),this.os(t,s,e,wr(r,-1)).next((t=>t)))}))}rs(t,e){let n=new Br(ns(t));return e.forEach(((e,r)=>{es(t,r)&&(n=n.add(r))})),n}ss(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ts(t,e,n){return Kn()<=N.DEBUG&&qn("QueryEngine","Using full collection scan to execute query:",ts(e)),this.Zi.getDocumentsMatchingQuery(t,e,Tr.min(),n)}os(t,e,n,r){return this.Zi.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
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
 */class Do{constructor(t,e,n,r){this.persistence=t,this._s=e,this.serializer=r,this.us=new Vr(hr),this.cs=new is((t=>Bi(t)),Hi),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(n)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new mo(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.us)))}}function Po(t,e,n,r){return new Do(t,e,n,r)}async function xo(t,e){const n=Zn(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=ps();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ts:t,removedBatchIds:i,addedBatchIds:s})))}))}))}class Lo{constructor(){this.activeTargetIds=ms()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Mo{constructor(){this._o=new Lo,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,n){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new Lo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
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
 */class Uo{uo(t){}shutdown(){}}
/**
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
 */class Fo{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){qn("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){qn("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */let Vo=null;function jo(){return null===Vo?Vo=268435456+Math.round(2147483648*Math.random()):Vo++,"0x"+Vo.toString(16)
/**
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
 */}const $o={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class Bo{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}
/**
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
 */const Ho="WebChannelConnection";class zo extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Fo=e+"://"+t.host,this.Mo=`projects/${n}/databases/${r}`,this.xo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Oo(t,e,n,r,i){const s=jo(),o=this.No(t,e.toUriEncodedString());qn("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(a,r,i),this.Bo(t,o,a,n).then((e=>(qn("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw Xn("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}ko(t,e,n,r,i,s){return this.Oo(t,e,n,r,i)}Lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+zn,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}No(t,e){const n=$o[t];return`${this.Fo}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Bo(t,e,n,r){const i=jo();return new Promise(((s,o)=>{const a=new Dn;a.setWithCredentials(!0),a.listenOnce(xn.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Ln.NO_ERROR:const e=a.getResponseJson();qn(Ho,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case Ln.TIMEOUT:qn(Ho,`RPC '${t}' ${i} timed out`),o(new er(tr.DEADLINE_EXCEEDED,"Request time out"));break;case Ln.HTTP_ERROR:const n=a.getStatus();if(qn(Ho,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(tr).indexOf(e)>=0?e:tr.UNKNOWN}(e.status);o(new er(t,e.message))}else o(new er(tr.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new er(tr.UNAVAILABLE,"Connection failed."));break;default:Jn()}}finally{qn(Ho,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);qn(Ho,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}qo(t,e,n){const r=jo(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Vn(),o=Fn(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Lo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");qn(Ho,`Creating RPC '${t}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new Bo({Eo:e=>{d?qn(Ho,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(qn(Ho,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),qn(Ho,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},Ao:()=>l.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(l,Pn.EventType.OPEN,(()=>{d||(qn(Ho,`RPC '${t}' stream ${r} transport opened.`),f.So())})),p(l,Pn.EventType.CLOSE,(()=>{d||(d=!0,qn(Ho,`RPC '${t}' stream ${r} transport closed`),f.Do())})),p(l,Pn.EventType.ERROR,(e=>{d||(d=!0,Xn(Ho,`RPC '${t}' stream ${r} transport errored:`,e),f.Do(new er(tr.UNAVAILABLE,"The operation could not be completed")))})),p(l,Pn.EventType.MESSAGE,(e=>{var n;if(!d){const i=e.data[0];Qn(!!i);const s=i,o=(null==s?void 0:s.error)||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){qn(Ho,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=Ks[t];if(void 0!==e)return Ws(e)}(e),i=o.message;void 0===n&&(n=tr.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),d=!0,f.Do(new er(n,i)),l.close()}else qn(Ho,`RPC '${t}' stream ${r} received:`,i),f.vo(i)}})),p(o,Un.STAT_EVENT,(e=>{e.stat===Mn.PROXY?qn(Ho,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===Mn.NOPROXY&&qn(Ho,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.bo()}),0),f}}
/**
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
 */
/**
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
 */function Go(){return"undefined"!=typeof document?document:null}
/**
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
 */function Ko(t){return new Ys(t,!0)}
/**
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
 */class qo{constructor(t,e,n=1e3,r=1.5,i=6e4){this.li=t,this.timerId=e,this.Qo=n,this.Ko=r,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),r=Math.max(0,e-n);r>0&&qn("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,(()=>(this.Go=Date.now(),t()))),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){null!==this.Wo&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){null!==this.Wo&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}
/**
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
 */
/**
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
 */
class Wo extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new er(tr.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,n,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Oo(t,Qs(e,n),r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===tr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new er(tr.UNKNOWN,t.toString())}))}ko(t,e,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.ko(t,Qs(e,n),r,s,o,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===tr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new er(tr.UNKNOWN,t.toString())}))}terminate(){this.S_=!0,this.connection.terminate()}}class Xo{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){0===this.D_&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve()))))}O_(t){"Online"===this.state?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,"Online"===t&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Wn(e),this.C_=!1):qn("OnlineStateTracker",e)}N_(){null!==this.v_&&(this.v_.cancel(),this.v_=null)}}
/**
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
 */class Yo{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo((t=>{n.enqueueAndForget((async()=>{Zo(this)&&(qn("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Zn(t);e.k_.add(4),await Qo(e),e.K_.set("Unknown"),e.k_.delete(4),await Jo(e)}(this))}))})),this.K_=new Xo(n,r)}}async function Jo(t){if(Zo(t))for(const e of t.q_)await e(!0)}async function Qo(t){for(const e of t.q_)await e(!1)}function Zo(t){return 0===Zn(t).k_.size}async function ta(t,e){const n=Zn(t);e?(n.k_.delete(2),await Jo(n)):e||(n.k_.add(2),await Qo(n),n.K_.set("Unknown"))}
/**
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
 */
class ea{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new ea(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new er(tr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}class na{constructor(){this.queries=ra(),this.onlineState="Unknown",this.X_=new Set}terminate(){!function(t,e){const n=Zn(t),r=n.queries;n.queries=ra(),r.forEach(((t,n)=>{for(const t of n.J_)t.onError(e)}))}(this,new er(tr.ABORTED,"Firestore shutting down"))}}function ra(){return new is((t=>Zi(t)),Qi)}function ia(t){t.X_.forEach((t=>{t.next()}))}var sa,oa;(oa=sa||(sa={})).na="default",oa.Cache="cache";class aa{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ma={},this.xa=new is((t=>Zi(t)),Qi),this.Oa=new Map,this.Na=new Set,this.La=new Vr(_r.comparator),this.Ba=new Map,this.ka=new Eo,this.qa={},this.Qa=new Map,this.Ka=fo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return!0===this.$a}}function ca(t,e,n){const r=Zn(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xa.forEach(((n,r)=>{const i=r.view.ea(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Zn(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const t of n.J_)t.ea(e)&&(r=!0)})),r&&ia(n)}(r.eventManager,e),t.length&&r.Ma.R_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ua(t,e,n){const r=Zn(t),i=[],s=[],o=[];r.xa.isEmpty()||(r.xa.forEach(((t,a)=>{o.push(r.Ua(a,e,n).then((t=>{var e;if((t||n)&&r.isPrimaryClient){const i=t?!t.fromCache:null===(e=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===e?void 0:e.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(t){i.push(t);const e=Oo.zi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.Ma.R_(i),await async function(t,e){const n=Zn(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ar.forEach(e,(e=>Ar.forEach(e.Wi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Ar.forEach(e.Gi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Cr(t))throw t;qn("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.us.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.us=n.us.insert(e,i)}}}(r.localStore,s))}async function la(t,e){const n=Zn(t);if(!n.currentUser.isEqual(e)){qn("SyncEngine","User change. New user:",e.toKey());const t=await xo(n.localStore,e);n.currentUser=e,function(t,e){t.Qa.forEach((t=>{t.forEach((t=>{t.reject(new er(tr.CANCELLED,e))}))})),t.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ua(n,t.Ts)}}class ha{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ko(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return Po(this.persistence,new No,t.initialUser,this.serializer)}ja(t){return new Ao(Co.ei,this.serializer)}za(t){return new Mo}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ha.provider={build:()=>new ha};class da{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ca(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=la.bind(null,this.syncEngine),await ta(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new na}createDatastore(t){const e=Ko(t.databaseInfo.databaseId),n=function(t){return new zo(t)}(t.databaseInfo);return function(t,e,n,r){return new Wo(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new Yo(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>ca(this.syncEngine,t,0)),Fo.p()?new Fo:new Uo)}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new aa(t,e,n,r,i,s);return o&&(a.$a=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=Zn(t);qn("RemoteStore","RemoteStore shutting down."),e.k_.add(5),await Qo(e),e.Q_.shutdown(),e.K_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}da.provider={build:()=>new da};
/**
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
 */
function fa(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
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
 */}const pa=new Map;
/**
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
 */function ga(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Jn()}function ma(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new er(tr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ga(t);throw new er(tr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
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
 */
class ya{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new er(tr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new er(tr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,r){if(!0===e&&!0===r)throw new er(tr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fa(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new er(tr.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new er(tr.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new er(tr.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
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
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class va{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ya({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new er(tr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new er(tr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ya(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ir;switch(t.type){case"firstParty":return new cr(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new er(tr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=pa.get(t);e&&(qn("ComponentProvider","Removing Datastore"),pa.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
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
 */
class _a{constructor(t=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new qo(this,"async_queue_retry"),this.fu=()=>{const t=Go();t&&qn("AsyncQueue","Visibility state changed to "+t.visibilityState),this.r_.Jo()},this.gu=t;const e=Go();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.Eu){this.Eu=!0,this.Vu=t||!1;const e=Go();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.Eu)return new Promise((()=>{}));const e=new nr;return this.yu((()=>this.Eu&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Iu.push(t),this.wu())))}async wu(){if(0!==this.Iu.length){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!Cr(t))throw t;qn("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo((()=>this.wu()))}}yu(t){const e=this.gu.then((()=>(this.Ru=!0,t().catch((t=>{this.Au=t,this.Ru=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
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
 */(t);throw Wn("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ru=!1,t))))));return this.gu=e,e}enqueueAfterDelay(t,e,n){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const r=ea.createAndSchedule(this,t,e,n,(t=>this.Su(t)));return this.du.push(r),r}pu(){this.Au&&Jn()}verifyOperationInProgress(){}async bu(){let t;do{t=this.gu,await t}while(t!==this.gu)}Du(t){for(const e of this.du)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then((()=>{this.du.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.du)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.bu()}))}Cu(t){this.mu.push(t)}Su(t){const e=this.du.indexOf(t);this.du.splice(e,1)}}class Ea extends va{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new _a,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new _a(t),this._firestoreClient=void 0,await t}}}new WeakMap;
/**
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
 */!function(t,e=!0){!function(t){zn=t}(pt),ut(new A("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new Ea(new or(t.getProvider("auth-internal")),new lr(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new er(tr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ti(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),yt(Bn,"4.7.5",t),yt(Bn,"4.7.5","esm2017")}();
/**
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
 */
const wa="firebasestorage.googleapis.com",ba="storageBucket";
/**
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
 */
class Ta extends g{constructor(t,e,n=0){super(Aa(t),`Firebase Storage: ${e} (${Aa(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ta.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Aa(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ia,Sa;function Aa(t){return"storage/"+t}function ka(){return new Ta(Ia.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function Ca(){return new Ta(Ia.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Oa(){return new Ta(Ia.CANCELED,"User canceled the upload/download.")}function Ra(t){return new Ta(Ia.INVALID_ARGUMENT,t)}function Na(){return new Ta(Ia.APP_DELETED,"The Firebase app was deleted.")}!function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"}(Ia||(Ia={}));
/**
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
 */
class Da{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=Da.makeFromUrl(t,e)}catch(e){return new Da(t,"")}if(""===n.path)return n;throw r=t,new Ta(Ia.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.");var r}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";const i=new RegExp("^gs://"+r+"(/(.*))?$","i");function s(t){t.path_=decodeURIComponent(t.path)}const o=e.replace(/[.]/g,"\\."),a=[{regex:i,indices:{bucket:1,path:3},postModify:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${e===wa?"(?:storage.googleapis.com|storage.cloud.google.com)":e}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let e=0;e<a.length;e++){const r=a[e],i=r.regex.exec(t);if(i){const t=i[r.indices.bucket];let e=i[r.indices.path];e||(e=""),n=new Da(t,e),r.postModify(n);break}}if(null==n)throw function(t){return new Ta(Ia.INVALID_URL,"Invalid URL '"+t+"'.")}(t);return n}}class Pa{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
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
 */function xa(t,e,n,r){if(r<e)throw Ra(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ra(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
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
 */function La(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){n=n+(e(r)+"="+e(t[r]))+"&"}return n=n.slice(0,-1),n}
/**
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
 */
function Ma(t,e){const n=t>=500&&t<600,r=-1!==[408,429].indexOf(t),i=-1!==e.indexOf(t);return n||r||i}
/**
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
 */!function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"}(Sa||(Sa={}));class Ua{constructor(t,e,n,r,i,s,o,a,c,u,l,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new Fa(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===Sa.NO_ERROR,i=n.getStatus();if(!e||Ma(i,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===Sa.ABORT;return void t(!1,new Fa(!1,null,e))}const s=-1!==this.successCodes_.indexOf(i);t(!0,new Fa(s,n))}))},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());void 0!==t?n(t):n()}catch(t){r(t)}else if(null!==i){const t=ka();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){r(this.appDelete_?Na():Oa())}else{r(Ca())}};this.canceled_?e(0,new Fa(!1,null,!0)):this.backoffId_=function(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){i=setTimeout((()=>{i=null,t(f,c())}),e)}function d(){s&&clearTimeout(s)}function f(t,...e){if(u)return void d();if(t)return d(),void l.call(null,t,...e);if(c()||o)return d(),void l.call(null,t,...e);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),h(n)}let p=!1;function g(t){p||(p=!0,d(),u||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,g(!0)}),n),g}(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class Fa{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function Va(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
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
 */
/**
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
 */
class ja{constructor(t,e){this._service=t,this._location=e instanceof Da?e:Da.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new ja(t,e)}get root(){const t=new Da(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Va(this._location.path)}get storage(){return this._service}get parent(){const t=
/**
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
 */
function(t){if(0===t.length)return null;const e=t.lastIndexOf("/");return-1===e?"":t.slice(0,e)}(this._location.path);if(null===t)return null;const e=new Da(this._location.bucket,t);return new ja(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw function(t){return new Ta(Ia.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(t)}}function $a(t,e){const n=null==e?void 0:e[ba];return null==n?null:Da.makeFromBucketSpec(n,t)}class Ba{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=wa,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?Da.makeFromBucketSpec(r,this._host):$a(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=Da.makeFromBucketSpec(this._url,t):this._bucket=$a(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){xa("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){xa("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){return(await t.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ja(this,t)}_makeRequest(t,e,n,r,i=!0){if(this._deleted)return new Pa(Na());{const s=function(t,e,n,r,i,s,o=!0){const a=La(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return function(t,e){e&&(t["X-Firebase-GMPID"]=e)}(u,e),function(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}(u,n),function(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!=e?e:"AppManager")}(u,s),function(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}(u,r),new Ua(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}
/**
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
 */(t,this._appId,n,r,e,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const Ha="@firebase/storage",za="0.13.4",Ga="storage";function Ka(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Ba(n,r,i,e,pt)}ut(new A(Ga,Ka,"PUBLIC").setMultipleInstances(!0)),yt(Ha,za,""),yt(Ha,za,"esm2017");var qa,Wa,Xa,Ya=gt({apiKey:"AIzaSyBEJUvH5K_Ele_LTFSsb2LH-SnCuchMeoY",authDomain:"copycat-e7c2b.firebaseapp.com",projectId:"copycat-e7c2b",storageBucket:"copycat-e7c2b.firebasestorage.app",messagingSenderId:"550733220189",appId:"1:550733220189:web:93a23ad86885cd102200b4",measurementId:"G-78H2WTX689"}),Ja=
/**
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
 */
function(t=mt()){const e=lt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=
/**
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
 */
function(t,e){const n=lt(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(v(n.getOptions(),null!=e?e:{}))return t;xt(t,"already-initialized")}return n.initialize({options:e})}(t,{persistence:[In]}),r=c("auth");return r&&Be(n,`http://${r}`),n}(Ya),Qa=(function(t,e){const n="string"==typeof t?t:e||"(default)",r=lt("object"==typeof t?t:mt(),"firestore").getImmediate({identifier:n});if(!r._initialized){const t=u("firestore");t&&function(t,e,n,r={}){var i;const s=(t=ma(t,va))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&Xn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Hn.MOCK_USER;else{e=d(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new er(tr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Hn(s)}t._authCredentials=new sr(new rr(e,n))}}
/**
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
 */(r,...t)}}(Ya,"copycat-db"),function(t=mt(),e){const n=lt(t=S(t),Ga).getImmediate({identifier:e}),r=u("storage");r&&function(t,e,n,r={}){!function(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken="string"==typeof i?i:d(i,t.app.options.projectId))}(t,e,n,r)}
/**
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
 */(n,...r)}(Ya),function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(t){s(t)}}function a(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))}),Za=function(t,e){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(o=0)),o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};!function(t){t.UPLOAD_SCREENSHOT_TO_STORAGE="http://127.0.0.1:5001/copycat-e7c2b/us-central1/upload_screenshot_to_storage",t.CREATE_ORGANIZATION_WORKFLOW="http://127.0.0.1:5001/copycat-e7c2b/us-central1/create_organization_workflow",t.CREATE_PERSONAL_WORKFLOW="http://127.0.0.1:5001/copycat-e7c2b/us-central1/create_personal_workflow",t.GET_MAX_FREE_EXECUTIONS="http://127.0.0.1:5001/copycat-e7c2b/us-central1/get_max_free_executions",t.CREATE_STRIPE_PERSONAL_CHECKOUT_SESSION="http://127.0.0.1:5001/copycat-e7c2b/us-central1/create_stripe_personal_checkout_session",t.CREATE_STRIPE_CUSTOMER_PORTAL="http://127.0.0.1:5001/copycat-e7c2b/us-central1/create_stripe_customer_portal",t.CREATE_NEW_ORGANIZATION_ACCOUNT="http://127.0.0.1:5001/copycat-e7c2b/us-central1/create_new_organization_account",t.CREATE_NEW_PERSONAL_ACCOUNT="http://127.0.0.1:5001/copycat-e7c2b/us-central1/create_new_personal_account",t.CREATE_ANALYTICS_EVENT="http://127.0.0.1:5001/copycat-e7c2b/us-central1/create_analytics_event_staging",t.CREATE_OPT_OUT="http://127.0.0.1:5001/copycat-e7c2b/us-central1/create_opt_out"}(qa||(qa={})),function(t){t.UPLOAD_SCREENSHOT_TO_STORAGE="https://upload-screenshot-to-storage-esfvfhm6oa-uc.a.run.app",t.CREATE_ORGANIZATION_WORKFLOW="https://create-organization-workflow-esfvfhm6oa-uc.a.run.app",t.CREATE_PERSONAL_WORKFLOW="https://create-personal-workflow-esfvfhm6oa-uc.a.run.app",t.GET_MAX_FREE_EXECUTIONS="https://get-max-free-executions-esfvfhm6oa-uc.a.run.app",t.CREATE_STRIPE_PERSONAL_CHECKOUT_SESSION="https://create-stripe-personal-checkout-session-esfvfhm6oa-uc.a.run.app",t.CREATE_STRIPE_CUSTOMER_PORTAL="https://create-stripe-customer-portal-esfvfhm6oa-uc.a.run.app",t.CREATE_NEW_ORGANIZATION_ACCOUNT="https://create-new-organization-account-esfvfhm6oa-uc.a.run.app",t.CREATE_NEW_PERSONAL_ACCOUNT="https://create-new-personal-account-esfvfhm6oa-uc.a.run.app",t.CREATE_ANALYTICS_EVENT="https://create-analytics-event-prod-esfvfhm6oa-uc.a.run.app",t.CREATE_OPT_OUT="https://create-opt-out-esfvfhm6oa-uc.a.run.app"}(Wa||(Wa={})),function(t){t.UPLOAD_SCREENSHOT_TO_STORAGE="UPLOAD_SCREENSHOT_TO_STORAGE",t.CREATE_ORGANIZATION_WORKFLOW="CREATE_ORGANIZATION_WORKFLOW",t.CREATE_PERSONAL_WORKFLOW="CREATE_PERSONAL_WORKFLOW",t.GET_MAX_FREE_EXECUTIONS="GET_MAX_FREE_EXECUTIONS",t.CREATE_STRIPE_PERSONAL_CHECKOUT_SESSION="CREATE_STRIPE_PERSONAL_CHECKOUT_SESSION",t.CREATE_STRIPE_CUSTOMER_PORTAL="CREATE_STRIPE_CUSTOMER_PORTAL",t.CREATE_NEW_ORGANIZATION_ACCOUNT="CREATE_NEW_ORGANIZATION_ACCOUNT",t.CREATE_NEW_PERSONAL_ACCOUNT="CREATE_NEW_PERSONAL_ACCOUNT",t.CREATE_ANALYTICS_EVENT="CREATE_ANALYTICS_EVENT",t.CREATE_OPT_OUT="CREATE_OPT_OUT"}(Xa||(Xa={}));var tc=function(t){return Wa[t]},ec=function(t,e){return Qa(void 0,void 0,void 0,(function(){var n,r;return Za(this,(function(i){switch(i.label){case 0:return(n=Ja.currentUser).isAnonymous?[4,un(Ja)]:[3,2];case 1:i.sent(),n=Ja.currentUser,i.label=2;case 2:return[4,n.getIdToken()];case 3:return r=i.sent(),[4,fetch(tc(t),{headers:{Authorization:"Bearer ".concat(r)},body:JSON.stringify(e),method:"POST"})];case 4:return[4,i.sent().json()];case 5:return[2,i.sent()]}}))}))},nc=function(t){for(var e=["tagName","attributes","textContent"],n={},r=0,i=["tagName","attributes","textContent","coordinates","parent","siblings"];r<i.length;r++){if((v=i[r])in t)if("attributes"===v){for(var s={},o=0,a=Object.keys(t.attributes).sort();o<a.length;o++){s[w=a[o]]=t.attributes[w]}n[v]=s}else n[v]=t[v]}if(t.parent){n.parent={};for(var c=0,u=["tagName","attributes","textContent"];c<u.length;c++){if((v=u[c])in t.parent)if("attributes"===v){s={};for(var l=0,h=Object.keys(t.parent.attributes).sort();l<h.length;l++){s[w=h[l]]=t.parent.attributes[w]}n.parent[v]=s}else n.parent[v]=t.parent[v]}}n.siblings=[];for(var d=0,f=t.siblings;d<f.length;d++){for(var p=f[d],g={},m=0,y=e;m<y.length;m++){var v;if((v=y[m])in p)if("attributes"===v){s={};for(var _=0,E=Object.keys(p.attributes).sort();_<E.length;_++){var w;s[w=E[_]]=p.attributes[w]}g[v]=s}else g[v]=p[v]}n.siblings.push(g)}return JSON.stringify(n)},rc=function(t){return!!t&&(!!t.startsWith("http")&&(!t.includes("webstore")||!t.includes("chrome.google.com")))};const ic="production",sc="8.47.0",oc=globalThis;function ac(t,e,n){const r=n||oc,i=r.__SENTRY__=r.__SENTRY__||{},s=i[sc]=i[sc]||{};return s[t]||(s[t]=e())}function cc(){return uc(oc),oc}function uc(t){const e=t.__SENTRY__=t.__SENTRY__||{};return e.version=e.version||sc,e[sc]=e[sc]||{}}const lc=Object.prototype.toString;function hc(t){switch(lc.call(t)){case"[object Error]":case"[object Exception]":case"[object DOMException]":case"[object WebAssembly.Exception]":return!0;default:return wc(t,Error)}}function dc(t,e){return lc.call(t)===`[object ${e}]`}function fc(t){return dc(t,"ErrorEvent")}function pc(t){return dc(t,"DOMError")}function gc(t){return dc(t,"String")}function mc(t){return"object"==typeof t&&null!==t&&"__sentry_template_string__"in t&&"__sentry_template_values__"in t}function yc(t){return null===t||mc(t)||"object"!=typeof t&&"function"!=typeof t}function vc(t){return dc(t,"Object")}function _c(t){return"undefined"!=typeof Event&&wc(t,Event)}function Ec(t){return Boolean(t&&t.then&&"function"==typeof t.then)}function wc(t,e){try{return t instanceof e}catch(t){return!1}}function bc(t){return!("object"!=typeof t||null===t||!t.__isVue&&!t._isVue)}const Tc=oc;function Ic(t,e={}){if(!t)return"<unknown>";try{let n=t;const r=5,i=[];let s=0,o=0;const a=" > ",c=a.length;let u;const l=Array.isArray(e)?e:e.keyAttrs,h=!Array.isArray(e)&&e.maxStringLength||80;for(;n&&s++<r&&(u=Sc(n,l),!("html"===u||s>1&&o+i.length*c+u.length>=h));)i.push(u),o+=u.length,n=n.parentNode;return i.reverse().join(a)}catch(t){return"<unknown>"}}function Sc(t,e){const n=t,r=[];if(!n||!n.tagName)return"";if(Tc.HTMLElement&&n instanceof HTMLElement&&n.dataset){if(n.dataset.sentryComponent)return n.dataset.sentryComponent;if(n.dataset.sentryElement)return n.dataset.sentryElement}r.push(n.tagName.toLowerCase());const i=e&&e.length?e.filter((t=>n.getAttribute(t))).map((t=>[t,n.getAttribute(t)])):null;if(i&&i.length)i.forEach((t=>{r.push(`[${t[0]}="${t[1]}"]`)}));else{n.id&&r.push(`#${n.id}`);const t=n.className;if(t&&gc(t)){const e=t.split(/\s+/);for(const t of e)r.push(`.${t}`)}}const s=["aria-label","type","name","title","alt"];for(const t of s){const e=n.getAttribute(t);e&&r.push(`[${t}="${e}"]`)}return r.join("")}const Ac="undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__,kc=["debug","info","warn","error","log","assert","trace"],Cc={};function Oc(t){if(!("console"in oc))return t();const e=oc.console,n={},r=Object.keys(Cc);r.forEach((t=>{const r=Cc[t];n[t]=e[t],e[t]=r}));try{return t()}finally{r.forEach((t=>{e[t]=n[t]}))}}const Rc=ac("logger",(function(){let t=!1;const e={enable:()=>{t=!0},disable:()=>{t=!1},isEnabled:()=>t};return Ac?kc.forEach((n=>{e[n]=(...e)=>{t&&Oc((()=>{oc.console[n](`Sentry Logger [${n}]:`,...e)}))}})):kc.forEach((t=>{e[t]=()=>{}})),e}));function Nc(t,e=0){return"string"!=typeof t||0===e||t.length<=e?t:`${t.slice(0,e)}...`}function Dc(t,e){if(!Array.isArray(t))return"";const n=[];for(let e=0;e<t.length;e++){const r=t[e];try{bc(r)?n.push("[VueViewModel]"):n.push(String(r))}catch(t){n.push("[value cannot be serialized]")}}return n.join(e)}function Pc(t,e,n=!1){return!!gc(t)&&(dc(e,"RegExp")?e.test(t):!!gc(e)&&(n?t===e:t.includes(e)))}function xc(t,e=[],n=!1){return e.some((e=>Pc(t,e,n)))}function Lc(t,e,n){if(!(e in t))return;const r=t[e],i=n(r);"function"==typeof i&&Uc(i,r);try{t[e]=i}catch(n){Ac&&Rc.log(`Failed to replace method "${e}" in object`,t)}}function Mc(t,e,n){try{Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0})}catch(n){Ac&&Rc.log(`Failed to add non-enumerable property "${e}" to object`,t)}}function Uc(t,e){try{const n=e.prototype||{};t.prototype=e.prototype=n,Mc(t,"__sentry_original__",e)}catch(t){}}function Fc(t){return t.__sentry_original__}function Vc(t){if(hc(t))return{message:t.message,name:t.name,stack:t.stack,...$c(t)};if(_c(t)){const e={type:t.type,target:jc(t.target),currentTarget:jc(t.currentTarget),...$c(t)};return"undefined"!=typeof CustomEvent&&wc(t,CustomEvent)&&(e.detail=t.detail),e}return t}function jc(t){try{return e=t,"undefined"!=typeof Element&&wc(e,Element)?Ic(t):Object.prototype.toString.call(t)}catch(t){return"<unknown>"}var e}function $c(t){if("object"==typeof t&&null!==t){const e={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}return{}}function Bc(t){return Hc(t,new Map)}function Hc(t,e){if(function(t){if(!vc(t))return!1;try{const e=Object.getPrototypeOf(t).constructor.name;return!e||"Object"===e}catch(t){return!0}}(t)){const n=e.get(t);if(void 0!==n)return n;const r={};e.set(t,r);for(const n of Object.getOwnPropertyNames(t))void 0!==t[n]&&(r[n]=Hc(t[n],e));return r}if(Array.isArray(t)){const n=e.get(t);if(void 0!==n)return n;const r=[];return e.set(t,r),t.forEach((t=>{r.push(Hc(t,e))})),r}return t}function zc(){return Date.now()/1e3}const Gc=function(){const{performance:t}=oc;if(!t||!t.now)return zc;const e=Date.now()-t.now(),n=null==t.timeOrigin?e:t.timeOrigin;return()=>(n+t.now())/1e3}();let Kc;(()=>{const{performance:t}=oc;if(!t||!t.now)return void(Kc="none");const e=36e5,n=t.now(),r=Date.now(),i=t.timeOrigin?Math.abs(t.timeOrigin+n-r):e,s=i<e,o=t.timing&&t.timing.navigationStart,a="number"==typeof o?Math.abs(o+n-r):e;s||a<e?i<=a?(Kc="timeOrigin",t.timeOrigin):Kc="navigationStart":Kc="dateNow"})();function qc(){const t=oc,e=t.crypto||t.msCrypto;let n=()=>16*Math.random();try{if(e&&e.randomUUID)return e.randomUUID().replace(/-/g,"");e&&e.getRandomValues&&(n=()=>{const t=new Uint8Array(1);return e.getRandomValues(t),t[0]})}catch(t){}return([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,(t=>(t^(15&n())>>t/4).toString(16)))}function Wc(t){return t.exception&&t.exception.values?t.exception.values[0]:void 0}function Xc(t){const{message:e,event_id:n}=t;if(e)return e;const r=Wc(t);return r?r.type&&r.value?`${r.type}: ${r.value}`:r.type||r.value||n||"<unknown>":n||"<unknown>"}function Yc(t,e,n){const r=t.exception=t.exception||{},i=r.values=r.values||[],s=i[0]=i[0]||{};s.value||(s.value=e||""),s.type||(s.type=n||"Error")}function Jc(t,e){const n=Wc(t);if(!n)return;const r=n.mechanism;if(n.mechanism={type:"generic",handled:!0,...r,...e},e&&"data"in e){const t={...r&&r.data,...e.data};n.mechanism.data=t}}function Qc(t){if(function(t){try{return t.__sentry_captured__}catch(t){}}(t))return!0;try{Mc(t,"__sentry_captured__",!0)}catch(t){}return!1}function Zc(t){const e=Gc(),n={sid:qc(),init:!0,timestamp:e,started:e,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>function(t){return Bc({sid:`${t.sid}`,init:t.init,started:new Date(1e3*t.started).toISOString(),timestamp:new Date(1e3*t.timestamp).toISOString(),status:t.status,errors:t.errors,did:"number"==typeof t.did||"string"==typeof t.did?`${t.did}`:void 0,duration:t.duration,abnormal_mechanism:t.abnormal_mechanism,attrs:{release:t.release,environment:t.environment,ip_address:t.ipAddress,user_agent:t.userAgent}})}(n)};return t&&tu(n,t),n}function tu(t,e={}){if(e.user&&(!t.ipAddress&&e.user.ip_address&&(t.ipAddress=e.user.ip_address),t.did||e.did||(t.did=e.user.id||e.user.email||e.user.username)),t.timestamp=e.timestamp||Gc(),e.abnormal_mechanism&&(t.abnormal_mechanism=e.abnormal_mechanism),e.ignoreDuration&&(t.ignoreDuration=e.ignoreDuration),e.sid&&(t.sid=32===e.sid.length?e.sid:qc()),void 0!==e.init&&(t.init=e.init),!t.did&&e.did&&(t.did=`${e.did}`),"number"==typeof e.started&&(t.started=e.started),t.ignoreDuration)t.duration=void 0;else if("number"==typeof e.duration)t.duration=e.duration;else{const e=t.timestamp-t.started;t.duration=e>=0?e:0}e.release&&(t.release=e.release),e.environment&&(t.environment=e.environment),!t.ipAddress&&e.ipAddress&&(t.ipAddress=e.ipAddress),!t.userAgent&&e.userAgent&&(t.userAgent=e.userAgent),"number"==typeof e.errors&&(t.errors=e.errors),e.status&&(t.status=e.status)}function eu(){return qc()}function nu(){return qc().substring(16)}function ru(t,e,n=2){if(!e||"object"!=typeof e||n<=0)return e;if(t&&e&&0===Object.keys(e).length)return t;const r={...t};for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=ru(r[t],e[t],n-1));return r}const iu="_sentrySpan";function su(t,e){e?Mc(t,iu,e):delete t[iu]}function ou(t){return t[iu]}class au{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext={traceId:eu(),spanId:nu()}}clone(){const t=new au;return t._breadcrumbs=[...this._breadcrumbs],t._tags={...this._tags},t._extra={...this._extra},t._contexts={...this._contexts},this._contexts.flags&&(t._contexts.flags={values:[...this._contexts.flags.values]}),t._user=this._user,t._level=this._level,t._session=this._session,t._transactionName=this._transactionName,t._fingerprint=this._fingerprint,t._eventProcessors=[...this._eventProcessors],t._requestSession=this._requestSession,t._attachments=[...this._attachments],t._sdkProcessingMetadata={...this._sdkProcessingMetadata},t._propagationContext={...this._propagationContext},t._client=this._client,t._lastEventId=this._lastEventId,su(t,ou(this)),t}setClient(t){this._client=t}setLastEventId(t){this._lastEventId=t}getClient(){return this._client}lastEventId(){return this._lastEventId}addScopeListener(t){this._scopeListeners.push(t)}addEventProcessor(t){return this._eventProcessors.push(t),this}setUser(t){return this._user=t||{email:void 0,id:void 0,ip_address:void 0,username:void 0},this._session&&tu(this._session,{user:t}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(t){return this._requestSession=t,this}setTags(t){return this._tags={...this._tags,...t},this._notifyScopeListeners(),this}setTag(t,e){return this._tags={...this._tags,[t]:e},this._notifyScopeListeners(),this}setExtras(t){return this._extra={...this._extra,...t},this._notifyScopeListeners(),this}setExtra(t,e){return this._extra={...this._extra,[t]:e},this._notifyScopeListeners(),this}setFingerprint(t){return this._fingerprint=t,this._notifyScopeListeners(),this}setLevel(t){return this._level=t,this._notifyScopeListeners(),this}setTransactionName(t){return this._transactionName=t,this._notifyScopeListeners(),this}setContext(t,e){return null===e?delete this._contexts[t]:this._contexts[t]=e,this._notifyScopeListeners(),this}setSession(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(t){if(!t)return this;const e="function"==typeof t?t(this):t,[n,r]=e instanceof cu?[e.getScopeData(),e.getRequestSession()]:vc(e)?[t,t.requestSession]:[],{tags:i,extra:s,user:o,contexts:a,level:c,fingerprint:u=[],propagationContext:l}=n||{};return this._tags={...this._tags,...i},this._extra={...this._extra,...s},this._contexts={...this._contexts,...a},o&&Object.keys(o).length&&(this._user=o),c&&(this._level=c),u.length&&(this._fingerprint=u),l&&(this._propagationContext=l),r&&(this._requestSession=r),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._session=void 0,su(this,void 0),this._attachments=[],this.setPropagationContext({traceId:eu()}),this._notifyScopeListeners(),this}addBreadcrumb(t,e){const n="number"==typeof e?e:100;if(n<=0)return this;const r={timestamp:zc(),...t},i=this._breadcrumbs;return i.push(r),this._breadcrumbs=i.length>n?i.slice(-n):i,this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(t){return this._attachments.push(t),this}clearAttachments(){return this._attachments=[],this}getScopeData(){return{breadcrumbs:this._breadcrumbs,attachments:this._attachments,contexts:this._contexts,tags:this._tags,extra:this._extra,user:this._user,level:this._level,fingerprint:this._fingerprint||[],eventProcessors:this._eventProcessors,propagationContext:this._propagationContext,sdkProcessingMetadata:this._sdkProcessingMetadata,transactionName:this._transactionName,span:ou(this)}}setSDKProcessingMetadata(t){return this._sdkProcessingMetadata=ru(this._sdkProcessingMetadata,t,2),this}setPropagationContext(t){return this._propagationContext={spanId:nu(),...t},this}getPropagationContext(){return this._propagationContext}captureException(t,e){const n=e&&e.event_id?e.event_id:qc();if(!this._client)return Rc.warn("No client configured on scope - will not capture exception!"),n;const r=new Error("Sentry syntheticException");return this._client.captureException(t,{originalException:t,syntheticException:r,...e,event_id:n},this),n}captureMessage(t,e,n){const r=n&&n.event_id?n.event_id:qc();if(!this._client)return Rc.warn("No client configured on scope - will not capture message!"),r;const i=new Error(t);return this._client.captureMessage(t,e,{originalException:t,syntheticException:i,...n,event_id:r},this),r}captureEvent(t,e){const n=e&&e.event_id?e.event_id:qc();return this._client?(this._client.captureEvent(t,{...e,event_id:n},this),n):(Rc.warn("No client configured on scope - will not capture event!"),n)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach((t=>{t(this)})),this._notifyingListeners=!1)}}const cu=au;class uu{constructor(t,e){let n,r;n=t||new cu,r=e||new cu,this._stack=[{scope:n}],this._isolationScope=r}withScope(t){const e=this._pushScope();let n;try{n=t(e)}catch(t){throw this._popScope(),t}return Ec(n)?n.then((t=>(this._popScope(),t)),(t=>{throw this._popScope(),t})):(this._popScope(),n)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStackTop(){return this._stack[this._stack.length-1]}_pushScope(){const t=this.getScope().clone();return this._stack.push({client:this.getClient(),scope:t}),t}_popScope(){return!(this._stack.length<=1)&&!!this._stack.pop()}}function lu(){const t=uc(cc());return t.stack=t.stack||new uu(ac("defaultCurrentScope",(()=>new cu)),ac("defaultIsolationScope",(()=>new cu)))}function hu(t){return lu().withScope(t)}function du(t,e){const n=lu();return n.withScope((()=>(n.getStackTop().scope=t,e(t))))}function fu(t){return lu().withScope((()=>t(lu().getIsolationScope())))}function pu(t){const e=uc(t);return e.acs?e.acs:{withIsolationScope:fu,withScope:hu,withSetScope:du,withSetIsolationScope:(t,e)=>fu(e),getCurrentScope:()=>lu().getScope(),getIsolationScope:()=>lu().getIsolationScope()}}function gu(){return pu(cc()).getCurrentScope()}function mu(){return pu(cc()).getIsolationScope()}function yu(){return gu().getClient()}function vu(t){const e=t.getPropagationContext(),{traceId:n,spanId:r,parentSpanId:i}=e;return Bc({trace_id:n,span_id:r,parent_span_id:i})}const _u="undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__;var Eu;function wu(t){return new Tu((e=>{e(t)}))}function bu(t){return new Tu(((e,n)=>{n(t)}))}!function(t){t[t.PENDING=0]="PENDING";t[t.RESOLVED=1]="RESOLVED";t[t.REJECTED=2]="REJECTED"}(Eu||(Eu={}));class Tu{constructor(t){Tu.prototype.__init.call(this),Tu.prototype.__init2.call(this),Tu.prototype.__init3.call(this),Tu.prototype.__init4.call(this),this._state=Eu.PENDING,this._handlers=[];try{t(this._resolve,this._reject)}catch(t){this._reject(t)}}then(t,e){return new Tu(((n,r)=>{this._handlers.push([!1,e=>{if(t)try{n(t(e))}catch(t){r(t)}else n(e)},t=>{if(e)try{n(e(t))}catch(t){r(t)}else r(t)}]),this._executeHandlers()}))}catch(t){return this.then((t=>t),t)}finally(t){return new Tu(((e,n)=>{let r,i;return this.then((e=>{i=!1,r=e,t&&t()}),(e=>{i=!0,r=e,t&&t()})).then((()=>{i?n(r):e(r)}))}))}__init(){this._resolve=t=>{this._setResult(Eu.RESOLVED,t)}}__init2(){this._reject=t=>{this._setResult(Eu.REJECTED,t)}}__init3(){this._setResult=(t,e)=>{this._state===Eu.PENDING&&(Ec(e)?e.then(this._resolve,this._reject):(this._state=t,this._value=e,this._executeHandlers()))}}__init4(){this._executeHandlers=()=>{if(this._state===Eu.PENDING)return;const t=this._handlers.slice();this._handlers=[],t.forEach((t=>{t[0]||(this._state===Eu.RESOLVED&&t[1](this._value),this._state===Eu.REJECTED&&t[2](this._value),t[0]=!0)}))}}}function Iu(t,e,n,r=0){return new Tu(((i,s)=>{const o=t[r];if(null===e||"function"!=typeof o)i(e);else{const a=o({...e},n);_u&&o.id&&null===a&&Rc.log(`Event processor "${o.id}" dropped event`),Ec(a)?a.then((e=>Iu(t,e,n,r+1).then(i))).then(null,s):Iu(t,a,n,r+1).then(i).then(null,s)}}))}let Su,Au,ku;function Cu(t){const e=oc._sentryDebugIds;if(!e)return{};const n=Object.keys(e);return ku&&n.length===Au||(Au=n.length,ku=n.reduce(((n,r)=>{Su||(Su={});const i=Su[r];if(i)n[i[0]]=i[1];else{const i=t(r);for(let t=i.length-1;t>=0;t--){const s=i[t],o=s&&s.filename,a=e[r];if(o&&a){n[o]=a,Su[r]=[o,a];break}}}return n}),{})),ku}const Ou="?",Ru=/\(error: (.*)\)/,Nu=/captureMessage|captureException/;function Du(...t){const e=t.sort(((t,e)=>t[0]-e[0])).map((t=>t[1]));return(t,n=0,r=0)=>{const i=[],s=t.split("\n");for(let t=n;t<s.length;t++){const n=s[t];if(n.length>1024)continue;const o=Ru.test(n)?n.replace(Ru,"$1"):n;if(!o.match(/\S*Error: /)){for(const t of e){const e=t(o);if(e){i.push(e);break}}if(i.length>=50+r)break}}return function(t){if(!t.length)return[];const e=Array.from(t);/sentryWrapped/.test(Pu(e).function||"")&&e.pop();e.reverse(),Nu.test(Pu(e).function||"")&&(e.pop(),Nu.test(Pu(e).function||"")&&e.pop());return e.slice(0,50).map((t=>({...t,filename:t.filename||Pu(e).filename,function:t.function||Ou})))}(i.slice(r))}}function Pu(t){return t[t.length-1]||{}}const xu="<anonymous>";function Lu(t){try{return t&&"function"==typeof t&&t.name||xu}catch(t){return xu}}function Mu(t){const e=t.exception;if(e){const t=[];try{return e.values.forEach((e=>{e.stacktrace.frames&&t.push(...e.stacktrace.frames)})),t}catch(t){return}}}function Uu(t,e=100,n=1/0){try{return Vu("",t,e,n)}catch(t){return{ERROR:`**non-serializable** (${t})`}}}function Fu(t,e=3,n=102400){const r=Uu(t,e);return i=r,function(t){return~-encodeURI(t).split(/%..|./).length}(JSON.stringify(i))>n?Fu(t,e-1,n):r;var i}function Vu(t,e,n=1/0,r=1/0,i=function(){const t="function"==typeof WeakSet,e=t?new WeakSet:[];return[function(n){if(t)return!!e.has(n)||(e.add(n),!1);for(let t=0;t<e.length;t++)if(e[t]===n)return!0;return e.push(n),!1},function(n){if(t)e.delete(n);else for(let t=0;t<e.length;t++)if(e[t]===n){e.splice(t,1);break}}]}()){const[s,o]=i;if(null==e||["boolean","string"].includes(typeof e)||"number"==typeof e&&Number.isFinite(e))return e;const a=function(t,e){try{if("domain"===t&&e&&"object"==typeof e&&e._events)return"[Domain]";if("domainEmitter"===t)return"[DomainEmitter]";if("undefined"!=typeof global&&e===global)return"[Global]";if("undefined"!=typeof window&&e===window)return"[Window]";if("undefined"!=typeof document&&e===document)return"[Document]";if(bc(e))return"[VueViewModel]";if(vc(n=e)&&"nativeEvent"in n&&"preventDefault"in n&&"stopPropagation"in n)return"[SyntheticEvent]";if("number"==typeof e&&!Number.isFinite(e))return`[${e}]`;if("function"==typeof e)return`[Function: ${Lu(e)}]`;if("symbol"==typeof e)return`[${String(e)}]`;if("bigint"==typeof e)return`[BigInt: ${String(e)}]`;const r=function(t){const e=Object.getPrototypeOf(t);return e?e.constructor.name:"null prototype"}(e);return/^HTML(\w*)Element$/.test(r)?`[HTMLElement: ${r}]`:`[object ${r}]`}catch(t){return`**non-serializable** (${t})`}var n}(t,e);if(!a.startsWith("[object "))return a;if(e.__sentry_skip_normalization__)return e;const c="number"==typeof e.__sentry_override_normalization_depth__?e.__sentry_override_normalization_depth__:n;if(0===c)return a.replace("object ","");if(s(e))return"[Circular ~]";const u=e;if(u&&"function"==typeof u.toJSON)try{return Vu("",u.toJSON(),c-1,r,i)}catch(t){}const l=Array.isArray(e)?[]:{};let h=0;const d=Vc(e);for(const t in d){if(!Object.prototype.hasOwnProperty.call(d,t))continue;if(h>=r){l[t]="[MaxProperties ~]";break}const e=d[t];l[t]=Vu(t,e,c-1,r,i),h++}return o(e),l}const ju="sentry-",$u=/^sentry-/;function Bu(t){const e=function(t){if(!t||!gc(t)&&!Array.isArray(t))return;if(Array.isArray(t))return t.reduce(((t,e)=>{const n=Hu(e);return Object.entries(n).forEach((([e,n])=>{t[e]=n})),t}),{});return Hu(t)}(t);if(!e)return;const n=Object.entries(e).reduce(((t,[e,n])=>{if(e.match($u)){t[e.slice(ju.length)]=n}return t}),{});return Object.keys(n).length>0?n:void 0}function Hu(t){return t.split(",").map((t=>t.split("=").map((t=>decodeURIComponent(t.trim()))))).reduce(((t,[e,n])=>(e&&n&&(t[e]=n),t)),{})}const zu="_sentryMetrics";function Gu(t){const e=t[zu];if(!e)return;const n={};for(const[,[t,r]]of e){(n[t]||(n[t]=[])).push(Bc(r))}return n}let Ku=!1;function qu(t){const{spanId:e,traceId:n,isRemote:r}=t.spanContext();return Bc({parent_span_id:r?e:Yu(t).parent_span_id,span_id:r?nu():e,trace_id:n})}function Wu(t){return"number"==typeof t?Xu(t):Array.isArray(t)?t[0]+t[1]/1e9:t instanceof Date?Xu(t.getTime()):Gc()}function Xu(t){return t>9999999999?t/1e3:t}function Yu(t){if(function(t){return"function"==typeof t.getSpanJSON}(t))return t.getSpanJSON();try{const{spanId:e,traceId:n}=t.spanContext();if(function(t){const e=t;return!!(e.attributes&&e.startTime&&e.name&&e.endTime&&e.status)}(t)){const{attributes:r,startTime:i,name:s,endTime:o,parentSpanId:a,status:c}=t;return Bc({span_id:e,trace_id:n,data:r,description:s,parent_span_id:a,start_timestamp:Wu(i),timestamp:Wu(o)||void 0,status:Qu(c),op:r["sentry.op"],origin:r["sentry.origin"],_metrics_summary:Gu(t)})}return{span_id:e,trace_id:n}}catch(t){return{}}}function Ju(t){const{traceFlags:e}=t.spanContext();return 1===e}function Qu(t){if(t&&0!==t.code)return 1===t.code?"ok":t.message||"unknown_error"}const Zu="_sentryRootSpan";function tl(t){return t[Zu]||t}function el(){Ku||(Oc((()=>{console.warn("[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.")})),Ku=!0)}const nl="_frozenDsc";function rl(t,e){const n=e.getOptions(),{publicKey:r}=e.getDsn()||{},i=Bc({environment:n.environment||ic,release:n.release,public_key:r,trace_id:t});return e.emit("createDsc",i),i}function il(t){const e=yu();if(!e)return{};const n=tl(t),r=n[nl];if(r)return r;const i=n.spanContext().traceState,s=i&&i.get("sentry.dsc"),o=s&&Bu(s);if(o)return o;const a=rl(t.spanContext().traceId,e),c=Yu(n),u=c.data||{},l=u["sentry.sample_rate"];null!=l&&(a.sample_rate=`${l}`);const h=u["sentry.source"],d=c.description;return"url"!==h&&d&&(a.transaction=d),function(t){if("boolean"==typeof __SENTRY_TRACING__&&!__SENTRY_TRACING__)return!1;const e=yu(),n=t||e&&e.getOptions();return!!n&&(n.enableTracing||"tracesSampleRate"in n||"tracesSampler"in n)}()&&(a.sampled=String(Ju(n))),e.emit("createDsc",a,n),a}function sl(t,e){const{fingerprint:n,span:r,breadcrumbs:i,sdkProcessingMetadata:s}=e;!function(t,e){const{extra:n,tags:r,user:i,contexts:s,level:o,transactionName:a}=e,c=Bc(n);c&&Object.keys(c).length&&(t.extra={...c,...t.extra});const u=Bc(r);u&&Object.keys(u).length&&(t.tags={...u,...t.tags});const l=Bc(i);l&&Object.keys(l).length&&(t.user={...l,...t.user});const h=Bc(s);h&&Object.keys(h).length&&(t.contexts={...h,...t.contexts});o&&(t.level=o);a&&"transaction"!==t.type&&(t.transaction=a)}(t,e),r&&function(t,e){t.contexts={trace:qu(e),...t.contexts},t.sdkProcessingMetadata={dynamicSamplingContext:il(e),...t.sdkProcessingMetadata};const n=tl(e),r=Yu(n).description;r&&!t.transaction&&"transaction"===t.type&&(t.transaction=r)}(t,r),function(t,e){t.fingerprint=t.fingerprint?Array.isArray(t.fingerprint)?t.fingerprint:[t.fingerprint]:[],e&&(t.fingerprint=t.fingerprint.concat(e));t.fingerprint&&!t.fingerprint.length&&delete t.fingerprint}(t,n),function(t,e){const n=[...t.breadcrumbs||[],...e];t.breadcrumbs=n.length?n:void 0}(t,i),function(t,e){t.sdkProcessingMetadata={...t.sdkProcessingMetadata,...e}}(t,s)}function ol(t,e){const{extra:n,tags:r,user:i,contexts:s,level:o,sdkProcessingMetadata:a,breadcrumbs:c,fingerprint:u,eventProcessors:l,attachments:h,propagationContext:d,transactionName:f,span:p}=e;al(t,"extra",n),al(t,"tags",r),al(t,"user",i),al(t,"contexts",s),t.sdkProcessingMetadata=ru(t.sdkProcessingMetadata,a,2),o&&(t.level=o),f&&(t.transactionName=f),p&&(t.span=p),c.length&&(t.breadcrumbs=[...t.breadcrumbs,...c]),u.length&&(t.fingerprint=[...t.fingerprint,...u]),l.length&&(t.eventProcessors=[...t.eventProcessors,...l]),h.length&&(t.attachments=[...t.attachments,...h]),t.propagationContext={...t.propagationContext,...d}}function al(t,e,n){t[e]=ru(t[e],n,1)}function cl(t,e,n,r,i,s){const{normalizeDepth:o=3,normalizeMaxBreadth:a=1e3}=t,c={...e,event_id:e.event_id||n.event_id||qc(),timestamp:e.timestamp||zc()},u=n.integrations||t.integrations.map((t=>t.name));!function(t,e){const{environment:n,release:r,dist:i,maxValueLength:s=250}=e;t.environment=t.environment||n||ic,!t.release&&r&&(t.release=r);!t.dist&&i&&(t.dist=i);t.message&&(t.message=Nc(t.message,s));const o=t.exception&&t.exception.values&&t.exception.values[0];o&&o.value&&(o.value=Nc(o.value,s));const a=t.request;a&&a.url&&(a.url=Nc(a.url,s))}(c,t),function(t,e){e.length>0&&(t.sdk=t.sdk||{},t.sdk.integrations=[...t.sdk.integrations||[],...e])}(c,u),i&&i.emit("applyFrameMetadata",e),void 0===e.type&&function(t,e){const n=Cu(e);try{t.exception.values.forEach((t=>{t.stacktrace.frames.forEach((t=>{n&&t.filename&&(t.debug_id=n[t.filename])}))}))}catch(t){}}(c,t.stackParser);const l=function(t,e){if(!e)return t;const n=t?t.clone():new cu;return n.update(e),n}(r,n.captureContext);n.mechanism&&Jc(c,n.mechanism);const h=i?i.getEventProcessors():[],d=ac("globalScope",(()=>new cu)).getScopeData();if(s){ol(d,s.getScopeData())}if(l){ol(d,l.getScopeData())}const f=[...n.attachments||[],...d.attachments];f.length&&(n.attachments=f),sl(c,d);return Iu([...h,...d.eventProcessors],c,n).then((t=>(t&&function(t){const e={};try{t.exception.values.forEach((t=>{t.stacktrace.frames.forEach((t=>{t.debug_id&&(t.abs_path?e[t.abs_path]=t.debug_id:t.filename&&(e[t.filename]=t.debug_id),delete t.debug_id)}))}))}catch(t){}if(0===Object.keys(e).length)return;t.debug_meta=t.debug_meta||{},t.debug_meta.images=t.debug_meta.images||[];const n=t.debug_meta.images;Object.entries(e).forEach((([t,e])=>{n.push({type:"sourcemap",code_file:t,debug_id:e})}))}(t),"number"==typeof o&&o>0?function(t,e,n){if(!t)return null;const r={...t,...t.breadcrumbs&&{breadcrumbs:t.breadcrumbs.map((t=>({...t,...t.data&&{data:Uu(t.data,e,n)}})))},...t.user&&{user:Uu(t.user,e,n)},...t.contexts&&{contexts:Uu(t.contexts,e,n)},...t.extra&&{extra:Uu(t.extra,e,n)}};t.contexts&&t.contexts.trace&&r.contexts&&(r.contexts.trace=t.contexts.trace,t.contexts.trace.data&&(r.contexts.trace.data=Uu(t.contexts.trace.data,e,n)));t.spans&&(r.spans=t.spans.map((t=>({...t,...t.data&&{data:Uu(t.data,e,n)}}))));t.contexts&&t.contexts.flags&&r.contexts&&(r.contexts.flags=Uu(t.contexts.flags,3,n));return r}(t,o,a):t)))}function ul(t){if(t)return function(t){return t instanceof cu||"function"==typeof t}(t)||function(t){return Object.keys(t).some((t=>ll.includes(t)))}(t)?{captureContext:t}:t}const ll=["user","level","extra","contexts","tags","fingerprint","requestSession","propagationContext"];function hl(t,e){return gu().captureException(t,ul(e))}function dl(t,e){return gu().captureEvent(t,e)}function fl(t){const e=yu(),n=mu(),r=gu(),{release:i,environment:s=ic}=e&&e.getOptions()||{},{userAgent:o}=oc.navigator||{},a=Zc({release:i,environment:s,user:r.getUser()||n.getUser(),...o&&{userAgent:o},...t}),c=n.getSession();return c&&"ok"===c.status&&tu(c,{status:"exited"}),pl(),n.setSession(a),r.setSession(a),a}function pl(){const t=mu(),e=gu(),n=e.getSession()||t.getSession();n&&function(t,e){let n={};e?n={status:e}:"ok"===t.status&&(n={status:"exited"}),tu(t,n)}(n),gl(),t.setSession(),e.setSession()}function gl(){const t=mu(),e=gu(),n=yu(),r=e.getSession()||t.getSession();r&&n&&n.captureSession(r)}function ml(t=!1){t?pl():gl()}var yl=function(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(t){s(t)}}function a(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))},vl=function(t,e){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(o=0)),o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=e.call(t,o)}catch(t){a=[6,t],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},_l=function(t,e,n){return void 0===n&&(n={}),yl(void 0,void 0,void 0,(function(){var r,i,s;return vl(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,4]),[4,chrome.tabs.sendMessage(t,e,n)];case 1:return o.sent(),[2,!0];case 2:return r=o.sent(),console.error(r),[4,chrome.windows.getAll({populate:!0})];case 3:return i=o.sent(),s=i.map((function(t){return t.tabs})).flat().find((function(e){return e&&e.id===t})),hl(r,{extra:{tabId:t,theTab:s,allWindows:JSON.stringify(i,null,2)}}),[2,!1];case 4:return[2]}}))}))};const El=[];function wl(t){const e=t.defaultIntegrations||[],n=t.integrations;let r;if(e.forEach((t=>{t.isDefaultInstance=!0})),Array.isArray(n))r=[...e,...n];else if("function"==typeof n){const t=n(e);r=Array.isArray(t)?t:[t]}else r=e;const i=function(t){const e={};return t.forEach((t=>{const{name:n}=t,r=e[n];r&&!r.isDefaultInstance&&t.isDefaultInstance||(e[n]=t)})),Object.values(e)}(r),s=i.findIndex((t=>"Debug"===t.name));if(s>-1){const[t]=i.splice(s,1);i.push(t)}return i}function bl(t,e){for(const n of e)n&&n.afterAllSetup&&n.afterAllSetup(t)}function Tl(t,e,n){if(n[e.name])_u&&Rc.log(`Integration skipped because it was already installed: ${e.name}`);else{if(n[e.name]=e,-1===El.indexOf(e.name)&&"function"==typeof e.setupOnce&&(e.setupOnce(),El.push(e.name)),e.setup&&"function"==typeof e.setup&&e.setup(t),"function"==typeof e.preprocessEvent){const n=e.preprocessEvent.bind(e);t.on("preprocessEvent",((e,r)=>n(e,r,t)))}if("function"==typeof e.processEvent){const n=e.processEvent.bind(e),r=Object.assign(((e,r)=>n(e,r,t)),{id:e.name});t.addEventProcessor(r)}_u&&Rc.log(`Integration installed: ${e.name}`)}}const Il=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/,/^ResizeObserver loop completed with undelivered notifications.$/,/^Cannot redefine property: googletag$/,"undefined is not an object (evaluating 'a.L')",'can\'t redefine non-configurable property "solana"',"vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)","Can't find variable: _AutofillCallbackHandler",/^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/],Sl=(t={})=>({name:"InboundFilters",processEvent(e,n,r){const i=r.getOptions(),s=function(t={},e={}){return{allowUrls:[...t.allowUrls||[],...e.allowUrls||[]],denyUrls:[...t.denyUrls||[],...e.denyUrls||[]],ignoreErrors:[...t.ignoreErrors||[],...e.ignoreErrors||[],...t.disableErrorDefaults?[]:Il],ignoreTransactions:[...t.ignoreTransactions||[],...e.ignoreTransactions||[]],ignoreInternal:void 0===t.ignoreInternal||t.ignoreInternal}}(t,i);return function(t,e){if(e.ignoreInternal&&function(t){try{return"SentryError"===t.exception.values[0].type}catch(t){}return!1}(t))return _u&&Rc.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${Xc(t)}`),!0;if(function(t,e){if(t.type||!e||!e.length)return!1;return function(t){const e=[];t.message&&e.push(t.message);let n;try{n=t.exception.values[t.exception.values.length-1]}catch(t){}n&&n.value&&(e.push(n.value),n.type&&e.push(`${n.type}: ${n.value}`));return e}(t).some((t=>xc(t,e)))}(t,e.ignoreErrors))return _u&&Rc.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${Xc(t)}`),!0;if(function(t){if(t.type)return!1;if(!t.exception||!t.exception.values||0===t.exception.values.length)return!1;return!t.message&&!t.exception.values.some((t=>t.stacktrace||t.type&&"Error"!==t.type||t.value))}(t))return _u&&Rc.warn(`Event dropped due to not having an error message, error type or stacktrace.\nEvent: ${Xc(t)}`),!0;if(function(t,e){if("transaction"!==t.type||!e||!e.length)return!1;const n=t.transaction;return!!n&&xc(n,e)}(t,e.ignoreTransactions))return _u&&Rc.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${Xc(t)}`),!0;if(function(t,e){if(!e||!e.length)return!1;const n=Al(t);return!!n&&xc(n,e)}(t,e.denyUrls))return _u&&Rc.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${Xc(t)}.\nUrl: ${Al(t)}`),!0;if(!function(t,e){if(!e||!e.length)return!0;const n=Al(t);return!n||xc(n,e)}(t,e.allowUrls))return _u&&Rc.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${Xc(t)}.\nUrl: ${Al(t)}`),!0;return!1}(e,s)?null:e}});function Al(t){try{let e;try{e=t.exception.values[0].stacktrace.frames}catch(t){}return e?function(t=[]){for(let e=t.length-1;e>=0;e--){const n=t[e];if(n&&"<anonymous>"!==n.filename&&"[native code]"!==n.filename)return n.filename||null}return null}(e):null}catch(e){return _u&&Rc.error(`Cannot extract url for event ${Xc(t)}`),null}}let kl;const Cl=new WeakMap,Ol=()=>({name:"FunctionToString",setupOnce(){kl=Function.prototype.toString;try{Function.prototype.toString=function(...t){const e=Fc(this),n=Cl.has(yu())&&void 0!==e?e:this;return kl.apply(n,t)}}catch(t){}},setup(t){Cl.set(t,!0)}}),Rl=()=>{let t;return{name:"Dedupe",processEvent(e){if(e.type)return e;try{if(function(t,e){if(!e)return!1;if(function(t,e){const n=t.message,r=e.message;if(!n&&!r)return!1;if(n&&!r||!n&&r)return!1;if(n!==r)return!1;if(!Dl(t,e))return!1;if(!Nl(t,e))return!1;return!0}(t,e))return!0;if(function(t,e){const n=Pl(e),r=Pl(t);if(!n||!r)return!1;if(n.type!==r.type||n.value!==r.value)return!1;if(!Dl(t,e))return!1;if(!Nl(t,e))return!1;return!0}(t,e))return!0;return!1}(e,t))return _u&&Rc.warn("Event dropped due to being a duplicate of previously captured event."),null}catch(t){}return t=e}}};function Nl(t,e){let n=Mu(t),r=Mu(e);if(!n&&!r)return!0;if(n&&!r||!n&&r)return!1;if(r.length!==n.length)return!1;for(let t=0;t<r.length;t++){const e=r[t],i=n[t];if(e.filename!==i.filename||e.lineno!==i.lineno||e.colno!==i.colno||e.function!==i.function)return!1}return!0}function Dl(t,e){let n=t.fingerprint,r=e.fingerprint;if(!n&&!r)return!0;if(n&&!r||!n&&r)return!1;try{return!(n.join("")!==r.join(""))}catch(t){return!1}}function Pl(t){return t.exception&&t.exception.values&&t.exception.values[0]}const xl=oc;function Ll(){if(!("fetch"in xl))return!1;try{return new Headers,new Request("http://www.example.com"),new Response,!0}catch(t){return!1}}function Ml(t){return t&&/^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())}function Ul(t,e){!0===e.debug&&(_u?Rc.enable():Oc((()=>{console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")})));gu().update(e.initialScope);const n=new t(e);return function(t){gu().setClient(t)}(n),n.init(),n}function Fl(t){const e=t.protocol?`${t.protocol}:`:"",n=t.port?`:${t.port}`:"";return`${e}//${t.host}${n}${t.path?`/${t.path}`:""}/api/`}function Vl(t,e,n){return e||`${function(t){return`${Fl(t)}${t.projectId}/envelope/`}(t)}?${function(t,e){const n={sentry_version:"7"};return t.publicKey&&(n.sentry_key=t.publicKey),e&&(n.sentry_client=`${e.name}/${e.version}`),new URLSearchParams(n).toString()}(t,n)}`}const jl=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;function $l(t,e=!1){const{host:n,path:r,pass:i,port:s,projectId:o,protocol:a,publicKey:c}=t;return`${a}://${c}${e&&i?`:${i}`:""}@${n}${s?`:${s}`:""}/${r?`${r}/`:r}${o}`}function Bl(t){return{protocol:t.protocol,publicKey:t.publicKey||"",pass:t.pass||"",host:t.host,port:t.port||"",path:t.path||"",projectId:t.projectId}}function Hl(t){const e="string"==typeof t?function(t){const e=jl.exec(t);if(!e)return void Oc((()=>{console.error(`Invalid Sentry Dsn: ${t}`)}));const[n,r,i="",s="",o="",a=""]=e.slice(1);let c="",u=a;const l=u.split("/");if(l.length>1&&(c=l.slice(0,-1).join("/"),u=l.pop()),u){const t=u.match(/^\d+/);t&&(u=t[0])}return Bl({host:s,pass:i,path:c,projectId:u,port:o,protocol:n,publicKey:r})}(t):Bl(t);if(e&&function(t){if(!Ac)return!0;const{port:e,projectId:n,protocol:r}=t;return!(["protocol","publicKey","host","projectId"].find((e=>!t[e]&&(Rc.error(`Invalid Sentry Dsn: ${e} missing`),!0)))||(n.match(/^\d+$/)?function(t){return"http"===t||"https"===t}(r)?e&&isNaN(parseInt(e,10))&&(Rc.error(`Invalid Sentry Dsn: Invalid port ${e}`),1):(Rc.error(`Invalid Sentry Dsn: Invalid protocol ${r}`),1):(Rc.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),1)))}(e))return e}function zl(t,e=[]){return[t,e]}function Gl(t,e){const[n,r]=t;return[n,[...r,e]]}function Kl(t,e){const n=t[1];for(const t of n){if(e(t,t[0].type))return!0}return!1}function ql(t){return oc.__SENTRY__&&oc.__SENTRY__.encodePolyfill?oc.__SENTRY__.encodePolyfill(t):(new TextEncoder).encode(t)}function Wl(t){const[e,n]=t;let r=JSON.stringify(e);function i(t){"string"==typeof r?r="string"==typeof t?r+t:[ql(r),t]:r.push("string"==typeof t?ql(t):t)}for(const t of n){const[e,n]=t;if(i(`\n${JSON.stringify(e)}\n`),"string"==typeof n||n instanceof Uint8Array)i(n);else{let t;try{t=JSON.stringify(n)}catch(e){t=JSON.stringify(Uu(n))}i(t)}}return"string"==typeof r?r:function(t){const e=t.reduce(((t,e)=>t+e.length),0),n=new Uint8Array(e);let r=0;for(const e of t)n.set(e,r),r+=e.length;return n}(r)}function Xl(t){const e="string"==typeof t.data?ql(t.data):t.data;return[Bc({type:"attachment",length:e.length,filename:t.filename,content_type:t.contentType,attachment_type:t.attachmentType}),e]}const Yl={session:"session",sessions:"session",attachment:"attachment",transaction:"transaction",event:"error",client_report:"internal",user_report:"default",profile:"profile",profile_chunk:"profile",replay_event:"replay",replay_recording:"replay",check_in:"monitor",feedback:"feedback",span:"span",statsd:"metric_bucket",raw_security:"security"};function Jl(t){return Yl[t]}function Ql(t){if(!t||!t.sdk)return;const{name:e,version:n}=t.sdk;return{name:e,version:n}}function Zl(t,e,n,r){const i=Ql(n),s=t.type&&"replay_event"!==t.type?t.type:"event";!function(t,e){e&&(t.sdk=t.sdk||{},t.sdk.name=t.sdk.name||e.name,t.sdk.version=t.sdk.version||e.version,t.sdk.integrations=[...t.sdk.integrations||[],...e.integrations||[]],t.sdk.packages=[...t.sdk.packages||[],...e.packages||[]])}(t,n&&n.sdk);const o=function(t,e,n,r){const i=t.sdkProcessingMetadata&&t.sdkProcessingMetadata.dynamicSamplingContext;return{event_id:t.event_id,sent_at:(new Date).toISOString(),...e&&{sdk:e},...!!n&&r&&{dsn:$l(r)},...i&&{trace:Bc({...i})}}}(t,i,r,e);delete t.sdkProcessingMetadata;return zl(o,[[{type:s},t]])}class th extends Error{constructor(t,e="warn"){super(t),this.message=t,this.name=new.target.prototype.constructor.name,Object.setPrototypeOf(this,new.target.prototype),this.logLevel=e}}const eh="Not capturing exception because it's already been captured.";class nh{constructor(t){if(this._options=t,this._integrations={},this._numProcessing=0,this._outcomes={},this._hooks={},this._eventProcessors=[],t.dsn?this._dsn=Hl(t.dsn):_u&&Rc.warn("No DSN provided, client will not send events."),this._dsn){const e=Vl(this._dsn,t.tunnel,t._metadata?t._metadata.sdk:void 0);this._transport=t.transport({tunnel:this._options.tunnel,recordDroppedEvent:this.recordDroppedEvent.bind(this),...t.transportOptions,url:e})}const e=["enableTracing","tracesSampleRate","tracesSampler"].find((e=>e in t&&null==t[e]));e&&Oc((()=>{console.warn(`[Sentry] Deprecation warning: \`${e}\` is set to undefined, which leads to tracing being enabled. In v9, a value of \`undefined\` will result in tracing being disabled.`)}))}captureException(t,e,n){const r=qc();if(Qc(t))return _u&&Rc.log(eh),r;const i={event_id:r,...e};return this._process(this.eventFromException(t,i).then((t=>this._captureEvent(t,i,n)))),i.event_id}captureMessage(t,e,n,r){const i={event_id:qc(),...n},s=mc(t)?t:String(t),o=yc(t)?this.eventFromMessage(s,e,i):this.eventFromException(t,i);return this._process(o.then((t=>this._captureEvent(t,i,r)))),i.event_id}captureEvent(t,e,n){const r=qc();if(e&&e.originalException&&Qc(e.originalException))return _u&&Rc.log(eh),r;const i={event_id:r,...e},s=(t.sdkProcessingMetadata||{}).capturedSpanScope;return this._process(this._captureEvent(t,i,s||n)),i.event_id}captureSession(t){"string"!=typeof t.release?_u&&Rc.warn("Discarded session because of missing or non-string release"):(this.sendSession(t),tu(t,{init:!1}))}getDsn(){return this._dsn}getOptions(){return this._options}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}flush(t){const e=this._transport;return e?(this.emit("flush"),this._isClientDoneProcessing(t).then((n=>e.flush(t).then((t=>n&&t))))):wu(!0)}close(t){return this.flush(t).then((t=>(this.getOptions().enabled=!1,this.emit("close"),t)))}getEventProcessors(){return this._eventProcessors}addEventProcessor(t){this._eventProcessors.push(t)}init(){(this._isEnabled()||this._options.integrations.some((({name:t})=>t.startsWith("Spotlight"))))&&this._setupIntegrations()}getIntegrationByName(t){return this._integrations[t]}addIntegration(t){const e=this._integrations[t.name];Tl(this,t,this._integrations),e||bl(this,[t])}sendEvent(t,e={}){this.emit("beforeSendEvent",t,e);let n=Zl(t,this._dsn,this._options._metadata,this._options.tunnel);for(const t of e.attachments||[])n=Gl(n,Xl(t));const r=this.sendEnvelope(n);r&&r.then((e=>this.emit("afterSendEvent",t,e)),null)}sendSession(t){const e=function(t,e,n,r){const i=Ql(n);return zl({sent_at:(new Date).toISOString(),...i&&{sdk:i},...!!r&&e&&{dsn:$l(e)}},["aggregates"in t?[{type:"sessions"},t]:[{type:"session"},t.toJSON()]])}(t,this._dsn,this._options._metadata,this._options.tunnel);this.sendEnvelope(e)}recordDroppedEvent(t,e,n){if(this._options.sendClientReports){const r="number"==typeof n?n:1,i=`${t}:${e}`;_u&&Rc.log(`Recording outcome: "${i}"${r>1?` (${r} times)`:""}`),this._outcomes[i]=(this._outcomes[i]||0)+r}}on(t,e){const n=this._hooks[t]=this._hooks[t]||[];return n.push(e),()=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)}}emit(t,...e){const n=this._hooks[t];n&&n.forEach((t=>t(...e)))}sendEnvelope(t){return this.emit("beforeEnvelope",t),this._isEnabled()&&this._transport?this._transport.send(t).then(null,(t=>(_u&&Rc.error("Error while sending envelope:",t),t))):(_u&&Rc.error("Transport disabled"),wu({}))}_setupIntegrations(){const{integrations:t}=this._options;this._integrations=function(t,e){const n={};return e.forEach((e=>{e&&Tl(t,e,n)})),n}(this,t),bl(this,t)}_updateSessionFromEvent(t,e){let n=!1,r=!1;const i=e.exception&&e.exception.values;if(i){r=!0;for(const t of i){const e=t.mechanism;if(e&&!1===e.handled){n=!0;break}}}const s="ok"===t.status;(s&&0===t.errors||s&&n)&&(tu(t,{...n&&{status:"crashed"},errors:t.errors||Number(r||n)}),this.captureSession(t))}_isClientDoneProcessing(t){return new Tu((e=>{let n=0;const r=setInterval((()=>{0==this._numProcessing?(clearInterval(r),e(!0)):(n+=1,t&&n>=t&&(clearInterval(r),e(!1)))}),1)}))}_isEnabled(){return!1!==this.getOptions().enabled&&void 0!==this._transport}_prepareEvent(t,e,n=gu(),r=mu()){const i=this.getOptions(),s=Object.keys(this._integrations);return!e.integrations&&s.length>0&&(e.integrations=s),this.emit("preprocessEvent",t,e),t.type||r.setLastEventId(t.event_id||e.event_id),cl(i,t,e,n,this,r).then((t=>{if(null===t)return t;t.contexts={trace:vu(n),...t.contexts};const e=function(t,e){const n=e.getPropagationContext();return n.dsc||rl(n.traceId,t)}(this,n);return t.sdkProcessingMetadata={dynamicSamplingContext:e,...t.sdkProcessingMetadata},t}))}_captureEvent(t,e={},n){return this._processEvent(t,e,n).then((t=>t.event_id),(t=>{if(_u){const e=t;"log"===e.logLevel?Rc.log(e.message):Rc.warn(e)}}))}_processEvent(t,e,n){const r=this.getOptions(),{sampleRate:i}=r,s=ih(t),o=rh(t),a=t.type||"error",c=`before send for type \`${a}\``,u=void 0===i?void 0:function(t){if("boolean"==typeof t)return Number(t);const e="string"==typeof t?parseFloat(t):t;if(!("number"!=typeof e||isNaN(e)||e<0||e>1))return e;_u&&Rc.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`)}(i);if(o&&"number"==typeof u&&Math.random()>u)return this.recordDroppedEvent("sample_rate","error",t),bu(new th(`Discarding event because it's not included in the random sample (sampling rate = ${i})`,"log"));const l="replay_event"===a?"replay":a,h=(t.sdkProcessingMetadata||{}).capturedSpanIsolationScope;return this._prepareEvent(t,e,n,h).then((n=>{if(null===n)throw this.recordDroppedEvent("event_processor",l,t),new th("An event processor returned `null`, will not send event.","log");if(e.data&&!0===e.data.__sentry__)return n;const i=function(t,e,n,r){const{beforeSend:i,beforeSendTransaction:s,beforeSendSpan:o}=e;if(rh(n)&&i)return i(n,r);if(ih(n)){if(n.spans&&o){const e=[];for(const r of n.spans){const n=o(r);n?e.push(n):(el(),t.recordDroppedEvent("before_send","span"))}n.spans=e}if(s){if(n.spans){const t=n.spans.length;n.sdkProcessingMetadata={...n.sdkProcessingMetadata,spanCountBeforeProcessing:t}}return s(n,r)}}return n}(this,r,n,e);return function(t,e){const n=`${e} must return \`null\` or a valid event.`;if(Ec(t))return t.then((t=>{if(!vc(t)&&null!==t)throw new th(n);return t}),(t=>{throw new th(`${e} rejected with ${t}`)}));if(!vc(t)&&null!==t)throw new th(n);return t}(i,c)})).then((r=>{if(null===r){if(this.recordDroppedEvent("before_send",l,t),s){const e=1+(t.spans||[]).length;this.recordDroppedEvent("before_send","span",e)}throw new th(`${c} returned \`null\`, will not send event.`,"log")}const i=n&&n.getSession();if(!s&&i&&this._updateSessionFromEvent(i,r),s){const t=(r.sdkProcessingMetadata&&r.sdkProcessingMetadata.spanCountBeforeProcessing||0)-(r.spans?r.spans.length:0);t>0&&this.recordDroppedEvent("before_send","span",t)}const o=r.transaction_info;if(s&&o&&r.transaction!==t.transaction){const t="custom";r.transaction_info={...o,source:t}}return this.sendEvent(r,e),r})).then(null,(t=>{if(t instanceof th)throw t;throw this.captureException(t,{data:{__sentry__:!0},originalException:t}),new th(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${t}`)}))}_process(t){this._numProcessing++,t.then((t=>(this._numProcessing--,t)),(t=>(this._numProcessing--,t)))}_clearOutcomes(){const t=this._outcomes;return this._outcomes={},Object.entries(t).map((([t,e])=>{const[n,r]=t.split(":");return{reason:n,category:r,quantity:e}}))}_flushOutcomes(){_u&&Rc.log("Flushing outcomes...");const t=this._clearOutcomes();if(0===t.length)return void(_u&&Rc.log("No outcomes to send"));if(!this._dsn)return void(_u&&Rc.log("No dsn provided, will not send outcomes"));_u&&Rc.log("Sending outcomes:",t);const e=(n=t,zl((r=this._options.tunnel&&$l(this._dsn))?{dsn:r}:{},[[{type:"client_report"},{timestamp:i||zc(),discarded_events:n}]]));var n,r,i;this.sendEnvelope(e)}}function rh(t){return void 0===t.type}function ih(t){return"transaction"===t.type}const sh="undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__;function oh(t,e){const n=uh(t,e),r={type:dh(e),value:fh(e)};return n.length&&(r.stacktrace={frames:n}),void 0===r.type&&""===r.value&&(r.value="Unrecoverable error caught"),r}function ah(t,e,n,r){const i=yu(),s=i&&i.getOptions().normalizeDepth,o=function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)){const n=t[e];if(n instanceof Error)return n}return}(e),a={__serialized__:Fu(e,s)};if(o)return{exception:{values:[oh(t,o)]},extra:a};const c={exception:{values:[{type:_c(e)?e.constructor.name:r?"UnhandledRejection":"Error",value:mh(e,{isUnhandledRejection:r})}]},extra:a};if(n){const e=uh(t,n);e.length&&(c.exception.values[0].stacktrace={frames:e})}return c}function ch(t,e){return{exception:{values:[oh(t,e)]}}}function uh(t,e){const n=e.stacktrace||e.stack||"",r=function(t){if(t&&lh.test(t.message))return 1;return 0}(e),i=function(t){if("number"==typeof t.framesToPop)return t.framesToPop;return 0}(e);try{return t(n,r,i)}catch(t){}return[]}const lh=/Minified React error #\d+;/i;function hh(t){return"undefined"!=typeof WebAssembly&&void 0!==WebAssembly.Exception&&t instanceof WebAssembly.Exception}function dh(t){const e=t&&t.name;if(!e&&hh(t)){return t.message&&Array.isArray(t.message)&&2==t.message.length?t.message[0]:"WebAssembly.Exception"}return e}function fh(t){const e=t&&t.message;return e?e.error&&"string"==typeof e.error.message?e.error.message:hh(t)&&Array.isArray(t.message)&&2==t.message.length?t.message[1]:e:"No error message"}function ph(t,e,n,r,i){let s;if(fc(e)&&e.error){return ch(t,e.error)}if(pc(e)||dc(e,"DOMException")){const i=e;if("stack"in e)s=ch(t,e);else{const e=i.name||(pc(i)?"DOMError":"DOMException"),o=i.message?`${e}: ${i.message}`:e;s=gh(t,o,n,r),Yc(s,o)}return"code"in i&&(s.tags={...s.tags,"DOMException.code":`${i.code}`}),s}if(hc(e))return ch(t,e);if(vc(e)||_c(e)){return s=ah(t,e,n,i),Jc(s,{synthetic:!0}),s}return s=gh(t,e,n,r),Yc(s,`${e}`,void 0),Jc(s,{synthetic:!0}),s}function gh(t,e,n,r){const i={};if(r&&n){const r=uh(t,n);r.length&&(i.exception={values:[{value:e,stacktrace:{frames:r}}]}),Jc(i,{synthetic:!0})}if(mc(e)){const{__sentry_template_string__:t,__sentry_template_values__:n}=e;return i.logentry={message:t,params:n},i}return i.message=e,i}function mh(t,{isUnhandledRejection:e}){const n=function(t,e=40){const n=Object.keys(Vc(t));n.sort();const r=n[0];if(!r)return"[object has no keys]";if(r.length>=e)return Nc(r,e);for(let t=n.length;t>0;t--){const r=n.slice(0,t).join(", ");if(!(r.length>e))return t===n.length?r:Nc(r,e)}return""}(t),r=e?"promise rejection":"exception";if(fc(t))return`Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``;if(_c(t)){return`Event \`${function(t){try{const e=Object.getPrototypeOf(t);return e?e.constructor.name:void 0}catch(t){}}(t)}\` (type=${t.type}) captured as ${r}`}return`Object captured as ${r} with keys: ${n}`}const yh=oc;let vh=0;function _h(){return vh>0}function Eh(t,e={}){if(!function(t){return"function"==typeof t}(t))return t;try{const e=t.__sentry_wrapped__;if(e)return"function"==typeof e?e:t;if(Fc(t))return t}catch(e){return t}const n=function(...n){try{const r=n.map((t=>Eh(t,e)));return t.apply(this,r)}catch(t){throw vh++,setTimeout((()=>{vh--})),function(...t){const e=pu(cc());if(2===t.length){const[n,r]=t;return n?e.withSetScope(n,r):e.withScope(r)}e.withScope(t[0])}((r=>{r.addEventProcessor((t=>(e.mechanism&&(Yc(t,void 0,void 0),Jc(t,e.mechanism)),t.extra={...t.extra,arguments:n},t))),hl(t)})),t}};try{for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}catch(t){}Uc(n,t),Mc(t,"__sentry_wrapped__",n);try{Object.getOwnPropertyDescriptor(n,"name").configurable&&Object.defineProperty(n,"name",{get:()=>t.name})}catch(t){}return n}class wh extends nh{constructor(t){const e={parentSpanIsAlwaysRootSpan:!0,...t};!function(t,e,n=[e],r="npm"){const i=t._metadata||{};i.sdk||(i.sdk={name:`sentry.javascript.${e}`,packages:n.map((t=>({name:`${r}:@sentry/${t}`,version:sc}))),version:sc}),t._metadata=i}(e,"browser",["browser"],yh.SENTRY_SDK_SOURCE||"npm"),super(e),e.sendClientReports&&yh.document&&yh.document.addEventListener("visibilitychange",(()=>{"hidden"===yh.document.visibilityState&&this._flushOutcomes()}))}eventFromException(t,e){return function(t,e,n,r){const i=ph(t,e,n&&n.syntheticException||void 0,r);return Jc(i),i.level="error",n&&n.event_id&&(i.event_id=n.event_id),wu(i)}(this._options.stackParser,t,e,this._options.attachStacktrace)}eventFromMessage(t,e="info",n){return function(t,e,n="info",r,i){const s=gh(t,e,r&&r.syntheticException||void 0,i);return s.level=n,r&&r.event_id&&(s.event_id=r.event_id),wu(s)}(this._options.stackParser,t,e,n,this._options.attachStacktrace)}captureUserFeedback(t){if(!this._isEnabled())return void(sh&&Rc.warn("SDK not enabled, will not capture user feedback."));const e=function(t,{metadata:e,tunnel:n,dsn:r}){const i={event_id:t.event_id,sent_at:(new Date).toISOString(),...e&&e.sdk&&{sdk:{name:e.sdk.name,version:e.sdk.version}},...!!n&&!!r&&{dsn:$l(r)}},s=function(t){return[{type:"user_report"},t]}(t);return zl(i,[s])}(t,{metadata:this.getSdkMetadata(),dsn:this.getDsn(),tunnel:this.getOptions().tunnel});this.sendEnvelope(e)}_prepareEvent(t,e,n){return t.platform=t.platform||"javascript",super._prepareEvent(t,e,n)}}const bh={},Th={};function Ih(t,e){bh[t]=bh[t]||[],bh[t].push(e)}function Sh(t,e){if(!Th[t]){Th[t]=!0;try{e()}catch(e){Ac&&Rc.error(`Error while instrumenting ${t}`,e)}}}function Ah(t,e){const n=t&&bh[t];if(n)for(const r of n)try{r(e)}catch(e){Ac&&Rc.error(`Error while triggering instrumentation handler.\nType: ${t}\nName: ${Lu(r)}\nError:`,e)}}const kh=oc;let Ch,Oh,Rh;function Nh(){if(!kh.document)return;const t=Ah.bind(null,"dom"),e=Dh(t,!0);kh.document.addEventListener("click",e,!1),kh.document.addEventListener("keypress",e,!1),["EventTarget","Node"].forEach((e=>{const n=kh[e],r=n&&n.prototype;r&&r.hasOwnProperty&&r.hasOwnProperty("addEventListener")&&(Lc(r,"addEventListener",(function(e){return function(n,r,i){if("click"===n||"keypress"==n)try{const r=this.__sentry_instrumentation_handlers__=this.__sentry_instrumentation_handlers__||{},s=r[n]=r[n]||{refCount:0};if(!s.handler){const r=Dh(t);s.handler=r,e.call(this,n,r,i)}s.refCount++}catch(t){}return e.call(this,n,r,i)}})),Lc(r,"removeEventListener",(function(t){return function(e,n,r){if("click"===e||"keypress"==e)try{const n=this.__sentry_instrumentation_handlers__||{},i=n[e];i&&(i.refCount--,i.refCount<=0&&(t.call(this,e,i.handler,r),i.handler=void 0,delete n[e]),0===Object.keys(n).length&&delete this.__sentry_instrumentation_handlers__)}catch(t){}return t.call(this,e,n,r)}})))}))}function Dh(t,e=!1){return n=>{if(!n||n._sentryCaptured)return;const r=function(t){try{return t.target}catch(t){return null}}(n);if(function(t,e){return"keypress"===t&&(!e||!e.tagName||"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName&&!e.isContentEditable)}(n.type,r))return;Mc(n,"_sentryCaptured",!0),r&&!r._sentryId&&Mc(r,"_sentryId",qc());const i="keypress"===n.type?"input":n.type;if(!function(t){if(t.type!==Oh)return!1;try{if(!t.target||t.target._sentryId!==Rh)return!1}catch(t){}return!0}(n)){t({event:n,name:i,global:e}),Oh=n.type,Rh=r?r._sentryId:void 0}clearTimeout(Ch),Ch=kh.setTimeout((()=>{Rh=void 0,Oh=void 0}),1e3)}}const Ph="__sentry_xhr_v3__";function xh(){if(!kh.XMLHttpRequest)return;const t=XMLHttpRequest.prototype;t.open=new Proxy(t.open,{apply(t,e,n){const r=new Error,i=1e3*Gc(),s=gc(n[0])?n[0].toUpperCase():void 0,o=function(t){if(gc(t))return t;try{return t.toString()}catch(t){}return}(n[1]);if(!s||!o)return t.apply(e,n);e[Ph]={method:s,url:o,request_headers:{}},"POST"===s&&o.match(/sentry_key/)&&(e.__sentry_own_request__=!0);const a=()=>{const t=e[Ph];if(t&&4===e.readyState){try{t.status_code=e.status}catch(t){}Ah("xhr",{endTimestamp:1e3*Gc(),startTimestamp:i,xhr:e,virtualError:r})}};return"onreadystatechange"in e&&"function"==typeof e.onreadystatechange?e.onreadystatechange=new Proxy(e.onreadystatechange,{apply:(t,e,n)=>(a(),t.apply(e,n))}):e.addEventListener("readystatechange",a),e.setRequestHeader=new Proxy(e.setRequestHeader,{apply(t,e,n){const[r,i]=n,s=e[Ph];return s&&gc(r)&&gc(i)&&(s.request_headers[r.toLowerCase()]=i),t.apply(e,n)}}),t.apply(e,n)}}),t.send=new Proxy(t.send,{apply(t,e,n){const r=e[Ph];if(!r)return t.apply(e,n);void 0!==n[0]&&(r.body=n[0]);return Ah("xhr",{startTimestamp:1e3*Gc(),xhr:e}),t.apply(e,n)}})}const Lh=oc;let Mh;function Uh(t){const e="history";Ih(e,t),Sh(e,Fh)}function Fh(){if(!function(){const t=Lh.chrome,e=t&&t.app&&t.app.runtime,n="history"in Lh&&!!Lh.history.pushState&&!!Lh.history.replaceState;return!e&&n}())return;const t=kh.onpopstate;function e(t){return function(...e){const n=e.length>2?e[2]:void 0;if(n){const t=Mh,e=String(n);Mh=e;Ah("history",{from:t,to:e})}return t.apply(this,e)}}kh.onpopstate=function(...e){const n=kh.location.href,r=Mh;Mh=n;if(Ah("history",{from:r,to:n}),t)try{return t.apply(this,e)}catch(t){}},Lc(kh.history,"pushState",e),Lc(kh.history,"replaceState",e)}function Vh(){"console"in oc&&kc.forEach((function(t){t in oc.console&&Lc(oc.console,t,(function(e){return Cc[t]=e,function(...e){Ah("console",{args:e,level:t});const n=Cc[t];n&&n.apply(oc.console,e)}}))}))}function jh(t,e=!1){e&&!function(){if("string"==typeof EdgeRuntime)return!0;if(!Ll())return!1;if(Ml(xl.fetch))return!0;let t=!1;const e=xl.document;if(e&&"function"==typeof e.createElement)try{const n=e.createElement("iframe");n.hidden=!0,e.head.appendChild(n),n.contentWindow&&n.contentWindow.fetch&&(t=Ml(n.contentWindow.fetch)),e.head.removeChild(n)}catch(t){Ac&&Rc.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",t)}return t}()||Lc(oc,"fetch",(function(e){return function(...n){const r=new Error,{method:i,url:s}=function(t){if(0===t.length)return{method:"GET",url:""};if(2===t.length){const[e,n]=t;return{url:Bh(e),method:$h(n,"method")?String(n.method).toUpperCase():"GET"}}const e=t[0];return{url:Bh(e),method:$h(e,"method")?String(e.method).toUpperCase():"GET"}}(n),o={args:n,fetchData:{method:i,url:s},startTimestamp:1e3*Gc(),virtualError:r};return t||Ah("fetch",{...o}),e.apply(oc,n).then((async e=>(t?t(e):Ah("fetch",{...o,endTimestamp:1e3*Gc(),response:e}),e)),(t=>{throw Ah("fetch",{...o,endTimestamp:1e3*Gc(),error:t}),hc(t)&&void 0===t.stack&&(t.stack=r.stack,Mc(t,"framesToPop",1)),t}))}}))}function $h(t,e){return!!t&&"object"==typeof t&&!!t[e]}function Bh(t){return"string"==typeof t?t:t?$h(t,"url")?t.url:t.toString?t.toString():"":""}const Hh=100;function zh(t,e){const n=yu(),r=mu();if(!n)return;const{beforeBreadcrumb:i=null,maxBreadcrumbs:s=Hh}=n.getOptions();if(s<=0)return;const o={timestamp:zc(),...t},a=i?Oc((()=>i(o,e))):o;null!==a&&(n.emit&&n.emit("beforeAddBreadcrumb",a,e),r.addBreadcrumb(a,s))}function Gh(t){return"warn"===t?"warning":["fatal","error","warning","log","info","debug"].includes(t)?t:"log"}function Kh(t){return void 0===t?void 0:t>=400&&t<500?"warning":t>=500?"error":void 0}function qh(t){if(!t)return{};const e=t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!e)return{};const n=e[6]||"",r=e[8]||"";return{host:e[4],path:e[5],protocol:e[2],search:n,hash:r,relative:e[5]+n+r}}const Wh=1024,Xh=(t={})=>{const e={console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0,...t};return{name:"Breadcrumbs",setup(t){var n;e.console&&function(t){const e="console";Ih(e,t),Sh(e,Vh)}(function(t){return function(e){if(yu()!==t)return;const n={category:"console",data:{arguments:e.args,logger:"console"},level:Gh(e.level),message:Dc(e.args," ")};if("assert"===e.level){if(!1!==e.args[0])return;n.message=`Assertion failed: ${Dc(e.args.slice(1)," ")||"console.assert"}`,n.data.arguments=e.args.slice(1)}zh(n,{input:e.args,level:e.level})}}(t)),e.dom&&(n=function(t,e){return function(n){if(yu()!==t)return;let r,i,s="object"==typeof e?e.serializeAttribute:void 0,o="object"==typeof e&&"number"==typeof e.maxStringLength?e.maxStringLength:void 0;o&&o>Wh&&(sh&&Rc.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${o} was configured. Sentry will use 1024 instead.`),o=Wh),"string"==typeof s&&(s=[s]);try{const t=n.event,e=function(t){return!!t&&!!t.target}(t)?t.target:t;r=Ic(e,{keyAttrs:s,maxStringLength:o}),i=function(t){if(!Tc.HTMLElement)return null;let e=t;for(let t=0;t<5;t++){if(!e)return null;if(e instanceof HTMLElement){if(e.dataset.sentryComponent)return e.dataset.sentryComponent;if(e.dataset.sentryElement)return e.dataset.sentryElement}e=e.parentNode}return null}(e)}catch(t){r="<unknown>"}if(0===r.length)return;const a={category:`ui.${n.name}`,message:r};i&&(a.data={"ui.component_name":i}),zh(a,{event:n.event,name:n.name,global:n.global})}}(t,e.dom),Ih("dom",n),Sh("dom",Nh)),e.xhr&&function(t){Ih("xhr",t),Sh("xhr",xh)}(function(t){return function(e){if(yu()!==t)return;const{startTimestamp:n,endTimestamp:r}=e,i=e.xhr[Ph];if(!n||!r||!i)return;const{method:s,url:o,status_code:a,body:c}=i,u={method:s,url:o,status_code:a},l={xhr:e.xhr,input:c,startTimestamp:n,endTimestamp:r};zh({category:"xhr",data:u,type:"http",level:Kh(a)},l)}}(t)),e.fetch&&function(t,e){const n="fetch";Ih(n,t),Sh(n,(()=>jh(void 0,e)))}(function(t){return function(e){if(yu()!==t)return;const{startTimestamp:n,endTimestamp:r}=e;if(r&&(!e.fetchData.url.match(/sentry_key/)||"POST"!==e.fetchData.method))if(e.error){zh({category:"fetch",data:e.fetchData,level:"error",type:"http"},{data:e.error,input:e.args,startTimestamp:n,endTimestamp:r})}else{const t=e.response,i={...e.fetchData,status_code:t&&t.status},s={input:e.args,response:t,startTimestamp:n,endTimestamp:r};zh({category:"fetch",data:i,type:"http",level:Kh(i.status_code)},s)}}}(t)),e.history&&Uh(function(t){return function(e){if(yu()!==t)return;let n=e.from,r=e.to;const i=qh(yh.location.href);let s=n?qh(n):void 0;const o=qh(r);s&&s.path||(s=i),i.protocol===o.protocol&&i.host===o.host&&(r=o.relative),i.protocol===s.protocol&&i.host===s.host&&(n=s.relative),zh({category:"navigation",data:{from:n,to:r}})}}(t)),e.sentry&&t.on("beforeSendEvent",function(t){return function(e){yu()===t&&zh({category:"sentry."+("transaction"===e.type?"transaction":"event"),event_id:e.event_id,level:e.level,message:Xc(e)},{event:e})}}(t))}}};const Yh=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","BroadcastChannel","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","SharedWorker","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],Jh=(t={})=>{const e={XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0,...t};return{name:"BrowserApiErrors",setupOnce(){e.setTimeout&&Lc(yh,"setTimeout",Qh),e.setInterval&&Lc(yh,"setInterval",Qh),e.requestAnimationFrame&&Lc(yh,"requestAnimationFrame",Zh),e.XMLHttpRequest&&"XMLHttpRequest"in yh&&Lc(XMLHttpRequest.prototype,"send",td);const t=e.eventTarget;if(t){(Array.isArray(t)?t:Yh).forEach(ed)}}}};function Qh(t){return function(...e){const n=e[0];return e[0]=Eh(n,{mechanism:{data:{function:Lu(t)},handled:!1,type:"instrument"}}),t.apply(this,e)}}function Zh(t){return function(e){return t.apply(this,[Eh(e,{mechanism:{data:{function:"requestAnimationFrame",handler:Lu(t)},handled:!1,type:"instrument"}})])}}function td(t){return function(...e){const n=this;return["onload","onerror","onprogress","onreadystatechange"].forEach((t=>{t in n&&"function"==typeof n[t]&&Lc(n,t,(function(e){const n={mechanism:{data:{function:t,handler:Lu(e)},handled:!1,type:"instrument"}},r=Fc(e);return r&&(n.mechanism.data.handler=Lu(r)),Eh(e,n)}))})),t.apply(this,e)}}function ed(t){const e=yh[t],n=e&&e.prototype;n&&n.hasOwnProperty&&n.hasOwnProperty("addEventListener")&&(Lc(n,"addEventListener",(function(e){return function(n,r,i){try{"function"==typeof r.handleEvent&&(r.handleEvent=Eh(r.handleEvent,{mechanism:{data:{function:"handleEvent",handler:Lu(r),target:t},handled:!1,type:"instrument"}}))}catch(t){}return e.apply(this,[n,Eh(r,{mechanism:{data:{function:"addEventListener",handler:Lu(r),target:t},handled:!1,type:"instrument"}}),i])}})),Lc(n,"removeEventListener",(function(t){return function(e,n,r){try{const i=n.__sentry_wrapped__;i&&t.call(this,e,i,r)}catch(t){}return t.call(this,e,n,r)}})))}const nd=()=>({name:"BrowserSession",setupOnce(){void 0!==yh.document?(fl({ignoreDuration:!0}),ml(),Uh((({from:t,to:e})=>{void 0!==t&&t!==e&&(fl({ignoreDuration:!0}),ml())}))):sh&&Rc.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.")}});let rd=null;function id(){rd=oc.onerror,oc.onerror=function(t,e,n,r,i){const s={column:r,error:i,line:n,msg:t,url:e};return Ah("error",s),!!rd&&rd.apply(this,arguments)},oc.onerror.__SENTRY_INSTRUMENTED__=!0}let sd=null;function od(){sd=oc.onunhandledrejection,oc.onunhandledrejection=function(t){const e=t;return Ah("unhandledrejection",e),!sd||sd.apply(this,arguments)},oc.onunhandledrejection.__SENTRY_INSTRUMENTED__=!0}const ad=(t={})=>{const e={onerror:!0,onunhandledrejection:!0,...t};return{name:"GlobalHandlers",setupOnce(){Error.stackTraceLimit=50},setup(t){e.onerror&&(!function(t){!function(t){const e="error";Ih(e,t),Sh(e,id)}((e=>{const{stackParser:n,attachStacktrace:r}=ud();if(yu()!==t||_h())return;const{msg:i,url:s,line:o,column:a,error:c}=e,u=function(t,e,n,r){const i=t.exception=t.exception||{},s=i.values=i.values||[],o=s[0]=s[0]||{},a=o.stacktrace=o.stacktrace||{},c=a.frames=a.frames||[],u=r,l=n,h=gc(e)&&e.length>0?e:function(){try{return Tc.document.location.href}catch(t){return""}}();0===c.length&&c.push({colno:u,filename:h,function:Ou,in_app:!0,lineno:l});return t}(ph(n,c||i,void 0,r,!1),s,o,a);u.level="error",dl(u,{originalException:c,mechanism:{handled:!1,type:"onerror"}})}))}(t),cd("onerror")),e.onunhandledrejection&&(!function(t){!function(t){const e="unhandledrejection";Ih(e,t),Sh(e,od)}((e=>{const{stackParser:n,attachStacktrace:r}=ud();if(yu()!==t||_h())return;const i=function(t){if(yc(t))return t;try{if("reason"in t)return t.reason;if("detail"in t&&"reason"in t.detail)return t.detail.reason}catch(t){}return t}(e),s=yc(i)?{exception:{values:[{type:"UnhandledRejection",value:`Non-Error promise rejection captured with value: ${String(i)}`}]}}:ph(n,i,void 0,r,!0);s.level="error",dl(s,{originalException:i,mechanism:{handled:!1,type:"onunhandledrejection"}})}))}(t),cd("onunhandledrejection"))}}};function cd(t){sh&&Rc.log(`Global Handler attached: ${t}`)}function ud(){const t=yu();return t&&t.getOptions()||{stackParser:()=>[],attachStacktrace:!1}}const ld=()=>({name:"HttpContext",preprocessEvent(t){if(!yh.navigator&&!yh.location&&!yh.document)return;const e=t.request&&t.request.url||yh.location&&yh.location.href,{referrer:n}=yh.document||{},{userAgent:r}=yh.navigator||{},i={...t.request&&t.request.headers,...n&&{Referer:n},...r&&{"User-Agent":r}},s={...t.request,...e&&{url:e},headers:i};t.request=s}});function hd(t,e,n=250,r,i,s,o){if(!(s.exception&&s.exception.values&&o&&wc(o.originalException,Error)))return;const a=s.exception.values.length>0?s.exception.values[s.exception.values.length-1]:void 0;var c,u;a&&(s.exception.values=(c=dd(t,e,i,o.originalException,r,s.exception.values,a,0),u=n,c.map((t=>(t.value&&(t.value=Nc(t.value,u)),t)))))}function dd(t,e,n,r,i,s,o,a){if(s.length>=n+1)return s;let c=[...s];if(wc(r[i],Error)){fd(o,a);const s=t(e,r[i]),u=c.length;pd(s,i,u,a),c=dd(t,e,n,r[i],i,[s,...c],s,u)}return Array.isArray(r.errors)&&r.errors.forEach(((r,s)=>{if(wc(r,Error)){fd(o,a);const u=t(e,r),l=c.length;pd(u,`errors[${s}]`,l,a),c=dd(t,e,n,r,i,[u,...c],u,l)}})),c}function fd(t,e){t.mechanism=t.mechanism||{type:"generic",handled:!0},t.mechanism={...t.mechanism,..."AggregateError"===t.type&&{is_exception_group:!0},exception_id:e}}function pd(t,e,n,r){t.mechanism=t.mechanism||{type:"generic",handled:!0},t.mechanism={...t.mechanism,type:"chained",source:e,exception_id:n,parent_id:r}}const gd=(t={})=>{const e=t.limit||5,n=t.key||"cause";return{name:"LinkedErrors",preprocessEvent(t,r,i){const s=i.getOptions();hd(oh,s.stackParser,s.maxValueLength,n,e,t,r)}}};function md(t,e,n,r){const i={filename:t,function:"<anonymous>"===e?Ou:e,in_app:!0};return void 0!==n&&(i.lineno=n),void 0!==r&&(i.colno=r),i}const yd=/^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,vd=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,_d=/\((\S*)(?::(\d+))(?::(\d+))\)/,Ed=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,wd=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,bd=Du(...[[30,t=>{const e=yd.exec(t);if(e){const[,t,n,r]=e;return md(t,Ou,+n,+r)}const n=vd.exec(t);if(n){if(n[2]&&0===n[2].indexOf("eval")){const t=_d.exec(n[2]);t&&(n[2]=t[1],n[3]=t[2],n[4]=t[3])}const[t,e]=Td(n[1]||Ou,n[2]);return md(e,t,n[3]?+n[3]:void 0,n[4]?+n[4]:void 0)}}],[50,t=>{const e=Ed.exec(t);if(e){if(e[3]&&e[3].indexOf(" > eval")>-1){const t=wd.exec(e[3]);t&&(e[1]=e[1]||"eval",e[3]=t[1],e[4]=t[2],e[5]="")}let t=e[3],n=e[1]||Ou;return[n,t]=Td(n,t),md(t,n,e[4]?+e[4]:void 0,e[5]?+e[5]:void 0)}}]]),Td=(t,e)=>{const n=-1!==t.indexOf("safari-extension"),r=-1!==t.indexOf("safari-web-extension");return n||r?[-1!==t.indexOf("@")?t.split("@")[0]:Ou,n?`safari-extension:${e}`:`safari-web-extension:${e}`]:[t,e]},Id="undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__,Sd={};function Ad(t){const e=Sd[t];if(e)return e;let n=kh[t];if(Ml(n))return Sd[t]=n.bind(kh);const r=kh.document;if(r&&"function"==typeof r.createElement)try{const e=r.createElement("iframe");e.hidden=!0,r.head.appendChild(e);const i=e.contentWindow;i&&i[t]&&(n=i[t]),r.head.removeChild(e)}catch(e){Id&&Rc.warn(`Could not create sandbox iframe for ${t} check, bailing to window.${t}: `,e)}return n?Sd[t]=n.bind(kh):n}function kd(t){Sd[t]=void 0}function Cd(t){const e=[];function n(t){return e.splice(e.indexOf(t),1)[0]||Promise.resolve(void 0)}return{$:e,add:function(r){if(!(void 0===t||e.length<t))return bu(new th("Not adding Promise because buffer limit was reached."));const i=r();return-1===e.indexOf(i)&&e.push(i),i.then((()=>n(i))).then(null,(()=>n(i).then(null,(()=>{})))),i},drain:function(t){return new Tu(((n,r)=>{let i=e.length;if(!i)return n(!0);const s=setTimeout((()=>{t&&t>0&&n(!1)}),t);e.forEach((t=>{wu(t).then((()=>{--i||(clearTimeout(s),n(!0))}),r)}))}))}}}function Od(t,{statusCode:e,headers:n},r=Date.now()){const i={...t},s=n&&n["x-sentry-rate-limits"],o=n&&n["retry-after"];if(s)for(const t of s.trim().split(",")){const[e,n,,,s]=t.split(":",5),o=parseInt(e,10),a=1e3*(isNaN(o)?60:o);if(n)for(const t of n.split(";"))"metric_bucket"===t&&s&&!s.split(";").includes("custom")||(i[t]=r+a);else i.all=r+a}else o?i.all=r+function(t,e=Date.now()){const n=parseInt(`${t}`,10);if(!isNaN(n))return 1e3*n;const r=Date.parse(`${t}`);return isNaN(r)?6e4:r-e}(o,r):429===e&&(i.all=r+6e4);return i}function Rd(t,e,n=Cd(t.bufferSize||64)){let r={};return{send:function(i){const s=[];if(Kl(i,((e,n)=>{const i=Jl(n);if(function(t,e,n=Date.now()){return function(t,e){return t[e]||t.all||0}(t,e)>n}(r,i)){const r=Nd(e,n);t.recordDroppedEvent("ratelimit_backoff",i,r)}else s.push(e)})),0===s.length)return wu({});const o=zl(i[0],s),a=e=>{Kl(o,((n,r)=>{const i=Nd(n,r);t.recordDroppedEvent(e,Jl(r),i)}))};return n.add((()=>e({body:Wl(o)}).then((t=>(void 0!==t.statusCode&&(t.statusCode<200||t.statusCode>=300)&&_u&&Rc.warn(`Sentry responded with status code ${t.statusCode} to sent event.`),r=Od(r,t),t)),(t=>{throw a("network_error"),t})))).then((t=>t),(t=>{if(t instanceof th)return _u&&Rc.error("Skipped sending event because buffer is full."),a("queue_overflow"),wu({});throw t}))},flush:t=>n.drain(t)}}function Nd(t,e){if("event"===e||"transaction"===e)return Array.isArray(t)?t[1]:void 0}function Dd(t,e=Ad("fetch")){let n=0,r=0;return Rd(t,(function(i){const s=i.body.length;n+=s,r++;const o={body:i.body,method:"POST",referrerPolicy:"origin",headers:t.headers,keepalive:n<=6e4&&r<15,...t.fetchOptions};if(!e)return kd("fetch"),bu("No fetch implementation available");try{return e(t.url,o).then((t=>(n-=s,r--,{statusCode:t.status,headers:{"x-sentry-rate-limits":t.headers.get("X-Sentry-Rate-Limits"),"retry-after":t.headers.get("Retry-After")}})))}catch(t){return kd("fetch"),n-=s,r--,bu(t)}}))}function Pd(t){const e=[Sl(),Ol(),Jh(),Xh(),ad(),gd(),Rl(),ld()];return!1!==t.autoSessionTracking&&e.push(nd()),e}function xd(t={}){const e=function(t={}){const e={defaultIntegrations:Pd(t),release:"string"==typeof __SENTRY_RELEASE__?__SENTRY_RELEASE__:yh.SENTRY_RELEASE&&yh.SENTRY_RELEASE.id?yh.SENTRY_RELEASE.id:void 0,autoSessionTracking:!0,sendClientReports:!0};return null==t.defaultIntegrations&&delete t.defaultIntegrations,{...e,...t}}(t);if(!e.skipBrowserExtensionCheck&&function(){const t=void 0!==yh.window&&yh;if(!t)return!1;const e=t[t.chrome?"chrome":"browser"],n=e&&e.runtime&&e.runtime.id,r=yh.location&&yh.location.href||"",i=!!n&&yh===yh.top&&["chrome-extension:","moz-extension:","ms-browser-extension:","safari-web-extension:"].some((t=>r.startsWith(`${t}//`))),s=void 0!==t.nw;return!!n&&!i&&!s}())return void Oc((()=>{console.error("[Sentry] You cannot run Sentry this way in a browser extension, check: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/")}));sh&&(Ll()||Rc.warn("No Fetch API detected. The Sentry SDK requires a Fetch API compatible environment to send events. Please add a Fetch API polyfill."));const n={...e,stackParser:(r=e.stackParser||bd,Array.isArray(r)?Du(...r):r),integrations:wl(e),transport:e.transport||Dd};var r;return Ul(wh,n)}let Ld=!1,Md=[],Ud=[];const Fd=async()=>(await chrome.tabs.query({currentWindow:!0})).filter((t=>rc(t.url))),Vd=async(t,e)=>{const n=await(async t=>(await chrome.webNavigation.getAllFrames({tabId:t})).filter((t=>rc(t.url))))(t);for(const t of n)if(t.url===e)return t},jd=async(t,e,n)=>{const r=(t=>{const e=[];let n=0;for(let r=0;r<t.length;r++){const i=t[r];"backspace_pressed"===i.type?n++:(n&&(e.push({type:"backspace_pressed",details:{count:n},timestamp:t[r-1].timestamp}),n=0),e.push(i))}return n&&e.push({type:"backspace_pressed",details:{count:n},timestamp:Ud[Ud.length-1].timestamp}),e})((t=>{const e=[];let n="";for(let r=0;r<t.length;r++){const i=t[r];if("text_typed"===i.type||"backspace_pressed"===i.type){if("backspace_pressed"===i.type&&""===n){e.push(i);continue}"backspace_pressed"===i.type?n=n.slice(0,-1):"text_typed"===i.type&&(n+=i.details.text)}else n&&(e.push({type:"text_typed",details:{text:n},timestamp:t[r-1].timestamp}),n=""),e.push(i)}return n&&e.push({type:"text_typed",details:{text:n},timestamp:t[t.length-1].timestamp}),e})(Ud)),{startingTabs:i,steps:s}=((t,e)=>{const n=new Set,r=new Set;e.forEach((e=>{void 0!==e.activeTabIndex&&(n.add(e.activeTabIndex),r.add(t[e.activeTabIndex]?.url)),e.details?.url&&r.add(e.details.url)}));const i=[],s=new Map;t.forEach(((t,e)=>{(r.has(t.url)&&!s.has(t.url)||n.has(e))&&(s.set(t.url,i.length),i.push(t))}));const o=e.map((e=>({...e,activeTabIndex:void 0!==e.activeTabIndex?s.get(t[e.activeTabIndex]?.url):void 0,details:void 0!==e.details?.tabIndex?{...e.details,tabIndex:s.get(t[e.details.tabIndex]?.url)}:e.details})));return{startingTabs:i,steps:o}})(Md,r),o=s.map((t=>{const{activeTabIndex:e,...n}=t;return n}));let a;if("personal"===n)a=await ec(Xa.CREATE_PERSONAL_WORKFLOW,{user_id:e,steps:o,starting_tabs:i});else{if("organization"!==n)throw new Error("INVALID_TYPE");a=await ec(Xa.CREATE_ORGANIZATION_WORKFLOW,{user_id:e,org_id:t,steps:o,starting_tabs:i})}return a.workflow_id};let $d,Bd,Hd;chrome.runtime.onInstalled.addListener((async t=>{t.reason,chrome.runtime.OnInstalledReason.INSTALL,chrome.sidePanel.setOptions({enabled:!0,path:"./router.html"},(()=>{}));const e=await chrome.tabs.query({});for(const t of e)t.id&&rc(t.url)&&await chrome.scripting.executeScript({target:{tabId:t.id,allFrames:!0},files:["contentScripts.js"]})})),chrome.action.onClicked.addListener((t=>{chrome.sidePanel.open({windowId:t.windowId})})),chrome.webNavigation.onCommitted.addListener((async t=>{if(t.transitionQualifiers&&t.transitionQualifiers.includes("from_address_bar")){if(!Ld)return;Ud.push({type:"url_change",details:{url:t.url,isInNewTab:!1},timestamp:Date.now()})}})),chrome.tabs.onUpdated.addListener((async(t,e,n)=>{if("complete"===e.status){if(rc(n.url)&&await chrome.scripting.executeScript({target:{tabId:t,allFrames:!0},files:["contentScripts.js"]}),!Ld)return;rc(n.url)&&(await _l(t,{action:"start_recording"}),n.active||Ud.push({type:"url_change",details:{url:n.url,isInNewTab:!0},timestamp:Date.now()}))}})),chrome.tabs.onActivated.addListener((async t=>{const{tabId:e}=t;if(!Ld)return;const n=Date.now(),r=await chrome.tabs.query({currentWindow:!0}),i=r.findIndex((t=>t.id===e)),s=r[i];"chrome://newtab/"===s.url||"chrome://newtab/"===s.pendingUrl?Ud.push({type:"new_tab",details:{},timestamp:n}):Ud.push({type:"switch_tab",details:{tabIndex:i},timestamp:n})})),chrome.runtime.onConnect.addListener((t=>{"workflow"===t.name?Bd=t:"record"===t.name?$d=t:"update_step"===t.name&&(Hd=t),t.onMessage.addListener((async(t,e)=>{if("action"in t)if("start_recording"===t.action){const t=await Fd();let e=!0;for(const n of t){if(!await _l(n.id,{action:"start_recording"})){e=!1;break}}e?(Ld=!0,Md=await(async()=>(await chrome.tabs.query({currentWindow:!0})).map((t=>({url:t.url,isActive:t.active}))))()):$d&&$d.postMessage({action:"error_starting_recording"})}else if("new_iframe_added"===t.action){const{id:n}=e.sender.tab,{frameSrc:r}=t,i=await Vd(n,r);i&&!i.errorOccurred&&(await chrome.scripting.executeScript({target:{tabId:n,frameIds:[i.frameId]},files:["contentScripts.js"]}),Ld&&await _l(n,{action:"start_recording"},{frameId:i.frameId}))}else if("stop_recording"===t.action){const{orgId:e,userId:n,type:r}=t,i=await Fd();let s=!0;for(const t of i){if(!await _l(t.id,{action:"stop_recording"})){s=!1;break}}if(s){for(Ld=!1;Ud.map((t=>t.type)).includes("loading");)await new Promise((t=>setTimeout(t,500)));if(Ud.length>0){const t=await jd(e,n,r);Md=[],Ud=[],$d&&$d.postMessage({action:"workflow_created",workflowId:t})}else Md=[],Ud=[],$d&&$d.postMessage({action:"empty_workflow"})}else Ld=!1,Md=[],Ud=[],$d&&$d.postMessage({action:"error_stopping_recording"})}else if("event_captured"===t.action){const{eventCaptured:e}=t,n=await(async()=>(await chrome.tabs.query({currentWindow:!0})).findIndex((t=>t.active)))();if("mouse_click"===e.type||"copy"===e.type||"paste"===e.type){let t=Ud.length;Ud[t]={type:"loading",timestamp:e.timestamp};const r=await(async t=>{const{timestamp:e}=t,{serializedElement:n,screenshotCoordinates:r}=t.details,i=await chrome.tabs.captureVisibleTab({format:"png"}),s=await ec(Xa.UPLOAD_SCREENSHOT_TO_STORAGE,{screenshot:i,screenshot_coordinates:r});return{type:t.type,details:{element:nc(n),screenshot:s.screenshot_url},timestamp:e}})(e);Ud[t]={...r,activeTabIndex:n}}else Ud.push({...e,activeTabIndex:n})}else if("listen_for_mouse_click"===t.action){const t=await Fd();for(const e of t)await _l(e.id,{action:"listen_for_mouse_click"},{frameId:0})}else if("listen_for_copy"===t.action){const t=await Fd();for(const e of t)await _l(e.id,{action:"listen_for_copy"},{frameId:0})}else if("listen_for_paste"===t.action){const t=await Fd();for(const e of t)await _l(e.id,{action:"listen_for_paste"},{frameId:0})}else if("listener_mouse_click_captured"===t.action){const{eventCaptured:e}=t;Bd&&Bd.postMessage({action:"handle_listener_mouse_click",eventCaptured:e}),Hd&&Hd.postMessage({action:"handle_listener_mouse_click",eventCaptured:e})}else if("listener_copy_captured"===t.action){const{eventCaptured:e}=t;Bd&&Bd.postMessage({action:"handle_listener_copy",eventCaptured:e}),Hd&&Hd.postMessage({action:"handle_listener_copy",eventCaptured:e})}else if("listener_paste_captured"===t.action){const{eventCaptured:e}=t;Bd&&Bd.postMessage({action:"handle_listener_paste",eventCaptured:e}),Hd&&Hd.postMessage({action:"handle_listener_paste",eventCaptured:e})}else if("init_sentry"===t.action){const{environment:e}=t;"production"===e&&xd({dsn:"https://f1970ea44d9f0abc6831745e34c2436f@o4504812880789504.ingest.us.sentry.io/4508509986881536"})}else if("error_in_content_script"===t.action){const{errorMessage:e}=t;hl(new Error(e))}}))}))})();
//# sourceMappingURL=background.bundle.js.map