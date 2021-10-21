<template lang="pug">
.history-item(:class="`history-item--${story.type}`") 
  h2.history-item__title {{ story.name }}
  p.history-item__type {{ story.type }}
  p.history-item__date {{ story.date }}
</template>
<script>
export default {
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.history-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
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

  &__title {
    flex-grow: 1;
  }
  &__type {
    margin: 0 20px;
  }
}
</style>