!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("h6c0i"),r=document.querySelector(".form");console.dir(r),r.addEventListener("submit",(function(e){var n=function(e,n){var o,t;(o=e,t=n,new Promise((function(e,n){var i=Math.random()>.3;setTimeout((function(){i?e({position:o,delay:t}):n({position:o,delay:t})}),t)}))).then((function(o){o.position,o.delay;i.Notify.success("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms"))})).catch((function(o){o.position,o.delay;i.Notify.failure("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}))};e.preventDefault();for(var o=Number(r.elements.delay.value),t=Number(r.elements.step.value),a=Number(r.elements.amount.value),l=1,u=o;l<=a;l+=1,u+=t)n(l,u)}))}();
//# sourceMappingURL=03-promises.cf60811f.js.map
