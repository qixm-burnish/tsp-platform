<template>
  <el-dialog :title="title" fullscreen :model-value="props.visible" @close="onCancel" class="role-edit-dialog">
    <el-form :model="formValues" :rules="commValues.rules" class="role-edit-form" ref="formRef">
      <div class="ly-role-module">
        <div class="ly-role-module__row">
          <el-form-item label="角色名称" prop="role_name" label-width="80px" class="ly-role-module__name">
            <el-input v-model="formValues.role_name" placeholder="请输入角色名称" style="width: 500px" :maxlength="20" />
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
        <el-form-item label="功能权限" prop="permissions" label-width="0px">
          <FuncList
            v-model="formValues.permissions"
            :configs="props.disabled ? commValues.disabledfuncConfigs : commValues.funcConfigs"
          />
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
import { isEmpty } from "@/utils/is"
// import { pick, assign } from "lodash-es"

// import { findNode, treeToList, treeMap } from "@/utils/tree.js"

import FuncList from "@/components/AuthFunctionList/index.vue"
import type { OptionType } from "@/components/AuthFunctionList/item.vue"

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
  funcConfigs: OptionType[]
  disabledfuncConfigs: OptionType[]

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

const title = computed(() => (props.disabled ? "角色详情" : `${props.editId ? "修改" : "添加"}角色`))
const formRef = shallowRef<null | HTMLFormElement>()
const formValues = shallowReactive<FormValuesType>({
  role_name: "",
  remark: "",

  permissions: [],
})
const commValues = shallowReactive<CommonValuesType>({
  loading: false,
  saving: false,
  configLoading: true,
  funcConfigs: [],
  disabledfuncConfigs: [],

  rules: {
    role_name: [{ required: true, message: "请输入角色名称", trigger: "blur" }],
    permissions: [{ validator: validateFuncs, trigger: "blur" }],
  },

  dataVisualMap: {},
})
// const loading = computed(() => commValues.loading || commValues.saving || commValues.configLoading)

function validateFuncs(_, value, callback) {
  if (!value || value.length === 0) {
    callback(new Error("请至少选择一项功能权限"))
  } else {
    callback()
  }
}

function initDialog() {
  formRef.value?.resetFields()
  commValues.loading = false
  commValues.saving = false
}

function getRoleDetail() {
  commValues.loading = true
  commValues.loading = false

  // getItem(props.editId!)
  //   .then(data => {
  //     const roleData: Partial<FormValuesType> = pick(data as any, [
  //       "role_name",
  //       "remark",
  //       "permissions",
  //       "time_permissions",
  //       "company_range",
  //       "company_range",
  //       "is_auto_add_new_company",
  //       "is_jmc_role",
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
      // const bodyParams: RoleItemType = {
      //   ...toRaw(formValues),
      //   company: 0,
      // }

      const trackPlayDataPermission = formValues.time_permissions?.find(item => item.permission === 1)

      if (trackPlayDataPermission) {
        if (!(trackPlayDataPermission.search_count! > 0)) {
          ElMessage.warning("请设置连续回放天数")
          return
        }
        if (
          trackPlayDataPermission.type !== "always" &&
          trackPlayDataPermission.count < (trackPlayDataPermission.search_count || 1)
        ) {
          ElMessage.warning("轨迹回放的最近天数不能小于连续回放天数")
          return
        }
      } else if (formValues.time_permissions?.some(item => isEmpty(item.count))) {
        ElMessage.warning("数据权限字段不能为空")
        return
      }

      commValues.saving = true
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
    } else {
      if (formValues.role_name.trim()) {
        ElMessage.warning("请至少选择一项功能权限")
      } else {
        ElMessage.warning("请输入角色名称")
      }
    }
  })
}

