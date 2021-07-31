import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)
installElementPlus(app)
app.use(store).use(VueApexCharts).use(router).mount('#app')
