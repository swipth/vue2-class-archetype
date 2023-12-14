import Vue from "vue";
import AdminLayout from "@/layouts/CommonLayout.vue";
import VueRouter, {RawLocation, RouteConfig} from "vue-router";
import {ErrorHandler} from "vue-router/types/router";

const originPush: any = VueRouter.prototype.push;
const originReplace: any = VueRouter.prototype.replace;
Vue.use(VueRouter);
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
const commonRoutes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/workbench"
  },
  {
    path: "/workbench",
    name: "Workbench",
    component: () => import("../views/admin/portal/Workbench.vue"),
  },
  {
    path: "/exception",
    name: "Exception",
    component: () => import("./../views/exception/Exception.vue"),
    meta: {},
    children: [
      {
        path: "404",
        name: "Page404",
        component: () => import("./../views/exception/Page404.vue"),
      },
      {
        path: "500",
        name: "Page500",
        component: () => import("./../views/exception/Page500.vue"),
      },
      {
        path: "501",
        name: "Page501",
        component: () => import("./../views/exception/Page501.vue"),
      },
    ]
  },
  {
    path: "*",
    redirect: "/404",
  },
];
const devRoutes = [
  {
    path: "",
    name: "Admin",
    component: AdminLayout,
    children: commonRoutes,
  },
];

export const routes = !window.__POWERED_BY_WUJIE__ ? devRoutes : commonRoutes;

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
