import React from 'react'
import { Button } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import HomeScreen from './pages/home'
import ChatScreen from './pages/chat'

// Note: 页面跳转 A->B，B 页面标题栏的返回按钮文案在 A 的 navigationOptions 设置
const SimpleAppNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: (navigation) => ({
      title: 'HomeScreen',
      headerBackTitle: 'HomeScreen much too long text for back button from ChatScreen to HomeScreen',
      headerTruncatedBackTitle: 'back to home'
    })
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: (navigation) => ({
      title: 'ChatScreen',
      headerRight: <Button title='rightBtn' />
    })
  }
})
export default SimpleAppNavigation
