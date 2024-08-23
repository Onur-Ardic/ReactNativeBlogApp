import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { useApi } from '../../hooks/useApi'
import CoursesCard from '../../components/Index/CoursesCard'
import BlogContext from '../../context/BlogContext'

export default function IndexScreen() {
  const { refresh } = useContext(BlogContext)
  const { data } = useApi(refresh)

  return (
    <View>
      <CoursesCard data={data} />
    </View>
  )
}
