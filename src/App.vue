<script setup lang="ts">
import {ref, onMounted, onBeforeMount} from "vue";
import {RouterView} from 'vue-router'
import {setToastInstance} from "@/toast.ts";

const toast = ref("");

onMounted(() => {
  setToastInstance(toast.value)

})
</script>

<template>
  <Toast ref="toast"/>
  <RouterView/>
</template>

<style scoped>

</style>
