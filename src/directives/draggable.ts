import Vue from "vue";
// 拖拽指令
Vue.directive("debounce", {
  bind: function (el) {
    el.style.position = "absolute";
    el.style.cursor = "move";
    el.onmousemove = function (e) {
      const disX = e.pageX - el.offsetLeft
      const disY = e.pageY - el.offsetTop
      document.onmousemove = function (e) {
        el.style.left = e.pageX - disX + "px";
        el.style.top = e.pageY - disY + "px"
      }
    }
    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    }
  },
});
