<script setup lang="ts">
import { useRoute } from "vue-router"
import { emitter } from "@/utils/mitt"
import SidebarItem from "./sidebarItem.vue"
import { useNav } from "@app/data-platform/layout/hooks/useNav"
import { responsiveStorageNameSpace } from "@app/data-platform/config"
import { storageLocal, isAllEmpty } from "@pureadmin/utils"
import { findRouteByPath, getParentPaths } from "@app/data-platform/routes/utils"
import { usePermissionStoreHook } from "@app/data-platform/store/permission"
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue"

import logoUri from "@/assets/layout/logo.png"

const route = useRoute()
const showLogo = ref(storageLocal().getItem<StorageConfigs>(`${responsiveStorageNameSpace()}configure`)?.showLogo ?? true)

const { device, pureApp, isCollapse, menuSelect } = useNav()

const subMenuData = ref([])

const menuData = computed(() => {
  return pureApp.layout === "mix" && device.value !== "mobile" ? subMenuData.value : usePermissionStoreHook().wholeMenus
})

const loading = computed(() => (pureApp.layout === "mix" ? false : menuData.value.length === 0 ? true : false))

const defaultActive = computed(() => (!isAllEmpty(route.meta?.activePath) ? route.meta.activePath : route.path))

function getSubMenuData() {
  let path = ""
  path = defaultActive.value
  subMenuData.value = []
  // path的上级路由组成的数组
  const parentPathArr = getParentPaths(path, usePermissionStoreHook().wholeMenus)
  // 当前路由的父级路由信息
  const parenetRoute = findRouteByPath(parentPathArr[0] || path, usePermissionStoreHook().wholeMenus)
  if (!parenetRoute?.children) return
  subMenuData.value = parenetRoute?.children
}

watch(
  () => [route.path, usePermissionStoreHook().wholeMenus],
  () => {
    if (route.path.includes("/redirect")) return
    getSubMenuData()
    menuSelect(route.path)
  },
)

onMounted(() => {
  getSubMenuData()

  emitter.on("logoChange", key => {
    showLogo.value = key
  })
})

onBeforeUnmount(() => {
  // 解绑`logoChange`公共事件，防止多次触发
  emitter.off("logoChange")
})
</script>

<template>
  <div v-loading="loading" :class="['sidebar-container', showLogo ? 'has-logo' : '']">
    <el-scrollbar wrap-class="scrollbar-wrapper" :class="[device === 'mobile' ? 'mobile' : 'pc']">
      <el-menu
        router
        unique-opened
        mode="vertical"
        class="select-none outer-most"
        :collapse="isCollapse"
        :default-active="defaultActive"
        :collapse-transition="false"
      >
        <sidebar-item
          v-for="routes in menuData"
          :key="routes.path"
          :item="routes"
          :base-path="routes.path"
          class="select-none outer-most"
        />
      </el-menu>
    </el-scrollbar>
    <div class="sidebar-logo">
      <RouterLink to="/">
        <img :src="logoUri" class="logo" />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sidebar-container {
  .sidebar-logo {
    display: flex;
    justify-content: center;

    > a {
      width: auto !important;
      padding-left: 0 !important;
    }
  }

  .logo {
    width: 100px;
  }
}

:deep(.el-loading-mask) {
  opacity: 0.45;
}
</style>
