import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { getDecks, initialize } from '../utils/helpers'
import { receiveDecks } from '../actions'

class DeckList extends Component {
  componentDidMount() {
    getDecks()
    .then((info) => {
      if(info) {
        this.props.dispatch(receiveDecks(JSON.parse(info)))
      } else {
        console.log("NOPE")
        initialize()
        .then((start) => {
          this.props.dispatch(receiveDecks(JSON.parse(info)))
        })
      }
    })
  }

  render() {
    return(
      <View>
        {Object.values(this.props.entries).map((data) => {
          const { title, questions } = data
          return(
            <View key={title}>
              <TouchableOpacity
                onPress={(info) => (this.props.navigation.navigate("Deck", { id: title }))}>
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

function mapStateToProps(entries) {
  console.log(entries)
  return {
    entries
  }
}

export default connect(mapStateToProps)(DeckList)
