type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value
}

declare namespace defs {
  export namespace userCenter {
    export class AccountAuthDetail {
      /** 年龄<br/><br/>Returns:<br/>    int | None: 无出生日期时为None */
      age?: number

      /** 出生日期 */
      born_date?: string

      /** 企业id */
      company: any

      /** 创建时间 */
      created_at: string

      /** 距上一次登录天数<br/><br/>Returns:<br/>    int | None: 从未登录的情况为None */
      days_from_last_login?: number

      /** 删除时间 */
      deleted_at?: string

      /** 邮箱 */
      email?: string

      /** 性别, choices: male-男、female-女、other-其他 */
      gender?: any

      /** 性别显示 */
      gender_display: string

      /** 主键 */
      id?: string

      /** 身份证号 */
      id_number?: string

      /** 是否是企业超管 */
      is_company_super_admin?: boolean

      /** 是否是用户中心管理后台管理员 */
      is_staff?: boolean

      /** 是否是用户中心管理后台超级管理员 */
      is_super_admin?: boolean

      /** 最近一次登录时间 */
      last_login_at?: string

      /** 手机号 */
      phone: string

      /** 姓名 */
      real_name?: string

      /** 状态, 当未关联至任何子系统时为禁用 */
      status?: any

      /** 状态显示 */
      status_display: string

      /** 系统列表 */
      systems?: Array<defs.userCenter.SystemSimpleWithAvailableTag>

      /** 更新时间 */
      updated_at: string

      /** 用户名 */
      username: string
    }

    export class AccountCreate {
      /** 出生日期 */
      born_date?: string

      /** 邮箱 */
      email?: string

      /** 性别, choices: male-男、female-女、other-其他 */
      gender?: any

      /** 身份证号 */
      id_number?: string

      /** 密码 */
      password: string

      /** 手机号 */
      phone: string

      /** 姓名 */
      real_name?: string

      /** 角色 */
      system_roles: Array<string>

      /** 用户名 */
      username: string
    }

    export class AccountDetail {
      /** 年龄<br/><br/>Returns:<br/>    int | None: 无出生日期时为None */
      age?: number

      /** 出生日期 */
      born_date?: string

      /** 企业id */
      company: any

      /** 创建时间 */
      created_at: string

      /** 距上一次登录天数<br/><br/>Returns:<br/>    int | None: 从未登录的情况为None */
      days_from_last_login?: number

      /** 删除时间 */
      deleted_at?: string

      /** 邮箱 */
      email?: string

      /** 性别, choices: male-男、female-女、other-其他 */
      gender?: any

      /** 性别显示 */
      gender_display: string

      /** 主键 */
      id?: string

      /** 身份证号 */
      id_number?: string

      /** 是否是企业超管 */
      is_company_super_admin?: boolean

      /** 是否是用户中心管理后台管理员 */
      is_staff?: boolean

      /** 是否是用户中心管理后台超级管理员 */
      is_super_admin?: boolean

      /** 最近一次登录时间 */
      last_login_at?: string

      /** 手机号 */
      phone: string

      /** 姓名 */
      real_name?: string

      /** 状态, 当未关联至任何子系统时为禁用 */
      status?: any

      /** 状态显示 */
      status_display: string

      /** 系统列表 */
      systems?: Array<defs.userCenter.SystemSimple>

      /** 更新时间 */
      updated_at: string

      /** 用户名 */
      username: string
    }

    export class AccountList {
      /** 年龄<br/><br/>Returns:<br/>    int | None: 无出生日期时为None */
      age?: number

      /** 出生日期 */
      born_date?: string

      /** 企业id */
      company_id: string

      /** 创建时间 */
      created_at: string

      /** 距上一次登录天数<br/><br/>Returns:<br/>    int | None: 从未登录的情况为None */
      days_from_last_login?: number

      /** 删除时间 */
      deleted_at?: string

      /** 邮箱 */
      email?: string

      /** 性别, choices: male-男、female-女、other-其他 */
      gender?: any

      /** 性别显示 */
      gender_display: string

      /** 主键 */
      id?: string

      /** 身份证号 */
      id_number?: string

      /** 是否是企业超管 */
      is_company_super_admin?: boolean

      /** 是否是用户中心管理后台管理员 */
      is_staff?: boolean

      /** 是否是用户中心管理后台超级管理员 */
      is_super_admin?: boolean

      /** 最近一次登录时间 */
      last_login_at?: string

      /** 手机号 */
      phone: string

      /** 姓名 */
      real_name?: string

