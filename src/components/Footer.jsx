import * as React from "react"
import ReactMarkdown from "react-markdown"

import "./Footer.scss"

export function Footer({ content }) {
  return <footer className="Footer">
    <ReactMarkdown>{ content }</ReactMarkdown>
  </footer>
}
