class AccountAuthDetail {
  /** 年龄<br/><br/>Returns:<br/>    int | None: 无出生日期时为None */
  age = undefined

  /** 出生日期 */
  born_date = ""

  /** 企业id */
  company = undefined

  /** 创建时间 */
  created_at = ""

  /** 距上一次登录天数<br/><br/>Returns:<br/>    int | None: 从未登录的情况为None */
  days_from_last_login = undefined

  /** 删除时间 */
  deleted_at = ""

  /** 邮箱 */
  email = ""

  /** 性别, choices: male-男、female-女、other-其他 */
  gender = undefined

  /** 性别显示 */
  gender_display = ""

  /** 主键 */
  id = ""

  /** 身份证号 */
  id_number = ""

  /** 是否是企业超管 */
  is_company_super_admin = false

  /** 是否是用户中心管理后台管理员 */
  is_staff = false

  /** 是否是用户中心管理后台超级管理员 */
  is_super_admin = false

  /** 最近一次登录时间 */
  last_login_at = ""

  /** 手机号 */
  phone = ""

  /** 姓名 */
  real_name = ""

  /** 状态, 当未关联至任何子系统时为禁用 */
  status = undefined

  /** 状态显示 */
  status_display = ""

  /** 系统列表 */
  systems = []

  /** 更新时间 */
  updated_at = ""

  /** 用户名 */
  username = ""
}

class AccountCreate {
  /** 出生日期 */
  born_date = ""

  /** 邮箱 */
  email = ""

  /** 性别, choices: male-男、female-女、other-其他 */
  gender = undefined

  /** 身份证号 */
  id_number = ""

  /** 密码 */
  password = ""

  /** 手机号 */
  phone = ""

  /** 姓名 */
  real_name = ""

  /** 角色 */
  system_roles = []

  /** 用户名 */
  username = ""
}

class AccountDetail {
  /** 年龄<br/><br/>Returns:<br/>    int | None: 无出生日期时为None */
  age = undefined

  /** 出生日期 */
  born_date = ""

  /** 企业id */
  company = undefined

  /** 创建时间 */
  created_at = ""

  /** 距上一次登录天数<br/><br/>Returns:<br/>    int | None: 从未登录的情况为None */
  days_from_last_login = undefined

  /** 删除时间 */
  deleted_at = ""

  /** 邮箱 */
  email = ""

  /** 性别, choices: male-男、female-女、other-其他 */
  gender = undefined

  /** 性别显示 */
  gender_display = ""

  /** 主键 */
  id = ""

  /** 身份证号 */
  id_number = ""

  /** 是否是企业超管 */
  is_company_super_admin = false

  /** 是否是用户中心管理后台管理员 */
  is_staff = false

  /** 是否是用户中心管理后台超级管理员 */
  is_super_admin = false

  /** 最近一次登录时间 */
  last_login_at = ""

  /** 手机号 */
  phone = ""

  /** 姓名 */
  real_name = ""

  /** 状态, 当未关联至任何子系统时为禁用 */
  status = undefined

  /** 状态显示 */
  status_display = ""

  /** 系统列表 */
  systems = []

  /** 更新时间 */
  updated_at = ""

  /** 用户名 */
  username = ""
}

class AccountList {
  /** 年龄<br/><br/>Returns:<br/>    int | None: 无出生日期时为None */
  age = undefined

  /** 出生日期 */
  born_date = ""

  /** 企业id */
  company_id = ""

  /** 创建时间 */
  created_at = ""

  /** 距上一次登录天数<br/><br/>Returns:<br/>    int | None: 从未登录的情况为None */
  days_from_last_login = undefined

  /** 删除时间 */
  deleted_at = ""

  /** 邮箱 */
  email = ""

  /** 性别, choices: male-男、female-女、other-其他 */
  gender = undefined

  /** 性别显示 */
  gender_display = ""

  /** 主键 */
  id = ""

  /** 身份证号 */
  id_number = ""

  /** 是否是企业超管 */
  is_company_super_admin = false

  /** 是否是用户中心管理后台管理员 */
  is_staff = false

