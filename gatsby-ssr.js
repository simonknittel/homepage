const React = require("react")

const HeadComponents = [
  <link key="googlePreconnect" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />,
  <link key="googlePreload" rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap" />,
  <link key="googleStylesheet" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap" />,

  <link key="datocmsPreconnect" rel="preconnect" href="https://www.datocms-assets.com" crossOrigin="anonymous" />,
  <link key="sentryPreconnect" rel="preconnect" href="https://o77506.ingest.sentry.io" crossOrigin="anonymous" />,
]

exports.onRenderBody = ({
  setHeadComponents,
}) => {
  setHeadComponents(HeadComponents)
}
