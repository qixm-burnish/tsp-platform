type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value
}

declare namespace defs {
  export namespace vehicleDataCenter {
    export class BatteryTemperatureInformation {
      /** 可充电储能子系统号 */
      SubsystemCode: number

      /** 可充电储能温度探针个数 */
      TempProbeCount: number

      /** 可充电储能子系统温度探针温度值 */
      Value: Array<number>
    }

    export class BatteryVoltageInformation {
      /** 单体电池总数 */
      BatteryCount: number

      /** 本帧起始电池序号 */
      BatteryStartNum: number

      /** 可充电储能装置电流 */
      Current: number

      /** 本帧单体电池总数 */
      FrameBatteryCount: number

      /** 单体电池电压 */
      SingleBatteryVoltage: Array<number>

      /** 可充电储能子系统号 */
      SubsystemCode: number

      /** 可充电储能装置电压 */
      Voltage: number
    }

    export class CommonAlertFlagData {
      /** 制动系统报警 */
      BrakeSystem: string

      /** 电池单体一致性差报警 */
      Consistence: string

      /** DC-DC 状态报警 */
      DcStatus: string

      /** DC-DC 温度报警 */
      DcTemperature: string

      /** 高压互锁状态报警 */
      HighPressure: string

      /** SOC 过高报警 */
      HighSoc: string

      /** 电池高温报警 */
      HighTemperature: string

      /** 绝缘报警 */
      Insulation: string

      /** SOC 低报警 */
      LowSoc: string

      /** 可充电储能系统不匹配报警 */
      Mismatch: string

      /** 驱动电机控制器温度报警 */
      MotorControllerTemperature: string

      /** 驱动电机温度报警 */
      MotorTemperature: string

      /** 单体电池过压报警 */
      SingleBatteryExceedPressure: string

      /** 单体电池欠压报警 */
      SingleBatteryLackPressure: string

      /** SOC 跳变报警 */
      SocChange: string

      /** 车载储能装置类型过压报警 */
      StoreExceedLPressure: string

      /** 车载储能装置类型欠压报警 */
      StoreLackPressure: string

      /** 车载储能装置类型过充 */
      StoreType: string

      /** 温度差异报警 */
      TemperatureDifference: string
    }

    export class EnergyTypeEnum {}

    export class HealthCheck {
      /** description */
      description?: string

      /** environment */
      environment: string

      /** latest_version */
      latest_version: string

      /** name */
      name: string
    }

    export class LogInOutSegmentResponse {
      /** data */
      data: array

      /** energy_type */
      energy_type: defs.vehicleDataCenter.EnergyTypeEnum
    }

    export class MotorData {
      /** 驱动电机控制器温度 */
      ControllerTemp: number

      /** 电机控制器直流母线电流 */
      Current: number

      /** 电机控制器输入电压 */
      InputVoltage: number

      /** 驱动电机序号 */
      Num: number

      /** 驱动电机转速 */
      Rotate: number

      /** 驱动电机状态 */
      State: number

      /** 驱动电机温度 */
      Temperature: number

      /** 驱动电机扭矩 */
      Torque: number
    }

    export class RealtimeSegmentResponse {
      /** data */
      data: array

      /** energy_type */
      energy_type: defs.vehicleDataCenter.EnergyTypeEnum
    }

    export class RespFormatEnum {}

    export class Resp_HealthCheck_ {
      /** 业务响应代码, {0: '成功', -1: '失败', -2: '未授权', -3: '参数错误', -4: '请求频率限制', 500: '服务器内部错误', 403: '禁止访问'} */
      code?: number

      /** 响应数据格式 */
      data?: any

      /** 响应提示信息 */
      message?: string

      /** 响应时间 */
      response_time?: string

      /** 请求唯一标识 */
      trace_id?: string
    }

