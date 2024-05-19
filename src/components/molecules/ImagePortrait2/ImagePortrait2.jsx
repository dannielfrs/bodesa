import Image from 'next/image'
import styles from './ImagePortrait2.module.scss'
import defaultImg from '@/../public/images/avatar/upload.svg'

export default function ImagePortrait2 ({ src = '', className, classImg }) {
  return (
    <div className={`${styles.navbar_user} ${className}`}>
      <Image
        src={src}
        alt=''
        className={`${classImg}`}
        width={100}
        height={81}
      />
    </div>
  )
}
ImagePortrait2.defaultProps = {
  src: defaultImg
}
