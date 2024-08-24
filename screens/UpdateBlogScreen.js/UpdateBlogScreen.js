import React, { useState, useContext } from 'react'
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native'
import api from '../../service/api' // API istekleri için
import BlogContext from '../../context/BlogContext'

export default function UpdateBlogScreen({ route, navigation }) {
  const { id, title, description, content } = route.params
  const { setRefresh } = useContext(BlogContext)
  const [blogTitle, setBlogTitle] = useState(title || '')
  const [blogDescription, setBlogDescription] = useState(description || '')
  const [blogContent, setBlogContent] = useState(content || '')

  const handleUpdate = async () => {
    try {
      await api.put(`/Blogs/${id}`, {
        title: blogTitle,
        description: blogDescription,
        content: blogContent,
      })
      Alert.alert('Başarılı', 'Blog başarıyla güncellendi.')
      setRefresh(true)
      navigation.goBack()
    } catch (error) {
      Alert.alert('Hata', 'Blog güncelleme işlemi başarısız oldu.')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Blog Güncelle</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Başlık</Text>
        <TextInput style={styles.input} value={blogTitle} onChangeText={setBlogTitle} />

        <Text style={styles.label}>Açıklama</Text>
        <TextInput style={styles.input} value={blogDescription} onChangeText={setBlogDescription} />

        <Text style={styles.label}>İçerik</Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={10}
          value={blogContent}
          onChangeText={setBlogContent}
        />

        <Button title="Güncelle" onPress={handleUpdate} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
})
