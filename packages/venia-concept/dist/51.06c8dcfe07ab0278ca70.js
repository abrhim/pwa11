/*!
 * @version v11.0.0-beta.1-1-g6fc2154e-dev
 * 
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"jp+G":function(t,n,i){(n=t.exports=i("PBB4")(!1)).push([t.i,".tabItem-root-EUH {\n    min-height: inherit;\n}\n",""]),n.locals={root:"tabItem-root-EUH"}},"y2+v":function(t,n,i){"use strict"
i.r(n),i.d(n,"default",function(){return k})
var r=i("ERkP"),o=i.n(r),e=i("GldI"),a=i("ouhz"),g=i("YyrX"),d=i("vB0K"),s=i.n(d),c=i("jp+G"),m=i.n(c),b={injectType:"singletonStyleTag",insert:"head",singleton:!0},l=(s()(m.a,b),m.a.locals||{}),p=i("aWzz"),u=globalThis.matchMedia,h=function TabItem(t){var n=Object(g.a)(l,t.classes),i=t.minHeight,r=t.verticalAlignment,d=t.backgroundColor,s=t.desktopImage,c=t.mobileImage,m=t.backgroundSize,b=t.backgroundPosition,p=t.backgroundAttachment,h=t.backgroundRepeat,k=t.textAlign,f=t.border,y=t.borderColor,R=t.borderWidth,j=t.borderRadius,v=t.marginTop,T=t.marginRight,w=t.marginBottom,A=t.marginLeft,B=t.paddingTop,C=t.paddingRight,I=t.paddingBottom,x=t.paddingLeft,O=t.children,z=t.cssClasses,L=void 0===z?[]:z,H=s
c&&u&&u("(max-width: 768px)").matches&&(H=c)
var P={minHeight:i,verticalAlignment:r,backgroundColor:d,textAlign:k,border:f,borderColor:y,borderWidth:R,borderRadius:j,marginTop:v,marginRight:T,marginBottom:w,marginLeft:A,paddingTop:B,paddingRight:C,paddingBottom:I,paddingLeft:x}
if(H){var E=Object(a.a)(H,{type:"image-wysiwyg",quality:85})
P.backgroundImage="url(".concat(E,")"),P.backgroundSize=m,P.backgroundPosition=b,P.backgroundAttachment=p,P.backgroundRepeat=h?"repeat":"no-repeat"}return r&&(P.display="flex",P.justifyContent=Object(e.j)(r),P.flexDirection="column"),o.a.createElement("div",{style:P,className:[L,n.root].join(" ")},O)}
h.propTypes={classes:Object(p.shape)({root:p.string}),tabName:p.string,verticalAlignment:Object(p.oneOf)(["top","middle","bottom"]),minHeight:p.string,backgroundColor:p.string,desktopImage:p.string,mobileImage:p.string,backgroundSize:p.string,backgroundPosition:p.string,backgroundAttachment:p.string,backgroundRepeat:p.bool,textAlign:p.string,border:p.string,borderColor:p.string,borderWidth:p.string,borderRadius:p.string,marginTop:p.string,marginRight:p.string,marginBottom:p.string,marginLeft:p.string,paddingTop:p.string,paddingRight:p.string,paddingBottom:p.string,paddingLeft:p.string,cssClasses:Object(p.arrayOf)(p.string)}
var k=h}}])