    export class Resp_LogInOutSegmentResponse_ {
      /** 业务响应代码, {0: '成功', -1: '失败', -2: '未授权', -3: '参数错误', -4: '请求频率限制', 500: '服务器内部错误', 403: '禁止访问'} */
      code?: number

      /** 响应数据格式 */
      data?: any

      /** 响应提示信息 */
      message?: string

      /** 响应时间 */
      response_time?: string

      /** 请求唯一标识 */
      trace_id?: string
    }

    export class Resp_RealtimeSegmentResponse_ {
      /** 业务响应代码, {0: '成功', -1: '失败', -2: '未授权', -3: '参数错误', -4: '请求频率限制', 500: '服务器内部错误', 403: '禁止访问'} */
      code?: number

      /** 响应数据格式 */
      data?: any

      /** 响应提示信息 */
      message?: string

      /** 响应时间 */
      response_time?: string

      /** 请求唯一标识 */
      trace_id?: string
    }

    export class Resp_Union_dict__tuple_tuple___ {
      /** 业务响应代码, {0: '成功', -1: '失败', -2: '未授权', -3: '参数错误', -4: '请求频率限制', 500: '服务器内部错误', 403: '禁止访问'} */
      code?: number

      /** 响应数据格式 */
      data?: any

      /** 响应提示信息 */
      message?: string

      /** 响应时间 */
      response_time?: string

      /** 请求唯一标识 */
      trace_id?: string
    }

    export class Resp_list_apis_http_urls_UriItem__ {
      /** 业务响应代码, {0: '成功', -1: '失败', -2: '未授权', -3: '参数错误', -4: '请求频率限制', 500: '服务器内部错误', 403: '禁止访问'} */
      code?: number

      /** 响应数据格式 */
      data?: any

      /** 响应提示信息 */
      message?: string

      /** 响应时间 */
      response_time?: string

      /** 请求唯一标识 */
      trace_id?: string
    }

    export class UriItem {
      /** method */
      method: string

      /** name */
      name?: string

      /** path */
      path: string

      /** tags */
      tags: Array<string>
    }

    export class storages__hbase__models__protocol17691__LogInOutSegment {
      /** vin */
      "A:a01": string

      /** obd时间 */
      "A:a02": string

      /** 创建时间 */
      "A:a03": string

      /** 协议类型 */
      "A:a05": string

      /** 接收时间 */
      "A:a06": string

      /** 登录/登出 */
      "A:b02": string

      /** 流水号 */
      "A:b03": string

      /** 原始数据 */
      "B:a01": string

      /** obd时间 */
      "B:a02": string

      /** 创建时间 */
      "B:a03": string

      /** 主键 */
      row_key: string
    }

    export class storages__hbase__models__protocol17691__RealtimeSegment {
      /** vin */
      "A:a01": string

      /** obd时间 */
      "A:a02": string

      /** 创建时间 */
      "A:a03": string

      /** 协议类型 */
      "A:a05": string

      /** 接收时间 */
      "A:a06": string

      /** obd诊断协议 */
      "A:ryb01"?: string

      /** MIL状态 */
      "A:ryb02"?: string

      /** 催化转化器监控 */
      "A:ryb03"?: number

      /** 加热催化转化器监控 */
      "A:ryb04"?: number

      /** 蒸发系统监控 */
      "A:ryb05"?: number

      /** 二次空气系统监控 */
      "A:ryb06"?: number

      /** 系统致冷剂监控 */
      "A:ryb07"?: number

      /** 排气传感器加热器监控 */
      "A:ryb08"?: number

      /** 排气传感器加热器监 */
      "A:ryb09"?: number

      /** EGR 系统和 VVT 监控 */
      "A:ryb10"?: number

      /** 冷启动辅助系统监控 */
      "A:ryb11"?: number

      /** 增压压力控制系 统 */
      "A:ryb12"?: number

      /** DPF 监控 */
      "A:ryb13"?: number

      /** 选择性催化还原系统(SCR)或 NOx 吸附器 */
      "A:ryb14"?: number

