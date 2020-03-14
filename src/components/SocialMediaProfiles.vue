<template lang="pug">
ul.social-media-profiles
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
  clip-path: polygon(0 3rem, 100% 0, 100% 100%, 0 calc(100% - 3rem));
  list-style: none;
  display: flex;
  justify-content: center;
  margin-top: -4rem;
  margin-bottom: 0;
  padding-left: 0;
  padding-top: 6rem;
  padding-bottom: 7rem;
  background-color: black;
}
</style>
