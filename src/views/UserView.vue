<script setup lang="ts">
import {ref} from "vue";

import {getUserListApi, createUserApi} from "@/api/UserApi.ts";

const showEdite = ref(false);
const deleteDialog = ref(false);
const selectUserIndex = ref(0);
const user = ref<[]>([]);
const editUserData = ref({
  id: 0,
  username: "",
  email: "",
  created_at: ""
});
const editUserHandler = (index: number) => {
  showEdite.value = !showEdite.value;
  selectUserIndex.value = index;
  editUserData.value = {...user.value[index]}
}
const submitEdit = () => {
  user.value[selectUserIndex.value] = {...editUserData.value}
  showEdite.value = !showEdite.value;
}

const deleteUserHandler = () => {
  user.value.splice(selectUserIndex.value, 1)
  deleteDialog.value = !deleteDialog.value;
}

const getUserList = () => {
  getUserListApi().then(res => {
    console.log(res)
    user.value = res.data.data
    console.log(user.value)
  })
}
getUserList();
</script>

<template>
  <div>
    <Card>
      <template #content>
        <DataTable :value="user" removable-sort>
          <template #header>
            <div>
              <Button label="新增用户" size="small" severity="contrast" variant="outlined"/>
            </div>
          </template>
          <Column field="username" header="用户名" style="max-width: 100px"></Column>
          <Column field="email" header="邮箱"></Column>
          <Column field="created_at" sortable header="创建时间"></Column>
          <Column header="操作" style="width: 200px">
            <template #body="slotProps">
              <div class="flex gap-4">
                <Button label="编辑" @click="editUserHandler(slotProps.index)" size="small" severity="info"
                        variant="outlined"/>
                <Button label="删除" size="small" severity="danger" variant="outlined"
                        @click="deleteDialog=true;selectUserIndex=slotProps.index"/>
              </div>
            </template>
          </Column>
        </DataTable>
      </template>
    </Card>
  </div>
  <Dialog v-model:visible="showEdite" modal>
    <template #header>
      <div>编辑用户</div>
    </template>
    <div class="flex items-center gap-4 mb-[10px]">
      <div class="w-[50px]">用户名</div>
      <InputText v-model="editUserData.username" disabled/>
    </div>
    <div class="flex items-center gap-4 mb-[10px]">
      <div class="w-[50px]">邮箱</div>
      <InputText v-model="editUserData.email"/>
    </div>
    <div class="flex justify-end gap-4">
      <Button label="取消" severity="secondary" @click="showEdite=false"/>
      <Button @click="submitEdit" label="确认"/>
    </div>
  </Dialog>
  <Dialog v-model:visible="deleteDialog" modal>
    <template #header>
      <div>删除用户</div>
    </template>
    <div class="mb-[20px] w-[300px]">
      确定删除该用户吗？
    </div>
    <div class="flex justify-end gap-4">
      <Button label="取消" severity="secondary" @click="deleteDialog=false"/>
      <Button @click="deleteUserHandler" label="确认"/>
    </div>
  </Dialog>
</template>

<style scoped>

</style>