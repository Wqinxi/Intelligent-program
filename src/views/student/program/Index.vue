<script setup lang="ts">
import { RouterView, useRoute} from "vue-router";

const route = useRoute()

</script>

<template>

  <RouterView v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </RouterView>
  
</template>