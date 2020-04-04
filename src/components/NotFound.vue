<template lang="pug">
  section.notfound
    h1.notfound__heading {{ heading }}
    h2.notfound__subheading {{ subheading }}
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true
    },
    subheading: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/_variables.scss';

  .notfound {
    padding-top: 7rem;
    padding-bottom: 8rem;

    text-align: center;

    &__heading,
    &__subheading {
      margin-top: 0;
      margin-bottom: 0;
      line-height: 1;
    }

    &__heading {
      font-size: 7rem;
      color: $yellow;
    }
  }
</style>