      /** 状态, 当未关联至任何子系统时为禁用 */
      status?: any

      /** 状态显示 */
      status_display: string

      /** 更新时间 */
      updated_at: string

      /** 用户名 */
      username: string
    }

    export class AccountUpdate {
      /** 出生日期 */
      born_date?: string

      /** 邮箱 */
      email?: string

      /** 性别, choices: male-男、female-女、other-其他 */
      gender?: any

      /** 身份证号 */
      id_number?: string

      /** 是否是企业超管 */
      is_company_super_admin?: boolean

      /** 手机号 */
      phone?: string

      /** 姓名 */
      real_name?: string

      /** 状态, 当未关联至任何子系统时为禁用 */
      status?: any

      /** 角色 */
      system_roles?: Array<string>

      /** 用户名 */
      username?: string
    }

    export class AccountUpdateSelf {
      /** 出生日期 */
      born_date?: string

      /** 邮箱 */
      email?: string

      /** 性别, choices: male-男、female-女、other-其他 */
      gender?: any

      /** 身份证号 */
      id_number?: string

      /** 手机号 */
      phone?: string

      /** 姓名 */
      real_name?: string

      /** 用户名 */
      username?: string
    }

    export class ApplyStatusEnum {}

    export class ArchiveCheckOut {
      /** 系统唯一标识 */
      code: string

      /** 系统名称 */
      label: string

      /** 不可注销原因或注销失败的原因 */
      message?: string

      /** 注销或注销查询结果 */
      result: boolean
    }

    export class AuthData {
      /** access_token */
      access_token: string

      /** account */
      account: defs.userCenter.AccountAuthDetail

      /** expired_at */
      expired_at: string

      /** token_type */
      token_type: string
    }

    export class Body_captcha_code_v1_other_common_captcha_code_post {
      /** 唯一标识, 手机号或邮箱 */
      identifier: string

      /** 场景 */
      scene: any
    }

    export class Body_create_company_register_apply_v1_company_apply_post {
      /** address */
      address?: string

      /** business_license */
      business_license: string

      /** credit_code_tax_id */
      credit_code_tax_id: string

      /** email */
      email?: string

      /** id_number */
      id_number?: string

      /** legal_representative_id_card_front */
      legal_representative_id_card_front: string

      /** legal_representative_name */
      legal_representative_name?: string

      /** legal_representative_phone */
      legal_representative_phone?: string

      /** name */
      name: string

      /** password */
      password: string

      /** phone */
      phone: string

      /** real_name */
      real_name?: string

      /** resources */
      resources?: Array<string>

      /** submit_remark */
      submit_remark?: string

      /** systems */
      systems: Array<string>

      /** username */
      username: string
    }

    export class CaptchaCodeResponse {
      /** code */
      code: string

      /** 验证码唯一标识 */
      unique_key: string
    }

    export class ChangePasswordCodeIn {
      /** 验证码 */
      code: string

      /** 确认新密码 */
      confirm_password: string

      /** 唯一标识, 用户名、手机号或者邮箱地址 */
      identifier: string

      /** 新密码 */
      new_password: string
    }

    export class ChangePasswordIn {
      /** 确认新密码 */
      confirm_password: string

      /** 新密码 */
      new_password: string

      /** 旧密码 */
      old_password: string
    }

    export class CodeLoginPayload {
      /** 验证码 */
      code: string
    }

    export class CompanyList {
      /** 企业地址 */
      address?: string

      /** 创建时间 */
      created_at: string

      /** 统一社会信用代码/税号 */
      credit_code_tax_id: string

      /** 删除时间 */
      deleted_at?: string

      /** 主键 */
      id?: string

      /** 企业全称 */
      name: string

      /** 状态, choices: enable-启用、disable-禁用、pending_review-待审核, 当未关联至任何子系统时或管理员操作为禁用 */
      status?: any

      /** 状态显示 */
      status_display: string

      /** 更新时间 */
      updated_at: string
    }

    export class CompanyRegisterApplyDetail {
      /** 账户 */
      account_id?: string

      /** 企业地址 */
      address?: string

      /** 营业执照 */
      business_license: string

      /** 企业 */
      company_id?: string

      /** 创建时间 */
      created_at: string

      /** 统一社会信用代码/税号 */
      credit_code_tax_id: string

      /** 删除时间 */
      deleted_at?: string

      /** 邮箱 */
      email?: string

      /** 主键 */
      id?: string

      /** 身份证号 */
      id_number?: string

