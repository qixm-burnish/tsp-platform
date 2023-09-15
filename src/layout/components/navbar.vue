<script setup lang="ts">
import { useNav } from "@/layout/hooks/useNav"
import Breadcrumb from "./sidebar/breadCrumb.vue"
import topCollapse from "./sidebar/topCollapse.vue"

const { layout, device, logout, pureApp, username, userAvatar, avatarsStyle, toggleSideBar } = useNav()
</script>

<template>
  <div class="navbar bg-[#fff] shadow-sm shadow-[rgba(0, 21, 41, 0.08)] dark:shadow-[#0d0d0d]">
    <topCollapse
      v-if="device === 'mobile'"
      class="hamburger-container"
      :is-active="pureApp.sidebar.opened"
      @toggleClick="toggleSideBar"
    />

    <Breadcrumb class="breadcrumb-container" />

    <div class="vertical-header-right">
      <!-- 退出登录 -->
      <el-dropdown trigger="click">
        <span class="select-none el-dropdown-link navbar-bg-hover">
          <img :src="userAvatar" :style="avatarsStyle" />
          <p v-if="username" class="dark:text-white">{{ username }}</p>
        </span>
        <template #dropdown>
          <div class="navbar-user-info">
            <ul class="navbar-ui-list">
              <li class="flex navbar-ui-item">
                <div class="navbar-ui-label">用户名</div>
                <div class="navbar-ui-value">11212313212315121231231231</div>
              </li>
              <li class="flex navbar-ui-item">
                <div class="navbar-ui-label">手机号</div>
                <div class="navbar-ui-value">22</div>
              </li>
              <li class="flex navbar-ui-item">
                <div class="navbar-ui-label">所属企业</div>
                <div class="navbar-ui-value">33</div>
              </li>
            </ul>
            <div class="flex justify-end navbar-ui-buttons">
              <ElButton>个人详情</ElButton>
              <ElButton type="danger" @click="logout">退出</ElButton>
            </div>
          </div>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 48px;
  overflow: hidden;

  .hamburger-container {
    float: left;
    height: 100%;
    line-height: 48px;
    cursor: pointer;
  }

  .vertical-header-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-width: 280px;
    height: 48px;
    color: #000000d9;
    margin-right: 22px;

    .el-dropdown-link {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 48px;
      padding: 10px;
      color: #000000d9;
      cursor: pointer;

      p {
        font-size: 14px;
      }

      img {
        width: 22px;
        height: 22px;
        border-radius: 50%;
      }
    }
  }

  .breadcrumb-container {
    float: left;
    margin-left: 16px;
  }

  &-user-info {
    padding: 18px 18px 17px 28px;

    font-size: 12px;
    line-height: 20px;
    width: 280px;
  }

  &-ui {
    &-item {
      margin-bottom: 20px;
    }
    &-label {
      margin-right: 20px;

      color: #8d8d8d;
      width: 50px;
      flex: none;
      text-align: right;
    }

    &-value {
      flex: 1;
      color: #262626;
      word-break: break-all;
    }

    &-buttons {
      margin-top: 64px;

      :deep(.el-button--danger) {
        background: #000000;
        padding-left: 29px;
        padding-right: 29px;
      }
    }
  }
}
</style>
