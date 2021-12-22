import { createApp } from 'vue'
import App from './App.vue'
import MyForm from './components/MyForm.vue'
const app = createApp(App)
app.component("MyForm", MyForm )
app.mount('#app')
