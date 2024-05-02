<script setup lang="ts">
import { RouterView } from "vue-router";

</script>

<template>
  <div class="whole-page">
    <img class="image" src="@/assets/img/welcomepic.png">
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
  height: 100%;
  width: 100%;
  background-color: rgb(255, 255, 255);
  .image {
  position: absolute; 
  left: 0;
  top: 0; 
  height: 100%;
  width: 50%; 
  object-fit: cover;
}
  .login-container {
    width: 25%;
    height: 65%;
    position: fixed;
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
  }
}
</style>