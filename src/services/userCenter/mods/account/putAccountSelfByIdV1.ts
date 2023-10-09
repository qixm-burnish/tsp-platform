import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type RequestParamsType = any
export type RequestDataType = defs.userCenter.AccountUpdate
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
 * @desc 更新用户
 */
export function putAccountSelfByIdV1<T = any>(id, config?: RequestConfigType) {
  return request.request<T>("put", `/v1/account/self/${id}`, config)
}
