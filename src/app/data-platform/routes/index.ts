import { getConfig } from "@/config"
import NProgress from "@/utils/progress"
import { getToken } from "@/utils/auth"
import { useMultiTagsStoreHook } from "@app/data-platform/store/multiTags"
import { usePermissionStoreHook } from "@app/data-platform/store/permission"
import { RouteComponent, Router, RouteRecordRaw } from "vue-router"
import {
  ascending,
  getTopMenu,
  initRouter,
  isOneOfArray,
  findRouteByPath,
  handleAliveRoute,
  formatTwoStageRoutes,
  formatFlatteningRoutes,
} from "./utils"
import { buildHierarchyTree } from "@/utils/menu"
import { isUrl, openLink, isAllEmpty } from "@pureadmin/utils"
import { App } from "vue"
import router from "@/router"

/** 自动导入全部静态路由，无需再手动引入！匹配 src/router/modules 目录（任何嵌套级别）中具有 .ts 扩展名的所有文件，除了 remaining.ts 文件
 * 如何匹配所有文件请看：https://github.com/mrmlnc/fast-glob#basic-syntax
 * 如何排除文件请看：https://cn.vitejs.dev/guide/features.html#negative-patterns
 */
const modules: Record<string, any> = import.meta.glob(["./modules/**/*.ts"], {
  eager: true,
})

/** 原始静态路由（未做任何处理） */
const routes = []

Object.keys(modules).forEach(key => {
  routes.push(modules[key].default)
})

/** 导出处理后的静态路由（三级及以上的路由全部拍成二级） */
export const constantRoutes: Array<RouteRecordRaw> = formatTwoStageRoutes(
  formatFlatteningRoutes(buildHierarchyTree(ascending(routes.flat(Infinity)))),
)

/** 用于渲染菜单，保持原始层级 */
export const constantMenus: Array<RouteComponent> = ascending(routes.flat(Infinity))
console.log(constantMenus)

export function setupRoutes(app: App) {
  constantRoutes.forEach(item => {
    router.addRoute(item)
  })

  setPermissionGuard(router)

  app.use(router)
}

/** 重置路由 */
export function resetRouter() {
  router.getRoutes().forEach(route => {
    const { name, meta } = route
    if (name && router.hasRoute(name) && meta?.backstage) {
      router.removeRoute(name)
      router.options.routes = formatTwoStageRoutes(formatFlatteningRoutes(buildHierarchyTree(ascending(routes.flat(Infinity)))))
    }
  })
  usePermissionStoreHook().clearAllCachePage()
}

/** 路由白名单 */
const whiteList = ["/login", "/register", "/forget"]
export function setPermissionGuard(router: Router) {
  router.beforeEach(async (to: ToRouteType, _from, next) => {
    if (to.meta?.keepAlive) {
      handleAliveRoute(to, "add")
      // 页面整体刷新和点击标签页刷新
      if (_from.name === undefined || _from.name === "Redirect") {
        handleAliveRoute(to)
      }
    }
    const token = getToken()
    NProgress.start()
    const externalLink = isUrl(to?.name as string)
    if (!externalLink) {
      to.matched.some(item => {
        if (!item.meta.title) return ""
        const Title = getConfig().Title
        if (Title) document.title = `${item.meta.title} | ${Title}`
        else document.title = item.meta.title as string
      })
    }
    /** 如果已经登录并存在登录信息后不能跳转到路由白名单，而是继续保持在当前页面 */
    function toCorrectRoute() {
      whiteList.includes(to.fullPath) ? next(_from.fullPath) : next()
    }
    if (token) {
      // 无权限跳转403页面
      if (to.meta?.roles && !isOneOfArray(to.meta?.roles, [])) {
        next({ path: "/error/403" })
      }

      if (_from?.name) {
        // name为超链接
        if (externalLink) {
          openLink(to?.name as string)
          NProgress.done()
        } else {
          toCorrectRoute()
        }
      } else {
        // 刷新
        if (usePermissionStoreHook().wholeMenus.length === 0 && to.path !== "/login") {
          console.log(router.getRoutes())

          initRouter().then((router: Router) => {
            debugger
            if (!useMultiTagsStoreHook().getMultiTagsCache) {
              const { path } = to
              const route = findRouteByPath(path, constantRoutes[0].children)
              getTopMenu(true)
              // query、params模式路由传参数的标签页不在此处处理
              if (route && route.meta?.title) {
                if (isAllEmpty(route.parentId) && route.meta?.backstage) {
                  // 此处为动态顶级路由（目录）
                  const { path, name, meta } = route.children ? route.children[0] : route
                  useMultiTagsStoreHook().handleTags("push", {
                    path,
                    name,
                    meta,
                  })
                } else {
                  const { path, name, meta } = route
                  useMultiTagsStoreHook().handleTags("push", {
                    path,
                    name,
                    meta,
                  })
                }
              }
            }
            // 确保动态路由完全加入路由列表并且不影响静态路由（注意：动态路由刷新时router.beforeEach可能会触发两次，第一次触发动态路由还未完全添加，第二次动态路由才完全添加到路由列表，如果需要在router.beforeEach做一些判断可以在to.name存在的条件下去判断，这样就只会触发一次）
            if (isAllEmpty(to.name)) router.push(to.fullPath)
          })
        }

        toCorrectRoute()
      }
    } else {
      if (to.path !== "/login") {
        if (whiteList.indexOf(to.path) !== -1) {
          next()
        } else {
          next({ path: "/login" })
        }
      } else {
        next()
      }
    }
  })

  router.afterEach(() => {
    NProgress.done()
  })
}
