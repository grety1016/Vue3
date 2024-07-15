import {createPinia,defineStore} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const pinia = createPinia()
.use(piniaPluginPersistedstate);


