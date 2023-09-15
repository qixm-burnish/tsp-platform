<script setup lang="ts">
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
]
</script>

<template>
  <div class="flex flex-col map-location-pg max-body">
    <div class="flex-none ml-search">search</div>
    <div class="flex flex-row items-stretch flex-1 ml-body">
      <div class="ml-left flex-none w-[390px] flex flex-col">
        <ElTable :data="tableData" class="flex-1 ml-table">
          <ElTableColumn prop="date" label="运行状态" width="90" show-overflow-tooltip />
          <ElTableColumn prop="name" label="车牌号" width="105" show-overflow-tooltip />
          <ElTableColumn prop="name" label="车架号" width="90" show-overflow-tooltip />
          <ElTableColumn prop="name" label="运营城市" width="105" show-overflow-tooltip />
        </ElTable>
        <div class="flex justify-end flex-none ml-pager mt-[10px]">
          <ElPagination small layout="prev, pager, next" :total="20" />
        </div>
      </div>
      <div class="flex-1 ml-map">
        <el-amap :center="[121.59996, 31.197646]" :zoom="12" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.map-location-pg {
  .ml {
    &-body {
      background: #fff;

      padding: 18px;
    }

    &-map {
      margin-left: 22px;
    }

    &-table {
      max-height: calc(100% - 20px);
    }
  }
}
</style>
