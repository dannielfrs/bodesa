import { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from './LayoutAuth.module.scss'
import Navbar from '@/components/organisms/Navbar/Navbar'
import Sidebar from '@/components/organisms/Sidebar/Sidebar'
import Cookies from 'js-cookie'
import { DecryptData } from '@/utils/Encrypt'
import { Roboto_Flex as Roboto } from 'next/font/google'

const robotoFont = Roboto({ subsets: ['latin'] })

export const LayoutAuth = ({ module, title, description, children }) => {
  const [collapseSidebar, setCollapseSidebar] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    const coockieName = process.env.NEXT_PUBLIC_COOCKIE
    const coockies = Cookies.get(coockieName)
    const decrypt = DecryptData(coockies)
    setUser(decrypt.user)
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={`${styles.layout} ${collapseSidebar ? styles.template_collapse : ''} ${robotoFont.className}`}>
        <div className={styles.template_navbar}>
          <Navbar module={module} collapseSidebar={collapseSidebar} user={user} />
        </div>
        <div className={styles.template_sidebar}>
          <Sidebar module={module} onCollapse={(isCollapsed) => setCollapseSidebar(isCollapsed)} />
        </div>
        <main className={`${styles.template_page} ${robotoFont.className}`}>
          {children}
        </main>
      </div>
    </>
  )
}
