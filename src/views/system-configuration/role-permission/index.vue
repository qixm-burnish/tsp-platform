<template>
  <div class="flex justify-between role-permission max-body">
    <div class="w-[413px] role-permission_left pt-[24px] pl-[40px]">
      <div class="role-permission_left_item">
        <div class="role-permission_left_item_left">企业全称</div>
        <div class="role-permission_left_item_right">东风蓝卡（武汉）科技有限公司</div>
      </div>
      <div class="role-permission_left_item">
        <div class="role-permission_left_item_left">统一社会信用代码</div>
        <div class="role-permission_left_item_right">xxxxxxxxxxxxxxxx</div>
      </div>
      <div class="role-permission_left_item">
        <div class="role-permission_left_item_left">企业注册地址</div>
        <div class="role-permission_left_item_right">xxxxxxxxxxxxx</div>
      </div>
      <div class="role-permission_left_item">
        <div class="role-permission_left_item_left">创建时间</div>
        <div class="role-permission_left_item_right">2023-10-10 13:12</div>
      </div>
      <div class="role-permission_left_item">
        <div class="role-permission_left_item_left">法定代表人</div>
        <div class="role-permission_left_item_right">法外狂徒张三</div>
      </div>
      <div class="role-permission_left_item">
        <div class="role-permission_left_item_left">法人联系电话</div>
        <div class="role-permission_left_item_right">18222222222</div>
      </div>
      <div class="role-permission_left_item">
        <div class="role-permission_left_item_left">营业执照</div>
        <div class="role-permission_left_item_right">
          <el-image
            style="width: 136px; height: 98px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="fill"
          />
        </div>
      </div>
      <div class="role-permission_left_item">
        <div class="role-permission_left_item_left">法人身份证</div>
        <div class="role-permission_left_item_right">
          <el-image
            style="width: 138px; height: 85px"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            fit="fill"
          />
        </div>
      </div>
    </div>
    <div class="w-[324px] role-permission_center pt-[24px]">
      <div class="role-permission_center_header flex justify-between">
        <el-input v-model="roleName" class="w-50 m-2" placeholder="输入角色名称" :suffix-icon="Search" />
        <el-button class="role-permission_center_header_btn" type="primary" @click="handleAddRole">
          添加角色
          <el-icon class="role-permission_center_header_btn_icon"><CirclePlus /></el-icon>
        </el-button>
      </div>
      <div class="role-permission_center_list">
        <div class="role-permission_center_list_item flex justify-between p-[16px]">
          <div class="role-permission_center_list_item_left">超级管理员</div>
          <div class="role-permission_center_list_item_right" @click="handleRoleView">权限查看</div>
        </div>
        <div class="role-permission_center_list_item flex justify-between p-[16px]">
          <div class="role-permission_center_list_item_left">华东大区</div>
          <!-- <div class="role-permission_center_list_item_right"></div> -->
        </div>
        <div class="role-permission_center_list_item flex justify-between p-[16px]">
          <div class="role-permission_center_list_item_left">西南大区</div>
          <!-- <div class="role-permission_center_list_item_right"></div> -->
        </div>
      </div>
    </div>

    <div class="flex-1 role-permission_right pt-[24px] pl-[20px] pr-[20px] overflow-auto">
      <div class="role-permission_right_header flex justify-end">
        <el-button class="role-permission_right_header_btn" type="primary" @click="handleAddAccount">
          添加账号
          <el-icon class="role-permission_right_header_icon"><CirclePlus /></el-icon>
        </el-button>
      </div>
      <div class="role-permission_right_list">
        <div
          class="role-permission_right_list_item flex justify-between"
          v-for="(item, index) in AccountList"
          :key="item.id"
          :class="index == AccountList.length ? 'role-permission_right_list_item_noborder' : ''"
        >
          <div class="role-permission_right_list_item_left">
            <div class="role-permission_right_list_item_left_name">{{ item.name }}</div>
            <div class="role-permission_right_list_item_left_phone">
              <span class="role-permission_right_list_item_left_phone_left">账号：{{ item.phone }} </span>
              <span>邮箱：{{ item.email }}</span>
            </div>
            <div class="role-permission_right_list_item_left_remarker">备注：{{ item.remark ? item.remark : "--" }}</div>
          </div>
          <div class="role-permission_right_list_item_right flex">
            <div class="role-permission_right_list_item_right_find">找回密码</div>
            <div class="role-permission_right_list_item_right_del">删除</div>
          </div>
        </div>
      </div>
    </div>
    <EditDialog :visible="editRoleVisible" :editId="editRoleId" @confirm="onEditFinish" @close="onEditFinish" />
    <ViewDialog :visible="viewRoleVisible" :editId="editRoleId" @close="handleViewClose" />
    <AccountEditDialog
      :visible="editAccountVisible"
      :editId="editAccountId"
      @confirm="onAccountEditFinish"
      @close="onAccountEditFinish"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Search, CirclePlus } from "@element-plus/icons-vue"
