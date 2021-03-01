import { graphql } from "gatsby"
import * as React from "react"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import HTML from "../components/HTML"
import NotFound from "../components/NotFound"
import ProjectGrid from "../components/ProjectGrid"
import SocialMediaProfiles from "../components/SocialMediaProfiles"

import "./Default.scss"

export default function DefaultPage({ data }) {
  const modules = data.datoCmsPage.moduleOrder.map(module => {
    switch (module.__typename) {
      case "DatoCmsHero":
        return <Hero
          name={ module.name }
          description={ module.description }
          tags={ module.tags.map(tag => tag.title) }
          key={ module.id }
        />

      case "DatoCmsSocialMediaRow":
        return <SocialMediaProfiles
          links={ module.socialMediaLinks }
          key={ module.id }
        />

      case "DatoCmsProjectGrid":
        return <ProjectGrid
          projects={ module.projects }
          key={ module.id }
        />

      case "DatoCmsFooter":
        return <Footer
          content={ module.content }
          key={ module.id }
        />

      case "DatoCmsHtml":
        return <HTML
          html={ module.html }
          key={ module.id }
        />

      case "DatoCmsNotFound":
        return <NotFound
          heading={ module.heading }
          subheading={ module.subheading }
          goToHome={ module.goToHome }
          key={ module.id }
        />

      default:
        return null
    }
  })

  return modules
}

export const query = graphql`
  query PageById(
    $id: String!
  ) {
    datoCmsPage(id: { eq: $id }) {
      id
      moduleOrder {
        ... on DatoCmsHtml {
          id
          html
        }
        ... on DatoCmsNotFound {
          id
          goToHome
          heading
          subheading
        }
        ... on DatoCmsProjectGrid {
          id
          projects {
            id
            urlDescription
            url
            title
            tags {
              id
              title
            }
            description
            badge
          }
        }
        ... on DatoCmsSocialMediaRow {
          id
          socialMediaLinks {
            id
            link
            text
            title
            icon
          }
        }
        ... on DatoCmsSingleProject {
          id
          project {
            badge
            description
            id
            title
            url
            urlDescription
            tags {
              id
              title
            }
          }
        }
        ... on DatoCmsFooter {
          content
          id
        }
        ... on DatoCmsHero {
          id
          name
          description
          tags {
            id
            title
          }
        }
      }
    }
  }
`
