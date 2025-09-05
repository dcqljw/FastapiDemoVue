<script setup lang="ts">
import {ref} from "vue";
import {useRouter, useRoute} from "vue-router";

const router = useRouter()
const route = useRoute()

const options = ref([
  {name: "首页", path: "/"},
  {name: "个人中心", path: "/user_center"},
  {name: "设置", path: "setting"}
])

const tagCloseHandler = (index: number) => {
  console.log(index)
  options.value.splice(index, 1)
  if (index === 0){
    router.push(options.value[0].path)
  }else {
    router.push(options.value[index - 1].path)
  }
}
const toggleTag = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div class="tag-list flex gap-2">
    <Tag @click="toggleTag(item.path)" v-for="(item,index) in options" :key="item.name" size="small"
         class="tag-item flex"
         :class="{'tag-item-active': route.path === item.path}"
         style="background: #ffffff;border:2px solid var(--p-surface-200)">
      <span class="tag-item-title">{{ item.name }}</span>
      <i class="pi pi-times tag-close" v-if="options.length > 1" style="font-size: 12px" @click.stop="tagCloseHandler(index)"></i>
    </Tag>
  </div>
</template>

<style scoped>
.tag-item {
  color: black;
  gap: 10px !important;
}

.tag-item-title {
  font-size: 13px;
  font-weight: normal;
}

.tag-item-active {
  color: var(--color-primary);
}

.tag-item:hover {
  color: var(--color-primary);
  cursor: pointer;
}

.tag-close {
  padding: 4px;
}

.tag-close:hover {
  background: #e9ecf2;
  border-radius: 10px;
}
</style>