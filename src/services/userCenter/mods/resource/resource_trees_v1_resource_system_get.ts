import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export class QueryParams {
  /** system_id */
  system_id: string
}

/**
     * @desc 获取系统的全层级菜单
获取系统的全层级菜单
     */
export function resource_trees_v1_resource_system_get(params: QueryParams, config: PureHttpRequestConfig) {
  return request.request(
    "get",
    `/v1/resource/system`,
    {
      params,
    },
    config,
  )
}
