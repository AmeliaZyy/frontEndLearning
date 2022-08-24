(function(){"use strict";var t={5554:function(t,e,n){var o=n(6369),i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("Banner")],1),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-2 col-xs-offset-2"},[e("div",{staticClass:"list-group"},[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/about"}},[t._v("About")]),e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home"}},[t._v("Home")])],1)]),e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-body"},[e("router-view")],1)])])])])},r=[],s=function(){var t=this;t._self._c;return t._m(0)},l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-xs-offset-2 col-xs-8"},[e("div",{staticClass:"page-header"},[e("h2",[t._v("Vue Router Demo")])])])}],a={name:"Banner"},u=a,c=n(1001),f=(0,c.Z)(u,s,l,!1,null,null,null),v=f.exports,p={name:"App",components:{Banner:v},methods:{}},h=p,m=(0,c.Z)(h,i,r,!1,null,null,null),d=m.exports,_=n(2631),g=function(){var t=this,e=t._self._c;return e("h2",[t._v("我是About的内容")])},b=[],w={name:"About",beforeDestroy(){console.log("About组件要被销毁掉啦")},mounted(){console.log("The route of About",this.$route)},beforeRouteEnter(t,e,n){console.log("App---beforeRouteEnter"),console.log(e,t);const{isAuth:o}=t.meta;o?"zyy"===localStorage.getItem("username")?n():alert("无权限"):n()},beforeRouteLeave(t,e,n){console.log("App---beforeRouteLeave"),console.log(e,t),n()}},y=w,x=(0,c.Z)(y,g,b,!1,null,null,null),C=x.exports,k=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("我是Home的内容")]),e("div",[e("ul",{staticClass:"nav nav-tabs"},[e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",to:"/home/news"}},[t._v("News")])],1),e("li",[e("router-link",{staticClass:"list-group-item",attrs:{"active-class":"active",replace:"",to:{name:"xiaoxi"}}},[t._v("Message")])],1)]),e("keep-alive",{attrs:{include:"News"}},[e("router-view")],1)],1)])},Z=[],A={name:"Home",beforeDestroy(){console.log("Home组件要被销毁掉啦")},mounted(){console.log("我是Home组件，我出现了",this)}},O=A,j=(0,c.Z)(O,k,Z,!1,null,null,null),D=j.exports,N=function(){var t=this,e=t._self._c;return e("ul",[e("li",{style:{opacity:t.opacity}},[t._v("欢迎学习vue")]),t._m(0),t._m(1),t._m(2)])},H=[function(){var t=this,e=t._self._c;return e("li",[t._v("news001 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news002 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news003 "),e("input",{attrs:{type:"text"}})])}],P={name:"News",data(){return{opacity:1}},beforeDestroy(){console.log("News组件将要被销毁")},activated(){console.log("News组件被激活"),this.timer=setInterval((()=>{console.log("@"),this.opacity-=.01,this.opacity<=0&&(this.opacity=1)}),16)},deactivated(){console.log("News组件失活了"),clearInterval(this.timer)}},R=P,S=(0,c.Z)(R,N,H,!1,null,null,null),q=S.exports,L=function(){var t=this,e=t._self._c;return e("div",[e("ul",t._l(t.messageList,(function(n){return e("li",{key:n.id},[e("router-link",{attrs:{to:{name:"informations",query:{id:n.id,title:n.title}}}},[t._v(" "+t._s(n.title)+" ")]),e("button",{on:{click:function(e){return t.pushShow(n)}}},[t._v("push查看")]),e("button",{on:{click:function(e){return t.replaceShow(n)}}},[t._v("replace查看")])],1)})),0),e("hr"),e("router-view")],1)},M=[],T={name:"Message",data(){return{messageList:[{id:"001",title:"消息001"},{id:"002",title:"消息002"},{id:"003",title:"消息003"}]}},methods:{pushShow(t){this.$router.push({name:"informations",query:{id:t.id,title:t.title}})},replaceShow(t){this.$router.replace({name:"informations",query:{id:t.id,title:t.title}})}},beforeDestroy(){console.log("Message组件将要被销毁")}},B=T,E=(0,c.Z)(B,L,M,!1,null,null,null),I=E.exports,$=function(){var t=this,e=t._self._c;return e("ul",[e("li",[t._v("消息编号:"+t._s(t.id))]),e("li",[t._v("消息标题:"+t._s(t.title))])])},z=[],F={name:"Detail",props:["id","title"],mounted(){}},V=F,G=(0,c.Z)(V,$,z,!1,null,"690eacf9",null),J=G.exports;const K=new _.Z({mode:"hash",routes:[{name:"regard",path:"/about",component:C,meta:{isAuth:!0,title:"关于"}},{name:"homepage",path:"/home",component:D,children:[{path:"news",component:q,meta:{isAuth:!0,title:"新闻"}},{name:"xiaoxi",path:"message",component:I,children:[{name:"informations",path:"detail",component:J,props({query:{id:t,title:e}}){return{id:t,title:e}}}]}]}]});var Q=K;o.ZP.use(_.Z),o.ZP.config.productionTip=!1,new o.ZP({el:"#app",render:t=>t(d),router:Q})}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,r){if(!o){var s=1/0;for(c=0;c<t.length;c++){o=t[c][0],i=t[c][1],r=t[c][2];for(var l=!0,a=0;a<o.length;a++)(!1&r||s>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[a])}))?o.splice(a--,1):(l=!1,r<s&&(s=r));if(l){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[o,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,r,s=o[0],l=o[1],a=o[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(a)var c=a(n)}for(e&&e(o);u<s.length;u++)r=s[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},o=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5554)}));o=n.O(o)})();
//# sourceMappingURL=app.b3c6182f.js.map