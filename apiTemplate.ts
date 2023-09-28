import { CodeGenerator, Interface, Property } from "pont-engine"

export default class MyGenerator extends CodeGenerator {
  getInterfaceContent(inter: Interface) {
    // 用于Vscode的npm脚本调试：日常使用时可以取消
    if (inter.path.startsWith("/store/order")) {
      debugger
    }

    // 获取响应类型: inter.responseType
    const pathParameters = inter.parameters.filter(item => item.in == "path")
    const bodyParameters = inter.parameters.filter(item => item.in == "body")
    const queryParameters = inter.parameters.filter(item => item.in == "query")
    const formParameters = inter.parameters.filter(item => item.in == "formData")
    const isOnlyQueryParameter = queryParameters.length > 0 && bodyParameters.length == 0 && formParameters.length == 0
    const isOnlyBodyParameter = bodyParameters.length > 0 && queryParameters.length == 0 && formParameters.length == 0
    const isOnlyFormParameter = formParameters.length > 0 && bodyParameters.length == 0 && queryParameters.length == 0
    const hasQueryOrBodyParameter = (bodyParameters.length || queryParameters.length || formParameters.length) > 0

    let { funcParamsType, exportParamsType, requestParamsType } = this.getParametersDefine(
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
    let pathParamsType = ""
    if (pathParameters.length > 0) {
      pathParamsType = pathParameters
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

      funcParamsType = `${pathParamsType}, ${funcParamsType}`
    }

    const requestImportStr = this.genRequestImportStr(this.dataSource.name)

    return `
    ${requestImportStr}
    import { PureHttpRequestConfig } from "@/utils/request/type.d"

    ${exportParamsType}

    /**
     * @desc ${inter.description}
     */
    export function ${inter.name}<T = any>(${funcParamsType}, config?: PureHttpRequestConfig) {
      return request.request<T>(
        "${inter.method}",
        \`${requestPath}\`,
        {
          ${requestParamsType}
        },
        config,
      )
    }
    `
  }

  getParametersDefine(
    inter: Interface,
    bodyParameters: Property[],
    queryParameters: Property[],
    formParameters: Property[],
    hasQueryOrBodyParameter: boolean,
    isOnlyBodyParameter: boolean,
    isOnlyQueryParameter: boolean,
    isOnlyFormParameter: boolean,
  ): {
    exportParamsType: string
    funcParamsType: string
    requestParamsType: string
  } {
    let exportParamsType = ""
    let funcParamsType = ""
    let requestParamsType = ""
    const dataParamsType = inter.getBodyParamsCode()
    const queryParamsType = inter.getParamsCode("QueryParams")

    if (hasQueryOrBodyParameter) {
      if (isOnlyBodyParameter) {
        exportParamsType = `
          export type DataParams = ${dataParamsType}
        `
        funcParamsType = "data: DataParams"
        requestParamsType = "data,"
      } else if (isOnlyQueryParameter) {
        exportParamsType = `
          export ${queryParamsType}
        `
        funcParamsType = "params: QueryParams"
        requestParamsType = "params,"
        // 理论上FormData只会单独存在
      } else if (isOnlyFormParameter) {
        funcParamsType = "data: FormData"
        requestParamsType = "data,"
        // body和query参数同时存在
      } else if (queryParameters.length > 0 && bodyParameters.length > 0) {
        exportParamsType = `
          export type DataParams = ${dataParamsType}
          export ${queryParamsType}
          export type RequestParams = {
            params: QueryParams
            data: DataParams
          }
        `
        funcParamsType = "{params, data}: RequestParams"
        requestParamsType = "params, data,"
        // form和query参数同时存在
      } else if (queryParameters.length > 0 && formParameters.length > 0) {
        exportParamsType = `
          export type DataParams = FromData
          export ${queryParamsType}
          export type RequestParams = {
            params: QueryParams
            data: FromData
          }
        `
        funcParamsType = "{params, data}: RequestParams"
        requestParamsType = "params, data,"
      }
    }

    return {
      exportParamsType,
      funcParamsType,
      requestParamsType,
    }
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
