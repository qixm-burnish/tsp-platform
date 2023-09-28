import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export class QueryParams {
  /** 第几页 */
  page?: number
  /** 每页数量 */
  size?: number
  /** 搜索关键字. 匹配字段: name */
  search?: string
  /** 排序字段. 升序保持原字段名, 降序增加前缀-. 无可排序字段 */
  order_by?: Array<string>
  /** 指定返回字段. 可选字段: id, created_at, updated_at, deleted_at, name, credit_code_tax_id, status, status_display */
  selected_fields?: Array<string>
}

/**
 * @desc 企业列表
 */
export function route_v1_company_self_get<T = any>(params: QueryParams, config?: PureHttpRequestConfig) {
  return request.request<T>(
    "get",
    `/v1/company/self`,
    {
      params,
    },
    config,
  )
}
