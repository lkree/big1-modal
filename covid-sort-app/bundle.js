!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var i=n(1),a=n(2);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1},o=(i(a,r),a.locals?a.locals:{});e.exports=o},function(e,t,n){"use strict";var i,a=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function s(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},i=[],a=0;a<e.length;a++){var r=e[a],c=t.base?r[0]+t.base:r[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=s(d),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(o[u].references++,o[u].updater(f)):o.push({identifier:d,updater:m(f,t),references:1}),i.push(d)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var a=n.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,i){var a=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,a);else{var r=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(r,o[t]):e.appendChild(r)}}function b(e,t,n){var i=n.css,a=n.media,r=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var h=null,p=0;function m(e,t){var n,i,a;if(t.singleton){var r=p++;n=h||(h=l(t)),i=f.bind(null,n,r,!1),a=f.bind(null,n,r,!0)}else n=l(t),i=b.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var a=s(n[i]);o[a].references--}for(var r=c(e,t),l=0;l<n.length;l++){var d=s(n[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}n=r}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,'.lds-dual-ring{display:flex;height:100vh;justify-content:center;align-items:center}.lds-dual-ring::after{content:"";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid #000;border-color:#000 transparent #000 transparent;animation:lds-dual-ring 1.2s linear infinite}@keyframes lds-dual-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}*{box-sizing:border-box}ul{margin:0;padding:0}.infected-table__search{margin:0 0 15px 15px}.infected-table__list{display:flex;flex-direction:column;list-style:none}.infected-table__item,.infected-table__header{display:flex;margin:5px 10px;width:100%}.infected-table__sub-item,.infected-table__header-item{padding:5px 15px;flex-basis:33%;border-bottom:1px solid #000}.infected-table__header-item{font-weight:700}.infected-table__header-item:hover{cursor:pointer}.infected-table__sub-item--slug,.infected-table__item--slug{border-right:1px solid #cecece}.infected-table__sub-item--total,.infected-table__item--total{border-right:1px solid #cecece;display:flex;justify-content:center;align-items:center}.infected-table__sub-item--new,.infected-table__item--new{display:flex;justify-content:center;align-items:center}.infected-table__header{list-style:none}',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var a=(o=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([a]).join("\n")}var o,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(i)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(a[o]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);i&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";n.r(t);var i=async(e="https://corona.w83.vkforms.ru/data.json")=>await fetch(e).then(e=>e.json());var a={class:"lds-dual-ring",_getHtml(){return`<div class="${this.class}"></div>`},_setHTML(e){e?document.body.insertAdjacentHTML("beforeend",e):document.body.removeChild(document.body.querySelector("."+this.class))},hideLoader(){this._setHTML("")},showLoader(){this._setHTML([this._getHtml()])}};const r=(e,t,n)=>e=e.sort((e,i)=>{const{[t]:a}=e,{[t]:r}=i;return a>r?"asc"===n?1:-1:a<r?"asc"===n?-1:1:0}),o=(e,t=!1)=>{t&&document.body.removeChild(document.querySelector(".infected-table__list"));document.body.append((()=>{const t=document.createElement("ul");t.classList.add("infected-table__list");let n="";return e.forEach(e=>{n+=`<li class="infected-table__item">\n          <div class="infected-table__sub-item infected-table__sub-item--slug">${e.slug}</div>\n          <div class="infected-table__sub-item infected-table__sub-item--total">${e.total}</div>\n          <div class="infected-table__sub-item infected-table__sub-item--new">${e.new}</div>\n        </li>`}),t.insertAdjacentHTML("afterbegin",n),t})())};n(0);const s=()=>{const e={async init(){const e={showLoader:()=>(a.showLoader(),e),fetchData:async()=>(this.data=await i(),e),renderData:()=>((e=>{const t=document.createElement("div");t.classList.add("infected-header"),t.insertAdjacentHTML("afterbegin",(e=>{const t=document.createElement("div");t.classList.add("infected-toggle__wrapper"),t.textContent="Мой регион: ";const n=document.createElement("select");let i="";return e.forEach(e=>{i+=`<option>${e.slug}</option>`}),n.insertAdjacentHTML("afterbegin",i),t.append(n),t.outerHTML})(r(e,"slug","asc"))),t.insertAdjacentHTML("afterbegin",'<div class="infected-table__search">\n      <label class="infected-table__search-label">\n        Поиск <input type="text" class="infected-table__search-input">\n      </label>\n    </div>'),document.body.insertAdjacentHTML("afterbegin",'<ul class="infected-table__header">\n      <li class="infected-table__header-item infected-table__item--slug">Область</li>\n      <li class="infected-table__header-item infected-table__item--total">Количество</li>\n      <li class="infected-table__header-item infected-table__item--new">Прирост</li>\n    </ul>'),document.body.insertAdjacentHTML("afterbegin",t.outerHTML),o(e)})(this.data.russia_top),e),hideLoader:()=>(a.hideLoader(),e)};return(await e.showLoader().fetchData()).renderData().hideLoader(),this},createListeners(){return this.l.onHeaderTableClick=e=>{const t=this.sortedData[0]?this.sortedData:this.data.russia_top,n=r(t,e.target.classList[1].split("--")[1],this.sortType);this.sortType="asc"===this.sortType?"desc":"asc",(e=>{[...document.querySelectorAll(".infected-table__list li")].forEach((t,n)=>{t.querySelector(".infected-table__sub-item--slug").textContent=e[n].slug,t.querySelector(".infected-table__sub-item--total").textContent=String(e[n].total),t.querySelector(".infected-table__sub-item--new").textContent=String(e[n].new)})})(n)},this.l.onInputChange=e=>{const{value:t}=e.target;t.length>2?(this.sortedData=((e,t)=>e.filter(e=>~e.slug.indexOf(t))||[])(this.data.russia_top,t),o(this.sortedData,!0)):(this.sortedData=this.data.russia_top,o(this.data.russia_top,!0))},this},addListeners(){return[...document.querySelectorAll(".infected-table__header-item")].forEach(e=>{e.addEventListener("click",this.l.onHeaderTableClick)}),document.querySelector(".infected-table__search-input").addEventListener("input",this.l.onInputChange),this}};return Object.assign(e,{data:{},l:{onHeaderTableClick:e=>{},onInputChange:e=>{}},sortType:"asc",sortItem:"",sortedData:[]})};(async()=>{(await s().init()).createListeners().addListeners()})()}]);