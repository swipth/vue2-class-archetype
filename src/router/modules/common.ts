import {RouteConfig} from "vue-router";

export const commonRoutes: Array<RouteConfig> = [
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
