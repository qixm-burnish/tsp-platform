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
  height: 100%;

  display: flex;
  flex-direction: column;

  .slc {
    &-header {
      flex: none;

      font-size: 24px;
      line-height: 30px;
      font-weight: normal;

      padding: 33px 65px;
    }

    &-body {
      flex: 1;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
