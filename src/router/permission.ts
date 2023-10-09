import { type Router } from "vue-router"
import NProgress from "nprogress" // progress bar
import "nprogress/nprogress.css" // progress bar style
import { useAppStoreHook } from "@/store/app"

NProgress.configure({
  easing: "ease", // 动画方式
  speed: 1000, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化时的最小百分比
})

const whiteList = ["/login", "/register", "/reset", "/error/404", "/error/403", "/error/500"] // no redirect whitelist

const store = useAppStoreHook()

export function setBasicPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const { token } = store

    // start progress bar
    NProgress.start()

    if (token) {
      if (to.path === "/login") {
        // if is logged in, redirect to the home page
        next({ path: "/" })
      } else {
        next()
      }
    } else {
      /* has no token*/
      if (whiteList.indexOf(to.path) !== -1) {
        // in the free login whitelist, go directly
        next()
      } else {
        // other pages that do not have permission to access are redirected to the login page.
        next(`/login?redirect=${to.path}`)
        NProgress.done()
      }
    }

    NProgress.done()
  })

  router.afterEach(() => {
    // finish progress bar
    NProgress.done()
  })
}