      /** 法人身份证正面 */
      legal_representative_id_card_front: string

      /** 法人姓名 */
      legal_representative_name?: string

      /** 法人手机号 */
      legal_representative_phone?: string

      /** 企业全称 */
      name: string

      /** 手机号 */
      phone: string

      /** 姓名 */
      real_name?: string

      /** 备注 */
      result_remark?: string

      /** 状态, choices: enable-启用、disable-禁用、pending_review-待审核 */
      status?: any

      /** 状态显示 */
      status_display: string

      /** 备注 */
      submit_remark?: string

      /** 可访问系统 */
      systems?: Array<defs.userCenter.SystemSimple>

      /** 更新时间 */
      updated_at: string

      /** 用户名 */
      username: string
    }

    export class CompanyRegisterApplyList {
      /** 账户 */
      account_id?: string

      /** 企业地址 */
      address?: string

      /** 营业执照 */
      business_license: string

      /** 企业 */
      company_id?: string

      /** 创建时间 */
      created_at: string

      /** 统一社会信用代码/税号 */
      credit_code_tax_id: string

      /** 删除时间 */
      deleted_at?: string

      /** 邮箱 */
      email?: string

      /** 主键 */
      id?: string

      /** 身份证号 */
      id_number?: string

      /** 法人身份证正面 */
      legal_representative_id_card_front: string

      /** 法人姓名 */
      legal_representative_name?: string

      /** 法人手机号 */
      legal_representative_phone?: string

      /** 企业全称 */
      name: string

      /** 手机号 */
      phone: string

      /** 姓名 */
      real_name?: string

      /** 备注 */
      result_remark?: string

      /** 状态, choices: enable-启用、disable-禁用、pending_review-待审核 */
      status?: any

      /** 状态显示 */
      status_display: string

      /** 备注 */
      submit_remark?: string

      /** 更新时间 */
      updated_at: string

      /** 用户名 */
      username: string
    }

    export class CompanySimple {
      /** 创建时间 */
      created_at: string

      /** 删除时间 */
      deleted_at?: string

      /** 主键 */
      id?: string

      /** 企业全称 */
      name: string

      /** 状态, choices: enable-启用、disable-禁用、pending_review-待审核, 当未关联至任何子系统时或管理员操作为禁用 */
      status?: any

      /** 状态显示 */
      status_display: string

      /** 更新时间 */
      updated_at: string
    }

    export class GenderEnum {}

    export class HTTPValidationError {
      /** detail */
      detail?: Array<defs.userCenter.ValidationError>
    }

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

    export class LoginSchema {
      /** 唯一标识, 用户名、手机号或者邮箱地址 */
      identifier: string

      /** 登录方式, choices: password-密码、verify_code-验证码 */
      login_type?: any

      /** 1. 密码登录: PasswordWithCaptchaLoginPayload; 2. 验证码登录: CodeLoginPayload */
      payload: any

      /** 登录终端或场景 */
      scene?: string
    }

    export class LoginTypeEnum {}

    export class PageInfo {
      /** page */
      page: number

      /** size */
      size: number

      /** total_count */
      total_count: number

      /** total_page */
      total_page: number
    }

    export class PageResp_AccountList_ {
      /** 业务响应代码, {0: '成功', -1: '失败', -2: '未授权', -3: '参数错误', -4: '请求频率限制', 500: '服务器内部错误', 403: '禁止访问'} */
      code?: number

      /** data */
      data: Array<defs.userCenter.AccountList>

      /** 响应提示信息 */
      message?: string

      /** page_info */
      page_info: defs.userCenter.PageInfo

      /** 响应时间 */
      response_time?: string

      /** 请求唯一标识 */
      trace_id?: string
    }

    export class PageResp_CompanyList_ {
      /** 业务响应代码, {0: '成功', -1: '失败', -2: '未授权', -3: '参数错误', -4: '请求频率限制', 500: '服务器内部错误', 403: '禁止访问'} */
      code?: number

      /** data */
      data: Array<defs.userCenter.CompanyList>

      /** 响应提示信息 */
      message?: string

      /** page_info */
      page_info: defs.userCenter.PageInfo

      /** 响应时间 */
      response_time?: string

      /** 请求唯一标识 */
      trace_id?: string
    }

    export class PageResp_CompanyRegisterApplyList_ {
      /** 业务响应代码, {0: '成功', -1: '失败', -2: '未授权', -3: '参数错误', -4: '请求频率限制', 500: '服务器内部错误', 403: '禁止访问'} */
      code?: number

