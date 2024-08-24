import { Pressable, StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'
import api from '../../service/api'
import BlogContext from '../../context/BlogContext'

export default function DeleteButton({ id }) {
  const { setRefresh } = useContext(BlogContext)

  const handleDelete = async (id) => {
    try {
      await api.delete(`/Blogs/${id}`)
      setRefresh(true)
    } catch (error) {
      console.error('Blog silme işlemi başarısız oldu:', error)
    }
  }

  return (
    <View>
      <Pressable style={styles.deleteButton} onPress={() => handleDelete(id)}>
        <AntDesign name="delete" size={24} color="black" />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  deleteButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
})
