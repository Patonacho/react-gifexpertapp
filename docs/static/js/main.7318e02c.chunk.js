(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),u=(a(14),a(1)),l=a(8),m=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],m=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i&&t((function(e){return[i].concat(Object(l.a)(e))})),m("")}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){m(e.target.value)}}))},o=a(4),s=a.n(o),d=a(7),f=function(){var e=Object(d.a)(s.a.mark((function e(t){var a,n,r,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.giphy.com/v1/gifs/search?api_key=gy1xHmi2zaLuvttQLVbx4BmxjKD5U1aN&q=".concat(encodeURI(t),"&limit=10&offset=0&rating=g&lang=es"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){e.id;var t=e.title,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null,t))},g=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){f(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,i=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"card-grid animate__animated animate__fadeIn"}," ",t," "),i&&r.a.createElement("p",{className:"card-grid animate__animated animate__zoomIn "},"Loading ..."),r.a.createElement("div",{className:"card-grid animate__animated animate__fadeIn"},c.map((function(e){return r.a.createElement(p,Object.assign({key:e.id},e))}))))},E=function(){var e=Object(n.useState)(["One Push"]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null," GifExpertApp "),r.a.createElement(m,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(g,{key:e,category:e})}))))};i.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.7318e02c.chunk.js.map