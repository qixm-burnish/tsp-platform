import { setupStore } from "@/store"
import ElementPlus from "element-plus"
import { getServerConfig } from "./config"
import { createApp } from "vue"
import { MotionPlugin } from "@vueuse/motion"
import VueAMap, { initAMapApiLoader } from "@vuemap/vue-amap"
import "@vuemap/vue-amap/dist/style.css"
import { injectResponsiveStorage } from "@/utils/responsive"
import router from "@/router"
import App from "@/components/App"
// 全局注册`@iconify/vue`图标库
import { IconifyIconOffline, IconifyIconOnline, FontIcon } from "./components/ReIcon"
import { setupRoutes } from "./routes"

// 引入重置样式
import "./style/reset.scss"
// 导入公共样式
import "./style/index.scss"
// 一定要在main.ts中导入tailwind.css，防止vite每次hmr都会请求src/style/index.scss整体css文件导致热更新慢的问题
import "./style/tailwind.css"
import "element-plus/dist/index.css"

const app = createApp(App)

app.component("IconifyIconOffline", IconifyIconOffline)
app.component("IconifyIconOnline", IconifyIconOnline)
app.component("FontIcon", FontIcon)

initAMapApiLoader({
  key: import.meta.env.VITE_MAP_KEY,
  securityJsCode: import.meta.env.VITE_MAP_SECRET_KEY, // 新版key需要配合安全密钥使用
})

getServerConfig(app).then(async config => {
  setupRoutes(app)

  await router.isReady()
  injectResponsiveStorage(app, config)
  setupStore(app)
  app.use(MotionPlugin).use(ElementPlus)
  app.use(VueAMap)

  app.mount("#app")
})
