(function(t){function a(a){for(var r,i,c=a[0],o=a[1],l=a[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(a);while(p.length)p.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],r=!0,c=1;c<e.length;c++){var o=e[c];0!==n[o]&&(r=!1)}r&&(s.splice(a--,1),t=i(i.s=e[0]))}return t}var r={},n={app:0},s=[];function i(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)i.d(e,r,function(a){return t[a]}.bind(null,r));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/npm_search/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=a,c=c.slice();for(var l=0;l<c.length;l++)a(c[l]);var u=o;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper"},[t.loading?e("div",{staticClass:"pre-loader"},[e("b-spinner",{staticClass:"loader-spinner",attrs:{label:"Загрузка..."}})],1):t._e(),e("div",{staticClass:"container"},[e("b-navbar",{staticClass:"navbar",attrs:{type:"dark"}},[e("b-navbar-brand",{attrs:{href:"#"}},[e("img",{staticClass:"logo",attrs:{src:"https://cdn.nethernite.com/assets/landing/Logo.png",alt:"logo"}})]),e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-form",{on:{submit:t.onSubmit}},[e("b-form-input",{staticClass:"mr-sm-2 input__search",attrs:{size:"sm",placeholder:"Search"},model:{value:t.query,callback:function(a){t.query=a},expression:"query"}}),e("b-button",{staticClass:"button ",attrs:{size:"sm",type:"submit"}},[t._v("Search")])],1)],1)],1),e("div",{staticClass:"row"},[t.list.length?t._l(t.list,(function(a,r){return e("div",{key:r,staticClass:"col-sm-12 col-md-12 col-lg-6 card__item"},[e("b-card",{staticClass:"mb-3 card__icon",attrs:{"img-src":"https://cdn.nethernite.com/assets/landing/get-gift__layer--first_bg.png","img-alt":"Card image","img-left":""},on:{click:function(e){return t.selectPackage(a)}}},[e("b-card-text",{staticClass:"card__name"},[t._v(" "+t._s(a.name)+" ")]),e("b-card-text",{staticClass:"card__author"},[t._v(" "+t._s(a.author)+" ")]),e("b-card-text",{staticClass:"card__version"},[t._v(" "+t._s(a.version)+" ")])],1)],1)})):e("div",{staticClass:"col-12"},[e("span",{staticClass:"card__warning"},[t._v("Ничего не найдено")])])],2),t.list.length&&t.pages>1?e("div",{staticClass:"wrapper--pagination"},[e("b-pagination",{attrs:{value:t.page,"total-rows":t.total,"per-page":t.limit,pills:"",size:"sm"},on:{input:t.onPaginate}})],1):t._e()],1),e("div",{staticClass:"footer"},[e("span",{staticClass:"footer--content"},[t._v("© "+t._s(t.currentYear))]),e("span",{staticClass:"footer--content"},[t._v("Ilya Zhuravlov")]),t._m(0)]),e("b-modal",{staticClass:"modal-content",attrs:{id:"modal-scrollable",visible:!!t.current,title:t.currentTitle,scrollable:"","hide-footer":""},on:{hide:t.onHideModal}},[t.current?e("div",{staticClass:"modal__content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"package__status"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm package__status--description"},[e("h3",{staticClass:"title"},[t._v("author")]),t._v(" "+t._s(t.current.author)+" ")]),e("div",{staticClass:"col-sm package__status--description"},[e("h3",{staticClass:"title"},[t._v("version")]),t._v(" "+t._s(t.current.version)+" ")]),e("div",{staticClass:"col-sm package__status--description"},[e("h3",{staticClass:"title"},[t._v("license")]),t._v(" "+t._s(t.current.license)+" ")])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm package__status--description"},[e("h3",{staticClass:"title"},[t._v("homepage")]),e("a",{attrs:{href:t.current.homepage,target:"_blank"}},[t._v(t._s(t.current.homepage))])]),e("div",{staticClass:"col-sm package__status--description"},[e("h3",{staticClass:"title"},[t._v("repository")]),e("a",{attrs:{href:t.current.repository,target:"_blank"}},[t._v(t._s(t.current.repository))])])])])]),t.current.readme?e("div",{staticClass:"package__readme"},[e("h3",{staticClass:"title"},[t._v("Readme")]),e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.current.readme)}})]):t._e(),e("div",{staticClass:"package__tags"},[e("h3",{staticClass:"title"},[t._v("Tags")]),e("span",[t._v(t._s(t.current.keywords))])])]):t._e()])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"footer--content"},[e("a",{attrs:{href:"https://github.com/ichiro18",target:"_blank"}},[t._v("github")])])}],i=(e("b0c0"),e("d3b7"),e("ac1f"),e("841c"),e("5530")),c=e("2f62"),o={name:"App",data:function(){return{limit:10,page:1,pages:0,total:0,query:"",loading:!1}},computed:Object(i["a"])(Object(i["a"])({},Object(c["b"])({list:"package/list",current:"package/current"})),{},{currentTitle:function(){return this.current&&this.current.name?this.current.name:""},currentYear:function(){return(new Date).getFullYear()}}),methods:{search:function(t){var a=this;this.loading=!0,this.$store.dispatch("package/search",{query:t,page:this.page-1,limit:this.limit}).then((function(t){a.page=t.page+1,a.pages=t.pages,a.total=t.total})).catch((function(t){return console.error(t)})).finally((function(){a.loading=!1}))},onSubmit:function(t){t.preventDefault&&t.preventDefault(),this.search(this.query)},onPaginate:function(t){this.page=t,this.search(this.query)},onHideModal:function(){this.$store.commit("package/setCurrent",null)},selectPackage:function(t){var a=this;this.loading=!0,this.$store.dispatch("package/read",{name:t.name}).then((function(t){console.log(t)})).catch((function(t){return console.error(t)})).finally((function(){a.loading=!1}))}}},l=o,u=e("2877"),d=Object(u["a"])(l,n,s,!1,null,null,null),p=d.exports,m=e("5f5b"),h=(e("e1ea"),e("a4d3"),e("e01a"),e("99af"),e("a15b"),e("d81d"),e("bc3a")),f=e.n(h),g=e("d4cd"),v=e.n(g),_={search:function(t,a){var e=t.commit,r=a.query,n=a.page,s=a.limit;return new Promise((function(t,a){f.a.get("https://registry.npmjs.com/-/v1/search?text=".concat(r,"&size=").concat(s,"&from=").concat(n*s)).then((function(a){if(200===a.status){var i=a.data.total,c=Math.ceil(i/s),o=a.data.objects.map((function(t){var a={name:t.package.name,author:t.package.author&&t.package.author.name?t.package.author.name:"",link:t.package.links.homepage||t.package.links.npm,version:t.package.version,description:t.package.description};if(!a.author&&t.package.maintainers.length){var e=t.package.maintainers.map((function(t){return t.username}));a.author=e.join(", ")}return a.author||(a.author="Неизвестно"),a})),l={query:r,total:i,page:n,pages:c,limit:s,items:o};e("setList",l.items),t(l)}})).catch((function(t){return a(t)}))}))},read:function(t,a){var e=t.commit;return new Promise((function(t,r){f.a.get("https://api.npms.io/v2/package/".concat(a.name)).then((function(a){if(200===a.status){if(a.data.collected&&a.data.collected.metadata){var n={name:a.data.collected.metadata.name,author:a.data.collected.metadata.author&&a.data.collected.metadata.author.name?a.data.collected.metadata.author.name:"",version:a.data.collected.metadata.version,license:a.data.collected.metadata.license,homepage:a.data.collected.metadata.links.homepage,npm:a.data.collected.metadata.links.npm,readme:a.data.collected.metadata.readme,repository:a.data.collected.metadata.links.repository,keywords:a.data.collected.metadata.keywords};if(n.keywords&&n.keywords.length&&(n.keywords=n.keywords.join(", ")),n.readme){var s=new v.a;n.readme=s.render(n.readme)}e("setCurrent",n),t(n)}}else r(a)})).catch((function(t){return r(t)}))}))}},b={list:function(t){return t.list},current:function(t){return t.current}},k={list:[],current:null},C={setList:function(t,a){t.list=a},setCurrent:function(t,a){t.current=a}},y={namespaced:!0,actions:_,getters:b,mutations:C,state:k};r["default"].use(c["a"]);var w=new c["a"].Store({strict:!0,modules:{package:y}}),j=w;r["default"].config.productionTip=!1,r["default"].use(m["a"]),new r["default"]({store:j,render:function(t){return t(p)}}).$mount("#app")},e1ea:function(t,a,e){}});
//# sourceMappingURL=app.c12ef54a.js.map