import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type RequestParamsType = any
export type RequestDataType = defs.userCenter.ChangePasswordIn
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
     * @desc 修改密码
已登录通过旧密码修改密码
     */
export function postAuthPasswordChangeV1<T = any>(config?: RequestConfigType) {
  return request.request<T>("post", `/v1/auth/password/change`, config)
}
