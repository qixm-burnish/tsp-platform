<script lang="ts" setup>
import { ref, computed, watch, useAttrs } from "vue"
import { ElMessage } from "element-plus"
// import { auth_send_code_create as sendCode } from "@/services/mods/auth/auth_send_code_create"
import { useCountDown } from "@/hooks/useCountDown"
import { phoneReg } from "@/utils/regex"

type IndexProps = {
  sence?: number
  phone?: string
  visible?: boolean
  title?: string
}

type DialogEmit = {
  (event: "click"): void
}

const props = withDefaults(defineProps<IndexProps>(), {
  title: "发送验证码",
})
const attrs = useAttrs()
const loading = ref(false)
const { count, start, reset } = useCountDown(60)
const disabled = computed(() => count.value > 0 || loading.value)
const emit = defineEmits<DialogEmit>()

async function onSendCode() {
  if (!props.phone) {
    ElMessage.warning("请输入手机号")
    return
  }

  if (!phoneReg.test(props.phone)) {
    ElMessage.warning("请输入正确的手机号")
    return
  }

  emit("click")

  loading.value = true
  try {
    // await sendCode({ bodyParams: { phone: props.phone, scene_type: props.sence as any } })
    loading.value = false
    start()
  } catch (err) {
    loading.value = false
  }
}

watch(
  () => props.visible,
  newValue => {
    if (newValue === false) {
      reset()
    }
  },
)
</script>
<template>
  <ElButton type="primary" v-bind="attrs" :disabled="disabled" @click="onSendCode">
    {{ title + (count > 0 ? `(${count}s)` : "") }}
  </ElButton>
</template>
