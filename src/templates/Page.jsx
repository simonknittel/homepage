import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Hero2 } from "../components/Hero2"
import { HtmlWrapper } from "../components/HtmlWrapper"
import { Layout } from "../components/Layout"
import { NotFound } from "../components/NotFound"
import { ProjectGrid } from "../components/ProjectGrid"
import { SocialMediaProfiles } from "../components/SocialMediaProfiles"
import * as React from "react"

export default function Page({ data: { site, datoCmsPage: page } }) {
  const modules = page.moduleOrder.map(module => {
    switch (module.__typename) {
      case "DatoCmsHero":
        // return <Hero
        //   name={ module.name }
        //   description={ module.description }
        //   tags={ module.tags.map(tag => tag.title) }
        //   key={ module.id }
        // />
        return <Hero2
          name={ module.name }
          description={ module.description }
          tags={ module.tags }
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
          moreText={ module.moreText }
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

  const title = page.slug === '/' ? page.title : `${ page.title } - ${ site.siteMetadata.title }`

  return <Layout hideHeader={ page.slug === '/' }>
    <Helmet
      htmlAttributes={{
        lang: page.locale,
      }}
    >
      <title>{ title }</title>
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

    datoCmsPage(id: { eq: $id }) {
      id
      slug
      title
      description
      locale
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
              description
            }
            description
            badge
          }
          moreText
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
              description
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
            description
          }
        }
      }
    }
  }
`
