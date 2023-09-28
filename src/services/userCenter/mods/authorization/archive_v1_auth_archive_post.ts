import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type DataParams = Array<string>

/**
     * @desc 注销
注销
     */
export function archive_v1_auth_archive_post<T = any>(data: DataParams, config?: PureHttpRequestConfig) {
  return request.request<T>(
    "post",
    `/v1/auth/archive`,
    {
      data,
    },
    config,
  )
}
