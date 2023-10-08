const DEFAULT_CONFIG = {
  id: "id",
  children: "children",
  pid: "pid",
}
/**
 * @description tree对配置选项与默认选项合并
 * @param config
 * @returns
 */
const getConfig = config => Object.assign({}, DEFAULT_CONFIG, config)
/**
 * @description 由 list 转换成 tree
 * @param list
 * @param config
 * @returns
 */
export function listToTree(list, config = {}) {
  const conf = getConfig(config)
  const nodeMap = new Map()
  const result = []
  const { id, children, pid } = conf
  for (const node of list) {
    node[children] = node[children] || []
    nodeMap.set(node[id], node)
  }
  for (const node of list) {
    const parent = nodeMap.get(node[pid])
    ;(parent ? parent.children : result).push(node)
  }
  return result
}
/**
 * @description 由 tree 转换成 list
 * @param tree
 * @param config
 * @returns
 */
export function treeToList(tree, config = {}) {
  config = getConfig(config)
  const { children } = config
  const result = [...tree]
  for (let i = 0; i < result.length; i++) {
    if (!result[i][children]) continue
    result.splice(i + 1, 0, ...result[i][children])
  }
  return result
}
/**
 * @description 查找第一条满足条件的tree成员
 * @param tree
 * @param func
 * @param config
 * @returns
 */
export function findNode(tree, func, config = {}) {
  config = getConfig(config)
  const { children } = config
  const list = [...tree]
  for (const node of list) {
    if (func(node)) return node
    node[children] && list.push(...node[children])
  }
  return null
}
/**
 * @description 查找所有满足条件的tree成员
 * @param tree
 * @param func
 * @param config
 * @returns
 */
export function findNodeAll(tree, func, config = {}) {
  config = getConfig(config)
  const { children } = config
  const list = [...tree]
  const result = []
  for (const node of list) {
    func(node) && result.push(node)
    node[children] && list.push(...node[children])
  }
  return result
}
/**
 *
 * @param tree
 * @param func
 * @param config
 * @returns
 */
export function findPath(tree, func, config = {}) {
  config = getConfig(config)
  const path = []
  const list = [...tree]
  const visitedSet = new Set()
  const { children } = config
  while (list.length) {
    const node = list[0]
    if (visitedSet.has(node)) {
      path.pop()
      list.shift()
    } else {
      visitedSet.add(node)
      node[children] && list.unshift(...node[children])
      path.push(node)
      if (func(node)) {
        return path
      }
    }
  }
  return null
}
/**
 *
 * @param tree
 * @param func
 * @param config
 * @returns
 */
export function findPathAll(tree, func, config = {}) {
  config = getConfig(config)
  const path = []
  const list = [...tree]
  const result = []
  const visitedSet = new Set(),
    { children } = config
  while (list.length) {
    const node = list[0]
    if (visitedSet.has(node)) {
      path.pop()
      list.shift()
    } else {
      visitedSet.add(node)
      node[children] && list.unshift(...node[children])
      path.push(node)
      func(node) && result.push([...path])
    }
  }
  return result
}
/**
 * @description 按条件搜索tree
 * @param tree
 * @param func
 * @param config
 * @returns
 */
export function filter(tree, func, config = {}) {
  config = getConfig(config)
  const children = config.children
  function listFilter(list) {
    return list
      .map(node => Object.assign({}, node))
      .filter(node => {
        node[children] = node[children] && listFilter(node[children])
        return func(node) || (node[children] && node[children].length)
      })
  }
  return listFilter(tree)
}
/**
 * @description 遍历tree成员
 * @param tree
 * @param func
 * @param config
 */
export function forEach(tree, func, config = {}) {
  config = getConfig(config)
  const list = [...tree]
  const { children } = config
  for (let i = 0; i < list.length; i++) {
    func(list[i])
    children && list[i][children] && list.splice(i + 1, 0, ...list[i][children])
  }
}
/**
 * @description: Extract tree specified structure
 * @param treeData
 * @param opt
 * @returns
 */
export function treeMap(treeData, opt) {
  return treeData.map(item => treeMapEach(item, opt))
}
/**
 * @description: Extract tree specified structure
 * @param data
 * @param param1
 * @returns
 */
export function treeMapEach(data, { children = "children", conversion }) {
  const haveChildren = Array.isArray(data[children]) && data[children].length > 0
  const conversionData = conversion(data) || {}
  if (haveChildren) {
    return Object.assign(Object.assign({}, conversionData), {
      [children]: data[children].map(i =>
        treeMapEach(i, {
          children,
          conversion,
        }),
      ),
    })
  } else {
    return Object.assign({}, conversionData)
  }
}
