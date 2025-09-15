<script setup lang="ts">
import {nextTick, ref, watch} from "vue";
import {useRouter, useRoute} from "vue-router";

const router = useRouter();
const route = useRoute();

const rightMenu = ref()
const menuKey = ref(0)
const options = ref([
  {name: "首页", path: "/"},
]);
const rightitems = ref([
  {
    label: '关闭当前标签页',
    icon: 'pi pi-times',
    command: () => {
      tagCloseHandler(menuKey.value);
    }
  },
  {
    label: '关闭其他标签页',
    icon: 'pi pi-times',
    command: () => {
      options.value = [options.value[menuKey.value]];
    }
  },
])

// 关闭标签处理
const tagCloseHandler = (index: number) => {
  // 保留至少一个标签
  if (options.value.length <= 1) return;

  const closedPath = options.value[index].path;
  options.value.splice(index, 1);

  // 如果关闭的是当前激活的路由，才需要跳转
  if (closedPath === route.path) {
    const targetIndex = Math.min(index, options.value.length - 1);
    router.push(options.value[targetIndex].path);
  }
};

// 切换标签
const toggleTag = (path: string) => {
  router.push(path);
};

const rightClickHandler = async (event: any, index: number) => {
  event.preventDefault();
  menuKey.value = index;
  console.log(index)
  rightMenu.value.show(event);
};
// 添加标签逻辑
const addTagIfNotExists = () => {
  // 跳过首页（已默认添加）
  if (route.path === "/") return;

  const tagExists = options.value.some(item => item.path === route.path);
  if (!tagExists && route.meta.title) {
    options.value.push({
      name: route.meta.title,
      path: route.path
    });
  }
};
// 监听路由变化，只在路由改变时更新标签
watch(
    () => route.path,
    (newPath, oldPath) => {
      if (newPath !== oldPath) {
        addTagIfNotExists();
      }
    },
    {immediate: true} // 初始加载时执行一次
);
</script>

<template>
  <div class="tag-list flex gap-2">
    <Tag @click="toggleTag(item.path)" v-for="(item,index) in options" :key="item.name" size="small"
         @click.right="rightClickHandler($event,index)"
         class="tag-item flex"
         :class="{'tag-item-active': route.path === item.path}"
         style="background: #ffffff;border:2px solid var(--p-surface-200)">
      <span class="tag-item-title">{{ item.name }}</span>
      <i class="pi pi-times tag-close" v-if="options.length > 1" style="font-size: 12px"
         @click.stop="tagCloseHandler(index)"></i>
    </Tag>
    <Menu ref="rightMenu" :model="rightitems" popup/>
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