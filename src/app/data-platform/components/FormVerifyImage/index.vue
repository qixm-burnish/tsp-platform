<script setup lang="ts">
import { useModel, ref } from "vue"

import VerifyImage, { type ExposeType, type EmitType } from "@/components/VerifyImage"

defineOptions({
  name: "FormVerifyCodeInput",
})

type IndexProps = {
  scene?: string
  modelValue?: string

  placeholder?: string
}

const props = withDefaults(defineProps<IndexProps>(), {
  placeholder: "请输入验证码",
  scene: "login",
})
const emits = defineEmits<EmitType>()

const verifyImage = ref<ExposeType>()

const value = useModel(props, "modelValue")

function onImageChange(key: string) {
  emits("change", key)
}

defineExpose<ExposeType>({
  refresh() {
    verifyImage.value.refresh()
  },
})
</script>

<template>
  <div class="form-verify-image-com">
    <ElInput :placeholder="placeholder" v-model="value" class="fvi-input" />
    <VerifyImage :scene="scene" ref="verifyImage" @change="onImageChange" />
  </div>
</template>

<style lang="scss" scoped>
.form-verify-image-com {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  .fvi-input {
    margin-right: 10px;
  }
}
</style>
