import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class NewDeck extends Component {
  render() {
    return(
      <View>
        <Text>What is the title of your new deck?</Text>
        <Text>Insert Deck Title</Text>
        <Text>Submit</Text>
      </View>
    )
  }
}
