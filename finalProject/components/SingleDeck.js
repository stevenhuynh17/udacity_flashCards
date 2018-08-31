import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class SingleDeck extends Component {
  render() {
    return(
      <View>
        <Text>Deck Title</Text>
        <Text>Number of cards</Text>
        <Text>Add Card</Text>
        <Text>Start Quiz</Text>
      </View>
    )
  }
}
