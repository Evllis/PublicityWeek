import { createApp } from 'vue'
import Axios from './plugins/axios'
import Vueaxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button } from 'vant'

import './assets/sass/main.scss'

createApp(App)
    .use(Vueaxios, Axios)
    .use(Button)
    .use(store)
    .use(router)
    .mount('#app')
