import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type DataParams = defs.userCenter.ChangePasswordIn

/**
     * @desc 修改密码
已登录通过旧密码修改密码
     */
export function change_password_v1_auth_password_change_post<T = any>(data: DataParams, config?: PureHttpRequestConfig) {
  return request.request<T>(
    "post",
    `/v1/auth/password/change`,
    {
      data,
    },
    config,
  )
}
