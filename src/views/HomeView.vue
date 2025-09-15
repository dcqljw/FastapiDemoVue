<template>
  <div class="grid grid-cols-4 gap-4 grid-rows-2">
    <div class="col-span-3 row-span-1">
      <Card class="h-full">
        <template #content>
          <div class="flex justify-between items-center">
            <div>
              欢迎回来，{{ userStore.getUserInfo.username }}
            </div>
            <bg class="w-[160px]"/>
          </div>
        </template>
      </Card>
    </div>
    <div class="col-span-1 row-span-2">
      <Card>
        <template #title>
          待办事项
        </template>
        <template #content>
          <div v-for="i in 10">
            {{ i }}
          </div>
        </template>
      </Card>
    </div>
    <div class="col-span-1">
      <Card>
        <template #title>
          快捷入口
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useUserStore} from "@/stores/user.ts";
import Bg from "@/assets/bg.vue";

const userStore = useUserStore();
</script>
<style scoped>
</style>
