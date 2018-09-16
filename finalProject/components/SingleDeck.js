import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { getDeck } from '../utils/helpers'

import TextButton from './TextButton'

class SingleDeck extends Component {
  render() {
    const { deck, navigation } = this.props
    const { title, questions } = deck
    return(
      <View>
        <Text>{title}</Text>
        <Text>{questions.length} cards</Text>
        <TextButton onPress={() => (navigation.navigate("NewCard", { id: title }))}>Add Card</TextButton>
        {questions.length
          ? <TextButton onPress={() => (navigation.navigate("Quiz", { id: title }))}>Start Quiz</TextButton>
          : <View></View>
        }

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
