<script setup lang="ts">
import {RouterView} from "vue-router";

import Header from "@/components/Header.vue";
import AppMenu from "@/components/AppMenu.vue";
import TagList from "@/components/TagList.vue";
</script>

<template>
  <div class="bg-[#f1f5f9] h-full fixed w-full">
    <div class="h-[60px] absolute left-0 top-0 w-full">
      <Header/>
    </div>
    <div class="flex h-full pt-[60px]">
      <div class="w-50 m-[10px] h-full ">
        <AppMenu/>
      </div>
      <div class=" w-full m-[10px]">
        <div class="absolute h-[40px] bg-[#f1f5f9] w-full">
          <TagList/>
        </div>
        <div class="bg-[#ffffff] overflow-auto h-full pt-[40px]">
          <RouterView/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>