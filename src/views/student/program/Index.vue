<script setup lang="ts">
import { RouterView, useRoute} from "vue-router";
import Dialog from "./Dialog.vue";
import Blockly from 'blockly';
import * as hans from 'blockly/msg/zh-hans'
Blockly.setLocale(hans);


const route = useRoute()

</script>

<template>
  <el-container>

    <el-header class="header">
      <div class="top">青少年智慧编程: 课程A</div>
    </el-header>

    <el-container class="contain">
      <el-aside>
        <div class="sidebar">
          <div class="grey-box">
            
          </div>
          <el-button class="run-button" onclick="runCode()">
            <el-icon><CaretRight /></el-icon>
            运行程序
          </el-button>
          <div class="tasks">任务清单</div>
          <ul class="list">
            <li>任务一</li>
            <li>任务二</li>
            <li>任务三</li>
            <li>任务四</li>
            <li>任务五</li>
            <li>任务六</li>
          </ul>
        </div>
      </el-aside>
      <el-main>
        <el-header class="dialog">
          <Dialog />
        </el-header>
        <el-main class="main">
          <RouterView v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </RouterView>
        </el-main>
      </el-main>
    </el-container>

  </el-container>
</template>

<style scoped>
.main{
  background-color: #ededed;
  width:97%;
  height:70%;
  
}
.dialog{
  background-color: #d2d2d2;
  height: 30%;
  width:97%;
}
.header{
  margin-top:3.5%;
  height: 5vh;
  background-color:gray;
}
.top{
  display: flex;
  align-items: center;
  height: 100%;
  color:aliceblue;
}
.sidebar {
  padding: 20px;
}

.grey-box {
  background-color: #bebebe;
  padding: 30%;
  width:80%;
  margin-top:3%;
  margin-bottom: 6%;
  margin-left: 8%;
}

.run-button {
  background-color: #bebebe;
  color: rgb(0, 0, 0);
  border: none;
  margin-left: 50%;
  margin-top: -2%;
}

.tasks {
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 12%;
}
.list {
  list-style-type: none;
  padding: 5px;
  margin-top: 10%;
  margin-left: 10%;
}
.list li {
  margin-bottom: 10px;
}
</style>