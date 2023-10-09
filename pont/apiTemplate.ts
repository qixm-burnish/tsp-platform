import { CodeGenerator, Interface, Property } from "pont-engine"

export default class MyGenerator extends CodeGenerator {
  getInterfaceContent(inter: Interface) {
    // 用于Vscode的npm脚本调试：日常使用时可以取消
    if (inter.path.startsWith("/store/order")) {
      debugger
    }

    // 获取响应类型: inter.responseType
    const parametersInPath: string[] = inter.path.match(/\{\w+\}/g)?.map(item => item.match(/\w+/)![0]) ?? []

    const pathParameters = inter.parameters
      .filter(item => item.in == "path")
      .filter(item => !parametersInPath.includes(item.name))
    const bodyParameters = inter.parameters.filter(item => item.in == "body")
    const queryParameters = inter.parameters.filter(item => item.in == "query")
    const formParameters = inter.parameters.filter(item => item.in == "formData")
    const isOnlyQueryParameter = queryParameters.length > 0 && bodyParameters.length == 0 && formParameters.length == 0
    const isOnlyBodyParameter = bodyParameters.length > 0 && queryParameters.length == 0 && formParameters.length == 0
    const isOnlyFormParameter = formParameters.length > 0 && bodyParameters.length == 0 && queryParameters.length == 0
    const hasQueryOrBodyParameter = (bodyParameters.length || queryParameters.length || formParameters.length) > 0

    const requestExportType = this.getRequestExportTypeDefine(
      inter,
      bodyParameters,
      queryParameters,
      formParameters,
      hasQueryOrBodyParameter,
      isOnlyBodyParameter,
      isOnlyQueryParameter,
      isOnlyFormParameter,
    )

    let requestPath = inter.path
    let funcParamsType = "config?: RequestConfigType"
    let pathParamsType = parametersInPath.join(",")
    if (parametersInPath.length) {
      parametersInPath.forEach(item => {
        requestPath = requestPath.replace(`{${item}}`, "${" + item + "}")
      })
    }
    if (pathParameters.length > 0) {
      pathParamsType =
        pathParamsType +
        "," +
        pathParameters
          .map(item => {
            requestPath = requestPath.replace(`{${item.name}}`, "${" + item.name + "}")
            let fieldType = `${item.name}: ${item.dataType.typeName}`

            // 用于拼接到路径上，对于数字类型添加一个字符串兼容
            if (item.dataType.typeName == "number") {
              fieldType += " | string"
            }

            return fieldType
          })
          .join(",")
    }

    if (pathParamsType) {
      funcParamsType = `${pathParamsType}, ${funcParamsType}`
    }

    const requestImportStr = this.genRequestImportStr(this.dataSource.name)

    return `
    ${requestImportStr}
    import { PureHttpRequestConfig } from "@/utils/request/type.d"

    ${requestExportType}

    /**
     * @desc ${inter.description}
     */
    export function ${inter.name}<T = any>(${funcParamsType}) {
      return request.request<T>(
        "${inter.method}",
        \`${requestPath}\`,
        config,
      )
    }
    `
  }

  getRequestExportTypeDefine(
    inter: Interface,
    bodyParameters: Property[],
    queryParameters: Property[],
    formParameters: Property[],
    hasQueryOrBodyParameter: boolean,
    isOnlyBodyParameter: boolean,
    isOnlyQueryParameter: boolean,
    isOnlyFormParameter: boolean,
  ): string {
    const dataParamsType = inter.getBodyParamsCode()
    const queryParamsType = inter.getParamsCode("RequestParamsType")
    let _exportParamsType = "export type RequestParamsType = any"
    let _exportDataType = "export type RequestDataType = any"

    if (hasQueryOrBodyParameter) {
      if (isOnlyBodyParameter) {
        _exportDataType = `export type RequestDataType = ${dataParamsType}`
      } else if (isOnlyQueryParameter) {
        _exportParamsType = `export ${queryParamsType}`
        // 理论上FormData只会单独存在
      } else if (isOnlyFormParameter) {
        _exportDataType = `export type RequestDataType = FormData`
        // body和query参数同时存在
      } else if (queryParameters.length > 0 && bodyParameters.length > 0) {
        _exportParamsType = `export ${queryParamsType}`
        _exportDataType = `export type RequestDataType = ${dataParamsType}`
      } else if (queryParameters.length > 0 && formParameters.length > 0) {
        _exportDataType = `export type RequestDataType = FormData`
        _exportParamsType = `export ${queryParamsType}`
      }
    }

    return `
      ${_exportParamsType}
      ${_exportDataType}
      export type RequestConfigType = Omit<PureHttpRequestConfig, 'params' | 'data'> & {
        data?: RequestDataType
        params?: RequestParamsType
      }
    `
  }
  /**
   * 多个api源时，根据不同源名生产不同的request导入语句（主要针对可能不同源的导入语句不一样）
   * @param name 多源配置时的源名称
   */
  genRequestImportStr(name: string) {
    let requestImportStr = 'import request from "@/utils/request"'

    if (name == "userCenter") {
      requestImportStr = 'import { userCenterRequest as request } from "@/utils/request"'
    }

    return requestImportStr
  }
}
