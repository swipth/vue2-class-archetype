import Vue from "vue";
// 复制指令
Vue.directive("copy", {
  bind: function (el, binding) {
    el.addEventListener("click", function () {
      const input = document.createElement("input");
      input.setAttribute("value", binding.value);
      document.body.appendChild(input);
      input.select();
      if (document.execCommand("copy")) {
        document.execCommand("copy");
      }
      document.body.removeChild(input);
    });
  },
});
