import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export class RequestParamsType {
  /** system_id */
  system_id: string
}

export type RequestDataType = any
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
     * @desc 获取系统的全层级菜单
获取系统的全层级菜单
     */
export function getResourceSystemV1<T = any>(config?: RequestConfigType) {
  return request.request<T>("get", `/v1/resource/system`, config)
}
