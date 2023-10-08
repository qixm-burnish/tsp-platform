<template>
  <div>
    <el-dialog class="addcar_dialog" :model-value="props.show" title="添加车辆" :show-close="false" width="768px">
      <div class="addcar_dialog_content">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="100px" status-icon>
          <el-form-item label="VIN码" prop="VIN">
            <el-input v-model="ruleForm.VIN" />
          </el-form-item>
          <el-form-item label="车牌号" prop="License">
            <el-input v-model="ruleForm.License" />
          </el-form-item>
          <el-form-item label="品牌" prop="brand">
            <el-select v-model="ruleForm.brand" placeholder="请选择品牌">
              <el-option label="品牌1" value="1" />
              <el-option label="品牌2" value="2" />
            </el-select>
          </el-form-item>
          <el-form-item label="车系" prop="series">
            <el-select v-model="ruleForm.series" placeholder="请选择车系">
              <el-option label="车系1" value="1" />
              <el-option label="车系2" value="2" />
            </el-select>
          </el-form-item>
          <el-form-item label="车型" prop="model">
            <el-select v-model="ruleForm.model" placeholder="请选择车型">
              <el-option label="车型1" value="1" />
              <el-option label="车型2" value="2" />
            </el-select>
          </el-form-item>
          <el-form-item label="投放城市" prop="city">
            <el-select v-model="ruleForm.city" placeholder="请选择投放城市">
              <el-option label="城市1" value="1" />
              <el-option label="城市2" value="2" />
            </el-select>
          </el-form-item>
          <el-form-item label="能源类型" prop="type">
            <el-radio-group v-model="ruleForm.type" class="ml-1 type_group">
              <el-radio label="1" size="large">新能源车</el-radio>
              <el-radio label="2" size="large">燃油车</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button class="confirmbtn" type="primary" @click="handleConfirm"> 确定 </el-button>
          <el-button @click="handleCancel">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import type { FormInstance, FormRules } from "element-plus"

interface RuleForm {
  VIN: string
  License: string
  brand: string
  series: string
  model: string
  city: string
  type: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  VIN: "",
  License: "",
  brand: "",
  series: "",
  model: "",
  city: "",
  type: "",
})

const rules = reactive<FormRules<RuleForm>>({
  VIN: [
    { required: true, message: "请输入VIN码", trigger: "blur" },
    { min: 17, max: 17, message: "请输入17位VIN码", trigger: "blur" },
  ],
  type: [{ required: true, message: "请选择能源类型", trigger: "change" }],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      emit("confirm", false)
    } else {
      console.log("error submit!", fields)
    }
  })
}

interface IndexProps {
  show: boolean // 表单初始值
  id?: number
}

const props = withDefaults(defineProps<IndexProps>(), {
  show: false,
})
console.log(props.id)

const emit = defineEmits<{
  close: [params: any]
  confirm: [params: any]
}>()

const handleConfirm = () => {
  submitForm(ruleFormRef.value)
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
    background: #4181d9;
  }
}

.addcar_dialog {
  .el-form-item {
    margin-bottom: 20px;
  }
}

.addcar_dialog_content {
  padding: 0 220px 0 200px !important;
}

:deep(.addcar_dialog_content .el-form-item__content .el-input) {
  width: 200px !important;
}

.type_group {
  .el-radio {
    height: 32px;
  }
}
</style>
