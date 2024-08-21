import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import { BlogProvider } from './context/BlogContext'
import IndexScreen from './screens/IndexScreen/IndexScreen'
import CreateScreen from './screens/CreateScreen/CreateScreen'

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Index" component={IndexScreen} />
          <Stack.Screen name="Create Blog" component={CreateScreen} />
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
