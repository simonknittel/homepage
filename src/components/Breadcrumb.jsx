import { graphql, Link, useStaticQuery } from "gatsby"
import * as React from "react"
import { Helmet } from "react-helmet"

import "./Breadcrumb.scss"

export function Breadcrumb({ items }) {
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
                "name": "Startseite",
                "item": "${ data.site.siteMetadata.siteUrl }"
              },

              ${
                items.map((item, index) => {
                  const jsonObject = {
                    '@type': 'ListItem',
                    position: index + 2,
                    name: item.name
                  }

                  if (index + 1 !== items.length)  {
                    jsonObject.item = `${data.site.siteMetadata.siteUrl}/${item.href}`
                  }

                  return JSON.stringify(jsonObject, null, 2)
                })
              }
            ]
          }
        `}
      </script>
    </Helmet>

    <div className="Breadcrumb">
      <small className="Breadcrumb__heading">Du bist hier:</small>

      <ol className="Breadcrumb__list">
        <li className="Breadcrumb__item">
          <Link className="Breadcrumb__link" to="/">
            Startseite
          </Link>
        </li>

        { items.map((item, index) => <li className="Breadcrumb__item" key={ "breadcrumb_" + index }>
          <Link className="Breadcrumb__link" to={ "/" + item.href }>
            { item.name }
          </Link>
        </li>)}
      </ol>
    </div>
  </>
}
