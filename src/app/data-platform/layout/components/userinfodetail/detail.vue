<template>
  <div>
    <el-dialog
      class="userinfo_dialog"
      :model-value="props.visible"
      title="个人信息"
      :show-close="false"
      width="768px"
      @close="handleCancel"
    >
      <div class="userinfo_dialog_content">
        <el-form ref="ruleFormRef" label-width="100px" status-icon>
          <!-- <el-form-item label="用户名">
            <FormText class="blackcolor" v-model="props.detailInfo.username" />
          </el-form-item>
          <el-form-item label="手机号">
            <FormText class="blackcolor" v-model="props.detailInfo.phone" />
          </el-form-item>
          <el-form-item label="角色">
            <FormText class="blackcolor" v-model="props.detailInfo.system_related.role_name" />
          </el-form-item>
          <el-form-item label="姓名">
            <FormText class="blackcolor" v-model="props.detailInfo.real_name" />
          </el-form-item>
          <el-form-item label="身份证号">
            <FormText class="blackcolor" v-model="props.detailInfo.id_number" />
          </el-form-item>
          <el-form-item label="电子邮箱">
            <FormText class="blackcolor" v-model="props.detailInfo.email" />
          </el-form-item>
          <el-form-item label="所属企业">
            <FormText class="blackcolor" v-model="props.detailInfo.company.name" />
          </el-form-item> -->
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button class="confirmbtn" type="primary" @click="handleConfirm"> 修改 </el-button>
          <el-button @click="handleCancel">关闭</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
// import type { FormInstance, FormRules } from "element-plus"
// import FormText from "@/components/FormText/index.vue"

type PropsType = {
  visible: boolean
  detailInfo: any
}

const props = withDefaults(defineProps<PropsType>(), {
  visible: false,
})

const emit = defineEmits<{
  close: [params: any]
  edit: [params: any]
}>()

const handleConfirm = () => {
  emit("edit", false)
}
const handleCancel = () => {
  emit("close", false)
}
</script>

<style scoped lang="scss">
.el-dialog__footer {
  .el-button {
    width: 85px;
    height: 28px;
    border-radius: 4px;
  }

  .confirmbtn {
    color: #4181d9;
    background: #fff;
    border-color: #4181d9;
  }
}

.userinfo_dialog {
  .el-form-item {
    margin-bottom: 20px;
  }
}

.userinfo_dialog_content {
  padding: 0 200px 0 140px !important;
}

:deep(.userinfo_dialog_content .el-form-item__content .el-input) {
  width: 200px !important;
}

.type_group {
  .el-radio {
    height: 32px;
  }
}

.blackcolor {
  margin-left: 8px;
  color: #262626;
}
</style>
