<template lang="pug">
.home 
  .container
    .home__wrapper
      .card-list 
        h2.card-list__title All
        .card-list__wrapper
          .card-list__empty(v-if="!POSTS.length") Нет ничего
          card-item(
            v-else,
            v-for="post in POSTS",
            :post="post",
            :buttonTitle="(buttonTitle = '[addToFavorites]')",
            :key="post.id",
            @click="addToFavorites"
          )
      .card-list
        h2.card-list__title Favorite
        .card-list__wrapper
          .card-list__empty(v-if="!FAVORITES.length") Нет фаоворитов
          card-item(
            v-else,
            v-for="favorite in FAVORITES",
            :post="post",
            :key="post.id",
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

  computed: {
    ...mapGetters(["POSTS", "FAVORITES"]),
  },

  methods: {
    ...mapActions(["GET_POSTS_FROM_API"]),
    addToFavorites(post) {
      console.log("add", post.id);
    },
    removeFromFavorites(post) {
      console.log("remove", post.id);
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
  }
}

.card-list {
  font-family: Arial, sans-serif;
  margin: 10px;
  width: 100%;

  @media (min-width: 900px) {
    width: calc((100% / 2) - 20px);
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
    padding: 0 20px 40px;
    margin: 10px 0;
  }
}
</style>