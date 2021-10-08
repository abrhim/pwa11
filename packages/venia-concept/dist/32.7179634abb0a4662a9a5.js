/*!
 * @version v11.0.0-beta.1-1-g6fc2154e-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{JDxZ:function(e,t,n){(t=e.exports=n("PBB4")(!1)).push([e.i,".checkbox-root-CLA {\n    --stroke: var(--venia-global-color-gray-600);\n    align-items: center;\n    color: rgb(var(--venia-global-color-gray-900));\n    display: grid;\n    gap: calc(0.875rem - 5px);\n    grid-auto-flow: column;\n    grid-template-areas: 'input label';\n    grid-template-columns: min-content 1fr;\n    justify-items: center;\n    line-height: 1.5rem;\n}\n\n.checkbox-input-2Tv {\n    -webkit-appearance: none;\n    background: none;\n    border: 2px solid transparent;\n    border-radius: 4px;\n    cursor: pointer;\n    grid-area: input;\n    height: 1.5rem;\n    width: 1.5rem;\n}\n\n.checkbox-icon-2Jp {\n    grid-area: input;\n    height: 1.5rem;\n    pointer-events: none;\n    width: 1.5rem;\n}\n\n.checkbox-icon-2Jp svg {\n    stroke: rgb(var(--stroke));\n}\n\n.checkbox-label-3N5 {\n    cursor: pointer;\n    font-size: var(--venia-typography-body-M-fontSize);\n    grid-area: label;\n    justify-self: start;\n}\n\n.checkbox-input-2Tv:disabled {\n    cursor: default;\n}\n\n/* When the input is disabled, update the cursor on the sibling label element. */\n.checkbox-input-2Tv:disabled ~ .checkbox-label-3N5 {\n    cursor: default;\n}\n\n.checkbox-input-2Tv:checked:enabled + .checkbox-icon-2Jp {\n    --stroke: var(--venia-brand-color-1-700);\n}\n\n.checkbox-input-2Tv:active:enabled,\n.checkbox-input-2Tv:focus:enabled {\n    box-shadow: -3px 3px rgb(var(--venia-brand-color-1-100));\n    outline: none;\n}\n",""]),t.locals={root:"checkbox-root-CLA",input:"checkbox-input-2Tv",icon:"checkbox-icon-2Jp",label:"checkbox-label-3N5"}},MR3a:function(e,t,n){"use strict"
