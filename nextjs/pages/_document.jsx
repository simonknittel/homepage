import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/*
            TODO: Automatic font optimization seems not to be working, see:
            https://github.com/vercel/next.js/issues/24781
          */}
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap" />

          <link rel="preconnect" href="https://www.datocms-assets.com" crossOrigin="anonymous" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
