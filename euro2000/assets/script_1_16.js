!function(){"use strict";var e=[,function(e,t,o){function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,a=new Array(t);o<t;o++)a[o]=e[o];return a}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){s(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}o.r(t),o.d(t,{_objectSpread:function(){return i},_toConsumableArray:function(){return r}})},function(e,t,o){o.r(t),o.d(t,{gsapAnimations:function(){return a}});const a=(e,t)=>{const o=.3,a=3+2*o,r=document.querySelectorAll(".gsap-frame--static"),n=document.querySelectorAll(".gsap-frame--api"),i=Boolean(e.CHAMP),s=i&&t,u={yoyo:!0,repeat:s?1:0,repeatDelay:1.5,duration:.4},c=i,l=gsap.timeline({paused:c,...u}),d=(gsap.timeline({paused:c}),gsap.timeline({paused:c,...u}));l.from(".header .offer-100 span",{y:"-200%",autoAlpha:0,duration:.3}),l.from(".header .offer-100__header",{y:"-150%",autoAlpha:0}),d.from(".gsap-aside-2",{y:"-200%",autoAlpha:0}),d.from(".gsap-aside-1",{y:"-100%",autoAlpha:0});const p=[l,d],f=gsap.timeline({paused:c}),y=gsap.timeline({paused:c}),m=gsap.timeline({paused:c}),b=gsap.timeline({paused:c}),g=gsap.timeline({paused:c}),A=gsap.timeline({paused:c}),h=gsap.timeline({paused:c});f.from(".top-banner__champ",{y:"-100%",autoAlpha:0,duration:.5,delay:o}),y.from(".top-quotes__item span",{y:"-100%",autoAlpha:0,duration:.5,stagger:.2,delay:o}),m.to(".large-header__top img",{y:"-30%",duration:a/5,repeat:4,yoyo:!0}),b.from(".i-aside-left .aside-quotes__item span",{y:"-100%",autoAlpha:0,duration:.5,stagger:.2,delay:o}),g.from(".i-aside-right .aside-quotes__item span",{y:"-100%",autoAlpha:0,duration:.5,stagger:.2,delay:o}),A.from(".i-aside-left .aside__teampic img",{x:"120%",autoAlpha:0,duration:.4,delay:o,repeat:1,yoyo:!0,repeatDelay:2.625}),h.from(".i-aside-right .aside__teampic img",{x:"-120%",autoAlpha:0,duration:.4,delay:o,repeat:1,yoyo:!0,repeatDelay:2.625});const O=[f,y,b,g,A,h,m];if(E(p),i&&t){T();let e=!1;setInterval((function(){e?T():(r.forEach((e=>{S(e)})),E(O),n.forEach((e=>{v(e)})),setTimeout((()=>{w(p)}),1e3*o)),e=!e}),1e3*a)}function T(){n.forEach((e=>{S(e)})),E(p),r.forEach((e=>{v(e)})),setTimeout((()=>{w(O)}),1e3*o)}function v(e){e.style.display="inherit",gsap.to(e,{duration:o,opacity:1,delay:o,onComplete(){e.style.position="relative"}})}function S(e){e.style.position="absolute",gsap.to(e,{duration:o,opacity:0,onComplete(){e.style.display="none"}})}function E(e){e.forEach((e=>{e.play()}))}function w(e){e.forEach((e=>{e.pause(0)}))}}}],t={};function o(a){var r=t[a];if(void 0!==r)return r.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,o),n.exports}o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};!function(){o.r(a);var e=o(1),t=o(2);function r(o){let a,r,n=o,i=document.querySelectorAll("[data-autobet]");r={ID:14728241,CH:296218,SP:1,SPORT:"Футбол",CHAMP:" Евро 2024. Германия.",EVENT:"Бельгия - Словакия",TEAM1:"Бельгия",VS:"Ничья",TEAM2:"Словакия",LOGO1:"https://fcdn.betcity.ru/autobet/images/universal/2456.png",LOGO2:"https://fcdn.betcity.ru/autobet/images/universal/2812.png",START:171864e4,STARTTIME:"19:00",STARTDATE:"17.06",STARTDAY:17,STARTMONTH:"Июня",STARTWEEKDAY:"Понедельник",STARTHUMDAY:"Сегодня",LIVE:!1,QUOTE1:"1.50",QUOTEX:"4.60",QUOTE2:"7.30",LINK:"https://betcity.ru/ru/line/soccer/296218/14728241",AMOUNT:"100 000 ₽",DISCLAIMER:"*До 100 000 рублей в виде фрибетов**.** Фрибет – предоставляемый компанией бонус, которым клиент компании может воспользоваться для заключения пари с ООО «Фортуна». Сроки проведения акции: с 14.11.2022 (00:00:00 МСК) по 31.12.2024 (23:59:59 МСК). Для участия в акции участнику необходимо зарегистрироваться и сделать ставку  от 500 рублей на любое событие с кф. от 1.8 на сайте www.betcity.ru или в мобильном приложении Бетсити. Полные правила акции, информацию об организаторе, призовом фонде, количестве призов или выигрышей, сроках, месте и порядке получения призов или выигрышей можно узнать на сайте www.betcity.ru. Розыгрыш происходит в момент совершения события. Источник информации об организаторе основанных на риске игр, пари, о правилах их проведения, о призовом фонде таких игр, пари, о количестве призов или выигрышей, о сроках, месте и порядке получения призов или выигрышей можно узнать на сайте www.betcity.ru."},a=(0,e._objectSpread)((0,e._objectSpread)({},n),autobet.fields),(0,t.gsapAnimations)(a,1),console.log(a),function(){a.STATIC_OGJ?console.log("%cДанные из статического объекта","color: gold; font-weight: bold;  font-size: 2em"):a.CHAMP?console.log("%cДанные из API получены","color: green; font-weight: bold;  font-size: 2em"):console.log("%cДанные из API НЕ получены","color: red; font-weight: bold; font-size: 2em");document.body.classList.add(a.CHAMP?"data-received":"data-not-received"),(0,e._toConsumableArray)(i).forEach((function(e){"SPAN"!=e.tagName&&"DIV"!=e.tagName||a[e.dataset.autobet]&&(e.innerText=a[e.dataset.autobet]),"IMG"==e.tagName&&a[e.dataset.autobet]&&(e.src=a[e.dataset.autobet])}))}(),function(){if(!a.PROMOCODE)return void document.body.classList.add("has-no-promocode");document.body.classList.add("has-promocode")}(),function(){if(!a.EVENT)return;""===a.QUOTEX&&document.body.classList.add("two-teams");document.body.classList.add("has-event"),a.LIVE?document.body.classList.add("live-is-avaliable"):document.body.classList.add("live-not-avaliable")}(),document.body.classList.add("loaded")}window.addEventListener("DOMContentLoaded",(function(){autobet.promise.then((function(e){r(e)}))}))}()}();