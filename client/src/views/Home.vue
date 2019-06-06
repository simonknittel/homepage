<template lang="pug">
div
  Hero
  .heading
    h2 Some of my open source projects
  ProjectTeaser(
    title="YouTube Playlist Manager",
    :tags="['Vue.js', 'Frontend', 'Backend', 'UX', 'Design', 'Open Source']",
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    :links="[{title: 'Open XXX', url: '#'}, {title: 'Open on GitHub', url: 'https://github.com/simonknittel/youtube-playlist-manager'}]"
  )
  ProjectTeaser(
    title="SB Builds",
    :tags="['Vue.js', 'Frontend', 'Backend', 'UX', 'Design', 'Open Source']",
    description="This online tools helps to create and share builds for the video game Spellbreak. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    :links="[{title: 'Open sb-builds.de', url: 'https://staging.sb-builds.de'}, {title: 'Open on GitHub', url: '#'}]"
    :black="true"
  )
  ProjectGrid
  Footer
</template>

<script>
import Hero from '@/components/Hero.vue'
import ProjectTeaser from '@/components/ProjectTeaser.vue'
import ProjectGrid from '@/components/ProjectGrid.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Hero,
    ProjectTeaser,
    ProjectGrid,
    Footer
  }
}
</script>

<style lang="scss">
@import '../styles/_variables.scss';

.heading {
  clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 90%);
  margin-top: -4rem;
  padding-top: 6rem;
  padding-bottom: 7rem;
  background-color: black;
  color: $yellow;
  text-align: center;

  h2 {
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
