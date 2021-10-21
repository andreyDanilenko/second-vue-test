<template lang="pug">
.history
  .container 
    .history__wrapper
      .history__filter(@click="setFilter")
        my-button(:class="'history__button'", :value="'all'") History
        my-button(:class="'history__button'", :value="'add'") Add history
        my-button(:class="'history__button'", :value="'remove'") Deletion history
      .history__list 
        history-item(v-for="story in history", :story="story", :key="story.id")
</template>
<script>
import HistoryItem from "../components/HistoryItem.vue";
import MyButton from "../components/UI/MyButton.vue";
import { mapGetters } from "vuex";

export default {
  components: { MyButton, HistoryItem },

  data() {
    return { history: [] };
  },

  computed: {
    ...mapGetters(["HISTORY"]),
  },

  methods: {
    setFilter(evt) {
      if (evt.target.tagName !== "BUTTON") {
        return;
      }
      switch (evt.target.value) {
        case "add":
          return (this.history = [...this.HISTORY].filter(
            (story) => story.type === evt.target.value
          ));
        case "remove":
          return (this.history = [...this.HISTORY].filter(
            (story) => story.type === evt.target.value
          ));
      }

      return (this.history = this.HISTORY);
    },

    setHistory() {
      this.history = this.HISTORY;
    },
  },

  mounted() {
    this.setHistory();
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