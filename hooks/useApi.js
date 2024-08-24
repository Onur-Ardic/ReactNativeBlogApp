import { useState, useEffect, useContext } from 'react'
import api from '../service/api'
import BlogContext from '../context/BlogContext'

export const useApi = (refresh) => {
  const { data, setData } = useContext(BlogContext)
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
  }, [refresh])

  return { data, error }
}
