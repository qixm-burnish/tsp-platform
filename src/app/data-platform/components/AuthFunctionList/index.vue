<template>
  <div class="com-auth-func">
    <div class="com-auth-func-title">
      <span>功能权限</span>
      <el-checkbox v-model="isCheckedAll" @change="onCheckChangeChange">选择全部</el-checkbox>
    </div>
    <div class="com-auth-func-list">
      <FuncItem
        v-for="item in configs"
        :key="item.id"
        :options="item.children"
        :title="item.label"
        :value="props.modelValue"
        @change="onItemChange"
        className="com-auth-func-list-item"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { withDefaults, computed } from "vue"
import { treeToList } from "@/utils/tree"

import FuncItem from "./item.vue"
import type { OptionType } from "./item.vue"

type IndexPropsType = {
  modelValue?: number[]
  configs?: OptionType[]
}

const props = withDefaults(defineProps<IndexPropsType>(), {
  modelValue: () => [],
  configs: () => [],
})

const emit = defineEmits<{
  (type: "input", val?: number[])
}>()

// 所有有效的key字段集合：主要用于全选
const expanedKeys = computed<number[]>(() =>
  treeToList(props.configs)
    .map(item => (item.parent_id ? item.id : ""))
    .filter(item => item),
)
const isCheckedAll = computed(() => expanedKeys.value.length && expanedKeys.value.length === props.modelValue.length)

function onItemChange(val?: number[]) {
  emit("input", val)
}

console.log(expanedKeys.value)

function onCheckChangeChange(isChecked: boolean) {
  emit("input", isChecked ? expanedKeys.value : [])
}
</script>
<style lang="scss" scoped>
.com-auth-func {
  &-title {
    height: 36px;
    padding-left: 16px;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
    line-height: 36px;
    color: #0d0d0d;
    background: #e8e8e8;

    :deep(.el-checkbox) {
      margin-left: 16px;
    }
  }

  &-list {
    display: flex;
    flex-wrap: wrap;

    > * {
      flex: none;
      width: 301px;
      margin-right: 23px;
      margin-bottom: 28px;
    }
  }
}
</style>
