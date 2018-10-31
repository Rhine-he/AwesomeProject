import React from 'react'
import { View, Button } from 'react-native'
export default class EditScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  componentDidMount () {
    console.log('edit, componentDidMount')
    this.props.navigation.setParams({ increaseCount: this._increaseCount })
  }
  componentWillUnmount () {
    console.log('edit, componentWillUnmount')
  }
  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
