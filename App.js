/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react'
// import {Platform, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'

class HomeScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Welcome'
  // }
  render () {
    return <Text>Hello, Navigation!</Text>
  }
}

const SimpleApp = createStackNavigator({
  Home: { screen: HomeScreen }
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
