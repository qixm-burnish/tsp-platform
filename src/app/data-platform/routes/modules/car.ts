import Round from "@app/data-platform/assets/svg/round.svg?component"
const Layout = () => import("@app/data-platform/layout/index.vue")

export default {
  path: "/",
  name: "car",
  component: Layout,
  redirect: "/new-energy-vehicles",
  meta: {
    icon: Round,
    title: "车辆数据",
    rank: 0,
  },
  children: [
    {
      path: "/new-energy-vehicles",
      name: "Newenergyvehicles",
      component: () => import("@app/data-platform/pages/vehicle-data/new-energy-vehicles/index.vue"),
      meta: {
        title: "新能源车",
      },
    },
    {
      path: "/fuel-vehicle",
      name: "Fuelvehicle",
      component: () => import("@app/data-platform/pages/vehicle-data/fuel-vehicle/index.vue"),
      meta: {
        title: "燃油车",
      },
    },
  ],
} as RouteConfigsTable
