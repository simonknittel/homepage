import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"

export function Layout({
  children,
  hideHeader = false
}) {
  const data = useStaticQuery(graphql`
    query {
      datoCmsGlobalConfiguration {
        footer
      }
    }
  `)

  return <>
    { hideHeader === true ? null : <Header /> }

    <main>
      { children }
    </main>

    {/* <Footer content={ data.datoCmsGlobalConfiguration.footer } /> */}
  </>
}
