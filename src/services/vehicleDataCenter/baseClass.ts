class BatteryTemperatureInformation {
  /** 可充电储能子系统号 */
  SubsystemCode = undefined

  /** 可充电储能温度探针个数 */
  TempProbeCount = undefined

  /** 可充电储能子系统温度探针温度值 */
  Value = []
}

class BatteryVoltageInformation {
  /** 单体电池总数 */
  BatteryCount = undefined

  /** 本帧起始电池序号 */
  BatteryStartNum = undefined

  /** 可充电储能装置电流 */
  Current = undefined

  /** 本帧单体电池总数 */
  FrameBatteryCount = undefined

  /** 单体电池电压 */
  SingleBatteryVoltage = []

  /** 可充电储能子系统号 */
  SubsystemCode = undefined

  /** 可充电储能装置电压 */
  Voltage = undefined
}

class CommonAlertFlagData {
  /** 制动系统报警 */
  BrakeSystem = ""

  /** 电池单体一致性差报警 */
  Consistence = ""

  /** DC-DC 状态报警 */
  DcStatus = ""

  /** DC-DC 温度报警 */
  DcTemperature = ""

  /** 高压互锁状态报警 */
  HighPressure = ""

  /** SOC 过高报警 */
  HighSoc = ""

  /** 电池高温报警 */
  HighTemperature = ""

  /** 绝缘报警 */
  Insulation = ""

  /** SOC 低报警 */
  LowSoc = ""

  /** 可充电储能系统不匹配报警 */
  Mismatch = ""

  /** 驱动电机控制器温度报警 */
  MotorControllerTemperature = ""

  /** 驱动电机温度报警 */
  MotorTemperature = ""

  /** 单体电池过压报警 */
  SingleBatteryExceedPressure = ""

  /** 单体电池欠压报警 */
  SingleBatteryLackPressure = ""

  /** SOC 跳变报警 */
  SocChange = ""

  /** 车载储能装置类型过压报警 */
  StoreExceedLPressure = ""

  /** 车载储能装置类型欠压报警 */
  StoreLackPressure = ""

  /** 车载储能装置类型过充 */
  StoreType = ""

  /** 温度差异报警 */
  TemperatureDifference = ""
}

class EnergyTypeEnum {}

class HealthCheck {
  /** description */
  description = ""

  /** environment */
  environment = ""

  /** latest_version */
  latest_version = ""

  /** name */
  name = ""
}

class LogInOutSegmentResponse {
  /** data */
  data = undefined

  /** energy_type */
  energy_type = new EnergyTypeEnum()
}

class MotorData {
  /** 驱动电机控制器温度 */
  ControllerTemp = undefined

  /** 电机控制器直流母线电流 */
  Current = undefined

  /** 电机控制器输入电压 */
  InputVoltage = undefined

  /** 驱动电机序号 */
  Num = undefined

  /** 驱动电机转速 */
  Rotate = undefined

  /** 驱动电机状态 */
  State = undefined

  /** 驱动电机温度 */
  Temperature = undefined

  /** 驱动电机扭矩 */
  Torque = undefined
}

class RealtimeSegmentResponse {
  /** data */
  data = undefined

  /** energy_type */
  energy_type = new EnergyTypeEnum()
}

class RespFormatEnum {}

class Resp_HealthCheck_ {
  /** 业务响应代码, {0: '成功', -1: '失败', -2: '未授权', -3: '参数错误', -4: '请求频率限制', 500: '服务器内部错误', 403: '禁止访问'} */
  code = undefined

  /** 响应数据格式 */
  data = undefined

  /** 响应提示信息 */
  message = ""

  /** 响应时间 */
  response_time = ""

  /** 请求唯一标识 */
  trace_id = ""
}

class Resp_LogInOutSegmentResponse_ {
  /** 业务响应代码, {0: '成功', -1: '失败', -2: '未授权', -3: '参数错误', -4: '请求频率限制', 500: '服务器内部错误', 403: '禁止访问'} */
  code = undefined

  /** 响应数据格式 */
  data = undefined

  /** 响应提示信息 */
  message = ""

  /** 响应时间 */
  response_time = ""

  /** 请求唯一标识 */
  trace_id = ""
}

class Resp_RealtimeSegmentResponse_ {
  /** 业务响应代码, {0: '成功', -1: '失败', -2: '未授权', -3: '参数错误', -4: '请求频率限制', 500: '服务器内部错误', 403: '禁止访问'} */
  code = undefined

  /** 响应数据格式 */
  data = undefined

  /** 响应提示信息 */
  message = ""

  /** 响应时间 */
  response_time = ""

  /** 请求唯一标识 */
  trace_id = ""
}

