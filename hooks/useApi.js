import { useState, useEffect } from 'react'
import api from '../service/api'

export const useApi = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/Blogs')
        setData(response.data)
      } catch (error) {
        setError(error.message)
      }
    }
    fetchData()
  }, [])

  return { data, error }
}
