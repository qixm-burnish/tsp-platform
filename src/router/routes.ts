import Login from "@app/common/pages/login/index.vue"
import Register from "@app/common/pages/register/index.vue"
import Reset from "@app/common/pages/reset/index.vue"
import Error403 from "@app/common/pages/error/403.vue"
import Error404 from "@app/common/pages/error/404.vue"
import Error500 from "@app/common/pages/error/500.vue"

export default [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "登录",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "注册",
      showLink: false,
      rank: 101,
    },
  },
  {
    path: "/reset",
    name: "Reset",
    component: Reset,
    meta: {
      title: "忘记密码",
      showLink: false,
      rank: 101,
    },
  },
  {
    path: "/error/403",
    name: "403",
    component: Error403,
    meta: {
      title: "403",
      showLink: false,
    },
  },
  {
    path: "/error/404",
    name: "404",
    component: Error404,
    meta: {
      title: "404",
      showLink: false,
    },
  },
  {
    path: "/error/500",
    name: "500",
    component: Error500,
    meta: {
      title: "500",
      showLink: false,
    },
  },
]
