import { appWithTranslation } from 'next-i18next'
import '@/styles/globals.css'
import { Navbar } from '@/components'

const App = ({ Component, pageProps }) => {
  return (
    <main>
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}

export default appWithTranslation(App)