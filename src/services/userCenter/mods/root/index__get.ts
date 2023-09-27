
    import { userCenterRequest as request } from "@/utils/request"
    import { PureHttpRequestConfig } from "@/utils/request/type.d"

    

    /**
     * @desc 健康检查
     */
    export function index__get(, config: PureHttpRequestConfig) {
      return request.request(
        "get",
        `/`,
        {
          
        },
        config,
      )
    }
    