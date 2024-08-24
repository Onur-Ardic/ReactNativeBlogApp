import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import api from '../../service/api'

export default function BlogDetailScreen({ route }) {
  const { id } = route.params
  const [blogDetail, setBlogDetail] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await api.get(`/Blogs/${id}`)
        setBlogDetail(response.data)
      } catch (error) {
        setError(error)
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogDetail()
  }, [id])

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogDetail.title}</Text>
      <Text style={styles.description}>{blogDetail.description}</Text>
      <Text style={styles.content}>{blogDetail.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    color: '#333',
  },
})
