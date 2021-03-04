import * as React from "react"

import "./Footer.scss"

export default function Footer({ content }) {
  return <footer className="Footer" dangerouslySetInnerHTML={{__html: content}} />
}
