<script setup lang="ts">
import {ref} from "vue";
import AppMenuItem from "@/components/AppMenuItem.vue";

const items = ref([
  {
    label: '仪表盘',
    icon: 'pi pi-user',
    items: [
      {
        label: "sub",
        icon: 'pi pi-user',
        items: [
          {
            label: "aaa",
            icon: 'pi pi-user',
          },
          {
            label: "bbbb",
            icon: 'pi pi-user',
          }
        ]
      }
    ]
  },
  {
    label: '用户',
    icon: 'pi pi-user'
  }
]);
</script>

<template>
  <template v-for="(item,i) in items" :key="item">
    <app-menu-item :item="item"></app-menu-item>
  </template>
</template>

<style scoped>

</style>