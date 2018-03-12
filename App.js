import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Joke from './components/Joke';
import About from './components/About';

const RootStack = StackNavigator({
  Home: {
    screen: Joke
  },
  About: {
    screen: About
  },
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#dd2c00',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}
