import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Code Brigade - Dasturchilar Brigadasi</title>
        <link rel="icon" href="/icon.png" sizes="any" />
        <meta
          name="description"
          content="Kafolatlangan Natija va Sifat Uyg`unligi. Oliy sifatli xizmat, mutaxassislardan eksklyuziv tavsiyalar va professional koʻmak."
          key="desc"
        />
        <meta property="og:title" content="Kafolatlangan Natija va Sifat Uyg`unligi" />
        <meta
          property="og:description"
          content="Kafolatlangan Natija va Sifat Uyg`unligi"
        />
        <meta name="title" content="Kafolatlangan Natija va Sifat Uyg`unligi" />
        <meta name="author" content="https://code-brigade.vercel.app/"></meta>
        <meta name="keywords" content="Brigade, Code Brigade, Developers, Dasturchilar Brigadasi, Web Sayt Yaratish, Dastur yaratish, IT Xizmatlar" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Code Brigade - Dasturchilar Brigadasi" />
        <meta property="og:url" content="https://code-brigade.vercel.app/" />
        <meta property="og:title" content="Kafolatlangan Natija va Sifat Uyg`unligi" />
        <meta property="og:description" content="Kafolatlangan Natija va Sifat Uyg`unligi" />
        <meta property="og:image" content="/images/site-img.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://code-brigade.vercel.app/" />
        <meta property="twitter:title" content="Kafolatlangan Natija va Sifat Uyg`unligi" />
        <meta property="twitter:description" content="Kafolatlangan Natija va Sifat Uyg`unligi" />
        <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
