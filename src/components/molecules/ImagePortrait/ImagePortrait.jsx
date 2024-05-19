import Image from 'next/image'
import styles from './ImagePortrait.module.scss'
import defaultImg from '@/../public/images/avatar/upload.svg'

export default function ImagePortrait ({ src = '', className, classImg }) {
  return (
    <div className={`${styles.navbar_user} ${className}`}>
      <Image
        src={src}
        alt=''
        className={`${classImg}`}
        width={50}
        height={41}
      />
    </div>
  )
}
ImagePortrait.defaultProps = {
  src: defaultImg
}
