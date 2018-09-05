import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { getDeck } from '../utils/helpers'

import TextButton from './TextButton'

export default class SingleDeck extends Component {
  state = {
    title: "",
    cards: ""
  }

  componentDidMount() {
    const { navigation } = this.props
    const { id } = navigation.state.params

    getDeck(id)
    .then((data) => {
      this.setState((state) => ({
        title: data.title,
        cards: data.questions
      }))
    })
  }

  render() {
    const { title, cards } = this.state
    const { navigation } = this.props
    const { id } = navigation.state.params

    return(
      <View>
        <Text>{title}</Text>
        <Text>{cards.length} cards</Text>
        <TextButton onPress={() => (navigation.navigate("NewCard", { id: id, update: this.props.navigation.state.params.update }))}>Add Card</TextButton>
        <TextButton onPress={() => (navigation.navigate("Quiz", { id: id }))}>Start Quiz</TextButton>
      </View>
    )
  }
}
