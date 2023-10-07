import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type RequestParamsType = any
export type RequestDataType = defs.userCenter.TokenSceneSchema
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
     * @desc 登出
退出登录接口
     */
export function postAuthLogoutV1<T = any>(config?: RequestConfigType) {
  return request.request<T>("post", `/v1/auth/logout`, config)
}
