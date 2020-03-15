<template lang="pug">
div
  div(v-for="module in globalConfiguration.moduleOrderFrontPage")
    Hero(
      v-if="module.__typename === 'HeroRecord'",
      :name="module.name",
      :description="module.description"
      :tags="module.tags.map(tag => tag.title)"
      :locales="globalConfiguration.locales.map(locale => locale.locale)"
    )

    SocialMediaProfiles(
      v-else-if="module.__typename === 'SocialMediaRowRecord'",
      :links="module.socialMediaLinks"
    )

    ProjectGrid(
      v-else-if="module.__typename === 'ProjectGridRecord'",
      :black="false",
      :projects="module.projects"
    )

    Footer(
      v-else-if="module.__typename === 'FooterRecord'",
      :content="module.content"
    )
</template>

<script>
import gql from 'graphql-tag'

import Hero from '@/components/Hero.vue'
import SocialMediaProfiles from '@/components/SocialMediaProfiles.vue'
import ProjectTeaser from '@/components/ProjectTeaser.vue'
import ProjectGrid from '@/components/ProjectGrid.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Hero,
    SocialMediaProfiles,
    ProjectTeaser,
    ProjectGrid,
    Footer
  },
  data: () => {
    return {
      globalConfiguration: {}
    }
  },
  apollo: {
    globalConfiguration: {
      query: gql`query ($locale: SiteLocale!) {
        globalConfiguration {
          moduleOrderFrontPage(locale: $locale) {
            ... on HeroRecord {
              name
              description
              tags { title }
            }
            ... on SocialMediaRowRecord {
              socialMediaLinks {
                title
                link
                icon
              }
            }
            ... on ProjectGridRecord {
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
              content
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
