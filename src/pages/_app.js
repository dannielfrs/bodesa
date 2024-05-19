// theme
import 'primereact/resources/themes/tailwind-light/theme.css'
// core
import 'primereact/resources/primereact.min.css'
// icons
import 'primeicons/primeicons.css'
// globals
import '@/styles/globals.scss'

export default function App ({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
