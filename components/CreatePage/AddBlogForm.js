import { Button, Pressable, Text, TextInput, View } from 'react-native'
import React from 'react'
import { styles } from './AddBlogStyle'

export default function AddBlogForm() {
  return (
    <View>
      <Text style={styles.createBlogTitle}>Create A Blog</Text>

      <View>
        <Text style={styles.InputLabel}>Blog Title</Text>
        <TextInput style={styles.Input} />

        <Text style={styles.InputLabel}>Blog Description</Text>
        <TextInput style={styles.Input} />

        <Text style={styles.InputLabel}>Blog Content</Text>
        <TextInput
          multiline={true}
          placeholder="Write your blog content here..."
          style={styles.blogContentInput}
        />

        <Pressable style={styles.createBlogButton}>
          <Button title="Create Blog" color="#000" onPress={() => console.log('Blog Created')} />
        </Pressable>
      </View>
    </View>
  )
}
