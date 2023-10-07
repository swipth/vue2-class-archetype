import Vue from "vue";

// 权限指令
Vue.directive("permission", {
  inserted: function (el, binding) {
    const roleList: string | any[] = []
    if (roleList.includes(binding.value)) {
      if (!el.parentNode) {
        el.style.display = "none"
      } else {
        el.parentNode.removeChild(el)
      }
    }
  },
});
