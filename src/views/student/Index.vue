<script setup lang="ts">
import { RouterView} from "vue-router";
import {useRoute} from "vue-router";

const route = useRoute()

</script>

<template>
  <el-container>
    
    <el-header class="top-bar"></el-header>

    <el-container class="page-container">
      <el-main>
        <RouterView v-slot="{ Component }" >
          <keep-alive>
            <component :is="Component"/>
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
  background-color: #e6e6e6e0;
}
.top-bar {
  background-color: #ffffff;
  height: 5%;
}
</style>