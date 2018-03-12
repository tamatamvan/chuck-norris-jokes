import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Joke from './components/Joke';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Joke/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
  },
});
