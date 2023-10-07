import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type RequestParamsType = any
export type RequestDataType = any
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
     * @desc 已授权系统
获取用户已授权系统
     */
export function getSystemMyselfV1<T = any>(config?: RequestConfigType) {
  return request.request<T>("get", `/v1/system/myself`, config)
}
