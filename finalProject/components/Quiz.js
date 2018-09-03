import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { getDeck } from '../utils/helpers'

import TextButton from './TextButton'

export default class Quiz extends Component {
  state = {
    correct: 0,
    viewAnswer: false,
    currentQuestion: "",
    currentAnswer: "",
    questions: [],
    index: 0,
    cards: ""
  }

  componentDidMount() {
    const { navigation } = this.props
    const { id } = navigation.state.params

    getDeck(id)
    .then((data) => {
      const { questions } = data
      this.setState((state) => ({
        currentQuestion: questions[0].question,
        currentAnswer: questions[0].answer,
        questions: questions
      }))
    })
  }

  gradeQuiz = () => {
    const { correct, questions } = this.state
    return (correct / parseFloat(questions.length)) * 100
  }

  toggleAnswer = () => {
    this.setState((state) => ({
      viewAnswer: !state.viewAnswer
    }))
  }

  toggleCorrect = () => {
    const { questions, index } = this.state
    const position = questions[index + 1]

    this.setState((state) => ({
      correct: state.correct + 1,
      index: state.index + 1,
      currentQuestion: position === undefined ? "" : questions[state.index + 1].question,
      currentAnswer:  position === undefined ? "" : questions[state.index + 1].answer
    }))
  }

  toggleIncorrect = () => {
    const { questions, index } = this.state
    const position = questions[index + 1]

    this.setState((state) => ({
      index: state.index + 1,
      currentQuestion: position === undefined ? "" : questions[state.index + 1].question,
      currentAnswer:  position === undefined ? "" : questions[state.index + 1].answer
    }))
  }

  checkComplete = () => {
    const { index, questions } = this.state
    console.log("QUESTIONS", questions)
    return index === questions.length
  }

  render() {
    // const { navigation } = this.props
    // const { deck } = navigation.state.params
    // console.log(deck)
    console.log(this.state)
    const { currentQuestion, currentAnswer, viewAnswer, correct, questions } = this.state
    return(
      <View>
        {this.checkComplete()
          ? <View>
              <Text>Quiz Complete!!!</Text>
              <Text>Your score: {this.gradeQuiz()}%</Text>
            </View>
          : <View>
              <Text>{correct} / {questions.length}</Text>
              {
                viewAnswer === false
                ? <View>
                    <Text>{currentQuestion}</Text>
                    <TextButton onPress={this.toggleAnswer}>View Answer</TextButton>
                  </View>

                : <View>
                    <Text>{currentAnswer}</Text>
                    <TextButton onPress={this.toggleAnswer}>View Question</TextButton>
                  </View>
              }
              <TextButton onPress={this.toggleCorrect}>Correct</TextButton>
              <TextButton onPress={this.toggleIncorrect}>Incorrect</TextButton>
            </View>
        }

      </View>
    )
  }
}
