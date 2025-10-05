<script setup lang="ts">
import AppConfigurator from "@/components/AppConfigurator.vue";
import {ref} from "vue";
import {useRouter} from "vue-router";

import {fetchAuthLogout} from "@/api/AuthApi.ts";

const router = useRouter();
const visible = ref(false)
const i18n_popover = ref()
const message_popover = ref()
const op = ref()
const i18n_items = ref([
  {label: "简体中文"},
  {label: "English"},
])
const toggle = (e: any) => {
  op.value.toggle(e)
}
const toggle_i18n = (e: any) => {
  i18n_popover.value.toggle(e)
}
const toggle_message = (e: any) => {
  message_popover.value.toggle(e)
}
const logout = () => {
  fetchAuthLogout().then(res => {
    console.log(res)
    if (res.data.code === 2000) {
      localStorage.removeItem("token")
      router.push("/login")
    }
  })
}
</script>

<template>
  <div class="header h-full bg-[#ffffff] flex justify-between">
    <div class="flex h-full items-center ml-[50px] font-bold">
      FastApiDemo
    </div>
    <div class="flex items-center mr-[20px] gap-3">
      <Button severity="secondary" variant="text" icon="pi pi-bell" @click="toggle_message"/>
      <Button severity="secondary" variant="text" icon="pi pi-globe" @click="toggle_i18n"/>
      <Button severity="secondary" icon="pi pi-palette" @click="visible=true" variant="text"/>
      <Avatar label="D" @click="toggle" class="cursor-pointer"/>
    </div>
    <Drawer v-model:visible="visible" position="right" :modal="false">
      <template #header>
        <div>配置</div>
      </template>
      <AppConfigurator/>
    </Drawer>
  </div>
  <Popover ref="message_popover" class="w-[300px]">
    <div class="mb-[10px]">
      消息
    </div>
    <Divider/>
    <div class="flex flex-col gap-2">
      <div class="flex gap-2 items-center hover:bg-[#f8f8f8] cursor-pointer" v-for="i in 3">
        <div class="mr-[10px] w-[40px] h-[40px]">
          <Tag icon="pi pi-megaphone" class="h-full w-full" size="10px"></Tag>
        </div>
        <div class="flex flex-col">
          <span>FastApiDemo v1.0.0 发布</span>
          <span class="text-[12px]">2025-09-05</span>
        </div>
      </div>
      <Divider/>
    </div>
  </Popover>
  <Popover ref="i18n_popover" class="p-[0]">
    <template #container>
      <Menu :model="i18n_items"/>
    </template>
  </Popover>
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
      <Button icon="pi pi-user" severity="contrast" label="个人中心" size="small" variant="text" class="w-full"
              @click="$router.push('/user_center')"/>
    </div>
    <Divider/>
    <Button label="退出登录" raised size="small" class="w-full" @click="logout"/>
  </Popover>
</template>

<style scoped>
.user-popover-menu > button {
  justify-content: start !important;
}
</style>