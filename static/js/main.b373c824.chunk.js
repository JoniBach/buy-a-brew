(this["webpackJsonpbuy-a-beer"]=this["webpackJsonpbuy-a-beer"]||[]).push([[0],{123:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),i=t.n(c),o=(t(98),t(14)),l=t(8),u=t(29),s=t(147),m=t(163),d=t(175),p=t(161),b=t(151),f=t(174),E=t(76),g=t.n(E),v=t(77),h=t.n(v),y=t(78),O=t.n(y),j=t(79),x=t.n(j),C=t(156),k=t(57),w=t(160),S=t(58),N=t(83),I=t(80),B=t(17),W=t(162),A=t(71),P=t.n(A),L=r.a.createContext(),_=t(81),D=t(176),M=t(179),H=t(148),T=t(149),z=t(150),J=t(152),R=t(155),Z=t(178),K=t(157),$=t(159),q=t(154),F=t(158),G=t(177),Q=t(153),U=t(62),V=r.a.createContext(),X=function(e){var a=Object(n.useState)([]),t=Object(l.a)(a,2),c=t[0],i=t[1];return r.a.createElement(V.Provider,{value:[c,i]},e.children)},Y=r.a.createContext(),ee=function(e){var a=Object(n.useState)(!1),t=Object(l.a)(a,2),c=t[0],i=t[1];return r.a.createElement(Y.Provider,{value:[c,i]},e.children)},ae=t(61),te=t.n(ae),ne=t(72);function re(e){var a=Object(n.useState)([]),t=Object(l.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)(!0),o=Object(l.a)(i,2),u=o[0],s=o[1];function m(){return(m=Object(ne.a)(te.a.mark((function a(){var t,n;return te.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(e);case 2:return t=a.sent,a.next=5,t.json();case 5:n=a.sent,c(n),s(!1);case 8:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[]),[r,u]}var ce=r.a.forwardRef((function(e,a){var t=e.in,n=e.children,c=e.onEnter,i=e.onExited,o=Object(u.a)(e,["in","children","onEnter","onExited"]),l=Object(U.useSpring)({from:{opacity:0},to:{opacity:t?1:0},onStart:function(){t&&c&&c()},onRest:function(){!t&&i&&i()}});return r.a.createElement(U.animated.div,Object.assign({ref:a,style:l},o),n)}));function ie(e){return r.a.createElement(G.a,Object.assign({elevation:6,variant:"filled"},e))}var oe=Object(s.a)((function(e){var a;return{root:{backgroundColor:e.palette.background.paper},media:{height:150,display:"flex"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},root2:{display:"flex"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:"100%"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38},sticky:(a={position:"-webkit-sticky"},Object(o.a)(a,"position","sticky"),Object(o.a)(a,"top",0),Object(o.a)(a,"backgroundColor","yellow"),Object(o.a)(a,"padding","50px"),Object(o.a)(a,"fontSize","20px"),a),bottomOfScreen:{position:"fixed",bottom:1}}})),le=function(e){var a=oe(),t=r.a.useState(!1),c=Object(l.a)(t,2),i=c[0],o=c[1],u=Object(n.useContext)(Y),s=Object(l.a)(u,2),m=s[0],d=s[1],p=r.a.useState(!0),E=Object(l.a)(p,1)[0],g=r.a.useState(!0),v=Object(l.a)(g,1)[0],h=function(){o(!1)},y=r.a.useState(!1),O=Object(l.a)(y,2),j=O[0],x=O[1],k=r.a.useState(!1),w=Object(l.a)(k,2),S=w[0],N=w[1],I=function(){x((function(e){return!e}))},B=function(){N((function(e){return!e}))},W=r.a.useState(!1),A=Object(l.a)(W,2),P=A[0],L=A[1],G=function(e,a){"clickaway"!==a&&L(!1)},U=re("https://api.punkapi.com/v2/beers"),X=Object(l.a)(U,1)[0],ee=Object(n.useContext)(V),ae=Object(l.a)(ee,2),te=(ae[0],ae[1]),ne=function(e,a){d(a);var t=X.filter((function(e){return e.id===a})),n={name:t.map((function(e){return e.name})).toString(),price:6,image_url:t.map((function(e){return e.image_url})).toString(),tagline:t.map((function(e){return e.tagline})).toString(),id:t.map((function(e){return e.id})).toString()};te((function(e){return[].concat(Object(_.a)(e),[n])})),L(!0),me(0)},le=r.a.useState(0),ue=Object(l.a)(le,2),se=ue[0],me=ue[1];return r.a.useEffect((function(){var e=setInterval((function(){me((function(e){return e>=100?void 0:e+20}))}),200);return function(){clearInterval(e)}}),[]),r.a.createElement("div",{className:a.root},r.a.createElement(D.a,{"aria-labelledby":"spring-modal-title","aria-describedby":"spring-modal-description",className:a.modal,open:i,onClose:h,closeAfterTransition:!0,BackdropComponent:M.a,BackdropProps:{timeout:500}},r.a.createElement(ce,{in:i},r.a.createElement(H.a,{onClick:h,variant:"contained",color:"primary"},"close"),X.filter((function(e){return e.id===m})).map((function(e){var t=e.id,n=e.name,c=e.image_url,i=e.abv,o=e.tagline,l=e.description,u=e.food_pairing;return r.a.createElement(T.a,{className:a.root2},r.a.createElement("div",{className:a.details},r.a.createElement(z.a,{className:a.content},r.a.createElement(f.a,{component:"p",align:"center",fontWeight:"fontWeightBold"},r.a.createElement(b.a,{variant:"h4"},n)),r.a.createElement(b.a,{variant:"body2",component:"p",align:"center"},o),r.a.createElement(b.a,{variant:"body2",component:"p",align:"center"},i,"%"),r.a.createElement("br",null),r.a.createElement(J.a,{in:E,timeout:"auto",unmountOnExit:!0},r.a.createElement("div",{className:a.container},r.a.createElement("div",{className:a.root},r.a.createElement("div",{className:a.container},r.a.createElement(J.a,{in:j},"Description:"),r.a.createElement(J.a,{in:j,collapsedHeight:40},r.a.createElement(b.a,{variant:"body2",component:"p"},l))),r.a.createElement(Q.a,{onChange:I,style:{border:"none"},selected:j},j?"Less":"More")))),r.a.createElement(J.a,{in:v,timeout:"auto",unmountOnExit:!0},r.a.createElement("div",{className:a.container},r.a.createElement("div",{className:a.root},r.a.createElement("div",{className:a.container},r.a.createElement(J.a,{in:S},"Perfect Pairings:"),r.a.createElement(J.a,{in:S,collapsedHeight:40},r.a.createElement(b.a,{variant:"body2",component:"p"},u))),r.a.createElement(Q.a,{onChange:B,style:{border:"none"},selected:S},S?"Less":"More"),r.a.createElement(H.a,{onClick:function(e){return ne(0,t)},fullWidth:!0,variant:"contained",color:"secondary",startIcon:r.a.createElement(q.a,null)},"Add To Cart")))))),r.a.createElement(R.a,{className:a.cover,image:c,title:n}),r.a.createElement(Z.a,{open:P,autoHideDuration:6e3,onClose:G},r.a.createElement(ie,{onClose:G,severity:"success"},'Added "',n,'" to cart!')))})))),r.a.createElement(Z.a,{open:P,autoHideDuration:6e3,onClose:G},r.a.createElement(ie,{onClose:G,severity:"success"},"Added  to cart!")),r.a.createElement(C.a,{container:!0,spacing:2},X.map((function(e){var t=e.id,n=e.name,c=e.image_url,i=e.abv;return r.a.createElement(C.a,{item:!0,xs:4},r.a.createElement(T.a,{variant:"outlined",id:t,height:"200"},r.a.createElement(K.a,{value:t,onClick:function(e){return function(e,a){o(!0),d(a)}(0,t)}},r.a.createElement(z.a,null,r.a.createElement(R.a,{className:a.media,image:c}),r.a.createElement(f.a,{variant:"body2",component:"p",align:"center",fontWeight:"fontWeightBold"},n),r.a.createElement(b.a,{variant:"body2",component:"p",align:"center"},i,"%"))),r.a.createElement(H.a,{variant:"contained",fullWidth:!0,onClick:function(e){return ne(0,t)},startIcon:P?isNaN(se)?r.a.createElement(F.a,{style:{color:"green"}}):r.a.createElement($.a,{color:"primary",size:20,variant:"static",value:se}):r.a.createElement(q.a,null)},"\xa36.00")))}))))},ue={primary:k.a[500],secondary:w.a[500],status:S.a[500]},se=Object(I.a)({palette:{type:"light",primary:{main:ue.primary},secondary:{main:ue.secondary},status:{main:ue.status}}});function me(e){var a=e.children,t=e.value,n=e.index,c=Object(u.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},c),t===n&&r.a.createElement(f.a,{p:3},r.a.createElement(b.a,null,a)))}function de(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var pe=Object(s.a)((function(e){var a;return{root:{backgroundColor:e.palette.background.paper},media:{height:150,display:"flex"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},root2:{display:"flex"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:"100%"},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38},sticky:(a={position:"-webkit-sticky"},Object(o.a)(a,"position","sticky"),Object(o.a)(a,"top",0),Object(o.a)(a,"backgroundColor","yellow"),Object(o.a)(a,"padding","50px"),Object(o.a)(a,"fontSize","20px"),a),bottomOfScreen:{position:"fixed",bottom:e.spacing(-13)}}}));function be(){var e=pe(),a=Object(B.a)(),t=r.a.useState(0),n=Object(l.a)(t,2),c=n[0],i=n[1];return r.a.createElement("div",{className:e.root},r.a.createElement(N.a,{className:e.root},r.a.createElement(d.a,{value:c,onChange:function(e,a){i(a)},indicatorColor:"primary",textColor:"primary",centered:!0},r.a.createElement(p.a,Object.assign({},de(0),{label:"ALL"})),r.a.createElement(p.a,Object.assign({},de(0),{label:"PIZZA"})),r.a.createElement(p.a,Object.assign({},de(0),{label:"STEAK"})))),r.a.createElement(W.a,{theme:se},r.a.createElement(P.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:c,onChangeIndex:function(e){i(e)},style:{backgroundColor:"white"}},r.a.createElement(me,{value:c,index:0,dir:a.direction},r.a.createElement(C.a,{container:!0,spacing:2},r.a.createElement(L.Consumer,null,(function(e){return r.a.createElement(le,null)})))),r.a.createElement(me,{value:c,index:1,dir:a.direction},"Comming Soon..."),r.a.createElement(me,{value:c,index:2,dir:a.direction},"Comming Soon..."))))}var fe=t(164),Ee=t(146),ge=t(166),ve=t(167),he=t(168),ye=t(169),Oe=t(170),je=t(171),xe=t(173),Ce=t(165),ke=t(172),we=Object(s.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:k.a[500]},bottomOfScreen:{flex:1}}}));function Se(e){return r.a.createElement(G.a,Object.assign({elevation:6,variant:"filled"},e))}var Ne=function(){var e=we(),a=Object(n.useContext)(V),t=Object(l.a)(a,1)[0],c=Object(n.useContext)(V),i=Object(l.a)(c,2),o=i[0],u=i[1],s=r.a.useState(!1),d=Object(l.a)(s,2),p=d[0],E=d[1],g=t.reduce((function(e,a){return e+a.price}),0),v=r.a.useState(100),h=Object(l.a)(v,2),y=h[0],O=h[1],j=r.a.useState(!1),x=Object(l.a)(j,2),C=x[0],k=x[1],w=r.a.useState(),S=Object(l.a)(w,2),I=S[0],B=S[1],W=function(e){"clickaway"!==e&&k(!1)};return r.a.useEffect((function(){var e=setInterval((function(){O((function(e){if(100===e)return u([]),void k(!0);var a=10*Math.random();return Math.min(e+a,100)}))}),500);return function(){clearInterval(e)}}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:e.bottomOfScreen},r.a.createElement(m.a,{position:"static"},r.a.createElement(fe.a,null,r.a.createElement(b.a,{variant:"h5",color:"secondary"},"\xa3",g),r.a.createElement(f.a,{width:"100%",align:"center",m:2},"Buy-A-Brew"),r.a.createElement(Ee.a,{onClick:function(){E(!p)},"aria-expanded":p,"aria-label":"show more"},r.a.createElement(Ce.a,null))))),1!==I?null:r.a.createElement(Z.a,{open:C,autoHideDuration:6e3,onClose:W},r.a.createElement(Se,{onClose:W,severity:"success"},"Purchase Successful")),r.a.createElement(J.a,{in:p,timeout:"auto",unmountOnExit:!0},r.a.createElement(b.a,{style:{color:"white"},align:"center",variant:"h6"},t.length," items in cart"),r.a.createElement(ge.a,{component:N.a},r.a.createElement(ve.a,null,r.a.createElement(he.a,null,o.map((function(e){var a=e.id,t=e.name,n=e.price,c=e.image_url;e.abv,e.tagline,e.description,e.food_pairing;return r.a.createElement(ye.a,{key:a},r.a.createElement(Oe.a,{component:"th",scope:"row"},r.a.createElement(je.a,{badgeContent:"\xa3"+n,color:"secondary"},r.a.createElement("img",{src:c,alt:t,height:"50",width:"20"}))),r.a.createElement(Oe.a,{align:"left"},t,r.a.createElement("br",null)),r.a.createElement(Oe.a,{align:"right"}),r.a.createElement(Oe.a,{align:"right"},r.a.createElement(Ee.a,{"aria-label":"delete",onClick:function(e){u([])}},r.a.createElement(ke.a,null))))}))))),0===g?r.a.createElement(b.a,{style:{color:"white"},align:"center",variant:"h6"},"Add an item..."):r.a.createElement(f.a,{m:3},r.a.createElement(b.a,{style:{color:"white"},align:"center",variant:"h6"},"Total: \xa3",g),y?r.a.createElement(xe.a,{variant:"determinate",value:y}):r.a.createElement("div",null),r.a.createElement(H.a,{onClick:function(e,a){k(!1),B(1),O(0)},fullWidth:!0,variant:"contained",color:"secondary"},y<=100?"processing":"Confirm Payment"))))};function Ie(e){var a=e.children,t=e.value,n=e.index,c=Object(u.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},c),t===n&&r.a.createElement(f.a,{p:3},r.a.createElement(b.a,null,a)))}function Be(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var We=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.background.paper},indicator:{backgroundColor:e.palette.background.paper,height:"3px"}}}));function Ae(){var e=We(),a=r.a.useState(0),t=Object(l.a)(a,2),n=t[0],c=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(L.Consumer,null,(function(e){return r.a.createElement(Ne,null)})),r.a.createElement(m.a,Object(o.a)({position:"sticky",color:"default"},"color","primary"),r.a.createElement(d.a,{value:n,onChange:function(e,a){c(a)},"aria-label":"simple tabs example",variant:"fullWidth",classes:{indicator:e.indicator}},">",r.a.createElement(p.a,Object.assign({icon:r.a.createElement(g.a,null)},Be(0))),r.a.createElement(p.a,Object.assign({icon:r.a.createElement(h.a,null)},Be(0))),r.a.createElement(p.a,Object.assign({icon:r.a.createElement(O.a,null)},Be(0))),r.a.createElement(p.a,Object.assign({icon:r.a.createElement(x.a,null)},Be(0))))),r.a.createElement(Ie,{value:n,index:0},r.a.createElement(be,null)),r.a.createElement(Ie,{value:n,index:1},r.a.createElement(be,null)),r.a.createElement(Ie,{value:n,index:2},r.a.createElement(be,null)))}var Pe=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(X,null,r.a.createElement(ee,null,r.a.createElement(Ae,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Le={primary:k.a[500],secondary:w.a[500],status:S.a[500]},_e=Object(I.a)({palette:{type:"dark",primary:{main:Le.primary},secondary:{main:Le.secondary},status:{main:Le.status}}}),De=t(4),Me=Object(De.a)({"@global":{".MuiBox-root":{padding:"0"}}})((function(){return null}));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W.a,{theme:_e},r.a.createElement(Me,null),r.a.createElement(Pe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,a,t){e.exports=t(123)},98:function(e,a,t){}},[[93,1,2]]]);
//# sourceMappingURL=main.b373c824.chunk.js.map