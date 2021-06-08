import { BlogPostTeaser } from "../../components/BlogPostTeaser"
import { Breadcrumb } from "../../components/Breadcrumb"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout } from "../../components/Layout"
import * as React from "react"

export default function Blog({ data: { site, allDatoCmsBlogPost: { nodes } } }) {
  return <Layout>
    <Helmet
      htmlAttributes={{
        lang: 'de',
      }}
    >
      <title>Blog - { site.siteMetadata.title }</title>
      <meta name="description" content="" />
    </Helmet>

    <Breadcrumb items={[
      {
        "name": "Blog",
        "href": "blog"
      }
    ]} />

    {/* TODO: Sort */}
    { nodes.map( node => {
      if (node.slug === null) return null // Untranslated ffcc00
      return <BlogPostTeaser key={ node.id } post={ node } />
    } ) }
  </Layout>
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }

    allDatoCmsBlogPost(
      filter: { locale: { eq: "de" } }
    ) {
      nodes {
        id
        title
        slug
        excerpt
        meta {
          updatedAt
          firstPublishedAt
        }
        articleImage {
          alt
          width
          height

          url(imgixParams: { fit: "crop", crop: "focalpoint", q: 50 })
        }
        articleImageAspectRatio
      }
    }
  }
`
