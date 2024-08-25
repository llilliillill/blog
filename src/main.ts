import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import ui from '@/components/UI'
import components from '@/components'

const pinia = createPinia()
const app = createApp(App)

ui.forEach((ui: any) => {
    app.component(ui.name, ui)
})

components.forEach((component: any) => {
    app.component(component.name, component)
})

app.use(router).use(pinia).mount('#app')
