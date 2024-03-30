<script setup lang="ts">
import { RouterView } from "vue-router";
import { useRoute } from "vue-router";
import Header from "@/views/student/components/Header.vue"
const route = useRoute()
</script>

<template>
  <div class="header">
    <Header />
  </div>
  <div>
    <RouterView v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </RouterView>
  </div>
</template>
<style scoped>
.header {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;
}
</style>