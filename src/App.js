import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import WelcomePage from './components/WelcomePage'
import GamePage from './components/GamePage'
import TriviaContainer from './containers/TriviaContainer'

class App extends Component {
  render() {
    return (
    <div className="App">
      <Header />
      <WelcomePage />
      <GamePage />
      <TriviaContainer />
    </div>
  );
  }
}


export default App;
