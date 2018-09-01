import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'

import DeckList from './components/DeckList'
import SingleDeck from './components/SingleDeck'
import Quiz from './components/Quiz'

const MainNavigator = createStackNavigator({
  Decks: {
    screen: DeckList,
  },
  Deck: {
    screen: SingleDeck
  },
  Quiz: {
    screen: Quiz
  }
})

class App extends React.Component {
  render() {
    return (
      <MainNavigator />
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

export default App
