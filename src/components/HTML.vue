<template lang="pug">
  div(v-html="html")
</template>

<script>
export default {
  props: {
    html: {
      type: String,
      required: true
    }
  }
}
</script>
