import {createPinia,defineStore} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { ref } from 'vue';

export const pinia = createPinia()
.use(piniaPluginPersistedstate);


export const useIndexStore = defineStore('index',()=>{
    const count = ref<number>(0);

    return {count}

},{
    persist:{
        key: 'index',
        storage:window.sessionStorage,
        //paths: [''],//指定要持久化的对象作为数组成员,没有指定就是代表全部数据成员对象
        serializer: {
            serialize: JSON.stringify,
            deserialize: JSON.parse,
        },
    }
});