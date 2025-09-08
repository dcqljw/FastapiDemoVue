import {defineStore} from "pinia";
import {ref, computed} from "vue";


interface userInfo {
    username: string,
    email: string,
}

export const useUserStore = defineStore(
    'userStore',
    () => {
        const info = ref<Partial<userInfo>>({})
        const token = ref('')

        const getUserInfo = computed(() => info.value);

        const setUserInfo = (data: userInfo) => {
            info.value = data
        }
        const setToken = (data: string) => {
            token.value = data
        }

        return {
            info,
            token,
            getUserInfo,
            setUserInfo,
            setToken
        }
    }
)