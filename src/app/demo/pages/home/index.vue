<script setup lang="ts" name="home">
import { useRouter } from "vue-router"

import Counter from "./Counter.vue"

const router = useRouter()

function toLogin() {
  router.push("/register")
}
</script>

<template>
  <div class="home card">
    <img class="home-bg" src="@app/demo/assets/images/welcome.png" alt="welcome" />
    <div>
      <Counter />
    </div>

    <div>
      <ElButton type="primary" @click="toLogin">跳转到注册页面</ElButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url("./index.scss");
</style>
