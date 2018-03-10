import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
    render() {
      return (
        <View style={styles.toolbar}>
          <Text style={{
            color: '#fff'
          }}>Chuck Norris Jokes!</Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    toolbar: {
      backgroundColor: '#DD2C00',
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: 48,
      width: '100%',
      padding: 12
    },
  });