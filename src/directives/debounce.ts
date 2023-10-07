import Vue from "vue";
// 防抖指令
Vue.directive("debounce", {
  bind: function (el, binding) {
    let timer:any;
    el.addEventListener("click", function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        binding.value()
      })
    });
  },
});
