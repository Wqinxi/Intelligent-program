<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="whole-page">
    <el-container direction="horizontal" class="login-container">
      <RouterView v-slot="{ Component }">
        <keep-alive>
          <component :is="Component"/>
        </keep-alive>
      </RouterView>
    </el-container>
  </div>
</template>

<style>

</style>