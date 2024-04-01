<script setup lang="ts">
import { RouterView} from "vue-router";
import {useRoute} from "vue-router";
import Header from "@/views/student/components/Header.vue"

const route = useRoute()

</script>

<template>
<el-container>
  <div class="header">
    <Header />
  </div>
  <el-header class="top-bar"></el-header>
  <el-container class="page-container">
    <el-aside class="aside">
      <div class="avatar">
        
      </div>
      <div class="name">
          李老师
        </div>
      <div class="buttons">
          <el-button class="button" @click="$router.push('/teacher/student-inform')">
            <el-icon class="icon" size="1.2rem"><DocumentCopy /></el-icon>
            学生信息
          </el-button>
          <el-button class="button" @click="$router.push('/teacher/statistic-inform')">
            <el-icon class="icon" size="1.2rem"><DataAnalysis /></el-icon>
            统计信息
          </el-button>
        </div>
    </el-aside>

    <el-main>
      <RouterView v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </RouterView>
    </el-main>
  </el-container>

</el-container>
</template>

<style scoped>
.page-container {
  position: absolute;
  top: 5%;
  left: 0;
  width: 100%;
  height: 95%;
  background-color: #f1f8ec;
}
.top-bar {
  background-color: #ffffff;
  height: 5%;
}
.aside{
  width:20%;
}
.avatar {
  margin-top: 10%;
  margin-left:30%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  background-color: rgb(164, 198, 155);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.buttons {
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button {
  display: inline-block;
  width: 120px;
  height: 35px;
  background-color:  rgb(164, 198, 155);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 10%;
}
.el-button+.el-button {
    margin-left: 0px;
}
.button-active {
  background-color: rgb(134, 134, 134);
}

.name {
  margin-top: 6%;
  margin-left: 42%;
  font-size: 15px;
}
.icon{
  margin-right:5%;
  margin-left:-2%;
}
</style>