      /** data */
      data: Array<defs.userCenter.CompanyRegisterApplyList>

      /** 响应提示信息 */
      message?: string

      /** page_info */
      page_info: defs.userCenter.PageInfo

      /** 响应时间 */
      response_time?: string

      /** 请求唯一标识 */
      trace_id?: string
    }

    export class PageResp_SystemCompanyRoleList_ {
      /** 业务响应代码, {0: '成功', -1: '失败', -2: '未授权', -3: '参数错误', -4: '请求频率限制', 500: '服务器内部错误', 403: '禁止访问'} */
      code?: number

      /** data */
      data: Array<defs.userCenter.SystemCompanyRoleList>

      /** 响应提示信息 */
      message?: string

      /** page_info */
      page_info: defs.userCenter.PageInfo

      /** 响应时间 */
      response_time?: string

      /** 请求唯一标识 */
      trace_id?: string
    }

    export class PageResp_SystemList_ {
      /** 业务响应代码, {0: '成功', -1: '失败', -2: '未授权', -3: '参数错误', -4: '请求频率限制', 500: '服务器内部错误', 403: '禁止访问'} */
      code?: number

      /** data */
      data: Array<defs.userCenter.SystemList>

      /** 响应提示信息 */
      message?: string

      /** page_info */
      page_info: defs.userCenter.PageInfo

      /** 响应时间 */
      response_time?: string

      /** 请求唯一标识 */
      trace_id?: string
    }

    export class PasswordWithCaptchaLoginPayload {
      /** 验证码 */
      code: string

      /** 密码 */
      password: string

      /** 验证码唯一标识 */
      unique_key: string
    }

    export class ResourceLevelTreeBaseNode {
      /** 配置时是否可分配 */
      assignable?: boolean

      /** 资源编码{parent}:{current} */
      code: string

      /** 创建时间 */
      created_at: string

      /** 是否可用 */
      enabled?: boolean

      /** 前端类型, choices: General-通用、Web-网页端、Mobile-移动端、Ios-Ios、Android-Android */
      front_end_type?: any

      /** 前端路由 */
      front_route?: string

      /** 图标 */
      icon?: string

      /** 主键 */
      id?: string

      /** 资源名称 */
      label: string

      /** 排列序号 */
      order_num?: number

      /** 父级 */
      parent_id?: string

      /** rely_on_id */
      rely_on_id?: string

      /** 资源类型, choices: add_tab-选项卡、dialog-弹窗、ajax-Ajax请求、link-链接 */
      sub_type: any

      /** 子类型显示 */
      sub_type_display?: string

      /** 系统id */
      system_id: string

      /** 资源类型, choices: menu-菜单、button-按钮、api-接口 */
      type: any

      /** 类型显示 */
      type_display: string
    }

    export class ResourceLevelTreeNode {
      /** 配置时是否可分配 */
      assignable?: boolean

      /** 子节点 */
      children?: Array<defs.userCenter.ResourceLevelTreeNode>

      /** 资源编码{parent}:{current} */
      code: string

      /** 创建时间 */
      created_at: string

      /** 是否可用 */
      enabled?: boolean

      /** 前端类型, choices: General-通用、Web-网页端、Mobile-移动端、Ios-Ios、Android-Android */
      front_end_type?: any

      /** 前端路由 */
      front_route?: string

      /** 图标 */
      icon?: string

      /** 主键 */
      id?: string

      /** 资源名称 */
      label: string

      /** 排列序号 */
      order_num?: number

      /** 父级 */
      parent_id?: string

      /** rely_on_id */
      rely_on_id?: string

      /** 资源类型, choices: add_tab-选项卡、dialog-弹窗、ajax-Ajax请求、link-链接 */
      sub_type: any

      /** 子类型显示 */
      sub_type_display?: string

      /** 系统id */
      system_id: string

      /** 资源类型, choices: menu-菜单、button-按钮、api-接口 */
      type: any

      /** 类型显示 */
      type_display: string
    }

    export class RespFormatEnum {}

    export class Resp_AccountAuthDetail_ {
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

    export class Resp_AccountDetail_ {
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

    export class Resp_AuthData_ {
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

    export class Resp_CaptchaCodeResponse_ {
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

    export class Resp_CompanyList_ {
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

    export class Resp_CompanyRegisterApplyDetail_ {
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

    export class Resp_SystemCompanyRoleDetail_ {
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

    export class Resp_SystemDetail_ {
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

    export class Resp_SystemList_ {
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

