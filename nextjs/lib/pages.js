import { client, slugForDatoCMS, pathFromSlug } from "./datocms"
import { gql } from "@apollo/client"

export async function getAllPageSlugs() {
  /**
   * BUG: [[...slug]].jsx can't generate the /404 route
   * See: https://github.com/vercel/next.js/issues?q=+ENOENT%3A+no+such+file+or+directory%2C+rename
   */
  const result = await client.query({ query: gql`
      query {
        allPages(filter: {slug: {neq: "/404"}}) {
        # allPages {
          slug(locale: de)
        }
      }
    `})

  return result.data.allPages.map(page => {
    return { params: {
      slug: pathFromSlug(page.slug)
    } }
  })
}

export async function getPageData(slug) {
  const result = await client.query({
      query: gql`
        query ($slug: String!) {
          page(filter: {slug: {eq: $slug}}, locale: de) {
            id
            slug
            title
            description
            moduleOrder {
              __typename
              ... on HtmlRecord {
                id
                html
              }
              ... on NotFoundRecord {
                id
                goToHome
                heading
                subheading
              }
              ... on ProjectGridRecord {
                id
                projects {
                  id
                  urlDescription
                  url
                  title
                  tags {
                    id
                    title
                    description
                  }
                  description
                  badge
                }
                moreText
              }
              ... on SocialMediaRowRecord {
                id
                socialMediaLinks {
                  id
                  link
                  text
                  title
                  icon
                }
              }
              ... on SingleProjectRecord {
                id
                project {
                  badge
                  description
                  id
                  title
                  url
                  urlDescription
                  tags {
                    id
                    title
                    description
                  }
                }
              }
              ... on HeroRecord {
                id
                name
                description
                tags {
                  id
                  title
                  description
                }
              }
            }
          }
        }
      `,
      variables: {
        slug: slugForDatoCMS(slug)
      }
    })

  return result.data.page
}
