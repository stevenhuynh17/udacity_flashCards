import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { getDecks } from '../utils/helpers'

class DeckList extends Component {
  state = {
    data: {}
  }

  componentDidMount() {
    getDecks()
      .then((info) => this.setState({
        data: JSON.parse(info)
      }))
  }

  render() {
    Object.values(this.state.data).map((data) => {
      const { title } = data
      console.log(title)
    })
    return(
      <View>
        {Object.values(this.state.data).map((data) => {
          const { title, questions } = data
          return(
            <View key={title}>
              <TouchableOpacity
                onPress={(info) => (this.props.navigation.navigate("Deck", { deck: data}))}>
                <Text>
                  {title}
                </Text>
                <Text>
                  {questions.length} cards
                </Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    )
  }
}

export default DeckList
