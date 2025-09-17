<script setup lang="ts">
import {ref} from "vue";

const user = ref([
  {
    id: 1,
    name: "张三"
  }, {
    id: 2,
    name: "李四"
  }
]);
</script>

<template>
  <div>
    <Card>
      <template #content>
        <DataTable :value="user">
          <template #header>
            <div>
              <Button label="新增用户" size="small" severity="contrast" variant="outlined"/>
            </div>
          </template>
          <Column field="name" header="用户名"></Column>
        </DataTable>
      </template>
    </Card>
  </div>
</template>

<style scoped>

</style>