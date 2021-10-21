<template lang="pug">
.history
  .container
    .history__wrapper
      .history__filter
        my-button(:class="'history__button'") History
        my-button(:class="'history__button'") Add history
        my-button(:class="'history__button'") Deletion history
      .history__list 
        .history__item(
          v-for="story in HISTORY",
          :class="`history__item--${story.type}`",
          :key="story.id"
        ) 
          h2.history__item-title {{ story.name }}
          p.history__item-type {{ story.type }}
          p.history__item-date {{ story.date }}
</template>
<script>
import CardItem from "../components/CardItem.vue";
import MyButton from "../components/UI/MyButton.vue";
import { mapGetters } from "vuex";

export default {
  components: { MyButton, CardItem },

  computed: {
    ...mapGetters(["HISTORY"]),
  },
};
</script>
<style lang="scss" scoped>
.history {
  &__filter {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    color: #4682b4;
    border: 1px #4682b4 solid;
    padding: 20px;
    border-radius: 5px;

    &--add {
      background: #f4f6f9;
      color: #4682b4;
      border: 1px solid #4682b4;
    }

    &--remove {
      background: #4682b4;
      color: #f4f6f9;
      border: 1px #4682b4 solid;
    }
  }

  &__item-title {
    flex-grow: 1;
  }
  &__item-type {
    margin: 0 20px;
  }

  &__button {
    background: #f4f6f9;
    color: #4682b4;
    border: 1px solid #4682b4;
    margin-right: 20px;
    margin-top: 10px;

    &:hover {
      background: #4682b4;
      color: #f4f6f9;
      border: 1px solid #4682b4;
    }
  }
}
</style>