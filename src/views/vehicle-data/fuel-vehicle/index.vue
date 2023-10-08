<script setup lang="ts">
import { reactive, ref } from "vue"
import { Search as SearchIcon } from "@element-plus/icons-vue"
import { Search, SearchItem } from "@/components/Search"
import Addcar from "@/views/components/addcar.vue"
defineOptions({
  name: "Fuelvehicle",
})

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
]

const initformvalue = reactive({
  time: "全部",
  checked: [],
  vin: "",
})

const addShow = ref<boolean>(false)
const handleAddCar = type => {
  if (type == "addcar") {
    addShow.value = !addShow.value
  }
}
const adddialogShow = ref<boolean>(false)
const handleClose = isBol => {
  adddialogShow.value = isBol
}
const handleConfirm = isBol => {
  adddialogShow.value = isBol
}

const handleAddSingleCar = () => {
  adddialogShow.value = true
  addShow.value = false
}

//时间范围
const timerange = ref<any>("")
</script>

<template>
  <div class="flex flex-col map-location-pg max-body">
    <div class="flex-none ml-search white_header">
      <Search :initial-value="initformvalue" :default-value="initformvalue" #default="formValue" @add="handleAddCar">
        <SearchItem index="1" :span="4" class="filter_top">
          <el-radio-group v-model="formValue.value.time">
            <el-radio-button label="全部" />
            <el-radio-button label="点火运行" />
            <el-radio-button label="熄火停车" />
            <el-radio-button label="离线" />
            <el-radio-button label="未激活" />
          </el-radio-group>
        </SearchItem>

        <SearchItem index="4" :span="1" class="vin_license filter_top">
          <el-input v-model="formValue.value.vin" class="w-50 m-2" placeholder="车牌号/车架号" :suffix-icon="SearchIcon" />
        </SearchItem>
      </Search>

      <div class="addcar flex" v-if="addShow">
        <div class="addcar_item flex flex-col" @click="handleAddSingleCar">
          <img class="addcar_single" src="@/assets/image/addcar/single.png" alt="" />
          <div>单台添加车辆</div>
        </div>
        <div class="addcar_item addcar_item_center flex flex-col">
          <img class="addcar_multiple" src="@/assets/image/addcar/multiple.png" alt="" />
          <div>批量导入车辆</div>
        </div>
        <div class="addcar_item flex flex-col">
          <img class="addcar_template" src="@/assets/image/addcar/template.png" alt="" />
          <div>导入模板下载</div>
        </div>
      </div>
      <Addcar :show="adddialogShow" @close="handleClose" @confirm="handleConfirm" />
    </div>
    <div class="flex flex-row items-stretch flex-1 ml-body">
      <div class="ml-left w-[310px] h-[100%]">
        <ElTable :data="tableData" :header-cell-class-name="'grey-table-header-cell'" max-height="620px" class="flex-1 ml-table">
          <ElTableColumn prop="date" label="运行状态" width="100" show-overflow-tooltip />
          <ElTableColumn prop="name" label="车牌号" width="105" show-overflow-tooltip />
          <ElTableColumn prop="name" label="车架号" width="105" show-overflow-tooltip />
        </ElTable>
        <div class="flex justify-end flex-none ml-pager mt-[10px]">
          <ElPagination small :pager-count="5" layout="prev, pager, next,total" :pageSize="20" :total="30000" />
        </div>
      </div>
      <div class="flex-1 ml-right">
        <el-tabs type="border-card" class="mi-right-tabs">
          <el-tab-pane label="整车数据">
            <el-date-picker
              v-model="timerange"
              type="datetimerange"
              range-separator="到"
              :value-format="'YYYY-MM-DD hh:mm'"
              :format="'YYYY-MM-DD hh:mm'"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              style="margin-bottom: 15px"
            />
            <ElTable
              :data="tableData"
              :header-cell-class-name="'grey-table-header-cell'"
              max-height="500"
              class="ml-table"
              style="width: 100%"
            >
              <ElTableColumn prop="date" label="时间" show-overflow-tooltip />
              <ElTableColumn prop="name" label="运行状态" show-overflow-tooltip />
              <ElTableColumn prop="name" label="充电状态" show-overflow-tooltip />
              <ElTableColumn prop="name" label="运行模式" show-overflow-tooltip />
              <ElTableColumn prop="name" label="累计里程（万公里)" show-overflow-tooltip />
              <ElTableColumn prop="name" label="车速（公里/小时）" show-overflow-tooltip />
              <ElTableColumn prop="name" label="总电压（伏）" show-overflow-tooltip />
              <ElTableColumn prop="name" label="总电流（安）" show-overflow-tooltip />
              <ElTableColumn prop="name" label="SOC" show-overflow-tooltip />
              <ElTableColumn prop="name" label="DC/DC状态" show-overflow-tooltip />
              <ElTableColumn prop="name" label="档位" show-overflow-tooltip />
              <ElTableColumn prop="name" label="绝缘电阻值（千欧）" show-overflow-tooltip />
              <ElTableColumn prop="name" label="加速踏板行程值" show-overflow-tooltip />
              <ElTableColumn prop="name" label="制动踏板状态" show-overflow-tooltip />
              <ElTableColumn prop="name" label="当前经度" show-overflow-tooltip />
              <ElTableColumn prop="name" label="当前纬度" show-overflow-tooltip />
            </ElTable>
            <div class="flex justify-end flex-none ml-pager mt-[10px]">
              <ElPagination small layout="prev, pager, next,total" :pageSize="20" :total="30000" />
            </div>
          </el-tab-pane>
          <el-tab-pane label="原始报文">
            <el-date-picker
              v-model="timerange"
              type="datetimerange"
              range-separator="到"
              :value-format="'YYYY-MM-DD hh:mm'"
              :format="'YYYY-MM-DD hh:mm'"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              style="margin-bottom: 15px"
            />
            原始报文
          </el-tab-pane>
          <el-tab-pane label="静态信息">
            <el-date-picker
              v-model="timerange"
              type="datetimerange"
              range-separator="到"
              :value-format="'YYYY-MM-DD hh:mm'"
              :format="'YYYY-MM-DD hh:mm'"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              style="margin-bottom: 15px"
            />
            静态信息
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.map-location-pg {
  .ml {
    &-body {
      padding: 18px;
      background: #fff;
    }

    &-right {
      margin-left: 22px;
      overflow: auto;

      &-tabs {
        width: 100%;
      }
    }

    &-table {
      max-height: calc(100% - 20px);
    }

    &_auto {
      justify-content: flex-start;
      width: 100%;
      height: 100%;
    }
  }
}

