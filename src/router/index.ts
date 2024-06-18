import Vue from "vue";
import AdminLayout from "@/layouts/CommonLayout.vue";
import VueRouter, {RawLocation} from "vue-router";
import {ErrorHandler} from "vue-router/types/router";
import {extendRoutes} from "@/router/modules/extends";
import {commonRoutes} from "@/router/modules/common";

const originPush: any = VueRouter.prototype.push;
const originReplace: any = VueRouter.prototype.replace;
Vue.use(VueRouter);

// 合并路由
const allRoutes = extendRoutes.concat(commonRoutes)
const devRoutes = [
  {
    path: "",
    name: "Admin",
    component: AdminLayout,
    children: allRoutes,
  },
];

export const routes = !window.__POWERED_BY_WUJIE__ ? devRoutes : allRoutes;

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
// @ts-ignore
VueRouter.prototype.push = function (location: RawLocation, resolve?: () => void, reject?: ErrorHandler | undefined) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else
    originPush.call(
      this,
      location,
      () => {
      },
      () => {
      }
    );
};
// @ts-ignore
VueRouter.prototype.push = function (location: RawLocation, resolve?: () => void, reject?: ErrorHandler | undefined) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else
    originReplace.call(
      this,
      location,
      () => {
      },
      () => {
      }
    );
};
