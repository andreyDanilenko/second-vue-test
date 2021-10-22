import axios from "axios";

export default {
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
}

