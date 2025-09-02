<script setup lang="ts">

import Header from "@/components/Header.vue";
import AppMenu from "@/components/AppMenu.vue";
</script>

<template>
  <div class="bg-[#f1f5f9] h-full fixed w-full">
    <div class="h-[60px] absolute left-0 top-0 w-full">
      <Header/>
    </div>
    <div class="flex h-full pt-[60px]">
      <div class="w-50 m-[10px] bg-[#ffffff]">
        <AppMenu/>
      </div>
      <div class="overflow-auto w-full p-[20px] m-[10px] bg-[#ffffff]">
        <div v-for=" i in 100">{{ i }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>