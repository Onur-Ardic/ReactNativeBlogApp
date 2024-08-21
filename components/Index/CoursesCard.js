import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CoursesCard({ data }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.blogCard}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemContent}>{item.content}</Text>
          <Text style={styles.alert}>Devamını okumak için tıklayın</Text>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  blogCard: {
    backgroundColor: '#A7E6FF',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemContent: {
    marginTop: 10,
    marginBottom: 10,
  },
  alert: {
    color: '#FF0000',
    fontSize: 12,
    marginTop: 10,
  },
})