    export class Resp_list_apis_http_routes_v1_auth_schemas_ArchiveCheckOut__ {
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

    export class Resp_list_storages_relational_pydantic_resource_ResourceLevelTreeNode__ {
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

    export class SendCodeScene {}

    export class SimpleSuccess {
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

    export class StatusEnum {}

    export class StatusWithApplyingEnum {}

    export class SystemCompanyRoleCreate {
      /** 名称 */
      label: string

      /** 备注 */
      remark?: string

      /** 系统资源 */
      resources: Array<string>

      /** system_id */
      system_id: string
    }

    export class SystemCompanyRoleDetail {
      /** company */
      company: any

      /** 创建时间 */
      created_at: string

      /** 删除时间 */
      deleted_at?: string

      /** 主键 */
      id?: string

      /** 名称 */
      label: string

      /** 备注 */
      remark?: string

      /** 系统资源 */
      resources?: Array<defs.userCenter.ResourceLevelTreeBaseNode>

      /** system */
      system: any

      /** 更新时间 */
      updated_at: string
    }

    export class SystemCompanyRoleList {
      /** company_id */
      company_id: string

      /** 创建时间 */
      created_at: string

      /** 删除时间 */
      deleted_at?: string

      /** 主键 */
      id?: string

      /** 名称 */
      label: string

      /** 备注 */
      remark?: string

      /** system_id */
      system_id: string

      /** 更新时间 */
      updated_at: string
    }

    export class SystemCompanyRoleUpdate {
      /** 名称 */
      label?: string

      /** 备注 */
      remark?: string

      /** 系统资源 */
      resources?: Array<string>
    }

    export class SystemDetail {
      /** 系统唯一标识 */
      code: string

      /** 描述 */
      description: string

      /** 图标 */
      icon: string

      /** 主键 */
      id?: string

      /** 系统名称 */
      label: string

      /** 登录可用终端或场景列表, choices: General-通用、Web-网页端、Mobile-移动端、Ios-Ios、Android-Android */
      scenes?: any

      /** 状态, choices: enable-启用、disable-禁用 */
      status?: any

      /** 状态显示 */
      status_display: string
    }

    export class SystemList {
      /** 系统唯一标识 */
      code: string

      /** 描述 */
      description: string

      /** 图标 */
      icon: string

      /** 主键 */
      id?: string

      /** 是否内部系统 */
      internal?: boolean

      /** 系统名称 */
      label: string

      /** 登录可用终端或场景列表, choices: General-通用、Web-网页端、Mobile-移动端、Ios-Ios、Android-Android */
      scenes?: any

      /** 状态, choices: enable-启用、disable-禁用 */
      status?: any

      /** 状态显示 */
      status_display: string
    }

    export class SystemResourceSubTypeEnum {}

    export class SystemResourceTypeEnum {}

    export class SystemSimple {
      /** 系统唯一标识 */
      code: string

      /** 主键 */
      id?: string

      /** 系统名称 */
      label: string

      /** 状态, choices: enable-启用、disable-禁用 */
      status?: any

      /** 状态显示 */
      status_display: string
    }

    export class SystemSimpleWithAvailableTag {
      /** 是否可访问 */
      accessible?: boolean

      /** 系统唯一标识 */
      code: string

      /** 主键 */
      id?: string

      /** 是否内部系统 */
      internal?: boolean

      /** 系统名称 */
      label: string

      /** 状态, choices: enable-启用、disable-禁用 */
      status?: any

      /** 状态显示 */
      status_display: string
    }

    export class TokenSceneSchema {
      /** 登录终端或场景 */
      scene?: string
    }

    export class TokenSceneTypeEnum {}

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

    export class ValidationError {
      /** loc */
      loc: array

      /** msg */
      msg: string

      /** type */
      type: string
    }
  }
}

declare namespace API {
  export namespace userCenter {
    /**
     * 账户信息管理
     */
    export namespace account {
      /**
        * 个人信息
获取个人信息
        * /v1/account/myself
        */
      export namespace getAccountMyselfV1 {
        export class Params {}

        export type Response = defs.userCenter.Resp_AccountAuthDetail_
        export const init: Response
        export function request(params: Params): Promise<defs.userCenter.Resp_AccountAuthDetail_>
      }

      /**
        * 个人信息
修改个人信息
        * /v1/account/myself
        */
      export namespace postAccountMyselfV1 {
        export class Params {}

        export type Response = defs.userCenter.Resp_AccountAuthDetail_
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.userCenter.AccountUpdateSelf,
        ): Promise<defs.userCenter.Resp_AccountAuthDetail_>
      }

