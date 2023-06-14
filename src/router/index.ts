import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // {
  //   path: "/",
  //   redirect: "/workbench"
  // },
  {
    path: "/workbench",
    name: "Workbench",
    component: () => import("./../views/admin/Workbench.vue"),
  },
  {
    path: "/banner",
    name: "Banner",
    component: () => import("./../views/admin/Banner.vue"),
  },
  {
    path: "/business",
    name: "Business",
    component: () => import("./../views/admin/Business.vue"),
  },
  {
    path: "/business/:id",
    name: "BusinessDetail",
    component: () => import("./../views/admin/BusinessDetail.vue"),
  },
  {
    path: "/globalLayout",
    name: "GlobalLayout",
    component: () => import("./../views/admin/GlobalLayout.vue"),
  },
  {
    path: "/globalLayout/:id",
    name: "GlobalLayoutDetail",
    component: () => import("./../views/admin/GlobalLayoutDetail.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import("./../views/admin/News.vue"),
  },
  {
    path: "/news/:id",
    name: "NewsDetail",
    component: () => import("./../views/admin/NewsDetail.vue"),
  },
  {
    path: "/customer",
    name: "Customer",
    component: () => import("./../views/admin/Customer.vue"),
  },
  {
    path: "/resourceCenter",
    name: "ResourceCenter",
    component: () => import("./../views/admin/ResourceCenter.vue"),
  },
  {
    path: "/404",
    name: "Page404",
    component: () => import("./../views/exception/Page404.vue"),
  },
  {
    path: "/500",
    name: "Page500",
    component: () => import("./../views/exception/Page500.vue"),
  },
  {
    path: "/501",
    name: "Page501",
    component: () => import("./../views/exception/Page501.vue"),
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
