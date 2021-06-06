import { Link } from "gatsby"
import * as React from "react"
import { Navigation } from "./Navigation"

import "./Header.scss"

export function Header() {
  return <header className="Header">
    <Link className="Header__logo" to="/" title="Go to home page">Simon Knittel</Link>

    <Navigation />
  </header>
}
