<template lang="pug">
  div
    router-view
</template>

<style lang="scss">
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-display: swap;

    min-height: 100%;

    font-family: 'Open Sans', sans-serif;
  }

  body {
    margin: 0;
  }
</style>
