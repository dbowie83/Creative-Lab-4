(function(t){function e(e){for(var r,s,c=e[0],o=e[1],l=e[2],d=0,p=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"393e":function(t,e,n){"use strict";var r=n("ccec"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:" flex flex-col h-screen justify-between text-center"},[n("div",[n("nav",{staticClass:"navbar navbar-expand-lg  bg-dark"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("h1",{staticClass:"text-white"},[t._v("Social Media Site")])]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[n("ul",{staticClass:"navbar-nav ml-auto text-white"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/admin"}},[n("h2",[t._v("New Post")])])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/OldPosts"}},[n("h2",[t._v("Old Posts")])])],1)])])],1),n("div",{staticClass:"content"},[n("router-view")],1)]),t._m(1)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer bg-dark"},[n("a",{attrs:{href:"https://github.com/dbowie83/Creative-Lab-4"}},[t._v("View on GitHub")])])}],s=(n("034f"),n("2877")),c={},o=Object(s["a"])(c,a,i,!1,null,null,null),l=o.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("section",{staticClass:"image-gallery"},t._l(t.items,(function(e){return n("div",{key:e.id,staticClass:"image rounded-lg bg-blue-200 p-2 shadow-lg"},[n("img",{attrs:{src:e.path}}),n("h2",{staticClass:"p-3"},[t._v(t._s(e.title))])])})),0)])},p=[],f=(n("96cf"),n("1da1")),m=n("bc3a"),v=n.n(m),h={name:"Home",data:function(){return{items:[]}},created:function(){this.getItems()},methods:{getItems:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/items");case 3:return n=e.sent,t.items=n.data,e.abrupt("return",!0);case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},g=h,b=(n("393e"),Object(s["a"])(g,d,p,!1,null,"3fbb771a",null)),w=b.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin"},[n("div",[n("div",{staticClass:"text-center form"},[n("h1",{staticClass:"text-2xl"},[t._v(" Make new post ")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"border-2 border-gray-600 shadow-lg rounded-xl",attrs:{id:"",name:"",rows:"7",cols:"50",placeholder:"Write something amazing"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),n("br"),n("input",{attrs:{type:"file",name:"photo"},on:{change:t.fileChanged}}),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.upload}},[t._v("Post")])])]),n("div",{staticClass:"flex justify-center mt-4"},[t.addItem?n("div",{staticClass:"upload image text-center rounded-lg bg-blue-200 p-2 shadow-lg",attrs:{id:"fixedWidth"}},[n("img",{attrs:{src:t.addItem.path}}),n("h2",{staticClass:"p-3 text-center"},[t._v(t._s(t.addItem.title))])]):t._e()])])},C=[],_=(n("4de4"),n("b0c0"),n("2ca0"),{name:"Admin",data:function(){return{title:"",file:null,description:"",addItem:null,items:[],findTitle:"",findItem:null}},created:function(){this.getItems()},methods:{fileChanged:function(t){this.file=t.target.files[0]},upload:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=new FormData,n.append("photo",t.file,t.file.name),e.next=5,v.a.post("/api/photos",n);case 5:return r=e.sent,e.next=8,v.a.post("/api/items",{title:t.title,path:r.data.path});case 8:a=e.sent,t.addItem=a.data,e.next=14;break;case 12:e.prev=12,e.t0=e["catch"](0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})))()},getItems:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/items");case 3:return n=e.sent,t.items=n.data,e.abrupt("return",!0);case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()},selectItem:function(t){this.findTitle="",this.findItem=t},deleteItem:function(t){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.delete("/api/items/"+t._id);case 3:return e.findItem=null,e.getItems(),n.abrupt("return",!0);case 8:n.prev=8,n.t0=n["catch"](0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})))()},editItem:function(t){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.put("/api/items/"+t._id,{title:e.findItem.title});case 3:return e.findItem=null,e.getItems(),n.abrupt("return",!0);case 8:n.prev=8,n.t0=n["catch"](0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})))()}},computed:{suggestions:function(){var t=this,e=this.items.filter((function(e){return e.title.toLowerCase().startsWith(t.findTitle.toLowerCase())}));return e.sort((function(t,e){return t.title>e.title}))}}}),I=_,y=(n("61aa"),Object(s["a"])(I,x,C,!1,null,"38fc5bee",null)),k=y.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"admin"},[n("h1",{staticClass:"text-2xl"},[t._v(" Old Posts ")]),t._m(0),n("div",{staticClass:"edit"},[n("div",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.findTitle,expression:"findTitle"}],staticClass:"border-2 border-black rounded-full flex justify-self-center",attrs:{placeholder:"Search"},domProps:{value:t.findTitle},on:{input:function(e){e.target.composing||(t.findTitle=e.target.value)}}}),t.suggestions.length>0?n("div",{staticClass:"suggestions"},t._l(t.suggestions,(function(e){return n("div",{key:e.id,staticClass:"suggestion",on:{click:function(n){return t.selectItem(e)}}},[t._v(t._s(e.title)+" ")])})),0):t._e()]),t.findItem?n("div",{staticClass:"upload"},[n("img",{attrs:{src:t.findItem.path}}),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.findItem.title,expression:"findItem.title"}],staticClass:"border-2 border-gray-600 shadow-lg rounded-xl",attrs:{id:"",name:"",rows:"7",cols:"50"},domProps:{value:t.findItem.title},on:{input:function(e){e.target.composing||t.$set(t.findItem,"title",e.target.value)}}}),t.findItem?n("div",{staticClass:"actions"},[n("button",{staticClass:"btn btn-primary m-2",on:{click:function(e){return t.editItem(t.findItem)}}},[t._v("Edit")]),n("button",{staticClass:"btn btn-dark m-2",on:{click:function(e){return t.deleteItem(t.findItem)}}},[t._v("Delete")])]):t._e()]):t._e()])])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("h2",{staticClass:"text-xl text-center mt-3"},[t._v("Select an old post to edit/delete it")])])}],P={name:"OldPosts",data:function(){return{title:"",file:null,description:"",addItem:null,items:[],findTitle:"",findItem:null}},created:function(){this.getItems()},methods:{fileChanged:function(t){this.file=t.target.files[0]},upload:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=new FormData,n.append("photo",t.file,t.file.name),e.next=5,v.a.post("/api/photos",n);case 5:return r=e.sent,e.next=8,v.a.post("/api/items",{title:t.title,path:r.data.path});case 8:a=e.sent,t.addItem=a.data,e.next=14;break;case 12:e.prev=12,e.t0=e["catch"](0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})))()},getItems:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/api/items");case 3:return n=e.sent,t.items=n.data,e.abrupt("return",!0);case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()},selectItem:function(t){this.findTitle="",this.findItem=t},deleteItem:function(t){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.delete("/api/items/"+t._id);case 3:return e.findItem=null,e.getItems(),n.abrupt("return",!0);case 8:n.prev=8,n.t0=n["catch"](0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})))()},editItem:function(t){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v.a.put("/api/items/"+t._id,{title:e.findItem.title});case 3:return e.findItem=null,e.getItems(),n.abrupt("return",!0);case 8:n.prev=8,n.t0=n["catch"](0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})))()}},computed:{suggestions:function(){var t=this,e=this.items.filter((function(e){return e.title.toLowerCase().startsWith(t.findTitle.toLowerCase())}));return e.sort((function(t,e){return t.title>e.title}))}}},R=P,T=(n("fc4b"),Object(s["a"])(R,O,j,!1,null,"c5c82222",null)),S=T.exports;r["a"].use(u["a"]);var $=[{path:"/",name:"home",component:w},{path:"/admin",name:"admin",component:k},{path:"/OldPosts",name:"OldPosts",component:S}],E=new u["a"]({mode:"history",base:"/",routes:$}),M=E;r["a"].config.productionTip=!1,new r["a"]({router:M,render:function(t){return t(l)}}).$mount("#app")},"61aa":function(t,e,n){"use strict";var r=n("e8b7"),a=n.n(r);a.a},"85ec":function(t,e,n){},ccec:function(t,e,n){},e8b7:function(t,e,n){},fc4b:function(t,e,n){"use strict";var r=n("fc86"),a=n.n(r);a.a},fc86:function(t,e,n){}});
//# sourceMappingURL=app.09e878d6.js.map