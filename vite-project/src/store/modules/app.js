const state = () => ({
    routerMap: [],
    routerList: [],
    loadMenus: false
})

const actions = {

}

const mutations = {
    SETLOADMENUS: (state) =>{
        state.loadMenus = true;
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}