<template lang="pug">
  router-link(:to="{ name: 'home' }" v-slot="{ href, navigate }")
    sk-not-found(
      :heading="heading"
      :subheading="subheading"
      :link-href="href"
      link-icon="<"
      :link-text="goToHome"
      :link-prevent-click="true"
      @clicked="navigate"
    )
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
    },
    goToHome: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
  sk-not-found {
    margin-top: 7rem;
    margin-bottom: 8rem;
  }
</style>
