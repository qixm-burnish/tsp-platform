import { defineStore } from "pinia"
import { store } from "@/store"
import { routerArrays } from "@/layout/types"
import { router, resetRouter } from "@/router"

import {
  postAuthLoginV1 as login,
  type RequestDataType as LoginRequestDataType,
} from "@/services/userCenter/mods/authorization/postAuthLoginV1"

import { useMultiTagsStoreHook } from "@/store/modules/multiTags"
import { setToken, removeToken, sessionKey } from "@/utils/auth"

import { LoginResponse, UserCenterAccount } from "../types"

type StateType = {
  username?: string
  userData?: UserCenterAccount
  roles: Array<string>
}

export const useUserStore = defineStore({
  id: "pure-user",
  state: (): StateType => ({
    // 用户名
    username: "",
    // 页面级别权限
    roles: [],
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
    async _login(data: LoginRequestDataType) {
      const loginData = await login<LoginResponse>({
        data,
      })

      setToken({
        accessToken: loginData.access_token,
        username: loginData.account.username,
        expires: loginData.expired_at,
      })

      return loginData
    },

    /** 前端登出（不调用接口） */
    logOut() {
      this.username = ""
      this.roles = []
      removeToken()
      useMultiTagsStoreHook().handleTags("equal", [...routerArrays])
      resetRouter()
      router.push("/login")
    },
  },
})

export function useUserStoreHook() {
  return useUserStore(store)
}
