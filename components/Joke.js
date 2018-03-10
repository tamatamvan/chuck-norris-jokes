import React, { Component } from 'react';
import { View, Image, Text } from 'react-native'
import axios from 'axios'

class componentName extends Component {
  constructor () {
    super()
    this.state = {
      loading: false,
      error: false,
      joke: {
        icon_url: '',
        id: '',
        url: '',
        value: '',
      },
    }
  }

  componentWillMount () {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(({data}) => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
  }

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