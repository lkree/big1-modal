!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){var a=n(1),i=n(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},s=(a(i,r),i.locals?i.locals:{});e.exports=s},function(e,t,n){"use strict";var a,i=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function c(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},a=[],i=0;i<e.length;i++){var r=e[i],d=t.base?r[0]+t.base:r[0],l=n[d]||0,o="".concat(d," ").concat(l);n[d]=l+1;var u=c(o),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(s[u].references++,s[u].updater(f)):s.push({identifier:o,updater:h(f,t),references:1}),a.push(o)}return a}function l(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var i=n.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var o,u=(o=[],function(e,t){return o[e]=t,o.filter(Boolean).join("\n")});function f(e,t,n,a){var i=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var r=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function _(e,t,n){var a=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var p=null,b=0;function h(e,t){var n,a,i;if(t.singleton){var r=b++;n=p||(p=l(t)),a=f.bind(null,n,r,!1),i=f.bind(null,n,r,!0)}else n=l(t),a=_.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var i=c(n[a]);s[i].references--}for(var r=d(e,t),l=0;l<n.length;l++){var o=c(n[l]);0===s[o].references&&(s[o].updater(),s.splice(o,1))}n=r}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,'*{box-sizing:border-box}ul{margin:0;padding:0}.lds-dual-ring{display:flex;height:100vh;justify-content:center;align-items:center}.lds-dual-ring::after{content:"";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid #000;border-color:#000 transparent #000 transparent;animation:lds-dual-ring 1.2s linear infinite}@keyframes lds-dual-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.infected__header{display:flex;justify-content:space-between}.infected-header__header{color:#00008b;font-size:20px}.infected-search{display:flex;justify-content:center;align-items:center;margin:0 0 15px 15px;padding:15px;border:2px solid #9acd32;border-radius:10px}.infected-table__list{display:flex;flex-direction:column;list-style:none}.infected-table__item,.infected-table__header{display:flex;margin:5px 10px;width:100%}.infected-table__sub-item,.infected-table__header-item{padding:5px 15px;flex-basis:33%;border-bottom:1px solid #000;display:flex}.infected-table__sub-item>span{flex-basis:50%;display:flex;justify-content:center}.infected-table__header-item{font-weight:700}.infected-table__header-item:hover{cursor:pointer}.infected-table__inner-cases_delta .infected-table__inner-text{background:#6495ed}.infected-table__inner-cured_delta .infected-table__inner-text{background:#90ee90}.infected-table__inner-deaths_delta .infected-table__inner-text{background:#cd5c5c}.infected-table__inner-text{padding:0 10px;border-radius:5px}.infected-table__inner-cases,.infected-table__inner-cured,.infected-table__inner-deaths{border-right:1px solid #cecece}.infected-table__sub-item--name,.infected-table__item--name{border-right:1px solid #000}.infected-table__sub-item--cases,.infected-table__item--cases,.infected-table__item--cured,.infected-table__sub-item--cured{border-right:1px solid #000;display:flex;justify-content:center;align-items:center}.infected-table__sub-item--cases_delta,.infected-table__item--cases_delta,.infected-table__item--deaths{display:flex;justify-content:center;align-items:center}.infected-table__header{list-style:none}.infected-toggle{display:inline-flex;flex-direction:column;margin:0 0 15px 15px;padding:15px;font-size:18px;color:#6495ed;border:2px solid #9acd32;border-radius:10px}.infected-toggle__wrapper{display:flex;margin-top:10px}.infected-toggle__advantages-wrapper{display:flex;margin-left:10px}.infected-toggle__advantage-item{color:#000;padding:0 10px;border-radius:5px}.infected-toggle__advantage-item:not(:last-of-type){margin-right:10px}.infected-toggle__advantage-item--cases_delta{background:#6495ed}.infected-toggle__advantage-item--cured_delta{background:#90ee90}.infected-toggle__advantage-item--deaths_delta{background:#cd5c5c}',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var i=(s=a,c=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),r=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([i]).join("\n")}var s,c,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(a)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);a&&i[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t,n){"use strict";n.r(t);var a=async(e="https://yastat.net/s3/milab/2020/covid19-stat/data/data_struct_1.json?ts=1587573816")=>await fetch(e).then(e=>e.json());var i={class:"lds-dual-ring",_getHtml(){return`<div class="${this.class}"></div>`},_setHTML(e){e?document.body.insertAdjacentHTML("beforeend",e):document.body.removeChild(document.body.querySelector("."+this.class))},hideLoader(){this._setHTML("")},showLoader(){this._setHTML(this._getHtml())}};const r=(e,t,n)=>e=e.sort((e,a)=>{const{[t]:i}=e,{[t]:r}=a;return i>r?"asc"===n?1:-1:i<r?"asc"===n?-1:1:0}),s=(e,t=!1)=>{t&&document.body.removeChild(document.querySelector(".infected-table__list"));document.body.append((()=>{const t=document.createElement("ul");t.classList.add("infected-table__list");let n="";return e.forEach(e=>{n+=`<li class="infected-table__item">\n          <div class="infected-table__sub-item infected-table__sub-item--name">${e.name}</div>\n          <div class="infected-table__sub-item infected-table__sub-item--cases">\n            <span class="infected-table__inner-cases">${e.cases}</span>\n            <span class="infected-table__inner-cases_delta"><span class="infected-table__inner-text">+ ${e.cases_delta}</span></span>\n          </div>\n          <div class="infected-table__sub-item infected-table__sub-item--cured">\n            <span class="infected-table__inner-cured">${e.cured}</span>\n            <span class="infected-table__inner-cured_delta"><span class="infected-table__inner-text">+ ${e.cured_delta}</span></span>\n          </div>\n          <div class="infected-table__sub-item infected-table__sub-item--deaths">\n            <span class="infected-table__inner-deaths">${e.deaths}</span>\n            <span class="infected-table__inner-deaths_delta"><span class="infected-table__inner-text">+ ${e.deaths_delta}</span></span>\n          </div>\n        </li>`}),t.insertAdjacentHTML("afterbegin",n),t})())},c=(e,t)=>{const n=document.createElement("div");n.classList.add("infected__header"),n.classList.add("infected-header"),n.insertAdjacentHTML("afterbegin",(e=>(()=>{const n={createWrapper:()=>(n.wrapper=document.createElement("div"),n.wrapper.classList.add("infected-toggle"),n.wrapper.textContent="Мой регион: ",n),getFavouriteCity:()=>(n.favouriteCity=(null==t?void 0:t.favourite)&&e.find(e=>e.name===t.favourite),n),createSelect:()=>(n.select=document.createElement("select"),n.select.classList.add("infected-toggle__select"),n),createOptions:()=>(e.forEach(e=>{n.items+=`<option value="${e.name}" ${e.name===t.favourite&&"selected"}>${e.name}</option>`}),n),fillSelect:()=>(n.select.insertAdjacentHTML("afterbegin",n.items),n),createAdvantage(){return n.advantages=n.favouriteCity?`\n            <div class='infected-toggle__advantages-wrapper'>\n              <div class="infected-toggle__advantage-item infected-toggle__advantage-item--cases_delta">+ ${n.favouriteCity.cases_delta}</div>\n              <div class="infected-toggle__advantage-item infected-toggle__advantage-item--cured_delta">+ ${n.favouriteCity.cured_delta}</div>\n              <div class="infected-toggle__advantage-item infected-toggle__advantage-item--deaths_delta">+ ${n.favouriteCity.deaths_delta}</div>\n            </div>`:"",this},fillWrapper(){const e=document.createElement("div");return e.classList.add("infected-toggle__wrapper"),e.append(n.select),e.insertAdjacentHTML("beforeend",n.advantages),n.wrapper.append(e),n.wrapper.outerHTML}};return Object.assign(n,{wrapper:null,favouriteCity:null,items:"",select:null})})().createWrapper().getFavouriteCity().createSelect().createOptions().fillSelect().createAdvantage().fillWrapper())(r(e,"name","asc"))),n.insertAdjacentHTML("afterbegin",'<header class="infected-header__header">Распостронение COVID-19 в России</header>'),n.insertAdjacentHTML("afterbegin",'<div class="infected-search">\n      <label class="infected-search__label">\n        Поиск <input type="text" class="infected-search__input">\n      </label>\n    </div>'),document.body.insertAdjacentHTML("afterbegin",'<ul class="infected-table__header">\n      <li class="infected-table__header-item infected-table__item--name">Область</li>\n      <li class="infected-table__header-item infected-table__item--cases">Больные</li>\n      <li class="infected-table__header-item infected-table__item--cured">Выздоровевшие</li>\n      <li class="infected-table__header-item infected-table__item--deaths">Умершие</li>\n    </ul>'),document.body.insertAdjacentHTML("afterbegin",n.outerHTML),s(e)};n(0);const d=()=>{const e={async init(){const e={showLoader:()=>(i.showLoader(),e),fetchData:async()=>(this.data=await a(),console.log(this.data),e),handleData:()=>{const{data:t,dates:n}=this.data.russia_stat_struct;return this.data=Object.keys(t).map(e=>t[e].info),this.currentDate=n[n.length-1],e},getUserData:()=>(this.userData=(e=>{let t={};return e.forEach(e=>{t[e]=localStorage.getItem(e)}),t})(["favourite"]),e),renderData:()=>(c(this.data,this.userData),e),hideLoader:()=>(i.hideLoader(),e)};return(await e.showLoader().fetchData()).handleData().getUserData().renderData().hideLoader(),this},createListeners(){return this.l.onHeaderTableClick=e=>{const t=this.sortedData[0]?this.sortedData:this.data,n=r(t,e.target.classList[1].split("--")[1],this.sortType);this.sortType="asc"===this.sortType?"desc":"asc",(e=>{[...document.querySelectorAll(".infected-table__list li")].forEach((t,n)=>{t.querySelector(".infected-table__sub-item--name").textContent=e[n].name,t.querySelector(".infected-table__inner-cases").textContent=String(e[n].cases),t.querySelector(".infected-table__inner-cases_delta .infected-table__inner-text").textContent="+ "+e[n].cases_delta,t.querySelector(".infected-table__inner-cured").textContent=String(e[n].cured),t.querySelector(".infected-table__inner-cured_delta .infected-table__inner-text").textContent="+ "+e[n].cured_delta,t.querySelector(".infected-table__inner-deaths").textContent=String(e[n].deaths),t.querySelector(".infected-table__inner-deaths_delta .infected-table__inner-text").textContent="+ "+e[n].deaths_delta})})(n)},this.l.onInputChange=e=>{const{value:t}=e.target;t.length>2?(this.sortedData=((e,t)=>(t=t.toLowerCase(),e.filter(e=>~e.name.toLowerCase().indexOf(t))||[]))(this.data,t),s(this.sortedData,!0)):(this.sortedData=this.data,s(this.data,!0))},this.l.onSelectChange=e=>{const{target:t}=e;var n;n={favourite:t.value},Object.keys(n).some(e=>{localStorage.setItem(e,n[e])}),((e,t)=>{const n=e.find(e=>e.name===t);[...document.querySelectorAll(".infected-toggle__advantage-item")].forEach(e=>{const t=e.classList[1].split("--")[1];e.textContent="+ "+n[t]})})(this.data,t.value)},this},addListeners(){return[...document.querySelectorAll(".infected-table__header-item")].forEach(e=>{e.addEventListener("click",this.l.onHeaderTableClick)}),document.querySelector(".infected-search__input").addEventListener("input",this.l.onInputChange),document.querySelector(".infected-toggle__select").addEventListener("input",this.l.onSelectChange),this}};return Object.assign(e,{data:[],l:{onHeaderTableClick:e=>{},onInputChange:e=>{},onSelectChange:e=>{}},sortType:"asc",sortItem:"",sortedData:[],userData:{},currentDate:""})};(async()=>{(await d().init()).createListeners().addListeners()})()}]);