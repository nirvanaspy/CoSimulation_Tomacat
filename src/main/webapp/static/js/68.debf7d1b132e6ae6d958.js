webpackJsonp([68],{"d/Iw":function(n,e,r){var t=r("vD1F");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);r("rjj0")("e20aa47c",t,!0)},h3aX:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=r("rV10"),a={name:"libraryTree",data:function(){return{treeList:[],defaultProps:{children:"children",label:"name"},searchQuery:""}},methods:{getTreeList:function(){var n=this;Object(t.j)().then(function(e){0===e.data.code&&(n.treeList=e.data.data,n.treeList.forEach(function(n){n.name=n.library.type,n.icon="library",n.sublibraryLibraries.forEach(function(n){n.icon="sublib",n.name=n.sublibraryLibrary.type,n.children=n.sublibraryLibraryFiles}),n.children=n.sublibraryLibraries}))})},filterNode:function(n,e){return!n||-1!==e.name.indexOf(n)},rightClick:function(n,e,r,t){console.log(r),r.data.sublibraryLibraryFiles&&this.$router.push({path:"/sublibFiles",name:"subLibFiles",params:{id:r.data.sublibraryLibrary.id},query:{name:r.data.sublibraryLibrary.type}})},renderContent:function(n,e){var r=e.node,t=e.data;e.store;return t.icon?n("span",null,[n("svg-icon",{attrs:{"icon-class":t.icon},style:"margin-right:6px;font-size:18px;"},[]),n("span",{style:"color:#555;font-size:12px;"},[r.label])]):n("span",null,[n("svg-icon",{attrs:{"icon-class":"documentation"},style:"margin-right:6px;font-size:18px;color:#409EFF;"},[]),n("span",{style:"color:#555;font-size:12px;"},[r.label])])}},created:function(){this.getTreeList()},watch:{searchQuery:function(n){this.$refs.tree.filter(n)}}},i={render:function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",[r("el-input",{staticStyle:{width:"260px",margin:"0 0 20px 10px"},model:{value:n.searchQuery,callback:function(e){n.searchQuery=e},expression:"searchQuery"}}),n._v(" "),r("el-tree",{ref:"tree",staticClass:"filter-tree",attrs:{data:n.treeList,props:n.defaultProps,"default-expand-all":!1,"render-content":n.renderContent,"filter-node-method":n.filterNode},on:{"node-contextmenu":n.rightClick}})],1)},staticRenderFns:[]};var s=r("VU/8")(a,i,!1,function(n){r("d/Iw")},"data-v-03b74715",null);e.default=s.exports},vD1F:function(n,e,r){(n.exports=r("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});