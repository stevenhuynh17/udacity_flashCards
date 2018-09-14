import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, QUIZ_COMPLETE } from '../actions'

function entries(state = {}, action) {
  switch(action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks
      }

    case ADD_DECK :
      return {
        ...state,
        ...action.deck
      }

    case ADD_CARD :
      return {
        ...state,
        [action.deck]: {
          ...state[action.deck],
          questions: state[action.deck].questions.concat(action.card)
        }

      }

    case QUIZ_COMPLETE :
      return {
        ...state,
        [action.deck]: {
          ...state[action.deck],
          id: action.timeStamp.completeQuiz
        }
      }

    default :
      return state
  }
}

export default entries
