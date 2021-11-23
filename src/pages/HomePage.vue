<template lang="pug">
.home 
  .container
    .home__wrapper
      .card-list
        h2.card-list__title All
        .card-list__wrapper
          input.input(@input="filterPosts")
          .card-list__empty(v-if="!SEARCHED_QUERY.length") There is nothing...
          transition-group(name="card-list", mode="out-in")
            card-item(
              v-for="post in SEARCHED_QUERY.slice(0, renderedPosts)",
              :key="post.id",
              :post="post",
              :className="(className = 'card')",
              :buttonTitle="(buttonTitle = '[addToFavorites]')",
              @click="addToFavorites"
            )
        my-button(v-if="SEARCHED_QUERY.length <= renderedPosts") 
        my-button(
          v-else,
          @click.native="moreAll",
          :class="'card-list__button'"
        ) Показать еще {{ SEARCHED_QUERY.length - renderedPosts }}

      .card-list
        h2.card-list__title Favorites
        .card-list__wrapper
          .card-list__empty(v-if="!FAVORITES.length") No favorites...
          transition-group(name="card-list", mode="out-in")
            card-item(
              v-for="post in FAVORITES.slice(0, renderedFavorites)",
              :key="post.id",
              :post="post",
              :className="(className = 'card')",
              :buttonTitle="(buttonTitle = '[remove]')",
              @click="removeFromFavorites"
            )
        my-button(v-if="FAVORITES.length <= renderedFavorites") 
        my-button(
          v-else,
          @click.native="moreFavorites",
          :class="'card-list__button'"
        ) Показать еще {{ FAVORITES.length - renderedFavorites }}
</template>
<script>
import CardItem from "../components/CardItem.vue";
import MyButton from "../components/UI/MyButton.vue";
import MyInput from "../components/UI/MyInput.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  components: { CardItem, MyButton, MyInput },

  data() {
    return {
      renderedPosts: 10,
      renderedFavorites: 10,
    };
  },

  computed: {
    ...mapGetters(["SEARCHED_QUERY", "FAVORITES"]),
  },

  methods: {
    ...mapActions([
      "GET_POSTS_FROM_API",
      "ADD_TO_FAVORITES",
      "REMOVE_FROM_FAVORITES",
      "ADD_TO_HISTORY",
    ]),

    ...mapMutations(["SET_SEARCH_VALUE"]),

    moreAll() {
      this.renderedPosts += 10;
    },

    moreFavorites() {
      this.renderedFavorites += 10;
    },

    filterPosts(evt) {
      this.SET_SEARCH_VALUE(evt.target.value);
    },

    addToFavorites(post) {
      this.ADD_TO_FAVORITES(post);
      this.ADD_TO_HISTORY({
        date: new Date(),
        type: "add",
        id: Math.random(),
        name: post.title,
      });
    },
    removeFromFavorites(post) {
      this.REMOVE_FROM_FAVORITES(post);
      this.ADD_TO_HISTORY({
        date: new Date(),
        type: "remove",
        id: Math.random(),
        name: post.title,
      });
    },
  },

  mounted() {
    this.GET_POSTS_FROM_API();
  },
};
</script>
<style lang="scss" scoped>
.home {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 -10px;

    @media (min-width: 900px) {
      flex-wrap: nowrap;
    }
  }
}

.card-list-enter-active,
.card-list-leave-active {
  transition: opacity 0.5s ease;
}

.card-list-enter,
.card-list-leave-to {
  opacity: 0;
}

.card-list {
  font-family: Arial, sans-serif;
  margin: 10px;
  width: 100%;

  &__empty {
    user-select: none;
    display: block;
    margin-top: 20px;
    padding: 20px;
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    line-height: 35px;
    border-radius: 5px;
    background: #f4f6f9;
    color: #4682b4;
    border: 1px solid #4682b4;
  }

  &__title {
    user-select: none;
    display: inline-block;
    padding: 10px;
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    line-height: 35px;
    border-radius: 5px;
    margin: 10px 0;
    background: #f4f6f9;
    color: #4682b4;
    border: 1px solid #4682b4;
  }

  &__wrapper {
    background: #f4f6f9;
    color: #4682b4;
    border: 1px solid #4682b4;
    border-radius: 5px;
    padding: 0 20px 20px;
    margin: 10px 0;
  }

  &__button {
    width: 100%;
    background: #f4f6f9;
    color: #4682b4;
    border: 1px solid #4682b4;

    &:hover {
      background: #4682b4;
      color: #f4f6f9;
      border: 1px solid #4682b4;
    }
  }

  .input {
    width: 100%;
    padding: 10px 15px;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    margin-top: 15px;
    color: #4682b4;
    border: 1px #4682b4 solid;
    background: #f4f6f9;
    border-radius: 5px;
  }
}
</style>