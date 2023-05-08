import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css'
import logoImg from "../../images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function NavBar() {
  const [ toggleMenu, setToggleMenu ] = useState(false);
  const handleNavBar = () => setToggleMenu( !toggleMenu );

  return (
    <nav className='navbar' id='navbar'>

      <div className="container navbar-content flex">

        {/* Application logo and navbar button   */}
        <div className="brand-and-toggler flex flex-sb">

          <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt="site logo" />
            {/* Application Logo  */}

            <span className='text-uppercase fw-7 fs-24 ls-1'>BookHub</span>
            {/* App title */}
          </Link>
          {/* Nested the title and logo in a Link,
           so when its clicked it navigates back to the home page */}

          {/* Navigation bar Button with an icon from react-icons */}
          <button type= "button" className='navbar-toggle-btn' onClick={handleNavBar}>

            <HiOutlineMenuAlt3 size = {35} style = { { 
              color: `${toggleMenu ? "#ffffff" : "#010101"}`
            }} />
            {/* button icon  */}

          </button>
          {/* Navbar button  */}

        </div>
        {/* brand and toggler  */}

        <div className= { toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>

          <ul className='navbar-nav'>

            <li className='nav-item'>
              <Link to = "book" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'>Home</Link>
            </li>

            <li className='nav-item'>
              <Link to = "about" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'>about
              </Link>
            </li>

          </ul>
        </div>
        {/* navbar collapse  */}

      </div>
        {/* container for links?/ */}


    </nav>
    // {/* navbar  */}

)
}
