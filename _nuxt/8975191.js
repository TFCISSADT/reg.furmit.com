(window.webpackJsonp=window.webpackJsonp||[]).push([[29,7,13,16,18,20,21,25],{374:function(t,e,r){"use strict";r.r(e);var o=r(137),n=r.n(o),l={props:{type:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},computed:{computedStyle:function(){return{background:n.a[this.type].background,color:n.a[this.type].color}}},mounted:function(){this.button=this.$refs.button}},d=r(20),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"position:relative"},[e("button",{ref:"button",staticClass:"b:0 p:8|16 w:100% border-radius:4 cursor:pointer transform:translateY(-2):hover transition:0.2s",style:t.computedStyle,on:{click:function(e){return e.preventDefault(),t.$emit("click")}}},[t._t("default")],2),t._v(" "),t.disabled?e("div",{staticClass:"position:absolute top:0 left:0 w:100% h:100% background:rgba(0,0,0,0.4)"}):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(374).default})},375:function(t,e,r){"use strict";var o=r(14),n=r(7),l=r(5),d=r(106),c=r(27),m=r(17),_=r(173),v=r(66),f=r(105),y=r(244),h=r(4),x=r(88).f,w=r(60).f,k=r(22).f,F=r(378),S=r(377).trim,O="Number",$=n.Number,N=$.prototype,T=n.TypeError,C=l("".slice),R=l("".charCodeAt),D=function(t){var e=y(t,"number");return"bigint"==typeof e?e:I(e)},I=function(t){var e,r,o,n,l,d,c,code,m=y(t,"number");if(f(m))throw T("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=S(m),43===(e=R(m,0))||45===e){if(88===(r=R(m,2))||120===r)return NaN}else if(48===e){switch(R(m,1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+m}for(d=(l=C(m,2)).length,c=0;c<d;c++)if((code=R(l,c))<48||code>n)return NaN;return parseInt(l,o)}return+m};if(d(O,!$(" 0o1")||!$("0b1")||$("+0x1"))){for(var j,E=function(t){var e=arguments.length<1?0:$(D(t)),r=this;return v(N,r)&&h((function(){F(r)}))?_(Object(e),r,E):e},B=o?x($):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),A=0;B.length>A;A++)m($,j=B[A])&&!m(E,j)&&k(E,j,w($,j));E.prototype=N,N.constructor=E,c(n,O,E,{constructor:!0})}},376:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},377:function(t,e,r){var o=r(5),n=r(39),l=r(16),d=r(376),c=o("".replace),m="["+d+"]",_=RegExp("^"+m+m+"*"),v=RegExp(m+m+"*$"),f=function(t){return function(e){var r=l(n(e));return 1&t&&(r=c(r,_,"")),2&t&&(r=c(r,v,"")),r}};t.exports={start:f(1),end:f(2),trim:f(3)}},378:function(t,e,r){var o=r(5);t.exports=o(1..valueOf)},379:function(t,e,r){"use strict";r.r(e);r(375);var o=r(137),n=r.n(o),l={props:{field:{type:String,default:""},type:{type:String,default:"text"},value:{default:""},placeholder:{type:String,default:""},error:{default:null},required:{type:Boolean,default:!1},maxlength:{type:Number,default:null},disabled:{type:Boolean,default:!1}},mounted:function(){this.input=this.$refs.input},data:function(){return{COLORS:n.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},d=r(20),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",[t.field?e("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[t._v("\n    "+t._s(t.field)+" :\n  ")]):t._e(),t._v(" "),e("input",{ref:"input",style:t.computedStyle,attrs:{type:t.type,placeholder:t.placeholder,required:t.required,maxlength:t.maxlength,disabled:t.disabled},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])}),[],!1,null,null,null);e.default=component.exports},380:function(t,e,r){"use strict";r.r(e);var o=r(137),n=r.n(o),l={props:{field:{type:String,default:""},value:{default:""},error:{default:null},required:{type:Boolean,default:!1}},data:function(){return{COLORS:n.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},d=r(20),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("div",[t.field?e("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[t._v("\n    "+t._s(t.field)+" :\n  ")]):t._e(),t._v(" "),e("select",{style:t.computedStyle,attrs:{required:t.required},domProps:{value:t.value},on:{change:function(e){return t.$emit("input",e.target.value)}}},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Select:r(380).default})},381:function(t,e,r){"use strict";r.r(e);r(31),r(21),r(38),r(11),r(48),r(35),r(49);var o=r(13);r(87);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=r(137),c=r.n(d),m={props:{field:{type:String,default:""},error:{default:null}},data:function(){return{COLORS:c.a}},computed:{computedErrorStyle:function(){return{color:c.a.negative.background}}}},_=r(20),component=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"my:8"},[t.field?e("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[t._v("\n    "+t._s(t.field)+"\n  ")]):t._e(),t._v(" "),t._t("default",null,null,l(l({},t.$props),t.$attrs)),t._v(" "),t.error?e("div",{staticClass:"font-size:0.8rem mt:4",style:t.computedErrorStyle},[t._v("\n    "+t._s(t.error.join("\n"))+"\n  ")]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},382:function(t,e,r){"use strict";r.r(e);var o={props:["value"]},n=r(20),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return t.value?e("div",{staticClass:"position:fixed top:0 left:0 w:100vw h:100vh z-index:2 bg:rgba(0,0,0,0.5)"},[e("div",{staticClass:"w:auto h:100% overflow:auto p:32"},[t._t("default")],2)]):t._e()}),[],!1,null,null,null);e.default=component.exports},383:function(t,e,r){"use strict";r.r(e);r(21),r(40);var o={props:{value:{type:Boolean,default:!1},title:{type:String,default:""},description:{type:String,default:""},yesText:{type:String,default:""},yesType:{type:String,default:"primary"},noText:{type:String,default:""},noType:{type:String,default:"negative"}}},n=r(20),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return t.value?e("div",{staticClass:"position:fixed top:0 left:0 w:100vw h:100vh z-index:2 bg:rgba(0,0,0,0.5) flex flex-center"},[e("div",{staticClass:"round border bg:white min-width:300"},[e("div",{staticClass:"p:16 border-bottom:2px|rgba(0,0,0,0.2)|solid font-size:1.2rem font-weight:bold"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),e("div",{staticClass:"p:32 border-bottom:2px|rgba(0,0,0,0.2)|solid"},[t._v("\n      "+t._s(t.description)+"\n    ")]),t._v(" "),e("div",{staticClass:"p:16 flex justify-content:flex-end"},[t.noText?e("Button",{staticClass:"mr:8",attrs:{type:t.noType},on:{click:function(e){return t.$emit("no")}}},[t._v("\n        "+t._s(t.noText)+"\n      ")]):t._e(),t._v(" "),t.yesText?e("Button",{attrs:{type:t.yesType},on:{click:function(e){return t.$emit("yes")}}},[t._v("\n        "+t._s(t.yesText)+"\n      ")]):t._e()],1)])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(374).default})},386:function(t,e,r){"use strict";r.r(e);var o={},n=r(20),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex"},[e("Button",{staticClass:"mr:8",on:{click:function(e){return t.params.editHandler(t.params)}}},[t._v(t._s(t.$t("common.actions.edit")))]),t._v(" "),e("Button",{attrs:{type:"negative"},on:{click:function(e){return t.params.deleteHandler(t.params)}}},[t._v(t._s(t.$t("common.actions.delete")))])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(374).default})},547:function(t,e,r){"use strict";r.r(e);var o=r(3),n=(r(26),r(50),r(375),r(71)),l=r(72),d=r.n(l),c={layout:"admin",components:{ReaderButtonsCellRenderer:r(386).default},data:function(){var t={true:"是",false:"否"},e={NO:"未啟用",YES:"啟用",FORCEDYES:"強制啟用"};return{loading:!1,columnDefs:[{field:"buttons",headerName:" ",cellRenderer:"ReaderButtonsCellRenderer",cellRendererParams:{copyLinkHandler:this.copyLinkHandler,editHandler:this.editHandler,deleteHandler:this.deleteHandler},minWidth:256,sortable:!1,filter:!1},{field:"activity_is_ongoing",headerName:"活動狀態",valueFormatter:function(t){return e[t.data.activity_is_ongoing]},filterValueGetter:function(t){return e[t.data.activity_is_ongoing]}},{field:"room_id",headerName:"活動空間",valueFormatter:function(t){return t.data.z.rooms[t.data.room_id].room_name},filterValueGetter:function(t){return t.data.z.rooms[t.data.room_id].room_name}},{field:"activity_name",headerName:"活動名稱"},{field:"activity_system_name",headerName:"系統名稱"},{field:"activity_time_start",headerName:"開始時間"},{field:"activity_time_end",headerName:"結束時間"},{field:"activity_adult_only",headerName:"R18 活動",valueFormatter:function(e){return t[e.data.activity_adult_only]},filterValueGetter:function(e){return t[e.data.activity_adult_only]}},{field:"activity_entrance_count_limit",headerName:"重複進入的次數限制"},{field:"activity_participant_count_limit",headerName:"總參與人數限制"},{field:"activity_require_levels",headerName:"參與等級限制"},{field:"activity_require_signup",headerName:"須事前報名",valueFormatter:function(e){return t[e.data.activity_require_signup]},filterValueGetter:function(e){return t[e.data.activity_require_signup]}},{field:"activity_minimum_stay_time",headerName:"最低參與時間"},{field:"activity_reward_points",headerName:"參與回饋分數"},{field:"activity_require_checkout",headerName:"離場須打卡",valueFormatter:function(e){return t[e.data.activity_require_checkout]},filterValueGetter:function(e){return t[e.data.activity_require_checkout]}},{field:"mit_videovote_reward_type",headerName:"取票活動代碼"},{field:"remarks",headerName:"備註"}],defaultColumnDef:{sortable:!0,filter:!0,floatingFilter:!0,resizable:!0},config:d.a.getConfig(),adminConfig:d.a.getAdminConfig(),activities:[],rooms:{},dataLoaded:{},modal:{show:!1,mode:"add",errorFields:{},form:{activity_id:null,activity_is_ongoing:"NO",room_id:null,activity_name:null,activity_system_name:null,activity_time_start:null,activity_time_end:null,activity_adult_only:null,activity_entrance_count_limit:null,activity_participant_count_limit:null,activity_require_levels:null,activity_require_signup:null,activity_minimum_stay_time:null,activity_reward_points:null,activity_require_checkout:null,mit_videovote_reward_type:null,remarks:""}},deleteDialog:{show:!1,activityID:null}}},mounted:function(){this.getRooms()},methods:{timestampToDateTime:function(t){return new Date(1e3*t).toLocaleString("zh-TW",{hour12:!1,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})},getActivities:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("/api/admin/activities").then((function(e){var r={rooms:t.rooms};e.data.activities.map((function(e){e.activity_time_start&&(e.activity_time_start=t.timestampToDateTime(e.activity_time_start)),e.activity_time_end&&(e.activity_time_end=t.timestampToDateTime(e.activity_time_end)),e.z=r})),t.activities=e.data.activities})).catch((function(t){n.a.showRequestError(t)}));case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()},getRooms:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("/api/admin/rooms").then((function(e){t.rooms=e.data.rooms,t.rooms={},e.data.rooms.map((function(e){t.rooms[e.room_id]=e})),t.dataLoaded.rooms=!0,t.dataLoaded.rooms&&t.getActivities()})).catch((function(t){n.a.showRequestError(t)}));case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()},showModal:function(t){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.modal.show=!0,this.modal.mode=t,this.$set(this.modal,"errorFields",{}),this.modal.form.activity_id=data?data.activity_id:null,this.modal.form.activity_is_ongoing=data?data.activity_is_ongoing:null,this.modal.form.room_id=data?data.room_id:null,this.modal.form.activity_name=data?data.activity_name:null,this.modal.form.activity_system_name=data?data.activity_system_name:null,this.modal.form.activity_time_start=data?data.activity_time_start:"",this.modal.form.activity_time_end=data?data.activity_time_end:"",this.modal.form.activity_adult_only=data?Number(data.activity_adult_only):0,this.modal.form.activity_entrance_count_limit=data?data.activity_entrance_count_limit:"",this.modal.form.activity_participant_count_limit=data?data.activity_participant_count_limit:"",this.modal.form.activity_require_levels=data?data.activity_require_levels:"",this.modal.form.activity_require_signup=data?Number(data.activity_require_signup):0,this.modal.form.activity_minimum_stay_time=data?data.activity_minimum_stay_time:"",this.modal.form.activity_reward_points=data?data.activity_reward_points:"",this.modal.form.activity_require_checkout=data?Number(data.activity_require_checkout):0,this.modal.form.mit_videovote_reward_type=data?data.mit_videovote_reward_type:"",this.modal.form.remarks=data?data.remarks:""},submitModal:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,r="add"==t.modal.mode?"/api/admin/activity":"/api/admin/activity/"+t.modal.form.activity_id,o="add"==t.modal.mode?"post":"put",t.modal.form.activity_time_start&&(l=new Date(t.modal.form.activity_time_start),t.modal.form.activity_time_start=Math.floor(l.getTime()/1e3)),t.modal.form.activity_time_end&&(d=new Date(t.modal.form.activity_time_end),t.modal.form.activity_time_end=Math.floor(d.getTime()/1e3)),e.next=7,t.$axios[o](r,t.modal.form).then((function(e){n.a.showSnackbar({message:"add"==t.modal.mode?t.$t("common.messages.addSucceed"):t.$t("common.messages.updateSucceed"),colorType:"positive"}),t.modal.show=!1,t.getActivities()})).catch((function(e){e.response&&"422"==e.response.status&&t.$set(t.modal,"errorFields",e.response.data.errors),n.a.showRequestError(e)}));case 7:t.loading=!1;case 8:case"end":return e.stop()}}),e)})))()},deleteActivity:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.delete("/api/admin/activity/"+t.deleteDialog.activityID).then((function(e){n.a.showSnackbar({message:t.$t("common.messages.deleteSucceed"),colorType:"positive"}),t.deleteDialog.show=!1,t.getActivities()})).catch((function(t){n.a.showRequestError(t)}));case 3:t.loading=!1;case 4:case"end":return e.stop()}}),e)})))()},editHandler:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.showModal("edit",t.data);case 1:case"end":return r.stop()}}),r)})))()},deleteHandler:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.deleteDialog.activityID=t.data.activity_id,e.deleteDialog.show=!0;case 2:case"end":return r.stop()}}),r)})))()}}},m=c,_=r(20),component=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-direction:column h:100%"},[e("Loading",{attrs:{value:t.loading}}),t._v(" "),e("Button",{on:{click:function(e){return t.showModal("add")}}},[t._v("新增活動")]),t._v(" "),e("ag-grid-vue",{staticClass:"ag-theme-alpine flex-grow:1",staticStyle:{height:"500px"},attrs:{columnDefs:t.columnDefs,defaultColDef:t.defaultColumnDef,rowData:t.activities,roomsData:t.rooms,enableCellTextSelection:!0,animateRows:"true"}}),t._v(" "),e("Modal",{attrs:{value:t.modal.show}},[e("div",{staticClass:"round border drop-shadow p:16|32 bg:white"},[e("h2",[t._v(t._s(t.$t("common.actions."+t.modal.mode))+t._s(t.$t("activity.itemName")))]),t._v(" "),e("Field",{attrs:{field:"活動狀態",error:t.modal.errorFields.activity_is_ongoing}},[e("Select",{attrs:{error:t.modal.errorFields.activity_is_ongoing},model:{value:t.modal.form.activity_is_ongoing,callback:function(e){t.$set(t.modal.form,"activity_is_ongoing",e)},expression:"modal.form.activity_is_ongoing"}},[e("option",{attrs:{value:"NO"}},[t._v("未啟用")]),t._v(" "),e("option",{attrs:{value:"YES"}},[t._v("啟用")]),t._v(" "),e("option",{attrs:{value:"FORCEDYES"}},[t._v("強制啟用")])])],1),t._v(" "),e("Field",{attrs:{field:"活動空間",error:t.modal.errorFields.room_id}},[e("Select",{attrs:{error:t.modal.errorFields.room_id},model:{value:t.modal.form.room_id,callback:function(e){t.$set(t.modal.form,"room_id",e)},expression:"modal.form.room_id"}},t._l(t.rooms,(function(r){return e("option",{key:r.room_id,domProps:{value:r.room_id}},[t._v("\n            "+t._s(r.room_name)+"\n          ")])})),0)],1),t._v(" "),e("Field",{attrs:{field:"活動名稱",error:t.modal.errorFields.activity_name}},[e("InputText",{attrs:{error:t.modal.errorFields.activity_name},model:{value:t.modal.form.activity_name,callback:function(e){t.$set(t.modal.form,"activity_name",e)},expression:"modal.form.activity_name"}})],1),t._v(" "),e("Field",{attrs:{field:"系統內名稱",error:t.modal.errorFields.activity_system_name}},[e("InputText",{attrs:{error:t.modal.errorFields.activity_system_name},model:{value:t.modal.form.activity_system_name,callback:function(e){t.$set(t.modal.form,"activity_system_name",e)},expression:"modal.form.activity_system_name"}})],1),t._v(" "),e("Field",{attrs:{field:"開始時間",error:t.modal.errorFields.activity_time_start}},[e("InputText",{attrs:{error:t.modal.errorFields.activity_time_start},model:{value:t.modal.form.activity_time_start,callback:function(e){t.$set(t.modal.form,"activity_time_start",e)},expression:"modal.form.activity_time_start"}})],1),t._v(" "),e("Field",{attrs:{field:"結束時間",error:t.modal.errorFields.activity_time_end}},[e("InputText",{attrs:{error:t.modal.errorFields.activity_time_end},model:{value:t.modal.form.activity_time_end,callback:function(e){t.$set(t.modal.form,"activity_time_end",e)},expression:"modal.form.activity_time_end"}})],1),t._v(" "),e("Field",{attrs:{field:"R18 活動",error:t.modal.errorFields.activity_adult_only}},[e("Select",{attrs:{error:t.modal.errorFields.activity_adult_only},model:{value:t.modal.form.activity_adult_only,callback:function(e){t.$set(t.modal.form,"activity_adult_only",e)},expression:"modal.form.activity_adult_only"}},[e("option",{attrs:{value:"0"}},[t._v("否")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("是")])])],1),t._v(" "),e("Field",{attrs:{field:"重複進入的次數限制",error:t.modal.errorFields.activity_entrance_count_limit}},[e("InputText",{attrs:{error:t.modal.errorFields.activity_entrance_count_limit},model:{value:t.modal.form.activity_entrance_count_limit,callback:function(e){t.$set(t.modal.form,"activity_entrance_count_limit",e)},expression:"modal.form.activity_entrance_count_limit"}})],1),t._v(" "),e("Field",{attrs:{field:"總參與人數限制",error:t.modal.errorFields.activity_participant_count_limit}},[e("InputText",{attrs:{error:t.modal.errorFields.activity_participant_count_limit},model:{value:t.modal.form.activity_participant_count_limit,callback:function(e){t.$set(t.modal.form,"activity_participant_count_limit",e)},expression:"modal.form.activity_participant_count_limit"}})],1),t._v(" "),e("Field",{attrs:{field:"參與等級限制（身份代號、多個的話先用空白隔開）",error:t.modal.errorFields.activity_require_levels}},[e("InputText",{attrs:{error:t.modal.errorFields.activity_require_levels},model:{value:t.modal.form.activity_require_levels,callback:function(e){t.$set(t.modal.form,"activity_require_levels",e)},expression:"modal.form.activity_require_levels"}})],1),t._v(" "),e("Field",{attrs:{field:"須事前報名",error:t.modal.errorFields.activity_require_signup}},[e("Select",{attrs:{error:t.modal.errorFields.activity_require_signup},model:{value:t.modal.form.activity_require_signup,callback:function(e){t.$set(t.modal.form,"activity_require_signup",e)},expression:"modal.form.activity_require_signup"}},[e("option",{attrs:{value:"0"}},[t._v("否")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("是")])])],1),t._v(" "),e("Field",{attrs:{field:"最低參與時間",error:t.modal.errorFields.activity_minimum_stay_time}},[e("InputText",{attrs:{error:t.modal.errorFields.activity_minimum_stay_time},model:{value:t.modal.form.activity_minimum_stay_time,callback:function(e){t.$set(t.modal.form,"activity_minimum_stay_time",e)},expression:"modal.form.activity_minimum_stay_time"}})],1),t._v(" "),e("Field",{attrs:{field:"參與回饋分數",error:t.modal.errorFields.activity_reward_points}},[e("InputText",{attrs:{error:t.modal.errorFields.activity_reward_points},model:{value:t.modal.form.activity_reward_points,callback:function(e){t.$set(t.modal.form,"activity_reward_points",e)},expression:"modal.form.activity_reward_points"}})],1),t._v(" "),e("Field",{attrs:{field:"離場須打卡",error:t.modal.errorFields.activity_require_checkout}},[e("Select",{attrs:{error:t.modal.errorFields.activity_require_checkout},model:{value:t.modal.form.activity_require_checkout,callback:function(e){t.$set(t.modal.form,"activity_require_checkout",e)},expression:"modal.form.activity_require_checkout"}},[e("option",{attrs:{value:"0"}},[t._v("否")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("是")])])],1),t._v(" "),e("Field",{attrs:{field:t.取票活動代碼,error:t.modal.errorFields.mit_videovote_reward_type}},[e("InputText",{attrs:{error:t.modal.errorFields.mit_videovote_reward_type},model:{value:t.modal.form.mit_videovote_reward_type,callback:function(e){t.$set(t.modal.form,"mit_videovote_reward_type",e)},expression:"modal.form.mit_videovote_reward_type"}})],1),t._v(" "),e("Field",{attrs:{field:t.$t("common.fields.remarks"),error:t.modal.errorFields.remarks}},[e("InputText",{attrs:{error:t.modal.errorFields.remarks},model:{value:t.modal.form.remarks,callback:function(e){t.$set(t.modal.form,"remarks",e)},expression:"modal.form.remarks"}})],1),t._v(" "),e("div",{staticClass:"flex"},[e("Button",{staticClass:"mr:8",attrs:{type:"negative"},on:{click:function(e){return t.modal.show=!1}}},[t._v(t._s(t.$t("common.actions.cancel")))]),t._v(" "),e("Button",{on:{click:t.submitModal}},[t._v(t._s(t.$t("common.actions.submit")))])],1)],1)]),t._v(" "),e("Dialog",{attrs:{value:t.deleteDialog.show,yesText:t.$t("common.actions.delete"),yesType:"negative",noText:t.$t("common.actions.cancel"),noType:"secondary",title:t.$t("common.messages.confirmDelete.title"),description:t.$t("common.messages.confirmDelete.description")},on:{yes:t.deleteActivity,no:function(e){return t.deleteDialog.show=!1}}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Loading:r(172).default,Button:r(374).default,Select:r(380).default,Field:r(381).default,InputText:r(379).default,Modal:r(382).default,Dialog:r(383).default})}}]);