import "./Footer.scss"
import * as React from "react"
import IpfsIcon from '../images/ipfs.inline.svg'

export function Footer() {
  return <footer className="Footer">
    <div className="Footer__left">
      <p className="Footer__font-awesome">Die Icons werden bereitgestellt durch Font Awesome (<a href="https://fontawesome.com/license/free" rel="noopener nofollow">Lizenz</a>).</p>
    </div>

    {/* <div className="Footer__right">
      <div className="Footer__ipfs">
        <p className="Footer__ipfs__intro">Diese Seite ist über IPFS erreichbar:</p>
        <button className="Footer__ipfs__button">
          <IpfsIcon />
        </button>
      </div>
    </div> */}
  </footer>
}
