import React from 'react'

// styles
import styles from './PanelOptions.module.scss'
import Image from 'next/image'
import { RadioButton } from '@/components/molecules/RadioButton/RadioButton/RadioButton'

export default function PanelOptions ({ item, selectedModule, setSelectedModule, radio, setRadio, disabled, radioBtn = true }) {
  const handleOptions = () => {
    setSelectedModule('')
    setSelectedModule(item.options)
  }
  return (
    <div className={styles.panelOptions}>
      <div className={selectedModule && selectedModule[0].id === item.id ? styles.selectedModule : styles.moduleOptions} key={item.id} onClick={() => handleOptions()}>
        <div className={styles.cont_title}>
          <Image src={item.image} />
          <p>{item.text}</p>
        </div>
      </div>
      {radioBtn &&
        <div>
          <RadioButton name={`radioBtn${item.id}`} value={radio} setValue={setRadio} disabled />
        </div>}
    </div>
  )
}
