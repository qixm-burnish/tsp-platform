const Layout = () => import("@/layout/index.vue")

export default [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录",
      showLink: false,
      rank: 101,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/register/index.vue"),
    meta: {
      title: "注册",
      showLink: false,
      rank: 101,
    },
  },
  {
    path: "/forget",
    name: "Register",
    component: () => import("@/views/forget/index.vue"),
    meta: {
      title: "忘记密码",
      showLink: false,
      rank: 101,
    },
  },
  {
    path: "/redirect",
    component: Layout,
    meta: {
      title: "加载中...",
      showLink: false,
      rank: 102,
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        name: "Redirect",
        component: () => import("@/layout/redirect.vue"),
      },
    ],
  },
] as Array<RouteConfigsTable>