      /** NMHC 氧化催化器 监控 */
      "A:ryb15"?: number

      /** 失火监控 */
      "A:ryb16"?: number

      /** 燃油系统监控 */
      "A:ryb17"?: number

      /** 综合成分监控 */
      "A:ryb18"?: number

      /** obd诊断协议 */
      "A:ryb19"?: number

      /** MIL状态 */
      "A:ryb20"?: number

      /** 催化转化器监控 */
      "A:ryb21"?: number

      /** 加热催化转化器监控 */
      "A:ryb22"?: number

      /** 蒸发系统监控 */
      "A:ryb23"?: number

      /** 二次空气系统监控 */
      "A:ryb24"?: number

      /** 系统致冷剂监控 */
      "A:ryb25"?: number

      /** 排气传感器加热器监控 */
      "A:ryb26"?: number

      /** 排气传感器加热器监 */
      "A:ryb27"?: number

      /** EGR 系统和 VVT 监控 */
      "A:ryb28"?: number

      /** 冷启动辅助系统监控 */
      "A:ryb29"?: number

      /** 增压压力控制系 统 */
      "A:ryb30"?: number

      /** DPF 监控 */
      "A:ryb31"?: number

      /** 选择性催化还原系统(SCR)或 NOx 吸附器 */
      "A:ryb32"?: number

      /** NMHC 氧化催化器 监控 */
      "A:ryb33"?: number

      /** 失火监控 */
      "A:ryb34"?: number

      /** 软件标定识别号 */
      "A:ryb35"?: string

      /** 标定验证码 */
      "A:ryb36"?: string

      /** IUPR 值 */
      "A:ryb37"?: string

      /** 故障数 */
      "A:ryb38"?: number

      /** 故障列表 */
      "A:ryb39"?: Array<string>

      /** 车速 */
      "A:ryc01"?: number

      /** 大气压 */
      "A:ryc02"?: number

      /** 发动机净输出扭矩 */
      "A:ryc03"?: number

      /** 摩擦扭矩 */
      "A:ryc04"?: number

      /** 发动机转速 */
      "A:ryc05"?: number

      /** 发动机燃料流量 */
      "A:ryc06"?: number

      /** SCR 上游 NOx 传感器 输出值 */
      "A:ryc07"?: number

      /** SCR 下游 NOx 传感器 输出值 */
      "A:ryc08"?: number

      /** 反应剂余量 */
      "A:ryc09"?: number

      /** 进气量 */
      "A:ryc10"?: number

      /** SCR 入口温度 */
      "A:ryc11"?: number

      /** SCR 出口温度 */
      "A:ryc12"?: number

      /** DPF 压差 */
      "A:ryc13"?: number

      /** 发动机冷却液温度 */
      "A:ryc14"?: number

      /** 油箱液位 */
      "A:ryc15"?: number

      /** 经度 */
      "A:ryc16"?: number

      /** 纬度 */
      "A:ryc17"?: number

      /** 累计里程 */
      "A:ryc18"?: number

      /** 定位是否有效 */
      "A:ryc19"?: string

      /** 南北纬 */
      "A:ryc20"?: string

      /** 东西经 */
      "A:ryc21"?: string

      /** 原始数据 */
      "B:a01": any

      /** obd时间 */
      "B:a02": string

      /** 创建时间 */
      "B:a03": string

      /** 主键 */
      row_key: string
    }

    export class storages__hbase__models__protocol32960__LogInOutSegment {
      /** vin */
      "A:a01": string

      /** obd时间 */
      "A:a02": string

      /** 接收时间 */
      "A:a03": string

      /** 协议 */
      "A:a04": string

      /** 采集时间 */
      "A:a05": string

      /** 命令标识 */
      "A:a07": string

      /** 包类型 */
      "A:b01": string

      /** 登出流水号 */
      "A:b02": string

      /** 账户 */
      "A:b03": string

      /** 密码 */
      "A:b04": string

