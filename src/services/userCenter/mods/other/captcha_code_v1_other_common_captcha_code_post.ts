import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type DataParams = defs.userCenter.Body_captcha_code_v1_other_common_captcha_code_post

/**
     * @desc 发送验证码
发送验证码, phone + scene组成unique_key
     */
export function captcha_code_v1_other_common_captcha_code_post(data: DataParams, config: PureHttpRequestConfig) {
  return request.request(
    "post",
    `/v1/other/common/captcha/code`,
    {
      data,
    },
    config,
  )
}
