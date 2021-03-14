import * as React from "react"

import "./BlogPostImage.scss"

// TODO: Implement https://web.dev/browser-level-image-lazy-loading/

export default function BlogPostImage({ image, aspectRatio }) {
  const aspectRatioCssClass = 'BlogPost__img--' + aspectRatio.replace(':', 'to')

  let width = 768
  let height = null

  const url = new URL(image.url)

  switch (aspectRatio) {
    case '21:9':
      url.searchParams.set('ar', aspectRatio)
      height = Math.round(width / 21 * 9)
      break;

    case '16:9':
      url.searchParams.set('ar', aspectRatio)
      height = Math.round(width / 16 * 9)
      break;

    case '4:3':
      url.searchParams.set('ar', aspectRatio)
      height = Math.round(width / 4 * 3)
      break;

    case 'original':
    default:
      height = Math.round(image.height / image.width * width)
      break;
  }

  url.searchParams.set('w', 360)
  const src1 = url.toJSON()

  url.searchParams.set('w', 480)
  const src2 = url.toJSON()

  url.searchParams.set('w', 768)
  const src3 = url.toString()

  return <figure className={ `BlogPost__img ${ aspectRatioCssClass }` }>
    <div className="BlogPost__img__wrapper">
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
        alt={ image.alt }

        width={ width }
        height={ height }

        loading="lazy"
      />
    </div>

    <figcaption>{ image.title }</figcaption>
  </figure>
}
