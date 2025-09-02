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
  <div>
    <Menu :model="items" />
  </div>
</template>

<style scoped>

</style>