  /** 是否是用户中心管理后台超级管理员 */
  is_super_admin = false

  /** 最近一次登录时间 */
  last_login_at = ""

  /** 手机号 */
  phone = ""

  /** 姓名 */
  real_name = ""

  /** 状态, 当未关联至任何子系统时为禁用 */
  status = undefined

  /** 状态显示 */
  status_display = ""

  /** 更新时间 */
  updated_at = ""

  /** 用户名 */
  username = ""
}

class AccountUpdate {
  /** 出生日期 */
  born_date = ""

  /** 邮箱 */
  email = ""

  /** 性别, choices: male-男、female-女、other-其他 */
  gender = undefined

  /** 身份证号 */
  id_number = ""

  /** 是否是企业超管 */
  is_company_super_admin = false

  /** 手机号 */
  phone = ""

  /** 姓名 */
  real_name = ""

  /** 状态, 当未关联至任何子系统时为禁用 */
  status = undefined

  /** 角色 */
  system_roles = []

  /** 用户名 */
  username = ""
}

class AccountUpdateSelf {
  /** 出生日期 */
  born_date = ""

  /** 邮箱 */
  email = ""

  /** 性别, choices: male-男、female-女、other-其他 */
  gender = undefined

  /** 身份证号 */
  id_number = ""

  /** 手机号 */
  phone = ""

  /** 姓名 */
  real_name = ""

  /** 用户名 */
  username = ""
}

class ApplyStatusEnum {}

class ArchiveCheckOut {
  /** 系统唯一标识 */
  code = ""

  /** 系统名称 */
  label = ""

  /** 不可注销原因或注销失败的原因 */
  message = ""

  /** 注销或注销查询结果 */
  result = false
}

class AuthData {
  /** access_token */
  access_token = ""

  /** account */
  account = new AccountAuthDetail()

  /** expired_at */
  expired_at = ""

  /** token_type */
  token_type = ""
}

class Body_captcha_code_v1_other_common_captcha_code_post {
  /** 唯一标识, 手机号或邮箱 */
  identifier = ""

  /** 场景 */
  scene = undefined
}

class Body_create_company_register_apply_v1_company_apply_post {
  /** address */
  address = ""

  /** business_license */
  business_license = ""

  /** credit_code_tax_id */
  credit_code_tax_id = ""

  /** email */
  email = ""

  /** id_number */
  id_number = ""

  /** legal_representative_id_card_front */
  legal_representative_id_card_front = ""

  /** legal_representative_name */
  legal_representative_name = ""

  /** legal_representative_phone */
  legal_representative_phone = ""

  /** name */
  name = ""

  /** password */
  password = ""

  /** phone */
  phone = ""

  /** real_name */
  real_name = ""

  /** resources */
  resources = []

  /** submit_remark */
  submit_remark = ""

  /** systems */
  systems = []

  /** username */
  username = ""
}

class CaptchaCodeResponse {
  /** code */
  code = ""

  /** 验证码唯一标识 */
  unique_key = ""
}

class ChangePasswordCodeIn {
  /** 验证码 */
  code = ""

  /** 确认新密码 */
  confirm_password = ""

  /** 唯一标识, 用户名、手机号或者邮箱地址 */
  identifier = ""

  /** 新密码 */
  new_password = ""
}

class ChangePasswordIn {
  /** 确认新密码 */
  confirm_password = ""

  /** 新密码 */
  new_password = ""

  /** 旧密码 */
  old_password = ""
}

class CodeLoginPayload {
  /** 验证码 */
  code = ""
}

class CompanyDetail {
  /** 企业地址 */
  address = ""

  /** 营业执照 */
  business_license = ""

  /** 创建时间 */
  created_at = ""

  /** 统一社会信用代码/税号 */
  credit_code_tax_id = ""

  /** 删除时间 */
  deleted_at = ""

  /** 主键 */
  id = ""

  /** 法人身份证正面 */
  legal_representative_id_card_front = ""

  /** 法人姓名 */
  legal_representative_name = ""

  /** 法人手机号 */
  legal_representative_phone = ""

