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
            :key="post.id",
            :post="post",
            :buttonTitle="(buttonTitle = '[addToFavorites]')",
            @click="addToFavorites"
          )
      .card-list
        h2.card-list__title Favorite
        .card-list__wrapper
          .card-list__empty(v-if="!FAVORITES.length") Нет фаворитов...
          card-item(
            v-else,
            v-for="post in FAVORITES",
            :key="post.id",
            :post="post",
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
    ...mapActions([
      "GET_POSTS_FROM_API",
      "ADD_TO_FAVORITES",
      "REMOVE_FROM_FAVORITES",
    ]),
    addToFavorites(post) {
      this.ADD_TO_FAVORITES(post);
    },
    removeFromFavorites(post) {
      this.REMOVE_FROM_FAVORITES(post);
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