onMounted(() => {
  commValues.funcConfigs = [
    {
      id: "车辆数据",
      label: "车辆数据",
      module: "车辆数据",
      children: [
        {
          id: 100100,
          label: "燃油车",
          permiission_name: "燃油车",
          children: [
            {
              id: 100101,
              label: "添加车辆",
              permiission_name: "添加车辆",
              children: [],
            },
            {
              id: 100102,
              label: "修改",
              permiission_name: "修改",
              children: [],
            },
            {
              id: 100103,
              label: "删除",
              permiission_name: "删除",
              children: [],
            },
          ],
        },
        {
          id: 100200,
          label: "新能源车",
          permiission_name: "新能源车",
          children: [
            {
              id: 100201,
              label: "添加车辆",
              permiission_name: "添加车辆",
              children: [],
            },
            {
              id: 100202,
              label: "修改",
              permiission_name: "修改",
              children: [],
            },
            {
              id: 100203,
              label: "删除",
              permiission_name: "删除",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: "地图定位",
      label: "地图定位",
      module: "地图定位",
      children: [
        {
          id: 100300,
          label: "地图定位",
          permiission_name: "地图定位",
          children: [
            {
              id: 100301,
              label: "添加车辆",
              permiission_name: "添加车辆",
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: "国标报警",
      label: "国标报警",
      module: "国标报警",
      children: [
        {
          id: 100401,
          label: "当前报警",
          permiission_name: "当前报警",
          children: [],
        },
        {
          id: 100402,
          label: "历史报警",
          permiission_name: "历史报警",
          children: [],
        },
      ],
    },
  ]
  // commValues.configLoading = true
  // if (isJmcUser) {
  //   getConfigs({ queryParams: {} })
  //     .then(data => {
  //       const funcs = treeMap(data, {
  //         conversion: item => ({ ...item, label: item.module || item.permission_name, id: item.id || item.module }),
  //       })
  //       const disabledFuncs = treeMap(funcs, { conversion: item => ({ ...item, disabled: true }) })
  //       const trackPlayNode = findNode(funcs, item => item.label === "轨迹回放")
  //       const dataExportNode = findNode(funcs, item => item.label === "数据导出")
  //       const statisticsNode = findNode(funcs, item => item.label === "统计报表")
  //       const config = {}
  //       if (trackPlayNode) {
  //         config["轨迹回放"] = treeToList([trackPlayNode])
  //           .map(item => item.id)
  //           .filter(Number)
  //       }
  //       if (dataExportNode) {
  //         config["数据导出"] = treeToList([dataExportNode])
  //           .map(item => item.id)
  //           .filter(Number)
  //       }
  //       if (statisticsNode) {
  //         config["统计报表"] = treeToList([statisticsNode])
  //           .map(item => item.id)
  //           .filter(Number)
  //       }
  //       commValues.funcConfigs = funcs
  //       commValues.dataVisualMap = config
  //       commValues.configLoading = false
  //       commValues.disabledfuncConfigs = disabledFuncs
  //     })
  //     .catch(() => {
  //       commValues.configLoading = false
  //       commValues.funcConfigs = [] as any
  //     })
  // } else {
  //   getCompanyConfigs({ queryParams: { company: getCompanyId() } })
  //     .then(data => {
  //       const funcs = treeMap(data, {
  //         conversion: item => ({ ...item, label: item.module || item.permission_name, id: item.id || item.module }),
  //       })
  //       const disabledFuncs = treeMap(funcs, { conversion: item => ({ ...item, disabled: true }) })
  //       const trackPlayNode = findNode(funcs, item => item.label === "轨迹回放")
  //       const dataExportNode = findNode(funcs, item => item.label === "数据导出")
  //       const statisticsNode = findNode(funcs, item => item.label === "统计报表")
  //       const config = {}
  //       if (trackPlayNode) {
  //         config["轨迹回放"] = treeToList([trackPlayNode])
  //           .map(item => item.id)
  //           .filter(Number)
  //       }
  //       if (dataExportNode) {
  //         config["数据导出"] = treeToList([dataExportNode])
  //           .map(item => item.id)
  //           .filter(Number)
  //       }
  //       if (statisticsNode) {
  //         config["统计报表"] = treeToList([statisticsNode])
  //           .map(item => item.id)
  //           .filter(Number)
  //       }
  //       commValues.funcConfigs = funcs
  //       commValues.dataVisualMap = config
  //       commValues.configLoading = false
  //       commValues.disabledfuncConfigs = disabledFuncs
  //     })
  //     .catch(() => {
  //       commValues.configLoading = false
  //       commValues.funcConfigs = [] as any
  //     })
  // }
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
