import {defineStore} from "pinia";
import {ref, computed} from "vue";


export const useMenuStore = defineStore(
    'menuStore',
    () => {
        const menuList = ref([])

        const setMenuList = (data: any) => {
            menuList.value = data
        }
        return {
            menuList,
            setMenuList
        }
    })