      /**
       * 用户列表
       * /v1/account/self
       */
      export namespace getAccountSelfV1 {
        export class Params {
          /** 用户名 */
          username?: string
          /** 手机号 */
          phone?: string
          /** 角色id */
          roles__id__in?: Array<string>
          /** 状态, choices: enable-启用、disable-禁用 */
          status?: any
          /** 状态, choices: male-男、female-女、other-其他 */
          gender?: any
          /** 第几页 */
          page?: number
          /** 每页数量 */
          size?: number
          /** 搜索关键字. 匹配字段: username */
          search?: string
          /** 排序字段. 升序保持原字段名, 降序增加前缀-. 可选字段: created_at */
          order_by?: Array<string>
          /** 指定返回字段. 可选字段: id, created_at, updated_at, deleted_at, username, phone, email, gender, real_name, id_number, born_date, last_login_at, status, is_staff, is_super_admin, is_company_super_admin, company_id, days_from_last_login, status_display, gender_display, age */
          selected_fields?: Array<string>
        }

        export type Response = defs.userCenter.PageResp_AccountList_
        export const init: Response
        export function request(params: Params): Promise<defs.userCenter.PageResp_AccountList_>
      }

      /**
       * 创建用户
       * /v1/account/self
       */
      export namespace postAccountSelfV1 {
        export class Params {}

        export type Response = defs.userCenter.AccountDetail
        export const init: Response
        export function request(params: Params, bodyParams: defs.userCenter.AccountCreate): Promise<defs.userCenter.AccountDetail>
      }

      /**
       * 用户详情
       * /v1/account/self/{id}
       */
      export namespace getAccountSelfByIdV1 {
        export class Params {
          /** id */
          id: string
        }

        export type Response = defs.userCenter.Resp_AccountDetail_
        export const init: Response
        export function request(params: Params): Promise<defs.userCenter.Resp_AccountDetail_>
      }

      /**
       * 更新用户
       * /v1/account/self/{id}
       */
      export namespace putAccountSelfByIdV1 {
        export class Params {}

        export type Response = defs.userCenter.AccountDetail
        export const init: Response
        export function request(params: Params, bodyParams: defs.userCenter.AccountUpdate): Promise<defs.userCenter.AccountDetail>
      }
    }

    /**
     * 授权相关
     */
    export namespace authorization {
      /**
        * 注销
注销
        * /v1/auth/archive
        */
      export namespace postAuthArchiveV1 {
        export class Params {}

        export type Response = defs.userCenter.Resp_list_apis_http_routes_v1_auth_schemas_ArchiveCheckOut__
        export const init: Response
        export function request(
          params: Params,
          bodyParams: Array<string>,
        ): Promise<defs.userCenter.Resp_list_apis_http_routes_v1_auth_schemas_ArchiveCheckOut__>
      }

      /**
        * 登录
登录接口
        * /v1/auth/login
        */
      export namespace postAuthLoginV1 {
        export class Params {}

        export type Response = defs.userCenter.Resp_AuthData_
        export const init: Response
        export function request(params: Params, bodyParams: defs.userCenter.LoginSchema): Promise<defs.userCenter.Resp_AuthData_>
      }

      /**
        * 登出
退出登录接口
        * /v1/auth/logout
        */
      export namespace postAuthLogoutV1 {
        export class Params {}

        export type Response = defs.userCenter.SimpleSuccess
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.userCenter.TokenSceneSchema,
        ): Promise<defs.userCenter.SimpleSuccess>
      }

      /**
        * 修改密码
已登录通过旧密码修改密码
        * /v1/auth/password/change
        */
      export namespace postAuthPasswordChangeV1 {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params, bodyParams: defs.userCenter.ChangePasswordIn): Promise<any>
      }

      /**
        * 修改密码
通过验证码修改密码
        * /v1/auth/password/code-change
        */
      export namespace postAuthPasswordCodeChangeV1 {
        export class Params {}

        export type Response = any
        export const init: Response
        export function request(params: Params, bodyParams: defs.userCenter.ChangePasswordCodeIn): Promise<any>
      }

      /**
        * 刷新子系统token
刷新用户可访问子系统的token, 当前系统的当前场景为刷新操作, 会导致旧token失效
        * /v1/auth/token/refresh
        */
      export namespace postAuthTokenRefreshV1 {
        export class Params {}

