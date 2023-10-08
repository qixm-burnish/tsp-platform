import { PersistentLocalStorage, BaseStorage } from "./cache"
import { LOGIN_DATA } from "@/config/cache"

type LoginDataType = {
  username: string
  password: string
}

export const loginData = new BaseStorage<LoginDataType>(LOGIN_DATA, PersistentLocalStorage)
