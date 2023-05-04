import React from 'react'
import './Header.css'
import NavBar from '../NavBar/NavBar'
import SearchForm from '../SearchForm/SearchForm'


export default function Header() {
  return (
    <div className='holder'>
        <header className='header'>
          <NavBar/>
          <div className='header-content flex flex-col justify-around px-52 py-40 text-center text-white'> 
            <h2 className='header-title text-capitalize fs-26 fw-9'>Find your book of choise</h2>
            <br />

            <p className='header-text fs-18 fw-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi accusamus eos ullam, quis itaque illo hic cumque ratione a incidunt velit ut repellendus. Tempore deleniti expedita sit eligendi minus a?</p>

            <SearchForm/>
          </div>

        </header>
    </div>
  )
}