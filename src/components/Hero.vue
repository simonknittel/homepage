<template lang="pug">
  .hero
    h1
      span Simon Knittel
      span Web Developer
    sk-tag-list(:items.prop="['JavaScript', 'Node.js', 'SCRUM', 'UX', 'Design', 'Open Source']")
</template>

<script>
export default {}
</script>

<style lang="scss">
  @import '../styles/_variables.scss';

  .hero {
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 3rem), 0 100%);
    padding-top: 15rem;
    padding-bottom: 15rem;
    background-color: $yellow;
    text-align: center;

    h1 {
      margin-top: 0;
      margin-bottom: 1rem;

      span {
        display: block;

        &:nth-of-type(2) {
          font-size: .96em;
          font-weight: 300;
        }
      }
    }

    .sk-tag-list {
      justify-content: center;
      max-width: 21rem;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
