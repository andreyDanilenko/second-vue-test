<template lang="pug">
.home 
  .container
    .home__wrapper
      .card-list 
        h2.card-list__title All
        .card-list__wrapper
          card-item(v-for="post in POSTS", :post="post", :key="post.id")
      .card-list 
        h2.card-list__title Favorite
        .card-list__wrapper
          card-item(v-for="post in POSTS", :post="post", :key="post.id")
</template>
<script>
import CardItem from "../components/CardItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { CardItem },

  computed: {
    ...mapGetters(["POSTS"]),
  },

  methods: {
    ...mapActions(["GET_POSTS_FROM_API"]),
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
    background: white;
    display: inline-block;
    padding: 10px;
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    line-height: 35px;
    color: #4682b4;
    border-radius: 5px;
    border: 1px solid #4682b4;
    margin: 10px 0;
  }

  &__wrapper {
    background: white;
    color: #4682b4;
    border: 1px solid #4682b4;
    border-radius: 5px;
    padding: 20px;
    margin: 10px 0;
  }
}
</style>