(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"348cae7b01ed2b709bb4":function(e,r,o){"use strict";o.r(r);var n,t=o("8af190b70a6bc55c6f1b"),i=o.n(t),a=(o("8a2d1b95e05b6a321e74"),o("0b3cb19af78752326f59")),l=o("52388825fab3a9f440ec"),c=a.c.div.withConfig({displayName:"style__VideoPlayerContainer",componentId:"sc-1edph75-0"})(["",";",";border-radius:5px;position:relative;@media (min-width:","){border:solid 1px #c1bfbf;}"],l.a.flex,l.a.column,l.a.small);function d(e,r,o,t){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(r||0===a||(r={children:void 0}),r&&i)for(var l in i)void 0===r[l]&&(r[l]=i[l]);else r||(r=i||{});if(1===a)r.children=t;else if(a>1){for(var c=new Array(a),d=0;d<a;d++)c[d]=arguments[d+3];r.children=c}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}function s(){return(s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function f(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var o=[],n=!0,t=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(n=(a=l.next()).done)&&(o.push(a.value),!r||o.length!==r);n=!0);}catch(e){t=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(t)throw i}}return o}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.default=Object(t.memo)(function(e){var r=e.data||{},o=r.coverImage,n=r.coverVideo,t=r.courseName,a=r.duration,l=f(t?t.split(""):[],1)[0];return d(c,{},void 0,d("div",{},void 0,d("video",{width:"100%",controls:!0,poster:o},void 0,i.a.createElement("track",s({kind:"captions"},e)),d("source",{src:n,type:"video/mp4"}),"Your browser does not support HTML video.")),d("div",{className:"playerDesc"},void 0,d("div",{className:"box_1"},void 0,d("i",{},void 0,l)),d("div",{className:"box_2"},void 0,d("p",{},void 0,d("span",{className:"tex_big"},void 0,t),d("span",{className:"tex_small"},void 0,"Duration: ",a)))))})}}]);