<script setup lang="ts">
import {ref, onMounted} from "vue";
import {useMenuStore} from "@/stores/menu.ts";
import AppMenuItem from "@/components/AppMenuItem.vue";

const menuStore = useMenuStore();
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item,i) in menuStore.menuList" :key="item">
      <app-menu-item :item="item"></app-menu-item>
    </template>
  </ul>

</template>

<style scoped>

</style>