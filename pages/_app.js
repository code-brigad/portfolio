import { appWithTranslation } from 'next-i18next'
import { Footer, Navbar } from '@/components'
import { Cursor, ScrollProgress } from '@/ui'
import '@/styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = ({ Component, pageProps }) => {
  return (
    <main>
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}

export default appWithTranslation(App)