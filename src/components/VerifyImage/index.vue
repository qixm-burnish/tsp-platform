<script setup lang="ts">
import { ref, onMounted } from "vue"
import { getOtherCommonCaptchaImageV1 } from "@/services/userCenter/mods/other/getOtherCommonCaptchaImageV1"

import { ExposeType, EmitType } from "./type"

type PropsType = {
  scene: string
}

defineOptions({
  name: "VerifyImage",
})

const props = withDefaults(defineProps<PropsType>(), {
  scene: "login",
})
const emits = defineEmits<EmitType>()

const sourceUrl = ref()

function genImage() {
  getOtherCommonCaptchaImageV1({
    params: {
      scene: props.scene,
    },
    withToken: false,
    responseType: "arraybuffer",
    beforeResponseCallback(res) {
      const binaryData = []
      binaryData.push(res.data) //My blob
      sourceUrl.value = URL.createObjectURL(new Blob(binaryData, { type: res.headers["Content-Type"] }))

      emits("change", res.headers.get("X-Unique-Key"))
    },
  })
}

defineExpose<ExposeType>({
  refresh: genImage,
})

onMounted(() => {
  genImage()
})
</script>

<template>
  <img class="com-verify-image" :src="sourceUrl" @click="genImage" v-show="sourceUrl" />
</template>

<style lang="scss">
.com-verify-image {
  cursor: pointer;

  width: 117px;
  height: 28px;
  border-radius: 4px;
}
</style>
