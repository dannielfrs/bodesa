import { Tooltip } from 'primereact/tooltip'
import React, { useState } from 'react'
import Image from 'next/image'

// styles📸
import styles from './Scheme.module.scss'

// components
import { SchemeComponent } from '@/components/molecules/SchemeComponent/SchemeComponent'
import { Card } from '@/components/molecules/Card/Card'

// assets
import avatar from '@/../public/images/avatar/default_user.jpg'
import pdf from '@/../public/images/icons/icon_pdf.png'

export default function Scheme () {
  const [selection, setSelection] = useState([])
  const [data] = useState([
    {
      expanded: true,
      type: 'person',
      data: {
        image: avatar,
        name: 'Alejandro Díaz García',
        title: 'Director general'
      },
      children: [
        {
          expanded: true,
          type: 'person',
          data: {
            image: avatar,
            name: 'Sofia Rodríguez Pérez',
            title: 'Director de operaciones'
          }
        },
        {
          expanded: true,
          type: 'person',
          data: {
            image: avatar,
            name: 'Valentina López Mar...',
            title: 'Director comercial'
          }
        },
        {
          expanded: true,
          type: 'person',
          data: {
            image: avatar,
            name: 'Juan Martínez Sánchez',
            title: 'Director de finanzas'
          }
        },
        {
          expanded: true,
          type: 'person',
          data: {
            image: avatar,
            name: 'María Fernández Gon...',
            title: 'Director de tesorería'
          }
        },
        {
          expanded: true,
          type: 'person',
          data: {
            image: avatar,
            name: 'Carlos Silva Ramírez',
            title: 'Director de tecnología'
          },
          children: [
            {
              expanded: true,
              type: 'person',
              data: {
                image: avatar,
                name: 'Rubén Hernández',
                title: 'Jefe de infraestructura'
              }
            },
            {
              expanded: true,
              type: 'person',
              data: {
                image: avatar,
                name: 'Raúl Huerta Silva',
                title: 'Jefe de ciberseguridad'
              }
            },
            {
              expanded: true,
              type: 'person',
              data: {
                image: avatar,
                name: 'Rosalba Loera Mora',
                title: 'Supervisor de soporte'
              }
            }
          ]
        },
        {
          expanded: true,
          type: 'person',
          data: {
            image: avatar,
            name: 'Laura González López',
            title: 'Director de recursos humanos'
          }
        },
        {
          expanded: true,
          type: 'person',
          data: {
            image: avatar,
            name: 'Andrés Castro Rodriguez',
            title: 'Director jurídico'
          }
        }
      ]
    }
  ])

  const nodeTemplate = (node) => {
    if (node.type === 'person') {
      return (
        <div className={styles.flex_colum}>
          <div className={styles.cardChart}>
            <Image src={node.data.image} alt={node.data.name} className={styles.nodeImage} />
            <span className={styles.fontBold}>{node.data.name}</span>
            <span className={styles.dataTitle}>{node.data.title}</span>
          </div>
        </div>
      )
    }
  }
  return (
    <div>
      <Card className={styles.card_scheme}>
        <div className={styles.iconPdf}>
          <Tooltip target='.pdf' className={styles.tooltip_excel}>
            <div className={styles.btnTooltip}>
              <p>Descargar pdf</p>
            </div>
          </Tooltip>
          <Image src={pdf} alt='pdf' className='pdf' />
        </div>
        <SchemeComponent data={data} selection={selection} onSelectionChange={(e) => setSelection(e.data)} nodeTemplate={nodeTemplate} />
      </Card>
    </div>
  )
}
