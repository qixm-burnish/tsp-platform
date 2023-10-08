<template>
  <div class="com-auth-func-view">
    <FuncItem
      v-for="item in props.configs"
      :key="item.id"
      :options="item.children"
      :selected="props.modelValue"
      :title="item.label"
      className="com-auth-func-view-item"
    />
  </div>
</template>
<script lang="ts" setup>
import { withDefaults } from "vue"

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
</script>
<style lang="scss" scoped>
.com-auth-func-view {
  display: flex;
  flex-wrap: wrap;

  > * {
    flex: none;
    width: 301px;
    margin-right: 23px;
    margin-bottom: 28px;
  }
}
</style>
