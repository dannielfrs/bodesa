import Image from 'next/image'

// styles🎡
import styles from './ActionsBody.module.scss'
// components 🔨
import { Button, ToggleButton } from '../Button'
// assets📸
// assets📸
import IconDelete from '@/../public/images/icons/IconDelete.svg'
import iconEdit from '@/../public/images/icons/IconEdit.svg'
import iconShow from '@/../public/images/icons/IconShow.svg'
import { useRouter } from 'next/navigation'

export const ActionsBody = ({ actionShow, actionEdit, actionActBtn, actionDelete, urlShow, urlEdit, onDelete, rowDataActive, handleActive, nameModal, setOpenModal, setOpenModalTitle }) => {
  const router = useRouter()

  const icons = {
    show: iconShow,
    edit: iconEdit,
    delete: IconDelete
  }

  // Función para los botones
  const renderButton = (action, tooltipText, onClickHandler, variant, disabled) => {
    return (
      disabled && (
        <Button
          type='button'
          tooltip={tooltipText}
          tooltipOptions={{ position: 'top' }}
          variant={variant}
          onClick={onClickHandler}
        >
          <Image src={icons[action]} alt={action} className={styles.uploadImg} />
        </Button>
      )
    )
  }

  const handleShow = (url, show) => {
    if (nameModal) {
      setOpenModal(true)
      setOpenModalTitle && setOpenModalTitle(`${show ? 'Ver' : 'Editar'} ${nameModal}`)
    } else {
      router.push(url)
    }
  }

  return (
    <>
      <div className={styles.section_table_actions}>
        <div className={styles['cont-btn']}>
          {renderButton('show', 'Ver', () => handleShow(urlShow, true), 'button_show', actionShow)}
          {renderButton('edit', 'Editar', () => handleShow(urlEdit), 'button_edit', actionEdit)}
          {actionActBtn &&
            <div
              className='custom-tooltip-btn'
              data-pr-tooltip={rowDataActive ? 'Inactivar' : 'Activar'}
              data-pr-position='top'
            >
              <ToggleButton
                onIcon='i-activar'
                offIcon='i-activar'
                checked={rowDataActive}
                onChange={handleActive}
                variant='primary'
                tooltip={rowDataActive ? 'Inactivar' : 'Activar'}
                tooltipOptions={{ position: 'top' }}
              />
            </div>}
          {renderButton(
            'delete',
            'Eliminar',
            onDelete,
            'button_delete',
            actionDelete
          )}
        </div>
      </div>
    </>
  )
}
