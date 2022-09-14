import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import 'nprogress/nprogress.css'
import 'vue-toast/dist/vue-toast.min.css'
const app = createApp(App)

app.use(router)

app.mount('#app')
