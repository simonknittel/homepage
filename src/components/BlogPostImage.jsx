import * as React from "react"

import "./BlogPostImage.scss"

export default function BlogPostImage({ record }) {
  const aspectRatioCssClass = 'BlogPost__img--' + record.aspectRatio.replace(':', 'to')
  let src = record.image.url
  let widthAndHeightAttributes = {
    width: record.image.width,
    height: record.image.height
  }

  if (record.aspectRatio !== 'original') {
    src += '&ar=' + record.aspectRatio
    widthAndHeightAttributes = {}
  }

  return <figure className={ `BlogPost__img ${ aspectRatioCssClass }` }>
    <img
      src={ src }
      alt={ record.image.alt }

      { ...widthAndHeightAttributes }
    />

    <figcaption>{ record.image.title }</figcaption>
  </figure>
}
