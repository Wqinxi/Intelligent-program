<script setup lang="ts">
import { RouterView} from "vue-router";
import {useRoute} from "vue-router";

const route = useRoute()

</script>

<template>
  <div>
    <RouterView v-slot="{ Component }" >
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </RouterView>
  </div>
</template>