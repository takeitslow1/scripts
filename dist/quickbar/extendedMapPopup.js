parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kK6Q":[function(require,module,exports) {
"use strict";function e(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"KYJg":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=t(require("../_lib/requiredArgs/index.js"));function t(e){return e&&e.__esModule?e:{default:e}}function r(t){(0,e.default)(1,arguments);var r=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===r?new Date(t.getTime()):"number"==typeof t||"[object Number]"===r?new Date(t):("string"!=typeof t&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}
},{"../_lib/requiredArgs/index.js":"kK6Q"}],"H70G":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=u;var e=r(require("../toDate/index.js")),t=r(require("../_lib/requiredArgs/index.js"));function r(e){return e&&e.__esModule?e:{default:e}}function u(r,u){(0,t.default)(2,arguments);var i=(0,e.default)(r),d=(0,e.default)(u);return i.getTime()-d.getTime()}
},{"../toDate/index.js":"KYJg","../_lib/requiredArgs/index.js":"kK6Q"}],"oGJj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=i;var e=t(require("../differenceInMilliseconds/index.js")),r=t(require("../_lib/requiredArgs/index.js"));function t(e){return e&&e.__esModule?e:{default:e}}var u=6e4;function i(t,i){(0,r.default)(2,arguments);var d=(0,e.default)(t,i)/u;return d>0?Math.floor(d):Math.ceil(d)}
},{"../differenceInMilliseconds/index.js":"H70G","../_lib/requiredArgs/index.js":"kK6Q"}],"VYL5":[function(require,module,exports) {
"use strict";function e(e){if(null===e||!0===e||!1===e)return NaN;var r=Number(e);return isNaN(r)?r:r<0?Math.ceil(r):Math.floor(r)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"umce":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=i;var e=u(require("../_lib/toInteger/index.js")),r=u(require("../toDate/index.js")),t=u(require("../_lib/requiredArgs/index.js"));function u(e){return e&&e.__esModule?e:{default:e}}function i(u,i){(0,t.default)(2,arguments);var d=(0,r.default)(u).getTime(),n=(0,e.default)(i);return new Date(d+n)}
},{"../_lib/toInteger/index.js":"VYL5","../toDate/index.js":"KYJg","../_lib/requiredArgs/index.js":"kK6Q"}],"pfh4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=i;var e=u(require("../_lib/toInteger/index.js")),r=u(require("../addMilliseconds/index.js")),t=u(require("../_lib/requiredArgs/index.js"));function u(e){return e&&e.__esModule?e:{default:e}}var d=6e4;function i(u,i){(0,t.default)(2,arguments);var l=(0,e.default)(i);return(0,r.default)(u,l*d)}
},{"../_lib/toInteger/index.js":"VYL5","../addMilliseconds/index.js":"umce","../_lib/requiredArgs/index.js":"kK6Q"}],"ddIN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e={pl_PL:{ennobledAt:"Podbita o",never:"Nigdy",possibleLoyalty:"Możliwe poparcie",canSendNoble:"Można wysłać szlachcica",yes:"Tak",no:"Nie"},en_DK:{ennobledAt:"Ennobled at",never:"Never",possibleLoyalty:"Possible loyalty",canSendNoble:"Can send noble",yes:"Yes",no:"No"}};var o=()=>e[window.game_data.locale]||e.en_DK;exports.default=o;
},{}],"Ph2E":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.API_URI=void 0;const e="https://api.tribalwarshelp.com/graphql";exports.API_URI=e;var r=function(){let{query:r,variables:t={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return fetch(e,{method:"POST",body:JSON.stringify({query:r,variables:t}),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{let{data:r,errors:t}=e;if(t&&Array.isArray(t)&&t.length>0)throw new Error(t[0].message);return new Promise(e=>e(r))})};exports.default=r;
},{}],"V6Mf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=(e,t)=>new Date(e).toLocaleDateString(window.game_data.locale.replace("_","-"),t||{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"});exports.default=e;
},{}],"DMkL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=()=>window.location.host.split(".")[0];exports.default=e;
},{}],"XOOL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.calcDistanceBetweenTwoPoints=void 0;const e=(e,t,s,o)=>{const c=e-s,n=t-o;return Math.sqrt(c*c+n*n)};exports.calcDistanceBetweenTwoPoints=e;
},{}],"tQUs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=e=>parseInt(new URLSearchParams(e).get("id"));exports.default=e;
},{}],"dSAr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("../utils/getIDFromURL"));function r(e){return e&&e.__esModule?e:{default:e}}class t{constructor(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.dom=(new DOMParser).parseFromString(e,"text/html"),this.filters=r}isValidRow(e){return!!e&&(!this.filters.playerID||e.playerID===this.filters.playerID)}parseRow(r){if(!r||!r instanceof HTMLTableRowElement)return;let t={};return t.rank=parseInt(r.children[0].innerText.trim()),t.name=r.children[1].innerText.trim(),t.playerID=(0,e.default)(r.children[1].querySelector("a").getAttribute("href")),t.tribe=r.children[2].innerText.trim(),t.tribeID=0,t.tribe&&(t.tribeID=(0,e.default)(r.children[2].querySelector("a").getAttribute("href"))),t.score=parseInt(r.children[3].innerText.trim().replace(/\./g,"")),t.date=r.children[4].innerText.trim(),t}parse(){const e=this.dom.querySelectorAll("#in_a_day_ranking_table tbody tr"),r=[];for(let t=1;t<e.length;t++){const i=e[t],n=this.parseRow(i);this.isValidRow(n)&&r.push(n)}return r}}exports.default=t;
},{"../utils/getIDFromURL":"tQUs"}],"fHHP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.buildImgURL=exports.calcAttackDuration=exports.loadInADayData=exports.formatVillageName=exports.formatVillageURL=exports.formatPlayerURL=exports.formatTribeURL=void 0;var t=e(require("../libs/InADayParser"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(null==t)return{};var r,n,a=o(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function o(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}const n=t=>window.location.origin+TribalWars.buildURL("",{screen:"info_ally",id:t});exports.formatTribeURL=n;const a=t=>window.location.origin+TribalWars.buildURL("",{screen:"info_player",id:t});exports.formatPlayerURL=a;const i=t=>window.location.origin+TribalWars.buildURL("",{screen:"info_village",id:t});exports.formatVillageURL=i;const l=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500;const o="K"+String(r)[0]+String(e)[0];return"".concat(t," (").concat(e,"|").concat(r,") ").concat(o)};exports.formatVillageName=l;const c=async function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{name:n}=o,a=r(o,["name"]);try{const r=await fetch(TribalWars.buildURL("",{screen:"ranking",mode:"in_a_day",type:e,name:n||""})),o=await r.text();if(!o)throw new Error;const l=new t.default(o,a).parse();if(0===l.length)throw new Error;return l[0]}catch(i){return{rank:0,playerID:0,score:0,tribeID:0,date:new Date}}};exports.loadInADayData=c;const s=(t,e,r)=>Math.round(t*r/e);exports.calcAttackDuration=s;const u=t=>image_base+t;exports.buildImgURL=u;
},{"../libs/InADayParser":"dSAr"}],"KX6P":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./tribalwars"),t=t=>(0,e.buildImgURL)("unit/unit_".concat(t,".png"));exports.default=t;
},{"./tribalwars":"fHHP"}],"KWxH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setItem=exports.getItem=void 0;const e=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=localStorage.getItem(e);let s=t;return o&&(s=JSON.parse(o)),s};exports.getItem=e;const t=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))};exports.setItem=t;
},{}],"HdqX":[function(require,module,exports) {
"use strict";var e=c(require("date-fns/differenceInMinutes")),n=c(require("date-fns/addMinutes")),t=c(require("./i18n/extendedMapPopup")),r=c(require("./libs/requestCreator")),a=c(require("./utils/formatDate")),o=c(require("./utils/getCurrentServer")),i=require("./utils/math"),l=c(require("./utils/buildUnitImgURL")),d=require("./utils/localStorage"),p=require("./utils/tribalwars");function c(e){return e&&e.__esModule?e:{default:e}}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach(function(n){g(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function g(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}const f=(0,o.default)(),b="\n    query server($key: String!) {\n        server(key: $key) {\n            config {\n                speed\n                unitSpeed\n                snob {\n                  maxDist\n                }\n            }\n            unitConfig {\n              spear {\n                speed\n              }\n              sword {\n                speed\n              }\n              axe {\n                speed\n              }\n              archer {\n                speed\n              }\n              spy {\n                speed\n              }\n              light {\n                speed\n              }\n              marcher {\n                speed\n              }\n              heavy {\n                speed\n              }\n              ram {\n                speed\n              }\n              catapult {\n                speed\n              }\n              knight {\n                speed\n              }\n              snob {\n                speed\n              }\n            }\n        }\n    }\n",y="\n    query ennoblements($server: String!, $filter: EnnoblementFilter!) {\n        ennoblements(server: $server, filter: $filter) {\n            items {\n                ennobledAt\n                village {\n                    id\n                }\n            }\n        }\n    }\n",m="kiszkowaty_extended_map_popup_server_cfg",v=(0,t.default)(),h=()=>(0,d.getItem)(m),w=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,d.setItem)(m,e)},M=n=>Math.abs((0,e.default)(n,new Date))>=1440,T=async()=>{let e=h();return e&&e.server&&!M(new Date(e.loadedAt))&&e.server.config&&e.server.config.speed&&e.server.config.snob&&e.server.config.snob.maxDist&&e.server.config.unitSpeed&&e.server.unitConfig||((e=await(0,r.default)({query:b,variables:{key:f}})).loadedAt=new Date,w(e)),e&&e.server&&e.server.config?{config:e.server.config,unitConfig:e.server.unitConfig}:{}},q=async function(e){let{cacheOnly:n=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n||TWMap.popup.extendedMapPopupCache[e])return TWMap.popup.extendedMapPopupCache[e];try{const n=await(0,r.default)({query:y,variables:{server:f,filter:{villageID:[e],sort:"ennobledAt DESC"}}});return TWMap.popup.extendedMapPopupCache[e]=n,n}catch(t){console.log("loadVillageData",t)}},O=(n,t)=>{let r=25+Math.abs((0,e.default)(n,new Date))*(t/60);return r>100&&(r=100),Math.floor(r)},D=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=[];for(let t in e)0!==e[t].speed&&n.push(u(u({},e[t]),{},{name:t,img:(0,l.default)(t)}));return n},S=e=>e%2==0?"#f8f4e8":"#ded3b9;",C=(e,n)=>'\n    <td style="padding: 2px; background-color: '.concat(S(n),';">\n      <img\n        src="').concat(e.img,'"\n        title="').concat(e.name,'"\n        alt="').concat(e.name,'"\n      />\n    </td>\n  '),x=(e,t)=>'\n    <td style="padding: 2px; background-color: '.concat(S(t),';">\n      ').concat((0,a.default)((0,n.default)(new Date(Timing.getCurrentServerTime()),e)),"\n    </td>\n  "),P=(e,n,t)=>{let{config:r,unitConfig:o}=t;const l=TWMap.CoordByXY(TWMap.villageKey[e]),d=(0,i.calcDistanceBetweenTwoPoints)(l[0],l[1],window.game_data.village.x,window.game_data.village.y),c=n&&n.ennoblements&&n.ennoblements.items&&n.ennoblements.items.length>0?n.ennoblements.items[0]:void 0,s=document.querySelector("#map_popup #info_content tbody");let u=s.querySelector("#units");u||((u=document.createElement("tr")).id="units",s.appendChild(u));const g=D(o);u.innerHTML='\n          <td colspan="2">\n            <table style="border: 1px solid #ded3b9; max-width: 450px;"\n              width="100%"\n              cellpadding="0"\n              cellspacing="0">\n              <tbody>\n                <tr class="center">\n                  '.concat(g.map(C).join(""),'\n                </tr>\n                <tr class="center">\n                  ').concat(g.map((e,n)=>x((0,p.calcAttackDuration)(d,r.unitSpeed,e.speed),n)).join(""),"\n                </tr>\n              </tbody>\n            </table>\n          </td>\n      ");let f=s.querySelector("#lastEnnobledAt");f||((f=document.createElement("tr")).id="lastEnnobledAt",s.appendChild(f)),f.innerHTML="\n          <td>\n              ".concat(v.ennobledAt,":\n          </td>\n          <td>\n              ").concat(c?(0,a.default)(c.ennobledAt):v.never,"\n          </td>\n      ");let b=s.querySelector("#loyalty");b||((b=document.createElement("tr")).id="loyalty",s.appendChild(b)),b.innerHTML="\n          <td>\n              ".concat(v.possibleLoyalty,":\n          </td>\n          <td>\n              ").concat(c?O(new Date(c.ennobledAt),r.speed):100,"\n          </td>\n      ");let y=s.querySelector("#canSendNoble");y||((y=document.createElement("tr")).id="canSendNoble",s.appendChild(y)),y.innerHTML="\n          <td>\n              ".concat(v.canSendNoble,":\n          </td>\n          <td>\n              ").concat(d<r.snob.maxDist?v.yes:v.no,"\n          </td>\n      ")},_=e=>async n=>{TWMap.popup._loadVillage(n);const t=await q(parseInt(n));P(parseInt(n),t,e)},j=e=>async(n,t,r)=>{TWMap.popup._displayForVillage(n,t,r);const a=await q(parseInt(n.id),{cacheOnly:window.game_data.features.Premium.active});P(parseInt(n.id),a,e)};!async function(){try{const n=await T();TWMap.popup.extendedMapPopupCache={},TWMap.popup._loadVillage=TWMap.popup.loadVillage,TWMap.popup.loadVillage=_(n),TWMap.popup._displayForVillage=TWMap.popup.displayForVillage,TWMap.popup.displayForVillage=j(n)}catch(e){console.log("extended map popup",e)}}();
},{"date-fns/differenceInMinutes":"oGJj","date-fns/addMinutes":"pfh4","./i18n/extendedMapPopup":"ddIN","./libs/requestCreator":"Ph2E","./utils/formatDate":"V6Mf","./utils/getCurrentServer":"DMkL","./utils/math":"XOOL","./utils/buildUnitImgURL":"KX6P","./utils/localStorage":"KWxH","./utils/tribalwars":"fHHP"}]},{},["HdqX"], null)