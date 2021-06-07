import "./Hero2.scss"
import { SkTag } from "@simonknittel/components-react"
import * as React from "react"
import VanillaTilt from 'vanilla-tilt'

export function Hero2({
  name,
  description = "",
  tags = [],
  locales = [],
}) {
  const innerRef = React.useRef()

  React.useEffect(() => {
    VanillaTilt.init(innerRef.current, {
      perspective: 5000,
      glare: true,
      "max-glare": .2,
      gyroscope: false // TODO: For some reason this doesn't work on my phone anyway
    })
  }, [])

  return <div className="Hero">
    <div className="Hero__inner" ref={ innerRef }>
      <h1>
        <span className="Hero__headline">{ name }</span>
        { description ? <span className="Hero__subheadline">{ description }</span> : null }
      </h1>

      { tags.length > 0 ? (
        <div className="Hero__tags">
          { tags.map(tag => <SkTag key={ tag.title } description={ tag.description }>{ tag.title }</SkTag>)}
        </div>
      ) : null}
    </div>

    { locales.length > 0 ? (
      <ul className="Hero__locales">
        { locales.map(locale => (
          <li className="Hero__locale" key={ locale }>
            <a href={ `/${ locale }` } title={ `Switch language to ${ locale }` }>{ locale }</a>
          </li>
        ))}
      </ul>
    ) : null }
  </div>
}
