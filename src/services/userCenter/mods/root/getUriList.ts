import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type RequestParamsType = any
export type RequestDataType = any
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
 * @desc 全部uri
 */
export function getUriList<T = any>(config?: RequestConfigType) {
  return request.request<T>("get", `/uri-list`, config)
}
