(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,function(e,a,t){e.exports={messageContainer:"Message_messageContainer__2F9MN",messageAva:"Message_messageAva__1IeGF",messageTextContainer:"Message_messageTextContainer__M9Tcr",messageBox:"Message_messageBox__3jZVO",message:"Message_message__iDM9m",name:"Message_name__3tztj",time:"Message_time__1Sj1L",timeContainer:"Message_timeContainer__2QJNp",cornerBox:"Message_cornerBox__Mpozv",cornerRound:"Message_cornerRound__1BMwB",corner:"Message_corner__3eH7a"}},,,,function(e,a,t){e.exports={App:"App_App__3gqlQ"}},function(e,a,t){e.exports={someClass:"Affairs_someClass__2VZcV",affairButton:"Affairs_affairButton__3uXn3"}},function(e,a,t){e.exports=t(13)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(4),l=t.n(i),o=(t(12),t(5)),s=t.n(o),c=t(1),m=t.n(c);var u=function(e){return r.a.createElement("div",{className:m.a.messageContainer},r.a.createElement("div",{className:m.a.messageAva},r.a.createElement("img",{src:e.avatar,alt:"avatar"})),r.a.createElement("div",{className:m.a.messageTextContainer},r.a.createElement("div",{className:m.a.cornerBox},r.a.createElement("div",{className:m.a.cornerRound}),r.a.createElement("div",{className:m.a.corner})),r.a.createElement("div",{className:m.a.messageBox},r.a.createElement("div",{className:m.a.name},e.name),r.a.createElement("div",{className:m.a.message},e.message)),r.a.createElement("div",{className:m.a.timeContainer},r.a.createElement("div",{className:m.a.time},e.time))))},d="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="William",v="Hi, what's up ! Do what you need what ever it takes with what you have!",_="22:00";var g=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(u,{avatar:d,name:f,message:v,time:_}),r.a.createElement("hr",null),r.a.createElement("hr",null))},h=t(2),E=t(6),p=t.n(E);var w=function(e){return r.a.createElement("div",null,"".concat(e.affair.name," ").concat(e.affair.priority),r.a.createElement("button",{onClick:function(){return a=e.affair._id,void e.deleteAffairCallback(a);var a},className:p.a.affairButton},"X"))};var k=function(e){var a=e.data.map((function(a){return r.a.createElement(w,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){return a="all",void e.setFilter(a);var a}},"All"),r.a.createElement("button",{onClick:function(){return a="high",void e.setFilter(a);var a}},"High"),r.a.createElement("button",{onClick:function(){return a="middle",void e.setFilter(a);var a}},"Middle"),r.a.createElement("button",{onClick:function(){return a="low",void e.setFilter(a);var a}},"Low"))},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var M=function(){var e=Object(n.useState)(C),a=Object(h.a)(e,2),t=a[0],i=a[1],l=Object(n.useState)("all"),o=Object(h.a)(l,2),s=o[0],c=o[1],m=function(e,a){return"all"===a?e:"low"===a?e.filter((function(e){return"low"===e.priority})):"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):void 0}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(k,{data:m,setFilter:c,deleteAffairCallback:function(e){return i(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))};var A=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(g,null),r.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.48160933.chunk.js.map