import{j as r,X as t,o as u,c as i,b as e,K as n}from"./@vue.runtime-core-561bebe5.js";import{r as c}from"./@vue.reactivity-97074417.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import"./@vue.shared-40d3234d.js";const b={class:"editor"},g=r({name:"demo-editor"}),v=r({...g,setup(x){const l=c('<p><span style="font-size: 22px;"><em>富文本编</em></span><span style="color: rgb(216, 68, 147); font-size: 22px;"><em>辑器</em></span></p>'),s=c(`
class User {
  main() {
    console.log('Name', '神仙都没用')
  }
}

const user = new User();
user.main();
`);return(y,o)=>{const p=t("cl-editor-monaco"),_=t("el-tab-pane"),d=t("cl-editor-wang"),m=t("el-tabs");return u(),i("div",b,[e(m,{type:"card"},{default:n(()=>[e(_,{label:"Monaco"},{default:n(()=>[e(p,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=a=>s.value=a),language:"typescript"},null,8,["modelValue"])]),_:1}),e(_,{label:"Wang",lazy:""},{default:n(()=>[e(d,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=a=>l.value=a)},null,8,["modelValue"])]),_:1})]),_:1})])}}});const C=f(v,[["__scopeId","data-v-fd3ebaec"]]);export{C as default};
