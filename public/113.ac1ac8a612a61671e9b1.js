webpackJsonp([113],{1047:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-progress-linear",{attrs:{buffer:"","buffer-value":e.bufferValue},model:{value:e.buffer,callback:function(t){e.buffer=t},expression:"buffer"}})},staticRenderFns:[]}},566:function(e,t,r){var n=r(10)(r(767),r(1047),null,null,null);e.exports=n.exports},767:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{value:0,buffer:10,bufferValue:20,interval:{}}},methods:{startBuffer:function(){var e=this;this.interval=setInterval(function(){e.buffer+=10*Math.random()+5,e.bufferValue+=10*Math.random()+5},2e3)}},beforeDestroy:function(){clearInterval(this.interval)},mounted:function(){this.startBuffer()}}}});