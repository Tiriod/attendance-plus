// store.js
import { createStore } from 'vuex';

const store = createStore({
    state: {
        user: null, // User information
        isLoggedIn: false, // Login status
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setLoggedIn(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn;
        },
    },
    actions: {
        login({ commit }, user) {
            commit('setUser', user);
            commit('setLoggedIn', true);
        },
        logout({ commit }) {
            commit('setUser', null);
            commit('setLoggedIn', false);
        },
    },
});

export default store;
