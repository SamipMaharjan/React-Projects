import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>

      <Routes>

        <Route index element = { <Home /> } />
        <Route path='' />
      </Routes>
    
    </BrowserRouter>
    <h1>Restaurant Website</h1>
        <Layout>
          SamipMahrjan
        </Layout>
    </>
  )
}

export default App
