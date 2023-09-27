import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type DataParams = defs.userCenter.AccountUpdate

/**
 * @desc 更新用户
 */
export function account_update_v1_account_self__id__put(data: DataParams, config: PureHttpRequestConfig) {
  return request.request(
    "put",
    `/v1/account/self/{id}`,
    {
      data,
    },
    config,
  )
}
