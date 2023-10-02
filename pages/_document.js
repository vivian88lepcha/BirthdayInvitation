import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <meta property="og:title" content="Ivaan Shynon Lepcha"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:image" content={`https://ivaanbirthday.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3rd.1c68d42c.jpg&w=3840&q=75`}></meta>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
