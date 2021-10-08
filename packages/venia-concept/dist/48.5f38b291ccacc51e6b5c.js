/*!
 * @version v11.0.0-beta.1-1-g6fc2154e-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{IDZq:function(t,n,e){"use strict"
e.r(n),e.d(n,"default",function(){return w})
var r=e("D18t"),i=e.n(r),o=e("9nKk"),a=e.n(o),s=e("/4dI"),d=e.n(s),c=e("ERkP"),l=e.n(c),g=e("vB0K"),p=e.n(g),u=e("znEY"),b=e.n(u),f={injectType:"singletonStyleTag",insert:"head",singleton:!0},m=(p()(b.a,f),b.a.locals||{}),h=e("aWzz"),y=e("YyrX")
function ownKeys(t,n){var e=Object.keys(t)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t)
n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),e.push.apply(e,r)}return e}var O=function Buttons(t){var n=Object(y.a)(m,t.classes),e=t.appearance,r=t.isSameWidth,o=t.textAlign,s=t.border,g=t.borderColor,p=t.borderWidth,u=t.borderRadius,b=t.marginTop,f=t.marginRight,h=t.marginBottom,O=t.marginLeft,w=t.paddingTop,j=t.paddingRight,v=t.paddingBottom,x=t.paddingLeft,k=t.children,R=t.cssClasses,B=void 0===R?[]:R,P=n["".concat(e)],C=Object(c.useRef)(null),S=l.a.useState(0),T=d()(S,2),W=T[0],E=T[1],L=function _objectSpread(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{}
n%2?ownKeys(Object(e),!0).forEach(function(n){a()(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):ownKeys(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}({border:s,borderColor:g,borderWidth:p,borderRadius:u,marginTop:b,marginRight:f,marginBottom:h,marginLeft:O,paddingTop:w,paddingRight:j,paddingBottom:v,paddingLeft:x},{"--buttonMinWidth":W?W+"px":null})
Object(c.useLayoutEffect)(function(){if(r){var t=C.current,n=0,e=!0,i=!1,o=void 0
try{for(var a,s=t.querySelectorAll("button")[Symbol.iterator]();!(e=(a=s.next()).done);e=!0){var d=a.value.offsetWidth
d>n&&(n=d)}}catch(t){i=!0,o=t}finally{try{e||null==s.return||s.return()}finally{if(i)throw o}}E(n)}},[r])
return L.justifyContent="flex-start",o&&(L.justifyContent={left:"flex-start",center:"center",right:"flex-end"}[o]||"flex-start",L.textAlign=o),l.a.createElement("div",{ref:C,style:L,className:[n.root,P].concat(i()(B)).join(" ")},k)}
O.propTypes={appearance:Object(h.oneOf)(["inline","stacked"]),classes:Object(h.shape)({root:h.string,stacked:h.string,inline:h.string}),isSameWidth:h.bool,textAlign:h.string,border:h.string,borderColor:h.string,borderWidth:h.string,borderRadius:h.string,marginTop:h.string,marginRight:h.string,marginBottom:h.string,marginLeft:h.string,paddingTop:h.string,paddingRight:h.string,paddingBottom:h.string,paddingLeft:h.string,cssClasses:Object(h.arrayOf)(h.string)}
var w=O},znEY:function(t,n,e){(n=t.exports=e("PBB4")(!1)).push([t.i,".buttons-root-1nX {\n    max-width: 100%;\n}\n.buttons-root-1nX > div {\n    display: inline-block;\n    margin-bottom: 0.5rem;\n    max-width: 100%;\n}\n.buttons-root-1nX button[class] {\n    max-width: 100%;\n    overflow: hidden;\n    min-width: var(--buttonMinWidth);\n}\n.buttons-stacked-3tC {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n}\n.buttons-inline-2Rk > div {\n    margin-inline-end: 0.5rem;\n}\n",""]),n.locals={root:"buttons-root-1nX",stacked:"buttons-stacked-3tC",inline:"buttons-inline-2Rk"}}}])