.truck_type_checkbox {
  margin-left: 20px;
}

.white_header {
  position: relative;
  padding: 0 20px;
  margin-bottom: 10px;
  background: #fff;
}

.location_list {
  position: absolute;
  top: 16px;
  right: 20px;
  display: flex;
  justify-content: flex-end;

  &_item {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 76px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    background: #a9aeb1;
    border-radius: 4px 0 0 4px;

    &_img {
      display: inline-block;
      width: 25.15px;
      height: 22.96px;
    }
  }

  &_item_right {
    margin-left: 3px;
    border-radius: 0 4px 4px 0;
  }

  &_activeitem {
    background: #4181d9;
  }
}

.addcar {
  position: absolute;
  right: 20px;
  bottom: -110px;
  z-index: 100;
  height: 117px;
  padding: 30px 44px;
  background: #fff;
  border: 1px solid #afb6bf;
  border-radius: 4px;
  box-shadow: 0 3px 6px 1px rgb(0 0 0 / 16%);

  &_item {
    align-items: center;
    cursor: pointer;

    .addcar_single {
      width: 43.6px;
      height: 34.39px;
    }

    .addcar_multiple {
      width: 66.01px;
      height: 34.39px;
    }

    .addcar_template {
      width: 39.67px;
      height: 37.3px;
    }
  }

  &_item_center {
    margin: 0 90px;
  }
}

:deep(.vin_license .el-form-item__content .el-input) {
  width: 228px !important;
}

:deep(.filter_top .el-form-item) {
  margin-bottom: 0;
}
</style>
