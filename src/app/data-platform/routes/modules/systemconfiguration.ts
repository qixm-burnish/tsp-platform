import Round from "@/assets/svg/round.svg?component"
const Layout = () => import("@app/data-platform/layout/index.vue")

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
      component: () => import("@app/data-platform/pages/system-configuration/role-permission/index.vue"),
      meta: {
        title: "角色权限",
      },
    },
    {
      path: "/operation-log",
      name: "Operationlog",
      component: Layout,
      meta: {
        title: "日志管理",
      },
    },
  ],
} as RouteConfigsTable
