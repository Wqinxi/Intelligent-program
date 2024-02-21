<script setup lang="ts">

</script>

<template>
  <el-container>
    <el-header class="login-head">登录</el-header>
    <el-main>
      <div class="button-container">
        <el-button @click="$router.push('/auth/studentLogIn')">学生登录</el-button>
        <el-button @click="$router.push('/auth/teacherLogIn')">老师登录</el-button>
      </div>
    </el-main>
  </el-container>
</template>

<style scoped>
.login-head {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 24px;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.el-button+.el-button {
  margin-left: 0px;
}

.el-button {
  margin-bottom: 3%;
  border-radius: 8px;
  font-size: 18px;
  padding: 10px 20px;
  width: 70%;
  background-color: #fcfcdd;
  color: #000000;
}
</style>
