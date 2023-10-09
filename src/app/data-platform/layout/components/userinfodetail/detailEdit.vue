<template>
  <div>
    <el-dialog
      class="userinfo_dialog"
      :model-value="props.visible"
      title="个人信息"
      :show-close="false"
      width="768px"
      @close="handleCancel"
    >
      <div class="userinfo_dialog_content">
        <el-form ref="ruleFormRef" label-width="100px" status-icon :model="ruleForm" :rules="rules">
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="ruleForm.phone" />
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="ruleForm.real_name" />
          </el-form-item>
          <el-form-item label="身份证号">
            <el-input v-model="ruleForm.id_number" />
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="ruleForm.email" />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button class="confirmbtn" type="primary" @click="handleConfirm"> 修改 </el-button>
          <el-button @click="handleCancel">关闭</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from "vue"
import type { FormInstance, FormRules } from "element-plus"
import { getAccountMyselfV1 as getinfo } from "@/services/userCenter/mods/account/getAccountMyselfV1"
import { putAccountSelfByIdV1 as editinfo } from "@/services/userCenter/mods/account/putAccountSelfByIdV1"

type PropsType = {
  visible: boolean
}

const props = withDefaults(defineProps<PropsType>(), {
  visible: false,
})

interface RuleForm {
  phone: string
  real_name: string
  id_number: string
  email: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  phone: "",
  real_name: "",
  id_number: "",
  email: "",
})
const userId = ref<number | string>("")

const rules = reactive<FormRules<RuleForm>>({
  phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
})

onMounted(() => {
  getinfo({ params: { system_id: "018acffb-9ab7-8ea0-534f-7f5a0012337d" } }).then(res => {
    ruleForm.phone = res.phone
    ruleForm.real_name = res.real_name
    ruleForm.id_number = res.id_number
    ruleForm.email = res.email
    userId.value = res.id
  })
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      editinfo(userId.value, { data: ruleForm }).then(() => {
        emit("confirm", false)
      })
    } else {
      console.log("error submit!", fields)
    }
  })
}

const emit = defineEmits<{
  close: [params: any]
  confirm: [params: any]
}>()

const handleConfirm = () => {
  submitForm(ruleFormRef.value)
}
const handleCancel = () => {
  emit("close", false)
}
</script>

<style scoped lang="scss">
.el-dialog__footer {
  .el-button {
    width: 85px;
    height: 28px;
    border-radius: 4px;
  }

  .confirmbtn {
    background: #4181d9;
  }
}

.userinfo_dialog {
  .el-form-item {
    margin-bottom: 20px;
  }
}

.userinfo_dialog_content {
  padding: 0 200px 0 140px !important;
}

:deep(.userinfo_dialog_content .el-form-item__content .el-input) {
  width: 200px !important;
}

.type_group {
  .el-radio {
    height: 32px;
  }
}

.blackcolor {
  margin-left: 8px;
  color: #262626;
}
</style>