var r=n("ERkP"),i=n.n(r),s=n("aWzz"),o=n("UNMe"),a={behavior:"smooth",block:"center"},l=n("YyrX"),c=n("vB0K"),u=n.n(c),m=n("hEgc"),f=n.n(m),p={injectType:"singletonStyleTag",insert:"head",singleton:!0},d=(u()(f.a,p),f.a.locals||{}),v=i.a.forwardRef(function(e,t){var n=e.children,r=Object(l.a)(d,e.classes)
return i.a.createElement("div",{className:r.root,ref:t},i.a.createElement("span",{className:r.errorMessage},n))}),g=v
v.propTypes={classes:Object(s.shape)({root:s.string,errorMessage:s.string}),children:s.node}
var b=n("ivdK"),h=n.n(b),y={injectType:"singletonStyleTag",insert:"head",singleton:!0},E=(u()(h.a,y),h.a.locals||{}),O=function FormError(e){var t=e.classes,n=e.errors,s=e.scrollOnError,c=function useFormError(e){var t=e.errors
return{errorMessage:Object(r.useMemo)(function(){return Object(o.a)(t)},[t])}}({errors:n}).errorMessage,u=Object(r.useRef)(null)
!function useScrollIntoView(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a
Object(r.useEffect)(function(){e.current&&e.current instanceof HTMLElement&&t&&e.current.scrollIntoView(n)},[n,e,t])}(u,s&&c)
var m=Object(l.a)(E,t)
return c?i.a.createElement(g,{classes:m,ref:u},c):null}
t.a=O
O.propTypes={classes:Object(s.shape)({root:s.string,errorMessage:s.string}),errors:Object(s.arrayOf)(Object(s.instanceOf)(Error)),scrollOnError:s.bool},O.defaultProps={scrollOnError:!0}},TuC4:function(e,t,n){"use strict"
var r=n("ERkP"),i=n.n(r),s=n("kQwz"),o=n("aWzz"),a=n("vB0K"),l=n.n(a),c=n("qrDf"),u=n.n(c),m={injectType:"singletonStyleTag",insert:"head",singleton:!0},f=(l()(u.a,m),u.a.locals||{}),p=n("YyrX"),d=function Message(e){var t,n=e.children,r=e.classes,o=e.fieldState,a=Object(s.a)().formatMessage,l=o.error,c=Object(p.a)(f,r),u=l?c.root_error:c.root
return l&&(t=a({id:l.id,defaultMessage:l.defaultMessage},{value:l.value})),i.a.createElement("p",{className:u},t||n)}
t.a=d
d.defaultProps={fieldState:{}},d.propTypes={children:o.node,classes:Object(o.shape)({root:o.string,root_error:o.string}),fieldState:Object(o.shape)({error:Object(o.shape)({id:o.string,defaultMessage:o.string,value:Object(o.oneOfType)([o.number,o.string])})})}},UNMe:function(e,t,n){"use strict"
n.d(t,"a",function(){return i})
var r=function toString(e){var t=e.graphQLErrors,n=e.message
return t&&t.length?t.map(function(e){return e.message}).join(", "):n},i=function deriveErrorMessage(e){var t=[],n=!0,i=!1,s=void 0
try{for(var o,a=e[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var l=o.value
l&&t.push(r(l))}}catch(e){i=!0,s=e}finally{try{n||null==a.return||a.return()}finally{if(i)throw s}}return t.join(", ")}},b55c:function(e,t,n){"use strict"
var r=n("qWom"),i=n.n(r),s=n("3yN8"),o=n.n(s),a=n("ERkP"),l=n.n(a),c=n("aWzz"),u=n("g97/"),m=n("YyrX"),f=n("TuC4"),p=n("74O1"),d=n("JqxX"),v=n("vB0K"),g=n.n(v),b=n("JDxZ"),h=n.n(b),y={injectType:"singletonStyleTag",insert:"head",singleton:!0},E=(g()(h.a,y),h.a.locals||{}),O=l.a.createElement(p.a,null),x=l.a.createElement(d.a,null),j=function Checkbox(e){var t=e.ariaLabel,n=e.classes,r=e.field,s=e.fieldValue,c=e.id,p=e.label,d=e.message,v=o()(e,["ariaLabel","classes","field","fieldValue","id","label","message"]),g=Object(u.j)(r),b=Object(u.k)(r),h=Object(m.a)(E,n),y=b.value?O:x
return Object(a.useEffect)(function(){null!=s&&s!==b.value&&g.setValue(s)},[g,b.value,s]),l.a.createElement(a.Fragment,null,l.a.createElement("label",{"aria-label":t,className:h.root,htmlFor:c},l.a.createElement(u.a,i()({},v,{className:h.input,field:r,id:c})),l.a.createElement("span",{className:h.icon},y),l.a.createElement("span",{className:h.label},p)),l.a.createElement(f.a,{fieldState:b},d))}
t.a=j
j.propTypes={ariaLabel:c.string,classes:Object(c.shape)({icon:c.string,input:c.string,label:c.string,message:c.string,root:c.string}),field:c.string.isRequired,id:c.string,label:c.node.isRequired,message:c.node}},dLb8:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",function(){return z})
var r=n("/4dI"),i=n.n(r),s=n("ERkP"),o=n.n(s),a=n("kQwz"),l=n("6sB8"),c=n("g97/"),u=n("zCf4"),m=n("UW3U"),f=n("VtSi"),p=n.n(f),d=n("rV7w"),v=n.n(d),g=n("x8tt"),b=n("YyrX"),h=n("o353"),y=n("2+9x"),E=n.n(y)
function _templateObject2(){var e=E()(["\n    query GetCustomerSubscription {\n        customer {\n            id\n            is_subscribed\n        }\n    }\n"])
return _templateObject2=function _templateObject2(){return e},e}function _templateObject(){var e=E()(["\n    mutation SetNewsletterSubscription($isSubscribed: Boolean!) {\n        updateCustomer(input: { is_subscribed: $isSubscribed }) {\n            customer {\n                id\n                is_subscribed\n            }\n        }\n    }\n"])
return _templateObject=function _templateObject(){return e},e}var O=Object(g.gql)(_templateObject()),x={getCustomerSubscriptionQuery:Object(g.gql)(_templateObject2()),setNewsletterSubscriptionMutation:O},j=n("loE8"),_=n("b55c"),w=n("v8zp"),L=n("MR3a"),k=n("lYeQ"),M=n("mHFa"),S=n("vB0K"),T=n.n(S),C=n("s7xZ"),P=n.n(C),N={injectType:"singletonStyleTag",insert:"head",singleton:!0},R=(T()(P.a,N),P.a.locals||{}),z=function CommunicationsPage(e){var t=Object(a.a)().formatMessage,n=Object(b.a)(R,e.classes),r=Object(m.a)(),f=i()(r,2)[1].addToast,d=function useCommunicationsPage(e){var t,n=e.afterSubmit,r=Object(b.a)(x,e.operations),o=r.getCustomerSubscriptionQuery,a=r.setNewsletterSubscriptionMutation,l=Object(h.b)(),c=i()(l,1)[0].isSignedIn,u=Object(g.useQuery)(o,{skip:!c}),m=u.data,f=u.error,d=Object(s.useMemo)(function(){if(m)return{isSubscribed:m.customer.is_subscribed}},[m]),y=Object(g.useMutation)(a),E=i()(y,2),O=E[0],j=E[1],_=j.error,w=j.loading
return{formErrors:[_,f],initialValues:d,handleSubmit:Object(s.useCallback)((t=v()(p.a.mark(function _callee(e){return p.a.wrap(function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O({variables:e})
case 3:t.next=8
break
case 5:return t.prev=5,t.t0=t.catch(0),t.abrupt("return")
case 8:n&&n()
case 9:case"end":return t.stop()}},_callee,null,[[0,5]])})),function(e){return t.apply(this,arguments)}),[O,n]),isDisabled:w,isSignedIn:c}}({afterSubmit:Object(s.useCallback)(function(){f({type:"info",message:t({id:"communicationsPage.preferencesText",defaultMessage:"Your preferences have been updated."}),timeout:5e3})},[f,t])}),y=d.formErrors,E=d.handleSubmit,O=d.initialValues,S=d.isDisabled
if(!d.isSignedIn)return o.a.createElement(u.a,{to:"/"})
if(!O)return M.a
var T=t({id:"communicationsPage.title",defaultMessage:"Communications"})
return o.a.createElement("div",{className:n.root},o.a.createElement(k.b,null,T),o.a.createElement("h1",{className:n.title},o.a.createElement(l.a,{id:"communicationsPage.communicationsText",defaultMessage:"Communications"})),o.a.createElement("p",null,o.a.createElement(l.a,{id:"communicationsPage.optInText",defaultMessage:"We'd like to stay in touch. Please check the boxes next to the communications you'd like to receive."})),o.a.createElement(L.a,{errors:y}),o.a.createElement(c.b,{className:n.form,onSubmit:E,initialValues:O},o.a.createElement(w.a,{id:"isSubscribed",label:t({id:"communicationsPage.eNewsletterText",defaultMessage:"Venia E-Newsletter"})},o.a.createElement(_.a,{field:"isSubscribed",label:t({id:"communicationsPage.subscribeText",defaultMessage:"Stay on the cutting edge of fashion; subscribe to the monthly Venia Newsletter."})})),o.a.createElement("div",{className:n.buttonsContainer},o.a.createElement(j.a,{disabled:S,type:"submit",priority:"high"},t(S?{id:"communicationsPage.savingText",defaultMessage:"Saving"}:{id:"communicationsPage.changesText",defaultMessage:"Save Changes"})))))}},hEgc:function(e,t,n){(t=e.exports=n("PBB4")(!1)).push([e.i,".errorMessage-root-27d {\n}\n\n.errorMessage-errorMessage-1nk {\n    color: rgb(var(--venia-global-color-error));\n    font-size: var(--venia-typography-body-S-fontSize);\n    font-weight: var(--venia-global-fontWeight-semibold);\n    line-height: var(--venia-global-lineHeight-300);\n}\n",""]),t.locals={root:"errorMessage-root-27d",errorMessage:"errorMessage-errorMessage-1nk"}},ivdK:function(e,t,n){(e.exports=n("PBB4")(!1)).push([e.i,"",""])},qrDf:function(e,t,n){(t=e.exports=n("PBB4")(!1)).push([e.i,".message-root-2kZ {\n    color: rgb(var(--venia-global-color-text));\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1rem;\n    padding: 0.625rem 0.125rem 0.125rem;\n}\n\n.message-root-2kZ:empty {\n    display: none;\n}\n\n.message-root_error-3Tf {\n    color: rgb(var(--venia-global-color-error));\n    font-weight: var(--venia-global-fontWeight-semibold);\n}\n",""]),t.locals={root:"message-root-2kZ",root_error:"message-root_error-3Tf message-root-2kZ"}},r2q8:function(e,t,n){"use strict"
var r,i="object"==typeof Reflect?Reflect:null,s=i&&"function"==typeof i.apply?i.apply:function ReflectApply(e,t,n){return Function.prototype.apply.call(e,t,n)}
r=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function ReflectOwnKeys(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function ReflectOwnKeys(e){return Object.getOwnPropertyNames(e)}
var o=Number.isNaN||function NumberIsNaN(e){return e!=e}
function EventEmitter(){EventEmitter.init.call(this)}e.exports=EventEmitter,EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._eventsCount=0,EventEmitter.prototype._maxListeners=void 0
var a=10
function checkListener(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function _getMaxListeners(e){return void 0===e._maxListeners?EventEmitter.defaultMaxListeners:e._maxListeners}function _addListener(e,t,n,r){var i,s,o
if(checkListener(n),void 0===(s=e._events)?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),o=s[t]),void 0===o)o=s[t]=n,++e._eventsCount
else if("function"==typeof o?o=s[t]=r?[n,o]:[o,n]:r?o.unshift(n):o.push(n),(i=_getMaxListeners(e))>0&&o.length>i&&!o.warned){o.warned=!0
var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit")
a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=o.length,function ProcessEmitWarning(e){console&&console.warn}()}return e}function _onceWrap(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=function onceWrapper(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}.bind(r)
return i.listener=n,r.wrapFn=i,i}function _listeners(e,t,n){var r=e._events
if(void 0===r)return[]
var i=r[t]
return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function unwrapListeners(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n]
return t}(i):arrayClone(i,i.length)}function listenerCount(e){var t=this._events
if(void 0!==t){var n=t[e]
if("function"==typeof n)return 1
if(void 0!==n)return n.length}return 0}function arrayClone(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r]
return n}Object.defineProperty(EventEmitter,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".")
a=e}}),EventEmitter.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},EventEmitter.prototype.setMaxListeners=function setMaxListeners(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".")
return this._maxListeners=e,this},EventEmitter.prototype.getMaxListeners=function getMaxListeners(){return _getMaxListeners(this)},EventEmitter.prototype.emit=function emit(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n])
var r="error"===e,i=this._events
if(void 0!==i)r=r&&void 0===i.error
else if(!r)return!1
if(r){var o
if(t.length>0&&(o=t[0]),o instanceof Error)throw o
var a=new Error("Unhandled error."+(o?" ("+o.message+")":""))
throw a.context=o,a}var l=i[e]
if(void 0===l)return!1
if("function"==typeof l)s(l,this,t)
else{var c=l.length,u=arrayClone(l,c)
for(n=0;n<c;++n)s(u[n],this,t)}return!0},EventEmitter.prototype.addListener=function addListener(e,t){return _addListener(this,e,t,!1)},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.prependListener=function prependListener(e,t){return _addListener(this,e,t,!0)},EventEmitter.prototype.once=function once(e,t){return checkListener(t),this.on(e,_onceWrap(this,e,t)),this},EventEmitter.prototype.prependOnceListener=function prependOnceListener(e,t){return checkListener(t),this.prependListener(e,_onceWrap(this,e,t)),this},EventEmitter.prototype.removeListener=function removeListener(e,t){var n,r,i,s,o
if(checkListener(t),void 0===(r=this._events))return this
if(void 0===(n=r[e]))return this
if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t))
else if("function"!=typeof n){for(i=-1,s=n.length-1;s>=0;s--)if(n[s]===t||n[s].listener===t){o=n[s].listener,i=s
break}if(i<0)return this
0===i?n.shift():function spliceOne(e,t){for(;t+1<e.length;t++)e[t]=e[t+1]
e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,o||t)}return this},EventEmitter.prototype.off=EventEmitter.prototype.removeListener,EventEmitter.prototype.removeAllListeners=function removeAllListeners(e){var t,n,r
if(void 0===(n=this._events))return this
if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this
if(0===arguments.length){var i,s=Object.keys(n)
for(r=0;r<s.length;++r)"removeListener"!==(i=s[r])&&this.removeAllListeners(i)
return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t)
else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r])
return this},EventEmitter.prototype.listeners=function listeners(e){return _listeners(this,e,!0)},EventEmitter.prototype.rawListeners=function rawListeners(e){return _listeners(this,e,!1)},EventEmitter.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):listenerCount.call(e,t)},EventEmitter.prototype.listenerCount=listenerCount,EventEmitter.prototype.eventNames=function eventNames(){return this._eventsCount>0?r(this._events):[]}},s7xZ:function(e,t,n){(t=e.exports=n("PBB4")(!1)).push([e.i,".communicationsPage-root-3s7 {\n    display: grid;\n    padding: 2.5rem 3rem;\n    row-gap: 2rem;\n}\n\n.communicationsPage-title-3DO {\n    justify-self: center;\n    font-family: var(--venia-global-fontFamily-serif);\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n.communicationsPage-form-adO {\n    display: grid;\n    row-gap: 2rem;\n}\n\n.communicationsPage-buttonsContainer-3tk {\n    display: flex;\n    justify-content: flex-start;\n}\n\n@media (max-width: 960px) {\n    .communicationsPage-root-3s7 {\n        padding-left: 1.5rem;\n        padding-right: 1.5rem;\n    }\n\n    .communicationsPage-buttonsContainer-3tk {\n        justify-content: center;\n    }\n}\n",""]),t.locals={root:"communicationsPage-root-3s7",title:"communicationsPage-title-3DO",form:"communicationsPage-form-adO",buttonsContainer:"communicationsPage-buttonsContainer-3tk"}},v8zp:function(e,t,n){"use strict"
var r=n("ERkP"),i=n.n(r),s=n("6sB8"),o=n("aWzz"),a=n("YyrX"),l=n("vB0K"),c=n.n(l),u=n("zOXy"),m=n.n(u),f={injectType:"singletonStyleTag",insert:"head",singleton:!0},p=(c()(m.a,f),m.a.locals||{}),d=function Field(e){var t=e.children,n=e.id,r=e.label,o=e.optional,l=Object(a.a)(p,e.classes),c=o?i.a.createElement("span",{className:l.optional},i.a.createElement(s.a,{id:"field.optional",defaultMessage:"Optional"})):null
return i.a.createElement("div",{className:l.root},i.a.createElement("label",{className:l.label,htmlFor:n},r,c),t)}
d.propTypes={children:o.node,classes:Object(o.shape)({label:o.string,root:o.string}),id:o.string,label:o.node,optional:o.bool}
t.a=d}}])
