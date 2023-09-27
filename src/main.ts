// @ts-nocheck
import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "@/locales/i18n";
import "./plugins";
import "./router/guard"
import "ant-design-vue/dist/antd.css";
import "./styles/index.less";

Vue.config.productionTip = false;

import "./registerServiceWorker";

if (window.__POWERED_BY_WUJIE__) {
  let instance;
  window.__WUJIE_MOUNT = () => {
    instance = new Vue({
      router,
      store,
      i18n, render: (h) => h(App)
    }).$mount("#app");
  };
  window.__WUJIE_UNMOUNT = () => {
    instance.$destroy();
  };
} else {
  new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
  }).$mount("#app");
}
