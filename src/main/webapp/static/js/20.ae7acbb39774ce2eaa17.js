webpackJsonp([20,68],{"9ej3":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("K+sb"),r={name:"library",components:{libTree:t("h3aX").default},data:function(){return{librariesList:[],listLoading:!1,ifShowTree:!1}},methods:{getLibraryList:function(){var n=this;this.listLoading=!0,Object(i.d)().then(function(e){0===e.data.code&&(n.librariesList=e.data.data),n.listLoading=!1})},selectLibrary:function(n){this.$router.push({path:"/sublibrary",name:"subLibrary",params:{id:n.id,name:n.type}})},showTree:function(){this.ifShowTree=!0},hideTree:function(){this.ifShowTree=!1}},created:function(){this.getLibraryList()}},a={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"lib-cont"},[t("div",{directives:[{name:"loading",rawName:"v-loading",value:n.listLoading,expression:"listLoading"}],staticClass:"library-container"},n._l(n.librariesList,function(e){return t("div",{staticClass:"library-item",on:{dblclick:function(t){t.preventDefault(),t.stopPropagation(),n.selectLibrary(e)}}},[t("span",{staticClass:"library-icon"},[t("svg-icon",{attrs:{"icon-class":e.type}})],1),n._v(" "),t("span",{staticClass:"library-name"},[n._v(n._s(e.type))])])})),n._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:n.ifShowTree,expression:"ifShowTree"}],staticClass:"tree-container"},[t("libTree"),n._v(" "),t("div",{staticClass:"tree-bar"},[t("span",{staticClass:"icon",on:{click:n.hideTree}},[t("svg-icon",{attrs:{"icon-class":"collapse"}})],1)])],1),n._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!n.ifShowTree,expression:"!ifShowTree"}],staticClass:"hide-tree-bar"},[t("span",{staticClass:"icon",on:{click:n.showTree}},[t("svg-icon",{attrs:{"icon-class":"expand"}})],1)])])},staticRenderFns:[]};var s=t("VU/8")(r,a,!1,function(n){t("cuwH")},"data-v-0d6c31f0",null);e.default=s.exports},cuwH:function(n,e,t){var i=t("cwNW");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("33c56a34",i,!0)},cwNW:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,'\n@charset "UTF-8";\n.lib-cont[data-v-0d6c31f0] {\n  position: absolute;\n  top: 60px;\n  bottom: 0;\n  width: 100%;\n}\n.library-container[data-v-0d6c31f0] {\n  padding: 20px;\n  text-align: center;\n  position: relative;\n  top: 35%;\n  margin-top: -100px;\n  /*position: absolute;\n  top: 35%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: -380px;*/\n  -moz-user-select: none;\n  /*火狐*/\n  -webkit-user-select: none;\n  /*webkit浏览器*/\n  -ms-user-select: none;\n  /*IE10*/\n  user-select: none;\n}\n.library-container .library-item[data-v-0d6c31f0] {\n    display: inline-block;\n    width: 180px;\n    padding: 20px;\n    text-align: center;\n    cursor: pointer;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    -o-transition: all 0.3s;\n}\n.library-container .library-item[data-v-0d6c31f0]:hover {\n      -webkit-transform: scale(1.3);\n      /*1.1放大值*/\n      -moz-transform: scale(1.3);\n      -o-transform: scale(1.3);\n      -ms-transform: scale(1.3);\n}\n.library-container .library-item .library-icon[data-v-0d6c31f0] {\n      font-size: 100px;\n}\n.library-container .library-item .library-name[data-v-0d6c31f0] {\n      display: block;\n      margin-top: 10px;\n}\n.tree-container[data-v-0d6c31f0] {\n  width: 300px;\n  height: 600px;\n  overflow-y: scroll;\n  position: absolute;\n  left: 0;\n  top: 200px;\n  z-index: 10000;\n  border-radius: 10px;\n  padding: 10px;\n  margin-left: -10px;\n  border: 1px solid #effdfc;\n  background: #4be8dd;\n  -ms-overflow-style: none;\n  /*火狐下隐藏滚动条*/\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n.tree-container[data-v-0d6c31f0]::-webkit-scrollbar {\n  width: 0px;\n}\n.tree-bar[data-v-0d6c31f0] {\n  height: 40px;\n  width: 18px;\n  margin-top: -20px;\n  position: absolute;\n  top: 50%;\n  right: 2px;\n}\n.tree-bar .icon[data-v-0d6c31f0] {\n    cursor: pointer;\n    font-size: 40px;\n    position: relative;\n    right: 10px;\n}\n.hide-tree-bar[data-v-0d6c31f0] {\n  position: absolute;\n  top: 470px;\n}\n.hide-tree-bar .icon[data-v-0d6c31f0] {\n    font-size: 40px;\n    cursor: pointer;\n    position: relative;\n    left: -10px;\n}\n',""])},"d/Iw":function(n,e,t){var i=t("vD1F");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t("rjj0")("e20aa47c",i,!0)},h3aX:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t("rV10"),r={name:"libraryTree",data:function(){return{treeList:[],defaultProps:{children:"children",label:"name"},searchQuery:""}},methods:{getTreeList:function(){var n=this;Object(i.j)().then(function(e){0===e.data.code&&(n.treeList=e.data.data,n.treeList.forEach(function(n){n.name=n.library.type,n.icon="library",n.sublibraryLibraries.forEach(function(n){n.icon="sublib",n.name=n.sublibraryLibrary.type,n.children=n.sublibraryLibraryFiles}),n.children=n.sublibraryLibraries}))})},filterNode:function(n,e){return!n||-1!==e.name.indexOf(n)},rightClick:function(n,e,t,i){console.log(t),t.data.sublibraryLibraryFiles&&this.$router.push({path:"/sublibFiles",name:"subLibFiles",params:{id:t.data.sublibraryLibrary.id},query:{name:t.data.sublibraryLibrary.type}})},renderContent:function(n,e){var t=e.node,i=e.data;e.store;return i.icon?n("span",null,[n("svg-icon",{attrs:{"icon-class":i.icon},style:"margin-right:6px;font-size:18px;"},[]),n("span",{style:"color:#555;font-size:12px;"},[t.label])]):n("span",null,[n("svg-icon",{attrs:{"icon-class":"documentation"},style:"margin-right:6px;font-size:18px;color:#409EFF;"},[]),n("span",{style:"color:#555;font-size:12px;"},[t.label])])}},created:function(){this.getTreeList()},watch:{searchQuery:function(n){this.$refs.tree.filter(n)}}},a={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("el-input",{staticStyle:{width:"260px",margin:"0 0 20px 10px"},model:{value:n.searchQuery,callback:function(e){n.searchQuery=e},expression:"searchQuery"}}),n._v(" "),t("el-tree",{ref:"tree",staticClass:"filter-tree",attrs:{data:n.treeList,props:n.defaultProps,"default-expand-all":!1,"render-content":n.renderContent,"filter-node-method":n.filterNode},on:{"node-contextmenu":n.rightClick}})],1)},staticRenderFns:[]};var s=t("VU/8")(r,a,!1,function(n){t("d/Iw")},"data-v-03b74715",null);e.default=s.exports},vD1F:function(n,e,t){(n.exports=t("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});