  /** 企业全称 */
  name = ""

  /** 状态, choices: enable-启用、disable-禁用、pending_review-待审核, 当未关联至任何子系统时或管理员操作为禁用 */
  status = undefined

  /** 状态显示 */
  status_display = ""

  /** 关联的子系统 */
  systems = []

  /** 更新时间 */
  updated_at = ""
}

class CompanyList {
  /** 企业地址 */
  address = ""

  /** 创建时间 */
  created_at = ""

  /** 统一社会信用代码/税号 */
  credit_code_tax_id = ""

  /** 删除时间 */
  deleted_at = ""

  /** 主键 */
  id = ""

  /** 企业全称 */
  name = ""

  /** 状态, choices: enable-启用、disable-禁用、pending_review-待审核, 当未关联至任何子系统时或管理员操作为禁用 */
  status = undefined

  /** 状态显示 */
  status_display = ""

  /** 更新时间 */
  updated_at = ""
}

class CompanyRegisterApplyDetail {
  /** 账户 */
  account_id = ""

  /** 企业地址 */
  address = ""

  /** 营业执照 */
  business_license = ""

  /** 企业 */
  company_id = ""

  /** 创建时间 */
  created_at = ""

  /** 统一社会信用代码/税号 */
  credit_code_tax_id = ""

  /** 删除时间 */
  deleted_at = ""

  /** 邮箱 */
  email = ""

  /** 主键 */
  id = ""

  /** 身份证号 */
  id_number = ""

  /** 法人身份证正面 */
  legal_representative_id_card_front = ""

  /** 法人姓名 */
  legal_representative_name = ""

  /** 法人手机号 */
  legal_representative_phone = ""

  /** 企业全称 */
  name = ""

  /** 手机号 */
  phone = ""

  /** 姓名 */
  real_name = ""

  /** 备注 */
  result_remark = ""

  /** 状态, choices: enable-启用、disable-禁用、pending_review-待审核 */
  status = undefined

  /** 状态显示 */
  status_display = ""

  /** 备注 */
  submit_remark = ""

  /** 可访问系统 */
  systems = []

  /** 更新时间 */
  updated_at = ""

  /** 用户名 */
  username = ""
}

class CompanyRegisterApplyList {
  /** 账户 */
  account_id = ""

  /** 企业地址 */
  address = ""

  /** 营业执照 */
  business_license = ""

  /** 企业 */
  company_id = ""

  /** 创建时间 */
  created_at = ""

  /** 统一社会信用代码/税号 */
  credit_code_tax_id = ""

  /** 删除时间 */
  deleted_at = ""

  /** 邮箱 */
  email = ""

  /** 主键 */
  id = ""

  /** 身份证号 */
  id_number = ""

  /** 法人身份证正面 */
  legal_representative_id_card_front = ""

  /** 法人姓名 */
  legal_representative_name = ""

  /** 法人手机号 */
  legal_representative_phone = ""

  /** 企业全称 */
  name = ""

  /** 手机号 */
  phone = ""

  /** 姓名 */
  real_name = ""

  /** 备注 */
  result_remark = ""

  /** 状态, choices: enable-启用、disable-禁用、pending_review-待审核 */
  status = undefined

  /** 状态显示 */
  status_display = ""

  /** 备注 */
  submit_remark = ""

  /** 更新时间 */
  updated_at = ""

  /** 用户名 */
  username = ""
}

class CompanySimple {
  /** 创建时间 */
  created_at = ""

  /** 删除时间 */
  deleted_at = ""

  /** 主键 */
  id = ""

  /** 企业全称 */
  name = ""

  /** 状态, choices: enable-启用、disable-禁用、pending_review-待审核, 当未关联至任何子系统时或管理员操作为禁用 */
  status = undefined

  /** 状态显示 */
  status_display = ""

  /** 更新时间 */
  updated_at = ""
}

class GenderEnum {}

class HTTPValidationError {
  /** detail */
  detail = []
}

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

class IdsSchema {
  /** ids */
  ids = []
}

