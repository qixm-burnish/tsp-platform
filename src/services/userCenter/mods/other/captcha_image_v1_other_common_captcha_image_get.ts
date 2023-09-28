
    import { userCenterRequest as request } from "@/utils/request"
    import { PureHttpRequestConfig } from "@/utils/request/type.d"

    

    /**
     * @desc 图片验证码
图片验证码, unique_key附带在响应头中
     */
    export function captcha_image_v1_other_common_captcha_image_get<T = any>(, config?: PureHttpRequestConfig) {
      return request.request<T>(
        "get",
        `/v1/other/common/captcha/image`,
        {
          
        },
        config,
      )
    }
    