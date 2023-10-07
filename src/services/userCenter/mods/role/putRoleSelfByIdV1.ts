import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type RequestParamsType = any
export type RequestDataType = defs.userCenter.SystemCompanyRoleUpdate
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
 * @desc 更新子系统角色
 */
export function putRoleSelfByIdV1<T = any>(config?: RequestConfigType) {
  return request.request<T>("put", `/v1/role/self/{id}`, config)
}
