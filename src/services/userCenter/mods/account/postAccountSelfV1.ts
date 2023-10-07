import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type RequestParamsType = any
export type RequestDataType = defs.userCenter.AccountCreate
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
 * @desc 创建用户
 */
export function postAccountSelfV1<T = any>(config?: RequestConfigType) {
  return request.request<T>("post", `/v1/account/self`, config)
}
