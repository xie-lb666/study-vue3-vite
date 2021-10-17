const state = () => ({//
    routerList: [],    //控制动态侧边栏
    loadMenus: false,  //控制是否是第一次显示 
})

const actions = {

}

const mutations = {
    SETLOADMENUS: (state) => {
        state.loadMenus = true;
    },
    SETROUTERLIST: (state, routerlist) => {
        state.routerList = routerlist;
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}