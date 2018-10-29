import React from 'react'
import { View, Text } from 'react-native'
export default class ChatScreen extends React.Component {
  render () {
    const { params } = this.props.navigation.state
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    )
  }
}
