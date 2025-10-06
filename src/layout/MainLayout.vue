<script setup lang="ts">
import Header from "@/components/Header.vue";
import AppMenu from "@/components/AppMenu.vue";
import TagList from "@/components/TagList.vue";

import {onMounted, ref} from "vue";
import {RouterView} from "vue-router";

import {useUserStore} from "@/stores/user.ts";
import {fetchUserInfo} from "@/api/UserApi.ts";
import {fetchEditPassword} from "@/api/AuthApi.ts";

const userStore = useUserStore();
const showDialog = ref(false);
const oldPassword = ref("")
const newPassword = ref("")

console.log("asdfasdf")

const editPasswordSubmit = () => {
  fetchEditPassword({
    username: userStore.info.username,
    old_password: oldPassword.value,
    new_password: newPassword.value
  }).then(res => {
    console.log(res)
    showDialog.value = false
  })
}

onMounted(() => {
  fetchUserInfo().then(res => {
    userStore.setUserInfo(res.data.data)
    if (res.data.data.first_login) {
      showDialog.value = true
    }
  })
})
</script>

<template>
  <div class="bg-[#f1f5f9] h-full fixed w-full">
    <div class="h-[60px] absolute left-0 top-0 w-full">
      <Header/>
    </div>
    <div class="flex h-full pt-[60px]">
      <div class="w-80 m-[10px] h-full bg-[#ffffff] p-[10px] custom-menu">
        <AppMenu/>
      </div>
      <div class="m-[10px] flex-1">
        <div class="absolute h-[40px] bg-[#f1f5f9] w-full">
          <TagList/>
        </div>
        <div class=" overflow-auto h-full pt-[40px]">
          <RouterView/>
        </div>
      </div>
    </div>
  </div>
  <Dialog v-model:visible="showDialog" header="首次登录需修改密码" modal>
    <div class="flex flex-col gap-5">
      <FloatLabel variant="on">
        <Password toggle-mask :feedback="false" v-model="newPassword" class="password"
                  size="small"/>
        <label>新密码</label>
      </FloatLabel>
      <Button label="确定" @click="editPasswordSubmit" size="small"/>
    </div>
  </Dialog>
</template>

<style scoped>
.custom-menu {
  border-radius: var(--p-card-border-radius);
}
</style>