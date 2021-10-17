import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '@ant-design/icons-vue'
import './router/router'; //报错？

// import element3 from "./plugins/elements3"

import './styles/index.scss'


createApp(App).use(router).use(store).use(Antd).mount('#app')