      /** iccid */
      "A:b05": string

      /** 子系统数 */
      "A:b06": string

      /** 电池编码 */
      "A:b07": string

      /** 原始数据 */
      "B:a01": string

      /** obd时间 */
      "B:a02": string

      /** 接收时间 */
      "B:a03": string

      /** 主键 */
      row_key: string
    }

    export class storages__hbase__models__protocol32960__RealtimeSegment {
      /** vin */
      "A:a01": string

      /** obd时间 */
      "A:a02": string

      /** 接收时间 */
      "A:a03": string

      /** 协议 */
      "A:a04": string

      /** 采集时间 */
      "A:a05": string

      /** 所属平台 */
      "A:a06": string

      /** 命令标识 */
      "A:a07": string

      /** 信息类型标志 */
      "A:b01": number

      /** 车辆状态 */
      "A:b02": number

      /** 充电状态 */
      "A:b03": number

      /** 运行模式 */
      "A:b04": number

      /** 车速 */
      "A:b05": number

      /** 累计里程 */
      "A:b06": number

      /** 总电压 */
      "A:b07": number

      /** 总电流 */
      "A:b08": number

      /** SOC */
      "A:b09": number

      /** DC-DC状态 */
      "A:b10": number

      /** 档位 */
      "A:b11": string

      /** 有无制动力 */
      "A:b12": string

      /** 有无驱动力 */
      "A:b13": string

      /** 绝缘电阻 */
      "A:b14": number

      /** 加速踏板行程值 */
      "A:b15": number

      /** 制动踏板状态 */
      "A:b16": number

      /** 信息类型标志 */
      "A:c01": number

      /** 驱动电机个数 */
      "A:c02": number

      /** 驱动电机信息列表原始数据 */
      "A:c03": string

      /** 驱动电机信息列表 */
      "A:c04": Array<defs.vehicleDataCenter.MotorData>

      /** 信息类型标志 */
      "A:d01": number

      /** 燃料电池电压 */
      "A:d02": number

      /** 燃料电池电流 */
      "A:d03": number

      /** 燃料消耗率 */
      "A:d04": number

      /** 燃料电池温度探针总数 */
      "A:d05": number

      /** 探针温度值 */
      "A:d06": Array<number>

      /** 氢系统中最高温度 */
      "A:d07": number

      /** 氢系统中最高温度探针代号 */
      "A:d08": number

      /** 氢气最高浓度 */
      "A:d09": number

      /** 氢气最高浓度传感器代号 */
      "A:d10": number

      /** 氢气最高压力 */
      "A:d11": number

      /** 氢气最高压力传感器代号 */
      "A:d12": number

      /** 高压DC/DC状态 */
      "A:d13": number

      /** 信息类型标志 */
      "A:e01": number

      /** 发动机状态 */
      "A:e02": number

      /** 曲轴转速 */
      "A:e03": number

      /** 燃料消耗率 */
      "A:e04": number

      /** 信息类型标志 */
      "A:f01": number

      /** 是否有效 */
      "A:f02": string

      /** 北纬or南纬 */
      "A:f03": string

      /** 东经or西经 */
      "A:f04": string

      /** 经度 */
      "A:f05": number

      /** 纬度 */
      "A:f06": number

      /** 信息类型标志 */
      "A:g01": number

      /** 最高电压电池子系统号 */
      "A:g02": number

      /** 最高电压电池单体代号 */
      "A:g03": number

      /** 电池单体电压最高值 */
      "A:g04": number

      /** 最低电压电池子系统号 */
      "A:g05": number

      /** 最低电压电池单体代号 */
      "A:g06": number

      /** 电池单体电压最低值 */
      "A:g07": number

      /** 最高温度子系统号 */
      "A:g08": number

      /** 最高温度探针序号 */
      "A:g09": number

      /** 最高温度值 */
      "A:g10": number

      /** 最低温度子系统号 */
      "A:g11": number

