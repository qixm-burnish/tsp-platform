<template>
  <div class="flex justify-between role-permission max-body">
    <div class="w-[413px] role-permission_left pt-[24px] pl-[40px]">
      <div class="role-permission_left_item">
        <div class="role-permission_left_item_left">企业全称</div>
        <div class="role-permission_left_item_right">{{ companyInfo?.name }}</div>
      </div>
      <div class="role-permission_left_item">
        <div class="role-permission_left_item_left">统一社会信用代码</div>
        <div class="role-permission_left_item_right">
          {{ companyInfo?.credit_code_tax_id ? companyInfo?.credit_code_tax_id : "- -" }}
        </div>
      </div>
      <div class="role-permission_left_item">
        <div class="role-permission_left_item_left">企业注册地址</div>
        <div class="role-permission_left_item_right">{{ companyInfo?.address ? companyInfo?.address : "- -" }}</div>
      </div>
      <div class="role-permission_left_item">
        <div class="role-permission_left_item_left">创建时间</div>
        <div class="role-permission_left_item_right">{{ companyInfo?.created_at ? companyInfo?.created_at : "- -" }}</div>
      </div>
      <div class="role-permission_left_item">
        <div class="role-permission_left_item_left">法定代表人</div>
        <div class="role-permission_left_item_right">
          {{ companyInfo?.legal_representative_name ? companyInfo?.legal_representative_name : "- -" }}
        </div>
      </div>
      <div class="role-permission_left_item">
        <div class="role-permission_left_item_left">法人联系电话</div>
        <div class="role-permission_left_item_right">
          {{ companyInfo?.legal_representative_phone ? companyInfo?.legal_representative_phone : "- -" }}
        </div>
      </div>
      <div class="role-permission_left_item">
        <div class="role-permission_left_item_left">营业执照</div>
        <div class="role-permission_left_item_right">
          <el-image style="width: 136px; height: 98px" :src="companyInfo.business_license" fit="fill" />
        </div>
      </div>
      <div class="role-permission_left_item">
        <div class="role-permission_left_item_left">法人身份证</div>
        <div class="role-permission_left_item_right">
          <el-image style="width: 138px; height: 85px" :src="companyInfo.legal_representative_id_card_front" fit="fill" />
        </div>
      </div>
    </div>
    <div class="w-[324px] role-permission_center pt-[24px]">
      <div class="role-permission_center_header flex justify-between">
        <el-input v-model="roleName" class="w-50 m-2" placeholder="输入角色名称" :suffix-icon="Search" />
        <el-button class="role-permission_center_header_btn" type="primary" @click="handleAddRole" v-if="is_compony_super">
          添加角色
          <el-icon class="role-permission_center_header_btn_icon"><CirclePlus /></el-icon>
        </el-button>
      </div>
      <div class="role-permission_center_list">
        <div
          class="role-permission_center_list_item flex justify-between p-[16px]"
          v-for="item in roleList"
          :key="item.id"
          @click="handleActiveRole(item.id)"
        >
          <div class="role-permission_center_list_item_left">{{ item.label }}</div>
          <div
            class="role-permission_center_list_item_right"
            v-if="item.id == activeRoleId"
            @click.stop="handleRoleView(item.id)"
          >
            权限查看
          </div>
        </div>
      </div>
    </div>

    <div class="flex-1 role-permission_right pt-[24px] pl-[20px] pr-[20px] overflow-auto">
      <div class="role-permission_right_header flex justify-end">
        <el-button class="role-permission_right_header_btn" type="primary" @click="handleAddAccount" v-if="is_compony_super">
          添加账号
          <el-icon class="role-permission_right_header_icon"><CirclePlus /></el-icon>
        </el-button>
      </div>
      <div class="role-permission_right_list">
        <div
          class="role-permission_right_list_item flex justify-between"
          v-for="(item, index) in accountList"
          :key="item.id"
          :class="index == accountList.length ? 'role-permission_right_list_item_noborder' : ''"
        >
          <div class="role-permission_right_list_item_left">
            <div class="role-permission_right_list_item_left_name">{{ item.username ? item.username : "- -" }}</div>
            <div class="role-permission_right_list_item_left_phone">
              <span class="role-permission_right_list_item_left_phone_left">账号：{{ item.phone }} </span>
              <span>邮箱：{{ item.email ? item.email : "- -" }}</span>
            </div>
            <div class="role-permission_right_list_item_left_remarker">备注：{{ item.remark ? item.remark : "--" }}</div>
          </div>
          <div class="role-permission_right_list_item_right flex">
            <!-- <div class="role-permission_right_list_item_right_find">找回密码</div> -->
            <div class="role-permission_right_list_item_right_del">删除</div>
          </div>
        </div>
      </div>
    </div>
    <EditDialog :visible="editRoleVisible" :editId="editRoleId" @confirm="onEditFinish" @close="onEditClose" />
    <ViewDialog v-if="viewRoleVisible" :visible="viewRoleVisible" :editId="roleDetailId" @close="handleViewClose" />
    <AccountEditDialog
      :visible="editAccountVisible"
      :editId="editAccountId"
      @confirm="onAccountEditFinish"
      @close="onAccountEditFinish"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
