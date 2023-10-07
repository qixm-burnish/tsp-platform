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

  placeholder?: string
  title?: string
}

const props = withDefaults(defineProps<IndexProps>(), {
  placeholder: "请输入验证码",
  title: "发送验证码",
  scene: "login",
})

const code = useModel(props, "modelValue")
</script>

<template>
  <div class="form-verify-code-com">
    <ElInput :placeholder="placeholder" v-model="code" class="fvc-input" />
    <VerifyCodeButton :phone="phone" :scene="scene" :title="title" />
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
