import React from 'react'
import { Text, View } from 'react-native'

export default class MainScreen extends React.Component {
  componentDidMount () {
    console.log('settings, componentDidMount')
  }
  componentWillUnmount () {
    console.log('settings, componentWillUnmount')
  }
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello, SettingsScreen!</Text>
      </View>
    )
  }
}
