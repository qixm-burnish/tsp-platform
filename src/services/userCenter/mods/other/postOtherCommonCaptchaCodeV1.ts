import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type RequestParamsType = any
export type RequestDataType = defs.userCenter.Body_captcha_code_v1_other_common_captcha_code_post
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
     * @desc 发送验证码
发送验证码, phone/email + scene组成unique_key
     */
export function postOtherCommonCaptchaCodeV1<T = any>(config?: RequestConfigType) {
  return request.request<T>("post", `/v1/other/common/captcha/code`, config)
}
