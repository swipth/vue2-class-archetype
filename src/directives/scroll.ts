// v-scroll ：滚动到指定的位置。可以使用  v-scroll  指令来实现页面滚动到指定的位置。
// <button v-scroll="'#target'">滚动到目标位置</button>
// <div id="target">这是目标位置</div>
import Vue from "vue";
Vue.directive("scroll", {
  inserted: function (el, binding) {
    el.addEventListener("click", function () {
      const target = document.querySelector(binding.value);
      target.scrollIntoView({ behavior: "smooth" });
    });
  },
});
