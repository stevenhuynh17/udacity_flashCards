import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux'

import { saveDeckTitle } from '../utils/helpers'
import { addDeck } from '../actions'

import TextButton from './TextButton'

class NewDeck extends Component {
  state = {
    name: ""
  }

  handleSubmit = () => {
    const { name } = this.state
    const { navigation } = this.props

    const data = {
      [name]: {
        title: name,
        questions: []
      }
    }
    this.props.dispatch(addDeck(data))
    saveDeckTitle(data)
    navigation.navigate("Deck", {id:name})
    this.setState({
      name: ""
    })
  }

  test = () => {
    this.setState({
      name: ""
    })
  }

  render() {
    console.log(this.state.name)
    return(
      <View>
        <Text>What is the title of your new deck?</Text>
        <View>
          <FormLabel>Deck Name</FormLabel>
          <FormInput value={this.state.name} onChangeText={(name) => this.setState({name})} />
          <FormValidationMessage>Required</FormValidationMessage>
          <TextButton onPress={this.handleSubmit}>Submit</TextButton>
        </View>
          <TextButton onPress={this.test}>Reset</TextButton>
      </View>
    )
  }
}

export default connect()(NewDeck)
