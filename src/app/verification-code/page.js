import SecurityCode from '@/components/organisms/Login/SecurityCode/SecurityCode'
import styles from '@/styles/Template.module.scss'

export default function Page () {
  return (
    <main className={styles.template_container}>
      <SecurityCode />
    </main>
  )
}
