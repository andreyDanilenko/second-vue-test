<template lang="pug">
.card-item(@click="click")
  h3.card__title {{ post.title }}
  my-button(v-if="buttonTitle !== ''") {{ buttonTitle }}
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

    buttonTitle: {
      type: String,
      required: true,
    },
  },

  methods: {
    click(evt) {
      if (evt.target.tagName === "BUTTON") {
        this.$emit("click", this.post);
      }
    },
  },
};
</script>
<style lang="scss">
.card-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  color: #4682b4;
  border: 1px #4682b4 solid;
  background: #f4f6f9;
  padding: 20px;
  border-radius: 5px;

  &__button {
    color: #4682b4;
    border: 1px #4682b4 solid;
    background: #f4f6f9;
  }
}
</style>