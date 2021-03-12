import * as React from "react"

import "./BlogPostArticleImage.scss"

// TODO: Implement https://web.dev/browser-level-image-lazy-loading/

export default function BlogPostArticleImage({ image, aspectRatio }) {
  const aspectRatioCssClass = 'BlogPostArticleImage--' + aspectRatio.replace(':', 'to')

  let widthAndHeightAttributes = {
    width: image.width,
    height: image.height
  }

  const url = new URL(image.url)

  if (aspectRatio !== 'original') {
    url.searchParams.set('ar', aspectRatio)
    widthAndHeightAttributes = {}
  }

  url.searchParams.set('w', 360)
  const src1 = url.toJSON()

  url.searchParams.set('w', 480)
  const src2 = url.toJSON()

  url.searchParams.set('w', 768)
  const src3 = url.toString()

  url.searchParams.set('w', 1440)
  const src4 = url.toString()

  return <figure className={ `BlogPostArticleImage ${ aspectRatioCssClass }` }>
    <div className="BlogPostArticleImage__wrapper">
      <img
        srcSet={`
          ${ src1 } 360w,
          ${ src2 } 480w,
          ${ src3 } 768w,
          ${ src4 } 1440w
        `}

        sizes="
          (min-width: 1440px) 1440px
          (min-width: 768px) 768px
          (min-width: 480px) 480px
          360px
        "

        src={ src4 }
        alt={ image.alt }

        { ...widthAndHeightAttributes }
      />
    </div>
  </figure>
}
