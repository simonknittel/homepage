import { graphql } from "gatsby"
import { StructuredText } from "react-datocms"
import * as React from "react"
import HTML from "../../components/HTML"

export default function BlogPost({ data }) {
  return <StructuredText
    data={ data.datoCmsBlogPost.content }
    renderBlock={({ record }) => {
      switch (record.__typename) {
        case "DatoCmsHtml":
          return <HTML
          html={ record.html }
        />

        default:
          return <pre><code>{ JSON.stringify(record, null, 2) }</code></pre>
      }
    }}
  />
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
