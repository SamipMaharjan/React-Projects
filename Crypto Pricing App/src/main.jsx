import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Show from './Pages/Show'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element = {<Home/>}/>
        <Route path = "/:id" element={<Show/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
