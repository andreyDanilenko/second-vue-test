import Vue from "vue";
import App from "./App.vue"
import router from "./router/router";
import store from "./vuex/store";
import './styles/styles.scss'

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')