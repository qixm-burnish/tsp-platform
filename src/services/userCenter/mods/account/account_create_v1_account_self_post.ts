import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type DataParams = defs.userCenter.AccountCreate

/**
 * @desc 创建用户
 */
export function account_create_v1_account_self_post(data: DataParams, config: PureHttpRequestConfig) {
  return request.request(
    "post",
    `/v1/account/self`,
    {
      data,
    },
    config,
  )
}
