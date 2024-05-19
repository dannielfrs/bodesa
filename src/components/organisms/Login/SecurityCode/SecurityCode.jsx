'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import styles from './SecurityCode.module.scss'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import useWindowSize from '@/customHooks/useWindowSize'
import { Button } from '@/components/molecules/Button'
import Logo from '@/../public/images/logo.svg'
import logoBackground from '@/../public/images/logo_background.png'
import close from '@/../public/images/icons/close.svg'
import { InputTextCode } from '@/components/molecules/InputText/InputTextCode/InputTextCode'
import { CodeValidate } from '@/services/login'

export default function SecurityCode () {
  const methods = useForm()
  const router = useRouter()
  const windowsSize = useWindowSize()
  const [validate, setValidate] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [codeValues, setCodeValues] = useState(['', '', '', '', ''])

  const onSubmit = (data) => {
    const code = `${data.code1}${data.code2}${data.code3}${data.code4}${data.code5}`
    CodeValidate(code, router, setError, setLoading)
  }

  useEffect(() => {
    const values = codeValues.filter((item) => item !== '')
    if (values.length === 5) setValidate(false)
  }, [codeValues])

  const handleInputChange = (e, index) => {
    const newValue = e.target.value
    const array = [...codeValues]
    array[index] = newValue
    setCodeValues(array)
    if (newValue.length === 1 && e.target.nextElementSibling !== null) {
      e.target.nextElementSibling?.focus()
    } else if (newValue.length === 1 && e.target.nextElementSibling === null) {
      e.target.blur()
    }
  }

  const handleOnPaste = (e) => {
    const textPasted = e.clipboardData.getData('text/plain')
    setCodeValues(textPasted.split('').slice(0, 5))
    e.target.blur()
  }

  const InputTextCode1 = useMemo(() => ({
    name: 'code1',
    value: codeValues[0],
    onChange: (e) => handleInputChange(e, 0),
    onPaste: handleOnPaste,
    height: '45px',
    rules: { required: true }
  }), [codeValues])

  const InputTextCode2 = useMemo(() => ({
    name: 'code2',
    value: codeValues[1],
    onChange: (e) => handleInputChange(e, 1),
    onPaste: handleOnPaste,
    height: '45px',
    rules: { required: true }
  }), [codeValues])

  const InputTextCode3 = useMemo(() => ({
    name: 'code3',
    value: codeValues[2],
    onChange: (e) => handleInputChange(e, 2),
    onPaste: handleOnPaste,
    height: '45px',
    rules: { required: true }
  }), [codeValues])

  const InputTextCode4 = useMemo(() => ({
    name: 'code4',
    value: codeValues[3],
    onChange: (e) => handleInputChange(e, 3),
    onPaste: handleOnPaste,
    height: '45px',
    rules: { required: true }
  }), [codeValues])

  const InputTextCode5 = useMemo(() => ({
    name: 'code5',
    value: codeValues[4],
    onChange: (e) => handleInputChange(e, 4),
    onPaste: handleOnPaste,
    height: '45px',
    rules: { required: true }
  }), [codeValues])

  return (
    <div className={styles.section}>
      {windowsSize.width > 1025 &&
        <div className={styles.section_container}>
          <div className={`${styles.fifty_percent} ${styles.w_42}`}>
            <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
              <div className={styles.form}>
                <div className={styles.Header}>
                  <div className={styles.titles}>
                    <h2 style={{ fontSize: '20px' }}>Sistema Integral de Tecnologias</h2>
                  </div>
                  <div className={styles.titles}>
                    <h2>Ingresar</h2>
                  </div>
                </div>
                <div className={styles.security_code}>
                  <div className={styles.cont_titles}>
                    <p className={styles.title_sc}>Código de seguridad</p>
                    <span className={styles.span_sc}>Obligatorio</span>
                  </div>
                  <div className={styles.container_code_validation}>
                    <InputTextCode {...InputTextCode1} />
                    <InputTextCode {...InputTextCode2} />
                    <InputTextCode {...InputTextCode3} />
                    <InputTextCode {...InputTextCode4} />
                    <InputTextCode {...InputTextCode5} />
                  </div>
                </div>
              </div>
              <div className={styles.section_footer}>
                <div>
                  <Button
                    label='Validar'
                    type='submit'
                    outlined
                    disabled={validate || loading}
                    variant='primary'
                  />
                </div>
                <div>
                  <Button
                    label='Regresar'
                    type='submit'
                    outlined
                    variant='secondary'
                    onClick={() => router.push('/')}
                  />
                </div>
              </div>
              {error &&
                <div className={styles.cont_error}>
                  <div className={styles.errorMsg}>
                    <Image src={close} alt='close' />
                    <p className={styles.txtError}>Código incorrecto</p>
                  </div>
                </div>}
            </FormHookProvider>
          </div>
          <div className={`${styles.fifty_percent} ${styles.w_60}`}>
            <div className={styles.background}>
              <div>
                <Image src={Logo} alt='Background' className={styles.img_fifty} />
              </div>
              <div>
                <Image src={logoBackground} alt='Background' className={styles.background_img} />
              </div>
              <div className={styles.titles_background}>
                <p style={{ fontSize: '16px' }}>V1.0 2023</p>
              </div>
            </div>
          </div>
        </div>}
      {windowsSize.width < 1025 &&
        <div className={styles.responsiveView}>
          <div className={styles.backgroundResponsive}>
            <div className={styles.cont_img_resp}>
              <Image src={Logo} alt='Background' className={styles.img_fifty} />
            </div>
            <div className={styles.titles_background}>
              <p style={{ fontSize: '18px' }}>V1.0 2023</p>
            </div>
          </div>
          <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
            <div className={styles.form}>
              <div className={styles.Header_responsive}>
                <div className={styles.titles}>
                  <h2 className={styles.H2Responsive}>Sistema Integral de Tecnologias</h2>
                </div>
                <div className={styles.titles}>
                  <h2>Ingresar</h2>
                </div>
              </div>
              <div className={styles.security_code}>
                <div className={styles.cont_titles}>
                  <p className={styles.title_sc}>Código de seguridad</p>
                  <span className={styles.span_sc}>Obligatorio</span>
                </div>
                <div className={styles.container_code_validation}>
                  <InputTextCode {...InputTextCode1} />
                  <InputTextCode {...InputTextCode2} />
                  <InputTextCode {...InputTextCode3} />
                  <InputTextCode {...InputTextCode4} />
                  <InputTextCode {...InputTextCode5} />
                </div>
              </div>
            </div>
            <div className={styles.section_footer}>
              <div>
                <Button
                  label='Validar'
                  outlined
                  disabled={validate}
                  className='primary'
                />
              </div>
              <div>
                <Button
                  label='Regresar'
                  type='submit'
                  outlined
                  variant='secondary'
                  onClick={() => router.push('/')}
                />
              </div>
            </div>
            {error &&
              <div className={styles.cont_error}>
                <div className={styles.errorMsg}>
                  <Image src={close} alt='close' />
                  <p className={styles.txtError}>Código incorrecto</p>
                </div>
              </div>}
          </FormHookProvider>
        </div>}
    </div>
  )
}
