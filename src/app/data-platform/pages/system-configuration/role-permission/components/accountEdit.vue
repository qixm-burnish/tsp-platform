<template>
  <el-dialog
    title="添加账号"
    :model-value="props.visible"
    @close="onCancel"
    class="account-edit-dialog"
    width="768px"
    :show-close="false"
  >
    <div class="account-edit-dialog-content">
      <el-form :model="formValues" :rules="commValues.rules" class="account-edit-form" ref="formRef" label-width="80">
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="formValues.phone" />
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="formValues.name" />
        </el-form-item>
        <el-form-item label="电子邮箱">
          <el-input v-model="formValues.email" />
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="formValues.remark" />
        </el-form-item>
      </el-form>
    </div>

    <template #footer>
      <span class="account-edit-dialog-footer">
        <el-button class="bottom_btn bottom_btn_confirm" type="primary" @click="onConfirm">确定</el-button>
        <el-button class="bottom_btn" @click="onCancel">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { shallowReactive, shallowRef, watch } from "vue"
// import { ElMessage } from "element-plus"
// import { pick, assign } from "lodash-es"

// import { findNode, treeToList, treeMap } from "@/utils/tree.js"

// import FuncList from "@/components/AuthFunctionList/index.vue"

type RoleItemType = any
type PropsType = {
  visible: boolean

  editId?: number | string
  disabled?: boolean
}
type CommonValuesType = {
  loading: boolean
  saving: boolean
  configLoading: boolean

  rules: Record<string, any[]>

  dataVisualMap: Record<string, number[]>
}
type FormValuesType = Omit<RoleItemType, "company">

const props = withDefaults(defineProps<PropsType>(), {
  visible: false,
  disabled: false,
})
const emit = defineEmits<{
  (event: "close"): void
  (event: "confirm"): void
  (event: "update:visible", val: boolean): void
}>()

const formRef = shallowRef<null | HTMLFormElement>()
const formValues = shallowReactive<FormValuesType>({
  phone: "",
  name: "",
  email: "",
  remark: "",
})
const commValues = shallowReactive<CommonValuesType>({
  loading: false,
  saving: false,
  configLoading: true,

  rules: {
    phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
    name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
  },

  dataVisualMap: {},
})
// const loading = computed(() => commValues.loading || commValues.saving || commValues.configLoading)

function initDialog() {
  formRef.value?.resetFields()
  commValues.loading = false
  commValues.saving = false
}

function getRoleDetail() {
  commValues.loading = true
  commValues.loading = false
}

function onCancel() {
  emit("update:visible", false)
  emit("close")
}

function onConfirm() {
  formRef.value?.validate(valid => {
    if (valid) {
      console.log(111)
    } else {
      console.log(222)
    }
  })
}

watch(
  () => props.visible,
  newVal => {
    if (newVal) {
      if (props.editId) {
        getRoleDetail()
      } else {
        initDialog()
      }
    }
  },
)
</script>
<style lang="scss" scoped>
.account-edit-dialog-content {
  padding: 60px 240px;
}

.bottom_btn {
  width: 85px;
  height: 29px;
  border-radius: 4px;

  &_confirm {
    background: #4181d9;
  }
}
</style>
