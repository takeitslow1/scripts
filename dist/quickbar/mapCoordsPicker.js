parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"jH35":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e={pl_PL:{startCoordsPicker:"Uruchom zbieracza koordynat",stopCoordsPicker:"Zatrzymaj zbieracza koordynat",exportedVillages:"Wyeksportowane wioski",cannotDeleteSelectedGroup:"Nie można usunąć wybranej grupy!",select:"Wybierz",delete:"Usuń",add:"Dodaj",save:"Zapisz",groupName:"Nazwa grupy",export:"Eksport"},en_DK:{startCoordsPicker:"Start coords picker",stopCoordsPicker:"Stop coords picker",exportedVillages:"Exported villages",cannotDeleteSelectedGroup:"Cannot delete selected group!",select:"Select",delete:"Delete",add:"Add",save:"Save",groupName:"Group name",export:"Export"}};var o=()=>e[window.game_data.locale]||e.en_DK;exports.default=o;
},{}],"KWxH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setItem=exports.getItem=void 0;const e=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=localStorage.getItem(e);let s=t;return o&&(s=JSON.parse(o)),s};exports.getItem=e;const t=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))};exports.setItem=t;
},{}],"FWa8":[function(require,module,exports) {
"use strict";var e=r(require("./i18n/mapCoordsPicker")),t=require("./utils/localStorage");function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){a(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const l="kichiyaki_map_coords_picker",c=document.querySelector("#content_value > h2");let s,i,p,u,d=(0,t.getItem)(l,{started:!1,groups:{All:{villages:[],color:"#ffffff"}},selectedGroup:"All"});const g=(0,e.default)(),m=()=>{(0,t.setItem)(l,d)},f=(e,t)=>{const r=parseInt("".concat(e).concat(t),10);return TWMap.villages[r]?TWMap.villages[r].id:NaN},v=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"transparent";const n=f(e,t);if(isNaN(n))return;const o=document.querySelector("#map_village_"+n);o&&(o.style.boxSizing="border-box",o.style.border="transparent"!==r?"5px solid ".concat(r):"none")},b=e=>{for(let t in d.groups){if(t===d.selectedGroup)return;d.groups[t].villages=d.groups[t].villages.filter(t=>t.key!==e)}},y=(e,t,r)=>{r.preventDefault();const n="".concat(e,"|").concat(t);d.groups[d.selectedGroup].villages.some(e=>e.key===n)?(d.groups[d.selectedGroup].villages=d.groups[d.selectedGroup].villages.filter(e=>e.key!==n),v(e,t)):(d.groups[d.selectedGroup].villages=[...d.groups[d.selectedGroup].villages,{x:e,y:t,key:n}],v(e,t,d.groups[d.selectedGroup].color),b(n))},h=(e,t)=>{const r=t&&t.name!==d.selectedGroup,n='\n            <input type="color" value="'.concat(t?t.color:"",'" required />\n            <input type="text" required placeholder="').concat(g.groupName,'" value="').concat(t?t.name:"",'" />\n            <button type="submit">').concat(t?g.save:g.add,"</button>\n            ").concat(t?'<button type="button">'.concat(g.delete,"</button>"):"","\n            ").concat(r?'<button class="selectButton" type="button">'.concat(g.select,"</button>"):"","\n    "),a=document.createElement("form");if(a.innerHTML=n,a.addEventListener("submit",e=>{e.preventDefault(),t?(t.name===d.selectedGroup&&(d.selectedGroup=e.target[1].value),O(t.name,e.target[0].value),d.groups[e.target[1].value]=o(o({},d.groups[t.name]),{},{color:e.target[0].value}),t.name!==e.target[1].value&&delete d.groups[t.name]):d.groups[e.target[1].value]={color:e.target[0].value,villages:[]},k()}),t){a.querySelector('button[type="button"]').addEventListener("click",()=>{if(d.selectedGroup===t.name)return UI.ErrorMessage(g.cannotDeleteSelectedGroup);O(t.name,"transparent"),delete d.groups[t.name],a.remove()});const e=a.querySelector(".selectButton");e&&e.addEventListener("click",e=>{d.selectedGroup=t.name,k()})}e.appendChild(a)},k=()=>{i.innerHTML="";for(let e in d.groups)h(i,o(o({},d.groups[e]),{},{name:e}));h(i)},M=()=>{const e=[];for(let r in d.groups)e.push('<div style="margin-bottom: 30px;">\n      <h3>'.concat(r,"</h3>\n      <textarea cols=30 rows=8 readonly>").concat(d.groups[r].villages.map(e=>e.key).join(" ").trim(),"</textarea>\n    </div>"));const t="\n    ".concat(e.join(""),"\n  ");Dialog.show(g.exportedVillages,t)},T=()=>{const e=document.createElement("button");e.innerHTML=g.export,e.addEventListener("click",M),p.appendChild(e)},E=(e,t)=>{TWMap.mapHandler.__spawnSector(e,t),x()},_=()=>{TWMap.map.handler.__onClick=TWMap.map.handler.onClick,TWMap.map.handler.onClick=y,TWMap.mapHandler.__spawnSector=TWMap.map.handler.spawnSector,TWMap.mapHandler.spawnSector=E,s.innerHTML=g.stopCoordsPicker,T(),x(),k(),u=setInterval(m,500)},S=()=>{"function"==typeof TWMap.map.handler.__onClick&&(TWMap.map.handler.onClick=TWMap.map.handler.__onClick),"function"==typeof TWMap.map.handler.__spawnSector&&(TWMap.mapHandler.spawnSector=TWMap.map.handler.__spawnSector),s.innerHTML=g.startCoordsPicker,i.innerHTML="",p.innerHTML="",x("transparent"),u&&clearInterval(u);for(let e in d.groups)d.groups[e].villages=[]},C=()=>{d.started?S():_(),d.started=!d.started,m()},O=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";d.groups[e].villages.forEach(r=>{v(r.x,r.y,t||d.groups[e].color)})},x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";for(let t in d.groups)O(t,e)},L=()=>{(s=document.createElement("button")).style.marginLeft="5px",s.innerHTML=d.started?g.stopCoordsPicker:g.startCoordsPicker,s.addEventListener("click",C),c.appendChild(s),i=document.createElement("div"),c.parentElement.insertBefore(i,c.nextSibling),p=document.createElement("div"),c.parentElement.insertBefore(p,c.nextSibling),d.started&&_()};!function(){try{(s=document.createElement("button")).style.marginLeft="5px",s.innerHTML=d.started?g.stopCoordsPicker:g.startCoordsPicker,s.addEventListener("click",C),c.appendChild(s),i=document.createElement("div"),c.parentElement.insertBefore(i,c.nextSibling),p=document.createElement("div"),c.parentElement.insertBefore(p,c.nextSibling),d.started&&_()}catch(e){console.log("Map Coords Picker",e)}}();
},{"./i18n/mapCoordsPicker":"jH35","./utils/localStorage":"KWxH"}]},{},["FWa8"], null)