import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import { QuizContext } from './Helpers/Context';

function App() {
  const [gameState, setGameState] = useState('menu');

  function quiz(){
    setGameState('quiz');
  }

  function endScreen(){
    setGameState('end screen');
  }

  function menu(){
    setGameState('menu');
  }

  return (
    <div className="App">
      <h1>Quiz App</h1>
    <QuizContext.Provider value={{ gameState, setGameState }}>
      
      { gameState === 'menu' && <MainMenu quiz={quiz} />}
      { gameState === 'quiz' && <Quiz/>}
      { gameState === 'end screen' && <EndScreen/>}
    
    </QuizContext.Provider>
    </div>
  )
}

export default App
