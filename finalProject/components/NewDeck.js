import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux'

import { saveDeckTitle } from '../utils/helpers'
import { addDeck } from '../actions'

import TextButton from './TextButton'

class NewDeck extends Component {
  state = {
    text: ""
  }

  handleSubmit = () => {
    const title = this.state.text
    this.props.dispatch(addDeck(this.props.text))
    saveDeckTitle(title)
    this.setState({
      text: ""
    })
    this.props.navigation.navigate("Deck", {id:title})
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

function mapStateToProps(entries) {
  return {
    entries
  }
}

export default connect(mapStateToProps)(NewDeck)
