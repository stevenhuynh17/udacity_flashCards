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
    const card = {
      "questions": [
        {
          question: question,
          answer: answer
        }
      ]
    }
    addCardToDeck(id, card)
    this.props.navigation.navigate("Decks", {update: this.props.navigation.state.params.update})
  }

  render() {
    return(
      <View>
        <FormLabel>Question</FormLabel>
        <FormInput onChangeText={(question) => this.setState({question})} />
        <FormValidationMessage>Required</FormValidationMessage>
        <FormLabel>Answer</FormLabel>
        <FormInput onChangeText={(answer) => this.setState({answer})} />
        <FormValidationMessage>Required</FormValidationMessage>
        <TextButton onPress={this.handleSubmit}>Submit</TextButton>
    </View>
    )
  }
}
