<template lang="pug">
  footer
    p Don't like the colours? ¯\_(ツ)_/¯
    p Brand icons are made by Font Awesome (<a href="https://origin.fontawesome.com/license" target="_blank" rel="noopener">License</a>)
</template>

<style lang="scss">
  @import '../styles/_variables.scss';

  footer {
    padding-top: 4rem;
    padding-bottom: 4rem;
    background-color: black;
    color: $yellow;
    text-align: center;

    p {
      margin-top: 0;
        margin-bottom: 0;
    }

    a {
      color: $yellow;

      &:hover {
        color: lighten($yellow, 25%);
      }
    }
  }
</style>
