
    import { userCenterRequest as request } from "@/utils/request"
    import { PureHttpRequestConfig } from "@/utils/request/type.d"

    

    /**
     * @desc 子系统角色详情
     */
    export function retrieve_role_v1_role_self__id__get(id: string, , config: PureHttpRequestConfig) {
      return request.request(
        "get",
        `/v1/role/self/${id}`,
        {
          
        },
        config,
      )
    }
    