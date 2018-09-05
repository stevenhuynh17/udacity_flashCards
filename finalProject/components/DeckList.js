import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { getDecks, initialize } from '../utils/helpers'

class DeckList extends Component {
  state = {
    data: {}
  }

  componentDidMount() {
    getDecks()
    .then((info) => {
      console.log(JSON.parse(info))
      if(info) {
        this.setState({
          data: JSON.parse(info)
        })
      } else {
        console.log("NOPE")
        initialize()
        .then((start) => {
          this.setState({
            data: JSON.parse(start)
          })
        })
      }
    })
  }

  test = () => {
    console.log("test")
  }

  updateList = () => {
    console.log("INSIDE UPDATELIST")
    this.setState({
      dummy: ""
    })
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
                onPress={(info) => (this.props.navigation.navigate("Deck", { id: title, update: this.updateList}))}>
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
