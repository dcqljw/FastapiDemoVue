<script setup lang="ts">
import {ref, onMounted} from "vue";
import {RouterView} from 'vue-router'
import {setToastInstance} from "@/toast.ts";


const toast = ref("");
console.log("App")
setToastInstance(toast.value)
</script>

<template>
  <RouterView/>
  <Toast ref="toast"/>
</template>

<style scoped>

</style>
