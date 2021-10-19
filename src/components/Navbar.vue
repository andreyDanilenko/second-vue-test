<template lang="pug">
.navbar
  .container
    .navbar__wrapper
      router-link.navbar__link(to="/") 
        my-button Home
      router-link.navbar__link(to="/history") 
        my-button(:style={ marginLeft: ['40px'] }) History
</template>
<script>
import MyButton from "./UI/MyButton.vue";
export default {
  components: {
    MyButton,
  },
};
</script>
<style lang="scss">
.navbar {
  background: #4682b4;

  &__wrapper {
    display: flex;
    padding: 20px 0;
    justify-content: flex-end;
  }

  &__link {
    display: block;
    text-decoration: none;
  }
}
</style>