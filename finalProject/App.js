import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import reducer from './reducers'
import { setLocalNotification } from './utils/helpers'

import DeckList from './components/DeckList'
import SingleDeck from './components/SingleDeck'
import Quiz from './components/Quiz'
import NewDeck from './components/NewDeck'
import NewCard from './components/NewCard'

const Tabs = createBottomTabNavigator({
  Decks: {
    screen: DeckList
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck'
    }
  }
})

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs
  },
  Deck: {
    screen: SingleDeck
  },
  Quiz: {
    screen: Quiz
  },
  NewCard: {
    screen: NewCard
  }
})

const store = createStore(reducer)

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
