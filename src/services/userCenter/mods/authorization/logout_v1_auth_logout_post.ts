import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type DataParams = defs.userCenter.TokenSceneSchema

/**
     * @desc 登出
退出登录接口
     */
export function logout_v1_auth_logout_post<T = any>(data: DataParams, config?: PureHttpRequestConfig) {
  return request.request<T>(
    "post",
    `/v1/auth/logout`,
    {
      data,
    },
    config,
  )
}
