<template>
  <el-dialog :title="title" fullscreen :model-value="props.visible" @close="onCancel" class="role-edit-dialog">
    <el-form :model="formValues" :rules="commValues.rules" class="role-edit-form" ref="formRef">
      <div class="ly-role-module">
        <div class="ly-role-module__row">
          <el-form-item label="角色名称" prop="label" label-width="80px" class="ly-role-module__name">
            <el-input v-model="formValues.label" placeholder="请输入角色名称" style="width: 500px" :maxlength="20" />
          </el-form-item>
        </div>
        <div class="ly-role-module__row">
          <el-form-item label="备注" prop="remark" label-width="50px" class="ly-role-module__remark">
            <el-input
              type="textarea"
              v-model="formValues.remark"
              placeholder="请输入备注"
              style="width: 500px"
              :maxlength="200"
              show-word-limit
              :autosize="{ minRows: 2, maxRows: 6 }"
            />
          </el-form-item>
        </div>
      </div>
      <div class="ly-role-module">
        <el-form-item label="功能权限" prop="resources" label-width="0px">
          <FuncList v-model="formValues.resources" :configs="commValues.funcConfigs" @input="handleInput" />
        </el-form-item>
      </div>
    </el-form>
    <template #footer>
      <div class="role-edit-dialog-footer">
        <el-button type="primary" @click="onConfirm">确定</el-button>
        <el-button @click="onCancel">取消</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { computed, shallowReactive, shallowRef, onMounted, watch } from "vue"
import { ElMessage } from "element-plus"
// import { pick, assign } from "lodash-es"

import { treeMap } from "@/utils/tree.js"

import FuncList from "@/components/AuthFunctionList/index.vue"
import type { OptionType } from "@/components/AuthFunctionList/item.vue"

import { getResourceSystemV1 as getConfigs } from "@/services/userCenter/mods/resource/getResourceSystemV1"
import { postRoleSelfV1 as creatRole } from "@/services/userCenter/mods/role/postRoleSelfV1"

type RoleItemType = defs.userCenter.SystemCompanyRoleCreate
type PropsType = {
  visible: boolean

  editId?: number | string
  disabled?: boolean
}
type CommonValuesType = {
  loading: boolean
  configLoading: boolean

  rules: Record<string, any[]>
  funcConfigs: OptionType[]
  disabledfuncConfigs: OptionType[]
}
type FormValuesType = RoleItemType

const handleInput = val => {
  formValues.resources = val
}

const props = withDefaults(defineProps<PropsType>(), {
  visible: false,
  disabled: false,
})
const emit = defineEmits<{
  (event: "close"): void
  (event: "confirm"): void
  (event: "update:visible", val: boolean): void
}>()

const title = computed(() => (props.disabled ? "角色详情" : `${props.editId ? "修改" : "添加"}角色`))
const formRef = shallowRef<null | HTMLFormElement>()
const formValues = shallowReactive<FormValuesType>({
  label: "",
  remark: "",
  system_id: "018acffb-9ab7-8ea0-534f-7f5a0012337d",
  resources: [],
})
const commValues = shallowReactive<CommonValuesType>({
  loading: false,
  configLoading: true,
  funcConfigs: [],
  disabledfuncConfigs: [],

  rules: {
    label: [{ required: true, message: "请输入角色名称", trigger: "blur" }],
  },
})

function initDialog() {
  formRef.value?.resetFields()
  commValues.loading = false
}

function getRoleDetail() {
  commValues.loading = true
  commValues.loading = false

  // getItem(props.editId!)
  //   .then(data => {
  //     const roleData: Partial<FormValuesType> = pick(data as any, [
  //       "label",
  //       "remark",
  //       "resources",
  //     ])
  //     assign(formValues, roleData)
  //     console.log(formValues)
  //   })
  //   .finally(() => {
  //     commValues.loading = false
  //   })
}

function onCancel() {
  emit("update:visible", false)
  emit("close")
}

function onConfirm() {
  formRef.value?.validate(valid => {
    if (valid) {
      if (!formValues.resources.length) {
        ElMessage.warning("请选择至少一项功能权限")
        return
      }

      creatRole({ data: formValues }).then(() => {
        ElMessage.success("添加成功")
        emit("confirm")
      })

      // const saveReq = props.editId
      //   ? updateItem(props.editId, { bodyParams })
      //   : addItem({
      //       bodyParams,
      //     })

      // saveReq
      //   .then(() => {
      //     ElMessage.success(props.editId ? "修改成功" : "添加成功")
      //     emit("confirm")
      //   })
      //   .finally(() => {
      //     commValues.saving = false
      //   })
    }
  })
}

onMounted(() => {
  getConfigs({ params: { system_id: "018acffb-9ab7-8ea0-534f-7f5a0012337d" } })
    .then(data => {
      const funcs = treeMap(data, {
        conversion: item => ({ ...item }),
      })
      const funclist = funcs.filter(item => item.assignable)
      commValues.funcConfigs = funclist
    })
    .catch(() => {
      commValues.funcConfigs = [] as any
    })
})

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
<style lang="scss">
.role-edit-form {
  .el-form-item__label {
    display: none;
  }
}
</style>
<style lang="scss" scoped>
.role-edit-dialog-footer {
  text-align: center !important;
}
</style>
