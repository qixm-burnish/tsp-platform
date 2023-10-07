import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type RequestParamsType = any
export type RequestDataType = Array<string>
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
     * @desc 注销
注销
     */
export function postAuthArchiveV1<T = any>(config?: RequestConfigType) {
  return request.request<T>("post", `/v1/auth/archive`, config)
}
