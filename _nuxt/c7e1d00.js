(window.webpackJsonp=window.webpackJsonp||[]).push([[63,7,13,16,18,20,21,25],{374:function(e,t,o){"use strict";o.r(t);var n=o(137),r=o.n(n),l={props:{type:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},computed:{computedStyle:function(){return{background:r.a[this.type].background,color:r.a[this.type].color}}},mounted:function(){this.button=this.$refs.button}},d=o(20),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"position:relative"},[t("button",{ref:"button",staticClass:"b:0 p:8|16 w:100% border-radius:4 cursor:pointer transform:translateY(-2):hover transition:0.2s",style:e.computedStyle,on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[e._t("default")],2),e._v(" "),e.disabled?t("div",{staticClass:"position:absolute top:0 left:0 w:100% h:100% background:rgba(0,0,0,0.4)"}):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:o(374).default})},375:function(e,t,o){"use strict";var n=o(14),r=o(7),l=o(5),d=o(106),c=o(27),f=o(17),m=o(173),v=o(66),_=o(105),h=o(244),w=o(4),y=o(88).f,x=o(60).f,O=o(22).f,k=o(378),C=o(377).trim,S="Number",$=r.Number,R=$.prototype,D=r.TypeError,F=l("".slice),T=l("".charCodeAt),I=function(e){var t=h(e,"number");return"bigint"==typeof t?t:N(t)},N=function(e){var t,o,n,r,l,d,c,code,f=h(e,"number");if(_(f))throw D("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=C(f),43===(t=T(f,0))||45===t){if(88===(o=T(f,2))||120===o)return NaN}else if(48===t){switch(T(f,1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+f}for(d=(l=F(f,2)).length,c=0;c<d;c++)if((code=T(l,c))<48||code>r)return NaN;return parseInt(l,n)}return+f};if(d(S,!$(" 0o1")||!$("0b1")||$("+0x1"))){for(var j,B=function(e){var t=arguments.length<1?0:$(I(e)),o=this;return v(R,o)&&w((function(){k(o)}))?m(Object(t),o,B):t},E=n?y($):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),A=0;E.length>A;A++)f($,j=E[A])&&!f(B,j)&&O(B,j,x($,j));B.prototype=R,R.constructor=B,c(r,S,B,{constructor:!0})}},376:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},377:function(e,t,o){var n=o(5),r=o(39),l=o(16),d=o(376),c=n("".replace),f="["+d+"]",m=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),_=function(e){return function(t){var o=l(r(t));return 1&e&&(o=c(o,m,"")),2&e&&(o=c(o,v,"")),o}};e.exports={start:_(1),end:_(2),trim:_(3)}},378:function(e,t,o){var n=o(5);e.exports=n(1..valueOf)},379:function(e,t,o){"use strict";o.r(t);o(375);var n=o(137),r=o.n(n),l={props:{field:{type:String,default:""},type:{type:String,default:"text"},value:{default:""},placeholder:{type:String,default:""},error:{default:null},required:{type:Boolean,default:!1},maxlength:{type:Number,default:null},disabled:{type:Boolean,default:!1}},mounted:function(){this.input=this.$refs.input},data:function(){return{COLORS:r.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},d=o(20),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+" :\n  ")]):e._e(),e._v(" "),t("input",{ref:"input",style:e.computedStyle,attrs:{type:e.type,placeholder:e.placeholder,required:e.required,maxlength:e.maxlength,disabled:e.disabled},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})])}),[],!1,null,null,null);t.default=component.exports},380:function(e,t,o){"use strict";o.r(t);var n=o(137),r=o.n(n),l={props:{field:{type:String,default:""},value:{default:""},error:{default:null},required:{type:Boolean,default:!1}},data:function(){return{COLORS:r.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},d=o(20),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+" :\n  ")]):e._e(),e._v(" "),t("select",{style:e.computedStyle,attrs:{required:e.required},domProps:{value:e.value},on:{change:function(t){return e.$emit("input",t.target.value)}}},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Select:o(380).default})},381:function(e,t,o){"use strict";o.r(t);o(31),o(21),o(38),o(11),o(48),o(35),o(49);var n=o(13);o(87);function r(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=o(137),c=o.n(d),f={props:{field:{type:String,default:""},error:{default:null}},data:function(){return{COLORS:c.a}},computed:{computedErrorStyle:function(){return{color:c.a.negative.background}}}},m=o(20),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"my:8"},[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+"\n  ")]):e._e(),e._v(" "),e._t("default",null,null,l(l({},e.$props),e.$attrs)),e._v(" "),e.error?t("div",{staticClass:"font-size:0.8rem mt:4",style:e.computedErrorStyle},[e._v("\n    "+e._s(e.error.join("\n"))+"\n  ")]):e._e()],2)}),[],!1,null,null,null);t.default=component.exports},382:function(e,t,o){"use strict";o.r(t);var n={props:["value"]},r=o(20),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return e.value?t("div",{staticClass:"position:fixed top:0 left:0 w:100vw h:100vh z-index:2 bg:rgba(0,0,0,0.5)"},[t("div",{staticClass:"w:auto h:100% overflow:auto p:32"},[e._t("default")],2)]):e._e()}),[],!1,null,null,null);t.default=component.exports},383:function(e,t,o){"use strict";o.r(t);o(21),o(40);var n={props:{value:{type:Boolean,default:!1},title:{type:String,default:""},description:{type:String,default:""},yesText:{type:String,default:""},yesType:{type:String,default:"primary"},noText:{type:String,default:""},noType:{type:String,default:"negative"}}},r=o(20),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return e.value?t("div",{staticClass:"position:fixed top:0 left:0 w:100vw h:100vh z-index:2 bg:rgba(0,0,0,0.5) flex flex-center"},[t("div",{staticClass:"round border bg:white min-width:300"},[t("div",{staticClass:"p:16 border-bottom:2px|rgba(0,0,0,0.2)|solid font-size:1.2rem font-weight:bold"},[e._v("\n      "+e._s(e.title)+"\n    ")]),e._v(" "),t("div",{staticClass:"p:32 border-bottom:2px|rgba(0,0,0,0.2)|solid"},[e._v("\n      "+e._s(e.description)+"\n    ")]),e._v(" "),t("div",{staticClass:"p:16 flex justify-content:flex-end"},[e.noText?t("Button",{staticClass:"mr:8",attrs:{type:e.noType},on:{click:function(t){return e.$emit("no")}}},[e._v("\n        "+e._s(e.noText)+"\n      ")]):e._e(),e._v(" "),e.yesText?t("Button",{attrs:{type:e.yesType},on:{click:function(t){return e.$emit("yes")}}},[e._v("\n        "+e._s(e.yesText)+"\n      ")]):e._e()],1)])]):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:o(374).default})},386:function(e,t,o){"use strict";o.r(t);var n={},r=o(20),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex"},[t("Button",{staticClass:"mr:8",on:{click:function(t){return e.params.editHandler(e.params)}}},[e._v(e._s(e.$t("common.actions.edit")))]),e._v(" "),t("Button",{attrs:{type:"negative"},on:{click:function(t){return e.params.deleteHandler(e.params)}}},[e._v(e._s(e.$t("common.actions.delete")))])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:o(374).default})},580:function(e,t,o){"use strict";o.r(t);var n=o(3),r=(o(375),o(26),o(71)),l=o(72),d=o.n(l),c={layout:"admin",components:{ReaderButtonsCellRenderer:o(386).default},watch:{showAll:function(){this.getVideovoteOptions()}},data:function(){var e={true:"是",false:"否"};return{loading:!1,columnDefs:[{field:"buttons",headerName:" ",cellRenderer:"ReaderButtonsCellRenderer",cellRendererParams:{editHandler:this.editHandler,deleteHandler:this.deleteHandler},width:384,sortable:!1,filter:!1},{field:"mit_videovote_option_id",headerName:this.$t("videovoteOptions.fields.id"),width:120,tooltipField:"mit_videovote_option_id"},{field:"mit_videovote_option_enabled",headerName:this.$t("videovoteOptions.fields.enabled"),width:120,tooltipField:"mit_videovote_option_enabled",valueFormatter:function(t){return e[t.data.mit_videovote_option_enabled]},filterValueGetter:function(t){return e[t.data.mit_videovote_option_enabled]}},{field:"mit_videovote_option_preview_url",headerName:this.$t("videovoteOptions.fields.previewURL"),width:120,tooltipField:"mit_videovote_option_preview_url"},{field:"remarks",headerName:this.$t("common.fields.remarks"),minWwidth:128,tooltipField:"remarks"},{field:"created_at",headerName:this.$t("common.fields.createdAt"),width:224,tooltipField:"created_at",valueGetter:function(e){return new Date(e.data.created_at).toLocaleString("zh-TW")},filterValueGetter:function(e){return new Date(e.data.created_at).toLocaleString("zh-TW")}},{field:"updated_at",headerName:this.$t("common.fields.updatedAt"),width:224,tooltipField:"updated_at",valueGetter:function(e){return new Date(e.data.updated_at).toLocaleString("zh-TW")},filterValueGetter:function(e){return new Date(e.data.updated_at).toLocaleString("zh-TW")}},{field:"created_by",headerName:this.$t("common.fields.createdBy"),width:128,tooltipField:"created_by"},{field:"updated_by",headerName:this.$t("common.fields.updatedBy"),width:128,tooltipField:"updated_by"}],defaultColumnDef:{sortable:!0,filter:!0,floatingFilter:!0,resizable:!0,floatingFilterComponentParams:{suppressFilterButton:!0}},gridAPI:null,gridColumnAPI:null,config:d.a.getConfig(),showAll:!1,showManualIntervention:!1,videovoteOptions:[],modal:{show:!1,mode:"add",errorFields:{},form:{mit_videovote_option_id:null,mit_videovote_option_enabled:null,mit_videovote_option_preview_url:null,remarks:null}},deleteDialog:{show:!1,videovoteOptionID:null},refundDialog:{show:!1,videovoteOptionID:null}}},mounted:function(){this.getVideovoteOptions()},methods:{getVideovoteOptions:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.get("/api/admin/videovote/options"+(e.showAll?"?all=yes":"")).then((function(t){e.videovoteOptions=t.data.mitVideovoteOptions})).catch((function(e){r.a.showRequestError(e)}));case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},createHandler:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.modal.mode="add",e.modal.form.mit_videovote_option_id=null,e.modal.form.mit_videovote_option_enabled=!0,e.modal.form.mit_videovote_option_preview_url=null,e.modal.form.remarks="",e.$set(e.modal,"errorFields",{}),e.modal.show=!0;case 7:case"end":return t.stop()}}),t)})))()},createVideovoteOption:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.post("/api/admin/videovote/option",e.modal.form).then((function(t){r.a.showSnackbar({message:e.$t("common.messages.addSucceed"),colorType:"positive"}),e.modal.show=!1,e.getVideovoteOptions()})).catch((function(t){r.a.showRequestError(t),t.response&&"422"==t.response.status&&e.$set(e.modal,"errorFields",t.response.data.errors)}));case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},updateVideovoteOption:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.put("/api/admin/videovote/option/"+e.modal.form.mit_videovote_option_id,e.modal.form).then((function(t){r.a.showSnackbar({message:e.$t("common.messages.addSucceed"),colorType:"positive"}),e.modal.show=!1,e.getVideovoteOptions()})).catch((function(t){r.a.showRequestError(t),t.response&&"422"==t.response.status&&e.$set(e.modal,"errorFields",t.response.data.errors)}));case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},editHandler:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:t.modal.mode="edit",t.modal.form.mit_videovote_option_id=e.data.mit_videovote_option_id,t.modal.form.mit_videovote_option_enabled=Number(e.data.mit_videovote_option_enabled),t.modal.form.mit_videovote_option_preview_url=e.data.mit_videovote_option_preview_url,t.modal.form.remarks=e.data.remarks,t.$set(t.modal,"errorFields",{}),t.modal.show=!0;case 7:case"end":return o.stop()}}),o)})))()},deleteHandler:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:t.deleteDialog.videovoteOptionID=e.data.mit_videovote_option_id,t.deleteDialog.show=!0;case 2:case"end":return o.stop()}}),o)})))()},deleteVideovoteOption:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.delete("/api/admin/videovote/option/"+t.deleteDialog.videovoteOptionID).then((function(e){r.a.showSnackbar({message:t.$t("common.messages.deleteSucceed"),colorType:"positive"}),t.getVideovoteOptions()})).catch((function(e){r.a.showRequestError(e)}));case 3:t.loading=!1,t.deleteDialog.show=!1;case 5:case"end":return e.stop()}}),e)})))()},onGridReady:function(e){this.gridAPI=e.api,this.gridColumnAPI=e.columnApi}}},f=o(20),component=Object(f.a)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-direction:column h:100%"},[t("Loading",{attrs:{value:e.loading}}),e._v(" "),t("div",{staticClass:"flex"},[t("Button",{staticClass:"width:100%",on:{click:e.createHandler}},[e._v(e._s(e.$t("common.actions.add"))+"\n    ")]),e._v(" "),t("Button",{staticClass:"width:100%",on:{click:function(t){e.gridAPI&&e.gridAPI.exportDataAsCsv()}}},[e._v(e._s(e.$t("management.actions.downloadCSV"))+"\n    ")])],1),e._v(" "),t("ag-grid-vue",{staticClass:"ag-theme-alpine",staticStyle:{"flex-grow":"1"},attrs:{columnDefs:e.columnDefs,defaultColDef:e.defaultColumnDef,rowData:e.videovoteOptions,enableCellTextSelection:!0,suppressRowTransform:!0,animateRows:"true"},on:{"grid-ready":e.onGridReady}}),e._v(" "),t("Modal",{attrs:{value:e.modal.show}},[t("div",{staticClass:"round border drop-shadow p:16|32 bg:white"},[t("h2",[e._v("\n        "+e._s(e.$t("common.actions."+e.modal.mode))+e._s(e.$t("videovoteOptions.itemName"))+"\n      ")]),e._v(" "),t("Field",{attrs:{field:e.$t("videovoteOptions.fields.enabled"),error:e.modal.errorFields.mit_videovote_option_enabled}},[t("Select",{attrs:{error:e.modal.errorFields.mit_videovote_option_enabled},model:{value:e.modal.form.mit_videovote_option_enabled,callback:function(t){e.$set(e.modal.form,"mit_videovote_option_enabled",t)},expression:"modal.form.mit_videovote_option_enabled"}},[t("option",{key:"1",attrs:{value:"1"}},[e._v("是")]),e._v(" "),t("option",{key:"0",attrs:{value:"0"}},[e._v("否")])])],1),e._v(" "),t("Field",{attrs:{field:e.$t("videovoteOptions.fields.previewURL"),error:e.modal.errorFields.mit_videovote_option_preview_url}},[t("InputText",{attrs:{error:e.modal.errorFields.mit_videovote_option_preview_url,maxlength:255},model:{value:e.modal.form.mit_videovote_option_preview_url,callback:function(t){e.$set(e.modal.form,"mit_videovote_option_preview_url",t)},expression:"modal.form.mit_videovote_option_preview_url"}})],1),e._v(" "),t("Field",{attrs:{field:e.$t("common.fields.remarks"),error:e.modal.errorFields.remarks}},[t("InputText",{attrs:{error:e.modal.errorFields.remarks,maxlength:255},model:{value:e.modal.form.remarks,callback:function(t){e.$set(e.modal.form,"remarks",t)},expression:"modal.form.remarks"}})],1),e._v(" "),t("div",{staticClass:"flex"},[t("Button",{staticClass:"mr:8",attrs:{type:"negative"},on:{click:function(t){return e.modal.show=!1}}},[e._v(e._s(e.$t("common.actions.cancel")))]),e._v(" "),"add"==e.modal.mode?t("Button",{on:{click:function(t){e.createVideovoteOption()}}},[e._v(e._s(e.$t("common.actions.submit")))]):e._e(),e._v(" "),"edit"==e.modal.mode?t("Button",{on:{click:function(t){e.updateVideovoteOption()}}},[e._v(e._s(e.$t("common.actions.submit")))]):e._e()],1)],1)]),e._v(" "),t("Dialog",{attrs:{value:e.deleteDialog.show,yesText:e.$t("common.actions.delete"),yesType:"negative",noText:e.$t("common.actions.cancel"),noType:"secondary",title:e.$t("common.messages.confirmDelete.title"),description:e.$t("common.messages.confirmDelete.description")},on:{yes:e.deleteVideovoteOption,no:function(t){return e.deleteDialog.show=!1}}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Loading:o(172).default,Button:o(374).default,Select:o(380).default,Field:o(381).default,InputText:o(379).default,Modal:o(382).default,Dialog:o(383).default})}}]);