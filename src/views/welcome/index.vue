<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"

import SimpleLayout from "@/components/SimpleLayout"
import { getSystemSelfV1 as getSystemList } from "@/services/userCenter/mods/system/getSystemSelfV1"

defineOptions({
  name: "Welcome",
})

const router = useRouter()
const systemList = ref<defs.userCenter.SystemList[]>([])
const activeSystem = ref("")

function onSytemItemClick(item: defs.userCenter.SystemList) {
  if (item.status == "enable") {
    activeSystem.value = ""
    return
  }

  activeSystem.value = item.id
}

onMounted(() => {
  getSystemList({
    params: {
      page: 1,
      size: 99,
      internal: false,
    },
  }).then(data => {
    systemList.value = data
  })
})
</script>

<template>
  <SimpleLayout class="welcome-pg" title="请选择要登录的系统">
    <div class="welcome-content">
      <ElScrollbar class="welcome-scrollbar">
        <div class="welcome-list">
          <div
            v-for="(item, index) in systemList"
            :key="item.id"
            class="flex flex-col items-center welcome-list-item"
            :class="{ 'welcome-list-item-active': activeSystem == item.id || item.status == 'enable' }"
            @click="() => onSytemItemClick(item)"
            :style="`margin-right: ${index != systemList.length - 1 ? 20 : 0}px`"
          >
            <img :src="item.icon" v-if="item.icon" class="welcome-list-item-icon" />
            <div class="welcome-list-item-title">{{ item.label }}</div>
            <div class="welcome-list-item-description">{{ item.description }}</div>
          </div>
        </div>
      </ElScrollbar>
      <div class="flex justify-center mt-[100px]">
        <ElButton class="welcome-btn" :disabled="!activeSystem" type="primary">需要增加系统权限请点击申请</ElButton>
      </div>
    </div>
  </SimpleLayout>
</template>

<style lang="scss">
.welcome-pg {
  .el-form-item__label {
    font-weight: 700;
  }

  .welcome {
    &-scrollbar {
      max-width: 90vw;
      margin-bottom: 200px;
    }

    &-list {
      display: flex;
      flex-wrap: nowrap;
      align-items: stretch;

      &-item {
        flex: none;
        width: 260px;

        padding: 0 20px;
        padding-bottom: 23px;
        border-radius: 12px;
        border: 1px solid #afb6bf;
        opacity: 0.5;
        cursor: pointer;

        &:last-of-type {
          margin-bottom: 0;
        }

        &-active {
          opacity: 1;
          border-color: #4181d9;
        }

        &-icon {
          width: 200px;
        }

        &-title {
          font-size: 20px;
          line-height: 21px;
          text-align: center;

          margin-top: 24px;
          margin-bottom: 19px;
        }

        &-description {
          font-size: 14px;
          line-height: 21px;
          color: #979da5;
        }

        &-checked {
          position: absolute;
          left: -60px;

          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>
