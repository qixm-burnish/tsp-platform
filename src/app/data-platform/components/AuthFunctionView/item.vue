<template>
  <div :class="classObj">
    <div class="com-auth-func-view-item-head">
      <span class="com-auth-func-view-item-head__title">{{ props.title }}</span>
    </div>
    <el-tree node-key="id" :data="props.options" :indent="24" :default-expanded-keys="expanedKeys" :expand-on-click-node="false">
      <template #default="{ node, data }">
        <!-- <i class="el-icon-check auth-func-pos" v-if="props.selected.includes(data.id)" /> -->
        <el-icon class="auth-func-pos" v-if="props.selected.includes(data.id)"><Select /></el-icon>
        <span v-else class="auth-func-pos auth-func-pos-empty" />
        <span :class="[props.selected.includes(data.id) ? 'auth-func-label-checked' : 'auth-func-label-unchecked']">{{
          node.label
        }}</span>
      </template>
      <!-- <span class="auth-custom-tree-node" slotScope="{ node, data }">
        
      </span> -->
    </el-tree>
  </div>
</template>
<script lang="ts" setup>
import { withDefaults, computed } from "vue"
import { treeToList } from "@/utils/tree"
import { Select } from "@element-plus/icons-vue"

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

  selected?: number[]
  options?: OptionType[]
  className?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<IndexPropsType>(), {
  options: () => [],
  selected: () => [],
  disabled: false,
})
console.log(props)

const classObj = computed(() => ["com-auth-func-view-item", props.className])
const expanedKeys = computed<number[]>(() => treeToList(props.options).map(item => item.id))
</script>
<style lang="scss">
.com-auth-func-view-item {
  display: flex;
  flex-flow: column nowrap;
  padding: 16px;

  .com-auth-func-view-item-head {
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

  .el-icon-check {
    color: #285fee;
  }

  .auth-func-pos {
    margin-right: 8px;
  }

  .auth-func-pos-empty {
    margin-right: 22px;
  }

  .auth-func-label-checked {
    color: #000;
  }

  .auth-func-label-unchecked {
    color: rgb(13 13 13 / 65%);
  }
}
</style>
