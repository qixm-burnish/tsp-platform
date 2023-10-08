<script setup lang="ts">
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import Motion from "@/components/Motion"

import { type FormRules, type FormInstance, ElMessage } from "element-plus"
import { pwdReg } from "@/utils/regex"
import { postAuthPasswordCodeChangeV1 } from "@/services/userCenter/mods/authorization/postAuthPasswordCodeChangeV1"

import { Step1FormValue, Step2FormValue, Step2EmitType } from "./type"

defineOptions({
  name: "ForgetStep1",
})

const props = defineProps<Step1FormValue>()
const formRef = ref<FormInstance>()
const formValues = reactive<Step2FormValue>({})
const router = useRouter()
const emits = defineEmits<Step2EmitType>()
const loading = ref(false)

const rules = reactive<FormRules>({
  password: [
    {
      required: true,
      message: "请输入新密码",
      trigger: "blur",
    },
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入新密码"))
        } else if (!pwdReg.test(value)) {
          callback(new Error("请输入有效的新密码"))
        } else {
          callback()
        }
      },
      trigger: "blur",
    },
  ],
  confirmPassword: [
    {
      required: true,
      message: "输入重复密码",
      trigger: "blur",
    },
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入重复密码"))
        } else if (!pwdReg.test(value)) {
          callback(new Error("请输入有效的重复密码"))
        } else {
          callback()
        }
      },
      trigger: "blur",
    },
  ],
})

function onConfirm() {
  formRef.value?.validate().then(isValid => {
    if (isValid) {
      loading.value = true
      postAuthPasswordCodeChangeV1({
        data: {
          code: props.code,
          identifier: props.phone,
          new_password: formValues.password,
          confirm_password: formValues.confirmPassword,
        },
      })
        .then(() => {
          ElMessage.success("密码修改成功")
          router.push("/login")
        })
        .finally(() => {
          loading.value = false
        })
    }
  })
}

function onCancel() {
  emits("back")
}
</script>

<template>
  <div class="forget-step forget-step2-com">
    <ElForm ref="formRef" :model="formValues" :rules="rules" hide-required-asterisk label-width="100px">
      <Motion>
        <ElFormItem prop="password" label="新密码">
          <ElInput clearable v-model="formValues.password" placeholder="输入新密码" />
        </ElFormItem>
      </Motion>
      <Motion :delay="100">
        <ElFormItem prop="password" label="重复密码">
          <ElInput clearable v-model="formValues.confirmPassword" placeholder="输入重复密码" />
        </ElFormItem>
      </Motion>
    </ElForm>
    <Motion :delay="200">
      <div class="forget-buttons flex justify-between mt-[100px]">
        <ElButton class="flex-1" @click="onCancel" :loading="loading">上一步</ElButton>
        <span class="flex-none w-[10px]" />
        <ElButton @click="onConfirm" type="primary" class="flex-1" :loading="loading">确定</ElButton>
      </div>
    </Motion>
  </div>
</template>
