<script setup lang="ts">
import AppConfigurator from "@/components/AppConfigurator.vue";
import {ref} from "vue";

const visable = ref(false)
const op = ref()
const toggle = (e: any) => {
  op.value.toggle(e)
}
</script>

<template>
  <div class="header h-full bg-[#ffffff] flex justify-between">
    <div class="flex h-full items-center ml-[50px] font-bold">
      FastApiDemo
    </div>
    <div class="flex items-center mr-[20px] gap-5">
      <Button type="button" icon="pi pi-palette" @click="visable=true" variant="text"/>
      <Avatar label="D" @click="toggle" class="cursor-pointer"/>
    </div>
    <Drawer v-model:visible="visable" position="right">
      <template #header>
        <div>配置</div>
      </template>
      <AppConfigurator/>
    </Drawer>
  </div>
  <Popover ref="op" class="w-[300px]">
    <div class="flex items-center gap-4">
      <Avatar label="D" size="large"/>
      <div class="flex flex-col">
        <span class="text-[20px]">admin</span>
        <span class="text-[12px]">admin@dcq.com</span>
      </div>
    </div>
    <Divider/>
    <div class="user-popover-menu">
      <Button label="个人中心" size="small" variant="text" class="w-full" @click="$router.push('/personal_center')"/>
    </div>
    <Divider/>
    <Button label="退出登录" raised size="small" class="w-full"/>
  </Popover>
</template>

<style scoped>
.user-popover-menu > button {
  justify-content: start !important;
}
</style>