<script setup lang="ts">
import { shallowReactive, reactive, ref, onMounted, toRaw } from "vue"
import { useRouter } from "vue-router"
import { Plus, Select } from "@element-plus/icons-vue"
import Motion from "@/components/Motion"

import { type FormRules, type FormInstance, type ElUpload, ElMessage } from "element-plus"
import { phoneReg, mailReg, idCardReg } from "@/utils/regex"
import { validateSocialCreditCode } from "@/utils/form"
import { getBase64 } from "@/utils/file"
import SimpleLayout from "@/components/SimpleLayout"
import { getSystemSelfV1 as getSystemList } from "@/services/userCenter/mods/system/getSystemSelfV1"
import { postCompanyApplyV1 as createCompanyApply } from "@/services/userCenter/mods/company/postCompanyApplyV1"

export type Step1FormValue = {
  name?: string
  credit_code_tax_id?: string
  legal_representative_name?: string
  address?: string
  legal_representative_phone?: string
  business_license?: string
  legal_representative_id_card_front?: string
}

export type Step2FormValue = {
  username?: string
  phone?: string
  password?: string
  id_number?: string
  email?: string
  real_name?: string
  systems: string[]
}

defineOptions({
  name: "register",
})

const router = useRouter()
const activeStep = ref(1)
const step1FormRef = ref<FormInstance>()
const step2FormRef = ref<FormInstance>()
const step1FormValues = shallowReactive<Step1FormValue>({})
const step2FormValues = reactive<Step2FormValue>({
  systems: [],
})
const systemList = ref<defs.userCenter.SystemList[]>([])
const businessImageUrl = ref("")
const legalRepresentativeCardFrontImageUrl = ref("")
const loading = ref(false)

const step1Rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: "请输入企业名称",
      trigger: "blur",
    },
  ],
  credit_code_tax_id: [
    {
      required: true,
      message: "请输入统一社会信用代码",
      trigger: "blur",
    },
    {
      validator: (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入统一社会信用代码"))
        } else {
          const { isPass, errorMessage } = validateSocialCreditCode(value)

          callback(isPass ? undefined : errorMessage)
        }
      },
      trigger: "blur",
    },
  ],
  legal_representative_name: [
    {
      required: true,
      message: "请输入法人姓名",
      trigger: "blur",
    },
  ],
  business_license: [
    {
      required: true,
      message: "请上传法人身份证正面营业执照",
      trigger: "blur",
    },
  ],
  legal_representative_id_card_front: [
    {
      required: true,
      message: "请上传法人身份证正面",
      trigger: "blur",
    },
  ],
})
const step2Rules = reactive<FormRules>({
  username: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
  ],
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
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
  ],

  id_number: [
    {
      validator: (rule, value, callback) => {
        if (value && !idCardReg.test(value)) {
          callback(new Error("请输入有效的身份证号"))
        } else {
          callback()
        }
      },
      trigger: "blur",
    },
  ],
  email: [
    {
      validator: (rule, value, callback) => {
        if (value && !mailReg.test(value)) {
          callback(new Error("请输入有效的邮箱地址"))
        } else {
          callback()
        }
      },
      trigger: "blur",
    },
  ],
})

function onBeforeLegalRepresentativeCardFrontUpload(file: File) {
  if (file.size > 10 * 1024 * 1024) {
    ElMessage.warning("请传入10M以内的文件")
  } else {
    step1FormValues.legal_representative_id_card_front = file
    getBase64(file)
      .then(value => {
        legalRepresentativeCardFrontImageUrl.value = value
      })
      .catch(() => {
        legalRepresentativeCardFrontImageUrl.value = ""
      })
  }

  return false
}

function onBeforeBusinessImageUpload(file: File) {
  if (file.size > 10 * 1024 * 1024) {
    ElMessage.warning("请传入10M以内的文件")
  } else {
    step1FormValues.business_license = file

    getBase64(file)
      .then(value => {
        businessImageUrl.value = value
      })
      .catch(() => {
        businessImageUrl.value = ""
      })
  }

  return false
}
function onNext() {
  step1FormRef.value?.validate().then(isValid => {
    if (isValid) {
      activeStep.value = 2
    }
  })
}

function onCancel() {
  router.push("/login")
}

function onPrev() {
  activeStep.value = 1
}

