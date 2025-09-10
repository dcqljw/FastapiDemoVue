<script setup lang="ts">
import {ref} from "vue";

const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  },
  root: {
    type: Boolean,
    default: true
  }
})
const isActiveMenu = ref(false)

const itemClick = (event: any, item: any) => {
  isActiveMenu.value = !isActiveMenu.value
}
</script>

<template>
  <li :class="{'layout-root-menuitem':root,'active-menuitem': isActiveMenu }">
    <a v-if="(!item.to || item.items) && item.visible !== false" @click="itemClick($event, item)">
      <i :class="item.icon"></i>
      <span>{{ item.label }}</span>
      <i class="pi pi-fw pi-angle-down layout-submenu-toggler" v-if="item.items"></i>
    </a>
    <router-link v-if="item.to" :to="item.to">
      <i :class="item.icon"></i>
      <span>{{ item.label }}</span>
    </router-link>
    <Transition v-if="item.items" name="layout-submenu">
      <ul v-show="root ? true: isActiveMenu" class="layout-submenu">
        <app-menu-item v-for="child in item.items" :item="child" :root="false"></app-menu-item>
      </ul>
    </Transition>
  </li>
</template>

<style scoped>

</style>