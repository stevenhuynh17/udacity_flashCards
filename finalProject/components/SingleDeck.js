import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { getDeck } from '../utils/helpers'

import TextButton from './TextButton'

class SingleDeck extends Component {
  render() {
    console.log(this.props)
    const { deck } = this.props
    const { title, questions } = deck
    return(
      <View>
        <Text>{title}</Text>
        <Text>{questions.length} cards</Text>
        <TextButton onPress={() => (navigation.navigate("NewCard", { id: title }))}>Add Card</TextButton>
        <TextButton onPress={() => (navigation.navigate("Quiz", { id: title }))}>Start Quiz</TextButton>
      </View>
    )
  }
}

function mapStateToProps(entries, { navigation }) {
  const { id } = navigation.state.params

  return {
    deck: entries[id]
  }
}

export default connect(mapStateToProps)(SingleDeck)
