<template lang="pug">
div(v-if="globalConfiguration.pages")
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
  )
</template>

<script>
import gql from 'graphql-tag'

import Hero from '@/components/Hero.vue'
import SocialMediaProfiles from '@/components/SocialMediaProfiles.vue'
import ProjectGrid from '@/components/ProjectGrid.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Hero,
    SocialMediaProfiles,
    ProjectGrid,
    Footer
  },
  data: (foo) => {
    return {
      globalConfiguration: {}
    }
  },
  computed: {
    modules: function () {
      if (!this.globalConfiguration.pages) return []

      for (let i = 0; i < this.globalConfiguration.pages.length; i++) {
        const page = this.globalConfiguration.pages[i]

        if (page.url !== this.$route.path) continue
        return page.moduleOrder
      }

      return []
    }
  },
  methods: {
    isComponent: function (__typename) {
      if (__typename === 'HeroRecord') return 'Hero'
      if (__typename === 'SocialMediaRowRecord') return 'SocialMediaProfiles'
      if (__typename === 'ProjectGridRecord') return 'ProjectGrid'
      if (__typename === 'FooterRecord') return 'Footer'

      return ''
    }
  },
  apollo: {
    globalConfiguration: {
      query: gql`query ($locale: SiteLocale!) {
        globalConfiguration {
          pages(locale: $locale) {
            url
            moduleOrder {
              ... on HeroRecord {
                id
                name
                description
                tags { title }
              }
              ... on SocialMediaRowRecord {
                id
                socialMediaLinks {
                  title
                  link
                  icon
                }
              }
              ... on ProjectGridRecord {
                id
                projects {
                  id
                  title
                  description(locale: $locale)
                  url
                  urlDescription(locale: $locale)
                  tags { title }
                  badge(locale: $locale)
                }
              }
              ... on FooterRecord {
                id
                content
              }
            }
          }
          locales {
            locale
          }
        }
      }`,
      variables () {
        return {
          locale: this.$store.state.locale
        }
      }
    }
  }
}
</script>
