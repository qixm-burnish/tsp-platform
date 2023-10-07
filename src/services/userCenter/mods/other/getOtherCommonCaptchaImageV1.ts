import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export class RequestParamsType {
  /** 唯一标识, 手机号或用户名 */
  identifier: string
  /** 场景 */
  scene: any
}

export type RequestDataType = any
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
     * @desc 图片验证码
图片验证码, unique_key附带在响应头中
     */
export function getOtherCommonCaptchaImageV1<T = any>(config?: RequestConfigType) {
  return request.request<T>("get", `/v1/other/common/captcha/image`, config)
}
