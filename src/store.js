import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        books: {
            loading: false,
            resolved: false,
            error: false
        },
        loader: false,
        snackBar: null
    },
    mutations: {
        toggleBooksState(state, condition) {
            state.books[condition.state] = !state.books[condition.state]
        },
        toggleLoader(state) {
            state.loader = !state.loader
        },
        toggleSnackBar(state) {
            state.snackBar = !state.snackBar
        }
    },
    actions: {

    }
})