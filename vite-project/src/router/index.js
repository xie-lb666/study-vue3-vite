import {
    createRouter,
    createWebHashHistory
} from "vue-router";
import Layout from '../layout/index.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        component: Layout,
        children: [{
            path: '/',
            component:() => import('@/views/Home.vue')
        }]
    }]
})
export default router