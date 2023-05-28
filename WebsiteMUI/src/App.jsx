import { useState } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Menu from './Pages/Menu'
import PageNotFound from './Pages/PageNotFound'
import Header from './components/Layout/Header';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>

      <Routes>
        
        <Route index element = { <Home /> } />
        <Route path='/about' element = { <About />} />
        <Route path='/contact' element = { <Contact />} />
        <Route path='/menu' element = { <Menu />} />
        <Route path='*' element = { <PageNotFound />} />
         
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
