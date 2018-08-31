import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Quiz extends Component {
  render() {
    return(
      <View>
        <Text>How many cards header</Text>
        <Text>Question or Correct</Text>
        <Text>View Answer or Question</Text>
        <Text>Correct</Text>
        <Text>Incorrect</Text>
      </View>
    )
  }
}
