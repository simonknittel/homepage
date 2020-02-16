<template lang="pug">
.project-grid(:class="{'project-grid--black': black}")
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
      description='Custom nginx server for streaming with e.g. OBS. Does have a web view. In case you don\'t want to stream to Twitch or similar but having it only inhouse.',
      url='https://github.com/simonknittel/streaming-server'
    )
    ProjectGridTeaser(
      title='simonknittel.de'
      :tags="['Vue.js', 'Web Components', 'Frontend', 'Backend', 'UX', 'Design', 'CI/CD', 'Open Source']",
      description='The source code for this website. Written in Vue.js. Why? Because I can... I just want to get used to it.',
      url='https://github.com/simonknittel/streaming-server'
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
