import * as React from 'react'
import { StatusBar, Text } from 'react-native'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'

import styled from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BottomTabNavigator from './navigation/BottomTabNavigator'

const Stack = createStackNavigator()

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  const containerRef = React.useRef()

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        // TODO: remove any unused fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          'baba-pro': require('./assets/fonts/Babapro-Ea4rr.otf'),
          'opensans-light': require('./assets/fonts/OpenSans-Light.ttf'),
          'opensans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return (
    <StyledView>
      <StatusBar 
        barStyle="default" 
        backgroundColor="#667db6" 
        barStyle="light-content" 
      />
      
      {!isLoadingComplete && !props.skipLoadingScreen ? (
        <LoadingView><Text>Loading...</Text></LoadingView>
      ) : (
        <NavigationContainer 
          ref={containerRef} 
        >
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </StyledView>
  )
}

const StyledView = styled.View`
  flex: 1;
`

const LoadingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`