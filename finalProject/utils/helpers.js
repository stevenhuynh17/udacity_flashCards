import { AsyncStorage } from 'react-native'

const DECK_KEY = "DECKS"
const data = {
  React: {
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

export function getDecks() {
  try {
    return AsyncStorage.getItem(DECK_KEY)
  } catch(error) {
    console.log(error)
  }
}

export function getDeck(id) {
  return AsyncStorage.getItem(DECK_KEY)
  .then((data) => {
    result = JSON.parse(data)
    return result[id]
  })
}

export function saveDeckTitle(title) {
  data = {
    [title]: {
      title: title,
      questions: []
    }
  }
  return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify(data), () => {
    getDeck()
  })
}

export function addCardToDeck(title, card) {
  data = {
    [title]: card
  }
  console.log(data)
  return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify(data))
}
