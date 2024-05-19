import Image from 'next/image'
import styles from './ImagePortrait.module.scss'
import defaultImg from '@/../public/images/icons/upload.svg'

export default function ImagePortrait({ src = defaultImg, className, classImg }) {
  return (
    <div className={`${styles.navbar_user} ${className}`}>
      <Image
        src={src}
        alt='img'
        className={`${classImg}`}
        width={50}
        height={41}
      />
    </div>
  )
}
