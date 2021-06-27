import GitHubIcon from '../images/github.inline.svg'
import styles from './Navigation.module.scss'
import TwitterIcon from '../images/twitter.inline.svg'

export function Navigation({
  // locale
}) {
  return <nav className={ styles.Navigation }>
    <ul className={ styles.Navigation__list }>
      {/* <li className={ styles.Navigation__item }>
        <Link className={ styles.Navigation__link } to={ locale === 'de' ? '/' : `/${ locale }`} title="Zur Startseite">Startseite</Link>
      </li>

      <li className={ styles.Navigation__item }>
        <Link
          className={ styles.Navigation__link }
          to={ locale === 'de' ? '/blog' : `/${ locale }/blog`}
          title="Zum Blog"
          activeClassName={ styles.['Navigation__link--active'] }
          partiallyActive={ true }
        >Blog</Link>
      </li> */}

      <li className={ `${styles.Navigation__item} ${styles['Navigation__item--with-spacing']}` }>
        <a
          className={ styles.Navigation__link }
          href="https://github.com/simonknittel"
          title="Zu meinem GitHub-Profil"
          rel="noopener nofollow"
        >
          <GitHubIcon className={ styles.Navigation__icon } />

          GitHub
        </a>
      </li>

      <li className={ styles.Navigation__item }>
        <a
          className={ styles.Navigation__link }
          href="https://twitter.com/simknittel"
          title="Zu meinem Twitter-Profil"
          rel="noopener nofollow"
        >
          <TwitterIcon className={ styles.Navigation__icon } />
          Twitter
        </a>
      </li>

      {/* <li className={ `${styles.Navigation__item} ${styles['Navigation__item--with-spacing']}` }>
        <Link
          className={ styles.Navigation__link }
          to="/"
          title="Switch to english"
        >DE</Link>
      </li>

      <li className={ styles.Navigation__item }>
        <Link
          className={ styles.Navigation__link }
          to="/en"
          title="Switch to german"
        >EN</Link>
      </li> */}
    </ul>
  </nav>
}
