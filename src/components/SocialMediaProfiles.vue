<template lang="pug">
ul.social-media-profiles
  li
    a(href="https://github.com/simonknittel", target="_blank", rel="noopener")
      span.icon
        svg(viewBox="0 0 448 512")
          use(xlink:href="icons/github-square-brands.svg#id")
      | GitHub
  li
    a(href="https://twitter.com/simknittel", target="_blank", rel="noopener")
      span.icon
        svg(viewBox="0 0 448 512")
          use(xlink:href="icons/twitter-square-brands.svg#id")
      | Twitter
  li
    a(href="https://www.patreon.com/simonknittel", target="_blank", rel="noopener")
      span.icon.icon--add-background.icon--patreon
        svg(viewBox="0 0 512 512")
          use(xlink:href="icons/patreon-brands.svg#id")
      | Patreon
  li
    a(href="https://stackoverflow.com/users/3942401/simon-knittel", target="_blank", rel="noopener")
      span.icon.icon--add-background
        svg(viewBox="0 0 384 512")
          use(xlink:href="icons/stack-overflow-brands.svg#id")
      | Stack Overflow
  li
    a(href="https://www.xing.com/profile/Simon_Knittel", target="_blank", rel="noopener")
      span.icon
        svg(viewBox="0 0 448 512")
          use(xlink:href="icons/xing-square-brands.svg#id")
      | XING
  li
    a(href="https://www.linkedin.com/in/simon-knittel-b8b693108/", target="_blank", rel="noopener")
      span.icon
        svg(viewBox="0 0 448 512")
          use(xlink:href="icons/linkedin-brands.svg#id")
      | LinkedIn
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

  a {
    display: flex;
    align-items: center;
    padding: 1rem;
    color: $yellow;
    border-radius: .25rem;
    text-decoration: none;

    &:hover {
      background-color: $yellow;
      color: black;

      .icon {
        &--add-background {
          background-color: black;
          color: $yellow;
        }
      }
    }
  }

  .icon {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    margin-right: .5rem;

    svg {
      width: 100%;
      height: 100%;
    }

    &--add-background {
      padding: .25rem;
      border-radius: .2rem;
      background-color: $yellow;
      color: black;
    }

    &--patreon {
      padding: .35rem;
    }
  }
}
</style>
