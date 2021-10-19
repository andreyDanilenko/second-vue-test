<template lang="pug">
.card-item 
  h3.card__title {{ post.title }}
  my-button {{ title }}
</template>
<script>
import MyButton from "./UI/MyButton.vue";
export default {
  components: {
    MyButton,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.card-item {
  padding: 20px;
}
</style>