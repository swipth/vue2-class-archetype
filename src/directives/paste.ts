import Vue from "vue";
// 粘贴指令
Vue.directive("paste", {
  bind: function (el, binding) {
    el.addEventListener("click", function () {
      const input = document.createElement("input");
      input.setAttribute("type", "text");
      document.body.appendChild(input);
      input.focus();
      document.execCommand("paste");
      // @ts-ignore
      binding.value = input.value;
      document.body.removeChild(input);
    });
  },
});
