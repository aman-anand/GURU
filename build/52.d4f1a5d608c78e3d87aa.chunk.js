(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"2de58708c2d1e339194a":function(e,t,n){"use strict";n.r(t);var i,a=n("8af190b70a6bc55c6f1b"),o=n.n(a),r=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),c=n("0d7f0986bcd2f33d8a2a"),l=n("a28fc3c963a1d4d1a2e5"),d=n("ab4cb61bcb2dc161defb"),f=n("6e7884549289e15b6869"),s=n.n(f),u=n("d95b0cf107403b178365"),p=n("e12f56ed0a5d21cbb229"),b=function(e){return e.articleDetails||p.b},m=function(){return Object(l.a)(b,function(e){return e})},h=n("600e6bf7eefc3f53a303"),y=n("0517b83c4092cead749a"),v=n("e430f51277cb1de51211"),g=n("9dc1b303bdb4d6ac8164"),x=n("3ed81f8d24b90b29f580"),w=Object(x.a)(function(){return n.e(37).then(n.bind(null,"88407537f8082c94b1e4"))}),O=n("68a42454b9ea776d5fad"),D=n("0b3cb19af78752326f59"),S=n("52388825fab3a9f440ec"),j=D.c.section.withConfig({displayName:"style__ArticleDetailsContainer",componentId:"ep0cr2-0"})(["",";",";@media (max-width:","){background-color:#f9fafc;height:100vh;}.container{padding:0px 10px 10px 10px;",";",";box-sizing:border-box;@media (min-width:","){",";padding:10px 0px;margin-top:24px;}}.leftBox,.rightBox{box-sizing:border-box;",";",";@media (min-width:","){padding-left:15px;padding-right:15px;}}.leftBox{flex:1;}.rightBox{@media (min-width:","){width:33%;}}sessionCardWrapper,.VideoCardContainer{min-height:195px;max-height:195px;@media (min-width:","){margin:8px 15px;}}.VideoCardContainer{border:solid 1px red;@media (min-width:","){width:100%;}}"],S.a.flex,S.a.column,S.a.small,S.a.flex,S.a.column,S.a.small,S.a.row,S.a.flex,S.a.column,S.a.small,S.a.small,S.a.small,S.a.small);function C(e){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t,n,a){i||(i="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),t&&o)for(var c in o)void 0===t[c]&&(t[c]=o[c]);else t||(t=o||{});if(1===r)t.children=a;else if(r>1){for(var l=new Array(r),d=0;d<r;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:i,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function T(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function I(e,t){return!t||"object"!==C(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"ArticleDetails",function(){return R});var k=_(c.Helmet,{},void 0,_("title",{},void 0,"ArticleDetails"),_("meta",{name:"description",content:"Description of ArticleDetails"})),B=_(h.a,{title:"DOCUMENTS"}),A=_(y.a,{title:"DOCUMENTS",goTo:"/articles"}),P=_(g.a,{title:"Other INTERESTING COURSES"}),R=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=I(this,E(t).call(this,e))).state={},n}var n,i,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,o.a.PureComponent),n=t,a=[{key:"getDerivedStateFromProps",value:function(e,t){var n=(((e||{}).match||{}).params||{}).articlesId;return t.ARTICLE_ID=n||null,null}}],(i=[{key:"componentDidMount",value:function(){var e={ARTICLE_ID:this.state.ARTICLE_ID};this.props.dispatch(Object(O.c)({page:1,limit:4,status:0,all:!0})),this.props.dispatch(Object(O.b)(e))}},{key:"render",value:function(){var e=this.props||{},t=e.isMobile,n=e.articleDetails||{},i=n.courseObj,a=n.details,o=(i||{}).data,r=a[0]||[]||{},c=r.title,l=r.data,d=r.readingTime,f=r.img;return _(j,{},void 0,k,t?A:B,_("div",{className:"container"},void 0,_("div",{className:"leftBox"},void 0,_(w,{data:{title:c,readingTime:d,img:f,data:l}})),t?null:_("div",{className:"rightBox"},void 0,P,_("div",{className:"cardWrapper"},void 0,o&&o.map(function(e){var t=e||{},n=t.name,i=t.sections,a=t.duration,o=t.totalVideos,r=t.coverImage,c=t._id,l={courseName:n,totalSections:i?i.length:0,totalVideosOBJ:o,durationOBJ:a,coverImageOBJ:r,_id:c},d={name:"".concat(i?i.length:0," SECTIONS"),classname:"expert"};return _(v.a,{courseData:l,sticyTwo:!0,sticyTwoData:d},c)})))))}}])&&T(n.prototype,i),a&&T(n,a),t}(),J=Object(l.b)({articleDetails:m()});var M=Object(r.connect)(J,function(e){return{dispatch:e}}),V=Object(u.a)({key:"articleDetails",reducer:p.a});t.default=Object(d.compose)(V,M,a.memo)(s()(function(e){return{isMobile:e.width<768}})(R))}}]);