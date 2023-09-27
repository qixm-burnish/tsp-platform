import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type DataParams = defs.userCenter.ChangePasswordCodeIn

/**
     * @desc 修改密码
通过验证码修改密码
     */
export function change_password_with_code_v1_auth_password_code_change_post(data: DataParams, config: PureHttpRequestConfig) {
  return request.request(
    "post",
    `/v1/auth/password/code-change`,
    {
      data,
    },
    config,
  )
}
