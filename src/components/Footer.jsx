import "./Footer.scss"
import * as React from "react"
import IpfsIcon from '../images/ipfs.inline.svg'

export function Footer() {
  return <footer className="Footer">
    <div className="Footer__left">
      <p className="Footer__font-awesome">Die Icons werden bereitgestellt durch Font Awesome (<a href="https://fontawesome.com/license/free" rel="noopener nofollow">Lizenz</a>).</p>
    </div>

    {/* { process.env.GATSBY_IPFS_CID ? */}
    { true ?
      <div className="Footer__right">
        <div className="Footer__ipfs">
          <p className="Footer__ipfs__intro">Diese Seite ist über IPFS erreichbar:</p>
          <div className="Footer__ipfs__button">
            <IpfsIcon />

            <div className="Footer__ipfs__tooltip">
              <ul>
                <li className="Footer__ipfs__cid">
                  <span>CID</span>
                  <code>{ process.env.GATSBY_IPFS_CID }</code>
                </li>

                {/* <li className="Footer__ipfs__ud">
                  <span>Unstoppable Domains</span>
                  <a href="https://simonknittel.crypto">simonknittel.crypto</a>
                </li> */}

                <li className="Footer__ipfs__protocol">
                  <a href={ `ipfs://${ process.env.GATSBY_IPFS_CID }` }>ipfs:// protocol</a>
                </li>

                <li className="Footer__ipfs__gateways">
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
