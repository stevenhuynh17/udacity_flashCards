import React, { Component } from 'react'
import { View, Text } from 'react-native'

import TextButton from './TextButton'

export default class Quiz extends Component {
  state = {
    correct: null,
    question: "",
    answer: "",
    cards: ""
  }

  componentDidMount() {
    
  }

  cardsLeft = () => {

  }

  render() {
    const { navigation } = this.props
    const { deck } = navigation.state.params
    console.log(deck)
    console.log(this.state)
    return(
      <View>
        <Text>How many cards header</Text>
        <Text>Question or Answer</Text>
        <TextButton>View Answer or Question</TextButton>
        <TextButton>Correct</TextButton>
        <TextButton>Incorrect</TextButton>
      </View>
    )
  }
}
