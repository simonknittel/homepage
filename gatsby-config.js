module.exports = {
  siteMetadata: {
    title: "Simon Knittel",
    siteUrl: "https://nightly.simonknittel.de",
  },
  plugins: [
    {
      resolve: "gatsby-source-datocms",
      options: {
        apiToken: "83956640cf317cab838d08c35d9767",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};
