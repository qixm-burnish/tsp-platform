const { VITE_HIDE_HOME } = import.meta.env

export default {
  path: "/",
  name: "Home",
  redirect: "/welcome",
  meta: {
    icon: "homeFilled",
    title: "首页",
    rank: 0,
  },
  children: [
    {
      path: "/welcome",
      name: "Welcome",
      component: () => import("@/views/welcome/index.vue"),
      meta: {
        title: "首页",
        showLink: VITE_HIDE_HOME === "true" ? false : true,
      },
    },
  ],
} as RouteConfigsTable
