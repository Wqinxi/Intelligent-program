<script setup lang="ts">
import {computed, ref} from "vue";
const handleRefresh = () => {
    location.reload();
}

</script>

<template>
  <div class="white-back">
    <el-icon class="search">
        <Search />
    </el-icon>
    <input type="text" class="search-input" placeholder="请输入学生姓名">
    
    <button class="search-button">搜索</button>
    <el-icon class="refresh" @click="handleRefresh" style="cursor: pointer;">
        <Refresh />
    </el-icon>
  </div>

</template>

<style scoped>
.white-back {
    position: relative;
  width: 95%;
  margin-top:1%;
  height: 10%;
  background-color: #ffffff;
}
.search{
  margin-left: 2%;
  margin-top:1%;
}
.refresh{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 1.8%;
  font-size: 20px; 
}
.search-input {
    outline: none;
  width: 78%;
  height: 60%;
  padding: 5px;
  border: none;
  border-radius: 5px;
  color:#b7b7b7;
  margin-left: 1%;
}

.search-button {
  margin-top: 1%;
  margin-left:2%;
  width: 8%;
  height: 70%;
  background-color: #b7b7b7;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}



</style>