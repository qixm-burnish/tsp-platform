
    import { userCenterRequest as request } from "@/utils/request"
    import { PureHttpRequestConfig } from "@/utils/request/type.d"

    

    /**
     * @desc 企业详情
     */
    export function route_v1_company_self__id__get(id: string, , config: PureHttpRequestConfig) {
      return request.request(
        "get",
        `/v1/company/self/${id}`,
        {
          
        },
        config,
      )
    }
    