import React from 'react'
import { View, Text, Button } from 'react-native'
export default class ChatScreen extends React.Component {
  componentDidMount () {
    console.log('chat, componentDidMount')
  }
  componentWillUnmount () {
    console.log('chat, componentWillUnmount')
  }
  render () {
    const { params } = this.props.navigation.state
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Chat with {params.user}</Text>
        <Button
          title='Go to Edit Screen...'
          onPress={() => this.props.navigation.push('Edit')}
        />
        <Button
          title='Go to Home'
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title='Go back'
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    )
  }
}
