import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { addCardToDeck } from '../utils/helpers'

import TextButton  from './TextButton'

export default class NewCard extends Component {
  state = {
    question: "",
    answer: ""
  }

  handleSubmit = () => {
    const { question, answer } = this.state
    const { navigation } = this.props
    const { id } = navigation.state.params
    console.log("TESTING")
    console.log(id)
    const card = {
      question: question,
      answer: answer
    }
    addCardToDeck(id, card)
    this.props.navigation.navigate("Decks")

  }

  render() {
    return(
      <View>
        <FormLabel>Question</FormLabel>
        <FormInput onChangeText={(text) => this.setState({text})} />
        <FormValidationMessage>Required</FormValidationMessage>
        <FormLabel>Answer</FormLabel>
        <FormInput onChangeText={(text) => this.setState({text})} />
        <FormValidationMessage>Required</FormValidationMessage>
        <TextButton onPress={this.handleSubmit}>Submit</TextButton>
    </View>
    )
  }
}
