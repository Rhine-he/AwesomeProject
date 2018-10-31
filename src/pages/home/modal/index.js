import React from 'react'
import { View, Text, Button } from 'react-native'

export default class ModalScreen extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal</Text>
        <Button title='dismiss' onPress={() => this.props.navigation.goBack()} />
      </View>
    )
  }
}