        export type Response = defs.userCenter.Resp_AuthData_
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.userCenter.TokenSceneSchema,
        ): Promise<defs.userCenter.Resp_AuthData_>
      }
    }

    /**
     * 企业信息管理
     */
    export namespace company {
      /**
       * 企业入驻申请列表
       * /v1/company/apply
       */
      export namespace getCompanyApplyV1 {
        export class Params {
          /** 第几页 */
          page?: number
          /** 每页数量 */
          size?: number
          /** 搜索关键字. 匹配字段: name, username */
          search?: string
          /** 排序字段. 升序保持原字段名, 降序增加前缀-. 无可排序字段 */
          order_by?: Array<string>
          /** 指定返回字段. 可选字段: id, created_at, updated_at, deleted_at, name, credit_code_tax_id, legal_representative_name, legal_representative_phone, legal_representative_id_card_front, business_license, address, username, phone, email, real_name, id_number, status, submit_remark, result_remark, company_id, account_id, status_display */
          selected_fields?: Array<string>
        }

        export type Response = defs.userCenter.PageResp_CompanyRegisterApplyList_
        export const init: Response
        export function request(params: Params): Promise<defs.userCenter.PageResp_CompanyRegisterApplyList_>
      }

      /**
        * 企业入驻申请创建
企业入驻申请创建
        * /v1/company/apply
        */
      export namespace postCompanyApplyV1 {
        export class Params {}

        export type Response = defs.userCenter.Resp_CompanyRegisterApplyDetail_
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.userCenter.Body_create_company_register_apply_v1_company_apply_post,
        ): Promise<defs.userCenter.Resp_CompanyRegisterApplyDetail_>
      }

      /**
       * 企业入驻申请详情
       * /v1/company/apply/{id}
       */
      export namespace getCompanyApplyByIdV1 {
        export class Params {
          /** id */
          id: string
        }

        export type Response = defs.userCenter.Resp_CompanyRegisterApplyDetail_
        export const init: Response
        export function request(params: Params): Promise<defs.userCenter.Resp_CompanyRegisterApplyDetail_>
      }

      /**
       * 企业列表
       * /v1/company/self
       */
      export namespace getCompanySelfV1 {
        export class Params {
          /** 第几页 */
          page?: number
          /** 每页数量 */
          size?: number
          /** 搜索关键字. 匹配字段: name */
          search?: string
          /** 排序字段. 升序保持原字段名, 降序增加前缀-. 无可排序字段 */
          order_by?: Array<string>
          /** 指定返回字段. 可选字段: id, created_at, updated_at, deleted_at, name, credit_code_tax_id, address, status, status_display */
          selected_fields?: Array<string>
        }

        export type Response = defs.userCenter.PageResp_CompanyList_
        export const init: Response
        export function request(params: Params): Promise<defs.userCenter.PageResp_CompanyList_>
      }

      /**
       * 企业详情
       * /v1/company/self/{id}
       */
      export namespace getCompanySelfByIdV1 {
        export class Params {
          /** id */
          id: string
        }

        export type Response = defs.userCenter.Resp_CompanyList_
        export const init: Response
        export function request(params: Params): Promise<defs.userCenter.Resp_CompanyList_>
      }
    }

    /**
     * 其他
     */
    export namespace other {
      /**
        * 发送验证码
发送验证码, phone/email + scene组成unique_key
        * /v1/other/common/captcha/code
        */
      export namespace postOtherCommonCaptchaCodeV1 {
        export class Params {}

        export type Response = defs.userCenter.Resp_CaptchaCodeResponse_
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.userCenter.Body_captcha_code_v1_other_common_captcha_code_post,
        ): Promise<defs.userCenter.Resp_CaptchaCodeResponse_>
      }

      /**
        * 图片验证码
图片验证码, unique_key附带在响应头中
        * /v1/other/common/captcha/image
        */
      export namespace getOtherCommonCaptchaImageV1 {
        export class Params {
          /** 场景 */
          scene: any
        }

        export type Response = any
        export const init: Response
        export function request(params: Params): Promise<any>
      }

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

        export type Response = defs.userCenter.Resp_Union_dict__tuple_tuple___
        export const init: Response
        export function request(params: Params): Promise<defs.userCenter.Resp_Union_dict__tuple_tuple___>
      }
    }

    /**
     * 资源管理
     */
    export namespace resource {
      /**
        * 获取系统的全层级菜单
获取系统的全层级菜单
        * /v1/resource/system
        */
      export namespace getResourceSystemV1 {
        export class Params {
          /** system_id */
          system_id: string
        }

