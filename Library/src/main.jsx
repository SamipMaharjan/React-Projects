import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
        </Routes>
      </BrowserRouter>
      {/* <div className="font-bold">
        Hello World atailwind.
      </div> */}
    </>
  </React.StrictMode>,
)
