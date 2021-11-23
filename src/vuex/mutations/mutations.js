export default {
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

    SET_SEARCH_VALUE: (state, value) => {
        state.searchQuery = value;
    },

    DELETE_FROM_FAVORITES: (state, post) => {
        state.posts.unshift(post)
        state.favorites = state.favorites.filter(p => p.id !== post.id)
    },

    SET_HISTORY: (state, story) => {
        state.history.unshift(story)
    }
}
