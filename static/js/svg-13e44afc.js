import{v as o}from"./lodash-es-74a5df03.js";import{j as r,t as n,o as c,c as i,a as m}from"./@vue.runtime-core-561bebe5.js";import{r as l}from"./@vue.reactivity-97074417.js";import{_}from"./_plugin-vue_export-helper-c27b6911.js";import{o as f,p}from"./@vue.shared-40d3234d.js";const u=r({name:"cl-svg",props:{name:{type:String},className:{type:String},size:{type:[String,Number]}},setup(e){const s=l({fontSize:o(e.size)?e.size+"px":e.size}),a=n(()=>`#icon-${e.name}`),t=n(()=>["cl-svg",`cl-svg__${e.name}`,String(e.className||"")]);return{style:s,iconName:a,svgClass:t}}});const d=["xlink:href"];function g(e,s,a,t,v,y){return c(),i("svg",{class:f(e.svgClass),style:p(e.style),"aria-hidden":"true"},[m("use",{"xlink:href":e.iconName},null,8,d)],6)}const k=_(u,[["render",g],["__scopeId","data-v-c7aa0a4e"]]);export{k as default};