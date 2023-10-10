import { userCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export class RequestParamsType {
  /** system_id */
  system_id: string
}

export type RequestDataType = any
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
     * @desc 超级管理员角色详情
虚拟超级管理员角色详情-超级管理员是企业超管, 本质和企业无关, 所以子系统没有超管, 但又必须展示, 所以前后端配合搞一个虚拟的
     */
export function postRoleSuper_adminV1<T = any>(config?: RequestConfigType) {
  return request.request<T>("post", `/v1/role/super_admin`, config)
}
