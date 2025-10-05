<script setup lang="ts">
import {ref, onBeforeUpdate, watch} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
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

const checkChildActive = (children: any) => {
  return children.some(child =>
      route.path === child.path || (child.children && checkChildActive(child.children))
  )
}

const checkActiveMenu = () => {
  if (!props.item.children || props.item.children.length === 0) return

  const isChildActive = props.item.children.some((child: any) => route.path === child.path || (child.children && checkChildActive(child.children)))
  if (isChildActive) {
    isActiveMenu.value = true
  }
}


watch(() => route.path, () => {
  checkActiveMenu()
}, {immediate: true})

const itemClick = (event: any, item: any) => {
  isActiveMenu.value = !isActiveMenu.value
}
</script>

<template>
  <li :class="{'layout-root-menuitem':root,'active-menuitem': isActiveMenu }">
    <a v-if="item.children.length >0 && item.visible !== false" @click="itemClick($event, item)">
      <i :class="item.icon"></i>
      <span>{{ item.label }}</span>
      <i class="pi pi-fw pi-angle-down layout-submenu-toggler" v-if="item.children.length > 0"></i>
    </a>
    <router-link v-if="item.path && (!item.children || item.children.length == 0)" :to="item.path"
                 :class="{'layout-menu-active': route.path === item.path}">
      <i :class="item.icon"></i>
      <span>{{ item.label }}</span>
    </router-link>
    <Transition v-if="item.children.length > 0" name="layout-submenu">
      <ul v-show="root ? true: isActiveMenu" class="layout-submenu">
        <app-menu-item v-for="child in item.children" :item="child" :root="false" :key="child.path"></app-menu-item>
      </ul>
    </Transition>
  </li>
</template>

<style scoped>

</style>