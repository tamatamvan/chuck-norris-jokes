import React, { Component } from 'react';
import { View, Text, Linking } from 'react-native'

class About extends Component {
  static navigationOptions ={
    title: 'About'
  }
  render() {
    return (
      <View style={jokeCardStyles}>
        <Text style={{
          fontSize: 32,
        }}>Chuck Norris Jokes</Text>
        <Text style={{
          textDecorationLine: 'underline',
          textDecorationStyle: 'solid',
          color: 'blue'
        }}
        onPress={
          () => Linking.openURL('https://github.com/tamatamvan')
        }>by: tamatamvan</Text>
      </View>
    );
  }
}

const jokeCardStyles = {
  backgroundColor: '#ffffff',
  padding: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderStyle: 'solid',
  borderRadius: 8,
  borderWidth: 3,
  margin: 16,
}

export default About;