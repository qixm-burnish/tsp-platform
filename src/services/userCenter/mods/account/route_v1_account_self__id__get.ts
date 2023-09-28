
    import { userCenterRequest as request } from "@/utils/request"
    import { PureHttpRequestConfig } from "@/utils/request/type.d"

    

    /**
     * @desc 用户详情
     */
    export function route_v1_account_self__id__get<T = any>(id: string, , config?: PureHttpRequestConfig) {
      return request.request<T>(
        "get",
        `/v1/account/self/${id}`,
        {
          
        },
        config,
      )
    }
    