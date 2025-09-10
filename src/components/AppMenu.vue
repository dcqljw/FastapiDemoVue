<script setup lang="ts">
import {ref} from "vue";
import AppMenuItem from "@/components/AppMenuItem.vue";

const items = ref([
  {
    label: '仪表盘',
    icon: 'pi pi-user',
    items: [
      {
        label: "仪表盘",
        icon: 'pi pi-user',
        items: [
          {
            label: "aaa",
            icon: 'pi pi-user',
            to: '/user_center',
          },
          {
            label: "bbbb",
            icon: 'pi pi-user',
            items: [
              {
                label: "aaa",
                icon: 'pi pi-user',
                to: '/user_center',
              },
              {
                label: "bbbb",
                icon: 'pi pi-user',
                to: '/user_center',
              }
            ]
          }
        ]
      },
      {
        label: '用户',
        icon: 'pi pi-user',
        items: [
          {
            label: "aaa",
            icon: 'pi pi-user',
            to: '/user_center',
          },
          {
            label: "bbbb",
            icon: 'pi pi-user',
            to: '/user_center',
          }
        ]
      }, {
        label: '设置',
        icon: 'pi pi-settings',
      }
    ]
  },
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