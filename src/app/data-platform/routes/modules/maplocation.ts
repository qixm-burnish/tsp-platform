import Round from "@/assets/svg/round.svg?component"
const Layout = () => import("@app/data-platform/layout/index.vue")

export default {
  path: "/maplocation",
  name: "MapLocation",
  component: Layout,
  redirect: "/maplocation",
  meta: {
    icon: Round,
    title: "地图定位",
    rank: 1,
  },
  children: [
    {
      path: "/maplocation",
      name: "MapLocation",
      component: () => import("@app/data-platform/pages/map-location/index.vue"),
      meta: {
        title: "地图定位",
      },
    },
  ],
} as RouteConfigsTable
