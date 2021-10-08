/*!
 * @version v11.0.0-beta.1-1-g6fc2154e-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{K95O:function(e,n,a){(n=e.exports=a("PBB4")(!1)).i(a("uuLD"),""),n.push([e.i,".accountInformationPage-root-2kf {\n    display: grid;\n    padding: 2.5rem 3rem;\n    row-gap: 2rem;\n}\n\n.accountInformationPage-title-2FB {\n    justify-self: center;\n    font-family: var(--venia-global-fontFamily-serif);\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n.accountInformationPage-accountDetails-uh6 {\n    display: grid;\n    row-gap: 2rem;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n\n.accountInformationPage-lineItemsContainer-1AS {\n    grid-column: 1 / span 1;\n    display: grid;\n    gap: 1rem;\n    grid-template-columns: 1fr 1fr;\n    line-height: 1.5rem;\n}\n\n.accountInformationPage-lineItemLabel-1wr {\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n.accountInformationPage-nameLabel-OKK,\n.accountInformationPage-emailLabel-3UE,\n.accountInformationPage-passwordLabel-ORQ {\n}\n\n.accountInformationPage-nameValue-1v7,\n.accountInformationPage-emailValue-1uW,\n.accountInformationPage-passwordValue-hU6 {\n}\n\n.accountInformationPage-editButtonContainer-dDr {\n    grid-column: 1 / span 1;\n    text-align: center;\n}\n\n.accountInformationPage-editInformationButton-uay {\n}\n\n@media (min-width: 961px) {\n    .accountInformationPage-nameLabel-OKK,\n    .accountInformationPage-emailLabel-3UE,\n    .accountInformationPage-passwordLabel-ORQ {\n    }\n}\n\n@media (max-width: 960px) {\n    .accountInformationPage-accountDetails-uh6 {\n        grid-template-columns: 1fr;\n    }\n\n    .accountInformationPage-lineItemsContainer-1AS {\n        grid-template-columns: 1fr;\n        grid-gap: 0.75rem;\n    }\n}\n",""]),n.locals={root:"accountInformationPage-root-2kf",title:"accountInformationPage-title-2FB",accountDetails:"accountInformationPage-accountDetails-uh6",lineItemsContainer:"accountInformationPage-lineItemsContainer-1AS",lineItemLabel:"accountInformationPage-lineItemLabel-1wr",nameLabel:"accountInformationPage-nameLabel-OKK accountInformationPage-lineItemLabel-1wr accountInformationPage-lineItemLabel-1wr",emailLabel:"accountInformationPage-emailLabel-3UE accountInformationPage-lineItemLabel-1wr accountInformationPage-lineItemLabel-1wr",passwordLabel:"accountInformationPage-passwordLabel-ORQ accountInformationPage-lineItemLabel-1wr accountInformationPage-lineItemLabel-1wr",nameValue:"accountInformationPage-nameValue-1v7",emailValue:"accountInformationPage-emailValue-1uW",passwordValue:"accountInformationPage-passwordValue-hU6",editButtonContainer:"accountInformationPage-editButtonContainer-dDr",editInformationButton:"accountInformationPage-editInformationButton-uay "+a("uuLD").locals.root_normalPriority}},TuC4:function(e,n,a){"use strict"
var t=a("ERkP"),o=a.n(t),r=a("kQwz"),i=a("aWzz"),c=a("vB0K"),s=a.n(c),l=a("qrDf"),m=a.n(l),u={injectType:"singletonStyleTag",insert:"head",singleton:!0},f=(s()(m.a,u),m.a.locals||{}),g=a("YyrX"),d=function Message(e){var n,a=e.children,t=e.classes,i=e.fieldState,c=Object(r.a)().formatMessage,s=i.error,l=Object(g.a)(f,t),m=s?l.root_error:l.root
return s&&(n=c({id:s.id,defaultMessage:s.defaultMessage},{value:s.value})),o.a.createElement("p",{className:m},n||a)}
n.a=d
d.defaultProps={fieldState:{}},d.propTypes={children:i.node,classes:Object(i.shape)({root:i.string,root_error:i.string}),fieldState:Object(i.shape)({error:Object(i.shape)({id:i.string,defaultMessage:i.string,value:Object(i.oneOfType)([i.number,i.string])})})}},dVp0:function(e,n,a){"use strict"
a.r(n),a.d(n,"default",function(){return B})
var t=a("9nKk"),o=a.n(t),r=a("ERkP"),i=a.n(r),c=a("kQwz"),s=a("6sB8"),l=a("zCf4"),m=a("VtSi"),u=a.n(m),f=a("rV7w"),g=a.n(f),d=a("/4dI"),b=a.n(d),p=a("x8tt"),P=a("o353"),w=a("YyrX"),I=a("loE8"),O=a("TuC4"),h=a("lYeQ"),j=a("mHFa"),v=a("vB0K"),y=a.n(v),E=a("K95O"),C=a.n(E),k={injectType:"singletonStyleTag",insert:"head",singleton:!0},S=(y()(C.a,k),C.a.locals||{}),_=a("2+9x"),L=a.n(_)
function _templateObject(){var e=L()(["\n    fragment AccountInformationPageFragment on Customer {\n        id\n        firstname\n        lastname\n        email\n    }\n"])
return _templateObject=function _templateObject(){return e},e}var M=Object(p.gql)(_templateObject())
function _templateObject3(){var e=L()(["\n    query GetCustomerInformation {\n        customer {\n            id\n            ...AccountInformationPageFragment\n        }\n    }\n    ","\n"])
return _templateObject3=function _templateObject3(){return e},e}function _templateObject2(){var e=L()(['\n    mutation ChangeCustomerPassword(\n        $currentPassword: String!\n        $newPassword: String!\n    ) {\n        changeCustomerPassword(\n            currentPassword: $currentPassword\n            newPassword: $newPassword\n        ) @connection(key: "changeCustomerPassword") {\n            id\n            email\n        }\n    }\n'])
return _templateObject2=function _templateObject2(){return e},e}function accountInformationPage_gql_templateObject(){var e=L()(['\n    mutation SetCustomerInformation($customerInput: CustomerInput!) {\n        updateCustomer(input: $customerInput)\n            @connection(key: "updateCustomer") {\n            customer {\n                id\n                ...AccountInformationPageFragment\n            }\n        }\n    }\n    ',"\n"])
return accountInformationPage_gql_templateObject=function _templateObject(){return e},e}var D={mutations:{setCustomerInformationMutation:Object(p.gql)(accountInformationPage_gql_templateObject(),M),changeCustomerPasswordMutation:Object(p.gql)(_templateObject2())},queries:{getCustomerInformationQuery:Object(p.gql)(_templateObject3(),M)}}
function ownKeys(e,n){var a=Object.keys(e)
if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e)
n&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,t)}return a}var V=i.a.lazy(function(){return Promise.all([a.e(0),a.e(1),a.e(36)]).then(a.bind(null,"VxGk"))}),B=function AccountInformationPage(e){var n=Object(w.a)(S,e.classes),a=function useAccountInformationPage(e){var n,a=e.mutations,t=a.setCustomerInformationMutation,o=a.changeCustomerPasswordMutation,i=e.queries.getCustomerInformationQuery,c=Object(P.b)(),s=b()(c,1)[0].isSignedIn,l=Object(r.useState)(!1),m=b()(l,2),f=m[0],d=m[1],w=Object(r.useState)(!1),I=b()(w,2),O=I[0],h=I[1],j=Object(r.useState)(!1),v=b()(j,2),y=v[0],E=v[1],C=Object(p.useQuery)(i,{skip:!s,fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),k=C.data,S=C.error,_=Object(p.useMutation)(t),L=b()(_,2),M=L[0],D=L[1],V=D.error,B=D.loading,x=Object(p.useMutation)(o),N=b()(x,2),K=N[0],q=N[1],A=q.error,T=q.loading,F=Object(r.useMemo)(function(){if(k)return{customer:k.customer}},[k]),Q=Object(r.useCallback)(function(){d(!0)},[d]),U=Object(r.useCallback)(function(){h(!1),d(!1)},[h]),z=Object(r.useCallback)(function(){h(!0),E(!1)},[h]),$=Object(r.useCallback)((n=g()(u.a.mark(function _callee(e){var n,a,t,o,r
return u.a.wrap(function _callee$(i){for(;;)switch(i.prev=i.next){case 0:if(n=e.email,a=e.firstname,t=e.lastname,o=e.password,r=e.newPassword,i.prev=1,n=n.trim(),a=a.trim(),t=t.trim(),o=o.trim(),r=r?r.trim():r,F.customer.email===n&&F.customer.firstname===a&&F.customer.lastname===t){i.next=10
break}return i.next=10,M({variables:{customerInput:{email:n,firstname:a,lastname:t,password:o}}})
case 10:if(!o||!r){i.next=13
break}return i.next=13,K({variables:{currentPassword:o,newPassword:r}})
case 13:U(!1),i.next=20
break
case 16:return i.prev=16,i.t0=i.catch(1),E(!0),i.abrupt("return")
case 20:case"end":return i.stop()}},_callee,null,[[1,16]])})),function(e){return n.apply(this,arguments)}),[M,U,K,F])
return{handleCancel:U,formErrors:y?[V,A]:[],handleSubmit:$,handleChangePassword:Q,initialValues:F,isDisabled:B||T,isUpdateMode:O,isSignedIn:s,loadDataError:S,shouldShowNewPassword:f,showUpdateMode:z}}(function _objectSpread(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{}
n%2?ownKeys(Object(a),!0).forEach(function(n){o()(e,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))})}return e}({},D)),t=a.handleCancel,m=a.formErrors,f=a.handleChangePassword,d=a.handleSubmit,v=a.initialValues,y=a.isDisabled,E=a.isSignedIn,C=a.isUpdateMode,k=a.loadDataError,_=a.shouldShowNewPassword,L=a.showUpdateMode,M=Object(c.a)().formatMessage
if(!E)return i.a.createElement(l.a,{to:"/"})
var B=k?i.a.createElement(O.a,null,i.a.createElement(s.a,{id:"accountInformationPage.errorTryAgain",defaultMessage:"Something went wrong. Please refresh and try again."})):null,x=null
if(!v)return j.a
var N=v.customer,K="".concat(N.firstname," ").concat(N.lastname)
return x=i.a.createElement(r.Fragment,null,i.a.createElement("div",{className:n.accountDetails},i.a.createElement("div",{className:n.lineItemsContainer},i.a.createElement("span",{className:n.nameLabel},i.a.createElement(s.a,{id:"global.name",defaultMessage:"Name"})),i.a.createElement("span",{className:n.nameValue},K),i.a.createElement("span",{className:n.emailLabel},i.a.createElement(s.a,{id:"global.email",defaultMessage:"Email"})),i.a.createElement("span",{className:n.emailValue},N.email),i.a.createElement("span",{className:n.passwordLabel},i.a.createElement(s.a,{id:"global.password",defaultMessage:"Password"})),i.a.createElement("span",{className:n.passwordValue},"***********")),i.a.createElement("div",{className:n.editButtonContainer},i.a.createElement(I.a,{className:n.editInformationButton,disabled:!1,onClick:L,priority:"normal"},i.a.createElement(s.a,{id:"global.editButton",defaultMessage:"Edit"})))),i.a.createElement(r.Suspense,{fallback:null},i.a.createElement(V,{formErrors:m,initialValues:N,isDisabled:y,isOpen:C,onCancel:t,onChangePassword:f,onSubmit:d,shouldShowNewPassword:_}))),i.a.createElement("div",{className:n.root},i.a.createElement(h.b,null,M({id:"accountInformationPage.titleAccount",defaultMessage:"Account Information"})),i.a.createElement("h1",{className:n.title},i.a.createElement(s.a,{id:"accountInformationPage.accountInformation",defaultMessage:"Account Information"})),B||x)}},qrDf:function(e,n,a){(n=e.exports=a("PBB4")(!1)).push([e.i,".message-root-2kZ {\n    color: rgb(var(--venia-global-color-text));\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1rem;\n    padding: 0.625rem 0.125rem 0.125rem;\n}\n\n.message-root-2kZ:empty {\n    display: none;\n}\n\n.message-root_error-3Tf {\n    color: rgb(var(--venia-global-color-error));\n    font-weight: var(--venia-global-fontWeight-semibold);\n}\n",""]),n.locals={root:"message-root-2kZ",root_error:"message-root_error-3Tf message-root-2kZ"}}}])
