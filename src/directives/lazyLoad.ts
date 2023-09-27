import Vue from "vue";
Vue.directive("lazyload", {
  inserted: function (el, binding) {
    el.setAttribute("src", require("../assets/images/info/loadImg2.gif"));
    el.setAttribute("width", "180");
    el.setAttribute("height", "180");
    const img = new Image();
    img.src = binding.value;
    img.onload = function () {
      el.setAttribute("width", "920");
      el.setAttribute("height", "440");
      el.setAttribute("src", img.src);
    };
  },
});
Vue.directive("itemImgLazyload", {
  inserted: function (el, binding) {
    el.setAttribute("src", require("../assets/images/info/loadImg2.gif"));
    const img = new Image();
    img.src = binding.value;
    img.onload = function () {
      el.setAttribute("src", img.src);
    };
    img.onerror = function () {
      el.setAttribute("src", require("../assets/images/exception/no_image.png"));
    };
  },
});
