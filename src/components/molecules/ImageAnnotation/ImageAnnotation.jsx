// 'use client'

import { useState } from 'react'
import styles from './styles.module.scss'
import Annotation from 'react-image-annotation'
import { RectangleSelector } from 'react-image-annotation/lib/selectors'
import { Button } from '@/components/molecules/Button'

export const ImageAnnotation = ({ src, annotations, setAnnotations, currentAnnotation, disableAnnotation, height = 'auto', width = '100%' }) => {
  const [annotation, setAnnotation] = useState({})
  const type = RectangleSelector.TYPE

  const onChange = (annotation) => {
    setAnnotation(annotation)
  }

  const onSubmit = (annotation) => {
    const { geometry } = annotation
    setAnnotation({})
    const exists = annotations.some((item) => item.data.id === currentAnnotation.data.id)
    if (exists) {
      const index = annotations.findIndex((item) => item.data.id === currentAnnotation.data.id)
      annotations.splice(index, 1, {
        ...currentAnnotation,
        geometry
      })
    } else {
      setAnnotations(annotations.concat({
        ...currentAnnotation,
        geometry
      }))
    }
  }

  const renderEditor = (props) => {
    const { geometry } = props.annotation
    if (!geometry) return null
    return (
      <div className={styles.imageannotation_editor} style={{ left: `${geometry.x}%`, top: `${geometry.y + geometry.height}%` }}>
        <div style={{ width: '130px' }}>
          <Button
            type='button'
            label='Guardar'
            variant='primary'
            height='35px'
            onClick={() => onSubmit(props.annotation)}
          />
        </div>
      </div>
    )
  }

  const renderHighlight = ({ annotation, active }) => {
    const { geometry } = annotation
    if (!geometry) return null
    return (
      <>
        <div
          key={annotation.data.id}
          className={styles.imageannotation_highlight}
          style={{ left: `${geometry.x}%`, top: `${geometry.y}%`, height: `${geometry.height}%`, width: `${geometry.width}%` }}
        >
          <div className={styles.imageannotation_highlight_label}>
            {annotation.data.id}
          </div>
        </div>
      </>
    )
  }

  return (
    <Annotation
      src={src}
      alt='document'
      annotations={annotations.filter((item) => item.geometry !== undefined)}
      type={type}
      value={annotation}
      onChange={onChange}
      allowTouch
      disableAnnotation={disableAnnotation}
      renderEditor={renderEditor}
      renderHighlight={renderHighlight}
      className={styles.imageannotation}
      style={{ height, width }}
    />
  )
}