import { Search, CirclePlus } from "@element-plus/icons-vue"
import EditDialog from "./components/roleEdit.vue"
import ViewDialog from "./components/roleDetail.vue"
import AccountEditDialog from "./components/accountEdit.vue"
import { useUserStoreHook } from "@/store/modules/user"
import { getCompanySelfByIdV1 as getCompanyInfo } from "@/services/userCenter/mods/company/getCompanySelfByIdV1"
import { getAccountMyselfV1 as getinfo } from "@/services/userCenter/mods/account/getAccountMyselfV1"
import { getRoleSelfV1 as getRoleList } from "@/services/userCenter/mods/role/getRoleSelfV1"

import { getAccountSelfV1 as getAccountList } from "@/services/userCenter/mods/account/getAccountSelfV1"
// import { getResourceSystemV1 as getList } from "@/services/userCenter/mods/resource/getResourceSystemV1"

defineOptions({
  name: "Rolepermission",
})

/** 公司ID */
const companyId = computed(() => {
  return useUserStoreHook()?.company_id
})

/** 公司超管 */
const is_super = computed(() => {
  return useUserStoreHook()?.is_compony_super
})
const is_compony_super = ref<boolean>(is_super.value)

//公司信息
const companyInfo = ref<any>("")
//角色列表
const roleList = ref<any>("")
const activeRoleId = ref<string>("")
const handleActiveRole = val => {
  if (activeRoleId.value == val) {
    return
  }
  activeRoleId.value = val
  // 获取账号列表
  getAccountList({ params: { roles__id__in: val } }).then(respon => {
    accountList.value = respon
  })
}
//账号列表
const accountList = ref<any>("")

onMounted(() => {
  if (companyId.value) {
    getCompanyInfo(companyId.value).then(res => {
      companyInfo.value = res
    })
  } else {
    //如果刷新之后重新请求数据 获取到公司ID
    getinfo({ params: { system_id: "018acffb-9ab7-8ea0-534f-7f5a0012337d" } }).then(res => {
      getCompanyInfo(res.company.id).then(respon => {
        companyInfo.value = respon
      })
    })
  }
  //获取角色列表
  getRoleList({ params: { system_id: "018acffb-9ab7-8ea0-534f-7f5a0012337d" } }).then(res => {
    roleList.value = res
    activeRoleId.value = res[0]?.id
    // 获取账号列表
    getAccountList({ params: { roles__id__in: res[0].id } }).then(respon => {
      accountList.value = respon
    })
  })

  // getList({ params: { system_id: "018acffb-9ab7-8ea0-534f-7f5a0012337d" } }).then(res => {
  //   console.log(res)
  // })

  //判断超管信息是否获取
  if (!is_super.value) {
    getinfo({ params: { system_id: "018acffb-9ab7-8ea0-534f-7f5a0012337d" } }).then(res => {
      is_compony_super.value = res.is_company_super_admin
    })
  }
})

const roleName = ref("")

const editRoleId = ref<null | number>()
const editRoleVisible = ref(false)
const handleAddRole = () => {
  editRoleVisible.value = true
}
const onEditFinish = () => {
  editRoleVisible.value = false
  getRoleList({ params: { system_id: "018acffb-9ab7-8ea0-534f-7f5a0012337d" } }).then(res => {
    roleList.value = res
  })
}
const onEditClose = () => {
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
const roleDetailId = ref<any>("")
const handleRoleView = id => {
  roleDetailId.value = id
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
        cursor: pointer;

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
