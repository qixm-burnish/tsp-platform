import { readdirSync, existsSync } from "fs"
import { resolve } from "path"

const appPath = pathResolve("src/app")
const buildEntry: Record<string, string> = {
  index: pathResolve("src/app/index.html"),
}

readdirSync(appPath, {
  withFileTypes: true,
}).forEach(item => {
  if (item.isDirectory() && item.name!) {
    const tempPath = pathResolve(`src/app/${item.name}/index.html`)

    if (existsSync(tempPath)) {
      buildEntry[item.name] = tempPath
    }
  }
})

/** 路径查找 */
function pathResolve(dir: string): string {
  return resolve(__dirname, "../", dir)
}

export default buildEntry
