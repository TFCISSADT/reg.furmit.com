(window.webpackJsonp=window.webpackJsonp||[]).push([[55,6,7,18],{374:function(t,e,n){"use strict";n.r(e);var r=n(137),o=n.n(r),c={props:{type:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},computed:{computedStyle:function(){return{background:o.a[this.type].background,color:o.a[this.type].color}}},mounted:function(){this.button=this.$refs.button}},l=n(20),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"position:relative"},[e("button",{ref:"button",staticClass:"b:0 p:8|16 w:100% border-radius:4 cursor:pointer transform:translateY(-2):hover transition:0.2s",style:t.computedStyle,on:{click:function(e){return e.preventDefault(),t.$emit("click")}}},[t._t("default")],2),t._v(" "),t.disabled?e("div",{staticClass:"position:absolute top:0 left:0 w:100% h:100% background:rgba(0,0,0,0.4)"}):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(374).default})},376:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},377:function(t,e,n){var r=n(5),o=n(39),c=n(16),l=n(376),d=r("".replace),f="["+l+"]",m=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),h=function(t){return function(e){var n=c(o(e));return 1&t&&(n=d(n,m,"")),2&t&&(n=d(n,v,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},381:function(t,e,n){"use strict";n.r(e);n(31),n(21),n(38),n(11),n(48),n(35),n(49);var r=n(13);n(87);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=n(137),d=n.n(l),f={props:{field:{type:String,default:""},error:{default:null}},data:function(){return{COLORS:d.a}},computed:{computedErrorStyle:function(){return{color:d.a.negative.background}}}},m=n(20),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"my:8"},[t.field?e("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[t._v("\n    "+t._s(t.field)+"\n  ")]):t._e(),t._v(" "),t._t("default",null,null,c(c({},t.$props),t.$attrs)),t._v(" "),t.error?e("div",{staticClass:"font-size:0.8rem mt:4",style:t.computedErrorStyle},[t._v("\n    "+t._s(t.error.join("\n"))+"\n  ")]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports},385:function(t,e,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("64709a20",content,!0,{sourceMap:!1})},387:function(t,e,n){"use strict";n.r(e);var r={props:["attendee"]},o=(n(389),n(20)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.attendee&&!t.attendee.error?e("div",[e("div",{staticClass:"font-size:1.5rem mt:16"},[t._v("\n    "+t._s(t.$t("attendee.messages.cardInfo"))+"\n  ")]),t._v(" "),e("div",{staticClass:"round border drop-shadow p:16|32 bg:white flex flex-direction:column@<md mt:8 w:fit-content font-size:1.4rem align-items:center"},[e("div",{staticClass:"cardNumberInput"},[t._v("\n      "+t._s(t.attendee.attendee_no)+"\n      "),2==t.attendee.attendee_receive_status?e("div",{staticClass:"font-size:0.9rem mt:4"},[t._v("\n        他人代領\n      ")]):t._e(),t._v(" "),t.attendee.attendee_is_volunteer?e("div",{staticClass:"font-size:0.9rem mt:4"},[t._v("\n        志工\n      ")]):t._e()]),t._v(" "),t.attendee.attendee_card_name_1?e("div",{style:{borderLeft:"2px solid #cecece",marginLeft:"32px",paddingLeft:"32px",textAlign:"center"}},[t._v("\n      "+t._s(t.attendee.attendee_card_name_1)),e("br"),t._v("\n      "+t._s(t.attendee.attendee_card_name_2)+"\n    ")]):e("div",{style:{borderLeft:"2px solid #cecece",marginLeft:"32px",paddingLeft:"32px",textAlign:"center"}},[t._v("\n      "+t._s(t.attendee.attendee_nickname)+"\n    ")])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},389:function(t,e,n){"use strict";n(385)},390:function(t,e,n){var r=n(61)(!1);r.push([t.i,'.cardNumberInput{font-family:"Courier New",monospace;font-weight:700;text-align:center}',""]),t.exports=r},406:function(t,e,n){"use strict";var r=n(2),o=n(377).trim;r({target:"String",proto:!0,forced:n(407)("trim")},{trim:function(){return o(this)}})},407:function(t,e,n){var r=n(108).PROPER,o=n(4),c=n(376);t.exports=function(t){return o((function(){return!!c[t]()||"​᠎"!=="​᠎"[t]()||r&&c[t].name!==t}))}},408:function(t,e,n){t.exports=n.p+"img/logo.1329a37.webp"},426:function(t,e,n){var content=n(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("6cee57c2",content,!0,{sourceMap:!1})},494:function(t,e,n){"use strict";n(426)},495:function(t,e,n){var r=n(61)(!1);r.push([t.i,"table.furstarsRundown[data-v-423af122]{border-collapse:collapse}table.furstarsRundown td[data-v-423af122]{padding:4px 8px;border-bottom:1px solid #000}table.furstarsRundown td[data-v-423af122]:first-child,td[data-v-423af122]:last-child{padding:4px 0}",""]),t.exports=r},572:function(t,e,n){"use strict";n.r(e);n(36);var r=n(3),o=(n(26),n(45),n(50),n(31),n(68),n(41),n(87),n(406),n(71)),c=n(387),l=n(408),d=n.n(l),f=[],m={layout:"admin",components:{AttendeeInfoResume:c.default},data:function(){return{loading:!1,searchInput:null,targetQuantity:null,purchaseHistory:null,purchasedTickets:null,kioskGroup:localStorage.getItem("kioskGroup"),targetKioskGroup:null}},mounted:function(){this.queryPrintItems(!0)},watch:{targetQuantity:function(t,e){t<0&&(this.targetQuantity=0),t>200&&(o.a.showSnackbar({message:"每次購買的數量不能高於 200 張",colorType:"negative"}),this.targetQuantity=200)}},methods:{isNumber:function(t){if(13==t.keyCode)this.buy();else{var e=t.key;["0","1","2","3","4","5","6","7","8","9"].includes(e)||t.preventDefault()}},timestampToDateTime:function(t){return new Date(1e3*t).toLocaleString("zh-TW",{hour12:!1,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})},setKioskGroup:function(){this.targetKioskGroup&&(localStorage.setItem("kioskGroup",this.targetKioskGroup),this.kioskGroup=localStorage.getItem("kioskGroup"))},twoDigits:function(input){return parseInt(input)<10?"0"+input:input},queryPrintItems:function(){var t=arguments,e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.length>0&&void 0!==t[0]&&t[0],!localStorage.getItem("pullRaffleTickets")&&!r){n.next=5;break}return localStorage.removeItem("pullRaffleTickets",!1),n.next=5,e.$axios.get("/api/admin/raffleTicket/print/".concat(e.kioskGroup)).then((function(t){t.data.tickets;var n={};t.data.attendees.map((function(t){n[t.attendee_id]=t}));var r={};t.data.tickets.map((function(t){r[t.attendee_id]||(r[t.attendee_id]=[]),r[t.attendee_id].push(t)})),Object.keys(r).map((function(t){var o=r[t];e.printTickets(n[t],o,o[0].raffle_ticket_is_reprint)}))})).catch((function(t){o.a.showRequestError(t)}));case 5:setTimeout((function(){e.queryPrintItems()}),1e3);case 6:case"end":return n.stop()}}),n)})))()},printTickets:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=[],c=[],l=null;console.log(e),e.map((function(e,d){e.raffle_ticket_id-c.slice(-1)[0]>1&&(o.push(c),c=[]),c.push(e.raffle_ticket_id);var f=new Date(e.created_at),m="".concat(f.getFullYear(),"-").concat(n.twoDigits(f.getMonth()+1),"-").concat(n.twoDigits(f.getDate())," ").concat(n.twoDigits(f.getHours()),":").concat(n.twoDigits(f.getMinutes()),":").concat(n.twoDigits(f.getSeconds()));l||(l=m),n.schedulePrintSingleTicket(l,e.raffle_ticket_id,r,t.attendee_no,t.attendee_nickname)})),o.push(c);var d=[];o.map((function(t){d.push("No.".concat(t[0]," ~ No.").concat(t.slice(-1)[0]))})),this.schedulePrintResume(r,t.attendee_no,t.attendee_nickname,l,d,e.length),f=f.reverse(),console.log(f),this.startPrint()},startPrint:function(){var t=this,e=f.pop();e?("ticket"==e.itemType?this.printSingleTicket(e.ticketTime,e.ticketID,e.rePrint,e.attendeeNo,e.attendeeNickname):this.printResume(e.rePrint,e.attendeeNo,e.attendeeNickname,e.ticketTime,e.serials,e.ticketCount),setTimeout((function(){t.startPrint()}),500)):localStorage.removeItem("raffleTicketsPrinting")},schedulePrintSingleTicket:function(t,e,n,r,o){f.push({itemType:"ticket",ticketTime:t,ticketID:e,rePrint:n,attendeeNo:r,attendeeNickname:o})},printSingleTicket:function(t,e,n,r,o){var c='<html>\n            <head>\n              <style>*{box-sizing:border-box;font-weight:bold}html,body{margin:0;border:0}</style>\n            </head>\n            <body style="display:flex">\n              <div style="width:50%;padding-right:4px;display:flex;flex-direction:column;justify-content:center">\n              <img src="'.concat(d.a,'" style="width:100%">\n              <div style="font-size:8px;margin-top:8px;font-family:monospace">\n              <div style="letter-spacing:-0.5px">').concat(t,"</div>\n              <div>抽獎聯 No.").concat(e).concat(n?" *":"",'</div>\n              </div>\n              </div>\n              <div style="width:50%;padding-left:4px;float:right;display:flex;flex-direction:column;justify-content:center">\n              <div style="background-color:black;padding:3px 6px;color:white;text-align:center;letter-spacing:4px;font-size:22px;font-weight:bold;font-family:monospace">\n                ').concat(r,'\n              </div>\n              <div style="font-size:14px;font-weight:bold;margin-top:8px">\n                ').concat(o,"\n              </div>\n              </div>\n            </body>\n          </html>\n          "),l=window.open("","Print raffle ticket");l.document.write(c),l.document.close(),l.focus(),l.print(),l.close(),this.markAsPrinted(e)},schedulePrintResume:function(t,e,n,r,o,c){f.push({itemType:"resume",rePrint:t,attendeeNo:e,attendeeNickname:n,ticketTime:r,serials:o,ticketCount:c})},printResume:function(t,e,n,r,o,c){var l='\n          <html>\n          <head>\n          <style>*{box-sizing:border-box;font-weight:bold;font-family:verdana}html,body{margin:0;border:0;font-size:12px}</style>\n          </head>\n          <body style="text-align:center">\n          <div><span style="font-weight:normal">FurMIT 2024</span> 抽獎存根聯'.concat(t?"（補）":"","<br>Raffle Ticket Stub").concat(t?" (re)":"",'</div>\n          <div style="margin-top:8px;background-color:black;padding:3px 6px;color:white;text-align:center;letter-spacing:4px;font-size:20px;font-weight:bold;font-family:monospace;display:inline-block">\n          ').concat(e,'\n          </div>\n          <div style="margin-top:8px">\n          ').concat(n,'\n          </div>\n          <div style="font-size:8px;margin-top:8px;font-family:monospace">\n          <div style="">').concat(r,'</div>\n          <div style="margin-top:4px">').concat(o.join("<br />"),"</div>\n          </div>\n          </div>\n          </body>\n          </html>\n        "),d=window.open("","Raffle ticket purchase resume");d.document.write(l),d.document.close(),d.focus(),d.print(),d.close()},markAsPrinted:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,e,n.next=4,e.$axios.post("/api/admin/raffleTicket/".concat(t,"/print")).then((function(e){console.log("printed",t)})).catch((function(t){o.a.showRequestError(t)}));case 4:e.loading=!1;case 5:case"end":return n.stop()}}),n)})))()},rePrint:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=prompt("請確認要補印的摸彩券編號（可用 ~ 選擇範圍）",t+(e?" ~ ".concat(e):""));if(""!=n){var r,o,c=n.split("~")[0].trim();if(n.split("~").length>1)r=null!==(o=n.split("~")[1].trim())&&void 0!==o?o:null;console.log("target tickets",c,r);var l=[];if(r)for(var d=[],i=c;i<=r;i++)this.purchasedTickets[i]?(console.log("re print ticket",i),l.push(this.purchasedTickets[i])):(d.push(i),console.log("skipped non-purchased ticket",i));else this.purchasedTickets[c]&&l.push(this.purchasedTickets[c]);this.printTickets(l,!0)}}}},v=m,h=(n(494),n(20)),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p:16 overflow:auto"},[e("Loading",{attrs:{value:t.loading}}),t._v(" "),e("div",{staticClass:"font-size:2rem"},[t._v("販售摸彩券 "+t._s(t.kioskGroup?"[ 櫃台 ".concat(t.kioskGroup," ]"):""))]),t._v(" "),t.kioskGroup?e("div",[e("hr",{staticClass:"mt:16"}),t._v(" "),e("div",{staticClass:"font-size:1.5rem mt:16 mb:8"},[t._v("待列印項目")]),t._v(" "),t.purchaseHistory?e("div",[Array.isArray(t.purchaseHistory)?e("div",[e("table",{staticClass:"text:center furstarsRundown"},[e("tbody",t._l(t.purchaseHistory,(function(n){return e("tr",{key:n.purchaseTime,staticStyle:{"border-top":"1px solid black"}},[e("td",[t._v(t._s(new Date(n.created_at).toLocaleString()))]),t._v(" "),e("td",[t._v("+"+t._s(n.count))]),t._v(" "),e("td",t._l(n.serials,(function(n){return e("div",{staticClass:"flex mb:4 ai:center"},[e("div",{staticStyle:{"font-variant-numeric":"lining-nums","letter-spacing":"1px"}},[t._v("#"+t._s(("0000000000"+n[0]).slice(-10))+" ~ #"+t._s(("0000000000"+n[n.length-1]).slice(-10)))]),t._v(" "),e("div",{staticClass:"ml:8 px:4 py:2 border:1|solid|black r:3",on:{click:function(e){return t.rePrint(n[0],n[n.length-1])}}},[t._v(" 補印 ")])])})),0)])})),0)])]):e("div",[t._v("沒記錄")])]):t._e()]):e("div",[e("div",{staticClass:"font-size:1.5rem mt:16"},[t._v("販售台編號")]),t._v(" "),e("Field",[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.targetKioskGroup,expression:"targetKioskGroup",modifiers:{number:!0}}],staticStyle:{width:"160px","text-align":"center","font-size":"3rem"},attrs:{type:"number"},domProps:{value:t.targetKioskGroup},on:{keypress:function(e){return t.isNumber(e)},input:function(e){e.target.composing||(t.targetKioskGroup=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),e("div",{staticClass:"flex mt:8"},[e("Button",{ref:"buy",staticClass:"mr:8",on:{click:t.setKioskGroup}},[t._v(" 設定 ")])],1)],1)],1)}),[],!1,null,"423af122",null);e.default=component.exports;installComponents(component,{Loading:n(172).default,Field:n(381).default,Button:n(374).default})}}]);