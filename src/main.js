import { createApp } from 'vue'
import { router } from "./router.js"
import Store from "vuex"
import App from './App.vue'

createApp(App).use(Store).use(router).mount('#app')
