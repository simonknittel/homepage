import { graphql, Link, useStaticQuery } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"

import "./Breadcrumb.scss"

export default function Breadcrumb({ items }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  return <>
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "${ data.site.siteMetadata.siteUrl }"
              },

              ${
                items.map((item, index) => `
                  {
                    "@type": "ListItem",
                    "position": ${ index + 2 },
                    "name": "${ item.name }"${ index + 1 === items.length ? '' : `,
                    "item": "${ data.site.siteMetadata.siteUrl }/${ item.href }"
                    `}
                  }
                `)
              }
            ]
          }
        `}
      </script>
    </Helmet>

    <div className="Breadcrumb">
      <small className="Breadcrumb__heading">You are here:</small>

      <ol className="Breadcrumb__list">
        <li className="Breadcrumb__item">
          <Link className="Breadcrumb__link" to="/">
            Home
          </Link>
        </li>

        { items.map(item => <li className="Breadcrumb__item">
          <Link className="Breadcrumb__link" to={ "/" + item.href }>
            { item.name }
          </Link>
        </li>)}
      </ol>
    </div>
  </>
}
