import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../Styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

export default function Navigation_Bar( {toggleNavBar} ) {

    const toToggleNavBar = () => {
          toggleNavBar(); 
        }
        
  return (

    <div className='nav-bar'>

        <div className="left-side">

            <figure>
            <img src="https://lh3.googleusercontent.com/pw/AMWts8BWK1gWXfpPvTJZqTOdGwHII3O0IMEwBL8FES2poGd9P97_zczQv3ZCGwDNad3-3286nV_bvKLB-2DuoDhQRjbbyxYBHi1BLgCkQAu4J9dCblIv3f13xPCbWG4EfywxOwl1sxcS9uH0_JIUuqarrduf=w670-h532-no?authuser=0" alt="" />
            </figure>

        </div>
        {/* left side of the navbar  */}

        <div className="right-side">

          <div className="links">
            <Link to = "/"> Home </Link>
            <Link to = "/about"> About </Link>
            <Link to = "/menu"> Menu </Link>
            <Link to = "/contact"> Contact </Link>
          </div>
          {/* all the links  */}

          <div className="button">  
            <button id='reorder' onClick={ toggleNavBar }>
              <ReorderIcon/>
            </button>
          </div>
          {/* nav bar button  */}

        </div>
        {/* right side of the navbar  */}

    </div>
  )
}
