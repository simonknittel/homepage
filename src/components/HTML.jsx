import * as React from "react"

export function Html({
  html
}) {
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
