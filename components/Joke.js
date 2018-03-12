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

  handleErr = err => {
    this.setState({
      error: true
    })
  }

  fetchJoke = () => {
    this.setState({
      loading: true,
    })
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(({data}) => {
        this.handleData(data)
      })
      .catch(err => {
        this.handleErr()
      })
  }

  componentDidMount () {
    this.fetchJoke()
  }

  render() {
    if (this.state.loading) {
      return (
        <View>
          <Text>Getting a joke for you . . </Text>
        </View>
      );
    } else if (this.state.error) {
      eturn (
        <View>
          <Text>Oops, something wrong . . </Text>
        </View>
      );
    } else {
      return (
        <View style={jokeCardStyles}>
          <Image source={{ 
            uri: this.state.joke.icon_url, 
          }}
          style={{
            height: 100,
            width: 100,
          }}/>
          <Text style={jokeTextStyles}>{ this.state.joke.value }</Text>
        </View>
      );
    }
  }
}

const jokeCardStyles = {
  backgoundColor: '#ffffff',
  padding: 16,
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const jokeTextStyles = {
  textAlign: 'center',
  fontSize: 16,
}


export default componentName;