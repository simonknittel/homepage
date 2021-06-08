// import { Link } from "gatsby"
import * as React from "react"

import "./Navigation.scss"

export function Navigation() {
  return <nav className="Navigation">
    <ul className="Navigation__list">
      {/* <li className="Navigation__item">
        <Link className="Navigation__link" to="/" title="Go to home page">Home</Link>
      </li> */}

      {/* <li className="Navigation__item">
        <Link
          className="Navigation__link"
          to="/blog"
          title="Go to blog"
          activeClassName="Navigation__link--active"
          partiallyActive={ true }
        >Blog</Link> */}

      <li className="Navigation__item">
        <a
          className="Navigation__link"
          href="https://github.com/simonknittel"
          title="Open my GitHub profile"
          rel="noopener nofollow"
        >GitHub</a>

        <a
          className="Navigation__link"
          href="https://twitter.com/simknittel"
          title="Open my Twitter profile"
          rel="noopener nofollow"
        >Twitter</a>
      </li>
    </ul>
  </nav>
}
