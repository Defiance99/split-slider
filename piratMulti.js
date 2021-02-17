/*!
 * multiscroll.js 0.1.8 - Extensions 0.0.3
 * https://github.com/alvarotrigo/multiscroll.js
 * @license MIT licensed
 *
 * Copyright (C) 2016 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,n,t,o,i){e.fn.multiscroll=function(s){function a(){e.isFunction(s.afterRender)&&s.afterRender.call(this)}function r(){var t=n.location.hash.replace("#",""),o=t;if(o.length){var i=G("responsiveExpand","isResponsive")?e(".ms-left").find('[data-panel="ms-left"][data-anchor="'+o+'"]'):e(".ms-left").find('[data-anchor="'+o+'"]'),s="undefined"==typeof lastScrolledDestiny;(s||o!==lastScrolledDestiny)&&h(i)}}function l(n){if(clearTimeout(oe),s.autoScrolling){var o=e(t.activeElement);if(!o.is("textarea")&&!o.is("input")&&!o.is("select")&&s.keyboardScrolling){var i=n.which,a=[40,38,32,33,34];e.inArray(i,a)>-1&&n.preventDefault(),oe=setTimeout(function(){c(n)},150)}}}function c(n){var t=n.shiftKey;switch(n.which){case 38:case 33:V.moveSectionUp();break;case 32:if(t){V.moveSectionUp();break}case 40:case 34:V.moveSectionDown();break;case 36:V.moveTo(1);break;case 35:V.moveTo(e(".ms-left .ms-section").length);break;default:return}}function d(n){n.preventDefault();var t=e(this).parent().index();h(e(".ms-left .ms-section").eq(t))}function m(){var n=e(this).data("tooltip");e('<div class="multiscroll-tooltip '+s.navigationPosition+'">'+n+"</div>").hide().appendTo(e(this)).fadeIn(200)}function f(){e(this).find(".multiscroll-tooltip").fadeOut(200,function(){e(this).remove()})}function u(){if(te=e(n).height(),e(".ms-tableCell").each(function(){e(this).css({height:k(e(this).parent())})}),Q){var t=te;o.abs(t-ie)>20*o.max(ie,t)/100&&(v(),ie=t)}else v();e.isFunction(s.afterResize)&&s.afterResize.call(this)}function v(){s.css3&&s.autoScrolling?(b(e(".ms-left"),"translate3d(0px, -"+e(".ms-left").find(".ms-section.active").position().top+"px, 0px)",!1),b(e(".ms-right"),"translate3d(0px, -"+e(".ms-right").find(".ms-section.active").position().top+"px, 0px)",!1)):s.autoScrolling?(e(".ms-left").css("top",-e(".ms-left").find(".ms-section.active").position().top),e(".ms-right").css("top",-e(".ms-right").find(".ms-section.active").position().top)):e("html,body").scrollTop(e(".ms-left").find(".ms-section.active").position().top)}function h(n){var t=n.index(),o=e(".ms-right").find(".ms-section").eq(ee-1-t),i=n.data("anchor"),a=e(".ms-left .ms-section.active"),r=a.index()+1,l=w(n);ne=!0;var c={left:n.position().top};if(G("responsiveExpand","isResponsive")||(c.right=o.position().top),G("responsiveExpand","isResponsive")||o.addClass("active").siblings().removeClass("active"),n.addClass("active").siblings().removeClass("active"),T(i),G("responsiveExpand","isResponsive"))V.responsiveExpand.performMovement(n),setTimeout(function(){ne=!1},s.scrollingSpeed);else if(s.css3){e.isFunction(s.onLeave)&&s.onLeave.call(this,r,t+1,l);var d="translate3d(0px, -"+c.left+"px, 0px)",m="translate3d(0px, -"+c.right+"px, 0px)";b(e(".ms-left"),d,!0),b(e(".ms-right"),m,!0),setTimeout(function(){e.isFunction(s.afterLoad)&&s.afterLoad.call(this,i,t+1),setTimeout(function(){ne=!1},K)},s.scrollingSpeed)}else e.isFunction(s.onLeave)&&s.onLeave.call(this,r,t+1,l),e(".ms-left").animate({top:-c.left},s.scrollingSpeed,s.easing,function(){e.isFunction(s.afterLoad)&&s.afterLoad.call(this,i,t+1),setTimeout(function(){ne=!1},K)}),e(".ms-right").animate({top:-c.right},s.scrollingSpeed,s.easing);lastScrolledDestiny=i,C(i),y(i,t)}function p(){t.addEventListener?(t.removeEventListener("mousewheel",x,!1),t.removeEventListener("wheel",x,!1)):t.detachEvent("onmousewheel",x)}function g(){t.addEventListener?(t.addEventListener("mousewheel",x,!1),t.addEventListener("wheel",x,!1)):t.attachEvent("onmousewheel",x)}function x(e){e=n.event||e;var t=o.max(-1,o.min(1,e.wheelDelta||-e.deltaY||-e.detail));return ne||(t<0?V.moveSectionDown():V.moveSectionUp()),!1}function b(e,n,t){e.toggleClass("ms-easing",t),e.css(S(n))}function S(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function y(n,t){s.navigation&&(e("#multiscroll-nav").find(".active").removeClass("active"),n?e("#multiscroll-nav").find('a[href="#'+n+'"]').addClass("active"):e("#multiscroll-nav").find("li").eq(t).find("a").addClass("active"))}function C(n){s.menu&&(e(s.menu).find(".active").removeClass("active"),e(s.menu).find('[data-menuanchor="'+n+'"]').addClass("active"))}function w(n){var t=e(".ms-left .ms-section.active").index(),o=n.index();return t>o?"up":"down"}function T(e){s.anchors.length&&(location.hash=e),E()}function E(){var n=e(".ms-left .ms-section.active"),t=n.data("anchor"),o=n.index(),i=String(o);s.anchors.length&&(i=t),i=i.replace("/","-").replace("#","");var a=new RegExp("\\b\\s?ms-viewing-[^\\s]+\\b","g");e("body")[0].className=e("body")[0].className.replace(a,""),e("body").addClass("ms-viewing-"+i)}function I(){var e,o=t.createElement("p"),s={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};t.body.insertBefore(o,null);for(var a in s)o.style[a]!==i&&(o.style[a]="translate3d(1px,1px,1px)",e=n.getComputedStyle(o).getPropertyValue(s[a]));return t.body.removeChild(o),e!==i&&e.length>0&&"none"!==e}function D(e){e.addClass("ms-table").wrapInner('<div class="ms-tableCell" style="height: '+k(e)+'px" />')}function k(e){var n=te;if(s.paddingTop||s.paddingBottom){var t=parseInt(e.css("padding-top"))+parseInt(e.css("padding-bottom"));n=te-t}return n}function L(){var t=n.location.hash.replace("#",""),o=e('.ms-left .ms-section[data-anchor="'+t+'"]');t.length&&h(o)}function M(t){var i=t.originalEvent;if(B(i)){t.preventDefault();e(".ms-left .ms-section.active");if(!ne){var a=z(i);re=a.y,le=a.x,o.abs(se-re)>e(n).height()/100*s.touchSensitivity&&(se>re?V.moveSectionDown():re>se&&V.moveSectionUp())}}}function B(e){return"undefined"==typeof e.pointerType||"mouse"!=e.pointerType}function O(e){var n=e.originalEvent;if(B(n)){var t=z(n);se=t.y,ae=t.x}}function Z(){if(Q||_){var n=W();e(t).off("touchstart "+n.down).on("touchstart "+n.down,O),e(t).off("touchmove "+n.move).on("touchmove "+n.move,M)}}function R(){if(Q||_){var n=W();e(t).off("touchstart "+n.down),e(t).off("touchmove "+n.move)}}function W(){var e;return e=n.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function z(e){var n=[];return n.y="undefined"!=typeof e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x="undefined"!=typeof e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,_&&B(e)&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function A(){return{options:s,internals:{isTouchDevice:Q,numberSections:ee,setLastScrollDestiny:j,setURLHash:T,activateMenuElement:C,activateNavDots:y,getYmovement:w,removeMouseWheelHandler:p,addMouseWheelHandler:g,removeTouchHandler:R,addTouchHandler:Z,transformContainer:b,c:X}}}function j(e){lastScrolledDestiny=e}function P(e){var t="ms_"+e+"Extension";J[e]=s[e+"Key"],V[e]="undefined"!=typeof n[t]?new n[t]:null,V[e]&&V[e].c(e)}function Y(e){return s[e]&&V[e]}function G(e,n,t){var o=Array.isArray(t)?t.join(", "):t;return!!Y(e)&&V[e][n](o)}function H(e){function n(e){var n,o,i,s,r,l,c,d="",m=0;for(e=e.replace(/[^A-Za-z0-9+\/=]/g,"");m<e.length;)s=a.indexOf(e.charAt(m++)),r=a.indexOf(e.charAt(m++)),l=a.indexOf(e.charAt(m++)),c=a.indexOf(e.charAt(m++)),n=s<<2|r>>4,o=(15&r)<<4|l>>2,i=(3&l)<<6|c,d+=String.fromCharCode(n),64!=l&&(d+=String.fromCharCode(o)),64!=c&&(d+=String.fromCharCode(i));return d=t(d)}function t(e){for(var n,t="",o=0,i=0,s=0;o<e.length;)i=e.charCodeAt(o),i<128?(t+=String.fromCharCode(i),o++):i>191&&i<224?(s=e.charCodeAt(o+1),t+=String.fromCharCode((31&i)<<6|63&s),o+=2):(s=e.charCodeAt(o+1),n=e.charCodeAt(o+2),t+=String.fromCharCode((15&i)<<12|(63&s)<<6|63&n),o+=3);return t}function o(e){return e}function i(e){return e.slice(3).slice(0,-3)}function s(e){var t=e.split("_");if(t.length>1){var o=t[1],s=e.replace(i(t[1]),"").split("_")[0],a=s;return a+"_"+n(o.slice(3).slice(0,-3))}return i(e)}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return o(s(n(e)))}function N(){if(t.domain.length){for(var e=t.domain.replace(/^(www\.)/,"").split(".");e.length>2;){e.shift()}var n=e.join(".");return n.replace(/(^\.*)|(\.*$)/g,"")}return""}function U(e){var n=N(),t=["localhost","127.0.0.1","jshell.net","UDdDQU5ZNlNN"],o=t[0],i=t[1],s=t[2],a=H(t[3]),r=[o,i,s].indexOf(n)<0&&0!==n.length,l="undefined"!=typeof J[e]&&J[e].length;if(!l&&r)return!1;var c=l?H(J[e]):"";c=c.split("_");var d=c.length>1&&c[1].indexOf(e,c[1].length-e.length)>-1,m=c[0].indexOf(n,c[0].length-n.length)<0;return!(m&&r&&a!=c[0])&&d||!r}function X(e){if(Y(e)&&V[e]){var n=H("MTIzPGRpdiBzdHlsZT0iei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkOyB0b3A6IDIwcHg7IGxlZnQ6MjBweDsgYmFja2dyb3VuZDpyZWQ7IHBhZGRpbmc6IDdweCAxNXB4OyBmb250LXNpemU6IDE0cHg7IGZvbnQtZmFtaWx5OiBhcmlhbDsgY29sb3I6ICNmZmY7IGRpc3BsYXk6IGlubGluZS1ibG9jazsiPjxhIGhyZWY9Imh0dHA6Ly9hbHZhcm90cmlnby5jb20vbXVsdGlTY3JvbGwvZXh0ZW5zaW9ucy8iIHN0eWxlPSJjb2xvcjogI2ZmZjsgdGV4dC1kZWNvcmF0aW9uOm5vbmU7Ij5VbmxpY2Vuc2VkIG11bHRpU2Nyb2xsLmpzIEV4dGVuc2lvbjwvYT48L2Rpdj4xMjM="),t=o.random()<.5;if(!U(e)){var i,s="9999999",a="z-index",r=function(){i=t?q.find("div").first():q.find("div").last(),i.css(a)!==s&&(t?q.prepend(n):q.append(n))};r(),setInterval(r,2e3)}}}var V=e.fn.multiscroll,F="multiscroll-wrapper",q=(e("html, body"),e("body"));s=e.extend({verticalCentered:!0,scrollingSpeed:700,easing:"easeInOutCubic",menu:!1,sectionsColor:[],anchors:[],navigation:!1,navigationPosition:"right",navigationColor:"#000",navigationTooltips:[],loopBottom:!1,loopTop:!1,css3:!1,autoScrolling:!0,paddingTop:0,paddingBottom:0,fixedElements:null,normalScrollElements:null,keyboardScrolling:!0,touchSensitivity:5,responsiveWidth:null,responsiveHeight:null,responsiveExpand:!1,responsiveCombine:!1,sectionSelector:".ms-section",leftSelector:".ms-left",rightSelector:".ms-right",afterLoad:null,onLeave:null,afterRender:null,afterResize:null},s);var K=600,Q=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),_="ontouchstart"in n||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,J={};".ms-right"!==s.rightSelector&&e(s.rightSelector).addClass("ms-right"),".ms-left"!==s.leftSelector&&e(s.leftSelector).addClass("ms-left");var $,ee=e(".ms-left").find(".ms-section").length,ne=!1,te=e(n).height();e(this).length&&(V.getMultiscrollData=A),P("responsiveExpand"),P("responsiveCombine"),g(),Z(),s.css3&&(s.css3=I()),e("html, body").css({overflow:"hidden",height:"100%"}),e(this).addClass(F),".ms-section"!==s.sectionSelector&&e(s.sectionSelector).each(function(){e(this).addClass("ms-section")}),s.navigation&&(e("body").append('<div id="multiscroll-nav"><ul></ul></div>'),$=e("#multiscroll-nav"),$.css("color",s.navigationColor),$.addClass(s.navigationPosition)),e(".ms-right, .ms-left").css({width:"50%",position:"absolute",height:"100%","-ms-touch-action":"none"}),e(".ms-right").css({right:"1px",top:"0","-ms-touch-action":"none","touch-action":"none"}),e(".ms-left").css({left:"0",top:"0","-ms-touch-action":"none","touch-action":"none"}),e(".ms-left .ms-section, .ms-right .ms-section").each(function(){var n=e(this).index();if((s.paddingTop||s.paddingBottom)&&e(this).css("padding",s.paddingTop+" 0 "+s.paddingBottom+" 0"),"undefined"!=typeof s.sectionsColor[n]&&e(this).css("background-color",s.sectionsColor[n]),"undefined"!=typeof s.anchors[n]&&e(this).attr("data-anchor",s.anchors[n]),s.verticalCentered&&D(e(this)),e(this).closest(".ms-left").length&&s.navigation){var t="";s.anchors.length&&(t=s.anchors[n]);var o=s.navigationTooltips[n];"undefined"==typeof o&&(o=""),s.navigation&&$.find("ul").append('<li data-tooltip="'+o+'"><a href="#'+t+'"><span></span></a></li>')}}),e(".ms-right").html(e(".ms-right").find(".ms-section").get().reverse()),e(".ms-left .ms-section, .ms-right .ms-section").each(function(){var n=e(this).index();e(this).css({height:"100%"}),!n&&s.navigation&&$.find("li").eq(n).find("a").addClass("active")}).promise().done(function(){e(".ms-left .ms-section.active").length||(e(".ms-right").find(".ms-section").last().addClass("active"),e(".ms-left").find(".ms-section").first().addClass("active")),Y("responsiveExpand")&&(V.responsiveExpand.setIndex("ms-left"),V.responsiveExpand.setIndex("ms-right"),V.responsiveExpand.init()),Y("responsiveCombine")&&V.responsiveCombine.init(),s.navigation&&$.css("margin-top","-"+$.height()/2+"px"),a(),v(),E(),e(n).on("load",function(){L()})}),e(n).on("hashchange",r),e(t).keydown(l);var oe;e(t).mousedown(function(e){if(1==e.button)return e.preventDefault(),!1}),e(t).on("click","#multiscroll-nav a",d),e(t).on({mouseenter:m,mouseleave:f},"#multiscroll-nav li"),s.normalScrollElements&&(e(t).on("mouseenter",s.normalScrollElements,function(){V.setMouseWheelScrolling(!1)}),e(t).on("mouseleave",s.normalScrollElements,function(){V.setMouseWheelScrolling(!0)})),e(n).on("resize",u);var ie=te;V.moveSectionUp=function(){var n=e(".ms-left .ms-section.active").prev(".ms-section");!n.length&&s.loopTop&&(n=e(".ms-left .ms-section").last()),n.length&&h(n)},V.moveSectionDown=function(){var n=e(".ms-left .ms-section.active").next(".ms-section");!n.length&&s.loopBottom&&(n=e(".ms-left .ms-section").first()),n.length&&h(n)},V.moveTo=function(n){var t="";t=isNaN(n)?e('.ms-left [data-anchor="'+n+'"]'):e(".ms-left .ms-section").eq(n-1),h(t)},V.setKeyboardScrolling=function(e){s.keyboardScrolling=e},V.setMouseWheelScrolling=function(e){e?g():p()},V.setScrollingSpeed=function(e){s.scrollingSpeed=e};var se=0,ae=0,re=0,le=0;V.destroy=function(){V.setKeyboardScrolling(!1),V.setMouseWheelScrolling(!1),R(),e(n).off("hashchange",r).off("resize",u),e(t).off("mouseenter","#multiscroll-nav li").off("mouseleave","#multiscroll-nav li").off("click","#multiscroll-nav a")},V.build=function(){V.setKeyboardScrolling(!0),V.setMouseWheelScrolling(!0),e(n).on("hashchange",r).on("resize",u),e(t).on("mouseenter","#multiscroll-nav li").on("mouseleave","#multiscroll-nav li").on("click","#multiscroll-nav a")},V.extensionCall=G}}(jQuery,window,document,Math);