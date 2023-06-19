import { useState } from 'react'
import './App.css'
import ACCORDION from './Components/ACCORDION'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ACCORDION></ACCORDION>
    </>
  )
}

export default App
