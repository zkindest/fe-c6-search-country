var F=Object.defineProperty,B=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var $=(e,t,n)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&$(e,n,t[n]);if(y)for(var n of y(t))R.call(t,n)&&$(e,n,t[n]);return e},u=(e,t)=>B(e,V(t));var v=(e,t)=>{var n={};for(var o in e)k.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&y)for(var o of y(e))t.indexOf(o)<0&&R.call(e,o)&&(n[o]=e[o]);return n};import{j as b,r as d,R as g,L as w,A as q,a as H,u as Q,M as G,F as U,B as W,b as Y,c as S,d as z}from"./vendor.03eebf0f.js";const J=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerpolicy&&(c.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?c.credentials="include":i.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}};J();const E={"clr-text":{light:"hsl(200,15%,8%)",dark:"hsl(0,0%,100%)"},"clr-elements":{light:"hsl(0,0%,100%)",dark:"hsl(209, 23%, 22%)"},"clr-input":{light:"hsl(0,0%,52%)",dark:"hsl(0, 0%, 100%)"},"clr-bg":{light:"hsl(0,0%,98%)",dark:"hsl(207, 26%, 17%)"},"clr-link":{light:"hsl(0,0%,98%)",dark:"hsl(209, 23%, 22%)"},"shadow-color":{light:"280deg 6% 76%",dark:"0deg 0% 17%"},"shadow-button":{light:"0 0 4px 2px lightgrey",dark:"0 0 3px 1px rgba(18, 10, 7, 0.5)"}},O="--initial-color-mode",j="color-mode",X=["All","Africa","Americas","Asia","Europe","Oceania"];(function(){let t="light";const n=window.localStorage.getItem(j),i=typeof window.matchMedia("(prefers-color-scheme: dark)").matches=="boolean";typeof n=="string"&&(n==="light"||n==="dark")?t=n:t=i?"dark":"light";let c=document.documentElement;c.style.setProperty(O,t),Object.entries(E).forEach(([l,h])=>{const a=`--${l}`;c.style.setProperty(a,h[t])})})();const Z="_wrapper_1uiuc_1",ee="_controls_1uiuc_4";var M={wrapper:Z,controls:ee};const r=b.exports.jsx,s=b.exports.jsxs,re=b.exports.Fragment,L={searchKey:"",fetched:[],init:[],filtered:[],filteredRegion:"",error:""},P=d.exports.createContext(L),A=d.exports.createContext(null),te=["ger","usa","ind","can","mex","npl","chn","mar","prt","and"];function ne(e,t){switch(t.type){case"init":return t.error?u(f({},e),{error:t.error}):t.data?u(f({},e),{init:t.data,fetched:t.data,filtered:t.data}):e;case"new-search":return t.error?u(f({},e),{error:t.error}):t.data?u(f({},e),{searchKey:t.searchKey,fetched:t.data,filtered:t.data,filteredRegion:"All"}):e;case"empty-search":return e.searchKey?u(f({},e),{searchKey:"",filtered:e.init,fetched:e.init}):e;case"new-fetch":return e.init.concat(t.data),e.init.length>10&&e.init.splice(0,e.init.length-10),e;case"region-filter":const n=e.fetched.filter(o=>o.region===t.region);return u(f({},e),{filtered:n,filteredRegion:t.region});case"no-filter":return e.searchKey?u(f({},e),{filtered:e.fetched}):u(f({},e),{filtered:e.init,fetched:e.init,filteredRegion:"All"});case"reset-to-init":return u(f({},e),{filtered:e.init,fetched:e.init,filteredRegion:"All",searchKey:""});default:return e}}const oe=({children:e})=>{const[t,n]=d.exports.useReducer(ne,L),o=d.exports.useCallback(async function(){const i=await fetch(`https://restcountries.com/v3.1/alpha?codes=${te.join(",")}`);if(i.status===200){const c=await i.json();n({type:"init",data:c})}else n({type:"init",error:i.statusText})},[]);return d.exports.useEffect(()=>{o()},[]),r(P.Provider,{value:t,children:r(A.Provider,{value:n,children:e})})},x=()=>{const e=d.exports.useContext(P);if(!e)throw new Error("CountryContext is not provided.");return e},C=()=>{const e=d.exports.useContext(A);if(!e)throw new Error("CountryDispatchContext is not provided.");return e},ie="_card_1kdoe_1",ce="_card__logo_1kdoe_19",se="_card__details_1kdoe_31";var N={card:ie,card__logo:ce,card__details:se};const le=g.memo(({flag:e,country:t,population:n,region:o,capital:i,code:c})=>r("div",{className:N.card,children:s(w,{to:`/country/${c}`,style:{textDecoration:"none"},children:[r("div",{className:N.card__logo,children:r("img",{src:e,alt:`The flag of ${t}`})}),s("div",{className:N.card__details,children:[r("h2",{children:t}),s("dl",{children:[s("div",{children:[r("dt",{children:"Population"}),r("dd",{children:n})]}),s("div",{children:[r("dt",{children:"Region"}),r("dd",{children:o})]}),s("div",{children:[r("dt",{children:"Capital"}),r("dd",{children:i})]})]})]})]})})),de="_countries_1sjxw_1";var ae={countries:de};const he=()=>{const e=x();return r("div",{className:ae.countries,children:e.filtered?e.filtered.map(t=>r(le,{capital:t.capital&&t.capital[0],country:t.name.common,flag:t.flags.png,population:t.population,region:t.region,code:t.cioc},t.name.common)):null})},fe="_form__field_1c24f_1",ue="_field__body_1c24f_7",pe="_field__footer_1c24f_9",_e="_spin_1c24f_1";var _={form__field:fe,field__body:ue,field__footer:pe,"field-input":"_field-input_1c24f_14","left-adornment":"_left-adornment_1c24f_50","right-adornment":"_right-adornment_1c24f_54","animate-spin":"_animate-spin_1c24f_56",spin:_e};const me=g.forwardRef(function(t,n){const h=t,{classes:o,error:i,loading:c}=h,l=v(h,["classes","error","loading"]);return s("div",{className:`${_.form__field} ${(o==null?void 0:o.root)?o.root:""}`,children:[r("div",{className:`${_.field__body} ${(o==null?void 0:o.field__body)?o.field__body:""}`,children:s("div",{className:`${_["field-input"]} ${(o==null?void 0:o["field-input"])?o["field-input"]:""}`,children:[r("div",{className:`${_["left-adornment"]} ${(o==null?void 0:o["left-adornment"])?o["left-adornment"]:""}`,"aria-hidden":"true",children:r(q,{})}),r("input",f({type:"text",name:"search",placeholder:"Search for a country...",ref:n},l)),c?r("div",{className:`${_["right-adornment"]} ${(o==null?void 0:o["right-adornment"])?o["right-adornment"]:""}`,"aria-hidden":"true",children:r(H,{className:_["animate-spin"]})}):null,r("fieldset",{"aria-hidden":"true"})]})}),r("div",{className:`${_.field__footer} ${(o==null?void 0:o.field__footer)?o.field__footer:""}`,children:i&&r("p",{className:_.error,children:i})})]})}),ge="_form__field_1eu3j_1";var K={form__field:ge,"field-select":"_field-select_1eu3j_8"};const ye=e=>e.trim().toLowerCase().split("/s+/").join("-"),ve=g.forwardRef(function(t,n){const h=t,{label:o,options:i}=h,c=v(h,["label","options"]),l=ye(o);return s("div",{className:K.form__field,children:[r("label",{htmlFor:l,children:o}),s("div",{className:K["field-select"],children:[r("select",u(f({id:l},c),{ref:n,children:i.map(a=>r("option",{value:a,children:a},a))})),r("fieldset",{"aria-hidden":"true"})]})]})}),xe=()=>{const e=x(),t=C(),[n,o]=d.exports.useState(e.filteredRegion);d.exports.useEffect(()=>{o(e.filteredRegion)},[e.filteredRegion]);const i=c=>{const l=c.target.value;o(l),n!==l&&t(l==="All"?{type:"no-filter"}:{type:"region-filter",region:l})};return r(ve,{value:e.filteredRegion||n,onChange:i,label:"Filter By Region",options:X})},Ce=()=>{const[e,t]=d.exports.useState(""),[n,o]=d.exports.useState({error:"",loading:!1}),i=x(),c=C();d.exports.useEffect(()=>{t(i.searchKey)},[i.searchKey]);const l=async a=>{o({error:"",loading:!0});const p=await fetch(`https://restcountries.com/v3.1/name/${a}`);if(p.status===200){const D=await p.json();c({type:"new-search",searchKey:e,data:D}),o({error:"",loading:!1})}else c({type:"new-search",searchKey:e,error:p.statusText}),o({error:"Details not found",loading:!1})};return r(me,{value:e,onChange:a=>t(a.target.value),onKeyUp:async a=>{a.key==="Enter"&&(e?await l(e):c({type:"empty-search"}))},error:n.error,loading:n.loading})},be=()=>s("div",{className:M.wrapper,children:[s("div",{className:M.controls,children:[r(Ce,{}),r(xe,{})]}),r(he,{})]}),we="_wrapper_dafnk_1",Ne="_button_dafnk_5",ke="_country_dafnk_20",Re="_flag_dafnk_24",$e="_details_dafnk_33",Se="_dls_dafnk_41",Ee="_borders_dafnk_59";var m={wrapper:we,button:Ne,country:ke,flag:Re,details:$e,dls:Se,borders:Ee};const Oe=e=>r("button",{className:m.button,children:e.children}),je=()=>{const e=x(),t=C(),[n,o]=d.exports.useState(null),{code:i}=Q();return d.exports.useEffect(()=>{const c=async h=>{const a=await fetch(`https://restcountries.com/v3.1/alpha/${h}`);if(a.status===200){const p=await a.json();o(p[0]),t({type:"new-fetch",data:p})}},l=e.fetched.filter(h=>h.cioc===i);l.length!==0?o(l[0]):c(i)},[]),s("div",{className:m.wrapper,children:[s(w,{to:"/",className:m.button,children:[r(G,{}),"Back"]}),n&&s("section",{className:m.country,children:[r("div",{className:m.flag,children:r("img",{src:n.flags.png})}),s("div",{className:m.details,children:[r("h2",{children:n.name.common}),s("div",{children:[s("div",{className:m.dls,children:[s("dl",{children:[s("div",{children:[r("dt",{children:"Native name"}),r("dd",{children:n.name.nativeName[Object.keys(n.languages)[0]].common})]}),s("div",{children:[r("dt",{children:"Population"}),r("dd",{children:n.population})]}),s("div",{children:[r("dt",{children:"Region"}),r("dd",{children:n.region})]}),s("div",{children:[r("dt",{children:"Sub Region"}),r("dd",{children:n.subregion})]}),s("div",{children:[r("dt",{children:"Capital"}),r("dd",{children:n.capital})]})]}),s("dl",{children:[s("div",{children:[r("dt",{children:"Top Level Domain"}),r("dd",{children:n.tld[0]})]}),s("div",{children:[r("dt",{children:"Currencies"}),r("dd",{children:n.currencies[Object.keys(n.currencies)[0]].name})]}),s("div",{children:[r("dt",{children:"Languages"}),r("dd",{children:Object.values(n.languages).join(", ")})]})]})]}),r("div",{className:m.borders,children:s("dl",{children:[r("dt",{children:"Border Countries"}),r("dd",{children:n.borders.map((c,l)=>r(Oe,{children:c},l))})]})})]})]})]})]})},T=d.exports.createContext({}),Me=({children:e})=>{const[t,n]=d.exports.useState("");d.exports.useEffect(()=>{const c=window.document.documentElement.style.getPropertyValue(O);n(c)},[]);const o=g.useMemo(()=>{function i(c){const l=window.document.documentElement;n(c),localStorage.setItem(j,c),Object.entries(E).forEach(([h,a])=>{const p=`--${h}`;l.style.setProperty(p,a[c])})}return{colorMode:t,setColorMode:i}},[t,n]);return r(T.Provider,{value:o,children:e})};var Le={"theme-changer":"_theme-changer_1wynv_1"};const Pe=()=>{const{colorMode:e,setColorMode:t}=d.exports.useContext(T),n=e==="light";return s("button",{className:Le["theme-changer"],onClick:()=>{t(n?"dark":"light")},"aria-label":`change theme to ${n?"dark":"light"} mode`,children:[r(U,{}),"Dark Mode"]})},Ae="_header_1i2r3_1",Ke="_container_1i2r3_8";var I={header:Ae,container:Ke};const Te=()=>{const e=C();return r("header",{className:I.header,children:s("div",{className:I.container,children:[r(w,{to:"/",onClick:()=>e({type:"reset-to-init"}),children:r("h1",{children:"Where in the world?"})}),r(Pe,{})]})})},Ie=n=>{var o=n,{children:e}=o,t=v(o,["children"]);return s(re,{children:[r(Te,{}),r("main",u(f({},t),{children:r("div",{className:"container",children:e})}))]})};function De(){return r(Me,{children:r(oe,{children:r("div",{children:r(W,{basename:"/fe-c6-search-country",children:r(Ie,{children:s(Y,{children:[r(S,{path:"/",element:r(be,{})}),r(S,{path:"/country/:code",element:r(je,{})})]})})})})})})}z.render(r(g.StrictMode,{children:r(De,{})}),document.getElementById("root"));
