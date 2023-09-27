import Vue from "vue";
// v-focus ：自动聚焦到指定的表单元素。可以使用  v-focus  指令来实现页面加载时自动聚焦到指定的表单元素。
Vue.directive("focus", {
  inserted: function (el) {
    el.focus();
  },
});
