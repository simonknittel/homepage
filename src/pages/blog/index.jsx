import { BlogPostTeaser } from "../../components/BlogPostTeaser"
import { Breadcrumb } from "../../components/Breadcrumb"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout } from "../../components/Layout"
import * as React from "react"

export default function Blog({ data: { site, allDatoCmsBlogPost: { edges } } }) {
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
    { edges.map( edge => <BlogPostTeaser key={ edge.node.id } post={ edge.node } /> ) }
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
      edges {
        node {
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
  }
`
