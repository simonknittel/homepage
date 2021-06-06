import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Hero } from "../components/Hero"
import { HtmlWrapper } from "../components/HtmlWrapper"
import { Layout } from "../components/Layout"
import { NotFound } from "../components/NotFound"
import { ProjectGrid } from "../components/ProjectGrid"
import { SocialMediaProfiles } from "../components/SocialMediaProfiles"
import * as React from "react"

/**
 * TODO: Figure out how to implement locales
 *
 * Source: https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
 * If you need to customize the query used for collecting the nodes (e.g.
 * filtering out any product of type "Food"), you should use the createPages API
 * instead as File System Route API doesn’t support this at the moment."
 */

export default function Page({ data: { site, datoCmsPage: page } }) {
  if (!page) return null

  const modules = page.moduleOrder.map(module => {
    switch (module.__typename) {
      case "DatoCmsHero":
        return <Hero
          name={ module.name }
          description={ module.description }
          tags={ module.tags.map(tag => tag.title) }
          key={ module.id }
        />

      case "DatoCmsSocialMediaRow":
        return <SocialMediaProfiles
          links={ module.socialMediaLinks }
          key={ module.id }
        />

      case "DatoCmsProjectGrid":
        return <ProjectGrid
          projects={ module.projects }
          key={ module.id }
        />

      case "DatoCmsHtml":
        return <HtmlWrapper
          html={ module.html }
          key={ module.id }
        />

      case "DatoCmsNotFound":
        return <NotFound
          heading={ module.heading }
          subheading={ module.subheading }
          goToHome={ module.goToHome }
          key={ module.id }
        />

      default:
        return <pre key={ module.id }><code>{ JSON.stringify(module, null, 2) }</code></pre>
    }
  })

  return <Layout hideHeader={ page.slug === 'index' }>
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
    >
      <title>{ page.slug === 'index' ? page.title : `${ page.title } - ${ site.siteMetadata.title }`}</title>
      { page.description ? <meta name="description" content={ page.description } /> : null }
    </Helmet>

    { modules }
  </Layout>
}

export const query = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
      }
    }

    datoCmsPage(id: { eq: $id }, locale: { eq: "en" }) {
      id
      slug
      title
      description
      moduleOrder {
        __typename
        ... on DatoCmsHtml {
          id
          html
        }
        ... on DatoCmsNotFound {
          id
          goToHome
          heading
          subheading
        }
        ... on DatoCmsProjectGrid {
          id
          projects {
            id
            urlDescription
            url
            title
            tags {
              id
              title
            }
            description
            badge
          }
        }
        ... on DatoCmsSocialMediaRow {
          id
          socialMediaLinks {
            id
            link
            text
            title
            icon
          }
        }
        ... on DatoCmsSingleProject {
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
            }
          }
        }
        ... on DatoCmsHero {
          id
          name
          description
          tags {
            id
            title
          }
        }
      }
    }
  }
`
