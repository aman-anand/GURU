(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{d448901b178d5a3c0528:function(e,n,t){"use strict";t.r(n);var o,i=t("8af190b70a6bc55c6f1b"),s=t.n(i),a=(t("8a2d1b95e05b6a321e74"),t("d7dd51e1bf6bfc2c9c3d")),r=t("0d7f0986bcd2f33d8a2a"),c=t("a28fc3c963a1d4d1a2e5"),d=t("ab4cb61bcb2dc161defb"),u=t("6e7884549289e15b6869"),l=t.n(u),f=t("d95b0cf107403b178365"),p=t("210c32897660c66c242d"),b=function(e){return e.sessions||p.b},v=function(){return Object(c.a)(b,function(e){return e})},m=t("e430f51277cb1de51211"),S=t("600e6bf7eefc3f53a303"),h=t("d8d12b5ef06dc51cfd32"),y=t("3ed81f8d24b90b29f580"),O=Object(y.a)(function(){return t.e(45).then(t.bind(null,"4fc43236efa0e316da9b"))}),g=t("9dc1b303bdb4d6ac8164"),N=t("378b039c107b8725f294"),w=t("176f4f517db39ef6d3be");function C(e){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,n,t,i){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,a=arguments.length-3;if(n||0===a||(n={children:void 0}),n&&s)for(var r in s)void 0===n[r]&&(n[r]=s[r]);else n||(n=s||{});if(1===a)n.children=i;else if(a>1){for(var c=new Array(a),d=0;d<a;d++)c[d]=arguments[d+3];n.children=c}return{$$typeof:o,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function E(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e,n){return(I=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}t.d(n,"Sessions",function(){return J});var P=j(r.Helmet,{},void 0,j("title",{},void 0,"Sessions"),j("meta",{name:"description",content:"Description of Sessions"})),k=j(S.a,{title:"Sessions"}),T=j(h.a,{},void 0,j("div",{className:"_bWrapper"},void 0,j("span",{},void 0,j("a",{},void 0,"SESSIONS")),j("span",{},void 0,">"),j("span",{},void 0,"UPCOMING SESSIONS"))),D=j("span",{},void 0,"UPCOMING SESSIONS"),M=j("span",{},void 0,"ATTENDED SESSIONS"),B=j(g.a,{title:"Other INTERESTING COURSES"}),J=function(e){function n(e){var t,o,i,s,a,r;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),o=this,i=R(n).call(this,e),t=!i||"object"!==C(i)&&"function"!==typeof i?_(o):i,s=_(t),r=function(e){t.setState({sessionRadio:e}),["upComingSession"].includes(e)?t.props.dispatch(Object(N.c)()):["attendedSession"].includes(e)&&t.props.dispatch(Object(N.a)())},(a="onChangeRadio")in s?Object.defineProperty(s,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[a]=r,t.state={sessionRadio:"upComingSession"},t.onChangeRadio=t.onChangeRadio.bind(_(t)),t}var t,o,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&I(e,n)}(n,s.a.PureComponent),t=n,(o=[{key:"componentDidMount",value:function(){var e=this.state.sessionRadio;["upComingSession"].includes(e)&&this.props.dispatch(Object(N.c)());this.props.dispatch(Object(N.b)({page:1,limit:4,status:0,all:!0}))}},{key:"render",value:function(){var e=this,n=this.props,t=n.isMobile,o=n.sessions,i=this.state.sessionRadio,s=o||{},a=s.upc,r=(s.courseObj||{}).data,c=(a||{}).data;return j(w.a,{},void 0,P,k,j("div",{className:"container"},void 0,j("div",{className:"leftBox"},void 0,t?null:T,j("div",{className:"sessionWrapper"},void 0,j("div",{className:"leftNavSession"},void 0,j("div",{className:"navList"},void 0,j("label",{htmlFor:"upComingSession",onClick:function(){return e.onChangeRadio("upComingSession")},className:["upComingSession"].includes(i)?"active":null},void 0,D)),j("div",{className:"navList"},void 0,j("label",{htmlFor:"attendedSession",onClick:function(){return e.onChangeRadio("attendedSession")},className:["attendedSession"].includes(i)?"active":null},void 0,M))),j("div",{className:"sessionCardWrapper"},void 0,c&&c.map(function(n){var t=n||{},o=t.name,i=t.displaySessionDate,s=t.address,a=t.attendees,r=t.guru,c=t._id,d=Math.floor(16777215*Math.random()).toString(16);return j(O,{color:d,selectedSession:e.state.sessionRadio,data:{name:o,displaySessionDate:i,address:s,attendees:a,guru:r}},c)})))),t?null:j("div",{className:"rightBox"},void 0,B,j("div",{className:"cardWrapper"},void 0,r&&r.map(function(e){var n=e||{},t=n.name,o=n.sections,i=n.duration,s=n.totalVideos,a=n.coverImage,r=n._id,c={courseName:t,totalSections:o?o.length:0,totalVideosOBJ:s,durationOBJ:i,coverImageOBJ:a,_id:r},d={name:"".concat(o?o.length:0," SECTIONS"),classname:"expert"};return j(m.a,{courseData:c,sticyTwo:!0,sticyTwoData:d},r)})))))}}])&&E(t.prototype,o),i&&E(t,i),n}(),x=Object(c.b)({sessions:v()});var W=Object(a.connect)(x,function(e){return{dispatch:e}}),G=Object(f.a)({key:"sessions",reducer:p.a});n.default=Object(d.compose)(G,W,i.memo)(l()(function(e){return{isMobile:e.width<768}})(J))}}]);