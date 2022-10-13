import { createApp } from 'vue'
import { router } from "vue-router"
import Store from "vuex"
import App from './App.vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
    // You can set your default options here
};

createApp(App).use(Store).use(router).use(Toast, options).mount('#app')