class Resp_Union_dict__tuple_tuple___ {
  /** 业务响应代码, {0: '成功', -1: '失败', -2: '未授权', -3: '参数错误', -4: '请求频率限制', 500: '服务器内部错误', 403: '禁止访问'} */
  code = undefined

  /** 响应数据格式 */
  data = undefined

  /** 响应提示信息 */
  message = ""

  /** 响应时间 */
  response_time = ""

  /** 请求唯一标识 */
  trace_id = ""
}

class Resp_list_apis_http_urls_UriItem__ {
  /** 业务响应代码, {0: '成功', -1: '失败', -2: '未授权', -3: '参数错误', -4: '请求频率限制', 500: '服务器内部错误', 403: '禁止访问'} */
  code = undefined

  /** 响应数据格式 */
  data = undefined

  /** 响应提示信息 */
  message = ""

  /** 响应时间 */
  response_time = ""

  /** 请求唯一标识 */
  trace_id = ""
}

class UriItem {
  /** method */
  method = ""

  /** name */
  name = ""

  /** path */
  path = ""

  /** tags */
  tags = []
}

class storages__hbase__models__protocol17691__LogInOutSegment {
  /** vin */
  "A:a01" = ""

  /** obd时间 */
  "A:a02" = ""

  /** 创建时间 */
  "A:a03" = ""

  /** 协议类型 */
  "A:a05" = ""

  /** 接收时间 */
  "A:a06" = ""

  /** 登录/登出 */
  "A:b02" = ""

  /** 流水号 */
  "A:b03" = ""

  /** 原始数据 */
  "B:a01" = ""

  /** obd时间 */
  "B:a02" = ""

  /** 创建时间 */
  "B:a03" = ""

  /** 主键 */
  row_key = ""
}

class storages__hbase__models__protocol17691__RealtimeSegment {
  /** vin */
  "A:a01" = ""

  /** obd时间 */
  "A:a02" = ""

  /** 创建时间 */
  "A:a03" = ""

  /** 协议类型 */
  "A:a05" = ""

  /** 接收时间 */
  "A:a06" = ""

  /** obd诊断协议 */
  "A:ryb01" = ""

  /** MIL状态 */
  "A:ryb02" = ""

  /** 催化转化器监控 */
  "A:ryb03" = undefined

  /** 加热催化转化器监控 */
  "A:ryb04" = undefined

  /** 蒸发系统监控 */
  "A:ryb05" = undefined

  /** 二次空气系统监控 */
  "A:ryb06" = undefined

  /** 系统致冷剂监控 */
  "A:ryb07" = undefined

  /** 排气传感器加热器监控 */
  "A:ryb08" = undefined

  /** 排气传感器加热器监 */
  "A:ryb09" = undefined

  /** EGR 系统和 VVT 监控 */
  "A:ryb10" = undefined

  /** 冷启动辅助系统监控 */
  "A:ryb11" = undefined

  /** 增压压力控制系 统 */
  "A:ryb12" = undefined

  /** DPF 监控 */
  "A:ryb13" = undefined

  /** 选择性催化还原系统(SCR)或 NOx 吸附器 */
  "A:ryb14" = undefined

  /** NMHC 氧化催化器 监控 */
  "A:ryb15" = undefined

  /** 失火监控 */
  "A:ryb16" = undefined

  /** 燃油系统监控 */
  "A:ryb17" = undefined

  /** 综合成分监控 */
  "A:ryb18" = undefined

  /** obd诊断协议 */
  "A:ryb19" = undefined

  /** MIL状态 */
  "A:ryb20" = undefined

  /** 催化转化器监控 */
  "A:ryb21" = undefined

  /** 加热催化转化器监控 */
  "A:ryb22" = undefined

  /** 蒸发系统监控 */
  "A:ryb23" = undefined

  /** 二次空气系统监控 */
  "A:ryb24" = undefined

  /** 系统致冷剂监控 */
  "A:ryb25" = undefined

  /** 排气传感器加热器监控 */
  "A:ryb26" = undefined

  /** 排气传感器加热器监 */
  "A:ryb27" = undefined

  /** EGR 系统和 VVT 监控 */
  "A:ryb28" = undefined

  /** 冷启动辅助系统监控 */
  "A:ryb29" = undefined

  /** 增压压力控制系 统 */
  "A:ryb30" = undefined

  /** DPF 监控 */
  "A:ryb31" = undefined

  /** 选择性催化还原系统(SCR)或 NOx 吸附器 */
  "A:ryb32" = undefined

  /** NMHC 氧化催化器 监控 */
  "A:ryb33" = undefined

