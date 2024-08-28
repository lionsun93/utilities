import { createApp } from 'vue'
import './style.scss'
import './style.css'
import * as bootstrap from 'bootstrap'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
