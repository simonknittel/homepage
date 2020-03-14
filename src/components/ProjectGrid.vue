<template lang="pug">
.project-grid(:class="{'project-grid--black': black}")
  .project-grid__inner
    ProjectGridTeaser(
      v-for="project in projects",
      :title="project.title",
      :description="project.description",
      :wip="project.workInProgress",
      :url="project.url",
      :urlDescription="project.urlDescription",
      :tags="project.tags.map(tag => tag.title)"
    )
    ProjectGridMore
</template>

<script>
import ProjectGridTeaser from '@/components/ProjectGridTeaser.vue'
import ProjectGridMore from '@/components/ProjectGridMore.vue'

export default {
  components: {
    ProjectGridTeaser,
    ProjectGridMore
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
  clip-path: polygon(0 0, 100% 3rem, 100% 100%, 0 100%);
  margin-top: -4rem;
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

  &--black {
    background-color: black;
    color: $yellow;
  }
}
</style>
