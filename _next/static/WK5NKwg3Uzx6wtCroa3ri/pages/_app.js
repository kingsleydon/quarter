(window.webpackJsonp=window.webpackJsonp||[]).push([["f496"],{"1TCz":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var r=n("0iUn"),u=n("sLSF"),a=n("MI3g"),o=n("a7VT"),l=n("Tit0"),c=n("q1tI"),i=n.n(c),f=n("8Bbg"),s=n.n(f),d=n("m/Pd"),p=n.n(d),h=(n("RDVA"),function(e){function t(){return Object(r.default)(this,t),Object(a.default)(this,Object(o.default)(t).apply(this,arguments))}return Object(l.default)(t,e),Object(u.default)(t,[{key:"render",value:function(){var e=this.props.Component;return i.a.createElement(f.Container,null,i.a.createElement(p.a,null,i.a.createElement("title",null,"一刻"),i.a.createElement("meta",{content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",name:"viewport"}),i.a.createElement("meta",{name:"full-screen",content:"yes"}),i.a.createElement("meta",{name:"browsermode",content:"application"})),i.a.createElement(e,null))}}]),t}(s.a))},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},B5Ud:function(e,t,n){"use strict";var r=n("KI45"),u=r(n("eVuF")),a=r(n("UXZV")),o=r(n("/HRN")),l=r(n("WaGi")),c=r(n("ZDA2")),i=r(n("/+P4")),f=r(n("N9n2")),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},d=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=s(n("q1tI")),h=d(n("lgD3")),m=n("Bu4q"),v=n("nOHt"),y=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(0,i.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,l.default)(t,[{key:"getChildContext",value:function(){return{router:v.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,u=T(t);return p.default.createElement(w,null,p.default.createElement(n,(0,a.default)({},r,{url:u})))}}],[{key:"getInitialProps",value:function(e){var t=e.Component,n=(e.router,e.ctx);try{return u.default.resolve(m.loadGetInitialProps(t,n)).then(function(e){return{pageProps:e}})}catch(r){return u.default.reject(r)}}}]),t}(p.Component);y.childContextTypes={router:h.default.object},t.default=y;var w=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(0,i.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(p.Component);t.Container=w;var b=m.execOnce(function(){0});function T(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return b(),r},get pathname(){return b(),t},get asPath(){return b(),n},back:function(){b(),e.back()},push:function(t,n){return b(),e.push(t,n)},pushTo:function(t,n){b();var r=n?t:null,u=n||t;return e.push(r,u)},replace:function(t,n){return b(),e.replace(t,n)},replaceTo:function(t,n){b();var r=n?t:null,u=n||t;return e.replace(r,u)}}}t.createUrl=T},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("1TCz");return{page:e.default||e}}])}},[["GcxT","5d41","9da1","ad9d"]]]);