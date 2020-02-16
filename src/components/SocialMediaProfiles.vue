<template lang="pug">
ul.social-media-profiles
  li
    sk-social-link(url="https://github.com/simonknittel", text="GitHub", icon="github-square", iconViewbox="448 512")
  li
    sk-social-link(url="https://twitter.com/simknittel", text="Twitter", icon="github-square", iconViewbox="448 512")
  li
    sk-social-link(url="https://www.patreon.com/simonknittel", text="Patreon", icon="patreon", iconViewbox="512 512")
  li
   sk-social-link(url="https://stackoverflow.com/users/3942401/simon-knittel", text="Stack Overflow", icon="stack-overflow", iconViewbox="384 512")
  li
    sk-social-link(url="https://www.xing.com/profile/Simon_Knittel", text="XING", icon="xing-square", iconViewbox="448 512")
  li
    sk-social-link(url="https://www.linkedin.com/in/simon-knittel-b8b693108/", text="LinkedIn", icon="linkedin", iconViewbox="448 512")
</template>

<style lang="scss">
@import '../styles/_variables.scss';

.social-media-profiles {
  clip-path: polygon(0 3rem, 100% 0, 100% 100%, 0 calc(100% - 3rem));
  list-style: none;
  display: flex;
  justify-content: center;
  margin-top: -4rem;
  margin-bottom: 0;
  padding-left: 0;
  padding-top: 6rem;
  padding-bottom: 7rem;
  background-color: black;
}
</style>
