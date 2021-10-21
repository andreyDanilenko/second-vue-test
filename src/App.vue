<template lang="pug">
div
  navbar
  transition(name="component-fade", mode="out-in")
    router-view 
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
<style lang="scss">
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.5s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>