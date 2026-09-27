/*
FunPay Lite Bot
Copyright (c) 2022-2026 Leonid Tsaruk aka NightStranger
Build fb58390b-fd2f-4509-b7ff-a72017ca44f0
Built 2026-09-23T22:33:54.418Z
*/
"use strict";(()=>{function _(e){w(e),document.querySelectorAll("style.theme").forEach(r=>r.remove());let t=document.createElement("style");t.classList.add("theme"),t.textContent=e;let n=()=>{let r=document.head;if(!r){let i=document.documentElement;i&&t.parentNode!==i&&i.appendChild(t);return}r.lastElementChild!==t&&r.appendChild(t)};n();let o=new MutationObserver(n);o.observe(document,{childList:!0,subtree:!0});let a=()=>o.disconnect();document.readyState==="complete"||document.readyState==="interactive"?queueMicrotask(a):document.addEventListener("DOMContentLoaded",a,{once:!0})}function w(e){let t=/url\(\s*["']?((?:chrome|moz)-extension:\/\/[^)"']+)["']?\s*\)/g,n=new Set,o;for(;(o=t.exec(e))!==null;){let a=o[1];if(n.has(a))continue;n.add(a);let r=new Image;r.src=a}}var s=_;async function x(e){let t=chrome.runtime.getURL(e);return await(await fetch(t)).text()}var h=x;var k="LBThemeCSS",l="LBThemeCSSVersion",v="LBThemeName";var M={dark:"content/static/themes/dark.css",firewatch:"content/static/themes/firewatch.css",red_moon:"content/static/themes/red_moon.css"};function C(e){return e?M[e]??null:null}function f(){try{return chrome.runtime.getManifest().version}catch{return""}}function E(e){try{return localStorage.getItem(e)}catch{return null}}function S(e,t){try{localStorage.setItem(e,t)}catch{}}function T(e){let t=f();return t?E(e)!==t:!1}function p(e){let t=f();t&&S(e,t)}async function I(e){return(await h(e)).replace(/chrome-extension:\/\/<extension-id>\//g,chrome.runtime.getURL(""))}async function y(e){if(!T(l))return!1;let t=C(E(v));if(!t)return p(l),!1;try{let n=await I(t);return n?(S(k,n),p(l),e(n),!0):!1}catch{return!1}}var A="LBCustomBackground";var P="LBCustomBackgroundDim";var m="LB-custom-bg-rules",R=["background-image","background-size","background-position","background-attachment","background-repeat"];var L="LBCustomBackgroundFull";var c,u=!1;function d(){document.querySelectorAll("style.LB-custom-bg").forEach(o=>o.remove()),document.querySelectorAll(`style.${m}`).forEach(o=>o.remove());let e=localStorage.getItem(A),t=e?typeof c=="string"?c:e:null;if(N(t),!t)return;let n=document.createElement("style");n.classList.add(m),n.textContent=O(t,U()),(document.head??document.documentElement).appendChild(n),c===void 0&&e&&B()}async function B(){if(!u){u=!0;try{let t=(await chrome.storage.local.get(L))[L];c=typeof t=="string"?t:null}catch{c=null}finally{u=!1}typeof c=="string"&&document.querySelector(`style.${m}`)&&d()}}function U(){let e=localStorage.getItem(P);if(e===null)return 25;let t=Number(e);return Number.isFinite(t)?Math.min(100,Math.max(0,Math.round(t))):25}function N(e){let t=document.documentElement;if(!e){for(let n of R)t.style.removeProperty(n);return}t.style.setProperty("background-image",`url("${e}")`,"important"),t.style.setProperty("background-size","cover","important"),t.style.setProperty("background-position","center center","important"),t.style.setProperty("background-attachment","fixed","important"),t.style.setProperty("background-repeat","no-repeat","important")}function O(e,t){let n=`url("${e}")`,o=(Math.min(100,Math.max(0,t))/100).toFixed(2);return`html,
body {
    background-image: ${n} !important;
    background-size: cover !important;
    background-position: center center !important;
    background-attachment: fixed !important;
    background-repeat: no-repeat !important;
    background-color: transparent !important;
}
body {
    isolation: isolate !important;
}
body::before {
    content: "" !important;
    position: fixed !important;
    inset: 0 !important;
    background-color: rgba(0, 0, 0, ${o}) !important;
    pointer-events: none !important;
    z-index: -1 !important;
}
.wrapper,
.wrapper-content,
.wrapper-footer,
.content-orders {
    background-color: transparent !important;
    background-image: none !important;
}
#header,
.bg-light-color,
.bg-light-color #header,
.navbar-default {
    background-color: transparent !important;
    background-image: none !important;
}`}var F=new Set(["firewatch","red_moon"]);function b(e){return!!e&&F.has(e)}function D(e){let t;try{t=chrome.runtime.getURL("")}catch{return e}if(!t)return e;let n=e.replace(/(?:chrome|moz)-extension:\/\/[^/"')\s]+\//g,t);if(n!==e)try{localStorage.setItem("LBThemeCSS",n)}catch{}return n}function H(){let e=localStorage.getItem("LBThemeCSS");e&&s(D(e)),y(s);let t=localStorage.getItem("LBThemeName");t!==null&&!b(t)||d()}var g=H;document.location.host!=="support.funpay.com"&&G();function G(){try{g()}catch{document.addEventListener("DOMContentLoaded",()=>{try{g()}catch{}},{once:!0})}}})();
