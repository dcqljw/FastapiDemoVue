<script setup lang="ts">

import AppConfigurator from "@/components/AppConfigurator.vue";
</script>

<template>
  <div class="header">
    <Button
        v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
        type="button"
        class="layout-topbar-action layout-topbar-action-highlight"
    >
      <i class="pi pi-palette"></i>
    </Button>
    <AppConfigurator/>
  </div>
</template>

<style scoped>

</style>