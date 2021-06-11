// import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"
// import { Footer } from "./Footer"
import { Header } from "./Header"

export function Layout({
  children,
  locale,
  overlappingHeader = false
}) {
  // const data = useStaticQuery(graphql`
  //   query {
  //     datoCmsGlobalConfiguration {
  //       footer
  //     }
  //   }
  // `)

  return <>
    {/* <Header locale={ locale } /> */}

    <main className={
      overlappingHeader ? 'main--overlapping-header' : ''
    }>
      { children }
    </main>

    {/* <Footer content={ data.datoCmsGlobalConfiguration.footer } /> */}
  </>
}
