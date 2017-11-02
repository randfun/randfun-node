!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("randfun",[],e):"object"==typeof exports?exports.randfun=e():t.randfun=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,r){r(1),t.exports=r(2)},function(t,e){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function n(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return b.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function s(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function a(t){var e=new FileReader,r=s(e);return e.readAsArrayBuffer(t),r}function u(t){var e=new FileReader,r=s(e);return e.readAsText(t),r}function c(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function f(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(b.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(b.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(b.arrayBuffer&&b.blob&&v(t))this._bodyArrayBuffer=f(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!b.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!g(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(a)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(t){var e=t.toUpperCase();return x.indexOf(e)>-1?e:t}function l(t,e){var r=(e=e||{}).body;if(t instanceof l){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=d(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function p(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function y(t){var e=new o;return t.split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e}function m(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var b={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(b.arrayBuffer)var w=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],v=function(t){return t&&DataView.prototype.isPrototypeOf(t)},g=ArrayBuffer.isView||function(t){return t&&w.indexOf(Object.prototype.toString.call(t))>-1};o.prototype.append=function(t,n){t=e(t),n=r(n);var o=this.map[t];this.map[t]=o?o+","+n:n},o.prototype.delete=function(t){delete this.map[e(t)]},o.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,n){this.map[e(t)]=r(n)},o.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),n(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),n(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),n(t)},b.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var x=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];l.prototype.clone=function(){return new l(this,{body:this._bodyInit})},h.call(l.prototype),h.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},m.error=function(){var t=new m(null,{status:0,statusText:""});return t.type="error",t};var j=[301,302,303,307,308];m.redirect=function(t,e){if(-1===j.indexOf(e))throw new RangeError("Invalid status code");return new m(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=l,t.Response=m,t.fetch=function(t,e){return new Promise(function(r,n){var o=new l(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;r(new m(e,t))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&b.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},function(t,e,r){const n=r(3);t.exports=n(window.fetch)},function(t,e,r){const n=r(4),o=r(8),i=r(9),s=r(10),a=r(11),u=r(12),c=r(13),f=r(14),h=r(15),d=r(16),l={headers:{Accept:"application/json","Content-Type":"application/json"}},p=(t,e)=>r=>{const o=n.stringify(r);return e(`https://api.rand.fun/${t}?${o}`,l).then(t=>t.json()).then(t=>t)},y=(t,e,r)=>{const n={};return t.forEach(t=>{n[t.method]=e(t.url,r)}),n};t.exports=(t=>({animals:y(o,p,t),country:y(i,p,t),games:y(s,p,t),geo:y(a,p,t),hash:y(u,p,t),internet:y(c,p,t),number:y(f,p,t),people:y(h,p,t),text:y(d,p,t)}))},function(t,e,r){"use strict";function n(t){switch(t.arrayFormat){case"index":return function(e,r,n){return null===r?[i(e,t),"[",n,"]"].join(""):[i(e,t),"[",i(n,t),"]=",i(r,t)].join("")};case"bracket":return function(e,r){return null===r?i(e,t):[i(e,t),"[]=",i(r,t)].join("")};default:return function(e,r){return null===r?i(e,t):[i(e,t),"=",i(r,t)].join("")}}}function o(t){var e;switch(t.arrayFormat){case"index":return function(t,r,n){e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===n[t]&&(n[t]={}),n[t][e[1]]=r):n[t]=r};case"bracket":return function(t,r,n){e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),e?void 0!==n[t]?n[t]=[].concat(n[t],r):n[t]=[r]:n[t]=r};default:return function(t,e,r){void 0!==r[t]?r[t]=[].concat(r[t],e):r[t]=e}}}function i(t,e){return e.encode?e.strict?a(t):encodeURIComponent(t):t}function s(t){return Array.isArray(t)?t.sort():"object"==typeof t?s(Object.keys(t)).sort(function(t,e){return Number(t)-Number(e)}).map(function(e){return t[e]}):t}var a=r(5),u=r(6),c=r(7);e.extract=function(t){var e=t.indexOf("?");return-1===e?"":t.slice(e+1)},e.parse=function(t,e){var r=o(e=u({arrayFormat:"none"},e)),n=Object.create(null);return"string"!=typeof t?n:(t=t.trim().replace(/^[?#&]/,""))?(t.split("&").forEach(function(t){var e=t.replace(/\+/g," ").split("="),o=e.shift(),i=e.length>0?e.join("="):void 0;i=void 0===i?null:c(i),r(c(o),i,n)}),Object.keys(n).sort().reduce(function(t,e){var r=n[e];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?t[e]=s(r):t[e]=r,t},Object.create(null))):n},e.stringify=function(t,e){var r=n(e=u({encode:!0,strict:!0,arrayFormat:"none"},e));return t?Object.keys(t).sort().map(function(n){var o=t[n];if(void 0===o)return"";if(null===o)return i(n,e);if(Array.isArray(o)){var s=[];return o.slice().forEach(function(t){void 0!==t&&s.push(r(n,t,s.length))}),s.join("&")}return i(n,e)+"="+i(o,e)}).filter(function(t){return t.length>0}).join("&"):""}},function(t,e,r){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}},function(t,e,r){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var r,a,u=n(t),c=1;c<arguments.length;c++){r=Object(arguments[c]);for(var f in r)i.call(r,f)&&(u[f]=r[f]);if(o){a=o(r);for(var h=0;h<a.length;h++)s.call(r,a[h])&&(u[a[h]]=r[a[h]])}}return u}},function(t,e,r){"use strict";function n(t,e){try{return decodeURIComponent(t.join(""))}catch(t){}if(1===t.length)return t;e=e||1;var r=t.slice(0,e),o=t.slice(e);return Array.prototype.concat.call([],n(r),n(o))}function o(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(s),r=1;r<e.length;r++)e=(t=n(e,r).join("")).match(s);return t}}function i(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},r=a.exec(t);r;){try{e[r[0]]=decodeURIComponent(r[0])}catch(t){var n=o(r[0]);n!==r[0]&&(e[r[0]]=n)}r=a.exec(t)}e["%C2"]="�";for(var i=Object.keys(e),s=0;s<i.length;s++){var u=i[s];t=t.replace(new RegExp(u,"g"),e[u])}return t}var s=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return i(t)}}},function(t,e){t.exports=[{url:"animals/name",method:"name"}]},function(t,e){t.exports=[{url:"country/name",method:"name"},{url:"country/code",method:"code"},{url:"country/capital",method:"capital"},{url:"country/currency",method:"currency"},{url:"country/city",method:"city"},{url:"country/flag",method:"flag"}]},function(t,e){t.exports=[{url:"games/dice",method:"dice"},{url:"games/headsortails",method:"headsOrTails"},{url:"games/rockpaperscissors",method:"rockPaperScissors"},{url:"games/rockpaperscissorslizardspock",method:"rockPaperScissorsLizardSpock"}]},function(t,e){t.exports=[{url:"geo/continent",method:"continent"},{url:"geo/continentcode",method:"continentCode"},{url:"geo/coordinates",method:"coordinates"}]},function(t,e){t.exports=[{url:"hash/md5",method:"md5"},{url:"hash/sha256",method:"sha256"},{url:"hash/sha512",method:"sha512"}]},function(t,e){t.exports=[{url:"internet/ip",method:"ip"},{url:"internet/ipv6",method:"ipv6"}]},function(t,e){t.exports=[{url:"number/integer",method:"integer"},{url:"number/float",method:"float"},{url:"number/hex",method:"hex"}]},function(t,e){t.exports=[{url:"people/firstname",method:"firstName"},{url:"people/age",method:"age"},{url:"people/eyecolor",method:"eyecolor"}]},function(t,e){t.exports=[{url:"text/string",method:"string"},{url:"text/word",method:"word"},{url:"text/password",method:"password"}]}])});
//# sourceMappingURL=randfun.browser.polyfills.js.map