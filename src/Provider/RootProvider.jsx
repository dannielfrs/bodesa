// 'use client'

import { usePostData } from '@/customHooks/useGeneral'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export function RootProvider ({ children }) {
  const [selectCompany, setSelectCompany] = useState('')
  const optionsCompanies = usePostData('ocr/general/select/companies')

  const value = useMemo(() => ({
    optionsCompanies,
    selectCompany,
    setSelectCompany
  }), [selectCompany, optionsCompanies.loading])

  useEffect(() => {
    !optionsCompanies.loading && setSelectCompany(optionsCompanies.data.data.records.find(e => e.text.includes('La Marina')).id)
  }, [optionsCompanies.loading])

  return (
    <RootContext.Provider value={value}>
      {children}
    </RootContext.Provider>
  )
}

export const RootContext = createContext()
export const useRootContext = () => useContext(RootContext)
