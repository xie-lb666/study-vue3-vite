import {
    createStore
} from 'vuex'

const store = createStore({
    state: {
        counter: 1,
        token: '1111111111111',
        navflag: false,
        role: 'admin'
    },
    mutations: {
        add(state) {
            state.counter++;
        },
        setNav(state) {
            state.navflag = true
        }
    }
});
export default store;