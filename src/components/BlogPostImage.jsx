import * as React from "react"

import "./BlogPostImage.scss"

// TODO: Implement https://web.dev/browser-level-image-lazy-loading/

export default function BlogPostImage({ record }) {
  const aspectRatioCssClass = 'BlogPost__img--' + record.aspectRatio.replace(':', 'to')

  let widthAndHeightAttributes = {
    width: record.image.width,
    height: record.image.height
  }

  const url = new URL(record.image.url)

  if (record.aspectRatio !== 'original') {
    url.searchParams.set('ar', record.aspectRatio)
    widthAndHeightAttributes = {}
  }

  url.searchParams.set('w', 360)
  const src1 = url.toJSON()

  url.searchParams.set('w', 480)
  const src2 = url.toJSON()

  url.searchParams.set('w', 768)
  const src3 = url.toString()

  return <figure className={ `BlogPost__img ${ aspectRatioCssClass }` }>
    <img
      srcSet={`
        ${ src1 } 360w,
        ${ src2 } 480w,
        ${ src3 } 768w
      `}

      sizes="
        (min-width: 768px) 768px
        (min-width: 480px) 480px
        360px
      "

      src={ src3 }
      alt={ record.image.alt }

      { ...widthAndHeightAttributes }
    />

    <figcaption>{ record.image.title }</figcaption>
  </figure>
}
