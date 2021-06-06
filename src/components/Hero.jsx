import * as React from "react"
import { SkTag } from "@simonknittel/components-react"

import "./Hero.scss"

export function Hero({
  name,
  description = "",
  tags = [],
  locales = [],
}) {
  return <div className="Hero">
    <h1>
      <span>{ name }</span>
      { description ? <span>{ description }</span> : null }
    </h1>

    { tags.length > 0 ? (
      <div className="Hero__tags">
        { tags.map(tag => <SkTag key={ tag }>{ tag }</SkTag>)}
      </div>
    ) : null}

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
