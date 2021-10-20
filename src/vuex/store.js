import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com/posts'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        posts: [],
        favorites: []
    },
    mutations: {
        SET_POSTS_FROM_API: (state, posts) => {
            state.posts = posts
        }
    },
    actions: {
        GET_POSTS_FROM_API({ commit }) {
            return axios(URL, {
                method: "GET"
            }).then((posts) => {
                commit('SET_POSTS_FROM_API', posts.data)
                return posts;
            }).catch(() => {
                alert('Нет данных')
                return error;
            })
        }
    },
    getters: {
        POSTS(state) {
            return state.posts;
        },
        FAVORITES(state) {
            return state.favorites;
        }
    }


})

export default store;