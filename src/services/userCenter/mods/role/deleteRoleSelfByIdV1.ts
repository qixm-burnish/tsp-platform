import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type RequestParamsType = any
export type RequestDataType = any
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
 * @desc 单个删除子系统角色
 */
export function deleteRoleSelfByIdV1<T = any>(id, config?: RequestConfigType) {
  return request.request<T>("delete", `/v1/role/self/${id}`, config)
}
