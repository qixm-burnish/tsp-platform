import dayjs from "dayjs"
import { resolve } from "path"
import pkg from "./package.json"
import { wrapperEnv as wrapperEnv } from "./build"
import { getPluginsList } from "./build/plugins"
import { include, exclude } from "./build/optimize"
import { UserConfigExport, ConfigEnv, loadEnv } from "vite"
import { defDTFormat } from "./src/config/dt"

const { name, version } = pkg
const __APP_INFO__ = {
  pkg: { name, version },
  lastBuildTime: dayjs(new Date()).format(defDTFormat.dateTime),
}

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  const root = resolve(__dirname, "src/app") // 修改root参数为多页面的根目录

  const { VITE_CDN, VITE_PORT, VITE_COMPRESSION } = wrapperEnv(loadEnv(mode, root))
  return {
    root,
    base: "./",
    publicDir: pathResolve("public"),
    resolve: {
      alias,
    },
    plugins: getPluginsList(command, VITE_CDN, VITE_COMPRESSION),

    // 服务端渲染
    server: {
      // 是否开启 https
      https: false,
      // 端口号
      port: VITE_PORT,
      host: "0.0.0.0",
      // 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
      proxy: {},
    },
    // https://cn.vitejs.dev/config/dep-optimization-options.html#dep-optimization-options
    optimizeDeps: {
      include,
      exclude,
    },
    build: {
      outDir: pathResolve("dist"),
      minify: false,
      sourcemap: mode != "prod",
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 4000,
      rollupOptions: {
        input: {
          index: pathResolve("src/app/index.html"),
          demo: pathResolve("src/app/demo/index.html"),
        },
        // 静态资源分类打包
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
        },
      },
    },
    define: {
      __INTLIFY_PROD_DEVTOOLS__: false,
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
  }
}

/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, "./", dir)
}

/** 设置别名 */
const alias: Record<string, string> = {
  "@": pathResolve("src"),
  "@build": pathResolve("build"),
  "@app": pathResolve("src/app"),
}
