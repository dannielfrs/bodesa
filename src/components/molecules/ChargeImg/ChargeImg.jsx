/* global FileReader */
import { useState } from 'react'
// Styles 👌
import styles from './ChargeImg.module.scss'
import ImagePortrait from '../ImagePortrait/ImagePortrait'

const ChargeImg = ({
  id = 'uploadImageS1',
  name = 'uploadImageS1',
  setImgLogo,
  defaultImg,
  disabled = false
}) => {
  const [imgSave, setImgSave] = useState(false)

  function changeFileLogo () {
    const fileInput = document.getElementById(id)
    const filePath = fileInput.value
    if (filePath === '') {
      setImgSave(false)
      return false
    }
    const allowedExtensions = /(.png|.jpg|.jpeg|.webp)$/i
    const file = fileInput.files[0]
    if (!allowedExtensions.exec(filePath)) {
      fileInput.value = ''
      return false
    } else {
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          setImgSave(URL.createObjectURL(file))
          setImgLogo && setImgLogo(file)
        }
        reader.readAsDataURL(file)
      }
    }
  }

  function activateInput () {
    if (!disabled) {
      document.getElementById(id).click()
    }
  }
  return (
    <>
      <div onClick={activateInput} className={styles.relative}>
        <input
          type='file'
          id={id}
          name={name}
          style={{ display: 'none' }}
          onChange={(e) => {
            changeFileLogo()
          }}
        />

        <ImagePortrait src={imgSave || defaultImg} classImg={(imgSave || defaultImg) && styles.ImgSave} />
      </div>
    </>
  )
}

export default ChargeImg
