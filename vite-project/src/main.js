import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import element3 from "./plugins/elements3"

import './styles/index.scss'


createApp(App).use(router).use(store).mount('#app')