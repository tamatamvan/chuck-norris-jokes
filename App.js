import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Toolbar from './components/Toolbar';
import Joke from './components/Joke';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar/>
        <Joke/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
  },
});
