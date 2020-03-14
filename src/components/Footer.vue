<template lang="pug">
  footer(v-html="content")
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/_variables.scss';

  footer {
    padding-top: 4rem;
    padding-bottom: 4rem;
    background-color: black;
    color: $yellow;
    text-align: center;

    p {
      margin-top: 0;
        margin-bottom: 0;
    }

    a {
      color: $yellow;

      &:hover {
        color: lighten($yellow, 25%);
      }
    }
  }
</style>
