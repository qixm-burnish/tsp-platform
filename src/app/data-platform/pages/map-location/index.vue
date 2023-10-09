<script setup lang="ts">
import { reactive, ref } from "vue"
import { Search as SearchIcon } from "@element-plus/icons-vue"
import { Search, SearchItem } from "@/components/Search"
import Addcar from "@app/data-platform/pages/components/addcar.vue"
import Cardetail from "@app/data-platform/pages/components/cardetail.vue"

defineOptions({
  name: "MapLocation",
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
]

const initformvalue = reactive({
  time: "",
  checked: [],
  vin: "",
})

const activeType = ref<string>("map")
const handleActiveType = (type: string) => {
  activeType.value = type
}

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

const detaildialogShow = ref<boolean>(false)
const detailID = ref<number>(0)
//详情 后续需要更改触发位置
const handleDetail = id => {
  detailID.value = id
  detaildialogShow.value = true
}
const handleDetailClose = isBol => {
  console.log(isBol)

  detaildialogShow.value = isBol
}
// const handleConfirm = isBol => {
//   adddialogShow.value = isBol
// }
const mapRef = ref<any>()

const points = ref<any>([
  {
    lnglat: [106.55, 29.56],
    id: 1,
  },
  {
    lnglat: [106.51, 29.56],
    id: 2,
  },
  {
    lnglat: [106.52, 29.56],
    id: 3,
  },
  {
    lnglat: [106.53, 29.56],
    id: 4,
  },
  {
    lnglat: [106.54, 29.56],
    id: 5,
  },
  {
    lnglat: [106.56, 29.56],
    id: 6,
  },
  {
    lnglat: [106.57, 29.56],
    id: 7,
  },
])
const zoom = ref<number>(6)
const clickMarker = e => {
  if (e.clusterData.length > 1 && zoom.value < 15) {
    zoom.value = zoom.value + 3
  } else {
    console.log(e)
  }
}
</script>

<template>
  <div class="flex flex-col map-location-pg max-body">
    <div class="flex-none ml-search white_header">
      <Search :initial-value="initformvalue" :default-value="initformvalue" #default="formValue" @add="handleAddCar">
        <SearchItem index="1" :span="4" class="filter_top">
          <el-select v-model="formValue.value.time" class="m-2" placeholder="全部品牌">
            <el-option label="全部品牌" value="全部品牌" />
          </el-select>
          <el-select v-model="formValue.value.time" class="m-2" placeholder="全部运营城市">
            <el-option label="全部运营城市" value="全部运营城市" />
          </el-select>
          <el-checkbox-group class="truck_type_checkbox" v-model="formValue.value.checked">
            <el-checkbox label="新能源车" key="新能源车" size="large" />
            <el-checkbox label="燃油车" key="燃油车" size="large" />
          </el-checkbox-group>
        </SearchItem>

        <SearchItem index="4" :span="1" class="vin_license filter_top">
          <el-input v-model="formValue.value.vin" class="m-2 w-50" placeholder="车牌号/车架号" :suffix-icon="SearchIcon" />
        </SearchItem>
      </Search>

      <div class="flex addcar" v-if="addShow">
        <div class="flex flex-col addcar_item" @click="handleAddSingleCar">
          <img class="addcar_single" src="@/assets/image/addcar/single.png" alt="" />
          <div>单台添加车辆</div>
        </div>
        <div class="flex flex-col addcar_item addcar_item_center" @click="handleDetail(22)">
          <img class="addcar_multiple" src="@/assets/image/addcar/multiple.png" alt="" />
          <div>批量导入车辆</div>
        </div>
        <div class="flex flex-col addcar_item">
          <img class="addcar_template" src="@/assets/image/addcar/template.png" alt="" />
          <div>导入模板下载</div>
        </div>
      </div>

      <div class="location_list">
        <div
          class="location_list_item"
          :class="activeType == 'map' ? 'location_list_activeitem' : ''"
          @click="handleActiveType('map')"
        >
          <img class="location_list_item_img" src="@/assets/image/maplocation/location.png" alt="" />
        </div>
        <div
          class="location_list_item location_list_item_right"
          :class="activeType == 'list' ? 'location_list_activeitem' : ''"
          @click="handleActiveType('list')"
        >
          <img class="location_list_item_img" src="@/assets/image/maplocation/list.png" alt="" />
        </div>
      </div>
      <Addcar :show="adddialogShow" @close="handleClose" @confirm="handleConfirm" />
      <Cardetail v-if="detaildialogShow" @close="handleDetailClose" />
    </div>
    <div class="flex flex-row items-stretch flex-1 ml-body" v-if="activeType == 'map'">
      <div class="ml-left flex-none w-[390px] flex flex-col">
        <ElTable :data="tableData" :header-cell-class-name="'grey-table-header-cell'" max-height="620" class="flex-1 ml-table">
          <ElTableColumn prop="date" label="运行状态" width="90" show-overflow-tooltip />
          <ElTableColumn prop="name" label="车牌号" width="105" show-overflow-tooltip />
          <ElTableColumn prop="name" label="车架号" width="90" show-overflow-tooltip />
          <ElTableColumn prop="name" label="运营城市" width="100" show-overflow-tooltip />
        </ElTable>
        <div class="flex justify-end flex-none ml-pager mt-[10px]">
          <ElPagination small :pager-count="5" layout="prev, pager, next,total" :pageSize="20" :total="20" />
        </div>
      </div>
      <div class="flex-1 ml-map">
        <el-amap :center="[106.55, 29.56]" :zoom="zoom" ref="mapRef" :clusterByZoomChange="true">
          <el-amap-marker-cluster :points="points" @click="clickMarker" />
        </el-amap>
      </div>
    </div>
    <div class="ml-body" v-else>
      <div class="flex flex-col flex-none ml-auto">
        <ElTable :data="tableData" :header-cell-class-name="'grey-table-header-cell'" max-height="620" class="ml-table">
          <ElTableColumn prop="date" label="运行状态" show-overflow-tooltip />
          <ElTableColumn prop="name" label="车牌号" show-overflow-tooltip />
          <ElTableColumn prop="name" label="车架号" show-overflow-tooltip />
          <ElTableColumn prop="name" label="品牌" show-overflow-tooltip />
          <ElTableColumn prop="name" label="车系" show-overflow-tooltip />
          <ElTableColumn prop="name" label="车型" show-overflow-tooltip />
          <ElTableColumn prop="name" label="能源类型" show-overflow-tooltip />
          <ElTableColumn prop="name" label="运营城市" width="auto" show-overflow-tooltip />
        </ElTable>
        <div class="flex justify-end flex-none ml-pager mt-[10px]">
          <ElPagination small layout="prev, pager, next,total" :pageSize="20" :total="20" />
        </div>
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

    &-map {
      margin-left: 22px;
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
