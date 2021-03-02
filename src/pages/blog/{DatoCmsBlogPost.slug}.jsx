import { graphql } from "gatsby"
import * as React from "react"

export default function BlogPost({ data }) {
  return <p>{ JSON.stringify(data) }</p>
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
      }
    }
  }
`
