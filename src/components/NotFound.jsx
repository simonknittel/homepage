import { SkNotFound } from "@simonknittel/components-react"
import { navigate } from "gatsby"
import * as React from "react"

import "./NotFound.scss"

export function NotFound({
  heading,
  subheading,
  goToHome
}) {
  return <SkNotFound
    heading={ heading }
    subheading={ subheading }
    linkHref="/"
    linkIcon="<"
    linkText={ goToHome }
    linkPreventClick={ true }
    onClick={() => { navigate("/") }}
  />
}
