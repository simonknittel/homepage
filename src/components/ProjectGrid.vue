<template lang="pug">
.project-grid(:class="{'project-grid--black': black}")
  .project-grid__inner
    sk-slanted-teaser(
      v-for="project in projects"
      :key="project.id"
      :heading="project.title"
      :badge="project.badge"
      :tags.prop="project.tags.map(tag => tag.title)"
      :href="project.url"
      target="_blank"
      rel="noopener"
      :link-text="project.urlDescription"
    )
      sk-typography(as="p", size="16-responsive") {{ project.description }}

  .project-grid__more
    sk-link(href="https://github.com/simonknittel" target="_blank" rel="noopener" icon-position="right" icon=">") More on GitHub
</template>

<script>
export default {
  props: {
    black: {
      type: Boolean,
      default: false
    },
    projects: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
@import '../styles/_variables.scss';

.project-grid {
  padding-top: 4rem;
  padding-bottom: 3rem;

  &__more {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    text-align: center;
  }

  sk-slanted-teaser {
    max-width: 95%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;

    &:first-of-type {
      margin-top: 0;
    }
  }
}

@media (min-width: $bp--medium) {
  .project-grid {
    padding-top: 8rem;
    padding-bottom: 7rem;

    &__inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
    }

    sk-slanted-teaser {
      max-width: none;
      margin-top: 0;
    }
  }
}
</style>
