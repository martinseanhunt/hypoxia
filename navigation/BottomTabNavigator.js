import * as React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import LinksScreen from '../screens/LinksScreen'

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'

export default function BottomTabNavigator({ navigation, route }) {
  // These options are effecting the currently rendered screen from the parent
  navigation.setOptions({ 
    // TODO: I'm really not sure what I want to do about the header component yet...
    // use a custom compoent, style this one and hide it in certain cases
    // or just don't use it at all... Let's see ;)

    /* 
      could use headerTransparent
      Defaults to false. If true, the header will not have a background unless you explicitly provide it with headerBackground. The header will also float over the screen so that it overlaps the content underneath.

      This is useful if you want to render a semi-transparent header or a blurred background.
    */
    headerShown: false,
    headerTitle: getHeaderTitle(route)
  })

  return (
    <BottomTab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
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

// TODO: If I don't use the built in header or a custom component this should be removed
function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}
