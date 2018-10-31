import React from 'react'
import { Button, Text, View } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import HomeScreen from './pages/home/home'
import ChatScreen from './pages/home/chat'
import EditScreen from './pages/home/edit'

import MainScreen from './pages/setting/main'
import ModalScreen from './pages/setting/modal'

const customTitle = () => (
  <View>
    <Text>It's EditScreen</Text>
  </View>
)

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
  Edit: {
    screen: EditScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: customTitle,
        // title: 'EditScreen',
        headerRight: (
          <Button
            onPress={() => navigation.getParam('increaseCount')}
            title='+1'
            color='#fff'
          />
        )
      }
    }
  }
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
  Main: {
    screen: MainScreen,
    navigationOptions: ({ navigation }) => {
      const params = navigation.state.params || {}
      return {
        title: 'Main',
        headerRight: (
          <Button
            title='show modal'
            color='#fff'
            onPress={() => navigation.navigate('Modal')}
          />
        )
      }
    }
  },
  Modal: ModalScreen
}, {
  initialRouteName: 'Main',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
}, {
  mode: 'modal',
  headerMode: 'none'
})

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack
  }
)
export default TabNavigator
