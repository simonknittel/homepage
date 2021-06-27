import { Navigation } from './Navigation'
// import LogoIcon from '../images/icon.inline.svg'
import styles from './Header.module.scss'

export function Header({
  locale
}) {
  return <header className={ styles.Header }>
    {/* <Link className={ styles.Header__logo } to="/" title="Go to home page">
      <LogoIcon className={ styles.Header__logo__icon } />
      Simon Knittel
    </Link> */}

    <Navigation locale={ locale } />
  </header>
}
