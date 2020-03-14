<template lang="pug">
div
  Hero
  SocialMediaProfiles
  ProjectTeaser(
    title="YouTube Playlist Manager",
    :wip="true"
    :tags="['Vue.js', 'Frontend', 'Backend', 'UX', 'Design', 'CI/CD', 'Open Source']",
    description="Tired of the sluggish interface of YouTube itself and in need of some features which YouTube doesn't provide I decided to create my own interface for YouTube's playlists. Written in Vue.js. It's still early in development so not much to see yet.",
    :links="[{title: 'Open on GitHub', url: 'https://github.com/simonknittel/youtube-playlist-manager'}]"
  )
  ProjectTeaser(
    title="SB Builds",
    :wip="true"
    :tags="['Vue.js', 'Frontend', 'Backend', 'UX', 'Design', 'CI/CD']",
    description="This tool helps to create and share builds for the video game Spellbreak. It's fully written in Vue.js and runs completely in the client as it doesn't need any server-side functions. The work on is still ongoing as the game itself also is still in development. Will be published on GitHub later on.",
    :links="[{title: 'Open staging.sb-builds.de', url: 'https://staging.sb-builds.de'}]"
    :black="true"
  )
  ProjectGrid(
    :black="false"
  )
  Footer
</template>

<script>
import Hero from '@/components/Hero.vue'
import SocialMediaProfiles from '@/components/SocialMediaProfiles.vue'
import ProjectTeaser from '@/components/ProjectTeaser.vue'
import ProjectGrid from '@/components/ProjectGrid.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Hero,
    SocialMediaProfiles,
    ProjectTeaser,
    ProjectGrid,
    Footer
  }
}
</script>

<style lang="scss">
@import '../styles/_variables.scss';

// .heading {
//   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 3rem));
//   margin-top: -4rem;
//   padding-top: 6rem;
//   padding-bottom: 7rem;
//   background-color: $yellow;
//   color: black;
//   text-align: center;

//   h2 {
//     margin-top: 0;
//     margin-bottom: 0;
//   }
// }
</style>
