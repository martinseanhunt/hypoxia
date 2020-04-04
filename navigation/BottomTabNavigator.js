import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text } from 'react-native'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import LinksScreen from '../screens/LinksScreen'

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  
  navigation.setOptions({ 
    headerShown: false,
    transparentCard: true,
    cardStyle: { 
      opacity: 1,
      backgroundColor: "transparent" // Not working? 
    }
    //headerTitle: getHeaderTitle(route) 
  })

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Learn"
        component={HomeScreen}
        options={{
          title: 'Learn',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="Guided"
        component={LinksScreen}
        options={{
          title: 'Guided',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-headset" />,
        }}
      />
      <BottomTab.Screen
        name="SelfPractice"
        component={LinksScreen}
        options={{
          title: 'Self Practice',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-rocket" />,
        }}
      />
    </BottomTab.Navigator>
  )
}

// TODO: I don't think I want to use this... it's cool though so keeping for reference for now
function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}
