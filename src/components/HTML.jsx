import * as React from "react"

export default function HTML({
  html
}) {
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
