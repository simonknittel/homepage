import { Link } from "gatsby"
import * as React from "react"

import "./Navigation.scss"

export default function Navigation() {
  return <nav className="Navigation">
    <ul className="Navigation__list">
      <li className="Navigation__item">
        <Link className="Navigation__link" to="/" title="Go to home page">Home</Link>
      </li>

      <li className="Navigation__item">
        <Link
          className="Navigation__link"
          to="/blog"
          title="Go to blog"
          activeClassName="Navigation__link--active"
          partiallyActive={ true }
        >Blog</Link>
      </li>
    </ul>
  </nav>
}
