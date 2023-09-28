
    import { userCenterRequest as request } from "@/utils/request"
    import { PureHttpRequestConfig } from "@/utils/request/type.d"

    

    /**
     * @desc 个人信息
获取个人信息
     */
    export function myself_account_detail_v1_account_myself_get<T = any>(, config?: PureHttpRequestConfig) {
      return request.request<T>(
        "get",
        `/v1/account/myself`,
        {
          
        },
        config,
      )
    }
    