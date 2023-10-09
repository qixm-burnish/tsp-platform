<script setup lang="ts">
defineOptions({
  name: "SimpleLayout",
})

type IndexProps = {
  title: string
}

defineProps<IndexProps>()
</script>

<template>
  <div class="simple-layout-com">
    <h2 class="slc-header">{{ title }}</h2>
    <div class="slc-body">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.simple-layout-com {
  display: flex;
  flex-direction: column;
  height: 100%;

  .slc {
    &-header {
      flex: none;
      padding: 33px 65px;
      font-size: 24px;
      font-weight: normal;
      line-height: 30px;
    }

    &-body {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
