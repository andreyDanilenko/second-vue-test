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
        },
        SET_FAVORITES: (state, post) => {
            state.favorites.unshift(post)
            state.posts = state.posts.filter(p => p.id !== post.id)
        },
        DELETE_FROM_FAVORITES: (state, post) => {
            state.posts.unshift(post)
            state.favorites = state.favorites.filter(p => p.id !== post.id)
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
        },
        ADD_TO_FAVORITES({ commit }, post) {
            commit('SET_FAVORITES', post)
        },
        REMOVE_FROM_FAVORITES({ commit }, post) {
            commit('DELETE_FROM_FAVORITES', post)
        }
    },
    getters: {
        POSTS(state) {
            return state.posts.slice().sort((a, b) => (b.id > a.id) ? 1 : -1);
        },
        FAVORITES(state) {
            return state.favorites.slice().sort((a, b) => (b.id > a.id) ? 1 : -1);
        }
    }


})

export default store;