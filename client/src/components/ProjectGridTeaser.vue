<template lang="pug">
.project-grid-teaser
  .text
    h3 {{ title }}
    Tags(:items="tags")
    p.description {{ description }}
  a(:href="url") Open on GitHub >
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
    url: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style lang="scss">
@import '../styles/_variables.scss';

.project-grid-teaser {
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
  border: 1px solid black;

  .text {
    padding: 1rem 1rem 4.3rem 1rem;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .tags {
    margin-bottom: .5rem;
  }

  .tag {
    border-color: rgba(black, .5);
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  a {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin-right: 0;
    padding: 1rem;
    border-radius: 0;
    border-top: 1px solid rgba(0, 0, 0, .5);
    text-decoration: none;
    text-align: right;
    color: black;

    &:hover {
      background-color: black;
      color: $yellow;
    }
  }
}
</style>
