<template lang="pug">
sk-slanted.social-media-profiles
  ul
    li(v-for="link in links" :key="link.id")
      sk-social-link(
        :url="link.link"
        :text="link.title"
        :icon="link.icon"
        :compact-on-small="true"
      )
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
    flex-wrap: wrap;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;

  }

  li {
    margin-left: .5rem;
    margin-right: .5rem;
  }
}

@media (min-width: $bp--small) {
  .social-media-profiles {
    li {
      margin-left: 0;
      margin-right: 0;
    }
  }
}

@media (min-width: $bp--large) {
  .social-media-profiles {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    background-color: transparent;
  }
}
</style>
