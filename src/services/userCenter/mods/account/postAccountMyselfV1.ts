import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export type RequestParamsType = any
export type RequestDataType = defs.userCenter.AccountUpdateSelf
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
     * @desc 个人信息
修改个人信息
     */
export function postAccountMyselfV1<T = any>(config?: RequestConfigType) {
  return request.request<T>("post", `/v1/account/myself`, config)
}