function onConfirm() {
  step2FormRef.value?.validate().then(isValid => {
    if (isValid) {
      if (step2FormValues.systems.length == 0) {
        ElMessage.warning("请选择待申请的子系统")
        return
      }

      const data = {
        ...toRaw(step1FormValues),
        ...toRaw(step2FormValues),
      }

      const formData = new FormData()
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })

      loading.value = true
      createCompanyApply({
        withToken: false,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData as any,
      })
        .then(() => {
          ElMessage.success("申请创建成功")

          router.push("/login")
        })
        .finally(() => {
          loading.value = false
        })
    }
  })
}

function onSytemItemClick(code: string) {
  if (step2FormValues.systems.includes(code)) {
    step2FormValues.systems = step2FormValues.systems.filter(item => item != code)
  } else {
    step2FormValues.systems.push(code)
  }
}

onMounted(() => {
  getSystemList({
    params: {
      page: 1,
      size: 99,
    },
  }).then(data => {
    systemList.value = data
  })
})
</script>

<template>
  <SimpleLayout class="register-pg" title="账号注册">
    <div class="register-content">
      <div class="register-step register-step1" v-if="activeStep == 1">
        <ElForm ref="step1FormRef" :model="step1FormValues" :rules="step1Rules" label-width="140px">
          <Motion>
            <ElFormItem prop="name" label="企业全称">
              <ElInput clearable v-model="step1FormValues.name" placeholder="请严格按照营业执照上名称填写" />
            </ElFormItem>
          </Motion>
          <Motion :delay="50">
            <ElFormItem prop="credit_code_tax_id" label="统一社会信用代码">
              <ElInput
                clearable
                v-model="step1FormValues.credit_code_tax_id"
                placeholder="请严格按照营业执照上统一社会信用代码填写"
              />
            </ElFormItem>
          </Motion>
          <Motion :delay="100">
            <ElFormItem prop="legal_representative_name" label="法定代表人">
              <ElInput
                clearable
                v-model="step1FormValues.legal_representative_name"
                placeholder="请严格按照营业执照上法定代表人填写"
              />
            </ElFormItem>
          </Motion>
          <Motion :delay="150">
            <ElFormItem prop="address" label="企业注册地址">
              <ElInput clearable v-model="step1FormValues.address" placeholder="请严格按照营业执照上住所填写" />
            </ElFormItem>
          </Motion>
          <Motion :delay="200">
            <ElFormItem prop="legal_representative_phone" label="法人联系电话">
              <ElInput
                clearable
                v-model="step1FormValues.legal_representative_phone"
                placeholder="请严格按照营业执照上法定代表人填写"
              />
            </ElFormItem>
          </Motion>
          <Motion :delay="250">
            <ElFormItem prop="business_license" label="营业执照">
              <ElUpload :show-file-list="false" :before-upload="onBeforeBusinessImageUpload" accept="image/*">
                <div class="register-uploader">
                  <img :src="businessImageUrl" class="register-uploader-img" v-if="businessImageUrl" />
                  <ElIcon :size="20" color="#C0C6CB" v-else><Plus /></ElIcon>
                </div>
              </ElUpload>
            </ElFormItem>
          </Motion>
          <Motion :delay="300">
            <ElFormItem prop="legal_representative_id_card_front" label="法人身份证">
              <ElUpload :show-file-list="false" :before-upload="onBeforeLegalRepresentativeCardFrontUpload" accept="image/*">
                <div class="register-uploader">
                  <img
                    :src="legalRepresentativeCardFrontImageUrl"
                    class="register-uploader-img"
                    v-if="legalRepresentativeCardFrontImageUrl"
                  />
                  <ElIcon :size="20" color="#C0C6CB" v-else><Plus /></ElIcon>
                </div>
              </ElUpload>
            </ElFormItem>
          </Motion>
        </ElForm>
        <Motion :delay="300">
          <div class="register-buttons flex justify-between mt-[70px] ml-[80px]">
            <ElButton class="flex-1" @click="onCancel">取消</ElButton>
            <span class="flex-none w-[10px]" />
            <ElButton @click="onNext" type="primary" class="flex-1">下一步</ElButton>
          </div>
        </Motion>
      </div>
      <div class="flex flex-row justify-between w-[1400px] register-step register-step2" v-else>
        <div class="register-step2-left">
          <div
            v-for="item in systemList"
            :key="item.id"
            class="register-step2-left-item flex items-center relative"
            :class="{ 'register-step2-left-item-active': step2FormValues.systems.includes(item.id) }"
            @click="() => onSytemItemClick(item.id)"
          >
            <img :src="item.icon" v-if="item.icon" class="register-step2-left-item-icon flex-none mr-[20px] w-[94px]" />
            <div class="register-step2-left-item-right">
              <div class="register-step2-left-item-title">{{ item.label }}</div>
              <div class="register-step2-left-item-description">{{ item.description }}</div>
            </div>
            <ElIcon
              :size="40"
              color="#4181d9"
              v-if="step2FormValues.systems.includes(item.id)"
              class="register-step2-left-item-checked"
            >
              <Select />
            </ElIcon>
          </div>
        </div>
        <div class="register-step2-right w-[400px]">
          <Motion>
            <div class="text-center register-step2-right-tip">您申请的账号是作为企业最大权限的超级管理员账号</div>
            <div class="register-step2-right-tip mb-[50px] text-center">您下属的子账号及所属权限，将由您登录系统后自行创建</div>
          </Motion>
          <ElForm ref="step2FormRef" :model="step2FormValues" :rules="step2Rules" label-width="80px">
            <Motion>
              <ElFormItem prop="username" label="用户名">
                <ElInput clearable v-model="step2FormValues.username" placeholder="6-20为数字和字母组合，字母分大小写" />
              </ElFormItem>
            </Motion>
            <Motion :delay="50">
              <ElFormItem prop="phone" label="手机号">
                <ElInput clearable v-model="step2FormValues.phone" placeholder="输入手机号" />
              </ElFormItem>
            </Motion>
            <Motion :delay="150">
              <ElFormItem prop="password" label="密码">
                <ElInput clearable v-model="step2FormValues.password" placeholder="输入密码" type="password" />
              </ElFormItem>
            </Motion>
            <Motion :delay="200">
              <ElFormItem prop="id_number" label="身份证号">
                <ElInput clearable v-model="step2FormValues.id_number" placeholder="输入身份证号" />
              </ElFormItem>
            </Motion>
            <Motion :delay="250">
              <ElFormItem prop="email" label="电子邮箱">
                <ElInput clearable v-model="step2FormValues.email" placeholder="输入电子邮箱" />
              </ElFormItem>
            </Motion>
            <Motion :delay="300">
              <ElFormItem prop="real_name" label="姓名">
                <ElInput clearable v-model="step2FormValues.real_name" placeholder="输入姓名" />
              </ElFormItem>
            </Motion>
          </ElForm>
          <Motion :delay="200">
            <div class="register-buttons flex justify-between mt-[100px]">
              <ElButton class="flex-1" @click="onPrev" :loading="loading">上一步</ElButton>
              <span class="flex-none w-[10px]" />
              <ElButton @click="onConfirm" type="primary" class="flex-1" :loading="loading">提交申请</ElButton>
            </div>
          </Motion>
        </div>
      </div>
    </div>
  </SimpleLayout>
</template>

<style lang="scss">
.register-pg {
  .el-form-item__label {
    font-weight: 700;
  }

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
      overflow: hidden;

      &-img {
        max-width: 94px;
        max-height: 94px;
      }
    }

    &-step2 {
      &-left {
        margin-right: 200px;

        &-item {
          padding: 10px;
          padding-right: 24px;
          border-radius: 12px;
          border: 1px solid #afb6bf;
          opacity: 0.5;
          margin-bottom: 16px;
          cursor: pointer;

          &:last-of-type {
            margin-bottom: 0;
          }

          &-active {
            opacity: 1;
            border-color: #4181d9;
            outline: 2px solid #4181d9;
          }

          &-title {
            font-size: 18px;
            line-height: 21px;
          }

          &-description {
            margin-top: 9px;

            font-size: 14px;
            line-height: 21px;
            color: #979da5;
          }

          &-checked {
            position: absolute;
            left: -60px;

            top: 50%;
            transform: translateY(-50%);
          }
        }
      }

      &-right-tip {
        font-size: 16px;
        line-height: 30px;
      }
    }
  }
}
</style>
