// v-enter  和  v-leave ：元素进入和离开时执行动画。可以使用  v-enter  和  v-leave  指令来实现元素进入和离开时执行动画。
// <div v-show="isShow" v-enter-active-class="animated bounceIn" v-leave-active-class="animated bounceOut">显示这个元素</div>
import Vue from "vue";

Vue.directive("enter", {
  bind: function (el) {
    el.style.opacity = "0";
  },
  inserted: function (el) {
    el.style.transition = "opacity 1s";
    el.style.opacity = "1";
  },
  update: function (el) {
    el.style.opacity = "1";
  },
  componentUpdated: function (el) {
    el.style.opacity = "1";
  },
  unbind: function (el) {
    el.style.opacity = "0";
  },
});
Vue.directive("leave", {
  bind: function (el) {
    el.style.opacity = "1";
  },
  inserted: function (el) {
    el.style.transition = "opacity 1s";
    el.style.opacity = "0";
  },
  update: function (el) {
    el.style.opacity = "0";
  },
  componentUpdated: function (el) {
    el.style.opacity = "0";
  },
  unbind: function (el) {
    el.style.opacity = "1";
  },
});
