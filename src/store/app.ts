import { defineStore } from "pinia"
import store from "@/store"
import router, { resetRouter } from "@/router"

import {
  postAuthLoginV1 as login,
  type RequestDataType as LoginRequestDataType,
} from "@/services/userCenter/mods/authorization/postAuthLoginV1"

import { setToken, removeToken, getToken } from "@/utils/auth"

import { LoginResponse } from "./types"

type StateType = {
  token?: string
  refreshToken?: string
  user?: LoginResponse["account"]
}

export const useAppStore = defineStore({
  id: "burnish-app",
  state: (): StateType => ({
    token: getToken(),
    refreshToken: "",
    user: null,
  }),
  actions: {
    async getUserData() {
      if (this.user) return this.user
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
        withToken: false,
      })

      this.token = loginData.access_token
      this.user = loginData.account

      setToken({
        accessToken: loginData.access_token,
        username: loginData.account.username,
        expires: loginData.expired_at,
      })

      return loginData
    },

    /** 前端登出（不调用接口） */
    logOut() {
      this.token = null
      this.user = null

      removeToken()
      resetRouter()
      router.push("/login")
    },
  },
})

export function useAppStoreHook() {
  return useAppStore(store)
}
