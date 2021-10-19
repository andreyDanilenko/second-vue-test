import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('./pages/HomePage.vue')
    },
    {
        path: '/history',
        component: () => import('./pages/HistoryPage.vue')
    }
];

export default new VueRouter({
    mode: 'history',
    routes
})