import { useState } from 'react'
import './App.css'
import NavBar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Pages/About.jsx'
import Support from './Pages/Support'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar /> 
      <Hero />
      <About />
      <Support /> 

    </>
  )
}

export default App;