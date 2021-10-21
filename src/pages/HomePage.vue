<template lang="pug">
.home 
  .container
    .home__wrapper
      .card-list 
        h2.card-list__title All
        .card-list__wrapper
          .card-list__empty(v-if="!POSTS.length") There is nothing...
          transition-group(name="card-list")
            card-item(
              v-for="post in [...POSTS].slice(0, 10)",
              :key="post.id",
              :post="post",
              :className="(className = 'card')",
              :buttonTitle="(buttonTitle = '[addToFavorites]')",
              @click="addToFavorites"
            )
      .card-list
        h2.card-list__title Favorites
        .card-list__wrapper
          .card-list__empty(v-if="!FAVORITES.length") No favorites...
          transition-group(name="card-list")
            card-item(
              v-for="post in [...FAVORITES].slice(0, 10)",
              :key="post.id",
              :post="post",
              :className="(className = 'card')",
              :buttonTitle="(buttonTitle = '[remove]')",
              @click="removeFromFavorites"
            )
</template>
<script>
import CardItem from "../components/CardItem.vue";
import MyButton from "../components/UI/MyButton.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { CardItem, MyButton },

  data() {
    return { history: [] };
  },

  computed: {
    ...mapGetters(["POSTS", "FAVORITES"]),
  },

  methods: {
    ...mapActions([
      "GET_POSTS_FROM_API",
      "ADD_TO_FAVORITES",
      "REMOVE_FROM_FAVORITES",
      "ADD_TO_HISTORY",
    ]),

    filterPosts() {},

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
<style lang="scss">
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

.card-list-enter-active {
  animation: bounce-in 1s;
}
.card-list-leave-active {
  animation: bounce-in 0.8s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.card-list {
  font-family: Arial, sans-serif;
  margin: 10px;
  width: 100%;

  // @media (min-width: 900px) {
  //   width: calc((100% / 2) - 20px);
  // }

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
}
</style>