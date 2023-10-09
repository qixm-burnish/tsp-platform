import { watch, ref } from "vue"
import { useInterval } from "@vueuse/core"

export function useCountDown(max = 60) {
  const count = ref(0)
  const { counter, pause, resume } = useInterval(1000, { controls: true })
  pause()

  watch(
    () => counter.value,
    () => {
      count.value--
      if (count.value <= 0) {
        pause()
      }
    },
  )

  function start() {
    count.value = max
    resume()
  }

  function reset() {
    count.value = 0
  }

  return {
    count,
    start,
    reset,
  }
}
