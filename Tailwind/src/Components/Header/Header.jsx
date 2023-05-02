import React from 'react'
import './Header.css'
import NavBar from '../NavBar/NavBar'
import SearchForm from '../SearchForm/SearchForm'

export default function Header() {
  return (
    <div className='holder'>
        <header className='header'>
          <NavBar/>
          <div className='header-content flex flex-c text-center text-white'> 
            <h2 className='header-title text-capitalize '>Find your book of choise</h2>
            <br />
          </div>
        </header>
    </div>
  )
}