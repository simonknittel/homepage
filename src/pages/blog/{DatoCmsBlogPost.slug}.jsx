import { graphql } from "gatsby"
import { StructuredText } from "react-datocms"
import * as React from "react"
import HTML from "../../components/HTML"
import Layout from "../../components/Layout"

import "./BlogPost.scss"

export default function BlogPost({ data: { datoCmsBlogPost: post } }) {
  return <Layout>
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
    datoCmsBlogPost(id: { eq: $id }) {
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
