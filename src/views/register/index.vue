<script setup lang="ts">
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import { Plus } from "@element-plus/icons-vue"
import Motion from "@/components/Motion"

import type { FormRules, FormInstance, ElUpload } from "element-plus"
import { phoneReg } from "@/utils/regex"
import SimpleLayout from "@/components/SimpleLayout"

export type Step1FormValue = {
  phone?: string
  code?: string
}

export type Step2FormValue = {
  password?: string
  newPassword?: string
}

defineOptions({
  name: "register",
})

const activeStep = ref(1)
const step1FormRef = ref<FormInstance>()
const step2FormRef = ref<FormInstance>()
const step1FormValues = reactive<Step1FormValue>({})
const step2FormValues = reactive<Step2FormValue>({})
const router = useRouter()

const step1Rules = reactive<FormRules>({
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
  activeStep.value = 2

  // step1FormRef.value?.validate().then(isValid => {
  //   if (isValid) {
  //     activeStep.value = 2
  //   }
  // })
}

function onCancel() {
  router.push("/login")
}

console.log(step1FormValues)
</script>

<template>
  <SimpleLayout class="register-pg" title="账号注册">
    <div class="register-content">
      <div class="register-step register-step1" v-if="activeStep == 1">
        <ElForm ref="step1FormRef" :model="step1FormValues" :rules="step1Rules" label-width="140px">
          <Motion>
            <ElFormItem prop="phone" label="企业全称">
              <ElInput clearable v-model="step1FormValues.phone" placeholder="请严格按照营业执照上名称填写" />
            </ElFormItem>
          </Motion>
          <Motion :delay="100">
            <ElFormItem prop="code" label="统一社会信用代码">
              <ElInput clearable v-model="step1FormValues.phone" placeholder="请严格按照营业执照上统一社会信用代码填写" />
            </ElFormItem>
          </Motion>
          <Motion :delay="200">
            <ElFormItem prop="code" label="法定代表人">
              <ElInput clearable v-model="step1FormValues.phone" placeholder="请严格按照营业执照上法定代表人填写" />
            </ElFormItem>
          </Motion>
          <Motion :delay="300">
            <ElFormItem prop="code" label="企业注册地址">
              <ElInput clearable v-model="step1FormValues.phone" placeholder="请严格按照营业执照上住所填写" />
            </ElFormItem>
          </Motion>
          <Motion :delay="400">
            <ElFormItem prop="code" label="法人联系电话">
              <ElInput clearable v-model="step1FormValues.phone" placeholder="请严格按照营业执照上法定代表人填写" />
            </ElFormItem>
          </Motion>
          <Motion :delay="500">
            <ElFormItem prop="code" label="营业执照">
              <ElUpload :show-file-list="false" @before-upload="console.log">
                <div class="register-uploader">
                  <ElIcon :size="20" color="#C0C6CB"><Plus /></ElIcon>
                </div>
              </ElUpload>
            </ElFormItem>
          </Motion>
        </ElForm>
        <Motion :delay="600">
          <div class="register-buttons flex justify-between mt-[70px] ml-[80px]">
            <ElButton class="flex-1" @click="onCancel">取消</ElButton>
            <span class="flex-none w-[10px]" />
            <ElButton @click="onNext" type="primary" class="flex-1">下一步</ElButton>
          </div>
        </Motion>
      </div>
      <div class="register-step register-step2" v-else>
        <ElForm ref="step2FormRef" :model="step2FormValues" :rules="step1Rules" hide-required-asterisk label-width="100px">
          <Motion>
            <ElFormItem prop="password" label="新密码">
              <ElInput clearable v-model="step2FormValues.password" placeholder="输入新密码" />
            </ElFormItem>
          </Motion>
          <Motion :delay="100">
            <ElFormItem prop="password" label="重复密码">
              <ElInput clearable v-model="step2FormValues.newPassword" placeholder="输入重复密码" />
            </ElFormItem>
          </Motion>
        </ElForm>
        <Motion :delay="200">
          <div class="register-buttons flex justify-between mt-[100px]">
            <ElButton class="flex-1" @click="onCancel">上一步</ElButton>
            <span class="flex-none w-[10px]" />
            <ElButton @click="onConfirm" type="primary" class="flex-1">确定</ElButton>
          </div>
        </Motion>
      </div>
    </div>
  </SimpleLayout>
</template>

<style lang="scss">
.register-pg {
  .register {
    &-step1 {
      width: 450px;
    }

    &-uploader {
      width: 96px;
      height: 96px;
      border-radius: 4px;
      border: 1px solid #c0c6cb;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