  /** 失火监控 */
  "A:ryb34" = undefined

  /** 软件标定识别号 */
  "A:ryb35" = ""

  /** 标定验证码 */
  "A:ryb36" = ""

  /** IUPR 值 */
  "A:ryb37" = ""

  /** 故障数 */
  "A:ryb38" = undefined

  /** 故障列表 */
  "A:ryb39" = []

  /** 车速 */
  "A:ryc01" = undefined

  /** 大气压 */
  "A:ryc02" = undefined

  /** 发动机净输出扭矩 */
  "A:ryc03" = undefined

  /** 摩擦扭矩 */
  "A:ryc04" = undefined

  /** 发动机转速 */
  "A:ryc05" = undefined

  /** 发动机燃料流量 */
  "A:ryc06" = undefined

  /** SCR 上游 NOx 传感器 输出值 */
  "A:ryc07" = undefined

  /** SCR 下游 NOx 传感器 输出值 */
  "A:ryc08" = undefined

  /** 反应剂余量 */
  "A:ryc09" = undefined

  /** 进气量 */
  "A:ryc10" = undefined

  /** SCR 入口温度 */
  "A:ryc11" = undefined

  /** SCR 出口温度 */
  "A:ryc12" = undefined

  /** DPF 压差 */
  "A:ryc13" = undefined

  /** 发动机冷却液温度 */
  "A:ryc14" = undefined

  /** 油箱液位 */
  "A:ryc15" = undefined

  /** 经度 */
  "A:ryc16" = undefined

  /** 纬度 */
  "A:ryc17" = undefined

  /** 累计里程 */
  "A:ryc18" = undefined

  /** 定位是否有效 */
  "A:ryc19" = ""

  /** 南北纬 */
  "A:ryc20" = ""

  /** 东西经 */
  "A:ryc21" = ""

  /** 原始数据 */
  "B:a01" = undefined

  /** obd时间 */
  "B:a02" = ""

  /** 创建时间 */
  "B:a03" = ""

  /** 主键 */
  row_key = ""
}

class storages__hbase__models__protocol32960__LogInOutSegment {
  /** vin */
  "A:a01" = ""

  /** obd时间 */
  "A:a02" = ""

  /** 接收时间 */
  "A:a03" = ""

  /** 协议 */
  "A:a04" = ""

  /** 采集时间 */
  "A:a05" = ""

  /** 命令标识 */
  "A:a07" = ""

  /** 包类型 */
  "A:b01" = ""

  /** 登出流水号 */
  "A:b02" = ""

  /** 账户 */
  "A:b03" = ""

  /** 密码 */
  "A:b04" = ""

  /** iccid */
  "A:b05" = ""

  /** 子系统数 */
  "A:b06" = ""

  /** 电池编码 */
  "A:b07" = ""

  /** 原始数据 */
  "B:a01" = ""

  /** obd时间 */
  "B:a02" = ""

  /** 接收时间 */
  "B:a03" = ""

  /** 主键 */
  row_key = ""
}

class storages__hbase__models__protocol32960__RealtimeSegment {
  /** vin */
  "A:a01" = ""

  /** obd时间 */
  "A:a02" = ""

  /** 接收时间 */
  "A:a03" = ""

  /** 协议 */
  "A:a04" = ""

  /** 采集时间 */
  "A:a05" = ""

  /** 所属平台 */
  "A:a06" = ""

  /** 命令标识 */
  "A:a07" = ""

  /** 信息类型标志 */
  "A:b01" = undefined

  /** 车辆状态 */
  "A:b02" = undefined

  /** 充电状态 */
  "A:b03" = undefined

  /** 运行模式 */
  "A:b04" = undefined

  /** 车速 */
  "A:b05" = undefined

  /** 累计里程 */
  "A:b06" = undefined

  /** 总电压 */
  "A:b07" = undefined

  /** 总电流 */
  "A:b08" = undefined

  /** SOC */
  "A:b09" = undefined

  /** DC-DC状态 */
  "A:b10" = undefined

  /** 档位 */
  "A:b11" = ""

  /** 有无制动力 */
  "A:b12" = ""

  /** 有无驱动力 */
  "A:b13" = ""

  /** 绝缘电阻 */
  "A:b14" = undefined

  /** 加速踏板行程值 */
  "A:b15" = undefined

  /** 制动踏板状态 */
  "A:b16" = undefined

  /** 信息类型标志 */
  "A:c01" = undefined

  /** 驱动电机个数 */
  "A:c02" = undefined

  /** 驱动电机信息列表原始数据 */
  "A:c03" = ""

  /** 驱动电机信息列表 */
  "A:c04" = []

  /** 信息类型标志 */
  "A:d01" = undefined

