<script setup lang="ts">
import {ref, onMounted} from "vue";
import {RouterView} from 'vue-router'
import {setToastInstance} from "@/toast.ts";


const toast = ref("");
onMounted(() => {
  console.log("App")
  console.log(toast.value)
  setToastInstance(toast.value)
})
</script>

<template>
  <Toast ref="toast"/>
  <RouterView/>
</template>

<style scoped>

</style>
