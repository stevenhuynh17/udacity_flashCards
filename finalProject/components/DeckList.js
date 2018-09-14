import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { getDecks, initialize, timeToString } from '../utils/helpers'
import { receiveDecks } from '../actions'

class DeckList extends Component {
  state = {
    quizComplete: false
  }

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

  dailyQuiz = () => {
    let complete = false
    Object.values(this.props.entries).map((data) => {
      const { id } = data
      if(id === timeToString()) {
        console.log("CHECKING")
        complete = true
      }
    })
    console.log(complete)
    return complete
  }

  render() {
    return(
      <View>
        {
          console.log("TESTING")
        }
        {this.dailyQuiz()
          ? <View>
              <Text>You studied already, but study more!</Text>
            </View>
          : <View>
              <Text>STUDY NOW! START A QUIZ!</Text>
            </View>
        }
        {Object.values(this.props.entries).map((data) => {
          const { title, questions, id } = data
          console.log(id)
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
