webpackJsonp([63],{AbDH:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n#canvas[data-v-10189ad8] {\n  z-index:1;\n}\n#canvasbg[data-v-10189ad8] {\n  z-index:-10;\n  -webkit-filter:blur(3px);\n  -moz-filter:blur(3px);\n  -o-filter:blur(3px);\n  filter:blur(3px);\n  opacity:0.6;\n}\n\n",""])},B7M7:function(t,e,a){var i=a("AbDH");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("4c4ac735",i,!0)},scu0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),window.onload=function(){for(var t=5,e=20,a=60,i=30,n=25,r=.3,o=1,s=.6,h=["52,168,83","117,95,147","199,108,23","194,62,55","0,172,212","120,120,120"],d=["52,168,83","117,95,147","199,108,23","194,62,55","0,172,212","120,120,120"],l=10,c=(d[0],.85),u=document.getElementById("canvas"),p=Math.min(u.width,u.height)/2.4,g=2.5,b=[],f=[],y=0;y<24;y++)b.push(new k);for(y=0;y<12;y++)f.push(new k(!0));var v=1,x=1.003,m=.997,M=4e-5,w=!1;function k(s){this.background=s||!1,this.x=j(-u.width/2,u.width/2),this.y=j(-u.height/2,u.height/2),this.radius=s?_(t,e)*c:_(t,e),this.filled=this.radius<n?!(C(0,100)>a)&&"full":!(C(0,100)>i)&&"concentric",this.color=s?d[C(0,d.length-1)]:h[C(0,h.length-1)],this.borderColor=s?d[C(0,d.length-1)]:h[C(0,h.length-1)],this.opacity=.05,this.speed=s?j(r,o)/c:j(r,o),this.speedAngle=2*Math.random()*Math.PI,this.speedx=Math.cos(this.speedAngle)*this.speed,this.speedy=Math.sin(this.speedAngle)*this.speed;var l=Math.abs((this.x-(this.speedx<0?-1:1)*(u.width/2+this.radius))/this.speedx),p=Math.abs((this.y-(this.speedy<0?-1:1)*(u.height/2+this.radius))/this.speedy);this.ttl=Math.min(l,p)}function C(t,e){return Math.floor(Math.random()*(e-t+1)+t)}function j(t,e){return Math.random()*(e-t)+t}function _(t,e){return Math.random()*Math.random()*Math.random()*(e-t)+t}function A(a,i){var n=i.background?i.radius*=v:i.radius/=v;a.beginPath(),a.arc(i.x,i.y,n*v,0,2*Math.PI,!1),a.lineWidth=Math.max(1,l*(t-i.radius)/(t-e)),a.strokeStyle=["rgba(",i.borderColor,",",i.opacity,")"].join(""),"full"==i.filled&&(a.fillStyle=["rgba(",i.borderColor,",",i.background?.8*i.opacity:i.opacity,")"].join(""),a.fill(),a.lineWidth=0,a.strokeStyle=["rgba(",i.borderColor,",",0,")"].join("")),a.stroke(),"concentric"==i.filled&&(a.beginPath(),a.arc(i.x,i.y,n/2,0,2*Math.PI,!1),a.lineWidth=Math.max(1,l*(t-i.radius)/(t-e)),a.strokeStyle=["rgba(",i.color,",",i.opacity,")"].join(""),a.stroke()),i.x+=i.speedx,i.y+=i.speedy,i.opacity<(i.background?s:1)&&(i.opacity+=.01),i.ttl--}function P(){w&&((v<m||v>x)&&(M*=-1),v+=M);var t=document.getElementById("canvas").getContext("2d"),e=document.getElementById("canvasbg").getContext("2d");function a(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.ttl;u.width,i.radius,u.height,i.radius;i.ttl<-20&&e[a].init(e[a].background),A(t,i)}for(a=0;a<e.length-1;a++)for(var n=a+1;n<e.length;n++){var r=e[a].x-e[n].x,o=e[a].y-e[n].y,s=Math.pow(Math.pow(r,2)+Math.pow(o,2),.5);if(!(s<=e[a].radius+e[n].radius)&&s<p){var h=(e[a].x<e[n].x?1:-1)*Math.abs(e[a].radius*r/s),d=(e[a].y<e[n].y?1:-1)*Math.abs(e[a].radius*o/s),l=(e[a].x<e[n].x?-1:1)*Math.abs(e[n].radius*r/s),b=(e[a].y<e[n].y?-1:1)*Math.abs(e[n].radius*o/s);t.beginPath(),t.moveTo(e[a].x+h,e[a].y+d),t.lineTo(e[n].x+l,e[n].y+b);e[a].color,e[n].color;t.strokeStyle=["rgba(",e[a].borderColor,",",Math.min(e[a].opacity,e[n].opacity)*((p-s)/p),")"].join(""),t.lineWidth=(e[a].background?g*c:g)*((p-s)/p),t.stroke()}}}t.globalCompositeOperation="destination-over",t.clearRect(0,0,u.width,u.height),e.globalCompositeOperation="destination-over",e.clearRect(0,0,u.width,u.height),t.save(),t.translate(u.width/2,u.height/2),e.save(),e.translate(u.width/2,u.height/2);var i=Date.now();a(t,b),a(e,f);Date.now();t.restore(),e.restore(),window.requestAnimationFrame(P)}k.prototype.init=function(){k.call(this,this.background)},window.requestAnimationFrame(P)};var i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"100%",height:"100%"}},[e("canvas",{attrs:{id:"canvas"}}),this._v(" "),e("canvas",{attrs:{id:"canvasbg"}})])}]};var n=a("VU/8")({name:"back"},i,!1,function(t){a("B7M7")},"data-v-10189ad8",null);e.default=n.exports}});