<script setup lang="ts">
import {ref, onMounted} from "vue";
import {useToast} from "primevue/usetoast";

import {editPasswordApi} from "@/api/AuthApi.ts";
import {userInfo} from "@/api/UserApi.ts";

const toast = useToast();
const showDialog = ref(false);
const errorMessage = ref("");
const username = ref("");
const email = ref("");
const phone = ref("19199999999");
const password = ref("");
const new_password = ref("");
const confirm_new_password = ref("");
const editPasswordHandler = () => {
  if (new_password.value !== confirm_new_password.value) {
    errorMessage.value = "新密码和确认密码不一致"
  } else {
    editPasswordApi({
      username: username.value,
      old_password: password.value,
      new_password: new_password.value
    }).then(res => {
      console.log(res)
      if (res.data.code === 2000) {
        toast.add({
          severity: "success",
          summary: "修改密码成功",
          detail: "请重新登录",
          life: 3000
        })
        resetHandler()
        showDialog.value = false
      } else {
        errorMessage.value = res.data.message
      }
    })
  }
}
const resetHandler = () => {
  password.value = "";
  new_password.value = "";
  confirm_new_password.value = "";
}
const getUserInfo = () => {
  userInfo().then(res => {
    if (res.data.code === 2000) {
      username.value = res.data.data.username
      email.value = res.data.data.email
    }
  })
}
onMounted(() => {
  getUserInfo()
})
</script>

<template>
  <div class="grid grid-flow-col gap-4 h-full">
    <Card class="row-span-3 flex items-center justify-center">
      <template #content>
        <div class="flex items-center flex-col gap-5">
          <div class="flex flex-col items-center gap-3">
            <Avatar image="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" size="xlarge"
                    shape="circle"/>
            <div class="text-xl">{{ username }}</div>
          </div>
          <div class="flex flex-col justify-items-start gap-3">
            <div class="flex gap-2 items-center" v-if="email">
              <i class="pi pi-envelope"></i>
              {{ email }}
            </div>
          </div>
          <Divider align="center">
            <b>权限</b>
          </Divider>
          <div class="flex gap-5">
            <Tag>系统管理员</Tag>
            <Tag>管理员</Tag>
          </div>
        </div>
      </template>
    </Card>
    <div class="col-span-2">
      <Card>
        <template #header>
          <div class="p-[20px] border-b-[1px] border-b-zinc-200">
            基础设置
          </div>
        </template>
        <template #content>
          <div class="flex flex-col gap-5">
            <div class="flex gap-4 items-center">
              <label class="w-[100px]">用户名</label>
              <InputText v-model="username" disabled fluid/>
            </div>
            <div class="flex gap-4 items-center">
              <label class="w-[100px]">密码</label>
              <InputGroup>
                <InputText value="********" fluid disabled/>
                <InputGroupAddon>
                  <Button icon="pi pi-pencil " severity="secondary" @click="showDialog=true"/>
                </InputGroupAddon>
              </InputGroup>

            </div>
            <div class="flex gap-4 items-center">
              <label class="w-[100px]">邮箱</label>
              <InputText v-model="email" fluid/>
            </div>
            <div class="flex gap-4 items-center">
              <label class="w-[100px]">手机号</label>
              <InputText v-model="phone" fluid/>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
  <Dialog v-model:visible="showDialog" header="修改密码" modal @show="resetHandler">
    <div class="flex flex-col gap-2">
      <Password placeholder="原密码" v-model="password" :feedback="false"/>
      <Password placeholder="新密码" v-model="new_password" :feedback="false"/>
      <Password placeholder="确认新密码" v-model="confirm_new_password" :feedback="false"/>
      <Message severity="error" v-if="errorMessage">{{ errorMessage }}</Message>
      <Button label="确认" @click="editPasswordHandler"/>
    </div>
  </Dialog>
  <Toast/>
</template>

<style scoped>

</style>