import React from 'react'
import { Text, View, Button } from 'react-native'
export default class HomeScreen extends React.Component {
  render () {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Rhine' })}
          title='Touch to chat with somebody'
        />
      </View>
    )
  }
}
