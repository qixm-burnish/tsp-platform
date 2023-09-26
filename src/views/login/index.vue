<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from "vue"
import { useRouter } from "vue-router"

import Motion from "@/components/Motion"
import { message } from "@/utils/message"
import { loginRules } from "./utils/rule"
import type { FormInstance } from "element-plus"
import { useLayout } from "@/layout/hooks/useLayout"
import { useUserStoreHook } from "@/store/modules/user"
import { initRouter, getTopMenu } from "@/router/utils"
import FormVerifyCode from "@/components/FormVerifyCode/index.vue"

import logoUri from "@/assets/login/logo.png"

defineOptions({
  name: "Login",
})
const router = useRouter()
const loading = ref(false)
const passwordFormRef = ref<FormInstance>()
const codeFormRef = ref<FormInstance>()

const { initStorage } = useLayout()
initStorage()

const passwordForm = reactive({
  username: "admin",
  password: "admin123",
  rememberPassword: false,
})

const codeForm = reactive({
  phone: "",
  code: "",
})
const activeLoginMode = ref("password")

async function _onLogin(formEl: FormInstance | undefined) {
  loading.value = true
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      useUserStoreHook()
        .loginByUsername({ username: passwordForm.username, password: "admin123" })
        .then(res => {
          if (res.success) {
            // 获取后端路由
            initRouter().then(() => {
              router.push(getTopMenu(true).path)
              message("登录成功", { type: "success" })
            })
          }
        })
    } else {
      loading.value = false
      return fields
    }
  })
}

function onLogin() {
  _onLogin(activeLoginMode.value == "password" ? passwordFormRef.value : codeFormRef.value)
}

/** 使用公共函数，避免`removeEventListener`失效 */
function onkeypress({ code }: KeyboardEvent) {
  if (code === "Enter") {
    onLogin()
  }
}

function onTabChange(tab) {
  if (tab == "password") {
    if (codeForm.phone != passwordForm.username) {
      passwordForm.username = codeForm.phone
    }
  } else {
    if (codeForm.phone != passwordForm.username) {
      codeForm.phone = passwordForm.username
    }
  }
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
                <ElForm ref="passwordFormRef" :model="passwordForm" :rules="loginRules" hide-required-asterisk>
                  <ElFormItem
                    :rules="[
                      {
                        required: true,
                        message: '请输入账号',
                      },
                    ]"
                    prop="username"
                    label="账号"
                  >
                    <ElInput clearable v-model="passwordForm.username" placeholder="输入用户名/手机号" />
                  </ElFormItem>
                  <ElFormItem
                    :rules="[
                      {
                        required: true,
                        message: '请输入账号',
                      },
                    ]"
                    prop="password"
                    label="密码"
                  >
                    <ElInput clearable v-model="passwordForm.password" placeholder="输入密码" />
                  </ElFormItem>
                  <div class="flex justify-between ml-[40px]">
                    <ElCheckbox v-model="passwordForm.rememberPassword">记住密码</ElCheckbox>
                    <RouterLink to="/forget">
                      <ElLink :underline="false" type="primary">忘记密码</ElLink>
                    </RouterLink>
                  </div>
                </ElForm>
              </div>
            </ElTabPane>
            <ElTabPane label="验证码登录" name="code">
              <div class="login-form">
                <ElForm ref="codeFormRef" :model="codeForm" :rules="loginRules" hide-required-asterisk>
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
                    <ElInput clearable v-model="codeForm.phone" placeholder="输入手机号" />
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
                    <FormVerifyCode :phone="codeForm.phone" v-model="codeForm.code" />
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
          <ElButton class="w-full mt-[20px]" @click="onLogin"> 企业注册 </ElButton>
        </Motion>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-pg {
  .login {
    &-left {
      overflow: hidden;
      &-video {
        max-height: auto;
        height: 100%;
        object-fit: cover;
        margin-left: 50%;
        transform: translateX(-50%);
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

      min-height: 170px;
    }
  }
}

:deep(.ElInput-group__append, .ElInput-group__prepend) {
  padding: 0;
}
</style>
