webpackJsonp([39],{"1dE+":function(e,t,i){var o=i("81nH");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i("rjj0")("fb937c66",o,!0)},"81nH":function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"\n.hide[data-v-af0c023a] {\n  display: none;\n}\n",""])},nhhP:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("mvHQ"),r=i.n(o),n=i("pFYg"),a=i.n(n),s=i("GLLG"),l={name:"visio",props:{proId:{type:String,default:""},processNodes:{type:Array,default:[]},editable:{type:Boolean,default:!1}},data:function(){return{myDiagram:null,originValue:{class:"go.GraphLinksModel",linkFromPortIdProperty:"fromPort",linkToPortIdProperty:"toPort",nodeDataArray:[{figure:"subtask",key:-1,loc:"-60 130",size:"150 70",text:"结构体建模"},{figure:"subtask",key:-2,loc:"-60 440",size:"150 70",text:"装配仿真"},{figure:"subtask",key:-3,loc:"-60 240",size:"150 70",text:"结构仿真"},{figure:"subtask",key:-4,loc:"-60 340",size:"150 70",text:"力学仿真"},{figure:"subtask",key:-5,loc:"-60 540",size:"150 70",text:"电路仿真"}],linkDataArray:[{from:-1,to:-3,fromPort:"B",toPort:"T",points:[]},{from:-3,to:-4,fromPort:"B",toPort:"T",points:[]},{from:-4,to:-2,fromPort:"B",toPort:"T",points:[]},{from:-2,to:-5,fromPort:"B",toPort:"T",points:[]}]},originLink:[],processNodeList:[]}},methods:{init:function(){var e=this.go,t=e.GraphObject.make;function i(i,o,r,n){return t(e.Shape,"Circle",{fill:null,stroke:null,desiredSize:new e.Size(7,7),alignment:o,alignmentFocus:o,portId:i,fromSpot:o,toSpot:o,fromLinkable:r,toLinkable:n,cursor:"pointer"})}this.myDiagram=t(e.Diagram,"myDiagramDiv",{isReadOnly:!this.editable,grid:t(e.Panel,"Grid",t(e.Shape,"LineH",{stroke:"lightgray",strokeWidth:.5}),t(e.Shape,"LineH",{stroke:"gray",strokeWidth:.5,interval:10}),t(e.Shape,"LineV",{stroke:"lightgray",strokeWidth:.5}),t(e.Shape,"LineV",{stroke:"gray",strokeWidth:.5,interval:10})),InitialLayoutCompleted:function(e){e.diagram.nodes.each(function(e){!0===e.data.pass&&(e.deletable=!1,e.textEditable=!1)}),e.diagram.links.each(function(e){!0===e.data.pass&&(e.deletable=!1,e.textEditable=!1)})},"draggingTool.dragsLink":!0,"draggingTool.isGridSnapEnabled":!0,"linkingTool.portGravity":20,"relinkingTool.isUnconnectedLinkValid":!0,"relinkingTool.portGravity":20,"relinkingTool.fromHandleArchetype":t(e.Shape,"Diamond",{segmentIndex:0,cursor:"pointer",desiredSize:new e.Size(8,8),fill:"tomato",stroke:"darkred"}),"relinkingTool.toHandleArchetype":t(e.Shape,"Diamond",{segmentIndex:-1,cursor:"pointer",desiredSize:new e.Size(8,8),fill:"darkred",stroke:"tomato"}),"linkReshapingTool.handleArchetype":t(e.Shape,"Diamond",{desiredSize:new e.Size(7,7),fill:"lightblue",stroke:"deepskyblue"}),"rotatingTool.handleAngle":270,"rotatingTool.handleDistance":30,"rotatingTool.snapAngleMultiple":15,"rotatingTool.snapAngleEpsilon":15,"undoManager.isEnabled":!0});var o=t(e.Adornment,"Auto",t(e.Shape,{fill:null,stroke:"deepskyblue",strokeWidth:1.5,strokeDashArray:[4,2]}),t(e.Placeholder)),r=t(e.Adornment,"Spot",{locationSpot:e.Spot.Right},t(e.Placeholder),t(e.Shape,{alignment:e.Spot.TopLeft,cursor:"nw-resize",desiredSize:new e.Size(6,6),fill:"lightblue",stroke:"deepskyblue"}),t(e.Shape,{alignment:e.Spot.Top,cursor:"n-resize",desiredSize:new e.Size(6,6),fill:"lightblue",stroke:"deepskyblue"}),t(e.Shape,{alignment:e.Spot.TopRight,cursor:"ne-resize",desiredSize:new e.Size(6,6),fill:"lightblue",stroke:"deepskyblue"}),t(e.Shape,{alignment:e.Spot.Left,cursor:"w-resize",desiredSize:new e.Size(6,6),fill:"lightblue",stroke:"deepskyblue"}),t(e.Shape,{alignment:e.Spot.Right,cursor:"e-resize",desiredSize:new e.Size(6,6),fill:"lightblue",stroke:"deepskyblue"}),t(e.Shape,{alignment:e.Spot.BottomLeft,cursor:"se-resize",desiredSize:new e.Size(6,6),fill:"lightblue",stroke:"deepskyblue"}),t(e.Shape,{alignment:e.Spot.Bottom,cursor:"s-resize",desiredSize:new e.Size(6,6),fill:"lightblue",stroke:"deepskyblue"}),t(e.Shape,{alignment:e.Spot.BottomRight,cursor:"sw-resize",desiredSize:new e.Size(6,6),fill:"lightblue",stroke:"deepskyblue"})),n=t(e.Adornment,{locationSpot:e.Spot.Center,locationObjectName:"CIRCLE"},t(e.Shape,"Circle",{name:"CIRCLE",cursor:"pointer",desiredSize:new e.Size(7,7),fill:"lightblue",stroke:"deepskyblue"}),t(e.Shape,{geometryString:"M3.5 7 L3.5 30",isGeometryPositioned:!0,stroke:"deepskyblue",strokeWidth:1.5,strokeDashArray:[4,2]}));function a(e,t){e.ports.each(function(e){""!==e.portId&&(e.fill=t?"rgba(0,0,0,.3)":null)})}this.myDiagram.nodeTemplate=t(e.Node,"Spot",{locationSpot:e.Spot.Center},new e.Binding("location","loc",e.Point.parse).makeTwoWay(e.Point.stringify),{selectable:!0,selectionAdornmentTemplate:o},{resizable:!0,resizeObjectName:"PANEL",resizeAdornmentTemplate:r},{rotatable:!0,rotateAdornmentTemplate:n},new e.Binding("angle").makeTwoWay(),t(e.Panel,"Auto",{name:"PANEL"},new e.Binding("desiredSize","size",e.Size.parse).makeTwoWay(e.Size.stringify),t(e.Shape,"Rectangle",{portId:"",fromLinkable:!0,toLinkable:!0,cursor:"pointer",fill:"white",strokeWidth:2},new e.Binding("figure"),new e.Binding("fill")),t(e.TextBlock,{font:"bold 11pt Helvetica, Arial, sans-serif",margin:8,maxSize:new e.Size(160,NaN),wrap:e.TextBlock.WrapFit,editable:!0},new e.Binding("text").makeTwoWay())),i("T",e.Spot.Top,!1,!0),i("L",e.Spot.Left,!0,!0),i("R",e.Spot.Right,!0,!0),i("B",e.Spot.Bottom,!0,!1),{mouseEnter:function(e,t){a(t,!0)},mouseLeave:function(e,t){a(t,!1)}});var s=t(e.Adornment,"Link",t(e.Shape,{isPanelMain:!0,fill:null,stroke:"deepskyblue",strokeWidth:0}));this.myDiagram.linkTemplate=t(e.Link,{selectable:!0,selectionAdornmentTemplate:s},{relinkableFrom:!0,relinkableTo:!0,reshapable:!0},{routing:e.Link.AvoidsNodes,curve:e.Link.JumpOver,corner:0,toShortLength:4},new e.Binding("points").makeTwoWay(),t(e.Shape,{isPanelMain:!0,strokeWidth:2}),t(e.Shape,{toArrow:"Standard",stroke:null}),t(e.Panel,"Auto",new e.Binding("visible","isSelected").ofObject(),t(e.Shape,"RoundedRectangle",{fill:"#F8F8F8",stroke:null}),t(e.TextBlock,{textAlign:"center",font:"10pt helvetica, arial, sans-serif",stroke:"#919191",margin:2,minSize:new e.Size(10,NaN),editable:!0},new e.Binding("text").makeTwoWay())));t(e.Palette,"myPaletteDiv",{maxSelectionCount:1,nodeTemplateMap:this.myDiagram.nodeTemplateMap,linkTemplate:t(e.Link,{locationSpot:e.Spot.Center,selectionAdornmentTemplate:t(e.Adornment,"Link",{locationSpot:e.Spot.Center},t(e.Shape,{isPanelMain:!0,fill:null,stroke:"deepskyblue",strokeWidth:0}),t(e.Shape,{toArrow:"Standard",stroke:null}))},{routing:e.Link.AvoidsNodes,curve:e.Link.JumpOver,corner:5,toShortLength:4},new e.Binding("points"),t(e.Shape,{isPanelMain:!0,strokeWidth:2}),t(e.Shape,{toArrow:"Standard",stroke:null})),model:new e.GraphLinksModel([{text:"结构体建模",size:"100 50",figure:"subtask"},{text:"电路建模",size:"100 50",figure:"subtask"},{text:"装配仿真",size:"100 50",figure:"subtask"},{text:"结构仿真",size:"100 50",figure:"subtask"},{text:"电路仿真",size:"100 50",figure:"subtask"},{text:"力学仿真",size:"100 50",figure:"subtask"},{text:"热学仿真",size:"100 50",figure:"subtask"},{text:"热仿真",size:"100 50",figure:"subtask"},{text:"电磁仿真",size:"100 50",figure:"subtask"},{text:"???",figure:"Diamond",fill:"lightskyblue"}])})},saveMyDiagram:function(){console.log(this.myDiagram.model.Gc),console.log(this.myDiagram.model.Pc)},undoMyDiagram:function(){this.myDiagram.commandHandler.undo()},redoMyDiagram:function(){this.myDiagram.commandHandler.redo()},getProcessList:function(){var e=this;Object(s.m)(this.proId).then(function(t){0===t.data.code&&(e.processNodeList=t.data.data)})},createFromTemp:function(){var e=this,t=[],i=[],o=this.myDiagram.model.Gc,n=this.myDiagram.model.Pc;if(o.length<2||n.length<1)this.$notify({title:"提示",message:"当前流程不完整，请检查！",type:"error",duration:2e3});else if(-1!=o.findIndex(function(e){return e.text.indexOf("建模")>=0})&&-1!=o.findIndex(function(e){return e.text.indexOf("仿真")>=0})){for(var l=0;l<n.length;l++){if(null==n[l].from||null==n[l].to)return void this.$notify({title:"提示",message:"流程未闭合",type:"error",duration:2e3});for(var d=0;d<n.length;d++)if(l!==d&&(n[l].to===n[d].from&&n[l].from===n[d].to||n[l].to===n[d].to&&n[l].from===n[d].from))return void this.$notify({title:"提示",message:"节点间引用错误，请检查！",type:"error",duration:2e3})}for(var p=function(i){if(-1==n.findIndex(function(e){return e.to==o[i].key})&&"建模"!==o[i].text.substring(o[i].text.length-2))return e.$notify({title:"提示",message:"起点必须为建模！",type:"error",duration:2e3}),{v:void 0};var r={nodeName:o[i].text,location:o[i].loc,selfSign:o[i].key,figure:o[i].figure?o[i].figure:"NULL",nodeSize:o[i].size?o[i].size:"150 70",id:o[i].id?o[i].id:null};t.push(r)},u=0;u<o.length;u++){var c=p(u);if("object"===(void 0===c?"undefined":a()(c)))return c.v}var f=r()(t);Object(s.d)(this.proId,f).then(function(t){if(0===t.data.code){for(var o=t.data.data,a=function(e){var t=o.find(function(t){return t.selfSign==n[e].from}).id,r=o.find(function(t){return t.selfSign==n[e].to}).id,a={parentId:t||null,fromPort:""==n[e].fromPort?"B":n[e].fromPort,toPort:""==n[e].toPort?"T":n[e].toPort,selfId:r||null};i.push(a)},l=0;l<n.length;l++)a(l);var d=r()(i);Object(s.c)(e.proId,d).then(function(t){0===t.data.code&&(e.$emit("refreshList"),e.$emit("hideVisio"))})}}).catch(function(){e.$notify({title:"失败",message:"操作失败",type:"error",duration:2e3}),e.$emit("hideVisio")})}else this.$notify({title:"提示",message:"必须至少包含一个建模和仿真流程",type:"error",duration:2e3})}},mounted:function(){var e=this;0===this.processNodes.length?(this.init(),this.myDiagram.model=this.go.Model.fromJson(this.originValue),this.originLink=this.originValue.linkDataArray.slice()):function(){for(var t=[],i=[],o=function(o){var r={id:e.processNodes[o].id,figure:e.processNodes[o].figure,key:e.processNodes[o].selfSign,loc:e.processNodes[o].location,size:e.processNodes[o].nodeSize,text:e.processNodes[o].nodeName,subtask:e.processNodes[o].subtask};!0===e.processNodes[o].subtask.ifApprove&&(r.pass=!0,r.fill="#2ac06d",r.ifAllowTo=!1),!1===e.processNodes[o].subtask.ifApprove&&e.processNodes[o].subtask.state>0&&(r.fill="#f9944a"),t.push(r),null!==e.processNodes[o].linkList&&e.processNodes[o].linkList.forEach(function(t){if(void 0!==e.processNodes.find(function(e){return e.id==t.parentId})){var r={from:e.processNodes.find(function(e){return e.id==t.parentId}).selfSign,to:e.processNodes[o].selfSign,fromPort:t.fromPort,toPort:t.toPort};i.push(r)}})},r=0;r<e.processNodes.length;r++)o(r);e.originValue.nodeDataArray=t.slice(),e.originValue.linkDataArray=i.slice(),e.originLink=i.slice(),e.init(),e.myDiagram.model=e.go.Model.fromJson(e.originValue)}()},destroyed:function(){console.log("destroyed")}},d={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{height:"100%"},attrs:{id:"sample"}},[e.editable?i("div",{staticClass:"operationBar",staticStyle:{"margin-bottom":"10px"}},[i("span",{staticClass:"operation-btn",on:{click:e.saveMyDiagram}},[e._v("保存")]),e._v(" "),i("span",{staticClass:"operation-btn",on:{click:e.undoMyDiagram}},[e._v("撤销")]),e._v(" "),i("span",{staticClass:"operation-btn",on:{click:e.redoMyDiagram}},[e._v("恢复")]),e._v(" "),i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.createFromTemp}},[e._v("保存")])],1):e._e(),e._v(" "),i("div",{staticStyle:{width:"100%",display:"flex","justify-content":"space-between",height:"calc(100% - 40px)"}},[i("div",{class:{hide:!1===e.editable},staticStyle:{width:"200px","margin-right":"2px","background-color":"whitesmoke",border:"solid 1px black"},attrs:{id:"myPaletteDiv"}}),e._v(" "),i("div",{staticStyle:{"flex-grow":"1",height:"100%",border:"solid 1px black"},attrs:{id:"myDiagramDiv"}})]),e._v(" "),i("div",{attrs:{id:"myOverviewDIV"}})])},staticRenderFns:[]};var p=i("VU/8")(l,d,!1,function(e){i("1dE+")},"data-v-af0c023a",null);t.default=p.exports}});