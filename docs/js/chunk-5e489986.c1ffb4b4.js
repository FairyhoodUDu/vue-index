(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e489986"],{2908:function(n,t,e){},"4ffa":function(n,t,e){"use strict";var a=e("2908"),c=e.n(a);c.a},"5adf":function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"componentListWrap"},n._l(n.components,function(t){return e("a-card",{key:t.name,attrs:{title:t.name}},n._l(t.child,function(t){return e("a-card-grid",{key:t.name,staticClass:"componentListItem",nativeOn:{click:function(e){return n.handleAddComponent(t)}}},[n._v("\n        "+n._s(t.name)+"\n      ")])}),1)}),1)},c=[],o=[{name:"布局组件",child:[{name:"区块容器",component:"c-area-wrap",container:!0}]},{name:"功能组件",child:[{name:"文章列表",component:"c-art-list"}]},{name:"辅助组件",child:[{name:"辅助空白",component:"c-white-space"}]}],i={name:"ComponentListWrap",props:{pushMsg:{type:Function}},computed:{components:function(){return o}},methods:{handleAddComponent:function(n){var t=n.component,e=n.container,a={component:t};e&&(a.child=[]),this.pushMsg({type:"addCpt",data:a})}}},s=i,r=(e("4ffa"),e("2877")),p=Object(r["a"])(s,a,c,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-5e489986.c1ffb4b4.js.map