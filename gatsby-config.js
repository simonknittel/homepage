const plugins = [
  "gatsby-plugin-sass",
  "gatsby-plugin-react-helmet",

  {
    resolve: "gatsby-source-datocms",
    options: {
      apiToken: "83956640cf317cab838d08c35d9767",
      environment: process.env.DATO_CMS_ENVIRONMENT
    },
  },

  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Simon Knittel - Web Developer`,
      short_name: `Simon Knittel`,
      start_url: `/`,
      background_color: `#fff5cc`,
      theme_color: `#ffcc00`,
      display: `minimal-ui`,
      icon: 'src/images/icon.svg',
      icon_options: {
        purpose: `any maskable`,
      },
      crossOrigin: `use-credentials`, // Enabled so the Cloud-CDN-Cookie cookie can be used
    },
  },
]

const siteMetadata = {
  title: "Simon Knittel",
  siteUrl: "http://localhost:8000",
}

if (process.env.NODE_ENV === "production") {
  plugins.push(...[
    // TODO: Enable on Go-live
    // "gatsby-plugin-sitemap",

    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        allPageHeaders: [
          `Strict-Transport-Security: max-age=31536000; preload`,
        ],
      }
    },

    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: "https://6d75b4833b664bf884eeabcbfe4a7ca3@o77506.ingest.sentry.io/5196082",
        environment: process.env.HOST,
      }
    },

    // TODO: Disable on Go-live
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', disallow: ['/'] }],
        sitemap: null,
        host: null
      }
    },

    // TODO: Enable on Go-live
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

  siteMetadata.siteUrl = `https://${ process.env.HOST }`
}

module.exports = {
  siteMetadata,
  plugins,
}
