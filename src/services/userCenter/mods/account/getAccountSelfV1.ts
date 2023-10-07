import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export class RequestParamsType {
  /** 用户名 */
  username?: string
  /** 手机号 */
  phone?: string
  /** 角色id */
  roles__id__in?: Array<string>
  /** 状态, choices: enable-启用、disable-禁用 */
  status?: any
  /** 状态, choices: male-男、female-女、other-其他 */
  gender?: any
  /** 第几页 */
  page?: number
  /** 每页数量 */
  size?: number
  /** 搜索关键字. 匹配字段: username */
  search?: string
  /** 排序字段. 升序保持原字段名, 降序增加前缀-. 可选字段: created_at */
  order_by?: Array<string>
  /** 指定返回字段. 可选字段: id, created_at, updated_at, deleted_at, username, phone, email, gender, real_name, id_number, born_date, last_login_at, status, is_staff, is_super_admin, is_company_super_admin, company_id, days_from_last_login, status_display, gender_display, age */
  selected_fields?: Array<string>
}

export type RequestDataType = any
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
 * @desc 用户列表
 */
export function getAccountSelfV1<T = any>(config?: RequestConfigType) {
  return request.request<T>("get", `/v1/account/self`, config)
}
