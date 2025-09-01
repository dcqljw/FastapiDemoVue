<script setup lang="ts">

import Header from "@/components/Header.vue";
</script>

<template>
  <div class="bg-[#f1f5f9]">
    <div style="height: 6vh">
      <Header/>
    </div>
    <div class="flex" style="overflow: auto;height: 94vh">
      <div class="w-50">Menu</div>
      <div>
        <div v-for=" i in 100">{{ i }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>