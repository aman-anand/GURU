(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"348cae7b01ed2b709bb4":function(e,t,n){"use strict";n.r(t);var o,r=n("8af190b70a6bc55c6f1b"),i=n.n(r),a=n("33d837b212ce6b982bba"),l=n.n(a),u=(n("8a2d1b95e05b6a321e74"),n("0b3cb19af78752326f59")),c=n("52388825fab3a9f440ec"),f=u.c.div.withConfig({displayName:"style__VideoPlayerContainer",componentId:"sc-1edph75-0"})(["",";",";border-radius:5px;position:relative;@media (min-width:","){border:solid 1px #c1bfbf;}.playerBox{@media (min-width:","){overflow:hidden;}img{width:100%;}}"],c.a.flex,c.a.column,c.a.small,c.a.small);function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&i)for(var l in i)void 0===t[l]&&(t[l]=i[l]);else t||(t=i||{});if(1===a)t.children=r;else if(a>1){for(var u=new Array(a),c=0;c<a;c++)u[c]=arguments[c+3];t.children=u}return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==l.return||l.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"VideoPlayer",function(){return h});var h=function(e){function t(e){var n,o,r,i,a,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=y(t).call(this,e),n=!r||"object"!==s(r)&&"function"!==typeof r?v(o):r,i=v(n),l=function(){var e=n.state.isOpen;n.setState({isOpen:!e})},(a="setVideoOpen")in i?Object.defineProperty(i,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[a]=l,n.state={isOpen:!1},n.setVideoOpen=n.setVideoOpen.bind(v(n)),n}var n,o,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,i.a.PureComponent),n=t,(o=[{key:"render",value:function(){var e=this,t=this.props.data,n=this.state.isOpen,o=t||{},r=o.coverImage,i=o.courseName,a=o.duration,u=o.youtubeId,c=d(i?i.split(""):[],1)[0];return p(f,{},void 0,p("div",{className:"playerBox"},void 0,p("img",{src:r,alt:"",title:"",role:"presentation",onClick:function(){return e.setVideoOpen()}}),u?p(l.a,{channel:"youtube",autoplay:!0,isOpen:n,videoId:u,onClose:function(){return e.setVideoOpen()}}):null),p("div",{className:"playerDesc"},void 0,p("div",{className:"box_1"},void 0,p("i",{},void 0,c)),p("div",{className:"box_2"},void 0,p("p",{},void 0,p("span",{className:"tex_big"},void 0,i),p("span",{className:"tex_small"},void 0,"Duration: ",a)))))}}])&&b(n.prototype,o),r&&b(n,r),t}();t.default=Object(r.memo)(h)}}]);