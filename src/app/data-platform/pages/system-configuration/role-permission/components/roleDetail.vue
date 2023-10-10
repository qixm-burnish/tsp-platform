<template>
  <el-dialog title="角色详情" fullscreen :model-value="props.visible" @close="onCancel" class="role-detail-dialog">
    <div class="edit_header">1</div>
    <el-form class="role-detail-form">
      <div class="ly-role-module">
        <div class="ly-role-module__row">
          <el-form-item label="角色名称" prop="label" label-width="80px" class="ly-role-module__name">
            <FormText v-model="data.label" />
          </el-form-item>
        </div>
        <div class="ly-role-module__row">
          <el-form-item label="备注信息" prop="remark" label-width="80px" class="ly-role-module__remark">
            <FormText v-model="data.remark" />
          </el-form-item>
        </div>
      </div>
      <div class="ly-role-module">
        <div class="ly-role-module__title">功能权限</div>
        <el-form-item prop="resources" label-width="0px">
          <FuncList v-model="data.resources" :configs="funcConfigs" />
        </el-form-item>
      </div>
    </el-form>
    <template #footer>
      <el-button class="footer_btn footer_btn_edit" v-if="is_super" type="primary" @click="onEdit">修改</el-button>
      <el-popconfirm v-if="is_super" :title="`确定删除(${data?.label})吗？`" @confirm="onRemove">
        <template #reference>
          <el-button class="footer_btn footer_btn_del" type="danger" style="margin: 0 10px">删除</el-button>
        </template>
      </el-popconfirm>
      <el-button class="footer_btn" @click="onCancel">取消</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from "vue"
// import useDetailDialog from "@/hooks/useDetailDialog"
// import { treeMap } from "@/utils/tree"
// import type { OptionType } from "@/components/AuthFunctionList/item.vue"
import FuncList from "@/components/AuthFunctionView/index.vue"
import FormText from "@/components/FormText/index.vue"
import { getRoleSelfByIdV1 as getRoleDetail } from "@/services/userCenter/mods/role/getRoleSelfByIdV1"
import { getResourceSystemV1 as getConfigs } from "@/services/userCenter/mods/resource/getResourceSystemV1"
import { treeMap } from "@/utils/tree.js"
import { useUserStoreHook } from "@app/data-platform/store/user"

/** 公司超管 */
const is_super = computed(() => {
  return useUserStoreHook()?.is_compony_super
})

// Vue bug：此处无法引用外部类型定义
export type DialogProps = {
  visible: boolean

  editId?: number | string
}
export type DialogEmit = {
  (event: "close"): void
  (event: "remove", id: number | string): void
  (event: "edit", id: number | string): void
  (event: "update:visible", val: boolean): void
}

// type RoleItemType = any

const props = withDefaults(defineProps<DialogProps>(), {
  visible: false,
})
const emit = defineEmits<DialogEmit>()

const funcConfigs = ref<any>()
const data = ref<any>({
  label: "超级管理员",
  remark: "最大权限",
  resources: [],
})

function onEdit() {
  emit("edit", props.editId!)
  emit("update:visible", false)
}

function onRemove() {
  emit("remove", props.editId!)
}

const onCancel = () => {
  emit("close")
  emit("update:visible", false)
}

onMounted(() => {
  if (props.editId) {
    getRoleDetail(props.editId).then(res => {
      data.value.label = res.label
      data.value.remark = res.remark
      data.value.resources = res.resource_ids
    })
  }
  getConfigs({ params: { system_id: "018acffb-9ab7-8ea0-534f-7f5a0012337d" } })
    .then(data => {
      const funcs = treeMap(data, {
        conversion: item => ({ ...item }),
      })
      const funclist = funcs.filter(item => item.assignable)
      funcConfigs.value = funclist
    })
    .catch(() => {
      funcConfigs.value = [] as any
    })
})
</script>
<style lang="scss">
.role-detail-form {
  .el-form-item__label {
    // display: none;
  }
}

.is_auto_add_new_company {
  margin-left: 30px;
  font-size: 12px;
  line-height: 36px;
  color: #0d0d0d;
}
</style>
