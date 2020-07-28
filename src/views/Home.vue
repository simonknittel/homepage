<template lang="pug">
fragment(v-if="pagesLoaded")
  fragment(v-if="pageExists()")
    component(
      v-for="module in modules"
      :key="module.id"

      :is="isComponent(module.__typename)"

      :name="module.__typename === 'HeroRecord' ? module.name : null"
      :description="module.__typename === 'HeroRecord' ? module.description : null"
      :tags="module.__typename === 'HeroRecord' ? module.tags.map(tag => tag.title) : null"
      :locales="module.__typename === 'HeroRecord' ? globalConfiguration.locales.map(locale => locale.locale) : null"

      :links="module.__typename === 'SocialMediaRowRecord' ? module.socialMediaLinks : null"

      :projects="module.__typename === 'ProjectGridRecord' ? module.projects : null"

      :content="module.__typename === 'FooterRecord' ? module.content : null"

      :heading="module.__typename === 'NotFoundRecord' ? module.heading : null"
      :subheading="module.__typename === 'NotFoundRecord' ? module.subheading : null"
      :goToHome="module.__typename === 'NotFoundRecord' ? module.goToHome : null"

      :html="module.__typename === 'HtmlRecord' ? module.html : null"
    )
</template>

<script>
import gql from 'graphql-tag'
import { Fragment } from 'vue-fragment'

import Hero from '@/components/Hero.vue'
import SocialMediaProfiles from '@/components/SocialMediaProfiles.vue'
import ProjectGrid from '@/components/ProjectGrid.vue'
import Footer from '@/components/Footer.vue'
import NotFound from '@/components/NotFound.vue'
import HTML from '@/components/HTML.vue'

import { query } from '../../query'

export default {
  components: {
    Fragment,
    Hero,
    SocialMediaProfiles,
    ProjectGrid,
    Footer,
    NotFound,
    HTML
  },
  data () {
    if (window.response) return { globalConfiguration: window.response.data.globalConfiguration }

    return { globalConfiguration: {} }
  },
  computed: {
    pagesLoaded () {
      if (
        !this.globalConfiguration ||
        !this.globalConfiguration.pages
      ) return false
      return true
    },
    modules () {
      for (let i = 0; i < this.globalConfiguration.pages.length; i++) {
        const page = this.globalConfiguration.pages[i]

        if (page.url !== this.$route.path) continue
        return page.moduleOrder
      }

      // Doesn't matter what it will return since it will never reach this point
      return null
    }
  },
  methods: {
    pageExists () {
      for (let i = 0; i < this.globalConfiguration.pages.length; i++) {
        const page = this.globalConfiguration.pages[i]
        if (page.url !== this.$route.path) continue
        return true
      }

      this.$router.push('/404')
      return false
    },
    isComponent (__typename) {
      if (__typename === 'HeroRecord') return 'Hero'
      if (__typename === 'SocialMediaRowRecord') return 'SocialMediaProfiles'
      if (__typename === 'ProjectGridRecord') return 'ProjectGrid'
      if (__typename === 'FooterRecord') return 'Footer'
      if (__typename === 'NotFoundRecord') return 'NotFound'
      if (__typename === 'HtmlRecord') return 'HTML'

      return ''
    }
  },
  apollo: {
    globalConfiguration: {
      query: gql`${query}`,
      variables () {
        return {
          locale: this.$store.state.locale
        }
      },
      skip () {
        const urlParams = new URLSearchParams(window.location.search)
        if (urlParams.has('preview')) return false

        if (
          window.response &&
          this.$store.state.pristine
        ) return true

        return false
      }
    }
  }
}
</script>
