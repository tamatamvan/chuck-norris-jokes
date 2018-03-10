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

  handleData = joke => {
    this.setState({
      joke: joke,
      loading: false
    })
  }

  componentDidMount () {
    this.setState({
      loading: true,
    })
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(({data}) => {
        console.log(data);
        this.handleData(data)
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    if (this.state.loading) {
      return (
        <View>
          <Text>Getting a joke for you . . </Text>
        </View>
      );
    } else {
      return (
        <View>
          <Image source={{ 
            uri: this.state.joke.icon_url, 
          }}
          style={{
            height: 100,
            width: 100,
          }}/>
          <Text>{ this.state.joke.value }</Text>
        </View>
      );
    }
  }
}

export default componentName;