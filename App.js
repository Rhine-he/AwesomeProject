/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @author: Rhine
 * @time: 2018/10/23
 * @format
 * @flow
 */ 

// import React, {Component} from 'react'
// import {Platform, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createStackNavigator } from 'react-navigation'

class HomeScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Welcome'
  // }
  render () {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Rhine' })}
          title='Chat with somebody'
        />
      </View>
    )
  }
}
class ChatScreen extends React.Component {
  // static navigationOptions = ({navigation}) => ({
  //   title: `Chat with ${navigation.state.params.user}`
  // })
  render () {
    const { params } = this.props.navigation.state
    return <View>
      <Text>Chat with {params.user}</Text>
    </View>
  }
}

const SimpleApp = createStackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen }
})

export default class App extends React.Component {
  render () {
    return <View style={styles.container}>
      <SimpleApp />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
})
