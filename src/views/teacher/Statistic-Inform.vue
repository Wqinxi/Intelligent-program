<script setup lang="ts">

</script>

<template>
  <div class="titles">
    <div class="title">昨日</div>
    <div class="title">近7日</div>
    <div class="title">近30日</div>
    <div class="title">本周</div>
    <div class="title">本月</div>
    <el-button class="export-button">数据导出</el-button>
  </div>
  
  <div class="line"></div>

  <div class="blocks">
    <div>
      <div class="text">学生问题统计</div>
      <div class="block"></div>
    </div>
    <div>
      <div class="text">特定问题统计</div>
      <div class="block"></div>
    </div>
  </div>
</template>
  
<style scoped>
.titles {
  margin-top: 3%;
  margin-bottom: 1%;
  display: flex;
  margin-left: 4%;
}
.export-button {
  margin-top:-1%;
  margin-left:40%;
  width: 12%;
  height: 35px;
  font-size: 16px;
  color: black;
  background-color: rgb(197, 197, 197);
}
.title{
    margin-bottom: 3%;
    margin-right: 10px;
    cursor: pointer;
    margin-bottom: 3px;
    color:rgb(110, 110, 110);
}
.line{
    margin-left:3%;
    width:85%;
    height:1%;
    color:black;
    border-top: 2px solid rgba(177, 177, 177, 0.639)}
.text{
    margin-bottom: 3%;
}
.blocks {
  display: flex;
  margin-left:4%;
  margin-top: 2%;
}
.block {
  width: 270px;
  height: 180px;
  background-color: rgb(194, 194, 194);
  margin-right: 130px;
}
</style>