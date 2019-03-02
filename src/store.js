import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loader: false,
        books: {
            loading: false,
            resolved: false,
            error: false
        }
    },
    mutations: {
        toggleBooksState(state, condition) {
            state.books[condition] = !state.books[condition]
        },
        toggleLoader(state) {
            state.loader = !state.loader
        }
    },
    actions: {

    }
})