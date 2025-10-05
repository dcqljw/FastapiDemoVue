<script setup lang="ts">
import {ref} from "vue";
import {useToast} from "primevue/usetoast";

import {fetchGetUserList, fetchCreateUser, fetchDeleteUser} from "@/api/UserApi.ts";


const toast = useToast();
const showEdite = ref(false);
const deleteDialog = ref(false);
const addUserDialog = ref(false);
const errorMessage = ref("");
const selectUserIndex = ref(0);
const user = ref<[]>([]);
const editUserData = ref({
  id: 0,
  username: "",
  email: "",
  created_at: ""
});
const addUserData = ref({
  username: "",
  password: ""
});
const resetUserData = () => {
  addUserData.value = {
    username: "",
    password: ""
  }
}
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
  console.log(user.value[selectUserIndex.value])
  fetchDeleteUser(user.value[selectUserIndex.value].id).then(res => {
    if (res.data.code !== 2000) {
      toast.add({
        severity: 'error',
        summary: '错误',
        detail: res.data.message,
        life: 3000
      });
    } else {
      user.value.splice(selectUserIndex.value, 1)
      deleteDialog.value = !deleteDialog.value;
      toast.add({
        severity: 'success',
        summary: '成功',
        detail: res.data.message,
        life: 3000
      });
    }
  })

}

const getUserList = () => {
  fetchGetUserList().then(res => {
    console.log(res)
    user.value = res.data.data
    console.log(user.value)
  })
}
const createUserHandler = () => {
  if (!addUserData.value.username || !addUserData.value.password) {
    errorMessage.value = "请填写用户名和密码"
  } else {
    fetchCreateUser(addUserData.value).then(res => {
      console.log(res)
      if (res.data.code !== 2000) {
        errorMessage.value = res.data.message
      }
    })
  }
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
              <Button label="新增用户" size="small" severity="contrast" variant="outlined" @click="addUserDialog=true"/>
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
  <Dialog v-model:visible="addUserDialog" modal @show="resetUserData">
    <template #header>
      <div>新增用户</div>
    </template>
    <div class="flex flex-col gap-4 justify-items-center">
      <div class="grid grid-cols-4">
        <div class="flex items-center">用户名</div>
        <InputText v-model="addUserData.username" class="col-span-3"/>
      </div>
      <div class="grid grid-cols-4">
        <div class="flex items-center">密码</div>
        <Password v-model="addUserData.password" toggleMask :feedback="false" class="col-span-3"/>
      </div>
      <div>
        <Message severity="error" v-if="errorMessage">{{ errorMessage }}</Message>
      </div>
      <div class="flex justify-end gap-4">
        <Button label="取消" severity="secondary" @click="addUserDialog=false"/>
        <Button @click="createUserHandler" label="确认"/>
      </div>
    </div>
  </Dialog>
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