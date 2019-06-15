<template lang="pug">
  li.tag {{ text }}
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Tag name'
    }
  }
}
</script>

<style lang="scss">
  .tag {
    margin-right: .5rem; // TODO: Fix offset to the left
    margin-bottom: .5rem;
    padding: .4rem .5rem .3rem .5rem;
    border-radius: .25rem;
    border-width: 1px;
    border-style: solid;

    &::before {
      content: '#';
      opacity: .5;
      margin-right: .25em;
    }
  }
</style>
