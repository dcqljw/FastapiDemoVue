<script setup lang="ts">
import {ref} from "vue";

const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <li>
    <a :target="item.target"></a>
    <router-link :to="item">
      <i class="pi pi-fw" :class="item.icon"></i>
      <span>{{ item.label }}</span>
    </router-link>
    <Transition layout-submenu>
      <ul v-show="item.items">
        <app-menu-item v-for="child in item.items" :item="child"></app-menu-item>
      </ul>
    </Transition>
  </li>
</template>

<style scoped>

</style>