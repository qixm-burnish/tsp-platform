
    import { userCenterRequest as request } from "@/utils/request"
    import { PureHttpRequestConfig } from "@/utils/request/type.d"

    

    /**
     * @desc 全部uri
     */
    export function get_all_urls_from_request_uri_list_get(, config: PureHttpRequestConfig) {
      return request.request(
        "get",
        `/uri-list`,
        {
          
        },
        config,
      )
    }
    