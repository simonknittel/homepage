const React = require("react")

const HeadComponents = [
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap" />
]

exports.onRenderBody = ({
  setHeadComponents,
}) => {
  setHeadComponents(HeadComponents)
}
