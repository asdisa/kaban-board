!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e,n){t.exports=n.p+"1d1e93c7c482aa1c85518f5bd698b092.webp"},function(t,e,n){t.exports=n.p+"5fe0db661a8f134c8ff7cb418373c469.svg"},function(t,e,n){t.exports=n.p+"6cb6e5fc57e9600d8f9f7cdfaa120d3d.svg"},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(8)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){e=t.exports=n(5)(!1);var r=n(6)(n(7));e.push([t.i,'/* Base styles */\n\n:root {\n  font-size: 10px;\n  font-family: "Montserrat", sans-serif;\n  font-style: normal;\n}\n\nbody {\n  background: url('+r+') no-repeat center center fixed;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n}\n\nbutton {\n  padding: 0;\n  border: none;\n  font: inherit;\n  color: inherit;\n  background-color: transparent;\n  cursor: pointer;\n}\n\nbody,\np,\n.board,\n.board-title,\n.cards,\n.card,\n.btn {\n  margin: 0;\n}\n\n:focus {\n  outline: 0;\n  border: 0.1rem solid #c9d2d9;\n}\n\n/* Grid styles */\n\n.wall {\n  display: grid;\n  grid-auto-columns: 27.2rem;\n  grid-auto-flow: column;\n  grid-column-gap: 1.2rem;\n}\n\n.board {\n  display: grid;\n  grid-template-rows: auto minmax(auto, 1fr) auto;\n}\n\n.cards {\n  list-style-type: none;\n  display: grid;\n  grid-row-gap: 0.8rem;\n  grid-auto-columns: 24.8rem;\n}\n\n/* Wall styles */\n\n.wall::-webkit-scrollbar {\n  background: transparent;\n  height: 0px;\n}\n\n.wall {\n  padding: 2rem;\n  padding-top: 2.1rem;\n  align-items: start;\n  overflow-x: auto;\n  height: calc(100vh - 4.1rem);\n}\n\n/* Board styles */\n\n.board {\n  padding: 0rem;\n  background-color: #e2e4e6;\n  max-height: calc(100vh - 4.1rem);\n  background: #dfe3e6;\n  border-radius: 0.3rem;\n}\n\n.board:focus {\n  border: 0;\n  box-shadow: 0.3rem 0.4rem 0.6rem black;\n}\n\n.board:last-of-type {\n  margin-right: 0;\n}\n\n.board-title {\n  padding: 1.2rem;\n  padding-top: 0.8rem;\n  padding-bottom: 0;\n  font-size: 1.3rem;\n  font-weight: bold;\n  color: #000;\n}\n\n/* Cards styles */\n\n.cards {\n  cursor: pointer;\n  padding: 1.2rem;\n  height: calc(100% - 5rem);\n  padding-bottom: 0rem;\n  flex-direction: column;\n  align-content: start;\n  overflow-y: scroll;\n}\n\n.cards::-webkit-scrollbar {\n  background: transparent;\n  width: 0px;\n}\n\n.last-card {\n  margin-bottom: 0.3rem;\n}\n\n/* Card styles */\n\n.card {\n  display: block;\n  font-weight: normal;\n  font-size: 1.3rem;\n  background: #ffffff;\n  padding: 0.8rem 1.2rem;\n  padding-bottom: 0.8rem 1.2rem;\n  box-shadow: 0 0.1rem 0.4rem rgba(9, 45, 66, 0.25);\n  border-radius: 0.3rem;\n  word-wrap: break-word;\n  line-height: 1.9rem;\n}\n\n.card:focus {\n  border: 0;\n  box-shadow: 0 0.1rem 0.3rem black;\n}\n\n.card:last-of-type {\n  margin-bottom: 0;\n}\n\n.title-textarea {\n  resize: none;\n  width: inherit;\n  border: 0;\n  padding: 0;\n  line-height: 1.9rem;\n  font-size: 1.3rem;\n  font-family: "Montserrat", sans-serif;\n  width: 100%;\n}\n\n.title-textarea:focus {\n  outline: 0;\n  border: 0;\n}\n\n.title-textarea ::-webkit-input-placeholder {\n  color: #b8b9bb;\n}\n\n/* Add sections styles */\n\n.add-section-insides,\n.add-section-facade {\n  display: flex;\n  font-size: 1.3rem;\n  border-radius: 0.3rem;\n  padding-bottom: 1.2rem;\n}\n\n.cvg-ico:hover {\n  cursor: pointer;\n}\n\n.add-section-facade {\n  padding: 1.2rem;\n}\n\n.add-section-facade:hover {\n  cursor: pointer;\n}\n\n.add-section-insides {\n  justify-content: space-between;\n}\n\n.add-section-facade-text {\n  padding-left: 0.8rem;\n  color: #6b808c;\n  line-height: 1.9rem;\n  pointer-events: none;\n}\n\n/* Add sections\' children styles */\n\n.add-btn {\n  font-weight: 700;\n  background: #39c071;\n  color: #eee;\n  height: 3rem;\n  padding: 0.8rem;\n  border-radius: 3px;\n  border: 0;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.add-btn:hover {\n  background: rgb(56, 177, 106);\n}\n\n.add-btn:active {\n  background: rgb(48, 172, 99);\n}\n\n.add-btn:focus {\n  border: 0.1rem solid green;\n  padding-top: 0.7rem;\n  padding-left: 0.7rem;\n}\n\n.empty-slot {\n  color: transparent;\n  background: #c9d2d9;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  box-shadow: none !important;\n}\n\n.over {\n  border-top: 0.2rem solid #c9d2d9;\n}\n\n.ghost {\n  opacity: 1;\n  width: 22.4rem;\n  background: white;\n  position: absolute;\n  top: -1000px;\n}\n\n.unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none; \n  -ms-user-select: none; \n  user-select: none; \n}\n',""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e,n){t.exports=n.p+"3ad061a44ac8bc8e93cd58be45080987.webp"},function(t,e,n){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),l=null,d=0,c=[],u=n(9);function h(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(y(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function p(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function f(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(t.insertAt.before,n);n.insertBefore(e,i)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return b(e,t.attrs),f(t,e),e}function b(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var a=d++;n=l||(l=g(e)),r=w.bind(null,n,a,!1),i=w.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),f(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=u(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),i=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return h(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i];(s=o[a.id]).refs--,r.push(s)}t&&h(p(t,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete o[s.id]}}}};var v,E=(v=[],function(t,e){return v[t]=e,v.filter(Boolean).join("\n")});function w(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=E(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,n){"use strict";n.r(e);n(3);var r=n(0),i=n.n(r);var o=class{constructor(t){this.title=t}};var a=class extends o{};var s=class extends o{constructor(t,e=[],n=a){if(!e.every(t=>t instanceof n))throw new Error(`Some members of ${e} are not instances of ${n}`);super(t),this._childEntities=e,this._childEntityClass=n}get childEntities(){return this._childEntities}get childEntityClass(){return this._childEntityClass}makeChildEntity(t){return new this._childEntityClass(t)}incertChildEntity(t,e=null){if(!(t instanceof this.childEntityClass))throw new Error(`${t} is not instance of ${this.childEntityClass}`);e=null!=e?e:this.childEntities.length,this._childEntities.splice(e,0,t)}deleteChildEntityWithIndex(t){this.childEntities.splice(t,1)}};var l=class extends s{constructor(t,e=[]){super(t,e,a),this.insidesShown=!1}};var d=class extends s{constructor(t=[]){super(null,t,l)}get boards(){return this.childEntities}};var c=class{constructor(t=null){this.wall=null!=t?t:new d}};class u{static encode(t){const e={};Object.getOwnPropertyNames(t).forEach(n=>e[n]=t[n]),Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(n=>e[n]=t[n]);return JSON.stringify(e,(t,e)=>e,2)}static decodeState(t){const e=JSON.parse(t,(t,e)=>"string"==typeof e&&0===e.indexOf("function ")?Function.apply(null,[`return ${e}`])():e),n=[];return e.wall._childEntities.forEach(t=>{const e=[];t._childEntities.forEach(t=>{e.push(new a(t.title))}),n.push(new l(t.title,e))}),new c(new d(n))}static saveState(t){localStorage.setItem("appState",u.encode(t))}static loadState(){const t=JSON.parse(localStorage.getItem("appState"));return null==t?t:u.decodeState(JSON.stringify(t))}static removeStateFromLocalStorage(){localStorage.removeItem("appState")}}var h=u;var p=class{update(){}};var f=class{constructor(){this._observers=[]}registerObserver(t){this._observers.push(t)}notifyAll(){this._observers.forEach(t=>{t.update(this)})}};var m=class extends f{constructor(t=null){super(),this.state=null!=t?t:new c,this.previousState=this.state}get wall(){return this.state.wall}get boards(){return this.wall.boards}};function g(t){return"null"===t?null:parseInt(t)}function b(t){const e=t.id.split("-");if(3===e.length){return[g(e[1]),g(e[2])]}return[null,g(e[1])]}function y(t){setTimeout(()=>{t.focus()},0)}function v(t,e){for(const[n,r]of e)t.setAttribute(n,r)}function E(t){(async()=>{t.style.webkitTransform="rotate(-4deg)",await new Promise(t=>setTimeout(t,150)),t.style.webkitTransform="rotate(2deg)",await new Promise(t=>setTimeout(t,100)),t.style.webkitTransform="rotate(0deg)"})()}function w(t){t.scrollTop=t.scrollHeight-t.clientHeight}var S={wall:{title:null,_childEntities:[{title:"Неочевидный реализованный функционал",_childEntities:[{title:"Tab как средство перемещения по кнопкам"},{title:"Скролл мыши с зажатым Stift позволяет перемещаться горизонтально"},{title:"Клик по Доске/Картdeочке выделяет соответвующий объект"},{title:"Delete удаляет выделенный объект"},{title:"Ctrl+Z отменяет одно последнее действие"},{title:"Ctrl+S сохраняет текущее состояние Досок в LocalStorage"},{title:"Ctrl+L загружет последнее сохраненное состояние Досок"},{title:"Ctrl+I загружает исходное состояние Досок"}],insidesShown:!1},{title:"Нереализованный функционал",_childEntities:[{title:"Непрозрачная наклоненная перемещаемая карточка"},{title:"Mobile-first адаптив"}],insidesShown:!1},{title:"Сделано",_childEntities:[{title:"Сделать тестовое"},{title:"Проверить метрики Lighthouse"},{title:"Залить на гитхаб, захостить на Pages"},{title:"Написать CV"}],insidesShown:!1},{title:"Не сделано",_childEntities:[{title:"Диплом"},{title:"Повторить структуры данных"},{title:"Повторить алгоритмы"},{title:"Порешать Codeforces"},{title:"Зарашить курсик по реакту"},{title:"Поверстать без бутстрапов"},{title:"Дочитать Secrets of the JavaScript Ninja"},{title:"Понять кложур"},{title:"Понять дзен"}],insidesShown:!1}]}};var x=class{constructor(t){this._model=t,this._draggedElement=null}get model(){return this._model}updatePreviousState(){this.model.previousState=h.decodeState(h.encode(this.model.state))}saveStateToLocalStorage(){h.saveState(this.model.state)}loadState(t){t!==this.model.state&&(this.model.state=t,this.model.notifyAll())}loadStateFromLocalStorage(){this.updatePreviousState(),this.loadState(h.loadState())}loadInitialState(){this.updatePreviousState(),this.loadState(h.decodeState(JSON.stringify(S)))}loadPreviousState(){this.loadState(this.model.previousState)}getEntityManagersDict(){const t={null:this.model.wall};for(let e=0;e<this.model.boards.length;e+=1)t[e]=this.model.boards[e];return t}getEntityManagerWithIndex(t){return this.getEntityManagersDict()[t]}lastChildIndex(t){return this.getEntityManagersDict()[t].childEntities.length-1}deleteEntity(t,e){this.updatePreviousState(),this.getEntityManagerWithIndex(t).deleteChildEntityWithIndex(e)}incertEntity(t,e,n){const r=this.getEntityManagerWithIndex(t),i=r.makeChildEntity(n);var o,a;r.incertChildEntity(i,e),a="insidesShown",(o=r)&&hasOwnProperty.call(o,a)&&(r.insidesShown=!1)}addChildEntity(t,e){this.updatePreviousState(),this.incertEntity(t,null,e),this.model.notifyAll()}deleteEntityAndUpdateView(t){const[e,n]=t;this.deleteEntity(e,n),this.model.notifyAll()}handleFacadeClick(t){const e=g(t.target.id.split("-")[1]),n=this.getEntityManagersDict();for(const t of Object.keys(n))n[t].insidesShown=t===String(e);this.model.notifyAll()}handleCrossClick(t){const e=g(t.target.id.split("-")[1]);this.getEntityManagerWithIndex(e).insidesShown=!1,this.model.notifyAll()}handleDragStart(t){const e=t.target;this._draggedElement=e;const n=e.cloneNode(!0);n.classList.add("ghost"),document.body.appendChild(n),t.dataTransfer.setDragImage(n,0,0),e.classList.add("empty-slot"),t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/html",e.innerHTML)}handleDragOver(t){return t.preventDefault&&t.preventDefault(),t.dataTransfer.dropEffect="move",!1}handleDragEnter(t){const e=t.target;e.id&&e.classList.add("over")}handleDragLeave(t){const e=t.target;e.id&&e.classList.remove("over")}handleDrop(t){t.stopPropagation&&t.stopPropagation();const e=t.target;if(this._draggedElement!==e&&e.id){let[t,n]=b(e);null==t&&([t,n]=[n,null]);const[r,i]=b(this._draggedElement),o=this._draggedElement.innerHTML;this.deleteEntity(r,i),this.incertEntity(t,n,o),this.model.notifyAll(),w(document.getElementById(`cards-${t}`))}return!1}handleDragEnd(t){t.target.classList.remove("empty-slot");const e=document.querySelectorAll(".card");[].forEach.call(e,t=>{t.classList.remove("over")})}};var k={entityAdder:new Map([[a,{facadeInnerText:"Добавить еще одну карточку",inputPlaceholder:"Введите название карточки",addButtonText:"Добавить карточку"}],[l,{facadeInnerText:"Добавить еще одну колонку",inputPlaceholder:"Введите название колонки",addButtonText:"Добавить колонку"}]])},C=n(1),L=n.n(C),_=n(2),I=n.n(_);var T=class extends p{constructor(t){super(),this._controller=t,this._controller.model.registerObserver(this)}addChildEntity(t,e){if(e.replace(/\s/g,"")){this._controller.addChildEntity(t,e);const n=this._controller.lastChildIndex(t);y(document.getElementById(`entity-${String(t)}-${n}`))}else E(document.getElementById(`titleInput-${t}`))}deleteEntityById(t){const[e,n,r]=t.split("-");if("entity"===e&&"null"!==r){const t=[g(n),g(r)];this._controller.deleteEntityAndUpdateView(t)}else E(document.getElementById(t))}makeCardsElement(t,e,n){const r=document.createElement("OL");v(r,new Map([["id",`cards-${n}`],["class","cards"]]));for(let i=0;i<t.length;i+=1){const o=document.createElement("LI");v(o,new Map([["id",`entity-${n}-${i}`],["class",`card${i!==t.length-1||e.insidesShown?"":" last-card"}`],["draggable","true"],["tabindex","-1"]])),o.addEventListener("click",t=>{t.stopPropagation(),t.target.focus()}),o.addEventListener("keydown",t=>{t.stopPropagation(),"Delete"===t.key&&this.deleteEntityById(t.target.id)}),o.addEventListener("dragstart",t=>this._controller.handleDragStart(t),!1),o.addEventListener("dragenter",t=>this._controller.handleDragEnter(t),!1),o.addEventListener("dragover",t=>this._controller.handleDragOver(t),!1),o.addEventListener("dragleave",t=>this._controller.handleDragLeave(t),!1),o.addEventListener("drop",t=>this._controller.handleDrop(t),!1),o.addEventListener("dragend",t=>this._controller.handleDragEnd(t),!1),o.innerText=t[i].title,r.appendChild(o)}0!==t.length||e.insidesShown||r.setAttribute("style","display:none;");const i=this.makeTitleTextareaListItem(e,n),o=this.makeAddSectionInsidesListItem(e,n);return r.appendChild(i),r.appendChild(o),setTimeout(()=>{r.style.height="100%",r.style.height="auto"},0),r.addEventListener("scroll",t=>{r.style.height="100%",r.style.height="auto"},!1),r}makeTitleTextareaListItem(t,e){const n=t.childEntityClass,r=document.createElement("textarea");v(r,new Map([["id",`textarea-${e}`],["class","title-textarea"],["placeholder",k.entityAdder.get(n).inputPlaceholder],["rows","2"]])),r.addEventListener("keypress",t=>{"Enter"!==t.key||t.shiftKey||(t.preventDefault(),this.addChildEntity(e,r.value))});const i=document.createElement("LI");return v(i,new Map([["id",`titleInput-${e}`],["class","card"]])),t.insidesShown?y(r):i.setAttribute("style","display:none;"),i.appendChild(r),i}makeAddSectionInsidesListItem(t,e){const n=t.childEntityClass,r=document.createElement("button");v(r,new Map([["id",`addBtn-${e}`],["class","add-btn"],["type","submit"]])),r.innerText=k.entityAdder.get(n).addButtonText,r.addEventListener("click",t=>{t.stopPropagation();const n=document.getElementById(`textarea-${e}`).value;this.addChildEntity(e,n)});const i=document.createElement("input");v(i,new Map([["id",`cross-${e}`],["class","svg-ico cross-ico unselectable"],["type","image"],["alt","X"],["src",L.a]]));const o=document.createElement("li");return v(o,new Map([["id",`insides-${e}`],["class","add-section-insides last-card unselectable"],["style",t.insidesShown?"":"display:none;"]])),o.appendChild(r),o.appendChild(i),o.addEventListener("click",t=>this._controller.handleCrossClick(t)),o}makeFacadeElement(t,e){const n=t.childEntityClass,r=document.createElement("input");v(r,new Map([["id",`plus-${e}`],["class","svg-ico plus-ico unselectable"],["type","image"],["alt","+"],["src",I.a]]));const i=document.createElement("p");i.setAttribute("class","add-section-facade-text unselectable"),i.innerText=k.entityAdder.get(n).facadeInnerText;const o=document.createElement("div");return v(o,new Map([["id",`facade-${e}`],["class","add-section-facade"]])),null!==e&&(o.addEventListener("dragenter",t=>this._controller.handleDragEnter(t),!0),o.addEventListener("dragover",t=>this._controller.handleDragOver(t),!0),o.addEventListener("dragleave",t=>this._controller.handleDragLeave(t),!0),o.addEventListener("drop",t=>this._controller.handleDrop(t),!0),o.addEventListener("dragend",t=>this._controller.handleDragEnd(t),!0)),o.appendChild(r),o.appendChild(i),t.insidesShown&&o.setAttribute("style","display:none;"),o.addEventListener("click",t=>{this._controller.handleFacadeClick(t);const e=t.target.id.split("-")[1];w(document.getElementById(`cards-${e}`))}),o}makeBoardElement(t,e){const n=document.createElement("div");v(n,new Map([["id",`entity-null-${e}`],["class","board"],["tabindex","-2"]])),n.addEventListener("click",t=>{t.stopPropagation(),t.target.focus()}),n.addEventListener("keydown",t=>{t.stopPropagation();const e=t.target.id.split("-")[0];"Delete"===t.key&&"textarea"!==e&&this.deleteEntityById(t.target.id)});let r=[];if(null!=t.title){r=t.childEntities;const e=document.createElement("h3");e.setAttribute("class","board-title unselectable"),e.innerText=t.title,n.appendChild(e)}const i=this.makeCardsElement(r,t,e),o=this.makeFacadeElement(t,e);return n.appendChild(i),n.appendChild(o),n}update(t){const e=document.getElementsByClassName("wall")[0];for(;e.firstChild;)e.removeChild(e.firstChild);for(let n=0;n<t.boards.length;n+=1){const r=t.boards[n];e.appendChild(this.makeBoardElement(r,n))}e.appendChild(this.makeBoardElement(t.wall,null)),document.onkeydown=(t=>{if(window.navigator.platform.match("Mac")?t.metaKey:t.ctrlKey)switch(t.preventDefault(),t.keyCode){case 83:this._controller.saveStateToLocalStorage();break;case 90:this._controller.loadPreviousState();break;case 76:this._controller.loadStateFromLocalStorage();break;case 73:this._controller.loadInitialState()}})}};!function(){const t=document.createElement("link");t.setAttribute("rel","shortcut icon"),t.setAttribute("href",i.a),document.querySelector("head").appendChild(t);const e=h.loadState(),n=null!=e?e:h.decodeState(JSON.stringify(S)),r=new m(n),o=new x(r);new T(o),o.model.notifyAll()}()}]);