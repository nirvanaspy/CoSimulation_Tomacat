webpackJsonp([80],{k96P:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("XLwt"),n=i.n(a),r=i("0xDb");i("tcAE");var s={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){var e=this;this.initChart(),this.__resizeHanlder=Object(r.a)(function(){e.chart&&e.chart.resize()},100),window.addEventListener("resize",this.__resizeHanlder)},beforeDestroy:function(){this.chart&&(window.removeEventListener("resize",this.__resizeHanlder),this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=n.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",bottom:"10",data:["Industries","Technology","Forex","Gold","Forecasts"]},calculable:!0,series:[{name:"WEEKLY WRITE ARTICLES",type:"pie",roseType:"radius",radius:[15,95],center:["50%","38%"],data:[{value:320,name:"Industries"},{value:240,name:"Technology"},{value:149,name:"Forex"},{value:100,name:"Gold"},{value:59,name:"Forecasts"}],animationEasing:"cubicInOut",animationDuration:2600}]})}}},l={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{class:this.className,style:{height:this.height,width:this.width}})},staticRenderFns:[]},o=i("VU/8")(s,l,!1,null,null,null);t.default=o.exports}});