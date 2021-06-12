import { Footer } from "./Footer"
import { Header } from "./Header"
import * as React from "react"

export function Layout({
  children,
  locale,
  overlappingHeader = false
}) {
  return <>
    <Header locale={ locale } />

    <main className={
      overlappingHeader ? 'main--overlapping-header' : ''
    }>
      { children }
    </main>

    <Footer />
  </>
}
