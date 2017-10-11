/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","hammerjs","promise","ojs/ojjquery-hammer","ojs/ojcomponentcore"],function(a,g,c){a.q={};o_("OffcanvasUtils",a.q,a);a.q.$T="oj-offcanvasEdge";a.q.Kr="oj-offcanvas";a.q.aU="oj-mediaQueryListener";a.q.S7="oj-offcanvasHammer";a.q.T7="oj-offcanvasStyle";a.q.Mw="selector";a.q.dE="content";a.q.zw="start";a.q.yw="end";a.q.fE="top";a.q.XJ="bottom";a.q.uw="displayMode";a.q.vw="push";a.q.NS="overlay";a.q.Y5="pin";a.q.Bsa="modality";a.q.hVa="none";a.q.Csa="modal";a.q.WJ="_dismissHandler";
a.q.uT="_openPromise";a.q.cE="_closePromise";a.q.Zz="_glassPane";a.q.W6="_surrogate";a.q.CT="data-oj-offcanvas-surrogate-id";a.q.Osa="oj-offcanvas-outer-wrapper";a.q.nK="oj-offcanvas-open";a.q.ai="oj-offcanvas-transition";a.q.Qsa="oj-offcanvas-pin";a.q.Psa="oj-offcanvas-pin-transition";a.q.jsa="oj-offcanvas-glasspane";a.q.aK="oj-offcanvas-glasspane-dim";a.q.kta="ojbeforeopen veto";a.q.jta="ojbeforeclose veto";a.q.LMa={start:"oj-offcanvas-shift-start",end:"oj-offcanvas-shift-end",top:"oj-offcanvas-shift-down",
bottom:"oj-offcanvas-shift-up"};a.q.TAa={start:"oj-offcanvas-start",end:"oj-offcanvas-end",top:"oj-offcanvas-top",bottom:"oj-offcanvas-bottom"};a.q.kCa=function(b){b=b[a.q.uw];b!==a.q.NS&&b!==a.q.vw&&b!==a.q.Y5&&(b=(a.vc.Hd("oj-offcanvas-option-defaults")||{}).displayMode);return b};a.q.ki=function(b){return g(b[a.q.Mw])};a.q.OG=function(b){return b[a.q.Bsa]===a.q.Csa};a.q.Mo=function(b){return b.hasClass(a.q.nK)};a.q.Px=function(b){return b.closest("."+a.q.Osa)};a.q.$M=function(b){var c=a.q.ki(b);
return a.q.uha(b)||b[a.q.uw]===a.q.NS?c:c.parent()};a.q.zDa=function(b){var c=a.q.LMa[b];if(!c)throw"Invalid edge: "+b;return c};a.q.eh=function(){return"rtl"===a.Q.Qj()};a.q.ln=function(a,c){a.css({"-webkit-transform":c,transform:c})};a.q.JN=function(b,c,e){b=b===a.q.yw;if(a.q.eh()||e)b=!b;return"translate3d("+(b?"-":"")+c+", 0, 0)"};a.q.UH=function(b,c,e){a.q.ln(b,a.q.JN(c,e,!1))};a.q.zea=function(b,c){return"translate3d(0, "+(b===a.q.XJ?"-":"")+c+", 0)"};a.q.AMa=function(b,c,e){a.q.ln(b,a.q.zea(c,
e))};a.q.Aea=function(a,c){return"translate3d(0, "+(c?"-":"")+a+", 0)"};a.q.ELa=function(b,c,e){b.addClass(a.q.ai);a.q.ln(b,"translate3d(0, 0, 0)");c.addClass(a.q.ai);a.q.ln(c,e)};a.q.gja=function(b){var c=b.edge;b=a.q.ki(b);c&&c.length||(c=b.hasClass("oj-offcanvas-start")?a.q.zw:b.hasClass("oj-offcanvas-end")?a.q.yw:b.hasClass("oj-offcanvas-top")?a.q.fE:b.hasClass("oj-offcanvas-bottom")?a.q.XJ:a.q.zw);g.data(b[0],a.q.$T,c);return c};a.q.cY=function(b){return g.data(b[0],a.q.$T)};a.q.yC=function(b,
c,e){var f=b[a.q.uw],g=a.q.ki(b),k=a.q.nK,f=f===a.q.NS?a.q.ai+" oj-offcanvas-overlay":a.q.ai;e?(g.addClass(k),c.addClass(f)):(b.makeFocusable&&a.Q.PR({element:g,remove:!0}),b=b.tabindex,void 0===b?g.removeAttr("tabindex"):g.attr("tabindex",b),g.removeClass(k),c.removeClass(f))};a.q.im=function(b){var c=a.q.ki(b),e=c.find("[autofocus]");0==e.length&&(e=c.find(":tabbable"));0==e.length?(e=c.attr("tabindex"),void 0!==e&&(b.tabindex=e),c.attr("tabindex","-1"),e=c,a.Q.PR({element:c,applyHighlight:!0}),
b.makeFocusable=!0):e=e[0];a.af.BI(e)};a.q.aHa=function(a){return"none"!=a.autoDismiss};a.q.bya=function(a){var c=a.css("transitionProperty").split(","),e=a.css("transitionDelay").split(",");a=a.css("transitionDuration").split(",");for(var f=0,g=0;g<c.length;g++){var k=a[g%a.length],k=-1<k.indexOf("ms")?parseFloat(k):1E3*parseFloat(k);if(0<k)var l=e[g%e.length],l=-1<l.indexOf("ms")?parseFloat(l):1E3*parseFloat(l),f=Math.max(f,l+k)}return f+100};a.q.$u=function(b,c){function e(){f&&(clearTimeout(f),
f=void 0);b.off("transitionend.oc webkitTransitionEnd.oc",e);c(b)}var f;b.on("transitionend.oc webkitTransitionEnd.oc",e);f=setTimeout(e,a.q.bya(b))};a.q.Jaa=function(b){a.q.close(b)["catch"](function(b){a.C.warn("Offcancas close failed: "+b)})};a.q.WO=function(b){a.q.U1(b);if(a.q.aHa(b)){var c=a.q.ki(b),e=b[a.q.WJ]=function(e){var f=e.target;a.Q.Ioa(e)||"focus"===e.type&&!g(f).is(":focusable")||(null==g.data(c[0],a.q.Kr)?a.q.U1(b):a.Q.uSa(c[0],f)||a.q.Jaa(b))},f=document.documentElement;a.Q.Qe()&&
f.addEventListener("touchstart",e,!0);f.addEventListener("mousedown",e,!0);f.addEventListener("focus",e,!0)}a.q.eC(b)};a.q.U1=function(b){var c=b[a.q.WJ];if(c){var e=document.documentElement;a.Q.Qe()&&e.removeEventListener("touchstart",c,!0);e.removeEventListener("mousedown",c,!0);e.removeEventListener("focus",c,!0);delete b[a.q.WJ];b[a.q.WJ]=null}a.q.HP(b)};a.q.eC=function(b){if(a.Q.Qe()){var d=b[a.q.Mw],e=g(d),f=a.q.cY(e),h,k;f===a.q.zw&&!a.q.eh()||f===a.q.yw&&a.q.eh()?(k={recognizers:[[c.Swipe,
{direction:c.DIRECTION_LEFT}]]},h="swipeleft"):f===a.q.zw&&a.q.eh()||f===a.q.yw&&!a.q.eh()?(k={recognizers:[[c.Swipe,{direction:c.DIRECTION_RIGHT}]]},h="swiperight"):f===a.q.fE?(k={recognizers:[[c.Swipe,{direction:c.DIRECTION_UP}]]},h="swipeup"):f===a.q.XJ&&(k={recognizers:[[c.Swipe,{direction:c.DIRECTION_DOWN}]]},h="swipedown");f=e.wi(k).on(h,function(c){c.target===e[0]&&(c.preventDefault(),a.q.Jaa(b))});g.data(g(d)[0],a.q.S7,{event:h,hammer:f})}};a.q.HP=function(b){b=a.q.ki(b);0<b.length&&(b=g.data(b[0],
a.q.S7))&&b.hammer.off(b.event)};a.q.lHa=function(b){return a.q.Px(b).hasClass("oj-offcanvas-page")};a.q.e_=function(b){return b[a.q.uw]===a.q.Y5};a.q.uha=function(b){return b[a.q.dE]||a.q.lHa(a.q.ki(b))||a.q.e_(b)};a.q.wWa=function(b){var c=b.attr("style");void 0!==c&&g.data(b[0],a.q.T7,c)};a.q.lLa=function(b){var c=g.data(b[0],a.q.T7);c?b.attr("style",c):b.removeAttr("style")};a.q.Qy=function(b,c){var e=a.q.cY(b),e=a.q.zDa(e),f=a.q.Px(b);a.A.Le(f,g);var h=f.hasClass(e);c||f.toggleClass(e,!h);return h};
a.q.Xr=function(b){var c=a.q.ki(b),e=a.q.e_(b);if(g.data(c[0],a.q.Kr)===b){a.q.cY(c);var f=a.q.$M(b);e?c.removeClass(a.q.nK+" "+a.q.Psa):a.q.yC(b,f,!1);a.q.BKa(b);a.q.U1(b);e&&(a.q.Px(c).removeClass(a.q.Qsa),a.q.lLa(c));c.trigger("ojclose",b);g.removeData(c[0],a.q.Kr)}};a.q.Wja=function(b,c,e){var f=g(b);(c=!!c)&&a.q.Mo(f)&&a.q.bs(b,!1);f.toggleClass(a.q.TAa[e],!c)};a.q.vUa=function(b){var c=b.query;if(null!==c){var e=b[a.q.Mw],c=window.matchMedia(c),f=a.q.gja(b);b=function(b){a.q.Wja(e,b.matches,
f)};c.addListener(b);a.q.Wja(e,c.matches,f);g.data(g(e)[0],a.q.aU,{mqList:c,mqListener:b})}};o_("OffcanvasUtils.setupResponsive",a.q.vUa,a);a.q.KUa=function(b){b=a.q.ki(b);var c=g.data(b[0],a.q.aU);c&&(c.mqList.removeListener(c.mqListener),g.removeData(b[0],a.q.aU))};o_("OffcanvasUtils.tearDownResponsive",a.q.KUa,a);a.q.$Ia=function(b,c,e){function f(e){e.removeClass(a.q.ai);l?l=!1:(a.q.im(b),h.trigger("ojopen",b),a.q.WO(b),c(!0))}var h=a.q.ki(b),k=g(b[a.q.dE]);a.A.Le(k,g);var l=!0,m=b.size,p;h.addClass(a.q.nK);
window.setTimeout(function(){e===a.q.zw||e===a.q.yw?(void 0===m&&(m=h.outerWidth(!0)+"px"),a.q.ln(h,a.q.JN(e,m,!0)),p=a.q.JN(e,m,!1)):(void 0===m&&(m=h.outerHeight(!0)+"px"),a.q.ln(h,a.q.Aea(m,e===a.q.fE)),p=a.q.Aea(m,e!==a.q.fE));window.setTimeout(function(){a.q.ELa(h,k,p);a.q.Qy(h,!1);a.q.$u(k,f);a.q.$u(h,f)},0)},0);a.q.GV(b,h)};a.q.WIa=function(b,c,e){var f=a.q.ki(b);a.q.yC(b,f,!0);var g=b.size;g&&(e===a.q.zw||e===a.q.yw?a.q.ln(f,a.q.JN(e,g,!0)):a.q.ln(f,a.q.zea(e,g)));window.setTimeout(function(){a.q.Qy(f,
!1)},20);a.q.GV(b,f);a.q.$u(f,function(){f.removeClass(a.q.ai);a.q.im(b);f.trigger("ojopen",b);a.q.WO(b);c(!0)})};a.q.Cya=function(b,c,e,f){function h(){l||(k.removeClass(a.q.ai),a.q.ln(k,""),a.q.Xr(b),c(!0));l=!1}var k=g(b[a.q.dE]),l=!0;a.q.ln(e,"");a.q.ln(k,"");a.q.Qy(e,!1);a.q.OG(b)&&b[a.q.Zz].removeClass(a.q.aK);f?(k.addClass(a.q.ai),e.addClass(a.q.ai),a.q.$u(e,h),a.q.$u(k,h)):(l=!1,h())};a.q.Bya=function(b,c,e,f){function g(){a.q.Xr(b);c(!0)}a.q.Qy(e,!1);a.q.OG(b)&&b[a.q.Zz].removeClass(a.q.aK);
f?(e.addClass(a.q.ai),a.q.$u(e,g)):g()};a.q.VIa=function(b,c,e,f){var h=a.q.ki(b),k=a.q.$M(b);a.A.Le(k,g);a.q.yC(b,k,!0);var l;e===a.q.zw||e===a.q.yw?(l=void 0===l?h.outerWidth(!0)+"px":l,f===a.q.vw&&a.q.UH(k,e,l)):(l=void 0===l?h.outerHeight(!0)+"px":l,f===a.q.vw&&a.q.AMa(k,e,l));window.setTimeout(function(){a.q.Qy(h,!1)},10);a.q.GV(b,h);a.q.$u(k,function(){k.removeClass(a.q.ai);a.q.im(b);h.trigger("ojopen",b);a.q.WO(b);c(!0)})};a.q.Aya=function(b,c,e,f){function g(){a.q.Xr(b);c(!0)}var k=b[a.q.uw],
l=a.q.$M(b);k===a.q.vw&&a.q.ln(l,"");a.q.Qy(e,!1);a.q.OG(b)&&b[a.q.Zz].removeClass(a.q.aK);f?(l.addClass(a.q.ai),a.q.$u(l,g)):g()};a.q.open=function(b){var c=a.q.ki(b),e=g.data(c[0],a.q.Kr);if(e){if(e[a.q.cE])return e[a.q.cE];if(e[a.q.uT])return e[a.q.uT]}var f,h=!1,e=new Promise(function(e,k){a.A.Le(c,g);var p=a.q.gja(b),t=g.Event("ojbeforeopen");c.trigger(t,b);if(!1===t.result)k(a.q.kta),h=!0;else{var t=a.q.kCa(b),s=a.q.e_(b);!s||p!==a.q.fE&&p!==a.q.XJ||(t=a.q.vw);var n=g.extend({},b);n[a.q.uw]=
t;g.data(c[0],a.q.Kr,n);if(b[a.q.dE]){if(!a.q.uha(b))throw"Error: Both main content selector and the inner wrapper \x3cdiv class\x3d'oj-offcanvas-inner-wrapper'\x3e are provided. Please remove the inner wrapper.";f=a.Context.getContext(c[0]).Ne().Ld({description:"The offcanvas selector \x3d'"+b[a.q.Mw]+"' doing the open animation."});s||(t===a.q.vw?a.q.$Ia(n,e,p):a.q.WIa(n,e,p))}else a.q.VIa(n,e,p,t)}}),e=e.then(function(a){f&&f();return a},function(a){f&&f();throw a;});if(!h){var k=g.data(c[0],a.q.Kr);
k&&(k[a.q.uT]=e,a.Components.Gt(c[0]))}return e};o_("OffcanvasUtils.open",a.q.open,a);a.q.close=function(b){return a.q.bs(b[a.q.Mw],!0)};o_("OffcanvasUtils.close",a.q.close,a);a.q.bs=function(b,c){var e=g(b);a.A.Le(e,g);var f=g.data(e[0],a.q.Kr);if(f&&f[a.q.cE])return f[a.q.cE];var h,k=!1,l=new Promise(function(l,p){if(a.q.Mo(e)){b!=f[a.q.Mw]&&l(!0);a.q.Qy(e,!0)||l(!0);var t=g.Event("ojbeforeclose");e.trigger(t,f);!1===t.result?(p(a.q.jta),k=!0):(c&&(h=a.Context.getContext(e[0]).Ne().Ld({description:"The offcanvas selector \x3d'"+
f[a.q.Mw]+"' doing the close animation."})),t=f[a.q.uw],f[a.q.dE]?t===a.q.vw?a.q.Cya(f,l,e,c):a.q.Bya(f,l,e,c):a.q.Aya(f,l,e,c))}else l(!0)}),l=l.then(function(a){h&&h();return a},function(a){h&&h();throw a;});!k&&(f=g.data(e[0],a.q.Kr))&&(f[a.q.cE]=l,a.Components.lw(e[0]));return l};a.q.toggle=function(b){var c=a.q.ki(b);a.A.Le(c,g);return a.q.Mo(c)?a.q.close(b):a.q.open(b)};o_("OffcanvasUtils.toggle",a.q.toggle,a);a.q.Iwa=function(b){var c=g("\x3cdiv\x3e");c.addClass(a.q.jsa);c.attr("role","presentation");
c.attr("aria-hidden","true");c.appendTo(b.parent());c.on("keydown keyup keypress mousedown mouseup mouseover mouseout click focusin focus",function(a){a.stopPropagation();a.preventDefault()});return c};a.q.NW=function(b){var c=g("\x3cspan style\x3d'display:none'\x3e");c.attr("aria-hidden","true");var e=b.attr("id");e?(e=[e,"surrogate"].join("_"),c.attr("id",e)):e=c.uniqueId();c.insertBefore(b);b.attr(a.q.CT,e);return c};a.q.gNa=function(b,c){b[a.q.W6]=a.q.NW(c);c.appendTo(c.parent())};a.q.jLa=function(b){var c=
a.q.ki(b);b=b[a.q.W6];c&&b&&c.attr(a.q.CT)===b.attr("id")&&(c.insertAfter(b),c.removeAttr(a.q.CT),b.remove())};a.q.GV=function(b,c){a.q.OG(b)&&(b[a.q.Zz]=a.q.Iwa(c),a.q.gNa(b,c),window.setTimeout(function(){b[a.q.Zz].addClass(a.q.aK)},0))};a.q.BKa=function(b){a.q.OG(b)&&(b[a.q.Zz].remove(),a.q.jLa(b))};a.q.Xqa=function(b){var d,e,f,h,k,l,m,p,t,s,n,r;null==g(b).attr("oj-data-pansetup")&&(g(b).attr("oj-data-pansetup","true"),b.displayMode="push",d=a.q.ki(b),e=b.size,null==e&&(e=d.outerWidth()),f=a.q.Px(d),
h=a.q.$M(b),k={recognizers:[[c.Pan,{direction:c.DIRECTION_HORIZONTAL}]]},l=!1,g(f).wi(k).on("panstart",function(e){m=null;switch(e.gesture.direction){case c.DIRECTION_LEFT:Math.abs(e.gesture.deltaY)<Math.abs(e.gesture.deltaX)&&(m=a.q.eh()?"end":"start");break;case c.DIRECTION_RIGHT:Math.abs(e.gesture.deltaY)<Math.abs(e.gesture.deltaX)&&(m=a.q.eh()?"start":"end")}null!=m&&(p={direction:m,distance:Math.abs(e.gesture.deltaX)},t=g.Event("ojpanstart"),d.trigger(t,p),t.isDefaultPrevented()||(b._closePromise=
null,h.off(".oc"),a.q.yC(b,h,!0),l=!0,e.gesture.srcEvent.stopPropagation(),e.stopPropagation()))}).on("panmove",function(b){l&&(s=b.gesture.deltaX,"start"==m&&0<s||"end"==m&&0>s?a.q.UH(h,"start","0px"):(d.css("width",Math.abs(s)),h.removeClass(a.q.ai),a.q.UH(h,"start",s+"px"),p={direction:m,distance:Math.abs(s)},t=g.Event("ojpanmove"),d.trigger(t,p),b.gesture.srcEvent.stopPropagation(),b.stopPropagation()))}).on("panend",function(c){l&&(l=!1,s=Math.abs(c.gesture.deltaX),p={distance:s},t=g.Event("ojpanend"),
d.trigger(t,p),c.stopPropagation(),t.isDefaultPrevented()?(r=function(){a.q.yC(b,h,!1);h.removeClass(a.q.ai);h.off("transitionend webkitTransitionEnd otransitionend oTransitionEnd",r);d.trigger("ojclose",b)},h.on("transitionend webkitTransitionEnd otransitionend oTransitionEnd",r),h.addClass(a.q.ai),a.q.UH(h,"start","0px")):(n=b.edge,null==n&&(n=d.hasClass("oj-offcanvas-start")?"start":"end"),a.q.oxa(h,d,n,e,b),g.data(d[0],a.q.Kr,b),g.data(d[0],a.q.$T,n),a.q.WO(b)))}))};o_("OffcanvasUtils.setupPanToReveal",
a.q.Xqa,a);a.q.oxa=function(b,c,e,f,g){var k,l,m,p,t,s,n,r,q,u;b.removeClass(a.q.ai);k=Math.round(1E3/60);l=b.css("transform").split("(")[1].split(")")[0].split(",");m=parseInt(l[4],10);p="end"==e?0-f:f;s=Math.max(1,Math.abs(p-m)/(400/k));n=(new Date).getTime();r=function(){q=(new Date).getTime();u=Math.max(s,s*Math.max((q-n)/k));n=q;m<p?m=Math.min(p,m+u):m>p&&(m=Math.max(p,m-u));a.q.UH(b,e,Math.abs(m)+"px");c.css("width",Math.abs(m)+"px");m==p?(window.cancelAnimationFrame(t),b.addClass(a.q.ai),c.trigger("ojopen",
g)):t=window.requestAnimationFrame(r)};t=window.requestAnimationFrame(r)};a.q.mra=function(b){b=a.q.ki(b);b=a.q.Px(b);g(b).off("panstart panmove panend")};o_("OffcanvasUtils.tearDownPanToReveal",a.q.mra,a)});