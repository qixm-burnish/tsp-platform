<template>
  <span class="com-text">{{ props?.modelValue ? props?.modelValue : "- -" }}</span>
</template>
<script lang="ts" setup>
type IndexProps = {
  modelValue?: string | number
}

const props = defineProps<IndexProps>()
</script>
