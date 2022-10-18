(window.webpackJsonp=window.webpackJsonp||[]).push([[35,7,25],{374:function(e,t,r){"use strict";r.r(t);var n=r(137),o=r.n(n),d={props:{type:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},computed:{computedStyle:function(){return{background:o.a[this.type].background,color:o.a[this.type].color}}},mounted:function(){this.button=this.$refs.button}},c=r(20),component=Object(c.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"position:relative"},[t("button",{ref:"button",staticClass:"b:0 p:8|16 w:100% border-radius:4 cursor:pointer transform:translateY(-2):hover transition:0.2s",style:e.computedStyle,on:{click:function(t){return t.preventDefault(),e.$emit("click")}}},[e._t("default")],2),e._v(" "),e.disabled?t("div",{staticClass:"position:absolute top:0 left:0 w:100% h:100% background:rgba(0,0,0,0.4)"}):e._e()])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Button:r(374).default})},375:function(e,t,r){"use strict";var n=r(14),o=r(7),d=r(5),c=r(106),l=r(27),f=r(17),m=r(173),v=r(66),_=r(105),h=r(244),k=r(4),y=r(88).f,w=r(60).f,x=r(22).f,Y=r(378),C=r(377).trim,S="Number",z=o.Number,N=z.prototype,I=o.TypeError,A=d("".slice),R=d("".charCodeAt),T=function(e){var t=h(e,"number");return"bigint"==typeof t?t:E(t)},E=function(e){var t,r,n,o,d,c,l,code,f=h(e,"number");if(_(f))throw I("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=C(f),43===(t=R(f,0))||45===t){if(88===(r=R(f,2))||120===r)return NaN}else if(48===t){switch(R(f,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(c=(d=A(f,2)).length,l=0;l<c;l++)if((code=R(d,l))<48||code>o)return NaN;return parseInt(d,n)}return+f};if(c(S,!z(" 0o1")||!z("0b1")||z("+0x1"))){for(var j,F=function(e){var t=arguments.length<1?0:z(T(e)),r=this;return v(N,r)&&k((function(){Y(r)}))?m(Object(t),r,F):t},O=n?y(z):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;O.length>P;P++)f(z,j=O[P])&&!f(F,j)&&x(F,j,w(z,j));F.prototype=N,N.constructor=F,l(o,S,F,{constructor:!0})}},376:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},377:function(e,t,r){var n=r(5),o=r(39),d=r(16),c=r(376),l=n("".replace),f="["+c+"]",m=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),_=function(e){return function(t){var r=d(o(t));return 1&e&&(r=l(r,m,"")),2&e&&(r=l(r,v,"")),r}};e.exports={start:_(1),end:_(2),trim:_(3)}},378:function(e,t,r){var n=r(5);e.exports=n(1..valueOf)},380:function(e,t,r){"use strict";r.r(t);var n=r(137),o=r.n(n),d={props:{field:{type:String,default:""},value:{default:""},error:{default:null},required:{type:Boolean,default:!1}},data:function(){return{COLORS:o.a}},computed:{computedStyle:function(){return this.error&&0!=this.error.length?{border:"1px solid #f44336"}:{}}}},c=r(20),component=Object(c.a)(d,(function(){var e=this,t=e._self._c;return t("div",[e.field?t("div",{staticClass:"my:8 font-weight:bold font-color:gray font-size:1rem"},[e._v("\n    "+e._s(e.field)+" :\n  ")]):e._e(),e._v(" "),t("select",{style:e.computedStyle,attrs:{required:e.required},domProps:{value:e.value},on:{change:function(t){return e.$emit("input",t.target.value)}}},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Select:r(380).default})},418:function(e,t,r){var content=r(460);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(62).default)("e87efec6",content,!0,{sourceMap:!1})},454:function(e,t,r){"use strict";var n=r(2),o=r(455).start;n({target:"String",proto:!0,forced:r(456)},{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},455:function(e,t,r){var n=r(5),o=r(74),d=r(16),c=r(250),l=r(39),f=n(c),m=n("".slice),v=Math.ceil,_=function(e){return function(t,r,n){var c,_,h=d(l(t)),k=o(r),y=h.length,w=void 0===n?" ":d(n);return k<=y||""==w?h:((_=f(w,v((c=k-y)/w.length))).length>c&&(_=m(_,0,c)),e?h+_:_+h)}};e.exports={start:_(!1),end:_(!0)}},456:function(e,t,r){var n=r(63);e.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)},457:function(e,t,r){var n=r(2),o=r(458),d=r(140);n({target:"Array",proto:!0},{fill:o}),d("fill")},458:function(e,t,r){"use strict";var n=r(46),o=r(109),d=r(56);e.exports=function(e){for(var t=n(this),r=d(t),c=arguments.length,l=o(c>1?arguments[1]:void 0,r),f=c>2?arguments[2]:void 0,m=void 0===f?r:o(f,r);m>l;)t[l++]=e;return t}},459:function(e,t,r){"use strict";r(418)},460:function(e,t,r){var n=r(61)(!1);n.push([e.i,".furmit-furstars-stage-stat[data-v-dbfebe04]{width:100%;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;position:absolute;transition:5s ease-in-out}.furmit-furstars-stage-stat .title[data-v-dbfebe04]{position:absolute;width:20%;transition:3s cubic-bezier(.075,.82,.165,1);z-index:1}.text_callout[data-v-dbfebe04],.text_draw[data-v-dbfebe04],.text_finalvote[data-v-dbfebe04],.text_midgame[data-v-dbfebe04],.text_tutorial[data-v-dbfebe04]{opacity:0;transition:3s cubic-bezier(.075,.82,.165,1);width:100%;max-height:0}.scene-midresult .text_midgame[data-v-dbfebe04],.scene-prize .text_draw[data-v-dbfebe04],.scene-result .text_draw[data-v-dbfebe04],.scene-transition .text-midgame[data-v-dbfebe04],.scene-tutorial .text_tutorial[data-v-dbfebe04],.scene-voting .text_callout[data-v-dbfebe04]{opacity:1;max-height:40vh}.tutorial[data-v-dbfebe04]{position:absolute;height:50%;width:100%;bottom:10%;animation:tutorial-dbfebe04 45s linear infinite;background-position:50%;background-size:contain;background-repeat:no-repeat}.scene-voting .text_callout[data-v-dbfebe04]{width:100%;animation:anim-blink-dbfebe04 1s ease-in-out infinite}.scene-midresult[data-v-dbfebe04],.scene-transition[data-v-dbfebe04]{.scores[data-v-dbfebe04]{animation:rotate-Y-dbfebe04 10s ease-in-out}.scores span[data-v-dbfebe04]{max-width:100%;animation-name:scoreSpanScale-dbfebe04;animation-duration:12.5s}}@keyframes scoreSpanScale-dbfebe04{0%,80%{font-size:0}to{font-size:4vw}}.scene-lobby .title[data-v-dbfebe04]{top:20%;width:60%;filter:drop-shadow(16px 16px rgba(196,55,55,1)) drop-shadow(16px 16px rgba(35,35,38,.66667))}.scene-lobby .scores[data-v-dbfebe04]{grid-gap:100%;gap:100%}.scene-prize:not(.draw) .scores[data-v-dbfebe04],.scene-showcase-black .scores[data-v-dbfebe04],.scene-showcase-red .scores[data-v-dbfebe04]{grid-gap:0;gap:0}.scene-showcase-black .score_box .mark[data-v-dbfebe04],.scene-showcase-red .score_box .mark[data-v-dbfebe04]{width:auto;height:75%}.scene-showcase-black .score_box.red[data-v-dbfebe04],.scene-showcase-red .score_box.black[data-v-dbfebe04]{position:absolute}.furmit-furstars-stage-stat:not(.scene-lobby) .title[data-v-dbfebe04]{top:0}.scene-finalresult .text_finalvote[data-v-dbfebe04]{opacity:1;max-height:20vh}.scene-finalresult[data-v-dbfebe04],.scene-midresult[data-v-dbfebe04],.scene-prize[data-v-dbfebe04],.scene-result[data-v-dbfebe04],.scene-transition[data-v-dbfebe04],.scene-voting[data-v-dbfebe04]{.score_box[data-v-dbfebe04]{opacity:1}}.scene-finalresult .scores[data-v-dbfebe04],.scene-midresult .scores[data-v-dbfebe04],.scene-prize.draw .scores[data-v-dbfebe04],.scene-result .scores[data-v-dbfebe04],.scene-transition .scores[data-v-dbfebe04],.scene-voting .scores[data-v-dbfebe04]{grid-gap:15%;gap:15%}.scene-voting .scores[data-v-dbfebe04]{animation:anim-voting-dbfebe04 2s ease-in-out infinite}.scene-showcase-black .score_box.black[data-v-dbfebe04],.scene-showcase-red .score_box.red[data-v-dbfebe04]{opacity:1}.actions[data-v-dbfebe04]{position:absolute;top:0;display:flex;flex-direction:row;word-break:keep-all;z-index:10}.texts[data-v-dbfebe04]{flex-direction:column;z-index:2;width:25%;top:35%}.scores[data-v-dbfebe04],.texts[data-v-dbfebe04]{align-items:center;display:flex;position:absolute;transition:1s cubic-bezier(.075,.82,.165,1)}.scores[data-v-dbfebe04]{flex-direction:row;justify-content:center;z-index:1;width:100%;grid-gap:100%;gap:100%;top:30%;margin-top:-10vh;height:-webkit-fill-available;margin-bottom:10%}.score_box .mark[data-v-dbfebe04]{contain:inherit;filter:drop-shadow(0 0 8px white);transition:1s cubic-bezier(.075,.82,.165,1)}.score_box.red img.team-name[data-v-dbfebe04]{background:url(/assets/furstars/teams/teambg_r.png)}.score_box.black img.team-name[data-v-dbfebe04]{background:url(/assets/furstars/teams/teambg_b.png)}img.team-name[data-v-dbfebe04]{padding:2.5%;box-sizing:border-box;opacity:0;display:none}.scene-showcase-black[data-v-dbfebe04],.scene-showcase-red[data-v-dbfebe04]{img.team-name[data-v-dbfebe04]{opacity:1;display:block}}.score_box[data-v-dbfebe04]{width:100%;height:60vh;display:flex;flex-direction:column;align-items:center;contain:layout;grid-gap:5%;gap:5%}.score_box[data-v-dbfebe04],.score_box span[data-v-dbfebe04]{opacity:0;transition:1s cubic-bezier(.075,.82,.165,1)}.score_box span[data-v-dbfebe04]{font-size:4vw;font-family:Futura;padding:48px 72px;width:20vw;color:#fff;background-repeat:no-repeat;background-position:50%;background-size:100% auto;text-align:center;display:none}.scene-finalresult[data-v-dbfebe04],.scene-midresult[data-v-dbfebe04],.scene-result[data-v-dbfebe04]{.score_box span[data-v-dbfebe04]{display:block;opacity:1}}.score_box.red[data-v-dbfebe04]{padding-right:0}.score_box.red span[data-v-dbfebe04]{background-image:url(/assets/furstars/score_r.png)}.score_box.black[data-v-dbfebe04]{padding-left:0}.score_box.black span[data-v-dbfebe04]{background-image:url(/assets/furstars/score_b.png)}.scene-midresult[data-v-dbfebe04],.scene-voting[data-v-dbfebe04]{.score_box[data-v-dbfebe04]{flex-direction:row;grid-gap:3%;gap:3%}.score_box.black[data-v-dbfebe04]{flex-direction:row-reverse}}.scene-showcase-black[data-v-dbfebe04]{.score_box.red[data-v-dbfebe04]{padding-right:50vw}}.scene-showcase-red[data-v-dbfebe04]{.score_box.black[data-v-dbfebe04]{padding-left:50vw}}.scene-prize:not(.draw) .score_box .mark[data-v-dbfebe04]{width:45%}.scene-midresult .score_box .win-mark[data-v-dbfebe04],.scene-transition .score_box .win_mark[data-v-dbfebe04]{animation:midgame-winner-dbfebe04 10s ease-in-out}.scene-prize[data-v-dbfebe04]{.score_box[data-v-dbfebe04]{display:flex}.score_box[data-v-dbfebe04]:not(.winner){display:none}}.win-mark[data-v-dbfebe04]{top:0;position:absolute;display:none;z-index:-2;transform:translateY(-20%);animation:anim-blink-dbfebe04 1s ease-in-out infinite}.scene-midresult[data-v-dbfebe04],.scene-prize[data-v-dbfebe04]{.score_box.winner .win-mark[data-v-dbfebe04]{display:block}}.scene-finalresult .score_box img.team-name[data-v-dbfebe04],.scene-midresult img.team-name[data-v-dbfebe04],.scene-transition img.team-name[data-v-dbfebe04]{opacity:0}.scene-prize .score_box.winner img.team-name[data-v-dbfebe04]{display:none}.score_box.updated span[data-v-dbfebe04]{font-size:5vw}.scores img[data-v-dbfebe04]{width:100%}.strokeme[data-v-dbfebe04]{text-shadow:-4px -4px 0 #fff,4px -4px 0 #fff,-4px 4px 0 #fff,4px 4px 0 #fff}*[data-v-dbfebe04]{word-break:keep-all;transition:1s ease-in-out}@keyframes anim-scroll-top-dbfebe04{0%{background-position:0 0}to{background-position:0 800%}}@keyframes anim-heartbeat-dbfebe04{0%{filter:drop-shadow(0 0 0 black)}50%{filter:drop-shadow(0 0 16px black)}to{filter:drop-shadow(0 0 0 black)}}@keyframes anim-size-dbfebe04{0%{background-size:100% auto}50%{background-size:150% auto}to{background-size:100% auto}}@keyframes anim-size-final-dbfebe04{0%{background-size:100% auto}to{background-size:400% auto}}@keyframes final-champion-bang-dbfebe04{0%{transform:scale(2) rotateY(0deg);filter:drop-shadow(0 10vh 10vw black);top:-50%;padding-bottom:0;padding-top:0}10%{transform:scale(1.9) rotateY(180deg)}20%{transform:scale(1.8) rotateY(1turn)}30%{transform:scale(1.7) rotateY(540deg)}40%{transform:scale(1.6) rotateY(2turn)}50%{transform:scale(1.5) rotateY(900deg)}60%{transform:scale(1.5) rotateY(3turn)}90%{transform:scale(1.25);filter:drop-shadow(0 0 2vw black)}to{transform:scale(1);filter:drop-shadow(0 0 0 black);top:35%;padding-top:0;padding-bottom:0}}@keyframes anim-blink-dbfebe04{0%{opacity:1}50%{opacity:.5}to{opacity:1}}@keyframes anim-text-stage-lr-dbfebe04{0%{transform:rotate(-10deg) translate(-100vw)}3%{transform:rotate(-10deg) translate(0)}97%{transform:rotate(-10deg) translate(0)}to{transform:rotate(-10deg) translate(100vw)}}@keyframes anim-text-stage-rl-dbfebe04{0%{transform:rotate(10deg) translate(100vw)}3%{transform:rotate(10deg) translate(0)}97%{transform:rotate(10deg) translate(0)}to{transform:rotate(10deg) translate(-100vw)}}@keyframes rotate-Y-dbfebe04{0%{transform:rotateY(0deg)}15%{transform:rotateY(180deg)}30%{transform:rotateY(1turn)}45%{transform:rotateY(540deg)}60%{transform:rotateY(2turn)}67.5%{transform:rotateY(900deg)}75%{transform:rotateY(3turn)}82.5%{transform:rotateY(1260deg)}90%{transform:rotateY(4turn)}to{transform:rotateY(4turn)}}@keyframes midgame-winner-dbfebe04{0%{opacity:0}90%{opacity:0}to{opacity:1}}@keyframes good-dbfebe04{0%{transform:scale(1)}5%{transform:scale(1.25) translateY(8vh)}10%{transform:scale(1.25) translateY(10vh)}15%{transform:scale(1.25) translateY(2vh)}20%{transform:scale(1.25) translateY(0)}25%{transform:scale(1.25) translateY(8vh)}30%{transform:scale(1.25) translateY(10vh)}35%{transform:scale(1.25) translateY(2vh)}40%{transform:scale(1.25) translateY(0)}45%{transform:scale(1.25) translateY(8vh)}50%{transform:scale(1.25) rotate(0deg) translateY(10vh)}55%{transform:scale(1.25) rotate(-2turn) translateY(2vh)}60%{transform:scale(1.25) rotate(-4turn) translateY(0)}70%{transform:scale(1.25) rotate(-8turn)}80%{transform:scale(1.25) rotate(-12turn)}to{transform:scale(1) rotate(12turn)}}@keyframes anim-voting-dbfebe04{0%{width:75%}50%{width:80%}to{width:75%}}@keyframes good-text-dbfebe04{0%{opacity:1;transform:rotate(-30deg) translateX(0)}50%{opacity:.5;transform:rotate(-30deg) translateX(-20vw)}to{opacity:1;transform:rotate(-30deg) translateX(0)}}@keyframes good-text-r-dbfebe04{0%{opacity:1;transform:rotate(30deg) translateX(0)}50%{opacity:.5;transform:rotate(30deg) translateX(20vw)}to{opacity:1;transform:rotate(30deg) translateX(0)}}@keyframes tutorial-dbfebe04{0%{opacity:0;background-image:url(/assets/furstars/tutorial/1.png)}2%{opacity:1;background-image:url(/assets/furstars/tutorial/1.png)}24%{opacity:1;background-image:url(/assets/furstars/tutorial/1.png)}25%{opacity:0;background-image:url(/assets/furstars/tutorial/1.png)}25.1%{opacity:0;background-image:url(/assets/furstars/tutorial/2.png)}27%{opacity:1;background-image:url(/assets/furstars/tutorial/2.png)}49%{opacity:1;background-image:url(/assets/furstars/tutorial/2.png)}50%{opacity:0;background-image:url(/assets/furstars/tutorial/2.png)}50.1%{opacity:0;background-image:url(/assets/furstars/tutorial/3.png)}52%{opacity:1;background-image:url(/assets/furstars/tutorial/3.png)}74%{opacity:1;background-image:url(/assets/furstars/tutorial/3.png)}75%{opacity:0;background-image:url(/assets/furstars/tutorial/3.png)}75.1%{opacity:0;background-image:url(/assets/furstars/tutorial/4.png)}77%{opacity:1;background-image:url(/assets/furstars/tutorial/4.png)}99%{opacity:1;background-image:url(/assets/furstars/tutorial/4.png)}99.9%{opacity:0;background-image:url(/assets/furstars/tutorial/4.png)}to{opacity:0;background-image:url(/assets/furstars/tutorial/1.png)}}@font-face{font-family:Futura;src:url(/assets/fonts/futura.ttf)}.bg-people[data-v-dbfebe04]{position:absolute;bottom:-1%;width:100%;animation:people_bouncing-dbfebe04 1s ease-in-out infinite;transform:scale(1);transform-origin:center end;display:none}.scene-lobby[data-v-dbfebe04]{.bg-people[data-v-dbfebe04]{display:block}}@keyframes people_bouncing-dbfebe04{0%{bottom:-2.5%}50%{bottom:0}to{bottom:-2.5%}}.bg-dots[data-v-dbfebe04]{background:url(/assets/furstars/bg_dots.png);height:100%}.bg-dots[data-v-dbfebe04],.bg-thunder[data-v-dbfebe04]{pointer-events:none;width:100%;position:absolute}.scene-lobby[data-v-dbfebe04],.scene-midresult[data-v-dbfebe04],.scene-prize[data-v-dbfebe04],.scene-result[data-v-dbfebe04],.scene-transition[data-v-dbfebe04],.scene-tutorial[data-v-dbfebe04]{.bg-dots[data-v-dbfebe04]{animation:anim-scroll-top-dbfebe04 180s linear infinite}}.scene-finalresult[data-v-dbfebe04],.scene-voting[data-v-dbfebe04]{.bg-dots[data-v-dbfebe04]{animation:anim-scroll-top-dbfebe04 30s linear infinite}}.bg-circle[data-v-dbfebe04]{position:absolute;margin:auto;pointer-events:none}.scene-showcase-black .bg-circle[data-v-dbfebe04]{animation:bg-circle-left-rotate-dbfebe04 240s infinite}.scene-showcase-red .bg-circle[data-v-dbfebe04]{animation:bg-circle-right-rotate-dbfebe04 240s infinite}.texts_1[data-v-dbfebe04]{position:absolute;width:100%;height:auto;margin:0 auto;z-index:2}.scene-midresult[data-v-dbfebe04]{.texts_1[data-v-dbfebe04]{bottom:5%}}@keyframes bg-circle-left-rotate-dbfebe04{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes bg-circle-right-rotate-dbfebe04{0%{transform:rotate(0deg)}to{transform:rotate(-1turn)}}.bg-thunder[data-v-dbfebe04]{animation:thunder-blink-dbfebe04 10s linear infinite;display:none;z-index:1}.scene-lobby .bg-thunder[data-v-dbfebe04]{display:block}@keyframes thunder-blink-dbfebe04{0%,40%{filter:brightness(1);transform:rotateX(15deg)}20%,60%{filter:brightness(.25);transform:rotateX(-15deg)}80%,82%,84%,86%,88%,90%,92%,94%,96%,98%,to{filter:brightness(1)}81%,83%,85%,87%,89%,91%,93%,95%,97%,99%{filter:brightness(.5)}}.stage-info[data-v-dbfebe04]{display:none;flex-direction:row;justify-content:space-evenly;position:absolute;grid-gap:25%;gap:25%;top:5%;width:100%;height:10vh}.scene-showcase-black[data-v-dbfebe04],.scene-showcase-red[data-v-dbfebe04]{.stage-info[data-v-dbfebe04]{display:flex}}.all-teams[data-v-dbfebe04]{display:flex;flex-direction:column;position:absolute;top:0;width:100%;height:100%;z-index:10;.teams[data-v-dbfebe04]{display:flex;flex-direction:row;width:100%;justify-content:space-between;align-items:center;img[data-v-dbfebe04]{width:50%}}}.scene-finalresult[data-v-dbfebe04]{animation:finalresult-screen-dbfebe04 20s ease-out;.teams[data-v-dbfebe04]{animation-delay:calc(var(--var-delay)*0.35);animation-name:finalresult-teams-dbfebe04;animation-duration:calc(7s - var(--var-delay)*0.35);transform:scale(0);filter:drop-shadow(0 0 8px black)}.score_box.winner[data-v-dbfebe04]{animation-delay:7.5s;animation-name:finalresult-champion-dbfebe04;animation-duration:3.5s}.score_box[data-v-dbfebe04]:not(.winner){animation:finalresult-notwinner-dbfebe04 20s}.scores[data-v-dbfebe04]{animation:finalresult-scores-dbfebe04 20s ease-out}.score_box span[data-v-dbfebe04]{animation:finalresult-scorediv-dbfebe04 20s}img.bg-people[data-v-dbfebe04]{animation:finalresult-bg-people-dbfebe04 20s}}@keyframes finalresult-teams-dbfebe04{0%{transform:scale(0)}50%{transform:scale(2)}75%{transform:scale(1.5)}to{transform:scale(0)}}@keyframes finalresult-screen-dbfebe04{0%,to{filter:brightness(1)}32.5%{filter:brightness(1.5)}37.5%{filter:brightness(100)}42.5%{filter:brightness(1.5)}55%{filter:brightness(1);transform:scale(1)}56.25%{transform:scale(.75)}60%{transform:scale(.85)}65%{transform:scale(1)}}@keyframes finalresult-champion-dbfebe04{0%{transform:scale(2) rotateY(0deg);filter:drop-shadow(0 10vh 10vw black);top:-50%;padding-bottom:0;padding-top:0}10%{transform:scale(1.9) rotateY(180deg)}20%{transform:scale(1.8) rotateY(1turn)}30%{transform:scale(1.7) rotateY(540deg)}40%{transform:scale(1.6) rotateY(2turn)}50%{transform:scale(1.5) rotateY(900deg)}60%{transform:scale(1.5) rotateY(3turn)}90%{transform:scale(1.25);filter:drop-shadow(0 0 2vw black)}to{transform:scale(1);filter:drop-shadow(0 0 0 black);top:35%;padding-top:0;padding-bottom:0}}@keyframes finalresult-scores-dbfebe04{0%{opacity:0;grid-gap:0;gap:0}37.5%{opacity:0}37.6%{opacity:1}65%{transform:rotate3d(0,0,0,0deg);grid-gap:0;gap:0}70%{transform:rotate3d(1,-1,-.5,30deg);grid-gap:20%;gap:20%}to{transform:rotate3d(0,0,0,0deg)}}@keyframes finalresult-notwinner-dbfebe04{0%,65%{max-width:0;max-height:0%}70%{max-width:100%;max-height:100%}}@keyframes finalresult-scorediv-dbfebe04{0%,65%{max-width:0;max-height:0%;opacity:0}70%{opacity:1;max-width:100%;max-height:100%}}@keyframes finalresult-bg-people-dbfebe04{0%{display:block}34.9%{display:block}35%,to{display:none}}.scene-good .title[data-v-dbfebe04]{opacity:0}.good[data-v-dbfebe04]{width:100%;height:100%;position:absolute;.p100[data-v-dbfebe04]{position:absolute;display:flex;width:20vw;height:100%;flex-direction:column;justify-content:end;top:-20%;z-index:1;.p100bottom[data-v-dbfebe04]{animation-name:good-p100-bottom-dbfebe04;animation-timing-function:ease-in-out;animation-duration:1.5s;animation-iteration-count:infinite}}.buffet[data-v-dbfebe04]{position:absolute;display:flex;flex-direction:row;justify-content:center;top:10%;width:100%;transform-origin:top center;animation:good-buffet-dbfebe04 1s ease-in-out infinite}}.buffet們[data-v-dbfebe04]{display:flex;flex-direction:row;width:100%;justify-content:center;position:absolute;bottom:10%}.kuan[data-v-dbfebe04]{width:25%;animation:swinnnnng-dbfebe04 1.5s ease-in-out infinite;z-index:2;margin:-5%;aspect-ratio:1.25}.reveRse[data-v-dbfebe04]{transform:rotateY(180deg)}.kuan.reveRse[data-v-dbfebe04]{animation:swinnnnng-reverse-dbfebe04 1.5s ease-in-out infinite}@keyframes good-p100-bottom-dbfebe04{0%,to{height:5%}50%{height:50%}}@keyframes good-buffet-dbfebe04{0%,to{transform:scale(1)}50%{transform:scale(2)}}@keyframes swinnnnng-dbfebe04{0%{transform:translateY(0)}50%{transform:translateY(25%)}to{transform:translateY(0)}}@keyframes swinnnnng-reverse-dbfebe04{0%{transform:translateY(0) rotateY(180deg)}50%{transform:translateY(25%) rotateY(180deg)}to{transform:translateY(0) rotateY(180deg)}}",""]),e.exports=n},553:function(e,t,r){"use strict";r.r(t);r(41),r(454),r(45),r(52),r(50),r(38),r(11),r(457);var n=r(3),o=(r(26),r(68),r(375),r(67),r(71)),d=r(72),c=r.n(d),l=r(128),f=r.n(l),m={name:"page-furstars-stat",layout:"furstars",data:function(){return{scene:"scene-lobby",score_red:456,score_black:456,score_red_display:0,score_black_display:0,stage:1,countdown:60,update_interval:null,coutdown_interval:null,debug:localStorage.getItem("debuggggg"),loading:!0}},computed:function(){},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.loadConfig();case 2:return t.next=4,c.a.loadAdminConfig();case 4:return t.next=6,e.checkAuthed();case 6:window.requestAnimationFrame(e.onFrameUpdate),e.onTimeoutTick(),setInterval(e.onCountdownTick.bind(e),1e3);case 9:case"end":return t.stop()}}),t)})))()},destroyed:function(){clearTimeout(this.update_interval),clearInterval(this.coutdown_interval)},methods:{API_Status:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/api/furstars");case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})))()},onFrameUpdate:function(){Number(this.score_red)>this.score_red_display&&(this.score_red_display+=1),Number(this.score_black)>this.score_black_display&&(this.score_black_display+=1),this.scene,window.requestAnimationFrame(this.onFrameUpdate)},onTimeoutTick:function(){var e=this;this.API_Status().then((function(t){var r,n;null!=t&&t.success&&(e.changeScene(t.status.scene),e.score_black=(null===(r=t.status.blackSide)||void 0===r?void 0:r.votes)||0,e.score_red=(null===(n=t.status.redSide)||void 0===n?void 0:n.votes)||0,e.stage=t.status.stage||1,e.stage>14&&(e.stage=14),e.redSide=t.status.redSide,e.blackSide=t.status.blackSide)})).catch((function(e){})).finally((function(){e.update_interval=setTimeout(e.onTimeoutTick.bind(e),1e3)}))},onCountdownTick:function(){this.countdown>0&&(this.countdown-=1)},changeScene:function(e){var t="scene-".concat(e);this.scene!==t&&(this.countdown=60,this.score_red_display=0,this.score_black_display=0),this.scene=t},checkAuthed:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$store.state.auth.user){t.next=5;break}return e.loading=!0,t.next=4,e.$axios.get("/api/me").then((function(t){e.$store.commit("auth/setAccount",t.data.account)})).catch((function(t){return o.a.showRequestError(t),e.$router.push(e.localePath("/auth/login"))}));case 4:e.loading=!1;case 5:f.a.find((function(t){return t.key==e.$store.state.auth.account.account_role})).hasManagementPermission?e.authed=!0:(o.a.showSnackbar({message:e.$t("admin.errors.not_admin")}),e.$router.push(e.localePath("/")));case 6:case"end":return t.stop()}}),t)})))()}}},v=(r(459),r(20)),component=Object(v.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"furmit-furstars-stage-stat",class:e.scene+" stage_".concat(e.stage)+(e.score_black===e.score_red?" draw":"")},[t("img",{staticClass:"bg-circle",attrs:{src:"/assets/furstars/bg_circle.png"}}),e._v(" "),t("div",{staticClass:"bg-dots"}),e._v(" "),t("div",{staticClass:"stage-info"},[t("img",{attrs:{src:"/assets/furstars/stages/stage".concat(String(e.stage).padStart(2,"0")).concat(e.scene.includes("red")?"r":"b",".png")}}),e._v(" "),t("img",{attrs:{src:"/assets/furstars/teams/team_".concat(e.scene.includes("red")?"r":"b",".png")}})]),e._v(" "),t("img",{staticClass:"title",attrs:{src:"/assets/furstars/title.png"}}),e._v(" "),t("div",{staticClass:"texts"},[t("img",{staticClass:"text_tutorial",attrs:{src:"/assets/furstars/tutorial/header.png"}}),e._v(" "),t("img",{staticClass:"text_finalvote",attrs:{src:"/assets/furstars/tex_finalvote.png"}}),e._v(" "),e.score_black===e.score_red?t("img",{staticClass:"text_draw",attrs:{src:"/assets/furstars/text_draw.png"}}):e._e()]),e._v(" "),e._m(0),e._v(" "),"scene-finalresult"===e.scene?t("div",{staticClass:"all-teams"},e._l(new Array(13),(function(r,n){return t("div",{class:"teams teams-".concat(n),style:"--var-index:".concat(n,";--var-delay:").concat(n,"s")},[t("img",{attrs:{src:"/assets/furstars/teams/".concat(n+1,"_black.png")}}),e._v(" "),t("img",{attrs:{src:"/assets/furstars/teams/".concat(n+1,"_red.png")}})])})),0):e._e(),e._v(" "),"scene-tutorial"===e.scene?t("div",{staticClass:"tutorial"}):e._e(),e._v(" "),t("div",{staticClass:"scores"},[t("div",{staticClass:"score_box red",class:e.score_red>e.score_black||e.score_black===e.score_red&&e.score_red>0?" winner":""},[t("span",[e._v("\n                "+e._s("scene-voting"===e.scene?"???":e.score_red)+"\n            ")]),e._v(" "),e._m(1),e._v(" "),t("img",{staticClass:"team-name",attrs:{src:"/assets/furstars/teams/".concat(e.stage,"_red.png"),alt:"furstar-team-red"}})]),e._v(" "),t("div",{staticClass:"score_box black",class:e.score_black>e.score_red||e.score_black===e.score_red&&e.score_black>0?" winner":""},[t("span",[e._v("\n                "+e._s("scene-voting"===e.scene?"???":e.score_black)+"\n            ")]),e._v(" "),e._m(2),e._v(" "),t("img",{staticClass:"team-name",attrs:{src:"/assets/furstars/teams/".concat(e.stage,"_black.png"),alt:"furstar-team-black"}})])]),e._v(" "),"守逸讚"===e.debug?t("div",{staticClass:"actions"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.scene,expression:"scene"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.scene=t.target.multiple?r:r[0]}}},e._l(["scene-lobby","scene-tutorial","scene-showcase-red","scene-showcase-black","scene-result","scene-midresult","scene-finalresult","scene-prize","scene-good","scene-transition"],(function(r,n){return t("option",{domProps:{value:r}},[e._v("\n                "+e._s(r)+"\n            ")])})),0),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.stage,expression:"stage"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.stage=t.target.multiple?r:r[0]}}},e._l(new Array(13).fill(0),(function(r,n){return t("option",{domProps:{value:n+1}},[e._v("\n                Stage "+e._s(n+1)+"\n            ")])})),0),e._v(" "),t("label",[e._v("\n            Black score\n            "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.score_black,expression:"score_black"}],attrs:{type:"number"},domProps:{value:e.score_black},on:{input:function(t){t.target.composing||(e.score_black=t.target.value)}}})]),e._v(" "),t("label",[e._v("\n            Red score\n            "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.score_red,expression:"score_red"}],attrs:{type:"number"},domProps:{value:e.score_red},on:{input:function(t){t.target.composing||(e.score_red=t.target.value)}}})]),e._v(" "),t("button",{on:{click:function(t){e.score_red_display=0,e.score_black_display=0,e.countdown=20}}},[e._v("清除顯示數字")])]):e._e(),e._v(" "),t("img",{staticClass:"bg-people",staticStyle:{width:"100%"},attrs:{src:"/assets/furstars/bg_people.png"}}),e._v(" "),t("img",{staticClass:"bg-thunder",attrs:{src:"/assets/furstars/bg_thunder.png"}}),e._v(" "),"scene-good"===e.scene?t("div",{staticClass:"good"},[e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6)]):e._e()])}),[function(){var e=this._self._c;return e("div",{staticClass:"texts_1"},[e("img",{staticClass:"text_midgame",attrs:{src:"/assets/furstars/tex_midgame.png"}}),this._v(" "),e("img",{staticClass:"text_callout",attrs:{src:"/assets/furstars/tex_callout.png"}})])},function(){var e=this._self._c;return e("div",{staticClass:"mark"},[e("img",{attrs:{src:"/assets/furstars/mark_red_solid.png"}}),this._v(" "),e("img",{staticClass:"win-mark",attrs:{src:"/assets/furstars/win_mark.png"}})])},function(){var e=this._self._c;return e("div",{staticClass:"mark"},[e("img",{attrs:{src:"/assets/furstars/mark_black_solid.png"}}),this._v(" "),e("img",{staticClass:"win-mark",attrs:{src:"/assets/furstars/win_mark.png"}})])},function(){var e=this._self._c;return e("div",{staticClass:"p100",staticStyle:{left:"0",transform:"rotateY(180deg)"}},[e("img",{attrs:{src:"/assets/furstars/100top.png"}}),this._v(" "),e("img",{staticClass:"p100bottom",staticStyle:{"animation-delay":"0.75s"},attrs:{src:"/assets/furstars/100bottom.png"}})])},function(){var e=this._self._c;return e("div",{staticClass:"p100",staticStyle:{right:"0"}},[e("img",{attrs:{src:"/assets/furstars/100top.png"}}),this._v(" "),e("img",{staticClass:"p100bottom",attrs:{src:"/assets/furstars/100bottom.png"}})])},function(){var e=this._self._c;return e("div",{staticClass:"buffet"},[e("img",{attrs:{src:"/assets/furstars/buffet.png"}})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"buffet們"},[t("img",{staticClass:"kuan",attrs:{src:"/assets/furstars/kuan.png"}}),e._v(" "),t("img",{staticClass:"kuan",staticStyle:{"animation-delay":"0.25s"},attrs:{src:"/assets/furstars/kuan.png"}}),e._v(" "),t("img",{staticClass:"kuan",staticStyle:{"animation-delay":"0.5s"},attrs:{src:"/assets/furstars/kuan.png"}}),e._v(" "),t("img",{staticClass:"kuan reveRse",staticStyle:{"animation-delay":"0.75s"},attrs:{src:"/assets/furstars/kuan.png"}}),e._v(" "),t("img",{staticClass:"kuan reveRse",staticStyle:{"animation-delay":"1s"},attrs:{src:"/assets/furstars/kuan.png"}})])}],!1,null,"dbfebe04",null);t.default=component.exports;installComponents(component,{Select:r(380).default,Button:r(374).default})}}]);