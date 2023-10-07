import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type RequestParamsType = any
export type RequestDataType = any
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
 * @desc 用户详情
 */
export function getAccountSelfByIdV1<T = any>(id: string, config?: RequestConfigType) {
  return request.request<T>("get", `/v1/account/self/${id}`, config)
}
