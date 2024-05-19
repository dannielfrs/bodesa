// 'use client'

import { useForm } from 'react-hook-form'
import Image from 'next/image'
import Link from 'next/link'
import styles from './UserProfile.module.scss'
import ImageUpload from '@/components/molecules/Upload/ImageUpload/ImageUpload'
import { FormHookProvider } from '@/components/layouts/Form/FormHookProvider'
import { Card } from '@/components/molecules/Card/Card'
import DataTableLastAccesses from './DataTableLastAccesses/DataTableLastAccesses'
import Navbar from '@/components/organisms/Navbar/Navbar'
import emailIcon from '@/../public/images/icons/email.svg'
import phoneIcon from '@/../public/images/icons/phone.svg'
import arrow from '@/../public/images/icons/arrow_right.svg'
import settings from '@/../public/images/icons/settingsWhite.svg'
import humanResources from '@/../public/images/icons/human_resources.svg'
import ocr from '@/../public/images/icons/ocr.svg'
import avatar from '@/../public/images/avatar/avatar1.jpeg'
import laMarina from '@/../public/images/la_marina.svg'
import elBodegon from '@/../public/images/el_bodegon.svg'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { DecryptData } from '@/utils/Encrypt'

export default function UserProfile () {
  const methods = useForm()
  const [user, setUser] = useState({})

  const onSubmit = () => {}

  const userData = {
    id: 1,
    name: 'Abraham Márquez García',
    email: 'abraham.marquez@witenconsulting.com',
    phone: '+523311292932',
    profile: 'Administrador del sistema',
    deparment: 'Tecnologías y sistemas',
    position: 'Asesor externo',
    code: 'C- E1253',
    curp: 'MAGA840827HJCRRB07',
    rfc: 'MAGA840827IL0'
  }

  const companies = [
    { id: 1, logo: laMarina, name: 'La Marina' },
    { id: 2, logo: elBodegon, name: 'El Bodegón' }
  ]

  const modules = [
    { id: 1, icon: settings, title: 'Configuración y gestión', url: '/system/configuration-and-management/control-panels/users' },
    { id: 2, icon: humanResources, title: 'Recursos humanos', url: '/system/human-resources/control-panels/employees' },
    { id: 3, icon: ocr, title: 'OCR', url: '/system/ocr/control-panels/employee' }
  ]

  useEffect(() => {
    const coockieName = process.env.NEXT_PUBLIC_COOCKIE
    const coockies = Cookies.get(coockieName)
    const decrypt = DecryptData(coockies)
    setUser(decrypt.user)
  }, [])

  return (
    <div className={styles.section}>
      <div className={styles.section_header}>
        <Navbar module='user-profile' user={user} />
      </div>
      <div className={styles.section_body}>
        <FormHookProvider methods={methods} method='POST' onSubmit={onSubmit}>
          <Card className={styles.section_userdata}>
            <div className={styles.section_userdata_left}>
              <div>
                <ImageUpload
                  className={styles.profile_picture}
                  defaultImg={avatar}
                />
              </div>
              <div className={styles.data_profile}>
                <div className={styles.data_user}>
                  <h2>{userData.name}</h2>
                </div>
                <div className={styles.user_info}>
                  <div className={styles.row_colum}>
                    <Image src={emailIcon} alt='email' />
                    <p>{userData.email}</p>
                  </div>
                  <div className={styles.row_colum}>
                    <Image src={phoneIcon} alt='phone' />
                    <p>{userData.phone}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.section_userdata_middle}>
              <div className={styles.colum}>
                <div className={styles.colum_row}>
                  <p>Perfil</p>
                  <h3>{userData.profile}</h3>
                </div>
                <div className={styles.colum_row}>
                  <p>Departamento</p>
                  <h3>{userData.deparment}</h3>
                </div>
              </div>
              <div className={styles.colum}>
                <div className={styles.colum_row}>
                  <p>Puesto</p>
                  <h3>{userData.position}</h3>
                </div>
                <div className={styles.colum_row}>
                  <p>Código de empleado / colaborador</p>
                  <h3>{userData.code}</h3>
                </div>
              </div>
              <div className={styles.colum}>
                <div className={styles.colum_row}>
                  <p>CURP</p>
                  <h3>{userData.curp}</h3>
                </div>
                <div className={styles.colum_row}>
                  <p>RFC</p>
                  <h3>{userData.rfc}</h3>
                </div>
              </div>
            </div>
          </Card>
        </FormHookProvider>
        <div className={styles.section_row}>
          <div className={styles.section_column}>
            <Card className={styles.card}>
              <div className={styles.card_header}>
                <p>Últimos accesos</p>
              </div>
              <div>
                <DataTableLastAccesses />
              </div>
            </Card>
          </div>
          <div className={styles.section_column}>
            <Card className={styles.card}>
              <div className={styles.card_header}>
                <p>Empresas</p>
              </div>
              <div className={styles.card_companies}>
                {companies.map((item) => (
                  <div key={item.id} className={styles.card_item}>
                    <div className={styles.card_item_logo}>
                      <Image src={item.logo} alt='logo' width={140} height={35} />
                    </div>
                    <div className={styles.card_item_name}>{item.name}</div>
                  </div>
                )
                )}
              </div>
            </Card>
          </div>
          <div className={styles.section_column}>
            <Card className={styles.card}>
              <div className={styles.card_header}>
                <p>Módulos</p>
              </div>
              <div className={styles.card_modules}>
                {modules.map((item) => (
                  <Link href={item.url} key={item.id} className={styles.link}>
                    <div className={styles.link_content}>
                      <div className={styles.link_icon}>
                        <Image src={item.icon} alt='icon' />
                      </div>
                      <h3>{item.title}</h3>
                    </div>
                    <div>
                      <Image src={arrow} alt='arrow' />
                    </div>
                  </Link>
                )
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
