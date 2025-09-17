<script setup lang="ts">
import {ref} from "vue";
import AppMenuItem from "@/components/AppMenuItem.vue";

const items = ref([
  {
    label: 'root',
    items: [
      {
        label: "仪表盘",
        icon: 'pi pi-home',
        items: [
          {
            label: "工作台",
            to: '/',
          },
        ]
      },
      {
        label: '系统管理',
        icon: 'pi pi-cog',
        items: [
          {
            label: "用户管理",
            to: '/user',
          },
          {
            label: "角色管理",
            to: '/role',
          }
        ]
      },
      {
        label: '更新日志',
        icon: 'pi pi-calendar',
      }
    ]
  }
]);
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item,i) in items" :key="item">
      <app-menu-item :item="item"></app-menu-item>
    </template>
  </ul>

</template>

<style scoped>

</style>