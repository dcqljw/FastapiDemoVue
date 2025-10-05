import {defineStore} from "pinia";
import {ref, computed} from "vue";


interface userInfo {
    username: string,
    email: string,
    roles: string[],
}

export const useUserStore = defineStore(
    'userStore',
    () => {
        const info = ref<Partial<userInfo>>({})
        const isLogin = ref(false)
        const token = ref('')

        const getUserInfo = computed(() => info.value);

        const setUserInfo = (data: userInfo) => {
            info.value = data
        }
        const setToken = (data: string) => {
            token.value = data
        }
        const setLoginStatus = (status: boolean) => {
            isLogin.value = status
        }

        const logOut = () => {
            info.value = {}
            isLogin.value = false
            token.value = ''
        }

        return {
            info,
            isLogin,
            token,
            getUserInfo,
            setUserInfo,
            setToken,
            setLoginStatus,
            logOut
        }
    }, {
        persist: {
            key: 'user',
            storage: localStorage
        }
    }
)