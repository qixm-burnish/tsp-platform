import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export class RequestParamsType {
  /** 第几页 */
  page?: number
  /** 每页数量 */
  size?: number
  /** 搜索关键字. 匹配字段: name, username */
  search?: string
  /** 排序字段. 升序保持原字段名, 降序增加前缀-. 无可排序字段 */
  order_by?: Array<string>
  /** 指定返回字段. 可选字段: id, created_at, updated_at, deleted_at, name, credit_code_tax_id, legal_representative_name, legal_representative_phone, legal_representative_id_card_front, business_license, address, username, phone, email, real_name, id_number, status, submit_remark, result_remark, account_id, company_id, status_display */
  selected_fields?: Array<string>
}

export type RequestDataType = any
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
 * @desc 企业入驻申请列表
 */
export function getCompanyApplyV1<T = any>(config?: RequestConfigType) {
  return request.request<T>("get", `/v1/company/apply`, config)
}