        export type Response = defs.userCenter.Resp_list_storages_relational_pydantic_resource_ResourceLevelTreeNode__
        export const init: Response
        export function request(
          params: Params,
        ): Promise<defs.userCenter.Resp_list_storages_relational_pydantic_resource_ResourceLevelTreeNode__>
      }
    }

    /**
     * 角色管理
     */
    export namespace role {
      /**
       * 子系统角色列表
       * /v1/role/self
       */
      export namespace getRoleSelfV1 {
        export class Params {
          /** 第几页 */
          page?: number
          /** 每页数量 */
          size?: number
          /** 搜索关键字. 匹配字段: label */
          search?: string
          /** 排序字段. 升序保持原字段名, 降序增加前缀-. 无可排序字段 */
          order_by?: Array<string>
          /** 指定返回字段. 可选字段: id, created_at, updated_at, deleted_at, label, remark, company_id, system_id */
          selected_fields?: Array<string>
        }

        export type Response = defs.userCenter.PageResp_SystemCompanyRoleList_
        export const init: Response
        export function request(params: Params): Promise<defs.userCenter.PageResp_SystemCompanyRoleList_>
      }

      /**
       * 创建子系统角色
       * /v1/role/self
       */
      export namespace postRoleSelfV1 {
        export class Params {}

        export type Response = defs.userCenter.Resp_SystemCompanyRoleDetail_
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.userCenter.SystemCompanyRoleCreate,
        ): Promise<defs.userCenter.Resp_SystemCompanyRoleDetail_>
      }

      /**
       * 子系统角色详情
       * /v1/role/self/{id}
       */
      export namespace getRoleSelfByIdV1 {
        export class Params {
          /** id */
          id: string
        }

        export type Response = defs.userCenter.Resp_SystemCompanyRoleDetail_
        export const init: Response
        export function request(params: Params): Promise<defs.userCenter.Resp_SystemCompanyRoleDetail_>
      }

      /**
       * 更新子系统角色
       * /v1/role/self/{id}
       */
      export namespace putRoleSelfByIdV1 {
        export class Params {}

        export type Response = defs.userCenter.SystemCompanyRoleDetail
        export const init: Response
        export function request(
          params: Params,
          bodyParams: defs.userCenter.SystemCompanyRoleUpdate,
        ): Promise<defs.userCenter.SystemCompanyRoleDetail>
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

        export type Response = defs.userCenter.Resp_HealthCheck_
        export const init: Response
        export function request(params: Params): Promise<defs.userCenter.Resp_HealthCheck_>
      }

      /**
       * 全部uri
       * /uri-list
       */
      export namespace getUriList {
        export class Params {}

        export type Response = defs.userCenter.Resp_list_apis_http_urls_UriItem__
        export const init: Response
        export function request(params: Params): Promise<defs.userCenter.Resp_list_apis_http_urls_UriItem__>
      }
    }

    /**
     * 系统管理
     */
    export namespace system {
      /**
        * 已授权系统
获取用户已授权系统
        * /v1/system/myself
        */
      export namespace getSystemMyselfV1 {
        export class Params {}

        export type Response = defs.userCenter.Resp_SystemList_
        export const init: Response
        export function request(params: Params): Promise<defs.userCenter.Resp_SystemList_>
      }

      /**
       * 子系统列表
       * /v1/system/self
       */
      export namespace getSystemSelfV1 {
        export class Params {
          /** 是否内部 */
          internal?: boolean
          /** 状态, choices: enable-启用、disable-禁用 */
          status?: any
          /** 第几页 */
          page?: number
          /** 每页数量 */
          size?: number
          /** 搜索关键字. 匹配字段: label */
          search?: string
          /** 排序字段. 升序保持原字段名, 降序增加前缀-. 无可排序字段 */
          order_by?: Array<string>
          /** 指定返回字段. 可选字段: id, code, label, scenes, status, internal, icon, description, status_display */
          selected_fields?: Array<string>
        }

        export type Response = defs.userCenter.PageResp_SystemList_
        export const init: Response
        export function request(params: Params): Promise<defs.userCenter.PageResp_SystemList_>
      }

      /**
       * 子系统详情
       * /v1/system/self/{id}
       */
      export namespace getSystemSelfByIdV1 {
        export class Params {
          /** id */
          id: string
        }

        export type Response = defs.userCenter.Resp_SystemDetail_
        export const init: Response
        export function request(params: Params): Promise<defs.userCenter.Resp_SystemDetail_>
      }
    }
  }
}
