import { useState, createContext } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Arraytesting from './Components/Arraytesting';
import Child1 from './Components/Child1';
import Child2 from './Components/Child2';

export const ThemeContext = createContext(); 

function App() {
  const [name, setName] = useState('Samip Maharjan');

  return (
    <>
    <h1>{name}</h1>
      <ThemeContext.Provider value = {{ name, setName }}>
        <Child1></Child1>
        <Child2></Child2>
      </ThemeContext.Provider>
    </>
  )
}

export default App
