import { SkSlanted, SkSocialLink } from "@simonknittel/components-react"
import * as React from "react"

import "./SocialMediaProfiles.scss"

export function SocialMediaProfiles({
  links=[]
}) {
  return <SkSlanted className="SocialMediaProfiles">
    <ul>
      { links.map(link => (
        <li key={ link.id }>
          <SkSocialLink
            href={ link.link }
            text={ link.text }
            icon={ link.icon }
            compactOnSmall={ true }
            titleAttr={ link.title }
          />
        </li>
      ))}
    </ul>
  </SkSlanted>
}
