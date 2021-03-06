import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { StructuredText } from "react-datocms"
import * as React from "react"
import Breadcrumb from "../../components/Breadcrumb"
import HTML from "../../components/HTML"
import Layout from "../../components/Layout"

import "./BlogPost.scss"

/**
 * TODO: Figure out how to implement locales
 *
 * Source: https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
 * If you need to customize the query used for collecting the nodes (e.g.
 * filtering out any product of type "Food"), you should use the createPages API
 * instead as File System Route API doesn’t support this at the moment."
 */

export default function BlogPost({ data: { site, datoCmsBlogPost: post } }) {
  if (!post) return null
  // console.log(post)

  const pageTitle =  post.seo?.title || post.title

  return <Layout>
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
    >
      <title>{ pageTitle } | { site.siteMetadata.title }</title>
      { post.seo?.description ? <meta name="description" content={ post.seo.description } /> : null } {/* TODO: Generate excerpt automatically */}

      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "${ pageTitle }",
            "datePublished": "${ post.meta.firstPublishedAt }",
            "dateModified": "${ post.meta.updatedAt }",
            "articleBody": "${ post.seo?.description /* TODO: Generate excerpt automatically */ }",
            "author": {
              "@type": "Person",
              "givenName": "Simon",
              "familyName": "Knittel",
              "url": "${ site.siteMetadata.siteUrl }"
            }
          }
        `}
      </script>
    </Helmet>

    <Breadcrumb items={[
      {
        "name": "Blog",
        "href": "blog"
      },
      {
        "name": pageTitle,
        "href": `blog/${ post.slug }`
      }
    ]} />

    <article className="BlogPost">
      <header>
        <h1 className="BlogPost__heading">{ post.title }</h1>
      </header>

      <StructuredText
        data={ post.content }
        renderBlock={({ record }) => {
          let module = null

          switch (record.__typename) {
            case "DatoCmsHtml":
              module = <HTML html={ record.html } />
              break;

            default:
              module = <pre><code>{ JSON.stringify(record, null, 2) }</code></pre>
          }

          return <div className="BlogPost__wide">
            { module }
          </div>
        }}
      />
    </article>
  </Layout>
}

export const query = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }

    datoCmsBlogPost(id: { eq: $id }, locale: { eq: "en" } ) {
      id
      slug
      title
      meta {
        updatedAt
        firstPublishedAt
      }
      seo {
        title
        description
      }
      articleImage {
        alt
        title
        url
        width
        mimeType
        height
        focalPoint {
          x
          y
        }
      }
      content {
        value
        blocks {
          __typename
          ... on DatoCmsHtml {
            id: originalId
            html
          }
        }
      }
    }
  }
`
