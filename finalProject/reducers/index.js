import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

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
      console.log(action)
      return {
        ...state,
        [action.deck]: {
          ...state[action.deck],
          questions: state[action.deck].questions.concat(action.card)
        }

      }

    default :
      return state
  }
}

export default entries
