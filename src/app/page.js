import Login from '@/components/organisms/Login/Login'
import styles from '@/styles/Template.module.scss'

export default function Home () {
  return (
    <main className={styles.template_container}>
      <Login />
    </main>
  )
}
