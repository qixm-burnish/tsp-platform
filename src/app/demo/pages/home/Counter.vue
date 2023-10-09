<script setup lang="ts">
import { ElButton, ElCard, ElButtonGroup } from "element-plus"
import { useHomeStore } from "@app/demo/store/home"
import { storeToRefs } from "pinia"

const store = useHomeStore()
const { count } = storeToRefs(store)
const { increaseCount, decreaseCount } = store
</script>

<template>
  <ElCard class="counter">
    <template #header>
      <div class="card-header">
        <span>Store counter</span>
        <ElButtonGroup>
          <ElButton @click="_ => increaseCount()">+</ElButton>
          <ElButton @click="_ => decreaseCount()" type="danger">-</ElButton>
        </ElButtonGroup>
      </div>
    </template>
    <div>
      {{ count }}
    </div>
  </ElCard>
</template>

<style scoped lang="scss">
.counter {
  width: 240px;

  .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