class LoginSchema {
  /** 唯一标识, 用户名、手机号或者邮箱地址 */
  identifier = ""

  /** 登录方式, choices: password-密码、verify_code-验证码 */
  login_type = undefined

  /** 1. 密码登录: PasswordWithCaptchaLoginPayload; 2. 验证码登录: CodeLoginPayload */
  payload = undefined

  /** 登录终端或场景 */
  scene = ""
}

class LoginTypeEnum {}

class PageInfo {
  /** page */
  page = undefined

  /** size */
  size = undefined

  /** total_count */
  total_count = undefined

  /** total_page */
  total_page = undefined
}

class PageResp_AccountList_ {
  /** 业务响应代码, {0: '成功', -1: '失败', -2: '未授权', -3: '参数错误', -4: '请求频率限制', 500: '服务器内部错误', 403: '禁止访问'} */
  code = undefined

  /** data */
  data = []

  /** 响应提示信息 */
  message = ""

  /** page_info */
  page_info = new PageInfo()

  /** 响应时间 */
  response_time = ""

  /** 请求唯一标识 */
  trace_id = ""
}

class PageResp_CompanyList_ {
  /** 业务响应代码, {0: '成功', -1: '失败', -2: '未授权', -3: '参数错误', -4: '请求频率限制', 500: '服务器内部错误', 403: '禁止访问'} */
  code = undefined

  /** data */
  data = []

  /** 响应提示信息 */
  message = ""

  /** page_info */
  page_info = new PageInfo()

  /** 响应时间 */
  response_time = ""

  /** 请求唯一标识 */
  trace_id = ""
}

class PageResp_CompanyRegisterApplyList_ {
  /** 业务响应代码, {0: '成功', -1: '失败', -2: '未授权', -3: '参数错误', -4: '请求频率限制', 500: '服务器内部错误', 403: '禁止访问'} */
  code = undefined

  /** data */
  data = []

  /** 响应提示信息 */
  message = ""

  /** page_info */
  page_info = new PageInfo()

  /** 响应时间 */
  response_time = ""

  /** 请求唯一标识 */
  trace_id = ""
}

class PageResp_SystemCompanyRoleList_ {
  /** 业务响应代码, {0: '成功', -1: '失败', -2: '未授权', -3: '参数错误', -4: '请求频率限制', 500: '服务器内部错误', 403: '禁止访问'} */
  code = undefined

  /** data */
  data = []

  /** 响应提示信息 */
  message = ""

  /** page_info */
  page_info = new PageInfo()

  /** 响应时间 */
  response_time = ""

  /** 请求唯一标识 */
  trace_id = ""
}

class PageResp_SystemList_ {
  /** 业务响应代码, {0: '成功', -1: '失败', -2: '未授权', -3: '参数错误', -4: '请求频率限制', 500: '服务器内部错误', 403: '禁止访问'} */
  code = undefined

  /** data */
  data = []

  /** 响应提示信息 */
  message = ""

  /** page_info */
  page_info = new PageInfo()

  /** 响应时间 */
  response_time = ""

  /** 请求唯一标识 */
  trace_id = ""
}

class PasswordWithCaptchaLoginPayload {
  /** 验证码 */
  code = ""

  /** 密码 */
  password = ""

  /** 验证码唯一标识 */
  unique_key = ""
}

class ResourceLevelTreeBaseNode {
  /** 配置时是否可分配 */
  assignable = false

  /** 资源编码{parent}:{current} */
  code = ""

  /** 创建时间 */
  created_at = ""

  /** 是否可用 */
  enabled = false

  /** 前端类型, choices: General-通用、Web-网页端、Mobile-移动端、Ios-Ios、Android-Android */
  front_end_type = undefined

  /** 前端路由 */
  front_route = ""

  /** 图标 */
  icon = ""

  /** 主键 */
  id = ""

  /** 资源名称 */
  label = ""

  /** 排列序号 */
  order_num = undefined

  /** 父级 */
  parent_id = ""

  /** rely_on_id */
  rely_on_id = ""

