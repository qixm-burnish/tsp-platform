<script setup lang="ts">
import { ref } from "vue"
import { useNav } from "@app/data-platform/layout/hooks/useNav"
import Breadcrumb from "./sidebar/breadCrumb.vue"
import topCollapse from "./sidebar/topCollapse.vue"
import { getAccountMyselfV1 as getinfo } from "@/services/userCenter/mods/account/getAccountMyselfV1"
import Detail from "./userinfodetail/detail.vue"
import DetailEdit from "./userinfodetail/detailEdit.vue"
import { ElMessage } from "element-plus"
import { useUserStoreHook } from "@app/data-platform/store/user"

const { device, logout, pureApp, userAvatar, avatarsStyle, toggleSideBar } = useNav()

const userInfo = ref<any>("")
getinfo({ params: { system_id: "018acffb-9ab7-8ea0-534f-7f5a0012337d" } }).then(res => {
  userInfo.value = res
  useUserStoreHook().SET_COMPANY_ID(res.company.id)
  useUserStoreHook().SET_COMPANY_SUPER(res.is_company_super_admin)
})

const detailShow = ref<boolean>(false)
const handleDetail = () => {
  detailShow.value = true
}
const handleDetailClose = val => {
  detailShow.value = val
}
const handleEdit = () => {
  detailShow.value = false
  detailEditShow.value = true
}
const detailEditShow = ref<boolean>(false)
const handleDetailEditClose = val => {
  detailEditShow.value = val
}
const handleEditDone = val => {
  detailEditShow.value = val
  ElMessage({
    message: "修改成功",
    type: "success",
  })
  getinfo({ params: { system_id: "018acffb-9ab7-8ea0-534f-7f5a0012337d" } }).then(res => {
    userInfo.value = res
  })
}
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
          <p v-if="userInfo" class="ml-2 dark:text-white">{{ userInfo?.username }}</p>
        </span>
        <template #dropdown>
          <div class="navbar-user-info">
            <ul class="navbar-ui-list">
              <li class="flex navbar-ui-item">
                <div class="navbar-ui-label">用户名</div>
                <div class="navbar-ui-value">{{ userInfo?.username ?? "- -" }}</div>
              </li>
              <li class="flex navbar-ui-item">
                <div class="navbar-ui-label">手机号</div>
                <div class="navbar-ui-value">{{ userInfo?.phone ?? "- -" }}</div>
              </li>
              <li class="flex navbar-ui-item">
                <div class="navbar-ui-label">角色</div>
                <div class="navbar-ui-value">{{ userInfo ? userInfo.system_related?.role_name : "- -" }}</div>
              </li>
              <li class="flex navbar-ui-item">
                <div class="navbar-ui-label">所属企业</div>
                <div class="navbar-ui-value">{{ userInfo ? userInfo.company?.name : "- -" }}</div>
              </li>
            </ul>
            <div class="flex justify-end navbar-ui-buttons">
              <ElButton class="btn btn_blue" @click="handleDetail">个人详情</ElButton>
              <ElButton class="btn btn_blue">修改密码</ElButton>
              <ElButton class="btn" type="danger" @click="logout">退出</ElButton>
            </div>
          </div>
        </template>
      </el-dropdown>
    </div>
    <Detail :visible="detailShow" :detailInfo="userInfo" @close="handleDetailClose" @edit="handleEdit" />
    <DetailEdit :visible="detailEditShow" @close="handleDetailEditClose" @edit="handleEdit" @confirm="handleEditDone" />
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
    margin-right: 22px;
    color: #000000d9;

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
    width: 313px;
    padding: 18px 18px 17px 28px;
    font-size: 12px;
    line-height: 20px;
  }

  &-ui {
    &-item {
      margin-bottom: 20px;
    }

    &-label {
      flex: none;
      width: 50px;
      margin-right: 20px;
      color: #8d8d8d;
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
        padding-right: 29px;
        padding-left: 29px;
        background: #000;
      }

      .btn {
        width: 81px;
        height: 28px;
        border-radius: 4px;
      }

      .btn_blue {
        color: #2d77d4;
        background: #fff;
        border-color: #2d77d4;
      }
    }
  }
}
</style>
