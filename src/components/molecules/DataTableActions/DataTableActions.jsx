import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import { Button, ToggleButton } from '@/components/molecules/Button'

export const DataTableActions = ({
  showButton,
  editButton,
  activateButton,
  deleteButton,
  onClickShow = () => { },
  onClickEdit = () => { },
  onClickActivate = () => { },
  onClickDelete = () => { },
  status,
  className = ''
}) => {
  return (
    <div className={`${styles.datatable_actions} ${className}`}>
      {showButton &&
        <div>
          <Button
            type='button'
            icon='i-show'
            onClick={onClickShow}
            tooltip='Ver'
            tooltipOptions={{ position: 'top' }}
            variant='button_show'
            height='30px'
          />
        </div>}
      {editButton &&
        <div>
          <Button
            type='button'
            icon='i-edit'
            onClick={onClickEdit}
            tooltip='Editar'
            tooltipOptions={{ position: 'top' }}
            variant='button_edit'
            height='30px'
          />
        </div>}
      {activateButton &&
        <div>
          <ToggleButton
            onIcon='i-activate'
            offIcon='i-activate'
            checked={status}
            onChange={onClickActivate}
            tooltip={status ? 'Inactivar' : 'Activar'}
            tooltipOptions={{ position: 'top' }}
            variant='primary'
            height='30px'
          />
        </div>}
      {deleteButton &&
        <div>
          <Button
            type='button'
            icon='i-delete'
            onClick={onClickDelete}
            tooltip='Eliminar'
            tooltipOptions={{ position: 'top' }}
            variant='button_delete'
            height='30px'
          />
        </div>}
    </div>
  )
}

DataTableActions.propTypes = {
  showButton: PropTypes.bool,
  editButton: PropTypes.bool,
  activateButton: PropTypes.bool,
  deleteButton: PropTypes.bool,
  status: PropTypes.bool,
  className: PropTypes.string
}
