<template lang="pug">
input.input(:value="modelValue", @input="updateInput", type="text")
</template>

<script>
export default {
  props: {
    modelValue: [String, Number],
  },

  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  padding: 10px 15px;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  margin-top: 15px;
  color: #4682b4;
  border: 1px #4682b4 solid;
  background: #f4f6f9;
  border-radius: 5px;
}
</style>