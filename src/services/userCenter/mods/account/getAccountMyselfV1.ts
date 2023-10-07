import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type RequestParamsType = any
export type RequestDataType = any
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
     * @desc 个人信息
获取个人信息
     */
export function getAccountMyselfV1<T = any>(config?: RequestConfigType) {
  return request.request<T>("get", `/v1/account/myself`, config)
}
