<template lang="pug">
button.button
  slot
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.button {
  display: block;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 10px 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #f4f6f9;
  border: 1px #f4f6f9 solid;
  background: transparent;
  border-radius: 5px;

  &:hover {
    transition: 0.8s;
    color: #696969;
    border: 1px #696969 solid;
    background: #f4f6f9;
  }

  &:not(:hover) {
    transition: 0.8s;
  }
}
</style>