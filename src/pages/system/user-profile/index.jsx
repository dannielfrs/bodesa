import { RootProvider } from '@/Provider/RootProvider'
import UserProfile from '@/components/organisms/Authenticated/UserProfile/UserProfile'
import { Roboto_Flex as Roboto } from 'next/font/google'

const robotoFont = Roboto({ subsets: ['latin'] })

export default function Page () {
  return (
    <UserProfile />
  )
}

Page.getLayout = function getLayout (page) {
  return (
    <RootProvider>
      <main className={robotoFont.className}>
        {page}
      </main>
    </RootProvider>
  )
}
