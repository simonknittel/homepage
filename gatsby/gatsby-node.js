const path = require('path')

// https://github.com/ionic-team/stencil/issues/1842
// https://www.gatsbyjs.com/docs/how-to/custom-configuration/add-custom-webpack-config/
// https://github.com/gatsbyjs/gatsby/issues/15989
// https://webpack.js.org/configuration/resolve/#resolvesymlinks
// exports.onCreateWebpackConfig = function({ actions, getConfig }) {
//   const config = getConfig()

//   config.resolve.symlinks = false

//   actions.replaceWebpackConfig(config)
// }

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allDatoCmsPage {
        nodes {
          id
          slug
          locale
        }
      }

      allDatoCmsBlogPost {
        nodes {
          id
          slug
          locale
        }
      }
    }
  `)

  const pageTemplate = path.resolve(__dirname, './src/templates/Page.jsx')
  data.allDatoCmsPage.nodes.forEach(({ id, slug, locale }) => {
    if (slug === null) return // Untranslated

    const pathPrefix = locale === 'de' ? '' : `/${ locale }`

    actions.createPage({
      path: `${ pathPrefix }${ slug }`,
      component: pageTemplate,
      context: { id },
    })
  })

  const blogPostTemplate = path.resolve(__dirname, './src/templates/blog/BlogPost.jsx')
  data.allDatoCmsBlogPost.nodes.forEach(({ id, slug, locale }) => {
    if (slug === null) return // Untranslated

    const pathPrefix = locale === 'de' ? '' : `/${ locale }`

    actions.createPage({
      path: `${ pathPrefix }/blog/${ slug }`,
      component: blogPostTemplate,
      context: { id },
    })
  })
}
