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

  .login-container {
    width: 50%;
    height: 58%;
    background-color: #FFE4C4;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>