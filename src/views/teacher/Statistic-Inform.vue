<script setup lang="ts">

</script>

<template>
  <div class="titles">
    <div class="title">昨日</div>
    <div class="title">近7日</div>
    <div class="title">近30日</div>
    <div class="title">本周</div>
    <div class="title">本月</div>
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
.title{
    margin-bottom: 3%;
    margin-right: 10px; /* 调整词之间的间距 */
    cursor: pointer;
    margin-bottom: 3px;
}
.line{
    margin-left:3%;
    width:76%;
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