  /** 资源类型, choices: add_tab-选项卡、dialog-弹窗、ajax-Ajax请求、link-链接 */
  sub_type = undefined

  /** 子类型显示 */
  sub_type_display = ""

  /** 系统id */
  system_id = ""

  /** 资源类型, choices: menu-菜单、button-按钮、api-接口 */
  type = undefined

  /** 类型显示 */
  type_display = ""
}

class ResourceLevelTreeNode {
  /** 配置时是否可分配 */
  assignable = false

  /** 子节点 */
  children = []

  /** 资源编码{parent}:{current} */
  code = ""

  /** 创建时间 */
  created_at = ""

  /** 是否可用 */
  enabled = false

  /** 前端类型, choices: General-通用、Web-网页端、Mobile-移动端、Ios-Ios、Android-Android */
  front_end_type = undefined

  /** 前端路由 */
  front_route = ""

  /** 图标 */
  icon = ""

  /** 主键 */
  id = ""

  /** 资源名称 */
  label = ""

  /** 排列序号 */
  order_num = undefined

  /** 父级 */
  parent_id = ""

  /** rely_on_id */
  rely_on_id = ""

  /** 资源类型, choices: add_tab-选项卡、dialog-弹窗、ajax-Ajax请求、link-链接 */
  sub_type = undefined

  /** 子类型显示 */
  sub_type_display = ""

  /** 系统id */
  system_id = ""

  /** 资源类型, choices: menu-菜单、button-按钮、api-接口 */
  type = undefined

  /** 类型显示 */
  type_display = ""
}

class Resp {
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

class RespFormatEnum {}

class Resp_AccountAuthDetail_ {
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

class Resp_AccountDetail_ {
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

class Resp_AuthData_ {
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

class Resp_CaptchaCodeResponse_ {
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

class Resp_CompanyDetail_ {
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

class Resp_CompanyRegisterApplyDetail_ {
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

class Resp_SystemCompanyRoleDetail_ {
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

class Resp_SystemDetail_ {
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

class Resp_SystemList_ {
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

class Resp_list_apis_http_routes_v1_auth_schemas_ArchiveCheckOut__ {
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

class Resp_list_storages_relational_pydantic_resource_ResourceLevelTreeNode__ {
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

class SendCodeScene {}

class SimpleSuccess {
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

class StatusEnum {}

class StatusWithApplyingEnum {}

class SystemCompanyRoleCreate {
  /** 名称 */
  label = ""

  /** 备注 */
  remark = ""

  /** 系统资源 */
  resources = []

  /** system_id */
  system_id = ""
}

class SystemCompanyRoleDetail {
  /** company */
  company = undefined

  /** 创建时间 */
  created_at = ""

  /** 删除时间 */
  deleted_at = ""

  /** 主键 */
  id = ""

  /** 名称 */
  label = ""

  /** 备注 */
  remark = ""

  /** 系统资源 */
  resources = []

  /** system */
  system = undefined

  /** 更新时间 */
  updated_at = ""
}

class SystemCompanyRoleList {
  /** company_id */
  company_id = ""

  /** 创建时间 */
  created_at = ""

  /** 删除时间 */
  deleted_at = ""

  /** 主键 */
  id = ""

  /** 名称 */
  label = ""

  /** 备注 */
  remark = ""

  /** system_id */
  system_id = ""

  /** 更新时间 */
  updated_at = ""
}

class SystemCompanyRoleUpdate {
  /** 名称 */
  label = ""

  /** 备注 */
  remark = ""

  /** 系统资源 */
  resources = []
}

class SystemDetail {
  /** 系统唯一标识 */
  code = ""

  /** 描述 */
  description = ""

  /** 图标 */
  icon = ""

  /** 主键 */
  id = ""

  /** 系统名称 */
  label = ""

  /** 登录可用终端或场景列表, choices: General-通用、Web-网页端、Mobile-移动端、Ios-Ios、Android-Android */
  scenes = undefined

  /** 状态, choices: enable-启用、disable-禁用 */
  status = undefined

  /** 状态显示 */
  status_display = ""
}

class SystemList {
  /** 系统唯一标识 */
  code = ""

