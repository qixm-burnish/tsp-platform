import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type RequestParamsType = any
export type RequestDataType = defs.userCenter.LoginSchema
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
     * @desc 登录
登录接口
     */
export function postAuthLoginV1<T = any>(config?: RequestConfigType) {
  return request.request<T>("post", `/v1/auth/login`, config)
}
