(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,function(e,a,t){e.exports={messageContainer:"Message_messageContainer__2F9MN",messageAva:"Message_messageAva__1IeGF",messageTextContainer:"Message_messageTextContainer__M9Tcr",messageBox:"Message_messageBox__3jZVO",message:"Message_message__iDM9m",name:"Message_name__3tztj",time:"Message_time__1Sj1L",timeContainer:"Message_timeContainer__2QJNp",cornerBox:"Message_cornerBox__Mpozv",cornerRound:"Message_cornerRound__1BMwB",corner:"Message_corner__3eH7a"}},,,function(e,a,t){e.exports={navLinks:"style_navLinks__BJoqO",navContainer:"style_navContainer__3NL-H",clicker:"style_clicker__2cy3y",hidden:"style_hidden__2p-P7"}},,function(e,a,t){e.exports={container:"Greeting_container__epMah",errorContainer:"Greeting_errorContainer__1Ni6o",totalUsers:"Greeting_totalUsers__3KxIU",someClass:"Greeting_someClass__3XCwA",error:"Greeting_error__2Itgr"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3YQCp",errorInput:"SuperInputText_errorInput__2IP-J",errorContainer:"SuperInputText_errorContainer__10jxq",error:"SuperInputText_error__17AP0"}},function(e,a,t){e.exports={default:"SuperButton_default__2CKmq",commonStyles:"SuperButton_commonStyles__3vurT",red:"SuperButton_red__cpmeC"}},function(e,a,t){e.exports={blue:"HW4_blue__BYMDz",column:"HW4_column__2qNbx",testSpanError:"HW4_testSpanError__3NjjB"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2YA0I",spanClassName:"SuperCheckbox_spanClassName__1lTnm"}},,,function(e,a,t){e.exports={App:"App_App__3gqlQ"}},function(e,a,t){e.exports={someClass:"Affairs_someClass__2VZcV",affairButton:"Affairs_affairButton__3uXn3"}},function(e,a,t){e.exports={myClass:"h6_myClass__3ISi_"}},,function(e,a,t){e.exports=t(27)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),o=(t(26),t(17)),s=t.n(o),i=t(6),u=t(1),m=t(4),d=t.n(m);var E=function(e){return r.a.createElement("div",{className:d.a.messageContainer},r.a.createElement("div",{className:d.a.messageAva},r.a.createElement("img",{src:e.avatar,alt:"avatar"})),r.a.createElement("div",{className:d.a.messageTextContainer},r.a.createElement("div",{className:d.a.cornerBox},r.a.createElement("div",{className:d.a.cornerRound}),r.a.createElement("div",{className:d.a.corner})),r.a.createElement("div",{className:d.a.messageBox},r.a.createElement("div",{className:d.a.name},e.name),r.a.createElement("div",{className:d.a.message},e.message)),r.a.createElement("div",{className:d.a.timeContainer},r.a.createElement("div",{className:d.a.time},e.time))))},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",v="William",p="Hi, what's up ! Do what you need what ever it takes with what you have!",f="22:00";var h=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(E,{avatar:_,name:v,message:p,time:f}),r.a.createElement("hr",null),r.a.createElement("hr",null))},g=t(2),C=t(18),b=t.n(C);var N=function(e){return r.a.createElement("div",null,"".concat(e.affair.name," ").concat(e.affair.priority),r.a.createElement("button",{onClick:function(){return a=e.affair._id,void e.deleteAffairCallback(a);var a},className:b.a.affairButton},"X"))};var k=function(e){var a=e.data.map((function(a){return r.a.createElement(N,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){return a="all",void e.setFilter(a);var a}},"All"),r.a.createElement("button",{onClick:function(){return a="high",void e.setFilter(a);var a}},"High"),r.a.createElement("button",{onClick:function(){return a="middle",void e.setFilter(a);var a}},"Middle"),r.a.createElement("button",{onClick:function(){return a="low",void e.setFilter(a);var a}},"Low"))},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var x=function(){var e=Object(n.useState)(y),a=Object(g.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(g.a)(c,2),s=o[0],i=o[1],u=function(e,a){return"all"===a?e:"low"===a?e.filter((function(e){return"low"===e.priority})):"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):void 0}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(k,{data:u,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=t(20),O=t(9),S=t.n(O),w=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?S.a.error:S.a.someClass;return r.a.createElement("div",{className:S.a.container},r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement("span",{className:S.a.errorContainer},l),r.a.createElement("button",{onClick:function(){return n(a)}},"add"),r.a.createElement("span",{className:S.a.totalUsers},c))},A=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(g.a)(l,2),o=c[0],s=c[1],i=Object(n.useState)(""),u=Object(g.a)(i,2),m=u[0],d=u[1],E=a.length;return r.a.createElement(w,{name:o,setNameCallback:function(e){s(e.currentTarget.value),d("")},addUser:function(e){""!==e.trim()?(alert("Hello ".concat(e.trim(),"!")),t(e),s("")):d("Enter your name please")},error:m,totalUsers:E})},B=t(29);var M=function(){var e=Object(n.useState)([]),a=Object(g.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(A,{users:t,addUserCallback:function(e){var a=[].concat(Object(j.a)(t),[{_id:Object(B.a)(),name:e}]);l(a)}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},I=t(5),T=t(11),J=t.n(T),P=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],F=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,s=e.spanClassName,i=Object(I.a)(e,P),u="".concat(J.a.error," ").concat(s||""),m=c?"".concat(J.a.errorInput," ").concat(o):"".concat(J.a.superInput," ").concat(o);return r.a.createElement("div",null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},i)),r.a.createElement("div",{className:J.a.errorContainer},c&&r.a.createElement("span",{className:u},c)))},U=t(13),H=t.n(U),L=t(12),W=t.n(L),G=["red","className"],q=function(e){var a=e.red,t=(e.className,Object(I.a)(e,G)),n="".concat(a?W.a.red:W.a.default," ").concat(W.a.commonStyles);return r.a.createElement("button",Object.assign({className:n},t))},D=t(14),K=t.n(D),R=["type","onChange","onChangeChecked","className","spanClassName","children"],X=function(e){e.type,e.onChange;var a=e.onChangeChecked,t=e.className,n=(e.spanClassName,e.children),l=Object(I.a)(e,R),c="".concat(K.a.checkbox," ").concat(t||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(!l.checked)},className:c},l)),n&&r.a.createElement("span",{className:K.a.spanClassName},n))};var Y=function(){var e=Object(n.useState)(""),a=Object(g.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(t),l(""))},s=Object(n.useState)(!1),i=Object(g.a)(s,2),u=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:H.a.column},r.a.createElement(F,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(F,{className:H.a.blue}),r.a.createElement(q,null,"default"),r.a.createElement(q,{red:!0,onClick:o},"delete "),r.a.createElement(q,{disabled:!0},"disabled"),r.a.createElement(X,{checked:u,onChangeChecked:function(){return m(!u)}},"some text "),r.a.createElement(X,{checked:u,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var z=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(x,null),r.a.createElement(M,null),r.a.createElement(Y,null))};var Q=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};var V=function(){return r.a.createElement("div",null,"Junior")};var Z=function(){return r.a.createElement("div",null,"JuniorPlus")},$="/pre-junior",ee="/junior",ae="/junior-plus";var te=function(){return r.a.createElement("div",null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",element:r.a.createElement(u.a,{to:$})}),r.a.createElement(u.b,{path:$,element:r.a.createElement(z,null)}),r.a.createElement(u.b,{path:ee,element:r.a.createElement(V,null)}),r.a.createElement(u.b,{path:ae,element:r.a.createElement(Z,null)}),"// add routes",r.a.createElement(u.b,{path:"/*",element:r.a.createElement(Q,null)})))},ne=t(7),re=t.n(ne);var le=function(){return r.a.createElement("div",{className:re.a.navContainer},r.a.createElement("nav",{className:re.a.hidden},r.a.createElement(i.b,{to:$,className:re.a.navLinks,style:function(e){return e.isActive?{color:"red"}:{color:"grey"}}},"Pre-Junior"),r.a.createElement(i.b,{to:ee,className:re.a.navLinks,style:function(e){return e.isActive?{color:"red"}:{color:"grey"}}},"Junior"),r.a.createElement(i.b,{to:ae,className:re.a.navLinks,style:function(e){return e.isActive?{color:"red"}:{color:"grey"}}},"Junior+"),r.a.createElement("div",{className:re.a.clicker},"x")))};var ce=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(le,null),r.a.createElement(te,null)))},oe=t(19),se=t.n(oe),ie=["autoFocus","onBlur","onEnter","spanProps"],ue=["children","onDoubleClick","className"],me=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(I.a)(e,ie),o=Object(n.useState)(!1),s=Object(g.a)(o,2),i=s[0],u=s[1],m=l||{},d=m.children,E=m.onDoubleClick,_=m.className,v=Object(I.a)(m,ue),p="".concat(se.a.myClass," ").concat(_);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(F,Object.assign({autoFocus:!0,onBlur:function(e){u(!1),a&&a(e)},onEnter:function(){u(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){u(!0),E&&E(e)},className:p},v),d||c.value))};function de(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function Ee(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}de("test",{x:"A",y:1});Ee("test",{x:"",y:0});var _e=function(){var e=Object(n.useState)(""),a=Object(g.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(me,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(q,{onClick:function(){de("editable-span-value",t)}},"save"),r.a.createElement(q,{onClick:function(){var e=Ee("editable-span-value","");l(e)}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ve=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(ce,null),r.a.createElement(_e,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.f00726c2.chunk.js.map