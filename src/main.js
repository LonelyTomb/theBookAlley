import Vue from 'vue'
// import './plugins/vue-pouch'
import './plugins/axios'
import './plugins/vuetify'
import "./plugins/pouch.js";

import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './assets/js/app'
import './assets/scss/app.scss'

Vue.config.productionTip = false
    // Vue.prototype.$pouch = pouch;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')