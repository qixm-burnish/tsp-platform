<script setup lang="ts">
import { reactive, ref, toRaw } from "vue"
import { useRouter } from "vue-router"
import Motion from "@/components/Motion"

import type { FormRules, FormInstance } from "element-plus"
import { phoneReg } from "@/utils/regex"
import FormVerifyCode from "@/components/FormVerifyCode/index.vue"

import { Step1EmitType, Step1FormValue } from "./type"

defineOptions({
  name: "ForgetStep1",
})

const formRef = ref<FormInstance>()
const props = defineProps<Step1FormValue>()
const formValues = reactive<Step1FormValue>(toRaw(props))
const emits = defineEmits<Step1EmitType>()
const router = useRouter()

const rules = reactive<FormRules>({
  phone: [
    {
      required: true,
      message: "请输入手机号",
      trigger: "blur",
    },
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入手机号"))
        } else if (!phoneReg.test(value)) {
          callback(new Error("请输入有效的手机号码"))
        } else {
          callback()
        }
      },
      trigger: "blur",
    },
  ],
  code: [
    {
      required: true,
      message: "请输入验证码",
      trigger: "blur",
    },
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入验证码"))
        } else if (value.length != 6) {
          callback(new Error("请输入6位验证码"))
        } else {
          callback()
        }
      },
      trigger: "blur",
    },
  ],
})

function onNext() {
  formRef.value?.validate().then(isValid => {
    if (isValid) {
      emits("next", toRaw(formValues))
    }
  })
}

function onCancel() {
  router.push("/login")
}
</script>

<template>
  <div class="forget-step forget-step1-com">
    <ElForm ref="formRef" :model="formValues" :rules="rules" hide-required-asterisk label-width="80px">
      <Motion>
        <ElFormItem prop="phone" label="账号">
          <ElInput clearable v-model="formValues.phone" placeholder="输入手机号" />
        </ElFormItem>
      </Motion>
      <Motion :delay="100">
        <ElFormItem prop="code" label="验证码">
          <FormVerifyCode :phone="formValues.phone" v-model="formValues.code" title="发送" />
        </ElFormItem>
      </Motion>
    </ElForm>
    <Motion :delay="200">
      <div class="forget-buttons flex justify-between mt-[100px]">
        <ElButton class="flex-1" @click="onCancel">取消</ElButton>
        <span class="flex-none w-[10px]" />
        <ElButton @click="onNext" type="primary" class="flex-1">下一步</ElButton>
      </div>
    </Motion>
  </div>
</template>
