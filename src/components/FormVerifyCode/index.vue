<script setup lang="ts">
import { useModel } from "vue"

import VerifyCodeButton from "@/components/VerifyCodeButton/index.vue"

defineOptions({
  name: "FormVerifyCodeInput",
})

type IndexProps = {
  phone?: string
  scene?: string
  modelValue?: string
}

const props = defineProps<IndexProps>()

const code = useModel(props, "modelValue")
</script>

<template>
  <div class="form-verify-code-com">
    <ElInput placeholder="请输入验证码" v-model="code" class="fvc-input" />
    <VerifyCodeButton :phone="phone" :scene="scene" />
  </div>
</template>

<style lang="scss" scoped>
.form-verify-code-com {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  .fvc-input {
    margin-right: 10px;
  }
}
</style>
