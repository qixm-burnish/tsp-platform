import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type DataParams = defs.userCenter.TokenSceneSchema

/**
     * @desc 刷新子系统token
刷新用户可访问子系统的token, 当前系统的当前场景为刷新操作, 会导致旧token失效
     */
export function cross_system_v1_auth_token_refresh_post<T = any>(data: DataParams, config?: PureHttpRequestConfig) {
  return request.request<T>(
    "post",
    `/v1/auth/token/refresh`,
    {
      data,
    },
    config,
  )
}
