import React from 'react'
import { View, Button } from 'react-native'
export default class EditScreen extends React.Component {
  componentDidMount () {
    console.log('edit, componentDidMount')
  }
  componentWillUnmount () {
    console.log('edit, componentWillUnmount')
  }
  render () {
    return (
      <View>
        <Button
          title='pop to top, Home ...'
          onPress={() => this.props.navigation.popToTop()}
        />
        <Button
          title='pop to top, Home, again ...'
          onPress={() => this.props.navigation.pop(2)}
        />
        <Button
          title='navigate to Home'
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
