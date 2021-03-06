import { graphql } from "gatsby"
import { StructuredText } from "react-datocms"
import * as React from "react"
import HTML from "../../components/HTML"
import Layout from "../../components/Layout"

import "./BlogPost.scss"
import { Helmet } from "react-helmet"

/**
 * TODO: Figure out how to implement locales
 *
 * Source: https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
 * If you need to customize the query used for collecting the nodes (e.g.
 * filtering out any product of type "Food"), you should use the createPages API
 * instead as File System Route API doesn’t support this at the moment."
 */

export default function BlogPost({ data: { datoCmsBlogPost: post } }) {
  if (!post) return null
  // console.log(post)

  return <Layout>
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
    >
      <title>{ post.seo?.title || post.title } | Simon Knittel</title>
      { post.seo?.description ? <meta name="description" content={ post.seo.description } /> : null }
    </Helmet>

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
    datoCmsBlogPost(id: { eq: $id }, locale: { eq: "en" } ) {
      id
      slug
      title
      seo {
        title
        description
        twitterCard
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
