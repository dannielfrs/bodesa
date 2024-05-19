import { useEffect, useState } from 'react'
import { GetData, PostData } from '@/services/general'

export function useGetData (url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    GetData(url, setData, setLoading)
  }, [])

  return { data, loading, setData }
}

export function usePostData (url, form) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    PostData(url, form, setData, setLoading)
  }, [])

  return { data, loading, setData }
}

export function useGetDataRefresh (url, id, refresh) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) GetData(url, setData, setLoading)
  }, [id, refresh])

  return { data, loading, setData }
}

export function usePostDataRefresh (url, id, refresh) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const form = {
    company_id: id
  }

  useEffect(() => {
    if (id) PostData(url, form, setData, setLoading)
  }, [id, loading, refresh])

  return { data, loading, setData, setLoading }
}

export function usePostTemplateCodes (url, id, establishment, documentType) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const form = {
    company_id: id,
    establishment,
    document_type: documentType
  }
  useEffect(() => {
    if (id && establishment && documentType) PostData(url, form, setData, setLoading)
  }, [id, establishment, documentType, loading])

  return { data, loading, setData, setLoading }
}

export function usePostVersions (url, id, templateId) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const form = {
    company_id: id
  }
  useEffect(() => {
    if (id && templateId) PostData(url, form, setData, setLoading)
  }, [id, templateId, loading])

  return { data, loading, setData, setLoading }
}
