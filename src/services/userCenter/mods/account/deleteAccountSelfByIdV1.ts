import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export class RequestParamsType {
  /** id */
  id: string
  /** 需要删除的系统ID */
  system_id: string
}

export type RequestDataType = any
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
 * @desc 单个删除用户
 */
export function deleteAccountSelfByIdV1<T = any>(id, config?: RequestConfigType) {
  return request.request<T>("delete", `/v1/account/self/${id}`, config)
}
