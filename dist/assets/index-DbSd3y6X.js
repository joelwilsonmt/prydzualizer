var fx=Object.defineProperty;var dx=(n,e,t)=>e in n?fx(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var R=(n,e,t)=>dx(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var sg={exports:{}},Ic={},og={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=Symbol.for("react.element"),px=Symbol.for("react.portal"),mx=Symbol.for("react.fragment"),gx=Symbol.for("react.strict_mode"),vx=Symbol.for("react.profiler"),_x=Symbol.for("react.provider"),xx=Symbol.for("react.context"),yx=Symbol.for("react.forward_ref"),Mx=Symbol.for("react.suspense"),Sx=Symbol.for("react.memo"),Ex=Symbol.for("react.lazy"),_p=Symbol.iterator;function wx(n){return n===null||typeof n!="object"?null:(n=_p&&n[_p]||n["@@iterator"],typeof n=="function"?n:null)}var ag={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lg=Object.assign,cg={};function mo(n,e,t){this.props=n,this.context=e,this.refs=cg,this.updater=t||ag}mo.prototype.isReactComponent={};mo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};mo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function ug(){}ug.prototype=mo.prototype;function qf(n,e,t){this.props=n,this.context=e,this.refs=cg,this.updater=t||ag}var Kf=qf.prototype=new ug;Kf.constructor=qf;lg(Kf,mo.prototype);Kf.isPureReactComponent=!0;var xp=Array.isArray,hg=Object.prototype.hasOwnProperty,Zf={current:null},fg={key:!0,ref:!0,__self:!0,__source:!0};function dg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)hg.call(e,i)&&!fg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ba,type:n,key:s,ref:o,props:r,_owner:Zf.current}}function Tx(n,e){return{$$typeof:ba,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Qf(n){return typeof n=="object"&&n!==null&&n.$$typeof===ba}function Ax(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var yp=/\/+/g;function eu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Ax(""+n.key):e.toString(36)}function Fl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ba:case px:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+eu(o,0):i,xp(r)?(t="",n!=null&&(t=n.replace(yp,"$&/")+"/"),Fl(r,e,t,"",function(c){return c})):r!=null&&(Qf(r)&&(r=Tx(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(yp,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",xp(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+eu(s,a);o+=Fl(s,e,t,l,r)}else if(l=wx(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+eu(s,a++),o+=Fl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fa(n,e,t){if(n==null)return n;var i=[],r=0;return Fl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Cx(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var hn={current:null},Ol={transition:null},bx={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:Zf};function pg(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:Fa,forEach:function(n,e,t){Fa(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Fa(n,function(){e++}),e},toArray:function(n){return Fa(n,function(e){return e})||[]},only:function(n){if(!Qf(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};He.Component=mo;He.Fragment=mx;He.Profiler=vx;He.PureComponent=qf;He.StrictMode=gx;He.Suspense=Mx;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bx;He.act=pg;He.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=lg({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)hg.call(e,l)&&!fg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ba,type:n.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(n){return n={$$typeof:xx,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:_x,_context:n},n.Consumer=n};He.createElement=dg;He.createFactory=function(n){var e=dg.bind(null,n);return e.type=n,e};He.createRef=function(){return{current:null}};He.forwardRef=function(n){return{$$typeof:yx,render:n}};He.isValidElement=Qf;He.lazy=function(n){return{$$typeof:Ex,_payload:{_status:-1,_result:n},_init:Cx}};He.memo=function(n,e){return{$$typeof:Sx,type:n,compare:e===void 0?null:e}};He.startTransition=function(n){var e=Ol.transition;Ol.transition={};try{n()}finally{Ol.transition=e}};He.unstable_act=pg;He.useCallback=function(n,e){return hn.current.useCallback(n,e)};He.useContext=function(n){return hn.current.useContext(n)};He.useDebugValue=function(){};He.useDeferredValue=function(n){return hn.current.useDeferredValue(n)};He.useEffect=function(n,e){return hn.current.useEffect(n,e)};He.useId=function(){return hn.current.useId()};He.useImperativeHandle=function(n,e,t){return hn.current.useImperativeHandle(n,e,t)};He.useInsertionEffect=function(n,e){return hn.current.useInsertionEffect(n,e)};He.useLayoutEffect=function(n,e){return hn.current.useLayoutEffect(n,e)};He.useMemo=function(n,e){return hn.current.useMemo(n,e)};He.useReducer=function(n,e,t){return hn.current.useReducer(n,e,t)};He.useRef=function(n){return hn.current.useRef(n)};He.useState=function(n){return hn.current.useState(n)};He.useSyncExternalStore=function(n,e,t){return hn.current.useSyncExternalStore(n,e,t)};He.useTransition=function(){return hn.current.useTransition()};He.version="18.3.1";og.exports=He;var bt=og.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rx=bt,Px=Symbol.for("react.element"),Lx=Symbol.for("react.fragment"),Dx=Object.prototype.hasOwnProperty,Ix=Rx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ux={key:!0,ref:!0,__self:!0,__source:!0};function mg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Dx.call(e,i)&&!Ux.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Px,type:n,key:s,ref:o,props:r,_owner:Ix.current}}Ic.Fragment=Lx;Ic.jsx=mg;Ic.jsxs=mg;sg.exports=Ic;var Ve=sg.exports,gg={exports:{}},Ln={},vg={exports:{}},_g={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,j){var Q=I.length;I.push(j);e:for(;0<Q;){var ae=Q-1>>>1,Se=I[ae];if(0<r(Se,j))I[ae]=j,I[Q]=Se,Q=ae;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var j=I[0],Q=I.pop();if(Q!==j){I[0]=Q;e:for(var ae=0,Se=I.length,Qe=Se>>>1;ae<Qe;){var W=2*(ae+1)-1,ne=I[W],me=W+1,oe=I[me];if(0>r(ne,Q))me<Se&&0>r(oe,ne)?(I[ae]=oe,I[me]=Q,ae=me):(I[ae]=ne,I[W]=Q,ae=W);else if(me<Se&&0>r(oe,Q))I[ae]=oe,I[me]=Q,ae=me;else break e}}return j}function r(I,j){var Q=I.sortIndex-j.sortIndex;return Q!==0?Q:I.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,u=null,f=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var j=t(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=I)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=t(c)}}function y(I){if(_=!1,x(I),!g)if(t(l)!==null)g=!0,X(P);else{var j=t(c);j!==null&&J(y,j.startTime-I)}}function P(I,j){g=!1,_&&(_=!1,d(C),C=-1),p=!0;var Q=f;try{for(x(j),u=t(l);u!==null&&(!(u.expirationTime>j)||I&&!L());){var ae=u.callback;if(typeof ae=="function"){u.callback=null,f=u.priorityLevel;var Se=ae(u.expirationTime<=j);j=n.unstable_now(),typeof Se=="function"?u.callback=Se:u===t(l)&&i(l),x(j)}else i(l);u=t(l)}if(u!==null)var Qe=!0;else{var W=t(c);W!==null&&J(y,W.startTime-j),Qe=!1}return Qe}finally{u=null,f=Q,p=!1}}var A=!1,T=null,C=-1,E=5,M=-1;function L(){return!(n.unstable_now()-M<E)}function B(){if(T!==null){var I=n.unstable_now();M=I;var j=!0;try{j=T(!0,I)}finally{j?z():(A=!1,T=null)}}else A=!1}var z;if(typeof v=="function")z=function(){v(B)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,q=$.port2;$.port1.onmessage=B,z=function(){q.postMessage(null)}}else z=function(){m(B,0)};function X(I){T=I,A||(A=!0,z())}function J(I,j){C=m(function(){I(n.unstable_now())},j)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,X(P))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var Q=f;f=j;try{return I()}finally{f=Q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,j){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Q=f;f=I;try{return j()}finally{f=Q}},n.unstable_scheduleCallback=function(I,j,Q){var ae=n.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ae+Q:ae):Q=ae,I){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Q+Se,I={id:h++,callback:j,priorityLevel:I,startTime:Q,expirationTime:Se,sortIndex:-1},Q>ae?(I.sortIndex=Q,e(c,I),t(l)===null&&I===t(c)&&(_?(d(C),C=-1):_=!0,J(y,Q-ae))):(I.sortIndex=Se,e(l,I),g||p||(g=!0,X(P))),I},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(I){var j=f;return function(){var Q=f;f=j;try{return I.apply(this,arguments)}finally{f=Q}}}})(_g);vg.exports=_g;var Nx=vg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fx=bt,Pn=Nx;function te(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xg=new Set,ca={};function es(n,e){Js(n,e),Js(n+"Capture",e)}function Js(n,e){for(ca[n]=e,n=0;n<e.length;n++)xg.add(e[n])}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fh=Object.prototype.hasOwnProperty,Ox=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mp={},Sp={};function Bx(n){return fh.call(Sp,n)?!0:fh.call(Mp,n)?!1:Ox.test(n)?Sp[n]=!0:(Mp[n]=!0,!1)}function kx(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function zx(n,e,t,i){if(e===null||typeof e>"u"||kx(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Wt[n]=new fn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Wt[e]=new fn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Wt[n]=new fn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Wt[n]=new fn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Wt[n]=new fn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Wt[n]=new fn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Wt[n]=new fn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Wt[n]=new fn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Wt[n]=new fn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Jf=/[\-:]([a-z])/g;function ed(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Jf,ed);Wt[e]=new fn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Jf,ed);Wt[e]=new fn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Jf,ed);Wt[e]=new fn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Wt[n]=new fn(n,1,!1,n.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Wt[n]=new fn(n,1,!1,n.toLowerCase(),null,!0,!0)});function td(n,e,t,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zx(e,t,r,i)&&(t=null),i||r===null?Bx(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Vi=Fx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oa=Symbol.for("react.element"),Ls=Symbol.for("react.portal"),Ds=Symbol.for("react.fragment"),nd=Symbol.for("react.strict_mode"),dh=Symbol.for("react.profiler"),yg=Symbol.for("react.provider"),Mg=Symbol.for("react.context"),id=Symbol.for("react.forward_ref"),ph=Symbol.for("react.suspense"),mh=Symbol.for("react.suspense_list"),rd=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),Sg=Symbol.for("react.offscreen"),Ep=Symbol.iterator;function To(n){return n===null||typeof n!="object"?null:(n=Ep&&n[Ep]||n["@@iterator"],typeof n=="function"?n:null)}var wt=Object.assign,tu;function jo(n){if(tu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);tu=e&&e[1]||""}return`
`+tu+n}var nu=!1;function iu(n,e){if(!n||nu)return"";nu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{nu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?jo(n):""}function Gx(n){switch(n.tag){case 5:return jo(n.type);case 16:return jo("Lazy");case 13:return jo("Suspense");case 19:return jo("SuspenseList");case 0:case 2:case 15:return n=iu(n.type,!1),n;case 11:return n=iu(n.type.render,!1),n;case 1:return n=iu(n.type,!0),n;default:return""}}function gh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ds:return"Fragment";case Ls:return"Portal";case dh:return"Profiler";case nd:return"StrictMode";case ph:return"Suspense";case mh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Mg:return(n.displayName||"Context")+".Consumer";case yg:return(n._context.displayName||"Context")+".Provider";case id:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case rd:return e=n.displayName||null,e!==null?e:gh(n.type)||"Memo";case er:e=n._payload,n=n._init;try{return gh(n(e))}catch{}}return null}function Hx(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gh(e);case 8:return e===nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Eg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Vx(n){var e=Eg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ba(n){n._valueTracker||(n._valueTracker=Vx(n))}function wg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Eg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function nc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function vh(n,e){var t=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function wp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=vr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Tg(n,e){e=e.checked,e!=null&&td(n,"checked",e,!1)}function _h(n,e){Tg(n,e);var t=vr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?xh(n,e.type,t):e.hasOwnProperty("defaultValue")&&xh(n,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Tp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function xh(n,e,t){(e!=="number"||nc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Yo=Array.isArray;function Ws(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+vr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function yh(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ap(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(te(92));if(Yo(t)){if(1<t.length)throw Error(te(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:vr(t)}}function Ag(n,e){var t=vr(e.value),i=vr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Cp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Cg(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mh(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Cg(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ka,bg=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ka=ka||document.createElement("div"),ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ka.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ua(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wx=["Webkit","ms","Moz","O"];Object.keys(ea).forEach(function(n){Wx.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ea[e]=ea[n]})});function Rg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ea.hasOwnProperty(n)&&ea[n]?(""+e).trim():e+"px"}function Pg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Rg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Xx=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sh(n,e){if(e){if(Xx[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Eh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wh=null;function sd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Th=null,Xs=null,$s=null;function bp(n){if(n=La(n)){if(typeof Th!="function")throw Error(te(280));var e=n.stateNode;e&&(e=Bc(e),Th(n.stateNode,n.type,e))}}function Lg(n){Xs?$s?$s.push(n):$s=[n]:Xs=n}function Dg(){if(Xs){var n=Xs,e=$s;if($s=Xs=null,bp(n),e)for(n=0;n<e.length;n++)bp(e[n])}}function Ig(n,e){return n(e)}function Ug(){}var ru=!1;function Ng(n,e,t){if(ru)return n(e,t);ru=!0;try{return Ig(n,e,t)}finally{ru=!1,(Xs!==null||$s!==null)&&(Ug(),Dg())}}function ha(n,e){var t=n.stateNode;if(t===null)return null;var i=Bc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(te(231,e,typeof t));return t}var Ah=!1;if(Fi)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){Ah=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{Ah=!1}function $x(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(h){this.onError(h)}}var ta=!1,ic=null,rc=!1,Ch=null,jx={onError:function(n){ta=!0,ic=n}};function Yx(n,e,t,i,r,s,o,a,l){ta=!1,ic=null,$x.apply(jx,arguments)}function qx(n,e,t,i,r,s,o,a,l){if(Yx.apply(this,arguments),ta){if(ta){var c=ic;ta=!1,ic=null}else throw Error(te(198));rc||(rc=!0,Ch=c)}}function ts(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Fg(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Rp(n){if(ts(n)!==n)throw Error(te(188))}function Kx(n){var e=n.alternate;if(!e){if(e=ts(n),e===null)throw Error(te(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Rp(r),n;if(s===i)return Rp(r),e;s=s.sibling}throw Error(te(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(t.alternate!==i)throw Error(te(190))}if(t.tag!==3)throw Error(te(188));return t.stateNode.current===t?n:e}function Og(n){return n=Kx(n),n!==null?Bg(n):null}function Bg(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Bg(n);if(e!==null)return e;n=n.sibling}return null}var kg=Pn.unstable_scheduleCallback,Pp=Pn.unstable_cancelCallback,Zx=Pn.unstable_shouldYield,Qx=Pn.unstable_requestPaint,Rt=Pn.unstable_now,Jx=Pn.unstable_getCurrentPriorityLevel,od=Pn.unstable_ImmediatePriority,zg=Pn.unstable_UserBlockingPriority,sc=Pn.unstable_NormalPriority,ey=Pn.unstable_LowPriority,Gg=Pn.unstable_IdlePriority,Uc=null,di=null;function ty(n){if(di&&typeof di.onCommitFiberRoot=="function")try{di.onCommitFiberRoot(Uc,n,void 0,(n.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:ry,ny=Math.log,iy=Math.LN2;function ry(n){return n>>>=0,n===0?32:31-(ny(n)/iy|0)|0}var za=64,Ga=4194304;function qo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function oc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=qo(a):(s&=o,s!==0&&(i=qo(s)))}else o=t&~r,o!==0?i=qo(o):s!==0&&(i=qo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Jn(e),r=1<<t,i|=n[t],e&=~r;return i}function sy(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oy(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Jn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=sy(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function bh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Hg(){var n=za;return za<<=1,!(za&4194240)&&(za=64),n}function su(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ra(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Jn(e),n[e]=t}function ay(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Jn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function ad(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Jn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var ot=0;function Vg(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Wg,ld,Xg,$g,jg,Rh=!1,Ha=[],ar=null,lr=null,cr=null,fa=new Map,da=new Map,nr=[],ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lp(n,e){switch(n){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(e.pointerId)}}function Co(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=La(e),e!==null&&ld(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function cy(n,e,t,i,r){switch(e){case"focusin":return ar=Co(ar,n,e,t,i,r),!0;case"dragenter":return lr=Co(lr,n,e,t,i,r),!0;case"mouseover":return cr=Co(cr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return fa.set(s,Co(fa.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,da.set(s,Co(da.get(s)||null,n,e,t,i,r)),!0}return!1}function Yg(n){var e=Gr(n.target);if(e!==null){var t=ts(e);if(t!==null){if(e=t.tag,e===13){if(e=Fg(t),e!==null){n.blockedOn=e,jg(n.priority,function(){Xg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Bl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Ph(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);wh=i,t.target.dispatchEvent(i),wh=null}else return e=La(t),e!==null&&ld(e),n.blockedOn=t,!1;e.shift()}return!0}function Dp(n,e,t){Bl(n)&&t.delete(e)}function uy(){Rh=!1,ar!==null&&Bl(ar)&&(ar=null),lr!==null&&Bl(lr)&&(lr=null),cr!==null&&Bl(cr)&&(cr=null),fa.forEach(Dp),da.forEach(Dp)}function bo(n,e){n.blockedOn===e&&(n.blockedOn=null,Rh||(Rh=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,uy)))}function pa(n){function e(r){return bo(r,n)}if(0<Ha.length){bo(Ha[0],n);for(var t=1;t<Ha.length;t++){var i=Ha[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ar!==null&&bo(ar,n),lr!==null&&bo(lr,n),cr!==null&&bo(cr,n),fa.forEach(e),da.forEach(e),t=0;t<nr.length;t++)i=nr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<nr.length&&(t=nr[0],t.blockedOn===null);)Yg(t),t.blockedOn===null&&nr.shift()}var js=Vi.ReactCurrentBatchConfig,ac=!0;function hy(n,e,t,i){var r=ot,s=js.transition;js.transition=null;try{ot=1,cd(n,e,t,i)}finally{ot=r,js.transition=s}}function fy(n,e,t,i){var r=ot,s=js.transition;js.transition=null;try{ot=4,cd(n,e,t,i)}finally{ot=r,js.transition=s}}function cd(n,e,t,i){if(ac){var r=Ph(n,e,t,i);if(r===null)mu(n,e,i,lc,t),Lp(n,i);else if(cy(r,n,e,t,i))i.stopPropagation();else if(Lp(n,i),e&4&&-1<ly.indexOf(n)){for(;r!==null;){var s=La(r);if(s!==null&&Wg(s),s=Ph(n,e,t,i),s===null&&mu(n,e,i,lc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else mu(n,e,i,null,t)}}var lc=null;function Ph(n,e,t,i){if(lc=null,n=sd(i),n=Gr(n),n!==null)if(e=ts(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Fg(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return lc=n,null}function qg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jx()){case od:return 1;case zg:return 4;case sc:case ey:return 16;case Gg:return 536870912;default:return 16}default:return 16}}var sr=null,ud=null,kl=null;function Kg(){if(kl)return kl;var n,e=ud,t=e.length,i,r="value"in sr?sr.value:sr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return kl=r.slice(n,1<i?1-i:void 0)}function zl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Va(){return!0}function Ip(){return!1}function Dn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Va:Ip,this.isPropagationStopped=Ip,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Va)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Va)},persist:function(){},isPersistent:Va}),e}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hd=Dn(go),Pa=wt({},go,{view:0,detail:0}),dy=Dn(Pa),ou,au,Ro,Nc=wt({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ro&&(Ro&&n.type==="mousemove"?(ou=n.screenX-Ro.screenX,au=n.screenY-Ro.screenY):au=ou=0,Ro=n),ou)},movementY:function(n){return"movementY"in n?n.movementY:au}}),Up=Dn(Nc),py=wt({},Nc,{dataTransfer:0}),my=Dn(py),gy=wt({},Pa,{relatedTarget:0}),lu=Dn(gy),vy=wt({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),_y=Dn(vy),xy=wt({},go,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),yy=Dn(xy),My=wt({},go,{data:0}),Np=Dn(My),Sy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ty(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=wy[n])?!!e[n]:!1}function fd(){return Ty}var Ay=wt({},Pa,{key:function(n){if(n.key){var e=Sy[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=zl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ey[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fd,charCode:function(n){return n.type==="keypress"?zl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?zl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Cy=Dn(Ay),by=wt({},Nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=Dn(by),Ry=wt({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fd}),Py=Dn(Ry),Ly=wt({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dy=Dn(Ly),Iy=wt({},Nc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Uy=Dn(Iy),Ny=[9,13,27,32],dd=Fi&&"CompositionEvent"in window,na=null;Fi&&"documentMode"in document&&(na=document.documentMode);var Fy=Fi&&"TextEvent"in window&&!na,Zg=Fi&&(!dd||na&&8<na&&11>=na),Op=" ",Bp=!1;function Qg(n,e){switch(n){case"keyup":return Ny.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Is=!1;function Oy(n,e){switch(n){case"compositionend":return Jg(e);case"keypress":return e.which!==32?null:(Bp=!0,Op);case"textInput":return n=e.data,n===Op&&Bp?null:n;default:return null}}function By(n,e){if(Is)return n==="compositionend"||!dd&&Qg(n,e)?(n=Kg(),kl=ud=sr=null,Is=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zg&&e.locale!=="ko"?null:e.data;default:return null}}var ky={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!ky[n.type]:e==="textarea"}function ev(n,e,t,i){Lg(i),e=cc(e,"onChange"),0<e.length&&(t=new hd("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ia=null,ma=null;function zy(n){hv(n,0)}function Fc(n){var e=Fs(n);if(wg(e))return n}function Gy(n,e){if(n==="change")return e}var tv=!1;if(Fi){var cu;if(Fi){var uu="oninput"in document;if(!uu){var zp=document.createElement("div");zp.setAttribute("oninput","return;"),uu=typeof zp.oninput=="function"}cu=uu}else cu=!1;tv=cu&&(!document.documentMode||9<document.documentMode)}function Gp(){ia&&(ia.detachEvent("onpropertychange",nv),ma=ia=null)}function nv(n){if(n.propertyName==="value"&&Fc(ma)){var e=[];ev(e,ma,n,sd(n)),Ng(zy,e)}}function Hy(n,e,t){n==="focusin"?(Gp(),ia=e,ma=t,ia.attachEvent("onpropertychange",nv)):n==="focusout"&&Gp()}function Vy(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Fc(ma)}function Wy(n,e){if(n==="click")return Fc(e)}function Xy(n,e){if(n==="input"||n==="change")return Fc(e)}function $y(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ni=typeof Object.is=="function"?Object.is:$y;function ga(n,e){if(ni(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!fh.call(e,r)||!ni(n[r],e[r]))return!1}return!0}function Hp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Vp(n,e){var t=Hp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Hp(t)}}function iv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?iv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function rv(){for(var n=window,e=nc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=nc(n.document)}return e}function pd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function jy(n){var e=rv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&iv(t.ownerDocument.documentElement,t)){if(i!==null&&pd(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Vp(t,s);var o=Vp(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Yy=Fi&&"documentMode"in document&&11>=document.documentMode,Us=null,Lh=null,ra=null,Dh=!1;function Wp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Dh||Us==null||Us!==nc(i)||(i=Us,"selectionStart"in i&&pd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ra&&ga(ra,i)||(ra=i,i=cc(Lh,"onSelect"),0<i.length&&(e=new hd("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Us)))}function Wa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ns={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},hu={},sv={};Fi&&(sv=document.createElement("div").style,"AnimationEvent"in window||(delete Ns.animationend.animation,delete Ns.animationiteration.animation,delete Ns.animationstart.animation),"TransitionEvent"in window||delete Ns.transitionend.transition);function Oc(n){if(hu[n])return hu[n];if(!Ns[n])return n;var e=Ns[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in sv)return hu[n]=e[t];return n}var ov=Oc("animationend"),av=Oc("animationiteration"),lv=Oc("animationstart"),cv=Oc("transitionend"),uv=new Map,Xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(n,e){uv.set(n,e),es(e,[n])}for(var fu=0;fu<Xp.length;fu++){var du=Xp[fu],qy=du.toLowerCase(),Ky=du[0].toUpperCase()+du.slice(1);Sr(qy,"on"+Ky)}Sr(ov,"onAnimationEnd");Sr(av,"onAnimationIteration");Sr(lv,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(cv,"onTransitionEnd");Js("onMouseEnter",["mouseout","mouseover"]);Js("onMouseLeave",["mouseout","mouseover"]);Js("onPointerEnter",["pointerout","pointerover"]);Js("onPointerLeave",["pointerout","pointerover"]);es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));es("onBeforeInput",["compositionend","keypress","textInput","paste"]);es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ko));function $p(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,qx(i,e,void 0,n),n.currentTarget=null}function hv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;$p(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;$p(r,a,c),s=l}}}if(rc)throw n=Ch,rc=!1,Ch=null,n}function gt(n,e){var t=e[Oh];t===void 0&&(t=e[Oh]=new Set);var i=n+"__bubble";t.has(i)||(fv(e,n,2,!1),t.add(i))}function pu(n,e,t){var i=0;e&&(i|=4),fv(t,n,i,e)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function va(n){if(!n[Xa]){n[Xa]=!0,xg.forEach(function(t){t!=="selectionchange"&&(Zy.has(t)||pu(t,!1,n),pu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Xa]||(e[Xa]=!0,pu("selectionchange",!1,e))}}function fv(n,e,t,i){switch(qg(e)){case 1:var r=hy;break;case 4:r=fy;break;default:r=cd}t=r.bind(null,e,t,n),r=void 0,!Ah||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function mu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Gr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ng(function(){var c=s,h=sd(t),u=[];e:{var f=uv.get(n);if(f!==void 0){var p=hd,g=n;switch(n){case"keypress":if(zl(t)===0)break e;case"keydown":case"keyup":p=Cy;break;case"focusin":g="focus",p=lu;break;case"focusout":g="blur",p=lu;break;case"beforeblur":case"afterblur":p=lu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=my;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Py;break;case ov:case av:case lv:p=_y;break;case cv:p=Dy;break;case"scroll":p=dy;break;case"wheel":p=Uy;break;case"copy":case"cut":case"paste":p=yy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Fp}var _=(e&4)!==0,m=!_&&n==="scroll",d=_?f!==null?f+"Capture":null:f;_=[];for(var v=c,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,d!==null&&(y=ha(v,d),y!=null&&_.push(_a(v,y,x)))),m)break;v=v.return}0<_.length&&(f=new p(f,g,null,t,h),u.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==wh&&(g=t.relatedTarget||t.fromElement)&&(Gr(g)||g[Oi]))break e;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?Gr(g):null,g!==null&&(m=ts(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(_=Up,y="onMouseLeave",d="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=Fp,y="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?f:Fs(p),x=g==null?f:Fs(g),f=new _(y,v+"leave",p,t,h),f.target=m,f.relatedTarget=x,y=null,Gr(h)===c&&(_=new _(d,v+"enter",g,t,h),_.target=x,_.relatedTarget=m,y=_),m=y,p&&g)t:{for(_=p,d=g,v=0,x=_;x;x=os(x))v++;for(x=0,y=d;y;y=os(y))x++;for(;0<v-x;)_=os(_),v--;for(;0<x-v;)d=os(d),x--;for(;v--;){if(_===d||d!==null&&_===d.alternate)break t;_=os(_),d=os(d)}_=null}else _=null;p!==null&&jp(u,f,p,_,!1),g!==null&&m!==null&&jp(u,m,g,_,!0)}}e:{if(f=c?Fs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var P=Gy;else if(kp(f))if(tv)P=Xy;else{P=Vy;var A=Hy}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=Wy);if(P&&(P=P(n,c))){ev(u,P,t,h);break e}A&&A(n,f,c),n==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&xh(f,"number",f.value)}switch(A=c?Fs(c):window,n){case"focusin":(kp(A)||A.contentEditable==="true")&&(Us=A,Lh=c,ra=null);break;case"focusout":ra=Lh=Us=null;break;case"mousedown":Dh=!0;break;case"contextmenu":case"mouseup":case"dragend":Dh=!1,Wp(u,t,h);break;case"selectionchange":if(Yy)break;case"keydown":case"keyup":Wp(u,t,h)}var T;if(dd)e:{switch(n){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Is?Qg(n,t)&&(C="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(Zg&&t.locale!=="ko"&&(Is||C!=="onCompositionStart"?C==="onCompositionEnd"&&Is&&(T=Kg()):(sr=h,ud="value"in sr?sr.value:sr.textContent,Is=!0)),A=cc(c,C),0<A.length&&(C=new Np(C,n,null,t,h),u.push({event:C,listeners:A}),T?C.data=T:(T=Jg(t),T!==null&&(C.data=T)))),(T=Fy?Oy(n,t):By(n,t))&&(c=cc(c,"onBeforeInput"),0<c.length&&(h=new Np("onBeforeInput","beforeinput",null,t,h),u.push({event:h,listeners:c}),h.data=T))}hv(u,e)})}function _a(n,e,t){return{instance:n,listener:e,currentTarget:t}}function cc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ha(n,t),s!=null&&i.unshift(_a(n,s,r)),s=ha(n,e),s!=null&&i.push(_a(n,s,r))),n=n.return}return i}function os(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function jp(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ha(t,s),l!=null&&o.unshift(_a(t,l,a))):r||(l=ha(t,s),l!=null&&o.push(_a(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var Qy=/\r\n?/g,Jy=/\u0000|\uFFFD/g;function Yp(n){return(typeof n=="string"?n:""+n).replace(Qy,`
`).replace(Jy,"")}function $a(n,e,t){if(e=Yp(e),Yp(n)!==e&&t)throw Error(te(425))}function uc(){}var Ih=null,Uh=null;function Nh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fh=typeof setTimeout=="function"?setTimeout:void 0,eM=typeof clearTimeout=="function"?clearTimeout:void 0,qp=typeof Promise=="function"?Promise:void 0,tM=typeof queueMicrotask=="function"?queueMicrotask:typeof qp<"u"?function(n){return qp.resolve(null).then(n).catch(nM)}:Fh;function nM(n){setTimeout(function(){throw n})}function gu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),pa(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);pa(e)}function ur(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Kp(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var vo=Math.random().toString(36).slice(2),ui="__reactFiber$"+vo,xa="__reactProps$"+vo,Oi="__reactContainer$"+vo,Oh="__reactEvents$"+vo,iM="__reactListeners$"+vo,rM="__reactHandles$"+vo;function Gr(n){var e=n[ui];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Oi]||t[ui]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Kp(n);n!==null;){if(t=n[ui])return t;n=Kp(n)}return e}n=t,t=n.parentNode}return null}function La(n){return n=n[ui]||n[Oi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(te(33))}function Bc(n){return n[xa]||null}var Bh=[],Os=-1;function Er(n){return{current:n}}function vt(n){0>Os||(n.current=Bh[Os],Bh[Os]=null,Os--)}function ut(n,e){Os++,Bh[Os]=n.current,n.current=e}var _r={},tn=Er(_r),_n=Er(!1),Yr=_r;function eo(n,e){var t=n.type.contextTypes;if(!t)return _r;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function xn(n){return n=n.childContextTypes,n!=null}function hc(){vt(_n),vt(tn)}function Zp(n,e,t){if(tn.current!==_r)throw Error(te(168));ut(tn,e),ut(_n,t)}function dv(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Hx(n)||"Unknown",r));return wt({},t,i)}function fc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||_r,Yr=tn.current,ut(tn,n),ut(_n,_n.current),!0}function Qp(n,e,t){var i=n.stateNode;if(!i)throw Error(te(169));t?(n=dv(n,e,Yr),i.__reactInternalMemoizedMergedChildContext=n,vt(_n),vt(tn),ut(tn,n)):vt(_n),ut(_n,t)}var Ai=null,kc=!1,vu=!1;function pv(n){Ai===null?Ai=[n]:Ai.push(n)}function sM(n){kc=!0,pv(n)}function wr(){if(!vu&&Ai!==null){vu=!0;var n=0,e=ot;try{var t=Ai;for(ot=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ai=null,kc=!1}catch(r){throw Ai!==null&&(Ai=Ai.slice(n+1)),kg(od,wr),r}finally{ot=e,vu=!1}}return null}var Bs=[],ks=0,dc=null,pc=0,Fn=[],On=0,qr=null,Ci=1,bi="";function Ir(n,e){Bs[ks++]=pc,Bs[ks++]=dc,dc=n,pc=e}function mv(n,e,t){Fn[On++]=Ci,Fn[On++]=bi,Fn[On++]=qr,qr=n;var i=Ci;n=bi;var r=32-Jn(i)-1;i&=~(1<<r),t+=1;var s=32-Jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ci=1<<32-Jn(e)+r|t<<r|i,bi=s+n}else Ci=1<<s|t<<r|i,bi=n}function md(n){n.return!==null&&(Ir(n,1),mv(n,1,0))}function gd(n){for(;n===dc;)dc=Bs[--ks],Bs[ks]=null,pc=Bs[--ks],Bs[ks]=null;for(;n===qr;)qr=Fn[--On],Fn[On]=null,bi=Fn[--On],Fn[On]=null,Ci=Fn[--On],Fn[On]=null}var bn=null,Cn=null,yt=!1,Zn=null;function gv(n,e){var t=kn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Jp(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,bn=n,Cn=ur(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,bn=n,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=qr!==null?{id:Ci,overflow:bi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=kn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,bn=n,Cn=null,!0):!1;default:return!1}}function kh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zh(n){if(yt){var e=Cn;if(e){var t=e;if(!Jp(n,e)){if(kh(n))throw Error(te(418));e=ur(t.nextSibling);var i=bn;e&&Jp(n,e)?gv(i,t):(n.flags=n.flags&-4097|2,yt=!1,bn=n)}}else{if(kh(n))throw Error(te(418));n.flags=n.flags&-4097|2,yt=!1,bn=n}}}function em(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;bn=n}function ja(n){if(n!==bn)return!1;if(!yt)return em(n),yt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Nh(n.type,n.memoizedProps)),e&&(e=Cn)){if(kh(n))throw vv(),Error(te(418));for(;e;)gv(n,e),e=ur(e.nextSibling)}if(em(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(te(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Cn=ur(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Cn=null}}else Cn=bn?ur(n.stateNode.nextSibling):null;return!0}function vv(){for(var n=Cn;n;)n=ur(n.nextSibling)}function to(){Cn=bn=null,yt=!1}function vd(n){Zn===null?Zn=[n]:Zn.push(n)}var oM=Vi.ReactCurrentBatchConfig;function Po(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(te(309));var i=t.stateNode}if(!i)throw Error(te(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(te(284));if(!t._owner)throw Error(te(290,n))}return n}function Ya(n,e){throw n=Object.prototype.toString.call(e),Error(te(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function tm(n){var e=n._init;return e(n._payload)}function _v(n){function e(d,v){if(n){var x=d.deletions;x===null?(d.deletions=[v],d.flags|=16):x.push(v)}}function t(d,v){if(!n)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=pr(d,v),d.index=0,d.sibling=null,d}function s(d,v,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<v?(d.flags|=2,v):x):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,v,x,y){return v===null||v.tag!==6?(v=wu(x,d.mode,y),v.return=d,v):(v=r(v,x),v.return=d,v)}function l(d,v,x,y){var P=x.type;return P===Ds?h(d,v,x.props.children,y,x.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===er&&tm(P)===v.type)?(y=r(v,x.props),y.ref=Po(d,v,x),y.return=d,y):(y=jl(x.type,x.key,x.props,null,d.mode,y),y.ref=Po(d,v,x),y.return=d,y)}function c(d,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Tu(x,d.mode,y),v.return=d,v):(v=r(v,x.children||[]),v.return=d,v)}function h(d,v,x,y,P){return v===null||v.tag!==7?(v=jr(x,d.mode,y,P),v.return=d,v):(v=r(v,x),v.return=d,v)}function u(d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=wu(""+v,d.mode,x),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Oa:return x=jl(v.type,v.key,v.props,null,d.mode,x),x.ref=Po(d,null,v),x.return=d,x;case Ls:return v=Tu(v,d.mode,x),v.return=d,v;case er:var y=v._init;return u(d,y(v._payload),x)}if(Yo(v)||To(v))return v=jr(v,d.mode,x,null),v.return=d,v;Ya(d,v)}return null}function f(d,v,x,y){var P=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return P!==null?null:a(d,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Oa:return x.key===P?l(d,v,x,y):null;case Ls:return x.key===P?c(d,v,x,y):null;case er:return P=x._init,f(d,v,P(x._payload),y)}if(Yo(x)||To(x))return P!==null?null:h(d,v,x,y,null);Ya(d,x)}return null}function p(d,v,x,y,P){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(x)||null,a(v,d,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Oa:return d=d.get(y.key===null?x:y.key)||null,l(v,d,y,P);case Ls:return d=d.get(y.key===null?x:y.key)||null,c(v,d,y,P);case er:var A=y._init;return p(d,v,x,A(y._payload),P)}if(Yo(y)||To(y))return d=d.get(x)||null,h(v,d,y,P,null);Ya(v,y)}return null}function g(d,v,x,y){for(var P=null,A=null,T=v,C=v=0,E=null;T!==null&&C<x.length;C++){T.index>C?(E=T,T=null):E=T.sibling;var M=f(d,T,x[C],y);if(M===null){T===null&&(T=E);break}n&&T&&M.alternate===null&&e(d,T),v=s(M,v,C),A===null?P=M:A.sibling=M,A=M,T=E}if(C===x.length)return t(d,T),yt&&Ir(d,C),P;if(T===null){for(;C<x.length;C++)T=u(d,x[C],y),T!==null&&(v=s(T,v,C),A===null?P=T:A.sibling=T,A=T);return yt&&Ir(d,C),P}for(T=i(d,T);C<x.length;C++)E=p(T,d,C,x[C],y),E!==null&&(n&&E.alternate!==null&&T.delete(E.key===null?C:E.key),v=s(E,v,C),A===null?P=E:A.sibling=E,A=E);return n&&T.forEach(function(L){return e(d,L)}),yt&&Ir(d,C),P}function _(d,v,x,y){var P=To(x);if(typeof P!="function")throw Error(te(150));if(x=P.call(x),x==null)throw Error(te(151));for(var A=P=null,T=v,C=v=0,E=null,M=x.next();T!==null&&!M.done;C++,M=x.next()){T.index>C?(E=T,T=null):E=T.sibling;var L=f(d,T,M.value,y);if(L===null){T===null&&(T=E);break}n&&T&&L.alternate===null&&e(d,T),v=s(L,v,C),A===null?P=L:A.sibling=L,A=L,T=E}if(M.done)return t(d,T),yt&&Ir(d,C),P;if(T===null){for(;!M.done;C++,M=x.next())M=u(d,M.value,y),M!==null&&(v=s(M,v,C),A===null?P=M:A.sibling=M,A=M);return yt&&Ir(d,C),P}for(T=i(d,T);!M.done;C++,M=x.next())M=p(T,d,C,M.value,y),M!==null&&(n&&M.alternate!==null&&T.delete(M.key===null?C:M.key),v=s(M,v,C),A===null?P=M:A.sibling=M,A=M);return n&&T.forEach(function(B){return e(d,B)}),yt&&Ir(d,C),P}function m(d,v,x,y){if(typeof x=="object"&&x!==null&&x.type===Ds&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Oa:e:{for(var P=x.key,A=v;A!==null;){if(A.key===P){if(P=x.type,P===Ds){if(A.tag===7){t(d,A.sibling),v=r(A,x.props.children),v.return=d,d=v;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===er&&tm(P)===A.type){t(d,A.sibling),v=r(A,x.props),v.ref=Po(d,A,x),v.return=d,d=v;break e}t(d,A);break}else e(d,A);A=A.sibling}x.type===Ds?(v=jr(x.props.children,d.mode,y,x.key),v.return=d,d=v):(y=jl(x.type,x.key,x.props,null,d.mode,y),y.ref=Po(d,v,x),y.return=d,d=y)}return o(d);case Ls:e:{for(A=x.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(d,v.sibling),v=r(v,x.children||[]),v.return=d,d=v;break e}else{t(d,v);break}else e(d,v);v=v.sibling}v=Tu(x,d.mode,y),v.return=d,d=v}return o(d);case er:return A=x._init,m(d,v,A(x._payload),y)}if(Yo(x))return g(d,v,x,y);if(To(x))return _(d,v,x,y);Ya(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(d,v.sibling),v=r(v,x),v.return=d,d=v):(t(d,v),v=wu(x,d.mode,y),v.return=d,d=v),o(d)):t(d,v)}return m}var no=_v(!0),xv=_v(!1),mc=Er(null),gc=null,zs=null,_d=null;function xd(){_d=zs=gc=null}function yd(n){var e=mc.current;vt(mc),n._currentValue=e}function Gh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ys(n,e){gc=n,_d=zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(gn=!0),n.firstContext=null)}function Gn(n){var e=n._currentValue;if(_d!==n)if(n={context:n,memoizedValue:e,next:null},zs===null){if(gc===null)throw Error(te(308));zs=n,gc.dependencies={lanes:0,firstContext:n}}else zs=zs.next=n;return e}var Hr=null;function Md(n){Hr===null?Hr=[n]:Hr.push(n)}function yv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Md(e)):(t.next=r.next,r.next=t),e.interleaved=t,Bi(n,i)}function Bi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var tr=!1;function Sd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Pi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Bi(n,t)}return r=i.interleaved,r===null?(e.next=e,Md(i)):(e.next=r.next,r.next=e),i.interleaved=e,Bi(n,t)}function Gl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ad(n,t)}}function nm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function vc(n,e,t,i){var r=n.updateQueue;tr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=n.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var u=r.baseState;o=0,h=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(f=e,p=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){u=g.call(p,u,f);break e}u=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(p,u,f):g,f==null)break e;u=wt({},u,f);break e;case 2:tr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=p,l=u):h=h.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=u),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Zr|=o,n.lanes=o,n.memoizedState=u}}function im(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Da={},pi=Er(Da),ya=Er(Da),Ma=Er(Da);function Vr(n){if(n===Da)throw Error(te(174));return n}function Ed(n,e){switch(ut(Ma,e),ut(ya,n),ut(pi,Da),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Mh(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Mh(e,n)}vt(pi),ut(pi,e)}function io(){vt(pi),vt(ya),vt(Ma)}function Sv(n){Vr(Ma.current);var e=Vr(pi.current),t=Mh(e,n.type);e!==t&&(ut(ya,n),ut(pi,t))}function wd(n){ya.current===n&&(vt(pi),vt(ya))}var St=Er(0);function _c(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _u=[];function Td(){for(var n=0;n<_u.length;n++)_u[n]._workInProgressVersionPrimary=null;_u.length=0}var Hl=Vi.ReactCurrentDispatcher,xu=Vi.ReactCurrentBatchConfig,Kr=0,Et=null,Ut=null,kt=null,xc=!1,sa=!1,Sa=0,aM=0;function jt(){throw Error(te(321))}function Ad(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ni(n[t],e[t]))return!1;return!0}function Cd(n,e,t,i,r,s){if(Kr=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Hl.current=n===null||n.memoizedState===null?hM:fM,n=t(i,r),sa){s=0;do{if(sa=!1,Sa=0,25<=s)throw Error(te(301));s+=1,kt=Ut=null,e.updateQueue=null,Hl.current=dM,n=t(i,r)}while(sa)}if(Hl.current=yc,e=Ut!==null&&Ut.next!==null,Kr=0,kt=Ut=Et=null,xc=!1,e)throw Error(te(300));return n}function bd(){var n=Sa!==0;return Sa=0,n}function li(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?Et.memoizedState=kt=n:kt=kt.next=n,kt}function Hn(){if(Ut===null){var n=Et.alternate;n=n!==null?n.memoizedState:null}else n=Ut.next;var e=kt===null?Et.memoizedState:kt.next;if(e!==null)kt=e,Ut=n;else{if(n===null)throw Error(te(310));Ut=n,n={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},kt===null?Et.memoizedState=kt=n:kt=kt.next=n}return kt}function Ea(n,e){return typeof e=="function"?e(n):e}function yu(n){var e=Hn(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=Ut,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Kr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var u={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=i):l=l.next=u,Et.lanes|=h,Zr|=h}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ni(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Et.lanes|=s,Zr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Mu(n){var e=Hn(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ni(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Ev(){}function wv(n,e){var t=Et,i=Hn(),r=e(),s=!ni(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,Rd(Cv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(t.flags|=2048,wa(9,Av.bind(null,t,i,r,e),void 0,null),zt===null)throw Error(te(349));Kr&30||Tv(t,e,r)}return r}function Tv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Av(n,e,t,i){e.value=t,e.getSnapshot=i,bv(e)&&Rv(n)}function Cv(n,e,t){return t(function(){bv(e)&&Rv(n)})}function bv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ni(n,t)}catch{return!0}}function Rv(n){var e=Bi(n,1);e!==null&&ei(e,n,1,-1)}function rm(n){var e=li();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:n},e.queue=n,n=n.dispatch=uM.bind(null,Et,n),[e.memoizedState,n]}function wa(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Pv(){return Hn().memoizedState}function Vl(n,e,t,i){var r=li();Et.flags|=n,r.memoizedState=wa(1|e,t,void 0,i===void 0?null:i)}function zc(n,e,t,i){var r=Hn();i=i===void 0?null:i;var s=void 0;if(Ut!==null){var o=Ut.memoizedState;if(s=o.destroy,i!==null&&Ad(i,o.deps)){r.memoizedState=wa(e,t,s,i);return}}Et.flags|=n,r.memoizedState=wa(1|e,t,s,i)}function sm(n,e){return Vl(8390656,8,n,e)}function Rd(n,e){return zc(2048,8,n,e)}function Lv(n,e){return zc(4,2,n,e)}function Dv(n,e){return zc(4,4,n,e)}function Iv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Uv(n,e,t){return t=t!=null?t.concat([n]):null,zc(4,4,Iv.bind(null,e,n),t)}function Pd(){}function Nv(n,e){var t=Hn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ad(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Fv(n,e){var t=Hn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ad(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Ov(n,e,t){return Kr&21?(ni(t,e)||(t=Hg(),Et.lanes|=t,Zr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,gn=!0),n.memoizedState=t)}function lM(n,e){var t=ot;ot=t!==0&&4>t?t:4,n(!0);var i=xu.transition;xu.transition={};try{n(!1),e()}finally{ot=t,xu.transition=i}}function Bv(){return Hn().memoizedState}function cM(n,e,t){var i=dr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},kv(n))zv(e,t);else if(t=yv(n,e,t,i),t!==null){var r=un();ei(t,n,i,r),Gv(t,e,i)}}function uM(n,e,t){var i=dr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(kv(n))zv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ni(a,o)){var l=e.interleaved;l===null?(r.next=r,Md(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=yv(n,e,r,i),t!==null&&(r=un(),ei(t,n,i,r),Gv(t,e,i))}}function kv(n){var e=n.alternate;return n===Et||e!==null&&e===Et}function zv(n,e){sa=xc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Gv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ad(n,t)}}var yc={readContext:Gn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},hM={readContext:Gn,useCallback:function(n,e){return li().memoizedState=[n,e===void 0?null:e],n},useContext:Gn,useEffect:sm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Vl(4194308,4,Iv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Vl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Vl(4,2,n,e)},useMemo:function(n,e){var t=li();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=li();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=cM.bind(null,Et,n),[i.memoizedState,n]},useRef:function(n){var e=li();return n={current:n},e.memoizedState=n},useState:rm,useDebugValue:Pd,useDeferredValue:function(n){return li().memoizedState=n},useTransition:function(){var n=rm(!1),e=n[0];return n=lM.bind(null,n[1]),li().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Et,r=li();if(yt){if(t===void 0)throw Error(te(407));t=t()}else{if(t=e(),zt===null)throw Error(te(349));Kr&30||Tv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,sm(Cv.bind(null,i,s,n),[n]),i.flags|=2048,wa(9,Av.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=li(),e=zt.identifierPrefix;if(yt){var t=bi,i=Ci;t=(i&~(1<<32-Jn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Sa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=aM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},fM={readContext:Gn,useCallback:Nv,useContext:Gn,useEffect:Rd,useImperativeHandle:Uv,useInsertionEffect:Lv,useLayoutEffect:Dv,useMemo:Fv,useReducer:yu,useRef:Pv,useState:function(){return yu(Ea)},useDebugValue:Pd,useDeferredValue:function(n){var e=Hn();return Ov(e,Ut.memoizedState,n)},useTransition:function(){var n=yu(Ea)[0],e=Hn().memoizedState;return[n,e]},useMutableSource:Ev,useSyncExternalStore:wv,useId:Bv,unstable_isNewReconciler:!1},dM={readContext:Gn,useCallback:Nv,useContext:Gn,useEffect:Rd,useImperativeHandle:Uv,useInsertionEffect:Lv,useLayoutEffect:Dv,useMemo:Fv,useReducer:Mu,useRef:Pv,useState:function(){return Mu(Ea)},useDebugValue:Pd,useDeferredValue:function(n){var e=Hn();return Ut===null?e.memoizedState=n:Ov(e,Ut.memoizedState,n)},useTransition:function(){var n=Mu(Ea)[0],e=Hn().memoizedState;return[n,e]},useMutableSource:Ev,useSyncExternalStore:wv,useId:Bv,unstable_isNewReconciler:!1};function qn(n,e){if(n&&n.defaultProps){e=wt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Hh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:wt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Gc={isMounted:function(n){return(n=n._reactInternals)?ts(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=un(),r=dr(n),s=Pi(i,r);s.payload=e,t!=null&&(s.callback=t),e=hr(n,s,r),e!==null&&(ei(e,n,r,i),Gl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=un(),r=dr(n),s=Pi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=hr(n,s,r),e!==null&&(ei(e,n,r,i),Gl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=un(),i=dr(n),r=Pi(t,i);r.tag=2,e!=null&&(r.callback=e),e=hr(n,r,i),e!==null&&(ei(e,n,i,t),Gl(e,n,i))}};function om(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ga(t,i)||!ga(r,s):!0}function Hv(n,e,t){var i=!1,r=_r,s=e.contextType;return typeof s=="object"&&s!==null?s=Gn(s):(r=xn(e)?Yr:tn.current,i=e.contextTypes,s=(i=i!=null)?eo(n,r):_r),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function am(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Gc.enqueueReplaceState(e,e.state,null)}function Vh(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Sd(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gn(s):(s=xn(e)?Yr:tn.current,r.context=eo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Gc.enqueueReplaceState(r,r.state,null),vc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function ro(n,e){try{var t="",i=e;do t+=Gx(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Su(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Wh(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var pM=typeof WeakMap=="function"?WeakMap:Map;function Vv(n,e,t){t=Pi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Sc||(Sc=!0,ef=i),Wh(n,e)},t}function Wv(n,e,t){t=Pi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Wh(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Wh(n,e),typeof i!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function lm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new pM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=bM.bind(null,n,e,t),e.then(n,n))}function cm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function um(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Pi(-1,1),e.tag=2,hr(t,e,1))),t.lanes|=1),n)}var mM=Vi.ReactCurrentOwner,gn=!1;function ln(n,e,t,i){e.child=n===null?xv(e,null,t,i):no(e,n.child,t,i)}function hm(n,e,t,i,r){t=t.render;var s=e.ref;return Ys(e,r),i=Cd(n,e,t,i,s,r),t=bd(),n!==null&&!gn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ki(n,e,r)):(yt&&t&&md(e),e.flags|=1,ln(n,e,i,r),e.child)}function fm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Bd(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Xv(n,e,s,i,r)):(n=jl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:ga,t(o,i)&&n.ref===e.ref)return ki(n,e,r)}return e.flags|=1,n=pr(s,i),n.ref=e.ref,n.return=e,e.child=n}function Xv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(ga(s,i)&&n.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(gn=!0);else return e.lanes=n.lanes,ki(n,e,r)}return Xh(n,e,t,i,r)}function $v(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Hs,wn),wn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ut(Hs,wn),wn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ut(Hs,wn),wn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ut(Hs,wn),wn|=i;return ln(n,e,r,t),e.child}function jv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Xh(n,e,t,i,r){var s=xn(t)?Yr:tn.current;return s=eo(e,s),Ys(e,r),t=Cd(n,e,t,i,s,r),i=bd(),n!==null&&!gn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,ki(n,e,r)):(yt&&i&&md(e),e.flags|=1,ln(n,e,t,r),e.child)}function dm(n,e,t,i,r){if(xn(t)){var s=!0;fc(e)}else s=!1;if(Ys(e,r),e.stateNode===null)Wl(n,e),Hv(e,t,i),Vh(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Gn(c):(c=xn(t)?Yr:tn.current,c=eo(e,c));var h=t.getDerivedStateFromProps,u=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&am(e,o,i,c),tr=!1;var f=e.memoizedState;o.state=f,vc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||_n.current||tr?(typeof h=="function"&&(Hh(e,t,h,i),l=e.memoizedState),(a=tr||om(e,t,a,i,f,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Mv(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:qn(e.type,a),o.props=c,u=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=xn(t)?Yr:tn.current,l=eo(e,l));var p=t.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||f!==l)&&am(e,o,i,l),tr=!1,f=e.memoizedState,o.state=f,vc(e,i,o,r);var g=e.memoizedState;a!==u||f!==g||_n.current||tr?(typeof p=="function"&&(Hh(e,t,p,i),g=e.memoizedState),(c=tr||om(e,t,c,i,f,g,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return $h(n,e,t,i,s,r)}function $h(n,e,t,i,r,s){jv(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Qp(e,t,!1),ki(n,e,s);i=e.stateNode,mM.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=no(e,n.child,null,s),e.child=no(e,null,a,s)):ln(n,e,a,s),e.memoizedState=i.state,r&&Qp(e,t,!0),e.child}function Yv(n){var e=n.stateNode;e.pendingContext?Zp(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Zp(n,e.context,!1),Ed(n,e.containerInfo)}function pm(n,e,t,i,r){return to(),vd(r),e.flags|=256,ln(n,e,t,i),e.child}var jh={dehydrated:null,treeContext:null,retryLane:0};function Yh(n){return{baseLanes:n,cachePool:null,transitions:null}}function qv(n,e,t){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ut(St,r&1),n===null)return zh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wc(o,i,0,null),n=jr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Yh(t),e.memoizedState=jh,n):Ld(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return gM(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=pr(a,s):(s=jr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Yh(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=jh,i}return s=n.child,n=s.sibling,i=pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Ld(n,e){return e=Wc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function qa(n,e,t,i){return i!==null&&vd(i),no(e,n.child,null,t),n=Ld(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function gM(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Su(Error(te(422))),qa(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Wc({mode:"visible",children:i.children},r,0,null),s=jr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&no(e,n.child,null,o),e.child.memoizedState=Yh(o),e.memoizedState=jh,s);if(!(e.mode&1))return qa(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Su(s,i,void 0),qa(n,e,o,i)}if(a=(o&n.childLanes)!==0,gn||a){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Bi(n,r),ei(i,n,r,-1))}return Od(),i=Su(Error(te(421))),qa(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=RM.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Cn=ur(r.nextSibling),bn=e,yt=!0,Zn=null,n!==null&&(Fn[On++]=Ci,Fn[On++]=bi,Fn[On++]=qr,Ci=n.id,bi=n.overflow,qr=e),e=Ld(e,i.children),e.flags|=4096,e)}function mm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Gh(n.return,e,t)}function Eu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Kv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(n,e,i.children,t),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&mm(n,t,e);else if(n.tag===19)mm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ut(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&_c(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Eu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&_c(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Eu(e,!0,t,null,s);break;case"together":Eu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Wl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ki(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Zr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(te(153));if(e.child!==null){for(n=e.child,t=pr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=pr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function vM(n,e,t){switch(e.tag){case 3:Yv(e),to();break;case 5:Sv(e);break;case 1:xn(e.type)&&fc(e);break;case 4:Ed(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(mc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(St,St.current&1),e.flags|=128,null):t&e.child.childLanes?qv(n,e,t):(ut(St,St.current&1),n=ki(n,e,t),n!==null?n.sibling:null);ut(St,St.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Kv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,$v(n,e,t)}return ki(n,e,t)}var Zv,qh,Qv,Jv;Zv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};qh=function(){};Qv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Vr(pi.current);var s=null;switch(t){case"input":r=vh(n,r),i=vh(n,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=yh(n,r),i=yh(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=uc)}Sh(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ca.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ca.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Jv=function(n,e,t,i){t!==i&&(e.flags|=4)};function Lo(n,e){if(!yt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Yt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function _M(n,e,t){var i=e.pendingProps;switch(gd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return xn(e.type)&&hc(),Yt(e),null;case 3:return i=e.stateNode,io(),vt(_n),vt(tn),Td(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ja(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zn!==null&&(rf(Zn),Zn=null))),qh(n,e),Yt(e),null;case 5:wd(e);var r=Vr(Ma.current);if(t=e.type,n!==null&&e.stateNode!=null)Qv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Yt(e),null}if(n=Vr(pi.current),ja(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[ui]=e,i[xa]=s,n=(e.mode&1)!==0,t){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Ko.length;r++)gt(Ko[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":wp(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":Ap(i,s),gt("invalid",i)}Sh(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&$a(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$a(i.textContent,a,n),r=["children",""+a]):ca.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&gt("scroll",i)}switch(t){case"input":Ba(i),Tp(i,s,!0);break;case"textarea":Ba(i),Cp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=uc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Cg(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[ui]=e,n[xa]=i,Zv(n,e,!1,!1),e.stateNode=n;e:{switch(o=Eh(t,i),t){case"dialog":gt("cancel",n),gt("close",n),r=i;break;case"iframe":case"object":case"embed":gt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ko.length;r++)gt(Ko[r],n);r=i;break;case"source":gt("error",n),r=i;break;case"img":case"image":case"link":gt("error",n),gt("load",n),r=i;break;case"details":gt("toggle",n),r=i;break;case"input":wp(n,i),r=vh(n,i),gt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),gt("invalid",n);break;case"textarea":Ap(n,i),r=yh(n,i),gt("invalid",n);break;default:r=i}Sh(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Pg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bg(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ua(n,l):typeof l=="number"&&ua(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",n):l!=null&&td(n,s,l,o))}switch(t){case"input":Ba(n),Tp(n,i,!1);break;case"textarea":Ba(n),Cp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+vr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ws(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ws(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=uc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(n&&e.stateNode!=null)Jv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(t=Vr(Ma.current),Vr(pi.current),ja(e)){if(i=e.stateNode,t=e.memoizedProps,i[ui]=e,(s=i.nodeValue!==t)&&(n=bn,n!==null))switch(n.tag){case 3:$a(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&$a(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ui]=e,e.stateNode=i}return Yt(e),null;case 13:if(vt(St),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(yt&&Cn!==null&&e.mode&1&&!(e.flags&128))vv(),to(),e.flags|=98560,s=!1;else if(s=ja(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[ui]=e}else to(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else Zn!==null&&(rf(Zn),Zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||St.current&1?Nt===0&&(Nt=3):Od())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return io(),qh(n,e),n===null&&va(e.stateNode.containerInfo),Yt(e),null;case 10:return yd(e.type._context),Yt(e),null;case 17:return xn(e.type)&&hc(),Yt(e),null;case 19:if(vt(St),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Lo(s,!1);else{if(Nt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=_c(n),o!==null){for(e.flags|=128,Lo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ut(St,St.current&1|2),e.child}n=n.sibling}s.tail!==null&&Rt()>so&&(e.flags|=128,i=!0,Lo(s,!1),e.lanes=4194304)}else{if(!i)if(n=_c(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Lo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!yt)return Yt(e),null}else 2*Rt()-s.renderingStartTime>so&&t!==1073741824&&(e.flags|=128,i=!0,Lo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,t=St.current,ut(St,i?t&1|2:t&1),e):(Yt(e),null);case 22:case 23:return Fd(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function xM(n,e){switch(gd(e),e.tag){case 1:return xn(e.type)&&hc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return io(),vt(_n),vt(tn),Td(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return wd(e),null;case 13:if(vt(St),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(te(340));to()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return vt(St),null;case 4:return io(),null;case 10:return yd(e.type._context),null;case 22:case 23:return Fd(),null;case 24:return null;default:return null}}var Ka=!1,Zt=!1,yM=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Gs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){At(n,e,i)}else t.current=null}function Kh(n,e,t){try{t()}catch(i){At(n,e,i)}}var gm=!1;function MM(n,e){if(Ih=ac,n=rv(),pd(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,h=0,u=n,f=null;t:for(;;){for(var p;u!==t||r!==0&&u.nodeType!==3||(a=o+r),u!==s||i!==0&&u.nodeType!==3||(l=o+i),u.nodeType===3&&(o+=u.nodeValue.length),(p=u.firstChild)!==null;)f=u,u=p;for(;;){if(u===n)break t;if(f===t&&++c===r&&(a=o),f===s&&++h===i&&(l=o),(p=u.nextSibling)!==null)break;u=f,f=u.parentNode}u=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Uh={focusedElem:n,selectionRange:t},ac=!1,pe=e;pe!==null;)if(e=pe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,pe=n;else for(;pe!==null;){e=pe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:qn(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(y){At(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}return g=gm,gm=!1,g}function oa(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Kh(e,t,s)}r=r.next}while(r!==i)}}function Hc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Zh(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function e_(n){var e=n.alternate;e!==null&&(n.alternate=null,e_(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ui],delete e[xa],delete e[Oh],delete e[iM],delete e[rM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function t_(n){return n.tag===5||n.tag===3||n.tag===4}function vm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||t_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Qh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=uc));else if(i!==4&&(n=n.child,n!==null))for(Qh(n,e,t),n=n.sibling;n!==null;)Qh(n,e,t),n=n.sibling}function Jh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Jh(n,e,t),n=n.sibling;n!==null;)Jh(n,e,t),n=n.sibling}var Gt=null,Kn=!1;function $i(n,e,t){for(t=t.child;t!==null;)n_(n,e,t),t=t.sibling}function n_(n,e,t){if(di&&typeof di.onCommitFiberUnmount=="function")try{di.onCommitFiberUnmount(Uc,t)}catch{}switch(t.tag){case 5:Zt||Gs(t,e);case 6:var i=Gt,r=Kn;Gt=null,$i(n,e,t),Gt=i,Kn=r,Gt!==null&&(Kn?(n=Gt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Gt.removeChild(t.stateNode));break;case 18:Gt!==null&&(Kn?(n=Gt,t=t.stateNode,n.nodeType===8?gu(n.parentNode,t):n.nodeType===1&&gu(n,t),pa(n)):gu(Gt,t.stateNode));break;case 4:i=Gt,r=Kn,Gt=t.stateNode.containerInfo,Kn=!0,$i(n,e,t),Gt=i,Kn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kh(t,e,o),r=r.next}while(r!==i)}$i(n,e,t);break;case 1:if(!Zt&&(Gs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){At(t,e,a)}$i(n,e,t);break;case 21:$i(n,e,t);break;case 22:t.mode&1?(Zt=(i=Zt)||t.memoizedState!==null,$i(n,e,t),Zt=i):$i(n,e,t);break;default:$i(n,e,t)}}function _m(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new yM),e.forEach(function(i){var r=PM.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Xn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,Kn=!1;break e;case 3:Gt=a.stateNode.containerInfo,Kn=!0;break e;case 4:Gt=a.stateNode.containerInfo,Kn=!0;break e}a=a.return}if(Gt===null)throw Error(te(160));n_(s,o,r),Gt=null,Kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)i_(e,n),e=e.sibling}function i_(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Xn(e,n),si(n),i&4){try{oa(3,n,n.return),Hc(3,n)}catch(_){At(n,n.return,_)}try{oa(5,n,n.return)}catch(_){At(n,n.return,_)}}break;case 1:Xn(e,n),si(n),i&512&&t!==null&&Gs(t,t.return);break;case 5:if(Xn(e,n),si(n),i&512&&t!==null&&Gs(t,t.return),n.flags&32){var r=n.stateNode;try{ua(r,"")}catch(_){At(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Tg(r,s),Eh(a,o);var c=Eh(a,s);for(o=0;o<l.length;o+=2){var h=l[o],u=l[o+1];h==="style"?Pg(r,u):h==="dangerouslySetInnerHTML"?bg(r,u):h==="children"?ua(r,u):td(r,h,u,c)}switch(a){case"input":_h(r,s);break;case"textarea":Ag(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ws(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ws(r,!!s.multiple,s.defaultValue,!0):Ws(r,!!s.multiple,s.multiple?[]:"",!1))}r[xa]=s}catch(_){At(n,n.return,_)}}break;case 6:if(Xn(e,n),si(n),i&4){if(n.stateNode===null)throw Error(te(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){At(n,n.return,_)}}break;case 3:if(Xn(e,n),si(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{pa(e.containerInfo)}catch(_){At(n,n.return,_)}break;case 4:Xn(e,n),si(n);break;case 13:Xn(e,n),si(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ud=Rt())),i&4&&_m(n);break;case 22:if(h=t!==null&&t.memoizedState!==null,n.mode&1?(Zt=(c=Zt)||h,Xn(e,n),Zt=c):Xn(e,n),si(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!h&&n.mode&1)for(pe=n,h=n.child;h!==null;){for(u=pe=h;pe!==null;){switch(f=pe,p=f.child,f.tag){case 0:case 11:case 14:case 15:oa(4,f,f.return);break;case 1:Gs(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){At(i,t,_)}}break;case 5:Gs(f,f.return);break;case 22:if(f.memoizedState!==null){ym(u);continue}}p!==null?(p.return=f,pe=p):ym(u)}h=h.sibling}e:for(h=null,u=n;;){if(u.tag===5){if(h===null){h=u;try{r=u.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Rg("display",o))}catch(_){At(n,n.return,_)}}}else if(u.tag===6){if(h===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(_){At(n,n.return,_)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===n)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;h===u&&(h=null),u=u.return}h===u&&(h=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Xn(e,n),si(n),i&4&&_m(n);break;case 21:break;default:Xn(e,n),si(n)}}function si(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(t_(t)){var i=t;break e}t=t.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ua(r,""),i.flags&=-33);var s=vm(n);Jh(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=vm(n);Qh(n,a,o);break;default:throw Error(te(161))}}catch(l){At(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function SM(n,e,t){pe=n,r_(n)}function r_(n,e,t){for(var i=(n.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ka;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zt;a=Ka;var c=Zt;if(Ka=o,(Zt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?Mm(r):l!==null?(l.return=o,pe=l):Mm(r);for(;s!==null;)pe=s,r_(s),s=s.sibling;pe=r,Ka=a,Zt=c}xm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):xm(n)}}function xm(n){for(;pe!==null;){var e=pe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||Hc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:qn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&im(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}im(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var u=h.dehydrated;u!==null&&pa(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Zt||e.flags&512&&Zh(e)}catch(f){At(e,e.return,f)}}if(e===n){pe=null;break}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}}function ym(n){for(;pe!==null;){var e=pe;if(e===n){pe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,pe=t;break}pe=e.return}}function Mm(n){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Hc(4,e)}catch(l){At(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{Zh(e)}catch(l){At(e,s,l)}break;case 5:var o=e.return;try{Zh(e)}catch(l){At(e,o,l)}}}catch(l){At(e,e.return,l)}if(e===n){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var EM=Math.ceil,Mc=Vi.ReactCurrentDispatcher,Dd=Vi.ReactCurrentOwner,zn=Vi.ReactCurrentBatchConfig,Ze=0,zt=null,It=null,Ht=0,wn=0,Hs=Er(0),Nt=0,Ta=null,Zr=0,Vc=0,Id=0,aa=null,pn=null,Ud=0,so=1/0,Ti=null,Sc=!1,ef=null,fr=null,Za=!1,or=null,Ec=0,la=0,tf=null,Xl=-1,$l=0;function un(){return Ze&6?Rt():Xl!==-1?Xl:Xl=Rt()}function dr(n){return n.mode&1?Ze&2&&Ht!==0?Ht&-Ht:oM.transition!==null?($l===0&&($l=Hg()),$l):(n=ot,n!==0||(n=window.event,n=n===void 0?16:qg(n.type)),n):1}function ei(n,e,t,i){if(50<la)throw la=0,tf=null,Error(te(185));Ra(n,t,i),(!(Ze&2)||n!==zt)&&(n===zt&&(!(Ze&2)&&(Vc|=t),Nt===4&&ir(n,Ht)),yn(n,i),t===1&&Ze===0&&!(e.mode&1)&&(so=Rt()+500,kc&&wr()))}function yn(n,e){var t=n.callbackNode;oy(n,e);var i=oc(n,n===zt?Ht:0);if(i===0)t!==null&&Pp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Pp(t),e===1)n.tag===0?sM(Sm.bind(null,n)):pv(Sm.bind(null,n)),tM(function(){!(Ze&6)&&wr()}),t=null;else{switch(Vg(i)){case 1:t=od;break;case 4:t=zg;break;case 16:t=sc;break;case 536870912:t=Gg;break;default:t=sc}t=f_(t,s_.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function s_(n,e){if(Xl=-1,$l=0,Ze&6)throw Error(te(327));var t=n.callbackNode;if(qs()&&n.callbackNode!==t)return null;var i=oc(n,n===zt?Ht:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=wc(n,i);else{e=i;var r=Ze;Ze|=2;var s=a_();(zt!==n||Ht!==e)&&(Ti=null,so=Rt()+500,$r(n,e));do try{AM();break}catch(a){o_(n,a)}while(!0);xd(),Mc.current=s,Ze=r,It!==null?e=0:(zt=null,Ht=0,e=Nt)}if(e!==0){if(e===2&&(r=bh(n),r!==0&&(i=r,e=nf(n,r))),e===1)throw t=Ta,$r(n,0),ir(n,i),yn(n,Rt()),t;if(e===6)ir(n,i);else{if(r=n.current.alternate,!(i&30)&&!wM(r)&&(e=wc(n,i),e===2&&(s=bh(n),s!==0&&(i=s,e=nf(n,s))),e===1))throw t=Ta,$r(n,0),ir(n,i),yn(n,Rt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Ur(n,pn,Ti);break;case 3:if(ir(n,i),(i&130023424)===i&&(e=Ud+500-Rt(),10<e)){if(oc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){un(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Fh(Ur.bind(null,n,pn,Ti),e);break}Ur(n,pn,Ti);break;case 4:if(ir(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*EM(i/1960))-i,10<i){n.timeoutHandle=Fh(Ur.bind(null,n,pn,Ti),i);break}Ur(n,pn,Ti);break;case 5:Ur(n,pn,Ti);break;default:throw Error(te(329))}}}return yn(n,Rt()),n.callbackNode===t?s_.bind(null,n):null}function nf(n,e){var t=aa;return n.current.memoizedState.isDehydrated&&($r(n,e).flags|=256),n=wc(n,e),n!==2&&(e=pn,pn=t,e!==null&&rf(e)),n}function rf(n){pn===null?pn=n:pn.push.apply(pn,n)}function wM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ni(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(n,e){for(e&=~Id,e&=~Vc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Jn(e),i=1<<t;n[t]=-1,e&=~i}}function Sm(n){if(Ze&6)throw Error(te(327));qs();var e=oc(n,0);if(!(e&1))return yn(n,Rt()),null;var t=wc(n,e);if(n.tag!==0&&t===2){var i=bh(n);i!==0&&(e=i,t=nf(n,i))}if(t===1)throw t=Ta,$r(n,0),ir(n,e),yn(n,Rt()),t;if(t===6)throw Error(te(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ur(n,pn,Ti),yn(n,Rt()),null}function Nd(n,e){var t=Ze;Ze|=1;try{return n(e)}finally{Ze=t,Ze===0&&(so=Rt()+500,kc&&wr())}}function Qr(n){or!==null&&or.tag===0&&!(Ze&6)&&qs();var e=Ze;Ze|=1;var t=zn.transition,i=ot;try{if(zn.transition=null,ot=1,n)return n()}finally{ot=i,zn.transition=t,Ze=e,!(Ze&6)&&wr()}}function Fd(){wn=Hs.current,vt(Hs)}function $r(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,eM(t)),It!==null)for(t=It.return;t!==null;){var i=t;switch(gd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&hc();break;case 3:io(),vt(_n),vt(tn),Td();break;case 5:wd(i);break;case 4:io();break;case 13:vt(St);break;case 19:vt(St);break;case 10:yd(i.type._context);break;case 22:case 23:Fd()}t=t.return}if(zt=n,It=n=pr(n.current,null),Ht=wn=e,Nt=0,Ta=null,Id=Vc=Zr=0,pn=aa=null,Hr!==null){for(e=0;e<Hr.length;e++)if(t=Hr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Hr=null}return n}function o_(n,e){do{var t=It;try{if(xd(),Hl.current=yc,xc){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}xc=!1}if(Kr=0,kt=Ut=Et=null,sa=!1,Sa=0,Dd.current=null,t===null||t.return===null){Nt=1,Ta=e,It=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,u=h.tag;if(!(h.mode&1)&&(u===0||u===11||u===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=cm(o);if(p!==null){p.flags&=-257,um(p,o,a,s,e),p.mode&1&&lm(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){lm(s,c,e),Od();break e}l=Error(te(426))}}else if(yt&&a.mode&1){var m=cm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),um(m,o,a,s,e),vd(ro(l,a));break e}}s=l=ro(l,a),Nt!==4&&(Nt=2),aa===null?aa=[s]:aa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Vv(s,l,e);nm(s,d);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(fr===null||!fr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Wv(s,a,e);nm(s,y);break e}}s=s.return}while(s!==null)}c_(t)}catch(P){e=P,It===t&&t!==null&&(It=t=t.return);continue}break}while(!0)}function a_(){var n=Mc.current;return Mc.current=yc,n===null?yc:n}function Od(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),zt===null||!(Zr&268435455)&&!(Vc&268435455)||ir(zt,Ht)}function wc(n,e){var t=Ze;Ze|=2;var i=a_();(zt!==n||Ht!==e)&&(Ti=null,$r(n,e));do try{TM();break}catch(r){o_(n,r)}while(!0);if(xd(),Ze=t,Mc.current=i,It!==null)throw Error(te(261));return zt=null,Ht=0,Nt}function TM(){for(;It!==null;)l_(It)}function AM(){for(;It!==null&&!Zx();)l_(It)}function l_(n){var e=h_(n.alternate,n,wn);n.memoizedProps=n.pendingProps,e===null?c_(n):It=e,Dd.current=null}function c_(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=xM(t,e),t!==null){t.flags&=32767,It=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Nt=6,It=null;return}}else if(t=_M(t,e,wn),t!==null){It=t;return}if(e=e.sibling,e!==null){It=e;return}It=e=n}while(e!==null);Nt===0&&(Nt=5)}function Ur(n,e,t){var i=ot,r=zn.transition;try{zn.transition=null,ot=1,CM(n,e,t,i)}finally{zn.transition=r,ot=i}return null}function CM(n,e,t,i){do qs();while(or!==null);if(Ze&6)throw Error(te(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(te(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(ay(n,s),n===zt&&(It=zt=null,Ht=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Za||(Za=!0,f_(sc,function(){return qs(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=zn.transition,zn.transition=null;var o=ot;ot=1;var a=Ze;Ze|=4,Dd.current=null,MM(n,t),i_(t,n),jy(Uh),ac=!!Ih,Uh=Ih=null,n.current=t,SM(t),Qx(),Ze=a,ot=o,zn.transition=s}else n.current=t;if(Za&&(Za=!1,or=n,Ec=r),s=n.pendingLanes,s===0&&(fr=null),ty(t.stateNode),yn(n,Rt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Sc)throw Sc=!1,n=ef,ef=null,n;return Ec&1&&n.tag!==0&&qs(),s=n.pendingLanes,s&1?n===tf?la++:(la=0,tf=n):la=0,wr(),null}function qs(){if(or!==null){var n=Vg(Ec),e=zn.transition,t=ot;try{if(zn.transition=null,ot=16>n?16:n,or===null)var i=!1;else{if(n=or,or=null,Ec=0,Ze&6)throw Error(te(331));var r=Ze;for(Ze|=4,pe=n.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var h=pe;switch(h.tag){case 0:case 11:case 15:oa(8,h,s)}var u=h.child;if(u!==null)u.return=h,pe=u;else for(;pe!==null;){h=pe;var f=h.sibling,p=h.return;if(e_(h),h===c){pe=null;break}if(f!==null){f.return=p,pe=f;break}pe=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,pe=d;break e}pe=s.return}}var v=n.current;for(pe=v;pe!==null;){o=pe;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,pe=x;else e:for(o=v;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hc(9,a)}}catch(P){At(a,a.return,P)}if(a===o){pe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,pe=y;break e}pe=a.return}}if(Ze=r,wr(),di&&typeof di.onPostCommitFiberRoot=="function")try{di.onPostCommitFiberRoot(Uc,n)}catch{}i=!0}return i}finally{ot=t,zn.transition=e}}return!1}function Em(n,e,t){e=ro(t,e),e=Vv(n,e,1),n=hr(n,e,1),e=un(),n!==null&&(Ra(n,1,e),yn(n,e))}function At(n,e,t){if(n.tag===3)Em(n,n,t);else for(;e!==null;){if(e.tag===3){Em(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){n=ro(t,n),n=Wv(e,n,1),e=hr(e,n,1),n=un(),e!==null&&(Ra(e,1,n),yn(e,n));break}}e=e.return}}function bM(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=un(),n.pingedLanes|=n.suspendedLanes&t,zt===n&&(Ht&t)===t&&(Nt===4||Nt===3&&(Ht&130023424)===Ht&&500>Rt()-Ud?$r(n,0):Id|=t),yn(n,e)}function u_(n,e){e===0&&(n.mode&1?(e=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):e=1);var t=un();n=Bi(n,e),n!==null&&(Ra(n,e,t),yn(n,t))}function RM(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),u_(n,t)}function PM(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),u_(n,t)}var h_;h_=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||_n.current)gn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return gn=!1,vM(n,e,t);gn=!!(n.flags&131072)}else gn=!1,yt&&e.flags&1048576&&mv(e,pc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Wl(n,e),n=e.pendingProps;var r=eo(e,tn.current);Ys(e,t),r=Cd(null,e,i,n,r,t);var s=bd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,fc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Sd(e),r.updater=Gc,e.stateNode=r,r._reactInternals=e,Vh(e,i,n,t),e=$h(null,e,i,!0,s,t)):(e.tag=0,yt&&s&&md(e),ln(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Wl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=DM(i),n=qn(i,n),r){case 0:e=Xh(null,e,i,n,t);break e;case 1:e=dm(null,e,i,n,t);break e;case 11:e=hm(null,e,i,n,t);break e;case 14:e=fm(null,e,i,qn(i.type,n),t);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),Xh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),dm(n,e,i,r,t);case 3:e:{if(Yv(e),n===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Mv(n,e),vc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ro(Error(te(423)),e),e=pm(n,e,i,t,r);break e}else if(i!==r){r=ro(Error(te(424)),e),e=pm(n,e,i,t,r);break e}else for(Cn=ur(e.stateNode.containerInfo.firstChild),bn=e,yt=!0,Zn=null,t=xv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(to(),i===r){e=ki(n,e,t);break e}ln(n,e,i,t)}e=e.child}return e;case 5:return Sv(e),n===null&&zh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Nh(i,r)?o=null:s!==null&&Nh(i,s)&&(e.flags|=32),jv(n,e),ln(n,e,o,t),e.child;case 6:return n===null&&zh(e),null;case 13:return qv(n,e,t);case 4:return Ed(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=no(e,null,i,t):ln(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),hm(n,e,i,r,t);case 7:return ln(n,e,e.pendingProps,t),e.child;case 8:return ln(n,e,e.pendingProps.children,t),e.child;case 12:return ln(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ut(mc,i._currentValue),i._currentValue=o,s!==null)if(ni(s.value,o)){if(s.children===r.children&&!_n.current){e=ki(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Pi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Gh(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Gh(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ys(e,t),r=Gn(r),i=i(r),e.flags|=1,ln(n,e,i,t),e.child;case 14:return i=e.type,r=qn(i,e.pendingProps),r=qn(i.type,r),fm(n,e,i,r,t);case 15:return Xv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),Wl(n,e),e.tag=1,xn(i)?(n=!0,fc(e)):n=!1,Ys(e,t),Hv(e,i,r),Vh(e,i,r,t),$h(null,e,i,!0,n,t);case 19:return Kv(n,e,t);case 22:return $v(n,e,t)}throw Error(te(156,e.tag))};function f_(n,e){return kg(n,e)}function LM(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(n,e,t,i){return new LM(n,e,t,i)}function Bd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function DM(n){if(typeof n=="function")return Bd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===id)return 11;if(n===rd)return 14}return 2}function pr(n,e){var t=n.alternate;return t===null?(t=kn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function jl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Bd(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ds:return jr(t.children,r,s,e);case nd:o=8,r|=8;break;case dh:return n=kn(12,t,e,r|2),n.elementType=dh,n.lanes=s,n;case ph:return n=kn(13,t,e,r),n.elementType=ph,n.lanes=s,n;case mh:return n=kn(19,t,e,r),n.elementType=mh,n.lanes=s,n;case Sg:return Wc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case yg:o=10;break e;case Mg:o=9;break e;case id:o=11;break e;case rd:o=14;break e;case er:o=16,i=null;break e}throw Error(te(130,n==null?n:typeof n,""))}return e=kn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function jr(n,e,t,i){return n=kn(7,n,i,e),n.lanes=t,n}function Wc(n,e,t,i){return n=kn(22,n,i,e),n.elementType=Sg,n.lanes=t,n.stateNode={isHidden:!1},n}function wu(n,e,t){return n=kn(6,n,null,e),n.lanes=t,n}function Tu(n,e,t){return e=kn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function IM(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=su(0),this.expirationTimes=su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=su(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kd(n,e,t,i,r,s,o,a,l){return n=new IM(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sd(s),n}function UM(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ls,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function d_(n){if(!n)return _r;n=n._reactInternals;e:{if(ts(n)!==n||n.tag!==1)throw Error(te(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(n.tag===1){var t=n.type;if(xn(t))return dv(n,t,e)}return e}function p_(n,e,t,i,r,s,o,a,l){return n=kd(t,i,!0,n,r,s,o,a,l),n.context=d_(null),t=n.current,i=un(),r=dr(t),s=Pi(i,r),s.callback=e??null,hr(t,s,r),n.current.lanes=r,Ra(n,r,i),yn(n,i),n}function Xc(n,e,t,i){var r=e.current,s=un(),o=dr(r);return t=d_(t),e.context===null?e.context=t:e.pendingContext=t,e=Pi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=hr(r,e,o),n!==null&&(ei(n,r,o,s),Gl(n,r,o)),o}function Tc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function wm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function zd(n,e){wm(n,e),(n=n.alternate)&&wm(n,e)}function NM(){return null}var m_=typeof reportError=="function"?reportError:function(n){console.error(n)};function Gd(n){this._internalRoot=n}$c.prototype.render=Gd.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(te(409));Xc(n,e,null,null)};$c.prototype.unmount=Gd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Qr(function(){Xc(null,n,null,null)}),e[Oi]=null}};function $c(n){this._internalRoot=n}$c.prototype.unstable_scheduleHydration=function(n){if(n){var e=$g();n={blockedOn:null,target:n,priority:e};for(var t=0;t<nr.length&&e!==0&&e<nr[t].priority;t++);nr.splice(t,0,n),t===0&&Yg(n)}};function Hd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function jc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Tm(){}function FM(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Tc(o);s.call(c)}}var o=p_(e,i,n,0,null,!1,!1,"",Tm);return n._reactRootContainer=o,n[Oi]=o.current,va(n.nodeType===8?n.parentNode:n),Qr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Tc(l);a.call(c)}}var l=kd(n,0,!1,null,null,!1,!1,"",Tm);return n._reactRootContainer=l,n[Oi]=l.current,va(n.nodeType===8?n.parentNode:n),Qr(function(){Xc(e,l,t,i)}),l}function Yc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Tc(o);a.call(l)}}Xc(e,o,n,r)}else o=FM(t,e,n,r,i);return Tc(o)}Wg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=qo(e.pendingLanes);t!==0&&(ad(e,t|1),yn(e,Rt()),!(Ze&6)&&(so=Rt()+500,wr()))}break;case 13:Qr(function(){var i=Bi(n,1);if(i!==null){var r=un();ei(i,n,1,r)}}),zd(n,1)}};ld=function(n){if(n.tag===13){var e=Bi(n,134217728);if(e!==null){var t=un();ei(e,n,134217728,t)}zd(n,134217728)}};Xg=function(n){if(n.tag===13){var e=dr(n),t=Bi(n,e);if(t!==null){var i=un();ei(t,n,e,i)}zd(n,e)}};$g=function(){return ot};jg=function(n,e){var t=ot;try{return ot=n,e()}finally{ot=t}};Th=function(n,e,t){switch(e){case"input":if(_h(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Bc(i);if(!r)throw Error(te(90));wg(i),_h(i,r)}}}break;case"textarea":Ag(n,t);break;case"select":e=t.value,e!=null&&Ws(n,!!t.multiple,e,!1)}};Ig=Nd;Ug=Qr;var OM={usingClientEntryPoint:!1,Events:[La,Fs,Bc,Lg,Dg,Nd]},Do={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},BM={bundleType:Do.bundleType,version:Do.version,rendererPackageName:Do.rendererPackageName,rendererConfig:Do.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Og(n),n===null?null:n.stateNode},findFiberByHostInstance:Do.findFiberByHostInstance||NM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{Uc=Qa.inject(BM),di=Qa}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OM;Ln.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(e))throw Error(te(200));return UM(n,e,null,t)};Ln.createRoot=function(n,e){if(!Hd(n))throw Error(te(299));var t=!1,i="",r=m_;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kd(n,1,!1,null,null,t,!1,i,r),n[Oi]=e.current,va(n.nodeType===8?n.parentNode:n),new Gd(e)};Ln.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(te(188)):(n=Object.keys(n).join(","),Error(te(268,n)));return n=Og(e),n=n===null?null:n.stateNode,n};Ln.flushSync=function(n){return Qr(n)};Ln.hydrate=function(n,e,t){if(!jc(e))throw Error(te(200));return Yc(null,n,e,!0,t)};Ln.hydrateRoot=function(n,e,t){if(!Hd(n))throw Error(te(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=m_;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=p_(e,null,n,1,t??null,r,!1,s,o),n[Oi]=e.current,va(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new $c(e)};Ln.render=function(n,e,t){if(!jc(e))throw Error(te(200));return Yc(null,n,e,!1,t)};Ln.unmountComponentAtNode=function(n){if(!jc(n))throw Error(te(40));return n._reactRootContainer?(Qr(function(){Yc(null,null,n,!1,function(){n._reactRootContainer=null,n[Oi]=null})}),!0):!1};Ln.unstable_batchedUpdates=Nd;Ln.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!jc(t))throw Error(te(200));if(n==null||n._reactInternals===void 0)throw Error(te(38));return Yc(n,e,t,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function g_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g_)}catch(n){console.error(n)}}g_(),gg.exports=Ln;var kM=gg.exports,v_,Am=kM;v_=Am.createRoot,Am.hydrateRoot;class zM{constructor(){R(this,"context",null);R(this,"analyser",null);R(this,"source",null);R(this,"stream",null);R(this,"_isActive",!1);R(this,"_mode",null);R(this,"dataArray",new Uint8Array(256));R(this,"runningAvgBass",0);R(this,"beatCooldown",0);R(this,"lastBeatTime",0)}get isActive(){return this._isActive}get mode(){return this._mode}createContext(){return this.context||(this.context=new AudioContext),this.context}setupAnalyser(e){const t=e.createAnalyser();return t.fftSize=512,t.smoothingTimeConstant=.45,this.analyser=t,this.dataArray=new Uint8Array(t.frequencyBinCount),t}async startMic(){this.stop();const e=this.createContext();e.state==="suspended"&&await e.resume();const t=this.setupAnalyser(e);this.stream=await navigator.mediaDevices.getUserMedia({audio:!0}),this.source=e.createMediaStreamSource(this.stream),this.source.connect(t),this._isActive=!0,this._mode="mic"}async startFile(e){this.stop();const t=this.createContext();t.state==="suspended"&&await t.resume();const i=this.setupAnalyser(t),r=await e.arrayBuffer(),s=await t.decodeAudioData(r),o=t.createBufferSource();o.buffer=s,o.loop=!0,o.connect(i),i.connect(t.destination),o.start(),this.source=o,this._isActive=!0,this._mode="file"}stop(){if(this.source){try{this.source.disconnect(),this.source instanceof AudioBufferSourceNode&&this.source.stop()}catch{}this.source=null}if(this.stream&&(this.stream.getTracks().forEach(e=>e.stop()),this.stream=null),this.analyser){try{this.analyser.disconnect()}catch{}this.analyser=null}this._isActive=!1,this._mode=null}getAudioData(){const e=this.dataArray;if(!this.analyser||!this._isActive)return{raw:e,bass:0,mid:0,treble:0,volume:0,beat:!1};this.analyser.getByteFrequencyData(e);const t=(f,p)=>{let g=0;for(let m=f;m<=p;m++)g+=e[m];const _=g/((p-f+1)*255);return Math.min(1,Math.pow(_,.6)*1.4)},i=t(0,5),r=t(6,60),s=t(61,128);let o=0;for(let f=0;f<e.length;f++){const p=e[f]/255;o+=p*p}const a=Math.min(1,Math.pow(Math.sqrt(o/e.length),.65)*1.5),l=.15;this.runningAvgBass=l*i+(1-l)*this.runningAvgBass;const c=performance.now();let h=!1;const u=250;return i>1.2*this.runningAvgBass&&i>.03&&c-this.lastBeatTime>u&&(h=!0,this.lastBeatTime=c),this.beatCooldown=h?u:Math.max(0,this.beatCooldown-16),{raw:e,bass:i,mid:r,treble:s,volume:a,beat:h}}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vd="170",GM=0,Cm=1,HM=2,__=1,VM=2,wi=3,xr=0,Jt=1,Qt=2,Li=0,Ks=1,Ae=2,bm=3,Rm=4,WM=5,kr=100,XM=101,$M=102,jM=103,YM=104,qM=200,KM=201,ZM=202,QM=203,sf=204,of=205,JM=206,eS=207,tS=208,nS=209,iS=210,rS=211,sS=212,oS=213,aS=214,af=0,lf=1,cf=2,oo=3,uf=4,hf=5,ff=6,df=7,x_=0,lS=1,cS=2,mr=0,y_=1,M_=2,S_=3,E_=4,uS=5,w_=6,T_=7,A_=300,ao=301,lo=302,pf=303,mf=304,qc=306,gf=1e3,Wr=1001,vf=1002,Rn=1003,hS=1004,Ja=1005,vn=1006,Au=1007,Xr=1008,zi=1009,C_=1010,b_=1011,Aa=1012,Wd=1013,Jr=1014,fi=1015,Di=1016,Xd=1017,$d=1018,co=1020,R_=35902,P_=1021,L_=1022,Qn=1023,D_=1024,I_=1025,Zs=1026,uo=1027,jd=1028,Yd=1029,U_=1030,qd=1031,Kd=1033,Yl=33776,ql=33777,Kl=33778,Zl=33779,_f=35840,xf=35841,yf=35842,Mf=35843,Sf=36196,Ef=37492,wf=37496,Tf=37808,Af=37809,Cf=37810,bf=37811,Rf=37812,Pf=37813,Lf=37814,Df=37815,If=37816,Uf=37817,Nf=37818,Ff=37819,Of=37820,Bf=37821,Ql=36492,kf=36494,zf=36495,N_=36283,Gf=36284,Hf=36285,Vf=36286,fS=3200,dS=3201,pS=0,mS=1,rr="",Tn="srgb",_o="srgb-linear",Kc="linear",st="srgb",as=7680,Pm=519,gS=512,vS=513,_S=514,F_=515,xS=516,yS=517,MS=518,SS=519,Wf=35044,Lm=35048,Dm="300 es",Ri=2e3,Ac=2001;class xo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jl=Math.PI/180,Xf=180/Math.PI;function gr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function mn(n,e,t){return Math.max(e,Math.min(t,n))}function ES(n,e){return(n%e+e)%e}function Cu(n,e,t){return(1-t)*n+t*e}function hi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function at(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,i,r,s,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],v=r[1],x=r[4],y=r[7],P=r[2],A=r[5],T=r[8];return s[0]=o*_+a*v+l*P,s[3]=o*m+a*x+l*A,s[6]=o*d+a*y+l*T,s[1]=c*_+h*v+u*P,s[4]=c*m+h*x+u*A,s[7]=c*d+h*y+u*T,s[2]=f*_+p*v+g*P,s[5]=f*m+p*x+g*A,s[8]=f*d+p*y+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*s,p=c*s-o*l,g=t*u+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*c-h*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(h*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bu.makeScale(e,t)),this}rotate(e){return this.premultiply(bu.makeRotation(-e)),this}translate(e,t){return this.premultiply(bu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bu=new Be;function O_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Cc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wS(){const n=Cc("canvas");return n.style.display="block",n}const Im={};function Zo(n){n in Im||(Im[n]=!0,console.warn(n))}function TS(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function AS(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function CS(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ye={enabled:!0,workingColorSpace:_o,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===st&&(n.r=Ii(n.r),n.g=Ii(n.g),n.b=Ii(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===st&&(n.r=Qs(n.r),n.g=Qs(n.g),n.b=Qs(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===rr?Kc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Um=[.64,.33,.3,.6,.15,.06],Nm=[.2126,.7152,.0722],Fm=[.3127,.329],Om=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bm=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[_o]:{primaries:Um,whitePoint:Fm,transfer:Kc,toXYZ:Om,fromXYZ:Bm,luminanceCoefficients:Nm,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:Um,whitePoint:Fm,transfer:st,toXYZ:Om,fromXYZ:Bm,luminanceCoefficients:Nm,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}});let ls;class bS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=Cc("canvas")),ls.width=e.width,ls.height=e.height;const i=ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ii(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ii(t[i]/255)*255):t[i]=Ii(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RS=0;class B_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=gr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ru(r[o].image)):s.push(Ru(r[o]))}else s=Ru(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ru(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bS.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let PS=0;class en extends xo{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,i=Wr,r=Wr,s=vn,o=Xr,a=Qn,l=zi,c=en.DEFAULT_ANISOTROPY,h=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=gr(),this.name="",this.source=new B_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==A_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gf:e.x=e.x-Math.floor(e.x);break;case Wr:e.x=e.x<0?0:1;break;case vf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gf:e.y=e.y-Math.floor(e.y);break;case Wr:e.y=e.y<0?0:1;break;case vf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=A_;en.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(p+1)/2,P=(d+1)/2,A=(h+f)/4,T=(u+_)/4,C=(g+m)/4;return x>y&&x>P?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=T/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=C/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=C/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LS extends xo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new en(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new B_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends LS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class k_ extends en{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class DS extends en{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ia{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=1-a;const d=l*f+c*p+h*g+u*_,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const P=Math.sqrt(x),A=Math.atan2(P,d*v);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}const y=a*v;if(l=l*m+f*y,c=c*m+p*y,h=h*m+g*y,u=u*m+_*y,m===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-a*p,e[t+2]=c*g+h*p+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),u=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(km.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(km.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*t-s*r),u=2*(s*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pu.copy(this).projectOnVector(e),this.sub(Pu)}reflect(e){return this.sub(Pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pu=new D,km=new Ia;class ns{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(s,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),el.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),el.copy(i.boundingBox)),el.applyMatrix4(e.matrixWorld),this.union(el)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),tl.subVectors(this.max,Io),cs.subVectors(e.a,Io),us.subVectors(e.b,Io),hs.subVectors(e.c,Io),ji.subVectors(us,cs),Yi.subVectors(hs,us),Cr.subVectors(cs,hs);let t=[0,-ji.z,ji.y,0,-Yi.z,Yi.y,0,-Cr.z,Cr.y,ji.z,0,-ji.x,Yi.z,0,-Yi.x,Cr.z,0,-Cr.x,-ji.y,ji.x,0,-Yi.y,Yi.x,0,-Cr.y,Cr.x,0];return!Lu(t,cs,us,hs,tl)||(t=[1,0,0,0,1,0,0,0,1],!Lu(t,cs,us,hs,tl))?!1:(nl.crossVectors(ji,Yi),t=[nl.x,nl.y,nl.z],Lu(t,cs,us,hs,tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _i=[new D,new D,new D,new D,new D,new D,new D,new D],$n=new D,el=new ns,cs=new D,us=new D,hs=new D,ji=new D,Yi=new D,Cr=new D,Io=new D,tl=new D,nl=new D,br=new D;function Lu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){br.fromArray(n,s);const a=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),l=e.dot(br),c=t.dot(br),h=i.dot(br);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const IS=new ns,Uo=new D,Du=new D;class is{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):IS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const t=Uo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Uo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Du)),this.expandByPoint(Uo.copy(e.center).sub(Du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new D,Iu=new D,il=new D,qi=new D,Uu=new D,rl=new D,Nu=new D;class Zd{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Iu.copy(e).add(t).multiplyScalar(.5),il.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(Iu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(il),a=qi.dot(this.direction),l=-qi.dot(il),c=qi.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Iu).addScaledVector(il,f),p}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),r=xi.dot(xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,i,r,s){Uu.subVectors(t,e),rl.subVectors(i,e),Nu.crossVectors(Uu,rl);let o=this.direction.dot(Nu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,e);const l=a*this.direction.dot(rl.crossVectors(qi,rl));if(l<0)return null;const c=a*this.direction.dot(Uu.cross(qi));if(c<0||l+c>o)return null;const h=-a*qi.dot(Nu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,s,o,a,l,c,h,u,f,p,g,_,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,h,u,f,p,g,_,m)}set(e,t,i,r,s,o,a,l,c,h,u,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/fs.setFromMatrixColumn(e,0).length(),s=1/fs.setFromMatrixColumn(e,1).length(),o=1/fs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,g=c*h,_=c*u;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,g=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(US,e,NS)}lookAt(e,t,i){const r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ki.crossVectors(i,Sn),Ki.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ki.crossVectors(i,Sn)),Ki.normalize(),sl.crossVectors(Sn,Ki),r[0]=Ki.x,r[4]=sl.x,r[8]=Sn.x,r[1]=Ki.y,r[5]=sl.y,r[9]=Sn.y,r[2]=Ki.z,r[6]=sl.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],v=i[3],x=i[7],y=i[11],P=i[15],A=r[0],T=r[4],C=r[8],E=r[12],M=r[1],L=r[5],B=r[9],z=r[13],$=r[2],q=r[6],X=r[10],J=r[14],I=r[3],j=r[7],Q=r[11],ae=r[15];return s[0]=o*A+a*M+l*$+c*I,s[4]=o*T+a*L+l*q+c*j,s[8]=o*C+a*B+l*X+c*Q,s[12]=o*E+a*z+l*J+c*ae,s[1]=h*A+u*M+f*$+p*I,s[5]=h*T+u*L+f*q+p*j,s[9]=h*C+u*B+f*X+p*Q,s[13]=h*E+u*z+f*J+p*ae,s[2]=g*A+_*M+m*$+d*I,s[6]=g*T+_*L+m*q+d*j,s[10]=g*C+_*B+m*X+d*Q,s[14]=g*E+_*z+m*J+d*ae,s[3]=v*A+x*M+y*$+P*I,s[7]=v*T+x*L+y*q+P*j,s[11]=v*C+x*B+y*X+P*Q,s[15]=v*E+x*z+y*J+P*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*l*u-r*c*u-s*a*f+i*c*f+r*a*p-i*l*p)+_*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*h-s*l*h)+m*(+t*c*u-t*a*p-s*o*u+i*o*p+s*a*h-i*c*h)+d*(-r*a*h-t*l*u+t*a*f+r*o*u-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],v=u*m*c-_*f*c+_*l*p-a*m*p-u*l*d+a*f*d,x=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,y=h*_*c-g*u*c+g*a*p-o*_*p-h*a*d+o*u*d,P=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,A=t*v+i*x+r*y+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(_*f*s-u*m*s-_*r*p+i*m*p+u*r*d-i*f*d)*T,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*d+i*l*d)*T,e[3]=(u*l*s-a*f*s-u*r*c+i*f*c+a*r*p-i*l*p)*T,e[4]=x*T,e[5]=(h*m*s-g*f*s+g*r*p-t*m*p-h*r*d+t*f*d)*T,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*d-t*l*d)*T,e[7]=(o*f*s-h*l*s+h*r*c-t*f*c-o*r*p+t*l*p)*T,e[8]=y*T,e[9]=(g*u*s-h*_*s-g*i*p+t*_*p+h*i*d-t*u*d)*T,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*d+t*a*d)*T,e[11]=(h*a*s-o*u*s-h*i*c+t*u*c+o*i*p-t*a*p)*T,e[12]=P*T,e[13]=(h*_*r-g*u*r+g*i*f-t*_*f-h*i*m+t*u*m)*T,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*T,e[15]=(o*u*r-h*a*r+h*i*l-t*u*l-o*i*f+t*a*f)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,f=s*c,p=s*h,g=s*u,_=o*h,m=o*u,d=a*u,v=l*c,x=l*h,y=l*u,P=i.x,A=i.y,T=i.z;return r[0]=(1-(_+d))*P,r[1]=(p+y)*P,r[2]=(g-x)*P,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(f+d))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(g+x)*T,r[9]=(m-v)*T,r[10]=(1-(f+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=fs.set(r[0],r[1],r[2]).length();const o=fs.set(r[4],r[5],r[6]).length(),a=fs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],jn.copy(this);const c=1/s,h=1/o,u=1/a;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=u,jn.elements[9]*=u,jn.elements[10]*=u,t.setFromRotationMatrix(jn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ri){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(a===Ri)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ac)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ri){const l=this.elements,c=1/(t-e),h=1/(i-r),u=1/(o-s),f=(t+e)*c,p=(i+r)*h;let g,_;if(a===Ri)g=(o+s)*u,_=-2*u;else if(a===Ac)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const fs=new D,jn=new ht,US=new D(0,0,0),NS=new D(1,1,1),Ki=new D,sl=new D,Sn=new D,zm=new ht,Gm=new Ia;class Gi{constructor(e=0,t=0,i=0,r=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gm.setFromEuler(this),this.setFromQuaternion(Gm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class z_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FS=0;const Hm=new D,ds=new Ia,yi=new ht,ol=new D,No=new D,OS=new D,BS=new Ia,Vm=new D(1,0,0),Wm=new D(0,1,0),Xm=new D(0,0,1),$m={type:"added"},kS={type:"removed"},ps={type:"childadded",child:null},Fu={type:"childremoved",child:null};class Vt extends xo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new D,t=new Gi,i=new Ia,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Be}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new z_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Vm,e)}rotateY(e){return this.rotateOnAxis(Wm,e)}rotateZ(e){return this.rotateOnAxis(Xm,e)}translateOnAxis(e,t){return Hm.copy(e).applyQuaternion(this.quaternion),this.position.add(Hm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vm,e)}translateY(e){return this.translateOnAxis(Wm,e)}translateZ(e){return this.translateOnAxis(Xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ol.copy(e):ol.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(No,ol,this.up):yi.lookAt(ol,No,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),ds.setFromRotationMatrix(yi),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($m),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kS),Fu.child=e,this.dispatchEvent(Fu),Fu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($m),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,OS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,BS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new D(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new D,Mi=new D,Ou=new D,Si=new D,ms=new D,gs=new D,jm=new D,Bu=new D,ku=new D,zu=new D,Gu=new Pt,Hu=new Pt,Vu=new Pt;class An{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yn.subVectors(e,t),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yn.subVectors(r,t),Mi.subVectors(i,t),Ou.subVectors(e,t);const o=Yn.dot(Yn),a=Yn.dot(Mi),l=Yn.dot(Ou),c=Mi.dot(Mi),h=Mi.dot(Ou),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Gu.setScalar(0),Hu.setScalar(0),Vu.setScalar(0),Gu.fromBufferAttribute(e,t),Hu.fromBufferAttribute(e,i),Vu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Gu,s.x),o.addScaledVector(Hu,s.y),o.addScaledVector(Vu,s.z),o}static isFrontFacing(e,t,i,r){return Yn.subVectors(i,t),Mi.subVectors(e,t),Yn.cross(Mi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Yn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return An.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ms.subVectors(r,i),gs.subVectors(s,i),Bu.subVectors(e,i);const l=ms.dot(Bu),c=gs.dot(Bu);if(l<=0&&c<=0)return t.copy(i);ku.subVectors(e,r);const h=ms.dot(ku),u=gs.dot(ku);if(h>=0&&u<=h)return t.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ms,o);zu.subVectors(e,s);const p=ms.dot(zu),g=gs.dot(zu);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(gs,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return jm.subVectors(s,r),a=(u-h)/(u-h+(p-g)),t.copy(r).addScaledVector(jm,a);const d=1/(m+_+f);return o=_*d,a=f*d,t.copy(i).addScaledVector(ms,o).addScaledVector(gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const G_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},al={h:0,s:0,l:0};function Wu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class se{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ye.workingColorSpace){if(e=ES(e,1),t=mn(t,0,1),i=mn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Wu(o,s,e+1/3),this.g=Wu(o,s,e),this.b=Wu(o,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,t=Tn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const i=G_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return Ye.fromWorkingColorSpace(Kt.copy(this),e),Math.round(mn(Kt.r*255,0,255))*65536+Math.round(mn(Kt.g*255,0,255))*256+Math.round(mn(Kt.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Kt.copy(this),t);const i=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Tn){Ye.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,i=Kt.g,r=Kt.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(al);const i=Cu(Zi.h,al.h,t),r=Cu(Zi.s,al.s,t),s=Cu(Zi.l,al.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new se;se.NAMES=G_;let zS=0;class rs extends xo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=gr(),this.name="",this.blending=Ks,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sf,this.blendDst=of,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==xr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sf&&(i.blendSrc=this.blendSrc),this.blendDst!==of&&(i.blendDst=this.blendDst),this.blendEquation!==kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(i.stencilFail=this.stencilFail),this.stencilZFail!==as&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Lt extends rs{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=x_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new D,ll=new Te;class Ne{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wf,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ll.fromBufferAttribute(this,t),ll.applyMatrix3(e),this.setXY(t,ll.x,ll.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wf&&(e.usage=this.usage),e}}class H_ extends Ne{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class V_ extends Ne{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class nt extends Ne{constructor(e,t,i){super(new Float32Array(e),t,i)}}let GS=0;const Nn=new ht,Xu=new Vt,vs=new D,En=new ns,Fo=new ns,Bt=new D;class Le extends xo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(O_(e)?V_:H_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return Xu.lookAt(e),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nt(i,3))}else{for(let i=0,r=t.count;i<r;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Fo.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(En.min,Fo.min),En.expandByPoint(Bt),Bt.addVectors(En.max,Fo.max),En.expandByPoint(Bt)):(En.expandByPoint(Fo.min),En.expandByPoint(Fo.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Bt.fromBufferAttribute(a,c),l&&(vs.fromBufferAttribute(e,c),Bt.add(vs)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new D,l[C]=new D;const c=new D,h=new D,u=new D,f=new Te,p=new Te,g=new Te,_=new D,m=new D;function d(C,E,M){c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,E),u.fromBufferAttribute(i,M),f.fromBufferAttribute(s,C),p.fromBufferAttribute(s,E),g.fromBufferAttribute(s,M),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(L),a[C].add(_),a[E].add(_),a[M].add(_),l[C].add(m),l[E].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,E=v.length;C<E;++C){const M=v[C],L=M.start,B=M.count;for(let z=L,$=L+B;z<$;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new D,y=new D,P=new D,A=new D;function T(C){P.fromBufferAttribute(r,C),A.copy(P);const E=a[C];x.copy(E),x.sub(P.multiplyScalar(P.dot(E))).normalize(),y.crossVectors(A,E);const L=y.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,L)}for(let C=0,E=v.length;C<E;++C){const M=v[C],L=M.start,B=M.count;for(let z=L,$=L+B;z<$;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ne(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Ne(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Le,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ym=new ht,Rr=new Zd,cl=new is,qm=new D,ul=new D,hl=new D,fl=new D,$u=new D,dl=new D,Km=new D,pl=new D;class We extends Vt{constructor(e=new Le,t=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){dl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&($u.fromBufferAttribute(u,e),o?dl.addScaledVector($u,h):dl.addScaledVector($u.sub(t),h))}t.add(dl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(cl.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(cl,qm)===null||Rr.origin.distanceToSquared(qm)>(e.far-e.near)**2))&&(Ym.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Ym),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,P=x;y<P;y+=3){const A=a.getX(y),T=a.getX(y+1),C=a.getX(y+2);r=ml(this,d,e,i,c,h,u,A,T,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=ml(this,o,e,i,c,h,u,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,P=x;y<P;y+=3){const A=y,T=y+1,C=y+2;r=ml(this,d,e,i,c,h,u,A,T,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=m,x=m+1,y=m+2;r=ml(this,o,e,i,c,h,u,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function HS(n,e,t,i,r,s,o,a){let l;if(e.side===Jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===xr,a),l===null)return null;pl.copy(a),pl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(pl);return c<t.near||c>t.far?null:{distance:c,point:pl.clone(),object:n}}function ml(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ul),n.getVertexPosition(l,hl),n.getVertexPosition(c,fl);const h=HS(n,e,t,i,ul,hl,fl,Km);if(h){const u=new D;An.getBarycoord(Km,ul,hl,fl,u),r&&(h.uv=An.getInterpolatedAttribute(r,a,l,c,u,new Te)),s&&(h.uv1=An.getInterpolatedAttribute(s,a,l,c,u,new Te)),o&&(h.normal=An.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};An.getNormal(ul,hl,fl,f.normal),h.face=f,h.barycoord=u}return h}class Tr extends Le{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2));function g(_,m,d,v,x,y,P,A,T,C,E){const M=y/T,L=P/C,B=y/2,z=P/2,$=A/2,q=T+1,X=C+1;let J=0,I=0;const j=new D;for(let Q=0;Q<X;Q++){const ae=Q*L-z;for(let Se=0;Se<q;Se++){const Qe=Se*M-B;j[_]=Qe*v,j[m]=ae*x,j[d]=$,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[d]=A>0?1:-1,h.push(j.x,j.y,j.z),u.push(Se/T),u.push(1-Q/C),J+=1}}for(let Q=0;Q<C;Q++)for(let ae=0;ae<T;ae++){const Se=f+ae+q*Q,Qe=f+ae+q*(Q+1),W=f+(ae+1)+q*(Q+1),ne=f+(ae+1)+q*Q;l.push(Se,Qe,ne),l.push(Qe,W,ne),I+=6}a.addGroup(p,I,E),p+=I,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ho(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function an(n){const e={};for(let t=0;t<n.length;t++){const i=ho(n[t]);for(const r in i)e[r]=i[r]}return e}function VS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function W_(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const Ca={clone:ho,merge:an};var WS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends rs{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WS,this.fragmentShader=XS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=VS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class X_ extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new D,Zm=new Te,Qm=new Te;class Bn extends X_{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xf*2*Math.atan(Math.tan(Jl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,Zm,Qm),t.subVectors(Qm,Zm)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _s=-90,xs=1;class $S extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bn(_s,xs,e,t);r.layers=this.layers,this.add(r);const s=new Bn(_s,xs,e,t);s.layers=this.layers,this.add(s);const o=new Bn(_s,xs,e,t);o.layers=this.layers,this.add(o);const a=new Bn(_s,xs,e,t);a.layers=this.layers,this.add(a);const l=new Bn(_s,xs,e,t);l.layers=this.layers,this.add(l);const c=new Bn(_s,xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ac)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class $_ extends en{constructor(e,t,i,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ao,super(e,t,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jS extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new $_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Tr(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:ho(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Li});s.uniforms.tEquirect.value=t;const o=new We(r,s),a=t.minFilter;return t.minFilter===Xr&&(t.minFilter=vn),new $S(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ju=new D,YS=new D,qS=new Be;class Nr{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ju.subVectors(i,t).cross(YS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ju),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||qS.getNormalMatrix(e),r=this.coplanarPoint(ju).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new is,gl=new D;class j_{constructor(e=new Nr,t=new Nr,i=new Nr,r=new Nr,s=new Nr,o=new Nr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ri){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],u=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,f-c,m-p,y-d).normalize(),i[1].setComponents(l+s,f+c,m+p,y+d).normalize(),i[2].setComponents(l+o,f+h,m+g,y+v).normalize(),i[3].setComponents(l-o,f-h,m-g,y-v).normalize(),i[4].setComponents(l-a,f-u,m-_,y-x).normalize(),t===Ri)i[5].setComponents(l+a,f+u,m+_,y+x).normalize();else if(t===Ac)i[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(gl.x=r.normal.x>0?e.max.x:e.min.x,gl.y=r.normal.y>0?e.max.y:e.min.y,gl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Y_(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function KS(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class ii extends Le{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,u=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const v=d*f-o;for(let x=0;x<c;x++){const y=x*u-s;g.push(y,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const x=v+c*d,y=v+c*(d+1),P=v+1+c*(d+1),A=v+1+c*d;p.push(x,y,A),p.push(y,P,A)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.width,e.height,e.widthSegments,e.heightSegments)}}var ZS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,JS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,r1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,o1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,u1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,h1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,v1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,y1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,M1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,S1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,E1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,T1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C1="gl_FragColor = linearToOutputTexel( gl_FragColor );",b1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,P1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,D1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,U1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,k1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,V1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,W1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Y1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,q1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,K1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Z1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,oE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ME=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,NE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,WE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,XE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_w=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ew=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ww=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Aw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:ZS,alphahash_pars_fragment:QS,alphamap_fragment:JS,alphamap_pars_fragment:e1,alphatest_fragment:t1,alphatest_pars_fragment:n1,aomap_fragment:i1,aomap_pars_fragment:r1,batching_pars_vertex:s1,batching_vertex:o1,begin_vertex:a1,beginnormal_vertex:l1,bsdfs:c1,iridescence_fragment:u1,bumpmap_pars_fragment:h1,clipping_planes_fragment:f1,clipping_planes_pars_fragment:d1,clipping_planes_pars_vertex:p1,clipping_planes_vertex:m1,color_fragment:g1,color_pars_fragment:v1,color_pars_vertex:_1,color_vertex:x1,common:y1,cube_uv_reflection_fragment:M1,defaultnormal_vertex:S1,displacementmap_pars_vertex:E1,displacementmap_vertex:w1,emissivemap_fragment:T1,emissivemap_pars_fragment:A1,colorspace_fragment:C1,colorspace_pars_fragment:b1,envmap_fragment:R1,envmap_common_pars_fragment:P1,envmap_pars_fragment:L1,envmap_pars_vertex:D1,envmap_physical_pars_fragment:V1,envmap_vertex:I1,fog_vertex:U1,fog_pars_vertex:N1,fog_fragment:F1,fog_pars_fragment:O1,gradientmap_pars_fragment:B1,lightmap_pars_fragment:k1,lights_lambert_fragment:z1,lights_lambert_pars_fragment:G1,lights_pars_begin:H1,lights_toon_fragment:W1,lights_toon_pars_fragment:X1,lights_phong_fragment:$1,lights_phong_pars_fragment:j1,lights_physical_fragment:Y1,lights_physical_pars_fragment:q1,lights_fragment_begin:K1,lights_fragment_maps:Z1,lights_fragment_end:Q1,logdepthbuf_fragment:J1,logdepthbuf_pars_fragment:eE,logdepthbuf_pars_vertex:tE,logdepthbuf_vertex:nE,map_fragment:iE,map_pars_fragment:rE,map_particle_fragment:sE,map_particle_pars_fragment:oE,metalnessmap_fragment:aE,metalnessmap_pars_fragment:lE,morphinstance_vertex:cE,morphcolor_vertex:uE,morphnormal_vertex:hE,morphtarget_pars_vertex:fE,morphtarget_vertex:dE,normal_fragment_begin:pE,normal_fragment_maps:mE,normal_pars_fragment:gE,normal_pars_vertex:vE,normal_vertex:_E,normalmap_pars_fragment:xE,clearcoat_normal_fragment_begin:yE,clearcoat_normal_fragment_maps:ME,clearcoat_pars_fragment:SE,iridescence_pars_fragment:EE,opaque_fragment:wE,packing:TE,premultiplied_alpha_fragment:AE,project_vertex:CE,dithering_fragment:bE,dithering_pars_fragment:RE,roughnessmap_fragment:PE,roughnessmap_pars_fragment:LE,shadowmap_pars_fragment:DE,shadowmap_pars_vertex:IE,shadowmap_vertex:UE,shadowmask_pars_fragment:NE,skinbase_vertex:FE,skinning_pars_vertex:OE,skinning_vertex:BE,skinnormal_vertex:kE,specularmap_fragment:zE,specularmap_pars_fragment:GE,tonemapping_fragment:HE,tonemapping_pars_fragment:VE,transmission_fragment:WE,transmission_pars_fragment:XE,uv_pars_fragment:$E,uv_pars_vertex:jE,uv_vertex:YE,worldpos_vertex:qE,background_vert:KE,background_frag:ZE,backgroundCube_vert:QE,backgroundCube_frag:JE,cube_vert:ew,cube_frag:tw,depth_vert:nw,depth_frag:iw,distanceRGBA_vert:rw,distanceRGBA_frag:sw,equirect_vert:ow,equirect_frag:aw,linedashed_vert:lw,linedashed_frag:cw,meshbasic_vert:uw,meshbasic_frag:hw,meshlambert_vert:fw,meshlambert_frag:dw,meshmatcap_vert:pw,meshmatcap_frag:mw,meshnormal_vert:gw,meshnormal_frag:vw,meshphong_vert:_w,meshphong_frag:xw,meshphysical_vert:yw,meshphysical_frag:Mw,meshtoon_vert:Sw,meshtoon_frag:Ew,points_vert:ww,points_frag:Tw,shadow_vert:Aw,shadow_frag:Cw,sprite_vert:bw,sprite_frag:Rw},le={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ci={basic:{uniforms:an([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:an([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new se(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:an([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:an([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:an([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new se(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:an([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:an([le.points,le.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:an([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:an([le.common,le.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:an([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:an([le.sprite,le.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:an([le.common,le.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:an([le.lights,le.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ci.physical={uniforms:an([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const vl={r:0,b:0,g:0},Lr=new Gi,Pw=new ht;function Lw(n,e,t,i,r,s,o){const a=new se(0);let l=s===!0?0:1,c,h,u=null,f=0,p=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const y=g(v);y===null?d(a,l):y&&y.isColor&&(d(y,1),x=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){const y=g(x);y&&(y.isCubeTexture||y.mapping===qc)?(h===void 0&&(h=new We(new Tr(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:ho(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Lr.copy(x.backgroundRotation),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pw.makeRotationFromEuler(Lr)),h.material.toneMapped=Ye.getTransfer(y.colorSpace)!==st,(u!==y||f!==y.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,p=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new We(new ii(2,2),new cn({name:"BackgroundMaterial",uniforms:ho(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(y.colorSpace)!==st,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,x){v.getRGB(vl,W_(n)),i.buffers.color.setClear(vl.r,vl.g,vl.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:_,addToRenderList:m}}function Dw(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,L,B,z,$){let q=!1;const X=u(z,B,L);s!==X&&(s=X,c(s.object)),q=p(M,z,B,$),q&&g(M,z,B,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(M,L,B,z),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,L,B){const z=B.wireframe===!0;let $=i[M.id];$===void 0&&($={},i[M.id]=$);let q=$[L.id];q===void 0&&(q={},$[L.id]=q);let X=q[z];return X===void 0&&(X=f(l()),q[z]=X),X}function f(M){const L=[],B=[],z=[];for(let $=0;$<t;$++)L[$]=0,B[$]=0,z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,L,B,z){const $=s.attributes,q=L.attributes;let X=0;const J=B.getAttributes();for(const I in J)if(J[I].location>=0){const Q=$[I];let ae=q[I];if(ae===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),Q===void 0||Q.attribute!==ae||ae&&Q.data!==ae.data)return!0;X++}return s.attributesNum!==X||s.index!==z}function g(M,L,B,z){const $={},q=L.attributes;let X=0;const J=B.getAttributes();for(const I in J)if(J[I].location>=0){let Q=q[I];Q===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor));const ae={};ae.attribute=Q,Q&&Q.data&&(ae.data=Q.data),$[I]=ae,X++}s.attributes=$,s.attributesNum=X,s.index=z}function _(){const M=s.newAttributes;for(let L=0,B=M.length;L<B;L++)M[L]=0}function m(M){d(M,0)}function d(M,L){const B=s.newAttributes,z=s.enabledAttributes,$=s.attributeDivisors;B[M]=1,z[M]===0&&(n.enableVertexAttribArray(M),z[M]=1),$[M]!==L&&(n.vertexAttribDivisor(M,L),$[M]=L)}function v(){const M=s.newAttributes,L=s.enabledAttributes;for(let B=0,z=L.length;B<z;B++)L[B]!==M[B]&&(n.disableVertexAttribArray(B),L[B]=0)}function x(M,L,B,z,$,q,X){X===!0?n.vertexAttribIPointer(M,L,B,$,q):n.vertexAttribPointer(M,L,B,z,$,q)}function y(M,L,B,z){_();const $=z.attributes,q=B.getAttributes(),X=L.defaultAttributeValues;for(const J in q){const I=q[J];if(I.location>=0){let j=$[J];if(j===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(j=M.instanceColor)),j!==void 0){const Q=j.normalized,ae=j.itemSize,Se=e.get(j);if(Se===void 0)continue;const Qe=Se.buffer,W=Se.type,ne=Se.bytesPerElement,me=W===n.INT||W===n.UNSIGNED_INT||j.gpuType===Wd;if(j.isInterleavedBufferAttribute){const oe=j.data,Pe=oe.stride,Ue=j.offset;if(oe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<I.locationSize;Ge++)d(I.location+Ge,oe.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ge=0;Ge<I.locationSize;Ge++)m(I.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let Ge=0;Ge<I.locationSize;Ge++)x(I.location+Ge,ae/I.locationSize,W,Q,Pe*ne,(Ue+ae/I.locationSize*Ge)*ne,me)}else{if(j.isInstancedBufferAttribute){for(let oe=0;oe<I.locationSize;oe++)d(I.location+oe,j.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let oe=0;oe<I.locationSize;oe++)m(I.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let oe=0;oe<I.locationSize;oe++)x(I.location+oe,ae/I.locationSize,W,Q,ae*ne,ae/I.locationSize*oe*ne,me)}}else if(X!==void 0){const Q=X[J];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(I.location,Q);break;case 3:n.vertexAttrib3fv(I.location,Q);break;case 4:n.vertexAttrib4fv(I.location,Q);break;default:n.vertexAttrib1fv(I.location,Q)}}}}v()}function P(){C();for(const M in i){const L=i[M];for(const B in L){const z=L[B];for(const $ in z)h(z[$].object),delete z[$];delete L[B]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const B in L){const z=L[B];for(const $ in z)h(z[$].object),delete z[$];delete L[B]}delete i[M.id]}function T(M){for(const L in i){const B=i[L];if(B[M.id]===void 0)continue;const z=B[M.id];for(const $ in z)h(z[$].object),delete z[$];delete B[M.id]}}function C(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Iw(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}function l(c,h,u,f){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Uw(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Qn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==zi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==fi&&!C)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:P,maxSamples:A}}function Nw(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Nr,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||r;return r=f,i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const v=s?0:i,x=v*4;let y=d.clippingState||null;l.value=y,y=h(g,f,x,p);for(let P=0;P!==x;++P)y[P]=t[P];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,y=p;x!==_;++x,y+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Fw(n){let e=new WeakMap;function t(o,a){return a===pf?o.mapping=ao:a===mf&&(o.mapping=lo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===pf||a===mf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jS(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class q_ extends X_{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vs=4,Jm=[.125,.215,.35,.446,.526,.582],zr=20,Yu=new q_,e0=new se;let qu=null,Ku=0,Zu=0,Qu=!1;const Fr=(1+Math.sqrt(5))/2,ys=1/Fr,t0=[new D(-Fr,ys,0),new D(Fr,ys,0),new D(-ys,0,Fr),new D(ys,0,Fr),new D(0,Fr,-ys),new D(0,Fr,ys),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class n0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){qu=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qu,Ku,Zu),this._renderer.xr.enabled=Qu,e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ao||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qu=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Di,format:Qn,colorSpace:_o,depthBuffer:!1},r=i0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=i0(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ow(s)),this._blurMaterial=Bw(s,e,t)}return r}_compileMaterial(e){const t=new We(this._lodPlanes[0],e);this._renderer.compile(t,Yu)}_sceneToCubeUV(e,t,i,r){const a=new Bn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(e0),h.toneMapping=mr,h.autoClear=!1;const p=new Lt({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new We(new Tr,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(e0),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;_l(r,v*x,d>2?x:0,x,x),h.setRenderTarget(r),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ao||e.mapping===lo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=s0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=r0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new We(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;_l(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Yu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=t0[(r-s-1)%t0.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new We(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*zr-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):zr;m>zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zr}`);const d=[];let v=0;for(let T=0;T<zr;++T){const C=T/_,E=Math.exp(-C*C/2);d.push(E),T===0?v+=E:T<m&&(v+=2*E)}for(let T=0;T<d.length;T++)d[T]=d[T]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const y=this._sizeLods[r],P=3*y*(r>x-Vs?r-x+Vs:0),A=4*(this._cubeSize-y);_l(t,P,A,3*y,2*y),l.setRenderTarget(t),l.render(u,Yu)}}function Ow(n){const e=[],t=[],i=[];let r=n;const s=n-Vs+1+Jm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Vs?l=Jm[o-n+Vs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,C=A>2?0:-1,E=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];v.set(E,_*g*A),x.set(f,m*g*A);const M=[A,A,A,A,A,A];y.set(M,d*g*A)}const P=new Le;P.setAttribute("position",new Ne(v,_)),P.setAttribute("uv",new Ne(x,m)),P.setAttribute("faceIndex",new Ne(y,d)),e.push(P),r>Vs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function i0(n,e,t){const i=new ti(n,e,t);return i.texture.mapping=qc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _l(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Bw(n,e,t){const i=new Float32Array(zr),r=new D(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function r0(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function s0(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Qd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===pf||l===mf,h=l===ao||l===lo;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new n0(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(t===null&&(t=new n0(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function zw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Zo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Gw(n,e,t,i){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,y=v.length;x<y;x+=3){const P=v[x+0],A=v[x+1],T=v[x+2];f.push(P,A,A,T,T,P)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const P=x+0,A=x+1,T=x+2;f.push(P,A,A,T,T,P)}}else return;const m=new(O_(f)?V_:H_)(f,1);m.version=_;const d=s.get(u);d&&e.remove(d),s.set(u,m)}function h(u){const f=s.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Hw(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function u(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v]*_[v];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Vw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ww(n,e,t){const i=new WeakMap,r=new Pt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let M=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let P=a.attributes.position.count*y,A=1;P>e.maxTextureSize&&(A=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*A*4*u),C=new k_(T,P,A,u);C.type=fi,C.needsUpdate=!0;const E=y*4;for(let L=0;L<u;L++){const B=d[L],z=v[L],$=x[L],q=P*A*4*L;for(let X=0;X<B.count;X++){const J=X*E;g===!0&&(r.fromBufferAttribute(B,X),T[q+J+0]=r.x,T[q+J+1]=r.y,T[q+J+2]=r.z,T[q+J+3]=0),_===!0&&(r.fromBufferAttribute(z,X),T[q+J+4]=r.x,T[q+J+5]=r.y,T[q+J+6]=r.z,T[q+J+7]=0),m===!0&&(r.fromBufferAttribute($,X),T[q+J+8]=r.x,T[q+J+9]=r.y,T[q+J+10]=r.z,T[q+J+11]=$.itemSize===4?r.w:1)}}f={count:u,texture:C,size:new Te(P,A)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Xw(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class K_ extends en{constructor(e,t,i,r,s,o,a,l,c,h=Zs){if(h!==Zs&&h!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Zs&&(i=Jr),i===void 0&&h===uo&&(i=co),super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Rn,this.minFilter=l!==void 0?l:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Z_=new en,o0=new K_(1,1),Q_=new k_,J_=new DS,ex=new $_,a0=[],l0=[],c0=new Float32Array(16),u0=new Float32Array(9),h0=new Float32Array(4);function yo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=a0[r];if(s===void 0&&(s=new Float32Array(r),a0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ft(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Zc(n,e){let t=l0[e];t===void 0&&(t=new Int32Array(e),l0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $w(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function Yw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function qw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function Kw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;h0.set(i),n.uniformMatrix2fv(this.addr,!1,h0),Ot(t,i)}}function Zw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;u0.set(i),n.uniformMatrix3fv(this.addr,!1,u0),Ot(t,i)}}function Qw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ft(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,i))return;c0.set(i),n.uniformMatrix4fv(this.addr,!1,c0),Ot(t,i)}}function Jw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function eT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function tT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function nT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function iT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function rT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function sT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function oT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function aT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(o0.compareFunction=F_,s=o0):s=Z_,t.setTexture2D(e||s,r)}function lT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||J_,r)}function cT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ex,r)}function uT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Q_,r)}function hT(n){switch(n){case 5126:return $w;case 35664:return jw;case 35665:return Yw;case 35666:return qw;case 35674:return Kw;case 35675:return Zw;case 35676:return Qw;case 5124:case 35670:return Jw;case 35667:case 35671:return eT;case 35668:case 35672:return tT;case 35669:case 35673:return nT;case 5125:return iT;case 36294:return rT;case 36295:return sT;case 36296:return oT;case 35678:case 36198:case 36298:case 36306:case 35682:return aT;case 35679:case 36299:case 36307:return lT;case 35680:case 36300:case 36308:case 36293:return cT;case 36289:case 36303:case 36311:case 36292:return uT}}function fT(n,e){n.uniform1fv(this.addr,e)}function dT(n,e){const t=yo(e,this.size,2);n.uniform2fv(this.addr,t)}function pT(n,e){const t=yo(e,this.size,3);n.uniform3fv(this.addr,t)}function mT(n,e){const t=yo(e,this.size,4);n.uniform4fv(this.addr,t)}function gT(n,e){const t=yo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vT(n,e){const t=yo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function _T(n,e){const t=yo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xT(n,e){n.uniform1iv(this.addr,e)}function yT(n,e){n.uniform2iv(this.addr,e)}function MT(n,e){n.uniform3iv(this.addr,e)}function ST(n,e){n.uniform4iv(this.addr,e)}function ET(n,e){n.uniform1uiv(this.addr,e)}function wT(n,e){n.uniform2uiv(this.addr,e)}function TT(n,e){n.uniform3uiv(this.addr,e)}function AT(n,e){n.uniform4uiv(this.addr,e)}function CT(n,e,t){const i=this.cache,r=e.length,s=Zc(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Z_,s[o])}function bT(n,e,t){const i=this.cache,r=e.length,s=Zc(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||J_,s[o])}function RT(n,e,t){const i=this.cache,r=e.length,s=Zc(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ex,s[o])}function PT(n,e,t){const i=this.cache,r=e.length,s=Zc(t,r);Ft(i,s)||(n.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Q_,s[o])}function LT(n){switch(n){case 5126:return fT;case 35664:return dT;case 35665:return pT;case 35666:return mT;case 35674:return gT;case 35675:return vT;case 35676:return _T;case 5124:case 35670:return xT;case 35667:case 35671:return yT;case 35668:case 35672:return MT;case 35669:case 35673:return ST;case 5125:return ET;case 36294:return wT;case 36295:return TT;case 36296:return AT;case 35678:case 36198:case 36298:case 36306:case 35682:return CT;case 35679:case 36299:case 36307:return bT;case 35680:case 36300:case 36308:case 36293:return RT;case 36289:case 36303:case 36311:case 36292:return PT}}class DT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=hT(t.type)}}class IT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LT(t.type)}}class UT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Ju=/(\w+)(\])?(\[|\.)?/g;function f0(n,e){n.seq.push(e),n.map[e.id]=e}function NT(n,e,t){const i=n.name,r=i.length;for(Ju.lastIndex=0;;){const s=Ju.exec(i),o=Ju.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){f0(t,c===void 0?new DT(a,n,e):new IT(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new UT(a),f0(t,u)),t=u}}}class ec{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);NT(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function d0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const FT=37297;let OT=0;function BT(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const p0=new Be;function kT(n){Ye._getMatrix(p0,Ye.workingColorSpace,n);const e=`mat3( ${p0.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(n)){case Kc:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function m0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+BT(n.getShaderSource(e),o)}else return r}function zT(n,e){const t=kT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function GT(n,e){let t;switch(e){case y_:t="Linear";break;case M_:t="Reinhard";break;case S_:t="Cineon";break;case E_:t="ACESFilmic";break;case w_:t="AgX";break;case T_:t="Neutral";break;case uS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xl=new D;function HT(){Ye.getLuminanceCoefficients(xl);const n=xl.x.toFixed(4),e=xl.y.toFixed(4),t=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function WT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function XT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Qo(n){return n!==""}function g0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function v0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $T=/^[ \t]*#include +<([\w\d./]+)>/gm;function $f(n){return n.replace($T,YT)}const jT=new Map;function YT(n,e){let t=ze[e];if(t===void 0){const i=jT.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $f(t)}const qT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _0(n){return n.replace(qT,KT)}function KT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function x0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ZT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===__?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===VM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function QT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ao:case lo:e="ENVMAP_TYPE_CUBE";break;case qc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case lo:e="ENVMAP_MODE_REFRACTION";break}return e}function eA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case x_:e="ENVMAP_BLENDING_MULTIPLY";break;case lS:e="ENVMAP_BLENDING_MIX";break;case cS:e="ENVMAP_BLENDING_ADD";break}return e}function tA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function nA(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ZT(t),c=QT(t),h=JT(t),u=eA(t),f=tA(t),p=VT(t),g=WT(s),_=r.createProgram();let m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qo).join(`
`),d.length>0&&(d+=`
`)):(m=[x0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),d=[x0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mr?"#define TONE_MAPPING":"",t.toneMapping!==mr?ze.tonemapping_pars_fragment:"",t.toneMapping!==mr?GT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,zT("linearToOutputTexel",t.outputColorSpace),HT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qo).join(`
`)),o=$f(o),o=g0(o,t),o=v0(o,t),a=$f(a),a=g0(a,t),a=v0(a,t),o=_0(o),a=_0(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=v+m+o,y=v+d+a,P=d0(r,r.VERTEX_SHADER,x),A=d0(r,r.FRAGMENT_SHADER,y);r.attachShader(_,P),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(L){if(n.debug.checkShaderErrors){const B=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(P).trim(),$=r.getShaderInfoLog(A).trim();let q=!0,X=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,P,A);else{const J=m0(r,P,"vertex"),I=m0(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+J+`
`+I)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||$==="")&&(X=!1);X&&(L.diagnostics={runnable:q,programLog:B,vertexShader:{log:z,prefix:m},fragmentShader:{log:$,prefix:d}})}r.deleteShader(P),r.deleteShader(A),C=new ec(r,_),E=XT(r,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,FT)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=OT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}let iA=0;class rA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new sA(e),t.set(e,i)),i}}class sA{constructor(e){this.id=iA++,this.code=e,this.usedTimes=0}}function oA(n,e,t,i,r,s,o){const a=new z_,l=new rA,c=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,L,B,z){const $=B.fog,q=z.geometry,X=E.isMeshStandardMaterial?B.environment:null,J=(E.isMeshStandardMaterial?t:e).get(E.envMap||X),I=J&&J.mapping===qc?J.image.height:null,j=g[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const Q=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ae=Q!==void 0?Q.length:0;let Se=0;q.morphAttributes.position!==void 0&&(Se=1),q.morphAttributes.normal!==void 0&&(Se=2),q.morphAttributes.color!==void 0&&(Se=3);let Qe,W,ne,me;if(j){const rt=ci[j];Qe=rt.vertexShader,W=rt.fragmentShader}else Qe=E.vertexShader,W=E.fragmentShader,l.update(E),ne=l.getVertexShaderID(E),me=l.getFragmentShaderID(E);const oe=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),Ue=z.isInstancedMesh===!0,Ge=z.isBatchedMesh===!0,Mt=!!E.map,qe=!!E.matcap,Ct=!!J,O=!!E.aoMap,In=!!E.lightMap,Xe=!!E.bumpMap,$e=!!E.normalMap,be=!!E.displacementMap,dt=!!E.emissiveMap,Ce=!!E.metalnessMap,b=!!E.roughnessMap,S=E.anisotropy>0,k=E.clearcoat>0,K=E.dispersion>0,ee=E.iridescence>0,Y=E.sheen>0,Ee=E.transmission>0,ue=S&&!!E.anisotropyMap,ge=k&&!!E.clearcoatMap,Ke=k&&!!E.clearcoatNormalMap,ie=k&&!!E.clearcoatRoughnessMap,ve=ee&&!!E.iridescenceMap,Re=ee&&!!E.iridescenceThicknessMap,De=Y&&!!E.sheenColorMap,_e=Y&&!!E.sheenRoughnessMap,je=!!E.specularMap,ke=!!E.specularColorMap,lt=!!E.specularIntensityMap,U=Ee&&!!E.transmissionMap,ce=Ee&&!!E.thicknessMap,V=!!E.gradientMap,Z=!!E.alphaMap,de=E.alphaTest>0,he=!!E.alphaHash,Fe=!!E.extensions;let Tt=mr;E.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Tt=n.toneMapping);const $t={shaderID:j,shaderType:E.type,shaderName:E.name,vertexShader:Qe,fragmentShader:W,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ge,batchingColor:Ge&&z._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&z.instanceColor!==null,instancingMorph:Ue&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:_o,alphaToCoverage:!!E.alphaToCoverage,map:Mt,matcap:qe,envMap:Ct,envMapMode:Ct&&J.mapping,envMapCubeUVHeight:I,aoMap:O,lightMap:In,bumpMap:Xe,normalMap:$e,displacementMap:f&&be,emissiveMap:dt,normalMapObjectSpace:$e&&E.normalMapType===mS,normalMapTangentSpace:$e&&E.normalMapType===pS,metalnessMap:Ce,roughnessMap:b,anisotropy:S,anisotropyMap:ue,clearcoat:k,clearcoatMap:ge,clearcoatNormalMap:Ke,clearcoatRoughnessMap:ie,dispersion:K,iridescence:ee,iridescenceMap:ve,iridescenceThicknessMap:Re,sheen:Y,sheenColorMap:De,sheenRoughnessMap:_e,specularMap:je,specularColorMap:ke,specularIntensityMap:lt,transmission:Ee,transmissionMap:U,thicknessMap:ce,gradientMap:V,opaque:E.transparent===!1&&E.blending===Ks&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:de,alphaHash:he,combine:E.combine,mapUv:Mt&&_(E.map.channel),aoMapUv:O&&_(E.aoMap.channel),lightMapUv:In&&_(E.lightMap.channel),bumpMapUv:Xe&&_(E.bumpMap.channel),normalMapUv:$e&&_(E.normalMap.channel),displacementMapUv:be&&_(E.displacementMap.channel),emissiveMapUv:dt&&_(E.emissiveMap.channel),metalnessMapUv:Ce&&_(E.metalnessMap.channel),roughnessMapUv:b&&_(E.roughnessMap.channel),anisotropyMapUv:ue&&_(E.anisotropyMap.channel),clearcoatMapUv:ge&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(E.sheenRoughnessMap.channel),specularMapUv:je&&_(E.specularMap.channel),specularColorMapUv:ke&&_(E.specularColorMap.channel),specularIntensityMapUv:lt&&_(E.specularIntensityMap.channel),transmissionMapUv:U&&_(E.transmissionMap.channel),thicknessMapUv:ce&&_(E.thicknessMap.channel),alphaMapUv:Z&&_(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&($e||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!q.attributes.uv&&(Mt||Z),fog:!!$,useFog:E.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pe,skinning:z.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Mt&&E.map.isVideoTexture===!0&&Ye.getTransfer(E.map.colorSpace)===st,decodeVideoTextureEmissive:dt&&E.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(E.emissiveMap.colorSpace)===st,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Qt,flipSided:E.side===Jt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Fe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&E.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return $t.vertexUv1s=c.has(1),$t.vertexUv2s=c.has(2),$t.vertexUv3s=c.has(3),c.clear(),$t}function d(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)M.push(L),M.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(v(M,E),x(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function x(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const M=g[E.type];let L;if(M){const B=ci[M];L=Ca.clone(B.uniforms)}else L=E.uniforms;return L}function P(E,M){let L;for(let B=0,z=h.length;B<z;B++){const $=h[B];if($.cacheKey===M){L=$,++L.usedTimes;break}}return L===void 0&&(L=new nA(n,M,E,s),h.push(L)),L}function A(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function T(E){l.remove(E)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:P,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:C}}function aA(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function lA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function y0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function M0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u,f,p,g,_,m){let d=n[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),e++,d}function a(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||lA),i.length>1&&i.sort(f||y0),r.length>1&&r.sort(f||y0)}function h(){for(let u=e,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function cA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new M0,n.set(i,[o])):r>=s.length?(o=new M0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function uA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new se};break;case"SpotLight":t={position:new D,direction:new D,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new se,groundColor:new se};break;case"RectAreaLight":t={color:new se,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function hA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let fA=0;function dA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function pA(n){const e=new uA,t=hA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new ht,o=new ht;function a(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,v=0,x=0,y=0,P=0,A=0,T=0;c.sort(dA);for(let E=0,M=c.length;E<M;E++){const L=c[E],B=L.color,z=L.intensity,$=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=B.r*z,u+=B.g*z,f+=B.b*z;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],z);T++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,I=t.get(L);I.shadowIntensity=J.intensity,I.shadowBias=J.bias,I.shadowNormalBias=J.normalBias,I.shadowRadius=J.radius,I.shadowMapSize=J.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=X,p++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(B).multiplyScalar(z),X.distance=$,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[_]=X;const J=L.shadow;if(L.map&&(i.spotLightMap[P]=L.map,P++,J.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[_]=J.matrix,L.castShadow){const I=t.get(L);I.shadowIntensity=J.intensity,I.shadowBias=J.bias,I.shadowNormalBias=J.normalBias,I.shadowRadius=J.radius,I.shadowMapSize=J.mapSize,i.spotShadow[_]=I,i.spotShadowMap[_]=q,y++}_++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(B).multiplyScalar(z),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=X,m++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const J=L.shadow,I=t.get(L);I.shadowIntensity=J.intensity,I.shadowBias=J.bias,I.shadowNormalBias=J.normalBias,I.shadowRadius=J.radius,I.shadowMapSize=J.mapSize,I.shadowCameraNear=J.camera.near,I.shadowCameraFar=J.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=L.shadow.matrix,x++}i.point[g]=X,g++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(z),X.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[d]=X,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==v||C.numPointShadows!==x||C.numSpotShadows!==y||C.numSpotMaps!==P||C.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+P-A,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=v,C.numPointShadows=x,C.numSpotShadows=y,C.numSpotMaps=P,C.numLightProbes=T,i.version=fA++)}function l(c,h){let u=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const x=c[d];if(x.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),u++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function S0(n){const e=new pA(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function mA(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new S0(n),e.set(r,[a])):s>=o.length?(a=new S0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class gA extends rs{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vA extends rs{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _A=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yA(n,e,t){let i=new j_;const r=new Te,s=new Te,o=new Pt,a=new gA({depthPacking:dS}),l=new vA,c={},h=t.maxTextureSize,u={[xr]:Jt,[Jt]:xr,[Qt]:Qt},f=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:_A,fragmentShader:xA}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Le;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new We(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=__;let d=this.type;this.render=function(A,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Li),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const z=d!==wi&&this.type===wi,$=d===wi&&this.type!==wi;for(let q=0,X=A.length;q<X;q++){const J=A[q],I=J.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const j=I.getFrameExtents();if(r.multiply(j),s.copy(I.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/j.x),r.x=s.x*j.x,I.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/j.y),r.y=s.y*j.y,I.mapSize.y=s.y)),I.map===null||z===!0||$===!0){const ae=this.type!==wi?{minFilter:Rn,magFilter:Rn}:{};I.map!==null&&I.map.dispose(),I.map=new ti(r.x,r.y,ae),I.map.texture.name=J.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const Q=I.getViewportCount();for(let ae=0;ae<Q;ae++){const Se=I.getViewport(ae);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),B.viewport(o),I.updateMatrices(J,ae),i=I.getFrustum(),y(T,C,I.camera,J,this.type)}I.isPointLightShadow!==!0&&this.type===wi&&v(I,C),I.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(E,M,L)};function v(A,T){const C=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ti(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,C,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,C,p,_,null)}function x(A,T,C,E){let M=null;const L=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)M=L;else if(M=C.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const B=M.uuid,z=T.uuid;let $=c[B];$===void 0&&($={},c[B]=$);let q=$[z];q===void 0&&(q=M.clone(),$[z]=q,T.addEventListener("dispose",P)),M=q}if(M.visible=T.visible,M.wireframe=T.wireframe,E===wi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=n.properties.get(M);B.light=C}return M}function y(A,T,C,E,M){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===wi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const z=e.update(A),$=A.material;if(Array.isArray($)){const q=z.groups;for(let X=0,J=q.length;X<J;X++){const I=q[X],j=$[I.materialIndex];if(j&&j.visible){const Q=x(A,j,E,M);A.onBeforeShadow(n,A,T,C,z,Q,I),n.renderBufferDirect(C,null,z,Q,A,I),A.onAfterShadow(n,A,T,C,z,Q,I)}}}else if($.visible){const q=x(A,$,E,M);A.onBeforeShadow(n,A,T,C,z,q,null),n.renderBufferDirect(C,null,z,q,A,null),A.onAfterShadow(n,A,T,C,z,q,null)}}const B=A.children;for(let z=0,$=B.length;z<$;z++)y(B[z],T,C,E,M)}function P(A){A.target.removeEventListener("dispose",P);for(const C in c){const E=c[C],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const MA={[af]:lf,[cf]:ff,[uf]:df,[oo]:hf,[lf]:af,[ff]:cf,[df]:uf,[hf]:oo};function SA(n,e){function t(){let U=!1;const ce=new Pt;let V=null;const Z=new Pt(0,0,0,0);return{setMask:function(de){V!==de&&!U&&(n.colorMask(de,de,de,de),V=de)},setLocked:function(de){U=de},setClear:function(de,he,Fe,Tt,$t){$t===!0&&(de*=Tt,he*=Tt,Fe*=Tt),ce.set(de,he,Fe,Tt),Z.equals(ce)===!1&&(n.clearColor(de,he,Fe,Tt),Z.copy(ce))},reset:function(){U=!1,V=null,Z.set(-1,0,0,0)}}}function i(){let U=!1,ce=!1,V=null,Z=null,de=null;return{setReversed:function(he){if(ce!==he){const Fe=e.get("EXT_clip_control");ce?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const Tt=de;de=null,this.setClear(Tt)}ce=he},getReversed:function(){return ce},setTest:function(he){he?oe(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(he){V!==he&&!U&&(n.depthMask(he),V=he)},setFunc:function(he){if(ce&&(he=MA[he]),Z!==he){switch(he){case af:n.depthFunc(n.NEVER);break;case lf:n.depthFunc(n.ALWAYS);break;case cf:n.depthFunc(n.LESS);break;case oo:n.depthFunc(n.LEQUAL);break;case uf:n.depthFunc(n.EQUAL);break;case hf:n.depthFunc(n.GEQUAL);break;case ff:n.depthFunc(n.GREATER);break;case df:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=he}},setLocked:function(he){U=he},setClear:function(he){de!==he&&(ce&&(he=1-he),n.clearDepth(he),de=he)},reset:function(){U=!1,V=null,Z=null,de=null,ce=!1}}}function r(){let U=!1,ce=null,V=null,Z=null,de=null,he=null,Fe=null,Tt=null,$t=null;return{setTest:function(rt){U||(rt?oe(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(rt){ce!==rt&&!U&&(n.stencilMask(rt),ce=rt)},setFunc:function(rt,Vn,gi){(V!==rt||Z!==Vn||de!==gi)&&(n.stencilFunc(rt,Vn,gi),V=rt,Z=Vn,de=gi)},setOp:function(rt,Vn,gi){(he!==rt||Fe!==Vn||Tt!==gi)&&(n.stencilOp(rt,Vn,gi),he=rt,Fe=Vn,Tt=gi)},setLocked:function(rt){U=rt},setClear:function(rt){$t!==rt&&(n.clearStencil(rt),$t=rt)},reset:function(){U=!1,ce=null,V=null,Z=null,de=null,he=null,Fe=null,Tt=null,$t=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,x=null,y=null,P=null,A=null,T=new se(0,0,0),C=0,E=!1,M=null,L=null,B=null,z=null,$=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,J=0;const I=n.getParameter(n.VERSION);I.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(I)[1]),X=J>=1):I.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),X=J>=2);let j=null,Q={};const ae=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Qe=new Pt().fromArray(ae),W=new Pt().fromArray(Se);function ne(U,ce,V,Z){const de=new Uint8Array(4),he=n.createTexture();n.bindTexture(U,he),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<V;Fe++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(ce+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return he}const me={};me[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),me[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),me[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(oo),Xe(!1),$e(Cm),oe(n.CULL_FACE),O(Li);function oe(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function Pe(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Ue(U,ce){return u[U]!==ce?(n.bindFramebuffer(U,ce),u[U]=ce,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ce),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ge(U,ce){let V=p,Z=!1;if(U){V=f.get(ce),V===void 0&&(V=[],f.set(ce,V));const de=U.textures;if(V.length!==de.length||V[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Fe=de.length;he<Fe;he++)V[he]=n.COLOR_ATTACHMENT0+he;V.length=de.length,Z=!0}}else V[0]!==n.BACK&&(V[0]=n.BACK,Z=!0);Z&&n.drawBuffers(V)}function Mt(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const qe={[kr]:n.FUNC_ADD,[XM]:n.FUNC_SUBTRACT,[$M]:n.FUNC_REVERSE_SUBTRACT};qe[jM]=n.MIN,qe[YM]=n.MAX;const Ct={[qM]:n.ZERO,[KM]:n.ONE,[ZM]:n.SRC_COLOR,[sf]:n.SRC_ALPHA,[iS]:n.SRC_ALPHA_SATURATE,[tS]:n.DST_COLOR,[JM]:n.DST_ALPHA,[QM]:n.ONE_MINUS_SRC_COLOR,[of]:n.ONE_MINUS_SRC_ALPHA,[nS]:n.ONE_MINUS_DST_COLOR,[eS]:n.ONE_MINUS_DST_ALPHA,[rS]:n.CONSTANT_COLOR,[sS]:n.ONE_MINUS_CONSTANT_COLOR,[oS]:n.CONSTANT_ALPHA,[aS]:n.ONE_MINUS_CONSTANT_ALPHA};function O(U,ce,V,Z,de,he,Fe,Tt,$t,rt){if(U===Li){_===!0&&(Pe(n.BLEND),_=!1);return}if(_===!1&&(oe(n.BLEND),_=!0),U!==WM){if(U!==m||rt!==E){if((d!==kr||y!==kr)&&(n.blendEquation(n.FUNC_ADD),d=kr,y=kr),rt)switch(U){case Ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ae:n.blendFunc(n.ONE,n.ONE);break;case bm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ae:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case bm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,x=null,P=null,A=null,T.set(0,0,0),C=0,m=U,E=rt}return}de=de||ce,he=he||V,Fe=Fe||Z,(ce!==d||de!==y)&&(n.blendEquationSeparate(qe[ce],qe[de]),d=ce,y=de),(V!==v||Z!==x||he!==P||Fe!==A)&&(n.blendFuncSeparate(Ct[V],Ct[Z],Ct[he],Ct[Fe]),v=V,x=Z,P=he,A=Fe),(Tt.equals(T)===!1||$t!==C)&&(n.blendColor(Tt.r,Tt.g,Tt.b,$t),T.copy(Tt),C=$t),m=U,E=!1}function In(U,ce){U.side===Qt?Pe(n.CULL_FACE):oe(n.CULL_FACE);let V=U.side===Jt;ce&&(V=!V),Xe(V),U.blending===Ks&&U.transparent===!1?O(Li):O(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Z=U.stencilWrite;a.setTest(Z),Z&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),dt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(U){M!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),M=U)}function $e(U){U!==GM?(oe(n.CULL_FACE),U!==L&&(U===Cm?n.cullFace(n.BACK):U===HM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),L=U}function be(U){U!==B&&(X&&n.lineWidth(U),B=U)}function dt(U,ce,V){U?(oe(n.POLYGON_OFFSET_FILL),(z!==ce||$!==V)&&(n.polygonOffset(ce,V),z=ce,$=V)):Pe(n.POLYGON_OFFSET_FILL)}function Ce(U){U?oe(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function b(U){U===void 0&&(U=n.TEXTURE0+q-1),j!==U&&(n.activeTexture(U),j=U)}function S(U,ce,V){V===void 0&&(j===null?V=n.TEXTURE0+q-1:V=j);let Z=Q[V];Z===void 0&&(Z={type:void 0,texture:void 0},Q[V]=Z),(Z.type!==U||Z.texture!==ce)&&(j!==V&&(n.activeTexture(V),j=V),n.bindTexture(U,ce||me[U]),Z.type=U,Z.texture=ce)}function k(){const U=Q[j];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ke(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(U){Qe.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Qe.copy(U))}function _e(U){W.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),W.copy(U))}function je(U,ce){let V=c.get(ce);V===void 0&&(V=new WeakMap,c.set(ce,V));let Z=V.get(U);Z===void 0&&(Z=n.getUniformBlockIndex(ce,U.name),V.set(U,Z))}function ke(U,ce){const Z=c.get(ce).get(U);l.get(ce)!==Z&&(n.uniformBlockBinding(ce,Z,U.__bindingPointIndex),l.set(ce,Z))}function lt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},j=null,Q={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,x=null,y=null,P=null,A=null,T=new se(0,0,0),C=0,E=!1,M=null,L=null,B=null,z=null,$=null,Qe.set(0,0,n.canvas.width,n.canvas.height),W.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Pe,bindFramebuffer:Ue,drawBuffers:Ge,useProgram:Mt,setBlending:O,setMaterial:In,setFlipSided:Xe,setCullFace:$e,setLineWidth:be,setPolygonOffset:dt,setScissorTest:Ce,activeTexture:b,bindTexture:S,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:ee,texImage2D:ve,texImage3D:Re,updateUBOMapping:je,uniformBlockBinding:ke,texStorage2D:Ke,texStorage3D:ie,texSubImage2D:Y,texSubImage3D:Ee,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:De,viewport:_e,reset:lt}}function E0(n,e,t,i){const r=EA(i);switch(t){case P_:return n*e;case D_:return n*e;case I_:return n*e*2;case jd:return n*e/r.components*r.byteLength;case Yd:return n*e/r.components*r.byteLength;case U_:return n*e*2/r.components*r.byteLength;case qd:return n*e*2/r.components*r.byteLength;case L_:return n*e*3/r.components*r.byteLength;case Qn:return n*e*4/r.components*r.byteLength;case Kd:return n*e*4/r.components*r.byteLength;case Yl:case ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Kl:case Zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xf:case Mf:return Math.max(n,16)*Math.max(e,8)/4;case _f:case yf:return Math.max(n,8)*Math.max(e,8)/2;case Sf:case Ef:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case bf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Df:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case If:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ff:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Of:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ql:case kf:case zf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case N_:case Gf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Hf:case Vf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function EA(n){switch(n){case zi:case C_:return{byteLength:1,components:1};case Aa:case b_:case Di:return{byteLength:2,components:1};case Xd:case $d:return{byteLength:2,components:4};case Jr:case Wd:case fi:return{byteLength:4,components:1};case R_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function wA(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,S){return p?new OffscreenCanvas(b,S):Cc("canvas")}function _(b,S,k){let K=1;const ee=Ce(b);if((ee.width>k||ee.height>k)&&(K=k/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor(K*ee.width),Ee=Math.floor(K*ee.height);u===void 0&&(u=g(Y,Ee));const ue=S?g(Y,Ee):u;return ue.width=Y,ue.height=Ee,ue.getContext("2d").drawImage(b,0,0,Y,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+Ee+")."),ue}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),b;return b}function m(b){return b.generateMipmaps}function d(b){n.generateMipmap(b)}function v(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(b,S,k,K,ee=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=S;if(S===n.RED&&(k===n.FLOAT&&(Y=n.R32F),k===n.HALF_FLOAT&&(Y=n.R16F),k===n.UNSIGNED_BYTE&&(Y=n.R8)),S===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.R8UI),k===n.UNSIGNED_SHORT&&(Y=n.R16UI),k===n.UNSIGNED_INT&&(Y=n.R32UI),k===n.BYTE&&(Y=n.R8I),k===n.SHORT&&(Y=n.R16I),k===n.INT&&(Y=n.R32I)),S===n.RG&&(k===n.FLOAT&&(Y=n.RG32F),k===n.HALF_FLOAT&&(Y=n.RG16F),k===n.UNSIGNED_BYTE&&(Y=n.RG8)),S===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RG8UI),k===n.UNSIGNED_SHORT&&(Y=n.RG16UI),k===n.UNSIGNED_INT&&(Y=n.RG32UI),k===n.BYTE&&(Y=n.RG8I),k===n.SHORT&&(Y=n.RG16I),k===n.INT&&(Y=n.RG32I)),S===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),k===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),k===n.UNSIGNED_INT&&(Y=n.RGB32UI),k===n.BYTE&&(Y=n.RGB8I),k===n.SHORT&&(Y=n.RGB16I),k===n.INT&&(Y=n.RGB32I)),S===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),k===n.UNSIGNED_INT&&(Y=n.RGBA32UI),k===n.BYTE&&(Y=n.RGBA8I),k===n.SHORT&&(Y=n.RGBA16I),k===n.INT&&(Y=n.RGBA32I)),S===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),S===n.RGBA){const Ee=ee?Kc:Ye.getTransfer(K);k===n.FLOAT&&(Y=n.RGBA32F),k===n.HALF_FLOAT&&(Y=n.RGBA16F),k===n.UNSIGNED_BYTE&&(Y=Ee===st?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(b,S){let k;return b?S===null||S===Jr||S===co?k=n.DEPTH24_STENCIL8:S===fi?k=n.DEPTH32F_STENCIL8:S===Aa&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Jr||S===co?k=n.DEPTH_COMPONENT24:S===fi?k=n.DEPTH_COMPONENT32F:S===Aa&&(k=n.DEPTH_COMPONENT16),k}function P(b,S){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Rn&&b.minFilter!==vn?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function A(b){const S=b.target;S.removeEventListener("dispose",A),C(S),S.isVideoTexture&&h.delete(S)}function T(b){const S=b.target;S.removeEventListener("dispose",T),M(S)}function C(b){const S=i.get(b);if(S.__webglInit===void 0)return;const k=b.source,K=f.get(k);if(K){const ee=K[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(b),Object.keys(K).length===0&&f.delete(k)}i.remove(b)}function E(b){const S=i.get(b);n.deleteTexture(S.__webglTexture);const k=b.source,K=f.get(k);delete K[S.__cacheKey],o.memory.textures--}function M(b){const S=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let ee=0;ee<S.__webglFramebuffer[K].length;ee++)n.deleteFramebuffer(S.__webglFramebuffer[K][ee]);else n.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)n.deleteFramebuffer(S.__webglFramebuffer[K]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=b.textures;for(let K=0,ee=k.length;K<ee;K++){const Y=i.get(k[K]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(k[K])}i.remove(b)}let L=0;function B(){L=0}function z(){const b=L;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),L+=1,b}function $(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function q(b,S){const k=i.get(b);if(b.isVideoTexture&&be(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(k,b,S);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+S)}function X(b,S){const k=i.get(b);if(b.version>0&&k.__version!==b.version){W(k,b,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+S)}function J(b,S){const k=i.get(b);if(b.version>0&&k.__version!==b.version){W(k,b,S);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+S)}function I(b,S){const k=i.get(b);if(b.version>0&&k.__version!==b.version){ne(k,b,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+S)}const j={[gf]:n.REPEAT,[Wr]:n.CLAMP_TO_EDGE,[vf]:n.MIRRORED_REPEAT},Q={[Rn]:n.NEAREST,[hS]:n.NEAREST_MIPMAP_NEAREST,[Ja]:n.NEAREST_MIPMAP_LINEAR,[vn]:n.LINEAR,[Au]:n.LINEAR_MIPMAP_NEAREST,[Xr]:n.LINEAR_MIPMAP_LINEAR},ae={[gS]:n.NEVER,[SS]:n.ALWAYS,[vS]:n.LESS,[F_]:n.LEQUAL,[_S]:n.EQUAL,[MS]:n.GEQUAL,[xS]:n.GREATER,[yS]:n.NOTEQUAL};function Se(b,S){if(S.type===fi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===vn||S.magFilter===Au||S.magFilter===Ja||S.magFilter===Xr||S.minFilter===vn||S.minFilter===Au||S.minFilter===Ja||S.minFilter===Xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,j[S.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,j[S.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,j[S.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,Q[S.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,Q[S.minFilter]),S.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ae[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Rn||S.minFilter!==Ja&&S.minFilter!==Xr||S.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Qe(b,S){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",A));const K=S.source;let ee=f.get(K);ee===void 0&&(ee={},f.set(K,ee));const Y=$(S);if(Y!==b.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[Y].usedTimes++;const Ee=ee[b.__cacheKey];Ee!==void 0&&(ee[b.__cacheKey].usedTimes--,Ee.usedTimes===0&&E(S)),b.__cacheKey=Y,b.__webglTexture=ee[Y].texture}return k}function W(b,S,k){let K=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=n.TEXTURE_3D);const ee=Qe(b,S),Y=S.source;t.bindTexture(K,b.__webglTexture,n.TEXTURE0+k);const Ee=i.get(Y);if(Y.version!==Ee.__version||ee===!0){t.activeTexture(n.TEXTURE0+k);const ue=Ye.getPrimaries(Ye.workingColorSpace),ge=S.colorSpace===rr?null:Ye.getPrimaries(S.colorSpace),Ke=S.colorSpace===rr||ue===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ie=_(S.image,!1,r.maxTextureSize);ie=dt(S,ie);const ve=s.convert(S.format,S.colorSpace),Re=s.convert(S.type);let De=x(S.internalFormat,ve,Re,S.colorSpace,S.isVideoTexture);Se(K,S);let _e;const je=S.mipmaps,ke=S.isVideoTexture!==!0,lt=Ee.__version===void 0||ee===!0,U=Y.dataReady,ce=P(S,ie);if(S.isDepthTexture)De=y(S.format===uo,S.type),lt&&(ke?t.texStorage2D(n.TEXTURE_2D,1,De,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,De,ie.width,ie.height,0,ve,Re,null));else if(S.isDataTexture)if(je.length>0){ke&&lt&&t.texStorage2D(n.TEXTURE_2D,ce,De,je[0].width,je[0].height);for(let V=0,Z=je.length;V<Z;V++)_e=je[V],ke?U&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,_e.width,_e.height,ve,Re,_e.data):t.texImage2D(n.TEXTURE_2D,V,De,_e.width,_e.height,0,ve,Re,_e.data);S.generateMipmaps=!1}else ke?(lt&&t.texStorage2D(n.TEXTURE_2D,ce,De,ie.width,ie.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,ve,Re,ie.data)):t.texImage2D(n.TEXTURE_2D,0,De,ie.width,ie.height,0,ve,Re,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ke&&lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,De,je[0].width,je[0].height,ie.depth);for(let V=0,Z=je.length;V<Z;V++)if(_e=je[V],S.format!==Qn)if(ve!==null)if(ke){if(U)if(S.layerUpdates.size>0){const de=E0(_e.width,_e.height,S.format,S.type);for(const he of S.layerUpdates){const Fe=_e.data.subarray(he*de/_e.data.BYTES_PER_ELEMENT,(he+1)*de/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,he,_e.width,_e.height,1,ve,Fe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,ie.depth,ve,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,De,_e.width,_e.height,ie.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,ie.depth,ve,Re,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,V,De,_e.width,_e.height,ie.depth,0,ve,Re,_e.data)}else{ke&&lt&&t.texStorage2D(n.TEXTURE_2D,ce,De,je[0].width,je[0].height);for(let V=0,Z=je.length;V<Z;V++)_e=je[V],S.format!==Qn?ve!==null?ke?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,_e.width,_e.height,ve,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,V,De,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?U&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,_e.width,_e.height,ve,Re,_e.data):t.texImage2D(n.TEXTURE_2D,V,De,_e.width,_e.height,0,ve,Re,_e.data)}else if(S.isDataArrayTexture)if(ke){if(lt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,De,ie.width,ie.height,ie.depth),U)if(S.layerUpdates.size>0){const V=E0(ie.width,ie.height,S.format,S.type);for(const Z of S.layerUpdates){const de=ie.data.subarray(Z*V/ie.data.BYTES_PER_ELEMENT,(Z+1)*V/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,ve,Re,de)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,Re,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ie.width,ie.height,ie.depth,0,ve,Re,ie.data);else if(S.isData3DTexture)ke?(lt&&t.texStorage3D(n.TEXTURE_3D,ce,De,ie.width,ie.height,ie.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,Re,ie.data)):t.texImage3D(n.TEXTURE_3D,0,De,ie.width,ie.height,ie.depth,0,ve,Re,ie.data);else if(S.isFramebufferTexture){if(lt)if(ke)t.texStorage2D(n.TEXTURE_2D,ce,De,ie.width,ie.height);else{let V=ie.width,Z=ie.height;for(let de=0;de<ce;de++)t.texImage2D(n.TEXTURE_2D,de,De,V,Z,0,ve,Re,null),V>>=1,Z>>=1}}else if(je.length>0){if(ke&&lt){const V=Ce(je[0]);t.texStorage2D(n.TEXTURE_2D,ce,De,V.width,V.height)}for(let V=0,Z=je.length;V<Z;V++)_e=je[V],ke?U&&t.texSubImage2D(n.TEXTURE_2D,V,0,0,ve,Re,_e):t.texImage2D(n.TEXTURE_2D,V,De,ve,Re,_e);S.generateMipmaps=!1}else if(ke){if(lt){const V=Ce(ie);t.texStorage2D(n.TEXTURE_2D,ce,De,V.width,V.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Re,ie)}else t.texImage2D(n.TEXTURE_2D,0,De,ve,Re,ie);m(S)&&d(K),Ee.__version=Y.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function ne(b,S,k){if(S.image.length!==6)return;const K=Qe(b,S),ee=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+k);const Y=i.get(ee);if(ee.version!==Y.__version||K===!0){t.activeTexture(n.TEXTURE0+k);const Ee=Ye.getPrimaries(Ye.workingColorSpace),ue=S.colorSpace===rr?null:Ye.getPrimaries(S.colorSpace),ge=S.colorSpace===rr||Ee===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ke=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let Z=0;Z<6;Z++)!Ke&&!ie?ve[Z]=_(S.image[Z],!0,r.maxCubemapSize):ve[Z]=ie?S.image[Z].image:S.image[Z],ve[Z]=dt(S,ve[Z]);const Re=ve[0],De=s.convert(S.format,S.colorSpace),_e=s.convert(S.type),je=x(S.internalFormat,De,_e,S.colorSpace),ke=S.isVideoTexture!==!0,lt=Y.__version===void 0||K===!0,U=ee.dataReady;let ce=P(S,Re);Se(n.TEXTURE_CUBE_MAP,S);let V;if(Ke){ke&&lt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,je,Re.width,Re.height);for(let Z=0;Z<6;Z++){V=ve[Z].mipmaps;for(let de=0;de<V.length;de++){const he=V[de];S.format!==Qn?De!==null?ke?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,he.width,he.height,De,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,je,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,he.width,he.height,De,_e,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,je,he.width,he.height,0,De,_e,he.data)}}}else{if(V=S.mipmaps,ke&&lt){V.length>0&&ce++;const Z=Ce(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,je,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){ke?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ve[Z].width,ve[Z].height,De,_e,ve[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,je,ve[Z].width,ve[Z].height,0,De,_e,ve[Z].data);for(let de=0;de<V.length;de++){const Fe=V[de].image[Z].image;ke?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,Fe.width,Fe.height,De,_e,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,je,Fe.width,Fe.height,0,De,_e,Fe.data)}}else{ke?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,De,_e,ve[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,je,De,_e,ve[Z]);for(let de=0;de<V.length;de++){const he=V[de];ke?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,De,_e,he.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,je,De,_e,he.image[Z])}}}m(S)&&d(n.TEXTURE_CUBE_MAP),Y.__version=ee.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function me(b,S,k,K,ee,Y){const Ee=s.convert(k.format,k.colorSpace),ue=s.convert(k.type),ge=x(k.internalFormat,Ee,ue,k.colorSpace),Ke=i.get(S),ie=i.get(k);if(ie.__renderTarget=S,!Ke.__hasExternalTextures){const ve=Math.max(1,S.width>>Y),Re=Math.max(1,S.height>>Y);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,Y,ge,ve,Re,S.depth,0,Ee,ue,null):t.texImage2D(ee,Y,ge,ve,Re,0,Ee,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),$e(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,ee,ie.__webglTexture,0,Xe(S)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,ee,ie.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(b,S,k){if(n.bindRenderbuffer(n.RENDERBUFFER,b),S.depthBuffer){const K=S.depthTexture,ee=K&&K.isDepthTexture?K.type:null,Y=y(S.stencilBuffer,ee),Ee=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=Xe(S);$e(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,Y,S.width,S.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,Y,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Y,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,b)}else{const K=S.textures;for(let ee=0;ee<K.length;ee++){const Y=K[ee],Ee=s.convert(Y.format,Y.colorSpace),ue=s.convert(Y.type),ge=x(Y.internalFormat,Ee,ue,Y.colorSpace),Ke=Xe(S);k&&$e(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,ge,S.width,S.height):$e(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke,ge,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ge,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const ee=K.__webglTexture,Y=Xe(S);if(S.depthTexture.format===Zs)$e(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(S.depthTexture.format===uo)$e(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ue(b){const S=i.get(b),k=b.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=K}if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Pe(S.__webglFramebuffer,b)}else if(k){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=n.createRenderbuffer(),oe(S.__webglDepthbuffer[K],b,!1);else{const ee=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),oe(S.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ee)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(b,S,k){const K=i.get(b);S!==void 0&&me(K.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Ue(b)}function Mt(b){const S=b.texture,k=i.get(b),K=i.get(S);b.addEventListener("dispose",T);const ee=b.textures,Y=b.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=S.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ue]=[];for(let ge=0;ge<S.mipmaps.length;ge++)k.__webglFramebuffer[ue][ge]=n.createFramebuffer()}else k.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)k.__webglFramebuffer[ue]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let ue=0,ge=ee.length;ue<ge;ue++){const Ke=i.get(ee[ue]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&$e(b)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){const ge=ee[ue];k.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ue]);const Ke=s.convert(ge.format,ge.colorSpace),ie=s.convert(ge.type),ve=x(ge.internalFormat,Ke,ie,ge.colorSpace,b.isXRRenderTarget===!0),Re=Xe(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,ve,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,k.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),oe(k.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Se(n.TEXTURE_CUBE_MAP,S);for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)me(k.__webglFramebuffer[ue][ge],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else me(k.__webglFramebuffer[ue],b,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(S)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ue=0,ge=ee.length;ue<ge;ue++){const Ke=ee[ue],ie=i.get(Ke);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),Se(n.TEXTURE_2D,Ke),me(k.__webglFramebuffer,b,Ke,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(Ke)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,K.__webglTexture),Se(ue,S),S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)me(k.__webglFramebuffer[ge],b,S,n.COLOR_ATTACHMENT0,ue,ge);else me(k.__webglFramebuffer,b,S,n.COLOR_ATTACHMENT0,ue,0);m(S)&&d(ue),t.unbindTexture()}b.depthBuffer&&Ue(b)}function qe(b){const S=b.textures;for(let k=0,K=S.length;k<K;k++){const ee=S[k];if(m(ee)){const Y=v(b),Ee=i.get(ee).__webglTexture;t.bindTexture(Y,Ee),d(Y),t.unbindTexture()}}}const Ct=[],O=[];function In(b){if(b.samples>0){if($e(b)===!1){const S=b.textures,k=b.width,K=b.height;let ee=n.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(b),ue=S.length>1;if(ue)for(let ge=0;ge<S.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const Ke=i.get(S[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ke,0)}n.blitFramebuffer(0,0,k,K,0,0,k,K,ee,n.NEAREST),l===!0&&(Ct.length=0,O.length=0,Ct.push(n.COLOR_ATTACHMENT0+ge),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ct.push(Y),O.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<S.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const Ke=i.get(S[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const S=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Xe(b){return Math.min(r.maxSamples,b.samples)}function $e(b){const S=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function be(b){const S=o.render.frame;h.get(b)!==S&&(h.set(b,S),b.update())}function dt(b,S){const k=b.colorSpace,K=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==_o&&k!==rr&&(Ye.getTransfer(k)===st?(K!==Qn||ee!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Ce(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=I,this.rebindTextures=Ge,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=In,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=me,this.useMultisampledRTT=$e}function TA(n,e){function t(i,r=rr){let s;const o=Ye.getTransfer(r);if(i===zi)return n.UNSIGNED_BYTE;if(i===Xd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$d)return n.UNSIGNED_SHORT_5_5_5_1;if(i===R_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===C_)return n.BYTE;if(i===b_)return n.SHORT;if(i===Aa)return n.UNSIGNED_SHORT;if(i===Wd)return n.INT;if(i===Jr)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===Di)return n.HALF_FLOAT;if(i===P_)return n.ALPHA;if(i===L_)return n.RGB;if(i===Qn)return n.RGBA;if(i===D_)return n.LUMINANCE;if(i===I_)return n.LUMINANCE_ALPHA;if(i===Zs)return n.DEPTH_COMPONENT;if(i===uo)return n.DEPTH_STENCIL;if(i===jd)return n.RED;if(i===Yd)return n.RED_INTEGER;if(i===U_)return n.RG;if(i===qd)return n.RG_INTEGER;if(i===Kd)return n.RGBA_INTEGER;if(i===Yl||i===ql||i===Kl||i===Zl)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Yl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Yl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ql)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_f||i===xf||i===yf||i===Mf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_f)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sf||i===Ef||i===wf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sf||i===Ef)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===wf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Tf||i===Af||i===Cf||i===bf||i===Rf||i===Pf||i===Lf||i===Df||i===If||i===Uf||i===Nf||i===Ff||i===Of||i===Bf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Tf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Af)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Df)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===If)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ff)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Of)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ql||i===kf||i===zf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ql)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===N_||i===Gf||i===Hf||i===Vf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ql)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===co?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class AA extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Jo extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CA={type:"move"};class eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(CA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const bA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new en,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new cn({vertexShader:bA,fragmentShader:RA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new ii(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LA extends xo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const _=new PA,m=t.getContextAttributes();let d=null,v=null;const x=[],y=[],P=new Te;let A=null;const T=new Bn;T.viewport=new Pt;const C=new Bn;C.viewport=new Pt;const E=[T,C],M=new AA;let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ne=x[W];return ne===void 0&&(ne=new eh,x[W]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(W){let ne=x[W];return ne===void 0&&(ne=new eh,x[W]=ne),ne.getGripSpace()},this.getHand=function(W){let ne=x[W];return ne===void 0&&(ne=new eh,x[W]=ne),ne.getHandSpace()};function z(W){const ne=y.indexOf(W.inputSource);if(ne===-1)return;const me=x[ne];me!==void 0&&(me.update(W.inputSource,W.frame,c||o),me.dispatchEvent({type:W.type,data:W.inputSource}))}function $(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",q);for(let W=0;W<x.length;W++){const ne=y[W];ne!==null&&(y[W]=null,x[W].disconnect(ne))}L=null,B=null,_.reset(),e.setRenderTarget(d),p=null,f=null,u=null,r=null,v=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",$),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ti(p.framebufferWidth,p.framebufferHeight,{format:Qn,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,me=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?uo:Zs,me=m.stencil?co:Jr);const Pe={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(Pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new ti(f.textureWidth,f.textureHeight,{format:Qn,type:zi,depthTexture:new K_(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Qe.setContext(r),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(W){for(let ne=0;ne<W.removed.length;ne++){const me=W.removed[ne],oe=y.indexOf(me);oe>=0&&(y[oe]=null,x[oe].disconnect(me))}for(let ne=0;ne<W.added.length;ne++){const me=W.added[ne];let oe=y.indexOf(me);if(oe===-1){for(let Ue=0;Ue<x.length;Ue++)if(Ue>=y.length){y.push(me),oe=Ue;break}else if(y[Ue]===null){y[Ue]=me,oe=Ue;break}if(oe===-1)break}const Pe=x[oe];Pe&&Pe.connect(me)}}const X=new D,J=new D;function I(W,ne,me){X.setFromMatrixPosition(ne.matrixWorld),J.setFromMatrixPosition(me.matrixWorld);const oe=X.distanceTo(J),Pe=ne.projectionMatrix.elements,Ue=me.projectionMatrix.elements,Ge=Pe[14]/(Pe[10]-1),Mt=Pe[14]/(Pe[10]+1),qe=(Pe[9]+1)/Pe[5],Ct=(Pe[9]-1)/Pe[5],O=(Pe[8]-1)/Pe[0],In=(Ue[8]+1)/Ue[0],Xe=Ge*O,$e=Ge*In,be=oe/(-O+In),dt=be*-O;if(ne.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(dt),W.translateZ(be),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Pe[10]===-1)W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Ce=Ge+be,b=Mt+be,S=Xe-dt,k=$e+(oe-dt),K=qe*Mt/b*Ce,ee=Ct*Mt/b*Ce;W.projectionMatrix.makePerspective(S,k,K,ee,Ce,b),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function j(W,ne){ne===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ne.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ne=W.near,me=W.far;_.texture!==null&&(_.depthNear>0&&(ne=_.depthNear),_.depthFar>0&&(me=_.depthFar)),M.near=C.near=T.near=ne,M.far=C.far=T.far=me,(L!==M.near||B!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,B=M.far),T.layers.mask=W.layers.mask|2,C.layers.mask=W.layers.mask|4,M.layers.mask=T.layers.mask|C.layers.mask;const oe=W.parent,Pe=M.cameras;j(M,oe);for(let Ue=0;Ue<Pe.length;Ue++)j(Pe[Ue],oe);Pe.length===2?I(M,T,C):M.projectionMatrix.copy(T.projectionMatrix),Q(W,M,oe)};function Q(W,ne,me){me===null?W.matrix.copy(ne.matrixWorld):(W.matrix.copy(me.matrixWorld),W.matrix.invert(),W.matrix.multiply(ne.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Xf*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ae=null;function Se(W,ne){if(h=ne.getViewerPose(c||o),g=ne,h!==null){const me=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let oe=!1;me.length!==M.cameras.length&&(M.cameras.length=0,oe=!0);for(let Ue=0;Ue<me.length;Ue++){const Ge=me[Ue];let Mt=null;if(p!==null)Mt=p.getViewport(Ge);else{const Ct=u.getViewSubImage(f,Ge);Mt=Ct.viewport,Ue===0&&(e.setRenderTargetTextures(v,Ct.colorTexture,f.ignoreDepthValues?void 0:Ct.depthStencilTexture),e.setRenderTarget(v))}let qe=E[Ue];qe===void 0&&(qe=new Bn,qe.layers.enable(Ue),qe.viewport=new Pt,E[Ue]=qe),qe.matrix.fromArray(Ge.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Ge.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),Ue===0&&(M.matrix.copy(qe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),oe===!0&&M.cameras.push(qe)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ue=u.getDepthInformation(me[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(e,Ue,r.renderState)}}for(let me=0;me<x.length;me++){const oe=y[me],Pe=x[me];oe!==null&&Pe!==void 0&&Pe.update(oe,ne,c||o)}ae&&ae(W,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Qe=new Y_;Qe.setAnimationLoop(Se),this.setAnimationLoop=function(W){ae=W},this.dispose=function(){}}}const Dr=new Gi,DA=new ht;function IA(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,W_(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Jt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Jt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,Dr.copy(y),Dr.x*=-1,Dr.y*=-1,Dr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Dr.y*=-1,Dr.z*=-1),m.envMapRotation.value.setFromMatrix4(DA.makeRotationFromEuler(Dr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Jt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function UA(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function c(v,x){let y=r[v.id];y===void 0&&(g(v),y=h(v),r[v.id]=y,v.addEventListener("dispose",m));const P=x.program;i.updateUBOMapping(v,P);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function h(v){const x=u();v.__bindingPointIndex=x;const y=n.createBuffer(),P=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,P,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],y=v.uniforms,P=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,T=y.length;A<T;A++){const C=Array.isArray(y[A])?y[A]:[y[A]];for(let E=0,M=C.length;E<M;E++){const L=C[E];if(p(L,A,E,P)===!0){const B=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let q=0;q<z.length;q++){const X=z[q],J=_(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,B+$,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,$),$+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,P){const A=v.value,T=x+"_"+y;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{const C=P[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return P[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(v){const x=v.uniforms;let y=0;const P=16;for(let T=0,C=x.length;T<C;T++){const E=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,L=E.length;M<L;M++){const B=E[M],z=Array.isArray(B.value)?B.value:[B.value];for(let $=0,q=z.length;$<q;$++){const X=z[$],J=_(X),I=y%P,j=I%J.boundary,Q=I+j;y+=j,Q!==0&&P-Q<J.storage&&(y+=P-Q),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=J.storage}}}const A=y%P;return A>0&&(y+=P-A),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class NA{constructor(e={}){const{canvas:t=wS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this.toneMapping=mr,this.toneMappingExposure=1;const y=this;let P=!1,A=0,T=0,C=null,E=-1,M=null;const L=new Pt,B=new Pt;let z=null;const $=new se(0);let q=0,X=t.width,J=t.height,I=1,j=null,Q=null;const ae=new Pt(0,0,X,J),Se=new Pt(0,0,X,J);let Qe=!1;const W=new j_;let ne=!1,me=!1;const oe=new ht,Pe=new ht,Ue=new D,Ge=new Pt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Ct(){return C===null?I:1}let O=i;function In(w,N){return t.getContext(w,N)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vd}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",he,!1),O===null){const N="webgl2";if(O=In(N,w),O===null)throw In(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Xe,$e,be,dt,Ce,b,S,k,K,ee,Y,Ee,ue,ge,Ke,ie,ve,Re,De,_e,je,ke,lt,U;function ce(){Xe=new zw(O),Xe.init(),ke=new TA(O,Xe),$e=new Uw(O,Xe,e,ke),be=new SA(O,Xe),$e.reverseDepthBuffer&&f&&be.buffers.depth.setReversed(!0),dt=new Vw(O),Ce=new aA,b=new wA(O,Xe,be,Ce,$e,ke,dt),S=new Fw(y),k=new kw(y),K=new KS(O),lt=new Dw(O,K),ee=new Gw(O,K,dt,lt),Y=new Xw(O,ee,K,dt),De=new Ww(O,$e,b),ie=new Nw(Ce),Ee=new oA(y,S,k,Xe,$e,lt,ie),ue=new IA(y,Ce),ge=new cA,Ke=new mA(Xe),Re=new Lw(y,S,k,be,Y,p,l),ve=new yA(y,Y,$e),U=new UA(O,dt,$e,be),_e=new Iw(O,Xe,dt),je=new Hw(O,Xe,dt),dt.programs=Ee.programs,y.capabilities=$e,y.extensions=Xe,y.properties=Ce,y.renderLists=ge,y.shadowMap=ve,y.state=be,y.info=dt}ce();const V=new LA(y,O);this.xr=V,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=Xe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Xe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(w){w!==void 0&&(I=w,this.setSize(X,J,!1))},this.getSize=function(w){return w.set(X,J)},this.setSize=function(w,N,G=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,J=N,t.width=Math.floor(w*I),t.height=Math.floor(N*I),G===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(X*I,J*I).floor()},this.setDrawingBufferSize=function(w,N,G){X=w,J=N,I=G,t.width=Math.floor(w*G),t.height=Math.floor(N*G),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(ae)},this.setViewport=function(w,N,G,H){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,N,G,H),be.viewport(L.copy(ae).multiplyScalar(I).round())},this.getScissor=function(w){return w.copy(Se)},this.setScissor=function(w,N,G,H){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,N,G,H),be.scissor(B.copy(Se).multiplyScalar(I).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(w){be.setScissorTest(Qe=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){Q=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(w=!0,N=!0,G=!0){let H=0;if(w){let F=!1;if(C!==null){const re=C.texture.format;F=re===Kd||re===qd||re===Yd}if(F){const re=C.texture.type,fe=re===zi||re===Jr||re===Aa||re===co||re===Xd||re===$d,xe=Re.getClearColor(),ye=Re.getClearAlpha(),Ie=xe.r,Oe=xe.g,Me=xe.b;fe?(g[0]=Ie,g[1]=Oe,g[2]=Me,g[3]=ye,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Ie,_[1]=Oe,_[2]=Me,_[3]=ye,O.clearBufferiv(O.COLOR,0,_))}else H|=O.COLOR_BUFFER_BIT}N&&(H|=O.DEPTH_BUFFER_BIT),G&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ge.dispose(),Ke.dispose(),Ce.dispose(),S.dispose(),k.dispose(),Y.dispose(),lt.dispose(),U.dispose(),Ee.dispose(),V.dispose(),V.removeEventListener("sessionstart",up),V.removeEventListener("sessionend",hp),Ar.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=dt.autoReset,N=ve.enabled,G=ve.autoUpdate,H=ve.needsUpdate,F=ve.type;ce(),dt.autoReset=w,ve.enabled=N,ve.autoUpdate=G,ve.needsUpdate=H,ve.type=F}function he(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Fe(w){const N=w.target;N.removeEventListener("dispose",Fe),Tt(N)}function Tt(w){$t(w),Ce.remove(w)}function $t(w){const N=Ce.get(w).programs;N!==void 0&&(N.forEach(function(G){Ee.releaseProgram(G)}),w.isShaderMaterial&&Ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,G,H,F,re){N===null&&(N=Mt);const fe=F.isMesh&&F.matrixWorld.determinant()<0,xe=cx(w,N,G,H,F);be.setMaterial(H,fe);let ye=G.index,Ie=1;if(H.wireframe===!0){if(ye=ee.getWireframeAttribute(G),ye===void 0)return;Ie=2}const Oe=G.drawRange,Me=G.attributes.position;let Je=Oe.start*Ie,ct=(Oe.start+Oe.count)*Ie;re!==null&&(Je=Math.max(Je,re.start*Ie),ct=Math.min(ct,(re.start+re.count)*Ie)),ye!==null?(Je=Math.max(Je,0),ct=Math.min(ct,ye.count)):Me!=null&&(Je=Math.max(Je,0),ct=Math.min(ct,Me.count));const pt=ct-Je;if(pt<0||pt===1/0)return;lt.setup(F,H,xe,G,ye);let dn,et=_e;if(ye!==null&&(dn=K.get(ye),et=je,et.setIndex(dn)),F.isMesh)H.wireframe===!0?(be.setLineWidth(H.wireframeLinewidth*Ct()),et.setMode(O.LINES)):et.setMode(O.TRIANGLES);else if(F.isLine){let we=H.linewidth;we===void 0&&(we=1),be.setLineWidth(we*Ct()),F.isLineSegments?et.setMode(O.LINES):F.isLineLoop?et.setMode(O.LINE_LOOP):et.setMode(O.LINE_STRIP)}else F.isPoints?et.setMode(O.POINTS):F.isSprite&&et.setMode(O.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)et.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))et.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const we=F._multiDrawStarts,vi=F._multiDrawCounts,tt=F._multiDrawCount,Wn=ye?K.get(ye).bytesPerElement:1,ss=Ce.get(H).currentProgram.getUniforms();for(let Mn=0;Mn<tt;Mn++)ss.setValue(O,"_gl_DrawID",Mn),et.render(we[Mn]/Wn,vi[Mn])}else if(F.isInstancedMesh)et.renderInstances(Je,pt,F.count);else if(G.isInstancedBufferGeometry){const we=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,vi=Math.min(G.instanceCount,we);et.renderInstances(Je,pt,vi)}else et.render(Je,pt)};function rt(w,N,G){w.transparent===!0&&w.side===Qt&&w.forceSinglePass===!1?(w.side=Jt,w.needsUpdate=!0,Na(w,N,G),w.side=xr,w.needsUpdate=!0,Na(w,N,G),w.side=Qt):Na(w,N,G)}this.compile=function(w,N,G=null){G===null&&(G=w),d=Ke.get(G),d.init(N),x.push(d),G.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),w!==G&&w.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const H=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const re=F.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const xe=re[fe];rt(xe,G,F),H.add(xe)}else rt(re,G,F),H.add(re)}),x.pop(),d=null,H},this.compileAsync=function(w,N,G=null){const H=this.compile(w,N,G);return new Promise(F=>{function re(){if(H.forEach(function(fe){Ce.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){F(w);return}setTimeout(re,10)}Xe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Vn=null;function gi(w){Vn&&Vn(w)}function up(){Ar.stop()}function hp(){Ar.start()}const Ar=new Y_;Ar.setAnimationLoop(gi),typeof self<"u"&&Ar.setContext(self),this.setAnimationLoop=function(w){Vn=w,V.setAnimationLoop(w),w===null?Ar.stop():Ar.start()},V.addEventListener("sessionstart",up),V.addEventListener("sessionend",hp),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(N),N=V.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,N,C),d=Ke.get(w,x.length),d.init(N),x.push(d),Pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),W.setFromProjectionMatrix(Pe),me=this.localClippingEnabled,ne=ie.init(this.clippingPlanes,me),m=ge.get(w,v.length),m.init(),v.push(m),V.enabled===!0&&V.isPresenting===!0){const re=y.xr.getDepthSensingMesh();re!==null&&Jc(re,N,-1/0,y.sortObjects)}Jc(w,N,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(j,Q),qe=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,qe&&Re.addToRenderList(m,w),this.info.render.frame++,ne===!0&&ie.beginShadows();const G=d.state.shadowsArray;ve.render(G,w,N),ne===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(d.setupLights(),N.isArrayCamera){const re=N.cameras;if(F.length>0)for(let fe=0,xe=re.length;fe<xe;fe++){const ye=re[fe];dp(H,F,w,ye)}qe&&Re.render(w);for(let fe=0,xe=re.length;fe<xe;fe++){const ye=re[fe];fp(m,w,ye,ye.viewport)}}else F.length>0&&dp(H,F,w,N),qe&&Re.render(w),fp(m,w,N);C!==null&&(b.updateMultisampleRenderTarget(C),b.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(y,w,N),lt.resetDefaultState(),E=-1,M=null,x.pop(),x.length>0?(d=x[x.length-1],ne===!0&&ie.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Jc(w,N,G,H){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||W.intersectsSprite(w)){H&&Ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Pe);const fe=Y.update(w),xe=w.material;xe.visible&&m.push(w,fe,xe,G,Ge.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||W.intersectsObject(w))){const fe=Y.update(w),xe=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ge.copy(w.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ge.copy(fe.boundingSphere.center)),Ge.applyMatrix4(w.matrixWorld).applyMatrix4(Pe)),Array.isArray(xe)){const ye=fe.groups;for(let Ie=0,Oe=ye.length;Ie<Oe;Ie++){const Me=ye[Ie],Je=xe[Me.materialIndex];Je&&Je.visible&&m.push(w,fe,Je,G,Ge.z,Me)}}else xe.visible&&m.push(w,fe,xe,G,Ge.z,null)}}const re=w.children;for(let fe=0,xe=re.length;fe<xe;fe++)Jc(re[fe],N,G,H)}function fp(w,N,G,H){const F=w.opaque,re=w.transmissive,fe=w.transparent;d.setupLightsView(G),ne===!0&&ie.setGlobalState(y.clippingPlanes,G),H&&be.viewport(L.copy(H)),F.length>0&&Ua(F,N,G),re.length>0&&Ua(re,N,G),fe.length>0&&Ua(fe,N,G),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function dp(w,N,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new ti(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Di:zi,minFilter:Xr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const re=d.state.transmissionRenderTarget[H.id],fe=H.viewport||L;re.setSize(fe.z,fe.w);const xe=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor($),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),qe&&Re.render(G);const ye=y.toneMapping;y.toneMapping=mr;const Ie=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),ne===!0&&ie.setGlobalState(y.clippingPlanes,H),Ua(w,G,H),b.updateMultisampleRenderTarget(re),b.updateRenderTargetMipmap(re),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Me=0,Je=N.length;Me<Je;Me++){const ct=N[Me],pt=ct.object,dn=ct.geometry,et=ct.material,we=ct.group;if(et.side===Qt&&pt.layers.test(H.layers)){const vi=et.side;et.side=Jt,et.needsUpdate=!0,pp(pt,G,H,dn,et,we),et.side=vi,et.needsUpdate=!0,Oe=!0}}Oe===!0&&(b.updateMultisampleRenderTarget(re),b.updateRenderTargetMipmap(re))}y.setRenderTarget(xe),y.setClearColor($,q),Ie!==void 0&&(H.viewport=Ie),y.toneMapping=ye}function Ua(w,N,G){const H=N.isScene===!0?N.overrideMaterial:null;for(let F=0,re=w.length;F<re;F++){const fe=w[F],xe=fe.object,ye=fe.geometry,Ie=H===null?fe.material:H,Oe=fe.group;xe.layers.test(G.layers)&&pp(xe,N,G,ye,Ie,Oe)}}function pp(w,N,G,H,F,re){w.onBeforeRender(y,N,G,H,F,re),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(y,N,G,H,w,re),F.transparent===!0&&F.side===Qt&&F.forceSinglePass===!1?(F.side=Jt,F.needsUpdate=!0,y.renderBufferDirect(G,N,H,F,w,re),F.side=xr,F.needsUpdate=!0,y.renderBufferDirect(G,N,H,F,w,re),F.side=Qt):y.renderBufferDirect(G,N,H,F,w,re),w.onAfterRender(y,N,G,H,F,re)}function Na(w,N,G){N.isScene!==!0&&(N=Mt);const H=Ce.get(w),F=d.state.lights,re=d.state.shadowsArray,fe=F.state.version,xe=Ee.getParameters(w,F.state,re,N,G),ye=Ee.getProgramCacheKey(xe);let Ie=H.programs;H.environment=w.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(w.isMeshStandardMaterial?k:S).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,Ie===void 0&&(w.addEventListener("dispose",Fe),Ie=new Map,H.programs=Ie);let Oe=Ie.get(ye);if(Oe!==void 0){if(H.currentProgram===Oe&&H.lightsStateVersion===fe)return gp(w,xe),Oe}else xe.uniforms=Ee.getUniforms(w),w.onBeforeCompile(xe,y),Oe=Ee.acquireProgram(xe,ye),Ie.set(ye,Oe),H.uniforms=xe.uniforms;const Me=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Me.clippingPlanes=ie.uniform),gp(w,xe),H.needsLights=hx(w),H.lightsStateVersion=fe,H.needsLights&&(Me.ambientLightColor.value=F.state.ambient,Me.lightProbe.value=F.state.probe,Me.directionalLights.value=F.state.directional,Me.directionalLightShadows.value=F.state.directionalShadow,Me.spotLights.value=F.state.spot,Me.spotLightShadows.value=F.state.spotShadow,Me.rectAreaLights.value=F.state.rectArea,Me.ltc_1.value=F.state.rectAreaLTC1,Me.ltc_2.value=F.state.rectAreaLTC2,Me.pointLights.value=F.state.point,Me.pointLightShadows.value=F.state.pointShadow,Me.hemisphereLights.value=F.state.hemi,Me.directionalShadowMap.value=F.state.directionalShadowMap,Me.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Me.spotShadowMap.value=F.state.spotShadowMap,Me.spotLightMatrix.value=F.state.spotLightMatrix,Me.spotLightMap.value=F.state.spotLightMap,Me.pointShadowMap.value=F.state.pointShadowMap,Me.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Oe,H.uniformsList=null,Oe}function mp(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=ec.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function gp(w,N){const G=Ce.get(w);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function cx(w,N,G,H,F){N.isScene!==!0&&(N=Mt),b.resetTextureUnits();const re=N.fog,fe=H.isMeshStandardMaterial?N.environment:null,xe=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:_o,ye=(H.isMeshStandardMaterial?k:S).get(H.envMap||fe),Ie=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Oe=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Me=!!G.morphAttributes.position,Je=!!G.morphAttributes.normal,ct=!!G.morphAttributes.color;let pt=mr;H.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pt=y.toneMapping);const dn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,et=dn!==void 0?dn.length:0,we=Ce.get(H),vi=d.state.lights;if(ne===!0&&(me===!0||w!==M)){const Un=w===M&&H.id===E;ie.setState(H,w,Un)}let tt=!1;H.version===we.__version?(we.needsLights&&we.lightsStateVersion!==vi.state.version||we.outputColorSpace!==xe||F.isBatchedMesh&&we.batching===!1||!F.isBatchedMesh&&we.batching===!0||F.isBatchedMesh&&we.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&we.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&we.instancing===!1||!F.isInstancedMesh&&we.instancing===!0||F.isSkinnedMesh&&we.skinning===!1||!F.isSkinnedMesh&&we.skinning===!0||F.isInstancedMesh&&we.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&we.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&we.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&we.instancingMorph===!1&&F.morphTexture!==null||we.envMap!==ye||H.fog===!0&&we.fog!==re||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ie.numPlanes||we.numIntersection!==ie.numIntersection)||we.vertexAlphas!==Ie||we.vertexTangents!==Oe||we.morphTargets!==Me||we.morphNormals!==Je||we.morphColors!==ct||we.toneMapping!==pt||we.morphTargetsCount!==et)&&(tt=!0):(tt=!0,we.__version=H.version);let Wn=we.currentProgram;tt===!0&&(Wn=Na(H,N,F));let ss=!1,Mn=!1,Eo=!1;const mt=Wn.getUniforms(),ri=we.uniforms;if(be.useProgram(Wn.program)&&(ss=!0,Mn=!0,Eo=!0),H.id!==E&&(E=H.id,Mn=!0),ss||M!==w){be.buffers.depth.getReversed()?(oe.copy(w.projectionMatrix),AS(oe),CS(oe),mt.setValue(O,"projectionMatrix",oe)):mt.setValue(O,"projectionMatrix",w.projectionMatrix),mt.setValue(O,"viewMatrix",w.matrixWorldInverse);const Wi=mt.map.cameraPosition;Wi!==void 0&&Wi.setValue(O,Ue.setFromMatrixPosition(w.matrixWorld)),$e.logarithmicDepthBuffer&&mt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&mt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Mn=!0,Eo=!0)}if(F.isSkinnedMesh){mt.setOptional(O,F,"bindMatrix"),mt.setOptional(O,F,"bindMatrixInverse");const Un=F.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),mt.setValue(O,"boneTexture",Un.boneTexture,b))}F.isBatchedMesh&&(mt.setOptional(O,F,"batchingTexture"),mt.setValue(O,"batchingTexture",F._matricesTexture,b),mt.setOptional(O,F,"batchingIdTexture"),mt.setValue(O,"batchingIdTexture",F._indirectTexture,b),mt.setOptional(O,F,"batchingColorTexture"),F._colorsTexture!==null&&mt.setValue(O,"batchingColorTexture",F._colorsTexture,b));const wo=G.morphAttributes;if((wo.position!==void 0||wo.normal!==void 0||wo.color!==void 0)&&De.update(F,G,Wn),(Mn||we.receiveShadow!==F.receiveShadow)&&(we.receiveShadow=F.receiveShadow,mt.setValue(O,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ri.envMap.value=ye,ri.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(ri.envMapIntensity.value=N.environmentIntensity),Mn&&(mt.setValue(O,"toneMappingExposure",y.toneMappingExposure),we.needsLights&&ux(ri,Eo),re&&H.fog===!0&&ue.refreshFogUniforms(ri,re),ue.refreshMaterialUniforms(ri,H,I,J,d.state.transmissionRenderTarget[w.id]),ec.upload(O,mp(we),ri,b)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ec.upload(O,mp(we),ri,b),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&mt.setValue(O,"center",F.center),mt.setValue(O,"modelViewMatrix",F.modelViewMatrix),mt.setValue(O,"normalMatrix",F.normalMatrix),mt.setValue(O,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Un=H.uniformsGroups;for(let Wi=0,Xi=Un.length;Wi<Xi;Wi++){const vp=Un[Wi];U.update(vp,Wn),U.bind(vp,Wn)}}return Wn}function ux(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function hx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,N,G){Ce.get(w.texture).__webglTexture=N,Ce.get(w.depthTexture).__webglTexture=G;const H=Ce.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const G=Ce.get(w);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,G=0){C=w,A=N,T=G;let H=!0,F=null,re=!1,fe=!1;if(w){const ye=Ce.get(w);if(ye.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(O.FRAMEBUFFER,null),H=!1;else if(ye.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(ye.__hasExternalTextures)b.rebindTextures(w,Ce.get(w.texture).__webglTexture,Ce.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Me=w.depthTexture;if(ye.__boundDepthTexture!==Me){if(Me!==null&&Ce.has(Me)&&(w.width!==Me.image.width||w.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const Ie=w.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(fe=!0);const Oe=Ce.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[N])?F=Oe[N][G]:F=Oe[N],re=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?F=Ce.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?F=Oe[G]:F=Oe,L.copy(w.viewport),B.copy(w.scissor),z=w.scissorTest}else L.copy(ae).multiplyScalar(I).floor(),B.copy(Se).multiplyScalar(I).floor(),z=Qe;if(be.bindFramebuffer(O.FRAMEBUFFER,F)&&H&&be.drawBuffers(w,F),be.viewport(L),be.scissor(B),be.setScissorTest(z),re){const ye=Ce.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye.__webglTexture,G)}else if(fe){const ye=Ce.get(w.texture),Ie=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ye.__webglTexture,G||0,Ie)}E=-1},this.readRenderTargetPixels=function(w,N,G,H,F,re,fe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ce.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){be.bindFramebuffer(O.FRAMEBUFFER,xe);try{const ye=w.texture,Ie=ye.format,Oe=ye.type;if(!$e.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-H&&G>=0&&G<=w.height-F&&O.readPixels(N,G,H,F,ke.convert(Ie),ke.convert(Oe),re)}finally{const ye=C!==null?Ce.get(C).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(w,N,G,H,F,re,fe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ce.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){const ye=w.texture,Ie=ye.format,Oe=ye.type;if(!$e.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-H&&G>=0&&G<=w.height-F){be.bindFramebuffer(O.FRAMEBUFFER,xe);const Me=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Me),O.bufferData(O.PIXEL_PACK_BUFFER,re.byteLength,O.STREAM_READ),O.readPixels(N,G,H,F,ke.convert(Ie),ke.convert(Oe),0);const Je=C!==null?Ce.get(C).__webglFramebuffer:null;be.bindFramebuffer(O.FRAMEBUFFER,Je);const ct=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await TS(O,ct,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Me),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,re),O.deleteBuffer(Me),O.deleteSync(ct),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,G=0){w.isTexture!==!0&&(Zo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-G),F=Math.floor(w.image.width*H),re=Math.floor(w.image.height*H),fe=N!==null?N.x:0,xe=N!==null?N.y:0;b.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,fe,xe,F,re),be.unbindTexture()},this.copyTextureToTexture=function(w,N,G=null,H=null,F=0){w.isTexture!==!0&&(Zo("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],N=arguments[2],F=arguments[3]||0,G=null);let re,fe,xe,ye,Ie,Oe,Me,Je,ct;const pt=w.isCompressedTexture?w.mipmaps[F]:w.image;G!==null?(re=G.max.x-G.min.x,fe=G.max.y-G.min.y,xe=G.isBox3?G.max.z-G.min.z:1,ye=G.min.x,Ie=G.min.y,Oe=G.isBox3?G.min.z:0):(re=pt.width,fe=pt.height,xe=pt.depth||1,ye=0,Ie=0,Oe=0),H!==null?(Me=H.x,Je=H.y,ct=H.z):(Me=0,Je=0,ct=0);const dn=ke.convert(N.format),et=ke.convert(N.type);let we;N.isData3DTexture?(b.setTexture3D(N,0),we=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(b.setTexture2DArray(N,0),we=O.TEXTURE_2D_ARRAY):(b.setTexture2D(N,0),we=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);const vi=O.getParameter(O.UNPACK_ROW_LENGTH),tt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Wn=O.getParameter(O.UNPACK_SKIP_PIXELS),ss=O.getParameter(O.UNPACK_SKIP_ROWS),Mn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,pt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ye),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ie),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Oe);const Eo=w.isDataArrayTexture||w.isData3DTexture,mt=N.isDataArrayTexture||N.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const ri=Ce.get(w),wo=Ce.get(N),Un=Ce.get(ri.__renderTarget),Wi=Ce.get(wo.__renderTarget);be.bindFramebuffer(O.READ_FRAMEBUFFER,Un.__webglFramebuffer),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Xi=0;Xi<xe;Xi++)Eo&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.get(w).__webglTexture,F,Oe+Xi),w.isDepthTexture?(mt&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.get(N).__webglTexture,F,ct+Xi),O.blitFramebuffer(ye,Ie,re,fe,Me,Je,re,fe,O.DEPTH_BUFFER_BIT,O.NEAREST)):mt?O.copyTexSubImage3D(we,F,Me,Je,ct+Xi,ye,Ie,re,fe):O.copyTexSubImage2D(we,F,Me,Je,ct+Xi,ye,Ie,re,fe);be.bindFramebuffer(O.READ_FRAMEBUFFER,null),be.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else mt?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(we,F,Me,Je,ct,re,fe,xe,dn,et,pt.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(we,F,Me,Je,ct,re,fe,xe,dn,pt.data):O.texSubImage3D(we,F,Me,Je,ct,re,fe,xe,dn,et,pt):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,F,Me,Je,re,fe,dn,et,pt.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,F,Me,Je,pt.width,pt.height,dn,pt.data):O.texSubImage2D(O.TEXTURE_2D,F,Me,Je,re,fe,dn,et,pt);O.pixelStorei(O.UNPACK_ROW_LENGTH,vi),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,tt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Wn),O.pixelStorei(O.UNPACK_SKIP_ROWS,ss),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Mn),F===0&&N.generateMipmaps&&O.generateMipmap(we),be.unbindTexture()},this.copyTextureToTexture3D=function(w,N,G=null,H=null,F=0){return w.isTexture!==!0&&(Zo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,w=arguments[2],N=arguments[3],F=arguments[4]||0),Zo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,G,H,F)},this.initRenderTarget=function(w){Ce.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),be.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,be.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}class Xt{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new se(e),this.density=t}clone(){return new Xt(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class FA extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class OA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wf,this.updateRanges=[],this.version=0,this.uuid=gr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new D;class bc{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ne(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class tx extends rs{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ms;const Oo=new D,Ss=new D,Es=new D,ws=new Te,Bo=new Te,nx=new ht,yl=new D,ko=new D,Ml=new D,w0=new Te,th=new Te,T0=new Te;class BA extends Vt{constructor(e=new tx){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new Le;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new OA(t,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new bc(i,3,0,!1)),Ms.setAttribute("uv",new bc(i,2,3,!1))}this.geometry=Ms,this.material=e,this.center=new Te(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),nx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Es.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-Es.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Sl(yl.set(-.5,-.5,0),Es,o,Ss,r,s),Sl(ko.set(.5,-.5,0),Es,o,Ss,r,s),Sl(Ml.set(.5,.5,0),Es,o,Ss,r,s),w0.set(0,0),th.set(1,0),T0.set(1,1);let a=e.ray.intersectTriangle(yl,ko,Ml,!1,Oo);if(a===null&&(Sl(ko.set(-.5,.5,0),Es,o,Ss,r,s),th.set(0,1),a=e.ray.intersectTriangle(yl,Ml,ko,!1,Oo),a===null))return;const l=e.ray.origin.distanceTo(Oo);l<e.near||l>e.far||t.push({distance:l,point:Oo.clone(),uv:An.getInterpolation(Oo,yl,ko,Ml,w0,th,T0,new Te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Sl(n,e,t,i,r,s){ws.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Bo.x=s*ws.x-r*ws.y,Bo.y=r*ws.x+s*ws.y):Bo.copy(ws),n.copy(e),n.x+=Bo.x,n.y+=Bo.y,n.applyMatrix4(nx)}class kA extends en{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Rn,h=Rn,u,f){super(null,o,a,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jf extends Ne{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ts=new ht,A0=new ht,El=[],C0=new ns,zA=new ht,zo=new We,Go=new is;class GA extends We{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,zA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ns),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ts),C0.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(C0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new is),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ts),Go.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(Go)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(zo.geometry=this.geometry,zo.material=this.material,zo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Go.copy(this.boundingSphere),Go.applyMatrix4(i),e.ray.intersectsSphere(Go)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ts),A0.multiplyMatrices(i,Ts),zo.matrixWorld=A0,zo.raycast(e,El);for(let o=0,a=El.length;o<a;o++){const l=El[o];l.instanceId=s,l.object=this,t.push(l)}El.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new kA(new Float32Array(r*this.count),r,this.count,jd,fi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class it extends rs{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rc=new D,Pc=new D,b0=new ht,Ho=new Zd,wl=new is,nh=new D,R0=new D;class Ui extends Vt{constructor(e=new Le,t=new it){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Rc.fromBufferAttribute(t,r-1),Pc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Rc.distanceTo(Pc);e.setAttribute("lineDistance",new nt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wl.copy(i.boundingSphere),wl.applyMatrix4(r),wl.radius+=s,e.ray.intersectsSphere(wl)===!1)return;b0.copy(r).invert(),Ho.copy(e.ray).applyMatrix4(b0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=h.getX(_),v=h.getX(_+1),x=Tl(this,e,Ho,l,d,v);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),d=Tl(this,e,Ho,l,_,m);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=Tl(this,e,Ho,l,_,_+1);d&&t.push(d)}if(this.isLineLoop){const _=Tl(this,e,Ho,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Tl(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(Rc.fromBufferAttribute(o,r),Pc.fromBufferAttribute(o,s),t.distanceSqToSegment(Rc,Pc,nh,R0)>i)return;nh.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(nh);if(!(l<e.near||l>e.far))return{distance:l,point:R0.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const P0=new D,L0=new D;class _t extends Ui{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)P0.fromBufferAttribute(t,r),L0.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+P0.distanceTo(L0);e.setAttribute("lineDistance",new nt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hi extends rs{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const D0=new ht,Yf=new Zd,Al=new is,Cl=new D;class Ni extends Vt{constructor(e=new Le,t=new Hi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(r),Al.radius+=s,e.ray.intersectsSphere(Al)===!1)return;D0.copy(r).invert(),Yf.copy(e.ray).applyMatrix4(D0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);Cl.fromBufferAttribute(u,m),I0(Cl,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Cl.fromBufferAttribute(u,g),I0(Cl,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function I0(n,e,t,i,r,s,o){const a=Yf.distanceSqToPoint(n);if(a<t){const l=new D;Yf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class fo extends en{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jd extends Le{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],u=[],f=[],p=[];let g=0;const _=[],m=i/2;let d=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(p,2));function v(){const y=new D,P=new D;let A=0;const T=(t-e)/i;for(let C=0;C<=s;C++){const E=[],M=C/s,L=M*(t-e)+e;for(let B=0;B<=r;B++){const z=B/r,$=z*l+a,q=Math.sin($),X=Math.cos($);P.x=L*q,P.y=-M*i+m,P.z=L*X,u.push(P.x,P.y,P.z),y.set(q,T,X).normalize(),f.push(y.x,y.y,y.z),p.push(z,1-M),E.push(g++)}_.push(E)}for(let C=0;C<r;C++)for(let E=0;E<s;E++){const M=_[E][C],L=_[E+1][C],B=_[E+1][C+1],z=_[E][C+1];(e>0||E!==0)&&(h.push(M,L,z),A+=3),(t>0||E!==s-1)&&(h.push(L,B,z),A+=3)}c.addGroup(d,A,0),d+=A}function x(y){const P=g,A=new Te,T=new D;let C=0;const E=y===!0?e:t,M=y===!0?1:-1;for(let B=1;B<=r;B++)u.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const L=g;for(let B=0;B<=r;B++){const $=B/r*l+a,q=Math.cos($),X=Math.sin($);T.x=E*X,T.y=m*M,T.z=E*q,u.push(T.x,T.y,T.z),f.push(0,M,0),A.x=q*.5+.5,A.y=X*.5*M+.5,p.push(A.x,A.y),g++}for(let B=0;B<r;B++){const z=P+B,$=L+B;y===!0?h.push($,$+1,z):h.push($+1,$,z),C+=3}c.addGroup(d,C,y===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ep extends Jd{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ep(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mo extends Le{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new nt(s,3)),this.setAttribute("normal",new nt(s.slice(),3)),this.setAttribute("uv",new nt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const x=new D,y=new D,P=new D;for(let A=0;A<t.length;A+=3)p(t[A+0],x),p(t[A+1],y),p(t[A+2],P),l(x,y,P,v)}function l(v,x,y,P){const A=P+1,T=[];for(let C=0;C<=A;C++){T[C]=[];const E=v.clone().lerp(y,C/A),M=x.clone().lerp(y,C/A),L=A-C;for(let B=0;B<=L;B++)B===0&&C===A?T[C][B]=E:T[C][B]=E.clone().lerp(M,B/L)}for(let C=0;C<A;C++)for(let E=0;E<2*(A-C)-1;E++){const M=Math.floor(E/2);E%2===0?(f(T[C][M+1]),f(T[C+1][M]),f(T[C][M])):(f(T[C][M+1]),f(T[C+1][M+1]),f(T[C+1][M]))}}function c(v){const x=new D;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(v),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function h(){const v=new D;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const y=m(v)/2/Math.PI+.5,P=d(v)/Math.PI+.5;o.push(y,1-P)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const x=o[v+0],y=o[v+2],P=o[v+4],A=Math.max(x,y,P),T=Math.min(x,y,P);A>.9&&T<.1&&(x<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),P<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function p(v,x){const y=v*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function g(){const v=new D,x=new D,y=new D,P=new D,A=new Te,T=new Te,C=new Te;for(let E=0,M=0;E<s.length;E+=9,M+=6){v.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),y.set(s[E+6],s[E+7],s[E+8]),A.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),P.copy(v).add(x).add(y).divideScalar(3);const L=m(P);_(A,M+0,v,L),_(T,M+2,x,L),_(C,M+4,y,L)}}function _(v,x,y,P){P<0&&v.x===1&&(o[x]=v.x-1),y.x===0&&y.z===0&&(o[x]=P/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.vertices,e.indices,e.radius,e.details)}}class tp extends Mo{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new tp(e.radius,e.detail)}}const bl=new D,Rl=new D,ih=new D,Pl=new An;class HA extends Le{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Jl*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:d}=Pl;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),Pl.getNormal(ih),u[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){const x=(v+1)%3,y=u[v],P=u[x],A=Pl[h[v]],T=Pl[h[x]],C=`${y}_${P}`,E=`${P}_${y}`;E in f&&f[E]?(ih.dot(f[E].normal)<=s&&(p.push(A.x,A.y,A.z),p.push(T.x,T.y,T.z)),f[E]=null):C in f||(f[C]={index0:c[v],index1:c[x],normal:ih.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];bl.fromBufferAttribute(a,_),Rl.fromBufferAttribute(a,m),p.push(bl.x,bl.y,bl.z),p.push(Rl.x,Rl.y,Rl.z)}this.setAttribute("position",new nt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class mi extends Mo{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mi(e.radius,e.detail)}}class np extends Mo{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new np(e.radius,e.detail)}}class ip extends Le{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let u=e;const f=(t-e)/r,p=new D,g=new Te;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const d=s+m/i*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<r;_++){const m=_*(i+1);for(let d=0;d<i;d++){const v=d+m,x=v,y=v+i+1,P=v+i+2,A=v+1;a.push(x,y,A),a.push(y,P,A)}}this.setIndex(a),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ip(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class yr extends Le{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,f=new D,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const v=[],x=d/i;let y=0;d===0&&o===0?y=.5/t:d===i&&l===Math.PI&&(y=-.5/t);for(let P=0;P<=t;P++){const A=P/t;u.x=-e*Math.cos(r+A*s)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(r+A*s)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(A+y,1-x),v.push(c++)}h.push(v)}for(let d=0;d<i;d++)for(let v=0;v<t;v++){const x=h[d][v+1],y=h[d][v],P=h[d+1][v],A=h[d+1][v+1];(d!==0||o>0)&&p.push(x,y,A),(d!==i-1||l<Math.PI)&&p.push(y,P,A)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rp extends Mo{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rp(e.radius,e.detail)}}class Qc extends Le{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new D,u=new D,f=new D;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const _=g/r*s,m=p/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const _=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,v=(r+1)*p+g;o.push(_,m,v),o.push(m,d,v)}this.setIndex(o),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Mr extends Le{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new D,s=new D;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],f=u.start,p=u.count;for(let g=f,_=f+p;g<_;g+=3)for(let m=0;m<3;m++){const d=a.getX(g+m),v=a.getX(g+(m+1)%3);r.fromBufferAttribute(o,d),s.fromBufferAttribute(o,v),U0(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,u=3*a+(c+1)%3;r.fromBufferAttribute(o,h),s.fromBufferAttribute(o,u),U0(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new nt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function U0(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}class VA extends cn{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class sp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=N0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=N0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function N0(){return performance.now()}class ix extends _t{constructor(e=10,t=10,i=4473924,r=8947848){i=new se(i),r=new se(r);const s=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,p=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=f===s?i:r;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const h=new Le;h.setAttribute("position",new nt(l,3)),h.setAttribute("color",new nt(c,3));const u=new it({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vd);const rx={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class So{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const WA=new q_(-1,1,1,-1,0,1);class XA extends Le{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}}const $A=new XA;class op{constructor(e){this._mesh=new We($A,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,WA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class jA extends So{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof cn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ca.clone(e.uniforms),this.material=new cn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new op(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class F0 extends So{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class YA extends So{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class qA{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Te);this._width=i.width,this._height=i.height,t=new ti(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Di}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jA(rx),this.copyPass.material.blending=Li,this.clock=new sp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}F0!==void 0&&(o instanceof F0?i=!0:o instanceof YA&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class KA extends So{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new se}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const ZA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class po extends So{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Te(e.x,e.y):new Te(256,256),this.clearColor=new se(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ti(s,o,{type:Di}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new ti(s,o,{type:Di});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new ti(s,o,{type:Di});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),s=Math.round(s/2),o=Math.round(o/2)}const a=ZA;this.highPassUniforms=Ca.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new cn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Te(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=rx;this.copyUniforms=Ca.clone(h.uniforms),this.blendMaterial=new cn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ae,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new se,this.oldClearAlpha=1,this.basic=new Lt,this.fsQuad=new op(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Te(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=po.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=po.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new cn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Te(.5,.5)},direction:{value:new Te(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new cn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}po.BlurDirectionX=new Te(1,0);po.BlurDirectionY=new Te(0,1);const QA={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class JA extends So{constructor(){super();const e=QA;this.uniforms=Ca.clone(e.uniforms),this.material=new VA({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new op(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ye.getTransfer(this._outputColorSpace)===st&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===y_?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===M_?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===S_?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===E_?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===w_?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===T_&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ft{constructor(){R(this,"scene");R(this,"camera");R(this,"clock");this.scene=new FA,this.camera=new Bn(75,window.innerWidth/window.innerHeight,.1,1e3),this.clock=new sp}onResize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}}class e2 extends ft{constructor(){super();R(this,"particles");R(this,"particleMaterial");R(this,"nebulaSphere1");R(this,"nebulaSphere2");R(this,"time",0);R(this,"beatFlash",0);this.scene.background=new se(5)}init(){const i=new Float32Array(18e4),r=new Float32Array(6e4*3),s=new se(8908),o=new se(39372),a=new se(4504541);for(let p=0;p<6e4;p++){const g=Math.cbrt(Math.random())*80,_=Math.random()*Math.PI*2,m=Math.acos(2*Math.random()-1),d=g*Math.sin(m)*Math.cos(_),v=g*Math.sin(m)*Math.sin(_),x=g*Math.cos(m);i[p*3]=d,i[p*3+1]=v,i[p*3+2]=x;const y=g/80;let P;y<.5?P=a.clone().lerp(o,y*2):P=o.clone().lerp(s,(y-.5)*2),r[p*3]=P.r,r[p*3+1]=P.g,r[p*3+2]=P.b}const l=new Le;l.setAttribute("position",new Ne(i,3)),l.setAttribute("color",new Ne(r,3)),this.particleMaterial=new Hi({size:.2,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Ae,depthWrite:!1}),this.particles=new Ni(l,this.particleMaterial),this.scene.add(this.particles);const c=new yr(40,32,32),h=new Lt({color:2099,transparent:!0,opacity:.18,side:Jt,depthWrite:!1});this.nebulaSphere1=new We(c,h),this.scene.add(this.nebulaSphere1);const u=new yr(60,32,32),f=new Lt({color:4437,transparent:!0,opacity:.1,side:Jt,depthWrite:!1});this.nebulaSphere2=new We(u,f),this.scene.add(this.nebulaSphere2),this.camera.position.set(0,0,0),this.camera.lookAt(0,0,-1)}update(t,i){this.time+=t;const r=5;this.camera.position.x=Math.sin(this.time*.08)*r,this.camera.position.y=Math.cos(this.time*.06)*r*.5,this.camera.position.z=Math.cos(this.time*.05)*r,this.camera.lookAt(0,0,0),i.beat&&(this.beatFlash=1),this.beatFlash*=.88;const s=1+i.bass*1.5+this.beatFlash*.2;this.particles.scale.setScalar(s),this.particles.rotation.y+=t*(.03+i.volume*.08),this.particleMaterial.size=.18+i.treble*.18+this.beatFlash*.12;const o=1+i.volume*.12+i.bass*.08;this.nebulaSphere1.scale.setScalar(o),this.nebulaSphere2.scale.setScalar(o*.97),this.nebulaSphere1.material.opacity=.15+i.bass*.12,this.nebulaSphere2.material.opacity=.08+i.volume*.1}dispose(){this.particles.geometry.dispose(),this.particleMaterial.dispose(),this.nebulaSphere1.material.dispose(),this.nebulaSphere1.geometry.dispose(),this.nebulaSphere2.material.dispose(),this.nebulaSphere2.geometry.dispose()}}class t2 extends ft{constructor(){super();R(this,"tunnelLines");R(this,"tunnelMaterial");R(this,"longitudinalLines");R(this,"longitudinalMaterial");R(this,"horizonGlow");R(this,"horizonMaterial");R(this,"RING_COUNT",80);R(this,"SEGMENTS",24);R(this,"RADIUS",8);R(this,"Z_START",10);R(this,"Z_END",-400);R(this,"Z_SPACING",410/80);R(this,"ringScales",new Float32Array(80));R(this,"beatFlash",0);R(this,"time",0);this.scene.background=new se(131077)}init(){const t=this.RING_COUNT*this.SEGMENTS*2,i=new Float32Array(t*3);let r=0;for(let f=0;f<this.RING_COUNT;f++){const p=this.Z_START-f*this.Z_SPACING;for(let g=0;g<this.SEGMENTS;g++){const _=g/this.SEGMENTS*Math.PI*2,m=(g+1)/this.SEGMENTS*Math.PI*2;i[r++]=Math.cos(_)*this.RADIUS,i[r++]=Math.sin(_)*this.RADIUS,i[r++]=p,i[r++]=Math.cos(m)*this.RADIUS,i[r++]=Math.sin(m)*this.RADIUS,i[r++]=p}}const s=new Le;s.setAttribute("position",new Ne(i,3)),this.tunnelMaterial=new it({color:16711884,transparent:!0,opacity:.8}),this.tunnelLines=new _t(s,this.tunnelMaterial),this.scene.add(this.tunnelLines);const o=6,a=o*(this.RING_COUNT-1)*2,l=new Float32Array(a*3);let c=0;for(let f=0;f<o;f++){const p=f/o*Math.PI*2,g=Math.cos(p)*this.RADIUS,_=Math.sin(p)*this.RADIUS;for(let m=0;m<this.RING_COUNT-1;m++){const d=this.Z_START-m*this.Z_SPACING,v=this.Z_START-(m+1)*this.Z_SPACING;l[c++]=g,l[c++]=_,l[c++]=d,l[c++]=g,l[c++]=_,l[c++]=v}}const h=new Le;h.setAttribute("position",new Ne(l,3)),this.longitudinalMaterial=new it({color:16711884,transparent:!0,opacity:.4}),this.longitudinalLines=new _t(h,this.longitudinalMaterial),this.scene.add(this.longitudinalLines);const u=new ii(40,40);this.horizonMaterial=new Lt({color:16711884,transparent:!0,opacity:.12,blending:Ae,depthWrite:!1,side:Qt}),this.horizonGlow=new We(u,this.horizonMaterial),this.horizonGlow.position.z=this.Z_END+20,this.scene.add(this.horizonGlow),this.camera.position.set(0,0,this.Z_START),this.camera.lookAt(0,0,this.Z_START-100);for(let f=0;f<this.RING_COUNT;f++)this.ringScales[f]=1}update(t,i){this.time+=t;const r=10+i.bass*60;this.camera.position.z-=r*t,this.camera.position.z<this.Z_END+50&&(this.camera.position.z=this.Z_START),this.camera.position.x=Math.sin(this.time*.4)*(2.5+i.bass*3),this.camera.position.y=Math.cos(this.time*.3)*(1.5+i.bass*2),this.camera.lookAt(this.camera.position.x*.1,this.camera.position.y*.1,this.camera.position.z-50),i.beat&&(this.beatFlash=1),this.beatFlash=Math.max(0,this.beatFlash-t*3);const s=this.beatFlash,o=i.volume,a=new se(16711884),l=new se(16777215),c=a.clone().lerp(l,s*.9+o*.4);this.tunnelMaterial.color.set(c),this.longitudinalMaterial.color.set(c),this.tunnelMaterial.opacity=.5+s*.5,this.longitudinalMaterial.opacity=.25+s*.45+o*.2;const h=this.tunnelLines.geometry,u=h.attributes.position.array;let f=0;for(let p=0;p<this.RING_COUNT;p++){const g=this.Z_START-p*this.Z_SPACING;Math.abs(g-this.camera.position.z);const _=Math.sin(this.time*3+p*.3)*.15,m=1+i.bass*.65+_+(i.beat?.2:0);for(let d=0;d<this.SEGMENTS;d++){const v=d/this.SEGMENTS*Math.PI*2,x=(d+1)/this.SEGMENTS*Math.PI*2;u[f++]=Math.cos(v)*this.RADIUS*m,u[f++]=Math.sin(v)*this.RADIUS*m,u[f++]=g,u[f++]=Math.cos(x)*this.RADIUS*m,u[f++]=Math.sin(x)*this.RADIUS*m,u[f++]=g}}h.attributes.position.needsUpdate=!0,this.horizonMaterial.opacity=.06+i.bass*.45+s*.35}dispose(){this.tunnelLines.geometry.dispose(),this.tunnelMaterial.dispose(),this.longitudinalLines.geometry.dispose(),this.longitudinalMaterial.dispose(),this.horizonGlow.geometry.dispose(),this.horizonMaterial.dispose()}}class n2 extends ft{constructor(){super();R(this,"nodes",[]);R(this,"edgeLines");R(this,"edgeGeo");R(this,"edgeColors");R(this,"edgeVertexMap",new Map);R(this,"firingNodes",new Map);R(this,"firingEdges",new Map);R(this,"autoFireTimer",0);R(this,"time",0);R(this,"colorDarkGreen",new se(6664));R(this,"colorLimeGreen",new se(52275));R(this,"colorBrightGreen",new se(3390208));R(this,"colorWhite",new se(8978346));R(this,"colorEdgeBase",new se(7950));this.scene.background=new se(2560)}init(){for(let c=0;c<180;c++){const h=new D((Math.random()-.5)*50*2,(Math.random()-.5)*50*2,(Math.random()-.5)*50*2),u=new yr(.4,8,8),f=new Lt({color:this.colorDarkGreen.clone()}),p=new We(u,f);p.position.copy(h),this.scene.add(p),this.nodes.push({position:h,mesh:p,material:f,neighbors:[]})}for(let c=0;c<180;c++)for(let h=c+1;h<180;h++)this.nodes[c].position.distanceTo(this.nodes[h].position)<22&&(this.nodes[c].neighbors.push(h),this.nodes[h].neighbors.push(c));const s=[];for(let c=0;c<180;c++)for(const h of this.nodes[c].neighbors)h>c&&s.push([c,h]);const o=s.length*2,a=new Float32Array(o*3);this.edgeColors=new Float32Array(o*3);for(let c=0;c<s.length;c++){const[h,u]=s[c],f=this.nodes[h].position,p=this.nodes[u].position,g=c*2;a[g*3+0]=f.x,a[g*3+1]=f.y,a[g*3+2]=f.z,a[(g+1)*3+0]=p.x,a[(g+1)*3+1]=p.y,a[(g+1)*3+2]=p.z,this.edgeColors[g*3+0]=this.colorEdgeBase.r,this.edgeColors[g*3+1]=this.colorEdgeBase.g,this.edgeColors[g*3+2]=this.colorEdgeBase.b,this.edgeColors[(g+1)*3+0]=this.colorEdgeBase.r,this.edgeColors[(g+1)*3+1]=this.colorEdgeBase.g,this.edgeColors[(g+1)*3+2]=this.colorEdgeBase.b;const _=`${h}-${u}`;this.edgeVertexMap.set(_,g)}this.edgeGeo=new Le,this.edgeGeo.setAttribute("position",new Ne(a,3)),this.edgeGeo.setAttribute("color",new Ne(this.edgeColors,3));const l=new it({vertexColors:!0,transparent:!0,opacity:.5,blending:Ae,depthWrite:!1});this.edgeLines=new _t(this.edgeGeo,l),this.scene.add(this.edgeLines),this.camera.position.set(0,0,80),this.camera.lookAt(0,0,0)}fireSources(t){const i=new Set;for(let r=0;r<t*3&&i.size<t;r++)i.add(Math.floor(Math.random()*this.nodes.length));i.forEach(r=>{this.firingNodes.set(r,{timeRemaining:.8,propagated:!1})})}update(t,i){if(this.time+=t,this.autoFireTimer-=t,this.autoFireTimer<=0||i.beat){const l=2+Math.floor(i.bass*8);this.fireSources(l),this.autoFireTimer=i.beat?.25:1}const r=[];this.firingNodes.forEach((l,c)=>{if(l.timeRemaining-=t,!l.propagated&&l.timeRemaining<.6){l.propagated=!0;const h=2+Math.floor(i.bass*5),u=this.nodes[c].neighbors;for(let f=0;f<Math.min(h,u.length);f++){const p=u[Math.floor(Math.random()*u.length)];this.firingNodes.has(p)||this.firingNodes.set(p,{timeRemaining:.6,propagated:!1});const g=c<p?`${c}-${p}`:`${p}-${c}`;this.firingEdges.set(g,{timeRemaining:.5})}}l.timeRemaining<=0&&r.push(c)}),r.forEach(l=>this.firingNodes.delete(l));const s=[];this.firingEdges.forEach((l,c)=>{l.timeRemaining-=t,l.timeRemaining<=0&&s.push(c)}),s.forEach(l=>this.firingEdges.delete(l)),this.nodes.forEach((l,c)=>{const h=this.firingNodes.get(c);if(h){const u=h.timeRemaining/.8;l.material.color.lerpColors(this.colorWhite,this.colorLimeGreen,1-u);const f=1+u*3.5+i.bass*1.5;l.mesh.scale.setScalar(f)}else l.material.color.lerpColors(this.colorDarkGreen,l.material.color,.85),l.mesh.scale.lerp(new D(1,1,1),.1)});for(let l=0;l<this.edgeColors.length;l+=3)this.edgeColors[l]=this.colorEdgeBase.r,this.edgeColors[l+1]=this.colorEdgeBase.g,this.edgeColors[l+2]=this.colorEdgeBase.b;this.firingEdges.forEach((l,c)=>{const h=this.edgeVertexMap.get(c);if(h===void 0)return;const u=l.timeRemaining/.5,f=this.colorBrightGreen.clone().lerp(this.colorWhite,1-u);this.edgeColors[h*3+0]=f.r,this.edgeColors[h*3+1]=f.g,this.edgeColors[h*3+2]=f.b,this.edgeColors[(h+1)*3+0]=f.r,this.edgeColors[(h+1)*3+1]=f.g,this.edgeColors[(h+1)*3+2]=f.b}),this.edgeGeo.attributes.color.needsUpdate=!0;const o=95+i.volume*20,a=.12;this.camera.position.x=Math.sin(this.time*a)*o,this.camera.position.y=Math.cos(this.time*a*.7)*o*.4,this.camera.position.z=Math.cos(this.time*a)*o,this.camera.lookAt(0,0,0)}dispose(){this.nodes.forEach(t=>{t.mesh.geometry.dispose(),t.material.dispose()}),this.edgeGeo.dispose(),this.edgeLines.material.dispose()}}class i2 extends ft{constructor(){super();R(this,"planetWireframe");R(this,"planetMaterial");R(this,"rings",[]);R(this,"ringMaterials",[]);R(this,"equatorialRing");R(this,"equatorialMaterial");R(this,"stars");R(this,"beatFlash",0);R(this,"time",0);this.scene.background=new se(327680)}init(){const t=new mi(20,4),i=new Mr(t);t.dispose(),this.planetMaterial=new it({color:16737792,transparent:!0,opacity:.8}),this.planetWireframe=new _t(i,this.planetMaterial),this.scene.add(this.planetWireframe),[{radius:22,angle:0},{radius:26,angle:Math.PI/6},{radius:30,angle:Math.PI/3}].forEach(h=>{const u=new Qc(h.radius,.15,8,80),f=new it({color:16755200,transparent:!0,opacity:.5,blending:Ae}),p=new Mr(u);u.dispose();const g=new _t(p,f);g.rotation.x=h.angle,this.scene.add(g),this.rings.push(g),this.ringMaterials.push(f)});const s=new ip(21,23,80);this.equatorialMaterial=new Lt({color:16755200,transparent:!0,opacity:.15,blending:Ae,depthWrite:!1,side:Qt}),this.equatorialRing=new We(s,this.equatorialMaterial),this.scene.add(this.equatorialRing);const o=1e4,a=new Float32Array(o*3);for(let h=0;h<o;h++){const u=300+Math.random()*400,f=Math.random()*Math.PI*2,p=Math.acos(2*Math.random()-1);a[h*3]=u*Math.sin(p)*Math.cos(f),a[h*3+1]=u*Math.sin(p)*Math.sin(f),a[h*3+2]=u*Math.cos(p)}const l=new Le;l.setAttribute("position",new Ne(a,3));const c=new Hi({color:16777215,size:.5,sizeAttenuation:!0,transparent:!0,opacity:.6});this.stars=new Ni(l,c),this.scene.add(this.stars),this.camera.position.set(0,10,60),this.camera.lookAt(0,0,0)}update(t,i){this.time+=t;const r=.1+i.volume*5;this.planetWireframe.rotation.y+=r*t,this.planetWireframe.rotation.x+=i.bass*.6*t,i.beat&&(this.beatFlash=1),this.beatFlash=Math.max(0,this.beatFlash-t*2.5);const s=new se(16737792),o=new se(16777215);this.planetMaterial.color.lerpColors(s,o,this.beatFlash*.9+i.volume*.2),this.planetMaterial.opacity=.6+this.beatFlash*.4;const a=1+this.beatFlash*.2+i.bass*.18;this.planetWireframe.scale.setScalar(a),this.rings[0].rotation.x+=.003*t*60,this.rings[0].rotation.y+=.002*t*60,this.rings[1].rotation.z+=.004*t*60,this.rings[1].rotation.x=Math.PI/6+this.time*.01,this.rings[2].rotation.y+=.005*t*60,this.rings[2].rotation.z=Math.PI/3+this.time*.008;const l=38+(1-i.bass)*35+Math.sin(this.time*.5)*5;this.camera.position.z+=(l-this.camera.position.z)*.08,this.camera.position.x=Math.sin(this.time*.05)*5,this.camera.position.y=10+Math.cos(this.time*.04)*5,this.camera.lookAt(0,0,0),this.equatorialMaterial.opacity=.05+i.treble*.65,this.ringMaterials.forEach(c=>{c.opacity=.2+i.volume*.5+i.bass*.4+this.beatFlash*.4})}dispose(){this.planetWireframe.geometry.dispose(),this.planetMaterial.dispose(),this.rings.forEach(t=>{t.geometry.dispose()}),this.ringMaterials.forEach(t=>t.dispose()),this.equatorialRing.geometry.dispose(),this.equatorialMaterial.dispose(),this.stars.geometry.dispose(),this.stars.material.dispose()}}const r2="0123456789ABCDEF",Ll="0123456789ABCDEF01";function As(n){let e="0x";for(let t=0;t<n;t++)e+=r2[Math.floor(Math.random()*16)];return e}function O0(){const n=[()=>`SYNC > ${As(4)}`,()=>`UPLINK: ${Math.random()>.5?"ESTABLISHED":"PENDING"}`,()=>`ΔT: +${(Math.random()*.01).toFixed(6)}ms`,()=>`${As(8)} ${As(8)}`,()=>`2047.${String(Math.floor(Math.random()*12+1)).padStart(2,"0")}.${String(Math.floor(Math.random()*28+1)).padStart(2,"0")} ${String(Math.floor(Math.random()*24)).padStart(2,"0")}:${String(Math.floor(Math.random()*60)).padStart(2,"0")}:${String(Math.floor(Math.random()*60)).padStart(2,"0")}.${String(Math.floor(Math.random()*1e3)).padStart(3,"0")}`,()=>`FREQ: ${(Math.random()*1e3).toFixed(2)} MHz`,()=>`NODE_${String(Math.floor(Math.random()*256)).padStart(3,"0")} OK`,()=>`ERR: ${As(2)} AT ${As(4)}`,()=>`PING ${(Math.random()*200).toFixed(1)}ms RTT`,()=>`${Array.from({length:16},()=>Math.round(Math.random())).join("")}`,()=>`LOAD: ${(Math.random()*100).toFixed(1)}%`,()=>`CRC ${As(4)} OK`];return n[Math.floor(Math.random()*n.length)]()}class s2 extends ft{constructor(){super();R(this,"panels",[]);R(this,"matrixChars",[]);R(this,"gridHelper");R(this,"time",0);R(this,"cameraZ",50);this.scene.background=new se(0)}createPanel(t,i,r,s,o){const c=document.createElement("canvas");c.width=256,c.height=384;const h=c.getContext("2d"),u=20,f=[];for(let v=0;v<u;v++)f.push(O0());const p=new fo(c),g=new ii(8,12),_=new Lt({map:p,transparent:!0,opacity:.85,blending:Ae,depthWrite:!1,side:Qt}),m=new We(g,_);m.position.set(t,i,r),m.rotation.y=s,m.rotation.x=o,this.scene.add(m);const d={mesh:m,material:_,texture:p,canvas:c,ctx:h,lines:f,lastUpdate:0,glitching:!1,glitchTimer:0};return this.drawPanel(d),d}drawPanel(t,i=!1){const{ctx:r,canvas:s,lines:o}=t,{width:a,height:l}=s,c=l/o.length,h=Math.max(8,Math.floor(c*.75));if(r.fillStyle="#000000",r.fillRect(0,0,a,l),i){r.fillStyle=`rgba(0,255,0,${Math.random()*.3+.1})`,r.fillRect(0,0,a,l);for(let u=0;u<5;u++){const f=Math.random()*a,p=Math.random()*l,g=Math.random()*a*.5,_=Math.random()*20+2;r.fillStyle=`rgba(255,255,255,${Math.random()*.5})`,r.fillRect(f,p,g,_)}}r.font=`${h}px monospace`;for(let u=0;u<o.length;u++){const f=i?Math.random()>.3?255:Math.floor(Math.random()*128+64):Math.floor(180+Math.random()*75);r.fillStyle=`rgb(0, ${f}, ${Math.floor(f*.3)})`,r.fillText(o[u].substring(0,30),4,(u+1)*c-2)}r.strokeStyle=i?"#ffffff":"#00ff44",r.globalAlpha=i?.8:.3,r.lineWidth=1,r.strokeRect(1,1,a-2,l-2),r.globalAlpha=1,t.texture.needsUpdate=!0}createMatrixChar(){const t=document.createElement("canvas");t.width=32,t.height=32;const i=t.getContext("2d"),r=Ll[Math.floor(Math.random()*Ll.length)];i.fillStyle="transparent",i.clearRect(0,0,32,32),i.fillStyle="#00ff44",i.font="bold 24px monospace",i.textAlign="center",i.textBaseline="middle",i.fillText(r,16,16);const s=new fo(t),o=new tx({map:s,transparent:!0,opacity:Math.random()*.6+.2,blending:Ae,depthWrite:!1}),a=new BA(o),l=1+Math.random()*2;a.scale.set(l,l,1);const c=(Math.random()-.5)*200,h=(Math.random()-.5)*200-50,u=30+Math.random()*20,f=-30-Math.random()*20,p=f+Math.random()*(u-f);return a.position.set(c,p,h),{sprite:a,material:o,texture:s,canvas:t,fallSpeed:2+Math.random()*8,y:p,yMin:f,yMax:u}}init(){for(let t=0;t<20;t++){const i=(Math.random()-.5)*120,r=(Math.random()-.5)*40,s=-20-Math.random()*150,o=(Math.random()-.5)*Math.PI*.6,a=(Math.random()-.5)*.3;this.panels.push(this.createPanel(i,r,s,o,a))}this.gridHelper=new ix(200,30,13056,6656),this.gridHelper.position.y=-20,this.scene.add(this.gridHelper);for(let t=0;t<200;t++){const i=this.createMatrixChar();this.scene.add(i.sprite),this.matrixChars.push(i)}this.camera.position.set(0,5,this.cameraZ),this.camera.lookAt(0,0,0)}update(t,i){this.time+=t;const r=5+i.bass*35;this.cameraZ-=r*t,this.cameraZ<-150&&(this.cameraZ=50),this.camera.position.z+=(this.cameraZ-this.camera.position.z)*.05,this.camera.position.x=Math.sin(this.time*.1)*3,this.camera.position.y=5+Math.cos(this.time*.08)*2,this.camera.lookAt(this.camera.position.x*.2,0,this.camera.position.z-30);const s=performance.now();this.panels.forEach((o,a)=>{s-o.lastUpdate>100&&(o.lines.shift(),o.lines.push(O0()),o.lastUpdate=s),i.beat&&Math.random()<.3&&(o.glitching=!0,o.glitchTimer=.15+Math.random()*.15),o.glitching?(o.glitchTimer-=t,o.glitchTimer<=0&&(o.glitching=!1),this.drawPanel(o,!0)):s-o.lastUpdate<50&&this.drawPanel(o,!1),o.material.opacity=.25+i.volume*.65+i.mid*.1}),this.matrixChars.forEach(o=>{if(o.y-=o.fallSpeed*t,o.y<o.yMin){o.y=o.yMax;const a=Ll[Math.floor(Math.random()*Ll.length)],l=o.canvas.getContext("2d");l.clearRect(0,0,32,32),l.fillStyle="#00ff44",l.font="bold 24px monospace",l.textAlign="center",l.textBaseline="middle",l.fillText(a,16,16),o.texture.needsUpdate=!0}o.sprite.position.y=o.y,o.material.opacity=.08+i.treble*.55+i.volume*.15})}dispose(){this.panels.forEach(t=>{t.mesh.geometry.dispose(),t.material.dispose(),t.texture.dispose()}),this.gridHelper.dispose(),this.matrixChars.forEach(t=>{var i;(i=t.sprite.geometry)==null||i.dispose(),t.material.dispose(),t.texture.dispose()})}}const Cs=3e3,bs=120,o2=18;class a2 extends ft{constructor(){super(...arguments);R(this,"stars");R(this,"positions");R(this,"colors");R(this,"directions",new Float32Array(Cs*3));R(this,"distances",new Float32Array(Cs));R(this,"time",0);R(this,"warpDir",1);R(this,"flipTimer",10);R(this,"sweepX",0);R(this,"sweepY",0)}init(){this.scene.background=new se(10),this.camera.position.set(0,0,0),this.camera.lookAt(0,0,-1),this.positions=new Float32Array(Cs*2*3),this.colors=new Float32Array(Cs*2*3);for(let r=0;r<Cs;r++)this.resetStar(r,!0);const t=new Le;t.setAttribute("position",new Ne(this.positions,3)),t.setAttribute("color",new Ne(this.colors,3));const i=new it({vertexColors:!0,blending:Ae,depthWrite:!1});this.stars=new _t(t,i),this.scene.add(this.stars)}resetStar(t,i=!1){const r=Math.random()*Math.PI*2,s=Math.acos(2*Math.random()-1),o=Math.sin(s)*Math.cos(r),a=Math.sin(s)*Math.sin(r),l=-Math.abs(Math.cos(s))-.2,c=Math.sqrt(o*o+a*a+l*l);this.directions[t*3]=o/c,this.directions[t*3+1]=a/c,this.directions[t*3+2]=l/c,this.distances[t]=i?Math.random()*bs*.8:1}update(t,i){this.time+=t;const r=o2+i.bass*70,s=.06+i.bass*.18;this.flipTimer-=t,(this.flipTimer<=0||i.beat&&Math.random()<.12)&&(this.warpDir*=-1,this.flipTimer=9+Math.random()*8),this.sweepX=Math.sin(this.time*.07)*12,this.sweepY=Math.cos(this.time*.05)*6;for(let a=0;a<Cs;a++){this.distances[a]+=r*t*this.warpDir,(this.distances[a]>bs||this.distances[a]<.5)&&(this.distances[a]=this.warpDir>0?1:bs*.9,this.resetStar(a));const l=this.distances[a],c=r*t*s*60,h=this.warpDir>0?Math.max(.1,l-c):Math.min(bs*.99,l+c),u=this.directions[a*3],f=this.directions[a*3+1],p=this.directions[a*3+2],g=a*2*3;this.positions[g]=u*h,this.positions[g+1]=f*h,this.positions[g+2]=p*h,this.positions[g+3]=u*l,this.positions[g+4]=f*l,this.positions[g+5]=p*l;const _=this.warpDir>0?l/bs:1-l/bs,m=_*.35,d=.3+_*.4,v=.7+_*.3;this.colors[g]=m*.15,this.colors[g+1]=d*.25,this.colors[g+2]=v*.25,this.colors[g+3]=m,this.colors[g+4]=d,this.colors[g+5]=v}this.stars.geometry.attributes.position.needsUpdate=!0,this.stars.geometry.attributes.color.needsUpdate=!0,this.camera.position.x=Math.sin(this.time*.07)*(1.5+i.bass*2.5),this.camera.position.y=Math.cos(this.time*.05)*(1+i.bass*1.5);const o=this.warpDir>0?-100:100;this.camera.lookAt(this.sweepX,this.sweepY,o)}dispose(){this.stars.geometry.dispose(),this.stars.material.dispose()}}const B0=4,Dl=80,Rs=6,Il=60;class l2 extends ft{constructor(){super(...arguments);R(this,"group");R(this,"strandMats",[]);R(this,"rungMat");R(this,"pulsePositions",[]);R(this,"pulseMeshes",[]);R(this,"time",0)}init(){this.scene.background=new se(520),this.camera.position.set(0,0,80),this.camera.lookAt(0,0,0),this.group=new Jo,this.scene.add(this.group);const t=[],i=[];for(let c=0;c<=Dl;c++){const h=c/Dl*Math.PI*2*B0,u=c/Dl*Il-Il/2;t.push(new D(Math.cos(h)*Rs,u,Math.sin(h)*Rs)),i.push(new D(Math.cos(h+Math.PI)*Rs,u,Math.sin(h+Math.PI)*Rs))}const r=new it({color:65518,blending:Ae,depthWrite:!1}),s=new it({color:16729275,blending:Ae,depthWrite:!1});this.strandMats=[r,s],this.rungMat=new it({color:4482696,transparent:!0,opacity:.4,blending:Ae,depthWrite:!1}),this.group.add(new Ui(new Le().setFromPoints(t),r)),this.group.add(new Ui(new Le().setFromPoints(i),s));const o=[];for(let c=0;c<=Dl;c+=2)o.push(t[c],i[c]);const a=new Le().setFromPoints(o);this.group.add(new _t(a,this.rungMat));const l=new Lt({color:16777215,blending:Ae,depthWrite:!1});for(let c=0;c<4;c++){const h=new We(new yr(.5,6,6),l.clone());h.visible=!1,this.group.add(h),this.pulseMeshes.push(h)}this.scene.fog=new Xt(520,.008)}update(t,i){this.time+=t,this.group.rotation.y+=t*(.3+i.volume*4),this.group.rotation.z=Math.sin(this.time*.5)*i.bass*.6,this.camera.position.x=Math.sin(this.time*.15)*20,this.camera.position.z=Math.cos(this.time*.15)*80,this.camera.lookAt(0,0,0);const r=i.volume;this.strandMats[0].color.setRGB(0+r*.3,1,.93+r*.07),this.strandMats[1].color.setRGB(1,.27+r*.3,.73+r*.27),i.beat&&((this.pulsePositions.length<4?this.pulsePositions.length:-1)>=0||this.pulsePositions.length<4)&&this.pulsePositions.push({t:0,dir:Math.random()>.5?1:-1}),this.pulsePositions=this.pulsePositions.filter((s,o)=>{s.t+=t*(2.5+i.mid*2.5)*s.dir;const a=Math.abs(s.t)/1;if(a>1)return this.pulseMeshes[o]&&(this.pulseMeshes[o].visible=!1),!1;const l=s.dir>0?a:1-a,c=l*Math.PI*2*B0,h=l*Il-Il/2,u=Math.random()>.5?1:-1,f=Math.cos(c+(u>0?0:Math.PI))*Rs,p=Math.sin(c+(u>0?0:Math.PI))*Rs;return this.pulseMeshes[o]&&(this.pulseMeshes[o].position.set(f,h,p),this.pulseMeshes[o].visible=!0,this.pulseMeshes[o].material.color.setRGB(1,.8+i.treble*.2,1)),!0});for(let s=this.pulsePositions.length;s<this.pulseMeshes.length;s++)this.pulseMeshes[s].visible=!1}dispose(){this.group.traverse(t=>{(t instanceof We||t instanceof Ui||t instanceof _t)&&(t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material.dispose())})}}const Ei=14,oi=5;class c2 extends ft{constructor(){super(...arguments);R(this,"buildingMats",[]);R(this,"buildingHeights",[]);R(this,"scanLine");R(this,"scanY",-30);R(this,"scanDir",1);R(this,"time",0);R(this,"gridHelper")}init(){this.scene.background=new se(1296),this.camera.position.set(0,100,80),this.camera.lookAt(0,0,0),this.scene.fog=new Xt(1296,.004);const t=Ei*oi/2;for(let s=0;s<Ei;s++)for(let o=0;o<Ei;o++){const a=4+Math.random()*28;this.buildingHeights.push(a);const l=o*oi-t+oi/2,c=s*oi-t+oi/2,h=new Tr(oi*.7,a,oi*.7),u=new HA(h),f=new it({color:8806,blending:Ae,depthWrite:!1,transparent:!0,opacity:.12});this.buildingMats.push(f);const p=new _t(u,f);p.position.set(l,a/2,c),this.scene.add(p),h.dispose()}this.gridHelper=new ix(Ei*oi,Ei,6741,3370),this.scene.add(this.gridHelper);const i=new ii(Ei*oi*1.2,Ei*oi*1.2);i.rotateX(-Math.PI/2);const r=new Lt({color:43775,transparent:!0,opacity:.04,blending:Ae,depthWrite:!1,side:Qt});this.scanLine=new We(i,r),this.scanLine.position.y=this.scanY,this.scene.add(this.scanLine)}update(t,i){this.time+=t;const r=120;this.camera.position.x=Math.sin(this.time*.08)*r*.3,this.camera.position.z=80+Math.cos(this.time*.08)*20,this.camera.position.y=90+i.bass*15,this.camera.lookAt(0,0,0);const s=(6+i.bass*28)*this.scanDir;this.scanY+=s*t,this.scanY>35&&(this.scanY=35,this.scanDir=-1),this.scanY<-5&&(this.scanY=-5,this.scanDir=1),this.scanLine.position.y=this.scanY;let o=0;for(let a=0;a<Ei;a++)for(let l=0;l<Ei;l++){const c=this.buildingHeights[o],h=Math.abs(this.scanY-c/2),u=Math.max(0,1-h/20),f=.06+i.volume*.03;if(this.buildingMats[o].opacity=f+u*.18,i.beat&&u>.5)this.buildingMats[o].color.setRGB(.28,.18,0);else{const p=u*.05,g=.08+u*.32,_=.25+u*.28;this.buildingMats[o].color.setRGB(p,g,_)}o++}this.scanLine.material.opacity=.015+i.bass*.03}dispose(){this.scene.traverse(t=>{(t instanceof _t||t instanceof We)&&(t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material.dispose())})}}const Ji=10,Or=400,k0=Ji*Or;class u2 extends ft{constructor(){super(...arguments);R(this,"diskPoints");R(this,"diskPositions");R(this,"diskColors");R(this,"ringAngles",new Float32Array(Ji*Or));R(this,"ringRadii",new Float32Array(Ji));R(this,"omegas",new Float32Array(Ji));R(this,"jetMat");R(this,"jet1");R(this,"jet2");R(this,"jetFlash",0);R(this,"time",0)}init(){this.scene.background=new se(0),this.camera.position.set(0,35,60),this.camera.lookAt(0,0,0),this.scene.fog=new Xt(0,.006),this.diskPositions=new Float32Array(k0*3),this.diskColors=new Float32Array(k0*3);for(let a=0;a<Ji;a++){const l=5+a/(Ji-1)*55;this.ringRadii[a]=l,this.omegas[a]=1.2/Math.sqrt(l);for(let c=0;c<Or;c++){const h=a*Or+c;this.ringAngles[h]=c/Or*Math.PI*2+Math.random()*.1;const u=(Math.random()-.5)*(l*.04),f=h*3;this.diskPositions[f]=Math.cos(this.ringAngles[h])*l,this.diskPositions[f+1]=u,this.diskPositions[f+2]=Math.sin(this.ringAngles[h])*l}}const t=new Le;t.setAttribute("position",new Ne(this.diskPositions,3)),t.setAttribute("color",new Ne(this.diskColors,3));const i=new Hi({size:.25,vertexColors:!0,blending:Ae,depthWrite:!1,sizeAttenuation:!0});this.diskPoints=new Ni(t,i),this.scene.add(this.diskPoints);const r=new Qc(4.8,.15,8,80),s=new Lt({color:16777215,blending:Ae,depthWrite:!1});this.scene.add(new We(r,s));const o=new ep(.4,50,8,1,!0);this.jetMat=new Lt({color:13387007,transparent:!0,opacity:.12,blending:Ae,depthWrite:!1,side:Qt}),this.jet1=new We(o,this.jetMat),this.jet1.position.y=25,this.jet2=new We(o.clone(),this.jetMat),this.jet2.position.y=-25,this.jet2.rotation.z=Math.PI,this.scene.add(this.jet1,this.jet2)}update(t,i){this.time+=t;const r=1+i.bass*18;for(let o=0;o<Ji;o++){const a=this.omegas[o]*r,l=this.ringRadii[o],c=o/(Ji-1),h=c*.9+i.treble*.1,u=.05+c*.1,f=1-c*.7+i.mid*.2;for(let p=0;p<Or;p++){const g=o*Or+p;this.ringAngles[g]+=a*t;const _=Math.sin(this.ringAngles[g]*7+this.time)*.5*(l*.03),m=g*3;this.diskPositions[m]=Math.cos(this.ringAngles[g])*l,this.diskPositions[m+1]=_,this.diskPositions[m+2]=Math.sin(this.ringAngles[g])*l;const d=.3+i.volume*.9;this.diskColors[m]=h*d,this.diskColors[m+1]=u*d,this.diskColors[m+2]=f*d}}this.diskPoints.geometry.attributes.position.needsUpdate=!0,this.diskPoints.geometry.attributes.color.needsUpdate=!0,i.beat&&(this.jetFlash=1),this.jetFlash=Math.max(0,this.jetFlash-t*2.5),this.jetMat.opacity=.1+this.jetFlash*.5+i.mid*.05,this.jetMat.color.setRGB(.8+this.jetFlash*.2,.27*(1-this.jetFlash),1);const s=this.time*.1;this.camera.position.x=Math.sin(s)*55,this.camera.position.z=Math.cos(s)*55,this.camera.position.y=25+Math.sin(this.time*.07)*10,this.camera.lookAt(0,0,0)}dispose(){this.diskPoints.geometry.dispose(),this.diskPoints.material.dispose(),this.jet1.geometry.dispose(),this.jet2.geometry.dispose(),this.jetMat.dispose()}}const rn=56,ap=110,sx=ap/(rn-1);function z0(n){return n*sx-ap/2}function G0(n){return n*sx-ap/2}class h2 extends ft{constructor(){super(...arguments);R(this,"grid");R(this,"positions");R(this,"colors");R(this,"gridY",new Float32Array(rn*rn));R(this,"lookup");R(this,"totalVerts",0);R(this,"time",0);R(this,"smoothAmp",6);R(this,"smoothSpeed",2);R(this,"smoothMid",0);R(this,"smoothTreble",0)}init(){this.scene.background=new se(2568),this.camera.position.set(0,55,70),this.camera.lookAt(0,0,0),this.scene.fog=new Xt(2568,.006);const t=rn*(rn-1)*2,i=rn*(rn-1)*2;this.totalVerts=t+i,this.positions=new Float32Array(this.totalVerts*3),this.colors=new Float32Array(this.totalVerts*3),this.lookup=new Uint16Array(this.totalVerts*2);let r=0;for(let a=0;a<rn;a++)for(let l=0;l<rn-1;l++)this.lookup[r*2]=a,this.lookup[r*2+1]=l,r++,this.lookup[r*2]=a,this.lookup[r*2+1]=l+1,r++;for(let a=0;a<rn;a++)for(let l=0;l<rn-1;l++)this.lookup[r*2]=l,this.lookup[r*2+1]=a,r++,this.lookup[r*2]=l+1,this.lookup[r*2+1]=a,r++;const s=new Le;s.setAttribute("position",new Ne(this.positions,3)),s.setAttribute("color",new Ne(this.colors,3));const o=new it({vertexColors:!0,blending:Ae,depthWrite:!1});this.grid=new _t(s,o),this.scene.add(this.grid)}update(t,i){this.time+=t;const r=.015;this.smoothAmp+=(6+i.bass*10-this.smoothAmp)*r,this.smoothSpeed+=(2+i.volume*.8-this.smoothSpeed)*r,this.smoothMid+=(i.mid-this.smoothMid)*r,this.smoothTreble+=(i.treble-this.smoothTreble)*r;const s=this.smoothAmp,o=.07+this.smoothMid*.02,a=.05+this.smoothTreble*.018,l=this.smoothSpeed;for(let c=0;c<rn;c++)for(let h=0;h<rn;h++){const u=z0(h),f=G0(c),p=s*.5*Math.sin(u*o+this.time*l)+s*.3*Math.sin(f*a+this.time*l*.7)+s*.2*Math.sin((u+f)*.06+this.time*l*1.3);this.gridY[c*rn+h]=p}for(let c=0;c<this.totalVerts;c++){const h=this.lookup[c*2],u=this.lookup[c*2+1],f=this.gridY[h*rn+u];this.positions[c*3]=z0(u),this.positions[c*3+1]=f,this.positions[c*3+2]=G0(h);const p=Math.max(0,Math.min(1,(f+s)/(s*2)));this.colors[c*3]=p*p*.6,this.colors[c*3+1]=.5+p*.5,this.colors[c*3+2]=.7+p*.3}this.grid.geometry.attributes.position.needsUpdate=!0,this.grid.geometry.attributes.color.needsUpdate=!0,this.camera.position.x=Math.sin(this.time*.08)*25,this.camera.position.y=50+this.smoothAmp*.5,this.camera.position.z=65+Math.cos(this.time*.06)*20,this.camera.lookAt(0,0,0)}dispose(){this.grid.geometry.dispose(),this.grid.material.dispose()}}const Br=128,Vo=9,rh=48,f2=1;function d2(n){return Math.round(Math.pow(n/(Br-1),.7)*110)}class p2 extends ft{constructor(){super(...arguments);R(this,"bars");R(this,"dummy",new Vt);R(this,"color",new se);R(this,"innerRing");R(this,"innerRingMat");R(this,"outerRing");R(this,"outerRingMat");R(this,"time",0);R(this,"smoothBars",new Float32Array(Br))}init(){this.scene.background=new se(196608),this.camera.position.set(0,65,45),this.camera.lookAt(0,0,0),this.scene.fog=new Xt(196608,.004);const t=new Tr(1,.85,.85);t.translate(.5,0,0);const i=new Lt({blending:Ae,depthWrite:!1,vertexColors:!1});this.bars=new GA(t,i,Br),this.bars.instanceMatrix.setUsage(Lm),this.bars.instanceColor=new jf(new Float32Array(Br*3),3),this.bars.instanceColor.setUsage(Lm),this.scene.add(this.bars);const r=[];for(let o=0;o<=128;o++){const a=o/128*Math.PI*2;r.push(new D(Math.cos(a)*Vo,0,Math.sin(a)*Vo))}this.innerRingMat=new it({color:16724736,blending:Ae,depthWrite:!1}),this.innerRing=new Ui(new Le().setFromPoints(r),this.innerRingMat),this.scene.add(this.innerRing);const s=[];for(let o=0;o<=128;o++){const a=o/128*Math.PI*2,l=Vo+rh+2;s.push(new D(Math.cos(a)*l,0,Math.sin(a)*l))}this.outerRingMat=new it({color:2229504,blending:Ae,depthWrite:!1}),this.outerRing=new Ui(new Le().setFromPoints(s),this.outerRingMat),this.scene.add(this.outerRing)}update(t,i){this.time+=t;const r=i.raw,s=this.time*.04;for(let a=0;a<Br;a++){const l=d2(a),c=(r[l]??0)/255,h=c*rh*(1+i.bass*1.5),u=c>this.smoothBars[a]/rh?.5:.12;this.smoothBars[a]+=(Math.max(f2,h)-this.smoothBars[a])*u;const f=this.smoothBars[a],p=a/Br*Math.PI*2+s;this.dummy.position.set(Math.cos(p)*Vo,0,Math.sin(p)*Vo),this.dummy.rotation.set(0,-p,0),this.dummy.scale.set(f,1,1),this.dummy.updateMatrix(),this.bars.setMatrixAt(a,this.dummy.matrix);const g=a/Br,_=Math.min(.72,c*1.1+.04);if(g<.33)this.color.setRGB(_,_*(g/.33)*.45,0);else if(g<.66){const m=(g-.33)/.33;this.color.setRGB(_,_*(.45+m*.45),_*m*.2)}else{const m=(g-.66)/.34;this.color.setRGB(_,_*(.9+m*.1),_*(.2+m*.8))}this.bars.setColorAt(a,this.color)}this.bars.instanceMatrix.needsUpdate=!0,this.bars.instanceColor.needsUpdate=!0;const o=.6+i.bass*.4;this.innerRingMat.color.setRGB(o,o*.15,0),this.outerRingMat.color.setRGB(.12+i.treble*.1,.02,0),this.camera.position.x=Math.sin(this.time*.06)*20,this.camera.position.y=60+Math.sin(this.time*.1)*8,this.camera.position.z=45+Math.cos(this.time*.06)*20,this.camera.lookAt(0,0,0)}dispose(){this.bars.geometry.dispose(),this.bars.material.dispose(),this.innerRing.geometry.dispose(),this.innerRingMat.dispose(),this.outerRing.geometry.dispose(),this.outerRingMat.dispose()}}const sh=22;class m2 extends ft{constructor(){super(...arguments);R(this,"shell");R(this,"origPositions");R(this,"positions");R(this,"shellMat");R(this,"rings",[]);R(this,"ringMats",[]);R(this,"time",0);R(this,"beatPulse",0);R(this,"smoothBass",0);R(this,"smoothMid",0);R(this,"smoothVol",0)}init(){this.scene.background=new se(131328),this.camera.position.set(0,0,70),this.camera.lookAt(0,0,0);const t=new mi(sh,5),i=new Mr(t);this.origPositions=i.attributes.position.array.slice(),this.positions=new Float32Array(this.origPositions.length),this.shellMat=new it({color:16763904,blending:Ae,depthWrite:!1}),this.shell=new _t(i,this.shellMat),this.scene.add(this.shell),t.dispose();const r=[16768256,16750848,16737792,16755268,16772744];for(let s=-60;s<=60;s+=20){const o=Math.cos(s*Math.PI/180)*sh,a=Math.sin(s*Math.PI/180)*sh,l=[];for(let u=0;u<=64;u++){const f=u/64*Math.PI*2;l.push(new D(Math.cos(f)*o,a,Math.sin(f)*o))}const c=new it({color:r[Math.floor(Math.random()*r.length)],blending:Ae,depthWrite:!1,transparent:!0,opacity:.5}),h=new Ui(new Le().setFromPoints(l),c);this.rings.push(h),this.ringMats.push(c),this.scene.add(h)}}update(t,i){this.time+=t,i.beat&&(this.beatPulse=1),this.beatPulse*=.93;const r=.02;this.smoothBass+=(i.bass-this.smoothBass)*r,this.smoothMid+=(i.mid-this.smoothMid)*r,this.smoothVol+=(i.volume-this.smoothVol)*r;const s=1.5+this.smoothBass*7+this.beatPulse*5,o=.4+this.smoothMid*.18,a=this.origPositions,l=this.positions,c=a.length/3;for(let u=0;u<c;u++){const f=a[u*3],p=a[u*3+1],g=a[u*3+2],_=Math.sin(f*.09+this.time*o)*Math.cos(p*.07+this.time*o*.8),m=Math.sin(p*.09+this.time*o*1.1)*Math.cos(g*.07+this.time*o*.6),d=Math.sin(g*.09+this.time*o*.9)*Math.cos(f*.07+this.time*o*1.2);l[u*3]=f+_*s,l[u*3+1]=p+m*s,l[u*3+2]=g+d*s}this.shell.geometry.attributes.position.array.set(l),this.shell.geometry.attributes.position.needsUpdate=!0,this.shell.geometry.computeBoundingSphere();const h=this.smoothVol*.2+this.beatPulse*.4;this.shellMat.color.setRGB(.55+h*.35,.35+h*.25,h*.2),this.ringMats.forEach((u,f)=>{u.opacity=.12+i.mid*.18+Math.sin(this.time*.8+f*.8)*.06}),this.shell.rotation.y+=t*(.12+this.smoothVol*.35),this.shell.rotation.x+=t*(.03+this.smoothBass*.12),this.camera.position.x=Math.sin(this.time*.09)*20,this.camera.position.y=Math.sin(this.time*.07)*12,this.camera.position.z=70,this.camera.lookAt(0,0,0)}dispose(){this.shell.geometry.dispose(),this.shellMat.dispose(),this.rings.forEach(t=>{t.geometry.dispose(),t.material.dispose()})}}const Wo=7e3,H0=50,g2=5;class v2 extends ft{constructor(){super(...arguments);R(this,"pts");R(this,"pos");R(this,"vel");R(this,"col");R(this,"time",0);R(this,"beatBurst",0)}init(){this.scene.background=new se(131080),this.camera.position.set(0,20,70),this.camera.lookAt(0,0,0),this.scene.fog=new Xt(131080,.005),this.pos=new Float32Array(Wo*3),this.vel=new Float32Array(Wo*3),this.col=new Float32Array(Wo*3);for(let r=0;r<Wo;r++)this.resetParticle(r,!0);const t=new Le;t.setAttribute("position",new Ne(this.pos,3)),t.setAttribute("color",new Ne(this.col,3));const i=new Hi({size:.22,vertexColors:!0,blending:Ae,depthWrite:!1,sizeAttenuation:!0});this.pts=new Ni(t,i),this.scene.add(this.pts)}resetParticle(t,i=!1){const r=i?Math.random()*H0:2+Math.random()*6,s=Math.random()*Math.PI*2,o=Math.acos(2*Math.random()-1);this.pos[t*3]=Math.sin(o)*Math.cos(s)*r,this.pos[t*3+1]=Math.sin(o)*Math.sin(s)*r,this.pos[t*3+2]=Math.cos(o)*r,this.vel[t*3]=this.vel[t*3+1]=this.vel[t*3+2]=0}field(t,i,r,s){const o=Math.sin(i*.18+s*.7)*Math.cos(r*.12+s*.4),a=Math.sin(r*.18+s*.9)*Math.cos(t*.12+s*.5),l=Math.sin(t*.18+s*.6)*Math.cos(i*.12+s*.8);return[o,a,l]}update(t,i){this.time+=t,i.beat&&(this.beatBurst=1),this.beatBurst*=.84;const r=(g2+i.bass*30+this.beatBurst*45)*t;for(let s=0;s<Wo;s++){const o=this.pos[s*3],a=this.pos[s*3+1],l=this.pos[s*3+2],[c,h,u]=this.field(o,a,l,this.time);this.pos[s*3]+=c*r,this.pos[s*3+1]+=h*r,this.pos[s*3+2]+=u*r;const f=Math.sqrt(this.pos[s*3]**2+this.pos[s*3+1]**2+this.pos[s*3+2]**2);(f>H0||f<.1)&&this.resetParticle(s);const p=Math.sqrt(c*c+h*h+u*u),g=Math.min(1,p*.8+i.volume*.3);this.col[s*3]=.4+g*.6,this.col[s*3+1]=.05+g*.2,this.col[s*3+2]=.8+g*.2}this.pts.geometry.attributes.position.needsUpdate=!0,this.pts.geometry.attributes.color.needsUpdate=!0,this.camera.position.x=Math.sin(this.time*.08)*30,this.camera.position.y=20+Math.sin(this.time*.06)*15,this.camera.position.z=Math.cos(this.time*.08)*70,this.camera.lookAt(0,0,0)}dispose(){this.pts.geometry.dispose(),this.pts.material.dispose()}}const ai=90,xt=80,oh=[[2,3],[3,2],[3,3],[4,3],[3,4],[4,4],[5,3],[3,5],[4,5],[5,4],[5,5],[6,4],[2,5],[5,2]];class _2 extends ft{constructor(){super(...arguments);R(this,"pts");R(this,"positions");R(this,"colors");R(this,"time",0);R(this,"modeIndex",0);R(this,"targetMode",0);R(this,"modeBlend",1);R(this,"beatCooldown",0);R(this,"smoothAmp",8);R(this,"smoothOmega",2)}init(){this.scene.background=new se(328448),this.camera.position.set(0,90,50),this.camera.lookAt(0,0,0),this.scene.fog=new Xt(328448,.004);const t=ai*ai;this.positions=new Float32Array(t*3),this.colors=new Float32Array(t*3);for(let a=0;a<ai;a++)for(let l=0;l<ai;l++){const c=a*ai+l;this.positions[c*3]=l/(ai-1)*xt-xt/2,this.positions[c*3+2]=a/(ai-1)*xt-xt/2}const i=new Le;i.setAttribute("position",new Ne(this.positions,3)),i.setAttribute("color",new Ne(this.colors,3));const r=new Hi({size:.55,vertexColors:!0,blending:Ae,depthWrite:!1,sizeAttenuation:!0});this.pts=new Ni(i,r),this.scene.add(this.pts);const s=[new D(-xt/2,0,-xt/2),new D(xt/2,0,-xt/2),new D(xt/2,0,-xt/2),new D(xt/2,0,xt/2),new D(xt/2,0,xt/2),new D(-xt/2,0,xt/2),new D(-xt/2,0,xt/2),new D(-xt/2,0,-xt/2)],o=new it({color:2232576,blending:Ae,depthWrite:!1});this.scene.add(new _t(new Le().setFromPoints(s),o))}chladni(t,i,r,s){return Math.sin(r*Math.PI*(t+xt/2)/xt)*Math.sin(s*Math.PI*(i+xt/2)/xt)}update(t,i){this.time+=t,this.beatCooldown=Math.max(0,this.beatCooldown-t),i.beat&&this.beatCooldown<=0&&(this.modeIndex=this.targetMode,this.targetMode=(this.targetMode+1)%oh.length,this.modeBlend=0,this.beatCooldown=.5),this.modeBlend=Math.min(1,this.modeBlend+t*1.5);const[r,s]=oh[this.modeIndex],[o,a]=oh[this.targetMode],l=.025;this.smoothAmp+=(8+i.bass*18-this.smoothAmp)*l,this.smoothOmega+=(2+i.mid*3-this.smoothOmega)*l;const c=this.smoothAmp,h=this.smoothOmega;for(let u=0;u<ai;u++)for(let f=0;f<ai;f++){const p=u*ai+f,g=this.positions[p*3],_=this.positions[p*3+2],m=this.chladni(g,_,r,s),d=this.chladni(g,_,o,a),v=m*(1-this.modeBlend)+d*this.modeBlend,x=v*c*Math.cos(h*this.time);this.positions[p*3+1]=x;const y=Math.abs(v);this.colors[p*3]=.3+y*.7,this.colors[p*3+1]=.15+y*.6,this.colors[p*3+2]=y*.3}this.pts.geometry.attributes.position.needsUpdate=!0,this.pts.geometry.attributes.color.needsUpdate=!0,this.camera.position.x=Math.sin(this.time*.06)*20,this.camera.position.y=85+this.smoothAmp*.5,this.camera.position.z=50+Math.cos(this.time*.06)*10,this.camera.lookAt(0,0,0)}dispose(){this.pts.geometry.dispose(),this.pts.material.dispose()}}const ah=[{a:3,b:2,c:3,color:new se(1738872)},{a:5,b:4,c:5,color:new se(3822967)},{a:3,b:4,c:5,color:new se(1721514)},{a:5,b:2,c:3,color:new se(7807641)},{a:4,b:3,c:4,color:new se(2254404)},{a:5,b:3,c:2,color:new se(7820544)}],lh=1800,x2=28;class y2 extends ft{constructor(){super(...arguments);R(this,"lines",[]);R(this,"mats",[]);R(this,"posArrays",[]);R(this,"phase",0);R(this,"beatKick",0);R(this,"time",0)}init(){this.scene.background=new se(0),this.camera.position.set(0,20,75),this.camera.lookAt(0,0,0);for(const t of ah){const i=new Float32Array(lh*3),r=new Le;r.setAttribute("position",new Ne(i,3));const s=new it({color:t.color,blending:Ae,depthWrite:!1,transparent:!0,opacity:.9}),o=new Ui(r,s);this.scene.add(o),this.lines.push(o),this.mats.push(s),this.posArrays.push(i)}}update(t,i){this.time+=t,i.beat&&(this.beatKick=1),this.beatKick*=.88,this.phase+=t*(.3+i.volume*.6)+this.beatKick*.25;const r=x2*(1+i.bass*.25+this.beatKick*.15);for(let s=0;s<ah.length;s++){const{a:o,b:a,c:l}=ah[s],c=this.phase+s*.55,h=this.posArrays[s];for(let u=0;u<lh;u++){const f=u/lh*Math.PI*6;h[u*3]=Math.sin(o*f+c)*r,h[u*3+1]=Math.sin(a*f)*r,h[u*3+2]=Math.sin(l*f+c*.7)*r}this.lines[s].geometry.attributes.position.needsUpdate=!0,this.mats[s].opacity=.65+i.volume*.3+this.beatKick*.05}this.camera.position.x=Math.sin(this.time*.09)*35,this.camera.position.y=18+Math.sin(this.time*.07)*12,this.camera.position.z=Math.cos(this.time*.09)*75,this.camera.lookAt(0,0,0)}dispose(){this.lines.forEach(t=>{t.geometry.dispose(),t.material.dispose()})}}const M2=20,V0=80,W0=96;class S2 extends ft{constructor(){super(...arguments);R(this,"rings",[]);R(this,"ambientTimer",0);R(this,"time",0)}init(){this.scene.background=new se(0),this.camera.position.set(0,55,55),this.camera.lookAt(0,0,0);for(let t=0;t<M2;t++){const i=[];for(let o=0;o<=W0;o++){const a=o/W0*Math.PI*2;i.push(new D(Math.cos(a),0,Math.sin(a)))}const r=new it({color:16711935,transparent:!0,opacity:0,blending:Ae,depthWrite:!1}),s=new Ui(new Le().setFromPoints(i),r);s.visible=!1,this.scene.add(s),this.rings.push({line:s,mat:r,radius:0,speed:30,active:!1,hue:0})}}spawn(t=30,i=0){const r=this.rings.find(s=>!s.active);r&&(r.radius=1,r.speed=t,r.hue=i,r.active=!0,r.line.visible=!0,r.line.scale.setScalar(1),r.line.position.y=(Math.random()-.5)*6,r.mat.opacity=.9)}update(t,i){this.time+=t,this.ambientTimer-=t,i.beat&&(this.spawn(35+i.bass*30,0),i.bass>.5&&this.spawn(20+i.bass*15,1)),this.ambientTimer<=0&&(this.spawn(12+i.volume*8,2),this.ambientTimer=1.8-i.volume*.8);for(const r of this.rings){if(!r.active)continue;r.radius+=r.speed*t;const s=r.radius/V0;r.line.scale.setScalar(r.radius),r.mat.opacity=Math.max(0,(1-s)*.85),r.hue===0?r.mat.color.setRGB(1-s*.3,0,.6+s*.4):r.hue===1?r.mat.color.setRGB(0,.6+s*.4,1):r.mat.color.setRGB(.4,.3+s*.3,.5+s*.2),r.radius>=V0&&(r.active=!1,r.line.visible=!1)}this.camera.position.x=Math.sin(this.time*.07)*15,this.camera.position.z=55+Math.cos(this.time*.05)*15,this.camera.position.y=50+i.bass*12,this.camera.lookAt(0,0,0)}dispose(){this.rings.forEach(t=>{t.line.geometry.dispose(),t.mat.dispose()})}}const ch=55,Xo=120,X0=140,Ul=60;class E2 extends ft{constructor(){super(...arguments);R(this,"positions");R(this,"colors");R(this,"lines");R(this,"time",0)}init(){this.scene.background=new se(520),this.camera.position.set(0,8,90),this.camera.lookAt(0,5,0),this.scene.fog=new Xt(520,.005);const t=Xo-1,i=ch*t*2;this.positions=new Float32Array(i*3),this.colors=new Float32Array(i*3);const r=new Le;r.setAttribute("position",new Ne(this.positions,3)),r.setAttribute("color",new Ne(this.colors,3));const s=new it({vertexColors:!0,blending:Ae,depthWrite:!1,transparent:!0,opacity:.85});this.lines=new _t(r,s),this.scene.add(this.lines)}update(t,i){this.time+=t;const r=4+i.bass*18,s=1.5+i.treble*6,o=.6+i.volume*.8,a=.9+i.mid*1,l=Xo-1;for(let c=0;c<ch;c++){const h=c/(ch-1)*Ul-Ul/2,u=c*.38,f=Math.sin(c*.18)*15,p=(h+Ul/2)/Ul;let g,_,m;if(p<.4)g=0,_=.7+p*.3,m=.2+p*.5;else if(p<.7){const x=(p-.4)/.3;g=x*.3,_=.6-x*.3,m=.7+x*.3}else g=.3+(p-.7)/.3*.5,_=.1,m=1;const d=.5+i.volume*.4+(1-Math.abs(p-.5)*1.5)*.3,v=new Array(Xo);for(let x=0;x<Xo;x++){const y=x/(Xo-1)*X0-X0/2,P=r*Math.sin(y*.04+this.time*o+u),A=s*Math.sin(y*.09-this.time*a*.7+u*1.3),T=r*.4*Math.sin(y*.02+this.time*.4+u*.5);v[x]={x:y,y:h+P+A+T,z:f}}for(let x=0;x<l;x++){const y=(c*l+x)*2,P=v[x],A=v[x+1];this.positions[y*3]=P.x,this.positions[y*3+1]=P.y,this.positions[y*3+2]=P.z,this.positions[y*3+3]=A.x,this.positions[y*3+4]=A.y,this.positions[y*3+5]=A.z,this.colors[y*3]=g*d,this.colors[y*3+1]=_*d,this.colors[y*3+2]=m*d,this.colors[y*3+3]=g*d,this.colors[y*3+4]=_*d,this.colors[y*3+5]=m*d}}this.lines.geometry.attributes.position.needsUpdate=!0,this.lines.geometry.attributes.color.needsUpdate=!0,this.camera.position.x=Math.sin(this.time*.06)*25,this.camera.position.y=6+Math.sin(this.time*.08)*8,this.camera.lookAt(0,5,0)}dispose(){this.lines.geometry.dispose(),this.lines.material.dispose()}}const ox=[];for(let n=0;n<16;n++)ox.push([n&1?1:-1,n&2?1:-1,n&4?1:-1,n&8?1:-1]);const tc=[];for(let n=0;n<16;n++)for(let e=n+1;e<16;e++){const t=n^e;t&&!(t&t-1)&&tc.push([n,e])}class w2 extends ft{constructor(){super(...arguments);R(this,"edgeLines");R(this,"nodesMesh");R(this,"edgePositions");R(this,"nodePositions");R(this,"angleXW",0);R(this,"angleYW",0);R(this,"angleZW",0);R(this,"beatScale",1);R(this,"time",0)}init(){this.scene.background=new se(5),this.camera.position.set(0,0,70),this.camera.lookAt(0,0,0),this.edgePositions=new Float32Array(tc.length*2*3);const t=new Le;t.setAttribute("position",new Ne(this.edgePositions,3));const i=new it({color:8969727,blending:Ae,depthWrite:!1,transparent:!0,opacity:.8});this.edgeLines=new _t(t,i),this.scene.add(this.edgeLines),this.nodePositions=new Float32Array(16*3);const r=new Le;r.setAttribute("position",new Ne(this.nodePositions,3));const s=new Hi({color:16777215,size:1.8,blending:Ae,depthWrite:!1,sizeAttenuation:!0});this.nodesMesh=new Ni(r,s),this.scene.add(this.nodesMesh)}project(t){const i=t[0]*Math.cos(this.angleXW)-t[3]*Math.sin(this.angleXW),r=t[0]*Math.sin(this.angleXW)+t[3]*Math.cos(this.angleXW),s=t[1]*Math.cos(this.angleYW)-r*Math.sin(this.angleYW),o=t[1]*Math.sin(this.angleYW)+r*Math.cos(this.angleYW),a=t[2]*Math.cos(this.angleZW)-o*Math.sin(this.angleZW),l=t[2]*Math.sin(this.angleZW)+o*Math.cos(this.angleZW),c=2.5,h=c/(c-l);return new D(i*h,s*h,a*h)}update(t,i){this.time+=t,i.beat&&(this.beatScale=1.25),this.beatScale+=(1-this.beatScale)*.1;const r=.35+i.volume*.6;this.angleXW+=t*r*.7,this.angleYW+=t*r*.5,this.angleZW+=t*r*.4;const s=18*this.beatScale*(1+i.bass*.2),o=ox.map(l=>{const c=this.project(l);return new D(c.x*s,c.y*s,c.z*s)});for(let l=0;l<tc.length;l++){const[c,h]=tc[l],u=o[c],f=o[h];this.edgePositions[l*6]=u.x,this.edgePositions[l*6+1]=u.y,this.edgePositions[l*6+2]=u.z,this.edgePositions[l*6+3]=f.x,this.edgePositions[l*6+4]=f.y,this.edgePositions[l*6+5]=f.z}for(let l=0;l<16;l++)this.nodePositions[l*3]=o[l].x,this.nodePositions[l*3+1]=o[l].y,this.nodePositions[l*3+2]=o[l].z;this.edgeLines.geometry.attributes.position.needsUpdate=!0,this.nodesMesh.geometry.attributes.position.needsUpdate=!0;const a=this.edgeLines.material;a.color.setRGB(.4+i.treble*.3,.7+i.mid*.2,1),a.opacity=.6+i.volume*.4,this.camera.position.x=Math.sin(this.time*.08)*20,this.camera.position.y=Math.cos(this.time*.06)*15,this.camera.position.z=70,this.camera.lookAt(0,0,0)}dispose(){this.edgeLines.geometry.dispose(),this.edgeLines.material.dispose(),this.nodesMesh.geometry.dispose(),this.nodesMesh.material.dispose()}}const T2=14,$0=65;class A2 extends ft{constructor(){super(...arguments);R(this,"shells",[]);R(this,"core");R(this,"coreMat");R(this,"coreScale",1);R(this,"ambientTimer",0);R(this,"time",0)}init(){this.scene.background=new se(0),this.camera.position.set(0,25,75),this.camera.lookAt(0,0,0);const t=new mi(1,2),i=new Mr(t);t.dispose();for(let o=0;o<T2;o++){const a=new it({color:56831,transparent:!0,opacity:0,blending:Ae,depthWrite:!1}),l=new _t(i.clone(),a);l.visible=!1,this.scene.add(l),this.shells.push({mesh:l,mat:a,radius:0,speed:22,active:!1,tint:0})}const r=new mi(3,2),s=new Mr(r);r.dispose(),this.coreMat=new it({color:16777215,blending:Ae,depthWrite:!1,transparent:!0,opacity:.9}),this.core=new We(s,this.coreMat),this.scene.add(this.core)}spawn(t,i){const r=this.shells.find(s=>!s.active);r&&(r.radius=3,r.speed=t,r.tint=i,r.active=!0,r.mesh.visible=!0,r.mesh.scale.setScalar(3),r.mat.opacity=.85)}update(t,i){this.time+=t,this.ambientTimer-=t,i.beat&&(this.spawn(28+i.bass*25,0),this.coreScale=1.6+i.bass*.5),this.ambientTimer<=0&&(this.spawn(10+i.volume*6,2),this.ambientTimer=2.2-i.volume),this.coreScale+=(1-this.coreScale)*.08,this.core.scale.setScalar(this.coreScale),this.coreMat.color.setRGB(.6+i.treble*.4,.8+i.mid*.2,1);for(const s of this.shells){if(!s.active)continue;s.radius+=s.speed*t,s.mesh.scale.setScalar(s.radius);const o=s.radius/$0;s.mat.opacity=Math.max(0,(1-o)*.75),s.tint===0?s.mat.color.setRGB(0,.7+o*.3,1):s.tint===1?s.mat.color.setRGB(1,1,1):s.mat.color.setRGB(0,.8,.3+o*.4),s.radius>=$0&&(s.active=!1,s.mesh.visible=!1)}this.camera.position.x=Math.sin(this.time*.07)*18,this.camera.position.y=22+Math.sin(this.time*.05)*10,this.camera.position.z=72+Math.cos(this.time*.07)*12,this.camera.lookAt(0,0,0)}dispose(){this.shells.forEach(t=>{t.mesh.geometry.dispose(),t.mat.dispose()}),this.core.geometry.dispose(),this.core.material.dispose()}}const $o=52,C2=22,Nl=35;class b2 extends ft{constructor(){super(...arguments);R(this,"pads",[]);R(this,"traces",[]);R(this,"sigs",[]);R(this,"traceMat");R(this,"sigPositions");R(this,"sigColors");R(this,"sigPoints");R(this,"padMat");R(this,"spawnTimer",0);R(this,"time",0)}init(){this.scene.background=new se(1536),this.camera.position.set(0,85,25),this.camera.lookAt(0,0,0),this.scene.fog=new Xt(1536,.003);for(let c=0;c<$o;c++){const h=c%10,u=Math.floor(c/10);this.pads.push(new Te(h*12-54+(Math.random()-.5)*5,u*15-38+(Math.random()-.5)*5))}const t=new Set;for(let c=0;c<$o;c++){const h=Array.from({length:$o},(u,f)=>f).filter(u=>u!==c).map(u=>({j:u,d:this.pads[c].distanceTo(this.pads[u])})).filter(u=>u.d<C2).sort((u,f)=>u.d-f.d).slice(0,3);for(const{j:u}of h){const f=`${Math.min(c,u)}-${Math.max(c,u)}`;if(!t.has(f)){t.add(f);const p=this.pads[c].clone(),g=this.pads[u].clone(),_=new Te(g.x,p.y);this.traces.push({a:p,c:_,b:g})}}}const i=new Float32Array(this.traces.length*4*3);let r=0;for(const{a:c,c:h,b:u}of this.traces)i[r++]=c.x,i[r++]=0,i[r++]=c.y,i[r++]=h.x,i[r++]=0,i[r++]=h.y,i[r++]=h.x,i[r++]=0,i[r++]=h.y,i[r++]=u.x,i[r++]=0,i[r++]=u.y;const s=new Le;s.setAttribute("position",new Ne(i,3)),this.traceMat=new it({color:15616,blending:Ae,depthWrite:!1}),this.scene.add(new _t(s,this.traceMat));const o=new Float32Array($o*3);for(let c=0;c<$o;c++)o[c*3]=this.pads[c].x,o[c*3+1]=.15,o[c*3+2]=this.pads[c].y;const a=new Le;a.setAttribute("position",new Ne(o,3)),this.padMat=new Hi({color:47957,size:1.8,blending:Ae,depthWrite:!1}),this.scene.add(new Ni(a,this.padMat)),this.sigPositions=new Float32Array(Nl*3),this.sigColors=new Float32Array(Nl*3);const l=new Le;l.setAttribute("position",new Ne(this.sigPositions,3)),l.setAttribute("color",new Ne(this.sigColors,3)),this.sigPoints=new Ni(l,new Hi({size:3.2,vertexColors:!0,blending:Ae,depthWrite:!1})),this.scene.add(this.sigPoints);for(let c=0;c<Nl;c++)this.sigs.push({traceIdx:0,t:0,speed:.5,active:!1})}spawn(t){const i=this.sigs.find(r=>!r.active);!i||!this.traces.length||(i.active=!0,i.traceIdx=Math.floor(Math.random()*this.traces.length),i.t=0,i.speed=t)}tracePos(t,i){return i<.5?t.a.clone().lerp(t.c,i*2):t.c.clone().lerp(t.b,(i-.5)*2)}update(t,i){if(this.time+=t,this.spawnTimer-=t,i.beat)for(let s=0;s<4+Math.floor(i.bass*5);s++)this.spawn(.7+i.bass*1.4);this.spawnTimer<=0&&(this.spawn(.35+i.volume*.5),this.spawnTimer=.25+Math.random()*.35);for(let s=0;s<Nl;s++){const o=this.sigs[s];if(!o.active){this.sigColors[s*3]=this.sigColors[s*3+1]=this.sigColors[s*3+2]=0;continue}if(o.t+=o.speed*t,o.t>=1){o.active=!1;continue}const a=this.tracePos(this.traces[o.traceIdx],o.t);this.sigPositions[s*3]=a.x,this.sigPositions[s*3+1]=.25,this.sigPositions[s*3+2]=a.y;const l=.65+i.volume*.35;this.sigColors[s*3]=0,this.sigColors[s*3+1]=l,this.sigColors[s*3+2]=l*.35}this.sigPoints.geometry.attributes.position.needsUpdate=!0,this.sigPoints.geometry.attributes.color.needsUpdate=!0,this.traceMat.color.setRGB(0,.2+i.volume*.1,.04),this.padMat.color.setRGB(0,.55+i.bass*.35,.2);const r=this.time*.04;this.camera.position.x=Math.sin(r)*25,this.camera.position.y=80+i.bass*12,this.camera.position.z=Math.cos(r)*35+15,this.camera.lookAt(0,0,0)}dispose(){this.scene.traverse(t=>{(t instanceof Ni||t instanceof _t)&&(t.geometry.dispose(),t.material.dispose())})}}const j0="0123456789ABCDEF",Y0=18;class R2 extends ft{constructor(){super(...arguments);R(this,"panels",[]);R(this,"rings",[]);R(this,"epochMesh");R(this,"epochMat");R(this,"epochCanvas");R(this,"epochCtx");R(this,"epochTex");R(this,"time",0);R(this,"beatKick",0);R(this,"epochTimer",0)}init(){this.scene.background=new se(520),this.camera.position.set(0,28,95),this.camera.lookAt(0,0,0),this.scene.fog=new Xt(520,.005),this.buildBinaryRings(),this.buildHexPanels(),this.buildEpochDisplay()}buildBinaryRings(){const t=[{label:"HH",maxBits:5,radius:10,y:14},{label:"MM",maxBits:6,radius:14,y:0},{label:"SS",maxBits:6,radius:18,y:-14}],i=new yr(.8,8,6);for(const r of t){const s=[],o=[];for(let a=0;a<r.maxBits;a++){const l=new Lt({color:8772,blending:Ae,depthWrite:!1,transparent:!0,opacity:.4}),c=new We(i,l),h=a/r.maxBits*Math.PI*2-Math.PI/2;c.position.set(Math.cos(h)*r.radius,r.y,Math.sin(h)*r.radius),this.scene.add(c),s.push(c),o.push(l)}this.rings.push({bits:s,mats:o,value:0,maxBits:r.maxBits,radius:r.radius,y:r.y,label:r.label})}i.dispose()}buildHexPanels(){for(let t=0;t<Y0;t++){const i=t/Y0*Math.PI*2,r=38+Math.sin(t*2.1)*10,s=(Math.random()-.5)*30,o=document.createElement("canvas");o.width=256,o.height=192;const a=o.getContext("2d"),l=new fo(o);l.minFilter=vn;const c=new ii(12,9),h=new Lt({map:l,transparent:!0,opacity:.55,blending:Ae,depthWrite:!1,side:Qt}),u=new We(c,h);u.position.set(Math.cos(i)*r,s,Math.sin(i)*r),u.lookAt(0,s,0),this.scene.add(u);const f=Array.from({length:8},()=>this.randomHexLine());this.panels.push({mesh:u,mat:h,canvas:o,ctx:a,tex:l,angle:i,radius:r,yOff:s,refreshTimer:Math.random(),lines:f,glowBeat:0}),this.drawPanel(this.panels[this.panels.length-1])}}buildEpochDisplay(){this.epochCanvas=document.createElement("canvas"),this.epochCanvas.width=512,this.epochCanvas.height=96,this.epochCtx=this.epochCanvas.getContext("2d"),this.epochTex=new fo(this.epochCanvas),this.epochTex.minFilter=vn;const t=new ii(40,7.5);this.epochMat=new Lt({map:this.epochTex,transparent:!0,opacity:.9,blending:Ae,depthWrite:!1}),this.epochMesh=new We(t,this.epochMat),this.epochMesh.position.set(0,26,0),this.scene.add(this.epochMesh),this.drawEpoch(0)}randomHexLine(){let t="";const i=["0x","FF","DE","BE","CA","FE","BA","0A"][Math.floor(Math.random()*8)];t+=i+" ";for(let r=0;r<8;r++)t+=j0[Math.floor(Math.random()*16)]+j0[Math.floor(Math.random()*16)],r<7&&(t+=" ");return t}drawPanel(t){const{canvas:i,ctx:r}=t;r.fillStyle="#000208",r.fillRect(0,0,i.width,i.height);const o=.4+t.glowBeat*.5;r.fillStyle=`rgba(0,${Math.floor(o*200)},${Math.floor(o*255)},1)`,r.font="bold 14px monospace",r.textAlign="left";for(let a=0;a<t.lines.length;a++)r.fillText(t.lines[a],8,18+a*21);t.tex.needsUpdate=!0}drawEpoch(t){const i=this.epochCanvas,r=this.epochCtx;r.fillStyle="#000208",r.fillRect(0,0,i.width,i.height);const s=Date.now(),o=Math.floor(s/1e3),a=s%1e3,l=new Date(s).toISOString().replace("T"," ").slice(0,-1),c=Math.floor((.6+t*.4)*255);r.fillStyle=`rgb(0,${c},${Math.floor(c*.6)})`,r.font="bold 28px monospace",r.textAlign="center",r.fillText(`${o}.${String(a).padStart(3,"0")}`,i.width/2,38),r.font="14px monospace",r.fillStyle=`rgba(0,${Math.floor(c*.7)},${Math.floor(c*.4)},1)`,r.fillText(l,i.width/2,68),this.epochTex.needsUpdate=!0}update(t,i){this.time+=t,this.epochTimer+=t,i.beat&&(this.beatKick=1),this.beatKick*=.86;const r=new Date,s=[r.getHours(),r.getMinutes(),r.getSeconds()];for(let o=0;o<this.rings.length;o++){const a=this.rings[o],l=s[o];a.value=l;for(let c=0;c<a.maxBits;c++){const h=l>>a.maxBits-1-c&1,u=a.mats[c];h?(o===0?u.color.setRGB(.1+this.beatKick*.1,.5+i.bass*.3+this.beatKick*.3,1):o===1?u.color.setRGB(0,.9+i.mid*.1,.4+i.mid*.3):u.color.setRGB(0,.6+i.treble*.3,.8+i.treble*.2),u.opacity=.7+this.beatKick*.25):(u.color.setRGB(.02,.06,.15),u.opacity=.3+i.volume*.1)}}for(let o=0;o<this.rings.length;o++){const a=this.rings[o],l=.015+i.volume*.02+(o%2===0?0:-.01);for(let c=0;c<a.maxBits;c++){const h=c/a.maxBits*Math.PI*2-Math.PI/2+this.time*l*(o%2===0?1:-1);a.bits[c].position.set(Math.cos(h)*a.radius,a.y,Math.sin(h)*a.radius)}}for(const o of this.panels){if(i.beat&&(o.glowBeat=.8+i.bass*.2),o.glowBeat*=.88,o.refreshTimer-=t,o.refreshTimer<=0){o.refreshTimer=.12+Math.random()*.2;const a=Math.floor(Math.random()*o.lines.length);o.lines[a]=this.randomHexLine(),this.drawPanel(o)}o.angle+=t*(.04+i.volume*.02),o.mesh.position.set(Math.cos(o.angle)*o.radius,o.yOff+Math.sin(this.time*.3+o.angle)*2,Math.sin(o.angle)*o.radius),o.mesh.lookAt(0,o.yOff,0),o.mat.opacity=.35+i.volume*.1+o.glowBeat*.15}this.drawEpoch(this.beatKick),this.epochMesh.position.y=26+this.beatKick*2,this.camera.position.x=Math.sin(this.time*.07)*22,this.camera.position.y=25+i.bass*8+this.beatKick*4,this.camera.position.z=90+Math.cos(this.time*.07)*15,this.camera.lookAt(0,0,0)}dispose(){this.epochTex.dispose();for(const t of this.panels)t.tex.dispose();this.scene.traverse(t=>{t instanceof We&&(t.geometry.dispose(),t.material.dispose())})}}const uh=60,q0=22,K0=5,hh=10,Ps=16,Z0=["root@prydz:~# ","sys@node-7:~$ ","admin@core:~# ",">>> "],Q0=[{cmd:"ps aux | grep audio",out:["audio    1337  99.9  2.1 beat_engine","audio    1338  0.1  0.0 freq_analyzer","audio    1339  44.1  0.8 pcm_buffer"]},{cmd:"cat /proc/realtime",out:["bpm: 128","bass: 0.84","mid: 0.41","treble: 0.22","beat: true"]},{cmd:"ffmpeg -i track.flac -af loudnorm",out:["Input Integrated: -14.2 LUFS","Input True Peak: -1.0 dBTP","Normalizing output...","frame= 2048 fps=192 q=-1.0 Lsize=44100kB"]},{cmd:"ls -la /dev/audio*",out:["crw-rw---- 1 root audio 116,  0 /dev/audio0","crw-rw---- 1 root audio 116,  1 /dev/dsp","crw-rw---- 1 root audio 116, 16 /dev/mixer"]},{cmd:"netstat -an | grep 44100",out:["tcp  0  0 127.0.0.1:44100  0.0.0.0:*  LISTEN","tcp  0  0 127.0.0.1:44100  127.0.0.1:51234  ESTABLISHED"]},{cmd:"tail -f /var/log/beats.log",out:["[00:00:00.000] BEAT  bass=0.91 bpm=128","[00:00:00.469] BEAT  bass=0.78 bpm=128","[00:00:00.938] BEAT  bass=0.85 bpm=128","[00:00:01.406] BEAT  bass=0.93 bpm=128"]},{cmd:"analyze --fft 512 --window hann",out:["FFT size:    512 bins","Sample rate: 44100 Hz","Resolution:  86.1 Hz/bin","Peak freq:   432.0 Hz  (+3.2 dB)"]},{cmd:'grep -r "DROP TABLE" /db/schema/',out:["No matches found.","[OK] Schema integrity verified"]},{cmd:"uptime",out:["23:59:58 up 7 days, 4:20,  3 users,  load average: 1.28, 1.28, 1.28"]},{cmd:"hexdump -C audio.raw | head",out:["00000000  ff fe 00 01 8a bc 2d 44  f0 11 aa 03 cc ee 77 12  |......-D......w.|","00000010  00 80 ff 7f 01 00 fe ff  82 aa 11 cd ef 34 ab 00  |.............4..|"]}];class P2 extends ft{constructor(){super(...arguments);R(this,"panels",[]);R(this,"time",0);R(this,"beatKick",0)}init(){this.scene.background=new se(512),this.camera.position.set(0,0,80),this.camera.lookAt(0,0,0),this.scene.fog=new Xt(512,.006);const t=uh*hh,i=q0*Ps,r=t/i;for(let s=0;s<K0;s++){const o=document.createElement("canvas");o.width=t,o.height=i;const a=o.getContext("2d"),l=new fo(o);l.minFilter=vn;const c=28*r,h=28,u=new ii(c,h),f=new Lt({map:l,transparent:!0,opacity:.85,blending:Ae,depthWrite:!1,side:Qt}),p=new We(u,f),g=s/K0*Math.PI*2+.3,_=48+Math.sin(s*2.3)*14,m=(Math.random()-.5)*.35,d=(Math.random()-.5)*30;p.position.set(Math.cos(g)*_,(Math.random()-.5)*28,Math.sin(g)*_+d),p.lookAt(0,p.position.y,0),p.rotation.x+=m,this.scene.add(p);const v=Z0[s%Z0.length],x=[];for(let P=0;P<8;P++)x.push("");const y={mesh:p,mat:f,canvas:o,ctx:a,tex:l,lines:x,typingLine:"",typingTarget:"",typingPos:0,typingTimer:0,outputQueue:[],outputTimer:0,cursorBlink:0,prompt:v,state:"prompt",idleTimer:s*.7,angle:g,radius:_,tilt:m,glowBeat:0};this.beginCommand(y),this.panels.push(y)}}beginCommand(t){const i=Q0[Math.floor(Math.random()*Q0.length)];t.typingTarget=t.prompt+i.cmd,t.typingLine=t.prompt,t.typingPos=t.prompt.length,t.outputQueue=[...i.out],t.state="typing",t.typingTimer=0}pushLine(t,i){t.lines.push(i),t.lines.length>q0&&t.lines.shift()}drawPanel(t){const{canvas:i,ctx:r}=t,s=i.width,o=i.height,a=t.glowBeat;r.fillStyle="#000200",r.fillRect(0,0,s,o),r.fillStyle="rgba(0,255,0,0.015)";for(let h=0;h<o;h+=4)r.fillRect(0,h,s,1);const l=Math.floor((.55+a*.35)*255);r.font=`${Ps-2}px monospace`,r.textBaseline="top";for(let h=0;h<t.lines.length;h++){const u=t.lines[h];if(!u)continue;const f=t.lines.length-1-h,p=Math.max(40,l-f*9);r.fillStyle=`rgb(0,${p},0)`,r.fillText(u.slice(0,uh),4,h*Ps)}const c=t.lines.length;if(r.fillStyle=`rgb(0,${l},0)`,r.fillText(t.typingLine.slice(0,uh),4,c*Ps),(t.state==="typing"||t.state==="prompt")&&Math.floor(t.cursorBlink*2)%2===0){const u=4+t.typingLine.length*hh;r.fillStyle=`rgb(0,${l},0)`,r.fillRect(u,c*Ps,hh-1,Ps-2)}t.tex.needsUpdate=!0}update(t,i){this.time+=t,i.beat&&(this.beatKick=1),this.beatKick*=.87;for(const r of this.panels){r.cursorBlink+=t,i.beat&&(r.glowBeat=.8+i.bass*.2),r.glowBeat*=.88;const s=.045-i.volume*.015;r.state==="idle"?(r.idleTimer-=t,r.idleTimer<=0&&this.beginCommand(r)):r.state==="typing"?(r.typingTimer+=t,r.typingTimer>=s&&r.typingPos<r.typingTarget.length&&(r.typingTimer=0,r.typingLine+=r.typingTarget[r.typingPos++]),r.typingPos>=r.typingTarget.length&&(this.pushLine(r,r.typingLine),r.typingLine="",r.state="output",r.outputTimer=.08)):r.state==="output"?(r.outputTimer-=t,r.outputTimer<=0&&r.outputQueue.length>0&&(this.pushLine(r,r.outputQueue.shift()),r.outputTimer=.06+Math.random()*.1),r.outputQueue.length===0&&r.outputTimer<=0&&(this.pushLine(r,""),r.state="idle",r.idleTimer=.4+Math.random()*1.2)):r.state==="prompt"&&(r.idleTimer-=t,r.idleTimer<=0&&this.beginCommand(r)),this.drawPanel(r),r.mat.opacity=.6+i.volume*.15+r.glowBeat*.15}this.camera.position.x=Math.sin(this.time*.06)*30,this.camera.position.y=6+Math.sin(this.time*.04)*14,this.camera.position.z=95+Math.cos(this.time*.05)*20,this.camera.lookAt(0,0,0)}dispose(){for(const t of this.panels)t.tex.dispose();this.scene.traverse(t=>{t instanceof We&&(t.geometry.dispose(),t.material.dispose())})}}const L2={0:63,1:6,2:91,3:79,4:102,5:109,6:125,7:7,8:127,9:111},D2=[{x:.5,y:1.9,w:.7,h:.15},{x:.9,y:1.45,w:.15,h:.7},{x:.9,y:.55,w:.15,h:.7},{x:.5,y:.1,w:.7,h:.15},{x:.1,y:.55,w:.15,h:.7},{x:.1,y:1.45,w:.15,h:.7},{x:.5,y:1,w:.7,h:.15}],I2=16,J0=80;class U2 extends ft{constructor(){super(...arguments);R(this,"segMeshes",[]);R(this,"segMats",[]);R(this,"colonMeshes",[]);R(this,"colonMats",[]);R(this,"rings",[]);R(this,"time",0);R(this,"beatKick",0);R(this,"prevSecond",-1);R(this,"alarmFlash",0);R(this,"tickFlash",0);R(this,"dateMesh");R(this,"dateMat");R(this,"dateTex");R(this,"dateCanvas");R(this,"dateCtx")}init(){this.scene.background=new se(196608),this.camera.position.set(0,8,85),this.camera.lookAt(0,6,0),this.scene.fog=new Xt(196608,.004),this.buildDigits(),this.buildColons(),this.buildRings(),this.buildDateStrip(),this.refreshDisplay(new Date)}buildDigits(){const i=[-19.5,-13,-4.5,2,10.5,17];for(let r=0;r<6;r++){const s=[],o=[];for(let a=0;a<7;a++){const l=D2[a],c=new Tr(l.w*6,l.h*6,.4),h=new Lt({color:1703936,transparent:!0,opacity:.15,blending:Ae,depthWrite:!1}),u=new We(c,h);u.position.set(i[r]+(l.x-.5)*6,(l.y-1)*6,0),this.scene.add(u),s.push(u),o.push(h)}this.segMeshes.push(s),this.segMats.push(o)}}buildColons(){const t=[-7.5,7];for(const i of t)for(const r of[3,-3]){const s=new yr(.9,8,6),o=new Lt({color:16724736,blending:Ae,depthWrite:!1,transparent:!0,opacity:.9}),a=new We(s,o);a.position.set(i,r,0),this.scene.add(a),this.colonMeshes.push(a),this.colonMats.push(o)}}buildRings(){const t=new mi(1,1),i=new Mr(t);t.dispose();for(let r=0;r<I2;r++){const s=new it({color:16720384,transparent:!0,opacity:0,blending:Ae,depthWrite:!1}),o=new _t(i.clone(),s);o.visible=!1,this.scene.add(o),this.rings.push({mesh:o,mat:s,radius:0,speed:20,active:!1,color:[1,.1,0]})}i.dispose()}buildDateStrip(){this.dateCanvas=document.createElement("canvas"),this.dateCanvas.width=512,this.dateCanvas.height=64,this.dateCtx=this.dateCanvas.getContext("2d"),this.dateTex=new fo(this.dateCanvas),this.dateTex.minFilter=vn;const t=new ii(38,4.5);this.dateMat=new Lt({map:this.dateTex,transparent:!0,opacity:.7,blending:Ae,depthWrite:!1}),this.dateMesh=new We(t,this.dateMat),this.dateMesh.position.set(0,-11,0),this.scene.add(this.dateMesh)}refreshDisplay(t){const i=String(t.getHours()).padStart(2,"0"),r=String(t.getMinutes()).padStart(2,"0"),s=String(t.getSeconds()).padStart(2,"0"),o=i+r+s;for(let u=0;u<6;u++){const f=L2[o[u]]??0;for(let p=0;p<7;p++){const g=f>>p&1,_=this.segMats[u][p];g?(_.color.setRGB(1,.18+this.beatKick*.1,0),_.opacity=.85+this.beatKick*.1):(_.color.setRGB(.12,.01,0),_.opacity=.12)}}const a=this.dateCtx;a.fillStyle="#030000",a.fillRect(0,0,512,64);const l=Math.floor((.5+this.alarmFlash*.4)*255);a.fillStyle=`rgb(${l},${Math.floor(l*.2)},0)`,a.font="bold 28px monospace",a.textAlign="center",a.textBaseline="middle";const h=`${["SUN","MON","TUE","WED","THU","FRI","SAT"][t.getDay()]}  ${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`;a.fillText(h,256,32),this.dateTex.needsUpdate=!0}spawnRing(t,i){const r=this.rings.find(s=>!s.active);r&&(r.radius=5,r.speed=t,r.color=i,r.active=!0,r.mesh.visible=!0,r.mesh.scale.setScalar(5),r.mat.opacity=.75)}update(t,i){this.time+=t,i.beat&&(this.beatKick=1,this.alarmFlash=1,this.spawnRing(35+i.bass*30,[1,.15+i.bass*.3,0]),this.spawnRing(22+i.bass*18,[.8,.05,0])),this.beatKick*=.86,this.alarmFlash*=.82;const r=new Date,s=r.getSeconds();s!==this.prevSecond?(this.prevSecond=s,this.tickFlash=.6,this.spawnRing(15,[.6,.08,0]),this.refreshDisplay(r)):this.refreshDisplay(r),this.tickFlash*=.85;const o=.5+this.alarmFlash*.4+this.tickFlash*.3;for(const a of this.colonMats)a.color.setRGB(1,.15+this.alarmFlash*.3,0),a.opacity=o;for(const a of this.rings){if(!a.active)continue;a.radius+=a.speed*t,a.mesh.scale.setScalar(a.radius);const l=a.radius/J0;a.mat.opacity=Math.max(0,(1-l)*.65),a.mat.color.setRGB(a.color[0],a.color[1]*(1-l*.5),a.color[2]),a.radius>=J0&&(a.active=!1,a.mesh.visible=!1)}Math.random()<i.volume*.08&&this.spawnRing(8+i.volume*10,[.4,.04,0]),this.camera.position.x=Math.sin(this.time*.05)*14,this.camera.position.y=8+this.beatKick*4+Math.sin(this.time*.04)*4,this.camera.position.z=82+Math.cos(this.time*.05)*10,this.camera.lookAt(0,4,0)}dispose(){this.dateTex.dispose(),this.scene.traverse(t=>{(t instanceof We||t instanceof _t)&&(t.geometry.dispose(),t.material.dispose())})}}const sn=60,lp=120,ax=lp/(sn-1);function eg(n){return n*ax-lp/2}function tg(n){return n*ax-lp/2}class N2 extends ft{constructor(){super(...arguments);R(this,"grid");R(this,"positions");R(this,"colors");R(this,"gridY",new Float32Array(sn*sn));R(this,"lookup");R(this,"totalVerts",0);R(this,"time",0);R(this,"smoothAmp",4);R(this,"smoothSpeed",1.5);R(this,"smoothChop",0)}init(){this.scene.background=new se(1296),this.camera.position.set(0,40,75),this.camera.lookAt(0,0,0),this.scene.fog=new Xt(1296,.007);const t=sn*(sn-1)*2,i=sn*(sn-1)*2;this.totalVerts=t+i,this.positions=new Float32Array(this.totalVerts*3),this.colors=new Float32Array(this.totalVerts*3),this.lookup=new Uint16Array(this.totalVerts*2);let r=0;for(let a=0;a<sn;a++)for(let l=0;l<sn-1;l++)this.lookup[r*2]=a,this.lookup[r*2+1]=l,r++,this.lookup[r*2]=a,this.lookup[r*2+1]=l+1,r++;for(let a=0;a<sn;a++)for(let l=0;l<sn-1;l++)this.lookup[r*2]=l,this.lookup[r*2+1]=a,r++,this.lookup[r*2]=l+1,this.lookup[r*2+1]=a,r++;const s=new Le;s.setAttribute("position",new Ne(this.positions,3)),s.setAttribute("color",new Ne(this.colors,3));const o=new it({vertexColors:!0,blending:Ae,depthWrite:!1});this.grid=new _t(s,o),this.scene.add(this.grid)}update(t,i){this.time+=t;const r=.03;this.smoothAmp+=(4+i.bass*18-this.smoothAmp)*r,this.smoothSpeed+=(1.5+i.volume*1.4-this.smoothSpeed)*r,this.smoothChop+=(i.treble*.8-this.smoothChop)*r;const s=this.smoothAmp,o=this.smoothSpeed,a=this.smoothChop;for(let l=0;l<sn;l++)for(let c=0;c<sn;c++){const h=eg(c),u=tg(l),f=Math.sqrt(h*h+u*u),p=s*.6*Math.sin(f*.09-this.time*o),g=s*.25*Math.sin(f*.18-this.time*o*1.6+a*2),_=s*.15*Math.sin(h*.08+u*.06-this.time*o*.8);this.gridY[l*sn+c]=p+g+_}for(let l=0;l<this.totalVerts;l++){const c=this.lookup[l*2],h=this.lookup[l*2+1],u=this.gridY[c*sn+h];this.positions[l*3]=eg(h),this.positions[l*3+1]=u,this.positions[l*3+2]=tg(c);const f=Math.max(0,Math.min(1,(u+s)/(s*2)));this.colors[l*3]=f*f*.3,this.colors[l*3+1]=.15+f*.55,this.colors[l*3+2]=.45+f*.45}this.grid.geometry.attributes.position.needsUpdate=!0,this.grid.geometry.attributes.color.needsUpdate=!0,this.camera.position.x=Math.sin(this.time*.06)*30,this.camera.position.y=28+this.smoothAmp*.4,this.camera.position.z=70+Math.cos(this.time*.05)*18,this.camera.lookAt(0,-4,0)}dispose(){this.grid.geometry.dispose(),this.grid.material.dispose()}}const on=52,cp=100,lx=cp/(on-1);function ng(n){return n*lx-cp/2}function ig(n){return n*lx-cp/2}class F2 extends ft{constructor(){super(...arguments);R(this,"grid");R(this,"positions");R(this,"colors");R(this,"gridY",new Float32Array(on*on));R(this,"lookup");R(this,"totalVerts",0);R(this,"time",0);R(this,"smoothAmp",5);R(this,"smoothBass",0);R(this,"smoothMid",0);R(this,"smoothTreble",0)}init(){this.scene.background=new se(327688),this.camera.position.set(0,60,55),this.camera.lookAt(0,0,0),this.scene.fog=new Xt(327688,.007);const t=on*(on-1)*2,i=on*(on-1)*2;this.totalVerts=t+i,this.positions=new Float32Array(this.totalVerts*3),this.colors=new Float32Array(this.totalVerts*3),this.lookup=new Uint16Array(this.totalVerts*2);let r=0;for(let a=0;a<on;a++)for(let l=0;l<on-1;l++)this.lookup[r*2]=a,this.lookup[r*2+1]=l,r++,this.lookup[r*2]=a,this.lookup[r*2+1]=l+1,r++;for(let a=0;a<on;a++)for(let l=0;l<on-1;l++)this.lookup[r*2]=l,this.lookup[r*2+1]=a,r++,this.lookup[r*2]=l+1,this.lookup[r*2+1]=a,r++;const s=new Le;s.setAttribute("position",new Ne(this.positions,3)),s.setAttribute("color",new Ne(this.colors,3));const o=new it({vertexColors:!0,blending:Ae,depthWrite:!1});this.grid=new _t(s,o),this.scene.add(this.grid)}update(t,i){this.time+=t;const r=.015;this.smoothAmp+=(5+i.bass*12-this.smoothAmp)*r,this.smoothBass+=(i.bass-this.smoothBass)*r,this.smoothMid+=(i.mid-this.smoothMid)*r,this.smoothTreble+=(i.treble-this.smoothTreble)*r;const s=this.smoothAmp,o=Math.sin(this.time*.22)*30,a=Math.cos(this.time*.18)*30,l=Math.cos(this.time*.15)*25,c=Math.sin(this.time*.2)*25,h=.08+this.smoothMid*.04,u=.06+this.smoothTreble*.03,f=1.8+this.smoothBass*.8;for(let p=0;p<on;p++)for(let g=0;g<on;g++){const _=ng(g),m=ig(p),d=Math.sqrt((_-o)**2+(m-a)**2),v=Math.sqrt((_-l)**2+(m-c)**2),x=Math.sqrt(_*_+m*m),y=s*.4*Math.sin(d*h-this.time*f)+s*.35*Math.sin(v*u-this.time*f*.85)+s*.25*Math.sin(x*.07+this.time*f*.5);this.gridY[p*on+g]=y}for(let p=0;p<this.totalVerts;p++){const g=this.lookup[p*2],_=this.lookup[p*2+1],m=this.gridY[g*on+_];this.positions[p*3]=ng(_),this.positions[p*3+1]=m,this.positions[p*3+2]=ig(g);const d=Math.max(0,Math.min(1,(m+s)/(s*2))),v=d*d;this.colors[p*3]=.05+(1-d)*.45*(1-d),this.colors[p*3+1]=.08+v*.35,this.colors[p*3+2]=.1+d*(1-d)*1.4}this.grid.geometry.attributes.position.needsUpdate=!0,this.grid.geometry.attributes.color.needsUpdate=!0,this.camera.position.x=Math.sin(this.time*.07)*22,this.camera.position.y=55+this.smoothAmp*.4,this.camera.position.z=55+Math.cos(this.time*.05)*18,this.camera.lookAt(0,0,0)}dispose(){this.grid.geometry.dispose(),this.grid.material.dispose()}}const O2=20,rg=70,B2=[new rp(1,0),new np(1,0),new mi(1,0),new mi(1,1),new tp(1,0)];class k2 extends ft{constructor(){super(...arguments);R(this,"crystals",[]);R(this,"core");R(this,"coreMat");R(this,"coreRot",new D(.4,.7,.3).normalize());R(this,"coreScale",1);R(this,"ambientTimer",0);R(this,"time",0);R(this,"beatKick",0);R(this,"hueOffset",0)}init(){this.scene.background=new se(8),this.camera.position.set(0,20,80),this.camera.lookAt(0,0,0),this.scene.fog=new Xt(8,.004);const t=B2.map(r=>{const s=new Mr(r);return r.dispose(),s});for(let r=0;r<O2;r++){const s=r%t.length,o=new it({color:65535,transparent:!0,opacity:0,blending:Ae,depthWrite:!1}),a=new _t(t[s].clone(),o);a.visible=!1,this.scene.add(a);const l=new D(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize();this.crystals.push({mesh:a,mat:o,radius:0,speed:20,active:!1,rotAxis:l,rotSpeed:.5+Math.random()*1.5,hue:Math.random()})}t.forEach(r=>r.dispose());const i=new Mr(new mi(4,2));this.coreMat=new it({color:16777215,transparent:!0,opacity:.8,blending:Ae,depthWrite:!1}),this.core=new _t(i,this.coreMat),this.scene.add(this.core)}spawn(t,i){const r=this.crystals.find(s=>!s.active);r&&(r.radius=4,r.speed=t,r.hue=i,r.active=!0,r.mesh.visible=!0,r.mesh.scale.setScalar(4),r.mesh.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),r.mat.opacity=.8)}update(t,i){this.time+=t,this.hueOffset+=t*.05,this.ambientTimer-=t,i.beat&&(this.beatKick=1,this.spawn(32+i.bass*28,(this.hueOffset+0)%1),this.spawn(20+i.bass*15,(this.hueOffset+.33)%1),this.coreScale=1.8+i.bass*.6),this.ambientTimer<=0&&(this.spawn(10+i.volume*8,(this.hueOffset+Math.random())%1),this.ambientTimer=1.8-i.volume*.5),this.beatKick*=.87,this.coreScale+=(1-this.coreScale)*.07,this.core.scale.setScalar(this.coreScale),this.core.rotateOnAxis(this.coreRot,t*(.4+i.volume*.6)),this.coreMat.color.setHSL((this.hueOffset+.5)%1,.8,.55+i.treble*.2);for(const r of this.crystals){if(!r.active)continue;r.radius+=r.speed*t,r.mesh.scale.setScalar(r.radius),r.mesh.rotateOnAxis(r.rotAxis,r.rotSpeed*t);const s=r.radius/rg;r.mat.opacity=Math.max(0,(1-s)*.7);const o=(r.hue+s*.15+this.hueOffset)%1,a=.7+i.mid*.3,l=.4+s*.2;r.mat.color.setHSL(o,a,l),r.radius>=rg&&(r.active=!1,r.mesh.visible=!1)}this.camera.position.x=Math.sin(this.time*.09)*22,this.camera.position.y=18+Math.sin(this.time*.06)*12+this.beatKick*5,this.camera.position.z=78+Math.cos(this.time*.09)*14,this.camera.lookAt(0,0,0)}dispose(){this.crystals.forEach(t=>{t.mesh.geometry.dispose(),t.mat.dispose()}),this.core.geometry.dispose(),this.coreMat.dispose()}}const Dc=class Dc{constructor(e,t){R(this,"renderer");R(this,"composer");R(this,"renderPass");R(this,"scenes");R(this,"currentIndex",0);R(this,"transitioning",!1);R(this,"transitionProgress",0);R(this,"transitionSwitchDone",!1);R(this,"autoTimer",0);R(this,"AUTO_CYCLE_DURATION",45);R(this,"rafId",0);R(this,"masterClock",new sp);R(this,"audioData",null);R(this,"onSceneChange");R(this,"_transitionAlpha",0);R(this,"onResize",()=>{const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t),this.composer.setSize(e,t),this.scenes.forEach(i=>i.onResize(e,t))});R(this,"_pendingIndex",0);R(this,"loop",()=>{this.rafId=requestAnimationFrame(this.loop);const e=Math.min(this.masterClock.getDelta(),.05);if(this.autoTimer-=e,this.autoTimer<=0){this.autoTimer=this.AUTO_CYCLE_DURATION;const i=(this.currentIndex+1)%this.scenes.length;this.beginTransition(i)}this.transitioning&&(this.transitionProgress+=e/.8,this.transitionProgress>=.5&&!this.transitionSwitchDone&&(this.transitionSwitchDone=!0,this.currentIndex=this._pendingIndex,this.onSceneChange(this.currentIndex,Dc.SCENE_NAMES[this.currentIndex]),this.renderPass.scene=this.scenes[this.currentIndex].scene,this.renderPass.camera=this.scenes[this.currentIndex].camera),this._transitionAlpha=this.transitionProgress<.5?this.transitionProgress*2:Math.max(0,2-this.transitionProgress*2),this.transitionProgress>=1&&(this.transitioning=!1,this.transitionProgress=0,this._transitionAlpha=0));const t=this.audioData??{raw:new Uint8Array(256),bass:0,mid:0,treble:0,volume:0,beat:!1};this.scenes[this.currentIndex].update(e,t),this.renderPass.scene=this.scenes[this.currentIndex].scene,this.renderPass.camera=this.scenes[this.currentIndex].camera,this.composer.render()});this.onSceneChange=t,this.renderer=new NA({canvas:e,antialias:!0,alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Tn,this.scenes=[new e2,new t2,new P2,new n2,new i2,new s2,new a2,new l2,new c2,new u2,new h2,new p2,new m2,new v2,new _2,new y2,new S2,new E2,new w2,new A2,new b2,new R2,new U2,new N2,new F2,new k2],this.scenes.forEach(o=>o.init()),this.composer=new qA(this.renderer);const i=this.scenes[0];this.renderPass=new KA(i.scene,i.camera),this.composer.addPass(this.renderPass);const r=new po(new Te(window.innerWidth,window.innerHeight),1.5,.4,.1);this.composer.addPass(r);const s=new JA;this.composer.addPass(s),window.addEventListener("resize",this.onResize)}get transitionAlpha(){return this._transitionAlpha}setAudioData(e){this.audioData=e}nextScene(){if(this.transitioning)return;const e=(this.currentIndex+1)%this.scenes.length;this.beginTransition(e,!0)}prevScene(){if(this.transitioning)return;const e=(this.currentIndex-1+this.scenes.length)%this.scenes.length;this.beginTransition(e,!0)}beginTransition(e,t=!1){this.transitioning=!0,this.transitionProgress=0,this.transitionSwitchDone=!1,this._transitionAlpha=0,this._pendingIndex=e,t&&(this.autoTimer=this.AUTO_CYCLE_DURATION)}start(){this.masterClock.start(),this.autoTimer=this.AUTO_CYCLE_DURATION,this.loop()}stop(){cancelAnimationFrame(this.rafId),window.removeEventListener("resize",this.onResize)}dispose(){this.stop(),this.scenes.forEach(e=>e.dispose()),this.renderer.dispose()}};R(Dc,"SCENE_NAMES",["Nebula","Tunnel","Terminal","Neural Net","Planet","Digital","Warp","DNA","City","Vortex","Grid Wave","Spectrum","Globe","Flow","Cymatics","Lissajous","Shockwave","Aurora","Tesseract","Pulse","Circuit","Clock","Alarm","Ocean","Plasma","Crystal"]);let Lc=Dc;function z2({currentScene:n,sceneNames:e,isAudioActive:t,audioMode:i,transitionAlpha:r,showControls:s,isFullscreen:o,onMicToggle:a,onFileSelect:l,onPrev:c,onNext:h,onToggleFullscreen:u}){const f=bt.useRef(null),p=_=>{_.preventDefault();const m=_.dataTransfer.files[0];m&&m.type.startsWith("audio/")&&l(m)},g=_=>{var d;const m=(d=_.target.files)==null?void 0:d[0];m&&(l(m),_.target.value="")};return Ve.jsxs("div",{className:"absolute inset-0 select-none",onDrop:p,onDragOver:_=>_.preventDefault(),style:{pointerEvents:"none"},children:[Ve.jsx("div",{className:"absolute inset-0 bg-black pointer-events-none",style:{opacity:r}}),Ve.jsxs("div",{className:"absolute inset-0 transition-opacity duration-700",style:{opacity:s?1:0,pointerEvents:s?"auto":"none"},children:[Ve.jsx("div",{className:"absolute top-4 left-5 pointer-events-none",children:Ve.jsx("span",{className:"font-mono text-xs tracking-[0.4em] uppercase",style:{color:"rgba(255,255,255,0.2)"},children:"Prydzualizer"})}),Ve.jsxs("div",{className:"absolute top-4 right-5 flex items-center gap-3",style:{pointerEvents:"auto"},children:[Ve.jsx("button",{onClick:a,title:t&&i==="mic"?"Stop mic":"Start mic",className:"flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200",style:{borderColor:t&&i==="mic"?"rgba(0,255,100,0.7)":"rgba(255,255,255,0.2)",color:t&&i==="mic"?"rgba(0,255,100,0.9)":"rgba(255,255,255,0.4)",boxShadow:t&&i==="mic"?"0 0 10px rgba(0,255,100,0.4)":"none",background:"transparent"},children:Ve.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:Ve.jsx("path",{d:"M12 1a4 4 0 0 1 4 4v7a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v7a2 2 0 0 0 4 0V5a2 2 0 0 0-2-2zm-7 9a7 7 0 0 0 14 0h2a9 9 0 0 1-8 8.94V23h-2v-2.06A9 9 0 0 1 3 12H5z"})})}),Ve.jsx("button",{onClick:()=>{var _;return(_=f.current)==null?void 0:_.click()},title:"Load audio file",className:"flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200",style:{borderColor:t&&i==="file"?"rgba(0,180,255,0.7)":"rgba(255,255,255,0.2)",color:t&&i==="file"?"rgba(0,180,255,0.9)":"rgba(255,255,255,0.4)",boxShadow:t&&i==="file"?"0 0 10px rgba(0,180,255,0.4)":"none",background:"transparent"},children:Ve.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:Ve.jsx("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"})})}),t&&Ve.jsx("span",{className:"font-mono text-xs tracking-widest animate-pulse",style:{color:i==="mic"?"rgba(0,255,100,0.8)":"rgba(0,180,255,0.8)"},children:i==="mic"?"MIC":"FILE"}),Ve.jsx("button",{onClick:u,title:o?"Exit fullscreen (F)":"Fullscreen (F)",className:"flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200",style:{borderColor:o?"rgba(255,255,255,0.4)":"rgba(255,255,255,0.2)",color:o?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.4)",background:"transparent"},children:o?Ve.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"currentColor",children:Ve.jsx("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"})}):Ve.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"currentColor",children:Ve.jsx("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"})})})]}),Ve.jsx("input",{ref:f,type:"file",accept:"audio/*",onChange:g,className:"hidden"}),Ve.jsx("button",{onClick:c,className:"absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110",style:{color:"rgba(255,255,255,0.2)",background:"transparent",border:"1px solid rgba(255,255,255,0.1)",pointerEvents:"auto"},onMouseEnter:_=>{const m=_.currentTarget;m.style.color="rgba(255,255,255,0.6)",m.style.borderColor="rgba(255,255,255,0.3)"},onMouseLeave:_=>{const m=_.currentTarget;m.style.color="rgba(255,255,255,0.2)",m.style.borderColor="rgba(255,255,255,0.1)"},title:"Previous scene",children:Ve.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:Ve.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})})}),Ve.jsx("button",{onClick:h,className:"absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:scale-110",style:{color:"rgba(255,255,255,0.2)",background:"transparent",border:"1px solid rgba(255,255,255,0.1)",pointerEvents:"auto"},onMouseEnter:_=>{const m=_.currentTarget;m.style.color="rgba(255,255,255,0.6)",m.style.borderColor="rgba(255,255,255,0.3)"},onMouseLeave:_=>{const m=_.currentTarget;m.style.color="rgba(255,255,255,0.2)",m.style.borderColor="rgba(255,255,255,0.1)"},title:"Next scene",children:Ve.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:Ve.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})})}),Ve.jsxs("div",{className:"absolute bottom-8 left-0 right-0 flex flex-col items-center gap-3 pointer-events-none",children:[Ve.jsx("span",{className:"font-mono text-xs tracking-[0.3em] uppercase",style:{color:"rgba(255,255,255,0.6)"},children:e[n]}),Ve.jsx("div",{className:"flex items-center gap-2",children:e.map((_,m)=>Ve.jsx("div",{className:"rounded-full transition-all duration-300",style:{width:m===n?"20px":"6px",height:"6px",background:m===n?"rgba(255,255,255,0.8)":"rgba(255,255,255,0.25)"}},m))})]}),!t&&Ve.jsx("div",{className:"absolute bottom-20 left-0 right-0 flex justify-center pointer-events-none",children:Ve.jsx("span",{className:"font-mono text-xs tracking-widest",style:{color:"rgba(255,255,255,0.15)"},children:"drop audio file or tap mic"})})]})]})}function G2(){const n=bt.useRef(null),e=bt.useRef(null),t=bt.useRef(null),i=bt.useRef(0),r=bt.useRef(null),s=bt.useRef(()=>{}),[o,a]=bt.useState(0),[l,c]=bt.useState(!1),[h,u]=bt.useState(null),[f,p]=bt.useState(0),[g,_]=bt.useState(!1),[m,d]=bt.useState(!0),v=bt.useCallback(async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch(T){console.error("Fullscreen error:",T)}},[]);bt.useEffect(()=>{s.current=v},[v]),bt.useEffect(()=>{const T=()=>{r.current&&clearTimeout(r.current),r.current=setTimeout(()=>d(!1),2500)},C=()=>{const E=!!document.fullscreenElement;_(E),E?(d(!0),T()):(d(!0),r.current&&clearTimeout(r.current))};return document.addEventListener("fullscreenchange",C),()=>{document.removeEventListener("fullscreenchange",C),r.current&&clearTimeout(r.current)}},[]);const x=bt.useCallback(()=>{document.fullscreenElement&&(d(!0),r.current&&clearTimeout(r.current),r.current=setTimeout(()=>d(!1),2500))},[]);bt.useEffect(()=>{if(!n.current)return;const T=new zM;t.current=T;const C=new Lc(n.current,B=>{a(B)});e.current=C,C.start();let E=0;const M=()=>{i.current=requestAnimationFrame(M),T.isActive&&C.setAudioData(T.getAudioData());const B=C.transitionAlpha;Math.abs(B-E)>.01&&(E=B,p(B))};i.current=requestAnimationFrame(M);const L=B=>{B.key==="ArrowRight"&&C.nextScene(),B.key==="ArrowLeft"&&C.prevScene(),(B.key==="f"||B.key==="F")&&s.current()};return window.addEventListener("keydown",L),()=>{cancelAnimationFrame(i.current),C.dispose(),T.stop(),window.removeEventListener("keydown",L)}},[]);const y=async()=>{const T=t.current;if(T)if(T.isActive&&T.mode==="mic")T.stop(),c(!1),u(null);else try{await T.startMic(),c(!0),u("mic")}catch(C){console.error("Mic access failed:",C)}},P=async T=>{const C=t.current;if(C)try{await C.startFile(T),c(!0),u("file")}catch(E){console.error("File audio failed:",E)}},A=!g||m;return Ve.jsxs("div",{className:"w-screen h-screen bg-black relative overflow-hidden",onMouseMove:x,style:{cursor:g&&!m?"none":"default"},children:[Ve.jsx("canvas",{ref:n,className:"absolute inset-0 w-full h-full",style:{display:"block"}}),Ve.jsx(z2,{currentScene:o,sceneNames:Lc.SCENE_NAMES,isAudioActive:l,audioMode:h,transitionAlpha:f,showControls:A,isFullscreen:g,onMicToggle:y,onFileSelect:P,onPrev:()=>{var T;return(T=e.current)==null?void 0:T.prevScene()},onNext:()=>{var T;return(T=e.current)==null?void 0:T.nextScene()},onToggleFullscreen:v})]})}v_(document.getElementById("root")).render(Ve.jsx(bt.StrictMode,{children:Ve.jsx(G2,{})}));
