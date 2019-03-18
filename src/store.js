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
        loader: {
            display: false,
            message: ""
        },
        snackBar: {
            display: null,
            message: ""
        }
    },
    mutations: {
        toggleBooksState(state, condition) {
            state.books[condition.state] = !state.books[condition.state];
        },
        toggleLoader(state, message) {
            state.loader.display = !state.loader.display;
            state.loader.message = message;
        },
        toggleSnackBar(state, message) {
            state.snackBar.display = !state.snackBar.display;
            state.snackBar.message = message;
        }
    },
    actions: {
        async displayLoader({
            dispatch,
            commit
        }, message) {
            await commit('toggleLoader', message);
            setTimeout(() => {
                dispatch('closeLoader')
            }, 3000);
        },
        async displaySnackBar({
            dispatch,
            commit
        }, message) {
            await commit('toggleSnackBar', message);
            setTimeout(() => {
                dispatch('closeSnackBar')
            }, 3000);
        },
        closeLoader({
            commit
        }) {
            commit('toggleLoader', "")
        },
        closeSnackBar({
            commit
        }) {
            commit('toggleSnackBar', "")
        }
    },
    getters: {
        snackMessage(state) {
            return state.snackBar.message;
        },
        snackBarState(state) {
            return state.snackBar.display;
        },
        loaderMessage(state) {
            return state.loader.message;
        },
        loaderState(state) {
            return state.loader.display;
        }
    }
});