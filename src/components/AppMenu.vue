<script setup lang="ts">
import {ref} from "vue";

const items = ref([
  {
    label: 'Home',
    items: [
      {
        label: 'New',
        icon: 'pi pi-plus'
      },
      {
        label: 'Search',
        icon: 'pi pi-search'
      }
    ]
  },
  {
    label: 'Profile',
    items: [
      {
        label: 'Settings',
        icon: 'pi pi-cog'
      },
      {
        label: 'Logout',
        icon: 'pi pi-sign-out'
      }
    ]
  }
]);
</script>

<template>
  <Menu :model="items" class="h-full"/>
</template>

<style scoped>

</style>