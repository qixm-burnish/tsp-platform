import { RouteRecordRaw } from "vue-router"

export default [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/home/index.vue"),
    meta: {
      title: "主页",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    meta: { title: "出错了" },
    redirect: "/error/404",
  },
] as RouteRecordRaw[]
