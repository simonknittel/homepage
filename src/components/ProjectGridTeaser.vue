<template lang="pug">
.project-grid-teaser
  .text
    h3
        | {{ title }}
        span.badge(v-if="badge") {{ badge }}
    sk-tag-list(:items.prop="tags")
    p.description {{ description }}
  a(:href="url", target="_blank", rel="noopener") {{ urlDescription }} >
</template>

<script>
export default {
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
    },
    urlDescription: {
      type: String,
      default: 'Open'
    },
    badge: {
      type: String,
      default: ''
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
  border: 1px solid rgba(0, 0, 0, .5);

  .text {
    padding: 1rem 1rem 4.3rem 1rem;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .badge {
    display: inline-block;
    margin-left: 0.5rem;
    padding: .1rem .3rem .1rem .3rem;
    border-radius: .25rem;
    background-color: black;
    color: $yellow;
    font-size: .8em;
    font-weight: 400;
  }

  .tags {
    margin-bottom: .5rem;
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
    border-top: 1px solid rgba(black, .5);
    text-decoration: none;
    text-align: right;
    color: black;

    &:hover {
      background-color: black;
      color: $yellow;
    }
  }

  .project-grid--black & {
    border-color: $yellow;

    a {
      border-top-color: rgba($yellow, .5);
      color: $yellow;

      &:hover {
        background-color: $yellow;
        color: black;
      }
    }

    --sk-tag-border-color: rgba(#fc0, .5);
    --sk-tag-color: #fc0;
  }
}
</style>
