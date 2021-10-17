const state = () => ({
    token: '',
    role: 'admin',
    user: {},
})

const actions = {

}

const mutations = {
    SETTOKNE: (state, token) => {
        state.token = token;
    },
    SETROLE: (state, role) => {
        state.role = role;
    },
    SETUSERINFO: (state, user) => {
        state.user = user;
    }

}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}