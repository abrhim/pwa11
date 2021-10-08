/*!
 * @version v11.0.0-beta.1-1-g6fc2154e-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Z1nV:function(e,t,r){"use strict"
function _objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var r,n,o={},a=Object.keys(e)
for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r])
return o}function toVal(e){var t,r,n=""
if("string"==typeof e||"number"==typeof e)n+=e
else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=toVal(e[t]))&&(n&&(n+=" "),n+=r)
else for(t in e)e[t]&&(n&&(n+=" "),n+=t)
return n}r.d(t,"a",function(){return FocusScope})
var n=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=toVal(e))&&(n&&(n+=" "),n+=t)
return n}
function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var o=r("ERkP"),a=r.n(o)
const c={prefix:Math.round(1e10*Math.random()),current:0}
a.a.createContext(c)
Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)
const s="undefined"!=typeof window?a.a.useLayoutEffect:()=>{}
let f=new Map
function mergeIds(e,t){if(e===t)return e
let r=f.get(e)
if(r)return r(t),t
let n=f.get(t)
return n?(n(e),e):t}function chain(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return function(){for(let e of t)"function"==typeof e&&e(...arguments)}}function mergeProps(){let e={}
for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o]
for(let t of r){for(let r in e)/^on[A-Z]/.test(r)&&"function"==typeof e[r]&&"function"==typeof t[r]?e[r]=chain(e[r],t[r]):"className"===r&&"string"==typeof e.className&&"string"==typeof t.className?e[r]=n(e.className,t.className):"UNSAFE_className"===r&&"string"==typeof e.UNSAFE_className&&"string"==typeof t.UNSAFE_className?e[r]=n(e.UNSAFE_className,t.UNSAFE_className):"id"===r&&e.id&&t.id?e.id=mergeIds(e.id,t.id):e[r]=void 0!==t[r]?t[r]:e[r]
for(let r in t)void 0===e[r]&&(e[r]=t[r])}return e}new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"])
function focusWithoutScrolling(e){if(function $bc7c9c3af78f5218ff72cecce15730$var$supportsPreventScroll(){if(null==i){i=!1
try{var e=document.createElement("div")
e.focus({get preventScroll(){return i=!0,!0}})}catch(e){}}return i}())e.focus({preventScroll:!0})
else{let t=function $bc7c9c3af78f5218ff72cecce15730$var$getScrollableElements(e){var t=e.parentNode,r=[],n=document.scrollingElement||document.documentElement
for(;t instanceof HTMLElement&&t!==n;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&r.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode
n instanceof HTMLElement&&r.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft})
return r}(e)
e.focus(),function $bc7c9c3af78f5218ff72cecce15730$var$restoreScrollPosition(e){for(let{element:t,scrollTop:r,scrollLeft:n}of e)t.scrollTop=r,t.scrollLeft=n}(t)}}let i=null
let u=new Map,l=new Set
function $b3e8d5c5f32fa26afa6df1b81f09b6b8$var$setupGlobalEvents(){if("undefined"==typeof window)return
let e=t=>{let r=u.get(t.target)
if(r&&(r.delete(t.propertyName),0===r.size&&(t.target.removeEventListener("transitioncancel",e),u.delete(t.target)),0===u.size)){for(let e of l)e()
l.clear()}}
document.body.addEventListener("transitionrun",t=>{let r=u.get(t.target)
r||(r=new Set,u.set(t.target,r),t.target.addEventListener("transitioncancel",e)),r.add(t.propertyName)}),document.body.addEventListener("transitionend",e)}function runAfterTransition(e){requestAnimationFrame(()=>{0===u.size?e():l.add(e)})}"undefined"!=typeof document&&("loading"!==document.readyState?$b3e8d5c5f32fa26afa6df1b81f09b6b8$var$setupGlobalEvents():document.addEventListener("DOMContentLoaded",$b3e8d5c5f32fa26afa6df1b81f09b6b8$var$setupGlobalEvents))
function useGlobalListeners(){let e=Object(o.useRef)(new Map),t=Object(o.useCallback)((t,r,n,o)=>{e.current.set(n,{type:r,eventTarget:t,options:o}),t.addEventListener(r,n,o)},[]),r=Object(o.useCallback)((t,r,n,o)=>{t.removeEventListener(r,n,o),e.current.delete(n)},[])
return Object(o.useEffect)(()=>()=>{e.current.forEach((e,t)=>{r(e.eventTarget,e.type,t,e.options)})},[r]),{addGlobalListener:t,removeGlobalListener:r}}"undefined"!=typeof window&&window.visualViewport
let d="default",b=""
function $e17c9db826984f8ab8e5d837bf0b8$export$disableTextSelection(){"default"===d&&(b=document.documentElement.style.webkitUserSelect,document.documentElement.style.webkitUserSelect="none"),d="disabled"}function $e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection(){"disabled"===d&&(d="restoring",setTimeout(()=>{runAfterTransition(()=>{"restoring"===d&&("none"===document.documentElement.style.webkitUserSelect&&(document.documentElement.style.webkitUserSelect=b||""),b="",d="default")})},300))}function $f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}const v=a.a.createContext(null)
function usePress(e){let t=function $ffc54430b1dbeee65879852feaaff07d$var$usePressResponderContext(e){let t=Object(o.useContext)(v)
if(t){let{register:r}=t,n=_objectWithoutPropertiesLoose(t,["register"])
e=mergeProps(n,e),r()}return Object(o.useEffect)(()=>{if(t&&t.ref)return t.ref.current=e.ref.current,()=>{t.ref.current=null}},[t,e.ref]),e}(e),{onPress:r,onPressChange:n,onPressStart:a,onPressEnd:c,onPressUp:s,isDisabled:f,isPressed:i,preventFocusOnPress:u}=t,l=_objectWithoutPropertiesLoose(t,["onPress","onPressChange","onPressStart","onPressEnd","onPressUp","isDisabled","isPressed","preventFocusOnPress","ref"]),[d,b]=Object(o.useState)(!1),$=Object(o.useRef)({isPressed:!1,ignoreEmulatedMouseEvents:!1,ignoreClickAfterPress:!1,activePointerId:null,target:null,isOverTarget:!1}),{addGlobalListener:p,removeGlobalListener:m}=useGlobalListeners(),g=Object(o.useMemo)(()=>{let e=$.current,t=(e,t)=>{f||(a&&a({type:"pressstart",pointerType:t,target:e.currentTarget,shiftKey:e.shiftKey,metaKey:e.metaKey,ctrlKey:e.ctrlKey}),n&&n(!0),b(!0))},o=function triggerPressEnd(t,o,a){void 0===a&&(a=!0),f||(e.ignoreClickAfterPress=!0,c&&c({type:"pressend",pointerType:o,target:t.currentTarget,shiftKey:t.shiftKey,metaKey:t.metaKey,ctrlKey:t.ctrlKey}),n&&n(!1),b(!1),r&&a&&r({type:"press",pointerType:o,target:t.currentTarget,shiftKey:t.shiftKey,metaKey:t.metaKey,ctrlKey:t.ctrlKey}))},i=(e,t)=>{f||s&&s({type:"pressup",pointerType:t,target:e.currentTarget,shiftKey:e.shiftKey,metaKey:e.metaKey,ctrlKey:e.ctrlKey})},l={onKeyDown(r){$ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(r.nativeEvent)&&(r.preventDefault(),r.stopPropagation(),e.isPressed||r.repeat||(e.target=r.currentTarget,e.isPressed=!0,t(r,"keyboard"),p(document,"keyup",d,!1)))},onKeyUp(t){$ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(t.nativeEvent)&&!t.repeat&&i($ffc54430b1dbeee65879852feaaff07d$var$createEvent(e.target,t),"keyboard")},onClick(r){r&&0===r.button&&(r.stopPropagation(),f&&r.preventDefault(),e.ignoreClickAfterPress||e.ignoreEmulatedMouseEvents||!$f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(r.nativeEvent)||(f||u||focusWithoutScrolling(r.currentTarget),t(r,"virtual"),i(r,"virtual"),o(r,"virtual")),e.ignoreEmulatedMouseEvents=!1,e.ignoreClickAfterPress=!1)}},d=t=>{e.isPressed&&$ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(t)&&(t.preventDefault(),t.stopPropagation(),e.isPressed=!1,o($ffc54430b1dbeee65879852feaaff07d$var$createEvent(e.target,t),"keyboard",t.target===e.target),m(document,"keyup",d,!1),(t.target===e.target&&$ffc54430b1dbeee65879852feaaff07d$var$isHTMLAnchorLink(e.target)||"link"===e.target.getAttribute("role"))&&e.target.click())}
if("undefined"!=typeof PointerEvent){l.onPointerDown=(r=>{0===r.button&&(r.preventDefault(),r.stopPropagation(),e.isPressed||(e.isPressed=!0,e.isOverTarget=!0,e.activePointerId=r.pointerId,e.target=r.currentTarget,f||u||focusWithoutScrolling(r.currentTarget),$e17c9db826984f8ab8e5d837bf0b8$export$disableTextSelection(),t(r,r.pointerType),p(document,"pointermove",n,!1),p(document,"pointerup",a,!1),p(document,"pointercancel",c,!1)))}),l.onMouseDown=(e=>{0===e.button&&e.preventDefault()})
let r=()=>{m(document,"pointermove",n,!1),m(document,"pointerup",a,!1),m(document,"pointercancel",c,!1)}
l.onPointerUp=(e=>{0===e.button&&$ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e,e.currentTarget)&&i(e,e.pointerType)})
let n=r=>{r.pointerId===e.activePointerId&&($ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(r,e.target)?e.isOverTarget||(e.isOverTarget=!0,t($ffc54430b1dbeee65879852feaaff07d$var$createEvent(e.target,r),r.pointerType)):e.isOverTarget&&(e.isOverTarget=!1,o($ffc54430b1dbeee65879852feaaff07d$var$createEvent(e.target,r),r.pointerType,!1)))},a=t=>{t.pointerId===e.activePointerId&&e.isPressed&&0===t.button&&($ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(t,e.target)?o($ffc54430b1dbeee65879852feaaff07d$var$createEvent(e.target,t),t.pointerType):e.isOverTarget&&o($ffc54430b1dbeee65879852feaaff07d$var$createEvent(e.target,t),t.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,r(),$e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection())},c=t=>{e.isPressed&&(e.isOverTarget&&o($ffc54430b1dbeee65879852feaaff07d$var$createEvent(e.target,t),t.pointerType,!1),e.isPressed=!1,e.isOverTarget=!1,e.activePointerId=null,r(),$e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection())}}else{l.onMouseDown=(n=>{0===n.button&&(n.preventDefault(),n.stopPropagation(),e.ignoreEmulatedMouseEvents||(e.isPressed=!0,e.isOverTarget=!0,e.target=n.currentTarget,f||u||focusWithoutScrolling(n.currentTarget),t(n,$f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(n.nativeEvent)?"virtual":"mouse"),p(document,"mouseup",r,!1)))}),l.onMouseEnter=(r=>{r.stopPropagation(),e.isPressed&&!e.ignoreEmulatedMouseEvents&&(e.isOverTarget=!0,t(r,"mouse"))}),l.onMouseLeave=(t=>{t.stopPropagation(),e.isPressed&&!e.ignoreEmulatedMouseEvents&&(e.isOverTarget=!1,o(t,"mouse",!1))}),l.onMouseUp=(t=>{e.ignoreEmulatedMouseEvents||0!==t.button||i(t,$f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(t.nativeEvent)?"virtual":"mouse")})
let r=t=>{if(0!==t.button)return
if(e.isPressed=!1,m(document,"mouseup",r,!1),e.ignoreEmulatedMouseEvents)return void(e.ignoreEmulatedMouseEvents=!1)
let n=$f67ef9f1b8ed09b4b00fd0840cd8b94b$export$isVirtualClick(t)?"virtual":"mouse"
$ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(t,e.target)?o($ffc54430b1dbeee65879852feaaff07d$var$createEvent(e.target,t),n):e.isOverTarget&&o($ffc54430b1dbeee65879852feaaff07d$var$createEvent(e.target,t),n,!1),e.isOverTarget=!1}
l.onTouchStart=(r=>{r.stopPropagation()
let o=function $ffc54430b1dbeee65879852feaaff07d$var$getTouchFromEvent(e){const{targetTouches:t}=e
if(t.length>0)return t[0]
return null}(r.nativeEvent)
o&&(e.activePointerId=o.identifier,e.ignoreEmulatedMouseEvents=!0,e.isOverTarget=!0,e.isPressed=!0,e.target=r.currentTarget,f||u||focusWithoutScrolling(r.currentTarget),$e17c9db826984f8ab8e5d837bf0b8$export$disableTextSelection(),t(r,"touch"),p(window,"scroll",n,!0))}),l.onTouchMove=(r=>{if(r.stopPropagation(),!e.isPressed)return
let n=$ffc54430b1dbeee65879852feaaff07d$var$getTouchById(r.nativeEvent,e.activePointerId)
n&&$ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(n,r.currentTarget)?e.isOverTarget||(e.isOverTarget=!0,t(r,"touch")):e.isOverTarget&&(e.isOverTarget=!1,o(r,"touch",!1))}),l.onTouchEnd=(t=>{if(t.stopPropagation(),!e.isPressed)return
let r=$ffc54430b1dbeee65879852feaaff07d$var$getTouchById(t.nativeEvent,e.activePointerId)
r&&$ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(r,t.currentTarget)?(i(t,"touch"),o(t,"touch")):e.isOverTarget&&o(t,"touch",!1),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,e.ignoreEmulatedMouseEvents=!0,$e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection(),m(window,"scroll",n,!0)}),l.onTouchCancel=(t=>{t.stopPropagation(),e.isPressed&&a(t,"touch")})
let n=t=>{e.isPressed&&t.target.contains(e.target)&&a({currentTarget:e.target,shiftKey:!1,ctrlKey:!1,metaKey:!1},"touch")},a=(t,r)=>{e.isOverTarget&&o(t,r,!1),e.isPressed=!1,e.activePointerId=null,e.isOverTarget=!1,$e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection(),window.removeEventListener("scroll",n,!0)}}return l},[f,a,n,c,r,s,p,u,m])
return Object(o.useEffect)(()=>()=>$e17c9db826984f8ab8e5d837bf0b8$export$restoreTextSelection(),[]),{isPressed:i||d,pressProps:mergeProps(l,g)}}function $ffc54430b1dbeee65879852feaaff07d$var$isHTMLAnchorLink(e){return"A"===e.tagName&&e.hasAttribute("href")}function $ffc54430b1dbeee65879852feaaff07d$var$isValidKeyboardEvent(e){const{key:t,target:r}=e,n=r,{tagName:o,isContentEditable:a}=n,c=n.getAttribute("role")
return!("Enter"!==t&&" "!==t&&"Spacebar"!==t||"INPUT"===o||"TEXTAREA"===o||!0===a||$ffc54430b1dbeee65879852feaaff07d$var$isHTMLAnchorLink(n)&&("button"!==c||"Enter"===t)||"link"===c&&"Enter"!==t)}function $ffc54430b1dbeee65879852feaaff07d$var$getTouchById(e,t){const r=e.changedTouches
for(let e=0;e<r.length;e++){const n=r[e]
if(n.identifier===t)return n}return null}function $ffc54430b1dbeee65879852feaaff07d$var$createEvent(e,t){return{currentTarget:e,shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey}}function $ffc54430b1dbeee65879852feaaff07d$var$isOverTarget(e,t){let r=t.getBoundingClientRect()
return(e.clientX||0)>=(r.left||0)&&(e.clientX||0)<=(r.right||0)&&(e.clientY||0)>=(r.top||0)&&(e.clientY||0)<=(r.bottom||0)}v.displayName="PressResponderContext"
a.a.forwardRef((e,t)=>{var r
let{children:n}=e,c=_objectWithoutPropertiesLoose(e,["children"]),s=Object(o.useRef)()
t=null!=(r=t)?r:s
let{pressProps:f}=usePress(_extends({},c,{ref:t})),i=a.a.Children.only(n)
return a.a.cloneElement(i,_extends({ref:t},mergeProps(i.props,f)))}),a.a.forwardRef((e,t)=>{let{children:r}=e,n=_objectWithoutPropertiesLoose(e,["children"]),c=Object(o.useRef)(!1),s=Object(o.useContext)(v),f=mergeProps(s||{},_extends({},n,{ref:t,register(){c.current=!0,s&&s.register()}}))
return Object(o.useEffect)(()=>{c.current},[]),a.a.createElement(v.Provider,{value:f},r)})
let $=null
new Set
function focusSafely(e){if("virtual"===function getInteractionModality(){return $}()){let t=document.activeElement
runAfterTransition(()=>{document.activeElement===t&&document.contains(e)&&focusWithoutScrolling(e)})}else focusWithoutScrolling(e)}const p=a.a.createContext(null)
let m=null,g=new Set
function FocusScope(e){let{children:t,contain:r,restoreFocus:n,autoFocus:c}=e,f=Object(o.useRef)(),i=Object(o.useRef)(),u=Object(o.useRef)([])
s(()=>{let e=f.current.nextSibling,t=[]
for(;e&&e!==i.current;)t.push(e),e=e.nextSibling
return u.current=t,g.add(u),()=>{g.delete(u)}},[t]),function $c9e8f80f5bb1841844f54e4ad30b$var$useFocusContainment(e,t){let r=Object(o.useRef)(),n=Object(o.useRef)(null)
Object(o.useEffect)(()=>{let o=e.current
if(!t)return
let a=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey)return
let t=document.activeElement
if(!$c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(t,o))return
let r=$c9e8f80f5bb1841844f54e4ad30b$var$getFocusableElementsInScope(o,{tabbable:!0}),n=r.indexOf(t),a=r.length-1,c=null
c=e.shiftKey?n<=0?r[a]:r[n-1]:n===a?r[0]:r[n+1],e.preventDefault(),c&&$c9e8f80f5bb1841844f54e4ad30b$var$focusElement(c,!0)},c=t=>{let n=$c9e8f80f5bb1841844f54e4ad30b$var$isElementInAnyScope(t.target,g)
n?(m=e,r.current=t.target):r.current?r.current.focus():m&&$c9e8f80f5bb1841844f54e4ad30b$var$focusFirstInScope(m.current)},s=t=>{n.current=requestAnimationFrame(()=>{let n=$c9e8f80f5bb1841844f54e4ad30b$var$isElementInAnyScope(document.activeElement,g)
n||(m=e,r.current=t.target,r.current.focus())})}
return document.addEventListener("keydown",a,!1),document.addEventListener("focusin",c,!1),o.forEach(e=>e.addEventListener("focusin",c,!1)),o.forEach(e=>e.addEventListener("focusout",s,!1)),()=>{document.removeEventListener("keydown",a,!1),document.removeEventListener("focusin",c,!1),o.forEach(e=>e.removeEventListener("focusin",c,!1)),o.forEach(e=>e.removeEventListener("focusout",s,!1))}},[e,t]),Object(o.useEffect)(()=>()=>cancelAnimationFrame(n.current),[n])}(u,r),function $c9e8f80f5bb1841844f54e4ad30b$var$useRestoreFocus(e,t,r){s(()=>{let n=e.current,o=document.activeElement,a=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey)return
let t=document.activeElement
if(!$c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(t,n))return
let r=function getFocusableTreeWalker(e,t){let r=(null==t?void 0:t.tabbable)?T:y,n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){var n
return(null==t?void 0:null==(n=t.from)?void 0:n.contains(e))?NodeFilter.FILTER_REJECT:e.matches(r)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}},!1);(null==t?void 0:t.from)&&(n.currentNode=t.from)
return n}(document.body,{tabbable:!0})
r.currentNode=t
let a=e.shiftKey?r.previousNode():r.nextNode()
if((!a||!$c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(a,n))&&o){r.currentNode=o
do{a=e.shiftKey?r.previousNode():r.nextNode()}while($c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(a,n))
e.preventDefault(),e.stopPropagation(),a?a.focus():t.blur()}}
return r||document.addEventListener("keydown",a,!0),()=>{r||document.removeEventListener("keydown",a,!0),t&&o&&$c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(document.activeElement,n)&&requestAnimationFrame(()=>{document.body.contains(o)&&$c9e8f80f5bb1841844f54e4ad30b$var$focusElement(o)})}},[e,t,r])}(u,n,r),function $c9e8f80f5bb1841844f54e4ad30b$var$useAutoFocus(e,t){Object(o.useEffect)(()=>{t&&(m=e,$c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(document.activeElement,m.current)||$c9e8f80f5bb1841844f54e4ad30b$var$focusFirstInScope(e.current))},[e,t])}(u,c)
let l=function $c9e8f80f5bb1841844f54e4ad30b$var$createFocusManager(e){return{focusNext(t){void 0===t&&(t={})
let r=t.from||document.activeElement,n=$c9e8f80f5bb1841844f54e4ad30b$var$getFocusableElementsInScope(e.current,t),o=n.find(e=>!!(r.compareDocumentPosition(e)&(Node.DOCUMENT_POSITION_FOLLOWING|Node.DOCUMENT_POSITION_CONTAINED_BY)))
return!o&&t.wrap&&(o=n[0]),o&&o.focus(),o},focusPrevious(t){void 0===t&&(t={})
let r=t.from||document.activeElement,n=$c9e8f80f5bb1841844f54e4ad30b$var$getFocusableElementsInScope(e.current,t).reverse(),o=n.find(e=>!!(r.compareDocumentPosition(e)&(Node.DOCUMENT_POSITION_PRECEDING|Node.DOCUMENT_POSITION_CONTAINED_BY)))
return!o&&t.wrap&&(o=n[0]),o&&o.focus(),o}}}(u)
return a.a.createElement(p.Provider,{value:l},a.a.createElement("span",{hidden:!0,ref:f}),t,a.a.createElement("span",{hidden:!0,ref:i}))}const E=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],y=E.join(",")+",[tabindex]"
E.push('[tabindex]:not([tabindex="-1"])')
const T=E.join(':not([tabindex="-1"]),')
function $c9e8f80f5bb1841844f54e4ad30b$var$getFocusableElementsInScope(e,t){let r=[],n=t.tabbable?T:y
for(let t of e)t.matches(n)&&r.push(t),r.push(...Array.from(t.querySelectorAll(n)))
return r}function $c9e8f80f5bb1841844f54e4ad30b$var$isElementInAnyScope(e,t){for(let r of t.values())if($c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(e,r.current))return!0
return!1}function $c9e8f80f5bb1841844f54e4ad30b$var$isElementInScope(e,t){return t.some(t=>t.contains(e))}function $c9e8f80f5bb1841844f54e4ad30b$var$focusElement(e,t){if(void 0===t&&(t=!1),null==e||t){if(null!=e)try{e.focus()}catch(e){}}else try{focusSafely(e)}catch(e){}}function $c9e8f80f5bb1841844f54e4ad30b$var$focusFirstInScope(e){$c9e8f80f5bb1841844f54e4ad30b$var$focusElement($c9e8f80f5bb1841844f54e4ad30b$var$getFocusableElementsInScope(e,{tabbable:!0})[0])}let h=a.a.createContext(null)
a.a.forwardRef(function $e11539c8317b2d21639df611cb5658f$var$FocusableProvider(e,t){let{children:r}=e,n=_extends({},_objectWithoutPropertiesLoose(e,["children"]),{ref:t})
return a.a.createElement(h.Provider,{value:n},r)})}}])
