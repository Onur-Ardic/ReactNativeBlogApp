import { Button, Pressable, Text, TextInput, View } from 'react-native'
import React, { useState, useContext } from 'react'
import { styles } from './AddBlogStyle'
import api from '../../service/api'
import { useNavigation } from '@react-navigation/native'
import BlogContext from '../../context/BlogContext'

export default function AddBlogForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const navigation = useNavigation()
  const { refresh, setRefresh } = useContext(BlogContext)

  const addBlogHandle = async () => {
    try {
      await api.post('/Blogs', { title, description, content })
      alert('Blog created successfully')
      setTitle('')
      setDescription('')
      setContent('')
      setRefresh((prev) => !prev)
      navigation.goBack()
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <View>
      <Text style={styles.createBlogTitle}>Create A Blog</Text>
      <View>
        <Text style={styles.InputLabel}>Blog Title</Text>
        <TextInput onChangeText={setTitle} value={title} style={styles.Input} />

        <Text style={styles.InputLabel}>Blog Description</Text>
        <TextInput onChangeText={setDescription} value={description} style={styles.Input} />

        <Text style={styles.InputLabel}>Blog Content</Text>
        <TextInput
          onChangeText={setContent}
          value={content}
          multiline
          placeholder="Write your blog content here..."
          style={styles.blogContentInput}
        />

        <Pressable style={styles.createBlogButton}>
          <Button title="Create Blog" color="#000" onPress={addBlogHandle} />
        </Pressable>
      </View>
    </View>
  )
}
