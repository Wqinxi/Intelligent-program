<script setup lang="ts">
import { computed, ref } from "vue";

const handleRefresh = () => {
  location.reload();
}

const columns = [
  {
    title: '序号',
    dataIndex: 'key',
    width: '8%',
  },
  {
    title: '学生姓名',
    dataIndex: 'name',
    width: '15%',
  },
  {
    title: '学生进度',
    dataIndex: 'progress',
    width: '24%',
  },
  {
    title: '问题汇总',
    dataIndex: 'questions',
    width: '40%',
  },
]

const tableData = [] as Array<any>

for (let i = 0; i < 8; i++) {
  tableData.push({
    key: i.toString(),
    name: `张三`,
    progress: '课程A,任务一',
    question: '*********************',
  })
}

const totalPage = ref(20)
const currentPage = ref(5)
const pageSize = ref(9)
const skipPageNumber = ref(1)
const pageList = computed(() => {
  const halfPageSize = Math.floor(pageSize.value / 2)
  const list = []
  if (totalPage.value <= pageSize.value) {
    for (let i = 1; i <= totalPage.value; ++i) {
      list.push(i)
    }
  } else if (currentPage.value >= 1 + halfPageSize && currentPage.value <= totalPage.value - halfPageSize) {
    for (let i = -halfPageSize; i <= halfPageSize; ++i) {
      list.push(currentPage.value + i)
    }
  } else if (currentPage.value < 1 + halfPageSize) {
    for (let i = 1; i <= pageSize.value; ++i) {
      list.push(i)
    }
  } else if (currentPage.value > totalPage.value - halfPageSize) {
    for (let i = 1 + totalPage.value - pageSize.value; i <= totalPage.value; ++i) {
      list.push(i)
    }
  }
  return list
})

</script>

<template>
  <div class="white-back">
    <el-icon class="search" size="1.3rem">
      <Search />
    </el-icon>
    <input type="text" class="search-input" placeholder="请输入学生姓名">

    <button class="search-button">搜索</button>
    <el-icon class="refresh" @click="handleRefresh" style="cursor: pointer;">
      <Refresh />
    </el-icon>
  </div>

  <div class="page">
    <div class="user-list">
      <div class="user-list-header">
        <div v-for="col in columns" :style="{ width: col.width, color: 'white' }">{{ col.title }}</div>
      </div>
      <div class="user-list-column" v-for="data in tableData">
        <div class="user-list-column-item" v-for="col in columns" :style="{ width: col.width }">
          <div class="" v-if="col.dataIndex === 'questions'">
            <div>*******************************</div>
          </div>
          <div v-else>
            {{ data[col.dataIndex] }}
          </div>
        </div>
      </div>
    </div>

    <div class="pagination">
      <div class="pagination-bar">
        <el-icon class="arrow" size="1rem" @click="--currentPage">
          <Back></Back>
        </el-icon>
        <div :class="['pagination-bar-button', currentPage === page ? 'active' : '', 'small-button']" v-for="page in pageList"
          @click="currentPage = page">
          {{ page }}
        </div>
        <el-icon class="arrow" size="1rem" @click="++currentPage">
          <Right></Right>
        </el-icon>
        <input class="each-page" placeholder="10条/页" />
        <div class="page-skipper">
          跳至 <input @keyup.enter="currentPage = skipPageNumber" v-model.number="skipPageNumber" /> 页
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.white-back {
  position: relative;
  width: 95%;
  margin-top: 1%;
  height: 10%;
  background-color: #ffffff;
}

.search {
  margin-left: 1.2%;
  margin-top: 1.2%;
}

.refresh {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 1.8%;
  font-size: 20px;
}

.search-input {
  outline: none;
  width: 78%;
  height: 45%;
  padding: 5px;
  border: none;
  border-radius: 5px;
  color: #b7b7b7;
  margin-left: 1%;
  background-color: #ececec;
}

.search-button {
  margin-top: 1%;
  margin-left: 2%;
  width: 8%;
  height: 60%;
  background-color: #b7b7b7;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

@import "@/assets/css/Stu-inform";
</style>