import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export class QueryParams {
  /** 返回格式 */
  format?: any
  /** enum_name */
  enum_name?: string
  /** is_reversed */
  is_reversed?: boolean
}

/**
     * @desc 枚举表
枚举-列表
     */
export function enum_content_v1_other_common_enum_get<T = any>(params: QueryParams, config?: PureHttpRequestConfig) {
  return request.request<T>(
    "get",
    `/v1/other/common/enum`,
    {
      params,
    },
    config,
  )
}
