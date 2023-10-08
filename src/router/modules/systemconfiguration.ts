import Round from "@/assets/svg/round.svg?component"
const Layout = () => import("@/layout/index.vue")

export default {
  path: "/system-configuration",
  name: "system-configuration",
  component: Layout,
  redirect: "/role-permission",
  meta: {
    icon: Round,
    title: "系统配置",
    rank: 0,
  },
  children: [
    {
      path: "/role-permission",
      name: "Rolepermission",
      component: () => import("@/views/system-configuration/role-permission/index.vue"),
      meta: {
        title: "角色权限",
      },
    },
    {
      path: "/change-password",
      name: "Changepassword",
      component: Layout,
      meta: {
        title: "修改密码",
      },
    },
  ],
} as RouteConfigsTable
