import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Joke from './components/Joke';

const RootStack = StackNavigator({
  Home: {
    screen: Joke
  }
}, {
  initialRouteName: 'Home'
})

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}
