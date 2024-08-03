import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/Icono.svg" />
      </Head>
      <body>
        <title>Animated Portfolio</title>
        <Main />
        <NextScript />
        <script defer src="https://kit.fontawesome.com/a076d05399.js"></script>
      </body>
    </Html>
  )
}
