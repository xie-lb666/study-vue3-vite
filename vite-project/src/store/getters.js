const getters = {
    tokne: (state) => state.user.tokne,
    role: (state) => state.user.role,
    routerMap: (state) => state.app.routerMap,
    routerList: (state) => state.app.routerList,
}

export default getters;