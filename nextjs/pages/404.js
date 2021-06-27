import { Layout, siteTitle } from '../components/Layout'
import Head from 'next/head'

/**
 * BUG: [[...slug]].jsx can't generate the /404 route
 * See: https://github.com/vercel/next.js/issues?q=+ENOENT%3A+no+such+file+or+directory%2C+rename
 */
export default function NotFound() {
  const title = `404 - Seite nicht gefunden - ${ siteTitle }`

  return <Layout>
    <Head>
      <title>{ title }</title>
    </Head>

    404
  </Layout>
}
