import "./Navigation.scss"
import { Link } from "gatsby"
import * as React from "react"
import GitHubIcon from '../images/github.inline.svg'
import TwitterIcon from '../images/twitter.inline.svg'

export function Navigation({
  locale
}) {
  return <nav className="Navigation">
    <ul className="Navigation__list">
      <li className="Navigation__item">
        <Link className="Navigation__link" to={ locale === 'de' ? '/' : `/${ locale }`} title="Zur Startseite">Startseite</Link>
      </li>

      <li className="Navigation__item">
        <Link
          className="Navigation__link"
          to={ locale === 'de' ? '/blog' : `/${ locale }/blog`}
          title="Zum Blog"
          activeClassName="Navigation__link--active"
          partiallyActive={ true }
        >Blog</Link>
      </li>

      <li className="Navigation__item Navigation__item--with-spacing">
        <a
          className="Navigation__link"
          href="https://github.com/simonknittel"
          title="Zu meinem GitHub-Profil"
          rel="noopener nofollow"
        >
          <GitHubIcon className="Navigation__icon" />

          GitHub
        </a>
      </li>

      <li className="Navigation__item">
        <a
          className="Navigation__link"
          href="https://twitter.com/simknittel"
          title="Zu meinem Twitter-Profil"
          rel="noopener nofollow"
        >
          <TwitterIcon className="Navigation__icon" />
          Twitter
        </a>
      </li>

      <li className="Navigation__item Navigation__item--with-spacing">
        <Link
          className="Navigation__link"
          to="/"
          title="Switch to english"
        >DE</Link>

        <Link
          className="Navigation__link"
          to="/en"
          title="Switch to german"
        >EN</Link>
      </li>
    </ul>
  </nav>
}
