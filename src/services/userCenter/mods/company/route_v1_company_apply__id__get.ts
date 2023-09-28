
    import { userCenterRequest as request } from "@/utils/request"
    import { PureHttpRequestConfig } from "@/utils/request/type.d"

    

    /**
     * @desc 企业入驻申请详情
     */
    export function route_v1_company_apply__id__get<T = any>(id: string, , config?: PureHttpRequestConfig) {
      return request.request<T>(
        "get",
        `/v1/company/apply/${id}`,
        {
          
        },
        config,
      )
    }
    