import { Link } from "gatsby"
import * as React from "react"
import BlogPostImage from './BlogPostImage'

import './BlogPostTeaser.scss'

export default function BlogPostTeaser({ post }) {
  // const publishedAtDate = new Date(post.meta.firstPublishedAt)
  // const diff = (Date.now() - publishedAtDate.getTime()) / 1000

  // const rawDate = publishedAtDate.toLocaleString('en', { year: 'numeric', month: 'long', day: 'numeric', hour12: false, hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })
  // let simpleDate = ''
  // if (diff < 60) {
  //   const count = Math.floor(diff)
  //   simpleDate = `${ count } seconds${ count > 1 ? 's' : '' } ago`
  // } else if (diff >= 60 && diff < 3_600) {
  //   const count = Math.floor(diff / 60)
  //   simpleDate = `${ count } minute${ count > 1 ? 's' : '' } ago`
  // } else if (diff >= 3_600 && diff < 86_400) {
  //   const count = Math.floor(diff / 60 / 60)
  //   simpleDate = `${ count } hour${ count > 1 ? 's' : '' } ago`
  // } else if (diff >= 86_400 && diff < 604_800) {
  //   const count = Math.floor(diff / 60 / 60 / 24)
  //   simpleDate = `${ count } day${ count > 1 ? 's' : '' } ago`
  // } else {
  //   simpleDate = rawDate
  // }

  return <article className="BlogPostTeaser">
    <header className="BlogPostTeaser__header">
      <Link className="BlogPostTeaser__header-body" to={ post.slug }>
        <h1 className="BlogPostTeaser__heading">{ post.title }</h1>

        {/* <time className="BlogPostTeaser__date" dateTime={ post.meta.firstPublishedAt } title={ rawDate }>Published { simpleDate }</time> */}
      </Link>

      { post.articleImage ?
        <BlogPostImage image={ post.articleImage } aspectRatio="21:9" />
      : null }
    </header>

    <p className="BlogPostTeaser__excerpt">
      { post.excerpt }
    </p>
  </article>
}
