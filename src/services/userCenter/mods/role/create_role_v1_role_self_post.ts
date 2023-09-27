import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type DataParams = defs.userCenter.SystemCompanyRoleCreate

/**
 * @desc 创建子系统角色
 */
export function create_role_v1_role_self_post(data: DataParams, config: PureHttpRequestConfig) {
  return request.request(
    "post",
    `/v1/role/self`,
    {
      data,
    },
    config,
  )
}
