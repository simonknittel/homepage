import "./Header.scss"
import { Link } from "gatsby"
import { Navigation } from "./Navigation"
import * as React from "react"
import LogoIcon from '../images/icon.inline.svg'

export function Header({
  locale
}) {
  return <header className="Header">
    {/* <Link className="Header__logo" to="/" title="Go to home page">
      <LogoIcon className="Header__logo__icon" />
      Simon Knittel
    </Link> */}

    <Navigation locale={ locale } />
  </header>
}
