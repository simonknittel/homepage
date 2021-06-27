import { getAllPageSlugs, getPageData } from '../lib/pages'
import { Hero } from '../components/Hero'
import { Layout, siteTitle } from '../components/Layout'
import Head from 'next/head'

export default function Page({ page }) {
    const modules = page.moduleOrder.map(module => {
      switch (module.__typename) {
        case "HeroRecord":
          return <Hero
            name={ module.name }
            description={ module.description }
            tags={ module.tags }
            key={ module.id }
          />

        // case "SocialMediaRowRecord":
        //   return <SocialMediaProfiles
        //     links={ module.socialMediaLinks }
        //     key={ module.id }
        //   />

        // case "ProjectGridRecord":
        //   return <ProjectGrid
        //     projects={ module.projects }
        //     moreText={ module.moreText }
        //     key={ module.id }
        //   />

        // case "HtmlRecord":
        //   return <HtmlWrapper
        //     html={ module.html }
        //     key={ module.id }
        //   />

        // case "NotFoundRecord":
        //   return <NotFound
        //     heading={ module.heading }
        //     subheading={ module.subheading }
        //     goToHome={ module.goToHome }
        //     key={ module.id }
        //   />

        default:
          return <pre key={ module.id }><code>{ JSON.stringify(module, null, 2) }</code></pre>
      }
    })

  const title = page.slug === '/' ? page.title : `${ page.title } - ${ siteTitle }`

  return <Layout
    overlappingHeader={ page.slug === '/' }
  >
    <Head>
      <title>{ title }</title>
      { page.description ? <meta name="description" content={ page.description } /> : null }
    </Head>

    { modules }
  </Layout>
}

export async function getStaticPaths() {
  const slugs = await getAllPageSlugs()

  return {
    paths: slugs,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const page = await getPageData(params.slug)

  return {
    props: {
      page
    }
  }
}
