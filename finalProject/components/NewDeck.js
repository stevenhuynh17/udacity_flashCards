import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { saveDeckTitle } from '../utils/helpers'

import TextButton from './TextButton'

export default class NewDeck extends Component {
  state = {
    text: ""
  }

  handleSubmit = () => {
    const title = this.state.text
    saveDeckTitle(title)
    console.log(this.props.navigation.state.params)
    this.props.navigation.navigate("NewCard", {id:title})
  }

  render() {
    console.log(this.state.text)
    return(
      <View>
        <Text>What is the title of your new deck?</Text>
        <FormLabel>Deck Name</FormLabel>
        <FormInput onChangeText={(text) => this.setState({text})} />
        <FormValidationMessage>Required</FormValidationMessage>
        <TextButton onPress={this.handleSubmit}>Submit</TextButton>
      </View>
    )
  }
}
