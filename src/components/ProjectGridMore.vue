<template lang="pug">
a.project-grid-more(href="https://github.com/simonknittel", target="_blank", rel="noopener")
  | More on GitHub >
</template>

<style lang="scss">
@import '../styles/_variables.scss';

.project-grid-more {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid black;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: black;
    color: $yellow;
  }

  .project-grid--black & {
    border-color: $yellow;
    color: $yellow;

    a {
      border-top-color: rgba($yellow, .5);
      color: $yellow;

      &:hover {
        background-color: $yellow;
        color: black;
      }
    }
  }
}
</style>
