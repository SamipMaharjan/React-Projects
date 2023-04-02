import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';
import { QuizContext } from './Helpers/Context';
import './App.css'

function App() {
  const [gameState, setGameState] = useState('menu');
  const [ score, setScore ] = useState(0);

  useEffect( () => {
    console.log("Score: " + score);
  }, [ score ]);
  return (
    <div className="App">
      <h1>Quiz App</h1>
    <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
      
      { gameState === 'menu' && <MainMenu/>}
      { gameState === 'quiz' && <Quiz/>}
      { gameState === 'end screen' && <EndScreen/>}
    
    </QuizContext.Provider>
    </div>
  )
}

export default App
