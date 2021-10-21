<template lang="pug">
.history
  .container
    .history__wrapper
      .history__filter
        my-button(:class="'history__button'") History
        my-button(:class="'history__button'") Add history
        my-button(:class="'history__button'") Deletion history
      .history__list 
</template>
<script>
import MyButton from "../components/UI/MyButton.vue";
export default {
  components: { MyButton },
};
</script>
<style lang="scss" scoped>
.history {
  &__filter {
    margin-top: 20px;
    display: flex;
  }

  &__button {
    background: #f4f6f9;
    color: #4682b4;
    border: 1px solid #4682b4;
    margin-right: 20px;

    &:hover {
      background: #4682b4;
      color: #f4f6f9;
      border: 1px solid #4682b4;
    }
  }
}
</style>