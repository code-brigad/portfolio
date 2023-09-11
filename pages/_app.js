import { appWithTranslation } from 'next-i18next'
import '@/styles/globals.css'
import { Footer, Navbar } from '@/components'
import { Cursor } from '@/ui'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = ({ Component, pageProps }) => {
  return (
    <main>
      {/* <Cursor /> */}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}

export default appWithTranslation(App)