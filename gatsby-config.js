const plugins = [
  {
    resolve: "gatsby-source-datocms",
    options: {
      apiToken: "83956640cf317cab838d08c35d9767",
    },
  },
  "gatsby-plugin-sass",
  "gatsby-plugin-react-helmet",
]

const siteMetadata = {
  title: "Simon Knittel",
  siteUrl: "http://localhost:8000",
}

if (process.env.NODE_ENV === "production") {
  plugins.push(...[
    // "gatsby-plugin-sitemap",

    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: "https://6d75b4833b664bf884eeabcbfe4a7ca3@o77506.ingest.sentry.io/5196082",
        release: process.env.SENTRY_ENVIRONMENT || "development",
      }
    },

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', disallow: ['/'] }],
        sitemap: null,
        host: null
      }
    },

    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allDatoCmsBlogPost } }) => {
    //           return allDatoCmsBlogPost.edges.map(edge => {
    //             return Object.assign({}, {
    //               title: edge.node.title,
    //               description: edge.node.excerpt,
    //               date: edge.node.meta.firstPublishedAt,
    //               url: `${ site.siteMetadata.siteUrl }/blog/${ edge.node.slug }`,
    //               guid: `${ site.siteMetadata.siteUrl }/blog/${ edge.node.slug }`,
    //             })
    //           })
    //         },
    //         query: `
    //           {
    //             allDatoCmsBlogPost(
    //               sort: { order: DESC, fields: [meta___firstPublishedAt] },
    //             ) {
    //               edges {
    //                 node {
    //                   id
    //                   title
    //                   slug
    //                   excerpt
    //                   meta {
    //                     firstPublishedAt
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: "/rss.xml",
    //         title: "Simon Knittel - Web Development",
    //       },
    //     ],
    //   },
    // },
  ])

  siteMetadata.siteUrl = "https://nightly.simonknittel.de"
}

module.exports = {
  siteMetadata,
  plugins,
}
