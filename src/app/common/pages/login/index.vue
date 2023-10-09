<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount, toRaw } from "vue"
import { useRouter } from "vue-router"

import Motion from "@/components/Motion"
import { message } from "@/utils/message"
import { loginRules } from "./utils/rule"
import type { FormInstance, FormRules } from "element-plus"
import { useAppStoreHook } from "@/store/app"
import FormVerifyCode from "@/components/FormVerifyCode"
import FormVerifyImage from "@/components/FormVerifyImage"
import { pwdReg } from "@/utils/regex"
import { loginData } from "@/utils/storage"

import logoUri from "@/assets/login/logo.png"

defineOptions({
  name: "Login",
})
const router = useRouter()
const loading = ref(false)
const passwordFormRef = ref<FormInstance>()
const codeFormRef = ref<FormInstance>()
const { login } = useAppStoreHook()

const passwordFormValues = reactive({
  rememberPassword: false,
  ...loginData.get({
    username: "",
    password: "",
  }),
  verifyCode: "",
  verifyCodeKey: "",
})

const codeFormValues = reactive({
  phone: "",
  code: "",
})
const activeLoginMode = ref("password")

const passwordFormRules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: "请输入账号",
    },
  ],
  password: [
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"))
        } else if (!pwdReg.test(value)) {
          callback(new Error("请输入8~20位的密码"))
        } else {
          callback()
        }
      },
      trigger: "blur",
    },
  ],
  verifyCode: [
    {
      required: true,
      message: "请输入验证码",
    },
  ],
})

async function _onLogin(formEl: FormInstance | undefined, values: Record<string, any>) {
  loading.value = true
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      login(activeLoginMode.value, values)
        .then(_ => {
          // 用户名登录时，判断是否记住密码，需要进行保存或清空
          if (values.username) {
            if (values.rememberPassword) {
              loginData.set({
                username: values.username,
                password: values.password,
                rememberPassword: true,
              })
            } else {
              loginData.remove()
            }
          }

          message("登录成功", { type: "success" })
          router.push("/")
        })
        .finally(() => {
          loading.value = false
        })
    } else {
      loading.value = false
      return fields
    }
  })
}

function onLogin() {
  if (activeLoginMode.value == "password") {
    _onLogin(passwordFormRef.value, toRaw(passwordFormValues))
  } else {
    _onLogin(codeFormRef.value, toRaw(codeFormValues))
  }
}

function onReigster() {
  router.push("/register")
}

/** 使用公共函数，避免`removeEventListener`失效 */
function onkeypress({ code }: KeyboardEvent) {
  if (code === "Enter") {
    onLogin()
  }
}

function onTabChange(tab) {
  if (tab == "password") {
    if (codeFormValues.phone != passwordFormValues.username) {
      passwordFormValues.username = codeFormValues.phone
    }
  } else {
    if (codeFormValues.phone != passwordFormValues.username) {
      codeFormValues.phone = passwordFormValues.username
    }
  }
}

function onVerifyImageChange(key: string) {
  passwordFormValues.verifyCodeKey = key
}

onMounted(() => {
  window.document.addEventListener("keypress", onkeypress)
})

onBeforeUnmount(() => {
  window.document.removeEventListener("keypress", onkeypress)
})
</script>

<template>
  <div class="flex items-stretch h-full select-none login-pg">
    <div class="login-left flex-[6]">
      <video
        src="https://zyhl-front.obs.cn-east-3.myhuaweicloud.com/static/video/20230907-101125.mp4"
        muted
        autoplay
        loop
        class="h-full login-left-video"
      />
    </div>
    <div class="login-right flex-[4] flex justify-center items-center">
      <div class="login-box w-[292px]">
        <Motion>
          <img class="login-logo" :src="logoUri" />
        </Motion>
        <Motion :delay="100">
          <ElTabs class="login-tab" v-model="activeLoginMode" @tab-change="onTabChange">
            <ElTabPane label="密码登录" name="password">
              <div class="login-form">
                <ElForm
                  ref="passwordFormRef"
                  :model="passwordFormValues"
                  :rules="passwordFormRules"
                  hide-required-asterisk
                  label-width="60px"
                >
                  <ElFormItem prop="username" label="账号">
                    <ElInput clearable v-model="passwordFormValues.username" placeholder="输入用户名/手机号" />
                  </ElFormItem>
                  <ElFormItem prop="password" label="密码">
                    <ElInput clearable v-model="passwordFormValues.password" placeholder="输入密码" type="password" />
                  </ElFormItem>
                  <ElFormItem prop="verifyCode" label="验证码">
                    <FormVerifyImage v-model="passwordFormValues.verifyCode" @change="onVerifyImageChange" />
                  </ElFormItem>
                  <div class="flex justify-between ml-[60px] mb-[52px]">
                    <ElCheckbox v-model="passwordFormValues.rememberPassword">记住密码</ElCheckbox>
                    <RouterLink to="/reset">
                      <ElLink :underline="false" type="primary">忘记密码</ElLink>
                    </RouterLink>
                  </div>
                </ElForm>
              </div>
            </ElTabPane>
            <ElTabPane label="验证码登录" name="code">
              <div class="login-form login-form-code mb-[90px]">
                <ElForm ref="codeFormRef" :model="codeFormValues" :rules="loginRules" hide-required-asterisk label-width="60px">
                  <ElFormItem
                    :rules="[
                      {
                        required: true,
                        message: '请输入账号',
                        trigger: 'submit',
                      },
                    ]"
                    prop="phone"
                    label="账号"
                  >
                    <ElInput clearable v-model="codeFormValues.phone" placeholder="输入手机号" />
                  </ElFormItem>
                  <ElFormItem
                    :rules="[
                      {
                        required: true,
                        message: '请输入验证码',
                        trigger: 'blur',
                      },
                    ]"
                    prop="code"
                    label="验证码"
                  >
                    <FormVerifyCode :phone="codeFormValues.phone" v-model="codeFormValues.code" />
                  </ElFormItem>
                </ElForm>
              </div>
            </ElTabPane>
          </ElTabs>
        </Motion>

        <Motion :delay="250">
          <ElButton class="w-full" size="default" type="primary" :loading="loading" @click="onLogin"> 登录 </ElButton>
        </Motion>
        <Motion :delay="270">
          <ElButton class="w-full mt-[20px]" @click="onReigster"> 企业注册 </ElButton>
        </Motion>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-pg {
  .login {
    &-box {
      min-height: 600px;
    }

    &-left {
      overflow: hidden;

      &-video {
        height: 100%;
        max-height: auto;
        margin-left: 50%;
        transform: translateX(-50%);
        object-fit: cover;
      }
    }

    &-tab {
      margin-top: 116px;

      :deep(.el-tabs__nav-scroll) {
        display: flex;
        justify-content: center;

        .el-tabs__item {
          font-size: 18px;
          line-height: 24px;
        }
      }
    }

    &-form {
      margin-top: 25px;
    }
  }
}

:deep(.ElInput-group__append, .ElInput-group__prepend) {
  padding: 0;
}
</style>
