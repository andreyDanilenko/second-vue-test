import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        posts: [],
        favorites: [],
        history: [],
    },
    mutations: {
        SET_POSTS_FROM_API: (state, posts) => {
            if (state.posts.length) {
                return;
            }
            state.posts = posts
        },

        SET_FAVORITES: (state, post) => {
            state.favorites.unshift(post)
            state.posts = state.posts.filter(p => p.id !== post.id)
        },

        DELETE_FROM_FAVORITES: (state, post) => {
            state.posts.unshift(post)
            state.favorites = state.favorites.filter(p => p.id !== post.id)
        },

        SET_HISTORY: (state, story) => {
            state.history.unshift(story)
        }
    },
    actions: {
        GET_POSTS_FROM_API({ commit }) {
            return axios('https://jsonplaceholder.typicode.com/photos', {
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
        },

        ADD_TO_HISTORY({ commit }, story) {
            commit('SET_HISTORY', story)
        }
    },

    getters: {
        POSTS(state) {
            return state.posts.slice().sort((a, b) => (b.id > a.id) ? 1 : -1);
        },
        FAVORITES(state) {
            return state.favorites.slice().sort((a, b) => (b.id > a.id) ? 1 : -1);
        },
        HISTORY(state) {
            return state.history
        }
    }
})

export default store;