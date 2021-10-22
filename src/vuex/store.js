import Vue from "vue";
import Vuex from 'vuex';

import actions from './actions/actions'
import mutations from "./mutations/mutations"
import getters from "./getters/getters";


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        posts: [],
        favorites: [],
        history: [],
    },
    actions,
    mutations,
    getters
})

export default store;