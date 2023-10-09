import { defineStore } from "pinia"
import store from "@/store"

type StateType = {
  count: number
}

export const useHomeStore = defineStore({
  id: "home",
  state: (): StateType => ({
    count: 0,
  }),
  getters: {
    getCount(state) {
      return state.count
    },
  },
  actions: {
    increaseCount(value = 1) {
      this.count += value
    },
    decreaseCount(value = 1) {
      this.count -= value
    },
  },
})

export default function useHomeStoreHook() {
  return useHomeStore(store)
}
