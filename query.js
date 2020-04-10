module.exports = {
  query: `query ($locale: SiteLocale!) {
    globalConfiguration {
      pages(locale: $locale) {
        url
        moduleOrder {
          ... on HeroRecord {
            id
            name
            description
            tags { title }
            __typename
          }
          ... on SocialMediaRowRecord {
            id
            socialMediaLinks {
              title
              link
              icon
            }
            __typename
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
            __typename
          }
          ... on FooterRecord {
            id
            content
            __typename
          }
          ... on NotFoundRecord {
            id
            heading
            subheading
            __typename
          }
          ... on HtmlRecord {
            id
            html
            __typename
          }
        }
      }
      locales {
        locale
      }
    }
  }`
}
