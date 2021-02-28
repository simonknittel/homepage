import * as React from "react"
import { SkTag } from "@simonknittel/components-react"

import "./Hero.scss"

export default function Hero({
  name,
  description = "",
  tags = [],
  locales = [],
}) {
  return <div className="hero">
    <h1>
      <span>{ name }</span>
      { description ? <span>{ description }</span> : null }
    </h1>

    { tags.length > 0 ? (
      <div className="hero__tags">
        { tags.map(tag => <SkTag key={ tag }>{ tag }</SkTag>)}
      </div>
    ) : null}

    { locales.length > 0 ? (
      <ul className="hero__locales">
        { locales.map(locale => (
          <li className="hero__locale" key={ locale }>
            <a href="#" title={ `Switch language to ${ locale }` }>{ locale }</a>
          </li>
        ))}
      </ul>
    ) : null }
  </div>
}
