/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @author: Rhine
 * @time: 2018/10/23
 * @format
 * @flow
 */

import React from 'react'
import { StyleSheet, View } from 'react-native'
import SimpleAppNavigation from './src/entry'
export default class App extends React.Component {
  render () {
    return <View style={styles.container}>
      <SimpleAppNavigation />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
})
