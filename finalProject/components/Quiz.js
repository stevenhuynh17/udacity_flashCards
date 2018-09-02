import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { getDeck } from '../utils/helpers'

import TextButton from './TextButton'

export default class Quiz extends Component {
  state = {
    correct: null,
    viewAnswer: false,
    currentQuestion: "",
    currentAnswer: "",
    cards: ""
  }

  componentDidMount() {
    const { navigation } = this.props
    const { id } = navigation.state.params

    getDeck(id)
    .then((data) => {
      const { questions } = data
      this.setState((state) => ({
        currentQuestion: questions[0].question,
        currentAnswer: questions[0].answer
      }))
    })
  }

  cardsLeft = () => {

  }

  toggleAnswer = () => {
    this.setState((state) => ({
      viewAnswer: !state.viewAnswer
    }))
  }

  render() {
    // const { navigation } = this.props
    // const { deck } = navigation.state.params
    // console.log(deck)
    console.log(this.state)
    const { currentQuestion, currentAnswer, viewAnswer } = this.state
    return(
      <View>
        <Text>How many cards header</Text>
        {
          viewAnswer === false
          ? <Text>{currentAnswer}</Text>
          : <Text>{currentQuestion}</Text>
        }
        <TextButton onPress={this.toggleAnswer}>View Answer or Question</TextButton>
        <TextButton>Correct</TextButton>
        <TextButton>Incorrect</TextButton>
      </View>
    )
  }
}
