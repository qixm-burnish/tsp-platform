import { createApp } from "vue"
import ElementPlus from "element-plus"

import "element-plus/dist/index.css"

// @ts-ignore
import store from "@/store"
import { setupRoutes } from "./routes"
import App from "./App.vue"

import "./style/tailwind.css"
import "./style.css"

const app = createApp(App)
app.use(store)
setupRoutes(app)

app.use(ElementPlus)

app.mount("#app")
