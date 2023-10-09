<script setup lang="ts">
import { reactive, ref } from "vue"

import { Step1FormValue } from "./type"
import SimpleLayout from "@/components/SimpleLayout"
import Step1 from "./step1.vue"
import Step2 from "./step2.vue"

defineOptions({
  name: "Forget",
})

const step1Values = reactive<Step1FormValue>({})
const activeStep = ref(1)

function onNext(values) {
  activeStep.value = 2
  Object.assign(step1Values, values)
}

function onBack() {
  activeStep.value = 1
}
</script>

<template>
  <SimpleLayout class="forget-pg" title="忘记密码">
    <div class="forget-content">
      <Step1 v-if="activeStep == 1" v-bind="step1Values" @next="onNext" />
      <Step2 v-else v-bind="step1Values" @back="onBack" />
    </div>
  </SimpleLayout>
</template>

<style lang="scss">
.forget-pg {
  .forget {
    &-content {
      width: 310px;
    }
  }
}
</style>
