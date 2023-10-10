import { dataCenterRequest as request } from "@/utils/request"
import { PureHttpRequestConfig } from "@/utils/request/type.d"

export class RequestParamsType {
  /** vin */
  vin: string
  /** 开始时间 */
  start_datetime: string
  /** 结束时间 */
  stop_datetime: string
  /** 是否逆序 */
  reverse?: boolean
  /** 指定返回字段 */
  selected_fields?: Array<string>
  /** start_row_key */
  start_row_key?: string
  /** size */
  size?: number
}

export type RequestDataType = any
export type RequestConfigType = Omit<PureHttpRequestConfig, "params" | "data"> & {
  data?: RequestDataType
  params?: RequestParamsType
}

/**
     * @desc 实时报文
实时报文
     */
export function getSegmentRealtimeV1<T = any>(config?: RequestConfigType) {
  return request.request<T>("get", `/v1/segment/realtime`, config)
}
