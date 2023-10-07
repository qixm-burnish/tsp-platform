import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type RequestParamsType = any
export type RequestDataType = defs.userCenter.Body_create_company_register_apply_v1_company_apply_post
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
     * @desc 企业入驻申请创建
企业入驻申请创建
     */
export function postCompanyApplyV1<T = any>(config?: RequestConfigType) {
  return request.request<T>("post", `/v1/company/apply`, config)
}
