import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
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

  static navigationOptions = {
    title: 'Chuck Norris Jokes!',
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
        <View style={jokeCardStyles}>
          <Text>Getting a joke for you . . </Text>
        </View>
      );
    } else if (this.state.error) {
      return (
        <View style={jokeCardStyles}> 
          <Text>Oops, something wrong . . </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.jokeCard}>
          <Image source={{ 
            uri: this.state.joke.icon_url, 
          }}
          style={{
            height: 100,
            width: 100,
          }}/>
          <Text style={styles.jokeText}>{ this.state.joke.value }</Text>
          <TouchableOpacity style={stylesbutton} onPress={ () => this.fetchJoke() }>
            <Text style={{ color: '#ffffff' }}>Get Another Jokes!</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => this.props.navigation.navigate('About') }>
            <Text style={{
              color: 'blue',
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid'
            }}>About</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  jokeCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderRadius: 8,
    borderWidth: 3,
    margin: 16,
  },
  jokeText: {
    textAlign: 'center',
    fontSize: 16,
  },
  button: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    margin: 16,
    backgroundColor: '#DD2C00',
  }
})

export default componentName;