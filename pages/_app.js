import { appWithTranslation } from 'next-i18next'
import '@/styles/globals.css'

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default appWithTranslation(App)