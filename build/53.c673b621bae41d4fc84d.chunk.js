(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{f3891c34122185d4e4c2:function(e,t,n){"use strict";n.r(t);var r,o=n("8af190b70a6bc55c6f1b"),a=n.n(o),i=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),c=n("0d7f0986bcd2f33d8a2a"),s=n("a28fc3c963a1d4d1a2e5"),u=n("ab4cb61bcb2dc161defb"),l=n("6e7884549289e15b6869"),f=n.n(l),b=n("d95b0cf107403b178365"),d=n("e727e731a9bed8ec3c2a"),p=n.n(d),m=n("1551459233b95bf53af9"),h=n.n(m),y=n("4c4d244037339663cf8b"),v=n.n(y),g=n("5e98cee1846dbfd41421"),O=n("3b3585ab3a6422a1171e"),w=n("3ed81f8d24b90b29f580"),j=Object(w.a)(function(){return Promise.all([n.e(0),n.e(40)]).then(n.bind(null,"934674ef8558583868fb"))}),S=Object(w.a)(function(){return n.e(47).then(n.bind(null,"5fc06f8fbc75d09efe5d"))}),P=n("19bf5dcb2c80db12f1b3"),D=Object(w.a)(function(){return Promise.all([n.e(0),n.e(42)]).then(n.bind(null,"21563a5028356428d90b"))}),N=n("12f7480661480f950bdc"),k=function(e){return e.signUp||N.b},U=function(){return Object(s.a)(k,function(e){return e})},E=n("c450324e83be3cd1fbf5"),_=n("217d705ac69be6522436"),T=n("bfb8dbea97ae0e056603"),C=n.n(T),M=n("776f7b15d44f70e7504d"),A=n.n(M);function G(e){return(G="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&a)for(var c in a)void 0===t[c]&&(t[c]=a[c]);else t||(t=a||{});if(1===i)t.children=o;else if(i>1){for(var s=new Array(i),u=0;u<i;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){B(e,t,n[t])})}return e}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function W(e){return a.a.createElement(v.a,H({direction:"up"},e))}n.d(t,"SignUp",function(){return V});var q=I(c.Helmet,{},void 0,I("title",{},void 0,"Signup"),I("meta",{name:"description",content:"Description of Signin"})),z=I("div",{className:"logo"},void 0,I("img",{src:A.a,alt:"",title:""})),K=I(O.a,{}),L=I(S,{}),Q=I("div",{className:"rightArticle"},void 0,I("img",{src:C.a,alt:"",title:""})),V=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=F(t).call(this,e),n=!o||"object"!==G(o)&&"function"!==typeof o?J(r):o,B(J(n),"handleClickOpen",function(){n.setState({open:!0})}),B(J(n),"handleClose",function(){n.setState({open:!1,stage:"SIGNUP"})}),B(J(n),"submitRegistration",function(e){var t=(e||{}).phone;window.console.log("values",e),n.setState({formData:e}),t&&n.props.dispatch(Object(E.c)({number:"91".concat(t)})).then(function(){n.setState({stage:"OTP",open:!0})})}),B(J(n),"submitOtp",function(e){var t=n.state.formData,r=(t||{}).phone,o=R({number:"91".concat(r)},e);n.props.dispatch(Object(E.f)(o)).then(function(e){var r=e.payload,o=r.success,a=(r.error||{}).message;o?n.props.dispatch(Object(E.d)(t)).then(function(e){var t=e.payload||{},r=t.success,o=(t.response||{}).data||{},a=o.message,i=o.success;r?n.setState({stage:"UPDATE"}):n.setState({stage:"SIGNUP",open:!1,error:{message:a,success:i}})}):n.setState({error:{error:!0,errorMsg:a}})})}),B(J(n),"updateDetails",function(e){var t=R({phone:(n.state.formData||{}).phone},e);n.props.dispatch(Object(E.e)(t)).then(function(e){var t=(e||{}).payload||{},n=t.success,r=t.message;n?g.a.push("/home"):window.console.log(r)})}),n.state={open:!1,formData:null,stage:"SIGNUP"},n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(t,a.a.PureComponent),n=t,(r=[{key:"render",value:function(){var e=this.props.isMobile,t=this.state,n=t.stage,r=t.error,o=t.formData,a=r||{},i=a.error,c=a.errorMsg;return I(_.a,{},void 0,q,I("div",{className:"wrapper"},void 0,I("div",{className:"leftArticle"},void 0,I("div",{className:"navigation"},void 0,e?K:z),I("div",{className:"content"},void 0,e?null:L,I("div",{className:"blackBox"},void 0,["SIGNUP"].includes(n)?I(j,{submitRegistration:this.submitRegistration,responseError:r,formData:o}):["OTP"].includes(n)&&!e?I(P.a,{submitFun:this.submitOtp,error:{error:i,errorMsg:c}}):["UPDATE"].includes(n)?I(D,{updateDetails:this.updateDetails,responseError:r}):null))),e?null:Q),e&&["OTP"].includes(n)?I(p.a,{open:this.state.open,TransitionComponent:W,keepMounted:!0,onClose:this.handleClose,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",className:"dialogWrapper"},void 0,I(h.a,{className:"sumanta"},void 0,I(P.a,{submitFun:this.submitOtp,error:{error:i,errorMsg:c}}))):null)}}])&&x(n.prototype,r),o&&x(n,o),t}(),X=Object(s.b)({signUp:U()});var Y=Object(i.connect)(X,function(e){return{dispatch:e}}),Z=Object(b.a)({key:"signUp",reducer:N.a});t.default=Object(u.compose)(Z,Y,o.memo)(f()(function(e){return{isMobile:e.width<768}})(V))}}]);