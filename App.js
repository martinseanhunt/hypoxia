import React from 'react'
import { StatusBar, Text } from 'react-native'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import styled from 'styled-components/native'

import BottomTabNavigator from './navigation/BottomTabNavigator'
import useLinking from './navigation/useLinking'

// TODO / NOTE: Not using the stack yet. Allows us to push screens on top of first screen as a stack
const Stack = createStackNavigator()

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  const [initialNavigationState, setInitialNavigationState] = React.useState()
  const containerRef = React.useRef()
  const { getInitialState } = useLinking(containerRef)

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load our initial navigation state
        setInitialNavigationState(await getInitialState())

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
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
      <StyledLinearGradient
        colors={['#aae5f2', '#89f7fe']}
      >
        <StatusBar barStyle="default" backgroundColor="#aae5f2" barStyle="light-content" />
        
        {!isLoadingComplete && !props.skipLoadingScreen ? (
          <LoadingView><Text>Loading...</Text></LoadingView>
        ) : (
          <NavigationContainer 
            ref={containerRef} 
            initialState={initialNavigationState}
          >
                      <Text>Flapper</Text>

            <StyledNavigator>
              <Stack.Screen name="Root" component={BottomTabNavigator} />
            </StyledNavigator>
          </NavigationContainer>
        )}
      </StyledLinearGradient>
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

const StyledLinearGradient = styled(LinearGradient)`
  flex: 1
`

const StyledNavigator = styled(Stack.Navigator)`
  background: green;
`

const StyledScreen = styled(Stack.Screen)`
  background: transparent;
`