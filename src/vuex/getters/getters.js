export default {
    POSTS(state) {
        return state.posts.slice().sort((a, b) => (b.id > a.id) ? 1 : -1);
    },

    SEARCHED_QUERY(state, getters) {
        return getters.POSTS
            .filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
    },

    FAVORITES(state) {
        return state.favorites.slice().sort((a, b) => (b.id > a.id) ? 1 : -1);
    },

    HISTORY(state) {
        return state.history
    }
}