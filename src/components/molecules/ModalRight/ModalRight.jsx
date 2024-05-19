import React from 'react'
// styles🐱‍👤
import styles from './ModalRight.module.scss'

// components🔨
import { InputText } from '../InputText/InputText/InputText'
import { InputTextArea } from '../InputTextArea'
import { Button } from '../Button'

const ModalRight = ({ setOpenModal, name, methods, disabled }) => {
  const inputCode = {
    name: 'code',
    type: 'number',
    label: 'Código',
    readOnly: disabled,
    placeholder: 'Código',
    required: true,
    error: methods.formState.errors.nameEmail
  }

  const InputComent = {
    name: 'function',
    label: 'Función / Desempeño',
    placeholder: 'Función / Desempeño',
    rows: 5,
    variant: 'primary',
    readOnly: disabled,
    optional: true,
    height: '150px',
    width: '100%'
  }

  return (
    <>
      <div className={styles.ModalRight}>
        <div className={styles.header_cont}>
          <div className={styles.title_txt}>{name}</div>
          <div className={!disabled ? styles.left_part : styles.oneBtn}>
            <div style={{ width: '100px' }}>
              <Button
                variant='secondary'
                type='button'
                label='Cerrar'
                onClick={() => { setOpenModal(false) }}
                height='35px'
              />
            </div>
            <div style={{ width: '100px' }}>
              {!disabled &&
                <Button
                  variant='primary'
                  label='Guardar'
                  onClick={() => { setOpenModal(false) }}
                  height='35px'
                />}
            </div>
          </div>
        </div>
        <div className={styles.TaxData_content}>
          <div className={styles.w195}>
            <InputText {...inputCode} />
          </div>
          <div className={styles.colum}>
            <InputTextArea {...InputComent} />
          </div>
        </div>
      </div>
      <div className={styles.ModalRightBackground} onClick={() => { setOpenModal(false) }} />
    </>
  )
}
export default ModalRight
