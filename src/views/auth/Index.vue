<script setup lang="ts">
import { RouterView } from "vue-router";

</script>

<template>
  <div class="whole-page">
    <el-container direction="horizontal" class="login-container">
      <RouterView v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </RouterView>
    </el-container>
  </div>
</template>

<style>
.whole-page {
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: rgb(202, 242, 229);

  .login-container {
    width: 50%;
    height: 58%;
    position: fixed;
    background-color: aliceblue;
    border: 1px solid #464141;
    border-radius: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>