import * as React from "react"

export function HtmlWrapper({
  html
}) {
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
