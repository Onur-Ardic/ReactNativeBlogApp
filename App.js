import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import { BlogProvider } from './context/BlogContext'
import IndexScreen from './screens/IndexScreen/IndexScreen'
import CreateScreen from './screens/CreateScreen/CreateScreen'
import BlogDetailScreen from './screens/BlogDetail/BlogDetailScreen'
import UpdateBlogScreen from './screens/UpdateBlogScreen.js/UpdateBlogScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Anasayfa"
            component={IndexScreen}
            options={({ navigation }) => ({
              headerTitle: 'Bloglar',
              headerRight: () => (
                <FontAwesome6
                  onPress={() => navigation.navigate('Create Blog')}
                  name="add"
                  size={24}
                  color="#fff"
                />
              ),
              headerTitleStyle: {
                fontSize: 20,
              },
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
            })}
          />
          <Stack.Screen name="Create Blog" component={CreateScreen} />
          <Stack.Screen
            name="Blog"
            component={BlogDetailScreen}
            options={({ route, navigation }) => ({
              headerRight: () => (
                <FontAwesome6
                  onPress={() =>
                    navigation.navigate('Update Blog', {
                      id: route.params.id,
                    })
                  }
                  name="edit"
                  size={24}
                  color="#fff"
                />
              ),
              headerTitleStyle: {
                fontSize: 20,
              },
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
            })}
          />
          <Stack.Screen name="Update Blog" component={UpdateBlogScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
