import {createPinia,defineStore} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const pinia = createPinia()
.use(piniaPluginPersistedstate);


export const useIndexStore = defineStore('index',()=>{

},{
    persist:{
        key: 'index',
        storage:window.sessionStorage,
        //paths: [''],//指定要持久化的对象作为数组成员
        serializer: {
            serialize: JSON.stringify,
            deserialize: JSON.parse,
        },
    }
});