import React, { Component } from 'react'
import { View, Text } from 'react-native'

import TextButton from './TextButton'

export default class SingleDeck extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   console.log(navigation.state.params)
  // }

  render() {
    const { navigation } = this.props
    const { deck } = navigation.state.params
    const { title, questions } = deck

    return(
      <View>
        <Text>{title}</Text>
        <Text>{questions.length} cards</Text>
        <TextButton>Add Card</TextButton>
        <TextButton onPress={() => (navigation.navigate("Quiz"))}>Start Quiz</TextButton>
      </View>
    )
  }
}
