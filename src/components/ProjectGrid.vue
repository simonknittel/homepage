<template lang="pug">
.project-grid(:class="{'project-grid--black': black}")
  .project-grid__inner
    ProjectGridTeaser(
      v-for="project in projects",
      :title="project.title",
      :description="project.description",
      :badge="project.badge",
      :url="project.url",
      :urlDescription="project.urlDescription",
      :tags="project.tags.map(tag => tag.title)"
      :key="project.id"
    )

  .project-grid__more
    a(href="https://github.com/simonknittel", target="_blank", rel="noopener") More on GitHub >
</template>

<script>
import ProjectGridTeaser from '@/components/ProjectGridTeaser.vue'

export default {
  components: {
    ProjectGridTeaser
  },
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
  padding-top: 8rem;
  padding-bottom: 7rem;
  background-color: $yellow;
  color: black;

  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
  }

  &__more {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    text-align: center;

    a {
      display: inline-block;
      padding: 1rem;

      color: black;

      &:hover {
        color: rgba(0, 0, 0, .5);
      }
    }
  }

  &--black {
    background-color: black;
    color: $yellow;
  }
}
</style>
