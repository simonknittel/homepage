import styles from "./Footer.module.scss"
// import IpfsIcon from '../images/ipfs.inline.svg'

export function Footer() {
  function onClick(e) {
    e.currentTarget.classList.toggle('Footer__ipfs__button--active')
  }

  return <footer className={ styles.Footer }>
    <div className={ styles.Footer__left }>
      <p className={ styles['Footer__font-awesome'] }>Die Icons werden bereitgestellt durch Font Awesome (<a href="https://fontawesome.com/license/free" rel="noopener nofollow">Lizenz</a>).</p>
    </div>

    { process.env.GATSBY_IPFS_CID ?
      <div className={ styles.Footer__right }>
        <div className={ styles.Footer__ipfs }>
          <p className={ styles.Footer__ipfs__intro }>Diese Seite ist über IPFS erreichbar:</p>

          <div className={ styles.Footer__ipfs__button } onClick={ onClick }>
            {/* <IpfsIcon /> */}

            <div className={ styles.Footer__ipfs__tooltip }>
              <ul>
                <li className={ styles.Footer__ipfs__cid }>
                  <span>CID</span>
                  <code>{ process.env.GATSBY_IPFS_CID }</code>
                </li>

                {/* <li className={ styles.Footer__ipfs__ud }>
                  <span>Unstoppable Domains</span>
                  <a href="https://simonknittel.crypto">simonknittel.crypto</a>
                </li> */}

                <li className={ styles.Footer__ipfs__protocol }>
                  <a href={ `ipfs://${ process.env.GATSBY_IPFS_CID }` }>ipfs:// protocol</a>
                </li>

                <li className={ styles.Footer__ipfs__gateways }>
                  <span>Gateways</span>

                  <ul>
                    <li>
                      <a href={ `https://ipfs.io/ipfs/${ process.env.GATSBY_IPFS_CID }` }>ipfs.io</a>
                    </li>

                    <li>
                      <a href={ `https://cloudflare-ipfs.com/ipfs/${ process.env.GATSBY_IPFS_CID }` }>Cloudflare</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    : null }
  </footer>
}
