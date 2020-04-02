import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        token: null
    },
    plugins: [createPersistedState()],
    mutations: {
        setToken(state, token){ state.token = token;
        }
    }
})