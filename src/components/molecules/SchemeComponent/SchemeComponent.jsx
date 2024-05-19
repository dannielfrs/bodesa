import React from 'react'
import { OrganizationChart } from 'primereact/organizationchart'

// style
import styles from './SchemeComponent.module.scss'

export const SchemeComponent = ({
  data,
  selection,
  onSelectionChange,
  nodeTemplate,
  variant
}) => {
  return (
    <div className={`${styles.organizationChart} ${styles[variant]}`}>
      <OrganizationChart value={data} selectionMode='multiple' selection={selection} onSelectionChange={onSelectionChange} nodeTemplate={nodeTemplate} />
    </div>
  )
}
