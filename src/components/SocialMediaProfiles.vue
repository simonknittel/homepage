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
  display: flex;
  list-style: none;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: black;
}

@media (min-width: 1350px) {
  .social-media-profiles {
    position: relative;
    max-width: 1280px;
    margin-left: auto;
  margin-right: auto;
    background-color: transparent;

    &::before {
      content: '';
      display: block;
      z-index: -1;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transform: skew(-15deg);
      background-color: black;
    }
  }
}
</style>
