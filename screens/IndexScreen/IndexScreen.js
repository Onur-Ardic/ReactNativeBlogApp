import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { useApi } from '../../hooks/useApi'
import CoursesCard from '../../components/Index/CoursesCard'

export default function IndexScreen() {
  const { data } = useApi()

  return (
    <View>
      <CoursesCard data={data} />
    </View>
  )
}

const styles = StyleSheet.create({})
