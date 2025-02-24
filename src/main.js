import './assets/main.css'
import 'floating-vue/dist/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FloatingVue from 'floating-vue'
import Vue3TouchEvents from "vue3-touch-events"


const app = createApp(App)

app.use(router)
app.use(FloatingVue)
app.use(Vue3TouchEvents);

app.mount('#app')
