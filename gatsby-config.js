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
  ])
}

module.exports = {
  siteMetadata: {
    title: "Simon Knittel",
    siteUrl: "https://nightly.simonknittel.de",
  },
  plugins,
}
