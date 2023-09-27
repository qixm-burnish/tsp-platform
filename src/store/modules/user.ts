import { defineStore } from "pinia"
import { store } from "@/store"
import { userType } from "./types"
import { routerArrays } from "@/layout/types"
import { router, resetRouter } from "@/router"
import { storageSession } from "@pureadmin/utils"

import { login_v1_auth_login_post as loginByPassword } from "@/services/userCenter/mods/authorization/login_v1_auth_login_post"

import { getLogin, refreshTokenApi } from "@/api/user"
import { UserResult, RefreshTokenResult } from "@/api/user"
import { useMultiTagsStoreHook } from "@/store/modules/multiTags"
import { type DataInfo, setToken, removeToken, sessionKey } from "@/utils/auth"

export const useUserStore = defineStore({
  id: "pure-user",
  state: (): userType => ({
    // 用户名
    username: storageSession().getItem<DataInfo<number>>(sessionKey)?.username ?? "",
    // 页面级别权限
    roles: storageSession().getItem<DataInfo<number>>(sessionKey)?.roles ?? [],
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
    /** 登入 */
    async loginByUsername(data) {
      loginByPassword({
        identifier: data.phone,
        credential: data.password,
        login_type: "password",
      }).then(data => {
        console.log(data)
        // setToken(data.data)
      })
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
