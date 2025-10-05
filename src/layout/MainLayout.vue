<script setup lang="ts">
import Header from "@/components/Header.vue";
import AppMenu from "@/components/AppMenu.vue";
import TagList from "@/components/TagList.vue";

import {onMounted} from "vue";
import {RouterView} from "vue-router";

import {useUserStore} from "@/stores/user.ts";
import {fetchUserInfo} from "@/api/UserApi.ts";

const userStore = useUserStore();

console.log("asdfasdf")

onMounted(() => {
  fetchUserInfo().then(res => {
    userStore.setUserInfo(res.data.data)
  })
})
</script>

<template>
  <div class="bg-[#f1f5f9] h-full fixed w-full">
    <div class="h-[60px] absolute left-0 top-0 w-full">
      <Header/>
    </div>
    <div class="flex h-full pt-[60px]">
      <div class="w-80 m-[10px] h-full bg-[#ffffff] p-[10px] custom-menu">
        <AppMenu/>
      </div>
      <div class="m-[10px] flex-1">
        <div class="absolute h-[40px] bg-[#f1f5f9] w-full">
          <TagList/>
        </div>
        <div class=" overflow-auto h-full pt-[40px]">
          <RouterView/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-menu{
  border-radius: var(--p-card-border-radius);
}
</style>