import { dataCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export class RequestParamsType {
  /** 返回格式 */
  format?: any
  /** enum_name */
  enum_name?: string
  /** is_reversed */
  is_reversed?: boolean
}

export type RequestDataType = any
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
     * @desc 枚举表
枚举-列表
     */
export function getOtherCommonEnumV1<T = any>(config?: RequestConfigType) {
  return request.request<T>("get", `/v1/other/common/enum`, config)
}
