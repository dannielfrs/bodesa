import styles from './FieldType.module.scss'
import Image from 'next/image'
import IconDelete from '@/../public/images/icons/IconDelete.svg'
import { Button } from '@/components/molecules/Button'
import { Dropdown } from '@/components/molecules/Dropdown/Dropdown'

export const FieldType = ({ key, id, selectedField, onChangeField, fieldTypeOptions, onClickSelect, handleDelete, readOnly }) => {
  const dropdownId = Math.floor(Math.random() * 1000000000)

  return (
    <div className={styles.row} key={key}>
      <div className={styles.circle}>{id}</div>
      <div style={{ width: '320px' }}>
        <Dropdown
          name={'fieldtype_' + dropdownId}
          value={selectedField}
          onChange={onChangeField}
          placeholder='-Selecciona una opción-'
          options={fieldTypeOptions}
          optionLabel='text'
          optionValue='id'
          readOnly={readOnly}
        />
      </div>
      {!readOnly &&
        <>
          <div className={styles.gray}>
            <Button
              type='button'
              icon='i-point'
              onClick={onClickSelect}
              tooltip='Seleccionar'
              tooltipOptions={{ position: 'top' }}
              disabled={!selectedField}
              variant='gray-bordered'
              height='30px'
            />
          </div>
          <div className={styles.cont_delete}>
            <Button
              type='button'
              onClick={handleDelete}
              tooltip='Eliminar'
              tooltipOptions={{ position: 'top' }}
              variant='button_delete'
            >
              <Image src={IconDelete} alt='eliminar' className={styles.uploadImg} />
            </Button>
          </div>
        </>}
    </div>
  )
}
