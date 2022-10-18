(window.webpackJsonp=window.webpackJsonp||[]).push([[56,7,13,16,18,20,21,25],{374:function(e,t,r){"use strict";r.r(t);var n=r(137),o=r.n(n),l={props:{type:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},computed:{computedStyle:function(){return{background:o.a[this.type].background,color:o.a[this.type].color}}},mounted:function(){this.button=this.$refs.button}},d=r(20),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"position:relative"},[t("button",{ref:"button",staticClass:"b:0 p:8|16 w:100% border-radius:4 cursor:pointer transform:translateY(-2):hover transition:0.2s",style:e.computedStyle,on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[e._t("default")],2),e._v(" "),e.disabled?t("div",{staticClass:"position:absolute top:0 left:0 w:100% h:100% background:rgba(0,0,0,0.4)"}):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:r(374).default})},375:function(e,t,r){"use strict";var n=r(14),o=r(7),l=r(5),d=r(106),c=r(27),f=r(17),m=r(173),_=r(66),v=r(105),h=r(244),k=r(4),y=r(88).f,x=r(60).f,w=r(22).f,T=r(378),S=r(377).trim,C="Number",O=o.Number,R=O.prototype,$=o.TypeError,N=l("".slice),F=l("".charCodeAt),j=function(e){var t=h(e,"number");return"bigint"==typeof t?t:D(t)},D=function(e){var t,r,n,o,l,d,c,code,f=h(e,"number");if(v(f))throw $("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=S(f),43===(t=F(f,0))||45===t){if(88===(r=F(f,2))||120===r)return NaN}else if(48===t){switch(F(f,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(d=(l=N(f,2)).length,c=0;c<d;c++)if((code=F(l,c))<48||code>o)return NaN;return parseInt(l,n)}return+f};if(d(C,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var I,E=function(e){var t=arguments.length<1?0:O(j(e)),r=this;return _(R,r)&&k((function(){T(r)}))?m(Object(t),r,E):t},z=n?y(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),B=0;z.length>B;B++)f(O,I=z[B])&&!f(E,I)&&w(E,I,x(O,I));E.prototype=R,R.constructor=E,c(o,C,E,{constructor:!0})}},376:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},377:function(e,t,r){var n=r(5),o=r(39),l=r(16),d=r(376),c=n("".replace),f="["+d+"]",m=RegExp("^"+f+f+"*"),_=RegExp(f+f+"*$"),v=function(e){return function(t){var r=l(o(t));return 1&e&&(r=c(r,m,"")),2&e&&(r=c(r,_,"")),r}};e.exports={start:v(1),end:v(2),trim:v(3)}},378:function(e,t,r){var n=r(5);e.exports=n(1..valueOf)},379:function(e,t,r){"use strict";r.r(t);r(375);var n=r(137),o=r.n(n),l={props:{field:{type:String,default:""},type:{type:String,default:"text"},value:{default:""},placeholder:{type:String,default:""},error:{default:null},required:{type:Boolean,default:!1},maxlength:{type:Number,default:null},disabled:{type:Boolean,default:!1}},mounted:function(){this.input=this.$refs.input},data:function(){return{COLORS:o.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},d=r(20),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+" :\n  ")]):e._e(),e._v(" "),t("input",{ref:"input",style:e.computedStyle,attrs:{type:e.type,placeholder:e.placeholder,required:e.required,maxlength:e.maxlength,disabled:e.disabled},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}})])}),[],!1,null,null,null);t.default=component.exports},380:function(e,t,r){"use strict";r.r(t);var n=r(137),o=r.n(n),l={props:{field:{type:String,default:""},value:{default:""},error:{default:null},required:{type:Boolean,default:!1}},data:function(){return{COLORS:o.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},d=r(20),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("div",[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+" :\n  ")]):e._e(),e._v(" "),t("select",{style:e.computedStyle,attrs:{required:e.required},domProps:{value:e.value},on:{change:function(t){return e.$emit("input",t.target.value)}}},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Select:r(380).default})},381:function(e,t,r){"use strict";r.r(t);r(31),r(21),r(38),r(11),r(48),r(35),r(49);var n=r(13);r(87);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=r(137),c=r.n(d),f={props:{field:{type:String,default:""},error:{default:null}},data:function(){return{COLORS:c.a}},computed:{computedErrorStyle:function(){return{color:c.a.negative.background}}}},m=r(20),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"my:8"},[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+"\n  ")]):e._e(),e._v(" "),e._t("default",null,null,l(l({},e.$props),e.$attrs)),e._v(" "),e.error?t("div",{staticClass:"font-size:0.8rem mt:4",style:e.computedErrorStyle},[e._v("\n    "+e._s(e.error.join("\n"))+"\n  ")]):e._e()],2)}),[],!1,null,null,null);t.default=component.exports},382:function(e,t,r){"use strict";r.r(t);var n={props:["value"]},o=r(20),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return e.value?t("div",{staticClass:"position:fixed top:0 left:0 w:100vw h:100vh z-index:2 bg:rgba(0,0,0,0.5)"},[t("div",{staticClass:"w:auto h:100% overflow:auto p:32"},[e._t("default")],2)]):e._e()}),[],!1,null,null,null);t.default=component.exports},383:function(e,t,r){"use strict";r.r(t);r(21),r(40);var n={props:{value:{type:Boolean,default:!1},title:{type:String,default:""},description:{type:String,default:""},yesText:{type:String,default:""},yesType:{type:String,default:"primary"},noText:{type:String,default:""},noType:{type:String,default:"negative"}}},o=r(20),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return e.value?t("div",{staticClass:"position:fixed top:0 left:0 w:100vw h:100vh z-index:2 bg:rgba(0,0,0,0.5) flex flex-center"},[t("div",{staticClass:"round border bg:white min-width:300"},[t("div",{staticClass:"p:16 border-bottom:2px|rgba(0,0,0,0.2)|solid font-size:1.2rem font-weight:bold"},[e._v("\n      "+e._s(e.title)+"\n    ")]),e._v(" "),t("div",{staticClass:"p:32 border-bottom:2px|rgba(0,0,0,0.2)|solid"},[e._v("\n      "+e._s(e.description)+"\n    ")]),e._v(" "),t("div",{staticClass:"p:16 flex justify-content:flex-end"},[e.noText?t("Button",{staticClass:"mr:8",attrs:{type:e.noType},on:{click:function(t){return e.$emit("no")}}},[e._v("\n        "+e._s(e.noText)+"\n      ")]):e._e(),e._v(" "),e.yesText?t("Button",{attrs:{type:e.yesType},on:{click:function(t){return e.$emit("yes")}}},[e._v("\n        "+e._s(e.yesText)+"\n      ")]):e._e()],1)])]):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:r(374).default})},386:function(e,t,r){"use strict";r.r(t);var n={},o=r(20),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex"},[t("Button",{staticClass:"mr:8",on:{click:function(t){return e.params.editHandler(e.params)}}},[e._v(e._s(e.$t("common.actions.edit")))]),e._v(" "),t("Button",{attrs:{type:"negative"},on:{click:function(t){return e.params.deleteHandler(e.params)}}},[e._v(e._s(e.$t("common.actions.delete")))])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:r(374).default})},573:function(e,t,r){"use strict";r.r(t);r(41);var n=r(3),o=(r(26),r(50),r(375),r(71)),l=r(72),d=r.n(l),c={layout:"admin",components:{ReaderButtonsCellRenderer:r(386).default},data:function(){var e={true:"是",false:"否"};return{loading:!1,columnDefs:[{field:"buttons",headerName:" ",cellRenderer:"ReaderButtonsCellRenderer",cellRendererParams:{copyLinkHandler:this.copyLinkHandler,editHandler:this.editHandler,deleteHandler:this.deleteHandler},minWidth:256,sortable:!1,filter:!1},{field:"raffle_ticket_id",headerName:"摸彩券編號"},{field:"attendee_id",headerName:"參加者（購買者）",valueFormatter:function(e){var t=e.data.z.attendees[e.data.attendee_id];return"".concat(t.attendee_no," - ").concat(t.attendee_nickname)},filterValueGetter:function(e){var t=e.data.z.attendees[e.data.attendee_id];return"".concat(t.attendee_no," - ").concat(t.attendee_nickname)}},{field:"raffle_ticket_batch_no",headerName:"本次購買的第 N 張"},{field:"raffle_ticket_printed",headerName:"是否已列印",valueFormatter:function(t){return e[t.data.raffle_ticket_printed]},filterValueGetter:function(t){return e[t.data.raffle_ticket_printed]}},{field:"raffle_ticket_batch_total",headerName:"本次總購買張數"},{field:"raffle_ticket_got_prize",headerName:"是否中獎",valueFormatter:function(t){return e[t.data.raffle_ticket_got_prize]},filterValueGetter:function(t){return e[t.data.raffle_ticket_got_prize]}},{field:"remarks",headerName:this.$t("common.fields.remarks")}],defaultColumnDef:{sortable:!0,filter:!0,floatingFilter:!0,resizable:!0},config:d.a.getConfig(),adminConfig:d.a.getAdminConfig(),raffleTickets:[],attendees:{},dataLoaded:{},modal:{show:!1,mode:"add",errorFields:{},form:{raffle_ticket_id:null,attendee_id:"",raffle_ticket_batch_no:"",raffle_ticket_printed:"",raffle_ticket_batch_total:"",raffle_ticket_got_prize:"",remarks:""}},deleteDialog:{show:!1,raffleTicketID:null}}},mounted:function(){this.getAttendees()},methods:{getRaffleTickets:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.get("/api/admin/raffleTickets").then((function(t){var r={attendees:e.attendees};t.data.raffleTickets.map((function(e){e.z=r})),e.raffleTickets=t.data.raffleTickets})).catch((function(e){o.a.showRequestError(e)}));case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},getAttendees:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.get("/api/admin/attendees").then((function(t){e.attendees={},t.data.attendees.map((function(t){e.attendees[t.attendee_id]=t})),e.dataLoaded.attendees=!0,e.dataLoaded.attendees&&e.getRaffleTickets()})).catch((function(e){o.a.showRequestError(e)}));case 3:case"end":return t.stop()}}),t)})))()},showModal:function(e){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.modal.show=!0,this.modal.mode=e,this.$set(this.modal,"errorFields",{}),this.modal.form.raffle_ticket_id=data?data.raffle_ticket_id:null,this.modal.form.attendee_id=data?data.attendee_id:"",this.modal.form.raffle_ticket_batch_no=data?data.raffle_ticket_batch_no:"",this.modal.form.raffle_ticket_printed=data?Number(data.raffle_ticket_printed):"",this.modal.form.raffle_ticket_batch_total=data?data.raffle_ticket_batch_total:"",this.modal.form.raffle_ticket_got_prize=data?Number(data.raffle_ticket_got_prize):"",this.modal.form.remarks=data?data.remarks:""},submitModal:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,r="add"==e.modal.mode?"/api/admin/raffleTicket":"/api/admin/raffleTicket/"+e.modal.form.raffle_ticket_id,n="add"==e.modal.mode?"post":"put",t.next=5,e.$axios[n](r,e.modal.form).then((function(t){o.a.showSnackbar({message:"add"==e.modal.mode?e.$t("common.messages.addSucceed"):e.$t("common.messages.updateSucceed"),colorType:"positive"}),e.modal.show=!1,e.getRaffleTickets()})).catch((function(t){t.response&&"422"==t.response.status&&e.$set(e.modal,"errorFields",t.response.data.errors),o.a.showRequestError(t)}));case 5:e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},deleteRaffleTicket:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.delete("/api/admin/raffleTicket/"+e.deleteDialog.raffleTicketID).then((function(t){o.a.showSnackbar({message:e.$t("common.messages.deleteSucceed"),colorType:"positive"}),e.deleteDialog.show=!1,e.getRaffleTickets()})).catch((function(e){o.a.showRequestError(e)}));case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},editHandler:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.showModal("edit",e.data);case 1:case"end":return r.stop()}}),r)})))()},deleteHandler:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.deleteDialog.raffleTicketID=e.data.raffle_ticket_id,t.deleteDialog.show=!0;case 2:case"end":return r.stop()}}),r)})))()}}},f=c,m=r(20),component=Object(m.a)(f,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex flex-direction:column h:100%"},[t("Loading",{attrs:{value:e.loading}}),e._v(" "),t("Button",{on:{click:function(t){return e.showModal("add")}}},[e._v("新增摸彩券銷售紀錄")]),e._v(" "),t("ag-grid-vue",{staticClass:"ag-theme-alpine flex-grow:1",staticStyle:{height:"500px"},attrs:{columnDefs:e.columnDefs,defaultColDef:e.defaultColumnDef,rowData:e.raffleTickets,enableCellTextSelection:!0,animateRows:"true"}}),e._v(" "),t("Modal",{attrs:{value:e.modal.show}},[t("div",{staticClass:"round border drop-shadow p:16|32 bg:white"},[t("h2",[e._v("\n        "+e._s(e.$t("common.actions."+e.modal.mode))+" 摸彩券銷售紀錄\n      ")]),e._v(" "),t("Field",{attrs:{field:"購買者（參加者）",error:e.modal.errorFields.attendee_id}},[t("Select",{attrs:{error:e.modal.errorFields.attendee_id},model:{value:e.modal.form.attendee_id,callback:function(t){e.$set(e.modal.form,"attendee_id",t)},expression:"modal.form.attendee_id"}},e._l(e.attendees,(function(r){return t("option",{key:r.attendee_id,domProps:{value:r.attendee_id}},[e._v("\n            "+e._s("".concat(r.attendee_no," - ").concat(r.attendee_nickname))+"\n          ")])})),0)],1),e._v(" "),t("Field",{attrs:{field:"本次購買的第 N 張",error:e.modal.errorFields.raffle_ticket_batch_no}},[t("InputText",{attrs:{error:e.modal.errorFields.raffle_ticket_batch_no},model:{value:e.modal.form.raffle_ticket_batch_no,callback:function(t){e.$set(e.modal.form,"raffle_ticket_batch_no",t)},expression:"modal.form.raffle_ticket_batch_no"}})],1),e._v(" "),t("Field",{attrs:{field:"是否已列印",error:e.modal.errorFields.raffle_ticket_printed}},[t("Select",{attrs:{error:e.modal.errorFields.raffle_ticket_printed},model:{value:e.modal.form.raffle_ticket_printed,callback:function(t){e.$set(e.modal.form,"raffle_ticket_printed",t)},expression:"modal.form.raffle_ticket_printed"}},[t("option",{attrs:{value:"0"}},[e._v("否")]),e._v(" "),t("option",{attrs:{value:"1"}},[e._v("是")])])],1),e._v(" "),t("Field",{attrs:{field:"本次總購買張數",error:e.modal.errorFields.raffle_ticket_batch_total}},[t("InputText",{attrs:{error:e.modal.errorFields.raffle_ticket_batch_total},model:{value:e.modal.form.raffle_ticket_batch_total,callback:function(t){e.$set(e.modal.form,"raffle_ticket_batch_total",t)},expression:"modal.form.raffle_ticket_batch_total"}})],1),e._v(" "),t("Field",{attrs:{field:"是否中獎",error:e.modal.errorFields.raffle_ticket_got_prize}},[t("Select",{attrs:{error:e.modal.errorFields.raffle_ticket_got_prize},model:{value:e.modal.form.raffle_ticket_got_prize,callback:function(t){e.$set(e.modal.form,"raffle_ticket_got_prize",t)},expression:"modal.form.raffle_ticket_got_prize"}},[t("option",{attrs:{value:"0"}},[e._v("否")]),e._v(" "),t("option",{attrs:{value:"1"}},[e._v("是")])])],1),e._v(" "),t("Field",{attrs:{field:e.$t("common.fields.remarks"),error:e.modal.errorFields.remarks}},[t("InputText",{attrs:{error:e.modal.errorFields.remarks},model:{value:e.modal.form.remarks,callback:function(t){e.$set(e.modal.form,"remarks",t)},expression:"modal.form.remarks"}})],1),e._v(" "),t("div",{staticClass:"flex"},[t("Button",{staticClass:"mr:8",attrs:{type:"negative"},on:{click:function(t){return e.modal.show=!1}}},[e._v(e._s(e.$t("common.actions.cancel")))]),e._v(" "),t("Button",{on:{click:e.submitModal}},[e._v(e._s(e.$t("common.actions.submit")))])],1)],1)]),e._v(" "),t("Dialog",{attrs:{value:e.deleteDialog.show,yesText:e.$t("common.actions.delete"),yesType:"negative",noText:e.$t("common.actions.cancel"),noType:"secondary",title:e.$t("common.messages.confirmDelete.title"),description:e.$t("common.messages.confirmDelete.description")},on:{yes:e.deleteRaffleTicket,no:function(t){return e.deleteDialog.show=!1}}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Loading:r(172).default,Button:r(374).default,Select:r(380).default,Field:r(381).default,InputText:r(379).default,Modal:r(382).default,Dialog:r(383).default})}}]);