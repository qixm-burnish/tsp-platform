import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type DataParams = defs.userCenter.SystemCompanyRoleUpdate

/**
 * @desc 更新子系统角色
 */
export function update_role_v1_role_self__id__put<T = any>(data: DataParams, config?: PureHttpRequestConfig) {
  return request.request<T>(
    "put",
    `/v1/role/self/{id}`,
    {
      data,
    },
    config,
  )
}
