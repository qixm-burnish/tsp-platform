import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type RequestParamsType = any
export type RequestDataType = defs.userCenter.TokenSceneSchema
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
     * @desc 刷新子系统token
刷新用户可访问子系统的token, 当前系统的当前场景为刷新操作, 会导致旧token失效
     */
export function postAuthTokenRefreshV1<T = any>(config?: RequestConfigType) {
  return request.request<T>("post", `/v1/auth/token/refresh`, config)
}
