import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Typography } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Typography variant="h1">Hello Material UI</Typography>
    </>
  )
}

export default App
