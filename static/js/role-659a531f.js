import{i as l}from"./index-7178fe38.js";import"./store-acb3382e.js";import{u as T}from"./index-819678c4.js";import{j as s,X as t,o as V,J as U,K as n,b as e,a as W}from"./@vue.runtime-core-561bebe5.js";import"./@vue.runtime-dom-99571815.js";import"./@vue.shared-40d3234d.js";import"./@vue.reactivity-97074417.js";import"./element-plus-ca11a4ea.js";import"./lodash-es-74a5df03.js";import"./@element-plus.icons-vue-73c86597.js";import"./@popperjs.core-c75af06c.js";import"./@ctrl.tinycolor-f8748455.js";import"./dayjs-e0a79e34.js";import"./chardet-cfd7d38a.js";import"./async-validator-8a4f889d.js";import"./memoize-one-297ddbcb.js";import"./escape-html-f47942fe.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui.dom-4390772d.js";import"./@floating-ui.core-1d013f45.js";import"./@floating-ui.utils-1e4a7d10.js";import"./axios-f6771985.js";import"./nprogress-5ff42f71.js";import"./pinia-d82d1bdc.js";import"./vue-demi-71ba0ef2.js";import"./monaco-editor-f913c445.js";import"./vue-echarts-0ed26588.js";import"./resize-detector-a5205554.js";import"./echarts-eea5b079.js";import"./tslib-54e39b60.js";import"./zrender-ecf5ed03.js";import"./vue-router-c769f697.js";import"./@vueuse.core-c33523a6.js";import"./@vueuse.shared-b7ebfaaa.js";import"./mitt-b509fb6d.js";import"./mockjs-597bdf6e.js";import"./vue-052dfabe.js";const L=W("span",{style:{marginLeft:"10px",fontSize:"12px"}},"是否關聯上下級",-1),B=s({name:"sys-role"}),be=s({...B,setup(I){const{service:_}=T(),u=l.useCrud({service:_.base.sys.role},o=>{o.refresh()}),a=l.useUpsert({dialog:{width:"800px"},items:[{prop:"name",label:"名稱",span:12,required:!0,component:{name:"el-input"}},{prop:"label",label:"標識",span:12,required:!0,component:{name:"el-input"}},{prop:"remark",label:"備註",span:24,component:{name:"el-input",props:{type:"textarea",rows:4}}},{label:"功能權限",prop:"menuIdList",value:[],component:{name:"cl-menu-check"}},{label:"數據權限",prop:"relevance",flex:!1,component:{name:"slot-relevance"}},{label:"",prop:"departmentIdList",value:[],component:{name:"cl-dept-check",props:{},style:{marginTop:"-10px"}}}],plugins:[l.setFocus()],onOpened(o){c(o.relevance||0)}}),d=l.useTable({columns:[{type:"selection",width:60},{prop:"name",label:"名稱",minWidth:150},{prop:"label",label:"標識",minWidth:120},{prop:"remark",label:"備註",showOverflowTooltip:!0,minWidth:150},{prop:"createTime",label:"創建時間",sortable:"desc",minWidth:160},{prop:"updateTime",label:"更新時間",sortable:"custom",minWidth:160},{label:"操作",type:"op",buttons:["edit","delete"]}]});function c(o){var r;(r=a.value)==null||r.setProps("departmentIdList",{checkStrictly:o==0})}return(o,r)=>{const b=t("cl-refresh-btn"),f=t("cl-add-btn"),h=t("cl-multi-delete-btn"),m=t("cl-flex1"),v=t("cl-search-key"),p=t("cl-row"),x=t("cl-table"),y=t("cl-pagination"),k=t("el-switch"),w=t("cl-upsert"),C=t("cl-crud");return V(),U(C,{ref_key:"Crud",ref:u},{default:n(()=>[e(p,null,{default:n(()=>[e(b),e(f),e(h),e(m),e(v,{placeholder:"搜索名稱"})]),_:1}),e(p,null,{default:n(()=>[e(x,{ref_key:"Table",ref:d},null,512)]),_:1}),e(p,null,{default:n(()=>[e(m),e(y)]),_:1}),e(w,{ref_key:"Upsert",ref:a},{"slot-relevance":n(({scope:i})=>[e(k,{modelValue:i.relevance,"onUpdate:modelValue":g=>i.relevance=g,"active-value":1,"inactive-value":0,onChange:c},null,8,["modelValue","onUpdate:modelValue"]),L]),_:1},512)]),_:1},512)}}});export{be as default};