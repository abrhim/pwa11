/*!
 * @version v11.0.0-beta.1-1-g6fc2154e-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"2gp+":function(e,t,n){"use strict"
var r=n("qWom"),o=n.n(r),s=n("3yN8"),i=n.n(s),a=n("ERkP"),l=n.n(a),d=n("aWzz"),c=n("3at2"),u=n("UIyt"),m=n("YyrX"),p=n("/4dI"),f=n.n(p),v=n("loE8"),h=n("v8zp"),g=n("sAzd"),w=n("QQG3"),y=n("vB0K"),b=n.n(y),E=n("n7cc"),L=n.n(E),P={injectType:"singletonStyleTag",insert:"head",singleton:!0},C=(b()(L.a,P),L.a.locals||{}),_=function Password(e){var t=e.classes,n=e.label,r=e.fieldName,s=e.isToggleButtonHidden,d=e.autoComplete,p=e.validate,w=i()(e,["classes","label","fieldName","isToggleButtonHidden","autoComplete","validate"]),y=function usePassword(){var e=Object(a.useState)(!1),t=f()(e,2),n=t[0],r=t[1],o=Object(a.useCallback)(function(){r(!n)},[n])
return{handleBlur:Object(a.useCallback)(function(){r(!1)},[]),togglePasswordVisibility:o,visible:n}}(),b=y.handleBlur,E=y.togglePasswordVisibility,L=y.visible,P=Object(m.a)(C,t),_=l.a.createElement(v.a,{className:P.passwordButton,onClick:E,type:"button"},L?l.a.createElement(c.a,null):l.a.createElement(u.a,null)),B=L?"text":"password"
return l.a.createElement(h.a,{label:n,classes:{root:P.root}},l.a.createElement(g.a,o()({after:!s&&_,autoComplete:d,field:r,type:B,validate:p,onBlur:b},w)))}
_.propTypes={autoComplete:d.string,classes:Object(d.shape)({root:d.string}),label:d.string,fieldName:d.string,isToggleButtonHidden:d.bool,validate:d.func},_.defaultProps={isToggleButtonHidden:!0,validate:w.c}
t.a=_},"2w1l":function(e,t,n){(t=e.exports=n("PBB4")(!1)).push([e.i,".editForm-root-1w7 {\n    display: grid;\n    gap: 0.5rem 1.5rem;\n    grid-template-columns: 1fr 1fr;\n    width: 100%;\n}\n\n.editForm-field-2jB {\n    grid-column-end: span 2;\n}\n\n.editForm-email-H7G,\n.editForm-passwordLabel-1D2 {\n}\n\n.editForm-buttons-t_y {\n    display: grid;\n    gap: 1rem;\n    grid-auto-flow: column;\n    justify-self: center;\n    padding: 1rem;\n}\n\n.editForm-changePasswordButtonContainer-1JL {\n    padding-top: 1rem;\n}\n\n@media (max-width: 960px) {\n    .editForm-firstname-IFv,\n    .editForm-lastname-393,\n    .editForm-password-1Pr,\n    .editForm-newPassword-z5i {\n        grid-column: 1 / span 2;\n    }\n}\n",""]),t.locals={root:"editForm-root-1w7",field:"editForm-field-2jB",email:"editForm-email-H7G editForm-field-2jB",passwordLabel:"editForm-passwordLabel-1D2 editForm-field-2jB",buttons:"editForm-buttons-t_y editForm-field-2jB",changePasswordButtonContainer:"editForm-changePasswordButtonContainer-1JL",firstname:"editForm-firstname-IFv",lastname:"editForm-lastname-393",password:"editForm-password-1Pr",newPassword:"editForm-newPassword-z5i"}},"6ctP":function(e,t,n){"use strict"
var r=n("/4dI"),o=n.n(r)
t.a=function(e){if(null==e||!Array.isArray(e))throw new Error("Expected `callbacks` to be array.")
return function(t,n){for(var r=null,s=0;s<e.length;s++){var i=e[s]
if(null==i||!Array.isArray(i)&&"function"!=typeof i)throw new Error("Expected `callbacks["+s+"]` to be array or function.")
if(Array.isArray(i)){var a=o()(i,2),l=a[0],d=a[1]
if("function"!=typeof l)throw new Error("Expected `callbacks["+s+"][0]` to be function.")
r=l(t,n,d)}else r=i(t,n)
if(r)break}return r}}},DPQo:function(e,t,n){(t=e.exports=n("PBB4")(!1)).i(n("qMSg"),""),t.push([e.i,".linkButton-root-1P5 {\n    color: rgb(var(--venia-brand-color-1-700));\n    font-size: var(--venia-global-fontSize-200);\n    font-weight: var(--venia-global-fontWeight-semibold);\n    text-decoration: underline;\n    line-height: 1.25rem;\n    max-width: 100%;\n}\n\n.linkButton-root-1P5:hover {\n    color: rgb(var(--venia-global-color-gray-900));\n}\n",""]),t.locals={root:"linkButton-root-1P5 "+n("qMSg").locals.root}},VxGk:function(e,t,n){"use strict"
n.r(t)
var r=n("ERkP"),o=n.n(r),s=n("kQwz"),i=n("aWzz"),a=n("YyrX"),l=n("6sB8"),d=n("v8zp"),c=n("h8Zp"),u=n("2gp+"),m=n("sAzd"),p=n("QQG3"),f=n("6ctP"),v=n("vB0K"),h=n.n(v),g=n("2w1l"),w=n.n(g),y={injectType:"singletonStyleTag",insert:"head",singleton:!0},b=(h()(w.a,y),w.a.locals||{}),E=function EditForm(e){var t=e.classes,n=e.handleChangePassword,i=e.shouldShowNewPassword,v=Object(s.a)().formatMessage,h=Object(a.a)(b,t),g=i?o.a.createElement("div",{className:h.newPassword},o.a.createElement(u.a,{fieldName:"newPassword",label:v({id:"global.newPassword",defaultMessage:"New Password"}),validate:Object(f.a)([p.c,[p.a,8],p.d,[p.b,"password"]]),isToggleButtonHidden:!1})):null,w=i?null:o.a.createElement("div",{className:h.changePasswordButtonContainer},o.a.createElement(c.a,{classes:h.changePasswordButton,type:"button",onClick:n},o.a.createElement(l.a,{id:"global.changePassword",defaultMessage:"Change Password"}))),y=v(i?{id:"global.currentPassword",defaultMessage:"Current Password"}:{id:"global.password",defaultMessage:"Password"})
return o.a.createElement(r.Fragment,null,o.a.createElement("div",{className:h.root},o.a.createElement("div",{className:h.firstname},o.a.createElement(d.a,{id:"firstname",label:v({id:"global.firstName",defaultMessage:"First Name"})},o.a.createElement(m.a,{field:"firstname",validate:p.c}))),o.a.createElement("div",{className:h.lastname},o.a.createElement(d.a,{id:"lastname",label:v({id:"global.lastName",defaultMessage:"Last Name"})},o.a.createElement(m.a,{field:"lastname",validate:p.c}))),o.a.createElement("div",{className:h.email},o.a.createElement(d.a,{id:"email",label:v({id:"global.email",defaultMessage:"Email"})},o.a.createElement(m.a,{field:"email",validate:p.c}))),o.a.createElement("div",{className:h.password},o.a.createElement(u.a,{fieldName:"password",label:y,validate:p.c,autoComplete:"current-password",isToggleButtonHidden:!1})),g),w)},L=E
E.propTypes={classes:Object(i.shape)({changePasswordButton:i.string,changePasswordButtonContainer:i.string,root:i.string,field:i.string,email:i.string,firstname:i.string,lastname:i.string,buttons:i.string,passwordLabel:i.string,password:i.string,newPassword:i.string})}
var P=n("MR3a"),C=n("orPU"),_=n("lHHQ"),B=n.n(_),O={injectType:"singletonStyleTag",insert:"head",singleton:!0},j=(h()(B.a,O),B.a.locals||{}),x=function EditModal(e){var t=e.classes,n=e.formErrors,r=e.onCancel,i=e.onChangePassword,l=e.onSubmit,d=e.initialValues,c=e.isDisabled,u=e.isOpen,m=e.shouldShowNewPassword,p=Object(s.a)().formatMessage,f=Object(a.a)(j,t),v={initialValues:d}
return o.a.createElement(C.a,{classes:{body:f.bodyEditAccountInformation},confirmText:"Save",formProps:v,isOpen:u,onCancel:r,onConfirm:l,shouldDisableAllButtons:c,shouldDisableConfirmButton:c,shouldUnmountOnHide:!0,title:p({id:"accountInformationPage.editAccount",defaultMessage:"Edit Account Information"})},o.a.createElement(P.a,{classes:{root:f.errorContainer},errors:n}),o.a.createElement(L,{handleChangePassword:i,shouldShowNewPassword:m}))}
t.default=x
x.propTypes={classes:Object(i.shape)({errorContainer:i.string}),formErrors:i.array,handleCancel:i.func,handleSubmit:i.func,initialValues:i.object,isDisabled:i.bool,isOpen:i.bool}},h8Zp:function(e,t,n){"use strict"
var r=n("qWom"),o=n.n(r),s=n("3yN8"),i=n.n(s),a=n("ERkP"),l=n.n(a),d=n("aWzz"),c=n("YyrX"),u=n("vB0K"),m=n.n(u),p=n("DPQo"),f=n.n(p),v={injectType:"singletonStyleTag",insert:"head",singleton:!0},h=(m()(f.a,v),f.a.locals||{}),g=n("loE8"),w=function LinkButton(e){var t=e.children,n=e.classes,r=e.type,s=i()(e,["children","classes","type"]),a=Object(c.a)(h,n)
return l.a.createElement(g.a,o()({priority:"normal",classes:{root_normalPriority:a.root},type:r},s),t)}
w.propTypes={classes:Object(d.shape)({root:d.string}),type:Object(d.oneOf)(["button","reset","submit"]).isRequired},w.defaultProps={type:"button"}
t.a=w},lHHQ:function(e,t,n){(t=e.exports=n("PBB4")(!1)).push([e.i,".editModal-errorContainer-3ls {\n    padding-bottom: 1rem;\n}\n",""]),t.locals={errorContainer:"editModal-errorContainer-3ls"}},n7cc:function(e,t,n){(t=e.exports=n("PBB4")(!1)).i(n("uuLD"),""),t.push([e.i,".password-passwordButton-3Kf {\n\n    --stroke: var(--venia-global-color-gray-500);\n    background: none;\n    border-radius: 0px;\n    border-style: none;\n    border-width: 0px;\n    padding: 0px;\n    min-width: 0px;\n}\n\n.password-passwordButton-3Kf:hover {\n    --stroke: var(--venia-global-color-gray-700);\n}\n\n.password-passwordButton-3Kf:focus {\n    box-shadow: none;\n    --stroke: var(--venia-global-color-gray-700);\n}\n\n.password-root-1o0:active {\n    --stroke: var(--venia-global-color-gray-700);\n}\n",""]),t.locals={passwordButton:"password-passwordButton-3Kf "+n("uuLD").locals.root,root:"password-root-1o0"}},r2q8:function(e,t,n){"use strict"
var r,o="object"==typeof Reflect?Reflect:null,s=o&&"function"==typeof o.apply?o.apply:function ReflectApply(e,t,n){return Function.prototype.apply.call(e,t,n)}
r=o&&"function"==typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function ReflectOwnKeys(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function ReflectOwnKeys(e){return Object.getOwnPropertyNames(e)}
var i=Number.isNaN||function NumberIsNaN(e){return e!=e}
function EventEmitter(){EventEmitter.init.call(this)}e.exports=EventEmitter,EventEmitter.EventEmitter=EventEmitter,EventEmitter.prototype._events=void 0,EventEmitter.prototype._eventsCount=0,EventEmitter.prototype._maxListeners=void 0
var a=10
function checkListener(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function _getMaxListeners(e){return void 0===e._maxListeners?EventEmitter.defaultMaxListeners:e._maxListeners}function _addListener(e,t,n,r){var o,s,i
if(checkListener(n),void 0===(s=e._events)?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),i=s[t]),void 0===i)i=s[t]=n,++e._eventsCount
else if("function"==typeof i?i=s[t]=r?[n,i]:[i,n]:r?i.unshift(n):i.push(n),(o=_getMaxListeners(e))>0&&i.length>o&&!i.warned){i.warned=!0
var a=new Error("Possible EventEmitter memory leak detected. "+i.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit")
a.name="MaxListenersExceededWarning",a.emitter=e,a.type=t,a.count=i.length,function ProcessEmitWarning(e){console&&console.warn}()}return e}function _onceWrap(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=function onceWrapper(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}.bind(r)
return o.listener=n,r.wrapFn=o,o}function _listeners(e,t,n){var r=e._events
if(void 0===r)return[]
var o=r[t]
return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function unwrapListeners(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n]
return t}(o):arrayClone(o,o.length)}function listenerCount(e){var t=this._events
if(void 0!==t){var n=t[e]
if("function"==typeof n)return 1
if(void 0!==n)return n.length}return 0}function arrayClone(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r]
return n}Object.defineProperty(EventEmitter,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".")
a=e}}),EventEmitter.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},EventEmitter.prototype.setMaxListeners=function setMaxListeners(e){if("number"!=typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".")
return this._maxListeners=e,this},EventEmitter.prototype.getMaxListeners=function getMaxListeners(){return _getMaxListeners(this)},EventEmitter.prototype.emit=function emit(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n])
var r="error"===e,o=this._events
if(void 0!==o)r=r&&void 0===o.error
else if(!r)return!1
if(r){var i
if(t.length>0&&(i=t[0]),i instanceof Error)throw i
var a=new Error("Unhandled error."+(i?" ("+i.message+")":""))
throw a.context=i,a}var l=o[e]
if(void 0===l)return!1
if("function"==typeof l)s(l,this,t)
else{var d=l.length,c=arrayClone(l,d)
for(n=0;n<d;++n)s(c[n],this,t)}return!0},EventEmitter.prototype.addListener=function addListener(e,t){return _addListener(this,e,t,!1)},EventEmitter.prototype.on=EventEmitter.prototype.addListener,EventEmitter.prototype.prependListener=function prependListener(e,t){return _addListener(this,e,t,!0)},EventEmitter.prototype.once=function once(e,t){return checkListener(t),this.on(e,_onceWrap(this,e,t)),this},EventEmitter.prototype.prependOnceListener=function prependOnceListener(e,t){return checkListener(t),this.prependListener(e,_onceWrap(this,e,t)),this},EventEmitter.prototype.removeListener=function removeListener(e,t){var n,r,o,s,i
if(checkListener(t),void 0===(r=this._events))return this
if(void 0===(n=r[e]))return this
if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t))
else if("function"!=typeof n){for(o=-1,s=n.length-1;s>=0;s--)if(n[s]===t||n[s].listener===t){i=n[s].listener,o=s
break}if(o<0)return this
0===o?n.shift():function spliceOne(e,t){for(;t+1<e.length;t++)e[t]=e[t+1]
e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,i||t)}return this},EventEmitter.prototype.off=EventEmitter.prototype.removeListener,EventEmitter.prototype.removeAllListeners=function removeAllListeners(e){var t,n,r
if(void 0===(n=this._events))return this
if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this
if(0===arguments.length){var o,s=Object.keys(n)
for(r=0;r<s.length;++r)"removeListener"!==(o=s[r])&&this.removeAllListeners(o)
return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t)
else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r])
return this},EventEmitter.prototype.listeners=function listeners(e){return _listeners(this,e,!0)},EventEmitter.prototype.rawListeners=function rawListeners(e){return _listeners(this,e,!1)},EventEmitter.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):listenerCount.call(e,t)},EventEmitter.prototype.listenerCount=listenerCount,EventEmitter.prototype.eventNames=function eventNames(){return this._eventsCount>0?r(this._events):[]}}}])
