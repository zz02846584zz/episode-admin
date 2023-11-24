import{D as B}from"./vuedraggable-b14ef1fe.js";import{s as b}from"./index-c3533fa0.js";import{E as D,D as I,q as x}from"./lodash-es-74a5df03.js";import{j as A,t as S,q as $,n as w,X as _,o as U,c as q,b as a,K as l,O as d,a as V,as as F,ar as O}from"./@vue.runtime-core-561bebe5.js";import{r as E}from"./@vue.reactivity-97074417.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{O as j}from"./@vue.shared-40d3234d.js";import"./sortablejs-fcb1c1b8.js";import"./chardet-cfd7d38a.js";import"./@vue.runtime-dom-99571815.js";import"./vue-052dfabe.js";import"./element-plus-ca11a4ea.js";import"./@element-plus.icons-vue-73c86597.js";import"./@popperjs.core-c75af06c.js";import"./@ctrl.tinycolor-f8748455.js";import"./dayjs-e0a79e34.js";import"./async-validator-8a4f889d.js";import"./memoize-one-297ddbcb.js";import"./escape-html-f47942fe.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui.dom-4390772d.js";import"./@floating-ui.core-1d013f45.js";import"./@floating-ui.utils-1e4a7d10.js";import"./store-acb3382e.js";import"./axios-f6771985.js";import"./nprogress-5ff42f71.js";import"./pinia-d82d1bdc.js";import"./vue-demi-71ba0ef2.js";import"./monaco-editor-f913c445.js";import"./vue-echarts-0ed26588.js";import"./resize-detector-a5205554.js";import"./echarts-eea5b079.js";import"./tslib-54e39b60.js";import"./zrender-ecf5ed03.js";import"./vue-router-c769f697.js";import"./@vueuse.core-c33523a6.js";import"./@vueuse.shared-b7ebfaaa.js";import"./mitt-b509fb6d.js";import"./mockjs-597bdf6e.js";const K=A({name:"cl-column-custom",components:{Draggable:B},props:{name:String,columns:{type:Array,required:!0,default:()=>[]}},setup(e){const n=E(!1),f=`column-custom__${e.name||location.pathname}`,p=E([]),m=S(()=>e.columns.filter(o=>!o.type&&o.prop));function v(){w(()=>{m.value.forEach(o=>{var t;o.hidden=!((t=p.value.find(i=>i.prop==o.prop))!=null&&t.checked),o.orderNum=p.value.findIndex(i=>i.prop==o.prop)})})}function s(){b.set(f,p.value),v(),c()}function h(){m.value.forEach(o=>{o.orderNum!==void 0&&(o.hidden=!1,o.orderNum=0)}),b.remove(f),u(),c()}function k(){n.value=!0,u()}function c(){n.value=!1}function r(o){return x(o,"orderNum","asc")}function u(){if(!e.columns)return!1;const o=b.get(f);p.value=r(m.value.map(t=>{var y;let i=!0,C=t.orderNum||0;return D(t.hidden)&&(i=!t.hidden),o&&(i=(y=o.find(g=>g.prop==t.prop))==null?void 0:y.checked,C=o.findIndex(g=>g.prop==t.prop)),{label:t.label,prop:t.prop,checked:i,orderNum:C}})),v()}function N(o){return r(m.value.filter(t=>!t.hidden)).map(t=>I(o,t.prop)?o[t.prop]:"")}return $(()=>e.columns,()=>{u()}),{visible:n,list:p,open:k,close:c,save:s,reset:h,summary:N}}});const X=e=>(F("data-v-60c41ef9"),e=e(),O(),e),z={class:"cl-column-custom__wrap"},G={class:"cl-column-custom__dialog"},H={class:"left"},J=X(()=>V("div",{class:"right"},null,-1));function L(e,n,f,p,m,v){const s=_("el-button"),h=_("el-checkbox"),k=_("draggable"),c=_("cl-dialog");return U(),q("div",z,[a(s,{onClick:e.open},{default:l(()=>[d("自定义列")]),_:1},8,["onClick"]),a(c,{modelValue:e.visible,"onUpdate:modelValue":n[1]||(n[1]=r=>e.visible=r),title:"自定义列"},{footer:l(()=>[a(s,{onClick:e.close},{default:l(()=>[d("取消")]),_:1},8,["onClick"]),a(s,{type:"danger",onClick:e.reset},{default:l(()=>[d("重置")]),_:1},8,["onClick"]),a(s,{type:"success",onClick:e.save},{default:l(()=>[d("保存")]),_:1},8,["onClick"])]),default:l(()=>[V("div",G,[V("div",H,[a(k,{"item-key":"prop",modelValue:e.list,"onUpdate:modelValue":n[0]||(n[0]=r=>e.list=r)},{item:l(({element:r})=>[a(h,{border:"",modelValue:r.checked,"onUpdate:modelValue":u=>r.checked=u},{default:l(()=>[d(j(r.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1},8,["modelValue"])]),J])]),_:1},8,["modelValue"])])}const wo=T(K,[["render",L],["__scopeId","data-v-60c41ef9"]]);export{wo as default};
