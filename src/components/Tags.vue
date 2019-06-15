<template lang="pug">
  ul.tags
    Tag(v-for="item in items", :key="item", :text="item")
</template>

<script>
import Tag from '@/components/Tag.vue'

export default {
  components: {
    Tag
  },
  props: {
    items: {
      type: Array,
      default: () => {
        return ['Tag name 1', 'Tag name 2']
      }
    }
  }
}
</script>

<style lang="scss">
  .tags {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
</style>
