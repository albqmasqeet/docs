webpackJsonp([93],{1194:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"grey lighten-4"},[a("v-card-text",[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs6:"",sm2:""}},[a("v-radio",{attrs:{value:"success",label:"Success",dark:""},model:{value:t.context,callback:function(e){t.context=e},expression:"context"}})],1),a("v-flex",{attrs:{xs6:"",sm2:""}},[a("v-radio",{attrs:{value:"info",label:"Info",dark:""},model:{value:t.context,callback:function(e){t.context=e},expression:"context"}})],1),a("v-flex",{attrs:{xs6:"",sm2:""}},[a("v-radio",{attrs:{value:"warning",label:"Warning",dark:""},model:{value:t.context,callback:function(e){t.context=e},expression:"context"}})],1),a("v-flex",{attrs:{xs6:"",sm2:""}},[a("v-radio",{attrs:{value:"error",label:"Error",dark:""},model:{value:t.context,callback:function(e){t.context=e},expression:"context"}})],1),a("v-flex",{attrs:{xs6:"",sm2:""}},[a("v-radio",{attrs:{value:"primary",label:"Primary",dark:""},model:{value:t.context,callback:function(e){t.context=e},expression:"context"}})],1),a("v-flex",{attrs:{xs6:"",sm2:""}},[a("v-radio",{attrs:{value:"secondary",label:"Secondary",dark:""},model:{value:t.context,callback:function(e){t.context=e},expression:"context"}})],1),a("v-flex",{attrs:{xs12:"",sm3:""}},[a("v-checkbox",{attrs:{value:"multi-line",label:"Multi-line (mobile)",dark:""},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}})],1),a("v-flex",{attrs:{xs12:"",sm3:""}},[a("v-checkbox",{attrs:{value:"vertical",label:"Vertical (mobile)",dark:""},model:{value:t.mode,callback:function(e){t.mode=e},expression:"mode"}})],1),a("v-flex",{attrs:{xs12:"",sm4:"","offset-sm4":""}},[a("v-text-field",{attrs:{type:"text",label:"Text"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),a("v-flex",{attrs:{xs12:"",sm4:""}},[a("v-text-field",{attrs:{type:"number",label:"Timeout"},model:{value:t.timeout,callback:function(e){t.timeout=t._n(e)},expression:"timeout"}})],1)],1)],1),a("v-btn",{attrs:{block:"",primary:"",light:""},nativeOn:{click:function(e){t.snackbar=!0}}},[t._v("Show Snackbar")])],1),a("v-snackbar",{attrs:{timeout:t.timeout,success:"success"===t.context,info:"info"===t.context,warning:"warning"===t.context,error:"error"===t.context,primary:"primary"===t.context,secondary:"secondary"===t.context,"multi-line":"multi-line"===t.mode,vertical:"vertical"===t.mode},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.text)+"\n    "),a("v-btn",{attrs:{flat:""},nativeOn:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)},staticRenderFns:[]}},597:function(t,e,a){var n=a(10)(a(788),a(1194),null,null,null);t.exports=n.exports},788:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{snackbar:!1,context:"",mode:"",timeout:6e3,text:"Hello, I'm a snackbar"}}}}});