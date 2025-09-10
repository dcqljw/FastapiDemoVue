<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";

import {authLogin, editPasswordApi} from "@/api/AuthApi.ts";
import {useUserStore} from "@/stores/user.ts";

const router = useRouter();

const userStore = useUserStore();

const username = ref("");
const password = ref("");
const message = ref("");

const new_password = ref("")

const showDialog = ref(false);
const submit = () => {
  message.value = "";
  console.log(username.value, password.value);
  authLogin({username: username.value, password: password.value}).then(res => {
    console.log(res)
    router.push("/")
    userStore.setToken(res.data.access_token)
    localStorage.setItem("token", res.data.access_token)
    message.value = res.data.message
  })
};
const editPasswordSubmit = () => {
  editPasswordApi({
    username: username.value,
    old_password: password.value,
    new_password: new_password.value
  }).then(res => {
    console.log(res)
    showDialog.value = false
  })
}
</script>

<template>
  <div class="flex justify-center items-center h-full linear-basic">
    <Card class="w-96">
      <template #title>
        <h1 class="text-[clamp(1.5rem,3vw,2rem)] font-bold font-mono text-gradient text-center m-6">
          FastAPI Demo</h1>
      </template>
      <template #content>
        <div class="flex flex-col gap-5">
          <FloatLabel variant="on">
            <InputText class="w-full" v-model="username" size="small" fluid/>
            <label>账号</label>
          </FloatLabel>
          <FloatLabel variant="on">
            <Password toggle-mask :feedback="false" v-model="password" class="password"
                      size="small"/>
            <label>密码</label>
          </FloatLabel>
        </div>
        <Message v-if="message" class="my-6" severity="error">{{ message }}</Message>
        <div class="text-center m-6">
          <Button variant="text" label="Forgot Password?" size="small"/>
        </div>
        <div>
          <Button @click="submit" label="登录" class="w-full" size="small"/>
        </div>
        <Divider/>
        <div class="text-center text-xs">&copy;2025 FastAPI Demo</div>
      </template>
    </Card>
  </div>
  <Dialog v-model:visible="showDialog" header="首次登录需修改密码" modal>
    <div class="flex flex-col gap-5">
      <FloatLabel variant="on">
        <Password toggle-mask :feedback="false" v-model="new_password" class="password"
                  size="small"/>
        <label>新密码</label>
      </FloatLabel>
      <Button label="确定" @click="editPasswordSubmit" size="small"/>
    </div>

  </Dialog>
</template>

<style scoped>
.password, :deep(.password > input) {
  width: 100%;
}

.linear-basic {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
}

.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(45deg, #ff6b6b, #4ecdc4);
}

</style>