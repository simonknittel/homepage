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
      datoCmsGlobalConfiguration {
        pages {
          id
          url
        }
      }
    }
  `)

  data.datoCmsGlobalConfiguration.pages.forEach(page => {
    const slug = page.url

    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/Default.jsx"),
      context: { id: page.id }
    })
  })
}