  /** 燃料电池电压 */
  "A:d02" = undefined

  /** 燃料电池电流 */
  "A:d03" = undefined

  /** 燃料消耗率 */
  "A:d04" = undefined

  /** 燃料电池温度探针总数 */
  "A:d05" = undefined

  /** 探针温度值 */
  "A:d06" = []

  /** 氢系统中最高温度 */
  "A:d07" = undefined

  /** 氢系统中最高温度探针代号 */
  "A:d08" = undefined

  /** 氢气最高浓度 */
  "A:d09" = undefined

  /** 氢气最高浓度传感器代号 */
  "A:d10" = undefined

  /** 氢气最高压力 */
  "A:d11" = undefined

  /** 氢气最高压力传感器代号 */
  "A:d12" = undefined

  /** 高压DC/DC状态 */
  "A:d13" = undefined

  /** 信息类型标志 */
  "A:e01" = undefined

  /** 发动机状态 */
  "A:e02" = undefined

  /** 曲轴转速 */
  "A:e03" = undefined

  /** 燃料消耗率 */
  "A:e04" = undefined

  /** 信息类型标志 */
  "A:f01" = undefined

  /** 是否有效 */
  "A:f02" = ""

  /** 北纬or南纬 */
  "A:f03" = ""

  /** 东经or西经 */
  "A:f04" = ""

  /** 经度 */
  "A:f05" = undefined

  /** 纬度 */
  "A:f06" = undefined

  /** 信息类型标志 */
  "A:g01" = undefined

  /** 最高电压电池子系统号 */
  "A:g02" = undefined

  /** 最高电压电池单体代号 */
  "A:g03" = undefined

  /** 电池单体电压最高值 */
  "A:g04" = undefined

  /** 最低电压电池子系统号 */
  "A:g05" = undefined

  /** 最低电压电池单体代号 */
  "A:g06" = undefined

  /** 电池单体电压最低值 */
  "A:g07" = undefined

  /** 最高温度子系统号 */
  "A:g08" = undefined

  /** 最高温度探针序号 */
  "A:g09" = undefined

  /** 最高温度值 */
  "A:g10" = undefined

  /** 最低温度子系统号 */
  "A:g11" = undefined

  /** 最低温度探针序号 */
  "A:g12" = undefined

  /** 最低温度值 */
  "A:g13" = undefined

  /** 信息类型标志 */
  "A:h01" = undefined

  /** 最高报警等级 */
  "A:h02" = undefined

  /** 通用报警标志 */
  "A:h03" = undefined

  /** 可充电储能装置故障总数 */
  "A:h04" = undefined

  /** 可充电储能装置故障代码列表 */
  "A:h05" = ""

  /** 驱动电机故障总数 */
  "A:h06" = undefined

  /** 驱动电机故障代码列表 */
  "A:h07" = ""

  /** 发动机故障总数 */
  "A:h08" = undefined

  /** 发动机故障列表 */
  "A:h09" = ""

  /** 其他故障总数 */
  "A:h10" = undefined

  /** 其他故障代码 */
  "A:h11" = ""

  /** 通用报警标志解析值 */
  "A:h12" = []

  /** 信息类型标志 */
  "A:i01" = undefined

  /** 可充电储能子系统个数 */
  "A:i02" = undefined

  /** 可充电储能子系统电压信息列表 */
  "A:i03" = []

  /** 信息类型标志 */
  "A:j01" = undefined

  /** 可充电储能子系统个数 */
  "A:j02" = undefined

  /** 可充电储能子系统温度信息列表 */
  "A:j03" = []

  /** 原始数据 */
  "B:a01" = undefined

  /** obd时间 */
  "B:a02" = ""

  /** 接收时间 */
  "B:a03" = ""

  /** 主键 */
  row_key = ""
}

export const vehicleDataCenter = {
  BatteryTemperatureInformation,
  BatteryVoltageInformation,
  CommonAlertFlagData,
  EnergyTypeEnum,
  HealthCheck,
  LogInOutSegmentResponse,
  MotorData,
  RealtimeSegmentResponse,
  RespFormatEnum,
  Resp_HealthCheck_,
  Resp_LogInOutSegmentResponse_,
  Resp_RealtimeSegmentResponse_,
  Resp_Union_dict__tuple_tuple___,
  Resp_list_apis_http_urls_UriItem__,
  UriItem,
  storages__hbase__models__protocol17691__LogInOutSegment,
  storages__hbase__models__protocol17691__RealtimeSegment,
  storages__hbase__models__protocol32960__LogInOutSegment,
  storages__hbase__models__protocol32960__RealtimeSegment,
}
