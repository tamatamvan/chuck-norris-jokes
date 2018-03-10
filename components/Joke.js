import React, { Component } from 'react';
import { View, Image, Text } from 'react-native'

class componentName extends Component {
  render() {
    return (
      <View>
        <Image source={{ 
          uri: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png', 
        }}
        style={{
          height: 100,
          width: 100,
        }}/>
        <Text>Di sini ntar joke nya</Text>
      </View>
    );
  }
}

export default componentName;