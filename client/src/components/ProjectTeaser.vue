<template lang="pug">
.project-teaser(:class="{'project-teaser--black': black}")
  .inner
    .text
      h3 {{ title }}
      Tags(:items="tags")
      p.description {{ description }}
      a(v-for="link in links", :href="link.url", target="_blank", rel="noopener") {{ link.title }} >
    .iframe-container
      iframe(src="https://staging.sb-builds.de")
</template>

<script>
import Tags from '@/components/Tags.vue'

export default {
  components: {
    Tags
  },
  props: {
    title: {
      type: String,
      default: 'Project title'
    },
    tags: {
      type: Array,
      default: () => {
        return ['Tag name 1', 'Tag name 2']
      }
    },
    description: {
      type: String,
      default: 'Project description'
    },
    links: {
      type: Array,
      default: () => {
        return [
          { title: 'Link title 1', url: '#' },
          { title: 'Link title 2', url: '#' }
        ]
      }
    },
    black: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  @import '../styles/_variables.scss';

  .project-teaser {
    clip-path: polygon(0 0, 100% 10%, 100% 90%, 0 100%);
    margin-top: -4rem;
    padding-top: 7rem;
    background-color: $yellow;

    .inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 'text image';
      grid-gap: 5rem;
      max-widtH: 1280px;
      margin-left: auto;
      margin-right: auto;
    }

    .text {
      grid-area: text;
      padding-right: 5rem;
    }

    h3 {
      margin-top: 0;
    }

    .tag {
      border-color: rgba(black ,.5);
    }

    .description {
      line-height: 1.5;
    }

    a {
      display: inline-block;
      border: none;
      margin-right: .5rem;
      padding: .6rem .8rem .6rem .8rem;
      border-radius: .25rem;
      text-decoration: none;
      background-color: black;
      color: $yellow;

      &:hover {
        background-color: lighten(#000, 25%);
      }
    }

    .iframe-container {
      overflow: hidden;
      grid-area: image;
      border-top-left-radius: 3rem;
      border-top-right-radius: 3rem;
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, .5);
    }

    iframe {
      width: 100%;
      height: 30rem;
    }

    &--black {
      clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 90%);
      background-color: black;
      color: $yellow;

      .inner {
        grid-template-areas: 'image text';
      }

      .tag {
        border-color: rgba($yellow, .5);
      }

      a {
        background-color: $yellow;
        color: black;

        &:hover {
          background-color: lighten($yellow, 25%);
        }
      }

      .iframe-container {
        box-shadow: 0 0 20px 0 rgba($yellow, .5);
      }
    }
  }
</style>
