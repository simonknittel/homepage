import { Footer } from './Footer'
import { Header } from './Header'
import Head from 'next/head'

export const siteTitle = 'Simon Knittel'

export function Layout({
  children,
  overlappingHeader = false
}) {
  return <>
    <Head>
      <link key="googlePreconnect" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />,
      <link key="googlePreload" rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap" />,
      <link key="googleStylesheet" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap" />,

      <link key="datocmsPreconnect" rel="preconnect" href="https://www.datocms-assets.com" crossOrigin="anonymous" />,
    </Head>

    <Header />

    <main className={
      overlappingHeader ? 'main--overlapping-header' : ''
    }>
      { children }
    </main>

    <Footer />
  </>
}
