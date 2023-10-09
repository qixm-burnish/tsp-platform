<template>
  <div :class="classObj">
    <div class="com-auth-func-item-head">
      <el-checkbox class="com-auth-func-item-head__title" v-model="isCheckedAll" @change="onCheckChange">{{
        props.title
      }}</el-checkbox>
    </div>
    <el-tree
      ref="treeRef"
      show-checkbox
      check-on-click-node
      node-key="id"
      :data="props.options"
      :indent="24"
      @check="onTreeChange"
      :default-expanded-keys="expanedKeys"
      :default-checked-keys="checkedKeys"
      :expand-on-click-node="false"
    />
  </div>
</template>
<script lang="ts" setup>
import { withDefaults, computed, ref, watch } from "vue"

import { treeToList, findPath } from "@/utils/tree"

// forEach

export type OptionType = {
  id: number | string
  label: string
  disabled?: boolean
  module?: string
  permiission_name?: string
  children?: OptionType[]
}

type IndexPropsType = {
  title?: string

  value?: number[]
  options?: OptionType[]
  className?: string
}

const props = withDefaults(defineProps<IndexPropsType>(), {
  options: () => [],
  value: () => [],
})
const emit = defineEmits<{
  (type: "input", val?: number[])
  (type: "change", val?: number[])
}>()
const classObj = computed(() => ["com-auth-func-item", props.className])
const expanedKeys = computed<number[]>(() => treeToList(props.options).map(item => item.id))
const checkedKeys = computed<number[]>(() => props.value.filter(key => expanedKeys.value.includes(key)))
const isCheckedAll = computed(() => expanedKeys.value.length && expanedKeys.value.length === checkedKeys.value.length)
const treeRef = ref<null | any>()

function onChange(keys: number[]) {
  emit("input", keys)
  emit("change", keys)
}

function onCheckChange(val: boolean) {
  let keys: number[] = []
  if (val) {
    keys = Array.from(new Set(props.value.concat(expanedKeys.value)))
  } else {
    keys = props.value.filter(item => !expanedKeys.value.includes(item))
  }
  onChange(keys)
}

function onTreeChange(data) {
  let ids = [data.id]
  let vals = props.value

  if (data.children) {
    ids = ids.concat(data.children.map(item => item.id))
    // 如果已选中父节点：则删除父节点及其子节点；未选中，则选中当前节点及子节点
    vals = vals.includes(data.id) ? vals.filter(item => !ids.includes(item)) : vals.concat(ids)
  } else {
    // 如果选中是叶节点
    // 找到节点路径
    const nodes = findPath(props.options, item => item.id === data.id) ?? []
    ids = nodes.map(item => item.id)

    if (!vals.includes(data.id)) {
      // 如果该节点未被选中，则选中其祖先节点
      vals = Array.from(new Set(vals.concat(ids))) // 去除重复的id
    } else {
      // 如果是取消选中节点，则需要判断其祖先节点是否只有一个节点，是则取消祖先节点选中，否则只取消节点自身
      // const vals1 = vals.filter(id => id != data.id)
      // const needRemainIds = treeIdPick(nodes, (item) => item?.children?.filter(item => vals1.includes(item.id)).length)
      // ids = ids.filter(id => !needRemainIds.includes(id))
      // vals = vals.filter(id => !ids.includes(id))

      //取消子节点父节点不受影响
      vals = vals.filter(id => id != data.id)
    }
  }
  onChange(vals)
}

// function treeIdPick(tree, func) {
//   const ids: number[] = []

//   forEach(tree, (item) => {
//     if (func(item)) {
//       ids.push(item.id)
//     }
//   })

//   return ids
// }

watch(
  () => checkedKeys.value,
  val => {
    treeRef.value.setCheckedKeys(val)
  },
)
</script>
<style lang="scss">
.com-auth-func-item {
  display: flex;
  flex-flow: column nowrap;
  padding: 16px;

  .com-auth-func-item-head {
    display: flex;
    flex: none;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    color: #0d0d0d;

    &__title {
      margin-bottom: 8px;
      font-weight: 500;
    }
  }

  .el-icon-caret-right {
    display: none;
  }

  .el-tree {
    flex: 1;
    padding: 16px;
    color: rgba(#0d0d0d, 0.65);
    border: 1px dashed rgba(#707070, 0.25);
    border-radius: 4px;

    > .el-tree-node > .el-tree-node__content {
      color: #000;

      > .el-tree-node__expand-icon {
        display: none;
      }
    }

    > .el-tree-node > .el-tree-node__children {
      > .el-tree-node > .el-tree-node__content {
        color: #000;

        > .el-tree-node__expand-icon {
          display: none;
        }
      }
    }
  }
}
</style>
