import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type RequestParamsType = any
export type RequestDataType = defs.userCenter.IdsSchema
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
     * @desc 角色移除关联已存在用户
角色移除已存在用户
     */
export function postRoleRemoveAccountV1<T = any>(config?: RequestConfigType) {
  return request.request<T>("post", `/v1/role/remove-account`, config)
}
