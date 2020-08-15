<template lang="pug">
  .hero
    h1
      span {{ name }}
      span {{ description }}
    sk-tag-list(:items.prop="tags")

    ul.hero__locales
      li(
        v-for="locale in locales",
        :key="locale",
        :class="{ 'hero__locale--active': locale === activeLocale }"
      ).hero__locale
        a(
          href="#",
          @click.prevent="$store.commit('setLocale', locale)"
          :title="'Set language to ' + locale"
        ) {{ locale }}
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    },
    locales: {
      type: Array,
      default: () => []
    }
  },
  computed: mapState({
    activeLocale: 'locale'
  }),
  methods: {
    ...mapMutations([
      'setLanguage'
    ])
  }
}
</script>

<style lang="scss">
@import '../styles/_variables.scss';

.hero {
  position: relative;
  margin-bottom: 3rem;
  padding-top: 5rem;
  padding-bottom: 10rem; // 15rem + margin-top of sk-slanted
  background-color: $yellow;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    height: 3rem;
    background-color: $black;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 1rem;

    span {
      display: block;

      &:nth-of-type(2) {
        font-size: .96em;
        font-weight: 300;
      }
    }
  }

  .sk-tag-list {
    justify-content: center;
    max-width: 21rem;
    margin-left: auto;
    margin-right: auto;
  }

  &__locales {
    display: flex;
    list-style: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }

  &__locale {
    a {
      display: inline-block;
      padding: .5rem;
      text-transform: uppercase;
      color: $black;
      text-decoration: none;

      &:hover {
        color: rgba($black, .5);
      }
    }

    &--active {
      a {
        text-decoration: underline;
      }
    }
  }

  + sk-slanted {
    z-index: 1;
    margin-top: -7rem;
  }
}

@media (min-width: $bp--medium) {
  .hero {
    padding-top: 15rem;
    padding-bottom: 20rem; // 15rem + margin-top of sk-slanted
  }
}
</style>
