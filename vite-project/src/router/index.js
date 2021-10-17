import {
    createRouter,
    createWebHistory
} from "vue-router";
import Layout from '../layout/index.vue';
const routes = [{
    path: '/',
    component: Layout,
    name: 'Layout',
    meta: {
        auth: true, //登录才能进去的
        name: '首页',
    },
    children: []
}, {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
}, {
    path: '/404',
    name: "404",
    component: () => import('@/views/errorPage/404.vue')
},];

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;