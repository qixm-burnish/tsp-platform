import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export class RequestParamsType {
  /** 第几页 */
  page?: number
  /** 每页数量 */
  size?: number
  /** 搜索关键字. 匹配字段: label */
  search?: string
  /** 排序字段. 升序保持原字段名, 降序增加前缀-. 无可排序字段 */
  order_by?: Array<string>
  /** 指定返回字段. 可选字段: id, code, label, scenes, status, internal, icon, description, status_display */
  selected_fields?: Array<string>
}

export type RequestDataType = any
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
 * @desc 子系统列表
 */
export function getSystemSelfV1<T = any>(config?: RequestConfigType) {
  return request.request<T>("get", `/v1/system/self`, config)
}
