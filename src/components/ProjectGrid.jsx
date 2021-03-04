import { SkLink, SkSlantedTeaser, SkTypography } from "@simonknittel/components-react"
import * as React from "react"

import "./ProjectGrid.scss"

export default function ProjectGrid({
  projects
}) {
  return <div className="ProjectGrid">
    <div className="ProjectGrid__inner">
      { projects.map(project => (
        <SkSlantedTeaser
          heading={ project.title }
          badge={ project.badge }
          tags={ project.tags.map(tag => tag.title) }
          href={ project.url }
          target="_blank"
          rel="noopener"
          linkText={ project.urlDescription }
          key={ project.id }
        >
          <SkTypography as="p">
            { project.description }
          </SkTypography>
        </SkSlantedTeaser>
      )) }
    </div>

    <div className="ProjectGrid__more">
      <SkLink
        href="https://github.com/simonknittel"
        target="_blank"
        rel="noopener"
        iconPosition="right"
        icon=">"
      >
        More on GitHub
      </SkLink>
    </div>
  </div>
}
