import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type RequestParamsType = any
export type RequestDataType = any
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
 * @desc 企业详情
 */
export function getCompanySelfByIdV1<T = any>(id, config?: RequestConfigType) {
  return request.request<T>("get", `/v1/company/self/${id}`, config)
}
