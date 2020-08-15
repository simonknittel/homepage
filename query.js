module.exports = {
  query: `query ($locale: SiteLocale!) {
    globalConfiguration {
      pages(locale: $locale) {
        id
        url
        moduleOrder {
          ... on HeroRecord {
            id
            name
            description
            tags {
              id
              title
            }
            __typename
          }
          ... on SocialMediaRowRecord {
            id
            socialMediaLinks {
              id
              text
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
              tags {
                id
                title
              }
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
            goToHome
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
