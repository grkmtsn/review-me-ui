/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var e={418:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,l,s=n(e),c=1;c<arguments.length;c++){for(var f in i=Object(arguments[c]))t.call(i,f)&&(s[f]=i[f]);if(r){l=r(i);for(var p=0;p<l.length;p++)o.call(i,l[p])&&(s[l[p]]=i[l[p]])}}return s}},251:(e,r,t)=>{t(418);var o=t(698),n=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;n=a("react.element"),r.Fragment=a("react.fragment")}var i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var o,a={},c=null,f=null;for(o in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(f=r.ref),r)l.call(r,o)&&!s.hasOwnProperty(o)&&(a[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===a[o]&&(a[o]=r[o]);return{$$typeof:n,type:e,key:c,ref:f,props:a,_owner:i.current}}r.jsx=c,r.jsxs=c},893:(e,r,t)=>{e.exports=t(251)},698:e=>{e.exports=require("react")}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{t.r(o),t.d(o,{default:()=>s}),t(698);const e=require("@fowapps/fow-ui");var r=t(893),n=e.Typography.Caption,a=e.Typography.Overline,i=e.Typography.Subtitle;const l=function(t){var o=t.feed;return(0,r.jsxs)(e.Card,{children:[(0,r.jsx)(i,{level:1,children:"Remote Feed"}),(0,r.jsxs)(e.Space,{direction:"vertical",size:"xxsmall",align:"start",children:[(0,r.jsxs)(e.Space,{size:"xxsmall",direction:"horizontal",children:[(0,r.jsx)(n,{color:"disabled",children:o.relations[0].date}),(0,r.jsx)(a,{color:"disabled",children:o.relations[0].owner.fullName})]}),(0,r.jsx)(i,{level:2,children:o.relations[0].message})]})]})},s=function(e){var t=e.feed;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(l,{feed:t})})}})();var n=exports;for(var a in o)n[a]=o[a];o.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})})();
