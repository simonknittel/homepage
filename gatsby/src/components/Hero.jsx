import "./Hero.scss"
import { SkTag } from "@simonknittel/components-react"
import * as React from "react"
import LogoIcon from '../images/icon.inline.svg'
import VanillaTilt from 'vanilla-tilt'

export function Hero({
  name,
  description = "",
  tags = [],
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
      <div className="Hero__inner2">
        <LogoIcon className="Hero__icon" />

        <div>
          <h1 className="Hero__headline">{ name }</h1>
          { description ? <p className="Hero__description" dangerouslySetInnerHTML={{ __html: description }} /> : null }
        </div>
      </div>

      { tags.length > 0 ? (
        <div className="Hero__tags">
          { tags.map(tag => <SkTag key={ tag.title } description={ tag.description }>{ tag.title }</SkTag>)}
        </div>
      ) : null}
    </div>
  </div>
}