      /** 最低温度探针序号 */
      "A:g12": number

      /** 最低温度值 */
      "A:g13": number

      /** 信息类型标志 */
      "A:h01": number

      /** 最高报警等级 */
      "A:h02": number

      /** 通用报警标志 */
      "A:h03": array

      /** 可充电储能装置故障总数 */
      "A:h04": number

      /** 可充电储能装置故障代码列表 */
      "A:h05": string

      /** 驱动电机故障总数 */
      "A:h06": number

      /** 驱动电机故障代码列表 */
      "A:h07": string

      /** 发动机故障总数 */
      "A:h08": number

      /** 发动机故障列表 */
      "A:h09": string

      /** 其他故障总数 */
      "A:h10": number

      /** 其他故障代码 */
      "A:h11": string

      /** 通用报警标志解析值 */
      "A:h12": Array<defs.vehicleDataCenter.CommonAlertFlagData>

      /** 信息类型标志 */
      "A:i01": number

      /** 可充电储能子系统个数 */
      "A:i02": number

      /** 可充电储能子系统电压信息列表 */
      "A:i03": Array<defs.vehicleDataCenter.BatteryVoltageInformation>

      /** 信息类型标志 */
      "A:j01": number

      /** 可充电储能子系统个数 */
      "A:j02": number

      /** 可充电储能子系统温度信息列表 */
      "A:j03": Array<defs.vehicleDataCenter.BatteryTemperatureInformation>

      /** 原始数据 */
      "B:a01": any

      /** obd时间 */
      "B:a02": string

      /** 接收时间 */
      "B:a03": string

      /** 主键 */
      row_key: string
    }
  }
}

declare namespace API {
  export namespace vehicleDataCenter {
    /**
     * 其他
     */
    export namespace other {
      /**
        * 枚举表
枚举-列表
        * /v1/other/common/enum
        */
      export namespace getOtherCommonEnumV1 {
        export class Params {
          /** 返回格式 */
          format?: any
          /** enum_name */
          enum_name?: string
          /** is_reversed */
          is_reversed?: boolean
        }

        export type Response = defs.vehicleDataCenter.Resp_Union_dict__tuple_tuple___
        export const init: Response
        export function request(params: Params): Promise<defs.vehicleDataCenter.Resp_Union_dict__tuple_tuple___>
      }
    }

    /**
     * 根目录
     */
    export namespace root {
      /**
       * 健康检查
       * /
       */
      export namespace getIndex {
        export class Params {}

        export type Response = defs.vehicleDataCenter.Resp_HealthCheck_
        export const init: Response
        export function request(params: Params): Promise<defs.vehicleDataCenter.Resp_HealthCheck_>
      }

      /**
       * 全部uri
       * /uri-list
       */
      export namespace getUriList {
        export class Params {}

        export type Response = defs.vehicleDataCenter.Resp_list_apis_http_urls_UriItem__
        export const init: Response
        export function request(params: Params): Promise<defs.vehicleDataCenter.Resp_list_apis_http_urls_UriItem__>
      }
    }

    /**
     * 报文
     */
    export namespace segment {
      /**
        * 登入登出报文
登入登出报文
        * /v1/segment/login-out
        */
      export namespace getSegmentLoginOutV1 {
        export class Params {
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

        export type Response = defs.vehicleDataCenter.Resp_LogInOutSegmentResponse_
        export const init: Response
        export function request(params: Params): Promise<defs.vehicleDataCenter.Resp_LogInOutSegmentResponse_>
      }

      /**
        * 实时报文
实时报文
        * /v1/segment/realtime
        */
      export namespace getSegmentRealtimeV1 {
        export class Params {
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

        export type Response = defs.vehicleDataCenter.Resp_RealtimeSegmentResponse_
        export const init: Response
        export function request(params: Params): Promise<defs.vehicleDataCenter.Resp_RealtimeSegmentResponse_>
      }
    }
  }
}
