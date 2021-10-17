import Layout from '@/Layout/index.vue';
const routes = {
    path: '/user',
    name: 'user',
    component: Layout,
    redirect: '/user/index',
    meta: {
        role: ['admin']
    },
    children: [{
        path: '/user/index',
        name: 'userIndex',
        component: () => import('@/views/user/user.vue'),

    }, {
        path: '/user/home',
        name: 'home',
        component: () => import('@/views/Home.vue')
    }, {
        path: '/user/about',
        name: 'about',
        component: () => import('@/views/About.vue')
    }]
}
export default routes;