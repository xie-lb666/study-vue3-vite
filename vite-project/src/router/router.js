// 筛选出对应的权限路由，
// 通过前置导航设置
import router from './index';

import {
    Roles
} from '../utils/const';
import store from '../store/index';
import asyncRoutes from './asyncRoutes';
router.beforeEach((to, from, next) => {
    console.log(store.state.token);
    // 判断有无登录
    if (!store.state.token) {
        // 没有tokne。跳登录
        next({
            path: '/login'
        })
    } else {
        // 设置导航,有导航则不用更新
        if (!store.state.navflag) {
            /**
             * 获得自己的权限字段，传给loadMenus ，动态添加路由
             */
            const role = store.state.role;
            loadMenus(role, next, to);
            store.commit('setNav')
        }
        next();
    }
})


export const loadMenus = (module, next, to) => {
    // 获取所有路由，然后于与自己的权限对比，得到自己的权限路由
    // 然后动态添加进去，并保存到 store
    let routerList = screenRouter(asyncRoutes, module);
    routerList.forEach(item => {
        router.addRoute(item);
    });
    next({
        ...to,
        replace: true
    })
}

// 传路由列表，和权限 进来，返回 对应的路由
function screenRouter(list, name) {
    let myroutes = list.filter(item => {
        return item.meta.role.some(v => {
            return v == name;
        })
    })
    return myroutes;
}