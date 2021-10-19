<template lang="pug">
.card-item 
  h3.card__title {{ post.title }}
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
</style>