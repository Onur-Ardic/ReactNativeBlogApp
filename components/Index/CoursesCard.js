import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function CoursesCard({ data }) {
  const navigation = useNavigation()
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Blog', {
              id: item.id,
            })
          }
        >
          <View style={styles.blogCard}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemContent}>{item.content}</Text>
            <Text style={styles.alert}>Devamını okumak için tıklayın</Text>
          </View>
        </TouchableOpacity>
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
