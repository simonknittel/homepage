<template lang="pug">
  router-view
</template>

<style lang="scss">
  @import './styles/_variables.scss';

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-display: swap;

    min-height: 100%;

    background-color: hsl(48, 100%, 95%);
  }

  body {
    margin: 0;
  }
</style>
