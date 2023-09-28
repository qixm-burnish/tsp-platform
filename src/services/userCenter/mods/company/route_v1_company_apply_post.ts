import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type DataParams = defs.userCenter.CompanyRegisterApplyCreate

/**
 * @desc 创建企业入驻申请
 */
export function route_v1_company_apply_post<T = any>(data: DataParams, config?: PureHttpRequestConfig) {
  return request.request<T>(
    "post",
    `/v1/company/apply`,
    {
      data,
    },
    config,
  )
}
