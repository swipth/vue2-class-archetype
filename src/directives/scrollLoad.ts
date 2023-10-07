import Vue from "vue";
// 滚动加载指令
Vue.directive("scroll-load", {
  bind: function (el, binding) {
    let lastScrollTop = 0;
    el.addEventListener("scroll", function () {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        const scrollHeight = document.documentElement.scrollHeight
        const clientHeight = document.documentElement.clientHeight
        if (st + clientHeight >= scrollHeight) {
          binding.value()
        }
      }
      lastScrollTop = st
    });
  },
});
