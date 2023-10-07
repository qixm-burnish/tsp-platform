import { Interface, StandardDataSource } from "pont-engine"
import { toUpperFirstLetter } from "pont-engine/lib/compatible/utils"

export default function (dataSource: StandardDataSource): StandardDataSource {
  if (dataSource.name == "userCenter") {
    formatUserCenterDataSource(dataSource)
  }

  return dataSource
}

/**
 * 根据path和method生成文件名（处理路径中的版本号——添加到参数末尾）：虽然可以通过"usingOperationId": false来根据path生成，但这会导致template中获取参数出错
 * @param dataSource
 * @returns
 */
function formatUserCenterDataSource(dataSource: StandardDataSource) {
  function formatInterfaceName(item: Interface) {
    // @ts-ignore
    let currentPath = item.path.match(/([^\.]+)/)[0] ?? ""

    if (currentPath == "/") currentPath = "index"

    // 处理版本号前缀
    const versionPrefix = currentPath.match(/^\/(v\d*)\//)
    if (versionPrefix) {
      currentPath = currentPath.slice(versionPrefix[0].length - 1)
    }

    item.name =
      item.method +
      currentPath
        .split("/")
        .map(str => {
          if (str.includes("-")) {
            str = str.replace(/(\-\w)+/g, (_match, p1) => {
              if (p1) {
                return p1.slice(1).toUpperCase()
              }
            })
          }

          if (str.match(/^{.+}$/gim)) {
            return "By" + toUpperFirstLetter(str.slice(1, str.length - 1))
          }
          return toUpperFirstLetter(str)
        })
        .join("") +
      (versionPrefix ? toUpperFirstLetter(versionPrefix[1]) : "")
  }

  dataSource.mods.forEach(mode => {
    mode.interfaces.forEach(formatInterfaceName)
  })

  return dataSource
}
