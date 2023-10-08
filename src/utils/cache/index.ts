import { getStorageShortName, enableStorageEncryption, DEFAULT_CACHE_TIME } from "@/config/cache"
import { createStorage as create, CreateStorageParams } from "./storageCache"

export type Options = Partial<CreateStorageParams>

const createOptions = (storage: Storage, options: Options = {}): Options => {
  return {
    // No encryption in debug mode
    hasEncrypt: enableStorageEncryption,
    storage,
    prefixKey: getStorageShortName(),
    ...options,
  }
}

export const WebStorage = create(createOptions(sessionStorage))

export const createStorage = (storage: Storage = sessionStorage, options: Options = {}) => {
  return create(createOptions(storage, options))
}

export const createSessionStorage = (options: Options = {}) => {
  return createStorage(sessionStorage, { ...options, timeout: DEFAULT_CACHE_TIME })
}

export const createLocalStorage = (options: Options = {}) => {
  return createStorage(localStorage, { ...options, timeout: DEFAULT_CACHE_TIME })
}

export const PersistentLocalStorage = createLocalStorage()
export default WebStorage

export class BaseStorage<T> {
  constructor(private key: string, private storage: typeof WebStorage) {}
  set(value: T, expire?: number) {
    this.storage.set(this.key, value, expire)
  }

  get(def?: T): T {
    return this.storage.get(this.key, def)
  }

  remove() {
    this.storage.remove(this.key)
  }
}
