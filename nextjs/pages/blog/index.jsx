import { Layout, siteTitle } from '../../components/Layout'
import Head from 'next/head'

export default function Blog() {
  return <Layout>
    <Head>
      <title>Blog - { siteTitle }</title>
      <meta name="description" content="" />
    </Head>

    Blog
  </Layout>
}
