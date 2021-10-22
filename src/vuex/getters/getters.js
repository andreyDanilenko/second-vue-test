export default {
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