  /** 描述 */
  description = ""

  /** 图标 */
  icon = ""

  /** 主键 */
  id = ""

  /** 是否内部系统 */
  internal = false

  /** 系统名称 */
  label = ""

  /** 登录可用终端或场景列表, choices: General-通用、Web-网页端、Mobile-移动端、Ios-Ios、Android-Android */
  scenes = undefined

  /** 状态, choices: enable-启用、disable-禁用 */
  status = undefined

  /** 状态显示 */
  status_display = ""
}

class SystemResourceSubTypeEnum {}

class SystemResourceTypeEnum {}

class SystemSimple {
  /** 系统唯一标识 */
  code = ""

  /** 主键 */
  id = ""

  /** 系统名称 */
  label = ""

  /** 状态, choices: enable-启用、disable-禁用 */
  status = undefined

  /** 状态显示 */
  status_display = ""
}

class SystemSimpleWithAvailableTag {
  /** 是否可访问 */
  accessible = false

  /** 系统唯一标识 */
  code = ""

  /** 主键 */
  id = ""

  /** 是否内部系统 */
  internal = false

  /** 系统名称 */
  label = ""

  /** 状态, choices: enable-启用、disable-禁用 */
  status = undefined

  /** 状态显示 */
  status_display = ""
}

class TokenSceneSchema {
  /** 登录终端或场景 */
  scene = ""
}

class TokenSceneTypeEnum {}

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

class ValidationError {
  /** loc */
  loc = undefined

  /** msg */
  msg = ""

  /** type */
  type = ""
}

export const userCenter = {
  AccountAuthDetail,
  AccountCreate,
  AccountDetail,
  AccountList,
  AccountUpdate,
  AccountUpdateSelf,
  ApplyStatusEnum,
  ArchiveCheckOut,
  AuthData,
  Body_captcha_code_v1_other_common_captcha_code_post,
  Body_create_company_register_apply_v1_company_apply_post,
  CaptchaCodeResponse,
  ChangePasswordCodeIn,
  ChangePasswordIn,
  CodeLoginPayload,
  CompanyDetail,
  CompanyList,
  CompanyRegisterApplyDetail,
  CompanyRegisterApplyList,
  CompanySimple,
  GenderEnum,
  HTTPValidationError,
  HealthCheck,
  IdsSchema,
  LoginSchema,
  LoginTypeEnum,
  PageInfo,
  PageResp_AccountList_,
  PageResp_CompanyList_,
  PageResp_CompanyRegisterApplyList_,
  PageResp_SystemCompanyRoleList_,
  PageResp_SystemList_,
  PasswordWithCaptchaLoginPayload,
  ResourceLevelTreeBaseNode,
  ResourceLevelTreeNode,
  Resp,
  RespFormatEnum,
  Resp_AccountAuthDetail_,
  Resp_AccountDetail_,
  Resp_AuthData_,
  Resp_CaptchaCodeResponse_,
  Resp_CompanyDetail_,
  Resp_CompanyRegisterApplyDetail_,
  Resp_HealthCheck_,
  Resp_SystemCompanyRoleDetail_,
  Resp_SystemDetail_,
  Resp_SystemList_,
  Resp_Union_dict__tuple_tuple___,
  Resp_list_apis_http_routes_v1_auth_schemas_ArchiveCheckOut__,
  Resp_list_apis_http_urls_UriItem__,
  Resp_list_storages_relational_pydantic_resource_ResourceLevelTreeNode__,
  SendCodeScene,
  SimpleSuccess,
  StatusEnum,
  StatusWithApplyingEnum,
  SystemCompanyRoleCreate,
  SystemCompanyRoleDetail,
  SystemCompanyRoleList,
  SystemCompanyRoleUpdate,
  SystemDetail,
  SystemList,
  SystemResourceSubTypeEnum,
  SystemResourceTypeEnum,
  SystemSimple,
  SystemSimpleWithAvailableTag,
  TokenSceneSchema,
  TokenSceneTypeEnum,
  UriItem,
  ValidationError,
}
