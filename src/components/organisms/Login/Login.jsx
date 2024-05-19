'use client'

import ReCAPTCHA from 'react-google-recaptcha'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Login.module.scss'
import { InputText } from '@/components/molecules/InputText/InputText/InputText'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { InputPassword } from '@/components/molecules/InputPassword'
import useWindowSize from '@/customHooks/useWindowSize'
import { Button } from '@/components/molecules/Button'
import Logo from '@/../public/images/logo.svg'
import logoBackground from '@/../public/images/logo_background.svg'
import close from '@/../public/images/icons/close.svg'
import { LoginValidate } from '@/services/login'

export default function Login () {
  const methods = useForm()
  const router = useRouter()
  const windowsSize = useWindowSize()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const siteKey = process.env.NEXT_PUBLIC_MIX_KEY_CAPTCHA

  const [captchaValidated, setCaptchaValidated] = useState(false)

  const onSubmit = (data) => {
    LoginValidate(data, router, setError, setLoading)
  }

  const inputTextUser = {
    name: 'user',
    type: 'text',
    label: 'Usuario',
    placeholder: 'Usuario',
    required: true,
    rules: {
      required: 'El Usuario es requerido.'
    },
    error: methods.formState.errors.user
  }

  const inputPassword = {
    name: 'password',
    label: 'Contraseña',
    placeholder: 'Contraseña',
    feedback: false,
    required: true,
    visible: true,
    rules: {
      required: 'La contraseña es requerida.'
      // minLength: {
      //   value: 6,
      //   message: 'La contraseña debe tener al menos 6 caracteres.'
      // }
    },
    error: methods.formState.errors.user
  }

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
                <div className={styles.form_input}>
                  <InputText {...inputTextUser} />
                </div>
                <div className={styles.form_input}>
                  <InputPassword {...inputPassword} />
                </div>
                <div className={styles.form_recover}>
                  <Link href='#'>Recuperar contraseña</Link>
                </div>
              </div>

              <div className={styles.cont_captcha}>
                <ReCAPTCHA
                  sitekey={siteKey}
                  onChange={() => setCaptchaValidated(true)}
                />
              </div>
              <div className={styles.section_footer}>
                <div>
                  <Button
                    label='Ingresar'
                    outlined
                    disabled={!captchaValidated || loading}
                    className='primary'
                  />
                </div>
              </div>
              {error &&
                <div className={styles.cont_error}>
                  <div className={styles.errorMsg}>
                    <Image src={close} alt='close' />
                    <p className={styles.txtError}>Credenciales incorrectas</p>
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
                  <h2 style={{ fontSize: '20px' }}>Sistema Integral de Tecnologias</h2>
                </div>
                <div className={styles.titles}>
                  <h2>Ingresar</h2>
                </div>
              </div>
              <div className={styles.form_input}>
                <InputText {...inputTextUser} />
              </div>
              <div className={styles.form_input}>
                <InputPassword {...inputPassword} />
              </div>
              <div className={styles.form_recover}>
                <Link href='#'>Recuperar contraseña</Link>
              </div>
            </div>
            <div className={styles.cont_captcha}>
              <ReCAPTCHA
                sitekey={siteKey}
                onChange={() => setCaptchaValidated(true)}
              />
            </div>
            <div className={styles.section_footer}>
              <div>
                <Button
                  label='Ingresar'
                  outlined
                  disabled={!captchaValidated || loading}
                  variant='primary'
                />
              </div>
            </div>
            {error &&
              <div className={styles.cont_error}>
                <div className={styles.errorMsg}>
                  <Image src={close} alt='close' />
                  <p className={styles.txtError}>Credenciales incorrectas</p>
                </div>
              </div>}
          </FormHookProvider>
        </div>}
    </div>
  )
}
