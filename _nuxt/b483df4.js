(window.webpackJsonp=window.webpackJsonp||[]).push([[72,26],{392:function(t,n,e){"use strict";e.r(n);var o={props:["logo"]},r=e(20),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"m:16|8 cursor:pointer border-bottom:1px|solid|transparent border-bottom:1px|solid|black:hover color:black",on:{click:function(n){return t.$emit("click")}}},[t.logo?n("i",{class:"mdi mdi-"+t.logo}):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},585:function(t,n,e){"use strict";e.r(n);var o=e(3),r=(e(26),e(518),e(71)),c={name:"page-verify-account",layout:"auth",data:function(){return{loading:!0,sent:!1,account_verification_token:this.$route.params.token}},mounted:function(){this.verifyAccount(),this.$store.commit("auth/setTitle",this.$t("auth.actions.verifyEmail"))},methods:{verifyAccount:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!0,n.next=3,t.$axios.$post("/api/auth/register/verify",{account_verification_token:t.account_verification_token}).then((function(n){r.a.showSnackbar({message:t.$t("auth.messages.accountVerified"),colorType:"positive",duration:5e3,position:"top"}),t.$router.push(t.localePath("/auth/login"))})).catch((function(t){r.a.showRequestError(t)}));case 3:t.sent=!0,t.loading=!1;case 5:case"end":return n.stop()}}),n)})))()}}},l=e(20),component=Object(l.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"flex flex-center font-weight:bold flex-direction:column"},[n("Loading",{model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}}),t._v(" "),t.sent?t._e():n("span",[t._v(t._s(t.$t("auth.messages.verifing")))]),t._v(" "),n("TextButton",{on:{click:function(n){t.$router.push(t.localePath("/auth/resendVerificationEmail"))}}},[t._v("\n    "+t._s(t.$t("auth.actions.resendVerificationMail")))]),t._v(" "),n("TextButton",{on:{click:function(n){t.$router.push(t.localePath("/auth/login"))}}},[t._v("\n    "+t._s(t.$t("auth.actions.backToLoginPage")))])],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Loading:e(172).default,TextButton:e(392).default})}}]);