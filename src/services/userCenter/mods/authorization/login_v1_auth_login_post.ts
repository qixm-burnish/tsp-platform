import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type DataParams = defs.userCenter.LoginSchema

/**
     * @desc 登录
登录接口
     */
export function login_v1_auth_login_post<T = any>(data: DataParams, config?: PureHttpRequestConfig) {
  return request.request<T>(
    "post",
    `/v1/auth/login`,
    {
      data,
    },
    config,
  )
}
