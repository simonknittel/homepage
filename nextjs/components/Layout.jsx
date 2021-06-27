import { Footer } from './Footer'
import { Header } from './Header'

export const siteTitle = 'Simon Knittel'

export function Layout({
  children,
  overlappingHeader = false
}) {
  return <>
    <Header />

    <main className={
      overlappingHeader ? 'main--overlapping-header' : ''
    }>
      { children }
    </main>

    <Footer />
  </>
}
