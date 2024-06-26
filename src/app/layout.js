// theme
import 'primereact/resources/themes/tailwind-light/theme.css'
// core
import 'primereact/resources/primereact.min.css'
// icons
import 'primeicons/primeicons.css'
// globals
import './globals.scss'
// fonts
import { Roboto_Flex as Roboto } from 'next/font/google'

const robotoFont = Roboto({ subsets: ['latin'] })

export const metadata = {
  title: 'Bodesa',
  description: 'Generated by create witenconsulting'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={robotoFont.className}>{children}</body>
    </html>
  )
}