import EditDialog from "./components/roleEdit.vue"
import ViewDialog from "./components/roleDetail.vue"
import AccountEditDialog from "./components/accountEdit.vue"

defineOptions({
  name: "Rolepermission",
})
const roleName = ref("")

const AccountList = ref([
  {
    id: 1,
    name: "张强",
    phone: "18222222222",
    email: "18222222222",
    remark: "",
  },
  {
    id: 2,
    name: "张强1",
    phone: "18222222222",
    email: "18222222222",
    remark: "",
  },
  {
    id: 3,
    name: "张强2",
    phone: "18222222222",
    email: "18222222222",
    remark: "",
  },
])

const editRoleId = ref<null | number>()
const editRoleVisible = ref(false)
const handleAddRole = () => {
  editRoleVisible.value = true
}
const onEditFinish = () => {
  editRoleVisible.value = false
}

const editAccountId = ref<null | number>()
const editAccountVisible = ref(false)
const handleAddAccount = () => {
  editAccountVisible.value = true
}
const onAccountEditFinish = () => {
  editAccountVisible.value = false
}

const viewRoleVisible = ref(false)
const handleRoleView = () => {
  viewRoleVisible.value = true
}
const handleViewClose = () => {
  viewRoleVisible.value = false
}
</script>

<style scoped lang="scss">
.role-permission {
  &_left {
    height: 100%;
    background: #fff;
    border-radius: 4px;

    &_item {
      display: flex;
      margin-bottom: 24px;
      font-size: 12px;
      color: #8d8d8d;

      &_left {
        width: 100px;
        margin-right: 22px;
        text-align: right;
      }
    }
  }

  &_center {
    height: 100%;
    margin: 0 16px;
    background: #fff;
    border-radius: 4px;

    &_header {
      align-items: center;
      padding: 0 16px 33px;

      &_btn {
        width: 99px;
        height: 30px;
        background: #2d77d4;
        border-radius: 4px;

        &_icon {
          margin-left: 8px;
        }
      }
    }

    &_list {
      &_item {
        &_right {
          color: #2d77d4;
          cursor: pointer;
        }
      }
    }
  }

  &_right {
    background: #fff;
    border-radius: 4px;

    &_header {
      &_btn {
        width: 117px;
        height: 30px;
        background: #2d77d4;
        border-radius: 4px;
      }

      &_icon {
        margin-left: 8px;
      }
    }

    &_list {
      &_item {
        align-items: center;
        padding: 25px 0 25px 38px;
        font-size: 12px;
        line-height: 24px;
        border-bottom: 1px solid #d3d8dd;

        &_left {
          &_phone {
            &_left {
              margin-right: 40px;
            }
          }
        }

        &_right {
          &_find {
            margin-right: 20px;
            color: #2d77d4;
            cursor: pointer;
          }

          &_del {
            cursor: pointer;
          }
        }
      }

      &_item_noborder {
        border: none;
      }
    }
  }
}
</style>
