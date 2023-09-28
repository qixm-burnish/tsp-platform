import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export class QueryParams {
  /** 上传路径 */
  filepath: string
  /** 基础路径, 默认为空按项目及环境划分 */
  base_path?: string
}

/**
     * @desc 临时OSS上传url
临时OSS上传url
     */
export function oss_upload_url_v1_other_common_oss_upload_url_get<T = any>(params: QueryParams, config?: PureHttpRequestConfig) {
  return request.request<T>(
    "get",
    `/v1/other/common/oss/upload-url`,
    {
      params,
    },
    config,
  )
}
