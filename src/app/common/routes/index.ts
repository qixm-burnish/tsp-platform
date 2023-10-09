import router from "@/router"
import { setBasicPermissionGuard } from "@/router/permission"

import { App } from "vue"

import routes from "./routes"

export function setupRoutes(app: App) {
  routes.forEach(item => {
    router.addRoute(item)
  })

  setBasicPermissionGuard(router)

  app.use(router)
}
