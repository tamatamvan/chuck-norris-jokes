import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
    render() {
      return (
        <View style={styles.toolbar}>
          <Text style={{
            color: '#fff'
          }}>Ini nanti jadi toolbar</Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    toolbar: {
      backgroundColor: '#2962FF',
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: 48,
      width: '100%',
      padding: 12
    },
  });