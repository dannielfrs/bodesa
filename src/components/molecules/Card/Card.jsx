import styles from './Card.module.scss'

export const Card = ({ className, children }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {children}
    </div>
  )
}
