import "./BlogPost.scss"
import { BlogPostArticleImage } from "../../components/BlogPostArticleImage"
import { BlogPostImage } from "../../components/BlogPostImage"
import { Breadcrumb } from "../../components/Breadcrumb"
import { Form } from "../../components/Form"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { HtmlWrapper } from "../../components/HtmlWrapper"
import { Layout } from "../../components/Layout"
import { StructuredText } from "react-datocms"
import * as React from "react"

/**
 * TODO: Figure out how to implement locales
 *
 * Source: https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/
 * If you need to customize the query used for collecting the nodes (e.g.
 * filtering out any product of type "Food"), you should use the createPages API
 * instead as File System Route API doesn’t support this at the moment."
 */

function shorterThan60Seconds(diff) {
  return diff < 60
}

function between60SecondsAnd1Hour(diff) {
  return diff >= 60 && diff < 3_600
}

function between1HourAnd1Day(diff) {
  return diff >= 3_600 && diff < 86_400
}

function between1DayAnd1Week(diff) {
  return diff >= 86_400 && diff < 604_800
}

function plural(count) {
  return count > 1 ? 's' : ''
}

export default function BlogPost({ data: { site, datoCmsBlogPost: post } }) {
  if (!post) return null

  const publishedAtDate = new Date(post.meta.firstPublishedAt)
  const diff = (Date.now() - publishedAtDate.getTime()) / 1000

  const rawDate = publishedAtDate.toLocaleString('en', { year: 'numeric', month: 'long', day: 'numeric', hour12: false, hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })
  let simpleDate = ''
  if (shorterThan60Seconds(diff)) {
    const count = Math.floor(diff)
    simpleDate = `${ count } second${ plural(count) } ago`
  } else if (between60SecondsAnd1Hour(diff)) {
    const count = Math.floor(diff / 60)
    simpleDate = `${ count } minute${ plural(count) } ago`
  } else if (between1HourAnd1Day(diff)) {
    const count = Math.floor(diff / 60 / 60)
    simpleDate = `${ count } hour${ plural(count) } ago`
  } else if (between1DayAnd1Week(diff)) {
    const count = Math.floor(diff / 60 / 60 / 24)
    simpleDate = `${ count } day${ plural(count) } ago`
  } else {
    simpleDate = rawDate
  }

  return <Layout>
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
    >
      <title>{ post.title } - { site.siteMetadata.title }</title>
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
          <BlogPostArticleImage image={ post.articleImage } aspectRatio={ post.articleImageAspectRatio } />
        : null }
      </header>

      <StructuredText
        data={ post.content }
        renderBlock={({ record }) => {
          let module = null

          switch (record.__typename) {
            case "DatoCmsHtml":
              module = <HtmlWrapper html={ record.html } />
              break;

            case "DatoCmsBlogPostImage":
              module = <BlogPostImage image={ record.image } aspectRatio={ record.aspectRatio } />
              break;

            case "DatoCmsForm":
              module = <Form heading={ record.heading } baseId={ record.baseId } tableName={ record.tableName } fields={ JSON.parse(record.formFields) } />
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
        alt
        width
        height

        url(imgixParams: { fit: "crop", crop: "focalpoint", q: 40 })
      }
      articleImageAspectRatio
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

              url(imgixParams: { fit: "crop", crop: "focalpoint", q: 40 })
            }
          }

          ... on DatoCmsForm {
            id: originalId
            heading
            baseId
            tableName
            formFields
          }
        }
      }
    }
  }
`
