import { defineStore } from "pinia"
import store from "@/store"

type StateType = {
  username?: string
  roles: Array<string>
  company_id?: string
  is_compony_super?: boolean
}

export const useUserStore = defineStore({
  id: "pure-user",
  state: (): StateType => ({
    // 用户名
    username: "",
    // 页面级别权限
    roles: [],
    //企业id
    company_id: "",
    // 企业超管
    is_compony_super: false,
  }),
  actions: {
    /** 存储用户名 */
    SET_USERNAME(username: string) {
      this.username = username
    },
    /** 存储角色 */
    SET_ROLES(roles: Array<string>) {
      this.roles = roles
    },
    /** 存储公司ID */
    SET_COMPANY_ID(company_id: string) {
      this.company_id = company_id
    },
    /** 存储公司超管信息 */
    SET_COMPANY_SUPER(is_super: boolean) {
      this.is_compony_super = is_super
    },

    async getUserData() {
      if (this.userData) return this.userData
    },

    /** 登入 */
    async login(type: string, params) {
      let _params: any

      if (type == "password") {
        _params = {
          identifier: params.username,
          login_type: "password",
          payload: {
            password: params.password,
            code: params.verifyCode,
            unique_key: params.verifyCodeKey,
          },
        }
      } else {
        _params = {
          identifier: params.phone,
          login_type: "verify_code",
          payload: {
            code: params.code,
          },
        }
      }

      const data = await this._login(_params)

      return data.account
    },
    /**
     * 创建企业入驻申请
     */
    async createCompanyApply() {},
  },
})

export function useUserStoreHook() {
  return useUserStore(store)
}
