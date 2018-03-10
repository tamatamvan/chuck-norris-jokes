import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Toolbar from './components/Toolbar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar/>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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
