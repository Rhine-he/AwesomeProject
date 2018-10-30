import React from 'react'
import { Button } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import HomeScreen from './pages/home/home'
import ChatScreen from './pages/home/chat'
import EditScreen from './pages/home/edit'

import SettingsScreen from './pages/setting'

// Note: 页面跳转 A->B，B 页面标题栏的返回按钮文案在 A 的 navigationOptions 设置
const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation, navigationOptions, screenProps }) => {
      return {
        title: 'HomeScreen',
        headerBackTitle: 'HomeScreen much too long text for back button from ChatScreen to HomeScreen',
        headerTruncatedBackTitle: 'back to home',
        headerStyle: {
          backgroundColor: navigationOptions.headerTintColor
        },
        headerTintColor: navigationOptions.headerStyle.backgroundColor
      }
    }
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'ChatScreen',
      headerRight: <Button
        color='#fff'
        title={navigation.getParam('user', 'just null')}
        onPress={() => alert('this is a button!')}
      />
    })
  },
  Edit: EditScreen
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
})

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
})

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Settings: SettingsStack
})
export default TabNavigator
