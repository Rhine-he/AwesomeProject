import React from 'react'
import { Text, View } from 'react-native'
export default class SettingsScreen extends React.Component {
  componentDidMount () {
    console.log('settings, componentDidMount')
  }
  componentWillUnmount () {
    console.log('settings, componentWillUnmount')
  }
  render () {
    return (
      <View>
        <Text>Hello, SettingsScreen!</Text>
      </View>
    )
  }
}
