<script setup lang="ts">

import AppConfigurator from "@/components/AppConfigurator.vue";
import {ref} from "vue";

const visable = ref(false)
</script>

<template>
  <div class="header h-full bg-[#ffffff] flex justify-between">
    <div class="flex h-full items-center ml-[50px] font-bold">
      FastApiDemo
    </div>
    <div class="flex items-center mr-[20px] gap-5">
      <Button type="button" icon="pi pi-palette" @click="visable=true"/>
      <Button icon="pi pi-user"/>
    </div>
    <!--    <Button-->
    <!--        v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"-->
    <!--        type="button"-->
    <!--        class="layout-topbar-action layout-topbar-action-highlight"-->
    <!--    >-->
    <!--      <i class="pi pi-palette"></i>-->
    <!--    </Button>-->
    <!--    <AppConfigurator/>-->
    <Drawer v-model:visible="visable" position="right">
      <template #header>
        <div>配置</div>
      </template>
      <AppConfigurator/>
    </Drawer>
  </div>
</template>

<style scoped>

</style>