<template>
  <el-dialog title="角色详情" fullscreen :model-value="props.visible" @close="onCancel" class="role-detail-dialog">
    <el-form class="role-detail-form">
      <div class="ly-role-module">
        <div class="ly-role-module__row">
          <el-form-item label="角色名称" prop="role_name" label-width="80px" class="ly-role-module__name">
            <FormText v-model="data.role_name" />
          </el-form-item>
        </div>
        <div class="ly-role-module__row">
          <el-form-item label="备注" prop="remark" label-width="50px" class="ly-role-module__remark">
            <FormText v-model="data.remark" />
          </el-form-item>
        </div>
      </div>
      <div class="ly-role-module">
        <div class="ly-role-module__title">功能权限</div>
        <el-form-item label="功能权限" prop="permissions" label-width="0px">
          <FuncList v-model="data.permissions" :configs="funcConfigs" />
        </el-form-item>
      </div>
    </el-form>
    <!-- <div class="role-edit-footer" slot="footer">
      <template v-if="!loading">
        <el-button v-if="data?.role_name != '超级管理员'" type="primary" @click="onEdit" v-super>修改</el-button>
        <el-popconfirm
          v-if="data?.role_name != '超级管理员'"
          :title="`确定删除(${data?.role_name})吗？`"
          @confirm="onRemove"
          v-super
        >
          <el-button slot="reference" type="danger" style="margin: 0 10px">删除</el-button>
        </el-popconfirm>
        <el-button @click="onCancel">取消</el-button>
      </template>
    </div> -->
  </el-dialog>
</template>

<script lang="ts" setup>
import { onMounted, shallowRef, ref } from "vue"
// import useDetailDialog from "@/hooks/useDetailDialog"
// import { treeMap } from "@/utils/tree"
import type { OptionType } from "@/components/AuthFunctionList/item.vue"

import FuncList from "@/components/AuthFunctionView/index.vue"

import FormText from "@/components/FormText/index.vue"

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

const funcConfigs = shallowRef<OptionType[]>([
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
])
const data = ref<any>({
  role_name: "超级管理员",
  remark: "最大权限",
  permissions: [100101],
})
console.log(data.value)

// const { loading, data, onCancel } = useDetailDialog<RoleItemType>(props, emit, getItem)

// function onEdit() {
//   emit("edit", props.editId!)
//   emit("update:visible", false)
// }

// function onRemove() {
//   emit("remove", props.editId!)
// }

const onCancel = () => {
  emit("close")
  emit("update:visible", false)
}

onMounted(() => {
  // if (isJmcUser) {
  //   getConfigs({ queryParams: {} })
  //     .then(data => {
  //       const funcs = treeMap(data, {
  //         conversion: item => ({ ...item, label: item.module || item.permission_name, id: item.id || item.module }),
  //       })
  //       funcConfigs.value = funcs
  //     })
  //     .catch(() => {
  //       funcConfigs.value = [] as any[]
  //     })
  // } else {
  //   getCompanyConfigs({ queryParams: { company: CompanyId } })
  //     .then(data => {
  //       const funcs = treeMap(data, {
  //         conversion: item => ({ ...item, label: item.module || item.permission_name, id: item.id || item.module }),
  //       })
  //       funcConfigs.value = funcs
  //     })
  //     .catch(() => {
  //       funcConfigs.value = [] as any[]
  //     })
  // }
})
</script>
<style lang="scss">
.role-detail-form {
  .el-form-item__label {
    display: none;
  }
}

.is_auto_add_new_company {
  margin-left: 30px;
  font-size: 12px;
  line-height: 36px;
  color: #0d0d0d;
}
</style>
