import { Checkbox } from '@/components/molecules/Checkbox'
import Image from 'next/image'
import React, { useState } from 'react'

// styles
import styles from './PanelOptions.module.scss'
import { RadioButton } from '@/components/molecules/RadioButton/RadioButton/RadioButton'

export default function PanelOptions ({ item, checkbox = true, radio, setRadio, radioBtn = true, selectedModule, setSelectedModule, image, disabled }) {
  const [valueCheck, setValueCheck] = useState(item.value)
  const handleChangeCheck = (check) => {
    item.value = check
    setValueCheck(check)
  }

  const handleOptions = () => {
    setSelectedModule('')
    setSelectedModule(item.options)
  }

  return (
    <div className={styles.panelOptions}>
      {checkbox &&
        <div>
          <Checkbox inputId={item.key} name={`checkbox${item.id}`} value={valueCheck} onChange={handleChangeCheck} disabled={disabled} />
        </div>}
      <div className={selectedModule && selectedModule[0].id === item.id ? styles.selectedModule : styles.moduleOptions} key={item.id} onClick={() => handleOptions()}>
        <div className={styles.cont_title}>
          {image &&
            <Image src={item.icon} alt='icon' />}
          <p>{item.text}</p>
        </div>
      </div>
      {radioBtn &&
        <div>
          <RadioButton name={`radioBtn${item.id}`} value={radio} setValue={setRadio} disabled={disabled} />
        </div>}
    </div>
  )
}
