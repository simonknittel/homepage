const React = require("react")

const HeadComponents = [
  <link key="googlePreconnect" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />,
  <link key="googlePreload" rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap" />,
  <link key="googleStylesheet" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap" />
]

exports.onRenderBody = ({
  setHeadComponents,
}) => {
  setHeadComponents(HeadComponents)
}
