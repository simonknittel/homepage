<template lang="pug">
  .hero
    h1
      span {{ name }}
      span {{ description }}
    sk-tag-list(:items.prop="tags")

    ul.hero__locales
      li(v-for="locale in locales", :key="locale").hero__locale
        a(
          href="#",
          @click.prevent="$store.commit('setLocale', locale)"
        ) {{ locale }}
</template>

<script>
import { mapMutations } from 'vuex'

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
    padding-top: 15rem;
    padding-bottom: 15rem;
    background-color: $yellow;
    text-align: center;

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
        color: black;

        &:hover {
          color: rgba(0, 0, 0, .5);
        }
      }
    }
  }
</style>
