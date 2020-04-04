<template lang="pug">
sk-slanted.social-media-profiles
  ul
    li(v-for="link in links")
      sk-social-link(:url="link.link", :text="link.title", :icon="link.icon")
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
@import '../styles/_variables.scss';

.social-media-profiles {
  background-color: $black;

  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
}

@media (min-width: 1350px) {
  .social-media-profiles {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    background-color: transparent;
  }
}
</style>
