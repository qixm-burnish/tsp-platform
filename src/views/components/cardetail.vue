<template>
  <div class="cardetail flex flex-col flex-1">
    <div class="cardetail_header flex justify-between">
      <div class="cardetail_header_left">
        <div>渝ADF3337</div>
        <div>DK123456789012345</div>
      </div>
      <div class="cardetail_header_right" @click="handleCancel">
        <el-icon><Close /></el-icon>
      </div>
    </div>
    <div class="cardetail_edit flex justify-end">
      <el-button class="cardetail_edit_btn" type="primary" @click="handleEdit">修改</el-button>

      <Addcar :show="editdialogShow" :id="detailId" @close="handleEditClose" @confirm="handleEditConfirm" />
    </div>
    <div class="cardetail_content">
      <div class="flex flex-row items-stretch flex-1 ml-body h-[100%]">
        <div class="cardetail_content_left flex-none w-[390px] flex flex-col">
          <div class="cardetail_content_left_item flex">
            <div class="cardetail_content_left_item_left">车牌号</div>
            <div>鄂ADF3337</div>
          </div>
          <div class="cardetail_content_left_item flex">
            <div class="cardetail_content_left_item_left">车架号</div>
            <div>DK123456789012345</div>
          </div>
          <div class="cardetail_content_left_item flex">
            <div class="cardetail_content_left_item_left">品牌</div>
            <div>东风</div>
          </div>
          <div class="cardetail_content_left_item flex">
            <div class="cardetail_content_left_item_left">车系</div>
            <div>凯普特</div>
          </div>
          <div class="cardetail_content_left_item flex">
            <div class="cardetail_content_left_item_left">车型</div>
            <div>EV350</div>
          </div>
          <div class="cardetail_content_left_item flex">
            <div class="cardetail_content_left_item_left">投放城市</div>
            <div>重庆</div>
          </div>
        </div>
        <div class="flex-1 cardetail_content_right">
          <el-amap :center="[121.59996, 31.197646]" :zoom="12" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Close } from "@element-plus/icons-vue"
import Addcar from "@/views/components/addcar.vue"

const emit = defineEmits<{
  close: [params: any]
  confirm: [params: any]
}>()

// const handleConfirm = () => {
//   submitForm(ruleFormRef.value)
// }
const handleCancel = () => {
  emit("close", false)
}

const detailId = ref<number>(222)

const editdialogShow = ref(false)
const handleEdit = () => {
  editdialogShow.value = true
}
const handleEditClose = boolean => {
  editdialogShow.value = boolean
}
const handleEditConfirm = boolean => {
  editdialogShow.value = boolean
}
</script>

<style scoped lang="scss">
.cardetail {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2008;
  width: 100%;
  height: 100%;
  background: #fff;

  &_header {
    align-items: center;
    padding: 16px 20px 16px 30px;
    border-bottom: 1px solid #c0c6cb;

    &_right {
      cursor: pointer;
    }
  }

  &_edit {
    padding: 10px 20px;
    border-bottom: 1px solid #c0c6cb;

    &_btn {
      width: 81px;
      height: 28px;
      background: #2d77d4;
      border-radius: 4px;
    }
  }

  &_content {
    height: calc(100% - 20px);
    padding: 20px;

    &_left {
      padding: 50px 40px;

      &_item {
        margin-bottom: 30px;

        &_left {
          width: 100px;
          margin-right: 20px;
          color: #8d8d8d;
          text-align: right;
        }
      }
    }
  }
}
</style>
