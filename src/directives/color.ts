// v-color ：根据数据源动态修改元素的颜色。可以使用  v-color  指令来根据数据源动态修改元素的颜色。
// <div v-color="color">{{ message }}</div>
import Vue from "vue";
Vue.directive("color", {
  bind: function (el, binding) {
    el.style.color = binding.value;
  },
  update: function (el, binding) {
    el.style.color = binding.value;
  },
});
