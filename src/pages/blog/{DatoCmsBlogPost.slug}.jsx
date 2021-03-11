import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { StructuredText } from "react-datocms"
import * as React from "react"
import Breadcrumb from "../../components/Breadcrumb"
import HTML from "../../components/HTML"
import Layout from "../../components/Layout"

import "./BlogPost.scss"
import BlogPostImage from "../../components/BlogPostImage"

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

  const publishedAtDate = new Date(post.meta.firstPublishedAt)
  const diff = (Date.now() - publishedAtDate.getTime()) / 1000

  const rawDate = publishedAtDate.toLocaleString('en', { year: 'numeric', month: 'long', day: 'numeric', hour12: false, hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })
  let simpleDate = ''
  if (diff < 60) {
    const count = Math.floor(diff)
    simpleDate = `${ count } seconds${ count > 1 ? 's' : '' } ago`
  } else if (diff >= 60 && diff < 3_600) {
    const count = Math.floor(diff / 60)
    simpleDate = `${ count } minute${ count > 1 ? 's' : '' } ago`
  } else if (diff >= 3_600 && diff < 86_400) {
    const count = Math.floor(diff / 60 / 60)
    simpleDate = `${ count } hour${ count > 1 ? 's' : '' } ago`
  } else if (diff >= 86_400 && diff < 604_800) {
    const count = Math.floor(diff / 60 / 60 / 24)
    simpleDate = `${ count } day${ count > 1 ? 's' : '' } ago`
  } else {
    simpleDate = rawDate
  }

  return <Layout>
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
    >
      <title>{ post.title } | { site.siteMetadata.title }</title>
      <meta name="description" content={ post.excerpt } />

      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "${ post.title }",
            "datePublished": "${ post.meta.firstPublishedAt }",
            "dateModified": "${ post.meta.updatedAt }",
            "articleBody": "${ post.excerpt }",
            "author": {
              "@type": "Person",
              "givenName": "Simon",
              "familyName": "Knittel",
              "url": "${ site.siteMetadata.siteUrl }"
            }
          }
        `}
      </script>

      {/* TODO: Add preload/preconnect */}
    </Helmet>

    <Breadcrumb items={[
      {
        "name": "Blog",
        "href": "blog"
      },
      {
        "name": post.title,
        "href": `blog/${ post.slug }`
      }
    ]} />

    <article className="BlogPost">
      <header>
        <h1 className="BlogPost__heading">{ post.title }</h1>

        <time className="BlogPost__date" dateTime={ post.meta.firstPublishedAt } title={ rawDate }>Published { simpleDate }</time>

        { post.articleImage ?
          <div className="BlogPost__article-image">
            <img className="BlogPost__article-image__img" src={ post.articleImage.url } alt={ post.articleImage.alt } />
          </div>
        : null }
      </header>

      <StructuredText
        data={ post.content }
        renderBlock={({ record }) => {
          let module = null

          switch (record.__typename) {
            case "DatoCmsHtml":
              module = <HTML html={ record.html } />
              break;

            case "DatoCmsBlogPostImage":
              module = <BlogPostImage record={ record } />
              break;

            default:
              module = <pre><code>{ JSON.stringify(record, null, 2) }</code></pre>
          }

          return <div>
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
      title
      slug
      excerpt
      meta {
        updatedAt
        firstPublishedAt
      }
      articleImage {
        title
        alt
        width
        height

        url(imgixParams: { ar: "21:9", w: "1440", fit: "crop", crop: "focalpoint" })
      }
      content {
        value
        blocks {
          __typename
          ... on DatoCmsHtml {
            id: originalId
            html
          }
          ... on DatoCmsBlogPostImage {
            id: originalId
            aspectRatio
            image {
              title
              alt
              width
              height

              url(imgixParams: { fit: "crop", crop: "focalpoint" })
            }
          }
        }
      }
    }
  }
`
