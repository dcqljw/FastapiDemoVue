<template>
  <div class="grid grid-cols-4 gap-4 grid-rows-2">
    <div class="col-span-3 row-span-1">
      <Card class="h-full">
        <template #content>
          <div class="flex justify-between items-center overflow-hidden">
            <div class="text-2xl font-bold">
              欢迎回来，{{ userStore.getUserInfo.username }}
            </div>
            <bg class="w-[160px]"/>
          </div>
        </template>
      </Card>
    </div>
    <div class="col-span-1 row-span-2">
      <Card>
        <template #header>
          <div class="p-[10px] border-b-1 border-b-gray-200">
            代办事项
          </div>
        </template>
        <template #content>
          <div v-for="i in todoList">
            <div class="flex justify-between">
              <div>123</div>
              <Checkbox v-model="checkbox" :value="i.id" :inputid="i.id" @change="setCheck"/>
            </div>
            <Divider/>
          </div>
        </template>
      </Card>
    </div>
    <div class="col-span-1">
      <Card>
        <template #title>
          快捷入口
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useUserStore} from "@/stores/user.ts";
import Bg from "@/assets/bg.vue";

const userStore = useUserStore();
const checkbox = ref(true);
const todoList = ref([
  {text: '1233', id: 1},
  {text: '1235', id: 2},
  {text: '1236', id: 3},
  {text: '1237', id: 4},
])
const setCheck = () => {
  console.log(checkbox.value)
}
</script>
<style scoped>
</style>
