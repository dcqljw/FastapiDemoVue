<script setup lang="ts">
import {ref} from "vue";

const items = ref([
  {
    label: '仪表盘',
    items: [
      {label: "工作台"}
    ]
  },
  {
    label: '用户',
    icon: 'pi pi-user'
  }
]);
</script>

<template>
  <PanelMenu :model="items" class="h-full">
    <template #item="{item}">
      {{ item.label }}
    </template>
  </PanelMenu>
</template>

<style scoped>

</style>