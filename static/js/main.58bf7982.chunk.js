(this.webpackJsonpgym_app=this.webpackJsonpgym_app||[]).push([[0],{47:function(e,n,t){},58:function(e,n,t){"use strict";t.r(n);var r,i,c,o,a,s,l,u,d,j,f,b,h=t(1),p=t.n(h),m=t(34),x=t.n(m),O=t(3),g={colors:{white:"#FFFFFF",mainColor:"#292B4D",mainColorLight:"#353766",lightGrey:"#F0F0F4",green:"#69AB56",red:"#C4686F",active:"#17D1E0",black:"#111111",success:"#8FCB81",error:"#CB8581",warning:"#E1D888"},fontSize:{headers:"40px",xl:"30px",l:"25px",m:"22px",s:"18px",xs:"14px"},boxShadow:{mainShadow:"0 4px 5px 0 rgba(0,0,0,0.25)"},media:{phone:"@media (max-width: 600px)",tablet:"@media (min-width: 601px)",desktop:"@media (min-width: 992px)"}},v=t(4),y=t(35),w=(t(47),Object(O.createGlobalStyle)(r||(r=Object(v.a)(["\n  ","\n  html {\n    box-sizing: border-box;\n  }\n  *, *::after, *::before {\n    box-sizing: inherit;\n  }\n  body {\n    font-family: 'Montserrat', sans-serif;\n    padding: 0;\n    margin: 0;\n  }\n  a, button {\n    font-family: 'Montserrat', sans-serif;\n    text-decoration: none;\n    user-select: none;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    -webkit-tap-highlight-color: transparent;\n  }\n  h1 {\n    font-size: 30px;\n    font-weight: 400;\n    margin: 0;\n  }\n"])),y.normalize)),k=O.default.div(i||(i=Object(v.a)(["\n  height: 100vh;\n  width: 100%;\n  overflow: hidden;\n  color: ",";\n"])),(function(e){return e.theme.colors.lightGrey})),S=t(7),z=t.n(S),C=t(10),T=t(9),N=t(14),F=O.default.div(c||(c=Object(v.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: ",";\n"])),(function(e){return e.theme.colors.mainColor})),G=O.default.h1(o||(o=Object(v.a)(["\n  font-size: ",";\n  font-weight: 300;\n"])),(function(e){return e.theme.fontSize.headers})),W=O.default.div(a||(a=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),E=O.default.p(s||(s=Object(v.a)(["\n  font-size: ",";\n  font-weight: 300;\n  margin: 0;\n"])),(function(e){return e.theme.fontSize.m})),A=Object(O.default)(N.b)(l||(l=Object(v.a)(["\n  font-size: ",";\n  font-weight: 300;\n  color: ",";\n  text-decoration: underline;\n"])),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.colors.active})),D=(O.default.span(u||(u=Object(v.a)(["\n  font-size: ",";\n  font-weight: 300;\n  color: ",";\n"])),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.colors.red})),O.default.div(d||(d=Object(v.a)(["\n  width: 70%;\n  background-color: ",";\n  padding: 10px 0;\n  border-radius: 10px;\n  text-align: center;\n  font-size: ",";\n"])),(function(e){return e.theme.colors.red}),(function(e){return e.theme.fontSize.s}))),P=t(8),I=t(13),U=O.default.input(j||(j=Object(v.a)(["\n  width: ",";\n  background-color: ",";\n  border: none;\n  border-bottom: ",";\n  padding: ",";\n  border-radius: ",";\n  outline: none;\n  color: ",";\n  font-size: ",";\n  font-weight: 300;\n  margin: 15px 0;\n  box-shadow: ",";\n"])),(function(e){return e.line?"85%":"70%"}),(function(e){var n=e.theme;return e.line?"transparent":n.colors.mainColorLight}),(function(e){var n=e.line,t=e.theme;return n?"1px solid ".concat(t.colors.lightGrey):"none"}),(function(e){return e.small?"5px 10px":"10px 20px"}),(function(e){return e.line?"none":"10px"}),(function(e){return e.theme.colors.lightGrey}),(function(e){var n=e.theme;return e.small?n.fontSize.m:n.fontSize.l}),(function(e){var n=e.theme;return e.line?"none":n.boxShadow.mainShadow})),L=t(2),B=function(e){var n=e.register,t=e.name,r=Object(I.a)(e,["register","name"]);return Object(L.jsx)(U,Object(P.a)(Object(P.a)({},n(t,{required:!0})),r))},_=O.default.button(f||(f=Object(v.a)(["\n  margin: 20px 0;\n  padding: ",";\n  width: ",";\n  border-radius: ",";\n  background-color: ",";\n  border: none;\n  outline: none;\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  box-shadow: ",";\n  transition: background-color 0.2s ease, transform 0.2s ease;\n  &:active {\n    background-color: ",";\n    transform: scale(1.02);\n  }\n  &:disabled {\n    opacity: 0.3;\n  }\n"])),(function(e){return e.small?"10px 20px":"15px 50px"}),(function(e){return e.wider&&"100%"}),(function(e){return e.wider?"10px":"15px"}),(function(e){var n=e.theme;return e.active?n.colors.active:n.colors.mainColorLight}),(function(e){return e.theme.colors.lightGrey}),(function(e){var n=e.theme;return e.small?n.fontSize.xs:n.fontSize.l}),(function(e){return e.small?"400":"200"}),(function(e){return e.theme.boxShadow.mainShadow}),(function(e){return e.theme.colors.active})),M=function(e){return Object(L.jsx)(_,Object(P.a)({},e))},R=O.default.form(b||(b=Object(v.a)(["\n  width: 100%;\n  height: ",";\n  display: flex;\n  flex-direction: ",";\n  flex-wrap: ",";\n  align-items: center;\n  justify-content: ",";\n"])),(function(e){return e.height||"auto"}),(function(e){return e.row?"row":"column"}),(function(e){return e.row?"wrap":"nowrap"}),(function(e){return e.row?"space-evenly":"center"})),Z=t(41),J=function(e){var n=e.defaultValues,t=e.children,r=e.onSubmit,i=Object(I.a)(e,["defaultValues","children","onSubmit"]),c=Object(Z.a)({defaultValues:n}),o=c.handleSubmit;return Object(L.jsx)(R,Object(P.a)(Object(P.a)({onSubmit:o(r)},i),{},{children:p.a.Children.map(t,(function(e){return e.props.name?p.a.createElement(e.type,Object(P.a)({},Object(P.a)(Object(P.a)({},e.props),{},{register:c.register,key:e.props.name}))):e}))}))},V="/Gym_App/signup",q="/Gym_App/signin",K="/Gym_App/",Y="/Gym_App/myTrainings",$="/Gym_App/do_training",H=t(39),Q=(t(53),t(55),H.a.initializeApp({apiKey:"AIzaSyBj0kMIJGTkiEYFxcyu1ip8hDl4kdNeivA",authDomain:"gymapp-bbcad.firebaseapp.com",databaseURL:"https://gymapp-bbcad-default-rtdb.europe-west1.firebasedatabase.app",projectId:"gymapp-bbcad",storageBucket:"gymapp-bbcad.appspot.com",messagingSenderId:"143677509805",appId:"1:143677509805:web:7bdbbf7d6412396e4e3624"})),X=Q.auth(),ee=Q.database(),ne=p.a.createContext();function te(){return Object(h.useContext)(ne)}function re(e){var n=e.children,t=Object(h.useState)(),r=Object(T.a)(t,2),i=r[0],c=r[1],o=Object(h.useState)(!0),a=Object(T.a)(o,2),s=a[0],l=a[1];Object(h.useEffect)((function(){var e=X.onAuthStateChanged((function(e){c(e),l(!1)}));return function(){return e}}),[]);var u={currentUser:i,login:function(e,n){return X.signInWithEmailAndPassword(e,n)},signup:function(e,n){return X.createUserWithEmailAndPassword(e,n)},logout:function(){return X.signOut()}};return Object(L.jsx)(ne.Provider,{value:u,children:!s&&n})}var ie,ce,oe,ae,se,le,ue,de,je,fe,be,he,pe,me,xe,Oe,ge,ve,ye,we,ke=t(11),Se=Object(O.keyframes)(ie||(ie=Object(v.a)(["\n  0% { transform: rotate(0); }\n  100% { transform: rotate(360deg); }\n"]))),ze=O.default.div(ce||(ce=Object(v.a)(["\n  width: 60px;\n  height: 60px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: inline-block;\n  overflow: hidden;\n  background: none;\n"]))),Ce=O.default.div(oe||(oe=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform: translateZ(0) scale(0.61);\n  backface-visibility: hidden;\n  transform-origin: 0 0;\n  & > div {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    animation: "," 1.4s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    transform-origin: 50px 50px;\n  }\n  & > div > div {\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n  }\n  & > div:nth-child(0) {\n    animation-delay: 0s;\n  }\n  & > div:nth-child(0) > div {\n    background: ",";\n    transform: translate(74.3540735907757px, 67.52417287332267px);\n  }\n  & > div:nth-child(1) {\n    animation-delay: -0.062s;\n  }\n  & > div:nth-child(1) > div {\n    background: ",";\n    transform: translate(67.52417287332267px, 74.3540735907757px);\n  }\n  & > div:nth-child(2) {\n    animation-delay: -0.125s;\n  }\n  & > div:nth-child(2) > div {\n    background: ",";\n    transform: translate(59.15928699750833px, 79.1835427029176px);\n  }\n  & > div:nth-child(3) {\n    animation-delay: -0.187s;\n  }\n  & > div:nth-child(3) > div {\n    background: ",";\n    transform: translate(49.829469112141915px, 81.68345987083099px);\n  }\n  & > div:nth-child(4) {\n    animation-delay: -0.25s;\n  }\n  & > div:nth-child(4) > div {\n    background: ",";\n    transform: translate(40.17053088785809px, 81.68345987083099px);\n  }\n  & > div:nth-child(5) {\n    animation-delay: -0.312s;\n  }\n  & > div:nth-child(5) > div {\n    background: ",";\n    transform: translate(30.84071300249169px, 79.1835427029176px);\n  }\n  & > div:nth-child(6) {\n    animation-delay: -0.375s;\n  }\n  & > div:nth-child(6) > div {\n    background: ",";\n    transform: translate(22.475827126677334px, 74.3540735907757px);\n  }\n  & > div:nth-child(7) {\n    animation-delay: -0.437s;\n  }\n  & > div:nth-child(7) > div {\n    background: ",";\n    transform: translate(15.645926409224302px, 67.52417287332267px);\n  }\n"])),Se,(function(e){return e.theme.colors.lightGrey}),(function(e){return e.theme.colors.lightGrey}),(function(e){return e.theme.colors.lightGrey}),(function(e){return e.theme.colors.lightGrey}),(function(e){return e.theme.colors.lightGrey}),(function(e){return e.theme.colors.lightGrey}),(function(e){return e.theme.colors.lightGrey}),(function(e){return e.theme.colors.lightGrey})),Te=function(e){return Object(L.jsx)(ze,{children:Object(L.jsxs)(Ce,{children:[Object(L.jsx)("div",{children:Object(L.jsx)("div",{})}),Object(L.jsx)("div",{children:Object(L.jsx)("div",{})}),Object(L.jsx)("div",{children:Object(L.jsx)("div",{})}),Object(L.jsx)("div",{children:Object(L.jsx)("div",{})}),Object(L.jsx)("div",{children:Object(L.jsx)("div",{})}),Object(L.jsx)("div",{children:Object(L.jsx)("div",{})}),Object(L.jsx)("div",{children:Object(L.jsx)("div",{})}),Object(L.jsx)("div",{children:Object(L.jsx)("div",{})})]})})},Ne=function(e){var n=Object(h.useState)(""),t=Object(T.a)(n,2),r=t[0],i=t[1],c=Object(h.useState)(!1),o=Object(T.a)(c,2),a=o[0],s=o[1],l=Object(ke.g)(),u=Object(h.useRef)(!0),d=te().signup,j=function(){var e=Object(C.a)(z.a.mark((function e(n){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.ref("/users/".concat(n.user.uid)).set({email:n.user.email,uid:n.user.uid});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=Object(C.a)(z.a.mark((function e(n){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!u.current){e.next=10;break}return s(!0),e.next=5,d(n.email,n.password);case 5:return t=e.sent,console.log(t),e.next=9,j(t);case 9:l.push(K);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),i("Ups, co\u015b posz\u0142o nie tak :/");case 15:s(!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n){return e.apply(this,arguments)}}();return Object(h.useEffect)((function(){return function(){return u.current=!1}}),[]),Object(L.jsxs)(F,{children:[Object(L.jsx)(G,{children:"Rejestracja"}),r&&Object(L.jsx)(D,{children:r}),Object(L.jsxs)(J,{onSubmit:f,children:[Object(L.jsx)(B,{placeholder:"email",type:"email",name:"email"}),Object(L.jsx)(B,{placeholder:"has\u0142o",type:"password",name:"password"}),Object(L.jsx)(M,{disabled:a,type:"submit",children:"Zarejestruj si\u0119"})]}),Object(L.jsxs)(W,{children:[Object(L.jsx)(E,{children:"Masz ju\u017c konto?"}),Object(L.jsx)(A,{to:q,children:"Zaloguj si\u0119"})]}),a&&Object(L.jsx)(Te,{})]})},Fe=O.default.div(ae||(ae=Object(v.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: ",";\n"])),(function(e){return e.theme.colors.mainColor})),Ge=O.default.h1(se||(se=Object(v.a)(["\n  font-size: ",";\n  font-weight: 300;\n"])),(function(e){return e.theme.fontSize.headers})),We=O.default.div(le||(le=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Ee=O.default.p(ue||(ue=Object(v.a)(["\n  font-size: ",";\n  font-weight: 300;\n  margin: 0;\n"])),(function(e){return e.theme.fontSize.m})),Ae=Object(O.default)(N.b)(de||(de=Object(v.a)(["\n  font-size: ",";\n  font-weight: 300;\n  color: ",";\n  text-decoration: underline;\n"])),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.colors.active})),De=(O.default.span(je||(je=Object(v.a)(["\n  font-size: ",";\n  font-weight: 300;\n  color: ",";\n"])),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.colors.red})),O.default.div(fe||(fe=Object(v.a)(["\n  width: 70%;\n  background-color: ",";\n  padding: 10px 0;\n  border-radius: 10px;\n  text-align: center;\n  font-size: ",";\n"])),(function(e){return e.theme.colors.red}),(function(e){return e.theme.fontSize.s}))),Pe=function(e){var n=Object(h.useState)(""),t=Object(T.a)(n,2),r=t[0],i=t[1],c=Object(h.useState)(!1),o=Object(T.a)(c,2),a=o[0],s=o[1],l=Object(ke.g)(),u=Object(h.useRef)(!0),d=te().login,j=function(){var e=Object(C.a)(z.a.mark((function e(n){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!u.current){e.next=6;break}return s(!0),e.next=5,d(n.email,n.password);case 5:l.push(K);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),i("Login lub has\u0142o s\u0105 niepoprawne :/");case 11:s(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}();return Object(h.useEffect)((function(){return function(){return u.current=!1}}),[]),Object(L.jsxs)(Fe,{children:[Object(L.jsx)(Ge,{children:"Logowanie"}),r&&Object(L.jsx)(De,{children:r}),Object(L.jsxs)(J,{onSubmit:j,children:[Object(L.jsx)(B,{placeholder:"email",type:"email",name:"email"}),Object(L.jsx)(B,{placeholder:"has\u0142o",type:"password",name:"password"}),Object(L.jsx)(M,{disabled:a,type:"submit",children:"Zaloguj si\u0119"})]}),Object(L.jsxs)(We,{children:[Object(L.jsx)(Ee,{children:"Nie masz jeszcze konta?"}),Object(L.jsx)(Ae,{to:V,children:"Zarejestruj si\u0119"})]}),a&&Object(L.jsx)(Te,{})]})},Ie=O.default.div(be||(be=Object(v.a)(["\n  height: 100vh;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])),(function(e){return e.theme.colors.mainColor})),Ue=Object(O.default)(N.b)(he||(he=Object(v.a)(["\n  background-color: transparent;\n  padding: 0;\n  margin: 0;\n  color: ",";\n  width: 90%;\n  \n"])),(function(e){return e.theme.colors.lightGrey})),Le=function(e){var n=te().logout,t=Object(h.useRef)(!0),r=function(){var e=Object(C.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t.current){e.next=4;break}return e.next=4,n();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(h.useEffect)((function(){return function(){return t.current=!1}}),[]),Object(L.jsxs)(Ie,{children:[Object(L.jsx)(Ue,{to:Y,children:Object(L.jsx)(M,{wider:!0,children:"Moje treningi"})}),Object(L.jsx)(Ue,{to:Y,children:Object(L.jsx)(M,{wider:!0,children:"Ustawienia"})}),Object(L.jsx)(Ue,{to:Y,children:Object(L.jsx)(M,{wider:!0,onClick:r,children:"Wyloguj si\u0119"})})]})},Be=O.default.div(pe||(pe=Object(v.a)(["\n  height: 100vh;\n  background-color: ",";\n  display: flex;\n  overflow-y: scroll;\n  flex-direction: column;\n  align-items: center;\n  padding: 5% 0;\n"])),(function(e){return e.theme.colors.mainColor})),_e=O.default.div(me||(me=Object(v.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 25px 0;\n"]))),Me=O.default.div(xe||(xe=Object(v.a)(["\n  width: 100%;\n  display: grid;\n  grid-template: 1fr / 3fr 1fr 1fr;\n  margin: 5px 0;\n"]))),Re=O.default.div(Oe||(Oe=Object(v.a)(["\n  width: 80%;\n  display: flex;\n  justify-content: space-evenly;\n"]))),Ze=O.default.span(ge||(ge=Object(v.a)(["\n  justify-self: center;\n  font-size: ",";\n  font-weight: ","; ;\n"])),(function(e){return e.theme.fontSize.s}),(function(e){return e.template?"500":"300"})),Je=O.default.span(ve||(ve=Object(v.a)(["\n  padding-left: ",";\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.template?"15px":"0"}),(function(e){return e.theme.fontSize.s}),(function(e){return e.template?"500":"300"})),Ve=O.default.span(ye||(ye=Object(v.a)(["\n  font-size: ",";\n  font-weight: ",";\n"])),(function(e){return e.theme.fontSize.s}),(function(e){return e.template?"500":"300"})),qe=t(19),Ke=p.a.createContext();function Ye(){return Object(h.useContext)(Ke)}function $e(e){var n=e.children,t={addTraining:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];t.map((function(t){ee.ref("users/".concat(e.uid,"/trainings/").concat(n,"/").concat(t)).update({name:t})}))},getTrainings:function(e,n){ee.ref("/users/".concat(e,"/trainings/")).on("value",(function(e){var t=e.val(),r=[];for(var i in t)r.push(Object(P.a)({id:i},t[i]));n(r)}))},getTraining:function(e,n,t){ee.ref("/users/".concat(e,"/trainings/").concat(n)).on("value",(function(e){var n=e.val(),r=[],i=[];for(var c in n){for(var o in n[c].exercises)i.push(Object(P.a)({},n[c].exercises[o]));i.sort((function(e,n){return e.order-n.order})),r.push(Object(P.a)(Object(P.a)({},n[c]),{},{exercises:i})),i=[]}t(r)}))},addExercise:function(e,n,t,r,i){var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],o=ee.ref("/users/".concat(e,"/trainings/").concat(n,"/").concat(t,"/exercises/").concat(r));o.update(i);var a=ee.ref("/users/".concat(e,"/trainings/").concat(n,"/").concat(t,"/exercises/").concat(r,"/reps"));c.map((function(e){a.update(Object(qe.a)({},e,{state:!1,number:e}))}))},getTrainingDay:function(e,n,t,r){ee.ref("/users/".concat(e,"/trainings/").concat(t,"/").concat(r)).on("value",(function(e){var t=e.val(),r=[],i=[],c=[];for(var o in t.exercises){for(var a in t.exercises[o].reps)c.push(Object(P.a)({},t.exercises[o].reps[a]));i.push(Object(P.a)(Object(P.a)({},t.exercises[o]),{},{repsData:c})),i.sort((function(e,n){return e.order-n.order})),c=[]}r.push.apply(r,i),n(r)}))}};return Object(L.jsx)(Ke.Provider,{value:t,children:n})}var He,Qe,Xe,en,nn,tn,rn,cn,on=O.default.h1(we||(we=Object(v.a)(["\n  font-weight: 300;\n  font-size: ",";\n  margin-bottom: 20px;\n"])),(function(e){var n=e.theme;return e.small?n.fontSize.l:n.fontSize.headers})),an=function(e){var n=e.children,t=Object(I.a)(e,["children"]);return Object(L.jsx)(on,Object(P.a)(Object(P.a)({},t),{},{children:n}))},sn=O.default.div(He||(He=Object(v.a)(["\n  box-shadow: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 90%;\n  border-radius: 15px;\n  max-height: 90%;\n  overflow-y: scroll;\n  background-color: ",";\n"])),(function(e){return e.theme.boxShadow.mainShadow}),(function(e){return e.theme.colors.mainColor})),ln=O.default.div(Qe||(Qe=Object(v.a)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(4px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),un=function(e){var n=e.children,t=Object(I.a)(e,["children"]);return Object(L.jsx)(ln,Object(P.a)(Object(P.a)({},t),{},{children:Object(L.jsx)(sn,{children:n})}))},dn=O.default.select(Xe||(Xe=Object(v.a)(["\n  margin: 10px 0;\n  background-color: ",";\n  color: ",";\n  width: 70%;\n  outline: none;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 10px;\n  font-size: ",";\n  box-shadow: ",";\n"])),(function(e){return e.theme.colors.mainColorLight}),(function(e){return e.theme.colors.lightGrey}),(function(e){return e.theme.fontSize.m}),(function(e){return e.theme.boxShadow.mainShadow})),jn=function(e){var n=e.register,t=e.options,r=e.name,i=Object(I.a)(e,["register","options","name"]);return Object(L.jsx)(dn,Object(P.a)(Object(P.a)(Object(P.a)({},n(r)),i),{},{children:t.map((function(e){return Object(L.jsx)("option",{value:e,children:e},e)}))}))},fn=O.default.label(en||(en=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  font-size: ",";\n  font-weight: 300;\n  text-align: center;\n  margin-bottom: ",";\n  margin-top: ",";\n  padding: 0 5%;\n"])),(function(e){var n=e.theme;return e.small?n.fontSize.m:n.fontSize.xl}),(function(e){return e.marginBottom||"0"}),(function(e){return e.marginTop||"0"})),bn=function(e){return Object(L.jsx)(fn,Object(P.a)({},e))},hn=O.default.div(nn||(nn=Object(v.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n"]))),pn=function(e){var n=e.closeModal,t=e.id,r=e.path,i=te().currentUser,c=Ye().addExercise,o=Object(h.useState)(!1),a=Object(T.a)(o,2),s=a[0],l=a[1],u=Object(h.useRef)(!0),d=function(){var e=Object(C.a)(z.a.mark((function e(o){var a,s,d,j;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a={exerciseName:o.name,series:Number.parseInt(o.series),basicProgression:Number.parseFloat(o.progression),startWeight:Number.parseFloat(o.startWeight),progressionType:o.typeOfProgression,order:o.order,repsFrom:Number.parseInt(o.repsFrom),repsTo:Number.parseInt(o.repsTo)},console.log(o),s=Number.parseInt(o.repsFrom),d=Number.parseInt(o.repsTo),j=[];s<=d;s++)j.push(s);if(e.prev=6,!u.current){e.next=12;break}return e.next=10,c(i.uid,r,t,o.name,a,j);case 10:l(!0),n();case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0);case 17:l(!1);case 18:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(n){return e.apply(this,arguments)}}();return Object(h.useEffect)((function(){return function(){return u.current=!1}}),[]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(un,{children:Object(L.jsxs)(J,{onSubmit:d,children:[Object(L.jsx)(bn,{htmlFor:"name",marginTop:"30px",small:!0,children:"Nazwij \u0107wiczenie"}),Object(L.jsx)(B,{type:"text",id:"name",small:!0,name:"name"}),Object(L.jsx)(bn,{marginTop:"20px",htmlFor:"series",small:!0,children:"Podaj ilo\u015b\u0107 serii"}),Object(L.jsx)(B,{type:"number",id:"series",small:!0,name:"series"}),Object(L.jsx)(bn,{marginTop:"20px",htmlFor:"reps",small:!0,children:"Podaj ilo\u015b\u0107 powt\xf3rze\u0144"}),Object(L.jsx)(B,{type:"number",placeholder:"od",id:"reps",small:!0,name:"repsFrom"}),Object(L.jsx)(B,{type:"number",placeholder:"do",id:"repsTo",small:!0,name:"repsTo"}),Object(L.jsx)(bn,{marginTop:"20px",htmlFor:"progression",small:!0,children:"Domy\u015blna progresja w kg"}),Object(L.jsx)(B,{type:"number",step:"0.1",id:"progression",small:!0,name:"progression"}),Object(L.jsx)(bn,{marginTop:"20px",htmlFor:"startWeight",small:!0,children:"Ci\u0119\u017car / powt\xf3rzenia startowe"}),Object(L.jsx)(B,{type:"number",step:"0.1",id:"startWeight",small:!0,name:"startWeight"}),Object(L.jsx)(bn,{marginTop:"20px",small:!0,children:"Wybierz spos\xf3b progresji"}),Object(L.jsx)(jn,{name:"typeOfProgression",options:["ci\u0119\u017car","powt\xf3rzenia"]}),Object(L.jsx)(bn,{marginTop:"20px",htmlFor:"order",small:!0,children:"Kolejno\u015b\u0107 w planie"}),Object(L.jsx)(B,{type:"number",id:"order",small:!0,name:"order"}),Object(L.jsxs)(hn,{children:[Object(L.jsx)(M,{onClick:n,children:"wr\xf3\u0107"}),Object(L.jsx)(M,{type:"submit",children:"dodaj"})]})]})}),s&&Object(L.jsx)(Te,{})]})},mn=Object(O.default)(N.b)(tn||(tn=Object(v.a)(["\n    display: flex;\n    justify-content: center;\n    width: ",";\n"])),(function(e){return e.width||"100%"})),xn=function(e){var n=e.children,t=e.to,r=Object(I.a)(e,["children","to"]);return Object(L.jsx)(mn,Object(P.a)(Object(P.a)({to:t},r),{},{children:n}))},On=function(e){var n=Object(ke.h)().id,t=Ye().getTraining,r=te().currentUser,i=Object(h.useState)([]),c=Object(T.a)(i,2),o=c[0],a=c[1],s=Object(h.useState)(!1),l=Object(T.a)(s,2),u=l[0],d=l[1],j=Object(h.useRef)(null),f=function(e){j.current=e,d(!0)};Object(h.useEffect)((function(){var e=function(){var e=Object(C.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(r.uid,n,a);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){return e}}),[]);var b=o.map((function(e){return Object(L.jsxs)(_e,{children:[Object(L.jsx)(an,{small:!0,children:e.name}),Object(L.jsxs)(Me,{children:[Object(L.jsx)(Ze,{template:!0,children:"Nazwa"}),Object(L.jsx)(Ve,{template:!0,children:"S"}),Object(L.jsx)(Je,{template:!0,children:"P"})]}),e.exercises&&e.exercises.map((function(e){return Object(L.jsxs)(Me,{children:[Object(L.jsx)(Ze,{children:e.exerciseName}),Object(L.jsx)(Ve,{children:e.series}),Object(L.jsx)(Je,{children:"".concat(e.repsFrom," - ").concat(e.repsTo)})]},e.exerciseName)})),Object(L.jsxs)(Re,{children:[Object(L.jsx)(xn,{width:"none",to:"".concat($,"/").concat(n,"/").concat(e.name),children:Object(L.jsx)(M,{small:!0,active:!0,children:"\u0106WICZ"})}),Object(L.jsx)(M,{small:!0,onClick:function(){return f(e.name)},children:"+ dodaj \u0107wiczenie"})]})]},e.name)}));return console.log(o),Object(L.jsxs)(Be,{children:[Object(L.jsx)(an,{children:n}),o.length>0&&b,u&&Object(L.jsx)(pn,{path:n,id:j.current,closeModal:function(){return d(!1)}})]})},gn=O.default.div(rn||(rn=Object(v.a)(["\n  width: 100%;\n  height: 100vh;\n  overflow-y: scroll;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: ",";\n"])),(function(e){return e.theme.colors.mainColor})),vn=function(e){var n=Object(ke.h)(),t=n.training,r=n.day,i=te().currentUser,c=Ye().getTrainingDay,o=Object(h.useState)([]),a=Object(T.a)(o,2),s=a[0],l=a[1];return Object(h.useEffect)((function(){var e=function(){var e=Object(C.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c(i.uid,l,t,r);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){return e}}),[]),console.log(s),Object(L.jsx)(gn,{})};function yn(e){var n=e.component,t=Object(I.a)(e,["component"]),r=te().currentUser;return Object(L.jsx)(ke.b,Object(P.a)(Object(P.a)({},t),{},{render:function(e){return r?Object(L.jsx)(n,Object(P.a)({},e)):Object(L.jsx)(ke.a,{to:q})}}))}var wn,kn,Sn,zn,Cn,Tn,Nn=O.default.div(cn||(cn=Object(v.a)(["\n  height: 100vh;\n  background-color: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])),(function(e){return e.theme.colors.mainColor})),Fn=O.default.button(wn||(wn=Object(v.a)(["\n  margin: 20px 0;\n  padding: 15px 50px;\n  width: 90%;\n  border-radius: 10px;\n  background-color: ",";\n  border: none;\n  outline: none;\n  color: ",";\n  font-size: ",";\n  font-weight: 200;\n  box-shadow: ",";\n  transition: background-color 0.2s ease, transform 0.2s ease;\n  &:active {\n    background-color: ",";\n    transform: scale(1.02);\n  }\n"])),(function(e){return e.theme.colors.mainColorLight}),(function(e){return e.theme.colors.lightGrey}),(function(e){return e.theme.fontSize.l}),(function(e){return e.theme.boxShadow.mainShadow}),(function(e){return e.theme.colors.active})),Gn=function(e){return Object(L.jsx)(Fn,Object(P.a)({},e))},Wn=O.default.div(kn||(kn=Object(v.a)(["\n  height: 100vh;\n  padding-top: 10%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: ",";\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n"])),(function(e){return e.theme.colors.mainColor})),En=O.default.div(Sn||(Sn=Object(v.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),An=O.default.div(zn||(zn=Object(v.a)(["\n  width: 30px;\n  height: 30px;\n  border-radius: 100%;\n  display: flex;\n  color: ",";\n  justify-content: center;\n  align-items: center;\n  transition: all 0.3s ease;\n  background-color: ",";\n"])),(function(e){var n=e.active,t=e.theme;return"".concat(n?t.colors.lightGrey:t.colors.mainColor)}),(function(e){var n=e.theme;return e.active?n.colors.active:n.colors.lightGrey})),Dn=O.default.div(Cn||(Cn=Object(v.a)(["\n  width: 20%;\n  height: 1px;\n  margin: 0 10px;\n  transition: all 0.3s ease;\n  background-color: ",";\n"])),(function(e){var n=e.theme,t=e.active;return"".concat(t?n.colors.active:n.colors.lightGrey)})),Pn=function(e){var n=e.step;return Object(L.jsxs)(En,{children:[Object(L.jsx)(An,{active:!0,children:"1"}),Object(L.jsx)(Dn,{active:2===n||3===n}),Object(L.jsx)(An,{active:2===n||3===n,children:"2"}),Object(L.jsx)(Dn,{active:3===n}),Object(L.jsx)(An,{active:3===n,children:"3"})]})},In=p.a.createContext();function Un(){return Object(h.useContext)(In)}function Ln(e){var n=e.children,t=Object(h.useState)(""),r=Object(T.a)(t,2),i=r[0],c=r[1],o=Object(h.useState)([]),a=Object(T.a)(o,2),s=a[0],l=a[1],u=Object(h.useState)([]),d=Object(T.a)(u,2),j=d[0],f={trainingName:i,daysNum:s,setTrainingName:c,setDaysNum:l,setDaysName:d[1],daysName:j};return Object(L.jsx)(In.Provider,{value:f,children:n})}var Bn,_n,Mn,Rn,Zn=O.default.div(Tn||(Tn=Object(v.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  position: absolute;\n  margin-bottom: 10px;\n  bottom: 0;\n"]))),Jn=function(e){var n=e.step,t=e.nextStep,r=Un().setTrainingName;if(1!==n)return null;return Object(L.jsxs)(J,{onSubmit:function(e){r(e.trainingName),t()},height:"80%",children:[Object(L.jsx)(bn,{marginBottom:"50px",children:"Nazwij sw\xf3j trening"}),Object(L.jsx)(B,{line:!0,type:"text",name:"trainingName"}),Object(L.jsx)(Zn,{children:Object(L.jsx)(M,{type:"submit",children:"Dalej"})})]})},Vn=O.default.input.attrs((function(e){return{type:"radio"}}))(Bn||(Bn=Object(v.a)(["\n  position: relative;\n  \n  &::after {\n    content: '","';\n    display: block;\n    background-color: ",";\n    font-size: ",";\n    border-radius: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: ",";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 45px;\n    height: 45px;\n    transition: all 0.3s ease;\n  }\n  &:checked::after {\n    background-color: ",";\n    transform: scale(1.1) translate(-46%, -47%);\n  }\n"])),(function(e){return e.day}),(function(e){return e.theme.colors.mainColorLight}),(function(e){return e.theme.fontSize.l}),(function(e){return e.theme.colors.lightGrey}),(function(e){return e.theme.colors.active})),qn=function(e){var n=e.register,t=e.name,r=Object(I.a)(e,["register","name"]);return Object(L.jsx)(Vn,Object(P.a)(Object(P.a)({},n(t,{required:!0})),r))},Kn=(O.default.div(_n||(_n=Object(v.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 70px;\n"]))),O.default.div(Mn||(Mn=Object(v.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  position: absolute;\n  margin-bottom: 10px;\n  bottom: 0;\n"])))),Yn=function(e){var n=e.step,t=e.nextStep,r=e.previousStep,i=Un(),c=i.setDaysNum,o=i.daysNum;if(2!==n)return null;return console.log(o),Object(L.jsxs)(J,{onSubmit:function(e){for(var n=Number.parseInt(e.days),r=[],i=0;i<n;i++)r.push(i+1);c(r),t()},row:!0,height:"70%",children:[Object(L.jsx)(bn,{children:"Wybierz ilo\u015b\u0107 trening\xf3w w tygodniu"}),Object(L.jsx)(qn,{name:"days",value:1,day:"1"}),Object(L.jsx)(qn,{name:"days",value:2,day:"2"}),Object(L.jsx)(qn,{name:"days",value:3,day:"3"}),Object(L.jsx)(qn,{name:"days",value:4,day:"4"}),Object(L.jsx)(qn,{name:"days",value:5,day:"5"}),Object(L.jsx)(qn,{name:"days",value:6,day:"6"}),Object(L.jsx)(qn,{name:"days",value:7,day:"7"}),Object(L.jsxs)(Kn,{children:[Object(L.jsx)(M,{onClick:r,children:"Wr\xf3\u0107"}),Object(L.jsx)(M,{type:"submit",children:"Dalej"})]})]})},$n=O.default.div(Rn||(Rn=Object(v.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-evenly;\n  position: absolute;\n  margin-bottom: 10px;\n  bottom: 0;\n"]))),Hn=function(e){var n=e.step,t=e.previousStep,r=Un(),i=r.daysNum,c=r.trainingName,o=Ye().addTraining,a=te().currentUser,s=i.map((function(e){return Object(L.jsx)(B,{line:!0,name:"days[".concat(e-1,"]"),placeholder:"nazwij dzie\u0144 nr ".concat(e)},e)})),l=function(){var e=Object(C.a)(z.a.mark((function e(n){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.prev=1,e.next=4,o(a,c,n.days);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}();return 3!==n?null:Object(L.jsxs)(J,{height:"70%",onSubmit:l,children:[Object(L.jsx)(bn,{marginTop:"150px",marginBottom:"20px",children:"Nazwij poszczeg\xf3lne treningi"}),i&&s,Object(L.jsxs)($n,{children:[Object(L.jsx)(M,{onClick:t,children:"Wr\xf3\u0107"}),Object(L.jsx)(M,{type:"submit",active:!0,children:"Wy\u015blij"})]})]})},Qn=function(e){var n=Object(h.useState)(1),t=Object(T.a)(n,2),r=t[0],i=t[1],c=function(){r<3&&i((function(e){return e+1}))},o=function(){1!==r&&i((function(e){return e+-1}))};return Object(L.jsxs)(Wn,{children:[Object(L.jsx)(Pn,{step:r}),Object(L.jsxs)(Ln,{children:[Object(L.jsx)(Jn,{step:r,nextStep:c}),Object(L.jsx)(Yn,{step:r,nextStep:c,previousStep:o}),Object(L.jsx)(Hn,{step:r,previousStep:o})]})]})},Xn=function(e){var n=Object(h.useState)([]),t=Object(T.a)(n,2),r=t[0],i=t[1],c=Ye().getTrainings,o=te().currentUser,a=Object(h.useState)(!1),s=Object(T.a)(a,2),l=s[0],u=s[1],d=r.map((function(e){return Object(L.jsx)(xn,{to:"".concat(Y,"/").concat(e.id),children:Object(L.jsx)(Gn,{children:e.id})},e.id)}));return Object(h.useEffect)((function(){var e=function(){var e=Object(C.a)(z.a.mark((function e(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c(o.uid,i);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){return e}}),[]),Object(L.jsxs)(Nn,{children:[r.length>0&&d,Object(L.jsx)(Gn,{onClick:function(){return u(!0)},children:"+ Dodaj trening"}),l&&Object(L.jsx)(Qn,{})]})};var et=function(){return Object(L.jsxs)(O.ThemeProvider,{theme:g,children:[Object(L.jsx)(w,{}),Object(L.jsx)(N.a,{children:Object(L.jsx)(re,{children:Object(L.jsx)($e,{children:Object(L.jsx)(k,{children:Object(L.jsxs)(ke.d,{children:[Object(L.jsx)(ke.b,{path:V,component:Ne}),Object(L.jsx)(ke.b,{path:q,component:Pe}),Object(L.jsx)(yn,{exact:!0,path:K,component:Le}),Object(L.jsx)(yn,{exact:!0,path:Y,component:Xn}),Object(L.jsx)(yn,{exact:!0,path:"".concat(Y,"/:id"),component:On}),Object(L.jsx)(yn,{exact:!0,path:"".concat($,"/:training/:day"),component:vn})]})})})})})]})},nt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function tt(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var rt=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,59)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),r(e),i(e),c(e),o(e)}))};x.a.render(Object(L.jsx)(p.a.StrictMode,{children:Object(L.jsx)(et,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Gym_App",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/Gym_App","/service-worker.js");nt?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):tt(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):tt(n,e)}))}}(),rt()}},[[58,1,2]]]);
//# sourceMappingURL=main.58bf7982.chunk.js.map