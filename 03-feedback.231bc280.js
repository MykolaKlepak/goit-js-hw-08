!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,d=l||c||Function("return this")(),s=Object.prototype.toString,v=Math.max,m=Math.min,g=function(){return d.Date.now()};function p(e,t,n){var o,r,u,a,f,l,c=0,d=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError(i);function j(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function w(e){return c=e,f=setTimeout(O,t),d?j(e):a}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function O(){var e=g();if(S(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return s?m(n,u-(e-c)):n}(e))}function h(e){return f=void 0,p&&o?j(e):(o=r=void 0,a)}function T(){var e=g(),n=S(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return w(l);if(s)return f=setTimeout(O,t),j(l)}return void 0===f&&(f=setTimeout(O,t)),a}return t=b(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(b(n.maxWait)||0,t):u,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},T.flush=function(){return void 0===f?a:h(g())},T}function y(e){var i=void 0===e?"undefined":t(n)(e);return!!e&&("object"==i||"function"==i)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var i="function"==typeof e.valueOf?e.valueOf():e;e=y(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=u.test(e);return l||a.test(e)?f(e.slice(2),l?2:8):r.test(e)?NaN:+e}var j=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})}((function(e){T[e.target.name]=e.target.value,localStorage.setItem(w,JSON.stringify(T))}),500),w="feedback-form-state",S=document.querySelector(".feedback-form"),O=document.querySelector('[name="email"]'),h=document.querySelector('[name="message"]'),T={email:O.value,message:h.value};O.addEventListener("input",j),h.addEventListener("input",j),S.addEventListener("submit",(function(e){e.preventDefault(),O.value&&h.value&&(localStorage.removeItem(w),e.target.reset(),T.email=O.value,T.message=h.value)})),window.onload=function(){console.log(T);var e=localStorage.getItem(w),t=JSON.parse(e);null!==e&&(O.value=t.email,h.value=t.message)}}();
//# sourceMappingURL=03-feedback.231bc280.js.map
