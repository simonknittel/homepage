import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import * as React from "react"
import Breadcrumb from "../../components/Breadcrumb"
import Layout from "../../components/Layout"
import BlogPostTeaser from "../../components/BlogPostTeaser"

export default function Blog({ data: { site, allDatoCmsBlogPost: { edges } } }) {
  return <Layout>
    <Helmet
      htmlAttributes={{
        lang: 'en',
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
      filter: { locale: { eq: "en" } }
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