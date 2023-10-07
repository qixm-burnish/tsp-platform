<script setup lang="ts">
import { ref } from "vue"
import { userCenterUrlPrefix } from "@/utils/request/config"
import { ExposeType } from "./type"

type PropsType = {
  scene: string
}

defineOptions({
  name: "VerifyImage",
})

const props = withDefaults(defineProps<PropsType>(), {
  scene: "login",
})

const sourceUrl = ref(genImageUrl())

function genImageUrl() {
  return userCenterUrlPrefix + `/v1/other/common/captcha/image?identifier=${Date.now()}&scene=${props.scene}&time=${Date.now()}`
}

function onClick() {
  sourceUrl.value = genImageUrl()
}

defineExpose<ExposeType>({
  refresh: genImageUrl,
})
</script>

<template>
  <img class="com-verify-image" :src="sourceUrl" @click="onClick" />
</template>

<style lang="scss">
.com-verify-image {
  cursor: pointer;

  width: 117px;
  height: 28px;
  border-radius: 4px;
}
</style>
