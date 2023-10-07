import Vue from "vue";
// 密码强度检验指令
Vue.directive("password-check", {
  bind: function (el, binding, vNode: any) {
    el.oninput = (e: any) => {
      const value = e.target.value;
      if (value.trim().length <= 0) {
        vNode.context.status = "密码不能为空"
      } else if (value.trim().length < 6) {
        vNode.context.status = "弱"
      } else if (value.trim().length < 10) {
        vNode.context.status = "中"
      } else {
        vNode.context.status = "强"
      }
    }
  },
});
