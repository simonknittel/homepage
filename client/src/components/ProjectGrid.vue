<template lang="pug">
.project-grid
  .project-grid__inner
    ProjectGridTeaser(
      title='static-site-generator'
      :tags="['Gulp.js', 'Babel', 'Linter', 'Jest', 'Open Source']",
      description='Static site generator / project skeleton for creating production-ready sites. All necessary files and build tasks are already in place and fitted with good practices.',
      url='https://github.com/simonknittel/static-site-generator'
    )
    ProjectGridTeaser(
      title='streaming-server'
      :tags="['nginx', 'rtmp', 'Docker', 'Open Source']",
      description='Custom nginx server for streaming with e.g. OBS. Does have a web view.',
      url='https://github.com/simonknittel/streaming-server'
    )
</template>

<script>
import ProjectGridTeaser from '@/components/ProjectGridTeaser.vue'

export default {
  components: {
    ProjectGridTeaser
  }
}
</script>

<style lang="scss">
@import '../styles/_variables.scss';

.project-grid {
  clip-path: polygon(0 0, 100% 10%, 100% 100%, 0 100%);
  margin-top: -4rem;
  padding-top: 7rem;
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
}
</style>
