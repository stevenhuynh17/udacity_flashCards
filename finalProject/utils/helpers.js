import { AsyncStorage } from 'react-native'

const DECK_KEY = "DECKS"
const data = {
  React: {
    id: "",
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    id: "2018-09-13",
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}
// AsyncStorage.clear()

export function initialize() {
  return AsyncStorage.setItem(DECK_KEY, JSON.stringify(data), () => {
    AsyncStorage.getItem(DECK_KEY)
  })
}

export function finishQuiz(title, input) {
  getDeck(title)
  .then((data) => {
    const info = {
      [title]: {
        ...data,
        id: input.completeQuiz
      }
    }
    return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify(info), () => getDeck())
  })
}

export function getDecks() {
  return AsyncStorage.getItem(DECK_KEY, (err, result) => {
    console.log(JSON.parse(result))
  })
}

export function getDeck(id) {
  return AsyncStorage.getItem(DECK_KEY)
  .then((data) => {
    result = JSON.parse(data)
    return result[id]
  })
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify(title), () => {
    getDeck()
  })
}

export function addCardToDeck(title, card) {
  getDeck(title)
  .then((data) => {
    const info = {
      [title]: {
        ...data,
        questions: data.questions.concat(card)
      }
    }
    return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify(info), () => getDeck())
  })
}

export function timeToString (time = Date.now()) {
  const date = new Date(time)
  const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  return todayUTC.toISOString().split('T')[0]
}
